const question = (data) => {

    const question =
        `<div class="container">
    <div class="question-header text-center">
        <h2 class='header1'>${data.header}</h2>
        <p>Apple iOS is a better choice to reach a more engaged user base. Android has a broader reach, however,
            particularly in emerging markets, like Asia and Africa.</p>
    </div>

    <div class="question-answers text-center clearfix container-fluid">
        <div class="answer answer-not-selected">
            <form method="post" accept-charset="utf-8" action="/estimates/question/login">
                <div style="display:none;"><input type="hidden" name="_method" value="POST"></div>
                <button type="button" class="icon-button" value="1">
                    <img src="img/android-device-icon.png" alt="Android"
                         data-icon-url="img/android-device-icon.png">
                    <p class="text-primary">
                        Android </p>
                </button>
                <input type="hidden" name="question" value="type"> <input type="hidden" name="answer" value="android">
            </form>
        </div>


        <div class="answer answer-not-selected">
            <form method="post" accept-charset="utf-8" action="/estimates/question/login">
                <div style="display:none;"><input type="hidden" name="_method" value="POST"></div>
                <button type="button" class="icon-button" value="2">
                    <img src="img/iphone-icon.png" alt="Apple iOS"
                         data-icon-url="/img/hmtmaa/icons/iphone-icon.png">
                    <p class="text-primary">
                        Apple iOS </p>
                </button>
                <input type="hidden" name="question" value="type"> <input type="hidden" name="answer" value="ios">
            </form>
        </div>


        <div class="answer answer-not-selected">
            <form method="post" accept-charset="utf-8" action="/estimates/question/login">
                <div style="display:none;"><input type="hidden" name="_method" value="POST"></div>
                <button type="button" class="icon-button" value="3">
                    <img src="img/ios-universal-icon.png" alt="Apple iOS and Android"
                         data-icon-url="/img/hmtmaa/icons/ios-universal-icon.png">
                    <p class="text-primary">
                        Apple iOS and Android </p>
                </button>
                <input type="hidden" name="question" value="type"> <input type="hidden" name="answer"
                                                                          value="ios-android"></form>
        </div>
    </div>
</div>`;
    return question
};

export default question;