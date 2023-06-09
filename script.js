// CallBack é uma função
//GET|POST|PUT|DELETE
async function clickCalback() {

    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();
    alert(`Alert 1 Titulo do post: ${json[0].title}`);


    // Requisição na forma sincrona
    // .then((response) => {
    //     console.log(`Status: ${response.status}`);
    //     return response.json();
    // })
    // .then((json)=> {
    //     alert(`Alert 1 Titulo do post: ${json[0].title}`);
    // })
    // // tratando erro com catch
    // .catch(()=> {
    //     alert("Erro de calback!");
       
    // })

    alert("Clicou!");
    // .finally(()=> {
    //     alert("OPA, Calback finalizada!");
    // })
    // alert("Alert 2 função executa antes da promise!");

};
// Enviando dados via Methodo POST
async function inserir() {
   let response = await fetch('https://jsonplaceholder.typicode.com/posts',
    {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Título de teste',
            body: 'Methodo POST',
            userId: 2
        })
    });

    let json = await response.json();
        console.log(json);

// .then((response)=> {
//     return response.json();
// })
// .then((json)=> {
//     console.log(json);
// })
}
document.querySelector('#inserir')
.addEventListener('click', inserir);

document.querySelector('#botao')
.addEventListener('click', clickCalback);

