export function CreateBaseMsgCreateDenom() {
    return {
        MsgName: "MsgCreateDenom",
        TxCommand: "create-denom",
        BaseMsg: {
            sender: "",
            subdenom: ""
        }
    };
}
export function CreateBaseMsgMint() {
    return {
        MsgName: "MsgMint",
        TxCommand: "mint",
        BaseMsg: {
            sender: "",
            amount: ""
        }
    };
}
export function CreateBaseMsgBurn() {
    return {
        MsgName: "MsgBurn",
        TxCommand: "burn",
        BaseMsg: {
            sender: "",
            amount: ""
        }
    };
}
export function CreateBaseMsgChangeAdmin() {
    return {
        MsgName: "MsgChangeAdmin",
        TxCommand: "change-admin",
        BaseMsg: {
            sender: "",
            denom: "",
            newAdmin: ""
        }
    };
}
export function CreateBaseMsgSetBeforeSendHook() {
    return {
        MsgName: "MsgSetBeforeSendHook",
        TxCommand: "set-beforesend-hook",
        BaseMsg: {
            sender: "",
            denom: "",
            cosmwasm_address: "",
        }
    };
}
