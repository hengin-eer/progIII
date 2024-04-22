let person = {
    hello: function () { console.log("Hello, world."); },
};

person.hello();
// > Hello, world.
person.bye = () => console.log("Bye.");
person.bye();
// > Bye.
person.hello = (message) => console.log(message);
person.hello("こんにちは、世界。");
// > こんにちは、世界。
