export function hi() {
    return 'Hello'
}

export class Greeter {
    public hi() {
        function foo() {
            return 'H'
        }

        function bar() {
            return foo() + 'ello'
        }
        return bar()
    }
}