function notas(){
    let nome = document.getElementById('nome').value

    let nota1 = Number(document.getElementById('primeiraNota').value)
    let nota2 = Number(document.getElementById('segundaNota').value)
    let nota3 = Number(document.getElementById('terceiraNota').value)

    media = (nota1+nota2+nota3)/3;
    if(media >= 6){
        document.getElementById('valor').innerHTML = `${nome}, sua média foi ${+ media}, você foi Aprovado!`
    }
    else
    document.getElementById('valor').innerHTML = `${nome}, sua média foi ${+ media}, você foi reprovado!`


}