import Clocks from "./components/Clocks/Clocks";
import Forms from "./components/Forms/Forms";

function App() {
  return (
    <>
      <div className="bg-[#DFECF4]  h-screen content-center px-5 ">
        <div className="grid grid-cols-2">
          <div>
            <p className="text-lime-800 text-8xl	font-bold	">MONEY EXCHANGE</p>
            <p className="text-black text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
          <div>
            <Clocks />
          </div>
        </div>

        <div className="grid grid-cols-3 mt-20">
          <div className="col-span-1"></div>
          <div className="col-span-2">
            <Forms />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
