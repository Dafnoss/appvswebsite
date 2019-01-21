import allFooter from "../templates/footer";
import util from "./util";
import data from "../data/data";
import {gameOnHeader, header} from '../templates/header';
import firstScreen from "../screens/screenOne";
import playData from "../data/playData";
import flowStats from"../templates/flowStats";

export const drawBlock = (domHtml, isHeader, isGameOn) => {

    const footer = util.getElementFromTemplate(allFooter(data));
    const content = util.getElementFromTemplate(domHtml(data));

    let domNode = document.createElement('div');

    domNode.appendChild(content);
    domNode.appendChild(footer);

    if (isGameOn) {
        const contentStat = util.getElementFromTemplate(flowStats(playData));
        content.querySelector('.game').appendChild(contentStat);
    }

    const options = domNode.querySelectorAll(`.game__option`);

    if (options) {
        const optionsArr = Array.from(options);

        optionsArr.forEach((value) => {
            //value.style.maxHeight = value.style.height;
            console.dir(value.style);
            const sda = Array.from(value.querySelectorAll(`img`));
            sda.forEach((val) => {

                val.setAttribute(`style`, 'object-fit: cover');

            })
        })
    }

   if(isHeader) {
       const head = util.getElementFromTemplate(header());
       if (isGameOn) {
           const game = util.getElementFromTemplate(gameOnHeader(playData));
           head.appendChild(game);
       }

       head.querySelector(`.header__back`).addEventListener(`click`, () => {
           util.drawNode(firstScreen);
       });

       domNode.insertAdjacentElement('afterbegin', head);
    }

    return domNode
};