import ResourceActionsCreator from "../actions/ResourceActionsCreator";

var iconStyle = {
  'marginTop': '8px'
}

export default class Form extends React.Component {
  addResource(e) {
    e.preventDefault();
    console.log("adding", this.refs);
    let newResource = {};
    Object.keys(this.refs).forEach(key => newResource[key] = this.refs[key].getDOMNode().value)
    ResourceActionsCreator.submitResource(newResource);
    document.getElementById("resource-form").reset();
  }
  render() {
    return (
      <div id="new-link-form">
        <div className="row">
          <form className="col s12" id="resource-form" onSubmit={this.addResource.bind(this)}>
            <div className="card-panel hoverable">
              <h4>Add Resource:</h4>
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix" style={iconStyle}>web</i>
                  <input id="link" type="url" className="validate" ref="link" />
                  <label htmlFor="link">Link</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix" style={iconStyle}>label</i>
                  <input id="title" type="text" className="validate" ref="title" />
                  <label htmlFor="title">Title</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix" style={iconStyle}>person_pin</i>
                  <input id="author" type="text" className="validate" ref="author_name" />
                  <label htmlFor="author">Author</label>
                </div>
              </div>

              <div className="row">
                <button type="submit" className="btn-floating btn-large waves-effect waves-light green lighten-1 right">
                  <i className="material-icons">add</i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
