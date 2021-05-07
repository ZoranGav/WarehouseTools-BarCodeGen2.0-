window.addEventListener('load', () => {
    var params = (new URL(document.location)).searchParams;

    /*This .js file and web page are disabled*/

    /* Parametars from lpn.html*/
    const lpnnumber = params.get('lpnnumber');
    const container = document.getElementById("container");

    if ("last" in localStorage) {
        numberOfLotCodes(lpnnumber);
    }
    else {
        localStorage.setItem('last', 10000001);
        numberOfLotCodes(lpnnumber);
    }

    /* Formating LPNs */
    function myLpn(a) {
        let myString = '90000000';
        let myString2 = myString.slice(0, -a.length) + a;
        return myString2;

    }

    /* Generating LPNs */
    function numberOfLotCodes(lpnFromUser) {
        let lpn = localStorage.getItem('last');
        for (let i = 0; i < lpnFromUser; i++) {
            lpn++;
            var ba = 'BA' + (lpn - 1);
            console.log(ba);
            container.innerHTML += `<svg id = ${ba} ></svg>`;
            var ba = JsBarcode(`#${ba}`, ba, { format: "CODE128A", width: 3, height: 150 });
        }
        localStorage.removeItem('last');
        localStorage.setItem('last', lpn);
        console.log(lpn);
    }






})