import Testimonial from "./Testimonial";


function Testimonials({ quotes }) {
    console.log(quotes) 
    return (
        <div className="relative flex sm:flex-row flex-col justify-evenly items-center mx-0 mt-32 xl:mt-56 2xl:mt-96">
            {quotes.map((quote, i) =>
                <div className={`${i === 1 ? "hidden" : ""} sm:block`} ><Testimonial quote={quote} key={i} /></div>            )}
        </div>
    );
}

export default Testimonials;