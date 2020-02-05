//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = date1 => {
  let timemili = date1.getTime();
  let time2 = new Date(1000000000000);
  let timemili2 = time2.getTime();
  return new Date(timemili + timemili2);
};
