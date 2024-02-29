# What does `*{box-sizing: border-box}` do?

## What are its advantages?
By default elements have `box-sizing: content-box` applied, and only the content size is being accounted for if an element has `width` and `height` specified.

`box-sizing: border-box` changes how the `width` and `height` of elements are being calculated, `border` and `padding` are also included in the calculation.

- content box --> content size (only).
- border box --> content size + padding + border (everything till border).

## Advantages
Taking into account `padding`'s and `border`'s as part of the box model resonates better with how designers actually imagine content in grid.

This is a much more intuitive way to think about boxes and hence many CSS frameworks set * { box-sizing: border-box; } globally, so that all elements use such a box model by default.

----

Reference: https://css-tricks.com/box-sizing/