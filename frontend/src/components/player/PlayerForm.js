function PlayerForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("added");
  };

  return (
    <div className="row">
      <h3 className="center">Add a new player</h3>

      <form className="col s12" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s6">
            <input id="first_name" name="firstName" type="text" />
            <label htmlFor="first_name">First Name</label>
          </div>

          <div className="input-field col s6">
            <input id="last_name" name="lastName" type="text" />
            <label htmlFor="last_name">Last Name</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <input id="phone" name="phone" type="text" />
            <label htmlFor="phone">Phone</label>
          </div>

          <div className="input-field col s6">
            <input id="email" name="email" type="email" />
            <label htmlFor="email">Email</label>
          </div>
        </div>

        <button
          className="btn waves-effect waves-light yellow darken-2"
          type="submit"
          name="action"
        >
          Add player
        </button>
      </form>
    </div>
  );
}

export default PlayerForm;
