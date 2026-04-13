Episode #1 Inception

- We use cdn to get the React from the internet.
- React.createElement is used to create elements.
- Basically we have two cdn links because, react is used for creation and logic, reactdom is used for rendering to the browser and for reusability. React core can be used for react-native etc, react-dom is specifically for browser.
- It is very difficult to write with react.createElement
- If the elements are nested, we have to send array of elements.
- React elements are not tags, they are objects.
- cross origin, since we are fetching the react-cdn from different origin, we have to tell our browser to allow and handle it.
- If something is already present in the root element, it is replaced. Is something is above or below root element they are not affected.
