let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let actualDay = new Date().getDay();
  console.log(actualDay);
  
  switch (actualDay) {
    case 0:
      state = weekdays[0];
      break;
    case 1:
      state = weekdays[1];
      break;
    case 2:
      state = weekdays[2];
      break;
    case 3:
      state = weekdays[3];
      break;
    case 4:
      state = weekdays[4];
      break;
    case 5:
      state = weekdays[5];
      break;
    case 6:
      state = weekdays[6];
      break;
    default:
      state = "no date";
  }
  console.log(state);