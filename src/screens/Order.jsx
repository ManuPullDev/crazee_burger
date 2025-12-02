import { Link, useLocation } from "react-router"
import LoginForm from "../components/LoginForm"

const OrderPage = () => {
    const { state } = useLocation();

  return (
    <div>
        <h1>Order Page</h1>
        <p>Bonjour {state?.input} </p>
        <Link to={"/"} >
            <button>Deconnexion</button>
        </Link>
    </div>
  )
}

export default OrderPage