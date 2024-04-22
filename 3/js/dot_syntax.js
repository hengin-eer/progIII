let person = {
    name: { first: "太郎", last: "独習" },
    age: 18,
};
console.log(person.age);
console.log(person.name.last);

person.name.last = "二郎";
person.gender = "male"; // オブジェクトの追加も可能
person.family = { wife: "花子", child: "三郎" };

console.log(`dad: ${person.name.last}(${person.gender}), mom: ${person.family.wife}`);
console.log(person); // 最終的な`person`オブジェクトの確認
