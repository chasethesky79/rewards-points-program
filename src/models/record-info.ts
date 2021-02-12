import { Month } from "./month";

type MonthDetails = {
    transactionMonth: Month;
}

export interface TransactionInfo extends MonthDetails {
    transactionAmt: number;
}

export interface PointsTotalPerMonth extends MonthDetails {
    totalPoints: number;
}

export interface TransactionRecord extends TransactionInfo {
  customerName: string;
}

export interface CustomerTransactionMap {
    [key: string]: TransactionInfo[]
}