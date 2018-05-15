import fetchRecentFilms from './apiCall';
import mockData from '../mockData/mockData';
import key from './apiKey';


describe('apiCall', () => {
  describe('Fetch recent films', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(mockData)
        })
      )
    })

    it('Should be called with the right params', async () => {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`;

      await fetchRecentFilms();

      expect(window.fetch).toHaveBeenCalledWith(url);
    })

    it('Should return an object if status code is ok', async () => {
      
      await expect(fetchRecentFilms()).resolves.toEqual(mockData);
    })

    it('Should throw an error if status code is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }))


      await expect(fetchRecentFilms()).rejects.toEqual('Failed to fetch data');
    })

  })
})