/*const button = document.getElementById('click')
button.addEventListener('click', function(){
   console.log('hello haritha');
})
*/
const button = document.getElementById('click')
button.addEventListener('click', async function(){
   //sending req from the client
   const respObj = await fetch('/get-data')
   //console.log(respObj)
   //response object -> json data
   const data = await respObj.json()
   console.log(data)
})