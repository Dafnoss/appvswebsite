const result = (data) => {

    const question =
        `<div class="container">
    <div class="row">
        <div class="estimate col-md-7 col-sm-10 col-centered text-center" style="float: none">
            <!-- Estimate Price -->
            <div class="price-container">
                <h1>The best solution for you is:</h1>
                <h2 class="result">
                    An App
                </h2>
                <a class="breakdown-link js-breakdown-link">Show Breakdown</a>
            </div>

            <div class="pick-crew">
                <p></p>
                <p>On Crew, we've handpicked the best app and website makers out there. Get your project started now or
                    check out some <a href="http://stories.crew.co" target="_blank">examples of work</a> done on Crew.
                </p>
                <a href="https://app.crew.co/submission/" class="js-start-on-crew btn btn-start">
                <span class="final-cta-content">
                                                            Hire a Freelance Developer on Crew                </span>
                    <span class="final-cta-content final-cta-content-mobile">Hire a freelancer on Crew</span>
                    <span class="do-not-remove-the-span-tbear">→</span>
                </a>
                <br><br><a data-toggle="modal" data-target="#howmodal" class="how-link" style="font-size: 0.75em;">How
                we got your estimate</a>
            </div>
        </div><!-- .estimate end -->
    </div><!-- .row end -->
</div>`;
    return question
};

export default result;