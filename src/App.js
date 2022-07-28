import { React } from 'react';
import HikaruPhoto from "./components/HikaruPhoto/HikaruPhoto"
import Logo from "./components/Logo/Logo";
import MenuBar from "./components/MenuBar/MenuBar";
import FindPathButton from "./components/FindPathButton/FindPathButton";
import { ReactComponent as LongArrow } from "./svg/longArrow.svg"
import Testimonials from "./components/Testimonial/Testimonials";
import thePope from "./images/the-pope.png"
import kevinHart from "./images/kevin-hart.jpg"
import jesus from "./images/jesus.jpg"
import HeroHeader from "./components/HeroHeader/HeroHeader";
import { ReactComponent as ConnectionsSvg } from './svg/connectionsSvg.svg';
import { ReactComponent as ExclamationSvg } from './svg/exclamationSvg.svg';
import { ReactComponent as King } from './svg/king.svg';

import Footer from "./components/Footer/Footer";
import DegreesPath from "./components/DegreesPath/DegreesPath";

function App() {
  return (
    <div className="App bg-[url(./images/backgroundImages/background.png)]">
      <div className="p-5 lg:pt-0 lg:pb-3">
        <MenuBar />
      </div>
      <div className="relative flex flex-col xl:flex-row xl:ml-28">
        <div className="relative flex flex-col sm:gap-7 flex-1 items-center justify-start">
          <div id='home' className="scale-50 sm:scale-100 2xl:scale-[1.3] m-0 xl:m-0 2xl:p-28">
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


      <div id="six-degrees" className="relative bg-[url(./images/backgroundImages/heroDark.jpg)] circular-div w-screen">

        <HeroHeader svg={<ConnectionsSvg />} colour={"#818CF8"} secondaryText={"See how you compare"} mainText={"Find your path"} />


          <div className="pt-12 pb-16 flex justify-center gap-6 w-full">
            <input className="basis-2/4 inline-block text-white p-3 rounded-md border-2 border-slate-800 bg-slate-900 xl:text-xl text-lg" type="text" placeholder="chess.com username" />
            <button className='inline-block bg-slate-900 border-slate-800 border-2 p-3 rounded-md xl:text-xl text-lg text-white'>
              {/* <p className='opacity-50 hover:opacity-90'>Find your Path</p> */}
              <King className='stroke-slate-400 hover:stroke-slate-50'/>
            </button>
          </div>



        <DegreesPath />

        <div id='about'>
          <HeroHeader svg={<ExclamationSvg />} colour={"#53DAA1"} secondaryText={"About the website"} mainText={"How it works"} />
        </div>

        <p className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl leading-7 text-center font-Sen m-10 md:m-20 xl:m-32 2xl:mx-72">
          The aim of this website is to find the quickest path from you to Grandmaster Hikaru by games won.
          <br /><br />
          Inspired by the six degrees of seperation, this website uses a database of 100 000 users, precalculating the chain to 3 degrees with breadth first search.
          <br /><br />
          If a user is not in the database, the algorithim will then find which user is the most optimal choice moving forward, until it finds a user in the database.
          <br /><br />
          Thanks for visiting and enjoying the website.
          It was a lot of effort and I appreciate you taking the time!
        </p>

        {/* TODO: create manually so that links work and is centered on all devices */}
        <div className="pb-10">
          <Footer className="w-screen text-center" />
        </div>

      </div>
    </div>
  );
}

export default App;
