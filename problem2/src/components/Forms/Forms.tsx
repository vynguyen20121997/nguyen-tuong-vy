import { ChevronRightIcon } from "@heroicons/react/24/solid";

const Forms = () => {
  return (
    <div className="min-w-[340px] max-w-[800px] h-32 rounded-md border border-gray-200 ml-20  grid grid-cols-3 content-center">
      <div className="shadow-box h-24 w-[90%] justify-self-center	rounded-md grid grid-rows-2 	">
        <div className="text-black flex justify-around	 items-center">
          <p className="text-md">Amount to send</p>
          <p className="text-2xl">CRC</p>
        </div>
        <div className="shadow-outInput w-full rounded-lg  pt-1 pb-[6px] flex justify-center">
          <input
            type="number"
            className="shadow-inputIn rounded-md w-[95%] focus:outline-none text-black"
            id="input-amount"
          />
        </div>
      </div>

      <div className="shadow-box h-24 w-[90%] justify-self-center	rounded-md grid grid-rows-2 	">
        <div className="text-black flex justify-around items-center">
          <p className="text-md">Amount to receive</p>{" "}
          <p className="text-2xl">CRC</p>
        </div>
        <div className="shadow-outInput w-full rounded-lg  pt-1 pb-[6px] flex justify-center">
          <input
            type="number"
            className="shadow-inputIn rounded-md w-[95%] focus:outline-none  text-black"
            id="output-amount"
          />
        </div>
      </div>

      <div
        className=" text-right shadow-button h-24 w-[90%] justify-self-center	rounded-md px-5 py-2.5 overflow-hidden group bg-lime-800 
        relative  hover:from-lime-500  hover:to-green-400 text-white  transition-all ease-out duration-300"
      >
        <span
          className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-lime-200 opacity-10
         rotate-12 group-hover:-translate-x-40 ease"
        ></span>
        <button type="button" className="relative">
          <ChevronRightIcon className="size-12 text-white " />
          <p>SWAP</p>
        </button>
      </div>
    </div>
  );
};

export default Forms;
