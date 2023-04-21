import React from 'react'

export default function PaymentOptions() {
    return (
        <div className='col-md-8 mb-5'>
            <div className="card">
                <h3 className="card-header">Payment Options</h3>
                <div className="card-body">
                    <div className='delivery-address-container'>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="payment" id="paymentupi" style={{ height: 14, width: 14 }} />
                            <label className="form-check-label" for="upi" style={{ marginLeft: 7, fontSize: 13, fontWeight: 600 }}>
                                UPI
                            </label>
                        </div>
                        <div className='my-3' style={{ marginLeft: 20, fontSize: 14, fontWeight: 800 }}>Choose an option
                            <div className="form-check mt-3">
                                <input className="form-check-input" type="radio" name="upi" id="upiphonepe" />
                                <label className="form-check-label" for="upiphonepe" style={{ marginLeft: 7, fontSize: 13, fontWeight: 600 }}>
                                    PhonePe
                                </label>
                            </div>
                            <div className="form-check mt-3">
                                <input className="form-check-input" type="radio" name="upi" id="yourupiid" />
                                <label className="form-check-label" for="yourupiid" style={{ marginLeft: 7, fontSize: 13, fontWeight: 600 }}>
                                    Your UPI ID
                                </label>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='delivery-address-container'>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="payment" id="wallets" checked style={{ height: 14, width: 14 }} />
                            <label className="form-check-label" for="wallets" style={{ marginLeft: 7, fontSize: 13, fontWeight: 600 }}>
                                Wallets
                            </label>
                        </div>
                    </div>
                    <hr />
                    <div className='delivery-address-container'>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="payment" id="atmcard" style={{ height: 14, width: 14 }} />
                            <label className="form-check-label" for="atmcard" style={{ marginLeft: 7, fontSize: 13, fontWeight: 600 }}>
                                Credit / Debit / ATM Card
                            </label>
                        </div>
                        <div style={{ marginLeft: 20, fontSize: 13, color: 'grey' }}>Add and secure your card as per RBI guidelines</div>
                    </div>
                    <hr />
                    <div className='delivery-address-container'>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="payment" id="netbanking" style={{ height: 14, width: 14 }} />
                            <label className="form-check-label" for="netbanking" style={{ marginLeft: 7, fontSize: 13, fontWeight: 600 }}>
                                Net Banking
                            </label>
                        </div>
                        <div style={{ marginLeft: 20, fontSize: 13, color: 'grey' }}>This process has low success, use UPI or cards for better experience</div>
                    </div>
                    <hr />
                    <div className='delivery-address-container'>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="payment" id="cod" style={{ height: 14, width: 14 }} />
                            <label className="form-check-label" for="cod" style={{ marginLeft: 7, fontSize: 13, fontWeight: 600 }}>
                                Cash on Delivery
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
