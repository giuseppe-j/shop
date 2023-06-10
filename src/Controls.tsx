import { Button } from './components/Button';
import { useCart } from './shared/cart';

function Controls() {
    const addProduct = useCart((state) => state.addProduct)
    return (
        <div>
            <Button
                size='md'
                text='Add'
                variant='primary'
                onClick={() => console.log('Added')}
            />
        </div>
    )

}

export default Controls;