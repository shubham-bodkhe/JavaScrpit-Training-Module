console.error("Error");
console.warn("Warning");

function call(a) {
  console.count(`${a}`);
}
call("hello");
call("hello");
call("bye");

function group() {
  console.group("group started");
  console.error("Error");
  console.warn("Warning");
  console.groupEnd("End");
}
group();

function groupCOllapsed() {
  console.groupCollapsed("group started");
  console.error("Error");
  console.warn("Warning");
  console.groupEnd("End");
}

groupCOllapsed();

// breakpoint
debugger;
