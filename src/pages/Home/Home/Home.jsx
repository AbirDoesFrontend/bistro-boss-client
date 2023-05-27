import PopularMenu from "../PopularMenu/PopularMenu";
import AboutBanner from "../AboutBanner/AboutBanner";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <AboutBanner />
            <PopularMenu />
            <Featured />
            <Testimonial />
        </div>
    );
};

export default Home;