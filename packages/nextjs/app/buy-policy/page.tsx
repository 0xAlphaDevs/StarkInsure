import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-stark/getMetadata";

// export const metadata = getMetadata({
//   title: "Buy Policy",
//   description:
//     "",
// });

const BuyPolicy: NextPage = () => {
  return (
    <>
      <div>BuyPolicy</div>
      <div className="text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0">BuyPolicy</h1>
      </div>
    </>
  );
};

export default BuyPolicy;
