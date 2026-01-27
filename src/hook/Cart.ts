export function useCart() {
    const addToCart = (item: any) => {
        console.log("Item added to cart:", item);
    };
    const removeFromCart = (itemId: number) => {
        console.log("Item removed from cart:", itemId);
    };
    return { addToCart, removeFromCart };
}