const maleNames = ['Александр', 'Дмитрий', 'Максим', 'Сергей', 'Андрей', 'Алексей', 'Артём', 'Илья', 'Кирилл', 'Михаил'];
const femaleNames = ['Анна', 'Мария', 'Елена', 'Дарья', 'Алина', 'Ирина', 'Екатерина', 'Арина', 'Полина', 'Ольга'];
const surnames = ['Иванов', 'Смирнов', 'Кузнецов', 'Попов', 'Васильев', 'Петров', 'Соколов', 'Михайлов', 'Новиков', 'Фёдоров'];
const cities = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань', 'Нижний Новгород', 'Челябинск', 'Самара', 'Омск', 'Ростов-на-Дону'];

function generateRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function generatePhoneNumber() {
    const codes = ['900', '901', '902', '903', '904', '905', '906', '908', '909', '910', '911', '912', '913', '914', '915', '916', '917', '918', '919', '920', '921', '922', '923', '924', '925', '926', '927', '928', '929', '930', '931', '932', '933', '934', '936', '937', '938', '939', '950', '951', '952', '953', '954', '955', '956', '958', '960', '961', '962', '963', '964', '965', '966', '967', '968', '969', '980', '981', '982', '983', '984', '985', '986', '987', '988', '989', '991', '992', '993', '994', '995', '996', '997', '999'];
    const code = codes[Math.floor(Math.random() * codes.length)];
    const number = Math.floor(Math.random() * 10000000).toString().padStart(7, '0');
    return `+7 (${code}) ${number.slice(0, 3)}-${number.slice(3, 5)}-${number.slice(5)}`;
}

function generatePassportNumber() {
    return `${Math.floor(Math.random() * 10000).toString().padStart(4, '0')} ${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
}

function generateSNILS() {
    const num = Math.floor(Math.random() * 1000000000).toString().padStart(9, '0');
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(num[i]) * (9 - i);
    }
    let checkSum = sum % 101;
    if (checkSum === 100) {
        checkSum = 0;
    }
    checkSum = checkSum.toString().padStart(2, '0');
    return `${num.slice(0, 3)}-${num.slice(3, 6)}-${num.slice(6, 9)} ${checkSum}`;
}

function generatePerson() {
    const isMale = Math.random() < 0.5;
    const name = isMale ? maleNames[Math.floor(Math.random() * maleNames.length)] : femaleNames[Math.floor(Math.random() * femaleNames.length)];
    const surname = surnames[Math.floor(Math.random() * surnames.length)] + (isMale ? '' : 'а');
    const birthDate = generateRandomDate(new Date(1970, 0, 1), new Date(2000, 0, 1));
    const city = cities[Math.floor(Math.random() * cities.length)];

    return {
        name: name,
        surname: surname,
        gender: isMale ? 'Мужской' : 'Женский',
        birthDate: birthDate.toLocaleDateString('ru-RU'),
        city: city,
        phoneNumber: generatePhoneNumber(),
        passportNumber: generatePassportNumber(),
        snils: generateSNILS()
    };
}

document.getElementById('generateBtn').addEventListener('click', function() {
    const person = generatePerson();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Сгенерированные данные:</h2>
        <p><strong>ФИО:</strong> ${person.surname} ${person.name}</p>
        <p><strong>Пол:</strong> ${person.gender}</p>
        <p><strong>Дата рождения:</strong> ${person.birthDate}</p>
        <p><strong>Город:</strong> ${person.city}</p>
        <p><strong>Номер телефона:</strong> ${person.phoneNumber}</p>
        <p><strong>Номер паспорта:</strong> ${person.passportNumber}</p>
        <p><strong>СНИЛС:</strong> ${person.snils}</p>
    `;
});

