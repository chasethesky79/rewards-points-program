import { Month } from "./month";

export interface TransactionInfo {
    transcationAmt: number;
    transactionMonth: Month;
}

export interface TransactionRecord extends TransactionInfo {
  customerName: string;
}

export interface CustomerTransactionMap {
    [key: string]: Array<TransactionInfo>
}