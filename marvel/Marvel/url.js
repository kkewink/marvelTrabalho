async function getComics(){
    const response = await fetch("http://gateway.marvel.com/v1/public/comics?ts=1&apikey=8d4a83eebc0f87e8fd638fc68ab35c7a&hash=87e64d52b71494ef6898f69ea0650231");
    const personagens = await response.json();
   // console.log(personagens.data.results)
    const pai = document.getElementById("capa");
    const dataArray = personagens.data.results;
    
    var writer = ""
    dataArray.forEach(element => {

        const dataCreators = element.creators.items;
        const card = document.createElement("div")
        dataCreators.forEach(element => {
            
            writer = element.name;
        })

        card.innerHTML = `
        <h1>${element.title}</h1>
        <h3>PUBLISHED: <br> august 10, 2012</h3>
        <h3>COVER ARTIST: <br> Bryanna Davis</h3>
        <h5>Tempestade é membro de uma subespécie de humanos nascidos com habilidades sobre-humanas conhecidas como mutantes. <br>Ela é capaz de controlar o clima e a atmosfera e é considerada uma dos mutantes mais poderosas do planeta.</h5>
        
        `

        pai.appendChild(card)
    });
    console.log(dataArray)
}

getComics()