# Rick and morty React app

## Pre-requirements

- [Yarn](https://yarnpkg.com/)

React app to consume [Rick and morty graphql api](https://rickandmortyapi.com/graphql).

## Run app

Install yarn in your device in order to execute this application.

### First execution

Use `yarn install` to install all project dependencies.
Then, run `yarn start` to begin his execution and access in your navigator to [http://localhost:3000](http://localhost:3000).

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Execution

If the project dependencies have not been modified, just run `yarn start` to start the application.

## Folder structure

    .
    ├── public
    │   └── locales                 # Translations
    ├── src                         # App components
    │   ├── assets                  # Images, icons, fonts, ...
    │   ├── components              # Reusable components not linked to the model
    │   │   ├── ExampleComponent
    │   │   │   ├── index.tsx       # Component definition
    │   │   │   ├── styles.ts       # Component styles
    │   │   │   ├── types.ts        # Custom types used in this component
    │   │   │   └── logic.ts        # Some logic used in this component
    │   ├── containers              # Views and components linked to the model
    │   ├── graphql                 # Definition of backend requests
    │   └── model                   # Funtions to normalize data model
    ├── services                    # External services used (like i18n)
    ├── styles                      # Theme and styles configuration
    ├── utils                       # Helper funtions
    ├── .babelrc                    # Babel configuration
    ├── .eslintignore
    ├── .eslintrc.js                # Eslint configuration
    ├── .gitignore
    ├── .prettierrc.js              # Prettier configuration
    ├── package.json
    ├── README.md
    ├── tsconfig.json
    ├── tsconfig.paths.json         # Aliases list
    └── yarn.lock

## Dependencies

- [React](https://es.reactjs.org/): A JavaScript library for building user interfaces
- [Styled components](https://styled-components.com/): Utilises tagged template literals to style your component
- [Material UI](https://material-ui.com/): Frontend components library
- [Apollo client](https://www.apollographql.com/): Library to manage connections with graphql APIs
- [Babel](https://babeljs.io/): JavaScript compiler
- [TypeScript](https://www.typescriptlang.org/)
- [React-i18next](https://react.i18next.com/): Internacionalization publing based in i18next
