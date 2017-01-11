//var canvas = document.getElementById('htmlCanvas');
//var ctx = canvas.getContext('2d');
var POINTS = [];
var n, width, ratio;

function initMain(){  
    document.body.removeChild(document.getElementById('general'));

    let div = document.createElement('div');
    div.id = 'general'
    div.style = 'text-align: center; z-index:2';
    document.body.appendChild(div);

    for (let i = 1; i<=3; i++){
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
                btn.onclick = inputByKeyboardInit;
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

    addReturnButton(div);
};
    
function inputByKeyboardInit(){
    document.body.removeChild(document.getElementById('general'));

    let div = document.createElement('div');
    div.id = 'general';
    div.style = 'text-align: center; z-index:2';
    document.body.appendChild(div);

    n = prompt('Введите количество точек', 10);
    
    let table = document.createElement('table');
    div.appendChild(table);
    
    let numH = document.createElement('th');
    numH.innerHTML = '№ точки';
    numH.style = 'border: 1px solid #000000;'
    let xH = document.createElement('th');
    xH.style = 'border: 1px solid #000000;'
    xH.innerHTML = 'X координата';
    let yH = document.createElement('th');
    yH.innerHTML = 'Y координата';
    yH.style = 'border: 1px solid #000000;'
    let confirmBtn = document.createElement('th');
    confirmBtn.innerHTML = 'Сохранить';
    confirmBtn.style = 'border: 1px solid #000000;'
    let trH = document.createElement('tr');

    trH.appendChild(numH);
    trH.appendChild(xH);
    trH.appendChild(yH);
    trH.appendChild(confirmBtn);

    table.appendChild(trH);

    for (let i = 0; i < n; i++) {

        let tr = document.createElement('tr');
        table.appendChild(tr);

        let num = document.createElement('td');
        num.innerHTML = (i + 1).toString();
        num.style = 'border: 1px solid #000000; text-align: center';
        tr.appendChild(num);

        let xD = document.createElement('td');
        tr.appendChild(xD);
        let xInput = document.createElement('input');
        xInput.name = 'xInput' + i.toString();
        xInput.type = 'text';
        xD.appendChild(xInput);

        let yD = document.createElement('td');
        tr.appendChild(yD);
        let yInput = document.createElement('input');
        yInput.name = 'yInput' + i.toString();
        yInput.type = 'text';
        yD.appendChild(yInput);

        let inputButtonD = document.createElement('td');
        tr.appendChild(inputButtonD);
        inputButtonD.style = 'border: 1px solid #000000;'
        let inputButton = document.createElement('input');
        inputButton.type = 'button';
        inputButton.onclick = inputByKeyboard.bind(this, i);
        inputButtonD.appendChild(inputButton);
    }

    addReturnButton(div);
};

function inputByKeyboard(i) {
    let xName = 'xInput' + i.toString();
    let yName = 'yInput' + i.toString();
    let x = parseInt(document.getElementsByName(xName)[0].value);
    let y = parseInt(document.getElementsByName(yName)[0].value); 
    POINTS[i] = new Vector2 (x, y);
};

function inputRandom() {
    n = prompt('Введите количество точек', 10);
    for (let i = 0; i < n; i++) {
        POINTS[i] = new Vector2(
            Math.floor((Math.random() * 2 - 1) * width), //x
            Math.floor((Math.random() * 2 - 1) * width)  //y
        )
    };
};

function inputFromFile(){
    alert('Я ввожу из файла!');
    document.body.removeChild(document.getElementById('general'));

    let div = document.createElement('div');
    div.id = 'general';
    div.style = 'text-align: center; z-index:2';
    document.body.appendChild(div);


};  

function output(){
    document.body.removeChild(document.getElementById('general'));

    let div = document.createElement('div');
    div.id = 'general';
    div.style = 'text-align: center; z-index:2';
    document.body.appendChild(div);

    let table = document.createElement('table');
    div.appendChild(table);
    
    let numH = document.createElement('th');
    numH.innerHTML = '№ точки';
    let xH = document.createElement('th');
    xH.innerHTML = 'X координата';
    let yH = document.createElement('th');
    yH.innerHTML = 'Y координата';
    let correctBtn = document.createElement('th');
    correctBtn.innerHTML = 'Изменить';
    let trH = document.createElement('tr');

    trH.appendChild(numH);
    trH.appendChild(xH);
    trH.appendChild(yH);
    trH.appendChild(correctBtn);

    table.appendChild(trH);
    for (let i = 0; i < n; i++){
        if (((POINTS[i] !==undefined)&&(!isNaN(POINTS[i].x)))&&(!isNaN(POINTS[i].y))) {
            let tr = document.createElement('tr');
            table.appendChild(tr);

            let num = document.createElement('td');
            num.innerHTML = (i + 1).toString();
            num.style = 'border: 1px solid #000000; text-align: center;';
            tr.appendChild(num);

            let xD = document.createElement('td');
            xD.style = 'border: 1px solid #000000;'
            tr.appendChild(xD);
            let xOutput = document.createElement('p');
            xOutput.innerHTML = (POINTS[i].x).toString();
            xOutput.style = 'text-align: center;';
            xD.appendChild(xOutput);

            let yD = document.createElement('td');
            yD.style = 'border: 1px solid #000000;'
            tr.appendChild(yD);
            let yOutput = document.createElement('p');
            yOutput.innerHTML = (POINTS[i].y).toString();
            yOutput.style = 'text-align: center;';
            yD.appendChild(yOutput);

            let correctButtonD = document.createElement('td');
            tr.appendChild(correctButtonD);
            correctButtonD.style = 'border: 1px solid #000000;'
            let correctButton = document.createElement('input');
            correctButton.type = 'button';
            correctButton.onclick = correct.bind(this, i);
            correctButtonD.appendChild(correctButton);
        }
    }

    addReturnButton(div);
};

function correct(i){
    if (confirm('Вы изменяете точку № ' + (i + 1))) {
        let num = (i + 1).toString();
        POINTS[i].x = parseInt(prompt('Введите координату X точки ' + (i + 1), POINTS[i].x));
        POINTS[i].y = parseInt(prompt('Введите координату Y точки ' + (i + 1), POINTS[i].y));
        output();
    }
};

function correctVisual(i){
    if (confirm('Вы изменяете точку № ' + (i + 1))) {
        POINTS[i].x = parseInt(prompt('Введите координату X точки ' + (i + 1), POINTS[i].x));
        POINTS[i].y = parseInt(prompt('Введите координату Y точки ' + (i + 1), POINTS[i].y));
        document.body.removeChild(document.getElementById('htmlCanvas'));
        visualize();
    }
};
    
function visualize(){
    document.body.removeChild(document.getElementById('general'));

    var canvas = document.createElement('canvas');
    canvas.id = 'htmlCanvas';
    canvas.width = Math.min(window.innerWidth, window.innerHeight);
    canvas.height = Math.min(window.innerWidth, window.innerHeight);;
    document.body.appendChild(canvas);
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    drawLine(ctx, 0, canvas.height / 2, canvas.width, canvas.height / 2);
    ctx.font = "oblique 10pt Arial";
    ctx.fillText('X', canvas.width - 15 , canvas.height / 2 - 10);
    drawLine(ctx, canvas.width / 2, 0, canvas.width / 2, canvas.height);
    ctx.fillText('Y', canvas.width / 2 + 10 ,15);
    
    ctx.fillText('O', canvas.width / 2 + 10 , canvas.height / 2 - 10);
    ctx.stroke();
    ctx.beginPath();
    ctx.font = "10pt Arial";
    ctx.strokeStyle = 'grey';
    ctx.lineWidth = 1;
    var d = prompt('Введите размер клеток (клетки — квадраты с введённой стороной)', 10);

    ratio = canvas.width / (2 * width);

    for (let i = 1; i < Math.round(width / d); i++) {
        //Y+
        drawLine(ctx, 0, canvas.height / 2 + (d * i * ratio), canvas.width, canvas.height / 2 + (d * i * ratio));
        ctx.fillText((-i * d).toString(), canvas.width / 2 + 10, canvas.height / 2 + (d * i * ratio) - 5);

        //Y-
        drawLine(ctx, 0, canvas.height / 2 - (d * i * ratio), canvas.width, canvas.height / 2 - (d * i * ratio));
        ctx.fillText((i * d).toString(), canvas.width / 2 + 10, canvas.height / 2 - (d * i * ratio) - 5);

        //X-
        drawLine(ctx, canvas.width / 2 - (d * i * ratio), 0, canvas.width / 2 - (d * i * ratio), canvas.height);
        ctx.fillText((-i * d).toString(), canvas.width / 2 - (d * i * ratio), canvas.height / 2  - 10);

        //X+
        drawLine(ctx, canvas.width / 2 + (d * i * ratio), 0, canvas.width / 2 + (d * i * ratio), canvas.height);
        ctx.fillText((i * d).toString(), canvas.width / 2 + (d * i * ratio), canvas.height / 2  - 10);
    };
    ctx.stroke();

    for (let i = 0; i < n; i++) {
        POINTS[i].draw(ctx, canvas, 'green');
        ctx.fillText((i+1).toString(), canvas.width / 2 + POINTS[i].x * ratio, canvas.height / 2 - POINTS[i].y * ratio - 10);
    };

    let div = document.createElement('div');
    div.id = 'general'
    div.style = 'text-align: center; z-index:2; ';
    document.body.appendChild(div);

    addReturnEraseButton(div);

    let table = document.createElement('table');
    div.appendChild(table);
    
    let numH = document.createElement('th');
    numH.innerHTML = '№ точки';
    let xH = document.createElement('th');
    xH.innerHTML = 'X координата';
    let yH = document.createElement('th');
    yH.innerHTML = 'Y координата';
    let correctBtn = document.createElement('th');
    correctBtn.innerHTML = 'Изменить';
    let trH = document.createElement('tr');

    trH.appendChild(numH);
    trH.appendChild(xH);
    trH.appendChild(yH);
    trH.appendChild(correctBtn);

    table.appendChild(trH);
    for (let i = 0; i < n; i++){
        if (((POINTS[i] !==undefined)&&(!isNaN(POINTS[i].x)))&&(!isNaN(POINTS[i].y))) {
            let tr = document.createElement('tr');
            table.appendChild(tr);

            let num = document.createElement('td');
            num.innerHTML = (i + 1).toString();
            num.style = 'border: 1px solid #000000; text-align: center;';
            tr.appendChild(num);

            let xD = document.createElement('td');
            xD.style = 'border: 1px solid #000000;'
            tr.appendChild(xD);
            let xOutput = document.createElement('p');
            xOutput.innerHTML = (POINTS[i].x).toString();
            xOutput.style = 'text-align: center;';
            xD.appendChild(xOutput);

            let yD = document.createElement('td');
            yD.style = 'border: 1px solid #000000;'
            tr.appendChild(yD);
            let yOutput = document.createElement('p');
            yOutput.innerHTML = (POINTS[i].y).toString();
            yOutput.style = 'text-align: center;';
            yD.appendChild(yOutput);

            let correctButtonD = document.createElement('td');
            tr.appendChild(correctButtonD);
            correctButtonD.style = 'border: 1px solid #000000;'
            let correctButton = document.createElement('input');
            correctButton.type = 'button';
            correctButton.onclick = correctVisual.bind(this, i);
            correctButtonD.appendChild(correctButton);
        }
    };
    let taskButton = document.createElement('button');
    taskButton.onclick = task.bind(this, ctx, div, canvas);
    taskButton.innerHTML = 'О';

    let taskP = document.createElement('p');
    taskP.innerHTML = 'Выполнить задание';

    div.appendChild(taskP);
    taskP.appendChild(taskButton);
};

function task(ctx, div, canvas){
    let minCircumference;
    for (let a = 0; a < (n - 2); a++) {
        let pointA = POINTS[a];
        for (let b = a + 1; b < (n - 1); b++) {
            let pointB = POINTS[b];
            for (let c = b +1; c < n; c++) {
                let pointC = POINTS[c];
                let center = getCenterOfCircumscribedCircle (pointA, pointB, pointC);

                if (center !== null){
                    let radius = center.getDistance(pointA);

                    if (minCircumference === undefined) {
                        minCircumference = new Circumference(center, radius);
                    } else {
                        minCircumference.center = (radius < minCircumference.radius)? center : minCircumference.center;
                        minCircumference.radius = (radius < minCircumference.radius)? radius : minCircumference.radius;
                    };
                };

            }
        }
    };

    minCircumference.center.draw(ctx, canvas, 'red');

    minCircumference.draw(ctx, canvas, 'red');


    let centerP = document.createElement('p');
    centerP.innerHTML = 'Центр: x = ' + minCircumference.center.x + ' , y = ' + minCircumference.center.y;
    let radiusP = document.createElement('p');
    radiusP.innerHTML = 'Радиус r = ' + minCircumference.radius;

    div.appendChild(centerP);
    div.appendChild(radiusP);
}; 

function getCenterOfCircumscribedCircle (pA, pB, pC) {
    // all lines are (x = const) or (y = coeff * x + const)
    let coeffAB = pA.getCoeff(pB);
    let coeffAC = pA.getCoeff(pC);
    let coeffBC = pC.getCoeff(pB);

    let coeffABperp = - 1 / coeffAB;
    let coeffACperp = - 1 / coeffAC;
    let coeffBCperp = - 1 / coeffBC;

    let midAB = pA.getMiddle(pB);
    let midAC = pA.getMiddle(pC);
    let midBC = pC.getMiddle(pB);

    let lenAB = pA.getDistance(pB);
    let lenAC = pA.getDistance(pC);
    let lenBC = pC.getDistance(pB);

    if (((lenAB + lenBC) != lenAC)&&((lenAB + lenAC) != lenBC)&&((lenAC + lenBC) != lenAB)) {
        switch (Infinity) {
            case Math.abs(coeffABperp) :
                centerX = midAB.x;
                constACperp = midAC.y - (coeffACperp * midAC.x);
                centerY = (coeffACperp * centerX) + constACperp;
                break;
            case Math.abs(coeffACperp) :
                centerX = midAC.x;
                constABperp = midAB.y - (coeffABperp * midAB.x);
                centerY = (coeffABperp * centerX) + constABperp;
                break;
            case Math.abs(coeffBCperp) :
                centerX = midBC.x;
                constACperp = midAC.y - (coeffACperp * midAC.x);
                centerY = (coeffACperp * centerX) + constACperp;
                break;
            default:
                constACperp = midAC.y - (coeffACperp * midAC.x);
                constABperp = midAB.y - (coeffABperp * midAB.x);
                centerX = (constACperp - constABperp) / (coeffABperp - coeffACperp);
                centerY = coeffABperp * centerX + constABperp;
                break;
        };
        return new Vector2 (centerX, centerY);
    }
    else return null;
};

function returnErase() {
    var canv = document.getElementById('htmlCanvas');
    if (canv !== undefined) {
        document.body.removeChild(canv);
    };
    initMain();
};

function addReturnEraseButton(div) {
    let returnButton = document.createElement('button');
    returnButton.onclick = returnErase;
    returnButton.innerHTML = 'О';

    let returnP = document.createElement('p');
    returnP.innerHTML = 'Вернуться на главную';

    div.appendChild(returnP);
    returnP.appendChild(returnButton);
};

function addReturnButton(div) {
    let returnButton = document.createElement('button');
    returnButton.onclick = initMain;
    returnButton.innerHTML = 'О';

    let returnP = document.createElement('p');
    returnP.innerHTML = 'Вернуться на главную';

    div.appendChild(returnP);
    returnP.appendChild(returnButton);
};

function drawLine(ctx, x1, y1, x2, y2) {
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
}

//xWidth = prompt('Введите наибольшее по модулю значение координаты x', 160);
//yWidth = prompt('Введите наибольшее по модулю значение координаты y', 90);
width = prompt('Введите наибольшее допустимое значение модуля координаты', 100);
//xWidth = window.innerWidth / (2 * ratio);
//yWidth = window.innerHeight / (2 *ratio);
initMain();