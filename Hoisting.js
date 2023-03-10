// variable of function can call before declaration
/*esline-disable*/
call();

function call() {
  console.log("Helllo");
}

// variable hoisting

let a;
console.log(a);
a = 10;
