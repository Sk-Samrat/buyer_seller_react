import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MyCard from './MyCard.js'
import './style.css'
// import { dummyFoodItemData } from '../assets/data/data.js'
// import Card from '../screens/Card.js'
import { addToCart, increaseCartItem, decreaseCartItem, removeFromCartItem } from '../action/reducer/CartItems.js'
import { increaseQty, decreaseQty } from '../action/reducer/MyProductSlice.js'
// import { addMyProducts } from '../action/reducer/MyProductSlice.js'

const Imagecarousel = (props) => {
    // const ref = useRef(null); //ref to parent div
    // let box = document.querySelector('.product-container');
    // let category=props.category

    const myProducts = useSelector((state) => state.product);

    useEffect(() => {
        console.log('My Products: ', myProducts);
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const btnpressprev = () => {
        // let box = document.querySelector('.product-container');
        let box = document.querySelector(`#${props.category}`);
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        console.log(width)
    }

    const btnpressnext = () => {
        // let box = document.querySelector('.product-container');
        let box = document.querySelector(`#${props.category}`);
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        console.log(width)
    }

    // const onClickLeftHandler = () => {
    //     let width = ref.current.clientWidth;
    //     ref.current.scrollLeft = ref.current.scrollLeft - width;
    // };

    // const onClickRightHandler = () => {
    //     let width = ref.current.clientWidth;
    //     ref.current.scrollLeft = ref.current.scrollLeft + width;
    // };

    const dispatch = useDispatch();

    // const [quantity, setQuantity] = useState(1);

    const onPressAddToCart = (item) => {
        dispatch(addToCart({ item: item, itemQuantity: 1 }));
        // dispatch(getTotals());
        dispatch(increaseQty(item.product.product_id));
    }

    const onPressRemoveFromCart = (item) => {
        dispatch(decreaseQty(item.product.product_id));
        if (item.product.product_quantity === 1) {
            // console.log('item', item);
            dispatch(removeFromCartItem(item));
            return;
        }
        dispatch(decreaseCartItem(item));
    }

    const onPressIncreaseCart = (item) => {
        dispatch(increaseCartItem(item));
        dispatch(increaseQty(item.product.product_id));
    }

    return (
        <div className="product-carousel">
            <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
            <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>

            {/* <button className="pre-btn" onClick={onClickLeftHandler}><p>&lt;</p></button>
            <button className="next-btn" onClick={onClickRightHandler}><p>&gt;</p></button> */}

            <div className="product-container" id={`${props.category}`}>
                {myProducts.map((item) => (
                    <div key={item.product.product_id}>
                        {item.product.product_category === props.category ?
                            (<MyCard
                                cardTitle={item.product.product_name}
                                cardDesc={item.product.product_description}
                                cardImg={item.product.product_image}
                                cardPrice={item.unit_price}
                                cardUom={item.product_uom}
                                cardQuantity={item.product.product_quantity}
                                onClickAddToCart={() => onPressAddToCart(item)}
                                onPressRemove={() => onPressRemoveFromCart(item)}
                                onPressIncrease={() => onPressIncreaseCart(item)}
                            />)
                            : null}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Imagecarousel