import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { AlbumService } from '../../services/album';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css',
})
export class AlbumPhotos {
  albumId$;
  photos$;

  constructor(private route: ActivatedRoute, private albumService: AlbumService) {
    this.albumId$ = this.route.paramMap.pipe(
      map((p) => Number(p.get('id')))
    );

    this.photos$ = this.albumId$.pipe(
      switchMap((id) => this.albumService.getAlbumPhotos(id))
    );
  }
}