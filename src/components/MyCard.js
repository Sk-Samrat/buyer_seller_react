import React, { useState } from 'react'
import './style.css'
import PopUp from './PopUp'


const Mycard = (props) => {
    // const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    // const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
    const [btnPopUp, setBtnPopUp] = useState(false);
    return (
        <div className='mycard'>
            <img src={props.cardImg} className='object-fit-cover border rounded' alt='...' style={{ width: '100%', height: '60%', }} />
            <div className="card-body" style={{ padding: 10 }}>
                <h1 className="card-title">{props.cardTitle}</h1>
                <p className="card-text" style={{ fontSize: 16 }}>{props.cardDesc.slice(0, 60)}
                    <button type="button" className="morebtn" onClick={() => setBtnPopUp(true)}>...</button>
                    <PopUp
                        trigger={btnPopUp}
                        setTrigger={setBtnPopUp}
                        title={props.cardTitle}
                        desc={props.cardDesc}
                        price={props.cardPrice}
                        uom={props.cardUom}
                    />
                </p>
                <div className="card-footer" style={{ borderTop: '1px solid black', padding: 15, backgroundColor: 'rgb(33 37 41 / 13%)', height: 70 }}>
                    {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}
                    {props.cardQuantity === 0 ?
                        (<>
                            <button type="button" className="btn btn-primary" onClick={props.onClickAddToCart} style={{ fontSize: 16 }}>Add to Cart</button>
                            <span className='card-price'>&#x20B9;{props.cardPrice}/{props.cardUom}</span>
                        </>)
                        : (<div className="btn-plus-minus-container">
                            <div className="btn-plus-minus">
                                <i className="fas fa-minus minus" onClick={props.onPressRemove}></i>
                                <input type="text" placeholder={props.cardQuantity} disabled />
                                <i className="fas fa-plus plus" onClick={props.onPressIncrease}></i>
                            </div>
                            <span className='card-price'>&#x20B9;{props.cardPrice}/{props.cardUom}</span>
                        </div>)
                    }
                    {/* <span className='card-price'>&#x20B9;{props.cardPrice}/{props.cardUom}</span> */}
                    {/* <small class="text-body-secondary">&#x20B9;{props.cardPrice}</small> */}
                </div>
            </div>
        </div>
    )
}

export default Mycard