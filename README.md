SpeedRunsLive Front End
=======================

Node + React + Sass.

Setup
-----

Clone the repository and navigate to the project then run the following commands:

```Shell
# For development
$ docker-compose run --rm npm-install
$ docker-compose up app
```

After that the project will be up at your docker-machine's IP on port 80.

Anytime you add packages you will need to run npm-install. 

If you want to run unit tests use: `docker-compose run mocha`