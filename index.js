import {Pattern, SVG} from "@svgdotjs/svg.js"
import ActGramProcess from "./src/components/process"

export default class ActGram {
    constructor(selector, options = {}) {
        this.selector = selector
        this.options = options
    }

    draw() {
        this.svg = SVG().addTo(this.selector)
                        .size(this.options.width, this.options.height)
        this.svg.add(this._gridPattern())
        this.svg.rect("100%", "100%")
                .fill("url(#grid)")
    }

    _gridPattern() {
        let defs = this.svg.defs()
        defs.pattern()
            .id("small-grid")
            .width(10)
            .height(10)
            .attr({ patternUnits: "userSpaceOnUse" })
            .path("M 10 0 L 0 0 0 10")
            .fill("none")
            .stroke({ color: "lightblue", width: 0.5})
        defs.pattern(100, 100, (p) => {
            p.id("grid")
            p.attr({ patternUnits: "userSpaceOnUse" })
            p.rect(100, 100)
             .fill("url(#small-grid)")
            p.path("M 100 0 L 0 0 0 100")
             .fill("none")
             .stroke({ color: "lightblue", width: 1})
        })
        
        return defs
    }
}

if (window !== undefined) {
    window.ActGram = ActGram
    window.ActGramProcess = ActGramProcess
  }