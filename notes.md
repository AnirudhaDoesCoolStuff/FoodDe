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

Episode #3 Laying the foundation

- React.createElement --> Object --> HTMLElement(render)

- JSX makes life easier and it stands for JavaScript XML.
- Without JSX also we can build react apps, but it not ideal way.
- JSX is not HTML in JS, maybe called html like or xml like syntax
- Suppose we console.log the element using React.createElement and the one created using the JSX, they both are the same objects.
- The code we write should be developer friendly. So JSX way of coding is easier.
- JSX is not JS and JS Engine doesn't understand the JSX
- JS Engine understands only ECMAScript only.
- JSX code is transpiled before it reaches the JS engine
- Transpiling is done by Babel. Babel was installed by parcel.

Before

- React.createElement --> Object --> HTMLElement(render)

After

- JSX --> Babel transplies to React.createElement --> Object --> HTMLElement(render)

- Attributes are like className
- When the JSX is on single line, it is fine, if we want it to have two or more lines, we wrap it into parentheses(())

### Components

- Everything is React is a component
- Two types (class based compoent(old) & functional components(new))
- Functional components are nothing but js funtions. functions that return some peice of JSX is called funtional component.
- Component using naming convention like `HeadingComponent`
- We render using <HeadingComponent />

```
const Heading1 = () => {
  return <h1> Heading #1 </h1>
};
```

```
const Heading2 = () => (
  <h1> Heading2 <h2>
)
```

Component Composition

```
const Title = () => <h1> Zwiggyyyyyy </h1>;

const Menu = () => {
  return (
    <div>
      <Title />
      <ul>
        <li> Dosa </li>
        <li> Idli </li>
        <li> Poori </li>
      </ul>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Menu />);
```

- We can use normal function for creating the component, arrow func's are newer way and much easier to understand.
- JSX provides us with super power. if we put {} in between jsx, we can write the js expression inside the {}.

rendering react elements in component

```
import React from "react";
import ReactDOM from "react-dom/client";

const Title = <h1> Zwiggyyyyyy </h1>;

const Menu = () => {
  return (
    <div>
      {Title}
      <ul>
        <li> Dosa </li>
        <li> Idli </li>
        <li> Poori </li>
      </ul>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Menu />);
```

Element inside an element

```
import React from "react";
import ReactDOM from "react-dom/client";

const elem = <p>I am paragraph tag </p>;
const Title = (
  <div>
    {elem}
    <h1> Zwiggyyyyyy </h1>
  </div>
);

const Menu = () => {
  return (
    <div>
      {Title}
      <ul>
        <li> Dosa </li>
        <li> Idli </li>
        <li> Poori </li>
      </ul>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Menu />);
```

The below code doesn't work because jsx requires
exactly ONE parent element but we are return 2.

```
import React from "react";
import ReactDOM from "react-dom/client";

const elem = <p>I am paragraph tag </p>;
const Title = (

    {elem}
    <h1> Zwiggyyyyyy </h1>

);

const Menu = () => {
  return (
    <div>
      {Title}
      <ul>
        <li> Dosa </li>
        <li> Idli </li>
        <li> Poori </li>
      </ul>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Menu />);

```

- JSX helps a little bit by preventing malicious attack

- We can write the component `<Title></Title>`

Episode #4: Talk is cheap, show me the code!

- Plan the mock/wireframe first and then only code.

Basic Wireframe

```
- Header
  - Logo
  - Nav-items
- Body
  - Search
  - Restaurant Container
    - RestoCard
- Footer
  - Copyright
  - Links
  - Address
  - Contact
```
