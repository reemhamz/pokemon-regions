const poke = {}

const regionURL = `https://pokeapi.co/api/v2/region/`
const pokeURL = `https://pokeapi.co/api/v2/pokemon-species/`
const pokeSpritesURL = `https://pokeapi.co/api/v2/pokemon/`


//Pokémon Species AJAX Call --> 
//contains pokemon's generation. Shares pokemon name and ID w/ getSprites
//shares generation information with getRegionInfo

poke.getPokeDetails = () => { //master call


    poke.getRegion = () => {
        $("select").change(() => {
            const selection = $("option:selected").val();
            const regionName = selection[0].toUpperCase() + selection.substr(1);
            $(".pokemon-container").empty();
            $(".region-map").empty();

            const regionAppend = `
            <h2 class="region-title">Welcome to the <span class = 'region-title-deco'>${regionName}</span> region !</h2>
            <img src="./images/${selection}-map.jpg"/>
    
            `

            $(`.region-map`).append(regionAppend);
            console.log("this is the selected region ID:", regionName);

            //   poke.getRegionDetails(selection)
            console.log('OMMMMMMGGGGGG SELECTIONNN', selection)


            let pokeID
            if (selection === 'kanto') {
                pokeID = 1
            } else if (selection === 'johto') {
                pokeID = 152
            } else if (selection === 'hoenn') {
                pokeID = 252
            } else if (selection === 'sinnoh') {
                pokeID = 387
            } else if (selection === 'unova') {
                pokeID = 494
            } else if (selection === 'kalos') {
                pokeID = 650
            } else if (selection === 'alola') {
                pokeID = 722
            }
            // return pokeID

            console.log('WOWOWOWOWOWWOWWW SELCTION ID IS....', pokeID)

            poke.getSprites = () => { //nested call 2
                $.ajax({
                    url: `${pokeSpritesURL}${pokeID}`,
                    method: `GET`,
                    dataType: `json`
                }).then(function (spriteData) {
                    spriteImg = spriteData.sprites.front_default
                    console.log("THIS IS THE UPDATED POKEIDDD", pokeID)

                    console.log("OPEN HERE FOR SPRITE DATA", spriteData)

                   let spriteNameLowerCase = spriteData.name

                    console.log(`this is the name of the sprite`, spriteNameLowerCase)

                    let spriteID = spriteData.id
                    $(`.sprite-title`).empty()
                    $(`.pokemon-sprites`).empty()

                    if (selection === 'kanto') {
                        let spriteTitleAppend = `<h3> The Pokémon of ${regionName}</h3>`
                        $(`.sprite-title`).append(spriteTitleAppend)
                        for (spriteData.id >= 1; spriteData.id <= 151; spriteData.id = spriteData.id + 1) {

                            spriteImgLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${spriteData.id}.png`
                            let spriteName = spriteNameLowerCase[0].toUpperCase() + spriteNameLowerCase.substr(1);

                            console.log('this is the spritename', spriteName)


                            let spriteAppend = `<img src="${spriteImgLink}"/>  `

                            $(`.pokemon-sprites`).append(spriteAppend);
                        }

                    } else if (selection === 'johto') {
                        let spriteTitleAppend = `<h3> The Pokémon of ${regionName}</h3>`
                        $(`.sprite-title`).append(spriteTitleAppend)
                        for (spriteID >= 152; spriteID <= 251; spriteID = spriteID + 1) {

                            spriteImgLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${spriteID}.png`
                            spriteName = spriteNameLowerCase[0].toUpperCase() + spriteNameLowerCase.substr(1);

                            let spriteAppend = `<img src="${spriteImgLink}"/>    `

                            $(`.pokemon-sprites`).append(spriteAppend);

                        }
                    } else if (selection === 'hoenn') {
                        let spriteTitleAppend = `<h3> The Pokémon of ${regionName}</h3>`
                        $(`.sprite-title`).append(spriteTitleAppend)
                        for (spriteID >= 252; spriteID <= 386; spriteID = spriteID + 1) {
                            spriteImgLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${spriteID}.png`
                            // spriteName = spriteNameLowerCase[0].toUpperCase() + spriteNameLowerCase.substr(1);
                            let spriteAppend = `<img src="${spriteImgLink}"/>`


                            $(`.pokemon-sprites`).append(spriteAppend);
                        }
                    } else if (selection === 'sinnoh') {
                        let spriteTitleAppend = `<h3> The Pokémon of ${regionName}</h3>`
                        $(`.sprite-title`).append(spriteTitleAppend)
                        for (spriteID >= 387; spriteID <= 493; spriteID = spriteID + 1) {
                            spriteImgLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${spriteID}.png`
                            // spriteName = spriteNameLowerCase[0].toUpperCase() + spriteNameLowerCase.substr(1);
                            let spriteAppend = `<img src="${spriteImgLink}"/>`


                            $(`.pokemon-sprites`).append(spriteAppend);
                        }
                    } else if (selection === 'unova') {
                        let spriteTitleAppend = `<h3> The Pokémon of ${regionName}</h3>`
                        $(`.sprite-title`).append(spriteTitleAppend)
                        for (spriteID >= 494; spriteID <= 649; spriteID = spriteID + 1) {
                            spriteImgLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${spriteID}.png`
                            // spriteName = spriteNameLowerCase[0].toUpperCase() + spriteNameLowerCase.substr(1);
                            let spriteAppend = `<img src="${spriteImgLink}"/>`


                            $(`.pokemon-sprites`).append(spriteAppend);
                        }
                    } else if (selection === 'kalos') {
                        let spriteTitleAppend = `<h3> The Pokémon of ${regionName}</h3>`
                        $(`.sprite-title`).append(spriteTitleAppend)
                        for (spriteID >= 650; spriteID <= 721; spriteID = spriteID + 1) {
                            spriteImgLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${spriteID}.png`
                            // spriteName = spriteNameLowerCase[0].toUpperCase() + spriteNameLowerCase.substr(1);
                            let spriteAppend = `<img src="${spriteImgLink}"/>`


                            $(`.pokemon-sprites`).append(spriteAppend);
                        }
                    } else if (selection === 'alola') {
                        let spriteTitleAppend = `<h3> The Pokémon of ${regionName}</h3>`
                        $(`.sprite-title`).append(spriteTitleAppend)
                        for (spriteID >= 722; spriteID <= 807; spriteID = spriteID + 1) {
                            spriteImgLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${spriteID}.png`
                            // spriteName = spriteNameLowerCase[0].toUpperCase() + spriteNameLowerCase.substr(1);
                            let spriteAppend = `<img src="${spriteImgLink}"/>`


                            $(`.pokemon-sprites`).append(spriteAppend);
                        }
                    }
                    console.log("hihihihhiiii this is sprite dataaa", spriteData)
                })

            }
            poke.getSprites()



            $.ajax({
                url: `${pokeURL}${pokeID}`,
                method: `GET`,
                dataType: `json`
            }).then(function (pokeData) {
                console.log("pokemon deets!", pokeData)

                //getting the pokemon ID
                const pokeNumID = pokeData.id
                // const nameInfo = pokeData.name
                // const pokeName = nameInfo[0].toUpperCase() + nameInfo.substr(1);

                // console.log("the pokemon's name is", pokeName)
                //getting pokemon generation number 
                // const pokeGeneration = pokeData.generation.name
                // poke.displayGeneration(pokeGeneration)

                // console.log('THIS IS THE POKEMON GENERATION......', pokeGeneration)
                // console.log("this pokemon belongs to", pokeGeneration)

                // console.log("this is the pokemon ID", pokeID)



                //Pokémon Region AJAX Call
                poke.getRegionDetails = (regionQuery) => { //nested call 1
                    $.ajax({
                        url: `${regionURL}${regionQuery}`,
                        method: `GET`,
                        dataType: `json`,
                        data: {
                            q: regionQuery
                        }
                    }).then(function (regionData) {


                        console.log(regionData);

                        const regionGeneration = regionData.main_generation.name
                        console.log("THIS IS THE REGION GENERATION....", regionGeneration)

                        if (regionGeneration === pokeGeneration) {
                            return true
                        }
                    })
                }
                // poke.getRegionDetails()
            })

        })
    };
    poke.getRegion();
}


//init function
poke.init = () => {
    //poke.getRegion();
    poke.getPokeDetails();
}

//document ready 
$(function () {
    poke.init();
})