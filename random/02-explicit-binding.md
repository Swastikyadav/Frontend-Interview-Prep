## Phase 1
Q. Implicit and explicit binding. What will be the output here.

```js
var obj = {
    name: "Swastik",
    display: function() {
        console.log(this.name);
    },
};

var obj1 = {
    name: "Yadav",
}

obj.display.call(obj1);
```

Answer:
The output will be `Yadav`. Because the display method is called with the object `obj1` as the context. Display method call is explicitly binded with obj1.

Take the context of obj1 not obj.

## Phase 2
Q. What is the method is changed from regular fuction to an arrow function.

```js
var obj = {
    name: "Swastik",
    display: () => { // Changed to arrow function
        console.log(this.name);
    },
};

var obj1 = {
    name: "Yadav",
}

obj.display.call(obj1);
```

Answer:
The method is changed to an arrow function because arrow function does not bind the context. Arrow function points to the global/window obejct. Hence there will be no output in case of `display` method being an arrow function.