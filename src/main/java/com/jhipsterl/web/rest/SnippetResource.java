package com.jhipsterl.web.rest;

import com.jhipsterl.domain.Snippet;
import com.jhipsterl.domain.User;
import com.jhipsterl.repository.SnippetRepository;
import com.jhipsterl.repository.UserRepository;
import com.jhipsterl.service.SnippetService;
import com.jhipsterl.service.dto.SnippetDTO;
import com.jhipsterl.service.dto.UserDTO;
import com.jhipsterl.service.mapper.SnippetMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class SnippetResource {
    private final SnippetRepository snippetRepository;

    //private final UserRepository userRepository;

    public SnippetResource(SnippetRepository snippetRepository) {
        //this.userRepository = userRepository;
        this.snippetRepository = snippetRepository;
    }

    @GetMapping("/snippets")
    public ResponseEntity<String> getAllUsers() {
        return new ResponseEntity<>("hello", HttpStatus.OK);
//        final Page<UserDTO> page = userService.getAllManagedUsers(pageable);
//        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
//        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    @GetMapping("/snippetsA")
    public ResponseEntity<List<SnippetDTO>> getAllSnippets() {
        //List<User> users = this.userRepository.findAll();

        List<Snippet> allSnippets = this.snippetRepository.findAll();
        //HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        final ResponseEntity<List<SnippetDTO>> tResponseEntity = new ResponseEntity<List<SnippetDTO>>( new SnippetMapper().snippetsToSnippetDTOs(allSnippets), HttpStatus.OK);
        return tResponseEntity;
        //return ResponseUtil.wrapOrNotFound(this.snippetService.getAllSnippets());
    }
}

