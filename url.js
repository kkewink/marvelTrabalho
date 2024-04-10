async function getComics(){
    const response = await fetch("http://gateway.marvel.com/v1/public/comics?ts=1&apikey=8d4a83eebc0f87e8fd638fc68ab35c7a&hash=87e64d52b71494ef6898f69ea0650231");
    const personagens = await response.json();
   // console.log(personagens.data.results)
    const pai = document.getElementById("pai");
    const dataArray = personagens.data.results;
    
    
    dataArray.forEach(element => {

        const dataCreators = element.creators.items;
        const card = document.createElement("div")
        
        dataCreators.forEach(element => {
            console.log(element.name)
            const writer = element.name;
        })


        card.innerHTML = `<h1>${element.title}</h1>
        <h2>Writer: ${element.creators.items.name}</h2>`;
        console.log(element.url)
        pai.appendChild(card)
    });
    console.log(dataArray)
}

getComics()