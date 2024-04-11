//Strenger for utskrift av bilett
let utMeldingFornavn = "";
let utMeldingEtternavn = "";
let utMeldingEpost = "";
let utMeldingNummer = "";

    function inputValidering (){

    $("#fornavnValideringsmelding").html("");
    $("#etternavnValideringsmelding").html("");
    $("#epostValideringsmelding").html("");
    $("#nummerValideringsmelding").html("");

    //variabler for input og regex setninger som skal brukes til validering
    let fornavnInput = $('#fornavn').val();
    let etternavnInput = $('#etternavn').val();
    let epostInput = $('#epost').val();
    let nummerInput = $('#nummer').val();

    const regexNavn = /^[a-zA-Z]+$/;
    const regexEpost = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    const regexNummer = /^((0047)?|(\+47)?)[4|9]\d{7}$/

    if (regexNavn.test(fornavnInput)) {
        utMeldingFornavn = document.getElementById('fornavn').value;
    } else {
        utMeldingFornavn = "feil";
        document.getElementById("fornavnValideringsmelding").innerHTML = "skriv inn et fornavn!";
    }

    if (regexNavn.test(etternavnInput)) {
        utMeldingEtternavn = document.getElementById('etternavn').value;
    } else {
        utMeldingEtternavn = "feil";
        document.getElementById("etternavnValideringsmelding").innerHTML = "skriv inn et etternavn!";
    }

    if (regexEpost.test(epostInput)) {
        utMeldingEpost = document.getElementById("epost").value;
    } else {
        utMeldingEpost = 'feil';
        document.getElementById("epostValideringsmelding").innerHTML = "skriv inn en gyldig epost adresse!"
    }

    if (regexNummer.test(nummerInput)) {
        utMeldingNummer = $("#nummer").val();
    } else {
        utMeldingNummer = "feil";
        document.getElementById("nummerValideringsmelding").innerHTML = "skriv inn et telefonnummer!"
    }
}

    function opprettBilett() {

    //variabler i bilett objekt blir opprettet med en verdi
    const bilett = {
        //kode for select isteden for radioknapper
        // film: document.getElementById("velgFilm").value,
        //variabler uten input validering
        film: $('input[name=velg-film]:checked').val(),
        antall: $("#antallPersoner").val(),
        //variabler med input validering
        fornavn: utMeldingFornavn,
        etternavn: utMeldingEtternavn,
        epost: utMeldingEpost,
        nummer: utMeldingNummer
    };
    //bilett blir pushet inn i array hvis alle valideringene har blitt godkjent
    if (utMeldingFornavn !== "feil" && utMeldingEtternavn !== "feil" && utMeldingEpost !== "feil" && utMeldingNummer !== "feil") {
        $.post("/lagre", bilett, function () {
            hentAlle();
        });
    }

    $("#film").val("");
    $("#antall").val("");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#epost").val("");
    $("#nummer").val("");

    //her resetter jeg input boksene ved hjelp av getElementsByName
    let inputBokser = document.getElementsByName('input');
    for (let i = 0; i < inputBokser.length; i++) {
        inputBokser[i].value = '';
    }
    //kode for select isteden for radioknapper
    // //select-en min for film blir resatt til default value/ første value, altså "velg Film"
    // document.getElementById("velgFilm").value = '';
}

    function hentAlle(){
        $.get("/hentAlle", function (data) {
            formaterData(data);
        });
    }

    function formaterData(biletter){
        let ut = "<table><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Epost</th><th>Nummer</th></tr>";
        for (const x of biletter){
            ut+="<tr><td>"+x.film+"</td><td>"+x.antall+"</td><td>"+x.fornavn+"</td><td>"+x.etternavn+"</td><td>"+x.epost+"</td><td>"+x.nummer+"</td></tr>";
        }
        ut+="</table>";
        $("#output").html(ut);
    }

    function slettBiletter() {
    $.get("/slettAlle", function (){
        hentAlle()
    })
    //div-en med id = output blir rensket for tekst
    document.getElementById('output').innerHTML = '';
    //Sletter valideringsfeilmeldinger
    document.getElementById("fornavnValideringsmelding").innerHTML = "";
    document.getElementById("etternavnValideringsmelding").innerHTML = "";
    document.getElementById("epostValideringsmelding").innerHTML = "";
    document.getElementById("nummerValideringsmelding").innerHTML = "";


}