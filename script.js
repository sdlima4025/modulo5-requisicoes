// CallBack é uma função
function clickCalback() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        return response.json();
    })
    .then((json)=> {
        alert(`Alert 1 Titulo do post: ${json[0].title}`);
    })
    // tratando erro com catch
    .catch(()=> {
        alert("Erro de calback!");
       
    })
    // .finally(()=> {
    //     alert("OPA, Calback finalizada!");
    // })
    // alert("Alert 2 função executa antes da promise!");

};

document.querySelector('#botao')
.addEventListener('click', clickCalback);

