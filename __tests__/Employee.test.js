const { expect, test } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Jason', '111', 'something@something.com');

    expect(employee.name).toBe('Jason');
    expect(employee.id).toBe('111');
    expect(employee.email).toEqual(expect.any(String));
})

test('gets employee name as an object', () => {
    const employee = new Employee('Jason', '111', 'something@something.com');

    expect(employee.getName()).toHaveProperty('name');
})

test('gets employee id as an object', () => {
    const employee = new Employee('Jason', '111', 'something@something.com');

    expect(employee.getId()).toHaveProperty('id');
})

test('gets employee email as an object', () => {
    const employee = new Employee('Jason', '111', 'something@something.com');

    expect(employee.getEmail()).toHaveProperty('email');
})

test('gets employee role as an object', () => {
    const employee = new Employee('Jason', '111', 'something@something.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
})