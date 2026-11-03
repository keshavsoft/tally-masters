import { noCompany } from "tally-http-json";
import convertValues from "./common/convertValues.js";

const startFunc = async () => {
    const rawResponse = await noCompany("Unit");
    // console.log("rawResponse : ", rawResponse?.data?.collection[0]);

    // const changedValues = rawResponse?.data?.collection.map(element => {
    //     return {
    //         name: element?.name?.value,
    //         mailingname: element?.mailingname?.value,
    //         type: element?.type?.value,
    //         candelete: element?.candelete?.value,
    //         issimpleunit: element?.issimpleunit?.value,
    //         masterid: element?.masterid?.value
    //     }
    // });

    const changedValues = convertValues(rawResponse?.data?.collection);

    return changedValues;
};

export default startFunc;
