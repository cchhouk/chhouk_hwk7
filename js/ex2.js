// Country list
const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Autria",
  "Azerbaïjan"
];

function displaySuggestion() {
  const text = document.getElementById('country').value
  const suggestion = document.getElementById('suggestions')
  while (suggestion.firstChild) {
      suggestion.removeChild(suggestion.firstChild);
  }
  if(!text) return;
  let list = []
  countryList.forEach(country => {
      if (country.toLocaleLowerCase().startsWith(text.toLocaleLowerCase()) && country.toLocaleLowerCase() != text.toLocaleLowerCase()) list.push(country)
  });
  list.forEach(country => {
      const p = document.createElement('p')
      p.onclick = selectSuggestion
      p.className = 'suggestion'
      p.appendChild(document.createTextNode(country))
      suggestion.appendChild(p)
  });
}

function selectSuggestion(event) {
  const text = document.getElementById('country')
  text.value = event.path[0].innerText
  const suggestion = document.getElementById('suggestions')
  while (suggestion.firstChild) {
      suggestion.removeChild(suggestion.firstChild);
  }
}
