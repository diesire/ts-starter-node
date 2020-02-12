export function hi(): string {
  return 'Hello'
}

export class Greeter {
  public hi(): string {
    function foo(): string {
      return 'H'
    }

    function bar(): string {
      return foo() + 'ello'
    }
    return bar()
  }
}
