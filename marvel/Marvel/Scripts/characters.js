async function getCharacters(){
    const response = await fetch("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=8d4a83eebc0f87e8fd638fc68ab35c7a&hash=87e64d52b71494ef6898f69ea0650231");
    const personagens = await response.json();
  
    const data = personagens.data.results;
    console.log(data)
    const pai = document.getElementById("dad");
    var writer = ""
    data.forEach(element => {
        const dataCreators = element.urls;
        dataCreators.forEach(element => {
            console.log(element)
            writer = element.url;
         
        })
        const card = document.createElement("div")
        card.innerHTML = `<div class="hq">
        <a href="magneto.html?id=${element.id}"> <img src="${element.thumbnail.path.concat(`/portrait_xlarge.${element.thumbnail.extension}`)}" alt="1"></a>
        <h4>${element.name}</h4>
    </div>`
   pai.appendChild(card)
    });
}

getCharacters()


