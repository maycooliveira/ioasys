import { getUnique } from '../../utils';

const mock = [
  { id: 3, enterprise_type_name: 'Health' },
  { id: 1, enterprise_type_name: 'Health a' },
  { id: 3, enterprise_type_name: 'Health' },
];

const output = [
  { id: 3, enterprise_type_name: 'Health' },
  { id: 1, enterprise_type_name: 'Health a' },
];

describe('Valid array', () => {
  it('This function should remove repeated objects and sort by name', () => {
    expect(getUnique(mock)).toEqual(output);
  });
});
