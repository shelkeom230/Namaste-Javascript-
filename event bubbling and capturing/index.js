// add event listeners on the div's
document.querySelector("#grandparent").addEventListener(
  "click",
  (e) => {
    console.log("GrandParent clicked", new Date().toLocaleTimeString());

    // e.stopPropagation();
  },
  false
);

document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("Parent clicked", new Date().toLocaleTimeString());
    // stop further event propogation
    // e.stopPropagation();
  },
  false
); // bubbling

document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    console.log("Child clicked", new Date().toLocaleTimeString());

    // it is a good way to stop unnecessary even propogation.
    e.stopPropagation();
  },
  false
); // bubbling

// by default bubbling up is there.
// when you set third parameter as true, then it uses tickling/capturing down mode

// always, trickling down happens first
