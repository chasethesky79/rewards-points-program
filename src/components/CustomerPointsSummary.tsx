import { ICustomerPointsSummaryProps } from "../models/rewards-models";
import { RewardsTableWrapper, RewardsTableHeaderWrapper } from '../styled-components/styled-components';

export const CustomerPointsSummary: React.FC<ICustomerPointsSummaryProps> = ({ customerPointsSummary }: ICustomerPointsSummaryProps) => {
    return (
        <RewardsTableWrapper>
            <table className="table table-hover">
            <tbody>
                <tr>
                <RewardsTableHeaderWrapper>Customer</RewardsTableHeaderWrapper>
                <RewardsTableHeaderWrapper>Rewards</RewardsTableHeaderWrapper>
                </tr>
                {Object.entries(customerPointsSummary).map(([key, value ]) => (
                <tr className="table-row">
                    <td key={`tablevalue-${key}`}>{key}</td>
                    {Object.entries(value['pointsPerMonth']).map(element => <td key={`tablevalue-${element}`}>{element}</td>)}
                </tr>
                ))}
            </tbody>
            </table>
        </RewardsTableWrapper>
    )
}