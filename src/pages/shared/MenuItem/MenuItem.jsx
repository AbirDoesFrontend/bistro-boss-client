import "./MenuItem.css";

const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="flex gap-4 items-center">
      <img src={image} alt="" className="menu-image" />
      <div>
        <h3 className="uppercase text-2xl">{name}-----------</h3>
        <p className="inter">{recipe}</p>
      </div>
      <p className="text-[#BB8506] inter">${price}</p>
    </div>
  );
};

export default MenuItem;
