function memoize(fn) {
  const mem = {};
  return function(a) {
    if (mem[a.key]) return mem[a.key];
    mem[a.key] = fn(a);
    return mem[a.key];
  };
}

export default memoize;
