# Describe the diference between a `cookie`, `sessionStorage`, and `localStorage`.

`Local storage` is useful for storing data that the user will need to access later, such as offline data, because it stores the data in the browser and the system. This data will persist even if the user closes and reopens the browser.

`Session storage` is a great way to improve the performance of you web app. It stores data on the browser but is specific to the respective site/browser tab and is only available while the user is on the site/tab.

`Cookies` are a good choice for storing data that should not be persisted for a long time, such as session IDs. Cookies allows to set expiry time at which point it would be deleted.

## Similarities
Cookies, localStorage, and sessionStorage, are all:

- Storage mechanisms on the client side. This means the clients can read and modify the values.
- Key-value based storage.
- They are only able to store values as strings. Objects will have to be serialized into a string (JSON.stringify()) in order to be stored.

## Differences
| Property | Cookie | localStorage | sessionStorage |
| -------- | ------ | ------------ | -------------- |
| Initiator | Client or server. Server can use Set-Cookie header | Client | Client |
| Expiry | Manually set | Forever | On tab close |
| Persistent across browser sessions | Depends on whether expiration is set | Yes | No |
| Sent to server with every HTTP request | Cookies are automatically being sent via Cookie header | No | No |
| Capacity (per domain) | 4kb | 5MB | 5MB |
| Access | Any window | Any window | Same tab |

There are also other client-side storage mechanisms like `IndexedDB` which is more powerful than the above-mentioned technologies but more complicated to use.