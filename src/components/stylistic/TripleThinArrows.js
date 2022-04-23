import { ReactComponent as ThinArrow } from "../../svg/thinArrow.svg";

function TripleSharpArrow() {
    return (
        <div className="flex flex-column">
            <ThinArrow className="-m-0.5 stroke-white fill-white stroke-0" />
            <ThinArrow className="-m-0.5 stroke-white fill-white stroke-0" />
            <ThinArrow className="-m-0.5 stroke-white fill-white stroke-0" />
        </div>
    );
}

export default TripleSharpArrow;