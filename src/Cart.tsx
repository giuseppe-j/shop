import { Button } from './components/Button';
import { useCart } from './shared/cart';
import { useStore } from './shared/store';

function Cart() {
    const cartProducts = useCart((state) => state.products)
    const deleteProduct = useCart((state) => state.deleteProduct)
    const products = useStore((state) => state.products)
    return (
        <div className='flex flex-col py-1'>
            {cartProducts.map((p) => {
                const product = products.find(pr => pr.id === p.productId);
                if (product) {
                    return (
                        <div key={p.id}>
                            <span className='mr-5'>{product.title}</span>
                            <span className='mr-5'>{p.quantity}</span>
                            <Button
                                size='md'
                                text='Remove'
                                variant='primary'
                                onClick={() => deleteProduct(p.id)}
                            />
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default Cart;