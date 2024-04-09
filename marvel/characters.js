async function getCharacters(){
    const response = await fetch("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=8d4a83eebc0f87e8fd638fc68ab35c7a&hash=87e64d52b71494ef6898f69ea0650231");
    const personagens = await response.json();
    const data = personagens.data.results;
    const pai = document.getElementById("dad");
    data.forEach(element => {
        console.log(element)
        const card = document.createElement("div")
        card.innerHTML = `<div class="hq">
        <img src="${element.thumbnail.path.concat("/portrait_xlarge.jpg")}" alt="1">
        <h4>${element.name}</h4>
   pai.appendChild(card)
    });
}

getCharacters()