import { Component } from '@angular/core';
import { PostService} from '../services/Posts.services';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    providers:[PostService]
})
export class UserComponent {

    name: string;
    email: string;
    address: address;
    hobbies: string[];
    showHobbies: boolean;
    posts:Post[];

    constructor(private postService:PostService) {
        //console.log('constructor ran');
        this.name = 'john';
        this.email = 'john@gmail.com';
        this.address = {
            street: 'main',
            city: 'colombo',
            state: 'cmb'
        }
        this.hobbies = ['music', 'movies', 'reading', 'ridding'];
        this.showHobbies = false;

        this.postService.getPosts().subscribe(posts =>{
            console.log(posts);
            this.posts = posts;
        });
    }

    toggleHobbies() {
        if (this.showHobbies == true) {
            this.showHobbies = false;
        } else {
            this.showHobbies = true;
        }
    }

    addHobby(hobby:string){
        this.hobbies.push(hobby);
    }

    deleteHobby(i:number){
        this.hobbies.splice(i, 1);
    }
}

interface address {
    street: string;
    city: string;
    state: string;
}

interface Post{
    id: number;
    title: string;
    body: string;
    //message: string;
    //name: string;
}