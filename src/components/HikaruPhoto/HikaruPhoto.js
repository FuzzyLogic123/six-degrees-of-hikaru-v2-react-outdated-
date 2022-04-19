import Hikaru from "../../images/Hikaru.jpg"
import TripleSharpArrows from "../stylistic/TripleSharpArrows";
import TripleHollowArrows from "../stylistic/TripleHollowArrows";
import TripleThinArrows from "../stylistic/TripleThinArrows";
import { ReactComponent as DotsArray } from "../../svg/dotsArray.svg";

function HikaruPhoto() {
    return (
        <div className="relative">
            <img className="max-w-sm justify-center items-center" src={Hikaru} alt="Hikaru Nakamura" />
            <div className="absolute -rotate-90 -left-24 -bottom-9 scale-x-110">
                <TripleHollowArrows />
            </div>
            <div className="absolute -rotate-90 -left-36 bottom-52 scale-[3] scale-x-[4.5]">
                <TripleSharpArrows />
            </div>
            <div className="absolute -rotate-90 -right-20 bottom-0 scale-[2]">
                <TripleThinArrows />
            </div>
            <div className="absolute -z-10 scale-[0.15] -bottom-80 -right-[30rem]">
                <DotsArray className="stroke-white fill-white stroke-0"/>
            </div>
        </div>
    );
}

export default HikaruPhoto;