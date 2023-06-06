import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../hooks/useCart";

// TODO : provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_pk)

const Payment = () => {

    const [cart] = useCart()
    const total = cart.reduce( (sum , item) => sum + item.price , 0)
    const price = parseFloat(total.toFixed(2))
  return (
    <div>
      <SectionTitle heading={"payment"} subHeading={"please process"} />
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price}/>
      </Elements>
    </div>
  );
};

export default Payment;
