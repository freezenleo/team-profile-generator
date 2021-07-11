const { test } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('gets manager office number', () => {
    const manager = new Manager('Jason', '111', 'something@something.com', '555-555-5555');

    expect(manager.officeNumber).toEqual(expect.any(String));
})

test('gets manager role as an object', () => {
    const manager = new Manager('Jason', '111', 'something@something.com', '555-555-5555');

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
})