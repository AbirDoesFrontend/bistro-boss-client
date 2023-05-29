import { Link } from "react-router-dom";
import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title} />}
      <div className="grid md:grid-cols-2 gap-6 mt-20 mb-20">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center">
        <Link to={`/order/${title}`} className="btn inter btn-outline border-0 border-b-4">Order Now</Link>
      </div>
    </div>
  );
};

export default MenuCategory;
