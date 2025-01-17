package com.ssafy.suquiz.socialLogin.oauth.oauthApi.client;


import com.ssafy.suquiz.socialLogin.oauth.oauthApi.params.OAuthLoginParams;
import com.ssafy.suquiz.socialLogin.oauth.oauthApi.params.OAuthLogoutParams;
import com.ssafy.suquiz.socialLogin.oauth.oauthApi.response.OAuthInfoResponse;
import com.ssafy.suquiz.user.domain.OAuthProvider;

public interface OAuthApiClient {
    OAuthProvider oAuthProvider(); // Client 타입 변환
    String requestAccessToken(OAuthLoginParams params); // 인증코드를 통한 엑세스 토큰 취득
    OAuthInfoResponse requestOauthInfo(String accessToken); // 엑세스토큰을 통한 프로필 정보 획득
    RevokeTokenResponseDto revokeAccessToken(OAuthLogoutParams params); // 로그아웃 시 엑세스 토큰 회수
}
