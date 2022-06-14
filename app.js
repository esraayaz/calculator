const calculator = document.querySelector(".calculator");
const keys = document.querySelector(".calculator__keys");
const display = document.querySelector(".calculator__display");
const { type } = key.dataset.type;
const { previousKeyType } = calculator.dataset;

keys.addEventListener("click", (event) => {
    if (!event.target.closest("button")) return;

    const key = event.target;
    const keyValue = key.textContent;
    const displayValue = display.textContent;

    if (type === "number") {
        if (displayValue === "0") {
            display.textContent = keyValue;
        } else if (previousKeyType === "operator") {
            display.textContent = keyValue;
        } else {
            display.textContent = displayValue + keyValue;
        }

        calculator.dataset.previousKeyType = "number";
    }

    if (type === "operator") {}

    if (type === "equal") {}

    calculator.dataset.previousKeyType = "operator";
});