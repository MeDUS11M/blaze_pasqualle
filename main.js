//var canvas = document.getElementById('htmlCanvas');
//var ctx = canvas.getContext('2d');
var POINTS = [];
var n,xWidth,yWidth;


function initMain(){  
    document.body.removeChild(document.getElementById('general'));

    let div = document.createElement('div');
    div.id = 'general'
    div.style = 'text-align: center; z-index:2';
    document.body.appendChild(div);

    for (let i = 1; i<=4; i++){
        let btn = document.createElement('button');
        switch(i * 100) {
            case INPUT_INIT:
                btn.onclick = inputInit;
                break;
            case OUTPUT:
                btn.onclick = output;
                break;
            case VISUALIZE:
                btn.onclick = visualize;
                break;
            case TASK:
                btn.onclick = task;
                break;
        }
        btn.innerHTML = 'O';
        
        let p = document.createElement('p');
        p.innerHTML = TEXT_MAIN[i - 1];
        
        
        div.appendChild(p);
        p.appendChild(btn);
    }
};

function inputInit() {
    document.body.removeChild(document.getElementById('general'));

    let div = document.createElement('div');
    div.id = 'general';
    div.style = 'text-align: center; z-index:2';
    document.body.appendChild(div);

    for (let i = 1; i<=3; i++){
        let btn = document.createElement('button');
        switch(100 + i * 10) {
            case INPUT_BY_KEYBOARD:
                btn.onclick = inputByKeyboard;
                break;
            case INPUT_RANDOM:
                btn.onclick = inputRandom;
                break;
            case INPUT_FROM_FILE:
                btn.onclick = inputFromFile;
                break;
        }
        btn.innerHTML = 'O';
        
        let p = document.createElement('p');
        p.innerHTML = INPUT_INIT_TEXT[i - 1];
        
        
        div.appendChild(p);
        p.appendChild(btn);
    }

    let cancelButton = document.createElement('button');
    cancelButton.onclick = initMain;
    cancelButton.innerHTML = 'О';

    let cancelP = document.createElement('p');
    cancelP.innerHTML = 'Вернуться на главную';

    div.appendChild(cancelP);
    cancelP.appendChild(cancelButton);
};
    
function inputByKeyboard(){
    alert('Я ввожу с клавиатуры!');
};

function inputRandom(){
    alert('Я ввожу рандомно!');
    n = prompt('Введите количество точек', 10);
    for (let i = 0; i < n; i++) {
        POINTS[i] = {
            x: Math.floor((Math.random() * 2 - 1) * xWidth),
            y: Math.floor((Math.random() * 2 - 1) * yWidth)
        }
    }
};

function inputFromFile(){
    alert('Я ввожу из файла!');
};  

function output(){
    document.body.removeChild(document.getElementById('general'));

    let div = document.createElement('div');
    div.id = 'general';
    div.style = 'text-align: center; z-index:2';
    document.body.appendChild(div);

    for (let i = 0; i < n; i++){
        
        btn.innerHTML = 'O';
        
        let p = document.createElement('p');
        p.innerHTML = INPUT_INIT_TEXT[i - 1];
        
        
        div.appendChild(p);
        p.appendChild(btn);
    }
};

function correctInit(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    buttons = document.getElementsByClassName("mainPageButton");
    for (let i=0; i<buttons.length; i++){
        buttons[i].style.visibility = "hidden";
    };
};
    
function visualize(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    buttons = document.getElementsByClassName("mainPageButton");
    for (let i=0; i<buttons.length; i++){
        buttons[i].style.visibility = "hidden";
    };
};

function task(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    buttons = document.getElementsByClassName("mainPageButton");
    for (let i=0; i<buttons.length; i++){
        buttons[i].style.visibility = "hidden";
    };
}; 

xWidth = prompt('Введите наибольшее по модулю значение координаты x', 160);
yWidth = prompt('Введите наибольшее по модулю значение координаты y', 90);
initMain();