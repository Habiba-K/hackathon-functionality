import { Product } from "../../../types/products"

export const addToCart = ( product : Product ) => {
    const cart : Product [] =JSON.parse(localStorage.getItem('cart') || '[]')

    const existingProductIndex = cart.findIndex(items => items._id === product._id)
    if(existingProductIndex > -1 ){
        cart[existingProductIndex].quantity +=1;
    }
    else{
        cart.push({
            ...product, quantity : 1
        })
    }

    localStorage.setItem('cart', JSON.stringify(cart))
}

export const removeFromCart = (productId : string) =>{
    let cart : Product [] = JSON.parse(localStorage.gerItem('cart') || '[]')
}
