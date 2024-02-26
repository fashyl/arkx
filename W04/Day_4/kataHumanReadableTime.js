// Write a function, which takes a non-negative integer (seconds) as input 
// and returns the time in a human-readable format (`HH:MM:SS`)

// -   `HH` = hours, padded to 2 digits, range: 00 - 99
// -   `MM` = minutes, padded to 2 digits, range: 00 - 59
// -   `SS` = seconds, padded to 2 digits, range: 00 - 59

// The maximum time never exceeds 359999 (`99:59:59`)

function humanReadable (input) {
    let seconds = `${input % 60}`.padStart(2, 0)
    let hours = `${Math.floor(input / 3600)}`.padStart(2, 0)
    let minutes = `${Math.floor(input/60 % 60)}`.padStart(2, 0)
    return `${hours}:${minutes}:${seconds}`
  }
// couldve padded manually but i'll still have to use slice(-2)..
  console.log(humanReadable(0)); // should return '00:00:00'
  console.log(humanReadable(59)); // should return '00:00:59'
  console.log(humanReadable(60)); // should return '00:01:00'
  console.log(humanReadable(90)); // should return '00:01:30'
  console.log(humanReadable(3599)); // should return '00:59:59'
  console.log(humanReadable(3600)); // should return '01:00:00'
  console.log(humanReadable(45296)); // should return '12:34:56'
  console.log(humanReadable(86399)); // should return '23:59:59'
  console.log(humanReadable(86400)); // should return '24:00:00'
  console.log(humanReadable(359999)); // should return '99:59:59'