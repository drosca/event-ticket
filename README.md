# Event Ticket Management

Simple Event Ticket Management for AngularJS using Webpack. Should be noted that apart from the
pre-installed angular package, this workflow is pretty much generic.

* Heavily commented webpack configuration with reasonable defaults.
* ES6, and ES7 support with babel.
* Source maps included in all builds.
* Development server with live reload.
* Production builds with cache busting.
* Code coverage when tests are run.
* No gulp and no grunt, just npm scripts.

>Warning: Make sure you're using the latest version of Node.js and NPM

### Quick start

```bash
# clone our repo
$ git clone https://github.com/drosca/event-ticket my-app

# change directory to your app
$ cd my-app

# install the dependencies with npm
$ npm install

# start the server
$ npm start
```

go to [http://localhost:8080](http://localhost:8080) in your browser.

# Getting Started

## Dependencies

What you need to run this app:
* `node` and `npm` (Use [NVM](https://github.com/creationix/nvm))
* Ensure you're running Node (`v4.1.x`+) and NPM (`2.14.x`+)

## Running the app

After you have installed all dependencies you can now run the app with:
```bash
npm start
```

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:8080`.

## Developing

### Build files

* build files and watch: `npm start`

### Frontend

For frontend I have used `bootstrap` library. Bootstrap is an open source toolkit for developing with `HTML, CSS, and JS`.

### Styles

For styles I have used `sass` preprocessor. Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.

### Application

When you open the application, you will see the page with `list of events`.
If you want to see each `Event` information, press on the name of `Event` from the list.
For `editing` each event, press `Edit` link from the list.
For `creating a new event`, press `Create Event` button.

On the `Event View` page, you will see the number of tickets `(Available, Redeemed and Total Number)`.
Also you can `Download CSV` with all available tickets.
If you want to check the status of ticket, type the `ticket id` in `input` and press `Check` button.
Then you will see the label with ticket `status`.


