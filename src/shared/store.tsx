import { create } from 'zustand'

type Product = {
    id: string,
    title: string,
    price: number,
    image: string,
}

interface Store {
    products: Product[]
    addProduct: (product: Product) => void
}

export const useStore = create<Store>()((set) => ({
    products: [
        {
            id: '1',
            title: 'Apple iMac 24',
            price: 1999,
            image: 'src/assets/images/apple-imac.png',
        },
        {
            id: '2',
            title: 'Apple Watch Series 7',
            price: 599,
            image: 'src/assets/images/apple-watch.jpg',
        },
        {
            id: '3',
            title: 'Apple Airpods 2',
            price: 199,
            image: 'src/assets/images/apple-airpods-2.jpg',
        },
        {
            id: '4',
            title: 'Apple Tv Kit',
            price: 159,
            image: 'src/assets/images/apple-tv-home.png',
        }
    ],
    addProduct: (product: Product) => set((state) => ({ products: [...state.products, product] })),
}))