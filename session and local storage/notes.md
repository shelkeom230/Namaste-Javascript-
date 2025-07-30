# Local Storage

### it is provided by browser where you can store data which will not be ereased after session termination well. it will get vanished only when you manually delete it.

---

## Some important methods

```javascript
localStorage.setItem("key", value); // set an item

localStorage.getItem("user"); //get item value

localStorage.removeItem("user"); // remove an item

localStorage.clear(); // clear entire local storage
```

---

- Sometimes, you may need to store _objects_ in local storage but they will by default get stored as string like [object, Object]

---

## How to store objects

```javascript
// use JSON.stringify
localStorage.setItem(JSON.stringify(object));

// while getting object value, use JSON.parse to get the object back
localStorage.getItem(JSON.parse(key));
```

---

- Note - In your machine coding rounds, don't waste your time doing these stuffs, instead write your functions for this purpose beforehand even before start writing the codee.
