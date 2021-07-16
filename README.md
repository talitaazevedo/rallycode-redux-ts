# Getting Started with Redux with React

- [Getting Started with Redux with React](#getting-started-with-redux-with-react)
  - [Installing creating a project](#installing-creating-a-project)
  - [Installing Dependencies](#installing-dependencies)
  - [About Redux](#about-redux)
    - [? about it](#-about-it)

## Installing creating a project

```bash
npx create-react-app redux-ts --template typescript
```

## Installing Dependencies

```bash
npm install --save-exact @types/react-redux@7.1.15 axios@0.21.1 react-redux@7.2.2 redux@4.0.5 redux-thunk@2.3.0 @types/react

```

## About Redux

In a normal Redux project, it is a worth the time to think about the Design of your store before writing code.

_In TS Project, I **really** recommend you think about design first._

### ? about it

1. We are _fetching_ **packages** from NPM.
2. We are going to call NPM packages _repositories_
3. **package** is a reserved keyword in TS (like _for_ _import_, etc).
