const { Videogame, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Videogame.create({ name: 'Super Mario Bros' });
      });
    });
    describe("name", () => {
      it("should not create game if name is null", () => {
        Videogame.create({
          description_raw: "A very fun game",
          released: "11/09/2007",
          rating: "4.0",
          platforms: ["Nintendo"],
        })
        .then(() => done('Should not have been created'))
        .catch(() => done());
      });
      it("should not create game if name is not string", () => {
        Videogame.create({
          name: 2234,
          description_raw: "A very fun game",
          released: "11/09/2007",
          rating: "4.0",
          platforms: ["Nintendo"],
        })
        .then(() => done('Should not have been created'))
        .catch(() => done());
      });
  });
  describe("description", () => {
    it("should not create game if description is null", () => {
      Videogame.create({
        name: 'Mario Bross',
        released: "11/09/2007",
        rating: "4.0",
        platforms: ["Nintendo"],
      })
      .then(() => done('Should not have been created'))
      .catch(() => done());
    });
  });

  });

});
