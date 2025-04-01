window.onload = function() {
    let area = document.getElementById("area");
    let ctx = area.getContext("2d");
    
    document.addEventListener("keydown", keyPush);
    setInterval(game,100);
    
    let velx = 0, vely = 0;
    let headx = 10, heady = 15;
    let applex = 15, appley = 15;
    
    function game() {
      headx += velx;
      heady += vely;
      
      if (headx < 0) {headx = 19;}
      if (headx > 19) {headx = 0;}
      if (heady < 0) {heady = 19;}
      if (heady > 19) {heady = 0;}
      
      ctx.fillStyle = "grey";
      ctx.fillRect(0, 0, area.width, area.height);
      
      ctx.fillStyle = "green";
      ctx.fillRect(headx*20, heady*20, 20, 20);
      
      ctx.fillStyle = "red";
      ctx.fillRect(applex*20, appley*20, 20, 20);
      
    }
    
    function keyPush(e) {
      switch (e.keyCode) {
        case 37: //esquerda
          if (velx === 0) {velx = -1; vely = 0; break;}
        case 38: //cima
          if (vely === 0) {velx = 0; vely = -1; break;}
        case 39: //direita
          if (velx === 0) {velx = 1; vely = 0; break;}
        case 40: //baixo
          if (vely === 0 ) {velx = 0; vely= 1; break;}
      }
    }
  }