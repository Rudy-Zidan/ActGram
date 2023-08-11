import {Rect} from "@svgdotjs/svg.js"
import '@svgdotjs/svg.draggable.js'
import ActGramText from "./text"

export default class ActGramProcess {
    DEFAULT_STROKE = { 
        color: '#4C85FF',
        opacity: 0.6,
        width: 2 
    }

    WIDTH_DIVISOR = 2
    HEIGHT_DIVISOR = 1.5
    STROKE_WIDTH_ADD_ON = 2

    constructor(name, actGram, width, height, options = {}, stroke = {}) {
        this.name = name
        this.width = width
        this.height = height
        this.actGram = actGram
        this.options = options

        if(Object.keys(stroke).length == 0) {
            this.stroke = this.DEFAULT_STROKE
        } else {
            this.stroke = stroke
        }
    }

    draw() {
        let g = this.actGram.group()
        this._newRect()
        this.rect.addTo(g)

        this.actGramText = this._newActGramText(g, this._getActGramTextWidth(), this._getActGramTextHeight())
        this.actGramText.draw(this.name)
    }

    _newRect() {
        this.rect = new Rect().size(this.width, this.height)
                              .attr(this.options)
                              .stroke(this.stroke)
        this._setRectEvents()
        this.rect
            .draggable()
    }

    _setRectEvents() {
        this.rect.mouseover(() => {
            this.rect.css('cursor', 'grab')
            this.stroke.width += this.STROKE_WIDTH_ADD_ON
            this.rect.stroke(this.stroke)
        })

        this.rect.mouseout(() => {
            this.rect.css('cursor', 'pointer')
            this.stroke.width -= this.STROKE_WIDTH_ADD_ON
            this.rect.stroke(this.stroke)
        })

        this.rect.on('dragmove', e => {
           this._dragActGramText()
        })
    }

    _newActGramText(g, dx, dy) {
        return new ActGramText(g, dx, dy, '#000')
    }

    _dragActGramText() {
        let nX = this._getActGramTextWidth() + this.rect.x()
        let nY = this._getActGramTextHeight() + this.rect.y()

        this.actGramText
            .move(nX, nY)
    }

    _getActGramTextWidth() {
        return this.width / this.WIDTH_DIVISOR
    }

    _getActGramTextHeight() {
        return this.height / this.HEIGHT_DIVISOR
    }
}