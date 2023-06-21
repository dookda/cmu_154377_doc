var name = "John"; // สตริง
var age = 30; // ตัวเลข
var isStudent = true; // บูลีน
var fruits = ["apple", "banana", "orange"]; // อาร์เรย์
var person = { name: "John", age: 30 }; // วัตถุ


var x = 10; // ประกาศตัวแปร x และกำหนดค่าเป็น 10
var y; // ประกาศตัวแปร y โดยไม่กำหนดค่า

console.log(x); // 10
console.log(y); // undefined

{
    var z = 20; // ประกาศตัวแปร z ภายในบล็อก
}
console.log(z); // 20 (สามารถเข้าถึงตัวแปร z จากภายนอกบล็อกได้)


let x = 10; // ประกาศตัวแปร x และกำหนดค่าเป็น 10
let y; // ประกาศตัวแปร y โดยไม่กำหนดค่า

console.log(x); // 10
console.log(y); // undefined

{
    let z = 20; // ประกาศตัวแปร z ภายในบล็อก
}
console.log(z); // ReferenceError: z is not defined (ไม่สามารถเข้าถึงตัวแปร z จากภายนอกบล็อกได้)

const PI = 3.14159; // ประกาศตัวแปร PI และกำหนดค่าเป็น 3.14159
const name = "John"; // ประกาศตัวแปร name และกำหนดค่าเป็น "John"

console.log(PI); // 3.14159
console.log(name); // "John"

PI = 3.14; // TypeError: Assignment to constant variable. (ไม่สามารถเปลี่ยนค่าตัวแปรคงที่ได้)
name = "Jane"; // TypeError: Assignment to constant variable. (ไม่สามารถเปลี่ยนค่าตัวแปรคงที่ได้)



var x = 5;
var y = 3;

var sum = x + y; // 8
var difference = x - y; // 2
var product = x * y; // 15
var quotient = x / y; // 1.6666666666666667
var remainder = x % y; // 2

var isEqual = x == y; // false
var isGreater = x > y; // true
var logicalAnd = (x > 0) && (y > 0); // true
var logicalOr = (x > 0) || (y > 0); // true
var logicalNot = !(x > y); // false


var age = 20;

if (age >= 18) {
    console.log("คุณเป็นผู้ใหญ่");
} else {
    console.log("คุณเป็นเด็ก");
}


var time = 14;

if (time < 12) {
    console.log("สวัสดีตอนเช้า");
} else if (time < 18) {
    console.log("สวัสดีตอนบ่าย");
} else {
    console.log("สวัสดีตอนเย็น");
}


condition ? expression1 : expression2;


var age = 20;
var isAdult = (age >= 18) ? true : false;

console.log(isAdult); // true

var x = 10;
var y = (x > 5) ? "มากกว่า 5" : "น้อยกว่าหรือเท่ากับ 5";

console.log(y); // "มากกว่า 5"


for (เงื่อนไขเริ่มต้น; เงื่อนไขตรวจสอบ; การเปลี่ยนแปลง) {
    // คำสั่งที่ต้องการทำซ้ำ
}

for (var i = 0; i < 5; i++) {
    console.log(i);
}


while (เงื่อนไขตรวจสอบ) {
    // คำสั่งที่ต้องการทำซ้ำ
}

var i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

do {
    // คำสั่งที่ต้องการทำซ้ำ
} while (เงื่อนไขตรวจสอบ);

var i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);



function functionName(parameters) {
    // คำสั่งที่ต้องการทำ
}

function greet(name) {
    console.log("สวัสดี, " + name + "!");
}

greet("John"); // สวัสดี, John!
greet("Jane"); // สวัสดี, Jane!


function addNumbers(a, b) {
    return a + b;
}

var result = addNumbers(5, 3);
console.log(result); // 8


var greeting = function (name) {
    console.log("สวัสดี, " + name + "!");
};

greeting("John"); // สวัสดี, John!

var multiplyNumbers = (a, b) => {
    return a * b;
};

var result = multiplyNumbers(5, 3);
console.log(result); // 15


// นี่คือ Single-line Comment ที่ใช้เพื่ออธิบายโค้ดบรรทัดนี้
var x = 5; // ตัวแปร x ได้รับค่าเท่ากับ 5

/*
นี่คือ Multi-line Comment
ที่ใช้เพื่ออธิบายโค้ดหลายบรรทัด
โค้ดในส่วนนี้ทำอะไรสักอย่าง...
*/
var x = 5; // ตัวแปร x ได้รับค่าเท่ากับ 5

var person = {
    name: "John",
    age: 30,
    city: "New York"
};

var person = new Object();
person.name = "John";
person.age = 30;
person.city = "New York";

var person = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(person.name); // "John"
console.log(person["age"]); // 30

person.city = "San Francisco";
console.log(person.city); // "San Francisco"
person["age"] = 31;
console.log(person["age"]); // 31


var person = {
    name: "John",
    age: 30,
};

person.city = "New York";
console.log(person); // { name: "John", age: 30, city: "New York" }

delete person.age;
console.log(person); // { name: "John", city: "New York" }

var person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (var key in person) {
    console.log(key + ": " + person[key]);
}


{
    "name": "John",
        "age": 30,
            "city": "New York",
                "hobbies": ["reading", "music", "sports"]
}

var jsonStr = '{ "name": "John", "age": 30, "city": "New York" }';
var obj = JSON.parse(jsonStr);
console.log(obj.name); // "John"
console.log(obj.age); // 30
console.log(obj.city); // "New York"



var obj = { name: "John", age: 30, city: "New York" };
var jsonStr = JSON.stringify(obj);
console.log(jsonStr);


{ "name": "John", "age": 30, "city": "New York" }


// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// main.js
import { add, subtract } from './math.js';

console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2

import { functionName } from './module.js';
import { functionName as newName } from './module.js';
import * as moduleName from './module.js';
export { functionName };
export { functionName as newName };
export { functionName1, functionName2 };

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}

// สร้างออบเจ็กต์จากคลาส Person
const person = new Person("John", 30);

// เรียกใช้เมธอด greet()
person.greet(); // Hello, my name is John and I'm 30 years old.


class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog("Buddy");
dog.speak(); // Buddy barks.


class Car {
    constructor() {
        this._speed = 0; // แอตทริบิวต์ที่เข้าถึงได้จากภายนอกแต่ไม่ควรเปลี่ยนแปลง
    }

    accelerate() {
        this._speed += 10;
    }

    get speed() {
        return this._speed;
    }
}

const car = new Car();
car.accelerate();
console.log(car.speed); // 10

{
    "ID": 1,
        "Name": "John",
            "Age": 25,
                "Gender": "Male"
}
