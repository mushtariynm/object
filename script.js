let cars = [
    {
      name: 'BMW',
      color: 'white',
      model: 'M4',
      price: 80000,
      year: 2020
    },
    {
      name: 'Gentra',
      color: 'black',
      model: '2',
      price: 15000,
      year: 2022
    },
    {
      name: 'Kia',
      color: 'white',
      model: 'K5',
      price: 42000,
      year: 2023
    },
    {
      name: 'Matiz',
      color: 'red',
      model: 'best',
      price: 6000,
      year: 2011
    },
    {
      name: 'Malibu',
      color: 'gray',
      model: "2",
      price: 37000
    },
    {
      name: 'Nexia',
      color: 'blue',
      model: "3",
      price: 12000
    }
  ]

  let cheap = cars.filter(item => item.price < 35000)
  console.log(cheap);
//   // 1. Отфильтровать массив машин закинуть в переменную heap
// только те машины у которых цена меньше 35 тысяч

let arr = ['Aleksey', 'Kartoshka', 'Margarita', 'Morgenshtern', 'Monica']
let index = prompt('индекс'); 
    if (index < arr.length) {
        let elem = arr[index];
        if (arr.includes(elem)) {
            arr = arr.filter(item => item == elem);
            console.log(elem + ' delete');
        } else {
            console.log(elem + ' Несуществующий элемент');
        }
    } else {
        console.log('error');
    }
console.log(arr); 
// В переменной индекс я пишу любое число
// / функция должна сравнить это число с индексом элементов из агг,
// / Если какой нибудь из них совпадает то удалить этот элемент из массива
// // Если нет то сообщить что такого элемента у нас нет*