Explain Event Delegation

Answer:
Javascript is also known as `Event Driven Development` language.

There are multiple events in Js like click, mouseover, mouseout, keypress, keydown, keyup, load, submit, change, resize, scroll, focus, blur, dblclick, mousemove, mouseenter, mouseleave, touchstart, touchmove, touchend, touchcancel, contextmenu, select, selectstart, selectend, reset, focusin, focusout, DOMContentLoaded.

Let's understand with an example.

Suppose we have a ul element and multiple li elements inside it. And we are working with click event on the li element.

Now, whenever onClick is triggered on any li element that information is delegated or communicated to the parent ul element. This is called Event Delegation.

We can also put the onClick even handler on parent ul instead of listening click event on each li element.

Example:

```html
<ul id="products">
    <li>Shoes</li>
    <li>Shirts</li>
    <li>Pants</li>
    <li>Jeans</li>
</ul>
```

```js
document.querySelector("#products").addEventListener("click", (event) => {
    console.log(event);

    if (event.target.tagName === "LI") {
        window.location.href += "#" + event.target.id;
    }
});
```