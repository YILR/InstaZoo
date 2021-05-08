package com.example.demo.dto;

import lombok.Data;

import java.util.Set;

@Data
public class PostDto {

    private Long id;
    private String title;
    private String caption;
    private String location;
    private String userName;
    private Integer likes;
    private Set<String> usersLiked;
}
