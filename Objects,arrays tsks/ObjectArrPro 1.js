/*
Задача:

У вас есть список учеников, которые хотят поиграть в игру:

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.

Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.
*/

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    let a = [];
    let b = [];
    let c = [];
    let svinoeBruho = [];

    for(let i = 0;i < arr.length; i++){
        if(i < 3){
            a.push(arr[i]);
        }else if(i < 6) {
            b.push(arr[i]);
        }else if (i < 9) {
            c.push(arr[i]);
        }else svinoeBruho.push(arr[i]);
    }

    return [a,b,c, `Оставшиеся свиные брюшковичи: ${svinoeBruho.length === 0 ? '-' : svinoeBruho.join(',')}`]
}

console.log(sortStudentsByGroups(students));