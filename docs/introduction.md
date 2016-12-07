What is this repo for?
=====================

The [Angular tutorial](https://angular.io/docs/ts/latest/tutorial/) and [Angular guide](https://angular.io/docs/ts/latest/guide/) teach you how to use the basic concepts of Angular. But they do not create a production-ready application.  We want to do [Ahead-Of-Time compilation](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html) in production.

It can be tricky to set up aot compilation, and get all the required files in the right place.  Also, it can be tricky to sort your code into modules and have them all link together. So this repo contains a skeleton application with some example
[modules, components and services](https://angular.io/docs/ts/latest/guide/architecture.html). If you want to start a new angular project, then copy this repo, rename it, and start adding your own components, modules and services.

We use Angular 2.  Not AngularJS.  If you're searching for help (google or stack overflow), then always search angular2.  Ignore anything that says angularjs.

What is in this repo?
====================

The webroot/ directory
----------------------

The webroot directory is where your webserver will look to serve static files. The webroot/index.html file is the root html file. Your angular code will get compiled into a single javascript file at webroot/static/build.js. Apart from that, this directory will remain quite empty.

If you have any extra static files required by your app then put them in the webroot/static directory.
For example, you might want to include some [boiletplate css](https://html5boilerplate.com/).
Don't go crazy adding lots of css to this directory, because the Angular way is to [add css to the individual components](https://angular.io/docs/ts/latest/guide/component-styles.html).

The app/ directory
------------------

This is where your angular code goes, including typescript '.ts' files and '.html' files. These source files get compiled into a build.js file by the typescript compiler.
You should keep the minimum number of files at this top level of this directory - most files should be pulled in from a module in a subdirectory.

####app-routing.ts

Quite an important file for you to play with.  [Routing is described in the angular docs](https://angular.io/docs/ts/latest/guide/router.html). Edit this file to configure how the url controls what your app displays.
This skeleton app has two routes: [http://localhost:8000/home](http://localhost:8000/home)
and [http://localhost:8000/child](http://localhost:8000/child). Notice

####app.component.ts, app.component.html, and app.module.ts

These files are kept minimal.  They mainly pull in sub-modules and define a root component that knows to load in different sub-components based on the current url. Notice how app.module.ts imports all of our child modules.

The app/example-child/ directory
-------------------------------

Think of splitting your app into modules, which should roughly roughly correspond to the views you are showing people.
For example, you might choose to have a "samples" module which is responsible for creating a sample-list view and a sample-detail view, and respond to any url underneath "http://myapp.ac.uk/samples"

Notice how the example-child component makes use of the "share-example" component from the shared module and the "do-something" service from the core module

The app/core/ directory
-----------------------

This directory contains the "core" module.  Any "service" required by your app will go in this module.  For example, your app will probably need to create service for getting stuff from the underlying API (e.g. the elasticsearch endpoints).

This core directory is also used for components that really belong to the top module of the app, and are not shared by submodules.  For example, this skeleton app as a home page defined in the core/components/ directory.
You might also want a "404 - page not found" page which would go in the core directory. Any component you create must be added to the file core.module.ts

Any service or core component you make must be added to the file core.module.ts so that is available to your app.  See the example "do-something" component, and see how it is listed in the "providers" array in core.module.ts.
And see the example "home" component and how it is listed in the "declarations array" in core.module.ts.

The app/shared/ directory
------------------------

This directory contains the "shared" module. It is for components that get reused by many other child components in your app.  Any shared component you make must also be declared and exported in the shared.module.ts file.

There is an example "share-example" component.  Notice that this shared component is reused by the home component from the core module and the example-child component in the example-child module.


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
