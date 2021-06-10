// const person: {
//     name: string;
//     age: number;
// } = {
var person = {
    name: "Hyacinthia",
    age: 38,
    hobbies: ['fashion', 'code'],
    role: [2, 'author']
};
person.role.push('admin');
var activities;
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
