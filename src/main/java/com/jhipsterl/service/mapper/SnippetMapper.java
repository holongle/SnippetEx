package com.jhipsterl.service.mapper;

import com.jhipsterl.domain.Snippet;
import com.jhipsterl.service.dto.SnippetDTO;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class SnippetMapper {

    public List<SnippetDTO> snippetsToSnippetDTOs(List<Snippet> snippets) {
        return snippets.stream()
            .filter(Objects::nonNull)
            .map(this::snippetToSnippetDTO)
            .collect(Collectors.toList());
    }

    public SnippetDTO snippetToSnippetDTO(Snippet snippet) {
        return new SnippetDTO(snippet);
    }

    public List<Snippet> userDTOsToUsers(List<SnippetDTO> snippetDTOS) {
        return snippetDTOS.stream()
            .filter(Objects::nonNull)
            .map(this::snippetDTOToSnippet)
            .collect(Collectors.toList());
    }

    public Snippet snippetDTOToSnippet(SnippetDTO snippetDTO) {
        if (snippetDTO == null) {
            return null;
        } else {
            Snippet snippet = new Snippet();
            snippet.setId(snippetDTO.getId());
            snippet.setTitle(snippetDTO.getTitle());
            snippet.setDescription(snippetDTO.getDescription());
            snippet.setContent(snippetDTO.getContent());
            snippet.setUserId(snippetDTO.getUserId());
            return snippet;
        }
    }




  /*  public User userFromId(Long id) {
        if (id == null) {
            return null;
        }
        User user = new User();
        user.setId(id);
        return user;
    }*/
}
