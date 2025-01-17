package com.ssafy.suquiz.user.repository;

import com.ssafy.suquiz.user.domain.OAuthProvider;
import com.ssafy.suquiz.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {


    Optional<User> findById(long userId);

    @Query("select u from User u where u.email = :email")
    Optional<User> findByEmail(@Param("email") String email);
    Optional<User> findByNickname(String nickname);

    @Query("select u from User u where u.email = :email and u.oAuthProvider = :oauthProvider")
    User findByEmailAndOAuthProvider(@Param("email") String email, @Param("oauthProvider") OAuthProvider oAuthProvider);
    boolean existsByEmail(String email);

    @Query("select u from User u where u.nickname like %:nickname%")
    List<User> findAllByNickname(@Param("nickname") String nickname);


    @Query("select u from User u order by u.level desc, u.xp desc")
    List<User> findAllOrderByExp();
}
