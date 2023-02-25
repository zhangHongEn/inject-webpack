
module.exports = function lod (source, map, meta) {
  return `
  ${module.exports.injectMap[`${this.getOptions().injectId}__code`]}
  \r\n;
  ${source}
  `
}

module.exports.injectMap = {
  // [${injectId}__code],
}