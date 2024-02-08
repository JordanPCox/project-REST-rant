const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
            <div>
                <img src="/images/img-2.jpg" alt="kitten" />
            </div>
            <div>
            Photo by <a href="https://unsplash.com/@alvannee?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Alvan Nee</a> on <a href="https://unsplash.com/photos/white-and-brown-long-fur-cat-ZCHj_2lJP00?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>  
            </div>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops! Sorry, we can't quite reach page!</p>
            </main>
        </Def>
    )
}

module.exports = error404