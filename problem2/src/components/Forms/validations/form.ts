import { z } from "zod";

const useFormSchema = () => {
  return z.object({
    send: z.coerce.number(),
    receive: z.coerce.number(),
    sendAmount: z.coerce.number(),
    receiveAmount: z.coerce.number()
  });
};

export default useFormSchema;
