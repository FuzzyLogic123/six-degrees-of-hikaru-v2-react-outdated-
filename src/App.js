import TripleSharpArrow from "./components/stylistic/TripleSharpArrows";
import TripleHollowArrows from "./components/stylistic/TripleHollowArrows";
import TripleThinArrow from "./components/stylistic/TripleThinArrows";
import HikaruPhoto from "./components/HikaruPhoto/HikaruPhoto"
import Background from "./components/stylistic/Background";
import Logo from "./components/Logo/Logo";
import MenuBar from "./components/MenuBar/MenuBar";
import FindPathButton from "./components/FindPathButton/FindPathButton";

function App() {
  return (
    <div className="App">
      <div className="relative bg-[#1C1E23]">
        <MenuBar />
        <div className="relative flex flex-col xl:flex-row">
          <div className="relative flex flex-col sm:gap-7 flex-1 items-center justify-start">
            <div className="scale-50 sm:scale-100 m-0 xl:m-0">
              <Logo />
            </div>
            <div className="">
              <FindPathButton />
            </div>
          </div>
          <div className="hidden xl:flex flex-1 items-center justify-center">
            <div className="scale-50 xl:scale-100">
              <HikaruPhoto />
            </div>
          </div>
        </div>
        <p>

        </p>
      </div>
    </div>
  );
}

export default App;
