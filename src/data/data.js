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
  { subject: 'useReducer', category: 'hooks' },
  { subject: 'useRef', category: 'hooks' },
  { subject: 'useCallback', category: 'hooks' },
]
