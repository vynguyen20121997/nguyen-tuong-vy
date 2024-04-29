import { useQuery } from "react-query";
import apiClient from "./services/api-client";
import CoinBackGround from "./assets/coin-background.png";
import {
  HEADLINE_TEXT,
  RANDOM_TEXT_1,
  RANDOM_TEXT_2,
  RANDOM_TEXT_3,
} from "./components/Forms/constants/constants";
import Forms from "./components/Forms";

function App() {
  const { data } = useQuery(["curency"], () => apiClient.get("prices.json"));

  return (
    <>
      <div className="bg-[#DFECF4]  h-screen content-center px-20  grid grid-cols-3">
        <div className=" col-span-2 ">
          <div>
            <p className="text-lime-800 text-8xl	font-bold	">{HEADLINE_TEXT}</p>
            <p className="text-black text-lg w-3/4">
              {RANDOM_TEXT_1}
              <span className="text-lime-800 text-lg	font-bold">
                {RANDOM_TEXT_2}
              </span>
              {RANDOM_TEXT_3}
            </p>
          </div>
          <div className="mt-10">
            <Forms data={data?.data} />
          </div>
        </div>

        <div
          className={`col-span-1 flex justify-center bg-center	bg-no-repeat bg-contain `}
          style={{ backgroundImage: `url(${CoinBackGround})` }}
        ></div>
      </div>
    </>
  );
}

export default App;
