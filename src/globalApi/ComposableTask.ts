export class ComposableTask<T> {

  public async then(
    onfulfilled: (value: T) => T | PromiseLike<T>
  ): Promise<T> {
    return onfulfilled(await this.run())
  }

  public async run(): Promise<T> {
    throw new Error('ComposableTask - run is not implemented')
  }
}
