import "./App.css";
import AboutMe from "./components/about/AboutMe";
import Banner from "./components/banner/Banner";

function App() {
  return (
    <div className="root">
      <span className="margin" />
      <Banner />
      <AboutMe />
    </div>
  );
}

export default App;
