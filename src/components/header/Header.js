// Libraries
import React from 'react';
import {Dropdown, Image, Menu} from "semantic-ui-react";
import PropTypes from "prop-types";

const Header = ({onClickItem, onClickLogout, active, user = {}}) => {

   // This function will handle when the user click on a menu item
   const handleItemClick = (route) => {
      if (onClickItem) {
         onClickItem(route);
      }
   };

   // This function will handle when the user click on the log out button
   const handleItemClickLogOut = () => {
      if (onClickLogout) {
         onClickLogout();
      }
   };

   return (
      <div>
         <Menu pointing secondary>
            <Menu.Item
               name='Home'
               active={active === '/'}
               onClick={() => handleItemClick('/')}
            />
            <Menu.Item
               name='New question'
               active={active === '/add'}
               onClick={() => handleItemClick('/add')}
            />
            <Menu.Item
               name='Leader board'
               active={active === '/leaderboard'}
               onClick={() => handleItemClick('/leaderboard')}
            />
            <Menu.Menu position='right'>
               <Dropdown
                  trigger={<span><Image avatar src={user.avatarURL}/> {user.name}</span>}
                  item>
                  <Dropdown.Menu>
                     <Dropdown.Item onClick={handleItemClickLogOut}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
               </Dropdown>
            </Menu.Menu>
         </Menu>
      </div>
   );
};

Header.propTypes = {
   user: PropTypes.object,
   active: PropTypes.string,
   onClickItem: PropTypes.func,
   onClickLogout: PropTypes.func,
};

export default Header;
