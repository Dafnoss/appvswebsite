
const moduleSixElement = (data) => {
    const game3 =
        `<div class="game">
        <p class="game__task">${data.questionThree.title}</p>
        <form class="game__content  game__content--triple">
            <div class="game__option">
                <img src="${data.questionThree.images[0]}" alt="Option 1" width="304" height="455">
            </div>
            <div class="game__option  game__option--selected">
                <img src="${data.questionThree.images[1]}" alt="Option 1" width="304" height="455">
            </div>
            <div class="game__option">
                <img src="${data.questionThree.images[2]}" alt="Option 1" width="304" height="455">
            </div>
        </form>
    </div>`;
    return game3;
};

export default moduleSixElement;