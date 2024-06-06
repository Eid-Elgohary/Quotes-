

var arrayOfQuotes = [{
   'author': 'Mae West',
   'quote': 'You only live once, but if you do it right, once is enough.'
},
{
   'author': 'J.K. Rowling',
   'quote': 'If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals.'
},
{
   'author': 'Mark Twain',
   'quote': 'If you tell the truth, you don\'t have to remember anything.'
},
{
   'author': 'Wayne Gretzy',
   'quote': 'You miss 100% of the shots you don\'t take.'
},
{
   'author': ' Maya Angelou',
   'quote': 'I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.'
},
{
   'author': 'Elbert Hubbard',
   'quote': 'A friend is someone who knows all about you and still loves you.'
},
{
   'author': 'Oscar Wilde',
   'quote': 'I am so clever that sometimes I don\'t understand a single word of what I am saying.'
},
{
   'author': 'Andre Gide',
   'quote': 'It is better to be hated for what you are than to be loved for what you are not.'
},
];

var temp = 0 ;
function generateQuote() {

var random = Number.parseInt(Math.random() * arrayOfQuotes.length );
console.log(random);


if(random != temp){

   document.getElementById('quote').textContent = `\"${arrayOfQuotes[random].quote}\"`;

   document.getElementById('author').textContent = `--${arrayOfQuotes[random].author}`;

}else{
   generateQuote();
}

temp = random ;
console.log(temp)


}