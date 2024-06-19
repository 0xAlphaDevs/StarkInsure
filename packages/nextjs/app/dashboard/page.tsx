import type { NextPage } from "next";
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
      <div className="text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0">Dashboard</h1>
      </div>
    </>
  );
};

export default Dashboard;
