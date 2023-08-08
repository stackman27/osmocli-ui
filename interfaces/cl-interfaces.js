export function CreateBaseMsgCreateConcentratedPool() {
    return {
        MsgName: "MsgCreateConcentratedPool",
        TxCommand: "create-pool",
        BaseMsg: {
            sender: "",
            denom0: "",
            denom1: "",
            tickSpacing: 0,
            spreadFactor: ""
        },
    };
}
export function CreateBaseMsgCreatePosition() {
    return {
        MsgName: "MsgCreatePosition",
        TxCommand: "create-position",
        BaseMsg: {
            poolId: 0,
            sender: "",
            lowerTick: 0,
            upperTick: 0,
            tokensProvided: [],
            tokenMinAmount0: "",
            tokenMinAmount1: ""
        }
    };
}
export function CreateBaseMsgAddToPosition() {
    return {
        MsgName: "MsgAddToPosition",
        TxCommand: "add-to-position",
        BaseMsg: {
            positionId: 0,
            sender: "",
            amount0: "",
            amount1: "",
            tokenMinAmount0: "",
            tokenMinAmount1: ""
        },
    };
}
export function CreateBaseMsgWithdrawPosition() {
    return {
        MsgName: "MsgWithdrawPosition",
        TxCommand: "withdraw-position",
        BaseMsg: {
            positionId: 0,
            sender: "",
            liquidityAmount: ""
        }
    };
}
export function CreateBaseMsgCollectIncentives() {
    return {
        MsgName: "MsgMsgCollectIncentives",
        TxCommand: "collect-incentives",
        BaseMsg: {
            positionIds: 0,
            sender: "",
        },
    };
}
export function CreateBaseMsgCollectSpreadRewards() {
    return {
        MsgName: "MsgCollectSpreadRewards",
        TxCommand: "collect-spread-rewards",
        BaseMsg: {
            positionIds: 0,
            sender: "",
        },
    };
}
