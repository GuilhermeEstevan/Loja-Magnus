import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./Context";
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'

const Cart = () => {

  const { isCartOpen, setIsCartOpen } = useGlobalContext()
  const { cartProducts, removeItem, increaseAmount, decreaseAmount, totalPrice } = useGlobalContext()



  return (
    <div className={isCartOpen ? 'cart-overlay show' : 'cart-overlay'}>
      <aside className="cart">
        <button className="cart-close"
          onClick={() => { setIsCartOpen(!isCartOpen) }}>
          <FaTimes />
        </button>

        <header>
          <h3 className="kaushan-text">Carrinho</h3>
        </header>

        <div className="cart-items">
          {cartProducts.map((product => {

            const { id, name, image, price, amount } = product

            return (
              <article className="cart-item" key={id}>
                <img src={image} alt="" className="cart-image" />
                <div className="cart-item-info">
                  <h4 className="orange">{name}</h4>
                  <p className="cart-item-price">R${price}</p>
                  <button className="remove-btn" onClick={() => { removeItem(product) }}>
                    Excluir
                  </button>
                </div>
                <div className="cart-item-btns">
                  <button className="increase-btn"
                    onClick={() => { increaseAmount(product) }}><FaChevronUp /></button>
                  <p className="item-amount">{amount}</p>
                  <button className="decrease-btn"
                    onClick={() => { decreaseAmount(product) }}><FaChevronDown /></button>
                </div>
              </article>
            )
          }))}

        </div>

        <footer>
          <h3 className="cart-total kaushan-text">
            total : R${totalPrice}
          </h3>
          <button className="cart-checkout btn">Finalizar</button>
        </footer>
      </aside>
    </div>
  )
}
export default Cart