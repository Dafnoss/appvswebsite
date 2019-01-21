
const moduleFive = (data) => {
    const game2 =
    `<div class="game">
        <p class="game__task">${data.questionTwo.title}</p>
        <form class="game__content  game__content--wide">
            <div class="game__option">
                <img src="${data.questionTwo.images[0]}" alt="Option 1" width="705" height="455">
                <label class="game__answer  game__answer--photo">
                    <input name="question1" type="radio" value="photo">
                    <span>Фото</span>
                </label>
                <label class="game__answer  game__answer--wide  game__answer--paint">
                    <input name="question1" type="radio" value="paint">
                    <span>Рисунок</span>
                </label>
            </div>
        </form>
    </div>`;

    return game2;
};


export default moduleFive;