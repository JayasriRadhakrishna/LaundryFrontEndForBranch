import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as ColumnScan } from "./ColumnScan/entryFile.js";
import { StartFunc as ColumnRate } from "./ColumnRate/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial");

    if (LocalColumnOperateFine === undefined === false) {
        ColumnOperate({ inFindColumn: LocalColumnOperateFine });
    };

    let LocalScanColumn = LocalColumns.find(element => element.field === "Scan");

    if (LocalScanColumn === undefined === false) {
        ColumnScan({ inFindColumn: LocalScanColumn });
    };

    let LocalScanRate = LocalColumns.find(element => element.field === "Rate");

    if (LocalScanRate === undefined === false) {
        ColumnRate({ inFindColumn: LocalScanRate });
    };
};

export { StartFunc };