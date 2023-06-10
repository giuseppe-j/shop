export const calculateTotalQuantity = (list: any) => list.reduce((totalQuantity: number, product: any) => {
    return totalQuantity += product.quantity;
}, 0);