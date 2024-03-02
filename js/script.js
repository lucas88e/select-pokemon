
const pokemonhtml = document.getElementById("Got-pokemon");
const bottonpk = document.getElementById("get-pokemon");

bottonpk.addEventListener("click", () => {
    const pokemons = document.getElementById("pokemon-select").value;
    
    fetch("https://pokeapi.co/api/v2/pokemon/"+pokemons)
    .then ((response) => {
        if(!response.ok){
            throw new Error("Error connection !");
        }
        return response.json();
    })
    .then ((pokemon) => {
        
        pokemonhtml.innerHTML =(
            '<ul>'
            +'<li>'+"NAME : " +pokemon.name+'</li>'
            +'<li>'+"TYPOS :"+pokemon.types.map(element => element.type.name)+'</li>'
            +'<li><img src="'+pokemon.sprites.front_default+'"/></li>'
            +'<li>'+"PESO: "+pokemon.weight+" pokegramos"+'</li>'
            +'<li>'+ "ALTURA: " +pokemon.height+" pokemetros"+'</li>'
            +'</ul>'
        );
        

    });
});
