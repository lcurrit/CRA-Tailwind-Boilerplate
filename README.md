# Steps to setting this project up

## Create React App with Typescript

    npx create-react-app . --template typescript

Installing @babel/core `npm install @babel/core` will resolve the following error:

    npm WARN @babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining@7.13.12 requires a peer of @babel/core@^7.13.0 but none is installed. You must install peer dependencies yourself.

`Tsconfig.json` will return an error when moving to files further into root. Update the Include section from "src" to "src/\*_/_".

## ESLint

### Initialize and Install ESLint

This proccess installs ESLint and creates the `.eslintrc.js` file.

    npx eslint --init

    √ How would you like to use ESLint? · style
    √ What type of modules does your project use? · esm
    √ Which framework does your project use? · react
    √ Does your project use TypeScript? · Yes
    √ Where does your code run? · browser
    √ How would you like to define a style for your project? · guide
    √ Which style guide do you want to follow? · airbnb
    √ What format do you want your config file to be in? · JavaScript
    √ Would you like to install them now with npm? Yes

You can test ESLint with the following code:

    npx eslint --ext .tsx,.ts ./src

### Problems after ESLint Install

Add the following settings to your `.eslintrc.js` file to resolve most of the default issue with Create React App.

- Problem: 'test' is not defined.

  - Fix: Add the following `env` to eslintrc.js

        jest: true,

- Problem: 'React' was used before it was defined.

  - Fix: Add the following `rules` to eslintrc.js

        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],

- Problem: JSX not allowed in files with extension '.tsx'

  - Fix: Add the following `rules` to eslintrc.js

        'react/jsx-filename-extension': [2, { extensions: ['.ts', '.tsx'] }],

- Problem: 'code' must be placed on a new line

  - Fix: Add the following `rules` to eslintrc.js

        'react/jsx-one-expression-per-line': 'off',

    or
    'react/jsx-one-expression-per-line': [2, { allow: 'single-child' }],

- Problem: Missing file extension for "./App".

  - Fix: Add the following `rules` to eslintrc.js

        'import/extensions': [2, { ts: 'never', tsx: 'never', css: 'always' }],

- Problem: Unable to resolve path to module './App'

  - Fix: Add the following `settings` to eslintrc.js

        settings: {
            'import/resolver': {
                node: {
                    extensions: ['.ts', '.tsx'],
                },
            },
        },

### Force fix remaining errors

    npx eslint --ext .tsx,.ts,.js . --fix

## Prettier

### Install Prettier and it's ESLint Plugins

npm install prettier --save-dev --save-exact  
npm install --save-dev eslint-plugin-prettier eslint-config-prettier

- Add the following `extends` to eslintrc.js

      {
      	"extends": ["plugin:prettier/recommended"]
      }

### Create Prettier Config File

Create a file called `.prettierrc.json` at the root level of your project and add the following:

    {
    	"singleQuote": true
    }

## Editor Config

EditorConfig for VS Code is a recommended extension. It attempts to enforce coding standards within VS Code. The current `.editorconfig` file looks like this.

    root = true

    [*]
    charset = utf-8
    indent_style = space
    indent_size = 2
    insert_final_newline = true
    trim_trailing_whitespace = true

    [*.md]
    max_line_length = off
    trim_trailing_whitespace = false

## Settings.JSON

The 'settings.json' file is used to store Workspace settings for VS Code. These settings validate and save each file. (Not sure if we NEED this.)

    {
      "editor.formatOnSave": true,
      "editor.codeActionsOnSave": {
    	"source.fixAll": true
      },
      "eslint.validate": [
    	"javascript",
    	"javascriptreact",
    	"typescript",
    	"typescriptreact"
      ]
    }

## TailwindCSS

- Install the versions needed for React and TailwindCSS together `npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9`
- Create TailwindCSS config file, `tailwind.config.js` at root:

      module.exports = {
        purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
        darkMode: false, // or 'media' or 'class'
        theme: {
      	extend: {},
        },
        variants: {
      	extend: {},
        },
        plugins: [],
      };

- Install PostCSS-Import `npm install postcss-import@^12.0.0`
- Install PostCSS-Nested `npm install postcss-nested@^4.0.0`

- Install CRACO `npm install @craco/craco`
- Update `package.json` to use CRACO for the start, build, and test scripts.

      "scripts": {
        "start": "craco start",
        "build": "craco build",
        "test": "craco test",
      },

- Create CRACO config file, `craco.config.js` in root. ESLint Disables set to ignore this file.

      /* eslint-disable import/no-unresolved, import/no-extraneous-dependencies, global-require */
      module.exports = {
        style: {
      	postcss: {
      	  plugins: [
      		require('postcss-import'),
      		require('tailwindcss'),
      		require('postcss-nested'),
      		require('autoprefixer'),
      	  ],
      	},
        },
      };

- Update `./src/index.css` to include TailwindCSS attributes, replacing the existing code.

      /* ./src/index.css */
      @tailwind base;
      @tailwind components;
      @tailwind utilities;

- Install the Tailwind CSS Intellisense extension, this should remove the @tailwind problems in Visual Studio Code.

- The following settings are also added to `settings.json` to allow VS Code to ignore the non-standard CSS rules and allow suggestions when writing in TSX.

      {
        "css.validate": false,
        "editor.quickSuggestions": {
      	"strings": true
        }
      }

## Husky

`npm install --save-dev husky lint-staged`  
`npx husky-init`

The following changes should be on `package.json` in scripts.  The *prepare* script will install Husky the next install of the project.  The *pre-commit* script is used to run  lint-staged.

	"scripts": {
	  "prepare": "husky install",
	  "pre-commit": "npx lint-staged"
	},

Add the following to `package.json` for Lint-Staged.  This tells the software to only run prettier on CSS and SCSS files that are staged.

	"lint-staged": {
	  "src/**/*.{css,scss}": [
	    "prettier --write"
	  ]
	},

Husky install should also create a `.husky/pre-commit` file.  Place `npm run pre-commit` in the file to run the script we added earlier.

## Resources

- https://dev.to/s2engineers/how-to-make-eslint-work-with-prettier-avoiding-conflicts-and-problems-57pi
- https://prettier.io/
- https://www.npmjs.com/package/eslint-plugin-prettier
- https://eslint.org/
- https://reactjs.org/docs/create-a-new-react-app.html
- https://tailwindcss.com/docs/guides/create-react-app
- https://typicode.github.io/husky/#/
