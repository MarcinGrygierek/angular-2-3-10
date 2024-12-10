export class RandomService {
  private random = Math.round(Math.random() * 10000);

  getValue() {
    return this.random;
  }

  constructor() {
    console.log('RandomService instance created')
  }
}
