import { apiResponse } from '../src/index';
import axios from 'axios';

const fetchData = async (url: string, id?: string): Promise<any> => {
  try {
    const response = id 
      ? await axios.get(`${url}?id=${id}`)
      : await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

const testApi = (description: string, url: string, ids?: string[], exp?: boolean | number): void => {
  test(description, async () => {
    if (ids && ids.length > 0) {
      for (const id of ids) {
        const data = await fetchData(url, id);
        const wrapped = apiResponse.success(data);
        const expected = (wrapped.response.purchaseCount !== 0 && wrapped.response.viewCount !== 0);
        expect(expected).toBe(exp);
      }
    } else {
      const data = await fetchData(url);
      const wrapped = apiResponse.success(data);
      expect(Array.isArray(wrapped.response) ? wrapped.response.length : 0).toBe(exp);
    }
  });
}

const url = 'https://ecom-sandras-g6abfyg2azbqekf8.southeastasia-01.azurewebsites.net/api/products';
const ids: string[] = [
  '6749d310a86aeb9712253d9f',
  '6749d396a86aeb9712253da5',
  '6749d77ea86aeb9712253ffd'
];


testApi("Expects the length of the items: 7", url, undefined, 7);
testApi("Returns true if a product's purchase and view count is not 0", url, ids, true);
