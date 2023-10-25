import { create } from 'zustand';

type Product = {
    id: string,
    title: string,
    price: number,
    image: string,
}

interface Store {
    products: Product[]
    addProduct: (product: Product) => void
    setProducts: (products: Product[]) => void
}

export const useStore = create<Store>()((set) => ({
    products: [],
    setProducts: (products) => {
        console.log(products);
        set({ products })
    },
    addProduct: (product: Product) => set((state) => ({ products: [...state.products, product] })),
}))