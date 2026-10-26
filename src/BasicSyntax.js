function romanToInteger(s) {
    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const currentVal = romanMap[s[i]];
        const nextVal = romanMap[s[i + 1]];

        // Если текущее значение меньше следующего, вычитаем его
        if (nextVal && currentVal < nextVal) {
            result -= currentVal;
        } else {
            result += currentVal;
        }
    }

    return result;
}

// ВАЖНО: Добавьте эту строку, чтобы тест смог импортировать функцию
export { romanToInteger };
