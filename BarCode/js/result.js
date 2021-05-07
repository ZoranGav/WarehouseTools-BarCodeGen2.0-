window.addEventListener('load', () => {

    /* Parametars from index.html using GET */
    const params = (new URL(document.location)).searchParams;
    const lotcode = params.get('lotcode');
    const productiondate = params.get('productiondate');
    const expirationdate = params.get('expdate');
    const shiftid = params.get('shiftid');
    const weight = params.get('weight');
    const lotMask = '500000000000';


    /*Final variables from parameters */
    var finExp = refractDate(expirationdate);
    var finDate = refractDate(productiondate);
    var finWeight = refractWeight(weight);

    var finalLotCode = `11${finDate}10${myLot(lotcode)}${shiftid}`;
    var finalExpirationDateCode = `3102000${finWeight}17${finExp}`;

    JsBarcode("#lot-code", finalLotCode, { width: 1, format: "CODE128A" });
    JsBarcode("#expiration-date", finalExpirationDateCode, { width: 1, format: "CODE128A" });



    /* Formating date mm/dd/yyyy => yymmdd  */
    function refractDate(a) {
        return a.replaceAll("-", "").substr(2);
    };

    /* Formating weight 1.23 => 123 */
    function refractWeight(a) {
        return a.replaceAll(".", "");
    }
    /* Formating lotcode */
    function myLot(a) {
        return lotMask.slice(0, -a.length) + a;

    }

})
