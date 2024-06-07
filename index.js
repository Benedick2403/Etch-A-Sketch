function myGrid(size){
    let container = document.getElementById('container');
    container.innerHTML = ''
    let newSize = 100 / size;
    let isPressed = false;
    let color = 'black';
    let isEraser = false;

    container.addEventListener('mousedown', function(){
        isPressed = true;
    });

    container.addEventListener('mouseup', function(){
        isPressed = false;
    });

    for(let i = 0; i < size * size; i++){
        let myDiv = document.createElement('div');
        myDiv.classList.add('myDivs');
        myDiv.style.height = `${newSize}%`;
        myDiv.style.width = `${newSize}%`;

        myDiv.addEventListener('mousedown', function(){
            myDiv.style.backgroundColor = color
            myDiv.classList.add('hovered');
        });

        myDiv.addEventListener('mousemove', function(){
            if(isPressed){
                myDiv.style.backgroundColor = color;
                myDiv.classList.add('hovered');
            }
        })
        container.appendChild(myDiv);
    }

    let resetBtn = document.getElementById('reset');
    let colorSubmit = document.getElementById('colorSubmit');
    let eraserBtn = document.getElementById('eraser');

    resetBtn.onclick = function(){
        myGrid(16);
        myDiv.style.backgroundColor = 'blue';
    }
    
    colorSubmit.onclick = function(){
        color = document.getElementById('gridColor').value;
    }

    eraserBtn.onclick = function(){
        if(!isEraser){
            let colorEraser = 'rgb(201, 124, 182)';
            color = colorEraser;
            eraserBtn.textContent = "Change back";
            isEraser = true;
        }
        else{
            color != 'black' ? color = 'black' : null;
            eraserBtn.textContent = "Eraser";
            isEraser = false;
            
        }
    }
}

let gridSubmit = document.getElementById('gridNumSubmit');

gridSubmit.addEventListener('click', function(){
    let userInput = document.getElementById('gridNum').value;
    if(userInput < 100 && userInput > 0){
        myGrid(userInput)   
    }
    else if(userInput>100){
        console.log("Sorry, the sketcher can't handle that many")
    }
    else{
        console.log("Uh Oh! Seems like there's no input")
    }
});

myGrid(16);
