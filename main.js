let display = document.getElementById('display')

const appendToDisplay = value => {
    display.value += value
};

const clearDisplay = () => {
    display.value = ''
};

const calculateResult = () => {
    display.value = eval(display.value)
};
