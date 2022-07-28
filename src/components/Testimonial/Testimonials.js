import Testimonial from "./Testimonial";


function Testimonials({ quotes }) {
    return (
        <div className="relative flex sm:flex-row flex-col justify-evenly items-center mx-0 mt-32 xl:mt-56 2xl:mt-96">
            {quotes.map((quote, i) =>
                <div key={i} className={`${i === 1 ? "hidden" : ""} sm:block`} ><Testimonial quote={quote} /></div>            )}
        </div>
    );
}

export default Testimonials;