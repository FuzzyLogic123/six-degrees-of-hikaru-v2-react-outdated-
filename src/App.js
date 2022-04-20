import TripleSharpArrow from "./components/stylistic/TripleSharpArrows";
import TripleHollowArrows from "./components/stylistic/TripleHollowArrows";
import TripleThinArrow from "./components/stylistic/TripleThinArrows";
import HikaruPhoto from "./components/HikaruPhoto/HikaruPhoto"
import Background from "./components/stylistic/Background";
import Logo from "./components/Logo/Logo";
import MenuBar from "./components/MenuBar/MenuBar";

function App() {
  return (
    <div className="App">
      <div className="bg-[#1C1E23]">
        <MenuBar />
        <div className="relative flex flex-col xl:flex-row">
          <div className="relative flex flex-1 items-center justify-center">
            <div className="scale-50 md:scale-100">
              <Logo />
            </div>
          </div>
          <div className="relative flex flex-1 items-center justify-center">
            <div className="">
              <HikaruPhoto />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
