// tady je místo pro náš program
let jmeno = prompt('Jaké je tvoje jméno?')

let prijmeni = prompt('Jaké je tvoje příjmení?')

let rokNarozeni = prompt ('Zadej rok svého narození.')
    let datum = new Date();
    let aktualniRok = datum.getFullYear();
    let vek = aktualniRok - rokNarozeni;

let barva = prompt('Jaká je tvoje oblíbená barva? (Prosím, uveď ji v angličtině.)')
function zmenaBarvy () {
    let vystupProgramu = document.querySelector('.vystupProgramu')
    vystupProgramu.style.color = barva;
}

document.body.innerHTML = jmeno + ' ' + prijmeni + ' ' + vek + ' ' + 'let'
    



