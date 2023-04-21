import React, { useEffect, useState } from 'react'
// import { dummyData } from '../assets/data/data'
import { getProductOffer } from '../services/ApiService'

export default function ImageSlider(props) {

    const [productOffer, setProductOffer] = useState([]);

    useEffect(() => {
        // let mount = true
        getProductOffer()
            .then(res => {
                console.log('response from product offer api', res)
                setProductOffer(res)
                // return () => mount = false
                // console.log('product offer', productOffer)
            })
        // products.forEach(item => {
        //         dispatch(addMyProducts(item))
        //     })
        console.log('product offer', productOffer)
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="card" style={{ backgroundColor: props.mode === 'dark' ? 'white' : '#283038' }}>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade py-3">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    {productOffer.map((item) => (
                        <div className="carousel-item active" key={item.id}>
                            {/* <img src="https://cdn.pixabay.com/photo/2022/08/17/07/10/strawberries-7391738_1280.jpg" className="object-fit-cover border rounded" alt="..." style={{ width: '100%', height: 250 }} /> */}
                            <img src={item.url} className="object-fit-cover border rounded" alt="..." style={{ width: '100%', height: 250 }} />
                            <div className="carousel-caption d-none d-md-block">
                                <h1>{item.title}</h1>
                                <p style={{ fontSize: 18 }}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
