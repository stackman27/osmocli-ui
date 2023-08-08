import * as concentratedLiquidity from './cl-interfaces.js'
import * as validatorSetPreferences from './valset-interfaces.js'
import * as tokenfactory from './tokenfactory-interfaces.js'
import * as superfluid from './superfluid-interfaces.js'

interface TxWrapper{
    MsgName: string
    TxCommand: string 
    BaseMsg: any
}

export function CreateBaseMsg(msg: String): TxWrapper {
    switch (msg) {
        case "MsgCreateConcentratedPool":
        return concentratedLiquidity.CreateBaseMsgCreateConcentratedPool()

        case "MsgCreatePosition":
            return concentratedLiquidity.CreateBaseMsgCreatePosition()

        case "MsgAddToPosition":
            return concentratedLiquidity.CreateBaseMsgAddToPosition()

        case "MsgWithdrawPosition":
            return concentratedLiquidity.CreateBaseMsgWithdrawPosition()
    
        case "MsgCollectIncentives":
            return concentratedLiquidity.CreateBaseMsgCollectIncentives()

        case "MsgCollectSpreadRewards":
            return concentratedLiquidity.CreateBaseMsgCollectSpreadRewards()
        
        case "MsgSetValidatorSetPreference":
            return validatorSetPreferences.CreateBaseMsgSetValidatorSetPreference();

        case "MsgDelegateToValidatorSet":
            return validatorSetPreferences.CreateBaseMsgDelegateToValidatorSet();

        case "MsgUndelegateFromValidatorSet":
            return validatorSetPreferences.CreateBaseMsgUndelegateFromValidatorSet();

        case "MsgRedelegateValidatorSet":
            return validatorSetPreferences.CreateBaseMsgRedelegateValidatorSet();

        case "MsgWithdrawDelegationRewards":
            return validatorSetPreferences.CreateBaseMsgWithdrawDelegationRewards();

        case "MsgCreateDenom":
            return tokenfactory.CreateBaseMsgCreateDenom();

        case "MsgMint":
            return tokenfactory.CreateBaseMsgMint();

        case "MsgBurn":
            return tokenfactory.CreateBaseMsgBurn();

        case "MsgChangeAdmin":
            return tokenfactory.CreateBaseMsgChangeAdmin();

        case "MsgSetBeforeSendHook":
            return tokenfactory.CreateBaseMsgSetBeforeSendHook();
            
        case "MsgSuperfluidDelegate":
            return superfluid.CreateBaseMsgSuperfluidDelegate();

        case "MsgSuperfluidUndelegate":
            return superfluid.CreateBaseMsgSuperfluidUndelegate();

        case "MsgSuperfluidUnbondLock":
            return superfluid.CreateBaseMsgSuperfluidUnbondLock();

        case "MsgSuperfluidUndelegateAndUnbondLock":
            return superfluid.CreateBaseMsgSuperfluidUndelegateAndUnbondLock();

        case "MsgLockAndSuperfluidDelegate":
            return superfluid.CreateBaseMsgLockAndSuperfluidDelegate();

        case "MsgCreateFullRangePositionAndSuperfluidDelegate":
            return superfluid.CreateBaseMsgCreateFullRangePositionAndSuperfluidDelegate();

        case "MsgUnPoolWhitelistedPool":
            return superfluid.CreateBaseMsgUnPoolWhitelistedPool();

        case "MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition":
            return superfluid.CreateBaseMsgUnlockAndMigrateSharesToFullRangeConcentratedPosition();

        case "MsgAddToConcentratedLiquiditySuperfluidPosition":
            return superfluid.CreateBaseMsgAddToConcentratedLiquiditySuperfluidPosition();

                
        default:
        return createBaseEmptyMsg()
    }
}

export function createBaseEmptyMsg() {
    return {
        MsgName: "",
        TxCommand: "",
        BaseMsg: {},
    };
}
