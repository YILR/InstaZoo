package com.example.demo.facade;

import com.example.demo.dto.PostDto;
import com.example.demo.entity.Post;
import org.springframework.stereotype.Component;

@Component
public class PostFacade {

    public PostDto postToPostDto(Post post){
        PostDto postDto = new PostDto();
        postDto.setUserName(post.getUser().getUsername());
        postDto.setId(post.getId());
        postDto.setCaption(post.getCaption());
        postDto.setLikes(post.getLikes());
        postDto.setUsersLiked(post.getLikedUsers());
        postDto.setLocation(post.getLocation());
        postDto.setTitle(post.getTitle());
        return postDto;
    }
}
