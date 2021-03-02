import React from 'react'
import BCHCoinPrice from './BCHCoinPrice'
import BtcPrice from './BtcPrice'
import ETHCoinPrice from './ETHCoinPrice'
import LiteCoinPrice from './LiteCoinPrice'


const AllPrices = () => {

    return (
        <>
            <BtcPrice/>
            <LiteCoinPrice/>
            <ETHCoinPrice/>
            <BCHCoinPrice/>
        </>
    )
}

export default AllPrices
