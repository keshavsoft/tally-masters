import { masters } from "tally-xml-tdl";
import jsonTraversal from "json-traversal";
import transformation from "./transformation.json" with { type: "json" };

const startFunc = async (inCompanyName) => {
    console.log("inCompanyName : ", inCompanyName);

    const fromNpm = await masters.Ledger.withGstDetails(inCompanyName);
    // console.log("withGstDetails : ", fromNpm?.ENVELOPE?.BODY?.DATA?.COLLECTION?.LEDGER[6]);
    const fromTransform = await jsonTraversal.transform(fromNpm?.ENVELOPE?.BODY?.DATA?.COLLECTION, transformation);

    return await fromTransform?.ledgers;
};

export default startFunc;
