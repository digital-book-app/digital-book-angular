import { Component, inject, OnInit } from '@angular/core';
import { NoteService } from './note.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-note',
  imports: [MatCardModule, MatButtonModule, MatChipsModule, DatePipe],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss',
  host: {
    class: 'flex flex-col gap-4 h-full',
  },
})
export class NoteComponent implements OnInit {
  private readonly noteService = inject(NoteService);
  readonly notes = this.noteService.notes;

  ngOnInit(): void {
    this.noteService
      .loadNotes({
        page: 1,
        limit: 10,
      })
      .subscribe();
  }
}
