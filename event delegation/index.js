/*
document.querySelector("#categories").addEventListener("click", (e) => {
  // redirect user only if he clicks on a list element
  if (e.target.tagName == "LI") {
    // console.log(e.target.id);
    window.location.href = "/" + e.target.id;
  }
});
*/

document.querySelector("#form").addEventListener("keyup", (e) => {
  //   console.log(e);
  if (e.target.dataset.uppercase != undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});
