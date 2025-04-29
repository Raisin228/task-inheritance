export interface IPersonData {
    name: string;
    secondName: string;
    age: number;
}

export interface IStudentData extends IPersonData {
    phone?: string;
}

/*
1. Напишите конструкторы для классов Person и Student, которые принимают в качестве параметра объекты с интерфейсами IPersonData и IStudentData соответственно.
*/

export class Person {
    readonly _name: string;
    readonly _secondName: string;
    readonly _age: number;

    // Конструктор класса Person, принимает объект с типом IPersonData
    constructor(personData: IPersonData) {
        this._name = personData.name;
        this._secondName = personData.secondName;
        this._age = personData.age;
    }

    // Метод для получения данных о человеке
    getData(): IPersonData {
        return {
            name: this._name,
            secondName: this._secondName,
            age: this._age,
        };
    }
}

export class Student extends Person {
    readonly _phone: string;

    // Конструктор класса Student, принимает объект с типом IStudentData
    constructor(studentData: IStudentData) {
        super(studentData);  // Вызываем конструктор родительского класса Person
        this._phone = studentData.phone || ''; // phone может быть необязательным
    }

    // Метод для получения данных о студенте
    getData(): IStudentData {
        return {
            ...super.getData(), // Получаем данные из родительского класса
            phone: this._phone,  // Добавляем поле phone, которое есть только у студентов
        };
    }
}
