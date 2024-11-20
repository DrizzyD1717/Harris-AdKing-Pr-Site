import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import SiteCreator from "./Components/SiteCreator/SiteCreator";
import Works from "./Components/Works/Works";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Hero></Hero>
      <Works></Works>
      <About></About>
      <Contact></Contact>
      <SiteCreator></SiteCreator>
    </div>
  );
}

export default App;
