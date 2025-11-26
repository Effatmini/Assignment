//1
let x = Number("123") + 7;
console.log(x);

//2

function checkValue(value) {
    if (!value) {
        return "Invalid";
    }
    return "Valid";
}

    
console.log(checkValue(0)); // "Invalid"

//3

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // لو العدد زوجي، سيبه وروّح للّي بعده
    }
    console.log(i);
}

//4
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);
//5
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const Arrayx = [...array1, ...array2];

console.log(Arrayx);

//6
function day(dayNumber) {
    let dayName;
    
    switch(dayNumber) {
        case 1:
            dayName = "Sunday";
            break;
        case 2:
            dayName = "Monday";
            break;
        case 3:
            dayName = "Tuesday";
            break;
        case 4:
            dayName = "Wednesday";
            break;
        case 5:
            dayName = "Thursday";
            break;
        case 6:
            dayName = "Friday";
            break;
        case 7:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid day";
    }
    
    return dayName;
}


console.log(day(2));


//7
const strings = ["a", "ab", "abc"];


const lengths = strings.map(str => str.length);

console.log(lengths);


//8
function check(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "Divisible by both";
    } else {
        return "Not divisible by both";
    }
}


console.log(check(15)); 



//9
const z = num => num * num;


console.log(z(5)); 


//10
const person = { name: 'John', age: 25 };

function formatPerson({ name, age }) {
    return `${name} is ${age} years old`;
}

console.log(formatPerson(person)); 

//11
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAll(1, 2, 3, 4, 5)); 


//12
function delayedSuccess() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Success");
        }, 3000);
    });
}

delayedSuccess().then(message => console.log(message));


//13
function findLargestNumber(arr) {
    return Math.max(...arr);
}

console.log(findLargestNumber([1, 3, 7, 2, 4])); 



//14
function getObjectKeys(obj) {
    return Object.keys(obj);
}

// مثال للتشغيل
const personx = { name: "John", age: 30 };
console.log(getObjectKeys(personx)); 


//15
function splitIntoWords(str) {
    return str.split(" ");
}

const sentence = "The quick brown fox";
console.log(splitIntoWords(sentence)); 

//part 2 

//1 //diffrence for each and for of 

// For each : لما تحب تنفذ فعل على كل عنصر من المصفوفة فقط (Array only )

// for of : يمكن استخدام break و continue    

//Arrays strings maps sets//


//2 what is hoisting :  

 //يعني أن إعلانات المتغيرات والدوال يتم رفعها إلى أعلى النطاق (scope) قبل تنفيذ الكود//

// TDZ : 

//  هي الفترة بين بداية نطاق المتغير حتى تصريحه باستخدام let أو const، حيث لا يمكن الوصول إلى المتغير وإلا سيحدث خطأ//


//3diffrence == and === 

// == : 
//  بيقارن القيم فقط  // 

// === : 

// بيقارن القيم والداتا تايب 

// 4 try catch : 

// try: تحط جوه الكود اللي ممكن يسبب خطأ 

// catch: يتحكم في الخطأ لو حصل اثناء تنفيذ الـ try

// 5  Type Conversion : 

// الهدف: تغيير نوع البيانات بشكل واضح قبل استخدامها  

// Type Coercion : 

// جعل العمليات تعمل حتى لو الانواع مختلفة
