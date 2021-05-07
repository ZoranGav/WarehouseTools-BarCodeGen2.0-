window.addEventListener('load', () => {
    var params = (new URL(document.location)).searchParams;


    /* Parametars from lpnLCBO.html*/
    const lpnnumber = params.get('lpnnumber');
    const lpnFrom = params.get('lpnfrom');
    const container = document.getElementById("container");
    const lpnMask = '90000000';


    if (lpnFrom != 0) {

        numberOfLotCodes(lpnnumber, lpnFrom);
        console.log(lpnFrom);

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

    /* Formating LPNs */
    function myLpn(a) {
        return lpnMask.slice(0, -a.length) + a;
    }




})