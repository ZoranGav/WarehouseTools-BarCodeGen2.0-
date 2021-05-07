window.addEventListener('load', () => {
    var params = (new URL(document.location)).searchParams;


    /* Parametars from lpnLCBO.html*/
    var lpnnumber = params.get('lpnnumber');
    var lpnFrom = params.get('lpnfrom');
    var container = document.getElementById("container");

    /* Formating LPNs */
    function myLpn(a) {
        let myString = '90000000';
        let myString2 = myString.slice(0, -a.length) + a;
        return myString2;

    }

    /* Generating LPNs */
    function numberOfLotCodes(lpnFromUser, lpnFrom) {
        let lpn = myLpn(lpnFrom);

        for (let i = 0; i < lpnFromUser; i++) {
            lpn++;
            var lpnPrefix = 'BA' + (lpn - 1);
            console.log(lpnPrefix);
            container.innerHTML += `<svg id = ${lpnPrefix} ></svg>`;
            var ba = JsBarcode(`#${lpnPrefix}`, lpnPrefix, { format: "CODE128A", width: 3, height: 150 });
        }
    }

    if (lpnFrom != 0) {

        numberOfLotCodes(lpnnumber, lpnFrom);
        console.log(lpnFrom);

    }



})