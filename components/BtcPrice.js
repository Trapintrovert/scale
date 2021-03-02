import React, { useState, useEffect } from 'react'
import axios from 'axios'

const BtcPrice = ({ dollars}) => {

    const [ prices, setPrice] = useState(0)
    const [ naira, setNaira] = useState(0.00)
    const [loading, setLoading] = useState(true)

    const fetchBTCPriceData = async () => {
        try {
            const res = await axios.get("https://api.coinbase.com/v2/prices/btc-usd/spot")
            let usd = res.data.data.amount
            usd = parseFloat(usd.replace(/,/g,''))
            usd = usd.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
            setPrice(usd)
            console.log(usd)
        } catch (err) {
            console.log(err)
        }

        try {
            const res = await axios.get("https://api.coinbase.com/v2/prices/btc-ngn/spot")
            let ngn = res.data.data.amount
            ngn = parseFloat(ngn.replace(/,/g,''))
            ngn = ngn.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
            setNaira(ngn)
            console.log(ngn)
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
       setInterval(() => {
        fetchBTCPriceData()
       }, 3000);
    
    }, [setPrice])


    return (
        <>
            {
                !loading ? (
                    <p>loading...</p>
                ):(
                    <>
                    <div className="item">
                        <div className="main-wrapper">
                            <div className="amount">${''}{prices}</div>
                            <h6 className="title">#{''}{naira}</h6>
                            <div className="current-info range-up">
                                <i className="icon flaticon-down-caret"></i>
                                <span className="rate">BTC</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="main-wrapper">
                            <div className="amount">{dollars}</div>
                            <h6 className="title">Total Users</h6>
                            <div className="current-info range-up">
                                <i className="icon flaticon-up-carret"></i>
                                <span className="rate">+1.42</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="main-wrapper">
                            <div className="amount">$7,421,210</div>
                            <h6 className="title">Trade Volume</h6>
                            <div className="current-info range-up">
                                <i className="icon flaticon-up-carret"></i>
                                <span className="rate">+2.30</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="main-wrapper">
                            <div className="amount">0.0044559</div>
                            <h6 className="title">Exchange Rate</h6>
                            <div className="current-info range-up">
                                <i className="icon flaticon-down-caret"></i>
                                <span className="rate">-0.63</span>
                            </div>
                        </div>
                    </div> 

                    </>
                )
            }
        </>
    )
}



export default BtcPrice
