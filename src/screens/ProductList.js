import React from 'react'
import FooterBar from '../components/FooterBar'
// import { dummyFoodItemData } from '../assets/data/data'
import Mycard from '../components/MyCard'
// import Card from './Card'
import './screen.css'
import {
    useParams
} from "react-router-dom";
import { addToCart } from '../action/reducer/CartItems';
import { useDispatch, useSelector } from "react-redux";

export default function ProductList(props) {
    let { id } = useParams();

    const myProducts = useSelector((state) => state.product);

    // console.log(myProducts);

    // let productData = dummyFoodItemData.filter(x => x.product_category === `${id}`);
    let productData = myProducts.filter(x => x.product.product_category === `${id}`);

    // console.log(productData);

    const dispatch = useDispatch();

    // const [quantity, setQuantity] = useState(1);

    const onPressAddToCart = (item) => {
        dispatch(addToCart({ item: item, itemQuantity: 1 }));
        // dispatch(getTotals());
        // dispatch(increaseQty(item.product_id));
    }

    return (
        <div className='container-fluid'>
            <div style={{ marginTop: 100 }} className='container'>
                {/* <div className="product-list-carousel"> */}
                <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{id}</h1>
                <div className="row">
                    {productData.map((item) => (
                        <div className='col-md-4 product-container-list' key={item.product.product_id}>
                            <Mycard
                                cardTitle={item.product.product_name}
                                cardDesc={item.product.product_description}
                                cardImg={item.product.product_image}
                                cardPrice={item.unit_price}
                                cardUom={item.product_uom}
                                cardQuantity={item.product.product_quantity}
                                onClickAddToCart={() => onPressAddToCart(item)}
                            />
                        </div>
                    ))}
                </div>
                {/* </div> */}
            </div>
            <FooterBar />
        </div>
    )
}
