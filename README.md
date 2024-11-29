# @itsy/semver-cli

## use

```shell
npx @itsy/semver-cli --command major 1.0.1
```

- `command` is any single valid method from the [semver library](https://github.com/npm/node-semver)
- the primary argument can be an array of inputs
  - meaning this would work `npx @itsy/semver-cli --command satisfies 1.0.1 1.x`
