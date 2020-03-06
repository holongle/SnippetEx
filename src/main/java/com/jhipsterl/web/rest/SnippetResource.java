package com.jhipsterl.web.rest;

import com.jhipsterl.domain.Snippet;
import com.jhipsterl.repository.SnippetRepository;
import com.jhipsterl.service.SnippetService;
import com.jhipsterl.service.dto.SnippetDTO;
import com.jhipsterl.service.mapper.SnippetMapper;
import com.jhipsterl.web.rest.errors.BadRequestAlertException;
import io.github.jhipster.web.util.ResponseUtil;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class SnippetResource {

    private final SnippetService snippetService;

    private final SnippetRepository snippetRepository;

    public SnippetResource(SnippetService snippetService, SnippetRepository snippetRepository) {
        this.snippetService = snippetService;
        this.snippetRepository = snippetRepository;
    }

    @GetMapping("/snippetsH")
    public ResponseEntity<String> getHello() {
        return new ResponseEntity<>("hello", HttpStatus.OK);
    }

    @GetMapping("/snippets")
    public ResponseEntity<List<SnippetDTO>> getAllSnippets() {
        List<Snippet> allSnippets = this.snippetRepository.findAll();
        return new ResponseEntity<>(new SnippetMapper().snippetsToSnippetDTOs(allSnippets), HttpStatus.OK);
    }

    @GetMapping("/snippets/{id}")
    public ResponseEntity<SnippetDTO> getSnippetById(@PathVariable Long id) {
        Optional<Snippet> snippetById = this.snippetRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(snippetById.map(SnippetDTO::new));
    }

    @GetMapping("/snippets/user/{id}")
    public ResponseEntity<List<SnippetDTO>> getSnippetByUserId(@PathVariable Long id) {
        List<Snippet> snippetsById = this.snippetRepository.findByUserId(id);
        return new ResponseEntity<>(new SnippetMapper().snippetsToSnippetDTOs(snippetsById), HttpStatus.OK);
    }

    @DeleteMapping("/snippets/{id}")
    public void deleteUser(@PathVariable Long id) {
        snippetService.deleteSnippet(id);
    }

    @PostMapping("/snippets")
    public ResponseEntity<Snippet> createSnippet(@Valid @RequestBody SnippetDTO snippetDTO) throws URISyntaxException {
        if (snippetDTO.getId() != null) {
            throw new BadRequestAlertException("A new snippet cannot already have an ID", "", "");
        } else if (snippetDTO.getUserId() == null) {
            throw new BadRequestAlertException("user id is require", "", "");
        } else {
            Snippet newSnippet = snippetService.createSnippet(snippetDTO);
            return new ResponseEntity<Snippet>(newSnippet, HttpStatus.OK);
        }
    }

    @PutMapping("/snippets")
    public ResponseEntity<Snippet> updateSnippet(@Valid @RequestBody SnippetDTO snippetDTO) throws URISyntaxException {
        if (snippetDTO.getId() == null) {
            throw new BadRequestAlertException("id require", "", "");
        } else {
            Snippet newSnippet = snippetService.updateSnippet(snippetDTO);
            return new ResponseEntity<Snippet>(newSnippet, HttpStatus.OK);
        }
    }
}

