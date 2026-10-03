import { vouchers } from "tally-xml-tdl";
import jsonTransformer from "@keshavsoft/json-transformer";

import transformation from "./transformation.json" with { type: "json" };

const startFunc = async (inCompanyName, formDate, toDate) => {
    // const fromNpm = await vouchers.sales.period(inCompanyName, "1-Apr-2026", "31-Mar-2027");
    const fromNpm = await vouchers.sales.period(inCompanyName, formDate, toDate);
    const collection = fromNpm?.ENVELOPE?.BODY?.DATA?.COLLECTION;

    const fromTransform = await jsonTransformer(collection, transformation);

    return await fromTransform?.sales;
};

export default startFunc;
