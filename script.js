let div = document.createElement("div");
document.body.append(div);
div.className = "container";
div.innerHTML = `<div id="circle" class="d-flex justify-content-center"><div id="content" class="d-flex justify-content-center align-items-center"></div></div>`;
let cont = document.getElementById("content");
setTimeout(() => {
  cont.innerText = "10";
  setTimeout(() => {
    cont.innerText = "9";
    setTimeout(() => {
      cont.innerText = "8";
      setTimeout(() => {
        cont.innerText = "7";
        setTimeout(() => {
          cont.innerText = "6";
          setTimeout(() => {
            cont.innerText = "5";
            setTimeout(() => {
              cont.innerText = "4";
              setTimeout(() => {
                cont.innerText = "3";
                setTimeout(() => {
                  cont.innerText = "2";
                  setTimeout(() => {
                    cont.innerText = "1";
                    setTimeout(() => {
                      cont.innerText = "0";
                      setTimeout(() => {
                        document.getElementById(
                          "circle"
                        ).innerHTML = `<h1>Happy independence day!!!</h1>`;
                      }, 200);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000),
            1000;
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
