import { ReactComponent as Line } from "../../svg/line.svg";

function Logo() {
    return (
        <div>
            <div className="font-Mohave text-white text-8xl border-b-2 border-white text-center p-4">
                6
            </div>
            <div className="flex flex-row">
                <p className="font-LexendZetta text-white text-5xl border-r-2 border-white w-2/3 p-4 text-center">
                    DEGREES
                </p>
                <p className="font-Megrim text-white text-6xl p-4 text-center w-1/3">
                    of
                </p>
            </div>
            <p className="font-PorterSansBlock text-white text-8xl border-t-2 border-white p-5">
                Hikaru
            </p>
        </div>
    );
}

export default Logo;