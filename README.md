# Wrongfulssriconvictions

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

## Development server

Before running the dev server: this project was built with Angular 12 and is tested on Node 16 or 18. If you use Node 17/22, you may see an OpenSSL error (digital envelope routines::unsupported).

Run the dev script using the included npm scripts (recommended):

```powershell
npm install
npm run start
```

If your local Node version is >18 and you prefer to keep it, use the legacy OpenSSL provider while you run the dev server:

```powershell
npm run start:legacy
```

If port 4200 is busy, start the dev server on a different port (e.g., 4301):

```powershell
npm run start:port
```

Note: If you run `ng serve` directly (without npm scripts), the `NODE_OPTIONS` environment variable may not be set; we recommend using the provided npm scripts so the correct Node flags are applied.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
