import ItemList from "./ItemList";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-4 p-4 border border-solid border-black">
            <div>
                <button className=" mx-16 bg-black text-white p-2 m-2 rounded-lg hover:cursor-pointer"
                    onClick={ () => handleClearCart() }>Clear Cart</button>
            </div>
            <h1 className="font-bold">Cart</h1>
            <div className="w-7/12 m-auto">
                { cartItems.length === 0 && <h2>Your Cart is Empty</h2>}
                <ItemList items={cartItems} />
            </div>
        </div>
    );
};

export default Cart;