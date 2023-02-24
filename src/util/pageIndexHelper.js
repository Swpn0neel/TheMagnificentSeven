export function getPageIndex(route) {
  console.log("r = "+route)
  switch (route) {
    case "great-wall-of-china":
      return 0;
    case "chichen-itza":
      return 1;
    case "petra":
      return 2;
    case "machu-picchu":
      return 3;
    case "christ-the-redeemer":
      return 4;
    case "colosseum":
      return 5;
    case "taj-mahal":
      return 6;
    default:
      return -1;
  }
}
