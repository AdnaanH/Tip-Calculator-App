const bill = document.querySelector('.bill').value;
const numPeople = document.querySelector('.num_people').value;
const custom = document.querySelector('.custom-tip');

const tip = document.querySelector('.tip-amount');
const total = document.querySelector('.total');

const reset = document.querySelector('#reset');

const errorMessage = document.querySelector('error-msg');

const tip_1 = document.querySelector('.tip-1');
const tip_2 = document.querySelector('.tip-2');
const tip_3 = document.querySelector('.tip-3');
const tip_4 = document.querySelector('.tip-4');
const tip_5 = document.querySelector('.tip-5');

const tips = document.querySelectorAll('.tip');
tips.forEach(tipp => {
    tipp.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        tipp.classList.add('active');
    });
});
