import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api/index";
import { Link } from "react-router-dom";

// import CreateDeckBreadcrumbNavBar from "./CreateDeckBreadcrumbNavBar";

import CreateDeckCancelButton from "./CreateDeckCancelButton";

function CreateDeckScreen() {
  const [name, setName] = useState("");
  const history = useHistory();

  // Handling changes to the deck's name and description in the form

  const handleNamechange = (event) => setName(event.target.value);

  // Adding new deck to the database. Saved deck will have an "id" property

  // Clicking submit will then take the user to that deck's screen

  const handleCreateDeckSubmit = (event) => {
    event.preventDefault();
    createDeck({
      name: name,
      description: name,
    }).then((newDeck) => history.push(`/decks/${newDeck.id}`));
  };

  //adding breadscrumb bar
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home" /> Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>
      <h2>Create Deck</h2>

      <form onSubmit={handleCreateDeckSubmit}>
        <div className="form-group">
          <label htmlFor="deckName">Name</label>
          <input
            id="deckName"
            type="text"
            name="deckName"
            className="form-control"
            placeholder="Deck Name"
            onChange={handleNamechange}
            value={name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="deckDescription">Description</label>
          <textarea
            id="deckDescription"
            name="deckDescription"
            className="form-control"
            placeholder="Brief description of the deck"
            rows="5"
            onChange={handleNamechange}
            value={name}
          />
        </div>
        <CreateDeckCancelButton />
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateDeckScreen;
