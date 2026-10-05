/**
 * TypeScript Declarations for tally-masters (v6)
 * Clean, JSON-driven TDL and XML extraction and manipulation tools for Tally
 */

export interface UnitDto {
    Name: string;
    ReserveName: string;
}

export interface StockItemDto {
    Name: string;
    ReserveName: string;
    Units: string;
    Batches: Array<{
        godownName?: string;
        [key: string]: any;
    }>;
}

export interface LedgerDto {
    Name: string;
    ReserveName: string;
    GstDetails?: Array<{
        GSTIN?: string;
        RegistrationType?: string;
        State?: string;
        PlaceOfSupply?: string;
        ApplicableFrom?: string;
    }>;
}

export interface VoucherSalesDto {
    Date?: string;
    VoucherTypeName?: string;
    PartyLedgerName?: string;
    VoucherNumber?: string;
    Reference?: string;
    IsDeemedPositive?: string;
    IsInvoice?: string;
    MasterId?: string;
    Amount?: string;
    InventoryEntries?: Array<{
        StockItemName?: string;
        Rate?: string;
        Amount?: string;
        ActualQty?: string;
        BilledQty?: string;
        BatchAllocations?: Array<{
            GodownName?: string;
            BatchName?: string;
            Amount?: string;
            ActualQty?: string;
            BilledQty?: string;
            BatchRate?: string;
            [key: string]: any;
        }>;
    }>;
    [key: string]: any;
}

export type TallyMasters = {
    Unit: {
        /** Fetch all Units of Measurement from Tally */
        all: (inCompanyName: string) => Promise<UnitDto[]>;
    };
    StockItem: {
        /** Fetch Stock Items with batch allocations from Tally */
        withBatches: (inCompanyName: string) => Promise<StockItemDto[]>;
    };
    Ledger: {
        /** Fetch Ledgers with GST registration details from Tally */
        withGstDetails: (inCompanyName: string) => Promise<LedgerDto[]>;
    };
    vouchers: {
        sales: {
            /** Fetch sales vouchers for a given date range */
            simple: (inCompanyName: string, inFromDate?: string, inToDate?: string) => Promise<VoucherSalesDto[]>;
        };
    };
};

declare const tallyMasters: TallyMasters;

export default tallyMasters;
