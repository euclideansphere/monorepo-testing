import _add from "./add";

const { add } = _add;

export default class Adder {
    left: number;
    right: number;

    constructor(left: number, right: number) {
        this.left = left;
        this.right = right;
    }

    getResult() {
        return add(this.left, this.right);
    }
}