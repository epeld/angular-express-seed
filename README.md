# The Super Fantastic Chat App

A super simple chat application that you should be able to download and fire up immediately.

### How to Install Dependencies
> npm install

### Running the app

Start the server:
> npm run server

Run a listener client:
> npm run listen

### Publishing Messages
You can publish messages by sending a http POST to /api/ with the header 'Content-Type: application/json'
and a JSON object with *at least* the field 'message' available on it.

### Using the GUI
Once the server is up and running. Navigate to http://localhost:3000 and you should see the GUI.
It is still work in progress and non-functional at this stage.

### Running tests

Coming soon!

## Directory Layout
    
    app.js              --> app config
    package.json        --> for npm
    public/             --> all of the files to be used in on the client side
      css/              --> css files
        app.css         --> default stylesheet
      img/              --> image files
      js/               --> javascript files
        app.js          --> declare top-level app module
        controllers.js  --> application controllers
        directives.js   --> custom angular directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
        lib/            --> angular and 3rd party JavaScript libraries
          angular/
            angular.js            --> the latest angular js
            angular.min.js        --> the latest minified angular js
            angular-*.js          --> angular add-on modules
            version.txt           --> version number
    routes/
      api.js            --> route for serving JSON
      index.js          --> route for serving HTML pages and partials
    views/
      index.jade        --> main page for app
      layout.jade       --> doctype, title, head boilerplate
      partials/         --> angular view partials (partial jade templates)
        partial1.jade
        partial2.jade



## License
GPL

## TODOs

- Store message history in local or sesseion storage. Store also username there
- Allow filtering by tag, text match
- Allow templating a message; adding custom tags etc