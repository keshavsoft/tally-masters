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

const startFunc = async (requestParams) => {
    const fromNpm = await masters.Unit.all("mani9");
    // console.log("uuuuuuuuu : ", fromNpm?.ENVELOPE?.BODY?.DATA?.COLLECTION?.UNIT);

    return await jsonTraversal.transform(fromNpm?.ENVELOPE?.BODY?.DATA?.COLLECTION, transformation);
};

export default startFunc;
