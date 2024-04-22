const members = {
    member1: "太郎",
    member2: "二郎",
};

const keyBase = "member";
console.log(members[keyBase + "1"]); // ブラケット記法の例。文字列の結合により`member1`を参照
console.log(members[keyBase + "2"]);
