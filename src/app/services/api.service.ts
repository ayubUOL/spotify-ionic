import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  client_id = '31855a8299f04689a26533cf3b12be76'; // Your client id
  client_secret = '31e2ce7fbbc846c0b9f0ccc2f7cebe48';
  // auth_token: any = 'BQDWhx80HHFcBfgdfgGl6K_fJngBKOkc6IdMe8eBRhjQOJ7D2bwTO5sVGtpkYbxATTmK4UQOWxKMXYmsND8';
  auth_token: any = '';
  
  constructor(private http: HttpClient) {}

  getOAuth(){
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*, http://localhost:8100',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization, App-Platform, Authorization, Content-Type, Origin, Retry-After, Spotify-App-Version, X-Cloud-Trace-Context, client-token, content-access-token',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic MzE4NTVhODI5OWYwNDY4OWEyNjUzM2NmM2IxMmJlNzY6MzFlMmNlN2ZiYmM4NDZjMGI5ZjBjY2MyZjdjZWJlNDg='
    });

    let url: string = 'https://accounts.spotify.com/api/token'
    return from(this.http.post(url, { headers: headers, params: { grant_type: 'client_credentials' } }));
  }

  public getTrendingRepos() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.auth_token
    });

    let url: string =
      "https://api.spotify.com/v1/playlists/5frIBWkDfmo0QY4WmyNqd9";
    return from(this.http.get(url, { headers: headers }));
  }
}
