describe('Home Page', () => {
    it('Should be able to visit the page and render the correct elements', () => {
      cy.visit('http://localhost:3000')
        .contains('Putrid Pomodoros')
        .get('label')
          .contains('Search')
        
    });
  });

//   it('should be able to select the email and password inputs and fill them with the corresponding values', () => {
//     cy.visit('http://localhost:3000')
//       .get('input[type="email"]')
//       .type('leta@turing.io')
//       .should('have.value', 'leta@turing.io')
//       .get('input[type="password"]')
//       .type('keane20')
//       .should('have.value', 'keane20')
//   })

// it('should display an error message when a user clicks the Submit button without filling both inputs', () => {
//     cy.visit('http://localhost:3001')
//       .get('button').click()
//     cy.contains('Please fill out both inputs')
//   });

//   it('should be able to fill out the email and password and click Submit, directing the user to a different page', () => {
//     cy.intercept('POST', 'http://localhost:3001/api/v1/login', {
//         statusCode: 201,
//         body: {
//           id: 2,
//           image: "https://ca.slack-edge.com/T029P2S9M-U37MJAV0T-007ccf2f5eb2-512",
//           name: "Leta Keane"
//         }
//       })
//       .visit('http://localhost:3001')
//       .get('input[type="email"]').type('leta@turing.io')
//       .get('input[type="password"]').type('keane20')
//       .get('button').click()
//       .url().should('include', '/dashboard')
//   });

//   it('should display an error message if I submit an incorrect email and password', () => {
//     cy.intercept({
//       method: 'POST',
//       url: 'http://localhost:3001/api/v1/login'
//     },
//     {
//       statusCode: 401,
//       body: { 
//         message: `Email and password do not match.  Please try again.` 
//       }
//     })
//     .visit('http://localhost:3001')
//     .get('input[type="email"]')
//     .type('leta@turing.io')
//     .get('input[type="password"]')
//     .type('YOLO')
//     .get('button').click()
//     .get('p').should('contain', 'Email and password do not match.  Please try again.')
//   });