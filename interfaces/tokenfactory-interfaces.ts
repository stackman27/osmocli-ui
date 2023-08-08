interface TxWrapper{
    MsgName: string
    TxCommand: string 
    BaseMsg: any
}
 
export function CreateBaseMsgCreateDenom(): TxWrapper {
    return {
    MsgName: "MsgCreateDenom",
    TxCommand: "create-denom",
    BaseMsg: {
        sender: "",
        subdenom: ""
    }
  }
}

export function CreateBaseMsgMint(): TxWrapper {
    return {
        MsgName: "MsgMint",
        TxCommand: "mint",
        BaseMsg: {
            sender: "",
            amount: ""
    }
  }
}

export function CreateBaseMsgBurn(): TxWrapper {
    return {
        MsgName: "MsgBurn",
        TxCommand: "burn",
        BaseMsg: {
            sender: "",
            amount: ""
    }
  }
}

export function CreateBaseMsgChangeAdmin(): TxWrapper {
    return {
        MsgName: "MsgChangeAdmin",
        TxCommand: "change-admin",
        BaseMsg: {
            sender: "",
            denom: "",
            newAdmin: ""
    }
  }
}
 
export function CreateBaseMsgSetBeforeSendHook(): TxWrapper {
    return {
        MsgName: "MsgSetBeforeSendHook",
        TxCommand: "set-beforesend-hook",
        BaseMsg: { 
            sender: "",
            denom : "",
            cosmwasm_address: "",
    }
  }
}