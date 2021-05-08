package com.example.demo.facade;

import com.example.demo.dto.CommentDto;
import com.example.demo.entity.Comment;
import org.springframework.stereotype.Component;

@Component
public class CommentFacade {

    public CommentDto commentToCommentDto(Comment comment){
        CommentDto commentDto = new CommentDto();
        commentDto.setId(comment.getId());
        commentDto.setUserName(comment.getUserName());
        commentDto.setMessage(comment.getMessage());
        return commentDto;
    }
}
