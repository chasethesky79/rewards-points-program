import { CustomerPointsSummary, CustomerTransactionMap, PointsTotalPerMonth, TransactionInfo, TransactionRecord } from "../models/record-info";

const groupRecordsByCustomerAndMonth = (transactionRecords: TransactionRecord[]): CustomerTransactionMap => {
    return transactionRecords.reduce((acc: CustomerTransactionMap, element: TransactionRecord) => {
        const { customerName,  transactionMonth, transactionAmt } = element;
        const transactionInfoForCustomer = { transactionMonth, transactionAmt };
        acc[customerName] = !acc[customerName] ? [transactionInfoForCustomer] : [...acc[customerName], transactionInfoForCustomer]
        return acc;
    }, {})  
} 

const calculatePointsFromTransactionAmount = (transactionAmount: number) => transactionAmount <= 50 ? 0 : transactionAmount > 50 && transactionAmount <= 100 ? 50 :
transactionAmount > 100 ? 2 * (transactionAmount - 100) + 50 : -1;

const calculatePointsPerMonth = (transactions: TransactionInfo[]): PointsTotalPerMonth => {
   const pointsTotalPerMonth = transactions.reduce((acc: PointsTotalPerMonth, element: TransactionInfo) => {
      const { transactionAmt, transactionMonth } = element;
      const pointsForTransactionAmt = calculatePointsFromTransactionAmount(transactionAmt);
      acc[transactionMonth] = !acc[transactionMonth] ? pointsForTransactionAmt : acc[transactionMonth] + pointsForTransactionAmt;
      return acc;
   }, {})
   return pointsTotalPerMonth;
}

const buildCustomerPointsSummary = (customerTransactionMap: CustomerTransactionMap): CustomerPointsSummary => {
     const customerPointsSummary: CustomerPointsSummary = Object.entries(customerTransactionMap).reduce((acc: CustomerPointsSummary, entry )=> {
        const [key, value] = entry;
        const pointsPerMonth = calculatePointsPerMonth(value);
        const totalPoints: number = Object.values(pointsPerMonth).reduce((acc: number, element: number) => acc + element);
        acc[key] = { pointsPerMonth, totalPoints };
        return acc;
      }, {});
      return customerPointsSummary;
}

export const buildRewardsProgramResult = (transactions: TransactionRecord[]) => buildCustomerPointsSummary(groupRecordsByCustomerAndMonth(transactions));