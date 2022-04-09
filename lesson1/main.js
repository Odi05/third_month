//1 way
// let text = 'Hello, my name is row, but you need to write Row'
// const phoneNumber = document.getElementById('number_phone');
//
// const number = '+996-505-505-505'

// const regex = /\w/gi //без букв и string
// const regex = /\W/gi // Без -+
//2 way
// const regex2 = new RegExp('шаблон', 'gi')

// let result = text.match(regex);
//
// console.log(result);

// const result = text.replace(regex, 'Adinai');
// // const result = text.replace(regex, '$& Adinai');//рядом добавит с row
// console.log(result);

// method test()


// const result = number.replace(regex, '')
//
// console.log(number);
// console.log(result);





// const phoneNumber = document.getElementById('numberPhone');
//
// const regex = /\W/gi
//
// const textPhoneNumber = phoneNumber.textContent;
//
// const resultNumber = textPhoneNumber.replace(regex, '');
//
// phoneNumber.setAttribute('href', `tel:${resultNumber}`)
//
// console.log(resultNumber)


const phoneNumbers = document.querySelectorAll('.numberPhone');

const regex = /\W/gi

phoneNumbers.forEach(phoneNumber =>{
    const textPhoneNumber = phoneNumber.textContent;
    const resultNumbers = textPhoneNumber.replace(regex, '')
    phoneNumber.setAttribute('href', `tel:${resultNumbers}`)
    }
)


const user = {
    name: "Adinai",
    surname: "Madumarova"
}

const regexUser = /[a-z]/g

console.log(`${user.name.replace(regexUser, '*')}${user.surname.replace(regexUser, '*')}`)