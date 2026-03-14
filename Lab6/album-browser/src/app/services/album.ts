// это сервис
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';
import { shareReplay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AlbumService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';
  private albumCache = new Map<number, Observable<Album>>();

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.baseUrl}/albums`);
  }

  getAlbum(id: number): Observable<Album> {
    const cached = this.albumCache.get(id);
    if (cached) return cached;
  
    const req$ = this.http
      .get<Album>(`${this.baseUrl}/albums/${id}`)
      .pipe(shareReplay(1));
  
    this.albumCache.set(id, req$);
    return req$;
  }

  getAlbumPhotos(id: number) {
    return this.http.get<Photo[]>(`${this.baseUrl}/albums/${id}/photos`);
  }
}