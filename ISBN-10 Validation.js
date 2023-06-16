function validISBN10(isbn) {
    let sum = 0;
  
    for(let i = 0; i < isbn.length - 1; i++) {
      sum += (i + 1) * isbn[i];
    }
    sum += (isbn[isbn.length - 1] === 'X') ? 10 * 10 : 10 * isbn[isbn.length - 1];
    
    return sum % 11 === 0; 
  }