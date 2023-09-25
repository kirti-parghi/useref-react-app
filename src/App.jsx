import logo from "./logo.svg";
import "./App.css";
function App() {
  const [age, setAge] = useState(0);
  const ageInput = useRef();
  return (
    <>
      <input
        ref={ageInput}
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <button
        onClick={(e) => {
          console.log((ageInput.current.style.border = "2px solid red"));
        }}
      >
        Click Me
      </button>

      <h1>Age {age}</h1>
    </>
  );
}

export default App;
