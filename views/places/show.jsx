const React = require('react')
const Def = require('../default')

function Show(data) {
  const { name, pic } = data.place;
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  let rating = (
    <h3 className="inactive">
      Not yet rated
    </h3>
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings / data.place.comments.length)
    let stars =''
    for (let i =0; i < averageRating; i++) {
      stars += '⭐'
    }

    rating = (
      <h3>
        {stars}
      </h3>
    )

    comments = data.place.comments.map(c => {
      return (
        <div key={c.id} className="border p-3 mb-3">
          <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <strong>- {c.author}</strong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }

  return (
    <Def>
      <main className="container mt-4">
        <h1 className="display-4">{name}</h1>

        <div className="row mt-4">
          <div className="col-md-6">
            <section className="mt-4">
              <h2>Rating</h2>
              {rating}
              <br />
              <h3>{data.place.showEstablished}</h3>
              <h4>Serving {data.place.cuisines}</h4>
            </section>

            <section className="mt-4">
              <h2>Comments</h2>
              {comments}
              <form method="POST" action={`/places/${data.place.id}/comment`} className="p-3 border-top mt-3">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="author">Author</label>
                    <input type="text" className="form-control" id="author" name="author" placeholder="Enter author name" required/>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="stars">Star Rating</label>
                    <input type="number" className="form-control" id="stars" name="stars" step="0.5" placeholder="Rate from 1 to 5" required/>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="content">Content</label>
                  <textarea className="form-control" id="content" name="content" rows="3" placeholder="Enter content" required></textarea>
                </div>
                <div className="form-check mb-3">
                  <input type="checkbox" className="form-check-input" id="rant" name="rant"/>
                  <label className="form-check-label" htmlFor="rant">Rant</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </section>
          </div>

          <div className="col-md-6">
            <img src={data.place.pic} alt={name} className="img-fluid" />
            <h3 className="mt-3">Located in {data.place.city}, {data.place.state}</h3>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
              Edit
            </a>
          </div>
          <div className="col-md-6">
            <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
              <button type="submit" className="btn btn-danger float-md-right">
                Delete
              </button>
            </form>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = Show;
