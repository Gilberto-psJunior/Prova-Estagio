function inverterString(s) {
    let stringInvertida = "";
    for (let i = 0; i < s.length; i++) {
        stringInvertida = s[i] + stringInvertida;
    }
    return stringInvertida;
}



console.log(`String invertida: ${inverterString("passei no estágio")}`); // predefinido a minha preferencia xD
