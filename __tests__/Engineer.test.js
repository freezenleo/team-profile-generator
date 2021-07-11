const Engineer = require('../lib/Engineer');

test('gets engineer github username', () => {
    const engineer = new Engineer('Jason', '111', 'something@something.com', 'abcdefg@!!');

    expect(engineer.githubUsername).toEqual(expect.any(String));
})

test('gets engineer github as an object', () => {
    const engineer = new Engineer('Jason', '111', 'something@something.com', 'abcdefg@!!');

    expect(engineer.getGithub()).toHaveProperty('githubUsername');
})

test('gets engineer role as an object', () => {
    const engineer = new Engineer('Jason', '111', 'something@something.com', 'abcdefg@!!');

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
})