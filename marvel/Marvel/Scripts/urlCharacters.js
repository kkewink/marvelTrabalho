

async function getUrl() {

    const url1 = new URL(window.location.href);
     const searchParams = url1.searchParams;

     const id = searchParams.get("id");
     const url = `http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=8d4a83eebc0f87e8fd638fc68ab35c7a&hash=87e64d52b71494ef6898f69ea0650231`;
     const resp = await fetch(url);
     const dados = await resp.json();
     const data = dados.data.results;


    var title = "";
    var writerName = "";
    var desc = "";
    data.forEach(element => {
         title = element.name;
         desc = element.description;
         if(desc.length == 0){
          desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ea ut numquam odit molestias, voluptas odio harum blanditiis. Totam, magni officia! Aspernatur quas consectetur pariatur harum, delectus temporibus nobis quia."
         }
        console.log(element)
         
         const capa = document.querySelector("#capa");
         capa.innerHTML = ` <img src="${element.thumbnail.path.concat(`.${element.thumbnail.extension}`)}" alt="1">`
       
    });



    const container = document.querySelector("#nome");
    // const div = document.createElement("div");
    container.innerHTML = ` <h1>${title}</h1>
    <h5>${desc}</h5>
  `
}

getUrl();




