import {Component, OnInit} from '@angular/core';
import {Blog} from "../model/Blog";
import {BlogService} from "../service/blog.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs?: Blog[];
  error!: string

  ngOnInit(): void {
    this.getBlogs()
  }

  constructor(private blogService: BlogService) {
  }

  getBlogs(): void {
    this.blogService.getAllBlogs().subscribe(data => {
      this.blogs = data
    }, error1 => {
      this.error = error1;
    })

    console.log("blogs:" + this.blogs)
    console.log("error:" + this.error)
  }
}
