1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:
getElementById is used for find a specific element using a unique id and it only return 1 element but if i use getElementsByClassName it will return all the matching elements of the same class name and by using querySelector i can find the first matching element of (id/className/tag) but if i use querySelectorAll it will return all the matching elements of (id/className/tag) 

2. How do you create and insert a new element into the DOM?

Answer:
can create new element into DOM using document.createElement(" ");
if i need to insert new element into DOM then i can use innerText,innerHtml and classlist.add/remove


3. What is Event Bubbling? And how does it work?
Answer:
Event Bubbling is a DOM  concept and it happens when an element recieved an event it propagate from the current element to the parent element(child element to parent element).



4. What is Event Delegation in JavaScript? Why is it useful?
Answer:
Event delegation is a design pattern in javascript,In some cases we need to add event listener in button or others child element but using event Delegation adding a single event listener to a parent element so we can track the every child elevent by their unique id.



5. What is the difference between preventDefault() and stopPropagation() methods?
Answer:
As of my knowledge preventDefault() stop the element default behavior and stopPropagation() stop the event bubbling so i can't reach to the parent.
