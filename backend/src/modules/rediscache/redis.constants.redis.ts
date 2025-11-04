export class RedisConstant {
  ACCOUNT_KEY(accessor: string) {
    return `account:${accessor}` as string;
  }
}
