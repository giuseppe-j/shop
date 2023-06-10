import { create } from 'zustand'
import { calculateTotalQuantity } from '../utils'

type CartProduct = {
    id: string,
    productId: string,
    quantity: number
}

interface Cart {
    products: CartProduct[]
    addProduct: (product: CartProduct) => void
    deleteProduct: (id: string) => void
    updateProduct: (id: string) => void
    totalQuantity: number
}

export const useCart = create<Cart>()((set) => ({
    products: [],
    addProduct: (product: CartProduct) => set((state) => ({ products: [...state.products, product], totalQuantity: calculateTotalQuantity([...state.products, product]) })),
    deleteProduct: (id: string) => set((state) => ({ products: state.products.filter(product => product.id !== id), totalQuantity: calculateTotalQuantity(state.products.filter(product => product.id !== id)) })),
    updateProduct: (id: string) => set((state) => (
        {
            products: state.products.map((product) => {
                if (product.productId === id) product.quantity += 1
                return product;
            }),
            totalQuantity: calculateTotalQuantity(state.products)
        }
    )),
    totalQuantity: 0
}))