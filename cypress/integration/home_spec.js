describe('Home Page', () => {
    it('Should be able to visit the page and render the correct header elements', () => {
        cy.visit('http://localhost:3000')
            .contains('Putrid Pomodoros')

    })

    it('Should be able to visit the page and render the correct movie card elements', () => {
        cy.visit('http://localhost:3000')
            .get('article')
            .get('img[src="https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"]')
            .get('p')
                .contains('🍅')
    })

    it('user should be able to input a search and the value should include the input ', () => {
        cy.get('input[type="text"]')
            .type('money plane')
            .should('have.value', 'money plane')
    })


    it('componentDidMount should fetch all movies data', () => {
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

    it('should display individual movie and details when the user clicks on a movie image on the home page', () => {
        cy.visit('http://localhost:3000')
            .get('article').should('have.class', 'movie-card')
            .get('img[src="https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"]').click()
                .get('p')
                    .contains('Released: 2020-09-29')
                .get('p')
                    .contains("A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.")
                .get('p')
                    .contains('82 mins')
                .get('p')
                    .contains('Action')
                .get('p')
                    .contains('🍅 6.88')
            cy.get('div').should('have.class', 'one-movie')
                .get('img[src="https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"]')
            cy.get('p[class="exit-button"]').click()
            cy.url().should('eq', 'http://localhost:3000/')
    })
});

it('should display fetch error when a fetch request is made with an invalid url', () => {
    cy.visit('http://localhost:3000')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movi/694919', {
        statusCode: 404
    })
    // ^ Sad Path Test is a work in progress...
});