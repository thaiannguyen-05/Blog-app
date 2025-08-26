# Blog App Backend

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">
  A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.
</p>

## Mô tả

Đây là backend cho ứng dụng Blog, sử dụng NestJS, TypeScript, GraphQL, Prisma, và hỗ trợ Docker.

## Cấu trúc thư mục

```
├── 📁 .git/ 🚫 (auto-hidden)
├── 📁 Docker/
├── 📁 backend/
│   ├── 📁 dist/ 🚫 (auto-hidden)
│   ├── 📁 node_modules/ 🚫 (auto-hidden)
│   ├── 📁 prisma/
│   │   ├── 📁 generated/
│   │   │   └── 📁 prisma/
│   │   │       ├── 📁 runtime/
│   │   └── 📁 schema/
│   ├── 📁 src/
│   │   ├── 📁 common/
│   │   │   ├── 📁 decorator/
│   │   │   ├── 📁 interceptor/
│   │   │   └── 📁 pipe/
│   │   ├── 📁 email/
│   │   │   ├── 📁 templates/
│   │   ├── 📁 modules/
│   │   │   ├── 📁 auth/
│   │   │   │   ├── 📁 decorator/
│   │   │   │   ├── 📁 dto/
│   │   │   │   ├── 📁 guard/
│   │   │   │   ├── 📁 strategy/
│   │   │   ├── 📁 chat/
│   │   │   │   ├── 📁 dto/
│   │   │   ├── 📁 comment/
│   │   │   ├── 📁 custom-cache/
│   │   │   ├── 📁 post/
│   │   │   └── 📁 user/
│   │   │       ├── 📁 dto/
│   │   │       ├── 📁 entities/
│   │   ├── 📁 prisma/
│   ├── 📁 test/
│   ├── 📁 typings/
│   ├── 📁 upload/
│   ├── 🔒 .env 🚫 (auto-hidden)
└── 📖 README.md
```

## Chức năng chính

- **Quản lý người dùng:** Đăng ký, đăng nhập, xác thực JWT, cập nhật thông tin cá nhân, đổi mật khẩu.
- **Quản lý bài viết:** Tạo, sửa, xóa, xem danh sách và chi tiết bài viết, phân trang, tìm kiếm theo từ khóa.
- **Quản lý bình luận:** Thêm, sửa, xóa bình luận cho bài viết, phân quyền theo người dùng.
- **Quản lý chuyên mục (category):** Tạo, sửa, xóa, phân loại bài viết theo chuyên mục.
- **Upload hình ảnh:** Hỗ trợ upload ảnh cho bài viết và avatar người dùng.
- **Gửi email:** Xác thực email, quên mật khẩu, thông báo hệ thống.
- **Phân quyền & bảo mật:** Quản lý vai trò (admin, user), kiểm tra quyền truy cập API.
- **Thống kê:** Thống kê số lượng bài viết, người dùng, bình luận.
- **API GraphQL:** Toàn bộ backend sử dụng GraphQL, dễ dàng mở rộng và tích hợp.
- **Tích hợp Docker:** Dễ dàng triển khai với Docker Compose, hỗ trợ các dịch vụ như PostgreSQL, Redis.
- **Kiểm thử:** Đầy đủ unit test và e2e test cho các module chính.

## Thiết lập dự án

```bash
pnpm install
```

## Biên dịch và chạy dự án

```bash
# development
pnpm run start

# watch mode
pnpm run start:dev

# production mode
pnpm run start:prod
```

## Chạy kiểm thử

```bash
# unit tests
pnpm run test

# e2e tests
pnpm run test:e2e

# test coverage
pnpm run test:cov
```

## Triển khai

Tham khảo [deployment documentation](https://docs.nestjs.com/deployment) để biết thêm chi tiết.

Bạn có thể triển khai lên AWS bằng [Mau](https://mau.nestjs.com):

```bash
pnpm install -g @nestjs/mau
mau deploy
```

## Sử dụng Docker

Chuyển vào thư mục `Docker` và chạy:

```bash
docker-compose up --build
```

## Tài nguyên

- [NestJS Documentation](https://docs.nestjs.com)
- [Discord channel](https://discord.gg/G7Qnnhy)
- [Courses](https://courses.nestjs.com)
- [NestJS Mau](https://mau.nestjs.com)
- [NestJS Devtools](https://devtools.nestjs.com)
- [Enterprise support](https://enterprise.nestjs.com)
- [Jobs board](https://jobs.nestjs.com)

## Hỗ trợ

Nest là dự án mã nguồn mở theo giấy phép MIT. Tham khảo [hỗ trợ](https://docs.nestjs.com/support).

## Liên hệ

- Tác giả - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).