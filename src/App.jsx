import Testimonials from "./components/Testimonials";
import reviews from "./data.js";

function App() {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center align-center bg-violet-100">
      <div className="text-center">
        <h1 className="text-4xl text-bold">Our Testimonials</h1>
        <div className="bg-violet-400 h-[4px] w-[200px] mx-auto mt-3"></div>
        <Testimonials reviews={reviews} /> 
      </div>
    </div>
  );
}

export default App;
