const btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quoteArray = [
  { quote: `"All that glitters is not gold."`, person: "William Shakespeare" },
  { quote:`"Ask not what your country can do for you; ask what you can do for your country."`, person: "John Kennedy" },
  { quote: `"If at first you don’t succeed, try, try again."`, person: "W. E. Hickson" },
  { quote: `"If you are going through hell, keep going."`, person: "Winston Churchill" },
  { quote: `"If you want something done right, do it yourself."`, person: "Charles-Guillaume Étienne" },
  { quote: `"If you want something said, ask a man; if you want something done, ask a woman."`, person: "Margaret Thatcher" },
  { quote: `"Three can keep a secret, if two of them are dead."`, person: "Benjamin Franklin" },
  { quote: `"To err is human; to forgive, divine."`, person: "Alexander Pope" },
  { quote: `"United we stand, divided we fall."`, person: "Aesop" },
  { quote: `"You must be the change you wish to see in the world."`, person: "Mahatma Gandhi" },
  { quote: `"Ask, and it shall be given you; seek, and you shall find."`, person: "The Bible" },
  { quote: `"Hell has no fury like a woman scorned."`, person: "William Congreve" },
];

btn.addEventListener('click', function(e) {
    let random = Math.floor(Math.random() * quoteArray.length);
    quote.innerText = quoteArray[random].quote;
    person.innerText = quoteArray[random].person;

})