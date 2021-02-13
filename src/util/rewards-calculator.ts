import { ICustomerPointsSummary, ICustomerTransactionMap, IPointsTotalPerMonth, ITransactionInfo, ITransactionRecord } from "../models/rewards-models";

const groupRecordsByCustomerAndMonth = (transactionRecords: ITransactionRecord[]): ICustomerTransactionMap => {
    return transactionRecords.reduce((acc: ICustomerTransactionMap, element: ITransactionRecord) => {
        const { customerName,  transactionMonth, transactionAmt } = element;
        const transactionInfoForCustomer = { transactionMonth, transactionAmt };
        acc[customerName] = !acc[customerName] ? [transactionInfoForCustomer] : [...acc[customerName], transactionInfoForCustomer]
        return acc;
    }, {})  
} 

const calculatePointsFromTransactionAmount = (transactionAmount: number) => transactionAmount <= 50 ? 0 : transactionAmount > 50 && transactionAmount <= 100 ? transactionAmount - 50 :
transactionAmount > 100 ? 2 * (transactionAmount - 100) + 50 : -1;

const calculatePointsPerMonth = (transactions: ITransactionInfo[]): IPointsTotalPerMonth => {
   const pointsTotalPerMonth = transactions.reduce((acc: IPointsTotalPerMonth, element: ITransactionInfo) => {
      const { transactionAmt, transactionMonth } = element;
      const pointsForTransactionAmt = calculatePointsFromTransactionAmount(transactionAmt);
      acc[transactionMonth] = !acc[transactionMonth] ? pointsForTransactionAmt : acc[transactionMonth] + pointsForTransactionAmt;
      return acc;
   }, {})
   return pointsTotalPerMonth;
}

const buildCustomerPointsSummary = (customerTransactionMap: ICustomerTransactionMap): ICustomerPointsSummary => {
     const customerPointsSummary: ICustomerPointsSummary = Object.entries(customerTransactionMap).reduce((acc: ICustomerPointsSummary, entry )=> {
        const [key, value] = entry;
        const pointsPerMonth = calculatePointsPerMonth(value);
        const totalPoints: number = Object.values(pointsPerMonth).reduce((acc: number, element: number) => acc + element);
        acc[key] = { pointsPerMonth, totalPoints };
        return acc;
      }, {});
      return customerPointsSummary;
}

export const buildRewardsProgramResult = (transactions: ITransactionRecord[]) => buildCustomerPointsSummary(groupRecordsByCustomerAndMonth(transactions));