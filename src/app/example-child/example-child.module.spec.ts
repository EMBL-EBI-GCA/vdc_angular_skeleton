import { ExampleChildModule } from './example-child.module';

describe('ExampleChildModule', () => {
  let exampleChildModule: ExampleChildModule;

  beforeEach(() => {
    exampleChildModule = new ExampleChildModule();
  });

  it('should create an instance', () => {
    expect(exampleChildModule).toBeTruthy();
  });
});
