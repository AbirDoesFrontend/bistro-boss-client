import PopularMenu from "../PopularMenu/PopularMenu";
import AboutBanner from "../AboutBanner/AboutBanner";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Testimonial from "../Testimonial/Testimonial";
import { Helmet } from "react-helmet-async";
import ChefChoice from "../ChefChoice/ChefChoice";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner />
            <Category />
            <AboutBanner />
            <PopularMenu />
            <ChefChoice />
            <Featured />
            <Testimonial />
        </div>
    );
};

export default Home;