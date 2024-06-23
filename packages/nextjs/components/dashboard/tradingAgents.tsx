import React from 'react'

const TradingAgents = () => {
  return (
    <div className="flex gap-4 px-10 mt-8">
      <div className='shadow-lg p-2 rounded-lg bg-secondary w-[40%]'>
        <div className="flex justify-between p-4 ">
          <h1 className="text-3xl my-0 font-semibold">AI Trading Agents</h1>
          <button className="btn btn-outline btn-accent rounded-lg">+ Add</button>
        </div>
        <div className='border border-accent p-2 rounded-lg m-4'>
          Starknet ETH Trading Agent
        </div>
      </div>
      <div className="shadow-lg p-2 rounded-lg bg-secondary w-[60%]">
        Where does it come from?
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum The Extremes of Good and Evil.
      </div>
    </div>
  )
}

export default TradingAgents