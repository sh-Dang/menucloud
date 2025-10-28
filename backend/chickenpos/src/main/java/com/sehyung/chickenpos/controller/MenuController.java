package com.sehyung.chickenpos.controller;

import com.sehyung.chickenpos.repository.MenuRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Slf4j
public class MenuController {
    private final MenuRepository chickenRepository;

    @GetMapping("/menu")
    public String menu() {
        log.debug("치킨메뉴 컨트롤러가 올바르게 가동 되었습니다.");
        return "시스템 가동 준비완료";
    }
}
