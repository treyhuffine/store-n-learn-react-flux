export default class Form extends React.Component {
  render() {
    return (
      <div id="new-link-form">
        <div className="row">
          <form className="col s12">
            <div className="card-panel hoverable">
              <h4>Add Link</h4>
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">web</i>
                  <input id="link" type="url" className="validate" />
                  <label htmlFor="link">Link</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">label</i>
                  <input id="title" type="text" className="validate" />
                  <label htmlFor="title">Title</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">person_pin</i>
                  <input id="author" type="text" className="validate" />
                  <label htmlFor="author">Author</label>
                </div>
              </div>

              <div className="row">
                <button type="submit" className="btn-floating btn-large waves-effect waves-light green right">
                  <i className="material-icons">add</i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
