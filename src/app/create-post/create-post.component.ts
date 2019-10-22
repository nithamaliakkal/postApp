import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  postForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private apiservice: ApiServiceService,
    private router: Router
  ) {
    this.postForm = this.fb.group({
      userId: ['', Validators.required],
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  ngOnInit() {}
  createPost() {
    this.apiservice.createPost(this.postForm.value).subscribe(data => {
      alert('Created successfully');
      this.router.navigate(['/']);
    });
  }
}
