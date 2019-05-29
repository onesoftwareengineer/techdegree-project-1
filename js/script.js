/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
let quotes = [
  {
    quote: 'I believe that we in the medical profession have taken the wrong course. It is as if we were simply standing by, watching millions of people march over a cliff, and then intervening in a desperate, last-minute attempt to save them once they have fallen over the edge. Instead, we should be teaching them how to avoid the chasm entirely, how to walk parallel to the precipice so that they will never fall at all. I believe that coronary artery disease is preventable, and that even after it is under way, its progress can be stopped, its insidious effects reversed. I believe, and my work over the past twenty years has demonstrated, that all this can be accomplished without expensive mechanical intervention and with minimal use of drugs. The key lies in nutrition—specifically, in abandoning the toxic American diet and maintaining cholesterol levels well below those historically recommended by health policy experts.', 
    source: 'Dr. Caldwell Esselstyn',
    citation: 'Prevent and Reverse Heart Disease, ch. 1.',
    year: '2007',
    category: 'nutrition',
    link: 'https://www.dresselstyn.com/site/faq/'
  },
  {
    quote: 'Of all the animals on the planet, people are the only creatures who routinely consume the milk products of other species. What has been assumed to be a beneficial practice is, in fact, more than merely questionable. The scientific evidence suggests that the consequences of this practice are devastating. It appears likely that no other component in the modern diet causes more pain and suffering, including premature death and disability, than dairy products.', 
    source: 'Dr. Alan Goldhamer',
    citation: 'No Body Needs Milk',
    year: '2010',
    category: 'nutrition',
    link: 'https://nutritionstudies.org/no-body-needs-milk/'
  },
  {
    quote: 'Fasting is, without any doubt, the most effective biological method of treatment. It is the operation without surgery.', 
    source: 'Otto Buchinger',
    citation: 'Das Heilfasten und seine Hilfsmethoden',
    year: '1935',
    category: 'fasting',
    link: 'https://quotes.yourdictionary.com/author/quote/549202'
  },
  {
    quote: 'Fasting is the greatest remedy - the physician within.', 
    source: 'Philippus Paracelsus',
    category: 'fasting',
    link: 'https://www.allaboutfasting.com/fasting-quotes.html'
  },
  {
    quote: 'Nature heals, the doctor helps!', 
    source: 'Philippus Paracelsus',
    category: 'health',
    link: 'https://www.allaboutfasting.com/fasting-quotes.html'
  },
  {
    quote: 'Let food be thy medicine and medicine be thy food.', 
    source: 'Hippocrates',
    category: 'health',
    link: 'https://en.wikipedia.org/wiki/Hippocrates'
  },
];

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote() {
  let randomNumber = Math.random();
  return quotes[Math.floor(randomNumber*quotes.length)];
}

//function that returns a random nice color from a pre-defined hex color array
function getRandomNiceColor () {
  let niceColors = ['#9de19a','#a4c5ea','#bca9e1','#e7eca3','#98a7f2'];
  let randomColor = Math.floor(Math.random()*niceColors.length);
  return niceColors[randomColor];
}

/***
  printQuote function prints a random quote to the quote-box id div
  it uses the getRandomQuote function to receive a random quote object
***/
function printQuote () {
  let object = getRandomQuote();
  let htmlToPrint = '';

  //  all quotes have quote and source property
  htmlToPrint += '<p class="quote">' + object.quote + '</p>';
  htmlToPrint += '<p class="source">' + object.source;
  
  // some quotes may have category, citation, year and link
  // the if verifies if properties are != of null '' or undefined
  if(object.category) htmlToPrint += '<span class="category"> on ' + object.category + '</span>';
  if(object.citation) htmlToPrint += '<span class="citation"> ' + object.citation + '</span>';
  if(object.year) htmlToPrint += '<span class="year"> ' + object.year + '</span>';
  if(object.link) htmlToPrint += ' <sup><a href="' + object.link + '">more details</a></sup>';
  htmlToPrint += '</p>';
  document.getElementById('quote-box').innerHTML = htmlToPrint;
  
  //updates background color using getRandomNiceColor function
  document.body.style.backgroundColor = getRandomNiceColor();
}


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.