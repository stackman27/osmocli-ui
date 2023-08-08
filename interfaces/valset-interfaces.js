export function CreateBaseMsgSetValidatorSetPreference() {
    return {
        MsgName: "MsgSetValidatorSetPreference",
        TxCommand: "set-valset",
        BaseMsg: {
            delegator: "",
            preferences: [],
        },
    };
}
export function CreateBaseMsgDelegateToValidatorSet() {
    return {
        MsgName: "MsgDelegateToValidatorSet",
        TxCommand: "delegate-valset",
        BaseMsg: {
            delegator: "",
            coin: "",
        },
    };
}
export function CreateBaseMsgUndelegateFromValidatorSet() {
    return {
        MsgName: "MsgUndelegateFromValidatorSet",
        TxCommand: "undelegate-valset",
        BaseMsg: {
            delegator: "",
            coin: "",
        },
    };
}
export function CreateBaseMsgRedelegateValidatorSet() {
    return {
        MsgName: "MsgRedelegateValidatorSet",
        TxCommand: "redelegate-valset",
        BaseMsg: {
            delegator: "",
            preferences: [],
        },
    };
}
export function CreateBaseMsgWithdrawDelegationRewards() {
    return {
        MsgName: "MsgWithdrawDelegationRewards",
        TxCommand: "withdraw-reward-valset",
        BaseMsg: {
            delegator: ""
        },
    };
}
