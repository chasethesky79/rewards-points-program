import { CustomerTransactionMap, TransactionRecord } from "../models/record-info";

export const groupRecordsByCustomerAndMonth = (transactionRecords: TransactionRecord[]): CustomerTransactionMap => {
    return transactionRecords.reduce((acc: CustomerTransactionMap, element: TransactionRecord) => {
        const { customerName,  transactionMonth, transactionAmt } = element;
        const transactionInfoForCustomer = { transactionMonth, transactionAmt };
        acc[customerName] = !acc[customerName] ? [transactionInfoForCustomer] : [...acc[customerName], transactionInfoForCustomer]
        return acc;
    }, {})  
} 