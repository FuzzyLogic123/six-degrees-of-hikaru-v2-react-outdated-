import TripleSharpArrow from "./components/stylistic/TripleSharpArrows";
import TripleHollowArrows from "./components/stylistic/TripleHollowArrows";
import TripleThinArrow from "./components/stylistic/TripleThinArrows";
import HikaruPhoto from "./components/HikaruPhoto/HikaruPhoto"
import Background from "./components/stylistic/Background";
import Logo from "./components/Logo/Logo";
import MenuBar from "./components/MenuBar/MenuBar";
import FindPathButton from "./components/FindPathButton/FindPathButton";
import { ReactComponent as LongArrow } from "./svg/longArrow.svg"
import Testimonials from "./components/Testimonial/Testimonials";
import thePope from "./images/the-pope.png"
import kevinHart from "./images/kevin-hart.jpg"
import jesus from "./images/jesus.jpg"

function App() {
  return (
    <div className="App bg-[url(./images/backgroundImages/background.png)]">
      {/* <div className="relative "> */}
      <div className="p-5 lg:pt-0 lg:pb-3">
        <MenuBar />
      </div>
      <div className="relative flex flex-col xl:flex-row xl:ml-28">
        <div className="relative flex flex-col sm:gap-7 flex-1 items-center justify-start">
          <div className="scale-50 sm:scale-100 2xl:scale-[1.3] m-0 xl:m-0 2xl:p-28">
            <Logo />
          </div>
          <div className="m-5 sm:m-10 2xl:scale-150">
            <FindPathButton />
          </div>
        </div>
        <p className="absolute -left-36 bottom-40 font-LibreBarcode128 text-white -rotate-90 text-xl tracking-[7px] 2xl:text-4xl">
          six degrees
        </p>
        <div className="absolute -left-24 bottom-6 scale-[0.25] 2xl:scale-[0.5] 2xl:bottom-36 2xl:-left-20">
          <LongArrow className="stroke-slate-200 stroke-2 fill-white" />
        </div>
        <div className="hidden xl:flex flex-1 items-center justify-center">
          <div className="scale-50 xl:scale-100 2xl:scale-[1.5] 2xl:mt-48">
            <HikaruPhoto />
          </div>
        </div>
      </div>
      <div>
        <Testimonials quotes={[
          [
            "This website means nothing to me",
            "Kevin Hart",
            kevinHart

          ],
          [
            "Only when a mosquito lands on your testicles, will you truly learn to solve a problem without violence",
            "Dalai Lama",
            thePope

          ],
          [
            "This made me a better chess player",
            "Jesus",
            jesus

          ]
        ]} />
      </div>
      <div className="sm:py-20 xl:py-48">
        <h1 className="text-5xl xl:text-7xl uppercase leading-tight text-white text-center py-0 px-4">paths to <b>Hikaru</b> calculated so far</h1>
        <h1 className="text-8xl xl:text-9xl font-bold text-center py-14 text-[#EA0990]">1,304</h1>
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;
