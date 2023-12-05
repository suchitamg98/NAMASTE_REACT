import React from "react";
import ReactDOM from "react-dom/client";
//     using just html
//     <h1>Namaste Everyone!!!</h1>
//     using DOM manipulation
//     <div id="root"></div>
//     <scrip>
//       //document.createElement("h1");
//       const heading = document.createElement("h1");
//       heading.innerHTML = "Namaste Everyone by javascript!!!";
//       const root = document.getElementById("root");
//       root.appendChild(heading);
//     </script> -->

// <!-- using react -->

//using React
// const heading = React.createElement(
//   "h1",
//   {},
//   "Namaste everyone from react"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//creating many elements
const heading = React.createElement(
  "h1",
  { id: "title" },
  "Namaste Everyone111"
);
const heading2 = React.createElement(
  "h1",
  { id: "title" },
  "Namaste Everyone this is trial"
);
const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
