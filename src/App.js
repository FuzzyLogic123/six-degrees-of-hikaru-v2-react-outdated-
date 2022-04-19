import TripleSharpArrow from "./components/stylistic/TripleSharpArrows";
import TripleHollowArrows from "./components/stylistic/TripleHollowArrows";
import TripleThinArrow from "./components/stylistic/TripleThinArrows";
import HikaruPhoto from "./components/HikaruPhoto/HikaruPhoto"
import Background from "./components/stylistic/Background";
import Logo from "./components/Logo/Logo";

function App() {
  return (
    <div className="App">
      <Background />
      <div className="h-screen">
        <div className="flex flex-row h-full">
          <div className="flex flex-1 items-center justify-center">
            <Logo />
          </div>
          <div className="flex flex-1 items-center justify-center">
            <HikaruPhoto />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
