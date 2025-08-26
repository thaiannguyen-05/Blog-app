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
backend/
  ├── .env
  ├── package.json
  ├── prisma/
  ├── src/
  ├── test/
  ├── typings/
  ├── upload/
Docker/
  ├── docker-compose.yml
```

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