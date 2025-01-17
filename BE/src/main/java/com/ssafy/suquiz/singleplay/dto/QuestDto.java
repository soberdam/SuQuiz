package com.ssafy.suquiz.singleplay.dto;

import com.ssafy.suquiz.word.domain.Category;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

public class QuestDto {

    @Getter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class DailyListResponse {

        /**
         * word name, video url, category, subject
         */
        private Category category;  // 자음, 모음, 숫자, 단어
        private String subject;
        private String wordName;
        private String videoUrl;
        private List<Character> syllables;
    }

    @Getter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class DailyStringResponse {

        /**
         * word name, video url, category, subject
         */
        private Category category;  // 자음, 모음, 숫자, 단어
        private String subject;
        private String wordName;
        private String videoUrl;
        private String syllables;
    }

    @Getter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class AdditionalResponse {

        /**
         * word name, video url, category, subject
         */
        private Category category;  // 자음, 모음, 숫자, 단어
        private String subject;
        private String wordName;
        private String videoUrl;
        private List<Character> syllables;
    }
}
