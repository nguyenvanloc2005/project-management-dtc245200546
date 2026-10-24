# ĐỀ TÀI 14: HỆ THỐNG QUẢN LÝ DỰ ÁN (PROJECT MANAGEMENT SYSTEM)

- **Mã sinh viên:** DTC245200546
- **Kiến trúc:** Docker Compose, Nginx SSL/HTTPS, PostgreSQL, pgAdmin, Prometheus, cAdvisor, Grafana, Loki, Promtail.

---

## 1. Yêu cầu hệ thống

- Docker Desktop (đã bật Docker Engine)
- Git / Git Bash

---

## 2. Hướng dẫn khởi chạy hệ thống (Deployment)

1. Mở Terminal (Git Bash) tại thư mục gốc của dự án.
2. Khởi chạy toàn bộ 9 container dịch vụ:
   ```bash
   docker compose up -d --build
   ```
