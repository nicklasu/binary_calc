function ChangePositive(number) {
  if (number > 0) {
    number = number * -1;
    return number;
  } else {
    return number;
  }
}

export default ChangePositive;
