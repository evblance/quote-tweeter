
var quotes = [
  {
    "id": 0,
    "quote": "We know what we are, but know not what we may be.",
    "author": "William Shakespeare"
  },
  {
    "id": 1,
    "quote": "You can't blame gravity for falling in love.",
    "author": "Albert Einstein"
  },
  {
    "id": 2,
    "quote": "Don't cry because it's over. Smile because it happened.",
    "author": "Dr. Seuss"
  },
  {
    "id": 3,
    "quote": "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    "author": "Buddha"
  },
  {
    "id": 4,
    "quote": "The secret of getting ahead is getting started.",
    "author": "Mark Twain"
  },
  {
    "id": 5,
    "quote": "Success consists of going from failure to failure without loss of enthusiasm.",
    "author": "Winston Churchill"
  },
  {
    "id": 6,
    "quote": "Faith is taking the first step even when you don't see the whole staircase.",
    "author": "Martin Luther King, Jr."
  },
  {
    "id": 7,
    "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "author": "Mahatma Ghandi"
  },
  {
    "id": 8,
    "quote": "Life is really simple, but we insist on making it complicated.",
    "author": "Confucious"
  },
  {
    "id": 9,
    "quote": "You cannot escape the responsibility of tomorrow by evading it today.",
    "author": "Abraham Lincoln"
  },
  {
    "id": 10,
    "quote": "Let us always meet each other with a smile, for the smile is the beginning of love.",
    "author": "Mother Theresa"
  },
  {
    "id": 11,
    "quote": "Education is the most powerful weapon which you can use to change the world.",
    "author": "Nelson Mandela"
  },
  {
    "id": 12,
    "quote": "We may encounter many defeats but we must not be defeated.",
    "author": "Maya Angelou"
  },
  {
    "id": 13,
    "quote": "Being entirely honest with oneself is a good exercise.",
    "author": "Sigmund Freud"
  },
  {
    "id": 14,
    "quote": "Art is the most intense mode of individualism that the world has known.",
    "author": "Oscar Wilde"
  },
  {
    "id": 15,
    "quote": "Whoever fights monsters should see to it that in the process he does not become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you.",
    "author": "Friedrich Nietzsche"
  },
  {
    "id": 16,
    "quote": "The roots of education are bitter, but the fruit is sweet.",
    "author": "Aristotle"
  },
  {
    "id": 17,
    "quote": "Never go on trips with anyone you do not love.",
    "author": "Ernest Hemingway"
  },
  {
    "id": 18,
    "quote": "Music doesn't lie. If there is something to be changed in this world, then it can only happen through music.",
    "author": "Jimi Hendrix"
  },
  {
    "id": 19,
    "quote": "Nothing can stop the man with the right mental attitude from achieving his goal; nothing on earth can help the man with the wrong mental attitude.",
    "author": "Thomas Jefferson"
  }
];

(function($) {

  'use strict';

  var $quote = $('.quote');
  var $author = $('.author');
  var $quoteButton = $('.btn-quote');
  var $tweetButton = $('.btn-tweet');
  var $tweetLink = $tweetButton.find('a');

  // handle clicks on quote button
  $quoteButton.on('click', function () {

    $quote.html('')
    $author.html('');
    $quote.hide();
    $author.hide();

    // show a random quote
    var quoteID = Math.floor((Math.random() * 20));
    var quotesNum = quotes.length;
    for (var i = 0; i < quotesNum; i++) {
      if (quotes[i].id === quoteID) {
        $quote.html(quoteID);
        $quote.html('<p class="quote">\"' + quotes[i].quote + '\"</p>');
        $author.html('<p class="author">' + ' - ' + quotes[i].author + '</p>');
        $author.fadeIn(800);
        $quote.fadeIn(800);
        break;
      }
    }

  });

  // handle clicks on tweet button
  $tweetButton.on('click', function (event) {

    // retrieve the currently displayed quote
    var theQuote = $quote.text();
    // do not allow user to tweet before having generated a first quote
    if ( theQuote == "HIT THE BUTTON TO GENERATE A QUOTE!" ) {
      window.alert("You might want to generate a quote first! :)");
      event.preventDefault();
      return;
    }

    // Prepare the quote for tweeting
    var sanitizedQuote = theQuote + "%0A" + $author.text();

    // Use Twitter API call to request a tweet of the chosen quote
    var tweetStringHref = "https://twitter.com/intent/tweet?text=" + sanitizedQuote;
    $tweetLink.attr('href', tweetStringHref);

  });

})(jQuery);
