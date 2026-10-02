import { Unit } from "../../src/index.js";
// import { saveOutput } from "./common/index.js";

const data = await Unit("mani9");
// saveOutput({ inCallerFile: import.meta.url, inData: data });
console.log("Unit completed", data)
