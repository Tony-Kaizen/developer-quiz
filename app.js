const frontEndAnswers = ['B', 'C', 'C', 'D'];
const backEndAnswers = ['A', 'B', 'A', 'B'];
const fullStackAnswers = ['C', 'A', 'B', 'C'];
const noDevAnswers = ['D', 'D', 'D', 'A',];
const form = document.querySelector('form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
  //prevent page from reloading
  e.preventDefault();

  //final scores
  let frontEndScore = 0;
  let backEndScore = 0;
  let fullStackScore = 0;
  let noDevScore = 0;

  //user quiz answers
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  userAnswers.forEach((answer, index) => {

    /*
    if (answer === frontEndAnswers[index]) {
      frontEndScore++;
    } else if (answer === backEndAnswers[index]) {
      backEndScore++;
    } else if (answer === fullStackAnswers[index]) {
      fullStackScore++;
    } else if (answer === noDevAnswers[index]) {
      noDevScore++;
    } 
    */

    //switch statement
    switch (answer === userAnswers[index]) {
      case answer === frontEndAnswers[index]:
        frontEndScore++;
        break;
      case answer === backEndAnswers[index]:
        backEndScore++;
        break;
      case answer === fullStackAnswers[index]:
        fullStackScore++;
        break;
      case answer === noDevAnswers[index]:
        noDevScore++;
        break;
      default:
        text = '';
    }
  });

  //get the highest score & output the result
  if (frontEndScore > backEndScore && frontEndScore > fullStackScore && frontEndScore > noDevScore) {
    result.querySelector('span').textContent = 'You should be a front-end developer!';
  } else if (backEndScore > frontEndScore && backEndScore > fullStackScore && backEndScore > noDevScore) {
    result.querySelector('span').textContent = 'You should be a back-end developer!';
  } else if (fullStackScore > frontEndScore & fullStackScore > backEndScore && fullStackScore > noDevScore) {
    result.querySelector('span').textContent = 'You should be a full-stack developer!';
  } else if (noDevScore > frontEndScore && noDevScore > backEndScore && noDevScore > fullStackScore) {
    result.querySelector('span').textContent = 'You should probably consider a different career!';
  }

  //show the result
  scrollTo(0, 0);
  result.classList.remove('d-none');


  //reset the form
  form.reset();
});