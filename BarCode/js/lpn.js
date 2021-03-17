window.addEventListener('load', () => {
    /* Parametars from lpn.html using GET */
        const params = (new URL(document.location)).searchParams;
        const lpnnumber = params.get('lpnnumber');
        
        var container = document.getElementById("container");
    
        localStorage.setItem('last', text);
        let lpn = localStorage.getItem('last');
    
    
    for (let i = 0; i < lpnnumber; i++) {
            lpn++;
            var ba = 'BA' + (lpn - 1);
            console.log(ba); 
            container.innerHTML += `<svg id = ${ba} ></svg>`;
            var ba = JsBarcode(`#${ba}`, ba, {format: "CODE128A"});
        }
       localStorage.removeItem('last');
       localStorage.setItem('last', lpn);
       var lpn2 = localStorage.getItem('last');
        console.log(lpn);




        

    })