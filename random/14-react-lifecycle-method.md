Explain React lifecycle method.

Answer:
In class component
```js
import React from "react";

class Counter extends React.Component {
    componentDidMount() { // When component runs for the first time.
        console.log("componentDidMount");
    }
    // In functional component: useEffect with empty dependency array.

    componentDidUpdate(prevProps, prevState) { // Whenever the props or state changes.
        if (prevProps !== this.props.number) {
            console.log("componentDidUpdate");
        }
    }
    // In functional component: useEffect with values in dependency array.

    componentWillUnmount() { // When component is removed or unmounted from the DOM.
        console.log("componentWillUnmount");
    }
    // In functional component: useEffect with empty dependency array and return function.
}
```