import { About } from "./Components/About";
import { Footer } from "./Components/Footer";
import { Hero } from "./Components/Hero";
import { Testimonial } from "./Components/Testimonial";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Testimonial />
      <Footer />
    </div>
  );
}
export default App;
