import { ICustomerPointsSummaryProps } from "../models/rewards-models";
import { RewardsTableWrapper, RewardsTableHeaderWrapper, RewardsTableColumnWrapper } from '../styled-components/styled-components';
import '../components/Rewards.css'

export const CustomerPointsSummary: React.FC<ICustomerPointsSummaryProps> = ({ customerPointsSummary }: ICustomerPointsSummaryProps) => {
    return (
            <RewardsTableWrapper>
            <tbody>
                <tr>
                <th colSpan={2} className='rewards-table-header'>Customer</th>
                <th colSpan={2} className='rewards-table-header'>Rewards Points</th>
                </tr>
                {Object.entries(customerPointsSummary).map(([ key, value ]) => (
                <tr className="table-row">
                    <RewardsTableColumnWrapper key={`tablevalue-${key}`}>{key}</RewardsTableColumnWrapper>
                    {Object.entries(value['pointsPerMonth']).map(([ key, value ]) => <RewardsTableColumnWrapper key={`tablevalue-${key}`}>{key} ({value})</RewardsTableColumnWrapper>)}
                </tr>
                ))}
            </tbody>
            </RewardsTableWrapper>
    )
}