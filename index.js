
/**
 * Javascript file for freeCodeCamp, Javascript, Palindrome Checker
 * author: Ida Naderian
 */

function palindrome(str) {
    // Good luck!
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reverseStr = str.split('').reverse().join('');
    return (str === reverseStr);
  }
  
  
  
  palindrome("_Eye");