/// <reference types='cypress'/>

describe('register page', ()=>{


    it('empty last name', () => {
        cy.visit('register');
        cy.get('#first-name').type('Dora');
        cy.get('#email').type('ssss111@test.com');
        cy.get('#password').type('12345678');
        cy.get('#password-confirmation').type('12345678');
        cy.get('.form-check-input').click();
        cy.get("button[type='submit']").click();
        cy.wait(2000);
    });


    it('empty first name', () => {
        cy.visit('register');
        cy.get('#last-name').type('Bo');
        cy.get('#email').type('ssss111@test.com');
        cy.get('#password').type('12345678');
        cy.get('#password-confirmation').type('12345678');
        cy.get('.form-check-input').click();
        cy.get("button[type='submit']").click();
        cy.wait(2000);
    });


    it("Accepted terms and conditions isn't checked", () => {
        cy.visit('register');
        cy.get('#first-name').type('Dora');
        cy.get('#last-name').type('Bo');
        cy.get('#email').type('ssss111@test.com');
        cy.get('#password').type('12345678');
        cy.get('#password-confirmation').type('12345678');
        cy.get("button[type='submit']").click();
        cy.wait(2000);
    });


    it('Register with spaces', () => {
        cy.visit('register');
        cy.get('#first-name').type(' ');
        cy.get('#last-name').type(' ');
        cy.get('#email').type('ssss111@test.com');
        cy.get('#password').type('12345678');
        cy.get('#password-confirmation').type('12345678');
        cy.get('.form-check-input').click();
        cy.get("button[type='submit']").click();
        cy.wait(2000);
    });


    it('Exceeding maximum characters for the first name', () => {
        var a = '';
        for(let i = 0; i < 257; i++){
            a += 'a';
        }
        cy.visit('register');
        cy.get('#first-name').type(a);
        cy.get('#last-name').type('Bo');
        cy.get('#email').type('ssss111@test.com');
        cy.get('#password').type('12345678');
        cy.get('#password-confirmation').type('12345678');
        cy.get('.form-check-input').click();
        cy.get("button[type='submit']").click();
        cy.wait(2000);
    });


    it('Exceeding maximum characters for the last name', () => {
        var a = '';
        for(let i = 0; i < 257; i++){
            a += 'a';
        }
        cy.visit('register');
        cy.get('#first-name').type('Dora');
        cy.get('#last-name').type(a);
        cy.get('#email').type('ssss111@test.com');
        cy.get('#password').type('12345678');
        cy.get('#password-confirmation').type('12345678');
        cy.get('.form-check-input').click();
        cy.get("button[type='submit']").click();
        cy.wait(2000);
    });


    it('Email validation - email without ".com"', () => {
        cy.visit('register');
        cy.get('#first-name').type('Dora');
        cy.get('#last-name').type('Bo');
        cy.get('#email').type('ssss111@test');
        cy.get('#password').type('12345678');
        cy.get('#password-confirmation').type('12345678');
        cy.get('.form-check-input').click();
        cy.get("button[type='submit']").click();
        cy.wait(2000);
    });


    it('Email validation - email without "@"', () => {
        cy.visit('register');
        cy.get('#first-name').type('Dora');
        cy.get('#last-name').type('Bo');
        cy.get('#email').type('ssss111test.com');
        cy.get('#password').type('12345678');
        cy.get('#password-confirmation').type('12345678');
        cy.get('.form-check-input').click();
        cy.get("button[type='submit']").click();
        cy.wait(2000);
    });


    it('Password with 8 characters all letters', () => {
        cy.visit('register');
        cy.get('#first-name').type('Dora');
        cy.get('#last-name').type('Bo');
        cy.get('#email').type('ssss111@test.com');
        cy.get('#password').type('aaaaaaaa');
        cy.get('#password-confirmation').type('12345678');
        cy.get('.form-check-input').click();
        cy.get("button[type='submit']").click();
        cy.wait(2000);
    });


    it('Password with 7 characters', () => {
        cy.visit('register');
        cy.get('#first-name').type('Dora');
        cy.get('#last-name').type('Bo');
        cy.get('#email').type('ssss111@test.com');
        cy.get('#password').type('aaaaaa2');
        cy.get('#password-confirmation').type('12345678');
        cy.get('.form-check-input').click();
        cy.get("button[type='submit']").click();
        cy.wait(2000);
    });


    it("Password and confirmed password doesn't match", () => {
        cy.visit('register');
        cy.get('#first-name').type('Dora');
        cy.get('#last-name').type('Bo');
        cy.get('#email').type('ssss111@test.com');
        cy.get('#password').type('12345678');
        cy.get('#password-confirmation').type('12345679');
        cy.get('.form-check-input').click();
        cy.get("button[type='submit']").click();
        cy.wait(2000);
    });


   it('Registration with registrated email', () => {
        cy.visit('register');
        cy.get('#first-name').type('Dora');
        cy.get('#last-name').type('Bo');
        cy.get('#email').type('ssss1@test.com');
        cy.get('#password').type('12345678');
        cy.get('#password-confirmation').type('12345678');
        cy.get('.form-check-input').click();
        cy.get("button[type='submit']").click();
        cy.wait(2000);
    });


    it('Register with maximum characers for the first name', () => {
        var a = '';
        for(let i = 0; i < 255; i++){
            a += 'a';
        }

        cy.visit('register');
        cy.get('#first-name').type(a);
        cy.get('#last-name').type('Bo');
        cy.get('#email').type(`${Date.now()}@test.com`);
        cy.get('#password').type('12345678');
        cy.get('#password-confirmation').type('12345678');
        cy.get('.form-check-input').click();
        cy.get("button[type='submit']").click();
        cy.wait(2000);
    });

 
    it('Register with maximum characers for the last name', () => {
        var a = '';
        for(let i = 0; i < 255; i++){
            a += 'a';
        }
        cy.visit('register');
        cy.get('#first-name').type('Dora');
        cy.get('#last-name').type(a);
        cy.get('#email').type(`${Date.now()}@test.com`);
        cy.get('#password').type('12345678');
        cy.get('#password-confirmation').type('12345678');
        cy.get('.form-check-input').click();
        cy.get("button[type='submit']").click();
        cy.wait(2000);
    });


    it('Register with minimum characters in the first name', () => {
        cy.visit('register');
        cy.get('#first-name').type('D');
        cy.get('#last-name').type('Bo');
        cy.get('#email').type(`${Date.now()}@test.com`);
        cy.get('#password').type('12345678');
        cy.get('#password-confirmation').type('12345678');
        cy.get('.form-check-input').click();
        cy.get("button[type='submit']").click();
        cy.wait(2000);
    });


    it('Register with unicode characters in names', () => {
        cy.visit('register');
        cy.get('#first-name').type('习近平');
        cy.get('#last-name').type('习近平');
        cy.get('#email').type(`${Date.now()}@test.com`);
        cy.get('#password').type('12345678');
        cy.get('#password-confirmation').type('12345678');
        cy.get('.form-check-input').click();
        cy.get("button[type='submit']").click();
        cy.wait(2000);
    });


    it('Register with special characters', () => {
        cy.visit('register');
        cy.get('#first-name').type('Dora@');
        cy.get('#last-name').type('Bo@');
        cy.get('#email').type(`${Date.now()}@test.com`);
        cy.get('#password').type('12345678');
        cy.get('#password-confirmation').type('12345678');
        cy.get('.form-check-input').click();
        cy.get("button[type='submit']").click();
        cy.wait(2000);
    });


    it('Password with spaces', () => {
        cy.visit('register');
        cy.get('#first-name').type('Dora');
        cy.get('#last-name').type('Bo');
        cy.get('#email').type(`${Date.now()}@test.com`);
        cy.get('#password').type('1234 5678');
        cy.get('#password-confirmation').type('1234 5678');
        cy.get('.form-check-input').click();
        cy.get("button[type='submit']").click();
        cy.wait(2000);
    });


    it('Trimming unnecessary spaces', () => {
        cy.visit('register');
        cy.get('#first-name').type(' Dora');
        cy.get('#last-name').type('Bo');
        cy.get('#email').type(`${Date.now()}@test.com`);
        cy.get('#password').type('12345678');
        cy.get('#password-confirmation').type('12345678');
        cy.get('.form-check-input').click();
        cy.get("button[type='submit']").click();
        cy.wait(2000);
    });
})



