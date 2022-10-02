import Card from "./components/Card";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
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
    </div>
  );
}

export default App;
