# An introduction to React.js
## Overview
React is a JavaScript library for building user interfaces. It lets you focus on creating reusable components that represent specific pieces of your UI, components range from a single button to the entire webpage. 

The beauty of React is that the simplicity of building a component has been brought down to its theoretical minimum. It's just a Javascript function, written in JSX (a JavaScript syntax extension) that returns markup. Curly braces let you “escape back” into JavaScript so that you can embed some variable passed as function arguments and display it to the user.

React efficiently updates those components when data changes. Instead of managing the entire DOM like traditional JavaScript, React uses a virtual DOM, a lightweight in-memory representation, to make updates significantly faster and smoother.

```jsx
import React from 'react';

function MyComponent() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a React component with JSX.</p>
    </div>
  );
}

export default MyComponent;
```
> The main reason you might want to use react is not the library itself, but the massive ecosystem that surrounds it. React itself doesn't care about routing, state management, animation or anything like that. Instead it lets those concerns evolve naturally within the open source community. No matter what you're trying to do, there's very likely a good supporting library to help you get it. - Fireship

## Installation and Build
You can use React without a framework, however most apps and sites eventually build solutions to common problems such as code-splitting, routing, data fetching, and generating HTML. These problems are common to all UI libraries, not just React. By starting with a framework, you can get started with React quickly, and avoid essentially building your own framework later.

For now, I will cover just the build tool for serving code locally (Development cycle). The bootcamp chose [**Vite**](https://vitejs.dev/). Vite offers fast development and optimized production builds through its native ES module support, hot module replacement (HMR), and plugin-based architecture. It excels in providing a rapid development experience while ensuring efficient bundling and smaller bundle sizes for production deployments.

to get started run `npm init vite` from the command line and choose a starter project with your favorite front-end framework. You'll notice the project comes with a vite-config file. Vite has a plug-in ecosystem that can extend it with additional features, you can also manually override the roll-up defaults when necessary. There are some really cool plugins out there like vite-ssr that can do server-side rendering like Next.js. 

! Dont forget to initialize the npm project for dependencies to download and install.

Have a look at the folder structure in **vite-project**.
To serve the application locally run `npm run dev`.

## Resources
- React Documentation : https://react.dev/learn
- Vite Documentation : https://vitejs.dev/guide/
- Fireship's Playlist : https://www.youtube.com/playlist?list=PL0vfts4VzfNgUUEtEjxDVfh4iocVR3qIb
- Fireship's Vite in 100s : https://www.youtube.com/watch?v=KCrXgy8qtjM