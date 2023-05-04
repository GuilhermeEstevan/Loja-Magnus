import { useGlobalContext } from "./Context"
import { FaTimes } from 'react-icons/fa'

const Modal = () => {

    const { showModal, setShowModal } = useGlobalContext()
    const { modalInfo } = useGlobalContext()
    const { addToCart } = useGlobalContext()



    const { price, name, image } = modalInfo


    return (
        <div className={showModal ? 'modal-overlay show' : 'modal-overlay'}>
            <div className="modal-container">
                <div className="modal-product">
                    <img src={image} alt="" className="modal-img" />
                    <article className="modal-info">
                        <h2 className="modal-name orange">
                            {name}
                        </h2>
                        <p className="modal-price">R${price}</p>
                        <p className="modal-description">Móveis são itens essenciais em qualquer ambiente, sejam eles residenciais ou comerciais. Eles são utilizados tanto para acomodar pessoas quanto para armazenar objetos. Existem diversos tipos de móveis disponíveis no mercado, desde os mais simples até os mais sofisticados, com designs modernos ou clássicos.
                        </p>
                        <button className="modal-cart">
                            Adicionar ao carrinho
                        </button>
                    </article>
                </div>
                <button className="close-modal"
                    onClick={() => { setShowModal(!showModal), addToCart(modalInfo) }}>
                    <FaTimes />
                </button>
            </div>
        </div>

    )
}
export default Modal