import React, { useState, useEffect } from "react";
import algoliasearch from "algoliasearch/lite";
import { autocomplete } from "@algolia/autocomplete-js";

const appId = 'Y52AZOXTMK';
const apiKey = '22153394a77c6d0a8d901f506db6f8fa';
const indexName = "places";

const AddressAutocomplete = () => {
  const [address, setAddress] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const searchClient = algoliasearch(appId, apiKey);
    const autoCompleteInstance = autocomplete({
      placeholder: "Enter your address",
      getSources({ query }) {
        return [
          {
            sourceId: "places",
            getItems({ query }) {
              return searchClient.index(indexName).search(query).then((response) => response.hits);
            },
            getItemUrl({ item }) {
              return item.url;
            },
          },
        ];
      },
    });

    autoCompleteInstance.on("suggestionSelected", ({ suggestion }) => setAddress(suggestion.value));
    autoCompleteInstance.on("suggestionsUpdated", ({ suggestions }) => setSuggestions(suggestions));

    return () => autoCompleteInstance.destroy();
  }, []);

  return (
    <div>
      <input
        type="text"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion) => (
            <li key={suggestion.value}>{suggestion.label}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddressAutocomplete;
