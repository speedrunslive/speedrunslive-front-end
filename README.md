SpeedRunsLive Front End
=======================

Node + React + Sass.

Setup
-----

Clone the repository and navigate to the project then run the following commands:

Note for Windows users: The project must be in your /users/ folder for volume mounting.

```Shell
# For development
$ docker-compose run --rm npm-install
$ docker-compose up app
```

You can find the IP of your docker machine by running `docker-machine ip`
Just hit that IP or add it to your /etc/hosts file.

Anytime you add packages you will need to run `docker-compose run --rm npm-install`

Development
-----------

Make sure to set the API url to whatever you're using for the API in /src/config. This project will only work with version 2 of the API, so you will have to boot up the API locally for now.

For server side rendering in development, the css will be applied after the markup. This won't happen in production because it will be using bundle.css. We are keeping the styles client side for hot reloading in development.

React components
----------------

Make sure to keep presentational components and container components separate. The presentational components should take input for props and contain no logic if possible.

Unit Testing
------------

`docker-compose run --rm mocha`

Please unit test any components or functions that you can.