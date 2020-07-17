import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

class QuestionDetailPage extends Component {
   state = {
      id: undefined
   };

   componentDidMount = () => {
      const {location}=this.props;
      if(location){
         const {params}=location;
         console.log(location);
      }
   };

   render() {
      return (
         <div>
            Detail wow

         </div>
      );
   }
}


QuestionDetailPage.propTypes = {};

export default withRouter(QuestionDetailPage);
