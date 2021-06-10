// const person: {
//     name: string;
//     age: number;
// } = {
var person = {
    name: "Hyacinthia",
    age: 38,
    hobbies: ['fashion', 'code']
};
var activities;
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
console.log(person.name);
