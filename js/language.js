
let language = navigator.language || navigator.browserLanguage;

if (language.indexOf('en') > -1) {
    document.location.href = '/en.html';
} else if (language.indexOf('pl') > -1) {
    document.location.href = 'http://miroslavavavshko/pl.html';
} else if (language.indexOf('ru') > -1) {
    document.location.href = 'http://miroslavavavshko/ru.html';
}
else {
    document.location.href = 'http://miroslavavavshko/en.html';
}
