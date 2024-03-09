# Question
Before the optional chaining operator (?.) existed, it was sometimes troublesome to access deeply-nested properties in huge JavaScript objects when some of the intermediate properties might not be present.

```js
const john = {
  profile: {
    name: { firstName: 'John', lastName: 'Doe' },
    age: 20,
    gender: 'Male',
  },
};

const jane = {
  profile: {
    age: 19,
    gender: 'Female',
  },
};

function getFirstName(user) {
  return user.profile.name.firstName;
}
```
Doing getFirstName(john) works but getFirstName(jane) will error because the name property doesn't exist for jane.profile.

Lodash's Get method
Lodash's _.get method was created as a solution for such use cases.

Let's write our own version as a get function. The function gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place. The function signature is as such:

```js
get(object, path, [defaultValue]);
```

- object: The object to query.
- path: The path of the property to get. It can be a string with . as the separator between fields, or an array of path strings.
- defaultValue: Optional parameter. The value returned if the resolved value is undefined.

Examples:
```js
get(john, 'profile.name.firstName'); // 'John'
get(john, 'profile.gender'); // 'Male'
get(jane, 'profile.name.firstName'); // undefined
```

Arrays can also be accessed if numerical indices are provided.

```js
get({ a: [{ b: { c: 3 } }] }, 'a.0.b.c'); // 3
```

There's no need to support syntax resembling get(object, 'a[0].b.c').

# Solution
## #1
```js
function get(objectParam, pathParam, defaultValue) {
  const pathParamArr = Array.isArray(pathParam) ? pathParam : pathParam.split(".");

  let objectInReference = objectParam;
  let value = null;
  pathParamArr.forEach((path, idx) => {
    value = objectInReference[path];

    if (value !== null && typeof value === "object") {
      objectInReference = value;
    }
  });
  
  return value === undefined ? defaultValue : value;
}
```

## #2
```js
function get(objectParam, pathParam, defaultValue) {
  const path = Array.isArray(pathParam) ? pathParam : pathParam.split('.');

  let index = 0;
  let length = path.length;
  let object = objectParam;

  while (object != null && index < length) {
    object = object[String(path[index])];
    index++;
  }

  const value = index && index === length ? object : undefined;
  return value !== undefined ? value : defaultValue;
}
```
