var a = 20; // global scope
{
  let a = 30;
  console.log(a); // a has block scope due to enclosed in block
}

// if you put var inside function scope then it works fine
const b = 100;
function x() {
  const b = 90;
}

const d = 20;
{
  const d = 100;

  {
    const d = 200;
    console.log(d); // finds do in the nearest scope, prints 200
  }
}
// you can not shadow a let variable using var inside the block but vice versa can be done
// you can shadow a var variable using let inside a block
// illegal shadowing
let aa = 50;
{
  let aa = 20;
}

// whether you declare function with keyword or arrow functions, scope concepts remains the same
