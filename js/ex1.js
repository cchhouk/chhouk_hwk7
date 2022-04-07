// Character list. Each house has a name and a code
const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};

// Create option
const createOption = (text, value) => {
  const element = document.createElement("option");
  element.textContent = text;
  element.value = value;
  return element;
};

// Add a list 
const createList = text => {
  const element = document.createElement("li");
  element.textContent = text;
  return element;
}; 

const housesElement = document.querySelector("select");

// Populate house list
houses.forEach(house => {
  housesElement.appendChild(createOption(house.name, house.code));
})

// Change the house event
housesElement.addEventListener("change", e => {
  const characters = getCharacters(e.target.value);
  const charactersElement = document.getElementById("characters");
  charactersElement.innerHTML = "";
  
  // For loop to add each character to hte list
  characters.forEach(character => {
      charactersElement.appendChild(createList(character));
  });
});
