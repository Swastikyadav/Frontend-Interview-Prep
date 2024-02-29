# What is CSS `display` property and can you give a few examples of its use?

The common values for display property are: `none`, `block`, `inline`, `inline-block`, `flex`, `grid`, `table`, `table-row`, `table-cell`, `list-items`.

- `none`: Does not diplay an element (The element no longer affects the layout of document). All child elements are also no longer displayed. The document is rendered as if the element does not exist in the document tree.
- `block`: The element consumes the whole line in the block direction (which is generaly horizontal). Takes full available width.
- `inline`: Elements can be laid out beside each other. Takes only the width required by the element. Width and height of an inline element can not be set.
- `inline-block`: Similar to inline but allows some block properties like width and height.
- `flex`: Behaves as block level `flex` container, which can be manipulated using flexbox model.
- `grid`: Behaves as block level `grid` container using grid layout.
- `table`: Behaves as table element.
- `table-row`: Behaves as `<tr>` element.
- `table-cell`: Behaves as `<td>` element.
- `list-item`: Behaves as `<li>` element which allows it to define `list-style-type` and `list-style-position`.

----

Reference: https://developer.mozilla.org/en-US/docs/Web/CSS/display