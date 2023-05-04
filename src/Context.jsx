import { createContext, useContext, useState } from "react"



const AppContext = createContext()

export const useGlobalContext = () => useContext(AppContext)


export const AppProvider = ({ children }) => {


    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [modalInfo, setModalInfo] = useState([])
    const [cartProducts, setCartProducts] = useState([])
    const [itemsAmount, setItemsAmount] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const addToCart = (product) => {
        const alreadyInCart = cartProducts.find(item => item.id === product.id)

        if (alreadyInCart) {
            return
        }

        const newCart = [...cartProducts, product]
        getTotalAmount(newCart)
        getTotalPrice(newCart)
        setCartProducts(newCart)
        return
    }
    const getTotalAmount = (cart) => {

        const totalAmount = cart.reduce((total, product) => {
            return total + product.amount
        }, 0)

        setItemsAmount(totalAmount)
        return totalAmount
    }
    const removeItem = (product) => {

        const newCart = cartProducts.filter((item) => item.id !== product.id)
        setCartProducts(newCart)
        getTotalPrice(newCart)
        getTotalAmount(newCart)
        return
    }
    const increaseAmount = (product) => {

        const newCart = cartProducts.map((item) => {

            if (item.id === product.id) {
                return { ...item, amount: item.amount + 1 }
            }
            else return item
        })
        setCartProducts(newCart)
        getTotalAmount(newCart)
        getTotalPrice(newCart)
    }

    const decreaseAmount = (product) => {
        const newCart = cartProducts.map((item) => {

            if (item.id === product.id) {
                return { ...item, amount: item.amount - 1 }
            }

            else return item
        })

        const filteredCart = newCart.filter((item) => item.amount > 0)
        setCartProducts(filteredCart)
        getTotalAmount(filteredCart)
        getTotalPrice(filteredCart)
    }
    const getTotalPrice = (cart) => {

        const totalPrice = cart.reduce((total, product) => {
            return total + product.price * product.amount

        }, 0)

        setTotalPrice(totalPrice)
    }



    console.log(cartProducts);







    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)

    return <AppContext.Provider value={{
        isSidebarOpen,
        setIsSidebarOpen,
        isCartOpen,
        setIsCartOpen,
        products,
        setProducts,
        isLoading,
        setIsLoading,
        modalInfo,
        setModalInfo,
        showModal,
        setShowModal,
        addToCart,
        cartProducts,
        itemsAmount,
        removeItem,
        increaseAmount,
        decreaseAmount,
        getTotalPrice,
        totalPrice
    }}>
        {children}
    </AppContext.Provider>
}