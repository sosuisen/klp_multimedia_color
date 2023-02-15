const redField = document.getElementById('redField');
const greenField = document.getElementById('greenField');
const blueField = document.getElementById('blueField');
redField.value = greenField.value = blueField.value = 0;

const redFieldHex = document.getElementById('redFieldHex');
const greenFieldHex = document.getElementById('greenFieldHex');
const blueFieldHex = document.getElementById('blueFieldHex');

/**
 * 10進数16進数変換
 */
// 基本課題2： 1行に簡略化したアロー関数
const decToHex = dec => parseInt(dec).toString(16).padStart(2, '0');

// 1行に簡略化したアロー関数
const hexToDec = hex => parseInt(hex, 16);

/**
 * 色を反映
 */
const updateColorArea = (red, green, blue) => {
    // 発展課題2a：グレースケール表示
    const avr = (parseInt(red) + parseInt(green) + parseInt(blue))/3;
    document.getElementById('colorArea').style.backgroundColor = `rgb(${avr}, ${avr}, ${avr})`;
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
