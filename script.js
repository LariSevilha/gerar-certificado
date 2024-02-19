window.onload = function(){

    var btnPrint = document.getElementById("btnPrint");
    btnPrint.onclick = function(){
        print();
    };

   

}
window.onload = function() {
    var btnGerarCertificado = document.getElementById("btnGerarCertificado");
    
    btnGerarCertificado.onclick = function() {
        var nomeParticipante = document.getElementById("inputNome").value;
        var tituloCurso = document.getElementById("inputNomeCurso").value;
        var nomeMinistrante = document.getElementById("inputMinistrante").value;
        var dataCurso = document.getElementById("inputDataCurso").value;
        var cargaHoraria = document.getElementById("inputCargaHoraria").value;

        var dataFormatada = moment(dataCurso).format('DD/MM/YYYY');
      
        document.getElementById("nomeParticipante").textContent = nomeParticipante;
        document.getElementById("tituloCurso").textContent = tituloCurso;
        document.getElementById("nomeMinistrante").textContent = nomeMinistrante;
        document.getElementById("dataCurso").textContent = dataFormatada;
        document.getElementById("cargaHoraria").textContent = cargaHoraria;

        ClearInput();
    };
};

function ClearInput() {
    document.getElementById("inputNome").value = "";
    document.getElementById("inputNomeCurso").value = "";
    document.getElementById("inputMinistrante").value = "";
    document.getElementById("inputDataCurso").value = "";
    document.getElementById("inputCargaHoraria").value = "";
}