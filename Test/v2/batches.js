import { StockItem } from "../../src/index.js";
// import { saveOutput } from "./common/index.js";

const data = await StockItem.withBatches("mani9");
// saveOutput({ inCallerFile: import.meta.url, inData: data });
console.log("Unit completed", data.length, data[0]);
