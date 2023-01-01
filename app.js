window.addEventListener("load", function(){
    let correct_color;
    let gen_btn = document.querySelector(".generate-btn");
    let gen_color_box = document.querySelector(".gen-color-box");
    let colorItemBoxes = document.querySelectorAll(".color-item");
    let itemBoxArray = [...colorItemBoxes];

    gen_btn.addEventListener("click", function(e){
        e.preventDefault;
        correct_color = "#" + Math.floor(Math.random()*16777215).toString(16);
        gen_color_box.innerHTML = correct_color;

        generateColorBoxes();
    })

    itemBoxArray.forEach(colorItem => {
        
        colorItem.addEventListener("click", function(e){
            e.preventDefault;

            itemColor = colorItem.style.backgroundColor;
            itemColor =  itemColor.substring(4, itemColor.length - 1);
            itemColor = itemColor.split(", ");

            itemColor = rgbToHex(itemColor);
            
            if (correct_color == itemColor){
                alert("You Win!");
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
            box.innerHTML = random_color;
            box.style.backgroundColor = random_color;
        });

        setCorrectColorBox();
    }

    function setCorrectColorBox(){
        randomBoxIndex = Math.floor(Math.random() * itemBoxArray.length);

        for (let i = 0; i < itemBoxArray.length; i++) {
            if (i == randomBoxIndex){
                correct_box = itemBoxArray[i];

                correct_box.innerHTML = correct_color;

                correct_box.style.backgroundColor = correct_color;
            }
            
        }
    }

})