export default class Building {
    constructor(sqft) {
        this._sqft = sqft;
        if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
            throw Error('Class extending Building must override evacuationWarningMessage');
        }
    }

    get sqft() {
        return this._sqft;
    }

    evacuationWarningMessage() {
    }
}