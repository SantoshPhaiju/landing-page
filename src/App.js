import AllCategories from "./components/AllCategories";
import Card from "./components/Card";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Video from "./components/Video";

function App() {
  return (
    <div>
      <Navbar />
      <Video />
      <Card />
      <Services />
      <Categories />
      <AllCategories />
      <Pricing />
    </div>
  );
}

export default App;
