# Getting Started with Redux with React

- [Getting Started with Redux with React](#getting-started-with-redux-with-react)
  - [Installing creating a project](#installing-creating-a-project)
  - [Installing Dependencies](#installing-dependencies)
  - [About Redux](#about-redux)
    - [? about it](#-about-it)
  - [Redux Setup](#redux-setup)
    - [repositoriesReducers.ts](#repositoriesreducersts)
    - [Types](#types)
  - [RepositoriesList](#repositorieslist)

---

## Installing creating a project

```bash
npx create-react-app redux-ts --template typescript
```

---

## Installing Dependencies

```bash
npm install --save-exact @types/react-redux@7.1.15 axios@0.21.1 react-redux@7.2.2 redux@4.0.5 redux-thunk@2.3.0 @types/react

```

---

## About Redux

In a normal Redux project, it is a worth the time to think about the Design of your store before writing code.

_In TS Project, I **really** recommend you think about design first._

---

### ? about it

1. We are _fetching_ **packages** from NPM.
2. We are going to call NPM packages _repositories_
3. **package** is a reserved keyword in TS (like _for_ _import_, etc).

---

## Redux Setup

- Next installing dependencies, you need to configure folder structure.

- We gonna start creating two folders, inside _source fold_ **SRC**

1. state folder.
2. Reducer folder inside there.

```bash
src/
├── components
└── state
    └── reducers
        └── repositoriesReducer.ts

```

4. and a new file _repositoriesReducers.ts_.

---

### repositoriesReducers.ts

- Here we start to configure and initializing project.
- First we need to set and configure a component here.

```typescript
  // const reducer will receive state and action then we need to  say  to typescript  the return type to this function.  and we repeat  the  interface types on return  above.
const reducer = (state: RepositoriesState, action: any): RepositoriesState => {
]

```

---

### Types

You need to create new Interfaces in typescript to type states, props, refs and classes, there are some different ways to type, one of the easiest way is creating interfaces to many different types of that.

---

Bellow you can see as simple as well typing interface using typescript.

```typescript
interface RepositoriesState {
  loading: Boolean;
  error: string | null;
  data: string[];
}
```

---

> Remember if you use typescript the type any is _bad_, you really need to try to configure it output.

---

## RepositoriesList

> This is the actually content of our folder structure.

```bash
src/
├── components
│   ├── App.tsx
│   └── RepositoriesList.tsx
├── index.tsx
├── react-app-env.d.ts
└── state
    ├── action-creators
    │   └── index.ts
    ├── actions
    │   └── index.ts
    ├── action-types
    │   └── index.ts
    ├── index.ts
    ├── reducers
    │   ├── index.ts
    │   └── repositoriesReducer.ts
    └── store.ts

```

On the Repositories list we created a new JSX component, with the content below `<div> <form> <input/> <button>`

```typescript
<div>
  <form onSubmit={onSubmit}>
    <input value={term} onChange={(e) => setTerm(e.target.value)} />
    <button>Search</button>
  </form>
</div>
```

> We used `useState` to read and save that we can write on the input.

```typescript
const [term, setTerm] = useState('');
```

The `form` receive one function called `onSubmit` this function will prevents our `form` to reload the page as well the form called a method `dispatch` this method called our `actionCreators` to search repositories

> This function needed to be typed and we used type listed on html into the tag form likewise `<form onSubmit={onSubmit}>`

```typescript
const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(actionCreators.searchRepositories(term));
  };
<form onSubmit={onSubmit}>
 ...

```
