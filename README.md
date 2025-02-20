# RegExp Build

Build and join `RegExp` for JavaScript and TypeScript.

# Installation

```npm install regexp-build```

# Using

```js
import { find, optional } from 'regexp-build';

// /[-+]?\d/
const regex = find([optional(/[-+]/), /\d/]);
```

# Functions

| Function                | Regex          | Description                        |
|-------------------------|----------------|------------------------------------|
| build(....,.....)       | /.../          | Build RegEexp from parts           |
| regex(...)              | /.../          | Join many RegExp to one            |
| find(...)               | /.../          | Create RegExp for find             |
| pattern(...)            | /^...$/        | Create RegExp for match string     |
| group(...)              | /(...) /       | Create RegExp group                |
| group(..., name)        | /(?<name>...)/ | Create RegExp group with name      |
| zeroOrMore(...)         | /(...)*/       | Create zero or more repeat RegExp  |
| oneOrMore(...)          | /(...)+/       | Create one or more repeat RegExp   |
| optional(...)           | /(...)?/       | Create optional RegExp             |
| repeat(..., count)      | /(...){count}/ | Create n repeat RegExp             |
| choiceOf(..., ...)      | /(...\|...)/   | Create RegExp for select one       |
| lookahead(...)          | /(?=...)/      | Create look a head RegExp          |
| negativeLookhead(...)   | /(!=...)/      | Create negative look a head RegExp |
| lookbehind(...)         | /(?<=...)/     | Create look behind RegExp          |
| negativeLookbehind(...) | /(?<!...)/     | Create negative look behind RegExp |

# Example

```js
import { choiceOf, pattern, zeroOrMore, build } from 'regexp-build';

const domain = /\w+\.[a-z]{3}/;
// /http|https/
const protocol = choiceOf(/http/, /https/);
// /^(?:http|https):\/\/(?:\w+\.)*\w+\.[a-z]{3}$/
const url = pattern([protocol, /:\/\//, zeroOrMore(/\w+\./), domain]);
// /^\w+@\w+\.[a-z]{3}$/
const email = pattern([/\w+@/, domain]);
// /-(?:[1-9]\d+):(?:\w+)-/
const x = build('-{0}:{1}-', /[1-9]\d+/, /\w+/)
```