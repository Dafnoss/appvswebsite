const header = (data) => {

    const header =
        `<div class="corners-top-wrapper">
    <div class="corners corner--t-l">
        <a href="/">
            ← Start Again
        </a>
        <a class="js-startover" style="display:none;" href="/">← Start Again</a>
    </div>
    <div class="corners corner--t-m hidden-xs">
        How Much to Make an App
    </div>
    <div class="corners corner--t-r js-fade-this fadeIn">
        <a class="save-share" data-toggle="modal" data-target="#sharemodal"><span class="hidden-xs">Get link to </span>save or share</a>
    </div>
</div>`;

    return header
};

export default header;