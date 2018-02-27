function cracklePop() {
      for (var number = 1; number <= 100; number++) {
        if (number % 3 === 0) {
            console.log("Crackle");
        } else if (number % 5 === 0) {
            console.log("Pop");
        } else if (number % 5 === 0 || number % 3 === 0) {
            console.log("CracklePop");
        } else {
          console.log(number);
        }
    }
}

cracklePop();