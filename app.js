const inputCourse = document.querySelector('#input-name');
const inputRating = document.querySelector('#input-rating');

const listResult = document.querySelector('#result-list');

const btnAdd = document.querySelector('#btn-add');
const alertCtrl = document.querySelector('ion-alert-controller');


const clear = () => {
    inputCourse.value = '';
    inputRating.value = '';
}

btnAdd.addEventListener('click', () => {

    const enterCourse = inputCourse.value;
    const enterRating = inputRating.value;

    if (enterCourse.trim().length <= 0 || enterRating <= 0 || enterRating.trim().length <= 0 || enterRating > 5) {
        alertCtrl.create({
            message: 'Please enter a valid name and rating',
            header: 'Invalid Inputs',
            buttons: ['okay']
        }).then(alertElement => {
            alertElement.present();
        });
        return;
    }

    const newItem = document.createElement('ion-item');
    // newItem.textContent = enterCourse + ' - ' + enterRating + '/5';
    // Add strong
    newItem.innerHTML = `<strong>${enterCourse}</strong> - ${enterRating}/5`;
    listResult.appendChild(newItem);
    clear();
});