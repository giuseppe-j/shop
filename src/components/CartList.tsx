import { useCart } from '../shared/cart';
import CartProduct from './CartProduct';

function CartList() {
    const cartProducts = useCart((state) => state.products)
    return (
        <ul className="-my-6 divide-y divide-gray-200">
            {cartProducts.map(p => <CartProduct {...p} />)}
        </ul>
    )
}
export default CartList;