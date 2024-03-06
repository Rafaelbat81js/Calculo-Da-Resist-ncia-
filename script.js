function FazerCalculo(){
    let valueF01 = document.getElementById("faixa01").value;
    let valueF02 = document.getElementById("faixa02").value;
    let valuemulti = document.getElementById("multi").value;
    let valueto = document.getElementById("tole").value;
    let resultado = ((valueF01+valueF02)*valuemulti);
    let maisemenos = (resultado*valueto);
    let Cal1 = (resultado + maisemenos);
    let Cal2 = (resultado - maisemenos);
    document.getElementById("cal").value = (resultado);
    document.getElementById("tol").value = (Cal2+"-"+Cal1);


}