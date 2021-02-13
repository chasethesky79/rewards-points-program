import { TransactionRecord } from '../models/record-info';
import { Month } from '../models/month';
import { buildRewardsProgramResult } from './rewards-calculator';

describe('Group records by customer', () => {
    it('should group transaction records by customer', () => {
        const inputTransactions: TransactionRecord[] = [
            {
               customerName: 'John Doe',
               transactionMonth: Month.JANUARY,
               transactionAmt: 30
            },
            {
               customerName: 'John Doe',
               transactionMonth: Month.JANUARY,
               transactionAmt: 50
            },
            {
                customerName: 'John Doe',
                transactionMonth: Month.FEBRUARY,
                transactionAmt: 40
             },
             {
                customerName: 'Brian Murphy',
                transactionMonth: Month.JANUARY,
                transactionAmt: 120
             },
             {
                customerName: 'Brian Murphy',
                transactionMonth: Month.FEBRUARY,
                transactionAmt: 60
             },
            ]
            console.log(`FINAL RESULT ${JSON.stringify(buildRewardsProgramResult(inputTransactions))}`);
    })
})