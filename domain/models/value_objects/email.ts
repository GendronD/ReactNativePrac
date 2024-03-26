export class Email {
  value: string;

  constructor(value: string) {
    this.value = value;
  }

  validate(): boolean {
    return true;
  }
}

export default Email;
