import {drawBlock} from '../utils/makeBlock';
import moduleThree from "../templates/rules";
import util from '../utils/util';
import screenFour from './screenFour';

const screenThree = drawBlock(moduleThree, true);

screenThree.querySelector(`.continue`).addEventListener(`click`, (evt) => {
    evt.preventDefault();
    util.drawNode(screenFour);
});


export default screenThree;