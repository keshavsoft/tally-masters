import { masters } from "tally-xml-tdl";
import jsonTransformer from "@keshavsoft/json-transformer";

import transformation from "./transformation.json" with { type: "json" };

const startFunc = async (inCompanyName) => {
    const fromNpm = await masters.Ledger.withGstDetails(inCompanyName);

    const fromTransform = await jsonTransformer(fromNpm?.ENVELOPE?.BODY?.DATA?.COLLECTION, transformation);

    return await fromTransform?.Ledgers;
};

export default startFunc;
