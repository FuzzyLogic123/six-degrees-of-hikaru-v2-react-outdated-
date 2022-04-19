import { ReactComponent as HollowArrow } from "../../svg/hollowArrow.svg";

function TripleSharpArrow() {
    return (
        <div className="flex flex-column">
            <HollowArrow className="-m-1.5 stroke-white fill-white stroke-0" />
            <HollowArrow className="-m-1.5 stroke-white fill-white stroke-0" />
            <HollowArrow className="-m-1.5 stroke-white fill-white stroke-0" />
        </div>
    );
}

export default TripleSharpArrow;