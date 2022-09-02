export default class SiteTheme {
    theme: string;
    color1: string;
    color2: string;
    color3: string;

    constructor (theme: string) {
        this.theme = theme;
        this.color1=theme==='dark'?'orange':'blue';
        this.color2=theme==='dark'?'white':'yellow';
        this.color3=theme==='dark'?'dark gray':'light gray';
    }
}