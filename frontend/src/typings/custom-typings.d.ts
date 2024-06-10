// typings/custom-typings.d.ts

import * as jquery from 'jquery';

declare global {
  interface JQuery {
    owlCarousel(options?: any): JQuery;
  }
}

export {};
