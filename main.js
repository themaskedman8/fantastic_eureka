var input_1 = document.getElementById("input_1");
var input_2 = document.getElementById("input_2");
var input_3 = document.getElementById("input_3");
var answer = document.getElementById("answer");
var customi = document.getElementById("custom");
var sound = document.getElementById('noise');

function f(number){
    if (
        input_1.value.trim() !== ''
    ) {
        console.log("going to third, " + number);
        input_3.value = number;
    }
    else {
        input_1.value = number;
        console.log("going to first, " + number);
    }
    sound.play()
    console.log(number);
}

function submit() {
    if (input_2.value == "+") {
        var ans_add = Number(input_1.value) + Number(input_3.value);
        document.getElementById("answer").value = Number(ans_add);
        console.log("answer = " + ans_add);
    }
    if (input_2.value == "-") {
        var ans_sub = Number(input_1.value) - Number(input_3.value);
        document.getElementById("answer").value = Number(ans_sub);
        console.log("answer = " + ans_sub);
    }
    if (input_2.value == "x") {
        var ans_mul = Number(input_1.value) * Number(input_3.value);
        document.getElementById("answer").value = Number(ans_mul);
        console.log("answer = " + ans_mul);
    }
    if (input_2.value == "÷") {
        var ans_div = Number(input_1.value) / Number(input_3.value);
        document.getElementById("answer").value = Number(ans_div);
        console.log("answer = " + ans_div);
    }
    if (input_2.value == "") {
        document.getElementById('error').innerHTML = "Please Add An Operator";
        console.log("No Operator Added");
    }
    sound.play()
}

function o(oper){
    input_2.value = oper;
    document.getElementById('error').innerHTML = "";
    console.log("added " + oper);
    sound.play()
}

function custom(){
    if (
        input_1.value.trim() !== ''
    ) {
        console.log("going to third, " + customi.value);
        input_3.value = customi.value;
    }
    else {
        input_1.value = customi.value;
        console.log("going to first, " + customi.value);
    }
    sound.play()
    console.log(customi.value);
}