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
            title: 'Apple iPhone 14',
            price: 1339,
            image: 'src/assets/images/apple-iphone-14.png',
        },
        {
            id: '3',
            title: 'Apple iPad Pro',
            price: 649,
            image: 'src/assets/images/apple-ipad-pro.png',
        },
        {
            id: '4',
            title: 'Apple Airpods 2',
            price: 199,
            image: 'src/assets/images/apple-airpods-2.jpg',
        },
        {
            id: '5',
            title: 'Apple Tv+',
            price: 189,
            image: 'src/assets/images/apple-tv-plus.png',
        },
        {
            id: '6',
            title: 'Apple AirTag',
            price: 8,
            image: 'src/assets/images/apple-airtag.jpg',
        }
    ],
    addProduct: (product: Product) => set((state) => ({ products: [...state.products, product] })),
}))