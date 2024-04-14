

async function getUrl() {

    const url1 = new URL(window.location.href);
     const searchParams = url1.searchParams;

     const id = searchParams.get("id");
     const url = `http://gateway.marvel.com/v1/public/comics/${id}?ts=1&apikey=8d4a83eebc0f87e8fd638fc68ab35c7a&hash=87e64d52b71494ef6898f69ea0650231`;
     const resp = await fetch(url);
     const dados = await resp.json();
     const data = dados.data.results;


    var title = "";
    var writerName = "";

    data.forEach(element => {
      console.log(element)
         title = element.title;
         const dataWriter = element.creators.items
         const capa = document.querySelector("#capa");
         capa.innerHTML = ` <img src="${element.thumbnail.path.concat(`.${element.thumbnail.extension}`)}" alt="1">`
         dataWriter.forEach(element => {
            writerName = element.name
         })
    });



    const container = document.querySelector("#nome");
    // const div = document.createElement("div");
    container.innerHTML = ` <h1>${title}</h1>
    <h3>Writer: ${writerName}</h3>
    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae hic error assumenda similique aut totam iure reiciendis ullam nobis quam, veritatis ea, vel, blanditiis aliquid perferendis voluptatibus? Omnis, dignissimos eaque?</h5>
  `
}

getUrl();




