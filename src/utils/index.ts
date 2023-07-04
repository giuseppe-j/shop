type CartProduct = {
    id: string,
    productId: string,
    quantity: number
}

type Product = {
    id: string,
    title: string,
    price: number,
    image: string,
}

export const calculateTotalQuantity = (list: CartProduct[]) => list.reduce((totalQuantity: number, product: CartProduct) => {
    return totalQuantity += product.quantity;
}, 0);

export const calculateAmount = (list: CartProduct[], productList: Product[]) => list.reduce((amount: number, cartProduct: CartProduct) => {
    const product = productList.find(p => p.id === cartProduct.productId)
    return amount += product ? product.price * cartProduct.quantity : 0;
}, 0);