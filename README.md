# Putrid Pomodoros

## Click [here](https://putridpomodoros-app.herokuapp.com/) to view the project!

## Table of Contents

  - [Introduction](#Introduction)
  - [Set Up and Installation](#Set-Up)
  - [Illustrations](#Illustrations)
  - [Technologies](#Technologies)
  - [Possible Future Extensions](#Possible-Future-Extensions)
  - [Contributors](#Collaborators)

## Introduction

Putrid Pomodoros is a revolutionary web application (that nobody has ever thought of before) that aggregates information about movies and displays all of it in an aesethetically pleasing interface.

In this current iteration of the product, we have added the following functionality:

- API Data Fetching
- Search Functionality
- Device Adaptability
- Cypress End-to-End Testing

We Cypress testing to ensure that our product behaves the way we want it to in the final production version deployed on Heroku.

## Illustrations

### Loading and Viewing API Data on the Home page:

![](https://media.giphy.com/media/WwqLFJBuaGelUrvbaF/giphy.gif)

### Search Functionality:

![](https://media.giphy.com/media/hhALYg9MU8wO405Ysx/giphy.gif)

### Device Adaptability

![](https://media.giphy.com/media/xhfOkVo29MsIBjWvH2/giphy.gif)

## Setup and Installation

- We deployed our application to Heroku, so the current production version of the application can always be viewed at the following link: `https://putridpomodoros-app.herokuapp.com/`.
- If you would like to modify the project, please follow the instructions below.
- Fork the project repository and clone it down by posting the following command in your terminal: `git clone git@github.com:J-Dunny/putridpomodoros.git git [what you want to name the repo]`.
- Change into the directory created and then run `npm install` in your terminal to install all of the dependencies.
- Since the production version of the application will be cloned down by default, you will need to change the following section in the package.json file to be able to work on the application locally:

Change this:

```
"scripts": {
    "cypress": "./node_modules/.bin/cypress open",
    "start": "node server/server.js",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

To this:

```
  "scripts": {
    "cypress": "./node_modules/.bin/cypress open",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

- Once the previous step has been completed, cd in the root folder.  Then type "npm start" in your terminal, and hit enter and the application will launch in your browser on http://localhost:3000 by default if that port is available.

## Technologies

- JavaScript
- React
- React Router
- CSS3
- HTML5
- node.js
- Express Server
- Cypress Testing
- Heroku

## Future Extensions

Here are some future features we would like to add in later editions of the product:

- User Logins
- User favoriting and Ratings
- Trailer Videos
- Creative CSS Aesthetics and Branding

## Contributors

- Jake Dunafon | https://github.com/J-Dunny

- Rory Magee | https://github.com/roryemagee1

