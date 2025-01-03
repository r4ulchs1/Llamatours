let names=[];
nombreDeptos();
function nombreDeptos(){
    const deptos= document.querySelectorAll('svg path');
    deptos.forEach(path=>{
        names.push(path.id);
    });
    console.log(names);  
}

borrar();
const entrada=document.querySelector("#buscador");
entrada.addEventListener("input",textoEntrada);

function textoEntrada(){
    borrar();
    const res=entrada.value.toLowerCase();
    const resultadoBusqueda=[];

    names.forEach((depto)=>{
        if(depto.substr(0, res.length).toLowerCase()=== res)
        resultadoBusqueda.push(depto);
    })
        const divv=document.createElement("div");
        divv.id='resultados';
        document.querySelector('#buscardiv-contenido').appendChild(divv);
        suggestions(resultadoBusqueda);
}

function suggestions(list){
    const listsug=document.createElement("ul");
    listsug.id="dropdown";
    document.querySelector('#resultados').appendChild(listsug);
    list.forEach((deptos)=>{
        const redireccion=document.createElement("a");
        redireccion.href=`#contenido-${deptos.toLowerCase()}`;
        redireccion.className='enlace';
        listsug.appendChild(redireccion);
        const lis=document.createElement("li");
        lis.innerHTML=deptos;
        redireccion.appendChild(lis);
    })
}

function borrar(){
    const lista=document.querySelector('#dropdown');
    const divv=document.querySelector('#resultados');
    if(lista) lista.remove();
    if(divv) divv.remove();
}