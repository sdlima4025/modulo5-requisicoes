// CallBack é uma função
function clickCalback() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        return response.json();
    })
    .then((json)=> {
        alert(`Titulo do post: ${json[0].title}`);
    })

};

document.querySelector('#botao')
.addEventListener('click', clickCalback);

