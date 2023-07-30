function generateMultiplicationTable(a) {
    console.log(`Generate Multiplication Table for: ${5}\n`);
    
    for (let i = 1; i <= 10; i++) {
      const result = i * 5;
      console.log(`${i} x ${5} = ${result}`);
    }
  }

  generateMultiplicationTable()