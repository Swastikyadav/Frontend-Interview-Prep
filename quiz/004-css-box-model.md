# Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.

Every element in HTML is considered a rectangular boxes that are generated for elements in the document tree and laid out according to the visual formatting model. Each box has a content area (e.g text, image, e.t.c) and optional surrounding `padding`, `border`, and `margin` areas.

The CSS box model is responsible for calculating:

- How much space a block element takes up.
- Whether or not borders and/or margins overlap, or collapse.
- A box's dimensions.

## Box Model Rules
- The dimensions of a block element are calculated by `width`, `height`, `paddings`, and `borders`.
- If no height is specified, a block element will be as high as the content it contains, plus padding (unless there are floats).
- If no width is specified, a non-float-ed block element will expand to fit the width of its parent minus the padding, unless it has a max-width property set, in which case it will be no wider than the specified maximum width.
    - Some block-level elements (e.g. table, figure, and input) have inherent or default width values, and may not expand to fill the full width of their parent container.
    - Note: span is an inline-level element and does not have a default width, so it will not expand to fit.
- The height of an element is calculated by the content's height.
- The width of an element is calculated by the content's width.
- By default (`box-sizing: content-box`), paddings and borders are not part of the width and height of an element.

Note that margins are not counted towards the actual size of the box. It affects the total space that the box will take up on the page, but only the space outside the box. The box's area stops at the border — it does not extend into the margin.

## Extra
- `box-sizing: content-box`: This is the default value of box-sizing and adheres to the rules above.
- `box-sizing: border-box`: The width and height will include the content, padding and border, but not including the margin. This is a much more intuitive way to think about boxes and hence many CSS frameworks (e.g. Bootstrap, Tailwind, Bulma) set * { box-sizing: border-box; } globally, so that all elements use such a box model by default.

----

Reference: https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#the_standard_css_box_model