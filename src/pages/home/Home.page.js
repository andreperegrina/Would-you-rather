import React, {Component} from 'react';
import {Route} from "react-router-dom";
import {connect} from "react-redux";

// Components
import QuestionsPage from './questions/Questions.page';
import QuestionsDetailPage from './question-detail/QuestionDetail.page';
import Header from "../../components/header/Header";
import questionActions from "../../actions/questions.action";
import authenticationActions from "../../actions/authentication.action";

class HomePage extends Component {
   componentDidMount() {
      this.props.loadQuestions();
   }

   handleChangeRoute = (route) => this.props.history.push(route);
   handleLogout = () => {
      this.props.logout();
   };

   render() {
      const {location = {}, userAuthenticated} = this.props;
      return (
         <div>
            <Header active={location.pathname} onClickItem={this.handleChangeRoute} onClickLogout={this.handleLogout}
                    user={userAuthenticated}/>
            <Route path='/' component={QuestionsPage} exact={true}/>
            <Route path="/questions/:id" component={QuestionsDetailPage} exact={true}/>
         </div>
      );
   }
}

HomePage.propTypes = {};

const mapStateToProps = (state) => {
   const users = state.users.data;
   const {id} = state.authentication.user;
   return {
      users,
      userAuthenticated: users[id]
   }
};

const mapDispatchToProps = (dispatch) => ({
   logout: () => dispatch(authenticationActions.logout()),
   loadQuestions: () => dispatch(questionActions.load()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
