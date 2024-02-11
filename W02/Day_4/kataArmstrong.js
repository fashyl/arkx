function narcissistic(value) {
    const array = [...`${value}`]
    const _Armstrong = array.reduce((acc, num) => acc + num**array.length , 0);
    return _Armstrong === value;
  }

  console.log(narcissistic(189));
  