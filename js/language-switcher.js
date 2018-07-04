let language = navigator.language;

if (language.indexOf('en') > -1) {
    document.location.href = 'en.html';
} else if (language.indexOf('pl') > -1) {
    document.location.href = 'pl.html';
} else if (language.indexOf('ru') > -1) {
    document.location.href = 'ru.html';
} else if (language.indexOf('by') > -1) {
    document.location.href = 'by.html';
} else if (language.indexOf('ua') > -1) {
    document.location.href = 'ua.html';
} else {
    document.location.href = 'ru.html'; }