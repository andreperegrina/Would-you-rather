# Project

A poll application of the popular game **Would you rater?** 

**Demo:** https://andreperegrina.github.io/Would-you-rather

## Project structure

```
Project structure
src
├── actions -- Folder that contains all actions used thorught all the routes
├── components -- Folder that contains all shareable components thorught all the routes 
├── pages -- Folder that contains all the route pages of the application
├── reducer -- Folder that contains all reducers used thorught all the routes
├── routers -- Folder that contains the logic for the private and public routes 
├── utils -- Folder that contains shared logic and services like API for the whole application 
└── store -- File that centralize and store all the data used thorught all the routes

Pages structure
route
├── sub-route -- This folder contains all the subpages from the route, using the same structure as the Page structure
├── components -- This folder contains all the components used in this route
├── route.util.js -- This files containt logic functions util for the route
├── route.css -- This files contain the style of the route
└── route.page.js -- This files contain the route code for the page
```

## Redux Store

Must part of the project I'll try to create isolated components that doesn't require the used of redux, in this way 
I can re-used this components in another routes. That's why I let almost all of the redux information being handle 
by the **.page.js** files. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Credits

Using **React-semantic** for the view style https://react.semantic-ui.com/
