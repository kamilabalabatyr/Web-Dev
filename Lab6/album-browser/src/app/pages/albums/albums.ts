import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album'; 
import { Album } from '../../models/album.model';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class Albums implements OnInit {

  albums: Album[] = [];
  loading = true;
  error = '';

  constructor(private albumService: AlbumService) {}

  ngOnInit() {
    this.albumService.getAlbums()
      .pipe(timeout(8000)) // 8 секунд максимум
      .subscribe({
        next: (data) => {
          this.albums = data
          this.loading = false;
        },
        error: (err) => {
          console.log('ALBUMS ERROR', err);
          this.error = 'Too long to load. Check internet and refresh.';
          this.loading = false;
        }
      });
  }
}