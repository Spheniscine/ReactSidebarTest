import React, { PureComponent, createRef } from 'react';

enum MathDisplayType {
    Inline,
    Display,
    DisplayStyle
}

interface MathProps {
    tex: string,
    displayType: MathDisplayType
}

export class Math extends PureComponent<MathProps, {}> {
    static DOM_CLASS = "math"
    static mathJaxState = (window as any).__MathJax_State__

    static defaultProps = {
        displayType: MathDisplayType.DisplayStyle
    }

    private promise: Promise<any> = Math.mathJaxState.promise

    private spanRef = createRef<HTMLElement>()

    render() {
        return <span className={Math.DOM_CLASS} ref={this.spanRef} />
    }

    private loadTex() {
        const element = this.spanRef.current
        if(element == null) return
        this.promise = this.promise.then (() => {
            const mathJax = (window as any).MathJax
            mathJax.typesetClear([element])
            let text = ""
            text += this.props.displayType === MathDisplayType.Display ? "\\[" : "\\("
            if(this.props.displayType === MathDisplayType.DisplayStyle) text += "\\displaystyle "
            text += this.props.tex
            text += this.props.displayType === MathDisplayType.Display ? "\\]" : "\\)"
            element.innerHTML = ""
            element.appendChild(document.createTextNode(text))
            mathJax.typeset([element])
        })
    }

    componentDidMount() { this.loadTex() }
    componentDidUpdate() { this.loadTex() } 
    componentWillUnmount() {
        const element = this.spanRef.current
        if(element == null) return
        this.promise = this.promise.then (() => {
            const mathJax = (window as any).MathJax
            mathJax.typesetClear([element])
        })
    }
}

export default Math