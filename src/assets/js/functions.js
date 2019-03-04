(() => {

  let count = 0;
  let loading = true;

  document.onload(() => {
    var imgA = new Image();
    count++;
    imgA.onload = () => {
      checkOff();
    };
    imgA.src = 'assets/images/coding-4-flip-2a.png';

    var imgB = new Image();
    count++;
    imgB.onload = () => {
      checkOff();
    };
    imgB.src = 'assets/images/coding-4-flip-2a.png';




  });


  function checkOff() {
    loading = (count === 0);
  }
})();