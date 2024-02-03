const React = require('react');
const Def = require('../default');

function Show(data) {
  const { name, pic } = data.place;

  return (
    <Def>
      <main className="container mt-4">
        <h1 className="display-4">{name}</h1>

        <div className="row mt-4">
          <div className="col-md-6">
            <section className="mt-4">
              <h2>Rating</h2>
              <p>Currently unrated.</p>
              <h3>{data.place.showEstablished}</h3>
              <h4>Serving {data.place.cuisines}</h4>
            </section>

            <section className="mt-4">
              <h2>Comments</h2>
              <p>No comments yet!</p>
            </section>
          </div>

          <div className="col-md-6">
            <img src={data.place.pic} alt={name} className="img-fluid" />
            <h3>Located in {data.place.city}, {data.place.state}</h3>
          </div>
        </div>

        <div className="row">
          <div className="col mb-1">
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
              Edit
            </a>
          </div>
          <div className="col mb-1">
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
              <button type="submit" className="btn btn-danger">
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
