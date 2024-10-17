class Upgrader {
    constructor(price=0, priceExp=1.3) {
        this.price = price;
        this.priceExp = priceExp;
        this.amount = 0;

        this.startPrice = price;
    }

    inc(unipoints, amt) {
        let creativeSource = unipoints == null;
        if (!creativeSource) {
            if (unipoints < this.price) {
                return 0;
            }
        }
        this.amount += amt;
        let currentPrice = this.price;

        if (!creativeSource) {
            if (this.price < 2) {
                this.price++;
            } else {
                this.price = Math.pow(this.price, this.priceExp);
                this.price = Math.ceil(this.price);
            }
        }

        return currentPrice;
    }

    earned() {
        return this.amount;
    }

    reset() {
        this.price = this.startPrice;
    }
}

export class Planck extends Upgrader {}

export class Quark extends Upgrader {}