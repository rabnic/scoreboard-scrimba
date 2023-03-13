// Get elements references
let homeScore = document.getElementById("score-home");
let awayScore = document.getElementById("score-away");
let homePlus1 = document.getElementById("plus-1-home");
let homePlus2 = document.getElementById("plus-2-home");
let homePlus3 = document.getElementById("plus-3-home");
let awayPlus1 = document.getElementById("plus-1-away");
let awayPlus2 = document.getElementById("plus-2-away");
let awayPlus3 = document.getElementById("plus-3-away");

// Change score color based on score progress -- leader=green, loser=red, draw=all red
function scoreColorUpdate() {
    let winning = "#10B981" // Greenish
    let losing = "#F94F6D" // Redish
    let home = parseInt(homeScore.textContent);
    let away = parseInt(awayScore.textContent);
    
    if (home > away) {
        homeScore.style.color = winning;
        awayScore.style.color = losing;
    } else if ( away > home) {
        homeScore.style.color = losing;
        awayScore.style.color = winning;
    } else {
        homeScore.style.color = losing;
        awayScore.style.color = losing;
    }
}
// ----------------------- Home Team
// Add home score by 1
homePlus1.addEventListener("click",() => {
    homeScore.textContent = parseInt(homeScore.textContent) + 1;
    scoreColorUpdate();
});
// Add home score by 2
homePlus2.addEventListener("click",() => {
    homeScore.textContent = parseInt(homeScore.textContent) + 2;
    scoreColorUpdate();
});
// Add home score by 3
homePlus3.addEventListener("click",() => {
    homeScore.textContent = parseInt(homeScore.textContent) + 3;
    scoreColorUpdate();
});

// ----------------------- Away Team
// Add home score by 1
awayPlus1.addEventListener("click",() => {
    awayScore.textContent = parseInt(awayScore.textContent) + 1;
    scoreColorUpdate();
});
// Add home score by 2
awayPlus2.addEventListener("click",() => {
    awayScore.textContent = parseInt(awayScore.textContent) + 2;
    scoreColorUpdate();
});
// Add home score by 3
awayPlus3.addEventListener("click",() => {
    awayScore.textContent = parseInt(awayScore.textContent) + 3;
    scoreColorUpdate();
});