

async function getUrl() {

    const url1 = new URL(window.location.href);
     const searchParams = url1.searchParams;

     const id = searchParams.get("id");
     const url = `http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=8d4a83eebc0f87e8fd638fc68ab35c7a&hash=87e64d52b71494ef6898f69ea0650231`;
     const resp = await fetch(url);
     const dados = await resp.json();
     const data = dados.data.results;

    console.log(data)

     var name = "";
    var writerName = "";

    data.forEach(element => {
         name = element.name;
        
         const capa = document.querySelector("#capa");
         capa.innerHTML = ` <img src="${element.thumbnail.path.concat(`.${element.thumbnail.extension}`)}" alt="1">`
         
    });



    const container = document.querySelector("#nome");
    
    container.innerHTML = ` <h1>${name}</h1>
    <h3>Writer: ${writerName}</h3>
    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae hic error assumenda similique aut totam iure reiciendis ullam nobis quam, veritatis ea, vel, blanditiis aliquid perferendis voluptatibus? Omnis, dignissimos eaque?</h5>
  `

}

getUrl();




