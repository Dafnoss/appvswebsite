import question from '../templates/question'
import {drawBlock} from '../utils/makeBlock';
import util from '../utils/util';
import playData from '../data/playData';
import result from '../templates/result';
import data from '../data/data';
import header from '../templates/header';

const firstScreen = drawBlock(question);

const buttons = firstScreen.querySelectorAll(`.icon-button`);

Array.from(buttons).forEach((element) => {
    element.addEventListener(`click`, (evt) => {
        playData.questionNumber = ++playData.questionNumber;

        if (playData.questionNumber > 6) {
            alert(`YOU ARE DONE`);

            const resultScreen = drawBlock(result);

            if(playData.score >= 12) {
                resultScreen.querySelector('.result').innerHTML = "A Website";
            }


            const resultPageHeader = drawBlock(header);

            document.querySelector('.main-body').removeChild(document.querySelector('.menu-wrapper'));
            document.querySelector('.main-body').removeChild(document.querySelector('.i-menu'));

            document.querySelector('.main-body').appendChild(resultPageHeader);

            util.drawNode(resultScreen);

            document.querySelector('.container').setAttribute('style','display: none');
            $('.container').fadeIn(1500);

        } else {

            const questionAnswer = +evt.target.parentNode.value;
            playData.score = playData.score + questionAnswer;
            alert(playData.questionNumber + ' and ' + playData.score);

            const screenToDraW = util.changeContent(firstScreen, data.questions[playData.questionNumber]);

            util.drawNode(screenToDraW);

            document.querySelector('.container').setAttribute('style','display: none');
            $('.container').fadeIn(1500);

        }


    });
});

export default firstScreen;