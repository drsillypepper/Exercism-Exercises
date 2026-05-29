//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, position) => {
  const position_str = String(position);

  const position_str_end = position_str.slice(position_str.length - 2);
  if(position_str_end == '11' || position_str_end == '12' || position_str_end == '13'){
    return formatString(name, `${position}th`);
  }

  switch(position_str[position_str.length-1]){
    case '1':
      return formatString(name, `${position}st`);
    case '2':
      return formatString(name, `${position}nd`);
    case '3':
      return formatString(name, `${position}rd`);
    default:
      return formatString(name, `${position}th`);
  }
};
const formatString = (name, position) => {
  return `${name}, you are the ${position} customer we serve today. Thank you!`
}
