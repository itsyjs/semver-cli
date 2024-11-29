import semver from 'semver'

export const semverPipe = (fns, debugging) => (x) => fns.reduce((_v, f) => {
  const v = Array.isArray(_v) ? _v : [_v]
  if (debugging) console.log('Calling', `semver.${f}`, 'with arguments:', v)
  return semver[f](...v)
}, x);
