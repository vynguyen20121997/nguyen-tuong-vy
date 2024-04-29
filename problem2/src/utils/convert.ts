import CurrencyExchangeData from "../types/types";

export const convert = (data: CurrencyExchangeData) => {
    const exchageRate = Number(data.send) / Number(data.receive);
    const exchangeNumber = data.sendAmount * exchageRate;
    console.log(exchangeNumber)
    return exchangeNumber;

}
