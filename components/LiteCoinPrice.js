import React, { useState, useEffect } from 'react'
import axios from 'axios'

const LiteCoinPrice = () => {

    const [ liteCoinPrices, setLiteCoinPrices] = useState(0)
    const [ naira, setNaira] = useState(0)
    const [ baseCurrency, setBaseCurrency ] = useState('')

    const fetchBTCPriceData = async () => {
        try {
            const res = await axios.get("https://api.coinbase.com/v2/prices/ltc-usd/spot")
            let usd = res.data.data.amount
            usd = parseFloat(usd.replace(/,/g,''))
            usd = usd.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
            // States
            setLiteCoinPrices(usd)
            setBaseCurrency(res.data.data.base)
        } catch (err) {
            console.log(err)
        }

        try {
            const res = await axios.get("https://api.coinbase.com/v2/prices/ltc-ngn/spot")
            let ngn = res.data.data.amount
            ngn = parseFloat(ngn.replace(/,/g,''))
            ngn = ngn.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
            setNaira(ngn)
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
       setInterval(() => {
        fetchBTCPriceData()
       }, 3000);
    
    }, [setLiteCoinPrices, setBaseCurrency, setNaira])



    return (
        <div className="item">
            <div className="main-wrapper">
                <div className="amount">${''}{liteCoinPrices}</div>
                <h6 className="title">#{''}{naira}</h6>
                <div className="current-info range-up">
                    <i className="icon flaticon-up-carret"></i>
                    <span className="rate">{baseCurrency}</span>
                </div>
            </div>
        </div>
    )
}

export default LiteCoinPrice
