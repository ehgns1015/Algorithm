/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function(queries, m) {
    let output = [];
    let perm = Array.from({length: m}, (x, i) => i + 1);
    for (let i = 0; i < queries.length; i++) {
        let index = perm.indexOf(queries[i]);
        output.push(index);
        perm.splice(index, 1);
        perm.splice(0, 0, queries[i]);
    }
    return output;
};