What is this repo for?
=====================

The [Angular tutorial](https://angular.io/docs/ts/latest/tutorial/) and [Angular guide](https://angular.io/docs/ts/latest/guide/) teach you how to use the basic concepts of Angular. But they do not create a production-ready application.  We want to do [Ahead-Of-Time compilation](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html) in production.

It can be tricky to set up aot compilation, and get all the required files in the right place.  Also, it can be tricky to sort your code into modules and have them all link together. So this repo contains a skeleton application with some example
[modules, components and services](https://angular.io/docs/ts/latest/guide/architecture.html). If you want to start a new angular project, then copy this repo, rename it, and start adding your own components, modules and services.

What is in this repo?
====================

webroot
-------

Files in the webroot directory will get served by your webserver. The webroot/index.html file is the root html file.

If you have any static files required by your app then put them in the webroot/static directory.
For example, you might want to include some [boiletplate css](https://html5boilerplate.com/).
Don't go crazy adding lots of css, because the Angular way is to [add css to the individual components](https://angular.io/docs/ts/latest/guide/component-styles.html).

docker-compose.yml and nginx.conf
---------------------------------

These help you [compile and serve the app](running-and-compiling.md) during development. They are not a required part of the final application.

Files for compilation
---------------------

These files are not very interesting, but you cannot compile the application without them:

* package.json
* rollup.config.js
* tsconfig.json
* typings.json 
* app/main.js

If you ever use an external package, you might find you need to edit typings.json.  For example, the [EBiSC data tracker typings.json](https://github.com/EMBL-EBI-GCA/ebisc_tracker_2/blob/master/webcontent/typings.json) has google.visualization as a dependency.
