const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                    <img src="/images/img-1.jpg" alt="meat and vegetable bowl" />
                </div>
                <div>
                    Photo by <a href="https://unsplash.com/@pwign">Anh Nguyen</a> on <a href="https://unsplash.com/">Unsplash</a>
                </div>
                <a href="/places">
                    <button className="btn btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home