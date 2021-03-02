import React from 'react'
import BtcPrice from './BtcPrice'
import ETHCoinPrice from './ETHCoinPrice'
import LiteCoinPrice from './LiteCoinPrice'


const AllPrices = () => {

    return (
        <>
            <BtcPrice/>
            <LiteCoinPrice/>
            <ETHCoinPrice/>
        </>
    )
}

export default AllPrices
