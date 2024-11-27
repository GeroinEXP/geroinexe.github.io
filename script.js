const maleNames = ['Александр', 'Дмитрий', 'Максим', 'Сергей', 'Андрей', 'Алексей', 'Артём', 'Илья', 'Кирилл', 'Михаил'];
const femaleNames = ['Анна', 'Мария', 'Елена', 'Дарья', 'Алина', 'Ирина', 'Екатерина', 'Арина', 'Полина', 'Ольга'];
const surnames = ['Иванов', 'Смирнов', 'Кузнецов', 'Попов', 'Васильев', 'Петров', 'Соколов', 'Михайлов', 'Новиков', 'Фёдоров'];
const cities = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань', 'Нижний Новгород', 'Челябинск', 'Самара', 'Омск', 'Ростов-на-Дону'];

function generateRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function generatePhoneNumber() {
    return `+7${Math.floor(Math.random() * 1000000000).toString().padStart(9, '0')}`;
}

function generatePassportNumber() {
    return `${Math.floor(Math.random() * 10000).toString().padStart(4, '0')} ${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
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
        passportNumber: generatePassportNumber()
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
    `;
});

