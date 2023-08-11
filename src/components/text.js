import {Text} from "@svgdotjs/svg.js"

export default class ActGramText {
    constructor(actGram, dx, dy, fill) {
        this.actGram = actGram
        this._newText(dx, dy, fill)
    }

    draw(content) {
        this.txt.text(content)
        this.txt.font({
            family:   'Helvetica'
            , size:     20
            , anchor:   'middle'
            , leading:  '1.5em'
        })

        this.actGram.add(this.txt)
    }

    move(dx, dy) {
        this.txt.amove(dx, dy)
    }

    _newText( dx, dy, fill) {
        this.txt = new Text()
        this.txt.ax(dx)
        this.txt.ay(dy)
        this.txt.fill(fill)
    }
}