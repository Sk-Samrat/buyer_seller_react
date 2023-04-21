import React, { useEffect } from 'react'
// import Card from './Card';
import '../App.css';
import Imagecarousel from '../components/ImageCarousel';
// import { dummyFoodItemData } from '../assets/data/data';
// import { dummyData } from '../assets/data/data';
import { Link, Outlet } from 'react-router-dom';
import FooterBar from '../components/FooterBar';
import ImageSlider from '../components/ImageSlider';
import { addMyProducts } from '../action/reducer/MyProductSlice';
import { useDispatch } from 'react-redux';
import { getProducts } from '../services/ApiService';
// import axios from 'axios';


export default function Home(props) {

    // const myProducts = useSelector((state) => state.product);

    const dispatch = useDispatch();

    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     dummyFoodItemData.forEach(item => {
    //         dispatch(addMyProducts(item))
    //     })
    //     // console.log('My Products: ', myProducts);
    // }, []) // eslint-disable-line react-hooks/exhaustive-deps

    // const setProductData = () => {
    //     dummyFoodItemData.forEach(item => {
    //         dispatch(addMyProducts(item))
    //     })
    // }

    useEffect(() => {
        // let mount = true
        getProducts()
            .then(res => {
                console.log('response from api', res)
                //setProducts(res)
                // return () => mount = false
                // console.log('Products', products)
                res.forEach(item => {
                    dispatch(addMyProducts(item))
                })
            })
        // console.log('Products', products)
        // products.forEach(item => {
        //     dispatch(addMyProducts(item))
        // })
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="container-fluid" style={{ marginTop: 50 }}>
            <ImageSlider mode={props.mode} />

            <div className="card my-3" style={{ backgroundColor: props.mode === 'dark' ? 'white' : '#283038' }}>
                <div className='container my-3'>
                    <div>
                        <span className='card-category-tilte' style={{ fontSize: 20, fontWeight: 600, color: props.mode === 'light' ? 'white' : 'black' }}>Fruits</span>
                        <Link to="/productlist/Fruit" className="redirect-btn">View More</Link>
                    </div>
                    <Imagecarousel category='Fruit' />
                </div>
            </div>

            <div className="card my-3" style={{ backgroundColor: props.mode === 'dark' ? 'white' : '#283038' }}>
                <div className='container my-3'>
                    <div>
                        <span className='card-category-tilte' style={{ fontSize: 20, fontWeight: 600, color: props.mode === 'light' ? 'white' : 'black' }}>Vegetables</span>
                        <Link to="/productlist/Vegetable" className="redirect-btn">View More</Link>
                    </div>
                    <Imagecarousel category='Vegetable' />
                </div>
            </div>

            <div className="card my-3" style={{ backgroundColor: props.mode === 'dark' ? 'white' : '#283038' }}>
                <div className='container my-3'>
                    <div>
                        <span className='card-category-tilte' style={{ fontSize: 20, fontWeight: 600, color: props.mode === 'light' ? 'white' : 'black' }}>Dishes</span>
                        <Link to="/productlist/Food" className="redirect-btn">View More</Link>
                    </div>
                    <Imagecarousel category='Food' />
                </div>
            </div>

            <FooterBar />

            <Outlet />
        </div>
    )
}

