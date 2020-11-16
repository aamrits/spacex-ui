# Getting Started with Create React App

This project was bootstrapped `with` [Create React App](https://github.com/facebook/create-react-app).

**This is an assignment which uses spaceX API.**

## Installation
Do `git clone`.
Cd into the folder and do `npm install`.
Do `npm start`. The project will run in the browser `http://localhost:3000`.

## Features
1. In the landing page, `https://api.spaceXdata.com/v3/launches?limit=100` API gets called.

2. The application uses **React Hooks** and **Flexbox** and SCSS for styling.

3. In this app, `filters` are implemented based on 
a. Launch Year.
b. Successful Launch.
c. Successful Landing.

4. The card is designed and data is pulled from API
a. mission_name
b. mission_id
c. launch_success
d. land_success
e. launch_year

5. The responsive layout is used for
a. Mobile view:- single column layout till 700px.
b. Tablet view:- 2 column layout till from 701px - 1024px.
c. Desktop view:- 4 column layout till from 1025px - 1440px.
d. For more than 1440px, layout is centered with max-width: 1440px.