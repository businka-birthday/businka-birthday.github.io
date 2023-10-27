function checkAnswer() {
    const answer = document.querySelector('input[name="answer"]:checked').value;
    const warning = document.getElementById('warning');
    const correct_button = document.getElementById('correct_button');
    const button = document.getElementById('button');

    if (answer === 'correct') {
        warning.classList.add('hidden');
        // showNextForm();
        button.classList.add('hidden');
        correct_button.classList.remove('hidden')

    } else {
        warning.classList.remove('hidden');
    }
}

function showNextForm() {
    // Показать следующую форму с вопросами
    // Здесь можно добавить код для отображения следующей формы
    // Например:
    // const nextForm = document.getElementById('next-form');
    // nextForm.classList.remove('hidden');
}
