import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { ListPostComponent } from './list-post/list-post.component';

const routes: Routes = [
  { path: '', component: ListPostComponent },
  { path: 'post/create', component: CreatePostComponent },
  {
    path: 'edit/:id',
    component: EditPostComponent
  },
  {
    path: 'posts',
    component: ListPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
