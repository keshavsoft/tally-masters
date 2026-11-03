import { StockItem } from "../../src/index.js";

StockItem().then(data => {
    console.log("StockItem : ", data[0]);
});