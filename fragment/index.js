let btn = document.querySelector(".btn"),
  square = document.querySelector(".square");
frame = document.querySelector(".frame");
info = document.querySelector('.info');

btn.addEventListener("click", f);
async function f() {
  info.textContent = ' Начало';
  await rf(5000, fn());
  info.textContent = ' Середина';
  await rf(5000, fn1());
  info.textContent = ' К концу';
  await rf(4900, fn2());
  info.textContent = ' Все';
  await rf(500);
  info.textContent = '';
}

function rf(ms, r) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  });
}

function fn() {
  let psn = 0;
  let id = setInterval(frame, 10);
  function frame() {
    if (psn == 395) {
      clearInterval(id);
    } else {
      psn++;
      square.style.top = psn + "px";
      square.style.left = psn + "px";
    }
  }
}

function fn1() {
  let psn1 = 395;
  let id1 = setInterval(frame1, 10);
  function frame1() {
    if (psn1 == 0) {
      clearInterval(id1);
    } else {
      psn1--;
      square.style.top = psn1 + "px";
    }
  }
}

function fn2() {
  let psn2 = 395;
  let id2 = setInterval(frame2, 10);
  function frame2() {
    if (psn2 == 0) {
      clearInterval(id2);
    } else {
      square.style.left = psn2-- + "px";
    }
  }
}
function fn3() {
  frame.style.display = "none";
  btn.style.display = "none";
  document.body.style.backgroundColor = "black";
}
