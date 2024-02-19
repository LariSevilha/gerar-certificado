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
    }
};

console.log(nomeParticipante)