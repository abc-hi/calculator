//calculator

let display = document.getElementById('result');
const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '=', '+', '-', '*', '/', '.', '%', 'Backspace'];

function isAllowedKey(key) {
    
    return allowedKeys.includes(key)
}

function appendValue(value) {
    if (isAllowedKey(value)) {
        if (value === 'Backspace') {
            backspace();
        } else {
            display.value += value;
        }
    } else {
        alert('Only numeric keys and specific symbols are allowed.');
    }
}

function clearDisplay() {
    result.value = '';
}

function backspace() {
    result.value = display.value.slice(0, -1); //-1backward count i.e last cahr
}

function calculate() {
    try {
        result.value = eval(result.value);                      /*  console.log(eval('2 + 2'));
                                                              Expected output: 4
 
                                                              //console.log(eval(new String('2 + 2')));
                                                            Expected output: 2 + 2
        
                                                           console.log(eval('2 + 2') === eval('4'));
                                                          Expected output: true
        
                                                        console.log(eval('2 + 2') === eval(new String('2 + 2')));
                                                         Expected output: false  */
    } catch (error) {
        alert('Invalid expression');
        clearDisplay();
    }
}

document.addEventListener('keydown', function (event) {
    const key = event.key;

    if (!isAllowedKey(key)) {
        event.preventDefault();
        alert('Only numeric keys and specific symbols are allowed.');
    }
});

// Prevent right-click context menu on the display
result.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});
