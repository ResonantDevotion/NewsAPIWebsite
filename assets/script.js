const submitBtn = $('#search-btn')
const clearBtn = $('#clear-btn')
const form = $('#form')
const searchTerm = $('#search-term');
const startYear = $('#start-year');
const endYear = $('#end-year');
const articles = $('#articles');
const queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + searchTerm + '&api-key=' + 'keuWGlK6emxzaXnr5oUXubBKvJlLIrUo';

submitBtn.on('click', function () {

    $.ajax({
        url: queryURL,
        method: "GET"
       })
       .then(function(response){
        console.log(response);
        const articleP = $('<p>');
        articleP.text(JSON.stringify(response));
        articles.append(articleP);
       })


})

