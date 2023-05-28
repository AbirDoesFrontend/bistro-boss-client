import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";

import img from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenu from "../../../hooks/useMenu";

const Menu = () => {

    const [ menu ] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const offered = menu.filter(item => item.category === 'offered')
    const soup = menu.filter(item => item.category === 'soup')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover 
                img={img}
                title="OUR MENU"
            />
            <SectionTitle subHeading={"Don't miss"} heading={"TODAY'S OFFER"}/>
            <MenuCategory items={offered} />
            <MenuCategory items={dessert} title={'Dessert'} img={dessertImg}/>
            <MenuCategory items={pizza} title={'Pizza'} img={pizzaImg}/>
            <MenuCategory items={salad} title={'Salads'} img={saladImg}/>
            <MenuCategory items={soup} title={'Soups'} img={soupImg}/>
        </div>
    );
};

export default Menu;