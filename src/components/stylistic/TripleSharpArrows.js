import { ReactComponent as SharpArrow } from "../../svg/sharpArrow.svg";

function TripleSharpArrow() {
    return (
        <div className="flex flex-column">
            <SharpArrow className="-m-0.5 stroke-white fill-white stroke-1"/>
            <SharpArrow className="-m-0.5 stroke-white fill-white stroke-1"/>
            <SharpArrow className="-m-0.5 stroke-white fill-white stroke-1"/>
        </div>
    );
}

export default TripleSharpArrow;