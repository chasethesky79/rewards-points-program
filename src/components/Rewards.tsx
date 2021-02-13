import React from "react";
import { ICustomerPointsSummary as IRewardsPointsSummary, IRewardsPointsProps } from "../models/rewards-models";
import { buildRewardsProgramResult } from "../util/rewards-calculator";
import { withDataFetching } from "./withDataFetching";
import { Alert } from '../styled-components/styled-components';

const Rewards: React.FC<IRewardsPointsProps> = ({ data, loading, error }: IRewardsPointsProps) => {
    const customerPointsSummary: IRewardsPointsSummary = buildRewardsProgramResult(data);
    return (
      <div>
           {( loading || error ) && <Alert>{loading ? 'Loading...' : error}</Alert>}
          { customerPointsSummary && Object.entries(customerPointsSummary).map(([key, value]) => {
              return <span>{key}, </span>
          })}
      </div>
    )
}

export default withDataFetching(Rewards);
