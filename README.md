# ts-starter-node

Starter code for node packages based on https://amenallah.com/node-js-typescript-jest-express-starter/

- Node.js
- Typescript
- Jest
- Eslint
- Prettier
- VsCode Debug config

## Usage

### Standalone

```bash
git clone
echo "Rename you root folder"
mv ts-start-node "YOUR_PACKAGE_NAME"
cd "YOUR_PACKAGE_NAME"
echo "Delete .git folder and init a new one for you if needed"
rm -rf .git && git init
```

Additionally, edit `package.json` according to your needs
```json
  "name": "YOUR_PACKAGE_NAME",
  "description": "YOUR_PACKAGE_DESCRIPTION",
  "repository": {
    "type": "git",
    "url": "ssh://git@github.com:USER/YOUR_PACKAGE_NAME.git"
  },
  //Only for Github Registry, delete it for NPM
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  },
```

### Package inside a Monorepo

```bash
echo "Clone inside packages folder"
cd packages && git clone
echo "Rename you root folder"
mv ts-start-node "YOUR_PACKAGE_NAME"
cd "YOUR_PACKAGE_NAME"
echo "Delete .git folder"
rm -rf .git
```

Additionally, edit `package.json` according to your needs
```json
"name": "YOUR_PACKAGE_NAME",
"description": "YOUR_PACKAGE_DESCRIPTION",
"repository": {
  "type": "git",
  "url": "ssh://git@github.com:USER/YOUR_PACKAGE_NAME.git",
  "directory": "packages/YOUR_PACKAGE_NAME" // <-- 👁
},
//Only for Github Registry, delete it for NPM
"publishConfig": {
  "registry": "https://npm.pkg.github.com"
},
```
If using a local dependency (another package inside packages folder)

1. Use lerna to declare the reference. From the monorepo root folder run
`yarn lerna add NEW_DEPENDENCY_PACKAGE_NAME --scope=TARGET_PACKAGE_NAME`
2. Edit `tsconfig.json` to declare the new local dependency and help code navigation to `ts` sources files, not to compiled `js` ones
    ```json
    "paths": {
      "*": ["node_modules/"],
      "typings/*": ["src/*"],
      "PACKAGE_NAME":["PACKAGE_NAME/src/main.ts"] //<-- 👁
    }
    ```




---
Pablo Escalada, January 2020