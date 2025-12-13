/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function (codes, businessLine, isActive) {
  const groups = {
    electronics: [],
    grocery: [],
    pharmacy: [],
    restaurant: []
  };

  for (let i = 0; i < codes.length; i++) {
    if (!isActive[i]) continue;
    if (!isValid(codes[i])) continue;

    const group = groups[businessLine[i]];
    if (group) group.push(codes[i]);
  }

  return Object.values(groups)
    .map(arr => arr.sort())
    .flat();
};

function isValid(code) {
  return /^[a-zA-Z0-9_]+$/.test(code);
}
