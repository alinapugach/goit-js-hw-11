'use strict';

export class ImagesAPI {
  constructor() {
    this.BASE_URL = 'https://pixabay.com';
    this.END_POINT = '/api/';
    this.API_KEY = '22926721-5d20aa08498ffd1ff2f906542';
    this.IMAGE_TYPE = 'photo';
    this.ORIENTATION = 'horizontal';
    this.SAFESEARCH = 'true';
  }

  getImages(param) {
    const url = `${this.BASE_URL}${this.END_POINT}?key=${this.API_KEY}&image_type=${this.IMAGE_TYPE}&orientation=${this.ORIENTATION}&safesearch=${this.SAFESEARCH}&q=${param}`;
    console.log(url);
    return fetch(url).then(res => res.json());
  }
}
