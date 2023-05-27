import PopularMenu from "../PopularMenu/PopularMenu";
import AboutBanner from "../AboutBanner/AboutBanner";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <AboutBanner />
            <PopularMenu />
            <Featured />
        </div>
    );
};

export default Home;