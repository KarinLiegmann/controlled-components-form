export const isValidProductName = (name) => (name.length >= 2)

export const isValidPrice = (price) => {
    if (!price) return false

    if (!price.includes(',')) {
        return true
    }

    if (price.includes(',')) {
        const [_, decimal] = price.split(',');
        if (decimal.length === 2) {
            return true;
        }
    } else {
        return true
    }
}

export const isValidEmail = (email) => email ? email.includes('@') : false



const isValidProductEntry = (product) =>
    isValidProductName(product.product_name)
    && isValidPrice(product.price)
    && isValidEmail(product.email)

export default isValidProductEntry