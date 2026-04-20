# ⚛️ Namaste React — Learning Notes

> Personal notes from the **Namaste React** course by Akshay Saini. Each episode covers core React concepts, from raw browser scripting to hooks and modern component patterns.

---

## 📋 Table of Contents

- [Episode 1 — Inception](#episode-1--inception)
- [Episode 2 — Igniting Our App](#episode-2--igniting-our-app)
- [Episode 3 — Laying the Foundation](#episode-3--laying-the-foundation)
- [Episode 4 — Talk is Cheap, Show Me the Code](#episode-4--talk-is-cheap-show-me-the-code)
- [Episode 5 — Let's Get Hooked](#episode-5--lets-get-hooked)

---

## Episode 1 — Inception

- React is loaded via CDN links. Two separate packages are needed:
  - **`react`** — core library for creating elements and logic (also used in React Native, etc.)
  - **`react-dom`** — handles rendering specifically to the browser DOM
- Elements are created using `React.createElement`, which returns **objects**, not HTML tags.
- Nested elements are passed as an **array** of children.
- Writing UI with `React.createElement` directly is verbose and painful — JSX solves this.
- The `crossOrigin` attribute is required when fetching React from a CDN (different origin).
- React only replaces the content **inside** the root element — anything outside remains untouched.

---

## Episode 2 — Igniting Our App

### `package.json` vs `package-lock.json`

| File | Purpose |
|------|---------|
| `package.json` | Configuration file; lists dependency names and version ranges |
| `package-lock.json` | Locks the **exact** installed versions for reproducible installs |

> `npm` always prioritises `package-lock.json`. If no lock file exists, it falls back to `package.json`.

### Versioning Symbols

| Symbol | Meaning | Example: `1.2.3` allows... |
|--------|---------|--------------------------|
| `^` (caret) | Minor + patch updates only | `1.2.3` → `1.x.x` ✅, `2.0.0` ❌ |
| `~` (tilde) | Patch updates only | `1.2.3` → `1.2.x` ✅, `1.3.0` ❌ |

### Dependency Types

- **Direct dependencies** — required in production (e.g., `react`, `react-dom`)
- **Dev dependencies** — used only during development (e.g., `parcel`, `babel`)

### Why Not Use a CDN for React?

Injecting React via CDN is discouraged because:
- You must manually update the URL whenever React releases a new version.
- It creates an implicit external dependency that is hard to track.

Install React properly instead:
```bash
npm install react react-dom
```

### Parcel — The Build Tool 🔥

> *"Parcel is a beast."* — Akshay Saini

Parcel handles a lot out of the box:

- ⚡ Hot Module Replacement (HMR) — powered by a file-watching algorithm written in C++
- 📦 Bundling & Minification
- 🌲 Tree Shaking — removes unused code
- 🔀 Differential Bundling — serves modern and legacy browsers appropriately
- 🔒 HTTPS support
- 🔑 Consistent Hashing
- 🩺 Diagnostics

```bash
npm run build    # Outputs to the /dist folder
```

> **Note:** Do not commit the `node_modules` or `dist` folders to Git — both can be regenerated. Use [browsersl.ist](https://browsersl.ist) to configure browser targets.

---

## Episode 3 — Laying the Foundation

### The Rendering Pipeline

**Without JSX:**
```
React.createElement → Object → HTMLElement (render)
```

**With JSX (via Babel):**
```
JSX → Babel transpiles → React.createElement → Object → HTMLElement (render)
```

### What is JSX?

- JSX stands for **JavaScript XML** — it's an XML-like syntax extension, not actual HTML.
- The JS engine doesn't understand JSX; **Babel** (installed by Parcel) transpiles it first.
- A `React.createElement` call and its JSX equivalent produce the **exact same object**.
- Multi-line JSX must be wrapped in parentheses `()`.
- JSX attributes use camelCase: `className`, `htmlFor`, etc.
- JSX also provides built-in protection against XSS (cross-site scripting) attacks.

### Functional Components

Everything in React is a component. The modern approach uses **functional components** — plain JavaScript functions that return JSX.

```jsx
// Arrow function style (preferred)
const Heading = () => (
  <h1>Hello, World!</h1>
);

// Regular function style
function Heading() {
  return <h1>Hello, World!</h1>;
}
```

> Components must be named with **PascalCase** (e.g., `MyComponent`) and rendered as `<MyComponent />`.

### Component Composition

Components can be nested inside one another — this is called **component composition**.

```jsx
const Title = () => <h1>Zwiggyyyyyy</h1>;

const Menu = () => (
  <div>
    <Title />
    <ul>
      <li>Dosa</li>
      <li>Idli</li>
      <li>Poori</li>
    </ul>
  </div>
);
```

### Dynamic Expressions in JSX

Use `{}` inside JSX to embed any JavaScript **expression**:

```jsx
const user = "Akshay";
const Greeting = () => <h1>Hello, {user}!</h1>;
```

You can also embed React elements and even other components:

```jsx
const elem = <p>I am a paragraph</p>;

const Card = () => (
  <div>
    {elem}
    <span>Some other content</span>
  </div>
);
```

> ⚠️ JSX requires **exactly one parent element**. Use a `<div>` or a React Fragment (`<>...</>`) to wrap multiple siblings.

---

## Episode 4 — Talk is Cheap, Show Me the Code

### Always Plan Before You Code

Sketch a component wireframe first:

```
App
├── Header
│   ├── Logo
│   └── NavItems
├── Body
│   ├── SearchBar
│   └── RestaurantContainer
│       └── RestaurantCard
└── Footer
    ├── Copyright
    ├── Links
    ├── Address
    └── Contact
```

### Inline Styles in JSX

Inline styles are passed as a **JavaScript object** (not a string like in HTML):

```jsx
<RestaurantCard style={{ backgroundColor: "grey", padding: "10px" }} />
```

### Config-Driven UI

A **config-driven UI** is one where the layout and content are controlled by data (typically from an API), rather than being hardcoded. This is how large-scale apps like Swiggy or Netflix dynamically render their interfaces.

---

## Episode 5 — Let's Get Hooked

### Named vs Default Exports

| Type | Syntax | Import rule |
|------|--------|-------------|
| **Named** | `export const add = () => {}` | Must use the **exact same name** |
| **Default** | `export default App` | Can be imported with **any name** |

```js
// Named export
export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;

// Named import — names must match
import { add, sub } from "./utils";
```

```js
// Default export
export default App;

// Default import — name can be anything
import App from "./App";
import MyApp from "./App"; // also valid
```

### React Hooks

Hooks are special functions that let you "hook into" React features from functional components.

#### `useState`

`useState` declares a **state variable**. Under the hood, it uses **array destructuring**:

```jsx
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

> 🔑 **Key rule:** Whenever a state variable is updated, React **re-renders** the component to reflect the new value in the UI.

---

## 🛠️ Quick Reference

```bash
# Install dependencies
npm install

# Start dev server (with HMR)
npx parcel index.html

# Production build
npm run build
```

---

*Notes based on the [Namaste React](https://namastedev.com/learn/namaste-react) course by Akshay Saini.*
