
const fetchQuestion = () => {
    // Fetch a question from thehttps://the-trivia-api.com/api/questions?limit=5 API
    let result;
let res= fetch('https://the-trivia-api.com/api/questions?limit=5')
.then(response => response.json())
.then((data) => { 

return data;

 
})
.catch(err => console.log(err))

return res

}






export { fetchQuestion };


