import { Component, inject, OnInit } from '@angular/core';
import { NoteService } from './note.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-note',
  imports: [MatCardModule],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss',
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
