import React from 'react'
import BCHCoinPrice from './BCHCoinPrice'
import BtcPrice from './BtcPrice'
import DASHCoinPrice from './DASHCoinPrice'
import ETHCoinPrice from './ETHCoinPrice'
import LiteCoinPrice from './LiteCoinPrice'


const AllPrices = () => {

    return (
        <>
            <BtcPrice/>
            <LiteCoinPrice/>
            <ETHCoinPrice/>
            <BCHCoinPrice/>
            <DASHCoinPrice/>
        </>
    )
}

export default AllPrices
