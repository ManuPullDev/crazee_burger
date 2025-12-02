import { Link, useParams } from "react-router"

const OrderPage = () => {
    const { id } = useParams();

  return (
    <div>
        <h1>Order Page</h1>
        <p>Bonjour {id} </p>
        <Link to={"/"} >
            <button>Deconnexion</button>
        </Link>
    </div>
  )
}

export default OrderPage