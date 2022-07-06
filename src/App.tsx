import "./styles.css";
import Header from "./header";
import Operators from "./operators";
import Buttons from "./buttons";
export default function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Operators />
        <Buttons />
      </main>
    </div>
  );
}
