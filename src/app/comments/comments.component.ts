import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

export interface UserComment {
  firstName: string;
  lastName?: string;
  email?: string;
  comment: string;
  createdAt: string;
}

@Component({
  selector: 'app-comment',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.sass'],
})

export class CommentsComponent implements OnInit {
  formGroup!: FormGroup;
  comments: UserComment[] = [];
  private STORAGE_KEY = 'site_comments';

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      comment: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadComments();
  }

  onSubmit() {
    if (this.formGroup.invalid) {
      // mark all fields as touched to show validation
      this.formGroup.markAllAsTouched();
      return;
    }

    const value = this.formGroup.value;
    const newComment: UserComment = {
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      comment: value.comment,
      createdAt: new Date().toISOString(),
    };

    this.comments.unshift(newComment); // newest first
    this.saveComments();
    this.formGroup.reset();
  }

  loadComments() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (raw) {
        this.comments = JSON.parse(raw) as UserComment[];
      }
    } catch (err) {
      console.error('Failed to load comments from storage', err);
      this.comments = [];
    }
  }

  saveComments() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.comments));
    } catch (err) {
      console.error('Failed to save comments to storage', err);
    }
  }
}
