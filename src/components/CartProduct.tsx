import { useState } from "react";
import { useCart } from "../shared/cart";
import { useStore } from "../shared/store";

type CartProduct = {
    id: string,
    productId: string,
    quantity: number
}
function CartProduct(props: CartProduct) {
    const deleteProduct = useCart((state) => state.deleteProduct)
    const updateProduct = useCart((state) => state.updateProduct)
    const products = useStore((state) => state.products)
    const product = products.find(pr => pr.id === props.productId);
    const [selectedQuantity, setSelectedQuantity] = useState(props.quantity);
    return (
        <li key={props.id} className="py-6 flex">
            <div className="flex-shrink-0 w-28 h-24 border border-gray-200 rounded-md bg-cover bg-no-repeat bg-center overflow-hidden" style={{ backgroundImage: `url(${product && product.image})` }}>
            </div>
            <div className="ml-4 flex-1 flex flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3><a href="/products/balloon-chair/">{product && product.title}</a></h3>
                        <div>
                            <div className="ml-4">{selectedQuantity * (product && product.price || 0)}€</div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex items-center text-sm">
                    <form>
                        <label className="mr-2" html-for="quantity-35">Quantity</label>
                        <select
                            className="max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                            id="quantity-35"
                            name="quantity-35"
                            value={selectedQuantity}
                            onChange={(e) => {
                                setSelectedQuantity(parseInt(e.target.value));
                                updateProduct(props.productId, parseInt(e.target.value));
                            }
                            }
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>
                    </form>
                    <div className="flex-1"></div>
                    <div className="flex"><button
                        className="font-medium text-primary-600 hover:text-primary-500"
                        value="35"
                        onClick={() => deleteProduct(props.id)}>Remove</button>
                    </div>
                </div>
            </div>
        </li>
    )
}
export default CartProduct;