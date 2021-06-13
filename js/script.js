function getInfo(){
    let charId = document.getElementById("charCapture").value
    document.getElementById("charCapture").value = ""
    let url = `https://rickandmortyapi.com/api/character/${charId}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            let html = `<section class="mt-4" id="aboutSection">
        <div class="d-flex flex-wrap">
            <!-- My Picture -->
            <div class="col-lg-6 p-5 bg-dark d-flex flex-column align-items-center justify-content-center">
                <img class="img-fluid rounded-circle img-size" src="${data.image}" alt="characterPicture" id="charImg">
                    <header class="mt-3 text-center text-white">
                <h1 class="font-weight-lighter" id="charName">
                    ${data.name}
                </h1>
                    <h1 id="charSpecies">"${data.species}"</h1>
                </header>
            </div>

        <!-- Introduction -->
            <div class="col-lg-6 d-flex align-items-center p-5">
                <header class="mt-3">
                    <h3 class="font-weight-lighter">
                        Satus: <b id="charStatus">${data.status}</b>
                    </h3>
                    <h3 class="font-weight-lighter">
                        Origin: <b id="charOrigin">${data.origin.name}</b>
                    </h3>
                </header>
            </div>
        </div>
    </section>`

            document.getElementById("charContent").innerHTML = html

            /* Prints image */
            //document.getElementById("charImg").src = data.image

            /* Prints Name */
            //document.getElementById("charName").innerHTML = data.name

            /* Prints Species */
            //document.getElementById("charSpecies").innerHTML = `"${data.species}"`

            /* Prints Species */
            //document.getElementById("charStatus").innerHTML = data.status

            /* Prints Species */
            //document.getElementById("charOrigin").innerHTML = data.origin.name
        })
        
}