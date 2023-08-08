interface TxWrapper{
    MsgName: string
    TxCommand: string 
    BaseMsg: any
}
 
export function CreateBaseMsgSuperfluidDelegate(): TxWrapper {
    return {
    MsgName: "MsgSuperfluidDelegate",
    TxCommand: "delegate",
    BaseMsg: {
        sender: "",
        lockId: 0,
        valAddr: ""
    }
  }
}


export function CreateBaseMsgSuperfluidUndelegate(): TxWrapper {
    return {
    MsgName: "MsgSuperfluidUndelegate",
    TxCommand: "undelegate",
    BaseMsg: {
        sender: "",
        lockId: 0,
    }
  }
}


export function CreateBaseMsgSuperfluidUnbondLock(): TxWrapper {
    return {
    MsgName: "MsgSuperfluidUnbondLock",
    TxCommand: "unbond-lock",
    BaseMsg: {
        sender: "",
        lockId: 0,
    }
  }
}


export function CreateBaseMsgSuperfluidUndelegateAndUnbondLock(): TxWrapper {
    return {
    MsgName: "MsgSuperfluidUndelegateAndUnbondLock",
    TxCommand: "undelegate-and-unbond-lock",
    BaseMsg: {
        sender: "",
        lockId: 0,
        coin: "", 
    }
  }
}


export function CreateBaseMsgLockAndSuperfluidDelegate(): TxWrapper {
    return {
    MsgName: "MsgLockAndSuperfluidDelegate",
    TxCommand: "lock-and-superfluid-delegate",
    BaseMsg: {
        sender: "",
        coins: [],
        valAddr: ""
    }
  }
}


export function CreateBaseMsgCreateFullRangePositionAndSuperfluidDelegate(): TxWrapper {
    return {
    MsgName: "MsgCreateFullRangePositionAndSuperfluidDelegate",
    TxCommand: "create-full-range-position-and-sf-delegate",
    BaseMsg: {
        sender: "",
        coins: [],
        valAddr: "",
        poolId: '',
    }
  }
}


export function CreateBaseMsgUnPoolWhitelistedPool(): TxWrapper {
    return {
    MsgName: "MsgUnPoolWhitelistedPool",
    TxCommand: "unpool-whitelisted-pool",
    BaseMsg: {
        sender: "",
        poolId: "",
    }
  }
}


export function CreateBaseMsgUnlockAndMigrateSharesToFullRangeConcentratedPosition(): TxWrapper {
    return {
    MsgName: "MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition",
    TxCommand: "unlock-and-migrate-to-cl",
    BaseMsg: {
        sender: "",
        lockId: 0,
        sharesToMigrate: "", // repeated coin
        tokenOutMins: "", // repeated coin
    }
  }
}

export function CreateBaseMsgAddToConcentratedLiquiditySuperfluidPosition(): TxWrapper {
    return {
    MsgName: "MsgAddToConcentratedLiquiditySuperfluidPosition",
    TxCommand: "add-to-superfluid-cl-position",
    BaseMsg: {
        positionId: "",
        sender: "",
        tokenDesired0: "", //  coin
        tokenDesired1: "", //  coin
    }
  }
}

