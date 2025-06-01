import { Selector } from 'testcafe';

fixture`Login Test`.page('https://example.com/login');

test('User can log in', async t => {
    await t
        .typeText('#username', 'user')
        .typeText('#password', 'pass')
        .click('#login-button')
        .expect(Selector('#dashboard').exists).ok();
});