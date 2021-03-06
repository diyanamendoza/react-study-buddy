export const data = [
  {
    subject: 'ECMAScript',
    category: 'other',
    explanation:
      'ECMAScript is a standard that JavaScript follows. Can be looked as a blueprint or set of guidelines. The official name of the standard is ECMA-262, and it is created/updated by an organization called Ecma International. The first edition (ES1) was published in 1997. ES12 came out in 2021. Features associated with the different versions that may ring a bell: for...of loops are from ES6, Array.prototype.includes is from ES7, the spread operator is from ES9, Promise.any is from ES12.',
    source: 'https://en.wikipedia.org/wiki/ECMAScript',
  },
  {
    subject: 'Virtual DOM',
    category: 'other',
    explanation:
      'In React, for every DOM object, there is a corresponding virtual DOM object - like a lightweight copy that has the same properties but does not actually change what is on the screen. When a JSX element is rendered, every single virtual DOM object gets updated. Then React does something called "diffing," where it compares the virtual DOM with a snapshot it took right before the update to see what has changed. "Diffing" allows React to only update the changed objects in the real DOM, saving time and improving performance.',
    source: 'https://www.codecademy.com/article/react-virtual-dom',
  },
  {
    subject: 'Fragments',
    category: 'other',
    explanation:
      'Released with React v16.2.0, fragments are a modern syntax for adding multiple elements to a component without wrapping them in an extra DOM node (meaning they do not produce extra elements in the DOM). They help reduce use of divs, which means we get a shallower component tree. Created with either <React.Fragment>, <Fragment>, or <>. The first two allow you to pass a key prop (<Fragment key={index}>), which is handy when rendering with a loop. Sample fragment use case: Say you are mapping an array of items into a component to display them as a list. If the parent wrapper in the component is a div, each item is getting a div. If the wrapper is a fragment, each item is just getting the internal tags, which helps performance if your list is super long.',
    source: 'https://blog.logrocket.com/react-fragments-an-overview/',
  },
  {
    subject: 'State',
    category: 'other',
    explanation:
      'State is a special built-in object in React that makes it possible for components to create and manage their own data. This data management can happen in three ways: locally (the data and updaters are limited to the scope of the component), parentally (data and updaters are passed in as props from higher up in the component tree), and remotely (data is stored and updated outside of the ancestry of the component tree). Local state can be managed with useState, useReducer, or this.state (via a class component). Parental state might be used when you need the data passed to be accessed by other children, or when you want to make testing the child component easier by passing props into it. Remote state management is accomplished with tools like Redux and React Context API. ',
    source: 'https://kyleshevlin.com/three-kinds-of-react-state',
  },
  {
    subject: 'Components',
    category: 'other',
    explanation:
      'Components are independent, reusable code blocks. These blocks make up the user interface (UI) of your React app, rather than having a UI composed all in one single file. There are two types of React components: functional and class. Functional components are ES6 functions (traditional syntax or arrow syntax) that return a React JSX element and are exported from their respective files to be used in your views/pages. Class components use ES6 classes to define a component and must include a render method for returning the JSX element. We used to use class components more because older versions of React did not allow the use of state inside functional components. Since hooks entered the scene, state can now be managed in functional components.',
    source:
      'https://www.freecodecamp.org/news/react-components-jsx-props-for-beginners/',
  },
  { subject: 'useReducer', category: 'hooks' },
  { subject: 'useRef', category: 'hooks' },
  { subject: 'useCallback', category: 'hooks' },
  {
    subject: 'Error Boundary',
    category: 'other',
    explanation:
      'A component meant to handle runtime errors. Must be written as a class component. You can wrap individual components in your error boundary component or wrap the app at the root level. The error boundary component must implement one or both of these methods: getDerivedStateFromError, componentDidCatch. The latter lets you catch the error and handle it as desired (e.g., log it somewhere specific). The former is for updating your class state so you can render a fallback UI if error state is true. Note: There is an npm module called "react-error-boundary" that does some of the set up above for you.',
    source:
      'https://kentcdodds.com/blog/use-react-error-boundary-to-handle-errors-in-react',
  },
]
