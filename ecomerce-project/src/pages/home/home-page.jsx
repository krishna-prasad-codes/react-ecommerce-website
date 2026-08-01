import axios from 'axios'
import { Header } from '../../components-shared/header'
import { ProductsGrid } from './productsGrid';
import './HomePage.css'
//import { products } from '../../starting-code/data/products';
import { useEffect, useState } from 'react';


export function HomePage({ cart }) {
    //fetch().then((response)=>{
    //response.json.then((data)=>{}) })
    /*return reponse }).then (data)
   }) */
    const [products, setProducts] = useState([]);
    //const[cart,setCart]=useState([]);
    useEffect(() => {
        const renderHome=async ()=>{
            const response= await axios.get('/api/products')
            setProducts(response.data);
        };
        
           renderHome();
        /* axios.get('http://localhost:3000/api/cart-items')
           .then((response)=>{
             setCart(response.data)
           })*/
    }, [])


    return (
        <>
            <title>ecommerce project</title>
            <Header cart={cart} />

            <div className="home-page">
                <ProductsGrid products={products} />
            </div>
        </>
    );
}