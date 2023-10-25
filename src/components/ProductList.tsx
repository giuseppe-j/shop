import { useStore } from '../shared/store';
import Product from './Product';

function ProductList() {
    const products = useStore((state) => state.products)
    return (
        <div className='basis-5/6'>
            <div className='mx-5 grid grid-cols-3 gap-3'>
                {products && products.map(p => <Product key={p.id} {...p} />)}
            </div>
        </div>
    )
}

export default ProductList;