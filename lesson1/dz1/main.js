const Arr = ["Ади", 'Odi', 'Adinai', '10B'];

const input = document.getElementById('input');
const btn = document.getElementById('btn');

btn.addEventListener('click', Search)
function Search (){
    Arr.forEach(element => {
        const regex = new RegExp(`${input.value}`, 'gi');
        const result = regex.test(element)
        if (input.value === ''){
            console.log('Поле пустое')
            return result === false
        }
        else if (result === false){
            console.log('Совпадения не найдены')
        }
        else if (result ===  true){
            alert("Найдены совпадения")
        }
    });
}
