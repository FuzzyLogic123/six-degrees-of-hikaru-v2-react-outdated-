import Hikaru from "../../images/Hikaru.jpg"
import TripleSharpArrows from "../stylistic/TripleSharpArrows";
import TripleHollowArrows from "../stylistic/TripleHollowArrows";
import TripleThinArrows from "../stylistic/TripleThinArrows";
import { ReactComponent as DotsArray } from "../../svg/dotsArray.svg";

function HikaruPhoto() {
    return (
        <div className="relative scale-75">
            <img className="max-w-xs" src={Hikaru} alt="Hikaru Nakamura" />
            <div className="absolute -rotate-90 -left-24 -bottom-9 scale-x-110">
                <TripleHollowArrows />
            </div>
            <div className="absolute -rotate-90 -left-36 bottom-52 scale-[2.5] scale-x-[3]">
                <TripleSharpArrows />
            </div>
            <div className="absolute -rotate-90 -right-20 bottom-0 scale-[2]">
                <TripleThinArrows />
            </div>
            <div className="absolute -z-10 scale-[0.15] -bottom-[29rem] -right-[37rem]">
                <DotsArray className="stroke-white fill-white stroke-0"/>
            </div>
        </div>
    );
}

export default HikaruPhoto;