import { Month } from "./month";

export interface ITransactionInfo {
    transactionAmt: number;
    transactionMonth: Month;
}

export interface ITransactionRecord extends ITransactionInfo {
  customerName: string;
}

export interface ICustomerTransactionMap {
    [key: string]: ITransactionInfo[]
}

export interface IPointsTotalPerMonth {
    [key: string]: number
}

export interface ICustomerMonthlyPointsSummary {
    pointsPerMonth: IPointsTotalPerMonth,
    totalPoints: number
}

export interface ICustomerPointsSummary {
    [key: string]: ICustomerMonthlyPointsSummary
}

export interface IRewardsPointsProps {
    data: ITransactionRecord[],
    loading: boolean;
    error: string
}

export interface IDataSourceProps {
    dataSource: string;
}

export interface ICustomerPointsSummaryWrapper {
    customerPointsSummary: ICustomerPointsSummary
}