/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');

const agent = session(app);
const videogame = {
  name: 'Super Mario Bros',
};

describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Videogame.sync({ force: true })
    .then(() => Videogame.create({
      name: "The Lord of The Rings",
      description_raw: "An adventure game based on the movie",
      released: '15/06/2004',
      rating: '10.0',
      platforms: ["Playstation 2", "Nintendo"],
      genres: ['Action', 'Adventure'],
    })
    )
    );

  describe('GET /genres', () => {
    it('should get 200', () =>
      agent.get('/genres').expect(200)
    );
  });

describe("POST /videogame", () => {
  it("should get 200", () => {
    agent
      .post("/videogame")
      .send({
        name: "The Lord of The Rings",
        description_raw: "An adventure game based on the movie",
        released: '15/06/2004',
        rating: '10.0',
        platforms: ["Playstation 2", "Nintendo"],
        genres: ['Action', 'Adventure'],
      })
      .expect(200);
  });
  it("creates a game in database", () => {
    agent
      .post("videogame")
      .send({
        name: "The Lord of The Rings",
        description_raw: "An adventure game based on the movie",
        released: '15/06/2004',
        rating: '10.0',
        platforms: ["Playstation 2", "Nintendo"],
        genres: ['Action', 'Adventure'],
      })
      .then(() => {
        Videogames.findOne({
          where: {
            name: "The Lord of The Rings",
          },
        });
      })
      .then((game) => {
        expect(game).to.exist;
      });
  });
  it('correctly sets games in database', () => {
    agent.post('/videogame')
    .send({
      name: "The Lord of The Rings",
      description_raw: "An adventure game based on the movie",
      released: '15/06/2004',
      rating: '10.0',
      platforms: ["Playstation 2", "Nintendo"],
      genres: ['Action', 'Adventure'],
    })
    .then(() => {
      Videogame.findOne({
        where: {
          name: 'The Lord of The Rings'
        },
        include: {
          model: Gender
        }
      });
    })
    .then((game) => {
      expect(game.gender[0].name).to.equal('Action');
      expect(game.gender[1].name).to.equal('Adventure');

      })
    })
  });
});
