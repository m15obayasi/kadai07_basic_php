$(".upperHalf, .lowerHalf, .kekkaHalf, .form, .ranking").hide();

// 問題をここに格納
checkArray = [];

// 正解数
let answerCount = 0;

// 残り時間
let count = 60; 

// 問題一覧
const questions = [
    ["「ニンテンドーDS」発売", 2004],
    ["「ドラえもん」の声優が一新",2005],
    ["ソフトバンクがボーダフォンを買収",2006],
    ["電子マネー「nanaco」開始",2007],
    ["そばにいるね（青山テルマ）がヒット",2008],
    ["1Q84（村上春樹）発売", 2009],
    ["お・も・て・な・し", 2013],
    ["STAP細胞はあります！", 2014],
    ["国立競技場　ザハ案の廃止",2015],
    ["PPAP（ピコ太郎）がブレイク",2016],
    ["旅行会社「てるみくらぶ」が倒産",2017],
    ["日大アメフト部の「危険タックル」",2018],
    ["消費税が「10％」になる", 2019],
    ["PlayStation5　発売", 2020],
    ["うっせぇわ（Ado）発売", 2021],
    ["三苫の1mm", 2022],
    ["「猫ミーム」がちょっと流行る", 2023],
];

// スタートボタンを押したとき
$(".startHalf").on("click", function () {
    $(".startHalf, .rankHalf").hide();
    $(".upperHalf, .lowerHalf").show();
    gameStart();
    timerStart();
});

function gameStart() {
    const anotherQuestions = [...questions];
    // 上半分に問題を表示＋格納
    const randomIndex1 = Math.floor(Math.random() * anotherQuestions.length);
    const upperHalfQuestion = anotherQuestions.splice(randomIndex1,1)[0];
    $(".upperHalf").html(upperHalfQuestion[0]);
    checkArray.push(upperHalfQuestion[1]);
    // 下半分にも問題文を表示＋格納
    const randomIndex2 = Math.floor(Math.random() * anotherQuestions.length);
    const lowerHalfQuestion = anotherQuestions.splice(randomIndex2, 1)[0];
    $(".lowerHalf").html(lowerHalfQuestion[0]);
    checkArray.push(lowerHalfQuestion[1]);
    console.log(checkArray);  
};

// 回答時のアクション（上半分）
$(".upperHalf").on("click", function () {
    if (checkArray[0] < checkArray[1])
    {
        answerCount ++;
        $(".score").html(answerCount+"pt");
    } else {
        answerCount = 0;
        $(".score").html(answerCount + "pt");
    }
    checkArray = [];
    anotherQuestions = [];
    gameStart();
    console.log(answerCount);
});

// 回答時のアクション（下半分）
$(".lowerHalf").on("click", function () {
    if (checkArray[0] > checkArray[1]) {
        answerCount ++;
        $(".score").html(answerCount + "pt");
    } else {
        answerCount = 0;
        $(".score").html(answerCount + "pt");
    }
    checkArray = [];
    gameStart();
    console.log(answerCount);
});

// カウントダウン
function timerStart(){
    setInterval(function () {
        count--;
        $(".timer").html(count);
        if (count === 0) {
            $(".timer, .upperHalf, .lowerHalf, .score").hide();
            $(".kekkaHalf, .form").show();
            $(".kekkaHalf").html("連続正答数は……" + "<br>" + answerCount + "問です！")
        }
    }, 1000);
};

// 名前を入力
$(".text").keydown(function (e) {
    if (e.keyCode == 13) { 
        scorePush();
    };
});

// スコア登録
function scorePush() {
    $(".myScore").val(answerCount);
    $(".form").submit();
}

// スコアを表示
$(".rankHalf").on("click", function () {
    $(".ranking").show();
});