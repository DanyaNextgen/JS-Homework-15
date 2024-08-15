let age = prompt('Введите ваш возраст:');
let userAge = +age;

function checkAge(age) {
    if (typeof age !== 'number' || age < 0 || Math.floor(age) !== age) {
        return 'Дебил';
    } 
    else if (age >= 18) {
        return 'Впускаем';
    } 
    else {
        return 'Выгоняем';
    }
}

alert(checkAge(userAge));

function max_name(nameOne, nameTwo, nameThree) {
    let longest = nameOne;

    if (nameTwo.length > longest.length) {
        longest = nameTwo;
    }
    if (nameThree.length > longest.length) {
        longest = nameThree;
    }
    return longest;
}

console.log(max_name('Alex', 'George', 'Michael'));