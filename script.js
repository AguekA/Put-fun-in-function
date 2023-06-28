function listNumbers(lastTwoDigits) {
    let divisor1 = parseInt(lastTwoDigits.toString().charAt(0));
    let divisor2 = parseInt(lastTwoDigits.toString().charAt(1));
    let counter = 0;
    for (let i = 1; i <= 500; i++) {
      if (i % divisor1 === 0 && i % divisor2 === 0) {
        counter++;
        if (counter % 19 === 0) {
          console.log(i);
        }
      }
    }
  }
  
  listNumbers(34);
  