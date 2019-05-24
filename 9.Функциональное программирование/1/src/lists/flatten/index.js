function flatten(lists) {
  const results = [];

  for (let list of lists) {
    results.push(...list);
  }
  return results;
}
// [[], [], []] => []

module.exports = flatten;