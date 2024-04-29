import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FC } from "react";
import { CurencyData, CurrencyExchangeData } from "../../types/types";
import { convert } from "../../utils/convert";
import { DEFAULT_VALUES } from "./constants/constants";
import useFormSchema from "./validations/form";
import NumberFormatField from "./components/NumberInput";
import Select from "./components/Select";
import Form from "./components/Form";

interface Props {
  data: CurencyData[];
}

const Forms: FC<Props> = ({ data }) => {
  const methods = useForm({
    resolver: zodResolver(useFormSchema()),
    defaultValues: DEFAULT_VALUES,
  });

  const curencyData = [...new Set(data)];

  const { handleSubmit, setValue } = methods;

  const handleFormSubmit = handleSubmit((data: CurrencyExchangeData) => {
    const convertedRate = convert(data);
    if (convertedRate) {
      setValue("receiveAmount", convertedRate);
    }
  });

  return (
    <Form methods={methods} onSubmit={handleFormSubmit}>
      <div className="min-w-[340px] max-w-[800px] h-40 rounded-md border border-gray-200  grid grid-cols-3 content-center">
        <div className="shadow-box h-24 w-[90%]  	rounded-md grid grid-rows-2 	">
          <div className="text-black flex justify-around	items-center">
            <p className="text-md">Amount to send</p>
            <div className="">
              <Select name={"send"} options={curencyData} />
            </div>
          </div>
          <div className="shadow-outInput w-full rounded-lg  pt-1 pb-[6px] flex justify-center">
            <NumberFormatField name="sendAmount" />
          </div>
        </div>

        <div className="shadow-box h-24 w-[90%]  	rounded-md grid grid-rows-2 	">
          <div className="text-black flex justify-around items-center">
            <p className="text-md">Amount to receive</p>
            <div className="">
              <Select name={"receive"} options={curencyData} />
            </div>
          </div>
          <div className="shadow-outInput w-full rounded-lg  pt-1 pb-[6px] flex justify-center">
            <NumberFormatField name="receiveAmount" disabled={true} />
          </div>
        </div>

        <div
          className=" text-right shadow-button h-24 w-[90%]  	rounded-md px-5 py-2.5 overflow-hidden group bg-lime-800 
        relative  hover:from-lime-500  hover:to-green-400 text-white  transition-all ease-out duration-300  "
          onClick={handleFormSubmit}
        >
          <span
            onClick={handleFormSubmit}
            className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-500 transform translate-x-12 bg-lime-200 opacity-10
         rotate-12 group-hover:-translate-x-40 ease"
          ></span>
          <button onClick={handleFormSubmit} type="button" className="relative">
            <ChevronRightIcon className="size-12 text-white " />
            <p>SWAP</p>
          </button>
        </div>
      </div>
    </Form>
  );
};

export default Forms;
