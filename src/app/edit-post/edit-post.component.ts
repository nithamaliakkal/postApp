import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { post } from 'src/Post';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  postForm: FormGroup;
  posts: post;
  id: number;
  constructor(
    private route: ActivatedRoute,
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

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.apiservice.editPost(params['id']).subscribe((data: any) => {
        this.posts = data;
        this.id = data.id;
        this.postForm.get('userId').setValue(this.posts.userId);
        this.postForm.get('title').setValue(this.posts.title);
        this.postForm.get('body').setValue(this.posts.body);
      });
    });
  }
  updatePost() {
    this.apiservice.updatePost(this.postForm.value, this.id).subscribe(data => {
      alert('Updated successfully');
      this.router.navigate(['/']);
    });
  }
}
