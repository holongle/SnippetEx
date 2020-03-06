package com.jhipsterl.service;

import com.jhipsterl.domain.Snippet;
import com.jhipsterl.repository.SnippetRepository;
import com.jhipsterl.service.dto.SnippetDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class SnippetService {

    private final Logger log = LoggerFactory.getLogger(UserService.class);

    private final SnippetRepository snippetRepository;


    public SnippetService(SnippetRepository snippetRepository) {
        this.snippetRepository = snippetRepository;
    }

    public void deleteSnippet(long id) {
        snippetRepository.findById(id).ifPresent(snippet -> {
            snippetRepository.delete(snippet);
            log.debug("Deleted snippet: {}", snippet);
        });
    }

    public Snippet createSnippet(SnippetDTO snippetDTO) {
        Snippet snippet = new Snippet();
        snippet.setTitle(snippetDTO.getTitle());
        snippet.setDescription(snippetDTO.getDescription());
        snippet.setContent(snippetDTO.getContent());
        snippet.setUserId(snippetDTO.getUserId());
        snippetRepository.save(snippet);
        log.debug("Created Information for Snippet: {}", snippet);
        return snippet;
    }

    public Snippet updateSnippet(SnippetDTO snippetDTO) {
        Snippet snippet = snippetRepository.findById(snippetDTO.getId()).get();
        if (snippetDTO.getTitle() != null) {
            snippet.setTitle(snippetDTO.getTitle());
        }
        if (snippetDTO.getDescription() != null) {
            snippet.setDescription(snippetDTO.getDescription());
        }

        if (snippetDTO.getContent() != null) {
            snippet.setContent(snippetDTO.getContent());
        }
        snippetRepository.save(snippet);

        return snippet;
    }

}
