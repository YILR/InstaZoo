import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {NotificationService} from "../../service/notification.service";
import {PostService} from "../../service/post.service";
import {Post} from "../../models/Post";
import {ImageUploadService} from "../../service/image-upload.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  postForm!: FormGroup;
  selectedFile!: File;
  isPostCreated = false
  createdPost!: Post;
  previewImgUrl: any;

  constructor(private fb: FormBuilder, private router: Router, private postService: PostService,
              private notificationService: NotificationService, private imageService: ImageUploadService) { }

  ngOnInit(): void {
    this.postForm = this.createAddPost();
  }


  createAddPost(): FormGroup {
    return this.fb.group({
      title: ['', Validators.compose([Validators.required])],
      caption: ['', Validators.compose([Validators.required])],
      location: ['', Validators.compose([Validators.required])],
    });
  }

  submit(): void {
   this.postService.createPost({
     title: this.postForm.value.title,
     caption: this.postForm.value.caption,
     location: this.postForm.value.location
   }).subscribe(data => {
     this.createdPost = data;
     console.log(data);

     if (this.createdPost.id != null){
       this.imageService.uploadImageToPost(this.selectedFile, this.createdPost.id)
         .subscribe(() => {
           this.notificationService.showSnackBar('Post created successfully');
           this.isPostCreated = true;
           this.router.navigate(['/profile']);
         })
     }
   });

  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = () => {
      this.previewImgUrl = reader.result;
    };
  }

}
