import PocketBase from 'pocketbase';
import { Product } from './types'

const pb = new PocketBase('http://127.0.0.1:8090');

export const fetchData = async (filter: any) => {
    await pb.admins.authWithPassword('giuseppecoluzzi.dev@gmail.com', 'zustand250');
    const records: Record<number, Product> = await pb.collection('products').getFullList({
        sort: '-price',
        filter: `price >= ${filter.min} && price <= ${filter.max}`
    });
    const rs = Object.entries(records).map(([key, val]) => {
        const imageUrl = `http://127.0.0.1:8090/api/files/${val.collectionId}/${val.id}/${val.image}`
        return { id: val.id, image: imageUrl, title: val.title, price: val.price }
    })
    return rs;
}