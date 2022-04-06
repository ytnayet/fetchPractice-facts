showFact=()=>{
    let displayFact = document.querySelector(".display-facts")
    let url = "https://api.chucknorris.io/jokes/random";
    
    
fetch(url) 
    .then(response =>{
      return response.json()
    })
    .then(responseData => {
        // console.log("response", responseData)
        displayFact.innerHTML = responseData.value;
    })
}
    