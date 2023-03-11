import throttle from 'lodash.throttle';

const FORM_LOCALSTORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const inputEmailEl = document.querySelector('input[name="email"]');
const inputMessageEl = document.querySelector('textarea[name="message"]');
const feedbackFormData = {
    email: '',
    message: ''
};

updateElementsAndDataFromLocalStorage();

formEl.addEventListener('input', throttle(handlerInput, 500));
formEl.addEventListener('submit', handlerSubmit);


function handlerInput(event) {
    if (event.target.name === 'email') {
        feedbackFormData.email = event.target.value;
    };

    if (event.target.name === 'message') {
        feedbackFormData.message = event.target.value;
    };
    setLocalStorageData(feedbackFormData);
}

function handlerSubmit(event) {
    event.preventDefault();
    console.log(feedbackFormData);
    inputEmailEl.value = '';
    inputMessageEl.value = '';
    localStorage.removeItem(FORM_LOCALSTORAGE_KEY);
}

function setLocalStorageData(data) {
    try {
        localStorage.setItem(FORM_LOCALSTORAGE_KEY, JSON.stringify(data));
    } catch (error) {
        console.log('Помилка запису в локальне сховище:', error.name, error.message);
    }
    
}

function getLocalStorageData() {
    try {
        const savedData = localStorage.getItem(FORM_LOCALSTORAGE_KEY);
        const parsedData = JSON.parse(savedData);
        return parsedData;
    } catch (error) {
        console.log('Помилка читання з локального сховища:', error.name, error.message);
    }
}

function updateElementsAndDataFromLocalStorage() {
    try {
        const savedInputData = getLocalStorageData();

        if (savedInputData.email) {
        feedbackFormData.email = savedInputData.email;
        inputEmailEl.value = savedInputData.email;
        };

        if (savedInputData.message) {
        feedbackFormData.message = savedInputData.message;
        inputMessageEl.value = savedInputData.message;
        }
    } catch (error) {
        console.log('Локальне сховище не містить коректних данних для автозаповнення форми')
    }
}
    