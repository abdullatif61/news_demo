import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { APIResponse } from './interface-eczane';

@Injectable({
  providedIn: 'root',
})
export class DataserviseService {
  constructor(private http: HttpClient) {}
  _googleApiKey= "AIzaSyCxUY1qZouWsj-jerRDAB0E7FSO4FmstqI";
  _apiKey = 'apikey 4TT6PB6AI1gNGi5Dg2nlqv:0peIH4zAJl3eD3TdxWMISK';
  _url = 'https://api.collectapi.com/health/dutyPharmacy?il=Istanbul';
  _urlilce = 'https://api.collectapi.com/health/dutyPharmacy?ilce=zeytinburnu&il=Istanbul';

  getEczane(): Observable<APIResponse> {
    return this.http.get<APIResponse>(this._url,{
      headers:{
        authorization: "apikey 4TT6PB6AI1gNGi5Dg2nlqv:0peIH4zAJl3eD3TdxWMISK",
      }
    }).pipe(
      tap((res: APIResponse) => {res
       
        
        
      })
    );
  }
}
