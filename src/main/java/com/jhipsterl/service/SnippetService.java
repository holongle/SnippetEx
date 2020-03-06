package com.jhipsterl.service;

import com.jhipsterl.domain.Snippet;
import com.jhipsterl.repository.SnippetRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service class for managing users.
 */
@Service
@Transactional
public class SnippetService {

    private final Logger log = LoggerFactory.getLogger(UserService.class);

    private final SnippetRepository snippetRepository;


    public SnippetService(SnippetRepository snippetRepository) {
        this.snippetRepository = snippetRepository;
    }

    @Transactional(readOnly = true)
    public Optional<List<Snippet>> getAllSnippets() {
        return Optional.of(snippetRepository.findAll());
    }


}
