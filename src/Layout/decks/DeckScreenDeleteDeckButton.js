import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { deleteDeck } from "../../utils/api/index";

function DeckScreenDeleteDeckButton({ deckId }) {
  const history = useHistory();

  /* When the user clicks on the "Delete" button associated with a particular deck, they
  will be given the warning message below. If the user clicks "OK", the deck is deleted
  and is no longer visible on the Home screen */
  const handleTrashClick = () => {
    if (
      window.confirm("Delete this deck? You will not be able to recover it.")
    ) {
      deleteDeck(deckId).then(() => history.push("/"));
    }
  };

  return (
    <button type="button" className="btn btn-danger" onClick={handleTrashClick}>
      <span className="oi oi-trash" />
    </button>
  );
}

export default DeckScreenDeleteDeckButton;

//using this for practice.

// 1. load a list of
// 2. display the list on the screen.
// 3. when an X is clicked on, it will display the Y associated with X

// //useEffect(() => {
//   fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then((response) => response.json())
//     .then(setUser);
// }, []); 
//보통 이모양 
// you get changed data when you click.
//













// just quick note. I just want to understand how the other code routers, useEffect(API) useState works rather than trying to spend too much time on the UI. for UI, let's just look at it.
