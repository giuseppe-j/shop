import { useCart } from "../shared/cart";
import { useStore } from "../shared/store";
import { calculateAmount } from "../utils";
import CartList from "./CartList";

type Props = {
    toggleCart: () => void
}
function Cart(props: Props) {
    const cartProducts = useCart((state) => state.products)
    const products = useStore((state) => state.products)
    return (
        <div className="fixed inset-0 overflow-hidden z-20">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity opacity-100"></div>
                <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
                    <div className="w-screen max-w-md translate-x-0">
                        <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                            <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                                <div className="flex items-start justify-between">
                                    <h2 className="text-lg font-medium text-gray-900">Shopping cart</h2>
                                    <div className="ml-3 h-7 flex items-center">
                                        <button type="button" onClick={props.toggleCart}
                                            className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">Close panel</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="h-6 w-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12">
                                                </path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <div className="flow-root">
                                        <CartList />
                                    </div>
                                </div>
                            </div>
                            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                    <p>Subtotal</p>
                                    <p>
                                        <div>{(calculateAmount(cartProducts, products))}€</div>
                                    </p>
                                </div>
                                <p className="mt-0.5 text-sm text-gray-500">Shipping will be calculated at checkout.</p>
                                <div className="mt-6">
                                    <a href="/checkout/" className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 w-full"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart;