interface TxWrapper{ 
    MsgName: string
    TxCommand: string 
    BaseMsg: any
}
 
export function CreateBaseMsgCreateConcentratedPool(): TxWrapper {
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

export function CreateBaseMsgCreatePosition(): TxWrapper {
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

export function CreateBaseMsgAddToPosition(): TxWrapper {
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

export function CreateBaseMsgWithdrawPosition(): TxWrapper {
return {
    MsgName: "MsgWithdrawPosition",
    TxCommand: "withdraw-position", 
    BaseMsg: {
    positionId: 0,
    sender: "",
    liquidityAmount: ""
    }
}
}

export function CreateBaseMsgCollectIncentives(): TxWrapper {
return {
    MsgName: "MsgMsgCollectIncentives",
    TxCommand: "collect-incentives",
    BaseMsg: {
        positionIds: 0,
        sender: "",
    },
};
}

export function CreateBaseMsgCollectSpreadRewards(): TxWrapper {
    return {
        MsgName: "MsgCollectSpreadRewards",
        TxCommand: "collect-spread-rewards",
        BaseMsg: {
            positionIds: 0,
            sender: "",
        },
    };
  }

