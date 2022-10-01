
  const html= document.querySelector("html")
  const form = document.getElementById('sheetdb-form')
  const msg = document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(form.action, { 
      method: 'POST',
      body: new FormData(document.getElementById("sheetdb-form"))})
      .then(response =>{
          msg.innerHTML = 'Message sent successfully'
          setTimeout(()=>{
            msg.innerHTML = ""
          },5000)
          form.reset()
          return response.json()
      })
      .then((html)=>{
        window.open('F:\Desktop\Personal-porfolio\index.html',)
      })
      .catch(error => console.error('Error!', error.message))
  })