import "./App.css";

const style = {
  fontSize: "33px",
  fontStyle: "italic",
  color: "red",
  paddingTop: "110px",
};
let text = "test variable";

function App() {
  let text2 = "222";
  return (
    <>
      <div className="container">
        <h1 style={style}>app_1</h1>
        <img src="/images/logo192.png" alt="test" />
        <ul>
          <li>Hello</li>
          <li>{text + text2}</li>
        </ul>
      </div>
    </>
  );
}

export default App;
