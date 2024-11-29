# @itsy/semver-cli

## use

```shell
npx @itsy/semver-cli --command major 1.0.1
```

- `--debug` can be specified to output debugging info - useful when handling multiple commands
- `--command` is any single valid method from the [semver library](https://github.com/npm/node-semver)
  - multiple methods can be specified and will run in order `npx @itsy/semver-cli --command coerce --command valid 1.0.1`
- the primary argument can be an array of inputs
  - meaning this would work `npx @itsy/semver-cli --command satisfies 1.0.1 1.x`
