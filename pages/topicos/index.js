$(document).ready(myTopico)
/**
 * FrontEndeiros 1.0
 * /pages/home/index.js - Controller de home
 * By Luferat
 * MIT License 2023 
 **/

// Função principal da página "home".
function myTopico() {

    changeTitle()

    var articleList = '';

    $.get(app.apiBaseURL + 'topicos')
        .done((data) => {
            if (data.length > 0) {
                data.forEach((art) => {
                    articleList += `
                    <div class="article art-item" data-id="${art.id}">
                        <img src="${art.thumbnail}" alt="${art.title}">
                        <div>
                            <h3>${art.title}</h3>
                            <p>${art.resume}</p>
                        </div>
                    </div>                    
                `
                })
                $('.post-main').html(articleList)
                getMostViewed(5)
                getLastComments(5)
            } else {
                $('.post-main').html("nenhum artigo publicado.")
            }
        })
}

function getMostViewed(limit) {

    var htmlOut = ''

    $.get(app.apiBaseURL + 'topicos/views/' + limit)
        .done((data) => {
            if (data.length > 0) {
                htmlOut = '<ul>'
                data.forEach((item) => {
                    htmlOut += `<li class="article" data-id="${item.id}">${item.title}</li>`
                })
                htmlOut += '</ul>'
            } else {
                htmlOut = '<p class="center">Nenhum artigo encontrado.</p>'
            }

            $('.').html(htmlOut)
        })

}

function getLastComments(limit) {

    var htmlOut = ''

    $.get(app.apiBaseURL + 'comments/last/' + 8)
        .done((data) => {
            if (data.length > 0) {
                htmlOut = '<ul>'
                data.forEach((item) => {
                    htmlOut += `<li class="article" data-id="${item.article}">${item.comment}</li><br>`
                })
                htmlOut += '</ul>'
            } else {
                htmlOut = '<p class="center">Nenhum comentário ainda.</p>'
            }
            $('.card').html(htmlOut)
        })

}