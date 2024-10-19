export class Upgrader {
    constructor(name, price=0, priceMul=2.0) {
        this.name = name;
        this.price = price;
        this.priceMul = priceMul;
        this.amount = 0;
        this.startPrice = price;
    }

    inc(unipoints, amt) {
        const creativeSource = unipoints == null;
        if (!creativeSource && unipoints < this.price) return 0;

        this.amount += amt;
        const currentPrice = this.price;

        if (!creativeSource) {
            this.price = this.price < 2 ? this.price + 1 : Math.ceil(this.price * this.priceMul);
        }

        return currentPrice;
    }

    earned() {
        return this.amount;
    }

    reset() {
        this.price = this.startPrice;
        this.amount = 0;
    }

    generateHtml() {
        return `${Math.trunc(this.amount).toLocaleString('en-US')} ${this.name}${this.name[this.name.length-1]=='s'?'es':'s'} | Buy a ${this.name} (Cost: ${Math.trunc(this.price).toLocaleString('en-US')})`;
    }    
}
