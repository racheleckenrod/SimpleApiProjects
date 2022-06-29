fetch("https://programming-quotes-api.herokuapp.com/Quotes/random")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector("h2").innerText = data.en
      document.querySelector("h3").innerText = "Author:" + data.author
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
