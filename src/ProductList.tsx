import Product from './Product';
import { useStore } from './shared/store';

function ProductList() {
    const products = useStore((state) => state.products)
    return (
        <div className='flex justify-around py-1'>
            {products.map(p => <Product {...p} />)}
        </div>
    )
}

export default ProductList;