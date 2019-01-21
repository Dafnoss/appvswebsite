
const moduleFourElement = (data) => {

    const game =
        `<div class="game">
        <p class="game__task">${data.questionOne.title}</p>
        <form class="game__content">
            <div class="game__option">
                <img src="${data.questionOne.images[0]}" alt="Option 1" width="468" height="458">
                <label class="game__answer game__answer--photo">
                    <input name="question1" type="radio" value="photo">
                    <span>Фото</span>
                </label>
                <label class="game__answer game__answer--paint">
                    <input name="question1" type="radio" value="paint">
                    <span>Рисунок</span>
                </label>
            </div>
            <div class="game__option">
                <img src="${data.questionOne.images[0]}" alt="Option 2" width="468" height="458">
                <label class="game__answer  game__answer--photo">
                    <input name="question2" type="radio" value="photo">
                    <span>Фото</span>
                </label>
                <label class="game__answer  game__answer--paint">
                    <input name="question2" type="radio" value="paint">
                    <span>Рисунок</span>
                </label>
            </div>
        </form>
    </div>`;
    return game
};

export default moduleFourElement;