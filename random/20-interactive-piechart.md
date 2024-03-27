Create a pieChart the value of which can be controlled with a range slider. Sliding the range slider should update the pie chart in real time.

No library or package is allowed. Create this in vanilla HTML, CSS, and JS. Not even React is allowed.

Answer:
```html
<input id="range-slider" type="range" min="0" max="100" value="10" />
<br /><br />
<div id="chart" style="--percentage:10%"></div>
```

```css
#range-slider {
  width: 400px;
}

#chart {
  width: 200px;
  height: 200px;
  border: 1px solid black;
  border-radius: 100%;
  position: relative;
  
  background-image: conic-gradient(blue var(--percentage), lightgray 0);
}
```

```js
const rangeSlider = document.querySelector("#range-slider");
const chart = document.querySelector("#chart");

rangeSlider.addEventListener("input", (event) => {
  chart.style = `--percentage:${event.target.value}%`;
});
```