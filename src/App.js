import logo from "./logo.svg";
import Clocks from "./component/clocks";
function App() {
  return (
    <div>
      <Clocks name={"Moscow"} timezone={"+3"} gmt={3} />
      <Clocks name={"London"} timezone={""} gmt={0} />
      <Clocks name={"Azores"} timezone={"-1"} gmt={-1} />
    </div>
  );
}

export default App;
