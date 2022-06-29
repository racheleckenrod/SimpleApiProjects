

    
      
fetch('https://api.artic.edu/api/v1/artworks')

  .then(res => res.json()) // parse response as JSON
  .then(resData => {
      for (let i = 0; i < resData.data.length; i++){ 
          const imageId = resData.data[i].image_id;
          const artTitle = resData.data[i].title
          const artistTitle = resData.data[i].artist_display
          const config = resData.config.iiif_url;
          const imgPath = `/full/843,/0/default.jpg`;
          const imgSrc = `${config}/${imageId}${imgPath}`;
          const markup = `
            <div>
              <img src="${imgSrc}" alt="artwork">
              <h1>${artistTitle}</h1>
              <h2>${artTitle}</h2>
            </div>
          `
        
          document.querySelector('.container').insertAdjacentHTML('beforeend', markup);
        }
      // for(let i = 0; i < resData.data.length; i++){
      // let imageId = resData.data[i].image_id
      // let config = resData.config.iiif_url
      // let imgPath = `/full/843,/0/default.jpg`
      // console.log(resData.data.imageId)
    console.log(resData.data)
    console.log(resData)
    console.log(resData.config.iiif_url)
  //   console.log(imageId)
  //   console.log(config)
  //   console.log(resData.data.config.iiif_url)
  //   document.querySelector('img').src = `${config}/${imageId}${imgPath}`
  //     document.querySelector('#artist').innerText = resData.data[i].artist_display
  //     document.querySelector('#artwork').innerText = resData.data[i].title
  // }
  })
  .catch(err => {
      console.log(`error ${err}`)
  });
    //   }

    //   console.log(getFetch())