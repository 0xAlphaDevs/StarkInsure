import type { NextPage } from "next";
import MyTrades from "~~/components/dashboard/myTrades";
import TradingAgents from "~~/components/dashboard/tradingAgents";
import { getMetadata } from "~~/utils/scaffold-stark/getMetadata";

// export const metadata = getMetadata({
//   title: "Dashboard",
//   description:
//     "",
// });

const Dashboard: NextPage = () => {
  return (
    <>
      <div className="mt-8 px-10">
        <div className="text-4xl p-2 font-bold">AI Trader</div>

        <div className="shadow-lg p-2 rounded-lg bg-secondary">
          Portfolio Value :
        </div>
      </div>
      <TradingAgents />
      <div className="mt-8 px-10">
        <MyTrades />
      </div>
    </>
  );
};

export default Dashboard;
