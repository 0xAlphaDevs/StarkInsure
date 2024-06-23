import React from 'react'

const MyTrades = () => {
  return (
    <div className='shadow-lg p-2 rounded-lg bg-secondary'>
      <div className="flex justify-between p-4 ">
        <h1 className="text-3xl my-0 font-semibold">My Trades</h1>
        <button className="btn btn-outline btn-accent rounded-lg">Request Agent for Trading Signals</button>
      </div>
      <div className='grid grid-cols-2 w-full px-4'>
        <p>Agent Name :</p>
        <p>Asset :</p>
        <p>Predicted Price :</p>
        <p>Current Price:</p>
        <p>Order Type :</p>
        <p>Execute Trade :</p>
      </div>
    </div>
  )
}

export default MyTrades