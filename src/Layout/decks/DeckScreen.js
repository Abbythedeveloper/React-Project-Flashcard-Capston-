import React, { useEffect, useState } from "react";
import { Route, useParams, useRouteMatch } from "react-router-dom";
import { readDeck } from "../../utils/api/index";
import DeckScreenBreadcrumbNavBar from "./DeckScreenBreadcrumbNavBar";
import DeckInfo from "./DeckInfo";

function DeckScreen() {
  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState([]);
  const deckId = useParams().deckId;
  // useParams returns an object of key/value pairs of URL parameters. Use it to access match.params of the current <Route>.
  const { url } = useRouteMatch();

  // The useRouteMatch hook attempts to match the current URL in the same way that a <Route> would. It’s mostly useful for getting access to the match data without actually rendering a <Route>.

  // loading the specified deck from the API
  useEffect(() => {
    async function loadDeck() {
      const response = readDeck(deckId);
      const deckFromAPI = await response;
      //가져와서, 정보를 deck, card에 저장한거야.
      setDeck(deckFromAPI);
      setCards(deckFromAPI.cards);
    }
    loadDeck();
  }, [deckId]);

  // If the deck has been fetched from the API, the breadcrumb nav bar and deck info will display
  if (deck.name) {
    return (
      <div>
        <DeckScreenBreadcrumbNavBar deckName={deck.name} />
        <Route path={url}>
          <DeckInfo
            deckName={deck.name}
            deckDescription={deck.description}
            deckId={deckId}
            cards={cards}
            url={url}
          />
        </Route>
      </div>
    );
  }
  return "Loading...";
}

export default DeckScreen;
