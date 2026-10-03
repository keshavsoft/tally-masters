import { vouchers } from "../../src/index.js";
// import { saveOutput } from "./common/index.js";

const data = await vouchers.sales.simple("mani9", "1-Apr-2026", "1-Apr-2026");
// saveOutput({ inCallerFile: import.meta.url, inData: data });
console.log("Ledger completed", data);
