function getRandomNumber(min, max) {
    return Math.floor((Math.random() * (max - min)) + min)
    }
    let names = ['Саша', 'Коля', 'Илья', 'Олег', 'Алена', 'Гриша', 'Варя','Аня','Савелий','Саня','Миша','Леша']
    let todos = ['гулять', 'учить уроки', 'есть тортик', 'идти на улицу', 'смотреть фильм', 'стоять на одной ноге', 'играть в бравл старс', 'пинать мяч']

    function generate() {
    console.log(`${names[getRandomNumber(0, names.length)]} будет ${todos[getRandomNumber(0, todos.length)]}`)
    }
    