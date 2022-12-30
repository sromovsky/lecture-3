export class SmartTV {
    private _name: string;
    private _color: string;
    private _screenSize: number;

    constructor(name: string, color: string, screenSize: number) {
        this._name = name;
        this._color = color;
        this._screenSize = screenSize;
    }

    getName(): string {
        return this._name;
    }

    getColor(): string {
        return this._color;
    }

    getScreenSize(): number {
       return this._screenSize;
    }
}