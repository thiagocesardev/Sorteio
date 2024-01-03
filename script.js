function generateNumber() {
    const min = Math.ceil(document.querySelector (".input-entre").value)
    const max = Math.floor(document.querySelector (".input-de").value)

    const result = Math.floor(Math.random() * (max - min + 1) + min);

        alert (result)
 
        const resultP = document.querySelector (".result-text")
        resultP.textContent = `O Número sorteado é: ${result}`;

}