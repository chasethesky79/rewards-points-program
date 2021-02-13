import { CustomerPointsSummary, TransactionRecord } from '../models/record-info';
import { Month } from '../models/month';
import { buildRewardsProgramResult } from './rewards-calculator';

describe('Compute rewards points for customer', () => {
    it('should compute rewards points for each customer per month and total points', () => {
         const firstCustomer = 'John Doe';
         const secondCustomer = 'Brian Murphy';
         const pointsPerMonth = 'pointsPerMonth';
         const totalPoints = 'totalPoints';
         const inputTransactions: TransactionRecord[] = [
            {
               customerName: firstCustomer,
               transactionMonth: Month.JANUARY,
               transactionAmt: 30
            },
            {
               customerName: firstCustomer,
               transactionMonth: Month.JANUARY,
               transactionAmt: 50
            },
            {
                customerName: firstCustomer,
                transactionMonth: Month.FEBRUARY,
                transactionAmt: 40
             },
             {
                customerName: secondCustomer,
                transactionMonth: Month.JANUARY,
                transactionAmt: 120
             },
             {
                customerName: secondCustomer,
                transactionMonth: Month.FEBRUARY,
                transactionAmt: 60
             },
            ]
            const result: CustomerPointsSummary = buildRewardsProgramResult(inputTransactions);
            const pointsSummaryForFirstCustomer = result[firstCustomer];
            const pointsSummaryForSecondCustomer = result[secondCustomer];
            const monthlyPointsSummaryForFirstCustomer = pointsSummaryForFirstCustomer[pointsPerMonth];
            const monthlyPointsSummaryForSecondCustomer = pointsSummaryForSecondCustomer[pointsPerMonth];
            const totalPointsForFirstCustomer = pointsSummaryForFirstCustomer[totalPoints];
            const totalPointsForSecondCustomer = pointsSummaryForSecondCustomer[totalPoints];
            expect(monthlyPointsSummaryForFirstCustomer[Month.JANUARY]).toBe(0);
            expect(monthlyPointsSummaryForFirstCustomer[Month.FEBRUARY]).toBe(0);
            expect(monthlyPointsSummaryForSecondCustomer[Month.JANUARY]).toBe(90);
            expect(monthlyPointsSummaryForSecondCustomer[Month.FEBRUARY]).toBe(10);
            expect(totalPointsForFirstCustomer).toBe(0);
            expect(totalPointsForSecondCustomer).toBe(100);
    })
})