# VdcAngularSkeleton

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## App content

### App has two main components:
1. [home](https://github.com/EMBL-EBI-GCA/vdc_angular_skeleton/src/app/home/home.component.ts) - basic component, can be used as skeleton for other components
2. [non-existing](https://github.com/EMBL-EBI-GCA/vdc_angular_skeleton/src/app/non-existing/non-existing.component.ts) - end-point for 404 page

### And two main folders:
1. [pipes](https://github.com/EMBL-EBI-GCA/vdc_angular_skeleton/src/app/pipes/) - contains [sort](https://github.com/EMBL-EBI-GCA/vdc_angular_skeleton/src/app/pipes/sort.pipe.ts) and [filter]((https://github.com/EMBL-EBI-GCA/vdc_angular_skeleton/src/app/pipes/filter.pipe.ts)) pipes for tables in components
2. [shared](https://github.com/EMBL-EBI-GCA/vdc_angular_skeleton/src/app/shared/) - contains [export](https://github.com/EMBL-EBI-GCA/vdc_angular_skeleton/src/app/shared/export/export.component.ts) component (could be used to add data export to another component), [header](https://github.com/EMBL-EBI-GCA/vdc_angular_skeleton/src/app/shared/header/header.component.ts) component (provides navbar for all components) and [interfaces](https://github.com/EMBL-EBI-GCA/vdc_angular_skeleton/src/app/shared/interfaces.ts) (file for shared interfaces across app)

### Pre-installed packages:
1. [ngx-spinner](https://www.npmjs.com/package/ngx-spinner). Provides spinner interface for process that requires longer time
2. [ngx-pagination](https://www.npmjs.com/package/ngx-pagination). Provides pagination for tables
3. [angular2-cookie-law](https://www.npmjs.com/package/angular2-cookie-law) Provides pop-up window with cookie information
4. [angulae2-csv](https://www.npmjs.com/package/angular2-csv) Provides service to convert data to csv and download it

### Basic home component has:
1. CSS Bootstrap v.4 design
2. Table with pagination
3. Header
4. Cookie-law banner
5. Grid-layout example
6. Automatic Title setup
7. Dowload data button

