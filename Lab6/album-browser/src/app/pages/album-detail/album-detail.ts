import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { AlbumService } from '../../services/album';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
})
export class AlbumDetail implements OnInit {
  album?: Album;
  loading = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    //мгновенно подставляем данные, если пришли со списка
    const fromState = history.state?.album as Album | undefined;
    if (fromState) {
      this.album = fromState;     // сразу показываем title/id
      this.loading = false;       // убираем Loading
    }
  
    //дальше всё равно подтягиваем настоящий album с API
    const idStr = this.route.snapshot.paramMap.get('id');
    const id = Number(idStr);
  
    if (!idStr || Number.isNaN(id)) {
      this.error = 'Invalid album id';
      this.loading = false;
      return;
    }
  
    // если album из state не пришёл, тогда покажем loading
    if (!fromState) this.loading = true;
  
    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;      // обновим данными с сервера
        this.loading = false;
      },
      error: (err) => {
        console.log('DETAIL ERROR', err);
        this.error = 'Failed to load album';
        this.loading = false;
      },
    });
  }
}