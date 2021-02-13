import { useState, useEffect } from "react";
import { IDataSourceProps, IRewardsPointsProps } from "../models/rewards-models";

export const withDataFetching = (WrappedComponent: React.FC<IRewardsPointsProps>) => {
    return ({ dataSource }: IDataSourceProps) => {
        const initialTransactions: IRewardsPointsProps = {
            data: [],
            loading: true,
            error: ''
        }
        const [transactions, setTransactions] = useState(initialTransactions);
        useEffect(() => {
            async function fetchData() {
            try {
                const transactionsData = await fetch(dataSource);
                const result = await transactionsData.json();
                if (result) {
                    setTransactions({...initialTransactions, data: result, loading: false })
                }
            } catch(error) {
                const { message } = error;
                setTransactions({...initialTransactions, error: message })
            }
         } fetchData();     
         }, []);
         return (
             <WrappedComponent {...transactions}/>
         )
    }
}