class HashTable {
    constructor(limit = 10) {
        this._storage = [];
        this._count = 0;
        this._limit = limit;
    }

    hashFunc(str, max) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            let letter = str[i];
            hash = (hash << 5) + letter.charCodeAt(0);
            hash = (hash & hash) & max;
        }
        return hash;
    }

    resize(newLimit) {
        let oldStorage = this._storage;

        this._limit = newLimit;
        this._count = 0;
        this._storage = [];

        oldStorage.forEach(function (bucket) {
            if (!bucket) {
                return;
            }

            for (let i = 0; i < bucket.length; i++) {
                let tuple = bucket[i];
                this.insert(tuple[0], tuple[1]);
            }
        }.bind(this));
    };

    insert(key, value) {
        let index = this.hashFunc(key, this._limit);

        let bucket = this._storage[index];

        if (!bucket) {
            let bucket = [];

            this._storage[index] = bucket;
        }

        let override = false;

        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i];
            if (tuple[0] === key) {
                tuple[1] = value;
                override = true;
            }
        }

        if (!override) {
            bucket.push([key, value]);
            this._count++;

            if (this._count > this._limit * 0.75) {
                this.resize(this._limit * 2);
            }
        }
    }

    remove(key) {
        let index = thi.hashFunc(key, this._limit);

        let bucket = this._storage[index];

        if (!bucket) {
            return null;
        }

        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i];

            if (tuple[0] === key) {
                bucket.splice(i, 1);
                this._count--;
                if (this._count < this._limit * 0.25) {
                    this.resize(this._limit / 2);
                }
                return tuple[1];
            }
        }
    }

    retrieve(key) {
        let index = this.hashFunc(key, this._limit);
        let bucket = this._storage[index];

        if (!bucket) {
            return null;
        }

        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i];
            if (tuple[0] === key) {
                return tuple[1];
            }
        }
    
        return null;
    }
}