# SpeedRunsLive Front End

Node + React + Sass.

## Setup

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

## Development

Make sure to set the API url to whatever you're using for the API in /src/config. This project will only work with version 2 of the API, so you will have to boot up the API locally for now.

For server side rendering in development, the css will be applied after the markup. This won't happen in production because it will be using bundle.css. We are keeping the styles client side for hot reloading in development.

## Coding Practices

* **Route Handlers**: React components contained under each route (eg. landing, races...). Handle entry to screen. Contain no logic, only common components like a common navBar among children.
* **containers**: React components contained under each container dir. They are _smart_ meaning they have logic such as dispatching API calls, understand program state and logic of the program.
* **components**: React components contained under each component dir. They are presentational and should take input for props and contain no logic if possible. No dependencies.

### Folder Structure
Based from [this](https://gist.github.com/ryanflorence/daafb1e3cb8ad740b346#how-it-works) article. 

The goal is for each route (including children) to get a unique directory. Shared components are put at lowest level possible where they are needed by two children.

```
src
├── routes
│   └── landing 
│       ├── components
│       │   ├── navigation
│       │   ├── header
│       │   └── footer
│       ├── routes
│       │   ├── races
│       │   │   ├── components
│       │   │   │   └── racesNav
│       │   │   ├── routes
│       │   │   │   └── live
│       │   │   │       ├── components
│       │   │   │       │   └── liveRaces
│       │   │   │       │       ├── index.js
│       │   │   │       │       └── liveRaces.scss
│       │   │   │       ├── containers
│       │   │   │       │   └── liveRaces
│       │   │   │       │       ├── index.js
│       │   │   │       │       ├── reducer.js
│       │   │   │       │       └── actions.js
│       │   │   │       └── index.js
│       │   │   ├── shared
│       │   │   │   ├── components
│       │   │   │   └── utils
│       │   │   └── index.js
│       │   └── streams
│       │       ├── components
│       │       └── containers
│       └── index.js
└── routes.js
```

## Unit Testing

`docker-compose run --rm mocha`

Please unit test any components or functions that you can.