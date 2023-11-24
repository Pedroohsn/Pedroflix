
function mensagem(){
    alert("Olá Usuário");
}

let usuario = [
    { nome:"Duda", foto: "img/avatar1.png"}
    ,{ nome:"Pedro", foto: "img/avatar2.png"}
    ,{ nome:"Silas", foto: "img/avatar3.png"}
    
];
console.log()

let ul = document.querySelector('ul');

ul.innerHTML = '';

for(let i = 0;i < usuario.length; i++){
    ul.innerHTML += `<li>
                <a href="#">
                    <div class="profile">
                        <img src="${usuario[i].foto}" alt="Usuario 1" width="100px">
                        <span>${usuario[i].nome}</span>
                    </div>
                </a>
            </li>`;
}

    ul.innerHTML += `<li>
            <a href="#">
                <div class="profile">
                    <i class='bx bxs-plus-circle'></i>
                    <span>Adicionar perfil</span>
                </div>
            </a>
            </li>`