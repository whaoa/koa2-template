/**
 * 数据分组
 * @param {Array} array 包含对象的数组
 * @param {Function} fun 回调函数，接受数组中每一项作为参数，需要返回用来分组的属性值
 * @param {String} return_type 返回数据类型，object/array
 */

function groupBy(array, fun, return_type='array') {
  const groups = {};
  array.forEach(item => {
    const group = JSON.stringify(fun(item));
    groups[group] = groups[group] || [];
    groups[group].push(item);
  });
  if(return_type === 'array') {
    return Object.keys(groups).map(function (group) {
        return groups[group];
    });
  } else {
    return groups;
  }
}

module.exports = groupBy;
