package com.sehyung.chickenpos.service;

import com.sehyung.chickenpos.repository.MenuRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MenuService {
    private final MenuRepository chickenRepository;
}
