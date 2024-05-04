import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { BASE_API_URL_TOKEN } from '../tokens';
import { ProductList } from './products.schemas';

@Injectable()
export class ProductsService {
  private readonly baseApiUrl: string = inject(BASE_API_URL_TOKEN);
  private readonly httpClient = inject(HttpClient);

  getProducts({ limit = 10, offset = 0 }) {
    const url = new URL(`${this.baseApiUrl}/products`);
    url.searchParams.set('limit', limit.toString());
    url.searchParams.set('offset', offset.toString());
    return this.httpClient
      .get(url.toString())
      .pipe(map((res) => ProductList.parse(res)));
  }
}
