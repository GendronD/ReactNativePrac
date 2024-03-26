export class Password {
  value: string;

  constructor(value: string) {
    this.value = value;
  }

  validate(): boolean {
    return true;
  }
}

export default Password;
