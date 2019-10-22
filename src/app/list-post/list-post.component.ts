import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  posts = [];
  constructor(private apiService: ApiServiceService, private router: Router) {}

  ngOnInit() {
    this.apiService.getPost().subscribe((data: any) => {
      for (var i = 0; i < 25; i++) {
        this.posts.push({
          userId: data[i].userId,
          id: data[i].id,
          title: data[i].title,
          body: data[i].body
        });
      }
    });
  }
  deletePost(postId) {
    this.apiService.deletePost(postId).subscribe(res => {
      alert('Deleted successfully');
      this.router.navigate(['/']);
    });
  }
}
