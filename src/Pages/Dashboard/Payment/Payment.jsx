import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("key");
const Payment = () => {
  return (
    <div className="w-full">
      <SectionTitle subHeading="pay your order" heading="Payment now" />
      <h2 className="px-4">
        teka o teka tumi uira uira aso. ese tumi amar pocket boso
      </h2>

      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;
