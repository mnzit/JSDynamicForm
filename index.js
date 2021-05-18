let root = $('#root');
let form = cElement('form');
let input = cInputField("Enter Form Title: ", "text");
let select = cSelect("control-drop-down", "Select Control", ['Input', 'Date']);
let button = cButton("generate-btn", "Generate Controls", null, (button) => {
    button.addEventListener('click', () => {
        let type = $("#control-drop-down").value;
        console.log(type);
        let formControl = controlFactory(type);
        console.log(formControl);
        form.appendChild(formControl);
    });
});
form.appendChild(input);
root.appendChild(form);

let controlWrapper = cElement('div');
controlWrapper.appendChild(select);
controlWrapper.appendChild(button);

root.appendChild(controlWrapper);


function cButton(id, buttonName, clazz, callback) {
    let button = cElement('button');

    if (id) button.id = id;
    if (clazz) button.class = clazz;
    button.innerText = buttonName;
    callback(button);
    return button;
}

function cInputField(labelName, inputType) {

    let formGroup = cElement('div');

    let label = cElement('label');
    label.innerText = labelName;

    let input = cElement('input');
    input.type = inputType;

    formGroup.appendChild(label);
    formGroup.appendChild(input);

    return formGroup;
}

function controlFactory(type) {
    let fieldset = cElement('fieldset');
    let legend = cElement('legend');
    let control = null;

    if (type === "Input") {
        control = inputFieldBuilder();
        legend.innerText = "Input Form Control"
    }

    let removeControlBtn = cButton(null, "Remove", null, (button) => {
        button.addEventListener('click', () => { fieldset.remove() });
    })

    control.appendChild(removeControlBtn);

    fieldset.appendChild(legend);
    fieldset.appendChild(control);

    return fieldset;
}

function inputFieldBuilder() {
    let inputFieldFormControl = cElement('div');
    let inputField = cInputField("Enter your label name: ", 'text');
    let inputFieldPlaceHolder = cInputField("Enter your placeholder value: ", 'text');

    inputFieldFormControl.appendChild(inputField)
    inputFieldFormControl.appendChild(inputFieldPlaceHolder)
    return inputFieldFormControl;
}


function cSelect(id, labelName, selections, callback) {

    let formGroup = cElement('div');
    let label = cElement('label');
    label.innerText = labelName;

    let select = cElement("select");
    if (id) select.id = id;

    for (let i = 0; i < selections.length; i++) {
        let option = new Option();
        option.value = selections[i];
        option.text = selections[i];
        select.options.add(option);
    }

    formGroup.appendChild(label);
    formGroup.appendChild(select);

    if (callback) {
        callback(select);
    }

    return formGroup;
}

function cElement(element) {
    return document.createElement(element);
}

function $(selector) {
    return document.querySelector(selector)
}






