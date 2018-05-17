import {
  fetchRecentFilms,
  addUserFetch,
  fetchUser
} from "./apiCall";
import mockData from "../mockData/mockData";
import key from "./apiKey";

describe("apiCall", () => {
  describe("Fetch recent films", () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(mockData)
        })
      );
    });

    it("Should be called with the right params", async () => {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`;

      await fetchRecentFilms();

      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    it("Should return an object if status code is ok", async () => {
      await expect(fetchRecentFilms()).resolves.toEqual(mockData);
    });

    it("Should throw an error if status code is not ok", async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 500
        })
      );

      await expect(fetchRecentFilms()).rejects.toEqual("Failed to fetch data");
    });
  });

  describe("postNewUser", () => {
    let mockUsers;
    let mockUser


    beforeEach(() => {
      mockUser = {
        name: "Alan",
        email: "alan@doc.com",
        password: "DocisGr8"
      };
      mockUsers = [{
          name: "Doc",
          email: "doc@doc.com",
          password: "DocisGr8"
        },
        {
          name: "Sage",
          email: "sage@doc.com",
          password: "DocisGr8"
        }
      ];

      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () =>
            Promise.resolve({
              users: mockUsers
            })
        })
      );
    });

    it("calls fetch with the correct data when adding a new user", async () => {
      const expected = [
        "http://localhost:3000/api/users/new",
        {
          body: JSON.stringify(mockUser),
          headers: {
            Accept: 'application/json', 
            "Content-Type": "application/json"
          },
          method: "POST"
        }
      ];

      await addUserFetch(mockUser);

      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it.skip("sets an error when the fetch fails", async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 500
        }));

      await expect(addUserFetch(mockUser)).rejects.toEqual("Failed to fetch data");
    });
  });

  describe('fetchUser', () => {
    let mockUsers;
    let mockUser;

    beforeEach(() => {
      mockUser = {
        "password": "password",
        "email": "tman2272@aol.com"
      }
      mockUsers = [{
                "id": 1,
                "name": "Taylor",
                "password": "password",
                "email": "tman2272@aol.com"
              }, {
                "id": 2,
                "name": "Dude",
                "password": "password",
                "email": "dude6969@aol.com"
              }];
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(mockUsers[0])
        })
      );
    });
    
    it('Should be called with the correct params', async () => {
      const url = 'http://localhost:3000/api/users'
      const expected = [url, {
        method: 'POST',
        body: JSON.stringify({
          email: mockUser.email,
          password: mockUser.password
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }]
      await fetchUser(mockUser);

      expect(window.fetch).toHaveBeenCalledWith(...expected);
    })
   
    it('Should return an object if the status code is ok', async () => {
      const expected = {
        "id": 1,
        "name": "Taylor",
        "password": "password",
        "email": "tman2272@aol.com"
      };
      const actual = await fetchUser(mockUser);

      expect(actual).toEqual(expected);
    }) 

    it('sets an error when the fetch fails', async () => {
      window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        status: 500
      }))

      await expect(fetchUser(mockUser)).rejects.toEqual('Failed to fetch data');
    });
  });
});