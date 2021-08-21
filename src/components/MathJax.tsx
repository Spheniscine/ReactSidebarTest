interface MathJaxStateInterface {
    readonly isReady: boolean,
    readonly promise: Promise<any>
}

export const MathJaxState: MathJaxStateInterface = (window as any).__MathJax_State__

interface MathJax {
    readonly typeset: (elements: HTMLElement[]) => void;
    readonly typesetClear: (elements: HTMLElement[]) => void;
}

export class MathJaxContext {
    private promise: Promise<any>

    constructor() {
        this.promise = MathJaxState.promise
    }

    use(action: (mathJax: MathJax) => void): void {
        this.promise = this.promise.then(() => {
            action((window as any).MathJax)
        })
    }
}