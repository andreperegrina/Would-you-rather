/**
 * @description Convert users object to list of options
 * @param {object} users
 * @returns {array} Array of options from the users object
 */
export const convertUsersToOptions = (users) => {
   return Object.keys(users).map((key) => ({
      key: users[key].id, value: users[key].id, text: users[key].name,
      image: {avatar: true, src: users[key].avatarURL},
   }));
};
