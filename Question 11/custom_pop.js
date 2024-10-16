Array.prototype.customPop = function() {
    if (this.length === 0) return undefined;
    const poppedElement = this[this.length - 1];
    this.length--;
    return poppedElement;
};
