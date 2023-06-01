import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const MenuCard = ({ menu }) => {
  const { image, name, recipe , _id , price } = menu;

  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()

  const [ , refetch] = useCart()

  const handleAddToCart = (menu) => {

    console.log(menu)
     
    if (user) {

      const cartItem = { menuItemId : _id , name , image , price , email : user.email}

      fetch("http://localhost:5000/carts" , {
        method : 'POST',
        headers : {
          'content-type' : 'application/json'
        },
        body : JSON.stringify(cartItem)
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Added to cart',
              showConfirmButton: false,
              timer: 1500
            })
          }
        });
    } else {
      Swal.fire({
        title: 'Please Login to order food',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login' , { state : location })
        }
      })
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-2xl inter text-center">{name}</h2>
        <p className="inter">{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => handleAddToCart(menu)}
            className="btn btn-outline border-0 border-b-4 uppercase inter"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
