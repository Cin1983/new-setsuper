// const person: {
//     name: string;
//     age: number;
// } = {
//     const person ={
//         name: string;
//         age: number;
//         hobbies: string[];
//         role: [number, string];
// }={
//     name: "Hyacinthia",
//     age: 38,
//     hobbies: ['fashion', 'code'],
//     role:[2, 'author']
// };
enum Role{ ADMIN, Read_ONLY, AUTHOR }

const person={
name: "Hyacinthia",
age: 38,
hobbies: ['fashion', 'code'],
role:Role.ADMIN
};
// person.role.push('admin');
// person.role[1] = 10;

let activities: string[];

console.log(person.name);

for (let hobby of person.hobbies) {
    console.log(hobby);
}

