import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
function App() {
  return (
    <>
      <Navbar logo={"Practice"} FirstLink={"Home"} SecondLink={"Profile"} />
      <Form  heading={'Enter Text to analyze below'}/>
    </>
  );
}

export default App;
