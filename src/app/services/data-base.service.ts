import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../User';
import {data} from '../constant';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class DataBaseService {
// all secure except login and register
  private AuthURL = data.baseURL + '/login';
  private secure = '/secure';
  private RequestURL = data.baseURL + this.secure + '/api/v1/request';
  private PressesURL = data.baseURL + this.secure + '/api/v1/presses' + '?hubId=1';
  private ProductURL = data.baseURL + this.secure + '/api/v1/products' + '?hubId=1';
  private ProjectURL = data.baseURL + this.secure + '/api/v1/projects' + '?hubId=1';
  private MediaURL = data.baseURL + this.secure + '/api/v1/media' + '?hubId=1';
  private MediaTypeURL = data.baseURL + this.secure + '/api/v1/mediaType' + '?hubId=1';
  private ComponentURL = data.baseURL + this.secure + '/api/v1/components' + '?hubId=1';
  private AddRequestURL = data.baseURL + this.secure + '/api/v1/request';
  userInfo = {};

  constructor(private http: HttpClient) {
  }

  getLogInToken(userInfo: User): Observable<any> {
    return this.http.post<any>(this.AuthURL, userInfo);

  }

  getRequestByUserId(): Observable<any> {
    return this.http.get<any>(this.RequestURL, httpOptions);

  }

  getAvailablePresses(): Observable<any> {
    return this.http.get<any>(this.PressesURL, httpOptions);
  }

  getProducts(): Observable<any> {
    return this.http.get<any>(this.ProductURL, httpOptions);
  }

  getProjects(): Observable<any> {
    return this.http.get<any>(this.ProjectURL, httpOptions);
  }

  getMedia(): Observable<any> {
    return this.http.get<any>(this.MediaURL, httpOptions);
  }

  getMediaTypes(): Observable<any> {
    return this.http.get<any>(this.MediaTypeURL, httpOptions);
  }

  getComponents(): Observable<any> {
    return this.http.get<any>(this.ComponentURL, httpOptions);
  }

  createRequest(submitRequestData): Observable<any> {
    console.log(submitRequestData);
    return this.http.post(this.AddRequestURL, submitRequestData);

  }

}
