import { checkEmail, checkPasswordLength } from '../../utils';

describe('Validate form', () => {
  it('It should check if the text entered is an e-mail', () => {
    expect(checkEmail('test@ioasys.com.br')).toBe(true);
  });

  it('this should validate that the password contains at least 6 characters', () => {
    expect(checkPasswordLength('123456')).toBe(true);
  });
});
