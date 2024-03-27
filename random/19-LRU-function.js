// Implement Least Recently Used (LRU) cache function.
// The function add new key value pairs to an object.
// The object can have only five (given number) key value pairs.
// So, when a sixth entry is added, the least recently used entry from existing entries is removed from the object.

class LRU {
    constructor(max = 5) {
        this.max = max; // Max size of cache
        this.cache = new Map(); // Using map to maintain insertion order. Object does not guarante order.
    }

    get(key) {
        let item = this.cache.get(key); // get the key

        if (item) {
            this.cache.delete(key); // delete the key
            this.cache.set(key, item); // and add the key again, so that this entry is added at the top of map.
        }

        return item; // return the item
    }

    set(key, value) {
        if(this.cache.has(key)) this.cache.delete(key); // while seting new key, first check if it already exists, if it does delete it.

        else if(this.cache.size == this.max) {
            this.cache.delete(this.first()) // If map is already at max size. Delete the first entry.
        }

        this.cache.set(key, value); // set new item at top of map.
    }

    first() {
        return this.cache.keys().next().value; // access the first entry of map.
    }
}

const lruCache = new LRU(3);

lruCache.set("name", "swastik");
lruCache.set("age", "25");
lruCache.set("gender", "male");
console.log(lruCache.cache);
lruCache.set("location", "new delhi");
console.log(lruCache.cache);
lruCache.get("age");
console.log(lruCache.cache);
lruCache.set("profession", "programmer");
console.log(lruCache.cache);