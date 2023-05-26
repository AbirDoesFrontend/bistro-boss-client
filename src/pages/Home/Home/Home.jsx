import PopularMenu from "../PopularMenu/PopularMenu";
import AboutBanner from "../AboutBanner/AboutBanner";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <AboutBanner />
            <PopularMenu />
        </div>
    );
};

export default Home;