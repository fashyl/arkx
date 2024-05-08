/**
 * a function that takes in two non-negative integers 𝑎 and 𝑏
 * and returns the last decimal digit of 𝑎^𝑏, for example
 *
 * the last digit of 9^7 is 9 since 9^7 = 4782969
 *
 * Note that 𝑎 and 𝑏 may be very large!
 */

function lastDigit(a, b) {
  if (b === 0n ) return 1n;
  if(a % 10n === 0n) return 0n;
  return (a % 10n ) ** (b % 4n === 0n ? 4n : b % 4n) % 10n;
}
