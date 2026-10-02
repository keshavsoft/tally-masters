import { masters } from "tally-xml-tdl";
import jsonTransformer from "@keshavsoft/json-transformer";

import transformation from "./transformation.json" with { type: "json" };

const startFunc = async (inCompanyName) => {
    const fromNpm = await masters.Unit.all(inCompanyName);
    // console.log("uuuuuuuuu : ", fromNpm?.ENVELOPE?.BODY?.DATA?.COLLECTION?.UNIT);
    const fromTransform = await jsonTransformer(fromNpm?.ENVELOPE?.BODY?.DATA?.COLLECTION, transformation);

    // console.log("fromTransform : ", fromTransform);

    return await fromTransform?.units;
};

export default startFunc;
