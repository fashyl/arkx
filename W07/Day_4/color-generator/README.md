## Clipboard API
The Clipboard API provides the ability to respond to clipboard commands (cut, copy, and paste), as well as to asynchronously read from and write to the system clipboard.
[**Instance methods**](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard):
Clipboard is based on the EventTarget interface, and includes its methods.
- `read()`
    Requests arbitrary data (such as images) from the clipboard, returning a Promise that resolves with an array of ClipboardItem objects containing the clipboard's contents.
- `readText()`
    Requests text from the system clipboard, returning a Promise that is fulfilled with a string containing the clipboard's text once it's available.
- `write()`
    Writes arbitrary data to the system clipboard, returning a Promise that resolves when the operation completes.
- `writeText()`
    Writes text to the system clipboard, returning a Promise that is resolved once the text is fully copied into the clipboard.
## Simulating Pseudo-classes with JavaScript
When styling elements on a webpage, the `:active` pseudo-class is often used to apply styles when an element is being activated, such as during a click or touch event.
1. **Styles**: 
   ```css
   .button:active {
       background-color: #ccc; /* Change background color when active */
   }
   ```
2. **Event Listeners**: 
   ```javascript
   var button = document.querySelector('.button');

   button.addEventListener('mousedown', function() {
       button.classList.add('active');
   });

   button.addEventListener('touchstart', function() {
       button.classList.add('active');
   });

   document.addEventListener('mouseup', function() {
       button.classList.remove('active');
   });

   document.addEventListener('touchend', function() {
       button.classList.remove('active');
   });
   ```