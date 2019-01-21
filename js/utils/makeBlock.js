import util from "./util";
import data from "../data/data";
import playData from "../data/playData";

export const drawBlock = (domHtml) => {

    const content = util.getElementFromTemplate(domHtml(data.questions[playData.questionNumber]));

    let domNode = document.createElement('div');

    domNode.appendChild(content);

    return domNode
};