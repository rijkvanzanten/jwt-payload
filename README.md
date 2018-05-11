# jwt-payload
🔑 Get the JSON contents of a JWT payload

## Installation

```bash
$ npm install @rijk/jwt-payload
```

## Usage

```js
const jwtPayload = require("@rijk/jwt-payload");

// OR

import jwtPayload from "@rijk/jwt-payload";

const jwt = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoidG9rZW4iLCJpZCI6NCwiZXhwIjoxNTI2MDY1ODEyLCJ1cmwiOiJodHRwczovL3JpamtzLndlYnNpdGUifQ.ipzdIiYfYvGKeCJhTmtLzBsVnidtU8k_0VhPZ5bfwCw";

jwtPayload(jwt);
// =>
// {
//  "type": "token",
//  "id": 4,
//  "exp": 1526065812,
//  "url": "https://rijks.website"
// }
```

## License
MIT
