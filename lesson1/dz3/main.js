const obj = {
    name: 'Adinai',
    surname: 'Madumarova',
    age: 16
}

const names = JSON.stringify(obj)
localStorage.setItem('product', names)
const product = localStorage.getItem('product')
const result = JSON.parse(product)
console.log(result)

function deleteAll () {
    localStorage.clear()
}

function del() {
    localStorage.removeItem(`${document.getElementById('del_input').value}`, names)
}

function add (){
    localStorage.setItem(`${document.getElementById('add_input').value}`, names)
}

document.getElementById('deleteAll').addEventListener('click', deleteAll)
document.getElementById('add').addEventListener('click', add)
document.getElementById('del').addEventListener('click', del)