/**
 * Create a vector object, that supports :
 * - addition
 * - substraction
 * - dot products
 * - and norms
 */

const OldVector = function (components) {
  this.coords = components;
  this.add = function (obj) {
    if (this.vector.length !== obj.vector.length)
      throw new Error("Vectors should be of the same dimension");
    const res = obj.vector.map((curr, i) => curr + this.vector[i]);
    return new OldVector(res);
  };
  this.subtract = function (obj) {
    if (this.vector.length !== obj.vector.length)
      throw new Error("Vectors should be of the same dimension");
    const res = obj.vector.map((curr, i) => this.vector[i] - curr);
    return new OldVector(res);
  };
  this.dot = function (obj) {
    if (this.vector.length !== obj.vector.length)
      throw new Error("Vectors should be of the same dimension");
    return obj.vector.reduce((pre, curr, i) => this.vector[i] * curr + pre, 0);
  };
  this.norm = function () {
    const pr = this.vector.reduce((pre, curr) => curr ** 2 + pre, 0);
    return Math.sqrt(pr);
  };
  this.toString = function () {
    return `(${this.vector})`;
  };

  this.equals = function (obj) {
    return obj.vector.every((value, i) => value === this.vector[i]);
  };
};

// Refactor.
const Vector = function (components) {
  this.coords = components;
  this.length = components.length;

  this.perform = (op, vec) => {
    if (this.length !== vec.length) throw "length mismatch.";
    return this.coords.map((curr, i) => {
        return eval(curr + op + vec.coords[i]);
      })
  };

  this.add = (w) => new Vector(this.perform("+", w));
  this.subtract = (w) => new Vector (this.perform("-", w));
  this.dot = (w) => this.perform("*", w).reduce((c, p) => c + p);
  this.norm = () => Math.sqrt(this.dot(this));
  this.toString = () => `(${this.coords})`;
  this.equals = (w) => this.toString() === w.toString();
};
