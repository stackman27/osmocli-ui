/* eslint-disable no-restricted-syntax */
import * as txMsgs from "./interfaces/index.js";
var selectedInterface;
const ModulesNames = [
    { value: "concentratedliquidity", label: "Concentratedliquidity" },
    { value: "valsetpref", label: "Valsetpref" },
    { value: "tokenfactory", label: "Tokenfactory" },
    { value: "superfluid", label: "Superfluid" },
];
const ModulesToMessages = {
    concentratedliquidity: [
        "MsgCreateConcentratedPool",
        "MsgCreatePosition",
        "MsgAddToPosition",
        "MsgWithdrawPosition",
        "MsgCollectIncentives",
        "MsgCollectSpreadRewards",
    ],
    valsetpref: [
        "MsgSetValidatorSetPreference",
        "MsgDelegateToValidatorSet",
        "MsgUndelegateFromValidatorSet",
        "MsgRedelegateValidatorSet",
        "MsgWithdrawDelegationRewards",
    ],
    tokenfactory: [
        "MsgCreateDenom",
        "MsgMint",
        "MsgBurn",
        "MsgChangeAdmin",
        "MsgSetBeforeSendHook",
    ],
    superfluid: [
        "MsgSuperfluidDelegate",
        "MsgSuperfluidUndelegate",
        "MsgSuperfluidUnbondLock",
        "MsgSuperfluidUndelegateAndUnbondLock",
        "MsgLockAndSuperfluidDelegate",
        "MsgCreateFullRangePositionAndSuperfluidDelegate",
        "MsgUnPoolWhitelistedPool",
        "MsgUnlockAndMigrateSharesToFullRangeConcentratedPosition",
        "MsgAddToConcentratedLiquiditySuperfluidPosition",
    ]
};
function buildSelect(parentId, selectId, options, onSelectChange, labelText, defaultValue) {
    const parentElement = document.getElementById(parentId);
    if (!parentElement) {
        console.error(`Parent element with ID ${parentId} not found.`);
        return;
    }
    const selectContainer = document.createElement('div');
    // Label creation
    if (labelText) {
        const labelElement = document.createElement('label');
        labelElement.htmlFor = selectId;
        labelElement.textContent = labelText;
        selectContainer.appendChild(labelElement);
    }
    const selectElement = document.createElement('select');
    selectElement.id = selectId;
    // Default option creation
    if (defaultValue) {
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = defaultValue;
        selectElement.appendChild(defaultOption);
    }
    if (onSelectChange) {
        selectElement.addEventListener('change', onSelectChange);
    }
    for (const idx in options) {
        const option = options[idx];
        const optionElement = document.createElement('option');
        optionElement.value = option.value;
        optionElement.textContent = option.label;
        selectElement.appendChild(optionElement);
    }
    selectContainer.appendChild(selectElement);
    parentElement.appendChild(selectContainer);
    // Add event listener for the newly created selectElement here
    selectElement.addEventListener('change', function () {
        var selectedOption = this.options[this.selectedIndex].text;
        console.log("MSG CHANGED", selectedOption);
        generateTextboxesFromInterface('formContainer', selectedOption);
    });
}
function generateTextboxesFromInterface(containerId, msgName) {
    var msg;
    msg = txMsgs.CreateBaseMsg(msgName).BaseMsg;
    console.log(msg);
    selectedInterface = msg;
    const formContainer = document.getElementById(containerId);
    var autoGenCheckbox = document.getElementById('autoGen');
    while (formContainer.firstChild) {
        formContainer.removeChild(formContainer.firstChild);
    }
    for (const prop in msg) {
        if (Object.prototype.hasOwnProperty.call(msg, prop)) {
            if (prop != `sender`) {
                const inputContainer = document.createElement('div');
                inputContainer.style.display = 'inline-block'; // To make containers line up side by side
                inputContainer.style.marginRight = '10px'; // To add a bit of space between containers
                const inputLabel = document.createElement('label');
                inputLabel.textContent = prop;
                inputLabel.htmlFor = prop;
                const input = document.createElement('input');
                input.type = 'text';
                input.placeholder = prop;
                input.id = prop;
                if (autoGenCheckbox.checked == true) {
                    input.value = AutoGenerate(prop);
                }
                inputContainer.appendChild(inputLabel);
                inputContainer.appendChild(document.createElement('br')); // Line break to ensure the input appears under the label
                inputContainer.appendChild(input);
                if (formContainer) {
                    formContainer.appendChild(inputContainer);
                }
            }
        }
    }
}
function generateModulesSelect() {
    buildSelect("selectModuleContainer", "select-module-element", ModulesNames, function (e) {
        const selectedModule = e.target.value;
        const MsgsNames = ModulesToMessages[selectedModule].map(msg => ({
            value: msg,
            label: msg,
        }));
        // Remove any old message select
        const oldMsgSelectElement = document.getElementById('select-msgs');
        if (oldMsgSelectElement) {
            oldMsgSelectElement.remove();
        }
        buildSelect("selectContainer", "select-msgs", MsgsNames, null, 'Message: ', 'Select Msg ...');
    }, "Modules: ", "Select Module ...");
}
function handleGenerateCommand() {
    for (const prop in selectedInterface) {
        if (Object.prototype.hasOwnProperty.call(selectedInterface, prop)) {
            const input = document.getElementById(prop);
            if (input) {
                selectedInterface[prop] = input.value;
            }
        }
    }
    var msgName = document.getElementById('select-msgs');
    var moduleName = document.getElementById('select-module-element');
    selectedInterface['msgName'] = msgName.value;
    console.log("Selected interface: ", selectedInterface);
    var command = GenerateCommand(selectedInterface);
    console.log("finam command to run: ", command);
    let textArea = document.getElementById('cmdToExecute');
    // TODO: Figure out a better way to change this
    textArea.value = `osmosisd tx ${moduleName.value} ${command} --from lo-test1 --chain-id localosmosis -b block --keyring-backend test --fees 1000uosmo -y`;
}
function handleSendRequest() {
    let cmdToExecute = document.getElementById('cmdToExecute');
    let command = cmdToExecute.value;
    const myParagraph = document.getElementById('output');
    if (myParagraph != null) {
        myParagraph.textContent = "SENDING ...";
    }
    fetch('http://localhost:3000/run-command', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ command: command })
    })
        .then((response) => {
        return response.text();
    })
        .then((data) => {
        if (myParagraph && myParagraph.textContent) {
            console.log(typeof (data));
            var dataString = data.toString(); // your original string with '\n' newlines
            dataString = dataString.replace(/\\n/g, '\n'); // Replace "\\n" with "\n"
            myParagraph.innerText = dataString; // Set text with proper newline interpretation
        }
        console.log('CLI command executed:', data);
    })
        .catch((error) => {
        console.error('Error executing CLI command:', error);
    });
}
function GenerateCommand(msgValues) {
    // map msgName with cli name 
    var command = '';
    var txMsg = txMsgs.CreateBaseMsg(msgValues.msgName);
    command = txMsg.TxCommand + ' ';
    var keys = Object.keys(msgValues);
    var lastKey = keys[keys.length - 1];
    for (var key in msgValues) {
        if (key == lastKey) {
            command += '';
            break;
        }
        command += msgValues[key] + ' ';
        console.log("command inside function: ", command);
    }
    return command;
}
// TODO: store these values in database and store any new values that user inputs
// so that we can make more predictive guesses
function AutoGenerate(prop) {
    var validDenoms = ["uosmo", "uatom", "uiom", "uusdc", "eth", "uist", "uakt", "ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F", "ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7", "dai", "grav", "umee"];
    var tickSpacing = [1, 100, 10, 1000];
    var spreadFactor = ["0.0001", "0.0005", "0.001", "0.002", "0.003", "0.005"];
    if (prop == "denom0" || prop == "denom1") {
        const randomIndex = Math.floor(Math.random() * validDenoms.length);
        const randomElement = validDenoms[randomIndex];
        return randomElement.toString();
    }
    else if (prop == "tickSpacing") {
        const randomIndex = Math.floor(Math.random() * tickSpacing.length);
        const randomElement = tickSpacing[randomIndex];
        return randomElement.toString();
    }
    else if (prop == "liquidityAmount" || prop == "amount0" || prop == "amount1") {
        const randomNumber = Math.floor(Math.random() * (10000000 - 1000000 + 1)) + 1000000;
        const randomString = randomNumber.toString();
        return randomString;
    }
    else if (prop == "spreadFactor") {
        const randomIndex = Math.floor(Math.random() * spreadFactor.length);
        const randomElement = spreadFactor[randomIndex];
        return randomElement;
    }
    else if (prop == "positionId" || prop == "poolId") {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        return randomNumber.toString();
    }
    else if (prop == "lowerTick" || prop == "upperTick") {
        const randomNumber = Math.floor(Math.random() * (342000000 - (-108000000) + 1)) + (-108000000);
        return randomNumber.toString();
    }
    return "0";
}
document.addEventListener('DOMContentLoaded', function (event) {
    generateModulesSelect();
    // generateMsgSelect();
});
const handleGenerateComandBtn = document.getElementById('handleGenerateComand');
const handleLocalOsmosisBtn = document.getElementById('handleLocalOsmosis');
handleGenerateComandBtn === null || handleGenerateComandBtn === void 0 ? void 0 : handleGenerateComandBtn.addEventListener('click', function handleClick(e) {
    handleGenerateCommand();
});
handleLocalOsmosisBtn === null || handleLocalOsmosisBtn === void 0 ? void 0 : handleLocalOsmosisBtn.addEventListener('click', function handleClick(e) {
    handleSendRequest();
});
