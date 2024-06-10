function hello() {
    return "Hello, World!";
}

console.log(hello()); // 引数の記入忘れない

// ---

function hello2(personName) {
    console.log(`こんにちは、${personName}.`);
}

hello2("ひらの");

// ---

function fn1() {
    const val = 1 + 1;
    console.log(val);
}

function fn2() {
    console.log(7 % 3);
    return;
}

fn1();
fn2();
