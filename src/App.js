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
import { ReactComponent as FooterSvg } from './svg/footer.svg';
import Profile from "./components/DegreesPath/Profile";
import pfp from "./images/pfp.jpeg";
import levy from "./images/levy.png";
import hikaru from "./images/hikaru.jpeg";
import aman from "./images/aman.jpeg";
import daniel from "./images/daniel.jpeg";

function App() {
  return (
    <div className="App bg-[url(./images/backgroundImages/background.png)]">
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

        <HeroHeader svg={<ConnectionsSvg />} colour={"#818CF8"} secondaryText={"See how you compare"} mainText={"Find your path"} />



        <div className="px-8 text-center pt-12 pb-16">
          <input className="text-white w-5/6 lg:w-3/4 p-3 rounded-md border-2 border-slate-800 bg-slate-900 xl:text-xl text-lg" type="text" placeholder="chess.com username" />
        </div>

        {/* change height after content is added in */}
        <div className="min-h-screen relative md:p-20">
          {/* background shapes */}
          <svg className="opacity-[0.2] absolute scale-50 md:scale-100" width="265" height="239" viewBox="0 0 265 239" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.39265 139.75L81.5 1L161.607 139.75H1.39265Z" stroke="white" stroke-opacity="0.5" />
            <path d="M203.743 203.739L190.248 227.114L189.815 226.864L183.5 237.801L177.185 226.864L176.752 227.114L163.257 203.739L163.69 203.489L150.194 180.114L149.761 180.364L136.266 156.989L136.699 156.739L123.203 133.364L122.77 133.614L109.274 110.239L109.707 109.989L103.393 99.0513H116.022V98.5513H143.013V99.0513L170.004 99.0513V98.5513H196.996V99.0513H223.987V98.5513H250.978V99.0513H263.607L257.293 109.989L257.726 110.239L244.23 133.614L243.797 133.364L230.301 156.739L230.734 156.989L217.239 180.364L216.806 180.114L203.31 203.489L203.743 203.739Z" stroke="white" stroke-opacity="0.5" stroke-dasharray="30 30" />
          </svg>

          <svg className="opacity-[0.1] absolute scale-50 left-1/3 top-1/4" width="384" height="393" viewBox="0 0 384 393" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M224.949 70.7204C228.874 79.883 231.616 89.6509 232.99 99.8412L231.999 99.9748C232.659 104.877 233 109.877 233 114.957C233 120.036 232.659 125.037 231.999 129.938L232.99 130.072C231.616 140.262 228.874 150.03 224.949 159.193L224.029 158.799C220.063 168.057 214.878 176.693 208.67 184.514L209.454 185.136C203.185 193.034 195.882 200.108 187.745 206.162L187.148 205.36C179.178 211.289 170.401 216.233 161.005 220.005L161.378 220.933C152.157 224.635 142.346 227.218 132.121 228.509L131.996 227.517C127.087 228.137 122.082 228.457 117 228.457C111.918 228.457 106.913 228.137 102.004 227.517L101.879 228.509C91.6541 227.218 81.8432 224.635 72.6223 220.933L72.9949 220.005C63.5994 216.233 54.8219 211.289 46.8521 205.36L46.2552 206.162C38.1179 200.108 30.8153 193.034 24.5463 185.136L25.3296 184.514C19.1217 176.693 13.9368 168.057 9.9706 158.799L9.05139 159.193C5.12627 150.03 2.38368 140.262 1.01044 130.072L2.00148 129.938C1.34092 125.037 1 120.036 1 114.957C1 109.877 1.34092 104.877 2.00148 99.9748L1.01044 99.8412C2.38368 89.6509 5.12627 79.883 9.05139 70.7204L9.9706 71.1142C13.9368 61.8557 19.1217 53.2198 25.3296 45.3987L24.5463 44.777C30.8154 36.8788 38.1179 29.8054 46.2552 23.751L46.8521 24.5533C54.8219 18.6237 63.5994 13.68 72.9949 9.90797L72.6223 8.97997C81.8432 5.27808 91.6541 2.69521 101.879 1.40403L102.004 2.39615C106.913 1.77626 111.918 1.45654 117 1.45654C122.082 1.45654 127.087 1.77626 131.996 2.39615L132.121 1.40403C142.346 2.69522 152.157 5.27808 161.378 8.97997L161.005 9.90798C170.401 13.68 179.178 18.6237 187.148 24.5533L187.745 23.751C195.882 29.8054 203.185 36.8788 209.454 44.777L208.67 45.3987C214.878 53.2198 220.063 61.8557 224.029 71.1142L224.949 70.7204Z" stroke="white" stroke-opacity="0.6" stroke-width="2" stroke-dasharray="30 30" />
            <path d="M383 257.457C383 331.439 321.463 391.457 245.5 391.457C169.537 391.457 108 331.439 108 257.457C108 183.474 169.537 123.457 245.5 123.457C321.463 123.457 383 183.474 383 257.457Z" stroke="white" stroke-opacity="0.6" stroke-width="2" />
          </svg>

          <svg className="opacity-[0.1] absolute scale-50 md:scale-100 top-1/2 rotate-180" width="265" height="239" viewBox="0 0 265 239" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.39265 139.75L81.5 1L161.607 139.75H1.39265Z" stroke="white" stroke-opacity="1" />
            <path d="M203.743 203.739L190.248 227.114L189.815 226.864L183.5 237.801L177.185 226.864L176.752 227.114L163.257 203.739L163.69 203.489L150.194 180.114L149.761 180.364L136.266 156.989L136.699 156.739L123.203 133.364L122.77 133.614L109.274 110.239L109.707 109.989L103.393 99.0513H116.022V98.5513H143.013V99.0513L170.004 99.0513V98.5513H196.996V99.0513H223.987V98.5513H250.978V99.0513H263.607L257.293 109.989L257.726 110.239L244.23 133.614L243.797 133.364L230.301 156.739L230.734 156.989L217.239 180.364L216.806 180.114L203.31 203.489L203.743 203.739Z" stroke="white" stroke-opacity="1" stroke-dasharray="30 30" />
          </svg>

          <svg className="absolute scale-75 left-3/4 opacity-[0.05] rotate-45" width="384" height="393" viewBox="0 0 384 393" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M224.949 70.7204C228.874 79.883 231.616 89.6509 232.99 99.8412L231.999 99.9748C232.659 104.877 233 109.877 233 114.957C233 120.036 232.659 125.037 231.999 129.938L232.99 130.072C231.616 140.262 228.874 150.03 224.949 159.193L224.029 158.799C220.063 168.057 214.878 176.693 208.67 184.514L209.454 185.136C203.185 193.034 195.882 200.108 187.745 206.162L187.148 205.36C179.178 211.289 170.401 216.233 161.005 220.005L161.378 220.933C152.157 224.635 142.346 227.218 132.121 228.509L131.996 227.517C127.087 228.137 122.082 228.457 117 228.457C111.918 228.457 106.913 228.137 102.004 227.517L101.879 228.509C91.6541 227.218 81.8432 224.635 72.6223 220.933L72.9949 220.005C63.5994 216.233 54.8219 211.289 46.8521 205.36L46.2552 206.162C38.1179 200.108 30.8153 193.034 24.5463 185.136L25.3296 184.514C19.1217 176.693 13.9368 168.057 9.9706 158.799L9.05139 159.193C5.12627 150.03 2.38368 140.262 1.01044 130.072L2.00148 129.938C1.34092 125.037 1 120.036 1 114.957C1 109.877 1.34092 104.877 2.00148 99.9748L1.01044 99.8412C2.38368 89.6509 5.12627 79.883 9.05139 70.7204L9.9706 71.1142C13.9368 61.8557 19.1217 53.2198 25.3296 45.3987L24.5463 44.777C30.8154 36.8788 38.1179 29.8054 46.2552 23.751L46.8521 24.5533C54.8219 18.6237 63.5994 13.68 72.9949 9.90797L72.6223 8.97997C81.8432 5.27808 91.6541 2.69521 101.879 1.40403L102.004 2.39615C106.913 1.77626 111.918 1.45654 117 1.45654C122.082 1.45654 127.087 1.77626 131.996 2.39615L132.121 1.40403C142.346 2.69522 152.157 5.27808 161.378 8.97997L161.005 9.90798C170.401 13.68 179.178 18.6237 187.148 24.5533L187.745 23.751C195.882 29.8054 203.185 36.8788 209.454 44.777L208.67 45.3987C214.878 53.2198 220.063 61.8557 224.029 71.1142L224.949 70.7204Z" stroke="white" stroke-opacity="0.6" stroke-width="2" stroke-dasharray="30 30" />
            <path d="M383 257.457C383 331.439 321.463 391.457 245.5 391.457C169.537 391.457 108 331.439 108 257.457C108 183.474 169.537 123.457 245.5 123.457C321.463 123.457 383 183.474 383 257.457Z" stroke="white" stroke-opacity="0.6" stroke-width="2" />
          </svg>

          <Profile name={"Patrick Edwards"} username={"FuzzyLogic12"} title={""} rating={2000} profilePicture={pfp} position={"left"}/>
          <Profile name={"Aman Hambleton"} username={"KVBN"} title={"GM"} rating={2000} profilePicture={aman} position={"right"}/>
          <Profile name={"Levy Rozman"} username={"GothamChess"} title={"IM"} rating={2000} profilePicture={levy} position={"left"} />
          <Profile name={"Daniel Naroditsky"} username={"SenseiDanya"} title={"GM"} rating={2000} profilePicture={daniel} position={"right"} />
          <Profile name={"Hikaru Nakamura"} username={"Hikaru"} title={"GM"} rating={2000} profilePicture={hikaru} position={"left"} />


        </div>


        <HeroHeader svg={<ExclamationSvg />} colour={"#53DAA1"} secondaryText={"About the website"} mainText={"How is works"} />

        <p className="text-white p-10 leading-7 text-center">
          The aim of this website is to find the quickest path from you to Grandmaster Hikaru by games won.
          <br /><br />
          Inspired by the six degrees of seperation, this website uses a database of 100 thousand users, precalculating the chain to roughly 5 degrees with breadth first search.
          <br /><br />
          The algorithim then find which user is the most optimal choice moving forward, until it finds a user in the database.
          <br /><br />
          Thanks for visiting and enjoying the website.
          It was a lot of effort and I appreciate you taking the time!
        </p>

        {/* TODO: create manually so that links work and is centered on all devices */}
        <div className="p-10">
          <FooterSvg className="w-screen text-center" />
        </div>

      </div>
    </div>
  );
}

export default App;
