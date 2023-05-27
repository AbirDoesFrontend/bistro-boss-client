import { useEffect } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useState } from "react";
import MenuItem from "../../shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menuItem, setMenuItem] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data.filter((item) => item.category === "popular");
        setMenuItem(popularItem);
      });
  }, []);

  return (
    <section>
      <SectionTitle heading={"From our menu"} subHeading={"check it out"} />
      <div className="grid md:grid-cols-2 gap-6 mt-20 mb-20">
        {menuItem.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center">
          <button className="btn btn-outline border-0 border-b-4 uppercase inter">View full menu</button>
        </div>
    </section>
  );
};

export default PopularMenu;
