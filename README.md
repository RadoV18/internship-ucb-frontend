# InternshipUcbFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Docker

You can also run the project with a docker container. This repository contains a single container. You need to have set up the backend repository in order for this to work

|Service|Location|
|-------|--------|
|Frontend|/|

Run the following commands in the root folder:
```console
> docker build -t ucb/internship-frontend:1.0.0 .
> docker run -p 80:80 ucb/internship-frontend:1.0.0
```

