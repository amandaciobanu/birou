import 'js-autocomplete/auto-complete.css';
import autocomplete from 'js-autocomplete';


const autocompleteSearch = () => {
  const search = document.getElementById('search-data');
  console.log("Autocomplete:", search)
  if(search) {
    const offices = JSON.parse(document.getElementById('search-data').dataset.offices);
    const searchInput = document.getElementById('search_string');
    console.log(offices)
    if (offices && searchInput) {
      new autocomplete({
        selector: searchInput,
        minChars: 1,
        source: (term, suggest) => {
            term = term.toLowerCase();
            const choices = offices;
            const matches = [];
            console.log("choi", choices[1])
            for (let i = 0; i < choices.length; i++)
                if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
            suggest(matches);
        },
      });
    }
  }

};

export { autocompleteSearch };
