//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getMedia)

function getMedia(){


let date = document.querySelector('input').value
console.log(date)

fetch(`https://api.nasa.gov/planetary/apod?api_key=a15X7XQ95d6hctNGZpFJnIcitMJvF6a53dtDt32D&date=${date}`)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        console.log(data.hdurl)
        if(data.media_type == 'image'){
            document.querySelector('img').src = data.hdurl
        }else{
            document.querySelector('iframe').src = data.url
        }
        
        document.querySelector('h3').innerText = data.explanation
        document.querySelector('h2').innerText = data.title
    })

}