// const person: {
//     name: string;
//     age: number;
// } = {
    const person: ={
    name: "Hyacinthia",
    age: 38,
    hobbies: ['fashion', 'code'],
    role:[2, 'author']
};

let activities: string[];

for (let hobby of person.hobbies) {
    console.log(hobby);
}

console.log(person.name);