
export default {
    getElementFromTemplate:(html) => {
        const t = document.createElement(`div`);
        t.innerHTML = html;
        return t
    },

    drawNode: function (node) {
        const main = document.querySelector(`.content`);
        while (main.firstChild) {
            main.removeChild(main.firstChild);
        };

        main.appendChild(node);
        console.log(node)
    },

    changeContent: (node, data) => {
        node.querySelector('.header1').innerHTML = data.header;
        return node
    }
}

