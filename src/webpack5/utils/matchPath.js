module.exports = function matchPath(regexps, modulePath) {
  return (regexps || []).some(regexp => regexp.test(modulePath))
}