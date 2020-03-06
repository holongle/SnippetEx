package com.jhipsterl.repository;

import com.jhipsterl.domain.Snippet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SnippetRepository extends JpaRepository<Snippet, Long> {
    List<Snippet> findByUserId(long id);

    Optional<Snippet> findOneByTitle(String title);
}

