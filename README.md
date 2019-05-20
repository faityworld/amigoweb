This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It is deployed here [https://amigoweb.herokuapp.com/](https://amigoweb.herokuapp.com/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.




### `npm run build`

Builds the app for production to the `build` folder.<br>


The application  can display the following pages:
1. / - main (any information of the same type, like lorem ipsum)
2. / login - login and password input page
3. /news for this page was used https://newsapi.org 
4. /profile - free text page, unavailable without authorization
In the header and footer are  implemented links:
- To main (/)
- News (/news)
- Profile (/profile)
If the user clicks on the “profile” page and he is not “authorized” - transfer to the / login page
Login form (/login) accepts “fake” data - username: Admin, password: 12345
If other data is entered, the messages are displayed:
- The username or password entered is not correct
If correct data is entered, then transfer to page / profile
User authorization information is stored in localStorage, as a simple parameter true / false. The database is not implemented.
Stack React and Redux.