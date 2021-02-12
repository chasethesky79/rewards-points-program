import { Month } from "./month";

export interface TransactionInfo {
    transactionAmt: number;
    transactionMonth: Month;
}

export interface TransactionRecord extends TransactionInfo {
  customerName: string;
}

export interface CustomerTransactionMap {
    [key: string]: Array<TransactionInfo>
}