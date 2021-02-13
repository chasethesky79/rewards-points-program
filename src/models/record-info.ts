import { Month } from "./month";

export interface TransactionInfo {
    transactionAmt: number;
    transactionMonth: Month;
}

export interface TransactionRecord extends TransactionInfo {
  customerName: string;
}

export interface CustomerTransactionMap {
    [key: string]: TransactionInfo[]
}

export interface PointsTotalPerMonth {
    [key: string]: number
}

export interface CustomerMonthlyPointsSummary {
    pointsPerMonth: PointsTotalPerMonth,
    totalPoints: number
}

export interface CustomerPointsSummary {
    [key: string]: CustomerMonthlyPointsSummary
}