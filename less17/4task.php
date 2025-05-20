<?php

function add($x, $y) {
    return $x + $y;
}

function subtract($x, $y) {
    return $x - $y;
}

function multiply($x, $y) {
    return $x * $y;
}

function divide($x, $y) {
    return $y != 0 ? $x / $y : "Деление на ноль невозможно";
}

function mathOperation($arg1, $arg2, $operation) {
    switch ($operation) {
        case "add": return add($arg1, $arg2);
        case "subtract": return subtract($arg1, $arg2);
        case "multiply": return multiply($arg1, $arg2);
        case "divide": return divide($arg1, $arg2);
        default: return "Неизвестная операция";
    }
}

echo "Результат: " . mathOperation(10, 5, "multiply");

?>
