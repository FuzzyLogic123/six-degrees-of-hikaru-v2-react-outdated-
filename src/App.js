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
      <div className="sm:py-20 xl:py-36">
        <h1 className="text-5xl xl:text-7xl uppercase leading-tight text-white text-center py-0 px-4">paths to <b>Hikaru</b> calculated so far</h1>
        <h1 className="text-8xl xl:text-9xl font-bold text-center py-14 text-[#EA0990]">1,304</h1>
      </div>


      <div className="relative bg-[url(./images/backgroundImages/heroDark.jpg)] circular-div w-screen">
        <div className="m-8 md:m-20">

          <svg className="scale-75" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="47.5" fill="#403EC8" stroke="#606AEF" stroke-width="5" />
            <path d="M71.0938 33.7192L69.125 59.3129M23.8438 41.5942L37.625 29.7817L23.8438 41.5942ZM35.6562 69.1567L23.8438 49.4692L35.6562 69.1567ZM53.375 47.5004L67.1562 33.7192L53.375 47.5004ZM63.2188 59.3129L53.375 53.4067L63.2188 59.3129ZM25.8125 47.5004L47.4688 49.4692L25.8125 47.5004ZM42.5469 72.1098L63.2188 65.2192L42.5469 72.1098ZM50.4219 24.663L65.1875 26.8285L50.4219 24.663Z" stroke="white" stroke-width="3" />
            <path d="M43.5312 32.7345C47.3368 32.7345 50.4219 29.6495 50.4219 25.8439C50.4219 22.0383 47.3368 18.9531 43.5312 18.9531C39.7257 18.9531 36.6406 22.0383 36.6406 25.8439C36.6406 29.6495 39.7257 32.7345 43.5312 32.7345Z" fill="#25B39E" stroke="#25B39E" stroke-miterlimit="0.6" />
            <path d="M21.875 50.4532C24.5933 50.4532 26.7969 48.2497 26.7969 45.5314C26.7969 42.8131 24.5933 40.6095 21.875 40.6095C19.1567 40.6095 16.9531 42.8131 16.9531 45.5314C16.9531 48.2497 19.1567 50.4532 21.875 50.4532Z" fill="#25B39E" stroke="#25B39E" stroke-miterlimit="0.6" />
            <path d="M38.6094 76.047C40.784 76.047 42.5469 74.2841 42.5469 72.1095C42.5469 69.9349 40.784 68.172 38.6094 68.172C36.4348 68.172 34.6719 69.9349 34.6719 72.1095C34.6719 74.2841 36.4348 76.047 38.6094 76.047Z" fill="#F05542" stroke="#F05542" stroke-miterlimit="0.6" />
            <path d="M50.4219 54.3907C52.5965 54.3907 54.3594 52.6279 54.3594 50.4532C54.3594 48.2786 52.5965 46.5157 50.4219 46.5157C48.2473 46.5157 46.4844 48.2786 46.4844 50.4532C46.4844 52.6279 48.2473 54.3907 50.4219 54.3907Z" fill="#F8B84E" stroke="#F8B84E" stroke-miterlimit="0.6" />
            <path d="M66.1719 66.2032C68.3465 66.2032 70.1094 64.4404 70.1094 62.2657C70.1094 60.0911 68.3465 58.3282 66.1719 58.3282C63.9973 58.3282 62.2344 60.0911 62.2344 62.2657C62.2344 64.4404 63.9973 66.2032 66.1719 66.2032Z" fill="#4BBFEB" stroke="#4BBFEB" stroke-miterlimit="0.6" />
            <path d="M69.125 34.7032C71.8433 34.7032 74.0469 32.4996 74.0469 29.7814C74.0469 27.0631 71.8433 24.8595 69.125 24.8595C66.4067 24.8595 64.2031 27.0631 64.2031 29.7814C64.2031 32.4996 66.4067 34.7032 69.125 34.7032Z" fill="#F05542" stroke="#F05542" stroke-miterlimit="0.6" />
          </svg>

          <h3 className="text-[#818CF8] m-1 text-xl md:text-2xl xl:text-3xl font-bold md:font-medium">See how you compare</h3>
          <h1 className="capitalize text-white text-5xl md:text-7xl xl:text-9xl font-bold">Find your path</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
