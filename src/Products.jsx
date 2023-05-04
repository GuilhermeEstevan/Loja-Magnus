import { useEffect, useState } from 'react'
import { useGlobalContext } from './Context'
import { getData } from './ReactQueryHook'
import { FaSearch, FaCartPlus } from 'react-icons/fa'


const Products = () => {


    const [filterProducts, setFilterProducts] = useState([])
    const { showModal, setShowModal } = useGlobalContext()
    const { modalInfo, setModalInfo } = useGlobalContext()
    const { addToCart } = useGlobalContext()


    // Get Data

    const response = getData()

    if (response.isLoading) {
        return <section className='products'>
            <h4>Loading...</h4>
        </section>
    }

    const data = response.data.data


    // Get Categories

    const productsCategories = data.map((item) => {
        return item.fields.company
    })
    const allCategories = ['todos', ...new Set(productsCategories)]

    // Get Products 

    const products = data.map((product) => {

        const amount = 1
        const { id } = product
        const { price, name, company } = product.fields
        const image = product.fields.image[0].url


        return { id, price, name, image, company, amount }
    })




    const filterItems = (category) => {

        const newProducts = products.filter((product) => {

            if (category === 'todos') {
                return product
            }

            if (product.company === category) {
                return product
            }
        })

        setFilterProducts(newProducts)
        return newProducts
    }



    return (
        <section className="products" id='products'>
            <div className="filters">
                <h2>Produtos <span className='orange'>Magnus</span> </h2>
                <div className="filter-container">
                    <h4>Marcas</h4>
                    <div className='companies-list'>
                        {allCategories.map((category, index) => {

                            return (
                                <article className="company" key={index}>
                                    <button className="company-btn" onClick={() => { filterItems(category) }}>
                                        {category}
                                    </button>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="products-container">
                {filterProducts.length > 0 ?
                    filterProducts.map((product) => {

                        const { id, price, name, image, amount } = product

                        return (
                            <article className='product' key={id}>
                                <div className='product-container'>
                                    <img src={image} alt={name} className='product-img' />
                                    <div className='product-icons'>
                                        <div className='product-icon'
                                            onClick={() => {
                                                setShowModal(!showModal)
                                                setModalInfo([id, price, name, image, amount])
                                            }}>
                                            <FaSearch />
                                        </div>
                                        <div className='product-icon'
                                            onClick={() => { addToCart(product) }}>
                                            <FaCartPlus />
                                        </div>
                                    </div>
                                </div>
                                <footer>
                                    <p className='product-name'>{name}</p>
                                    <h4 className='product-price'>R${price}</h4>
                                </footer>
                            </article>
                        )
                    })
                    : products.map((product) => {

                        const { id, price, name, image, amount } = product

                        return (
                            <article className='product' key={id}>
                                <div className='product-container'>
                                    <img src={image} alt={name} className='product-img' />
                                    <div className='product-icons'>
                                        <div className='product-icon'
                                            onClick={() => {
                                                setShowModal(!showModal)
                                                setModalInfo(product)
                                            }}>
                                            <FaSearch />
                                        </div>
                                        <div className='product-icon'
                                            onClick={() => { addToCart(product) }}>
                                            <FaCartPlus />
                                        </div>
                                    </div>
                                </div>
                                <footer>
                                    <p className='product-name'>{name}</p>
                                    <h4 className='product-price'>R${price}</h4>
                                </footer>
                            </article>
                        )
                    })}
            </div>
        </section>
    )
}

export default Products

