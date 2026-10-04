import Hero from "../sections/Hero/Hero.jsx";

import Service from "../sections/Service";
import AboutUs from "../sections/AboutUs";
import Choose from "../sections/Choose";
import Video from "../sections/Video";
import Testimonial from "../sections/Testimonial";
import Affordable from "../sections/Affordable";
import Partners from "../sections/Partners";
import Insights from "../sections/Insights";
import Subscribe from "../sections/Subscribe";

export const metadata = {
    title: 'Home',
}

export default function () {
    return (
        <>
        <Hero/>
        <AboutUs/>
        <Service/>
        <Choose/>
        <Video/>
        <Testimonial/>
        <Affordable/>
        <Partners/>
        <Insights/>
        <Subscribe/>
        </>
    )
}