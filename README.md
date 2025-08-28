# Blog-Andev Backend

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>
<p align="center">
  A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.
</p>
<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
  <a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
  <a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
  <a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
  <a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
  <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>

## 📋 Mục lục

- [✨ Tính năng](#-tính-năng)
- [🏗️ Kiến trúc hệ thống](#-kiến-trúc-hệ-thống)
- [💻 Yêu cầu hệ thống](#-yêu-cầu-hệ-thống)
- [🚀 Cài đặt & Thiết lập](#-cài-đặt--thiết-lập)
- [⚙️ Cấu hình](#-cấu-hình)
- [🎯 Sử dụng](#-sử-dụng)
- [📖 API Documentation](#-api-documentation)
- [🔄 Workflow](#-workflow)
- [🚢 Deployment](#-deployment)
- [🤝 Đóng góp](#-đóng-góp)
- [📞 Support](#-support)
- [📄 License](#-license)

## ✨ Tính năng

### 🔐 Xác thực & Phân quyền
- Đăng ký, đăng nhập, xác thực JWT
- Phân quyền theo vai trò (admin, user, shop owner)
- Quản lý session, bảo vệ route bằng guard

### 👤 Quản lý người dùng
- Tạo, cập nhật, xoá người dùng
- Quản lý thông tin cá nhân, avatar
- Đổi mật khẩu, quên mật khẩu

### 🏪 Quản lý cửa hàng
- Tạo, cập nhật, xoá shop
- Quản lý thông tin shop, sản phẩm, đơn hàng

### 🛒 Quản lý giỏ hàng
- Thêm/xoá/sửa sản phẩm trong giỏ
- Tính tổng tiền, kiểm tra tồn kho

### 🛍️ Quản lý sản phẩm
- CRUD sản phẩm, hình ảnh, mô tả
- Quản lý danh mục, trạng thái sản phẩm

### 💬 Quản lý bình luận & đánh giá
- Thêm, xoá, sửa bình luận cho sản phẩm
- Quản lý hình ảnh bình luận

### 🎫 Quản lý ticket hỗ trợ
- Tạo, cập nhật, xử lý ticket hỗ trợ
- Quản lý trạng thái ticket

### 📧 Email Service
- Gửi email xác thực, thông báo, quên mật khẩu
- Template email động

### 💬 Chat
- Gửi/nhận tin nhắn giữa người dùng và shop
- Quản lý lịch sử chat

### 🤝 Quản lý quan hệ
- Quản lý follow, like, bookmark sản phẩm/shop

### 🕒 Cron Job
- Tự động gửi email, cập nhật trạng thái đơn hàng

### 🛡️ Bảo mật
- Guard, interceptor, pipe kiểm tra dữ liệu đầu vào

### 📊 Thống kê & báo cáo
- Thống kê doanh thu, số lượng đơn hàng, người dùng

### ⚙️ Cấu hình & tích hợp
- Quản lý biến môi trường, cấu hình hệ thống
- Tích hợp Prisma ORM, Passport.js, JWT

## 🏗️ Kiến trúc hệ thống

- **Framework**: NestJS 11.x
- **Language**: TypeScript 5.8.x
- **Database**: PostgreSQL với Prisma ORM
- **Authentication**: Passport.js + JWT
- **Package Manager**: pnpm
- **Code Quality**: Biome (linting & formatting)
- **Testing**: Jest

### Module Structure

```
├── 📁 .git/ 🚫 (auto-hidden)
├── 📁 Docker/
├── 📁 backend/
│   ├── 📁 dist/ 🚫 (auto-hidden)
│   ├── 📁 log/
│   ├── 📁 node_modules/ 🚫 (auto-hidden)
│   ├── 📁 prisma/
│   │   ├── 📁 generated/
│   │   │   └── 📁 prisma/
│   │   │       ├── 📁 runtime/
│   │   └── 📁 schema/
│   ├── 📁 src/
│   │   ├── 📁 common/
│   │   │   └── 📁 decorator/
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
│   │   │   ├── 📁 files/
│   │   │   ├── 📁 logger/
│   │   │   ├── 📁 post/
│   │   │   │   ├── 📁 dto/
│   │   │   └── 📁 user/
│   │   │       ├── 📁 dto/
│   │   │       ├── 📁 entities/
│   │   │       ├── 📁 fe-test-push-file/
│   │   ├── 📁 prisma/
│   ├── 📁 test/
│   ├── 📁 typings/
│   ├── 📁 upload/
│   ├── 🚫 .gitignore
│   ├── 📄 .prettierrc
│   ├── 📄 eslint.config.mjs
│   ├── 📄 nest-cli.json
│   ├── 📄 package.json
│   ├── ⚙️ pnpm-lock.yaml
│   ├── ⚙️ pnpm-workspace.yaml
│   ├── 📄 tsconfig.build.json 🚫 (auto-hidden)
│   └── 📄 tsconfig.json
└── 📖 README.md
```

## 💻 Yêu cầu hệ thống

- **Node.js**: 23.x hoặc cao hơn
- **PostgreSQL**: 14.x hoặc cao hơn
- **pnpm**: 10.x hoặc cao hơn

## 🚀 Cài đặt & Thiết lập

### Clone & Install

```bash
git clone <repository-url>
cd blog-app
pnpm install
```

### Cấu hình môi trường

```bash
cp .env.example .env
./download-envs.sh
```

### Cấu hình database

```bash
pnpm run db:push
pnpm prisma migrate dev
```

## ⚙️ Cấu hình

- Biến môi trường: `.env`
- Database schema: Prisma với PostgreSQL
  - **User**: Thông tin người dùng
  - **Ticket**: Support tickets
  - **Post**: Posts
  - **Comment**: Comments

## 🎯 Sử dụng

### Scripts có sẵn

```bash
# Development
pnpm run start:dev          # Chạy với hot reload
pnpm run start:debug        # Chạy với debug mode

# Production
pnpm run build              # Build ứng dụng
pnpm run start:prod         # Chạy production

# Database
pnpm run db:push            # Push schema lên database
pnpm prisma studio          # Mở Prisma Studio

# Code Quality
pnpm run lint               # Kiểm tra code style
pnpm run lint:fix           # Tự động fix code style
pnpm run format             # Format code
pnpm run typecheck          # Kiểm tra TypeScript

# Testing
pnpm run test               # Chạy unit tests
pnpm run test:watch         # Chạy tests với watch mode
pnpm run test:e2e           # Chạy end-to-end tests
pnpm run test:cov           # Chạy tests với coverage

# Git Hooks
pnpm run commit             # Commit với conventional commits
```

## 📖 API Documentation

- Sử dụng GraphQL Playground tại `/graphql`
- Tham khảo tài liệu chi tiết trong thư mục `/docs`

## 🔄 Workflow

- Sử dụng conventional commits
- Kiểm tra code với Biome trước khi push

## 🚢 Deployment

Tham khảo [deployment documentation](https://docs.nestjs.com/deployment) để biết thêm chi tiết.

Bạn có thể triển khai lên AWS bằng [Mau](https://mau.nestjs.com):

```bash
pnpm install -g @nestjs/mau
mau deploy
```

### Sử dụng Docker

Chuyển vào thư mục `Docker` và chạy:

```bash
docker-compose up --build
```

## 🤝 Đóng góp

- Tạo issue hoặc PR trên GitHub
- Xem thêm hướng dẫn đóng góp trong `/docs`

## 📞 Support

- **Email**: thaianthedev@gmail.com
- **Issues**: Tạo issue trên GitHub
- **Discord**: [https://discord.gg/G7Qnnhy](https://discord.gg/G7Qnnhy)
- **Documentation**: Xem thêm trong `/docs` folder

## 📄 License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE)
