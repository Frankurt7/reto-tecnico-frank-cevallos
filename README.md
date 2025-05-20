# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To Run

- `npm install`

- `npm run start`

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Scaffolding

In the following detail we can review the scaffolding in detail

<details>
<summary><b>Expand scaffolding</b></summary>

```scaffolding
Project/
├─ node_modules/
├─ public/
│ ├─ favicon.ico
│ ├─ index.html
│ ├─ logo192.png
│ ├─ logo512.png
│ ├─ manifest.json
├─ src/
│ ├─ core/
│ │ ├─ services/
│ │ │ ├─ plans/
│ │ │ │ ├─ plans.service.ts
│ │ │ │ ├─ plans.dto.ts
│ │ │ │ ├─ plans.mappers.ts
│ │ │ │ ├─ plans.data.ts
│ │ │ ├─ user/
│ │ │ │ ├─ user.service.ts
│ │ │ │ ├─ user.dto.ts
│ │ │ │ ├─ user.data.ts
│ │ │ ├─ index.ts
│ │ ├─ store/
│ │ │ ├─ user/
│ │ │ │ ├─ async-thunks/
│ │ │ │ │ ├─ fetchUser.ts
│ │ │ │ │ ├─ index.ts
│ │ │ │ ├─ constants.ts
│ │ │ │ ├─ index.ts
│ │ │ │ ├─ selectors.ts
│ │ │ │ ├─ reducer.ts
│ │ │ │ ├─ slice.ts
│ │ │ │ ├─ type.ts
│ │ │ ├─ layout/
│ │ │ │ ├─ constants.ts
│ │ │ │ ├─ index.ts
│ │ │ │ ├─ selectors.ts
│ │ │ │ ├─ reducer.ts
│ │ │ │ ├─ slice.ts
│ │ │ │ ├─ type.ts
│ │ │ ├─ plan/
│ │ │ │ ├─ constants.ts
│ │ │ │ ├─ index.ts
│ │ │ │ ├─ selectors.ts
│ │ │ │ ├─ reducer.ts
│ │ │ │ ├─ slice.ts
│ │ │ │ ├─ type.ts
│ │ │ ├─ index.ts
│ │ │ ├─ store.helpers.ts
│ │ │ ├─ reducers.ts
│ │ ├─ model/
│ │ │ ├─ interfaces/
│ │ │ │ ├─ plans/
│ │ │ │ │ ├─ index.ts
│ │ │ │ │ ├─ plans.interface.ts
│ │ │ │ ├─ quotation/
│ │ │ │ │ ├─ index.ts
│ │ │ │ │ ├─ quotation-form.interface.ts
│ │ │ │ ├─ user/
│ │ │ │ │ ├─ index.ts
│ │ │ │ │ ├─ user.interface.ts
│ │ │ ├─ enums/
│ │ │ │ ├─ plans.enum.ts
│ │ │ │ ├─ stepper.enum.ts
│ │ │ │ ├─ type-document.enum.enum.ts
│ │ │ ├─ index.ts
│ │ ├─ constants/
│ │ │ ├─ currency.constants.ts
│ │ │ ├─ products.ts
│ │ │ ├─ document-type.constants.ts
│ │ │ ├─ error-messages.constants.ts
│ │ │ ├─ routes.constants.ts
│ │ │ ├─ size.constants.ts
│ │ │ ├─ steps.constant.ts
│ │ ├─ hooks/
│ │ │ ├─ master-entities/
│ │ │ │ ├─ index.ts
│ │ │ │ ├─ use-user.hooks.ts
│ ├─ screens/
│ │ │ ├─ plans/
│ │ │ ├─ quotation/
│ │ │ ├─ summary/
│ │ │ ├─ App.tsx
│ │ │ ├─ AppRouter.tsx
│ ├─ shared/
│ ├─ http/
│ ├─ assets/
│ ├─ scss/
│ ├─ index.css
│ ├─ index.js
├─ .gitignore
├─ package.json
├─ README.md
```

</details>
