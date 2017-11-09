/* primero se declara las variables, funciones y luego eventos*/
/* variable para las posiciones del tablero*/
/* var arrayTictoc = new array(9);*/
/* variable para cada recuadro del tablero*/
var square = document.getElementsByClassName('square');
var turnPlayer;
var turn = 1;
/* funciones*/
/* funcion para validar si hay una combinacion que gano*/
function winningPlayer() {

}

/* funcion para el juego*/
function ticToc(evento) {
  /* alert('primer cuadro');*/
  /* se enfoca en el elemento id del evento click*/
  var celda = evento.target;
  var id = evento.target.id;
  var squareSelection = id[1] - 1;
  turnPlayer = turn % 2;
  if (turnPlayer !== 0) {
    celda.innerHTML = 'x';
  }
  /* alert(squareSelection);*/
}

/* funcion para que carge la pagina, o al hacer click*/
function loadPage() {
  /* asignando el evento click a cada cuadrado*/
  /* console.log(document.getElementsByClassName('square'));*/
  var count = 0;
  /* recorreiendo cada iteraccion en el cuadrado*/
  while (count < square.length) {
    /* console.log(count, square[count]);*/
    /* se ejecuta cuando se hace click en el cuadrado*/
    square[count].addEventListener('click', ticToc);
    count++;
  }
}

/* eventos*/
window.addEventListener('load', loadPage);

/* alert('hola');*/
