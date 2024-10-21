export class Result {
    /** @type {boolean} */
    success;
    /** @type {any} */
    returnValue;

    /**
     * @param {boolean} success
     * @param {any} returnValue
     */
    constructor(success, returnValue) {
        this.success = success
        this.returnValue = returnValue;
    }

    isSuccessful() {
        return this.success;
    }

    unwrap() {
        if (this.success) {
            return this.returnValue;
        } else {
            throw new Error("Unwrap Exception: No return value");
        }
    }
}