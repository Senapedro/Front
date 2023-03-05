async function getAdvice(){
    let resposta = await fetch("https://api.adviceslip.com/advice");
    //console.log(resposta);

    const data = await resposta.json();
    //console.log(data);

    document.querySelector("#advice").innerHTML = data.slip.advice;
}

//botão funcionando 
let botaAdvice = document.querySelector("#get-advice");

botaAdvice.addEventListener("click", function(){
    getAdvice();
});


