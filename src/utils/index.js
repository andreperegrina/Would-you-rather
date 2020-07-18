export const convertObjectToArray = (object) => {
   return Object.keys(object).map((e) => object[e]);
};

export const isEmptyObject = (object) => Object.keys(object).length <= 0;
