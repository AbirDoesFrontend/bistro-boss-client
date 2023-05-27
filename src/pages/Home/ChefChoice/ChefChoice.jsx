import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCard from "../../../components/MenuCard/MenuCard";

const ChefChoice = () => {

    const [menus, setMenus] = useState([])

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => setMenus(data))
    }, [])

    return (
        <section>
            <SectionTitle 
                subHeading={'should try'}
                heading={'chef recommends'}
            />
            <div className="flex justify-center gap-10 flex-wrap">
                {
                    menus.slice(0 , 3).map(menu => <MenuCard 
                        key={menu._id}
                        menu={menu}
                    />)
                }
            </div>
        </section>
    );
};

export default ChefChoice;