function verificarNota() {
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);
    let nota4 = Number(document.getElementById("nota4").value);

    let total = nota1 + nota2 + nota3 + nota4

    if (total >= 7) {
        document.getElementById("resultado").innerText = "aprovado";
    } else {
         document.getElementById("resultado").innerText = "reprovado";
    }
}