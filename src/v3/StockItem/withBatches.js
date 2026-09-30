import { masters } from "tally-xml-tdl";
import jsonTraversal from "json-traversal";

const transformation = {
    mapping: {
        item: {
            stockitems: [
                {
                    list: "STOCKITEM",
                    item: {
                        itemName: "@_NAME",
                        baseUnit: "BASEUNITS.#text",
                        batches: [{
                            "list": "BATCHALLOCATIONS.LIST",
                            "item": [{
                                godownName: "GODOWNNAME",
                                batchName: "BATCHNAME",
                                openingBalance: "OPENINGBALANCE",
                                openingValue: "OPENINGVALUE",
                                openingRate: "OPENINGRATE"
                            }]
                        }]
                    }
                }
            ]
        }
    }
};

const startFunc = async (requestParams) => {
    const fromNpm = await masters.StockItem.withBatches.all("mani9");
    // console.log("uuuuuuuuu : ", fromNpm?.ENVELOPE?.BODY?.DATA?.COLLECTION);
    const fromTransform = await jsonTraversal.transform(fromNpm?.ENVELOPE?.BODY?.DATA?.COLLECTION, transformation);

    return await fromTransform?.stockitems;
};

export default startFunc;
