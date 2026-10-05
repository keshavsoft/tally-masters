import tallyMasters from "../../src/index.js";

const data = await tallyMasters.Ledger.withGstDetails("mani9")

console.log(data);
