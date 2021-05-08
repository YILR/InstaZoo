package com.example.demo.payload.response;

import lombok.Getter;

@Getter
public class InvalidLoginResponse {

    private String userName;
    private String password;

    public InvalidLoginResponse() {
        this.userName = "Invalid UserName";
        this.password = "Invalid Password";
    }
}
