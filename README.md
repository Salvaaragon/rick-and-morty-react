# Rick and morty React app

### Pre-requirements

- [Docker](https://docs.docker.com/install/)
- [Docker-compose](https://docs.docker.com/compose/install/)

React app to consume [Rick and morty graphql api](https://rickandmortyapi.com/graphql).

## Run app

This project is configured using Docker and docker-compose. In order to execute this, it's necessary to install this tool in your computer.

### First execution

Use `docker-compose up -d --build` to create docker container with all app dependencies and run this in [http://localhost:3000](http://localhost:3000).

The page will reload if you make edits.\
You will also see any lint errors in the console.

If you haven't updated any project dependencies, you only have to execute `docker-compose up -d` to run this application.

### Stop execution

Use `docker-compose stop` to stop docker container and app execution.

## Dependencies

- [React](https://es.reactjs.org/): A JavaScript library for building user interfaces
- [Styled components](https://styled-components.com/): utilises tagged template literals to style your component
- [Material UI](https://material-ui.com/): frontend components library
- [Apollo client](https://www.apollographql.com/): library to manage connections with graphql APIs
- [Babel](https://babeljs.io/): JavaScript compiler
- [TypeScript](https://www.typescriptlang.org/)
