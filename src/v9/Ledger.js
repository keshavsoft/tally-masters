import { noCompany } from "tally-http-json";
import convertValues from "./common/convertValues.js";

const startFunc = async () => {
    const rawResponse = await noCompany("Ledger");
    // console.log("rawResponse : ", rawResponse?.data?.collection[0]);

    const changedValues = convertValues(rawResponse?.data?.collection);

    return changedValues;
};

export default startFunc;
