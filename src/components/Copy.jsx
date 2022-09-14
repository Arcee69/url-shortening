// import React, { useState } from "react";
// import { toast } from "react-toastify";

// import copyIcon from "../assets/icons/copyIcon.svg";

// const CopyFunction = ({ valueToCopy }) => {
//   const [copySuccess, setCopySuccess] = useState();

//   const copyToClipBoard = async (copyMe) => {
//     try {
//       await navigator.clipboard.writeText(copyMe);
//       setCopySuccess("Copied!");
//       toast.info("Copied");
//       setTimeout(() => {
//         setCopySuccess(null);
//       }, 2000);
//       //   window.location.reload();
//     } catch (err) {
//       setCopySuccess("Failed to copy!");
//       //   window.location.reload();
//     }
//   };

//   return (
//     <div
//       className="px-2 w-[100%] lg:w-[35%] cursor-pointer flex items-center bg-greySix mt-4 py-1.5 rounded-md border border-black/30 -ml-4"
//       onClick={() => copyToClipBoard(valueToCopy)}
//     >
//       <p className="text-sm font-normal pr-3">Copy</p>
//       <img src={copyIcon} alt="copyIcon" className="w-4 h-4" />
//     </div>
//   );
// };

// export { CopyFunction };
