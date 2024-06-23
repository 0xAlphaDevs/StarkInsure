import type { NextPage } from "next";
import MyTrades from "~~/components/dashboard/myTrades";
import { getMetadata } from "~~/utils/scaffold-stark/getMetadata";

// export const metadata = getMetadata({
//   title: "Dashboard",
//   description:
//     "",
// });

const Dashboard: NextPage = () => {
  return (
    <>
      <div>Dashboard</div>
      <div className=" mt-8 p-10">
        <MyTrades />
      </div>
    </>
  );
};

export default Dashboard;
