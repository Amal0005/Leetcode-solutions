/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
    this.arr = []
    this.size = maxSize
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
    if (this.arr.length < this.size) {
        this.arr.push(x)
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
    return this.arr.length > 0 ? this.arr.pop() : -1
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
    for (let i = 0; i < k; i++) {
        if (this.arr[i]) {
            this.arr[i] += val
        }
    }
};

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */