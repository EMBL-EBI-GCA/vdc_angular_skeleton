Compiling the app
=================

If you have angular-cli installed on your computer, run this from the top directory of this repo:

    ng build --prod --build-optimizer

If you don't have npm but you do have docker:

    docker run -v $PWD:/usr/src/app --workdir /usr/src/app teracy/angular-cli ng build --prod --build-optimizer

Or if you have docker-compose:

    docker-compose run angular

For some reason the compliation runs much slower in docker. This is a problem related to [Docker for mac](https://docs.docker.com/docker-for-mac/). You might be happier if you install angular-cli on your local machine.

You should notice the following things happen when you compile:

* Downloads a load of stuff into a node_modules directory. These are all our dependencies for compiling the app.
* Downloads stuff into a typings directory. Again, these are dependencies for compiling the app.
* Makes a aot directory. This stands for [ahead-of-time](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html). It is for intermediate files made during the compilation.
* Makes an output file dist/test-angular6/main.*.js - this is the compiled javascript that your browser needs to run the app

It is safe to ignore warnings that look like this: "The 'this' keyword is equivalent to 'undefined' at the top level of an ES module, and has been rewritten." You will probably see many such warnings.

Viewing the app
===============

There are lots of ways to serve static files from a webserver on your local machine. This example runs nginx in a docker container. Run it from  the top directory of this repo.

    docker run -v webroot:/usr/share/nginx/html:ro -v nginx.conf:/etc/nginx/conf.d/default.conf:ro -p 8000:80 -d nginx

Or if you have docker-compose:

    docker-compose up -d nginx

Then open [http://localhost:8000](http://localhost:8000) in your browser.
