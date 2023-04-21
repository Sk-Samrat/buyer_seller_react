import React from 'react'

export default function PopUp(props) {
    return (
        props.trigger ?
            (<div className='popup'>
                <div className='popup-inner'>
                    <button className='close-btn' onClick={()=>props.setTrigger(false)}>X</button>
                    <h3>{props.title}</h3>
                    <h5>{props.desc}</h5>
                    <h5>Price : {props.price}</h5>
                    <h5>Unit Of Measurement : {props.uom}</h5>
                </div>
            </div>)
            : null
    )
}
