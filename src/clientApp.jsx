const myTitle = (props) => {
  return React.createElement("h1", null, props.title);
};
const myFirstComponent = () => {
  return React.createElement(
    "div",
    {},
    React.createElement(myTitle, { title: "Game of thrones" })
  );
};
ReactDOM.render(
  React.createElement(myFirstComponent),
  document.getElementById("app")
);
