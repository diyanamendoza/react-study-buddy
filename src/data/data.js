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
  { subject: 'useReducer', category: 'hooks' },
  { subject: 'useRef', category: 'hooks' },
  { subject: 'useCallback', category: 'hooks' },
]
