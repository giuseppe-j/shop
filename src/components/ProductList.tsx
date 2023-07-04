import { useStore } from '../shared/store';
import Product from './Product';

function ProductList() {
    const products = useStore((state) => state.products)
    return (
        <div className='grid grid-cols-3 gap-3'>
            {products.map(p => <Product key={p.id} {...p} />)}
        </div>
    )
}

export default ProductList;