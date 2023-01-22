window.addEventListener("load", function(){
    let correct_color;
    let tries;
    let gameState = false;


    let trialBox = document.querySelector(".trial-box");
    let trialMessage = document.querySelector(".trial-message");
    let gen_btn = document.querySelector(".generate-btn");
    let gen_color_box = document.querySelector(".gen-color-box");
    let colorItemBoxes = document.querySelectorAll(".color-item");
    let itemBoxArray = [...colorItemBoxes];

    gen_btn.addEventListener("click", function(e){
        e.preventDefault; 

        tries = 3;
        trialBox.innerHTML = "";
        trialMessage.innerHTML = "";
        gameState = true;

        itemBoxArray.forEach(box => {
            if (box.classList.contains("wrongBox")){
                box.classList.remove("wrongBox");
            }
        });

        initiateGame();
    })

    
    function initiateGame() {

        trialBox.innerHTML = "Tries: " + tries;

        correct_color = "#" + Math.floor(Math.random()*16777215).toString(16);
        gen_color_box.innerHTML = correct_color;

        generateColorBoxes();

    
    }

    function setWrongBoxClassName(){

        for (let i = 0; i < itemBoxArray.length; i++) {

            box = itemBoxArray[i];
            itemColor = box.style.backgroundColor;
            itemColor =  itemColor.substring(4, itemColor.length - 1);
            itemColor = itemColor.split(", ");

            itemColor = rgbToHex(itemColor);
            
            if (itemColor !== correct_color){
                box.classList.add("wrongBox");
                console.log(itemColor, "right " + correct_color)
            }
          
        }
    }

    itemBoxArray.forEach(colorItem => {
        
        colorItem.addEventListener("click", function(e){
            e.preventDefault;

            itemColor = colorItem.style.backgroundColor;
            itemColor =  itemColor.substring(4, itemColor.length - 1);
            itemColor = itemColor.split(", ");

            itemColor = rgbToHex(itemColor);

            console.log("game " + tries)

            
            
            if (correct_color == itemColor && gameState == true){
                trialMessage.innerHTML = "You Won!!";
                gameState = false;
                setWrongBoxClassName();
            }
            else if (correct_color != itemColor && gameState == true){
                tries--;
                console.log(tries)
                if (tries === 0) {
                    trialMessage.innerHTML = "You Lost, Try again!";
                    gameState = false;
                    setWrongBoxClassName();
                }
                else{
                    trialBox.innerHTML = "Tries: " + tries;
                    trialMessage.innerHTML = "Try Again"
                }
            }

        })
    });


    function rgbToHex(rgbArray) {
        return("#" + toHex(rgbArray[0]) + toHex(rgbArray[1]) + toHex(rgbArray[2]));
    }

    function toHex(value) {
        newHex = parseInt(value).toString(16);
        return newHex;
    }

    function generateColorBoxes() {
        let random_color;

        itemBoxArray.forEach(box => {
            random_color = "#" + Math.floor(Math.random()*16777215).toString(16);
            box.style.backgroundColor = random_color;
        });

        setCorrectColorBox();
    }

    function setCorrectColorBox(){
        randomBoxIndex = Math.floor(Math.random() * itemBoxArray.length);

        for (let i = 0; i < itemBoxArray.length; i++) {
            if (i == randomBoxIndex){
                correct_box = itemBoxArray[i];

                correct_box.style.backgroundColor = correct_color;
            }
            
        }
    }

})