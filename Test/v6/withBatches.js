import tallyMasters from "../../src/index.js";

const data = await tallyMasters.StockItem.withBatches("mani9");

console.log(data);
