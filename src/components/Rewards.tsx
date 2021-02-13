import { ICustomerPointsSummary, IRewardsPointsProps } from "../models/rewards-models";
import { buildRewardsProgramResult } from "../util/rewards-calculator";
import { withDataFetching } from "./withDataFetching";

const Rewards: React.FC<IRewardsPointsProps> = ({ data, loading, error }: IRewardsPointsProps) => {
    const customerPointsSummary: ICustomerPointsSummary = buildRewardsProgramResult(data);
    console.log(`REWARDS INPUT FETCHED FROM FILE ${JSON.stringify(customerPointsSummary)}`);
    return (
      <div></div>
    )
}

export default withDataFetching(Rewards);
