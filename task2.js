let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    '"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.” – Winston Churchill', 
    '“Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers',
    '“You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.” – Unknown',
    '“It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.” – Inspirational Quote By Vince Lombardi',
    '“The purpose of our lives is to be happy.”', '“Uhaan dalai nomoos ihtei uujim dalai bulgaas ihtei.”', '“Nar garnaa zolboo.”', 
    '“The purpose of our lives is to be happy.”', '“2022.03.22.”', '“11.46am.”', 
];

btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})