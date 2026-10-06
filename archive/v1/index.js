import { company } from "tally-xml-tdl";
import jsonTraversal from "json-traversal";

const transformation = {
    mapping: {
        item: {
            companies: [
                {
                    list: "items",
                    item: {
                        name: "@_NAME",
                        reservedName: "@_RESERVEDNAME"
                    }
                }
            ]
        }
    }
};

const transformCompany = (inCompany) => {
    if (inCompany === undefined || inCompany === null) {
        return inCompany;
    }

    const isArray = Array.isArray(inCompany);

    const localInput = {
        items: isArray
            ? inCompany
            : [inCompany]
    };

    const localInput1 = isArray
        ? inCompany
        : [inCompany];

    const localOutput = jsonTraversal.transform(
        localInput,
        transformation
    );

    return localOutput;
};

const startFunc = async (requestParams) => {
    const fromNpm = await company.all(requestParams);
    // console.log("company.all completed", fromNpm);
    // console.log("company.all completed", fromNpm?.ENVELOPE?.BODY?.DATA?.COLLECTION?.COMPANY);

    return await transformCompany(fromNpm?.ENVELOPE?.BODY?.DATA?.COLLECTION?.COMPANY);

};

export default startFunc;
