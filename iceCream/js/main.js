const welcomeAlert = document.getElementById('welcome-alert');
let btnPlay = document.getElementById("play-btn");

welcomeAlert.showModal();

function gameIceCream() {
    let containerGame = document.getElementById("ice-cream-game");
    containerGame.innerHTML = `<h2 class="container fw-bold fs-1 text-center my-4 bg-light">Divided the money</h2>`
    let cardContainer = document.createElement("div");
    cardContainer.classList = "d-flex justify-content-center aling-items-center flex-wrap";
    let name = [
        "Victor",
        "Sussana",
        "Angelo"
    ]

    for (let i = 0; i <= name.length - 1; i++) {
        cardContainer.innerHTML += ` 
            <div class="card d-flex align-items-center flex-warp m-2 p-2">
                <img src="./img/client${i+1}.jpg" alt="" class="client-img card-img-top m-1">
                <p class="fw-bold" >${name[i]}</p>
                <div class="container">
                    <form action="" method="post">
                        <input type="number" id="amount${i}" class="input-amount" placeholder="Amount">
                    </form>
                </div>
            </div>
        `;
        
    }

    containerGame.appendChild(cardContainer);

    let limit = 5;
    let amount1 = document.getElementById("amount1");
    let amount2 = document.getElementById("amount2").value;
    let amount3 = document.getElementById("amount3").value;
    console.log(amount1,amount2,amount3);
}

btnPlay.addEventListener("click",()=>{
    welcomeAlert.close();
    gameIceCream();
})

