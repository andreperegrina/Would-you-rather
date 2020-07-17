import React from 'react';
import {Dropdown, Image, Menu} from "semantic-ui-react";
import PropTypes from "prop-types";

const Header = ({onClickItem, onClickLogout, active, user = {}}) => {

   const handleItemClick = (route) => {
      if (onClickItem) {
         onClickItem(route);
      }
   };

   const handleItemClickLogOut = () => {
      if (onClickLogout) {
         onClickLogout();
      }
   };

   return (
      <div>
         <Menu pointing secondary>
            <Menu.Item
               name='home'
               active={active === '/'}
               onClick={() => handleItemClick('/')}
            />
            <Menu.Item
               name='messages'
               active={active === '/messages'}
               onClick={() => handleItemClick('messages')}
            />
            <Menu.Item
               name='friends'
               active={active === '/friends'}
               onClick={() => handleItemClick('friends')}
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
