


// let card = fetch('https://indiealchemy.com/apis/plateautarot/')
// .then(res => res.json())
// .then(data2 =>{
//     console.log(data2)
//     console.log(data2.cards[0].name)
//     document.querySelector('img').src = data2.cards[0].imageURL
//     console.log(card)
//     return data2.cards[0].name
    
    
// })

// console.log(card)
// card.then(card => {

//     fetch('https://rws-cards-api.herokuapp.com/api/v1/cards')
//     .then(res => res.json())
//     .then(data =>{
//     console.log(data)
//     console.log(data.cards[0].name)
//     data.find((item => item.name = card ))
//     let match = item
//     console.log(item)

//     document.querySelector('h1').innerText = data.cards[0].name
//     document.querySelector('h3').innerText = data.cards[0].desc
//     document.querySelector('.upright').innerText += "  " + data.cards[0].meaning_up
//     document.querySelector('.reversed').innerText += "   " + data.cards[0].meaning_rev
// })

// })
// const card2 = fetch("https://indiealchemy.com/apis/plateautarot/")
// public key from The Game Crafter: 658C01B6-E32A-11EC-B001-46E7D356B98B
// private key from the game crafter: Hu5Smr706/fwurSXgzFDLPA1f1FCl50oEFVq

// const cards = fetch("https://tarot-yn.herokuapp.com/cards")


const card = fetch("https://tarot-yn.herokuapp.com/cards")
  .then((res) => res.json())
  .then((data2) => {
      console.log(data2)
    document.querySelector("img").src = data2.cartas[0].url;
    return data2.cards[0].name;
  });


  fetch("https://rws-cards-api.herokuapp.com/api/v1/cards")
    .then((res) => res.json())
    .then((data)=> {
      console.log(data)
    })
// card.then((card) => {
//   fetch("https://rws-cards-api.herokuapp.com/api/v1/cards")
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data)
//         const matched = data.cards.find((item) => item.name === card);

//         document.querySelector("h1").innerText = matched.name;
//         document.querySelector("h3").innerText = matched.desc;
//         document.querySelector(".upright").innerText += "  " + matched.meaning_up;
//         document.querySelector(".reversed").innerText +=
//             "   " + matched.meaning_rev;
//     });
// });

function reversedOrNot(){
    let orient = Math.random() * 10
    console.log(orient)
    if(orient < 5){
        document.querySelector('img').classList.toggle('orientation')
    }
}
reversedOrNot()