# Flexbox Properties
Following along [Slaying The Dragon](https://www.youtube.com/@slayingthedragon) (a legend.)
## Overview
Flexbox, or Flexible Box, is a CSS layout model designed to provide a more efficient way to arrange, align, and distribute space among items in a container. It simplifies complex layouts and enables responsive design with less code.

## [Basics and terminology](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-basics-and-terminology)
Since flexbox is a whole module and not a single property, it involves a lot of things including its whole set of properties. Some of them are meant to be set on the container (parent element, known as “flex container”) whereas the others are meant to be set on the children (said “flex items”).

If “regular” layout is based on both block and inline flow directions, the flex layout is based on “flex-flow directions”. 

![A diagram explaining flexbox terminology. The size across the main axis of flexbox is called the main size, the other direction is the cross size. Those sizes have a main start, main end, cross start, and cross end.](https://css-tricks.com/wp-content/uploads/2018/11/00-basic-terminology.svg)

Items will be laid out following either the `main axis` (from `main-start` to `main-end`) or the cross axis (from `cross-start` to `cross-end`).

-   **main axis** – The main axis of a flex container is the primary axis along which flex items are laid out. Beware, it is not necessarily horizontal; it depends on the `flex-direction` property (see below).
-   **main-start | main-end** – The flex items are placed within the container starting from main-start and going to main-end.
-   **main size** – A flex item’s width or height, whichever is in the main dimension, is the item’s main size. The flex item’s main size property is either the ‘width’ or ‘height’ property, whichever is in the main dimension.
-   **cross axis** – The axis perpendicular to the main axis is called the cross axis. Its direction depends on the main axis direction.
-   **cross-start | cross-end** – Flex lines are filled with items and placed into the container starting on the cross-start side of the flex container and going toward the cross-end side.
-   **cross size** – The width or height of a flex item, whichever is in the cross dimension, is the item’s cross size. The cross size property is whichever of ‘width’ or ‘height’ that is in the cross dimension.