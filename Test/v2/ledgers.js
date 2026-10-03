import { Ledger } from "../../src/index.js";
// import { saveOutput } from "./common/index.js";

const data = await Ledger.withGstDetails("Mani10");
// saveOutput({ inCallerFile: import.meta.url, inData: data });
console.log("Ledger completed", data);
