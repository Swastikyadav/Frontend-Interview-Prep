How many ways you can center a div?

Answer: Yes!

transform/translate
```css
body {
    width: 100%;
    height: 100%;
}

div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

flexbox
```css
body {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
```

grid
```css
body {
    width: 100%;
    height: 100vh;
    display: grid;
    justify-content: center;
    align-items: center;
}
```