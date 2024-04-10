async function getComics(){


    const response = await fetch("http://gateway.marvel.com/v1/public/comics?ts=1&apikey=8d4a83eebc0f87e8fd638fc68ab35c7a&hash=87e64d52b71494ef6898f69ea0650231");
    const personagens = await response.json();


    const dataArray = personagens.data.results;
    const pai = document.getElementById("comicDad");
    var writer = ""
    dataArray.forEach(element => {

        const dataCreators = element.urls;
        dataCreators.forEach(element => {
            
            writer = element.url;
        
        })

        const card = document.createElement("div");
        card.innerHTML =`
        <div class="hq">
            <a href="${writer}"> <img src="${element.thumbnail.path.concat("/portrait_xlarge.jpg")}" alt="1"></a>
            <h4>${element.title}</h4>
        </div>`
        pai.appendChild(card)
    });
}

getComics()