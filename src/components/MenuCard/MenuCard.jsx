const MenuCard = ({ menu }) => {

  const { image , name , recipe }  = menu;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt={name}
        />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-2xl inter text-center">{name}</h2>
        <p className="inter">{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline border-0 border-b-4 uppercase inter">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
