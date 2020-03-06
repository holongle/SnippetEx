package com.jhipsterl.service.dto;

import com.jhipsterl.domain.Snippet;


public class SnippetDTO {

    private Long id;

    private String title;

    private String description;

    private String content;

    private Long user_id;

    public SnippetDTO() {
        // Empty constructor needed for Jackson.
    }

    public SnippetDTO(Snippet snippet) {
        this.id = snippet.getId();
        this.title = snippet.getTitle();
        this.description = snippet.getDescription();
        this.content = snippet.getContent();
        this.user_id = snippet.getUserId();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Long getUserId() {
        return user_id;
    }

    public void setUserId(Long userId) {
        this.user_id = userId;
    }

/*
    @Override
    public String toString() {
        return "UserDTO{" +
            "login='" + login + '\'' +
            ", firstName='" + firstName + '\'' +
            ", lastName='" + lastName + '\'' +
            ", email='" + email + '\'' +
            ", imageUrl='" + imageUrl + '\'' +
            ", activated=" + activated +
            ", langKey='" + langKey + '\'' +
            ", createdBy=" + createdBy +
            ", createdDate=" + createdDate +
            ", lastModifiedBy='" + lastModifiedBy + '\'' +
            ", lastModifiedDate=" + lastModifiedDate +
            ", authorities=" + authorities +
            "}";
    }*/
}
