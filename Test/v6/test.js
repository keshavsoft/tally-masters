import assert from "node:assert/strict";
import test from "node:test";
import tallyMasters from "../../src/index.js";

test("v6 exposes the complete JSON-driven API tree aligned across all masters", () => {
    assert.equal(typeof tallyMasters.Unit.all, "function");
    assert.equal(typeof tallyMasters.StockItem.withBatches, "function");
    assert.equal(typeof tallyMasters.Ledger.withGstDetails, "function");
    assert.equal(typeof tallyMasters.vouchers.sales.simple, "function");
});

test("v6 master routes are correctly structured objects with action methods", () => {
    assert.equal(typeof tallyMasters.Unit, "object");
    assert.equal(typeof tallyMasters.StockItem, "object");
    assert.equal(typeof tallyMasters.Ledger, "object");
    assert.equal(typeof tallyMasters.vouchers, "object");
    assert.equal(typeof tallyMasters.vouchers.sales, "object");
});
