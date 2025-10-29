package com.sehyung.chickenpos.domain.entity;

import jakarta.persistence.*;

@Entity
public class MenuCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="menu_category_id")
    private long menuCategoryId;

    @Column(name="name")
    private String name;

}
