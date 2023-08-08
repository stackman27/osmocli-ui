interface TxWrapper{
    MsgName: string
    TxCommand: string 
    BaseMsg: any
}


export function CreateBaseMsgSetValidatorSetPreference(): TxWrapper {
    return {
        MsgName: "MsgSetValidatorSetPreference",
        TxCommand: "set-valset",
        BaseMsg: {
            delegator: "",
            preferences: [],
        },
    };
}


export function CreateBaseMsgDelegateToValidatorSet(): TxWrapper {
    return {
        MsgName: "MsgDelegateToValidatorSet",
        TxCommand: "delegate-valset",
        BaseMsg: {
            delegator: "",
            coin: "",
        },
    };
}

export function CreateBaseMsgUndelegateFromValidatorSet(): TxWrapper {
    return {
        MsgName: "MsgUndelegateFromValidatorSet",
        TxCommand: "undelegate-valset",
        BaseMsg: {
            delegator: "",
            coin: "",
        },
    };
}

export function CreateBaseMsgRedelegateValidatorSet(): TxWrapper {
    return {
        MsgName: "MsgRedelegateValidatorSet",
        TxCommand: "redelegate-valset",
        BaseMsg: {
            delegator: "",
            preferences: [],
        },
    };
}

export function CreateBaseMsgWithdrawDelegationRewards(): TxWrapper {
    return {
        MsgName: "MsgWithdrawDelegationRewards",
        TxCommand: "withdraw-reward-valset",
        BaseMsg: {
            delegator: ""
        },
    };
}

 
