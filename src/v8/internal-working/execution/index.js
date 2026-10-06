import { masters, vouchers } from "tally-xml-tdl";
import jsonTransformer from "@keshavsoft/json-transformer";
import getEndpointSpec from "./getEndpointSpec.js";

const moduleMap = {
    masters,
    vouchers
};

const startFunc = async ({ inRoutePath, inParams, inSource }) => {
    const localRoutePath = inRoutePath;
    const localParams = inParams ?? [];
    const localSource = inSource;

    const endpoint = getEndpointSpec({
        inSource: localSource,
        inRoutePath: localRoutePath
    });

    if (!endpoint) {
        throw new Error(`Endpoint specification not found for route: ${localRoutePath}`);
    }

    const targetModule = moduleMap[endpoint.module];
    if (!targetModule) {
        throw new Error(`Module ${endpoint.module} not found`);
    }

    const handler = targetModule[endpoint.resource]?.[endpoint.action];
    if (typeof handler !== "function") {
        throw new Error(`Handler not found for ${endpoint.module}.${endpoint.resource}.${endpoint.action}`);
    }

    const fromNpm = await handler(...localParams);
    const collection = fromNpm?.ENVELOPE?.BODY?.DATA?.COLLECTION;

    if (!endpoint.transformation) {
        return collection;
    }

    const fromTransform = await jsonTransformer(collection, endpoint.transformation);

    return endpoint.resultKey ? fromTransform?.[endpoint.resultKey] : fromTransform;
};

export default startFunc;
