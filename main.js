
async function afficherPokemon(url) {
    const reponse = await fetch(url);
    const cartePokemon = await reponse.json();
    console.log(cartePokemon);

    document.querySelector('.carte').innerHTML = 
                    `<div class="headerCarte">
                    <p class="nomPokemon">${cartePokemon.name.fr}</p>
                    <div class ="type">
                        <p class="texteType"></p>
                        <img class="logotype" src="${cartePokemon.types[0].image}">  
                    </div>
                    
                </div>

                <div class="topCarte">
                    <img class="mainImageCarte" data-type"${cartePokemon.types[0].name}" src="${cartePokemon.sprites.regular}">  
                </div>

                <div class="botCarte">
                            <p class="titreStats">Statistiques:</p>
                            <div class="lignesdestats">
                                <div>
                                    <p>HP: ${cartePokemon.stats.hp}</p>
                                    <p>ATK: ${cartePokemon.stats.atk} </p>
                                </div>
                                <div>
                                    <p>DEF:${cartePokemon.stats.def}</p>
                                    <p> Vit: ${cartePokemon.stats.vit}</p>
                                </div>
                                <div>
                                    <p>Att Sp: ${cartePokemon.stats.spe_atk}</p>
                                    <p>Def Sp: ${cartePokemon.stats.spe_def}</p>
                                </div>
                            </div>
                </div>
                `
}

function entierAleatoire(max, min)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.querySelector('button').addEventListener('click', ()=>
 afficherPokemon(`https://tyradex.vercel.app/api/v1/pokemon/${entierAleatoire(1,1018)}`)
);





