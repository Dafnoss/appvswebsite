const flowStat = (data) => {
    const statBlocks = [];
    data.history.forEach((el) => {
        statBlocks.push(`<li class="stats__result stats__result--${el}"></li>`);
    });
    const stat = `<div class="stats">
    <ul class="stats">
    ${statBlocks.join('')};
    </ul>
    </div>`;

    return stat;
};

export default flowStat;
