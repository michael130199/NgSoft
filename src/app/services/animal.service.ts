import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { GLOBAL } from './global'; //lo cambie por el environment
import { environment } from '../../environments/environment';


@Injectable()

export class AnimalService {

    public url: string;

    constructor(private _http: HttpClient){
        this.url = environment.host.api;
    }

    addAnimal(token, animal): Observable<any> {
        let params = JSON.stringify(animal);
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': token
        });

        return this._http.post(
            this.url + 'animal',
            params,
            {headers: headers}
        );

    }

    getAnimals(): Observable<any>{
        let headers = new HttpHeaders({'Content-type':'application/json'});
        let options = new HttpResponse({headers: headers});

        return this._http.get(
            this.url + 'animals', 
            options
        );
    }

    getAnimal(id): Observable<any>{
        let headers = new HttpHeaders({'Content-type':'application/json'});
        let options = new HttpResponse({headers: headers});

        return this._http.get(
            this.url + 'animal/' + id, 
            options
        );
    }

    editAnimal(token, id, animal): Observable<any> {
        let params =  JSON.stringify(animal);
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': token
        });

        return this._http.put(
            this.url + 'update-animal/' + id,
            params,
            {headers: headers}
        )
    }

    deleteAnimal(token, id): Observable<any> {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        let options = new HttpResponse({headers: headers});

        return this._http.delete(
            this.url + 'animal/' + id,
            options);
    }

}