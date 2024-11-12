// expecting time to be a string in the format like '8:15' or '12:30'

const numbersToWord = (timeHour) => {
  switch (timeHour) {
    case "1":
      return "one";
    case "2":
      return "two";
    case "3":
      return "three";
    case "4":
      return "four";
    case "5":
      return "five";
    case "6":
      return "six";
    case "7":
      return "seven";
    case "8":
      return "eight";
    case "9":
      return "nine";
    case "10":
      return "ten";
    case "11":
      return "eleven";
    case "12":
      return "twelve";
    case "13":
      return "thirteen";
    case "14":
      return "fourteen";
    case "15":
      return "fifteen";
    case "16":
      return "sixteen";
    case "17":
      return "seventeen";
    case "18":
      return "eighteen";
    case "19":
      return "nineteen";
    case "20":
      return "twenty";
    case "21":
      return "twenty one";
    case "22":
      return "twenty two";
    case "23":
      return "twenty three";
    case "24":
      return "twenty four";
    case "25":
      return "twenty five";
    case "26":
      return "twenty six";
    case "27":
      return "twenty seven";
    case "28":
      return "twenty eight";
    case "29":
      return "twenty nine";
  }
};

const convertHour = (hourNumber) => {
  const value = hourNumber % 12;

  if (value === 0) {
    return numbersToWord(hourNumber.toString());
  }
  return numbersToWord(value.toString());
  // check the hour if it is modulo by 12.
  // if the returned value is not zero,
  // pass it to be converted to word.
  // if the return of modulo is zero, just convert the value directly
};

function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === "0:00") {
    return "midnight";
  }

  if (time === "12:00") {
    return "midday";
  }

  const timeArray = time.split(":");

  //timeArray[0] = hour
  //timeArray[1] = minutes
  const hourWord = convertHour(parseInt(timeArray[0]));
  const minuteWord = numbersToWord(timeArray[1]);
  if (timeArray[1] === "00") {
    return `${hourWord} o'clock`;
  }

  // parse the second element to determine if it's less than 30
  const hourInt = parseInt(timeArray[0]);
  const minuteInt = parseInt(timeArray[1]);

  if (minuteInt === 30) {
    return `half past ${hourWord}`;
  }

  if (minuteInt === 15) {
    return `quarter past ${hourWord}`;
  }
  const nextHour = hourInt + 1;
  const nextHourWord = nextHour.toString();

  if (minuteInt === 45) {
    return `quarter to ${numbersToWord(nextHourWord)}`;
  }

  if (minuteInt < 30) {
    return `${minuteWord} past ${hourWord}`;
  }

  if (minuteInt > 30) {
    const lastMinute = 60 - minuteInt;
    const nextMinuteWord = lastMinute.toString();

    return `${numbersToWord(nextMinuteWord)} to ${numbersToWord(nextHourWord)}`;
  }
}

module.exports = { convertTimeToWords };
