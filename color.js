const redField = document.getElementById('redField');
const greenField = document.getElementById('greenField');
const blueField = document.getElementById('blueField');
redField.value = greenField.value = blueField.value = 0;

/**
 * 10進数16進数変換
 */
const decToHex = (dec) => {
    return parseInt(dec).toString(16).padStart(2, '0');
};

const hexToDec = (hex) => {
    return parseInt(hex, 16);
};

/**
 * 色を反映
 */
const updateColorArea = (red, green, blue) => {
    document.getElementById('colorArea').style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    document.getElementById('redArea').style.backgroundColor = `rgb(${red}, 0, 0)`;
    document.getElementById('greenArea').style.backgroundColor = `rgb(0, ${green}, 0)`;
    document.getElementById('blueArea').style.backgroundColor = `rgb(0, 0, ${blue})`;
};

/**
 * 10進数入力時
 */
const updateHexColorField = () => {
    redFieldHex.value = decToHex(redField.value);
    greenFieldHex.value = decToHex(greenField.value);
    blueFieldHex.value = decToHex(blueField.value);
};

const onColorFieldInput = () => {
    updateHexColorField();
    updateColorArea(redField.value, greenField.value, blueField.value);
};

redField.addEventListener('input', onColorFieldInput);
greenField.addEventListener('input', onColorFieldInput);
blueField.addEventListener('input', onColorFieldInput);

/**
 * 16進数入力時
 */ 
const updateColorField = () => {
    redField.value = hexToDec(redFieldHex.value);
    greenField.value = hexToDec(greenFieldHex.value);
    blueField.value = hexToDec(blueFieldHex.value);
};

const onHexColorFieldInput = () => {
    updateColorField();
    updateColorArea(redField.value, greenField.value, blueField.value);
};

redFieldHex.addEventListener('input', onHexColorFieldInput);
greenFieldHex.addEventListener('input', onHexColorFieldInput);
blueFieldHex.addEventListener('input', onHexColorFieldInput);
