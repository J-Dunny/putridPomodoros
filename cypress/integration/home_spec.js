describe('Home Page', () => {
    it('Should be able to visit the page and render the correct header elements', () => {
        cy.visit('http://localhost:3000')
            .contains('Putrid Pomodoros')
            // .get('label')
            // .contains('Search')

    })

    it('Should be able to visit the page and render the correct movie card elements', () => {
        cy.visit('http://localhost:3000')
            .get('article')
            .get('img[src="https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"]')
            .get('h1')
            .contains('🍅')
    })

    it('user should be able to input a search and the value should include the input ', () => {
        cy.get('input[type="text"]')
            .type('money plane')
            .should('have.value', 'money plane')
    })


    it('componentDidMount should fetch all movies data', () => {
        // cy.visit('http://localhost:3000')
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
            statusCode: 200,
            body: {
                id: 694919,
                poster_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
                title: "Money Plane"
            }
        })
    });


    it('fetchOneMovie should pull all information for one movie', () => {

        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
            statusCode: 200,
            body: {
                average_rating: 6.625,
                backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
                budget: 0,
                genres: ['Action'],
                id: 694919,
                overview: "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
                poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
                release_date: "2020-09-29",
                revenue: 0,
                runtime: 82,
                tagline: "",
                title: "Money Plane"
            }
        })
    });

    it('should display individual movie and details', () => {
        cy.visit('http://localhost:3000')
            //Failing test right here ---------------------------------------
            .get('article').click()
            // cy.location('pathname').should('eq', '/contact')
            //.get('article')
            .get('img[src="https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"]')
            .get('h4')
            .contains('Rating: 6.63')
    })
});


// cy.location('pathname').should('eq', '/contact')
















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