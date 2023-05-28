import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [ menu ] = useMenu();
  const popular = menu.filter(item => item.category === 'popular')

  return (
    <section>
      <SectionTitle heading={"From our menu"} subHeading={"check it out"} />
      <div className="grid md:grid-cols-2 gap-6 mt-20 mb-20">
        {popular.map((item) => (
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
