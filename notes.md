Episode #1 Inception

- We use cdn to get the React from the internet.
- React.createElement is used to create elements.
- Basically we have two cdn links because, react is used for creation and logic, reactdom is used for rendering to the browser and for reusability. React core can be used for react-native etc, react-dom is specifically for browser.
- It is very difficult to write with react.createElement
- If the elements are nested, we have to send array of elements.
- React elements are not tags, they are objects.
- cross origin, since we are fetching the react-cdn from different origin, we have to tell our browser to allow and handle it.
- If something is already present in the root element, it is replaced. Is something is above or below root element they are not affected.

Episode #2 Igniting our app

- Package.json is a configuration for npm
- There are two types of dependencies
  - Direct dependency: The package which are required in the prod
  - Dev Dependency: The packages which help for the development
- "Parcel is a beast" - Akshay Saini
- ^ (caret) - It doesn't allow the major version

```
react: "^1.2.3"
```

Allowed till, 1.9.9 ✅
2.0.0❌

- ~ Tilde - It allows only patch updates

Allowed

1.2.4 ✅
1.2.5 ✅
1.3.0 ❌

- Package lock json keep the track of exact version.

- npm first check for package and package-lock
  - npm first priority is to install from lock.json
  - if no lock.json, then it will refer to package.json

- Every package in node_modules have their own package.json

- we don't put the node_modules because we can create node_modules using npm i

- Injecting react via cdn is not the right way as we have to update if react upgrades and it is a bad idea.

- We install via npm i react

- When we modify to use the react from node_modules. We get error that browser script cannot have imports or exports.

- Parcel features
  - Hot module reloading - uses file watching algorithm - written in c++
  - bundling
  - Minification
  - Consistent Hashing
  - Differential bundling
  - Diagonstics
  - Tree Shaking - remove unused code
  - Https

- npm run build - builts on dist folder
- We don't push the dist folder to github
- Use browserlist.dev to ckeck for browser you want to support
