import { IoCloseOutline } from "react-icons/io5";

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  if (!orderPopup) return null;

  return (
    <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm flex items-center justify-center">

      <div className="p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">

        {/* Header */}
        <div className="flex items-center justify-between">

          <h1 className="font-semibold text-lg">Order Your Book</h1>

          <IoCloseOutline
            className="text-2xl cursor-pointer"
            onClick={() => setOrderPopup(false)}
          />

        </div>

        {/* Body */}
        <div className="mt-4 space-y-3">

          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2"
          />

          <input
            type="text"
            placeholder="Address"
            className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2"
          />

          <div className="flex justify-center pt-2">
            <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full">
              Order Now
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default OrderPopup;