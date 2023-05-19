# code-next-react-counter-yaiuox

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/code-next-react-counter-claqdy)

A lesson for the [Code Next](https://codenext.withgoogle.com/) React club.

In this lesson, engineers will

- create a counter component using React
- understand the benefits of using React
- solidify their knowledge of the useState hook and React onClick events

## Counter component

### YOUR TURN

Make a counter component using React.

- A display that shows the user what the `count` is at. The `count` should be initialized at 0. 
- A decrement button that subtracts 1 from the current `count` and updates the display.
- An increment button that adds 1 to the current `count` and updates the display.

#### Recipes

##### Create and show state

```jsx
const Example = () => {
  const [count, setCount] = useState(0);

  return <div>Count: {count}</div>;
};
```

##### Add click handler

```jsx
const Example = () => {
  const increment = () => {
    console.log('increment');
  };

  return <button onClick={increment}>increment</button>;
};
```

### Reflection

- Why do we have to use `React.useState`?
- What does React do under-the-hood for us?