$(".upperHalf, .lowerHalf").hide();

// 問題一覧
const questions = [
    ["「ニンテンドーDS」発売", "2004"],
    ["「ドラえもん」の声優が一新","2005"],
    ["ソフトバンクがボーダフォンを買収","2006"],
    ["電子マネー「nanaco」開始","2007"],
    ["そばにいるね（青山テルマ）がヒット","2008"],
    ["1Q84（村上春樹）発売", "2009"],
    ["お・も・て・な・し", "2013"],
    ["STAP細胞はあります！", "2014"],
    ["国立競技場　ザハ案の廃止","2015"],
    ["PPAP（ピコ太郎）がブレイク","2016"],
    ["旅行会社「てるみくらぶ」が倒産","2017"],
    ["日大アメフト部の「危険タックル」","2018"],
    ["消費税が「10％」になる", "2019"],
    ["PlayStation5　発売", "2020"],
    ["うっせぇわ（Ado）発売", "2021"],
    ["三苫の1mm", "2022"],
    ["「猫ミーム」がちょっと流行る", "2023"],
];

// スタートボタンを押したとき
$(".startHalf").on("click", function () {
    $(".startHalf").hide();
    $(".upperHalf, .lowerHalf").show();
    const anotherQuestions = [...questions];
    // 上半分に問題を表示
    const randomIndex1 = Math.floor(Math.random() * anotherQuestions.length);
    const upperHalfQuestion = anotherQuestions.splice(randomIndex1,1)[0];
    $(".upperHalf").html(upperHalfQuestion[0]);
    // 下半分にも問題文を表示
    const randomIndex2 = Math.floor(Math.random() * anotherQuestions.length);
    const lowerHalfQuestion = anotherQuestions.splice(randomIndex2, 1)[0];
    $(".lowerHalf").html(lowerHalfQuestion[0]);
});

// タイトルロゴを押したら更新
$("header").on("click", function () {
    location.reload();
});