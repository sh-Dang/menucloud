
# 🐔 Chicken POS

소규모 업장을 위한 간편 POS(Point of Sale) 시스템입니다.  
테이블 관리, 주문 처리 등 **필수 기능 중심**으로 설계되었으며, **React + Spring Boot + MySQL** 기반으로 개발되었습니다.

---

## ⚡ 주요 기능

- 🪑 **테이블 관리**
  - 홀/테이블 상태 확인
  - 테이블별 주문 연결
- 🧾 **주문 관리**
  - 메뉴 선택, 수량 조절
  - 결제 처리
- ⚙️ **관리자 기능**
  - 메뉴 추가/수정/삭제
  - 테이블 상태 초기화
- 🚀 **확장 가능**
  - 일별/월별 매출 확인
  - 추후 로그인/권한 관리 기능 추가 가능

> 💡 Language: **Java**  
> 💡 IDE: **Eclipse**  
> 💡 DB: **MySQL**  
> 💡 현재 로그인/회원 기능은 구현되어 있지 않습니다.

---

## 🖥 화면 예시

- 테이블 상태 확인 및 주문 처리 화면  
```

┌─────┐
│ 홀1 │ ○○
└─────┘

```
- 메뉴 선택 및 결제 화면  
```

[치킨] 2개
[콜라] 1개
[총액] 20,000 원
[결제]

````

---

## ⚙️ 설치 및 실행

### 1. MySQL
```sql
CREATE DATABASE chicken_pos;
````

### 2. 백엔드 (Eclipse)

1. Eclipse에서 프로젝트 Import (`File > Import > Existing Maven Projects`)
2. `application.yml`에서 DB 설정 변경
3. Run as Spring Boot Application

### 3. 프론트엔드

```bash
cd frontend
npm install
npm run dev
```

> 🌐 프론트엔드는 기본적으로 `http://localhost:5173`에서 실행됩니다.

---

## 🛠 기술 스택

* **Frontend:** React, Vite
* **Backend:** Spring Boot, JPA
* **Database:** MySQL
* **IDE:** Eclipse

