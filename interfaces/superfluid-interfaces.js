export function CreateBaseMsgSuperfluidDelegate() {
    return {
        MsgName: "MsgSuperfluidDelegate",
        TxCommand: "delegate",
        BaseMsg: {
            sender: "",
            lockId: 0,
            valAddr: ""
        }
    };
}
export function CreateBaseMsgSuperfluidUndelegate() {
    return {
        MsgName: "MsgSuperfluidUndelegate",
        TxCommand: "undelegate",
        BaseMsg: {
            sender: "",
            lockId: 0,
        }
    };
}
export function CreateBaseMsgSuperfluidUnbondLock() {
    return {
        MsgName: "MsgSuperfluidUnbondLock",
        TxCommand: "unbond-lock",
        BaseMsg: {
            sender: "",
            lockId: 0,
        }
    };
}
export function CreateBaseMsgSuperfluidUndelegateAndUnbondLock() {
    return {
        MsgName: "MsgSuperfluidUndelegateAndUnbondLock",
        TxCommand: "undelegate-and-unbond-lock",
        BaseMsg: {
            sender: "",
            lockId: 0,
            coin: "",
        }
    };
}
export function CreateBaseMsgLockAndSuperfluidDelegate() {
    return {
        MsgName: "MsgLockAndSuperfluidDelegate",
        TxCommand: "lock-and-superfluid-delegate",
        BaseMsg: {
            sender: "",
            coins: [],
            valAddr: ""
        }
    };
}
export function CreateBaseMsgCreateFullRangePositionAndSuperfluidDelegate() {
    return {
        MsgName: "MsgCreateFullRangePositionAndSuperfluidDelegate",
        TxCommand: "create-full-range-position-and-sf-delegate",
        BaseMsg: {
            sender: "",
            coins: [],
            valAddr: "",
            poolId: '',
        }
    };
}
export function CreateBaseMsgUnPoolWhitelistedPool() {
    return {
        MsgName: "MsgUnPoolWhitelistedPool",
        TxCommand: "unpool-whitelisted-pool",
        BaseMsg: {
            sender: "",
            poolId: "",
        }
    };
}
export function CreateBaseMsgUnlockAndMigrateSharesToFullRangeConcentratedPosition() {
    return {
        MsgName: "MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition",
        TxCommand: "unlock-and-migrate-to-cl",
        BaseMsg: {
            sender: "",
            lockId: 0,
            sharesToMigrate: "",
            tokenOutMins: "", // repeated coin
        }
    };
}
export function CreateBaseMsgAddToConcentratedLiquiditySuperfluidPosition() {
    return {
        MsgName: "MsgAddToConcentratedLiquiditySuperfluidPosition",
        TxCommand: "add-to-superfluid-cl-position",
        BaseMsg: {
            positionId: "",
            sender: "",
            tokenDesired0: "",
            tokenDesired1: "", //  coin
        }
    };
}
