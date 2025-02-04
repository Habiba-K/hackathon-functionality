import { neutralProduct } from "../../../types/neutralproduct"



export const addToCart = (product : neutralProduct) => {
    const cart : neutralProduct[] = JSON.parse(localStorage.getItem('cart') || '[]')

    const existingProductIndex = cart.findIndex(item => item._id === product._id)

    if(existingProductIndex > -1) {
        cart[existingProductIndex].stock+= 1
    }
    else {
        cart.push({
            ...product, stock: 1
        })
    }

    localStorage.setItem('cart', JSON.stringify(cart))
}

export const removeFromCart = (productId : string) => {
    let cart : neutralProduct[] = JSON.parse(localStorage.getItem('cart') || '[]')
    cart = cart.filter(item => item._id !== productId)
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const updateCartQuantity = (productId :string, quan: number) => {
    const cart : neutralProduct[] = JSON.parse(localStorage.getItem('cart') || '[]')
    const productIndex = cart.findIndex(item => item._id === productId)

    if(productIndex > -1) {
        cart[productIndex].stock = quan;
        localStorage.setItem('cart', JSON.stringify(cart))
    }
}

export const getCartItems = () : neutralProduct[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]')
}