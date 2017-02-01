# env-regex
NodeJS module to RegEx filter environment variables

## Usage

Import `env-regex` and pass in a valid RegExp to return the values of all matching environment variables.

```
var envRegex = require("env-regex");

var filteredEnvs = envRedex(/^(SSH_HOST)/);
```
