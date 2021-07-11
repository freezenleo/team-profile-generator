const Intern = require('../lib/Intern');

test('gets intern school', () => {
    const intern = new Intern('Jason', '111', 'something@something.com', 'university');

    expect(intern.school).toEqual(expect.any(String));
})

test('gets intern school as an object', () => {
    const intern = new Intern('Jason', '111', 'something@something.com', 'university');

    expect(intern.getSchool()).toHaveProperty('school');
})

test('gets intern role as an object', () => {
    const intern = new Intern('Jason', '111', 'something@something.com', 'university');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
})