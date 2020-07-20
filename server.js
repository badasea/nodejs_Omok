// 모듈을 추출합니다.
var express = require('express');
var bodyParser = require('body-parser');
// 웹 서버를 생성합니다.
var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
// 변수를 선언합니다.
var row=-1, col=-1;
var cells = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
var a=-1, b=-1;

app.all('/Black_send', function (request, response) {
    row = Number(request.param('row'));
    col = Number(request.param('col'));

    console.log("Player1 choice("+row+", "+col+")");

    response.send();
});

app.all('/White_send', function (request, response) {
    a = Number(request.param('w_row'));
    b = Number(request.param('w_col'));

    console.log("Player2 choice("+a+", "+b+")");

    response.send();
});


app.all('/receive_black', function (request, response) {
    
    var msg;
    if (row != -1 ) {
        a =
        msg = { row: row, col: col };
        msg = JSON.stringify(msg);
    }
    else 
        msg = "none";
    
    response.send(msg);
    msg = -1;
});

app.all('/receive_white', function (request, response) {
    var msg1;
    row = -1;
    if (a != -1 ) {
        msg1 = { a: a, b: b };
        msg1 = JSON.stringify(msg1);
    }
    else 
        msg1 = "none";
    
    response.send(msg1);
    msg1=-1;
});

app.all('/cells_board', function (request, response) {
    // 서버 바둑돌 위치 받기
    cells = request.param('cells');

    //console.log(cells);

    response.send();
});

app.all('/black_full', function (request, response) {
    full = request.param('full');

    console.log("");
    console.log("---------------------");
    console.log("|                    |");
    console.log("|   Player1 Win!!!!  |");
    console.log("|                    |");
    console.log("---------------------");
    console.log("");
    response.send();
});

app.all('/white_full', function (request, response) {
    full = request.param('full');
    
    console.log("");
    console.log("---------------------");
    console.log("|                    |");
    console.log("|   Player2 Win!!!!  |");
    console.log("|                    |");
    console.log("---------------------");
    console.log("");
    response.send();
});

app.listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});