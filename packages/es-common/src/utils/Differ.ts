import { subtract } from "./subtract";

export default class Differ {
    left: number;
    right: number;

    constructor(left: number, right: number) {
        this.left = left;
        this.right = right;
    }

    getResult() {
        return subtract(this.left, this.right);
    }
}