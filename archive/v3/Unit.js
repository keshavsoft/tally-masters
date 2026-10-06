import { masters } from "tally-xml-tdl";
import jsonTraversal from "json-traversal";

const transformation = {
    mapping: {
        item: {
            units: [
                {
                    list: "UNIT",
                    item: [{
                        name: "@_NAME",
                        reservedName: "@_RESERVEDNAME"
                    }]
                }
            ]
        }
    }
};

const startFunc = async (inCompanyName) => {
    const fromNpm = await masters.Unit.all(inCompanyName);
    // console.log("uuuuuuuuu : ", fromNpm?.ENVELOPE?.BODY?.DATA?.COLLECTION?.UNIT);
    const fromTransform = await jsonTraversal.transform(fromNpm?.ENVELOPE?.BODY?.DATA?.COLLECTION, transformation);

    return await fromTransform?.units;
};

export default startFunc;
