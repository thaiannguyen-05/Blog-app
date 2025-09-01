
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Code
 * 
 */
export type Code = $Result.DefaultSelection<Prisma.$CodePayload>
/**
 * Model Conversation
 * 
 */
export type Conversation = $Result.DefaultSelection<Prisma.$ConversationPayload>
/**
 * Model PrivateMessage
 * 
 */
export type PrivateMessage = $Result.DefaultSelection<Prisma.$PrivateMessagePayload>
/**
 * Model Owner
 * 
 */
export type Owner = $Result.DefaultSelection<Prisma.$OwnerPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model RepComment
 * 
 */
export type RepComment = $Result.DefaultSelection<Prisma.$RepCommentPayload>
/**
 * Model BehaviorWithPost
 * 
 */
export type BehaviorWithPost = $Result.DefaultSelection<Prisma.$BehaviorWithPostPayload>
/**
 * Model blockedUser
 * 
 */
export type blockedUser = $Result.DefaultSelection<Prisma.$blockedUserPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Following
 * 
 */
export type Following = $Result.DefaultSelection<Prisma.$FollowingPayload>
/**
 * Model Follower
 * 
 */
export type Follower = $Result.DefaultSelection<Prisma.$FollowerPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TypeOfCode: {
  EMAIL: 'EMAIL',
  PHONE: 'PHONE'
};

export type TypeOfCode = (typeof TypeOfCode)[keyof typeof TypeOfCode]


export const StatusPost: {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE',
  ARCHIVE: 'ARCHIVE'
};

export type StatusPost = (typeof StatusPost)[keyof typeof StatusPost]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHERS: 'OTHERS'
};

export type Gender = (typeof Gender)[keyof typeof Gender]

}

export type TypeOfCode = $Enums.TypeOfCode

export const TypeOfCode: typeof $Enums.TypeOfCode

export type StatusPost = $Enums.StatusPost

export const StatusPost: typeof $Enums.StatusPost

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Sessions
 * const sessions = await prisma.session.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Sessions
   * const sessions = await prisma.session.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.code`: Exposes CRUD operations for the **Code** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Codes
    * const codes = await prisma.code.findMany()
    * ```
    */
  get code(): Prisma.CodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversation`: Exposes CRUD operations for the **Conversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversation.findMany()
    * ```
    */
  get conversation(): Prisma.ConversationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.privateMessage`: Exposes CRUD operations for the **PrivateMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrivateMessages
    * const privateMessages = await prisma.privateMessage.findMany()
    * ```
    */
  get privateMessage(): Prisma.PrivateMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.owner`: Exposes CRUD operations for the **Owner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Owners
    * const owners = await prisma.owner.findMany()
    * ```
    */
  get owner(): Prisma.OwnerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.repComment`: Exposes CRUD operations for the **RepComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RepComments
    * const repComments = await prisma.repComment.findMany()
    * ```
    */
  get repComment(): Prisma.RepCommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.behaviorWithPost`: Exposes CRUD operations for the **BehaviorWithPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BehaviorWithPosts
    * const behaviorWithPosts = await prisma.behaviorWithPost.findMany()
    * ```
    */
  get behaviorWithPost(): Prisma.BehaviorWithPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blockedUser`: Exposes CRUD operations for the **blockedUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlockedUsers
    * const blockedUsers = await prisma.blockedUser.findMany()
    * ```
    */
  get blockedUser(): Prisma.blockedUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.following`: Exposes CRUD operations for the **Following** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Followings
    * const followings = await prisma.following.findMany()
    * ```
    */
  get following(): Prisma.FollowingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.follower`: Exposes CRUD operations for the **Follower** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Followers
    * const followers = await prisma.follower.findMany()
    * ```
    */
  get follower(): Prisma.FollowerDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Session: 'Session',
    Code: 'Code',
    Conversation: 'Conversation',
    PrivateMessage: 'PrivateMessage',
    Owner: 'Owner',
    Post: 'Post',
    Comment: 'Comment',
    RepComment: 'RepComment',
    BehaviorWithPost: 'BehaviorWithPost',
    blockedUser: 'blockedUser',
    User: 'User',
    Following: 'Following',
    Follower: 'Follower'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "session" | "code" | "conversation" | "privateMessage" | "owner" | "post" | "comment" | "repComment" | "behaviorWithPost" | "blockedUser" | "user" | "following" | "follower"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Code: {
        payload: Prisma.$CodePayload<ExtArgs>
        fields: Prisma.CodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload>
          }
          findFirst: {
            args: Prisma.CodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload>
          }
          findMany: {
            args: Prisma.CodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload>[]
          }
          create: {
            args: Prisma.CodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload>
          }
          createMany: {
            args: Prisma.CodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload>[]
          }
          delete: {
            args: Prisma.CodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload>
          }
          update: {
            args: Prisma.CodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload>
          }
          deleteMany: {
            args: Prisma.CodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload>[]
          }
          upsert: {
            args: Prisma.CodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodePayload>
          }
          aggregate: {
            args: Prisma.CodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCode>
          }
          groupBy: {
            args: Prisma.CodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CodeCountArgs<ExtArgs>
            result: $Utils.Optional<CodeCountAggregateOutputType> | number
          }
        }
      }
      Conversation: {
        payload: Prisma.$ConversationPayload<ExtArgs>
        fields: Prisma.ConversationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findFirst: {
            args: Prisma.ConversationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findMany: {
            args: Prisma.ConversationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          create: {
            args: Prisma.ConversationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          createMany: {
            args: Prisma.ConversationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConversationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          delete: {
            args: Prisma.ConversationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          update: {
            args: Prisma.ConversationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          deleteMany: {
            args: Prisma.ConversationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConversationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          upsert: {
            args: Prisma.ConversationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          aggregate: {
            args: Prisma.ConversationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversation>
          }
          groupBy: {
            args: Prisma.ConversationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversationCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationCountAggregateOutputType> | number
          }
        }
      }
      PrivateMessage: {
        payload: Prisma.$PrivateMessagePayload<ExtArgs>
        fields: Prisma.PrivateMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrivateMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrivateMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload>
          }
          findFirst: {
            args: Prisma.PrivateMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrivateMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload>
          }
          findMany: {
            args: Prisma.PrivateMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload>[]
          }
          create: {
            args: Prisma.PrivateMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload>
          }
          createMany: {
            args: Prisma.PrivateMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrivateMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload>[]
          }
          delete: {
            args: Prisma.PrivateMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload>
          }
          update: {
            args: Prisma.PrivateMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload>
          }
          deleteMany: {
            args: Prisma.PrivateMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrivateMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrivateMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload>[]
          }
          upsert: {
            args: Prisma.PrivateMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload>
          }
          aggregate: {
            args: Prisma.PrivateMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrivateMessage>
          }
          groupBy: {
            args: Prisma.PrivateMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrivateMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrivateMessageCountArgs<ExtArgs>
            result: $Utils.Optional<PrivateMessageCountAggregateOutputType> | number
          }
        }
      }
      Owner: {
        payload: Prisma.$OwnerPayload<ExtArgs>
        fields: Prisma.OwnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OwnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OwnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          findFirst: {
            args: Prisma.OwnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OwnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          findMany: {
            args: Prisma.OwnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>[]
          }
          create: {
            args: Prisma.OwnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          createMany: {
            args: Prisma.OwnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OwnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>[]
          }
          delete: {
            args: Prisma.OwnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          update: {
            args: Prisma.OwnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          deleteMany: {
            args: Prisma.OwnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OwnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OwnerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>[]
          }
          upsert: {
            args: Prisma.OwnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          aggregate: {
            args: Prisma.OwnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOwner>
          }
          groupBy: {
            args: Prisma.OwnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<OwnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.OwnerCountArgs<ExtArgs>
            result: $Utils.Optional<OwnerCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      RepComment: {
        payload: Prisma.$RepCommentPayload<ExtArgs>
        fields: Prisma.RepCommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RepCommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepCommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RepCommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepCommentPayload>
          }
          findFirst: {
            args: Prisma.RepCommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepCommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RepCommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepCommentPayload>
          }
          findMany: {
            args: Prisma.RepCommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepCommentPayload>[]
          }
          create: {
            args: Prisma.RepCommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepCommentPayload>
          }
          createMany: {
            args: Prisma.RepCommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RepCommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepCommentPayload>[]
          }
          delete: {
            args: Prisma.RepCommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepCommentPayload>
          }
          update: {
            args: Prisma.RepCommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepCommentPayload>
          }
          deleteMany: {
            args: Prisma.RepCommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RepCommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RepCommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepCommentPayload>[]
          }
          upsert: {
            args: Prisma.RepCommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepCommentPayload>
          }
          aggregate: {
            args: Prisma.RepCommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepComment>
          }
          groupBy: {
            args: Prisma.RepCommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<RepCommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.RepCommentCountArgs<ExtArgs>
            result: $Utils.Optional<RepCommentCountAggregateOutputType> | number
          }
        }
      }
      BehaviorWithPost: {
        payload: Prisma.$BehaviorWithPostPayload<ExtArgs>
        fields: Prisma.BehaviorWithPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BehaviorWithPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BehaviorWithPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BehaviorWithPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BehaviorWithPostPayload>
          }
          findFirst: {
            args: Prisma.BehaviorWithPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BehaviorWithPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BehaviorWithPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BehaviorWithPostPayload>
          }
          findMany: {
            args: Prisma.BehaviorWithPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BehaviorWithPostPayload>[]
          }
          create: {
            args: Prisma.BehaviorWithPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BehaviorWithPostPayload>
          }
          createMany: {
            args: Prisma.BehaviorWithPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BehaviorWithPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BehaviorWithPostPayload>[]
          }
          delete: {
            args: Prisma.BehaviorWithPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BehaviorWithPostPayload>
          }
          update: {
            args: Prisma.BehaviorWithPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BehaviorWithPostPayload>
          }
          deleteMany: {
            args: Prisma.BehaviorWithPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BehaviorWithPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BehaviorWithPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BehaviorWithPostPayload>[]
          }
          upsert: {
            args: Prisma.BehaviorWithPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BehaviorWithPostPayload>
          }
          aggregate: {
            args: Prisma.BehaviorWithPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBehaviorWithPost>
          }
          groupBy: {
            args: Prisma.BehaviorWithPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<BehaviorWithPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.BehaviorWithPostCountArgs<ExtArgs>
            result: $Utils.Optional<BehaviorWithPostCountAggregateOutputType> | number
          }
        }
      }
      blockedUser: {
        payload: Prisma.$blockedUserPayload<ExtArgs>
        fields: Prisma.blockedUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.blockedUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockedUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.blockedUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockedUserPayload>
          }
          findFirst: {
            args: Prisma.blockedUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockedUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.blockedUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockedUserPayload>
          }
          findMany: {
            args: Prisma.blockedUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockedUserPayload>[]
          }
          create: {
            args: Prisma.blockedUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockedUserPayload>
          }
          createMany: {
            args: Prisma.blockedUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.blockedUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockedUserPayload>[]
          }
          delete: {
            args: Prisma.blockedUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockedUserPayload>
          }
          update: {
            args: Prisma.blockedUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockedUserPayload>
          }
          deleteMany: {
            args: Prisma.blockedUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.blockedUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.blockedUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockedUserPayload>[]
          }
          upsert: {
            args: Prisma.blockedUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$blockedUserPayload>
          }
          aggregate: {
            args: Prisma.BlockedUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlockedUser>
          }
          groupBy: {
            args: Prisma.blockedUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlockedUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.blockedUserCountArgs<ExtArgs>
            result: $Utils.Optional<BlockedUserCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Following: {
        payload: Prisma.$FollowingPayload<ExtArgs>
        fields: Prisma.FollowingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FollowingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FollowingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowingPayload>
          }
          findFirst: {
            args: Prisma.FollowingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FollowingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowingPayload>
          }
          findMany: {
            args: Prisma.FollowingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowingPayload>[]
          }
          create: {
            args: Prisma.FollowingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowingPayload>
          }
          createMany: {
            args: Prisma.FollowingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FollowingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowingPayload>[]
          }
          delete: {
            args: Prisma.FollowingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowingPayload>
          }
          update: {
            args: Prisma.FollowingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowingPayload>
          }
          deleteMany: {
            args: Prisma.FollowingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FollowingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FollowingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowingPayload>[]
          }
          upsert: {
            args: Prisma.FollowingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowingPayload>
          }
          aggregate: {
            args: Prisma.FollowingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFollowing>
          }
          groupBy: {
            args: Prisma.FollowingGroupByArgs<ExtArgs>
            result: $Utils.Optional<FollowingGroupByOutputType>[]
          }
          count: {
            args: Prisma.FollowingCountArgs<ExtArgs>
            result: $Utils.Optional<FollowingCountAggregateOutputType> | number
          }
        }
      }
      Follower: {
        payload: Prisma.$FollowerPayload<ExtArgs>
        fields: Prisma.FollowerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FollowerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FollowerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowerPayload>
          }
          findFirst: {
            args: Prisma.FollowerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FollowerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowerPayload>
          }
          findMany: {
            args: Prisma.FollowerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowerPayload>[]
          }
          create: {
            args: Prisma.FollowerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowerPayload>
          }
          createMany: {
            args: Prisma.FollowerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FollowerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowerPayload>[]
          }
          delete: {
            args: Prisma.FollowerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowerPayload>
          }
          update: {
            args: Prisma.FollowerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowerPayload>
          }
          deleteMany: {
            args: Prisma.FollowerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FollowerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FollowerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowerPayload>[]
          }
          upsert: {
            args: Prisma.FollowerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowerPayload>
          }
          aggregate: {
            args: Prisma.FollowerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFollower>
          }
          groupBy: {
            args: Prisma.FollowerGroupByArgs<ExtArgs>
            result: $Utils.Optional<FollowerGroupByOutputType>[]
          }
          count: {
            args: Prisma.FollowerCountArgs<ExtArgs>
            result: $Utils.Optional<FollowerCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    session?: SessionOmit
    code?: CodeOmit
    conversation?: ConversationOmit
    privateMessage?: PrivateMessageOmit
    owner?: OwnerOmit
    post?: PostOmit
    comment?: CommentOmit
    repComment?: RepCommentOmit
    behaviorWithPost?: BehaviorWithPostOmit
    blockedUser?: blockedUserOmit
    user?: UserOmit
    following?: FollowingOmit
    follower?: FollowerOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ConversationCountOutputType
   */

  export type ConversationCountOutputType = {
    privateMessage: number
  }

  export type ConversationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    privateMessage?: boolean | ConversationCountOutputTypeCountPrivateMessageArgs
  }

  // Custom InputTypes
  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationCountOutputType
     */
    select?: ConversationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeCountPrivateMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrivateMessageWhereInput
  }


  /**
   * Count Type PrivateMessageCountOutputType
   */

  export type PrivateMessageCountOutputType = {
    replies: number
  }

  export type PrivateMessageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | PrivateMessageCountOutputTypeCountRepliesArgs
  }

  // Custom InputTypes
  /**
   * PrivateMessageCountOutputType without action
   */
  export type PrivateMessageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessageCountOutputType
     */
    select?: PrivateMessageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PrivateMessageCountOutputType without action
   */
  export type PrivateMessageCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrivateMessageWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    comments: number
    userLiked: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | PostCountOutputTypeCountCommentsArgs
    userLiked?: boolean | PostCountOutputTypeCountUserLikedArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountUserLikedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BehaviorWithPostWhereInput
  }


  /**
   * Count Type CommentCountOutputType
   */

  export type CommentCountOutputType = {
    repComments: number
  }

  export type CommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repComments?: boolean | CommentCountOutputTypeCountRepCommentsArgs
  }

  // Custom InputTypes
  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     */
    select?: CommentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountRepCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepCommentWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    codes: number
    posts: number
    postLiked: number
    comments: number
    repComments: number
    user1: number
    user2: number
    sentMessages: number
    followingUser: number
    followers: number
    blockedUsers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    codes?: boolean | UserCountOutputTypeCountCodesArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    postLiked?: boolean | UserCountOutputTypeCountPostLikedArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    repComments?: boolean | UserCountOutputTypeCountRepCommentsArgs
    user1?: boolean | UserCountOutputTypeCountUser1Args
    user2?: boolean | UserCountOutputTypeCountUser2Args
    sentMessages?: boolean | UserCountOutputTypeCountSentMessagesArgs
    followingUser?: boolean | UserCountOutputTypeCountFollowingUserArgs
    followers?: boolean | UserCountOutputTypeCountFollowersArgs
    blockedUsers?: boolean | UserCountOutputTypeCountBlockedUsersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CodeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostLikedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BehaviorWithPostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRepCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepCommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrivateMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowingUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlockedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blockedUserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    hashingRefreshToken: string | null
    userId: string | null
    userIp: string | null
    userAgent: string | null
    loginAt: Date | null
    logout: Date | null
    createAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    hashingRefreshToken: string | null
    userId: string | null
    userIp: string | null
    userAgent: string | null
    loginAt: Date | null
    logout: Date | null
    createAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    hashingRefreshToken: number
    userId: number
    userIp: number
    userAgent: number
    loginAt: number
    logout: number
    createAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    hashingRefreshToken?: true
    userId?: true
    userIp?: true
    userAgent?: true
    loginAt?: true
    logout?: true
    createAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    hashingRefreshToken?: true
    userId?: true
    userIp?: true
    userAgent?: true
    loginAt?: true
    logout?: true
    createAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    hashingRefreshToken?: true
    userId?: true
    userIp?: true
    userAgent?: true
    loginAt?: true
    logout?: true
    createAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    hashingRefreshToken: string | null
    userId: string
    userIp: string | null
    userAgent: string | null
    loginAt: Date | null
    logout: Date | null
    createAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hashingRefreshToken?: boolean
    userId?: boolean
    userIp?: boolean
    userAgent?: boolean
    loginAt?: boolean
    logout?: boolean
    createAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hashingRefreshToken?: boolean
    userId?: boolean
    userIp?: boolean
    userAgent?: boolean
    loginAt?: boolean
    logout?: boolean
    createAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hashingRefreshToken?: boolean
    userId?: boolean
    userIp?: boolean
    userAgent?: boolean
    loginAt?: boolean
    logout?: boolean
    createAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    hashingRefreshToken?: boolean
    userId?: boolean
    userIp?: boolean
    userAgent?: boolean
    loginAt?: boolean
    logout?: boolean
    createAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hashingRefreshToken" | "userId" | "userIp" | "userAgent" | "loginAt" | "logout" | "createAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hashingRefreshToken: string | null
      userId: string
      userIp: string | null
      userAgent: string | null
      loginAt: Date | null
      logout: Date | null
      createAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly hashingRefreshToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly userIp: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly loginAt: FieldRef<"Session", 'DateTime'>
    readonly logout: FieldRef<"Session", 'DateTime'>
    readonly createAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Code
   */

  export type AggregateCode = {
    _count: CodeCountAggregateOutputType | null
    _min: CodeMinAggregateOutputType | null
    _max: CodeMaxAggregateOutputType | null
  }

  export type CodeMinAggregateOutputType = {
    id: string | null
    tokens: string | null
    typeOfCode: $Enums.TypeOfCode | null
    userId: string | null
  }

  export type CodeMaxAggregateOutputType = {
    id: string | null
    tokens: string | null
    typeOfCode: $Enums.TypeOfCode | null
    userId: string | null
  }

  export type CodeCountAggregateOutputType = {
    id: number
    tokens: number
    typeOfCode: number
    userId: number
    _all: number
  }


  export type CodeMinAggregateInputType = {
    id?: true
    tokens?: true
    typeOfCode?: true
    userId?: true
  }

  export type CodeMaxAggregateInputType = {
    id?: true
    tokens?: true
    typeOfCode?: true
    userId?: true
  }

  export type CodeCountAggregateInputType = {
    id?: true
    tokens?: true
    typeOfCode?: true
    userId?: true
    _all?: true
  }

  export type CodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Code to aggregate.
     */
    where?: CodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Codes to fetch.
     */
    orderBy?: CodeOrderByWithRelationInput | CodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Codes
    **/
    _count?: true | CodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CodeMaxAggregateInputType
  }

  export type GetCodeAggregateType<T extends CodeAggregateArgs> = {
        [P in keyof T & keyof AggregateCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCode[P]>
      : GetScalarType<T[P], AggregateCode[P]>
  }




  export type CodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CodeWhereInput
    orderBy?: CodeOrderByWithAggregationInput | CodeOrderByWithAggregationInput[]
    by: CodeScalarFieldEnum[] | CodeScalarFieldEnum
    having?: CodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CodeCountAggregateInputType | true
    _min?: CodeMinAggregateInputType
    _max?: CodeMaxAggregateInputType
  }

  export type CodeGroupByOutputType = {
    id: string
    tokens: string | null
    typeOfCode: $Enums.TypeOfCode
    userId: string
    _count: CodeCountAggregateOutputType | null
    _min: CodeMinAggregateOutputType | null
    _max: CodeMaxAggregateOutputType | null
  }

  type GetCodeGroupByPayload<T extends CodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CodeGroupByOutputType[P]>
            : GetScalarType<T[P], CodeGroupByOutputType[P]>
        }
      >
    >


  export type CodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokens?: boolean
    typeOfCode?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["code"]>

  export type CodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokens?: boolean
    typeOfCode?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["code"]>

  export type CodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokens?: boolean
    typeOfCode?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["code"]>

  export type CodeSelectScalar = {
    id?: boolean
    tokens?: boolean
    typeOfCode?: boolean
    userId?: boolean
  }

  export type CodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tokens" | "typeOfCode" | "userId", ExtArgs["result"]["code"]>
  export type CodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Code"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tokens: string | null
      typeOfCode: $Enums.TypeOfCode
      userId: string
    }, ExtArgs["result"]["code"]>
    composites: {}
  }

  type CodeGetPayload<S extends boolean | null | undefined | CodeDefaultArgs> = $Result.GetResult<Prisma.$CodePayload, S>

  type CodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CodeCountAggregateInputType | true
    }

  export interface CodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Code'], meta: { name: 'Code' } }
    /**
     * Find zero or one Code that matches the filter.
     * @param {CodeFindUniqueArgs} args - Arguments to find a Code
     * @example
     * // Get one Code
     * const code = await prisma.code.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CodeFindUniqueArgs>(args: SelectSubset<T, CodeFindUniqueArgs<ExtArgs>>): Prisma__CodeClient<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Code that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CodeFindUniqueOrThrowArgs} args - Arguments to find a Code
     * @example
     * // Get one Code
     * const code = await prisma.code.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CodeFindUniqueOrThrowArgs>(args: SelectSubset<T, CodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CodeClient<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Code that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeFindFirstArgs} args - Arguments to find a Code
     * @example
     * // Get one Code
     * const code = await prisma.code.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CodeFindFirstArgs>(args?: SelectSubset<T, CodeFindFirstArgs<ExtArgs>>): Prisma__CodeClient<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Code that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeFindFirstOrThrowArgs} args - Arguments to find a Code
     * @example
     * // Get one Code
     * const code = await prisma.code.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CodeFindFirstOrThrowArgs>(args?: SelectSubset<T, CodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CodeClient<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Codes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Codes
     * const codes = await prisma.code.findMany()
     * 
     * // Get first 10 Codes
     * const codes = await prisma.code.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const codeWithIdOnly = await prisma.code.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CodeFindManyArgs>(args?: SelectSubset<T, CodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Code.
     * @param {CodeCreateArgs} args - Arguments to create a Code.
     * @example
     * // Create one Code
     * const Code = await prisma.code.create({
     *   data: {
     *     // ... data to create a Code
     *   }
     * })
     * 
     */
    create<T extends CodeCreateArgs>(args: SelectSubset<T, CodeCreateArgs<ExtArgs>>): Prisma__CodeClient<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Codes.
     * @param {CodeCreateManyArgs} args - Arguments to create many Codes.
     * @example
     * // Create many Codes
     * const code = await prisma.code.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CodeCreateManyArgs>(args?: SelectSubset<T, CodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Codes and returns the data saved in the database.
     * @param {CodeCreateManyAndReturnArgs} args - Arguments to create many Codes.
     * @example
     * // Create many Codes
     * const code = await prisma.code.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Codes and only return the `id`
     * const codeWithIdOnly = await prisma.code.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CodeCreateManyAndReturnArgs>(args?: SelectSubset<T, CodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Code.
     * @param {CodeDeleteArgs} args - Arguments to delete one Code.
     * @example
     * // Delete one Code
     * const Code = await prisma.code.delete({
     *   where: {
     *     // ... filter to delete one Code
     *   }
     * })
     * 
     */
    delete<T extends CodeDeleteArgs>(args: SelectSubset<T, CodeDeleteArgs<ExtArgs>>): Prisma__CodeClient<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Code.
     * @param {CodeUpdateArgs} args - Arguments to update one Code.
     * @example
     * // Update one Code
     * const code = await prisma.code.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CodeUpdateArgs>(args: SelectSubset<T, CodeUpdateArgs<ExtArgs>>): Prisma__CodeClient<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Codes.
     * @param {CodeDeleteManyArgs} args - Arguments to filter Codes to delete.
     * @example
     * // Delete a few Codes
     * const { count } = await prisma.code.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CodeDeleteManyArgs>(args?: SelectSubset<T, CodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Codes
     * const code = await prisma.code.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CodeUpdateManyArgs>(args: SelectSubset<T, CodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Codes and returns the data updated in the database.
     * @param {CodeUpdateManyAndReturnArgs} args - Arguments to update many Codes.
     * @example
     * // Update many Codes
     * const code = await prisma.code.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Codes and only return the `id`
     * const codeWithIdOnly = await prisma.code.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CodeUpdateManyAndReturnArgs>(args: SelectSubset<T, CodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Code.
     * @param {CodeUpsertArgs} args - Arguments to update or create a Code.
     * @example
     * // Update or create a Code
     * const code = await prisma.code.upsert({
     *   create: {
     *     // ... data to create a Code
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Code we want to update
     *   }
     * })
     */
    upsert<T extends CodeUpsertArgs>(args: SelectSubset<T, CodeUpsertArgs<ExtArgs>>): Prisma__CodeClient<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeCountArgs} args - Arguments to filter Codes to count.
     * @example
     * // Count the number of Codes
     * const count = await prisma.code.count({
     *   where: {
     *     // ... the filter for the Codes we want to count
     *   }
     * })
    **/
    count<T extends CodeCountArgs>(
      args?: Subset<T, CodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Code.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CodeAggregateArgs>(args: Subset<T, CodeAggregateArgs>): Prisma.PrismaPromise<GetCodeAggregateType<T>>

    /**
     * Group by Code.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CodeGroupByArgs['orderBy'] }
        : { orderBy?: CodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Code model
   */
  readonly fields: CodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Code.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Code model
   */
  interface CodeFieldRefs {
    readonly id: FieldRef<"Code", 'String'>
    readonly tokens: FieldRef<"Code", 'String'>
    readonly typeOfCode: FieldRef<"Code", 'TypeOfCode'>
    readonly userId: FieldRef<"Code", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Code findUnique
   */
  export type CodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeInclude<ExtArgs> | null
    /**
     * Filter, which Code to fetch.
     */
    where: CodeWhereUniqueInput
  }

  /**
   * Code findUniqueOrThrow
   */
  export type CodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeInclude<ExtArgs> | null
    /**
     * Filter, which Code to fetch.
     */
    where: CodeWhereUniqueInput
  }

  /**
   * Code findFirst
   */
  export type CodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeInclude<ExtArgs> | null
    /**
     * Filter, which Code to fetch.
     */
    where?: CodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Codes to fetch.
     */
    orderBy?: CodeOrderByWithRelationInput | CodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Codes.
     */
    cursor?: CodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Codes.
     */
    distinct?: CodeScalarFieldEnum | CodeScalarFieldEnum[]
  }

  /**
   * Code findFirstOrThrow
   */
  export type CodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeInclude<ExtArgs> | null
    /**
     * Filter, which Code to fetch.
     */
    where?: CodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Codes to fetch.
     */
    orderBy?: CodeOrderByWithRelationInput | CodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Codes.
     */
    cursor?: CodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Codes.
     */
    distinct?: CodeScalarFieldEnum | CodeScalarFieldEnum[]
  }

  /**
   * Code findMany
   */
  export type CodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeInclude<ExtArgs> | null
    /**
     * Filter, which Codes to fetch.
     */
    where?: CodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Codes to fetch.
     */
    orderBy?: CodeOrderByWithRelationInput | CodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Codes.
     */
    cursor?: CodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Codes.
     */
    skip?: number
    distinct?: CodeScalarFieldEnum | CodeScalarFieldEnum[]
  }

  /**
   * Code create
   */
  export type CodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeInclude<ExtArgs> | null
    /**
     * The data needed to create a Code.
     */
    data: XOR<CodeCreateInput, CodeUncheckedCreateInput>
  }

  /**
   * Code createMany
   */
  export type CodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Codes.
     */
    data: CodeCreateManyInput | CodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Code createManyAndReturn
   */
  export type CodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * The data used to create many Codes.
     */
    data: CodeCreateManyInput | CodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Code update
   */
  export type CodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeInclude<ExtArgs> | null
    /**
     * The data needed to update a Code.
     */
    data: XOR<CodeUpdateInput, CodeUncheckedUpdateInput>
    /**
     * Choose, which Code to update.
     */
    where: CodeWhereUniqueInput
  }

  /**
   * Code updateMany
   */
  export type CodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Codes.
     */
    data: XOR<CodeUpdateManyMutationInput, CodeUncheckedUpdateManyInput>
    /**
     * Filter which Codes to update
     */
    where?: CodeWhereInput
    /**
     * Limit how many Codes to update.
     */
    limit?: number
  }

  /**
   * Code updateManyAndReturn
   */
  export type CodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * The data used to update Codes.
     */
    data: XOR<CodeUpdateManyMutationInput, CodeUncheckedUpdateManyInput>
    /**
     * Filter which Codes to update
     */
    where?: CodeWhereInput
    /**
     * Limit how many Codes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Code upsert
   */
  export type CodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeInclude<ExtArgs> | null
    /**
     * The filter to search for the Code to update in case it exists.
     */
    where: CodeWhereUniqueInput
    /**
     * In case the Code found by the `where` argument doesn't exist, create a new Code with this data.
     */
    create: XOR<CodeCreateInput, CodeUncheckedCreateInput>
    /**
     * In case the Code was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CodeUpdateInput, CodeUncheckedUpdateInput>
  }

  /**
   * Code delete
   */
  export type CodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeInclude<ExtArgs> | null
    /**
     * Filter which Code to delete.
     */
    where: CodeWhereUniqueInput
  }

  /**
   * Code deleteMany
   */
  export type CodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Codes to delete
     */
    where?: CodeWhereInput
    /**
     * Limit how many Codes to delete.
     */
    limit?: number
  }

  /**
   * Code without action
   */
  export type CodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeInclude<ExtArgs> | null
  }


  /**
   * Model Conversation
   */

  export type AggregateConversation = {
    _count: ConversationCountAggregateOutputType | null
    _avg: ConversationAvgAggregateOutputType | null
    _sum: ConversationSumAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  export type ConversationAvgAggregateOutputType = {
    user1LastReadIndex: number | null
    user2LastReadIndex: number | null
    totalMessage: number | null
  }

  export type ConversationSumAggregateOutputType = {
    user1LastReadIndex: number | null
    user2LastReadIndex: number | null
    totalMessage: number | null
  }

  export type ConversationMinAggregateOutputType = {
    id: string | null
    creatorId: string | null
    friendId: string | null
    lastMessage: string | null
    lastMessageAt: Date | null
    user1LastReadIndex: number | null
    user2LastReadIndex: number | null
    socketId: string | null
    totalMessage: number | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type ConversationMaxAggregateOutputType = {
    id: string | null
    creatorId: string | null
    friendId: string | null
    lastMessage: string | null
    lastMessageAt: Date | null
    user1LastReadIndex: number | null
    user2LastReadIndex: number | null
    socketId: string | null
    totalMessage: number | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type ConversationCountAggregateOutputType = {
    id: number
    creatorId: number
    friendId: number
    lastMessage: number
    lastMessageAt: number
    user1LastReadIndex: number
    user2LastReadIndex: number
    socketId: number
    totalMessage: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type ConversationAvgAggregateInputType = {
    user1LastReadIndex?: true
    user2LastReadIndex?: true
    totalMessage?: true
  }

  export type ConversationSumAggregateInputType = {
    user1LastReadIndex?: true
    user2LastReadIndex?: true
    totalMessage?: true
  }

  export type ConversationMinAggregateInputType = {
    id?: true
    creatorId?: true
    friendId?: true
    lastMessage?: true
    lastMessageAt?: true
    user1LastReadIndex?: true
    user2LastReadIndex?: true
    socketId?: true
    totalMessage?: true
    createdAt?: true
    updateAt?: true
  }

  export type ConversationMaxAggregateInputType = {
    id?: true
    creatorId?: true
    friendId?: true
    lastMessage?: true
    lastMessageAt?: true
    user1LastReadIndex?: true
    user2LastReadIndex?: true
    socketId?: true
    totalMessage?: true
    createdAt?: true
    updateAt?: true
  }

  export type ConversationCountAggregateInputType = {
    id?: true
    creatorId?: true
    friendId?: true
    lastMessage?: true
    lastMessageAt?: true
    user1LastReadIndex?: true
    user2LastReadIndex?: true
    socketId?: true
    totalMessage?: true
    createdAt?: true
    updateAt?: true
    _all?: true
  }

  export type ConversationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversation to aggregate.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conversations
    **/
    _count?: true | ConversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConversationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConversationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationMaxAggregateInputType
  }

  export type GetConversationAggregateType<T extends ConversationAggregateArgs> = {
        [P in keyof T & keyof AggregateConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversation[P]>
      : GetScalarType<T[P], AggregateConversation[P]>
  }




  export type ConversationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithAggregationInput | ConversationOrderByWithAggregationInput[]
    by: ConversationScalarFieldEnum[] | ConversationScalarFieldEnum
    having?: ConversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationCountAggregateInputType | true
    _avg?: ConversationAvgAggregateInputType
    _sum?: ConversationSumAggregateInputType
    _min?: ConversationMinAggregateInputType
    _max?: ConversationMaxAggregateInputType
  }

  export type ConversationGroupByOutputType = {
    id: string
    creatorId: string
    friendId: string
    lastMessage: string | null
    lastMessageAt: Date | null
    user1LastReadIndex: number
    user2LastReadIndex: number
    socketId: string
    totalMessage: number
    createdAt: Date
    updateAt: Date
    _count: ConversationCountAggregateOutputType | null
    _avg: ConversationAvgAggregateOutputType | null
    _sum: ConversationSumAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  type GetConversationGroupByPayload<T extends ConversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationGroupByOutputType[P]>
        }
      >
    >


  export type ConversationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    friendId?: boolean
    lastMessage?: boolean
    lastMessageAt?: boolean
    user1LastReadIndex?: boolean
    user2LastReadIndex?: boolean
    socketId?: boolean
    totalMessage?: boolean
    createdAt?: boolean
    updateAt?: boolean
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
    privateMessage?: boolean | Conversation$privateMessageArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    friendId?: boolean
    lastMessage?: boolean
    lastMessageAt?: boolean
    user1LastReadIndex?: boolean
    user2LastReadIndex?: boolean
    socketId?: boolean
    totalMessage?: boolean
    createdAt?: boolean
    updateAt?: boolean
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    friendId?: boolean
    lastMessage?: boolean
    lastMessageAt?: boolean
    user1LastReadIndex?: boolean
    user2LastReadIndex?: boolean
    socketId?: boolean
    totalMessage?: boolean
    createdAt?: boolean
    updateAt?: boolean
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectScalar = {
    id?: boolean
    creatorId?: boolean
    friendId?: boolean
    lastMessage?: boolean
    lastMessageAt?: boolean
    user1LastReadIndex?: boolean
    user2LastReadIndex?: boolean
    socketId?: boolean
    totalMessage?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type ConversationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "creatorId" | "friendId" | "lastMessage" | "lastMessageAt" | "user1LastReadIndex" | "user2LastReadIndex" | "socketId" | "totalMessage" | "createdAt" | "updateAt", ExtArgs["result"]["conversation"]>
  export type ConversationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
    privateMessage?: boolean | Conversation$privateMessageArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConversationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ConversationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ConversationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conversation"
    objects: {
      user1: Prisma.$UserPayload<ExtArgs>
      user2: Prisma.$UserPayload<ExtArgs>
      privateMessage: Prisma.$PrivateMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      creatorId: string
      friendId: string
      lastMessage: string | null
      lastMessageAt: Date | null
      user1LastReadIndex: number
      user2LastReadIndex: number
      socketId: string
      totalMessage: number
      createdAt: Date
      updateAt: Date
    }, ExtArgs["result"]["conversation"]>
    composites: {}
  }

  type ConversationGetPayload<S extends boolean | null | undefined | ConversationDefaultArgs> = $Result.GetResult<Prisma.$ConversationPayload, S>

  type ConversationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationCountAggregateInputType | true
    }

  export interface ConversationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conversation'], meta: { name: 'Conversation' } }
    /**
     * Find zero or one Conversation that matches the filter.
     * @param {ConversationFindUniqueArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversationFindUniqueArgs>(args: SelectSubset<T, ConversationFindUniqueArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conversation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversationFindUniqueOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversationFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversationFindFirstArgs>(args?: SelectSubset<T, ConversationFindFirstArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversationFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversation.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationWithIdOnly = await prisma.conversation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversationFindManyArgs>(args?: SelectSubset<T, ConversationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conversation.
     * @param {ConversationCreateArgs} args - Arguments to create a Conversation.
     * @example
     * // Create one Conversation
     * const Conversation = await prisma.conversation.create({
     *   data: {
     *     // ... data to create a Conversation
     *   }
     * })
     * 
     */
    create<T extends ConversationCreateArgs>(args: SelectSubset<T, ConversationCreateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conversations.
     * @param {ConversationCreateManyArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversationCreateManyArgs>(args?: SelectSubset<T, ConversationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conversations and returns the data saved in the database.
     * @param {ConversationCreateManyAndReturnArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conversations and only return the `id`
     * const conversationWithIdOnly = await prisma.conversation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConversationCreateManyAndReturnArgs>(args?: SelectSubset<T, ConversationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conversation.
     * @param {ConversationDeleteArgs} args - Arguments to delete one Conversation.
     * @example
     * // Delete one Conversation
     * const Conversation = await prisma.conversation.delete({
     *   where: {
     *     // ... filter to delete one Conversation
     *   }
     * })
     * 
     */
    delete<T extends ConversationDeleteArgs>(args: SelectSubset<T, ConversationDeleteArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conversation.
     * @param {ConversationUpdateArgs} args - Arguments to update one Conversation.
     * @example
     * // Update one Conversation
     * const conversation = await prisma.conversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversationUpdateArgs>(args: SelectSubset<T, ConversationUpdateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conversations.
     * @param {ConversationDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversationDeleteManyArgs>(args?: SelectSubset<T, ConversationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversationUpdateManyArgs>(args: SelectSubset<T, ConversationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations and returns the data updated in the database.
     * @param {ConversationUpdateManyAndReturnArgs} args - Arguments to update many Conversations.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conversations and only return the `id`
     * const conversationWithIdOnly = await prisma.conversation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConversationUpdateManyAndReturnArgs>(args: SelectSubset<T, ConversationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conversation.
     * @param {ConversationUpsertArgs} args - Arguments to update or create a Conversation.
     * @example
     * // Update or create a Conversation
     * const conversation = await prisma.conversation.upsert({
     *   create: {
     *     // ... data to create a Conversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversation we want to update
     *   }
     * })
     */
    upsert<T extends ConversationUpsertArgs>(args: SelectSubset<T, ConversationUpsertArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversation.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends ConversationCountArgs>(
      args?: Subset<T, ConversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConversationAggregateArgs>(args: Subset<T, ConversationAggregateArgs>): Prisma.PrismaPromise<GetConversationAggregateType<T>>

    /**
     * Group by Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationGroupByArgs['orderBy'] }
        : { orderBy?: ConversationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conversation model
   */
  readonly fields: ConversationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user1<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user2<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    privateMessage<T extends Conversation$privateMessageArgs<ExtArgs> = {}>(args?: Subset<T, Conversation$privateMessageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Conversation model
   */
  interface ConversationFieldRefs {
    readonly id: FieldRef<"Conversation", 'String'>
    readonly creatorId: FieldRef<"Conversation", 'String'>
    readonly friendId: FieldRef<"Conversation", 'String'>
    readonly lastMessage: FieldRef<"Conversation", 'String'>
    readonly lastMessageAt: FieldRef<"Conversation", 'DateTime'>
    readonly user1LastReadIndex: FieldRef<"Conversation", 'Int'>
    readonly user2LastReadIndex: FieldRef<"Conversation", 'Int'>
    readonly socketId: FieldRef<"Conversation", 'String'>
    readonly totalMessage: FieldRef<"Conversation", 'Int'>
    readonly createdAt: FieldRef<"Conversation", 'DateTime'>
    readonly updateAt: FieldRef<"Conversation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Conversation findUnique
   */
  export type ConversationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findUniqueOrThrow
   */
  export type ConversationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findFirst
   */
  export type ConversationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findFirstOrThrow
   */
  export type ConversationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findMany
   */
  export type ConversationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation create
   */
  export type ConversationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to create a Conversation.
     */
    data: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
  }

  /**
   * Conversation createMany
   */
  export type ConversationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conversation createManyAndReturn
   */
  export type ConversationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversation update
   */
  export type ConversationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to update a Conversation.
     */
    data: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
    /**
     * Choose, which Conversation to update.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation updateMany
   */
  export type ConversationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
  }

  /**
   * Conversation updateManyAndReturn
   */
  export type ConversationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversation upsert
   */
  export type ConversationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The filter to search for the Conversation to update in case it exists.
     */
    where: ConversationWhereUniqueInput
    /**
     * In case the Conversation found by the `where` argument doesn't exist, create a new Conversation with this data.
     */
    create: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
    /**
     * In case the Conversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
  }

  /**
   * Conversation delete
   */
  export type ConversationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter which Conversation to delete.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation deleteMany
   */
  export type ConversationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversations to delete
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to delete.
     */
    limit?: number
  }

  /**
   * Conversation.privateMessage
   */
  export type Conversation$privateMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    where?: PrivateMessageWhereInput
    orderBy?: PrivateMessageOrderByWithRelationInput | PrivateMessageOrderByWithRelationInput[]
    cursor?: PrivateMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrivateMessageScalarFieldEnum | PrivateMessageScalarFieldEnum[]
  }

  /**
   * Conversation without action
   */
  export type ConversationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
  }


  /**
   * Model PrivateMessage
   */

  export type AggregatePrivateMessage = {
    _count: PrivateMessageCountAggregateOutputType | null
    _avg: PrivateMessageAvgAggregateOutputType | null
    _sum: PrivateMessageSumAggregateOutputType | null
    _min: PrivateMessageMinAggregateOutputType | null
    _max: PrivateMessageMaxAggregateOutputType | null
  }

  export type PrivateMessageAvgAggregateOutputType = {
    messageIndex: number | null
  }

  export type PrivateMessageSumAggregateOutputType = {
    messageIndex: number | null
  }

  export type PrivateMessageMinAggregateOutputType = {
    id: string | null
    content: string | null
    conversationId: string | null
    senderId: string | null
    receiverId: string | null
    messageIndex: number | null
    replyToId: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type PrivateMessageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    conversationId: string | null
    senderId: string | null
    receiverId: string | null
    messageIndex: number | null
    replyToId: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type PrivateMessageCountAggregateOutputType = {
    id: number
    content: number
    conversationId: number
    senderId: number
    receiverId: number
    messageIndex: number
    replyToId: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type PrivateMessageAvgAggregateInputType = {
    messageIndex?: true
  }

  export type PrivateMessageSumAggregateInputType = {
    messageIndex?: true
  }

  export type PrivateMessageMinAggregateInputType = {
    id?: true
    content?: true
    conversationId?: true
    senderId?: true
    receiverId?: true
    messageIndex?: true
    replyToId?: true
    createdAt?: true
    updateAt?: true
  }

  export type PrivateMessageMaxAggregateInputType = {
    id?: true
    content?: true
    conversationId?: true
    senderId?: true
    receiverId?: true
    messageIndex?: true
    replyToId?: true
    createdAt?: true
    updateAt?: true
  }

  export type PrivateMessageCountAggregateInputType = {
    id?: true
    content?: true
    conversationId?: true
    senderId?: true
    receiverId?: true
    messageIndex?: true
    replyToId?: true
    createdAt?: true
    updateAt?: true
    _all?: true
  }

  export type PrivateMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrivateMessage to aggregate.
     */
    where?: PrivateMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateMessages to fetch.
     */
    orderBy?: PrivateMessageOrderByWithRelationInput | PrivateMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrivateMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrivateMessages
    **/
    _count?: true | PrivateMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrivateMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrivateMessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrivateMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrivateMessageMaxAggregateInputType
  }

  export type GetPrivateMessageAggregateType<T extends PrivateMessageAggregateArgs> = {
        [P in keyof T & keyof AggregatePrivateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrivateMessage[P]>
      : GetScalarType<T[P], AggregatePrivateMessage[P]>
  }




  export type PrivateMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrivateMessageWhereInput
    orderBy?: PrivateMessageOrderByWithAggregationInput | PrivateMessageOrderByWithAggregationInput[]
    by: PrivateMessageScalarFieldEnum[] | PrivateMessageScalarFieldEnum
    having?: PrivateMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrivateMessageCountAggregateInputType | true
    _avg?: PrivateMessageAvgAggregateInputType
    _sum?: PrivateMessageSumAggregateInputType
    _min?: PrivateMessageMinAggregateInputType
    _max?: PrivateMessageMaxAggregateInputType
  }

  export type PrivateMessageGroupByOutputType = {
    id: string
    content: string
    conversationId: string
    senderId: string
    receiverId: string
    messageIndex: number
    replyToId: string | null
    createdAt: Date
    updateAt: Date
    _count: PrivateMessageCountAggregateOutputType | null
    _avg: PrivateMessageAvgAggregateOutputType | null
    _sum: PrivateMessageSumAggregateOutputType | null
    _min: PrivateMessageMinAggregateOutputType | null
    _max: PrivateMessageMaxAggregateOutputType | null
  }

  type GetPrivateMessageGroupByPayload<T extends PrivateMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrivateMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrivateMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrivateMessageGroupByOutputType[P]>
            : GetScalarType<T[P], PrivateMessageGroupByOutputType[P]>
        }
      >
    >


  export type PrivateMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    conversationId?: boolean
    senderId?: boolean
    receiverId?: boolean
    messageIndex?: boolean
    replyToId?: boolean
    createdAt?: boolean
    updateAt?: boolean
    replyTo?: boolean | PrivateMessage$replyToArgs<ExtArgs>
    replies?: boolean | PrivateMessage$repliesArgs<ExtArgs>
    chat?: boolean | ConversationDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PrivateMessageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["privateMessage"]>

  export type PrivateMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    conversationId?: boolean
    senderId?: boolean
    receiverId?: boolean
    messageIndex?: boolean
    replyToId?: boolean
    createdAt?: boolean
    updateAt?: boolean
    replyTo?: boolean | PrivateMessage$replyToArgs<ExtArgs>
    chat?: boolean | ConversationDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["privateMessage"]>

  export type PrivateMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    conversationId?: boolean
    senderId?: boolean
    receiverId?: boolean
    messageIndex?: boolean
    replyToId?: boolean
    createdAt?: boolean
    updateAt?: boolean
    replyTo?: boolean | PrivateMessage$replyToArgs<ExtArgs>
    chat?: boolean | ConversationDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["privateMessage"]>

  export type PrivateMessageSelectScalar = {
    id?: boolean
    content?: boolean
    conversationId?: boolean
    senderId?: boolean
    receiverId?: boolean
    messageIndex?: boolean
    replyToId?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type PrivateMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "conversationId" | "senderId" | "receiverId" | "messageIndex" | "replyToId" | "createdAt" | "updateAt", ExtArgs["result"]["privateMessage"]>
  export type PrivateMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replyTo?: boolean | PrivateMessage$replyToArgs<ExtArgs>
    replies?: boolean | PrivateMessage$repliesArgs<ExtArgs>
    chat?: boolean | ConversationDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PrivateMessageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PrivateMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replyTo?: boolean | PrivateMessage$replyToArgs<ExtArgs>
    chat?: boolean | ConversationDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PrivateMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replyTo?: boolean | PrivateMessage$replyToArgs<ExtArgs>
    chat?: boolean | ConversationDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PrivateMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PrivateMessage"
    objects: {
      replyTo: Prisma.$PrivateMessagePayload<ExtArgs> | null
      replies: Prisma.$PrivateMessagePayload<ExtArgs>[]
      chat: Prisma.$ConversationPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      conversationId: string
      senderId: string
      receiverId: string
      messageIndex: number
      replyToId: string | null
      createdAt: Date
      updateAt: Date
    }, ExtArgs["result"]["privateMessage"]>
    composites: {}
  }

  type PrivateMessageGetPayload<S extends boolean | null | undefined | PrivateMessageDefaultArgs> = $Result.GetResult<Prisma.$PrivateMessagePayload, S>

  type PrivateMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrivateMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrivateMessageCountAggregateInputType | true
    }

  export interface PrivateMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PrivateMessage'], meta: { name: 'PrivateMessage' } }
    /**
     * Find zero or one PrivateMessage that matches the filter.
     * @param {PrivateMessageFindUniqueArgs} args - Arguments to find a PrivateMessage
     * @example
     * // Get one PrivateMessage
     * const privateMessage = await prisma.privateMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrivateMessageFindUniqueArgs>(args: SelectSubset<T, PrivateMessageFindUniqueArgs<ExtArgs>>): Prisma__PrivateMessageClient<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PrivateMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrivateMessageFindUniqueOrThrowArgs} args - Arguments to find a PrivateMessage
     * @example
     * // Get one PrivateMessage
     * const privateMessage = await prisma.privateMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrivateMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, PrivateMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrivateMessageClient<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrivateMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateMessageFindFirstArgs} args - Arguments to find a PrivateMessage
     * @example
     * // Get one PrivateMessage
     * const privateMessage = await prisma.privateMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrivateMessageFindFirstArgs>(args?: SelectSubset<T, PrivateMessageFindFirstArgs<ExtArgs>>): Prisma__PrivateMessageClient<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrivateMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateMessageFindFirstOrThrowArgs} args - Arguments to find a PrivateMessage
     * @example
     * // Get one PrivateMessage
     * const privateMessage = await prisma.privateMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrivateMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, PrivateMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrivateMessageClient<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PrivateMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrivateMessages
     * const privateMessages = await prisma.privateMessage.findMany()
     * 
     * // Get first 10 PrivateMessages
     * const privateMessages = await prisma.privateMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const privateMessageWithIdOnly = await prisma.privateMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrivateMessageFindManyArgs>(args?: SelectSubset<T, PrivateMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PrivateMessage.
     * @param {PrivateMessageCreateArgs} args - Arguments to create a PrivateMessage.
     * @example
     * // Create one PrivateMessage
     * const PrivateMessage = await prisma.privateMessage.create({
     *   data: {
     *     // ... data to create a PrivateMessage
     *   }
     * })
     * 
     */
    create<T extends PrivateMessageCreateArgs>(args: SelectSubset<T, PrivateMessageCreateArgs<ExtArgs>>): Prisma__PrivateMessageClient<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PrivateMessages.
     * @param {PrivateMessageCreateManyArgs} args - Arguments to create many PrivateMessages.
     * @example
     * // Create many PrivateMessages
     * const privateMessage = await prisma.privateMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrivateMessageCreateManyArgs>(args?: SelectSubset<T, PrivateMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PrivateMessages and returns the data saved in the database.
     * @param {PrivateMessageCreateManyAndReturnArgs} args - Arguments to create many PrivateMessages.
     * @example
     * // Create many PrivateMessages
     * const privateMessage = await prisma.privateMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PrivateMessages and only return the `id`
     * const privateMessageWithIdOnly = await prisma.privateMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrivateMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, PrivateMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PrivateMessage.
     * @param {PrivateMessageDeleteArgs} args - Arguments to delete one PrivateMessage.
     * @example
     * // Delete one PrivateMessage
     * const PrivateMessage = await prisma.privateMessage.delete({
     *   where: {
     *     // ... filter to delete one PrivateMessage
     *   }
     * })
     * 
     */
    delete<T extends PrivateMessageDeleteArgs>(args: SelectSubset<T, PrivateMessageDeleteArgs<ExtArgs>>): Prisma__PrivateMessageClient<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PrivateMessage.
     * @param {PrivateMessageUpdateArgs} args - Arguments to update one PrivateMessage.
     * @example
     * // Update one PrivateMessage
     * const privateMessage = await prisma.privateMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrivateMessageUpdateArgs>(args: SelectSubset<T, PrivateMessageUpdateArgs<ExtArgs>>): Prisma__PrivateMessageClient<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PrivateMessages.
     * @param {PrivateMessageDeleteManyArgs} args - Arguments to filter PrivateMessages to delete.
     * @example
     * // Delete a few PrivateMessages
     * const { count } = await prisma.privateMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrivateMessageDeleteManyArgs>(args?: SelectSubset<T, PrivateMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrivateMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrivateMessages
     * const privateMessage = await prisma.privateMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrivateMessageUpdateManyArgs>(args: SelectSubset<T, PrivateMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrivateMessages and returns the data updated in the database.
     * @param {PrivateMessageUpdateManyAndReturnArgs} args - Arguments to update many PrivateMessages.
     * @example
     * // Update many PrivateMessages
     * const privateMessage = await prisma.privateMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PrivateMessages and only return the `id`
     * const privateMessageWithIdOnly = await prisma.privateMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PrivateMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, PrivateMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PrivateMessage.
     * @param {PrivateMessageUpsertArgs} args - Arguments to update or create a PrivateMessage.
     * @example
     * // Update or create a PrivateMessage
     * const privateMessage = await prisma.privateMessage.upsert({
     *   create: {
     *     // ... data to create a PrivateMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrivateMessage we want to update
     *   }
     * })
     */
    upsert<T extends PrivateMessageUpsertArgs>(args: SelectSubset<T, PrivateMessageUpsertArgs<ExtArgs>>): Prisma__PrivateMessageClient<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PrivateMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateMessageCountArgs} args - Arguments to filter PrivateMessages to count.
     * @example
     * // Count the number of PrivateMessages
     * const count = await prisma.privateMessage.count({
     *   where: {
     *     // ... the filter for the PrivateMessages we want to count
     *   }
     * })
    **/
    count<T extends PrivateMessageCountArgs>(
      args?: Subset<T, PrivateMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrivateMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrivateMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrivateMessageAggregateArgs>(args: Subset<T, PrivateMessageAggregateArgs>): Prisma.PrismaPromise<GetPrivateMessageAggregateType<T>>

    /**
     * Group by PrivateMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PrivateMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrivateMessageGroupByArgs['orderBy'] }
        : { orderBy?: PrivateMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PrivateMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrivateMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PrivateMessage model
   */
  readonly fields: PrivateMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrivateMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrivateMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    replyTo<T extends PrivateMessage$replyToArgs<ExtArgs> = {}>(args?: Subset<T, PrivateMessage$replyToArgs<ExtArgs>>): Prisma__PrivateMessageClient<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replies<T extends PrivateMessage$repliesArgs<ExtArgs> = {}>(args?: Subset<T, PrivateMessage$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chat<T extends ConversationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversationDefaultArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PrivateMessage model
   */
  interface PrivateMessageFieldRefs {
    readonly id: FieldRef<"PrivateMessage", 'String'>
    readonly content: FieldRef<"PrivateMessage", 'String'>
    readonly conversationId: FieldRef<"PrivateMessage", 'String'>
    readonly senderId: FieldRef<"PrivateMessage", 'String'>
    readonly receiverId: FieldRef<"PrivateMessage", 'String'>
    readonly messageIndex: FieldRef<"PrivateMessage", 'Int'>
    readonly replyToId: FieldRef<"PrivateMessage", 'String'>
    readonly createdAt: FieldRef<"PrivateMessage", 'DateTime'>
    readonly updateAt: FieldRef<"PrivateMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PrivateMessage findUnique
   */
  export type PrivateMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    /**
     * Filter, which PrivateMessage to fetch.
     */
    where: PrivateMessageWhereUniqueInput
  }

  /**
   * PrivateMessage findUniqueOrThrow
   */
  export type PrivateMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    /**
     * Filter, which PrivateMessage to fetch.
     */
    where: PrivateMessageWhereUniqueInput
  }

  /**
   * PrivateMessage findFirst
   */
  export type PrivateMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    /**
     * Filter, which PrivateMessage to fetch.
     */
    where?: PrivateMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateMessages to fetch.
     */
    orderBy?: PrivateMessageOrderByWithRelationInput | PrivateMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrivateMessages.
     */
    cursor?: PrivateMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrivateMessages.
     */
    distinct?: PrivateMessageScalarFieldEnum | PrivateMessageScalarFieldEnum[]
  }

  /**
   * PrivateMessage findFirstOrThrow
   */
  export type PrivateMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    /**
     * Filter, which PrivateMessage to fetch.
     */
    where?: PrivateMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateMessages to fetch.
     */
    orderBy?: PrivateMessageOrderByWithRelationInput | PrivateMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrivateMessages.
     */
    cursor?: PrivateMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrivateMessages.
     */
    distinct?: PrivateMessageScalarFieldEnum | PrivateMessageScalarFieldEnum[]
  }

  /**
   * PrivateMessage findMany
   */
  export type PrivateMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    /**
     * Filter, which PrivateMessages to fetch.
     */
    where?: PrivateMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateMessages to fetch.
     */
    orderBy?: PrivateMessageOrderByWithRelationInput | PrivateMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrivateMessages.
     */
    cursor?: PrivateMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateMessages.
     */
    skip?: number
    distinct?: PrivateMessageScalarFieldEnum | PrivateMessageScalarFieldEnum[]
  }

  /**
   * PrivateMessage create
   */
  export type PrivateMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a PrivateMessage.
     */
    data: XOR<PrivateMessageCreateInput, PrivateMessageUncheckedCreateInput>
  }

  /**
   * PrivateMessage createMany
   */
  export type PrivateMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrivateMessages.
     */
    data: PrivateMessageCreateManyInput | PrivateMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PrivateMessage createManyAndReturn
   */
  export type PrivateMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * The data used to create many PrivateMessages.
     */
    data: PrivateMessageCreateManyInput | PrivateMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PrivateMessage update
   */
  export type PrivateMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a PrivateMessage.
     */
    data: XOR<PrivateMessageUpdateInput, PrivateMessageUncheckedUpdateInput>
    /**
     * Choose, which PrivateMessage to update.
     */
    where: PrivateMessageWhereUniqueInput
  }

  /**
   * PrivateMessage updateMany
   */
  export type PrivateMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PrivateMessages.
     */
    data: XOR<PrivateMessageUpdateManyMutationInput, PrivateMessageUncheckedUpdateManyInput>
    /**
     * Filter which PrivateMessages to update
     */
    where?: PrivateMessageWhereInput
    /**
     * Limit how many PrivateMessages to update.
     */
    limit?: number
  }

  /**
   * PrivateMessage updateManyAndReturn
   */
  export type PrivateMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * The data used to update PrivateMessages.
     */
    data: XOR<PrivateMessageUpdateManyMutationInput, PrivateMessageUncheckedUpdateManyInput>
    /**
     * Filter which PrivateMessages to update
     */
    where?: PrivateMessageWhereInput
    /**
     * Limit how many PrivateMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PrivateMessage upsert
   */
  export type PrivateMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the PrivateMessage to update in case it exists.
     */
    where: PrivateMessageWhereUniqueInput
    /**
     * In case the PrivateMessage found by the `where` argument doesn't exist, create a new PrivateMessage with this data.
     */
    create: XOR<PrivateMessageCreateInput, PrivateMessageUncheckedCreateInput>
    /**
     * In case the PrivateMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrivateMessageUpdateInput, PrivateMessageUncheckedUpdateInput>
  }

  /**
   * PrivateMessage delete
   */
  export type PrivateMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    /**
     * Filter which PrivateMessage to delete.
     */
    where: PrivateMessageWhereUniqueInput
  }

  /**
   * PrivateMessage deleteMany
   */
  export type PrivateMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrivateMessages to delete
     */
    where?: PrivateMessageWhereInput
    /**
     * Limit how many PrivateMessages to delete.
     */
    limit?: number
  }

  /**
   * PrivateMessage.replyTo
   */
  export type PrivateMessage$replyToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    where?: PrivateMessageWhereInput
  }

  /**
   * PrivateMessage.replies
   */
  export type PrivateMessage$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    where?: PrivateMessageWhereInput
    orderBy?: PrivateMessageOrderByWithRelationInput | PrivateMessageOrderByWithRelationInput[]
    cursor?: PrivateMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrivateMessageScalarFieldEnum | PrivateMessageScalarFieldEnum[]
  }

  /**
   * PrivateMessage without action
   */
  export type PrivateMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
  }


  /**
   * Model Owner
   */

  export type AggregateOwner = {
    _count: OwnerCountAggregateOutputType | null
    _min: OwnerMinAggregateOutputType | null
    _max: OwnerMaxAggregateOutputType | null
  }

  export type OwnerMinAggregateOutputType = {
    id: string | null
    nameRole: string | null
    userId: string | null
    objectId: string | null
  }

  export type OwnerMaxAggregateOutputType = {
    id: string | null
    nameRole: string | null
    userId: string | null
    objectId: string | null
  }

  export type OwnerCountAggregateOutputType = {
    id: number
    nameRole: number
    userId: number
    objectId: number
    _all: number
  }


  export type OwnerMinAggregateInputType = {
    id?: true
    nameRole?: true
    userId?: true
    objectId?: true
  }

  export type OwnerMaxAggregateInputType = {
    id?: true
    nameRole?: true
    userId?: true
    objectId?: true
  }

  export type OwnerCountAggregateInputType = {
    id?: true
    nameRole?: true
    userId?: true
    objectId?: true
    _all?: true
  }

  export type OwnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Owner to aggregate.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Owners
    **/
    _count?: true | OwnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OwnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OwnerMaxAggregateInputType
  }

  export type GetOwnerAggregateType<T extends OwnerAggregateArgs> = {
        [P in keyof T & keyof AggregateOwner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOwner[P]>
      : GetScalarType<T[P], AggregateOwner[P]>
  }




  export type OwnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OwnerWhereInput
    orderBy?: OwnerOrderByWithAggregationInput | OwnerOrderByWithAggregationInput[]
    by: OwnerScalarFieldEnum[] | OwnerScalarFieldEnum
    having?: OwnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OwnerCountAggregateInputType | true
    _min?: OwnerMinAggregateInputType
    _max?: OwnerMaxAggregateInputType
  }

  export type OwnerGroupByOutputType = {
    id: string
    nameRole: string
    userId: string
    objectId: string
    _count: OwnerCountAggregateOutputType | null
    _min: OwnerMinAggregateOutputType | null
    _max: OwnerMaxAggregateOutputType | null
  }

  type GetOwnerGroupByPayload<T extends OwnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OwnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OwnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OwnerGroupByOutputType[P]>
            : GetScalarType<T[P], OwnerGroupByOutputType[P]>
        }
      >
    >


  export type OwnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameRole?: boolean
    userId?: boolean
    objectId?: boolean
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameRole?: boolean
    userId?: boolean
    objectId?: boolean
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameRole?: boolean
    userId?: boolean
    objectId?: boolean
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectScalar = {
    id?: boolean
    nameRole?: boolean
    userId?: boolean
    objectId?: boolean
  }

  export type OwnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nameRole" | "userId" | "objectId", ExtArgs["result"]["owner"]>

  export type $OwnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Owner"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nameRole: string
      userId: string
      objectId: string
    }, ExtArgs["result"]["owner"]>
    composites: {}
  }

  type OwnerGetPayload<S extends boolean | null | undefined | OwnerDefaultArgs> = $Result.GetResult<Prisma.$OwnerPayload, S>

  type OwnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OwnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OwnerCountAggregateInputType | true
    }

  export interface OwnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Owner'], meta: { name: 'Owner' } }
    /**
     * Find zero or one Owner that matches the filter.
     * @param {OwnerFindUniqueArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OwnerFindUniqueArgs>(args: SelectSubset<T, OwnerFindUniqueArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Owner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OwnerFindUniqueOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OwnerFindUniqueOrThrowArgs>(args: SelectSubset<T, OwnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Owner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindFirstArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OwnerFindFirstArgs>(args?: SelectSubset<T, OwnerFindFirstArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Owner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindFirstOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OwnerFindFirstOrThrowArgs>(args?: SelectSubset<T, OwnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Owners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Owners
     * const owners = await prisma.owner.findMany()
     * 
     * // Get first 10 Owners
     * const owners = await prisma.owner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ownerWithIdOnly = await prisma.owner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OwnerFindManyArgs>(args?: SelectSubset<T, OwnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Owner.
     * @param {OwnerCreateArgs} args - Arguments to create a Owner.
     * @example
     * // Create one Owner
     * const Owner = await prisma.owner.create({
     *   data: {
     *     // ... data to create a Owner
     *   }
     * })
     * 
     */
    create<T extends OwnerCreateArgs>(args: SelectSubset<T, OwnerCreateArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Owners.
     * @param {OwnerCreateManyArgs} args - Arguments to create many Owners.
     * @example
     * // Create many Owners
     * const owner = await prisma.owner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OwnerCreateManyArgs>(args?: SelectSubset<T, OwnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Owners and returns the data saved in the database.
     * @param {OwnerCreateManyAndReturnArgs} args - Arguments to create many Owners.
     * @example
     * // Create many Owners
     * const owner = await prisma.owner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Owners and only return the `id`
     * const ownerWithIdOnly = await prisma.owner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OwnerCreateManyAndReturnArgs>(args?: SelectSubset<T, OwnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Owner.
     * @param {OwnerDeleteArgs} args - Arguments to delete one Owner.
     * @example
     * // Delete one Owner
     * const Owner = await prisma.owner.delete({
     *   where: {
     *     // ... filter to delete one Owner
     *   }
     * })
     * 
     */
    delete<T extends OwnerDeleteArgs>(args: SelectSubset<T, OwnerDeleteArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Owner.
     * @param {OwnerUpdateArgs} args - Arguments to update one Owner.
     * @example
     * // Update one Owner
     * const owner = await prisma.owner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OwnerUpdateArgs>(args: SelectSubset<T, OwnerUpdateArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Owners.
     * @param {OwnerDeleteManyArgs} args - Arguments to filter Owners to delete.
     * @example
     * // Delete a few Owners
     * const { count } = await prisma.owner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OwnerDeleteManyArgs>(args?: SelectSubset<T, OwnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Owners
     * const owner = await prisma.owner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OwnerUpdateManyArgs>(args: SelectSubset<T, OwnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Owners and returns the data updated in the database.
     * @param {OwnerUpdateManyAndReturnArgs} args - Arguments to update many Owners.
     * @example
     * // Update many Owners
     * const owner = await prisma.owner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Owners and only return the `id`
     * const ownerWithIdOnly = await prisma.owner.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OwnerUpdateManyAndReturnArgs>(args: SelectSubset<T, OwnerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Owner.
     * @param {OwnerUpsertArgs} args - Arguments to update or create a Owner.
     * @example
     * // Update or create a Owner
     * const owner = await prisma.owner.upsert({
     *   create: {
     *     // ... data to create a Owner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Owner we want to update
     *   }
     * })
     */
    upsert<T extends OwnerUpsertArgs>(args: SelectSubset<T, OwnerUpsertArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerCountArgs} args - Arguments to filter Owners to count.
     * @example
     * // Count the number of Owners
     * const count = await prisma.owner.count({
     *   where: {
     *     // ... the filter for the Owners we want to count
     *   }
     * })
    **/
    count<T extends OwnerCountArgs>(
      args?: Subset<T, OwnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OwnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OwnerAggregateArgs>(args: Subset<T, OwnerAggregateArgs>): Prisma.PrismaPromise<GetOwnerAggregateType<T>>

    /**
     * Group by Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OwnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OwnerGroupByArgs['orderBy'] }
        : { orderBy?: OwnerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OwnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOwnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Owner model
   */
  readonly fields: OwnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Owner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OwnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Owner model
   */
  interface OwnerFieldRefs {
    readonly id: FieldRef<"Owner", 'String'>
    readonly nameRole: FieldRef<"Owner", 'String'>
    readonly userId: FieldRef<"Owner", 'String'>
    readonly objectId: FieldRef<"Owner", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Owner findUnique
   */
  export type OwnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner findUniqueOrThrow
   */
  export type OwnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner findFirst
   */
  export type OwnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner findFirstOrThrow
   */
  export type OwnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner findMany
   */
  export type OwnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Filter, which Owners to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner create
   */
  export type OwnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * The data needed to create a Owner.
     */
    data: XOR<OwnerCreateInput, OwnerUncheckedCreateInput>
  }

  /**
   * Owner createMany
   */
  export type OwnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Owners.
     */
    data: OwnerCreateManyInput | OwnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Owner createManyAndReturn
   */
  export type OwnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * The data used to create many Owners.
     */
    data: OwnerCreateManyInput | OwnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Owner update
   */
  export type OwnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * The data needed to update a Owner.
     */
    data: XOR<OwnerUpdateInput, OwnerUncheckedUpdateInput>
    /**
     * Choose, which Owner to update.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner updateMany
   */
  export type OwnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Owners.
     */
    data: XOR<OwnerUpdateManyMutationInput, OwnerUncheckedUpdateManyInput>
    /**
     * Filter which Owners to update
     */
    where?: OwnerWhereInput
    /**
     * Limit how many Owners to update.
     */
    limit?: number
  }

  /**
   * Owner updateManyAndReturn
   */
  export type OwnerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * The data used to update Owners.
     */
    data: XOR<OwnerUpdateManyMutationInput, OwnerUncheckedUpdateManyInput>
    /**
     * Filter which Owners to update
     */
    where?: OwnerWhereInput
    /**
     * Limit how many Owners to update.
     */
    limit?: number
  }

  /**
   * Owner upsert
   */
  export type OwnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * The filter to search for the Owner to update in case it exists.
     */
    where: OwnerWhereUniqueInput
    /**
     * In case the Owner found by the `where` argument doesn't exist, create a new Owner with this data.
     */
    create: XOR<OwnerCreateInput, OwnerUncheckedCreateInput>
    /**
     * In case the Owner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OwnerUpdateInput, OwnerUncheckedUpdateInput>
  }

  /**
   * Owner delete
   */
  export type OwnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Filter which Owner to delete.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner deleteMany
   */
  export type OwnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Owners to delete
     */
    where?: OwnerWhereInput
    /**
     * Limit how many Owners to delete.
     */
    limit?: number
  }

  /**
   * Owner without action
   */
  export type OwnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    content: string | null
    status: $Enums.StatusPost | null
    userId: string | null
    createAt: Date | null
    updateAt: Date | null
    deleteAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    content: string | null
    status: $Enums.StatusPost | null
    userId: string | null
    createAt: Date | null
    updateAt: Date | null
    deleteAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    content: number
    status: number
    urlImgs: number
    userId: number
    createAt: number
    updateAt: number
    deleteAt: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    content?: true
    status?: true
    userId?: true
    createAt?: true
    updateAt?: true
    deleteAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    content?: true
    status?: true
    userId?: true
    createAt?: true
    updateAt?: true
    deleteAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    content?: true
    status?: true
    urlImgs?: true
    userId?: true
    createAt?: true
    updateAt?: true
    deleteAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    content: string
    status: $Enums.StatusPost
    urlImgs: string[]
    userId: string
    createAt: Date
    updateAt: Date
    deleteAt: Date | null
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    status?: boolean
    urlImgs?: boolean
    userId?: boolean
    createAt?: boolean
    updateAt?: boolean
    deleteAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    userLiked?: boolean | Post$userLikedArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    status?: boolean
    urlImgs?: boolean
    userId?: boolean
    createAt?: boolean
    updateAt?: boolean
    deleteAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    status?: boolean
    urlImgs?: boolean
    userId?: boolean
    createAt?: boolean
    updateAt?: boolean
    deleteAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    content?: boolean
    status?: boolean
    urlImgs?: boolean
    userId?: boolean
    createAt?: boolean
    updateAt?: boolean
    deleteAt?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "status" | "urlImgs" | "userId" | "createAt" | "updateAt" | "deleteAt", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    userLiked?: boolean | Post$userLikedArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      comments: Prisma.$CommentPayload<ExtArgs>[]
      userLiked: Prisma.$BehaviorWithPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      status: $Enums.StatusPost
      urlImgs: string[]
      userId: string
      createAt: Date
      updateAt: Date
      deleteAt: Date | null
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends Post$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Post$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userLiked<T extends Post$userLikedArgs<ExtArgs> = {}>(args?: Subset<T, Post$userLikedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BehaviorWithPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly status: FieldRef<"Post", 'StatusPost'>
    readonly urlImgs: FieldRef<"Post", 'String[]'>
    readonly userId: FieldRef<"Post", 'String'>
    readonly createAt: FieldRef<"Post", 'DateTime'>
    readonly updateAt: FieldRef<"Post", 'DateTime'>
    readonly deleteAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.comments
   */
  export type Post$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Post.userLiked
   */
  export type Post$userLikedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BehaviorWithPost
     */
    select?: BehaviorWithPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BehaviorWithPost
     */
    omit?: BehaviorWithPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BehaviorWithPostInclude<ExtArgs> | null
    where?: BehaviorWithPostWhereInput
    orderBy?: BehaviorWithPostOrderByWithRelationInput | BehaviorWithPostOrderByWithRelationInput[]
    cursor?: BehaviorWithPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BehaviorWithPostScalarFieldEnum | BehaviorWithPostScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    content: string | null
    postId: string | null
    userId: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    content: string | null
    postId: string | null
    userId: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    content: number
    postId: number
    userId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    content?: true
    postId?: true
    userId?: true
    createAt?: true
    updateAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    content?: true
    postId?: true
    userId?: true
    createAt?: true
    updateAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    content?: true
    postId?: true
    userId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    content: string
    postId: string
    userId: string
    createAt: Date
    updateAt: Date
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    postId?: boolean
    userId?: boolean
    createAt?: boolean
    updateAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    repComments?: boolean | Comment$repCommentsArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    postId?: boolean
    userId?: boolean
    createAt?: boolean
    updateAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    postId?: boolean
    userId?: boolean
    createAt?: boolean
    updateAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    content?: boolean
    postId?: boolean
    userId?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "postId" | "userId" | "createAt" | "updateAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    repComments?: boolean | Comment$repCommentsArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      repComments: Prisma.$RepCommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      postId: string
      userId: string
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    repComments<T extends Comment$repCommentsArgs<ExtArgs> = {}>(args?: Subset<T, Comment$repCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly postId: FieldRef<"Comment", 'String'>
    readonly userId: FieldRef<"Comment", 'String'>
    readonly createAt: FieldRef<"Comment", 'DateTime'>
    readonly updateAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment.repComments
   */
  export type Comment$repCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepComment
     */
    select?: RepCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepComment
     */
    omit?: RepCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepCommentInclude<ExtArgs> | null
    where?: RepCommentWhereInput
    orderBy?: RepCommentOrderByWithRelationInput | RepCommentOrderByWithRelationInput[]
    cursor?: RepCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepCommentScalarFieldEnum | RepCommentScalarFieldEnum[]
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model RepComment
   */

  export type AggregateRepComment = {
    _count: RepCommentCountAggregateOutputType | null
    _min: RepCommentMinAggregateOutputType | null
    _max: RepCommentMaxAggregateOutputType | null
  }

  export type RepCommentMinAggregateOutputType = {
    id: string | null
    content: string | null
    createAt: Date | null
    updateAt: Date | null
    senderID: string | null
    commentId: string | null
  }

  export type RepCommentMaxAggregateOutputType = {
    id: string | null
    content: string | null
    createAt: Date | null
    updateAt: Date | null
    senderID: string | null
    commentId: string | null
  }

  export type RepCommentCountAggregateOutputType = {
    id: number
    content: number
    createAt: number
    updateAt: number
    senderID: number
    commentId: number
    _all: number
  }


  export type RepCommentMinAggregateInputType = {
    id?: true
    content?: true
    createAt?: true
    updateAt?: true
    senderID?: true
    commentId?: true
  }

  export type RepCommentMaxAggregateInputType = {
    id?: true
    content?: true
    createAt?: true
    updateAt?: true
    senderID?: true
    commentId?: true
  }

  export type RepCommentCountAggregateInputType = {
    id?: true
    content?: true
    createAt?: true
    updateAt?: true
    senderID?: true
    commentId?: true
    _all?: true
  }

  export type RepCommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RepComment to aggregate.
     */
    where?: RepCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepComments to fetch.
     */
    orderBy?: RepCommentOrderByWithRelationInput | RepCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RepCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RepComments
    **/
    _count?: true | RepCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepCommentMaxAggregateInputType
  }

  export type GetRepCommentAggregateType<T extends RepCommentAggregateArgs> = {
        [P in keyof T & keyof AggregateRepComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepComment[P]>
      : GetScalarType<T[P], AggregateRepComment[P]>
  }




  export type RepCommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepCommentWhereInput
    orderBy?: RepCommentOrderByWithAggregationInput | RepCommentOrderByWithAggregationInput[]
    by: RepCommentScalarFieldEnum[] | RepCommentScalarFieldEnum
    having?: RepCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepCommentCountAggregateInputType | true
    _min?: RepCommentMinAggregateInputType
    _max?: RepCommentMaxAggregateInputType
  }

  export type RepCommentGroupByOutputType = {
    id: string
    content: string
    createAt: Date
    updateAt: Date
    senderID: string
    commentId: string
    _count: RepCommentCountAggregateOutputType | null
    _min: RepCommentMinAggregateOutputType | null
    _max: RepCommentMaxAggregateOutputType | null
  }

  type GetRepCommentGroupByPayload<T extends RepCommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepCommentGroupByOutputType[P]>
            : GetScalarType<T[P], RepCommentGroupByOutputType[P]>
        }
      >
    >


  export type RepCommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createAt?: boolean
    updateAt?: boolean
    senderID?: boolean
    commentId?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repComment"]>

  export type RepCommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createAt?: boolean
    updateAt?: boolean
    senderID?: boolean
    commentId?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repComment"]>

  export type RepCommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createAt?: boolean
    updateAt?: boolean
    senderID?: boolean
    commentId?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repComment"]>

  export type RepCommentSelectScalar = {
    id?: boolean
    content?: boolean
    createAt?: boolean
    updateAt?: boolean
    senderID?: boolean
    commentId?: boolean
  }

  export type RepCommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "createAt" | "updateAt" | "senderID" | "commentId", ExtArgs["result"]["repComment"]>
  export type RepCommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }
  export type RepCommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }
  export type RepCommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    comment?: boolean | CommentDefaultArgs<ExtArgs>
  }

  export type $RepCommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RepComment"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      comment: Prisma.$CommentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      createAt: Date
      updateAt: Date
      senderID: string
      commentId: string
    }, ExtArgs["result"]["repComment"]>
    composites: {}
  }

  type RepCommentGetPayload<S extends boolean | null | undefined | RepCommentDefaultArgs> = $Result.GetResult<Prisma.$RepCommentPayload, S>

  type RepCommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RepCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RepCommentCountAggregateInputType | true
    }

  export interface RepCommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RepComment'], meta: { name: 'RepComment' } }
    /**
     * Find zero or one RepComment that matches the filter.
     * @param {RepCommentFindUniqueArgs} args - Arguments to find a RepComment
     * @example
     * // Get one RepComment
     * const repComment = await prisma.repComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RepCommentFindUniqueArgs>(args: SelectSubset<T, RepCommentFindUniqueArgs<ExtArgs>>): Prisma__RepCommentClient<$Result.GetResult<Prisma.$RepCommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RepComment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RepCommentFindUniqueOrThrowArgs} args - Arguments to find a RepComment
     * @example
     * // Get one RepComment
     * const repComment = await prisma.repComment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RepCommentFindUniqueOrThrowArgs>(args: SelectSubset<T, RepCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RepCommentClient<$Result.GetResult<Prisma.$RepCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RepComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepCommentFindFirstArgs} args - Arguments to find a RepComment
     * @example
     * // Get one RepComment
     * const repComment = await prisma.repComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RepCommentFindFirstArgs>(args?: SelectSubset<T, RepCommentFindFirstArgs<ExtArgs>>): Prisma__RepCommentClient<$Result.GetResult<Prisma.$RepCommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RepComment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepCommentFindFirstOrThrowArgs} args - Arguments to find a RepComment
     * @example
     * // Get one RepComment
     * const repComment = await prisma.repComment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RepCommentFindFirstOrThrowArgs>(args?: SelectSubset<T, RepCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__RepCommentClient<$Result.GetResult<Prisma.$RepCommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RepComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepCommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RepComments
     * const repComments = await prisma.repComment.findMany()
     * 
     * // Get first 10 RepComments
     * const repComments = await prisma.repComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const repCommentWithIdOnly = await prisma.repComment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RepCommentFindManyArgs>(args?: SelectSubset<T, RepCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RepComment.
     * @param {RepCommentCreateArgs} args - Arguments to create a RepComment.
     * @example
     * // Create one RepComment
     * const RepComment = await prisma.repComment.create({
     *   data: {
     *     // ... data to create a RepComment
     *   }
     * })
     * 
     */
    create<T extends RepCommentCreateArgs>(args: SelectSubset<T, RepCommentCreateArgs<ExtArgs>>): Prisma__RepCommentClient<$Result.GetResult<Prisma.$RepCommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RepComments.
     * @param {RepCommentCreateManyArgs} args - Arguments to create many RepComments.
     * @example
     * // Create many RepComments
     * const repComment = await prisma.repComment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RepCommentCreateManyArgs>(args?: SelectSubset<T, RepCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RepComments and returns the data saved in the database.
     * @param {RepCommentCreateManyAndReturnArgs} args - Arguments to create many RepComments.
     * @example
     * // Create many RepComments
     * const repComment = await prisma.repComment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RepComments and only return the `id`
     * const repCommentWithIdOnly = await prisma.repComment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RepCommentCreateManyAndReturnArgs>(args?: SelectSubset<T, RepCommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepCommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RepComment.
     * @param {RepCommentDeleteArgs} args - Arguments to delete one RepComment.
     * @example
     * // Delete one RepComment
     * const RepComment = await prisma.repComment.delete({
     *   where: {
     *     // ... filter to delete one RepComment
     *   }
     * })
     * 
     */
    delete<T extends RepCommentDeleteArgs>(args: SelectSubset<T, RepCommentDeleteArgs<ExtArgs>>): Prisma__RepCommentClient<$Result.GetResult<Prisma.$RepCommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RepComment.
     * @param {RepCommentUpdateArgs} args - Arguments to update one RepComment.
     * @example
     * // Update one RepComment
     * const repComment = await prisma.repComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RepCommentUpdateArgs>(args: SelectSubset<T, RepCommentUpdateArgs<ExtArgs>>): Prisma__RepCommentClient<$Result.GetResult<Prisma.$RepCommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RepComments.
     * @param {RepCommentDeleteManyArgs} args - Arguments to filter RepComments to delete.
     * @example
     * // Delete a few RepComments
     * const { count } = await prisma.repComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RepCommentDeleteManyArgs>(args?: SelectSubset<T, RepCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RepComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RepComments
     * const repComment = await prisma.repComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RepCommentUpdateManyArgs>(args: SelectSubset<T, RepCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RepComments and returns the data updated in the database.
     * @param {RepCommentUpdateManyAndReturnArgs} args - Arguments to update many RepComments.
     * @example
     * // Update many RepComments
     * const repComment = await prisma.repComment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RepComments and only return the `id`
     * const repCommentWithIdOnly = await prisma.repComment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RepCommentUpdateManyAndReturnArgs>(args: SelectSubset<T, RepCommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepCommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RepComment.
     * @param {RepCommentUpsertArgs} args - Arguments to update or create a RepComment.
     * @example
     * // Update or create a RepComment
     * const repComment = await prisma.repComment.upsert({
     *   create: {
     *     // ... data to create a RepComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RepComment we want to update
     *   }
     * })
     */
    upsert<T extends RepCommentUpsertArgs>(args: SelectSubset<T, RepCommentUpsertArgs<ExtArgs>>): Prisma__RepCommentClient<$Result.GetResult<Prisma.$RepCommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RepComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepCommentCountArgs} args - Arguments to filter RepComments to count.
     * @example
     * // Count the number of RepComments
     * const count = await prisma.repComment.count({
     *   where: {
     *     // ... the filter for the RepComments we want to count
     *   }
     * })
    **/
    count<T extends RepCommentCountArgs>(
      args?: Subset<T, RepCommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RepComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RepCommentAggregateArgs>(args: Subset<T, RepCommentAggregateArgs>): Prisma.PrismaPromise<GetRepCommentAggregateType<T>>

    /**
     * Group by RepComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepCommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RepCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RepCommentGroupByArgs['orderBy'] }
        : { orderBy?: RepCommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RepCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RepComment model
   */
  readonly fields: RepCommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RepComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RepCommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comment<T extends CommentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommentDefaultArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RepComment model
   */
  interface RepCommentFieldRefs {
    readonly id: FieldRef<"RepComment", 'String'>
    readonly content: FieldRef<"RepComment", 'String'>
    readonly createAt: FieldRef<"RepComment", 'DateTime'>
    readonly updateAt: FieldRef<"RepComment", 'DateTime'>
    readonly senderID: FieldRef<"RepComment", 'String'>
    readonly commentId: FieldRef<"RepComment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RepComment findUnique
   */
  export type RepCommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepComment
     */
    select?: RepCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepComment
     */
    omit?: RepCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepCommentInclude<ExtArgs> | null
    /**
     * Filter, which RepComment to fetch.
     */
    where: RepCommentWhereUniqueInput
  }

  /**
   * RepComment findUniqueOrThrow
   */
  export type RepCommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepComment
     */
    select?: RepCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepComment
     */
    omit?: RepCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepCommentInclude<ExtArgs> | null
    /**
     * Filter, which RepComment to fetch.
     */
    where: RepCommentWhereUniqueInput
  }

  /**
   * RepComment findFirst
   */
  export type RepCommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepComment
     */
    select?: RepCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepComment
     */
    omit?: RepCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepCommentInclude<ExtArgs> | null
    /**
     * Filter, which RepComment to fetch.
     */
    where?: RepCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepComments to fetch.
     */
    orderBy?: RepCommentOrderByWithRelationInput | RepCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RepComments.
     */
    cursor?: RepCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RepComments.
     */
    distinct?: RepCommentScalarFieldEnum | RepCommentScalarFieldEnum[]
  }

  /**
   * RepComment findFirstOrThrow
   */
  export type RepCommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepComment
     */
    select?: RepCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepComment
     */
    omit?: RepCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepCommentInclude<ExtArgs> | null
    /**
     * Filter, which RepComment to fetch.
     */
    where?: RepCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepComments to fetch.
     */
    orderBy?: RepCommentOrderByWithRelationInput | RepCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RepComments.
     */
    cursor?: RepCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RepComments.
     */
    distinct?: RepCommentScalarFieldEnum | RepCommentScalarFieldEnum[]
  }

  /**
   * RepComment findMany
   */
  export type RepCommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepComment
     */
    select?: RepCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepComment
     */
    omit?: RepCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepCommentInclude<ExtArgs> | null
    /**
     * Filter, which RepComments to fetch.
     */
    where?: RepCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepComments to fetch.
     */
    orderBy?: RepCommentOrderByWithRelationInput | RepCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RepComments.
     */
    cursor?: RepCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepComments.
     */
    skip?: number
    distinct?: RepCommentScalarFieldEnum | RepCommentScalarFieldEnum[]
  }

  /**
   * RepComment create
   */
  export type RepCommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepComment
     */
    select?: RepCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepComment
     */
    omit?: RepCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepCommentInclude<ExtArgs> | null
    /**
     * The data needed to create a RepComment.
     */
    data: XOR<RepCommentCreateInput, RepCommentUncheckedCreateInput>
  }

  /**
   * RepComment createMany
   */
  export type RepCommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RepComments.
     */
    data: RepCommentCreateManyInput | RepCommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RepComment createManyAndReturn
   */
  export type RepCommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepComment
     */
    select?: RepCommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RepComment
     */
    omit?: RepCommentOmit<ExtArgs> | null
    /**
     * The data used to create many RepComments.
     */
    data: RepCommentCreateManyInput | RepCommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepCommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RepComment update
   */
  export type RepCommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepComment
     */
    select?: RepCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepComment
     */
    omit?: RepCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepCommentInclude<ExtArgs> | null
    /**
     * The data needed to update a RepComment.
     */
    data: XOR<RepCommentUpdateInput, RepCommentUncheckedUpdateInput>
    /**
     * Choose, which RepComment to update.
     */
    where: RepCommentWhereUniqueInput
  }

  /**
   * RepComment updateMany
   */
  export type RepCommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RepComments.
     */
    data: XOR<RepCommentUpdateManyMutationInput, RepCommentUncheckedUpdateManyInput>
    /**
     * Filter which RepComments to update
     */
    where?: RepCommentWhereInput
    /**
     * Limit how many RepComments to update.
     */
    limit?: number
  }

  /**
   * RepComment updateManyAndReturn
   */
  export type RepCommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepComment
     */
    select?: RepCommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RepComment
     */
    omit?: RepCommentOmit<ExtArgs> | null
    /**
     * The data used to update RepComments.
     */
    data: XOR<RepCommentUpdateManyMutationInput, RepCommentUncheckedUpdateManyInput>
    /**
     * Filter which RepComments to update
     */
    where?: RepCommentWhereInput
    /**
     * Limit how many RepComments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepCommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RepComment upsert
   */
  export type RepCommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepComment
     */
    select?: RepCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepComment
     */
    omit?: RepCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepCommentInclude<ExtArgs> | null
    /**
     * The filter to search for the RepComment to update in case it exists.
     */
    where: RepCommentWhereUniqueInput
    /**
     * In case the RepComment found by the `where` argument doesn't exist, create a new RepComment with this data.
     */
    create: XOR<RepCommentCreateInput, RepCommentUncheckedCreateInput>
    /**
     * In case the RepComment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RepCommentUpdateInput, RepCommentUncheckedUpdateInput>
  }

  /**
   * RepComment delete
   */
  export type RepCommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepComment
     */
    select?: RepCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepComment
     */
    omit?: RepCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepCommentInclude<ExtArgs> | null
    /**
     * Filter which RepComment to delete.
     */
    where: RepCommentWhereUniqueInput
  }

  /**
   * RepComment deleteMany
   */
  export type RepCommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RepComments to delete
     */
    where?: RepCommentWhereInput
    /**
     * Limit how many RepComments to delete.
     */
    limit?: number
  }

  /**
   * RepComment without action
   */
  export type RepCommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepComment
     */
    select?: RepCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepComment
     */
    omit?: RepCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepCommentInclude<ExtArgs> | null
  }


  /**
   * Model BehaviorWithPost
   */

  export type AggregateBehaviorWithPost = {
    _count: BehaviorWithPostCountAggregateOutputType | null
    _min: BehaviorWithPostMinAggregateOutputType | null
    _max: BehaviorWithPostMaxAggregateOutputType | null
  }

  export type BehaviorWithPostMinAggregateOutputType = {
    id: string | null
    isLiked: boolean | null
    userId: string | null
    postId: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type BehaviorWithPostMaxAggregateOutputType = {
    id: string | null
    isLiked: boolean | null
    userId: string | null
    postId: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type BehaviorWithPostCountAggregateOutputType = {
    id: number
    isLiked: number
    userId: number
    postId: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type BehaviorWithPostMinAggregateInputType = {
    id?: true
    isLiked?: true
    userId?: true
    postId?: true
    createdAt?: true
    updateAt?: true
  }

  export type BehaviorWithPostMaxAggregateInputType = {
    id?: true
    isLiked?: true
    userId?: true
    postId?: true
    createdAt?: true
    updateAt?: true
  }

  export type BehaviorWithPostCountAggregateInputType = {
    id?: true
    isLiked?: true
    userId?: true
    postId?: true
    createdAt?: true
    updateAt?: true
    _all?: true
  }

  export type BehaviorWithPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BehaviorWithPost to aggregate.
     */
    where?: BehaviorWithPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BehaviorWithPosts to fetch.
     */
    orderBy?: BehaviorWithPostOrderByWithRelationInput | BehaviorWithPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BehaviorWithPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BehaviorWithPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BehaviorWithPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BehaviorWithPosts
    **/
    _count?: true | BehaviorWithPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BehaviorWithPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BehaviorWithPostMaxAggregateInputType
  }

  export type GetBehaviorWithPostAggregateType<T extends BehaviorWithPostAggregateArgs> = {
        [P in keyof T & keyof AggregateBehaviorWithPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBehaviorWithPost[P]>
      : GetScalarType<T[P], AggregateBehaviorWithPost[P]>
  }




  export type BehaviorWithPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BehaviorWithPostWhereInput
    orderBy?: BehaviorWithPostOrderByWithAggregationInput | BehaviorWithPostOrderByWithAggregationInput[]
    by: BehaviorWithPostScalarFieldEnum[] | BehaviorWithPostScalarFieldEnum
    having?: BehaviorWithPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BehaviorWithPostCountAggregateInputType | true
    _min?: BehaviorWithPostMinAggregateInputType
    _max?: BehaviorWithPostMaxAggregateInputType
  }

  export type BehaviorWithPostGroupByOutputType = {
    id: string
    isLiked: boolean
    userId: string
    postId: string
    createdAt: Date
    updateAt: Date
    _count: BehaviorWithPostCountAggregateOutputType | null
    _min: BehaviorWithPostMinAggregateOutputType | null
    _max: BehaviorWithPostMaxAggregateOutputType | null
  }

  type GetBehaviorWithPostGroupByPayload<T extends BehaviorWithPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BehaviorWithPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BehaviorWithPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BehaviorWithPostGroupByOutputType[P]>
            : GetScalarType<T[P], BehaviorWithPostGroupByOutputType[P]>
        }
      >
    >


  export type BehaviorWithPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isLiked?: boolean
    userId?: boolean
    postId?: boolean
    createdAt?: boolean
    updateAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["behaviorWithPost"]>

  export type BehaviorWithPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isLiked?: boolean
    userId?: boolean
    postId?: boolean
    createdAt?: boolean
    updateAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["behaviorWithPost"]>

  export type BehaviorWithPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isLiked?: boolean
    userId?: boolean
    postId?: boolean
    createdAt?: boolean
    updateAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["behaviorWithPost"]>

  export type BehaviorWithPostSelectScalar = {
    id?: boolean
    isLiked?: boolean
    userId?: boolean
    postId?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type BehaviorWithPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "isLiked" | "userId" | "postId" | "createdAt" | "updateAt", ExtArgs["result"]["behaviorWithPost"]>
  export type BehaviorWithPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type BehaviorWithPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type BehaviorWithPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $BehaviorWithPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BehaviorWithPost"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      isLiked: boolean
      userId: string
      postId: string
      createdAt: Date
      updateAt: Date
    }, ExtArgs["result"]["behaviorWithPost"]>
    composites: {}
  }

  type BehaviorWithPostGetPayload<S extends boolean | null | undefined | BehaviorWithPostDefaultArgs> = $Result.GetResult<Prisma.$BehaviorWithPostPayload, S>

  type BehaviorWithPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BehaviorWithPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BehaviorWithPostCountAggregateInputType | true
    }

  export interface BehaviorWithPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BehaviorWithPost'], meta: { name: 'BehaviorWithPost' } }
    /**
     * Find zero or one BehaviorWithPost that matches the filter.
     * @param {BehaviorWithPostFindUniqueArgs} args - Arguments to find a BehaviorWithPost
     * @example
     * // Get one BehaviorWithPost
     * const behaviorWithPost = await prisma.behaviorWithPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BehaviorWithPostFindUniqueArgs>(args: SelectSubset<T, BehaviorWithPostFindUniqueArgs<ExtArgs>>): Prisma__BehaviorWithPostClient<$Result.GetResult<Prisma.$BehaviorWithPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BehaviorWithPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BehaviorWithPostFindUniqueOrThrowArgs} args - Arguments to find a BehaviorWithPost
     * @example
     * // Get one BehaviorWithPost
     * const behaviorWithPost = await prisma.behaviorWithPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BehaviorWithPostFindUniqueOrThrowArgs>(args: SelectSubset<T, BehaviorWithPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BehaviorWithPostClient<$Result.GetResult<Prisma.$BehaviorWithPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BehaviorWithPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BehaviorWithPostFindFirstArgs} args - Arguments to find a BehaviorWithPost
     * @example
     * // Get one BehaviorWithPost
     * const behaviorWithPost = await prisma.behaviorWithPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BehaviorWithPostFindFirstArgs>(args?: SelectSubset<T, BehaviorWithPostFindFirstArgs<ExtArgs>>): Prisma__BehaviorWithPostClient<$Result.GetResult<Prisma.$BehaviorWithPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BehaviorWithPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BehaviorWithPostFindFirstOrThrowArgs} args - Arguments to find a BehaviorWithPost
     * @example
     * // Get one BehaviorWithPost
     * const behaviorWithPost = await prisma.behaviorWithPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BehaviorWithPostFindFirstOrThrowArgs>(args?: SelectSubset<T, BehaviorWithPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__BehaviorWithPostClient<$Result.GetResult<Prisma.$BehaviorWithPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BehaviorWithPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BehaviorWithPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BehaviorWithPosts
     * const behaviorWithPosts = await prisma.behaviorWithPost.findMany()
     * 
     * // Get first 10 BehaviorWithPosts
     * const behaviorWithPosts = await prisma.behaviorWithPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const behaviorWithPostWithIdOnly = await prisma.behaviorWithPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BehaviorWithPostFindManyArgs>(args?: SelectSubset<T, BehaviorWithPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BehaviorWithPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BehaviorWithPost.
     * @param {BehaviorWithPostCreateArgs} args - Arguments to create a BehaviorWithPost.
     * @example
     * // Create one BehaviorWithPost
     * const BehaviorWithPost = await prisma.behaviorWithPost.create({
     *   data: {
     *     // ... data to create a BehaviorWithPost
     *   }
     * })
     * 
     */
    create<T extends BehaviorWithPostCreateArgs>(args: SelectSubset<T, BehaviorWithPostCreateArgs<ExtArgs>>): Prisma__BehaviorWithPostClient<$Result.GetResult<Prisma.$BehaviorWithPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BehaviorWithPosts.
     * @param {BehaviorWithPostCreateManyArgs} args - Arguments to create many BehaviorWithPosts.
     * @example
     * // Create many BehaviorWithPosts
     * const behaviorWithPost = await prisma.behaviorWithPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BehaviorWithPostCreateManyArgs>(args?: SelectSubset<T, BehaviorWithPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BehaviorWithPosts and returns the data saved in the database.
     * @param {BehaviorWithPostCreateManyAndReturnArgs} args - Arguments to create many BehaviorWithPosts.
     * @example
     * // Create many BehaviorWithPosts
     * const behaviorWithPost = await prisma.behaviorWithPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BehaviorWithPosts and only return the `id`
     * const behaviorWithPostWithIdOnly = await prisma.behaviorWithPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BehaviorWithPostCreateManyAndReturnArgs>(args?: SelectSubset<T, BehaviorWithPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BehaviorWithPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BehaviorWithPost.
     * @param {BehaviorWithPostDeleteArgs} args - Arguments to delete one BehaviorWithPost.
     * @example
     * // Delete one BehaviorWithPost
     * const BehaviorWithPost = await prisma.behaviorWithPost.delete({
     *   where: {
     *     // ... filter to delete one BehaviorWithPost
     *   }
     * })
     * 
     */
    delete<T extends BehaviorWithPostDeleteArgs>(args: SelectSubset<T, BehaviorWithPostDeleteArgs<ExtArgs>>): Prisma__BehaviorWithPostClient<$Result.GetResult<Prisma.$BehaviorWithPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BehaviorWithPost.
     * @param {BehaviorWithPostUpdateArgs} args - Arguments to update one BehaviorWithPost.
     * @example
     * // Update one BehaviorWithPost
     * const behaviorWithPost = await prisma.behaviorWithPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BehaviorWithPostUpdateArgs>(args: SelectSubset<T, BehaviorWithPostUpdateArgs<ExtArgs>>): Prisma__BehaviorWithPostClient<$Result.GetResult<Prisma.$BehaviorWithPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BehaviorWithPosts.
     * @param {BehaviorWithPostDeleteManyArgs} args - Arguments to filter BehaviorWithPosts to delete.
     * @example
     * // Delete a few BehaviorWithPosts
     * const { count } = await prisma.behaviorWithPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BehaviorWithPostDeleteManyArgs>(args?: SelectSubset<T, BehaviorWithPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BehaviorWithPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BehaviorWithPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BehaviorWithPosts
     * const behaviorWithPost = await prisma.behaviorWithPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BehaviorWithPostUpdateManyArgs>(args: SelectSubset<T, BehaviorWithPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BehaviorWithPosts and returns the data updated in the database.
     * @param {BehaviorWithPostUpdateManyAndReturnArgs} args - Arguments to update many BehaviorWithPosts.
     * @example
     * // Update many BehaviorWithPosts
     * const behaviorWithPost = await prisma.behaviorWithPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BehaviorWithPosts and only return the `id`
     * const behaviorWithPostWithIdOnly = await prisma.behaviorWithPost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BehaviorWithPostUpdateManyAndReturnArgs>(args: SelectSubset<T, BehaviorWithPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BehaviorWithPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BehaviorWithPost.
     * @param {BehaviorWithPostUpsertArgs} args - Arguments to update or create a BehaviorWithPost.
     * @example
     * // Update or create a BehaviorWithPost
     * const behaviorWithPost = await prisma.behaviorWithPost.upsert({
     *   create: {
     *     // ... data to create a BehaviorWithPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BehaviorWithPost we want to update
     *   }
     * })
     */
    upsert<T extends BehaviorWithPostUpsertArgs>(args: SelectSubset<T, BehaviorWithPostUpsertArgs<ExtArgs>>): Prisma__BehaviorWithPostClient<$Result.GetResult<Prisma.$BehaviorWithPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BehaviorWithPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BehaviorWithPostCountArgs} args - Arguments to filter BehaviorWithPosts to count.
     * @example
     * // Count the number of BehaviorWithPosts
     * const count = await prisma.behaviorWithPost.count({
     *   where: {
     *     // ... the filter for the BehaviorWithPosts we want to count
     *   }
     * })
    **/
    count<T extends BehaviorWithPostCountArgs>(
      args?: Subset<T, BehaviorWithPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BehaviorWithPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BehaviorWithPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BehaviorWithPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BehaviorWithPostAggregateArgs>(args: Subset<T, BehaviorWithPostAggregateArgs>): Prisma.PrismaPromise<GetBehaviorWithPostAggregateType<T>>

    /**
     * Group by BehaviorWithPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BehaviorWithPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BehaviorWithPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BehaviorWithPostGroupByArgs['orderBy'] }
        : { orderBy?: BehaviorWithPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BehaviorWithPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBehaviorWithPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BehaviorWithPost model
   */
  readonly fields: BehaviorWithPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BehaviorWithPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BehaviorWithPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BehaviorWithPost model
   */
  interface BehaviorWithPostFieldRefs {
    readonly id: FieldRef<"BehaviorWithPost", 'String'>
    readonly isLiked: FieldRef<"BehaviorWithPost", 'Boolean'>
    readonly userId: FieldRef<"BehaviorWithPost", 'String'>
    readonly postId: FieldRef<"BehaviorWithPost", 'String'>
    readonly createdAt: FieldRef<"BehaviorWithPost", 'DateTime'>
    readonly updateAt: FieldRef<"BehaviorWithPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BehaviorWithPost findUnique
   */
  export type BehaviorWithPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BehaviorWithPost
     */
    select?: BehaviorWithPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BehaviorWithPost
     */
    omit?: BehaviorWithPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BehaviorWithPostInclude<ExtArgs> | null
    /**
     * Filter, which BehaviorWithPost to fetch.
     */
    where: BehaviorWithPostWhereUniqueInput
  }

  /**
   * BehaviorWithPost findUniqueOrThrow
   */
  export type BehaviorWithPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BehaviorWithPost
     */
    select?: BehaviorWithPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BehaviorWithPost
     */
    omit?: BehaviorWithPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BehaviorWithPostInclude<ExtArgs> | null
    /**
     * Filter, which BehaviorWithPost to fetch.
     */
    where: BehaviorWithPostWhereUniqueInput
  }

  /**
   * BehaviorWithPost findFirst
   */
  export type BehaviorWithPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BehaviorWithPost
     */
    select?: BehaviorWithPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BehaviorWithPost
     */
    omit?: BehaviorWithPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BehaviorWithPostInclude<ExtArgs> | null
    /**
     * Filter, which BehaviorWithPost to fetch.
     */
    where?: BehaviorWithPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BehaviorWithPosts to fetch.
     */
    orderBy?: BehaviorWithPostOrderByWithRelationInput | BehaviorWithPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BehaviorWithPosts.
     */
    cursor?: BehaviorWithPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BehaviorWithPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BehaviorWithPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BehaviorWithPosts.
     */
    distinct?: BehaviorWithPostScalarFieldEnum | BehaviorWithPostScalarFieldEnum[]
  }

  /**
   * BehaviorWithPost findFirstOrThrow
   */
  export type BehaviorWithPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BehaviorWithPost
     */
    select?: BehaviorWithPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BehaviorWithPost
     */
    omit?: BehaviorWithPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BehaviorWithPostInclude<ExtArgs> | null
    /**
     * Filter, which BehaviorWithPost to fetch.
     */
    where?: BehaviorWithPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BehaviorWithPosts to fetch.
     */
    orderBy?: BehaviorWithPostOrderByWithRelationInput | BehaviorWithPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BehaviorWithPosts.
     */
    cursor?: BehaviorWithPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BehaviorWithPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BehaviorWithPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BehaviorWithPosts.
     */
    distinct?: BehaviorWithPostScalarFieldEnum | BehaviorWithPostScalarFieldEnum[]
  }

  /**
   * BehaviorWithPost findMany
   */
  export type BehaviorWithPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BehaviorWithPost
     */
    select?: BehaviorWithPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BehaviorWithPost
     */
    omit?: BehaviorWithPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BehaviorWithPostInclude<ExtArgs> | null
    /**
     * Filter, which BehaviorWithPosts to fetch.
     */
    where?: BehaviorWithPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BehaviorWithPosts to fetch.
     */
    orderBy?: BehaviorWithPostOrderByWithRelationInput | BehaviorWithPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BehaviorWithPosts.
     */
    cursor?: BehaviorWithPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BehaviorWithPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BehaviorWithPosts.
     */
    skip?: number
    distinct?: BehaviorWithPostScalarFieldEnum | BehaviorWithPostScalarFieldEnum[]
  }

  /**
   * BehaviorWithPost create
   */
  export type BehaviorWithPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BehaviorWithPost
     */
    select?: BehaviorWithPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BehaviorWithPost
     */
    omit?: BehaviorWithPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BehaviorWithPostInclude<ExtArgs> | null
    /**
     * The data needed to create a BehaviorWithPost.
     */
    data: XOR<BehaviorWithPostCreateInput, BehaviorWithPostUncheckedCreateInput>
  }

  /**
   * BehaviorWithPost createMany
   */
  export type BehaviorWithPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BehaviorWithPosts.
     */
    data: BehaviorWithPostCreateManyInput | BehaviorWithPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BehaviorWithPost createManyAndReturn
   */
  export type BehaviorWithPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BehaviorWithPost
     */
    select?: BehaviorWithPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BehaviorWithPost
     */
    omit?: BehaviorWithPostOmit<ExtArgs> | null
    /**
     * The data used to create many BehaviorWithPosts.
     */
    data: BehaviorWithPostCreateManyInput | BehaviorWithPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BehaviorWithPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BehaviorWithPost update
   */
  export type BehaviorWithPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BehaviorWithPost
     */
    select?: BehaviorWithPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BehaviorWithPost
     */
    omit?: BehaviorWithPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BehaviorWithPostInclude<ExtArgs> | null
    /**
     * The data needed to update a BehaviorWithPost.
     */
    data: XOR<BehaviorWithPostUpdateInput, BehaviorWithPostUncheckedUpdateInput>
    /**
     * Choose, which BehaviorWithPost to update.
     */
    where: BehaviorWithPostWhereUniqueInput
  }

  /**
   * BehaviorWithPost updateMany
   */
  export type BehaviorWithPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BehaviorWithPosts.
     */
    data: XOR<BehaviorWithPostUpdateManyMutationInput, BehaviorWithPostUncheckedUpdateManyInput>
    /**
     * Filter which BehaviorWithPosts to update
     */
    where?: BehaviorWithPostWhereInput
    /**
     * Limit how many BehaviorWithPosts to update.
     */
    limit?: number
  }

  /**
   * BehaviorWithPost updateManyAndReturn
   */
  export type BehaviorWithPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BehaviorWithPost
     */
    select?: BehaviorWithPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BehaviorWithPost
     */
    omit?: BehaviorWithPostOmit<ExtArgs> | null
    /**
     * The data used to update BehaviorWithPosts.
     */
    data: XOR<BehaviorWithPostUpdateManyMutationInput, BehaviorWithPostUncheckedUpdateManyInput>
    /**
     * Filter which BehaviorWithPosts to update
     */
    where?: BehaviorWithPostWhereInput
    /**
     * Limit how many BehaviorWithPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BehaviorWithPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BehaviorWithPost upsert
   */
  export type BehaviorWithPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BehaviorWithPost
     */
    select?: BehaviorWithPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BehaviorWithPost
     */
    omit?: BehaviorWithPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BehaviorWithPostInclude<ExtArgs> | null
    /**
     * The filter to search for the BehaviorWithPost to update in case it exists.
     */
    where: BehaviorWithPostWhereUniqueInput
    /**
     * In case the BehaviorWithPost found by the `where` argument doesn't exist, create a new BehaviorWithPost with this data.
     */
    create: XOR<BehaviorWithPostCreateInput, BehaviorWithPostUncheckedCreateInput>
    /**
     * In case the BehaviorWithPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BehaviorWithPostUpdateInput, BehaviorWithPostUncheckedUpdateInput>
  }

  /**
   * BehaviorWithPost delete
   */
  export type BehaviorWithPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BehaviorWithPost
     */
    select?: BehaviorWithPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BehaviorWithPost
     */
    omit?: BehaviorWithPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BehaviorWithPostInclude<ExtArgs> | null
    /**
     * Filter which BehaviorWithPost to delete.
     */
    where: BehaviorWithPostWhereUniqueInput
  }

  /**
   * BehaviorWithPost deleteMany
   */
  export type BehaviorWithPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BehaviorWithPosts to delete
     */
    where?: BehaviorWithPostWhereInput
    /**
     * Limit how many BehaviorWithPosts to delete.
     */
    limit?: number
  }

  /**
   * BehaviorWithPost without action
   */
  export type BehaviorWithPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BehaviorWithPost
     */
    select?: BehaviorWithPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BehaviorWithPost
     */
    omit?: BehaviorWithPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BehaviorWithPostInclude<ExtArgs> | null
  }


  /**
   * Model blockedUser
   */

  export type AggregateBlockedUser = {
    _count: BlockedUserCountAggregateOutputType | null
    _min: BlockedUserMinAggregateOutputType | null
    _max: BlockedUserMaxAggregateOutputType | null
  }

  export type BlockedUserMinAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    updateAT: Date | null
  }

  export type BlockedUserMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    updateAT: Date | null
  }

  export type BlockedUserCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    updateAT: number
    _all: number
  }


  export type BlockedUserMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updateAT?: true
  }

  export type BlockedUserMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updateAT?: true
  }

  export type BlockedUserCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updateAT?: true
    _all?: true
  }

  export type BlockedUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blockedUser to aggregate.
     */
    where?: blockedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blockedUsers to fetch.
     */
    orderBy?: blockedUserOrderByWithRelationInput | blockedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: blockedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blockedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blockedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned blockedUsers
    **/
    _count?: true | BlockedUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlockedUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlockedUserMaxAggregateInputType
  }

  export type GetBlockedUserAggregateType<T extends BlockedUserAggregateArgs> = {
        [P in keyof T & keyof AggregateBlockedUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlockedUser[P]>
      : GetScalarType<T[P], AggregateBlockedUser[P]>
  }




  export type blockedUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: blockedUserWhereInput
    orderBy?: blockedUserOrderByWithAggregationInput | blockedUserOrderByWithAggregationInput[]
    by: BlockedUserScalarFieldEnum[] | BlockedUserScalarFieldEnum
    having?: blockedUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlockedUserCountAggregateInputType | true
    _min?: BlockedUserMinAggregateInputType
    _max?: BlockedUserMaxAggregateInputType
  }

  export type BlockedUserGroupByOutputType = {
    id: string
    userId: string
    createdAt: Date
    updateAT: Date
    _count: BlockedUserCountAggregateOutputType | null
    _min: BlockedUserMinAggregateOutputType | null
    _max: BlockedUserMaxAggregateOutputType | null
  }

  type GetBlockedUserGroupByPayload<T extends blockedUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlockedUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlockedUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockedUserGroupByOutputType[P]>
            : GetScalarType<T[P], BlockedUserGroupByOutputType[P]>
        }
      >
    >


  export type blockedUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updateAT?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockedUser"]>

  export type blockedUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updateAT?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockedUser"]>

  export type blockedUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updateAT?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockedUser"]>

  export type blockedUserSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updateAT?: boolean
  }

  export type blockedUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "createdAt" | "updateAT", ExtArgs["result"]["blockedUser"]>
  export type blockedUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type blockedUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type blockedUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $blockedUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "blockedUser"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      createdAt: Date
      updateAT: Date
    }, ExtArgs["result"]["blockedUser"]>
    composites: {}
  }

  type blockedUserGetPayload<S extends boolean | null | undefined | blockedUserDefaultArgs> = $Result.GetResult<Prisma.$blockedUserPayload, S>

  type blockedUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<blockedUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlockedUserCountAggregateInputType | true
    }

  export interface blockedUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['blockedUser'], meta: { name: 'blockedUser' } }
    /**
     * Find zero or one BlockedUser that matches the filter.
     * @param {blockedUserFindUniqueArgs} args - Arguments to find a BlockedUser
     * @example
     * // Get one BlockedUser
     * const blockedUser = await prisma.blockedUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends blockedUserFindUniqueArgs>(args: SelectSubset<T, blockedUserFindUniqueArgs<ExtArgs>>): Prisma__blockedUserClient<$Result.GetResult<Prisma.$blockedUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlockedUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {blockedUserFindUniqueOrThrowArgs} args - Arguments to find a BlockedUser
     * @example
     * // Get one BlockedUser
     * const blockedUser = await prisma.blockedUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends blockedUserFindUniqueOrThrowArgs>(args: SelectSubset<T, blockedUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__blockedUserClient<$Result.GetResult<Prisma.$blockedUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlockedUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blockedUserFindFirstArgs} args - Arguments to find a BlockedUser
     * @example
     * // Get one BlockedUser
     * const blockedUser = await prisma.blockedUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends blockedUserFindFirstArgs>(args?: SelectSubset<T, blockedUserFindFirstArgs<ExtArgs>>): Prisma__blockedUserClient<$Result.GetResult<Prisma.$blockedUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlockedUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blockedUserFindFirstOrThrowArgs} args - Arguments to find a BlockedUser
     * @example
     * // Get one BlockedUser
     * const blockedUser = await prisma.blockedUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends blockedUserFindFirstOrThrowArgs>(args?: SelectSubset<T, blockedUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__blockedUserClient<$Result.GetResult<Prisma.$blockedUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlockedUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blockedUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlockedUsers
     * const blockedUsers = await prisma.blockedUser.findMany()
     * 
     * // Get first 10 BlockedUsers
     * const blockedUsers = await prisma.blockedUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blockedUserWithIdOnly = await prisma.blockedUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends blockedUserFindManyArgs>(args?: SelectSubset<T, blockedUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blockedUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlockedUser.
     * @param {blockedUserCreateArgs} args - Arguments to create a BlockedUser.
     * @example
     * // Create one BlockedUser
     * const BlockedUser = await prisma.blockedUser.create({
     *   data: {
     *     // ... data to create a BlockedUser
     *   }
     * })
     * 
     */
    create<T extends blockedUserCreateArgs>(args: SelectSubset<T, blockedUserCreateArgs<ExtArgs>>): Prisma__blockedUserClient<$Result.GetResult<Prisma.$blockedUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlockedUsers.
     * @param {blockedUserCreateManyArgs} args - Arguments to create many BlockedUsers.
     * @example
     * // Create many BlockedUsers
     * const blockedUser = await prisma.blockedUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends blockedUserCreateManyArgs>(args?: SelectSubset<T, blockedUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlockedUsers and returns the data saved in the database.
     * @param {blockedUserCreateManyAndReturnArgs} args - Arguments to create many BlockedUsers.
     * @example
     * // Create many BlockedUsers
     * const blockedUser = await prisma.blockedUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlockedUsers and only return the `id`
     * const blockedUserWithIdOnly = await prisma.blockedUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends blockedUserCreateManyAndReturnArgs>(args?: SelectSubset<T, blockedUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blockedUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlockedUser.
     * @param {blockedUserDeleteArgs} args - Arguments to delete one BlockedUser.
     * @example
     * // Delete one BlockedUser
     * const BlockedUser = await prisma.blockedUser.delete({
     *   where: {
     *     // ... filter to delete one BlockedUser
     *   }
     * })
     * 
     */
    delete<T extends blockedUserDeleteArgs>(args: SelectSubset<T, blockedUserDeleteArgs<ExtArgs>>): Prisma__blockedUserClient<$Result.GetResult<Prisma.$blockedUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlockedUser.
     * @param {blockedUserUpdateArgs} args - Arguments to update one BlockedUser.
     * @example
     * // Update one BlockedUser
     * const blockedUser = await prisma.blockedUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends blockedUserUpdateArgs>(args: SelectSubset<T, blockedUserUpdateArgs<ExtArgs>>): Prisma__blockedUserClient<$Result.GetResult<Prisma.$blockedUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlockedUsers.
     * @param {blockedUserDeleteManyArgs} args - Arguments to filter BlockedUsers to delete.
     * @example
     * // Delete a few BlockedUsers
     * const { count } = await prisma.blockedUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends blockedUserDeleteManyArgs>(args?: SelectSubset<T, blockedUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlockedUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blockedUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlockedUsers
     * const blockedUser = await prisma.blockedUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends blockedUserUpdateManyArgs>(args: SelectSubset<T, blockedUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlockedUsers and returns the data updated in the database.
     * @param {blockedUserUpdateManyAndReturnArgs} args - Arguments to update many BlockedUsers.
     * @example
     * // Update many BlockedUsers
     * const blockedUser = await prisma.blockedUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlockedUsers and only return the `id`
     * const blockedUserWithIdOnly = await prisma.blockedUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends blockedUserUpdateManyAndReturnArgs>(args: SelectSubset<T, blockedUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blockedUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlockedUser.
     * @param {blockedUserUpsertArgs} args - Arguments to update or create a BlockedUser.
     * @example
     * // Update or create a BlockedUser
     * const blockedUser = await prisma.blockedUser.upsert({
     *   create: {
     *     // ... data to create a BlockedUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlockedUser we want to update
     *   }
     * })
     */
    upsert<T extends blockedUserUpsertArgs>(args: SelectSubset<T, blockedUserUpsertArgs<ExtArgs>>): Prisma__blockedUserClient<$Result.GetResult<Prisma.$blockedUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlockedUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blockedUserCountArgs} args - Arguments to filter BlockedUsers to count.
     * @example
     * // Count the number of BlockedUsers
     * const count = await prisma.blockedUser.count({
     *   where: {
     *     // ... the filter for the BlockedUsers we want to count
     *   }
     * })
    **/
    count<T extends blockedUserCountArgs>(
      args?: Subset<T, blockedUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlockedUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlockedUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlockedUserAggregateArgs>(args: Subset<T, BlockedUserAggregateArgs>): Prisma.PrismaPromise<GetBlockedUserAggregateType<T>>

    /**
     * Group by BlockedUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blockedUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends blockedUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: blockedUserGroupByArgs['orderBy'] }
        : { orderBy?: blockedUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, blockedUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockedUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the blockedUser model
   */
  readonly fields: blockedUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for blockedUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__blockedUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the blockedUser model
   */
  interface blockedUserFieldRefs {
    readonly id: FieldRef<"blockedUser", 'String'>
    readonly userId: FieldRef<"blockedUser", 'String'>
    readonly createdAt: FieldRef<"blockedUser", 'DateTime'>
    readonly updateAT: FieldRef<"blockedUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * blockedUser findUnique
   */
  export type blockedUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blockedUser
     */
    select?: blockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blockedUser
     */
    omit?: blockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockedUserInclude<ExtArgs> | null
    /**
     * Filter, which blockedUser to fetch.
     */
    where: blockedUserWhereUniqueInput
  }

  /**
   * blockedUser findUniqueOrThrow
   */
  export type blockedUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blockedUser
     */
    select?: blockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blockedUser
     */
    omit?: blockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockedUserInclude<ExtArgs> | null
    /**
     * Filter, which blockedUser to fetch.
     */
    where: blockedUserWhereUniqueInput
  }

  /**
   * blockedUser findFirst
   */
  export type blockedUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blockedUser
     */
    select?: blockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blockedUser
     */
    omit?: blockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockedUserInclude<ExtArgs> | null
    /**
     * Filter, which blockedUser to fetch.
     */
    where?: blockedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blockedUsers to fetch.
     */
    orderBy?: blockedUserOrderByWithRelationInput | blockedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blockedUsers.
     */
    cursor?: blockedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blockedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blockedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blockedUsers.
     */
    distinct?: BlockedUserScalarFieldEnum | BlockedUserScalarFieldEnum[]
  }

  /**
   * blockedUser findFirstOrThrow
   */
  export type blockedUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blockedUser
     */
    select?: blockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blockedUser
     */
    omit?: blockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockedUserInclude<ExtArgs> | null
    /**
     * Filter, which blockedUser to fetch.
     */
    where?: blockedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blockedUsers to fetch.
     */
    orderBy?: blockedUserOrderByWithRelationInput | blockedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for blockedUsers.
     */
    cursor?: blockedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blockedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blockedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of blockedUsers.
     */
    distinct?: BlockedUserScalarFieldEnum | BlockedUserScalarFieldEnum[]
  }

  /**
   * blockedUser findMany
   */
  export type blockedUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blockedUser
     */
    select?: blockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blockedUser
     */
    omit?: blockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockedUserInclude<ExtArgs> | null
    /**
     * Filter, which blockedUsers to fetch.
     */
    where?: blockedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of blockedUsers to fetch.
     */
    orderBy?: blockedUserOrderByWithRelationInput | blockedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing blockedUsers.
     */
    cursor?: blockedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` blockedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` blockedUsers.
     */
    skip?: number
    distinct?: BlockedUserScalarFieldEnum | BlockedUserScalarFieldEnum[]
  }

  /**
   * blockedUser create
   */
  export type blockedUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blockedUser
     */
    select?: blockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blockedUser
     */
    omit?: blockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockedUserInclude<ExtArgs> | null
    /**
     * The data needed to create a blockedUser.
     */
    data: XOR<blockedUserCreateInput, blockedUserUncheckedCreateInput>
  }

  /**
   * blockedUser createMany
   */
  export type blockedUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many blockedUsers.
     */
    data: blockedUserCreateManyInput | blockedUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * blockedUser createManyAndReturn
   */
  export type blockedUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blockedUser
     */
    select?: blockedUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the blockedUser
     */
    omit?: blockedUserOmit<ExtArgs> | null
    /**
     * The data used to create many blockedUsers.
     */
    data: blockedUserCreateManyInput | blockedUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockedUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * blockedUser update
   */
  export type blockedUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blockedUser
     */
    select?: blockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blockedUser
     */
    omit?: blockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockedUserInclude<ExtArgs> | null
    /**
     * The data needed to update a blockedUser.
     */
    data: XOR<blockedUserUpdateInput, blockedUserUncheckedUpdateInput>
    /**
     * Choose, which blockedUser to update.
     */
    where: blockedUserWhereUniqueInput
  }

  /**
   * blockedUser updateMany
   */
  export type blockedUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update blockedUsers.
     */
    data: XOR<blockedUserUpdateManyMutationInput, blockedUserUncheckedUpdateManyInput>
    /**
     * Filter which blockedUsers to update
     */
    where?: blockedUserWhereInput
    /**
     * Limit how many blockedUsers to update.
     */
    limit?: number
  }

  /**
   * blockedUser updateManyAndReturn
   */
  export type blockedUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blockedUser
     */
    select?: blockedUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the blockedUser
     */
    omit?: blockedUserOmit<ExtArgs> | null
    /**
     * The data used to update blockedUsers.
     */
    data: XOR<blockedUserUpdateManyMutationInput, blockedUserUncheckedUpdateManyInput>
    /**
     * Filter which blockedUsers to update
     */
    where?: blockedUserWhereInput
    /**
     * Limit how many blockedUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockedUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * blockedUser upsert
   */
  export type blockedUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blockedUser
     */
    select?: blockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blockedUser
     */
    omit?: blockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockedUserInclude<ExtArgs> | null
    /**
     * The filter to search for the blockedUser to update in case it exists.
     */
    where: blockedUserWhereUniqueInput
    /**
     * In case the blockedUser found by the `where` argument doesn't exist, create a new blockedUser with this data.
     */
    create: XOR<blockedUserCreateInput, blockedUserUncheckedCreateInput>
    /**
     * In case the blockedUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<blockedUserUpdateInput, blockedUserUncheckedUpdateInput>
  }

  /**
   * blockedUser delete
   */
  export type blockedUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blockedUser
     */
    select?: blockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blockedUser
     */
    omit?: blockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockedUserInclude<ExtArgs> | null
    /**
     * Filter which blockedUser to delete.
     */
    where: blockedUserWhereUniqueInput
  }

  /**
   * blockedUser deleteMany
   */
  export type blockedUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which blockedUsers to delete
     */
    where?: blockedUserWhereInput
    /**
     * Limit how many blockedUsers to delete.
     */
    limit?: number
  }

  /**
   * blockedUser without action
   */
  export type blockedUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blockedUser
     */
    select?: blockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blockedUser
     */
    omit?: blockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockedUserInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    gender: $Enums.Gender | null
    dateOfBirth: Date | null
    isActive: boolean | null
    userName: string | null
    avtUrl: string | null
    email: string | null
    hashingPassword: string | null
    lastSeen: Date | null
    createAt: Date | null
    updateAt: Date | null
    deleteAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    gender: $Enums.Gender | null
    dateOfBirth: Date | null
    isActive: boolean | null
    userName: string | null
    avtUrl: string | null
    email: string | null
    hashingPassword: string | null
    lastSeen: Date | null
    createAt: Date | null
    updateAt: Date | null
    deleteAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    gender: number
    dateOfBirth: number
    isActive: number
    userName: number
    avtUrl: number
    email: number
    hashingPassword: number
    lastSeen: number
    createAt: number
    updateAt: number
    deleteAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    dateOfBirth?: true
    isActive?: true
    userName?: true
    avtUrl?: true
    email?: true
    hashingPassword?: true
    lastSeen?: true
    createAt?: true
    updateAt?: true
    deleteAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    dateOfBirth?: true
    isActive?: true
    userName?: true
    avtUrl?: true
    email?: true
    hashingPassword?: true
    lastSeen?: true
    createAt?: true
    updateAt?: true
    deleteAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    dateOfBirth?: true
    isActive?: true
    userName?: true
    avtUrl?: true
    email?: true
    hashingPassword?: true
    lastSeen?: true
    createAt?: true
    updateAt?: true
    deleteAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    gender: $Enums.Gender | null
    dateOfBirth: Date | null
    isActive: boolean
    userName: string
    avtUrl: string | null
    email: string
    hashingPassword: string
    lastSeen: Date | null
    createAt: Date
    updateAt: Date
    deleteAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gender?: boolean
    dateOfBirth?: boolean
    isActive?: boolean
    userName?: boolean
    avtUrl?: boolean
    email?: boolean
    hashingPassword?: boolean
    lastSeen?: boolean
    createAt?: boolean
    updateAt?: boolean
    deleteAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    codes?: boolean | User$codesArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    postLiked?: boolean | User$postLikedArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    repComments?: boolean | User$repCommentsArgs<ExtArgs>
    user1?: boolean | User$user1Args<ExtArgs>
    user2?: boolean | User$user2Args<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    followingUser?: boolean | User$followingUserArgs<ExtArgs>
    followers?: boolean | User$followersArgs<ExtArgs>
    blockedUsers?: boolean | User$blockedUsersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gender?: boolean
    dateOfBirth?: boolean
    isActive?: boolean
    userName?: boolean
    avtUrl?: boolean
    email?: boolean
    hashingPassword?: boolean
    lastSeen?: boolean
    createAt?: boolean
    updateAt?: boolean
    deleteAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gender?: boolean
    dateOfBirth?: boolean
    isActive?: boolean
    userName?: boolean
    avtUrl?: boolean
    email?: boolean
    hashingPassword?: boolean
    lastSeen?: boolean
    createAt?: boolean
    updateAt?: boolean
    deleteAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    gender?: boolean
    dateOfBirth?: boolean
    isActive?: boolean
    userName?: boolean
    avtUrl?: boolean
    email?: boolean
    hashingPassword?: boolean
    lastSeen?: boolean
    createAt?: boolean
    updateAt?: boolean
    deleteAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "gender" | "dateOfBirth" | "isActive" | "userName" | "avtUrl" | "email" | "hashingPassword" | "lastSeen" | "createAt" | "updateAt" | "deleteAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    codes?: boolean | User$codesArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    postLiked?: boolean | User$postLikedArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    repComments?: boolean | User$repCommentsArgs<ExtArgs>
    user1?: boolean | User$user1Args<ExtArgs>
    user2?: boolean | User$user2Args<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    followingUser?: boolean | User$followingUserArgs<ExtArgs>
    followers?: boolean | User$followersArgs<ExtArgs>
    blockedUsers?: boolean | User$blockedUsersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      codes: Prisma.$CodePayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      postLiked: Prisma.$BehaviorWithPostPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      repComments: Prisma.$RepCommentPayload<ExtArgs>[]
      user1: Prisma.$ConversationPayload<ExtArgs>[]
      user2: Prisma.$ConversationPayload<ExtArgs>[]
      sentMessages: Prisma.$PrivateMessagePayload<ExtArgs>[]
      followingUser: Prisma.$FollowingPayload<ExtArgs>[]
      followers: Prisma.$FollowerPayload<ExtArgs>[]
      blockedUsers: Prisma.$blockedUserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      gender: $Enums.Gender | null
      dateOfBirth: Date | null
      isActive: boolean
      userName: string
      avtUrl: string | null
      email: string
      hashingPassword: string
      lastSeen: Date | null
      createAt: Date
      updateAt: Date
      deleteAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    codes<T extends User$codesArgs<ExtArgs> = {}>(args?: Subset<T, User$codesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    postLiked<T extends User$postLikedArgs<ExtArgs> = {}>(args?: Subset<T, User$postLikedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BehaviorWithPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    repComments<T extends User$repCommentsArgs<ExtArgs> = {}>(args?: Subset<T, User$repCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user1<T extends User$user1Args<ExtArgs> = {}>(args?: Subset<T, User$user1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user2<T extends User$user2Args<ExtArgs> = {}>(args?: Subset<T, User$user2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentMessages<T extends User$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    followingUser<T extends User$followingUserArgs<ExtArgs> = {}>(args?: Subset<T, User$followingUserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    followers<T extends User$followersArgs<ExtArgs> = {}>(args?: Subset<T, User$followersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blockedUsers<T extends User$blockedUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$blockedUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$blockedUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'Gender'>
    readonly dateOfBirth: FieldRef<"User", 'DateTime'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly userName: FieldRef<"User", 'String'>
    readonly avtUrl: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly hashingPassword: FieldRef<"User", 'String'>
    readonly lastSeen: FieldRef<"User", 'DateTime'>
    readonly createAt: FieldRef<"User", 'DateTime'>
    readonly updateAt: FieldRef<"User", 'DateTime'>
    readonly deleteAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.codes
   */
  export type User$codesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Code
     */
    select?: CodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Code
     */
    omit?: CodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodeInclude<ExtArgs> | null
    where?: CodeWhereInput
    orderBy?: CodeOrderByWithRelationInput | CodeOrderByWithRelationInput[]
    cursor?: CodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CodeScalarFieldEnum | CodeScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.postLiked
   */
  export type User$postLikedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BehaviorWithPost
     */
    select?: BehaviorWithPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BehaviorWithPost
     */
    omit?: BehaviorWithPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BehaviorWithPostInclude<ExtArgs> | null
    where?: BehaviorWithPostWhereInput
    orderBy?: BehaviorWithPostOrderByWithRelationInput | BehaviorWithPostOrderByWithRelationInput[]
    cursor?: BehaviorWithPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BehaviorWithPostScalarFieldEnum | BehaviorWithPostScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.repComments
   */
  export type User$repCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepComment
     */
    select?: RepCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepComment
     */
    omit?: RepCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepCommentInclude<ExtArgs> | null
    where?: RepCommentWhereInput
    orderBy?: RepCommentOrderByWithRelationInput | RepCommentOrderByWithRelationInput[]
    cursor?: RepCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepCommentScalarFieldEnum | RepCommentScalarFieldEnum[]
  }

  /**
   * User.user1
   */
  export type User$user1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    cursor?: ConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * User.user2
   */
  export type User$user2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    cursor?: ConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * User.sentMessages
   */
  export type User$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    where?: PrivateMessageWhereInput
    orderBy?: PrivateMessageOrderByWithRelationInput | PrivateMessageOrderByWithRelationInput[]
    cursor?: PrivateMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrivateMessageScalarFieldEnum | PrivateMessageScalarFieldEnum[]
  }

  /**
   * User.followingUser
   */
  export type User$followingUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Following
     */
    omit?: FollowingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowingInclude<ExtArgs> | null
    where?: FollowingWhereInput
    orderBy?: FollowingOrderByWithRelationInput | FollowingOrderByWithRelationInput[]
    cursor?: FollowingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowingScalarFieldEnum | FollowingScalarFieldEnum[]
  }

  /**
   * User.followers
   */
  export type User$followersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follower
     */
    select?: FollowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follower
     */
    omit?: FollowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowerInclude<ExtArgs> | null
    where?: FollowerWhereInput
    orderBy?: FollowerOrderByWithRelationInput | FollowerOrderByWithRelationInput[]
    cursor?: FollowerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowerScalarFieldEnum | FollowerScalarFieldEnum[]
  }

  /**
   * User.blockedUsers
   */
  export type User$blockedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the blockedUser
     */
    select?: blockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the blockedUser
     */
    omit?: blockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: blockedUserInclude<ExtArgs> | null
    where?: blockedUserWhereInput
    orderBy?: blockedUserOrderByWithRelationInput | blockedUserOrderByWithRelationInput[]
    cursor?: blockedUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlockedUserScalarFieldEnum | BlockedUserScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Following
   */

  export type AggregateFollowing = {
    _count: FollowingCountAggregateOutputType | null
    _min: FollowingMinAggregateOutputType | null
    _max: FollowingMaxAggregateOutputType | null
  }

  export type FollowingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    addressUserId: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type FollowingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    addressUserId: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type FollowingCountAggregateOutputType = {
    id: number
    userId: number
    addressUserId: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type FollowingMinAggregateInputType = {
    id?: true
    userId?: true
    addressUserId?: true
    createdAt?: true
    updateAt?: true
  }

  export type FollowingMaxAggregateInputType = {
    id?: true
    userId?: true
    addressUserId?: true
    createdAt?: true
    updateAt?: true
  }

  export type FollowingCountAggregateInputType = {
    id?: true
    userId?: true
    addressUserId?: true
    createdAt?: true
    updateAt?: true
    _all?: true
  }

  export type FollowingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Following to aggregate.
     */
    where?: FollowingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Followings to fetch.
     */
    orderBy?: FollowingOrderByWithRelationInput | FollowingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FollowingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Followings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Followings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Followings
    **/
    _count?: true | FollowingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowingMaxAggregateInputType
  }

  export type GetFollowingAggregateType<T extends FollowingAggregateArgs> = {
        [P in keyof T & keyof AggregateFollowing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollowing[P]>
      : GetScalarType<T[P], AggregateFollowing[P]>
  }




  export type FollowingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowingWhereInput
    orderBy?: FollowingOrderByWithAggregationInput | FollowingOrderByWithAggregationInput[]
    by: FollowingScalarFieldEnum[] | FollowingScalarFieldEnum
    having?: FollowingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowingCountAggregateInputType | true
    _min?: FollowingMinAggregateInputType
    _max?: FollowingMaxAggregateInputType
  }

  export type FollowingGroupByOutputType = {
    id: string
    userId: string
    addressUserId: string
    createdAt: Date
    updateAt: Date
    _count: FollowingCountAggregateOutputType | null
    _min: FollowingMinAggregateOutputType | null
    _max: FollowingMaxAggregateOutputType | null
  }

  type GetFollowingGroupByPayload<T extends FollowingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowingGroupByOutputType[P]>
            : GetScalarType<T[P], FollowingGroupByOutputType[P]>
        }
      >
    >


  export type FollowingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    addressUserId?: boolean
    createdAt?: boolean
    updateAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["following"]>

  export type FollowingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    addressUserId?: boolean
    createdAt?: boolean
    updateAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["following"]>

  export type FollowingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    addressUserId?: boolean
    createdAt?: boolean
    updateAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["following"]>

  export type FollowingSelectScalar = {
    id?: boolean
    userId?: boolean
    addressUserId?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type FollowingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "addressUserId" | "createdAt" | "updateAt", ExtArgs["result"]["following"]>
  export type FollowingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FollowingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FollowingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FollowingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Following"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      addressUserId: string
      createdAt: Date
      updateAt: Date
    }, ExtArgs["result"]["following"]>
    composites: {}
  }

  type FollowingGetPayload<S extends boolean | null | undefined | FollowingDefaultArgs> = $Result.GetResult<Prisma.$FollowingPayload, S>

  type FollowingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FollowingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FollowingCountAggregateInputType | true
    }

  export interface FollowingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Following'], meta: { name: 'Following' } }
    /**
     * Find zero or one Following that matches the filter.
     * @param {FollowingFindUniqueArgs} args - Arguments to find a Following
     * @example
     * // Get one Following
     * const following = await prisma.following.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FollowingFindUniqueArgs>(args: SelectSubset<T, FollowingFindUniqueArgs<ExtArgs>>): Prisma__FollowingClient<$Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Following that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FollowingFindUniqueOrThrowArgs} args - Arguments to find a Following
     * @example
     * // Get one Following
     * const following = await prisma.following.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FollowingFindUniqueOrThrowArgs>(args: SelectSubset<T, FollowingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FollowingClient<$Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Following that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowingFindFirstArgs} args - Arguments to find a Following
     * @example
     * // Get one Following
     * const following = await prisma.following.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FollowingFindFirstArgs>(args?: SelectSubset<T, FollowingFindFirstArgs<ExtArgs>>): Prisma__FollowingClient<$Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Following that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowingFindFirstOrThrowArgs} args - Arguments to find a Following
     * @example
     * // Get one Following
     * const following = await prisma.following.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FollowingFindFirstOrThrowArgs>(args?: SelectSubset<T, FollowingFindFirstOrThrowArgs<ExtArgs>>): Prisma__FollowingClient<$Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Followings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Followings
     * const followings = await prisma.following.findMany()
     * 
     * // Get first 10 Followings
     * const followings = await prisma.following.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const followingWithIdOnly = await prisma.following.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FollowingFindManyArgs>(args?: SelectSubset<T, FollowingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Following.
     * @param {FollowingCreateArgs} args - Arguments to create a Following.
     * @example
     * // Create one Following
     * const Following = await prisma.following.create({
     *   data: {
     *     // ... data to create a Following
     *   }
     * })
     * 
     */
    create<T extends FollowingCreateArgs>(args: SelectSubset<T, FollowingCreateArgs<ExtArgs>>): Prisma__FollowingClient<$Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Followings.
     * @param {FollowingCreateManyArgs} args - Arguments to create many Followings.
     * @example
     * // Create many Followings
     * const following = await prisma.following.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FollowingCreateManyArgs>(args?: SelectSubset<T, FollowingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Followings and returns the data saved in the database.
     * @param {FollowingCreateManyAndReturnArgs} args - Arguments to create many Followings.
     * @example
     * // Create many Followings
     * const following = await prisma.following.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Followings and only return the `id`
     * const followingWithIdOnly = await prisma.following.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FollowingCreateManyAndReturnArgs>(args?: SelectSubset<T, FollowingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Following.
     * @param {FollowingDeleteArgs} args - Arguments to delete one Following.
     * @example
     * // Delete one Following
     * const Following = await prisma.following.delete({
     *   where: {
     *     // ... filter to delete one Following
     *   }
     * })
     * 
     */
    delete<T extends FollowingDeleteArgs>(args: SelectSubset<T, FollowingDeleteArgs<ExtArgs>>): Prisma__FollowingClient<$Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Following.
     * @param {FollowingUpdateArgs} args - Arguments to update one Following.
     * @example
     * // Update one Following
     * const following = await prisma.following.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FollowingUpdateArgs>(args: SelectSubset<T, FollowingUpdateArgs<ExtArgs>>): Prisma__FollowingClient<$Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Followings.
     * @param {FollowingDeleteManyArgs} args - Arguments to filter Followings to delete.
     * @example
     * // Delete a few Followings
     * const { count } = await prisma.following.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FollowingDeleteManyArgs>(args?: SelectSubset<T, FollowingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Followings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Followings
     * const following = await prisma.following.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FollowingUpdateManyArgs>(args: SelectSubset<T, FollowingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Followings and returns the data updated in the database.
     * @param {FollowingUpdateManyAndReturnArgs} args - Arguments to update many Followings.
     * @example
     * // Update many Followings
     * const following = await prisma.following.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Followings and only return the `id`
     * const followingWithIdOnly = await prisma.following.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FollowingUpdateManyAndReturnArgs>(args: SelectSubset<T, FollowingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Following.
     * @param {FollowingUpsertArgs} args - Arguments to update or create a Following.
     * @example
     * // Update or create a Following
     * const following = await prisma.following.upsert({
     *   create: {
     *     // ... data to create a Following
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Following we want to update
     *   }
     * })
     */
    upsert<T extends FollowingUpsertArgs>(args: SelectSubset<T, FollowingUpsertArgs<ExtArgs>>): Prisma__FollowingClient<$Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Followings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowingCountArgs} args - Arguments to filter Followings to count.
     * @example
     * // Count the number of Followings
     * const count = await prisma.following.count({
     *   where: {
     *     // ... the filter for the Followings we want to count
     *   }
     * })
    **/
    count<T extends FollowingCountArgs>(
      args?: Subset<T, FollowingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Following.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FollowingAggregateArgs>(args: Subset<T, FollowingAggregateArgs>): Prisma.PrismaPromise<GetFollowingAggregateType<T>>

    /**
     * Group by Following.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FollowingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowingGroupByArgs['orderBy'] }
        : { orderBy?: FollowingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FollowingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Following model
   */
  readonly fields: FollowingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Following.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FollowingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Following model
   */
  interface FollowingFieldRefs {
    readonly id: FieldRef<"Following", 'String'>
    readonly userId: FieldRef<"Following", 'String'>
    readonly addressUserId: FieldRef<"Following", 'String'>
    readonly createdAt: FieldRef<"Following", 'DateTime'>
    readonly updateAt: FieldRef<"Following", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Following findUnique
   */
  export type FollowingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Following
     */
    omit?: FollowingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowingInclude<ExtArgs> | null
    /**
     * Filter, which Following to fetch.
     */
    where: FollowingWhereUniqueInput
  }

  /**
   * Following findUniqueOrThrow
   */
  export type FollowingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Following
     */
    omit?: FollowingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowingInclude<ExtArgs> | null
    /**
     * Filter, which Following to fetch.
     */
    where: FollowingWhereUniqueInput
  }

  /**
   * Following findFirst
   */
  export type FollowingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Following
     */
    omit?: FollowingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowingInclude<ExtArgs> | null
    /**
     * Filter, which Following to fetch.
     */
    where?: FollowingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Followings to fetch.
     */
    orderBy?: FollowingOrderByWithRelationInput | FollowingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Followings.
     */
    cursor?: FollowingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Followings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Followings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Followings.
     */
    distinct?: FollowingScalarFieldEnum | FollowingScalarFieldEnum[]
  }

  /**
   * Following findFirstOrThrow
   */
  export type FollowingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Following
     */
    omit?: FollowingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowingInclude<ExtArgs> | null
    /**
     * Filter, which Following to fetch.
     */
    where?: FollowingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Followings to fetch.
     */
    orderBy?: FollowingOrderByWithRelationInput | FollowingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Followings.
     */
    cursor?: FollowingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Followings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Followings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Followings.
     */
    distinct?: FollowingScalarFieldEnum | FollowingScalarFieldEnum[]
  }

  /**
   * Following findMany
   */
  export type FollowingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Following
     */
    omit?: FollowingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowingInclude<ExtArgs> | null
    /**
     * Filter, which Followings to fetch.
     */
    where?: FollowingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Followings to fetch.
     */
    orderBy?: FollowingOrderByWithRelationInput | FollowingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Followings.
     */
    cursor?: FollowingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Followings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Followings.
     */
    skip?: number
    distinct?: FollowingScalarFieldEnum | FollowingScalarFieldEnum[]
  }

  /**
   * Following create
   */
  export type FollowingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Following
     */
    omit?: FollowingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowingInclude<ExtArgs> | null
    /**
     * The data needed to create a Following.
     */
    data: XOR<FollowingCreateInput, FollowingUncheckedCreateInput>
  }

  /**
   * Following createMany
   */
  export type FollowingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Followings.
     */
    data: FollowingCreateManyInput | FollowingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Following createManyAndReturn
   */
  export type FollowingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Following
     */
    omit?: FollowingOmit<ExtArgs> | null
    /**
     * The data used to create many Followings.
     */
    data: FollowingCreateManyInput | FollowingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Following update
   */
  export type FollowingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Following
     */
    omit?: FollowingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowingInclude<ExtArgs> | null
    /**
     * The data needed to update a Following.
     */
    data: XOR<FollowingUpdateInput, FollowingUncheckedUpdateInput>
    /**
     * Choose, which Following to update.
     */
    where: FollowingWhereUniqueInput
  }

  /**
   * Following updateMany
   */
  export type FollowingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Followings.
     */
    data: XOR<FollowingUpdateManyMutationInput, FollowingUncheckedUpdateManyInput>
    /**
     * Filter which Followings to update
     */
    where?: FollowingWhereInput
    /**
     * Limit how many Followings to update.
     */
    limit?: number
  }

  /**
   * Following updateManyAndReturn
   */
  export type FollowingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Following
     */
    omit?: FollowingOmit<ExtArgs> | null
    /**
     * The data used to update Followings.
     */
    data: XOR<FollowingUpdateManyMutationInput, FollowingUncheckedUpdateManyInput>
    /**
     * Filter which Followings to update
     */
    where?: FollowingWhereInput
    /**
     * Limit how many Followings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Following upsert
   */
  export type FollowingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Following
     */
    omit?: FollowingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowingInclude<ExtArgs> | null
    /**
     * The filter to search for the Following to update in case it exists.
     */
    where: FollowingWhereUniqueInput
    /**
     * In case the Following found by the `where` argument doesn't exist, create a new Following with this data.
     */
    create: XOR<FollowingCreateInput, FollowingUncheckedCreateInput>
    /**
     * In case the Following was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FollowingUpdateInput, FollowingUncheckedUpdateInput>
  }

  /**
   * Following delete
   */
  export type FollowingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Following
     */
    omit?: FollowingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowingInclude<ExtArgs> | null
    /**
     * Filter which Following to delete.
     */
    where: FollowingWhereUniqueInput
  }

  /**
   * Following deleteMany
   */
  export type FollowingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Followings to delete
     */
    where?: FollowingWhereInput
    /**
     * Limit how many Followings to delete.
     */
    limit?: number
  }

  /**
   * Following without action
   */
  export type FollowingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Following
     */
    omit?: FollowingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowingInclude<ExtArgs> | null
  }


  /**
   * Model Follower
   */

  export type AggregateFollower = {
    _count: FollowerCountAggregateOutputType | null
    _min: FollowerMinAggregateOutputType | null
    _max: FollowerMaxAggregateOutputType | null
  }

  export type FollowerMinAggregateOutputType = {
    id: string | null
    userId: string | null
    followerId: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type FollowerMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    followerId: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type FollowerCountAggregateOutputType = {
    id: number
    userId: number
    followerId: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type FollowerMinAggregateInputType = {
    id?: true
    userId?: true
    followerId?: true
    createdAt?: true
    updateAt?: true
  }

  export type FollowerMaxAggregateInputType = {
    id?: true
    userId?: true
    followerId?: true
    createdAt?: true
    updateAt?: true
  }

  export type FollowerCountAggregateInputType = {
    id?: true
    userId?: true
    followerId?: true
    createdAt?: true
    updateAt?: true
    _all?: true
  }

  export type FollowerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Follower to aggregate.
     */
    where?: FollowerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Followers to fetch.
     */
    orderBy?: FollowerOrderByWithRelationInput | FollowerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FollowerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Followers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Followers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Followers
    **/
    _count?: true | FollowerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowerMaxAggregateInputType
  }

  export type GetFollowerAggregateType<T extends FollowerAggregateArgs> = {
        [P in keyof T & keyof AggregateFollower]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollower[P]>
      : GetScalarType<T[P], AggregateFollower[P]>
  }




  export type FollowerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowerWhereInput
    orderBy?: FollowerOrderByWithAggregationInput | FollowerOrderByWithAggregationInput[]
    by: FollowerScalarFieldEnum[] | FollowerScalarFieldEnum
    having?: FollowerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowerCountAggregateInputType | true
    _min?: FollowerMinAggregateInputType
    _max?: FollowerMaxAggregateInputType
  }

  export type FollowerGroupByOutputType = {
    id: string
    userId: string
    followerId: string
    createdAt: Date
    updateAt: Date
    _count: FollowerCountAggregateOutputType | null
    _min: FollowerMinAggregateOutputType | null
    _max: FollowerMaxAggregateOutputType | null
  }

  type GetFollowerGroupByPayload<T extends FollowerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowerGroupByOutputType[P]>
            : GetScalarType<T[P], FollowerGroupByOutputType[P]>
        }
      >
    >


  export type FollowerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    followerId?: boolean
    createdAt?: boolean
    updateAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["follower"]>

  export type FollowerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    followerId?: boolean
    createdAt?: boolean
    updateAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["follower"]>

  export type FollowerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    followerId?: boolean
    createdAt?: boolean
    updateAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["follower"]>

  export type FollowerSelectScalar = {
    id?: boolean
    userId?: boolean
    followerId?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type FollowerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "followerId" | "createdAt" | "updateAt", ExtArgs["result"]["follower"]>
  export type FollowerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FollowerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FollowerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FollowerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Follower"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      followerId: string
      createdAt: Date
      updateAt: Date
    }, ExtArgs["result"]["follower"]>
    composites: {}
  }

  type FollowerGetPayload<S extends boolean | null | undefined | FollowerDefaultArgs> = $Result.GetResult<Prisma.$FollowerPayload, S>

  type FollowerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FollowerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FollowerCountAggregateInputType | true
    }

  export interface FollowerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Follower'], meta: { name: 'Follower' } }
    /**
     * Find zero or one Follower that matches the filter.
     * @param {FollowerFindUniqueArgs} args - Arguments to find a Follower
     * @example
     * // Get one Follower
     * const follower = await prisma.follower.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FollowerFindUniqueArgs>(args: SelectSubset<T, FollowerFindUniqueArgs<ExtArgs>>): Prisma__FollowerClient<$Result.GetResult<Prisma.$FollowerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Follower that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FollowerFindUniqueOrThrowArgs} args - Arguments to find a Follower
     * @example
     * // Get one Follower
     * const follower = await prisma.follower.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FollowerFindUniqueOrThrowArgs>(args: SelectSubset<T, FollowerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FollowerClient<$Result.GetResult<Prisma.$FollowerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Follower that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowerFindFirstArgs} args - Arguments to find a Follower
     * @example
     * // Get one Follower
     * const follower = await prisma.follower.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FollowerFindFirstArgs>(args?: SelectSubset<T, FollowerFindFirstArgs<ExtArgs>>): Prisma__FollowerClient<$Result.GetResult<Prisma.$FollowerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Follower that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowerFindFirstOrThrowArgs} args - Arguments to find a Follower
     * @example
     * // Get one Follower
     * const follower = await prisma.follower.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FollowerFindFirstOrThrowArgs>(args?: SelectSubset<T, FollowerFindFirstOrThrowArgs<ExtArgs>>): Prisma__FollowerClient<$Result.GetResult<Prisma.$FollowerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Followers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Followers
     * const followers = await prisma.follower.findMany()
     * 
     * // Get first 10 Followers
     * const followers = await prisma.follower.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const followerWithIdOnly = await prisma.follower.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FollowerFindManyArgs>(args?: SelectSubset<T, FollowerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Follower.
     * @param {FollowerCreateArgs} args - Arguments to create a Follower.
     * @example
     * // Create one Follower
     * const Follower = await prisma.follower.create({
     *   data: {
     *     // ... data to create a Follower
     *   }
     * })
     * 
     */
    create<T extends FollowerCreateArgs>(args: SelectSubset<T, FollowerCreateArgs<ExtArgs>>): Prisma__FollowerClient<$Result.GetResult<Prisma.$FollowerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Followers.
     * @param {FollowerCreateManyArgs} args - Arguments to create many Followers.
     * @example
     * // Create many Followers
     * const follower = await prisma.follower.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FollowerCreateManyArgs>(args?: SelectSubset<T, FollowerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Followers and returns the data saved in the database.
     * @param {FollowerCreateManyAndReturnArgs} args - Arguments to create many Followers.
     * @example
     * // Create many Followers
     * const follower = await prisma.follower.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Followers and only return the `id`
     * const followerWithIdOnly = await prisma.follower.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FollowerCreateManyAndReturnArgs>(args?: SelectSubset<T, FollowerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Follower.
     * @param {FollowerDeleteArgs} args - Arguments to delete one Follower.
     * @example
     * // Delete one Follower
     * const Follower = await prisma.follower.delete({
     *   where: {
     *     // ... filter to delete one Follower
     *   }
     * })
     * 
     */
    delete<T extends FollowerDeleteArgs>(args: SelectSubset<T, FollowerDeleteArgs<ExtArgs>>): Prisma__FollowerClient<$Result.GetResult<Prisma.$FollowerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Follower.
     * @param {FollowerUpdateArgs} args - Arguments to update one Follower.
     * @example
     * // Update one Follower
     * const follower = await prisma.follower.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FollowerUpdateArgs>(args: SelectSubset<T, FollowerUpdateArgs<ExtArgs>>): Prisma__FollowerClient<$Result.GetResult<Prisma.$FollowerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Followers.
     * @param {FollowerDeleteManyArgs} args - Arguments to filter Followers to delete.
     * @example
     * // Delete a few Followers
     * const { count } = await prisma.follower.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FollowerDeleteManyArgs>(args?: SelectSubset<T, FollowerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Followers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Followers
     * const follower = await prisma.follower.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FollowerUpdateManyArgs>(args: SelectSubset<T, FollowerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Followers and returns the data updated in the database.
     * @param {FollowerUpdateManyAndReturnArgs} args - Arguments to update many Followers.
     * @example
     * // Update many Followers
     * const follower = await prisma.follower.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Followers and only return the `id`
     * const followerWithIdOnly = await prisma.follower.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FollowerUpdateManyAndReturnArgs>(args: SelectSubset<T, FollowerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Follower.
     * @param {FollowerUpsertArgs} args - Arguments to update or create a Follower.
     * @example
     * // Update or create a Follower
     * const follower = await prisma.follower.upsert({
     *   create: {
     *     // ... data to create a Follower
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Follower we want to update
     *   }
     * })
     */
    upsert<T extends FollowerUpsertArgs>(args: SelectSubset<T, FollowerUpsertArgs<ExtArgs>>): Prisma__FollowerClient<$Result.GetResult<Prisma.$FollowerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Followers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowerCountArgs} args - Arguments to filter Followers to count.
     * @example
     * // Count the number of Followers
     * const count = await prisma.follower.count({
     *   where: {
     *     // ... the filter for the Followers we want to count
     *   }
     * })
    **/
    count<T extends FollowerCountArgs>(
      args?: Subset<T, FollowerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Follower.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FollowerAggregateArgs>(args: Subset<T, FollowerAggregateArgs>): Prisma.PrismaPromise<GetFollowerAggregateType<T>>

    /**
     * Group by Follower.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FollowerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowerGroupByArgs['orderBy'] }
        : { orderBy?: FollowerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FollowerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Follower model
   */
  readonly fields: FollowerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Follower.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FollowerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Follower model
   */
  interface FollowerFieldRefs {
    readonly id: FieldRef<"Follower", 'String'>
    readonly userId: FieldRef<"Follower", 'String'>
    readonly followerId: FieldRef<"Follower", 'String'>
    readonly createdAt: FieldRef<"Follower", 'DateTime'>
    readonly updateAt: FieldRef<"Follower", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Follower findUnique
   */
  export type FollowerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follower
     */
    select?: FollowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follower
     */
    omit?: FollowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowerInclude<ExtArgs> | null
    /**
     * Filter, which Follower to fetch.
     */
    where: FollowerWhereUniqueInput
  }

  /**
   * Follower findUniqueOrThrow
   */
  export type FollowerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follower
     */
    select?: FollowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follower
     */
    omit?: FollowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowerInclude<ExtArgs> | null
    /**
     * Filter, which Follower to fetch.
     */
    where: FollowerWhereUniqueInput
  }

  /**
   * Follower findFirst
   */
  export type FollowerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follower
     */
    select?: FollowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follower
     */
    omit?: FollowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowerInclude<ExtArgs> | null
    /**
     * Filter, which Follower to fetch.
     */
    where?: FollowerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Followers to fetch.
     */
    orderBy?: FollowerOrderByWithRelationInput | FollowerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Followers.
     */
    cursor?: FollowerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Followers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Followers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Followers.
     */
    distinct?: FollowerScalarFieldEnum | FollowerScalarFieldEnum[]
  }

  /**
   * Follower findFirstOrThrow
   */
  export type FollowerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follower
     */
    select?: FollowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follower
     */
    omit?: FollowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowerInclude<ExtArgs> | null
    /**
     * Filter, which Follower to fetch.
     */
    where?: FollowerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Followers to fetch.
     */
    orderBy?: FollowerOrderByWithRelationInput | FollowerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Followers.
     */
    cursor?: FollowerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Followers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Followers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Followers.
     */
    distinct?: FollowerScalarFieldEnum | FollowerScalarFieldEnum[]
  }

  /**
   * Follower findMany
   */
  export type FollowerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follower
     */
    select?: FollowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follower
     */
    omit?: FollowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowerInclude<ExtArgs> | null
    /**
     * Filter, which Followers to fetch.
     */
    where?: FollowerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Followers to fetch.
     */
    orderBy?: FollowerOrderByWithRelationInput | FollowerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Followers.
     */
    cursor?: FollowerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Followers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Followers.
     */
    skip?: number
    distinct?: FollowerScalarFieldEnum | FollowerScalarFieldEnum[]
  }

  /**
   * Follower create
   */
  export type FollowerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follower
     */
    select?: FollowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follower
     */
    omit?: FollowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowerInclude<ExtArgs> | null
    /**
     * The data needed to create a Follower.
     */
    data: XOR<FollowerCreateInput, FollowerUncheckedCreateInput>
  }

  /**
   * Follower createMany
   */
  export type FollowerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Followers.
     */
    data: FollowerCreateManyInput | FollowerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Follower createManyAndReturn
   */
  export type FollowerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follower
     */
    select?: FollowerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Follower
     */
    omit?: FollowerOmit<ExtArgs> | null
    /**
     * The data used to create many Followers.
     */
    data: FollowerCreateManyInput | FollowerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Follower update
   */
  export type FollowerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follower
     */
    select?: FollowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follower
     */
    omit?: FollowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowerInclude<ExtArgs> | null
    /**
     * The data needed to update a Follower.
     */
    data: XOR<FollowerUpdateInput, FollowerUncheckedUpdateInput>
    /**
     * Choose, which Follower to update.
     */
    where: FollowerWhereUniqueInput
  }

  /**
   * Follower updateMany
   */
  export type FollowerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Followers.
     */
    data: XOR<FollowerUpdateManyMutationInput, FollowerUncheckedUpdateManyInput>
    /**
     * Filter which Followers to update
     */
    where?: FollowerWhereInput
    /**
     * Limit how many Followers to update.
     */
    limit?: number
  }

  /**
   * Follower updateManyAndReturn
   */
  export type FollowerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follower
     */
    select?: FollowerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Follower
     */
    omit?: FollowerOmit<ExtArgs> | null
    /**
     * The data used to update Followers.
     */
    data: XOR<FollowerUpdateManyMutationInput, FollowerUncheckedUpdateManyInput>
    /**
     * Filter which Followers to update
     */
    where?: FollowerWhereInput
    /**
     * Limit how many Followers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Follower upsert
   */
  export type FollowerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follower
     */
    select?: FollowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follower
     */
    omit?: FollowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowerInclude<ExtArgs> | null
    /**
     * The filter to search for the Follower to update in case it exists.
     */
    where: FollowerWhereUniqueInput
    /**
     * In case the Follower found by the `where` argument doesn't exist, create a new Follower with this data.
     */
    create: XOR<FollowerCreateInput, FollowerUncheckedCreateInput>
    /**
     * In case the Follower was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FollowerUpdateInput, FollowerUncheckedUpdateInput>
  }

  /**
   * Follower delete
   */
  export type FollowerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follower
     */
    select?: FollowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follower
     */
    omit?: FollowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowerInclude<ExtArgs> | null
    /**
     * Filter which Follower to delete.
     */
    where: FollowerWhereUniqueInput
  }

  /**
   * Follower deleteMany
   */
  export type FollowerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Followers to delete
     */
    where?: FollowerWhereInput
    /**
     * Limit how many Followers to delete.
     */
    limit?: number
  }

  /**
   * Follower without action
   */
  export type FollowerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follower
     */
    select?: FollowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follower
     */
    omit?: FollowerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowerInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SessionScalarFieldEnum: {
    id: 'id',
    hashingRefreshToken: 'hashingRefreshToken',
    userId: 'userId',
    userIp: 'userIp',
    userAgent: 'userAgent',
    loginAt: 'loginAt',
    logout: 'logout',
    createAt: 'createAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const CodeScalarFieldEnum: {
    id: 'id',
    tokens: 'tokens',
    typeOfCode: 'typeOfCode',
    userId: 'userId'
  };

  export type CodeScalarFieldEnum = (typeof CodeScalarFieldEnum)[keyof typeof CodeScalarFieldEnum]


  export const ConversationScalarFieldEnum: {
    id: 'id',
    creatorId: 'creatorId',
    friendId: 'friendId',
    lastMessage: 'lastMessage',
    lastMessageAt: 'lastMessageAt',
    user1LastReadIndex: 'user1LastReadIndex',
    user2LastReadIndex: 'user2LastReadIndex',
    socketId: 'socketId',
    totalMessage: 'totalMessage',
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  };

  export type ConversationScalarFieldEnum = (typeof ConversationScalarFieldEnum)[keyof typeof ConversationScalarFieldEnum]


  export const PrivateMessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    conversationId: 'conversationId',
    senderId: 'senderId',
    receiverId: 'receiverId',
    messageIndex: 'messageIndex',
    replyToId: 'replyToId',
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  };

  export type PrivateMessageScalarFieldEnum = (typeof PrivateMessageScalarFieldEnum)[keyof typeof PrivateMessageScalarFieldEnum]


  export const OwnerScalarFieldEnum: {
    id: 'id',
    nameRole: 'nameRole',
    userId: 'userId',
    objectId: 'objectId'
  };

  export type OwnerScalarFieldEnum = (typeof OwnerScalarFieldEnum)[keyof typeof OwnerScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    content: 'content',
    status: 'status',
    urlImgs: 'urlImgs',
    userId: 'userId',
    createAt: 'createAt',
    updateAt: 'updateAt',
    deleteAt: 'deleteAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    postId: 'postId',
    userId: 'userId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const RepCommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    createAt: 'createAt',
    updateAt: 'updateAt',
    senderID: 'senderID',
    commentId: 'commentId'
  };

  export type RepCommentScalarFieldEnum = (typeof RepCommentScalarFieldEnum)[keyof typeof RepCommentScalarFieldEnum]


  export const BehaviorWithPostScalarFieldEnum: {
    id: 'id',
    isLiked: 'isLiked',
    userId: 'userId',
    postId: 'postId',
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  };

  export type BehaviorWithPostScalarFieldEnum = (typeof BehaviorWithPostScalarFieldEnum)[keyof typeof BehaviorWithPostScalarFieldEnum]


  export const BlockedUserScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    updateAT: 'updateAT'
  };

  export type BlockedUserScalarFieldEnum = (typeof BlockedUserScalarFieldEnum)[keyof typeof BlockedUserScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    gender: 'gender',
    dateOfBirth: 'dateOfBirth',
    isActive: 'isActive',
    userName: 'userName',
    avtUrl: 'avtUrl',
    email: 'email',
    hashingPassword: 'hashingPassword',
    lastSeen: 'lastSeen',
    createAt: 'createAt',
    updateAt: 'updateAt',
    deleteAt: 'deleteAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FollowingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    addressUserId: 'addressUserId',
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  };

  export type FollowingScalarFieldEnum = (typeof FollowingScalarFieldEnum)[keyof typeof FollowingScalarFieldEnum]


  export const FollowerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    followerId: 'followerId',
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  };

  export type FollowerScalarFieldEnum = (typeof FollowerScalarFieldEnum)[keyof typeof FollowerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TypeOfCode'
   */
  export type EnumTypeOfCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeOfCode'>
    


  /**
   * Reference to a field of type 'TypeOfCode[]'
   */
  export type ListEnumTypeOfCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeOfCode[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'StatusPost'
   */
  export type EnumStatusPostFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPost'>
    


  /**
   * Reference to a field of type 'StatusPost[]'
   */
  export type ListEnumStatusPostFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPost[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: UuidFilter<"Session"> | string
    hashingRefreshToken?: StringNullableFilter<"Session"> | string | null
    userId?: UuidFilter<"Session"> | string
    userIp?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    loginAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    logout?: DateTimeNullableFilter<"Session"> | Date | string | null
    createAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    hashingRefreshToken?: SortOrderInput | SortOrder
    userId?: SortOrder
    userIp?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    loginAt?: SortOrderInput | SortOrder
    logout?: SortOrderInput | SortOrder
    createAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userAgent?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    hashingRefreshToken?: StringNullableFilter<"Session"> | string | null
    userId?: UuidFilter<"Session"> | string
    userIp?: StringNullableFilter<"Session"> | string | null
    loginAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    logout?: DateTimeNullableFilter<"Session"> | Date | string | null
    createAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userAgent">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    hashingRefreshToken?: SortOrderInput | SortOrder
    userId?: SortOrder
    userIp?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    loginAt?: SortOrderInput | SortOrder
    logout?: SortOrderInput | SortOrder
    createAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Session"> | string
    hashingRefreshToken?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: UuidWithAggregatesFilter<"Session"> | string
    userIp?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    loginAt?: DateTimeNullableWithAggregatesFilter<"Session"> | Date | string | null
    logout?: DateTimeNullableWithAggregatesFilter<"Session"> | Date | string | null
    createAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type CodeWhereInput = {
    AND?: CodeWhereInput | CodeWhereInput[]
    OR?: CodeWhereInput[]
    NOT?: CodeWhereInput | CodeWhereInput[]
    id?: UuidFilter<"Code"> | string
    tokens?: StringNullableFilter<"Code"> | string | null
    typeOfCode?: EnumTypeOfCodeFilter<"Code"> | $Enums.TypeOfCode
    userId?: UuidFilter<"Code"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CodeOrderByWithRelationInput = {
    id?: SortOrder
    tokens?: SortOrderInput | SortOrder
    typeOfCode?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CodeWhereInput | CodeWhereInput[]
    OR?: CodeWhereInput[]
    NOT?: CodeWhereInput | CodeWhereInput[]
    tokens?: StringNullableFilter<"Code"> | string | null
    typeOfCode?: EnumTypeOfCodeFilter<"Code"> | $Enums.TypeOfCode
    userId?: UuidFilter<"Code"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CodeOrderByWithAggregationInput = {
    id?: SortOrder
    tokens?: SortOrderInput | SortOrder
    typeOfCode?: SortOrder
    userId?: SortOrder
    _count?: CodeCountOrderByAggregateInput
    _max?: CodeMaxOrderByAggregateInput
    _min?: CodeMinOrderByAggregateInput
  }

  export type CodeScalarWhereWithAggregatesInput = {
    AND?: CodeScalarWhereWithAggregatesInput | CodeScalarWhereWithAggregatesInput[]
    OR?: CodeScalarWhereWithAggregatesInput[]
    NOT?: CodeScalarWhereWithAggregatesInput | CodeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Code"> | string
    tokens?: StringNullableWithAggregatesFilter<"Code"> | string | null
    typeOfCode?: EnumTypeOfCodeWithAggregatesFilter<"Code"> | $Enums.TypeOfCode
    userId?: UuidWithAggregatesFilter<"Code"> | string
  }

  export type ConversationWhereInput = {
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    id?: UuidFilter<"Conversation"> | string
    creatorId?: UuidFilter<"Conversation"> | string
    friendId?: UuidFilter<"Conversation"> | string
    lastMessage?: StringNullableFilter<"Conversation"> | string | null
    lastMessageAt?: DateTimeNullableFilter<"Conversation"> | Date | string | null
    user1LastReadIndex?: IntFilter<"Conversation"> | number
    user2LastReadIndex?: IntFilter<"Conversation"> | number
    socketId?: StringFilter<"Conversation"> | string
    totalMessage?: IntFilter<"Conversation"> | number
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    updateAt?: DateTimeFilter<"Conversation"> | Date | string
    user1?: XOR<UserScalarRelationFilter, UserWhereInput>
    user2?: XOR<UserScalarRelationFilter, UserWhereInput>
    privateMessage?: PrivateMessageListRelationFilter
  }

  export type ConversationOrderByWithRelationInput = {
    id?: SortOrder
    creatorId?: SortOrder
    friendId?: SortOrder
    lastMessage?: SortOrderInput | SortOrder
    lastMessageAt?: SortOrderInput | SortOrder
    user1LastReadIndex?: SortOrder
    user2LastReadIndex?: SortOrder
    socketId?: SortOrder
    totalMessage?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    user1?: UserOrderByWithRelationInput
    user2?: UserOrderByWithRelationInput
    privateMessage?: PrivateMessageOrderByRelationAggregateInput
  }

  export type ConversationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    socketId?: string
    creatorId_friendId?: ConversationCreatorIdFriendIdCompoundUniqueInput
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    creatorId?: UuidFilter<"Conversation"> | string
    friendId?: UuidFilter<"Conversation"> | string
    lastMessage?: StringNullableFilter<"Conversation"> | string | null
    lastMessageAt?: DateTimeNullableFilter<"Conversation"> | Date | string | null
    user1LastReadIndex?: IntFilter<"Conversation"> | number
    user2LastReadIndex?: IntFilter<"Conversation"> | number
    totalMessage?: IntFilter<"Conversation"> | number
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    updateAt?: DateTimeFilter<"Conversation"> | Date | string
    user1?: XOR<UserScalarRelationFilter, UserWhereInput>
    user2?: XOR<UserScalarRelationFilter, UserWhereInput>
    privateMessage?: PrivateMessageListRelationFilter
  }, "id" | "socketId" | "creatorId_friendId">

  export type ConversationOrderByWithAggregationInput = {
    id?: SortOrder
    creatorId?: SortOrder
    friendId?: SortOrder
    lastMessage?: SortOrderInput | SortOrder
    lastMessageAt?: SortOrderInput | SortOrder
    user1LastReadIndex?: SortOrder
    user2LastReadIndex?: SortOrder
    socketId?: SortOrder
    totalMessage?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    _count?: ConversationCountOrderByAggregateInput
    _avg?: ConversationAvgOrderByAggregateInput
    _max?: ConversationMaxOrderByAggregateInput
    _min?: ConversationMinOrderByAggregateInput
    _sum?: ConversationSumOrderByAggregateInput
  }

  export type ConversationScalarWhereWithAggregatesInput = {
    AND?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    OR?: ConversationScalarWhereWithAggregatesInput[]
    NOT?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Conversation"> | string
    creatorId?: UuidWithAggregatesFilter<"Conversation"> | string
    friendId?: UuidWithAggregatesFilter<"Conversation"> | string
    lastMessage?: StringNullableWithAggregatesFilter<"Conversation"> | string | null
    lastMessageAt?: DateTimeNullableWithAggregatesFilter<"Conversation"> | Date | string | null
    user1LastReadIndex?: IntWithAggregatesFilter<"Conversation"> | number
    user2LastReadIndex?: IntWithAggregatesFilter<"Conversation"> | number
    socketId?: StringWithAggregatesFilter<"Conversation"> | string
    totalMessage?: IntWithAggregatesFilter<"Conversation"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Conversation"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Conversation"> | Date | string
  }

  export type PrivateMessageWhereInput = {
    AND?: PrivateMessageWhereInput | PrivateMessageWhereInput[]
    OR?: PrivateMessageWhereInput[]
    NOT?: PrivateMessageWhereInput | PrivateMessageWhereInput[]
    id?: UuidFilter<"PrivateMessage"> | string
    content?: StringFilter<"PrivateMessage"> | string
    conversationId?: UuidFilter<"PrivateMessage"> | string
    senderId?: UuidFilter<"PrivateMessage"> | string
    receiverId?: UuidFilter<"PrivateMessage"> | string
    messageIndex?: IntFilter<"PrivateMessage"> | number
    replyToId?: UuidNullableFilter<"PrivateMessage"> | string | null
    createdAt?: DateTimeFilter<"PrivateMessage"> | Date | string
    updateAt?: DateTimeFilter<"PrivateMessage"> | Date | string
    replyTo?: XOR<PrivateMessageNullableScalarRelationFilter, PrivateMessageWhereInput> | null
    replies?: PrivateMessageListRelationFilter
    chat?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PrivateMessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    conversationId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    messageIndex?: SortOrder
    replyToId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    replyTo?: PrivateMessageOrderByWithRelationInput
    replies?: PrivateMessageOrderByRelationAggregateInput
    chat?: ConversationOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
  }

  export type PrivateMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    conversationId_messageIndex?: PrivateMessageConversationIdMessageIndexCompoundUniqueInput
    AND?: PrivateMessageWhereInput | PrivateMessageWhereInput[]
    OR?: PrivateMessageWhereInput[]
    NOT?: PrivateMessageWhereInput | PrivateMessageWhereInput[]
    content?: StringFilter<"PrivateMessage"> | string
    conversationId?: UuidFilter<"PrivateMessage"> | string
    senderId?: UuidFilter<"PrivateMessage"> | string
    receiverId?: UuidFilter<"PrivateMessage"> | string
    messageIndex?: IntFilter<"PrivateMessage"> | number
    replyToId?: UuidNullableFilter<"PrivateMessage"> | string | null
    createdAt?: DateTimeFilter<"PrivateMessage"> | Date | string
    updateAt?: DateTimeFilter<"PrivateMessage"> | Date | string
    replyTo?: XOR<PrivateMessageNullableScalarRelationFilter, PrivateMessageWhereInput> | null
    replies?: PrivateMessageListRelationFilter
    chat?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "conversationId_messageIndex">

  export type PrivateMessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    conversationId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    messageIndex?: SortOrder
    replyToId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    _count?: PrivateMessageCountOrderByAggregateInput
    _avg?: PrivateMessageAvgOrderByAggregateInput
    _max?: PrivateMessageMaxOrderByAggregateInput
    _min?: PrivateMessageMinOrderByAggregateInput
    _sum?: PrivateMessageSumOrderByAggregateInput
  }

  export type PrivateMessageScalarWhereWithAggregatesInput = {
    AND?: PrivateMessageScalarWhereWithAggregatesInput | PrivateMessageScalarWhereWithAggregatesInput[]
    OR?: PrivateMessageScalarWhereWithAggregatesInput[]
    NOT?: PrivateMessageScalarWhereWithAggregatesInput | PrivateMessageScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"PrivateMessage"> | string
    content?: StringWithAggregatesFilter<"PrivateMessage"> | string
    conversationId?: UuidWithAggregatesFilter<"PrivateMessage"> | string
    senderId?: UuidWithAggregatesFilter<"PrivateMessage"> | string
    receiverId?: UuidWithAggregatesFilter<"PrivateMessage"> | string
    messageIndex?: IntWithAggregatesFilter<"PrivateMessage"> | number
    replyToId?: UuidNullableWithAggregatesFilter<"PrivateMessage"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PrivateMessage"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"PrivateMessage"> | Date | string
  }

  export type OwnerWhereInput = {
    AND?: OwnerWhereInput | OwnerWhereInput[]
    OR?: OwnerWhereInput[]
    NOT?: OwnerWhereInput | OwnerWhereInput[]
    id?: UuidFilter<"Owner"> | string
    nameRole?: StringFilter<"Owner"> | string
    userId?: UuidFilter<"Owner"> | string
    objectId?: UuidFilter<"Owner"> | string
  }

  export type OwnerOrderByWithRelationInput = {
    id?: SortOrder
    nameRole?: SortOrder
    userId?: SortOrder
    objectId?: SortOrder
  }

  export type OwnerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_objectId?: OwnerUserIdObjectIdCompoundUniqueInput
    AND?: OwnerWhereInput | OwnerWhereInput[]
    OR?: OwnerWhereInput[]
    NOT?: OwnerWhereInput | OwnerWhereInput[]
    nameRole?: StringFilter<"Owner"> | string
    userId?: UuidFilter<"Owner"> | string
    objectId?: UuidFilter<"Owner"> | string
  }, "id" | "userId_objectId">

  export type OwnerOrderByWithAggregationInput = {
    id?: SortOrder
    nameRole?: SortOrder
    userId?: SortOrder
    objectId?: SortOrder
    _count?: OwnerCountOrderByAggregateInput
    _max?: OwnerMaxOrderByAggregateInput
    _min?: OwnerMinOrderByAggregateInput
  }

  export type OwnerScalarWhereWithAggregatesInput = {
    AND?: OwnerScalarWhereWithAggregatesInput | OwnerScalarWhereWithAggregatesInput[]
    OR?: OwnerScalarWhereWithAggregatesInput[]
    NOT?: OwnerScalarWhereWithAggregatesInput | OwnerScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Owner"> | string
    nameRole?: StringWithAggregatesFilter<"Owner"> | string
    userId?: UuidWithAggregatesFilter<"Owner"> | string
    objectId?: UuidWithAggregatesFilter<"Owner"> | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: UuidFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    status?: EnumStatusPostFilter<"Post"> | $Enums.StatusPost
    urlImgs?: StringNullableListFilter<"Post">
    userId?: UuidFilter<"Post"> | string
    createAt?: DateTimeFilter<"Post"> | Date | string
    updateAt?: DateTimeFilter<"Post"> | Date | string
    deleteAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
    userLiked?: BehaviorWithPostListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    status?: SortOrder
    urlImgs?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deleteAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
    userLiked?: BehaviorWithPostOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    content?: StringFilter<"Post"> | string
    status?: EnumStatusPostFilter<"Post"> | $Enums.StatusPost
    urlImgs?: StringNullableListFilter<"Post">
    userId?: UuidFilter<"Post"> | string
    createAt?: DateTimeFilter<"Post"> | Date | string
    updateAt?: DateTimeFilter<"Post"> | Date | string
    deleteAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
    userLiked?: BehaviorWithPostListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    status?: SortOrder
    urlImgs?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deleteAt?: SortOrderInput | SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Post"> | string
    content?: StringWithAggregatesFilter<"Post"> | string
    status?: EnumStatusPostWithAggregatesFilter<"Post"> | $Enums.StatusPost
    urlImgs?: StringNullableListFilter<"Post">
    userId?: UuidWithAggregatesFilter<"Post"> | string
    createAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    deleteAt?: DateTimeNullableWithAggregatesFilter<"Post"> | Date | string | null
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: UuidFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    postId?: UuidFilter<"Comment"> | string
    userId?: UuidFilter<"Comment"> | string
    createAt?: DateTimeFilter<"Comment"> | Date | string
    updateAt?: DateTimeFilter<"Comment"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    repComments?: RepCommentListRelationFilter
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    post?: PostOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    repComments?: RepCommentOrderByRelationAggregateInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    content?: StringFilter<"Comment"> | string
    postId?: UuidFilter<"Comment"> | string
    userId?: UuidFilter<"Comment"> | string
    createAt?: DateTimeFilter<"Comment"> | Date | string
    updateAt?: DateTimeFilter<"Comment"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    repComments?: RepCommentListRelationFilter
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Comment"> | string
    content?: StringWithAggregatesFilter<"Comment"> | string
    postId?: UuidWithAggregatesFilter<"Comment"> | string
    userId?: UuidWithAggregatesFilter<"Comment"> | string
    createAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type RepCommentWhereInput = {
    AND?: RepCommentWhereInput | RepCommentWhereInput[]
    OR?: RepCommentWhereInput[]
    NOT?: RepCommentWhereInput | RepCommentWhereInput[]
    id?: UuidFilter<"RepComment"> | string
    content?: StringFilter<"RepComment"> | string
    createAt?: DateTimeFilter<"RepComment"> | Date | string
    updateAt?: DateTimeFilter<"RepComment"> | Date | string
    senderID?: UuidFilter<"RepComment"> | string
    commentId?: UuidFilter<"RepComment"> | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    comment?: XOR<CommentScalarRelationFilter, CommentWhereInput>
  }

  export type RepCommentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    senderID?: SortOrder
    commentId?: SortOrder
    sender?: UserOrderByWithRelationInput
    comment?: CommentOrderByWithRelationInput
  }

  export type RepCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RepCommentWhereInput | RepCommentWhereInput[]
    OR?: RepCommentWhereInput[]
    NOT?: RepCommentWhereInput | RepCommentWhereInput[]
    content?: StringFilter<"RepComment"> | string
    createAt?: DateTimeFilter<"RepComment"> | Date | string
    updateAt?: DateTimeFilter<"RepComment"> | Date | string
    senderID?: UuidFilter<"RepComment"> | string
    commentId?: UuidFilter<"RepComment"> | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    comment?: XOR<CommentScalarRelationFilter, CommentWhereInput>
  }, "id">

  export type RepCommentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    senderID?: SortOrder
    commentId?: SortOrder
    _count?: RepCommentCountOrderByAggregateInput
    _max?: RepCommentMaxOrderByAggregateInput
    _min?: RepCommentMinOrderByAggregateInput
  }

  export type RepCommentScalarWhereWithAggregatesInput = {
    AND?: RepCommentScalarWhereWithAggregatesInput | RepCommentScalarWhereWithAggregatesInput[]
    OR?: RepCommentScalarWhereWithAggregatesInput[]
    NOT?: RepCommentScalarWhereWithAggregatesInput | RepCommentScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"RepComment"> | string
    content?: StringWithAggregatesFilter<"RepComment"> | string
    createAt?: DateTimeWithAggregatesFilter<"RepComment"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"RepComment"> | Date | string
    senderID?: UuidWithAggregatesFilter<"RepComment"> | string
    commentId?: UuidWithAggregatesFilter<"RepComment"> | string
  }

  export type BehaviorWithPostWhereInput = {
    AND?: BehaviorWithPostWhereInput | BehaviorWithPostWhereInput[]
    OR?: BehaviorWithPostWhereInput[]
    NOT?: BehaviorWithPostWhereInput | BehaviorWithPostWhereInput[]
    id?: UuidFilter<"BehaviorWithPost"> | string
    isLiked?: BoolFilter<"BehaviorWithPost"> | boolean
    userId?: UuidFilter<"BehaviorWithPost"> | string
    postId?: UuidFilter<"BehaviorWithPost"> | string
    createdAt?: DateTimeFilter<"BehaviorWithPost"> | Date | string
    updateAt?: DateTimeFilter<"BehaviorWithPost"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type BehaviorWithPostOrderByWithRelationInput = {
    id?: SortOrder
    isLiked?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    user?: UserOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
  }

  export type BehaviorWithPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    postId?: string
    userId_postId?: BehaviorWithPostUserIdPostIdCompoundUniqueInput
    AND?: BehaviorWithPostWhereInput | BehaviorWithPostWhereInput[]
    OR?: BehaviorWithPostWhereInput[]
    NOT?: BehaviorWithPostWhereInput | BehaviorWithPostWhereInput[]
    isLiked?: BoolFilter<"BehaviorWithPost"> | boolean
    createdAt?: DateTimeFilter<"BehaviorWithPost"> | Date | string
    updateAt?: DateTimeFilter<"BehaviorWithPost"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id" | "userId" | "postId" | "userId_postId">

  export type BehaviorWithPostOrderByWithAggregationInput = {
    id?: SortOrder
    isLiked?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    _count?: BehaviorWithPostCountOrderByAggregateInput
    _max?: BehaviorWithPostMaxOrderByAggregateInput
    _min?: BehaviorWithPostMinOrderByAggregateInput
  }

  export type BehaviorWithPostScalarWhereWithAggregatesInput = {
    AND?: BehaviorWithPostScalarWhereWithAggregatesInput | BehaviorWithPostScalarWhereWithAggregatesInput[]
    OR?: BehaviorWithPostScalarWhereWithAggregatesInput[]
    NOT?: BehaviorWithPostScalarWhereWithAggregatesInput | BehaviorWithPostScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"BehaviorWithPost"> | string
    isLiked?: BoolWithAggregatesFilter<"BehaviorWithPost"> | boolean
    userId?: UuidWithAggregatesFilter<"BehaviorWithPost"> | string
    postId?: UuidWithAggregatesFilter<"BehaviorWithPost"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BehaviorWithPost"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"BehaviorWithPost"> | Date | string
  }

  export type blockedUserWhereInput = {
    AND?: blockedUserWhereInput | blockedUserWhereInput[]
    OR?: blockedUserWhereInput[]
    NOT?: blockedUserWhereInput | blockedUserWhereInput[]
    id?: UuidFilter<"blockedUser"> | string
    userId?: UuidFilter<"blockedUser"> | string
    createdAt?: DateTimeFilter<"blockedUser"> | Date | string
    updateAT?: DateTimeFilter<"blockedUser"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type blockedUserOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updateAT?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type blockedUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: blockedUserWhereInput | blockedUserWhereInput[]
    OR?: blockedUserWhereInput[]
    NOT?: blockedUserWhereInput | blockedUserWhereInput[]
    createdAt?: DateTimeFilter<"blockedUser"> | Date | string
    updateAT?: DateTimeFilter<"blockedUser"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type blockedUserOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updateAT?: SortOrder
    _count?: blockedUserCountOrderByAggregateInput
    _max?: blockedUserMaxOrderByAggregateInput
    _min?: blockedUserMinOrderByAggregateInput
  }

  export type blockedUserScalarWhereWithAggregatesInput = {
    AND?: blockedUserScalarWhereWithAggregatesInput | blockedUserScalarWhereWithAggregatesInput[]
    OR?: blockedUserScalarWhereWithAggregatesInput[]
    NOT?: blockedUserScalarWhereWithAggregatesInput | blockedUserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"blockedUser"> | string
    userId?: UuidWithAggregatesFilter<"blockedUser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"blockedUser"> | Date | string
    updateAT?: DateTimeWithAggregatesFilter<"blockedUser"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    gender?: EnumGenderNullableFilter<"User"> | $Enums.Gender | null
    dateOfBirth?: DateTimeNullableFilter<"User"> | Date | string | null
    isActive?: BoolFilter<"User"> | boolean
    userName?: StringFilter<"User"> | string
    avtUrl?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    hashingPassword?: StringFilter<"User"> | string
    lastSeen?: DateTimeNullableFilter<"User"> | Date | string | null
    createAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    deleteAt?: DateTimeNullableFilter<"User"> | Date | string | null
    sessions?: SessionListRelationFilter
    codes?: CodeListRelationFilter
    posts?: PostListRelationFilter
    postLiked?: BehaviorWithPostListRelationFilter
    comments?: CommentListRelationFilter
    repComments?: RepCommentListRelationFilter
    user1?: ConversationListRelationFilter
    user2?: ConversationListRelationFilter
    sentMessages?: PrivateMessageListRelationFilter
    followingUser?: FollowingListRelationFilter
    followers?: FollowerListRelationFilter
    blockedUsers?: BlockedUserListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    isActive?: SortOrder
    userName?: SortOrder
    avtUrl?: SortOrderInput | SortOrder
    email?: SortOrder
    hashingPassword?: SortOrder
    lastSeen?: SortOrderInput | SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deleteAt?: SortOrderInput | SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    codes?: CodeOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    postLiked?: BehaviorWithPostOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    repComments?: RepCommentOrderByRelationAggregateInput
    user1?: ConversationOrderByRelationAggregateInput
    user2?: ConversationOrderByRelationAggregateInput
    sentMessages?: PrivateMessageOrderByRelationAggregateInput
    followingUser?: FollowingOrderByRelationAggregateInput
    followers?: FollowerOrderByRelationAggregateInput
    blockedUsers?: blockedUserOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userName?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    gender?: EnumGenderNullableFilter<"User"> | $Enums.Gender | null
    dateOfBirth?: DateTimeNullableFilter<"User"> | Date | string | null
    isActive?: BoolFilter<"User"> | boolean
    avtUrl?: StringNullableFilter<"User"> | string | null
    hashingPassword?: StringFilter<"User"> | string
    lastSeen?: DateTimeNullableFilter<"User"> | Date | string | null
    createAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    deleteAt?: DateTimeNullableFilter<"User"> | Date | string | null
    sessions?: SessionListRelationFilter
    codes?: CodeListRelationFilter
    posts?: PostListRelationFilter
    postLiked?: BehaviorWithPostListRelationFilter
    comments?: CommentListRelationFilter
    repComments?: RepCommentListRelationFilter
    user1?: ConversationListRelationFilter
    user2?: ConversationListRelationFilter
    sentMessages?: PrivateMessageListRelationFilter
    followingUser?: FollowingListRelationFilter
    followers?: FollowerListRelationFilter
    blockedUsers?: BlockedUserListRelationFilter
  }, "id" | "userName" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    isActive?: SortOrder
    userName?: SortOrder
    avtUrl?: SortOrderInput | SortOrder
    email?: SortOrder
    hashingPassword?: SortOrder
    lastSeen?: SortOrderInput | SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deleteAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    gender?: EnumGenderNullableWithAggregatesFilter<"User"> | $Enums.Gender | null
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    userName?: StringWithAggregatesFilter<"User"> | string
    avtUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    hashingPassword?: StringWithAggregatesFilter<"User"> | string
    lastSeen?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deleteAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type FollowingWhereInput = {
    AND?: FollowingWhereInput | FollowingWhereInput[]
    OR?: FollowingWhereInput[]
    NOT?: FollowingWhereInput | FollowingWhereInput[]
    id?: UuidFilter<"Following"> | string
    userId?: UuidFilter<"Following"> | string
    addressUserId?: UuidFilter<"Following"> | string
    createdAt?: DateTimeFilter<"Following"> | Date | string
    updateAt?: DateTimeFilter<"Following"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FollowingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    addressUserId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FollowingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    addressUserId?: string
    userId_addressUserId?: FollowingUserIdAddressUserIdCompoundUniqueInput
    AND?: FollowingWhereInput | FollowingWhereInput[]
    OR?: FollowingWhereInput[]
    NOT?: FollowingWhereInput | FollowingWhereInput[]
    createdAt?: DateTimeFilter<"Following"> | Date | string
    updateAt?: DateTimeFilter<"Following"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId" | "addressUserId" | "userId_addressUserId">

  export type FollowingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    addressUserId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    _count?: FollowingCountOrderByAggregateInput
    _max?: FollowingMaxOrderByAggregateInput
    _min?: FollowingMinOrderByAggregateInput
  }

  export type FollowingScalarWhereWithAggregatesInput = {
    AND?: FollowingScalarWhereWithAggregatesInput | FollowingScalarWhereWithAggregatesInput[]
    OR?: FollowingScalarWhereWithAggregatesInput[]
    NOT?: FollowingScalarWhereWithAggregatesInput | FollowingScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Following"> | string
    userId?: UuidWithAggregatesFilter<"Following"> | string
    addressUserId?: UuidWithAggregatesFilter<"Following"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Following"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Following"> | Date | string
  }

  export type FollowerWhereInput = {
    AND?: FollowerWhereInput | FollowerWhereInput[]
    OR?: FollowerWhereInput[]
    NOT?: FollowerWhereInput | FollowerWhereInput[]
    id?: UuidFilter<"Follower"> | string
    userId?: UuidFilter<"Follower"> | string
    followerId?: UuidFilter<"Follower"> | string
    createdAt?: DateTimeFilter<"Follower"> | Date | string
    updateAt?: DateTimeFilter<"Follower"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FollowerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    followerId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FollowerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    followerId?: string
    userId_followerId?: FollowerUserIdFollowerIdCompoundUniqueInput
    AND?: FollowerWhereInput | FollowerWhereInput[]
    OR?: FollowerWhereInput[]
    NOT?: FollowerWhereInput | FollowerWhereInput[]
    createdAt?: DateTimeFilter<"Follower"> | Date | string
    updateAt?: DateTimeFilter<"Follower"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId" | "followerId" | "userId_followerId">

  export type FollowerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    followerId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    _count?: FollowerCountOrderByAggregateInput
    _max?: FollowerMaxOrderByAggregateInput
    _min?: FollowerMinOrderByAggregateInput
  }

  export type FollowerScalarWhereWithAggregatesInput = {
    AND?: FollowerScalarWhereWithAggregatesInput | FollowerScalarWhereWithAggregatesInput[]
    OR?: FollowerScalarWhereWithAggregatesInput[]
    NOT?: FollowerScalarWhereWithAggregatesInput | FollowerScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Follower"> | string
    userId?: UuidWithAggregatesFilter<"Follower"> | string
    followerId?: UuidWithAggregatesFilter<"Follower"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Follower"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Follower"> | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    hashingRefreshToken?: string | null
    userIp?: string | null
    userAgent?: string | null
    loginAt?: Date | string | null
    logout?: Date | string | null
    createAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    hashingRefreshToken?: string | null
    userId: string
    userIp?: string | null
    userAgent?: string | null
    loginAt?: Date | string | null
    logout?: Date | string | null
    createAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hashingRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    userIp?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    loginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hashingRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    userIp?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    loginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    hashingRefreshToken?: string | null
    userId: string
    userIp?: string | null
    userAgent?: string | null
    loginAt?: Date | string | null
    logout?: Date | string | null
    createAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hashingRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    userIp?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    loginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hashingRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    userIp?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    loginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeCreateInput = {
    id?: string
    tokens?: string | null
    typeOfCode: $Enums.TypeOfCode
    user: UserCreateNestedOneWithoutCodesInput
  }

  export type CodeUncheckedCreateInput = {
    id?: string
    tokens?: string | null
    typeOfCode: $Enums.TypeOfCode
    userId: string
  }

  export type CodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokens?: NullableStringFieldUpdateOperationsInput | string | null
    typeOfCode?: EnumTypeOfCodeFieldUpdateOperationsInput | $Enums.TypeOfCode
    user?: UserUpdateOneRequiredWithoutCodesNestedInput
  }

  export type CodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokens?: NullableStringFieldUpdateOperationsInput | string | null
    typeOfCode?: EnumTypeOfCodeFieldUpdateOperationsInput | $Enums.TypeOfCode
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CodeCreateManyInput = {
    id?: string
    tokens?: string | null
    typeOfCode: $Enums.TypeOfCode
    userId: string
  }

  export type CodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokens?: NullableStringFieldUpdateOperationsInput | string | null
    typeOfCode?: EnumTypeOfCodeFieldUpdateOperationsInput | $Enums.TypeOfCode
  }

  export type CodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokens?: NullableStringFieldUpdateOperationsInput | string | null
    typeOfCode?: EnumTypeOfCodeFieldUpdateOperationsInput | $Enums.TypeOfCode
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ConversationCreateInput = {
    id?: string
    lastMessage?: string | null
    lastMessageAt?: Date | string | null
    user1LastReadIndex?: number
    user2LastReadIndex?: number
    socketId: string
    totalMessage?: number
    createdAt?: Date | string
    updateAt?: Date | string
    user1: UserCreateNestedOneWithoutUser1Input
    user2: UserCreateNestedOneWithoutUser2Input
    privateMessage?: PrivateMessageCreateNestedManyWithoutChatInput
  }

  export type ConversationUncheckedCreateInput = {
    id?: string
    creatorId: string
    friendId: string
    lastMessage?: string | null
    lastMessageAt?: Date | string | null
    user1LastReadIndex?: number
    user2LastReadIndex?: number
    socketId: string
    totalMessage?: number
    createdAt?: Date | string
    updateAt?: Date | string
    privateMessage?: PrivateMessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ConversationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user1LastReadIndex?: IntFieldUpdateOperationsInput | number
    user2LastReadIndex?: IntFieldUpdateOperationsInput | number
    socketId?: StringFieldUpdateOperationsInput | string
    totalMessage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user1?: UserUpdateOneRequiredWithoutUser1NestedInput
    user2?: UserUpdateOneRequiredWithoutUser2NestedInput
    privateMessage?: PrivateMessageUpdateManyWithoutChatNestedInput
  }

  export type ConversationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user1LastReadIndex?: IntFieldUpdateOperationsInput | number
    user2LastReadIndex?: IntFieldUpdateOperationsInput | number
    socketId?: StringFieldUpdateOperationsInput | string
    totalMessage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    privateMessage?: PrivateMessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ConversationCreateManyInput = {
    id?: string
    creatorId: string
    friendId: string
    lastMessage?: string | null
    lastMessageAt?: Date | string | null
    user1LastReadIndex?: number
    user2LastReadIndex?: number
    socketId: string
    totalMessage?: number
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type ConversationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user1LastReadIndex?: IntFieldUpdateOperationsInput | number
    user2LastReadIndex?: IntFieldUpdateOperationsInput | number
    socketId?: StringFieldUpdateOperationsInput | string
    totalMessage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user1LastReadIndex?: IntFieldUpdateOperationsInput | number
    user2LastReadIndex?: IntFieldUpdateOperationsInput | number
    socketId?: StringFieldUpdateOperationsInput | string
    totalMessage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateMessageCreateInput = {
    id?: string
    content: string
    receiverId: string
    messageIndex: number
    createdAt?: Date | string
    updateAt?: Date | string
    replyTo?: PrivateMessageCreateNestedOneWithoutRepliesInput
    replies?: PrivateMessageCreateNestedManyWithoutReplyToInput
    chat: ConversationCreateNestedOneWithoutPrivateMessageInput
    sender: UserCreateNestedOneWithoutSentMessagesInput
  }

  export type PrivateMessageUncheckedCreateInput = {
    id?: string
    content: string
    conversationId: string
    senderId: string
    receiverId: string
    messageIndex: number
    replyToId?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
    replies?: PrivateMessageUncheckedCreateNestedManyWithoutReplyToInput
  }

  export type PrivateMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    messageIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replyTo?: PrivateMessageUpdateOneWithoutRepliesNestedInput
    replies?: PrivateMessageUpdateManyWithoutReplyToNestedInput
    chat?: ConversationUpdateOneRequiredWithoutPrivateMessageNestedInput
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
  }

  export type PrivateMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    messageIndex?: IntFieldUpdateOperationsInput | number
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: PrivateMessageUncheckedUpdateManyWithoutReplyToNestedInput
  }

  export type PrivateMessageCreateManyInput = {
    id?: string
    content: string
    conversationId: string
    senderId: string
    receiverId: string
    messageIndex: number
    replyToId?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type PrivateMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    messageIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    messageIndex?: IntFieldUpdateOperationsInput | number
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OwnerCreateInput = {
    id?: string
    nameRole: string
    userId: string
    objectId: string
  }

  export type OwnerUncheckedCreateInput = {
    id?: string
    nameRole: string
    userId: string
    objectId: string
  }

  export type OwnerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameRole?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    objectId?: StringFieldUpdateOperationsInput | string
  }

  export type OwnerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameRole?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    objectId?: StringFieldUpdateOperationsInput | string
  }

  export type OwnerCreateManyInput = {
    id?: string
    nameRole: string
    userId: string
    objectId: string
  }

  export type OwnerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameRole?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    objectId?: StringFieldUpdateOperationsInput | string
  }

  export type OwnerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nameRole?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    objectId?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateInput = {
    id?: string
    content: string
    status?: $Enums.StatusPost
    urlImgs?: PostCreateurlImgsInput | string[]
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    user: UserCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    userLiked?: BehaviorWithPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    content: string
    status?: $Enums.StatusPost
    urlImgs?: PostCreateurlImgsInput | string[]
    userId: string
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    userLiked?: BehaviorWithPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPostFieldUpdateOperationsInput | $Enums.StatusPost
    urlImgs?: PostUpdateurlImgsInput | string[]
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    userLiked?: BehaviorWithPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPostFieldUpdateOperationsInput | $Enums.StatusPost
    urlImgs?: PostUpdateurlImgsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    userLiked?: BehaviorWithPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    content: string
    status?: $Enums.StatusPost
    urlImgs?: PostCreateurlImgsInput | string[]
    userId: string
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPostFieldUpdateOperationsInput | $Enums.StatusPost
    urlImgs?: PostUpdateurlImgsInput | string[]
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPostFieldUpdateOperationsInput | $Enums.StatusPost
    urlImgs?: PostUpdateurlImgsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentCreateInput = {
    id?: string
    content: string
    createAt?: Date | string
    updateAt?: Date | string
    post: PostCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
    repComments?: RepCommentCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    content: string
    postId: string
    userId: string
    createAt?: Date | string
    updateAt?: Date | string
    repComments?: RepCommentUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    repComments?: RepCommentUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repComments?: RepCommentUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentCreateManyInput = {
    id?: string
    content: string
    postId: string
    userId: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepCommentCreateInput = {
    id?: string
    content: string
    createAt?: Date | string
    updateAt?: Date | string
    sender: UserCreateNestedOneWithoutRepCommentsInput
    comment: CommentCreateNestedOneWithoutRepCommentsInput
  }

  export type RepCommentUncheckedCreateInput = {
    id?: string
    content: string
    createAt?: Date | string
    updateAt?: Date | string
    senderID: string
    commentId: string
  }

  export type RepCommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutRepCommentsNestedInput
    comment?: CommentUpdateOneRequiredWithoutRepCommentsNestedInput
  }

  export type RepCommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderID?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
  }

  export type RepCommentCreateManyInput = {
    id?: string
    content: string
    createAt?: Date | string
    updateAt?: Date | string
    senderID: string
    commentId: string
  }

  export type RepCommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepCommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderID?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
  }

  export type BehaviorWithPostCreateInput = {
    id?: string
    isLiked?: boolean
    createdAt?: Date | string
    updateAt?: Date | string
    user: UserCreateNestedOneWithoutPostLikedInput
    post: PostCreateNestedOneWithoutUserLikedInput
  }

  export type BehaviorWithPostUncheckedCreateInput = {
    id?: string
    isLiked?: boolean
    userId: string
    postId: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type BehaviorWithPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isLiked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostLikedNestedInput
    post?: PostUpdateOneRequiredWithoutUserLikedNestedInput
  }

  export type BehaviorWithPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isLiked?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BehaviorWithPostCreateManyInput = {
    id?: string
    isLiked?: boolean
    userId: string
    postId: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type BehaviorWithPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isLiked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BehaviorWithPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    isLiked?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type blockedUserCreateInput = {
    id?: string
    createdAt?: Date | string
    updateAT?: Date | string
    user: UserCreateNestedOneWithoutBlockedUsersInput
  }

  export type blockedUserUncheckedCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updateAT?: Date | string
  }

  export type blockedUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAT?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBlockedUsersNestedInput
  }

  export type blockedUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAT?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type blockedUserCreateManyInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updateAT?: Date | string
  }

  export type blockedUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAT?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type blockedUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAT?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    isActive?: boolean
    userName: string
    avtUrl?: string | null
    email: string
    hashingPassword: string
    lastSeen?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    codes?: CodeCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    postLiked?: BehaviorWithPostCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    repComments?: RepCommentCreateNestedManyWithoutSenderInput
    user1?: ConversationCreateNestedManyWithoutUser1Input
    user2?: ConversationCreateNestedManyWithoutUser2Input
    sentMessages?: PrivateMessageCreateNestedManyWithoutSenderInput
    followingUser?: FollowingCreateNestedManyWithoutUserInput
    followers?: FollowerCreateNestedManyWithoutUserInput
    blockedUsers?: blockedUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    isActive?: boolean
    userName: string
    avtUrl?: string | null
    email: string
    hashingPassword: string
    lastSeen?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    codes?: CodeUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postLiked?: BehaviorWithPostUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    repComments?: RepCommentUncheckedCreateNestedManyWithoutSenderInput
    user1?: ConversationUncheckedCreateNestedManyWithoutUser1Input
    user2?: ConversationUncheckedCreateNestedManyWithoutUser2Input
    sentMessages?: PrivateMessageUncheckedCreateNestedManyWithoutSenderInput
    followingUser?: FollowingUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowerUncheckedCreateNestedManyWithoutUserInput
    blockedUsers?: blockedUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    avtUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    hashingPassword?: StringFieldUpdateOperationsInput | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    codes?: CodeUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    postLiked?: BehaviorWithPostUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    repComments?: RepCommentUpdateManyWithoutSenderNestedInput
    user1?: ConversationUpdateManyWithoutUser1NestedInput
    user2?: ConversationUpdateManyWithoutUser2NestedInput
    sentMessages?: PrivateMessageUpdateManyWithoutSenderNestedInput
    followingUser?: FollowingUpdateManyWithoutUserNestedInput
    followers?: FollowerUpdateManyWithoutUserNestedInput
    blockedUsers?: blockedUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    avtUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    hashingPassword?: StringFieldUpdateOperationsInput | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    codes?: CodeUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    postLiked?: BehaviorWithPostUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    repComments?: RepCommentUncheckedUpdateManyWithoutSenderNestedInput
    user1?: ConversationUncheckedUpdateManyWithoutUser1NestedInput
    user2?: ConversationUncheckedUpdateManyWithoutUser2NestedInput
    sentMessages?: PrivateMessageUncheckedUpdateManyWithoutSenderNestedInput
    followingUser?: FollowingUncheckedUpdateManyWithoutUserNestedInput
    followers?: FollowerUncheckedUpdateManyWithoutUserNestedInput
    blockedUsers?: blockedUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    isActive?: boolean
    userName: string
    avtUrl?: string | null
    email: string
    hashingPassword: string
    lastSeen?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    avtUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    hashingPassword?: StringFieldUpdateOperationsInput | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    avtUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    hashingPassword?: StringFieldUpdateOperationsInput | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FollowingCreateInput = {
    id?: string
    addressUserId: string
    createdAt?: Date | string
    updateAt?: Date | string
    user: UserCreateNestedOneWithoutFollowingUserInput
  }

  export type FollowingUncheckedCreateInput = {
    id?: string
    userId: string
    addressUserId: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type FollowingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    addressUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFollowingUserNestedInput
  }

  export type FollowingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    addressUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowingCreateManyInput = {
    id?: string
    userId: string
    addressUserId: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type FollowingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    addressUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    addressUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowerCreateInput = {
    id?: string
    followerId: string
    createdAt?: Date | string
    updateAt?: Date | string
    user: UserCreateNestedOneWithoutFollowersInput
  }

  export type FollowerUncheckedCreateInput = {
    id?: string
    userId: string
    followerId: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type FollowerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    followerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFollowersNestedInput
  }

  export type FollowerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    followerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowerCreateManyInput = {
    id?: string
    userId: string
    followerId: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type FollowerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    followerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    followerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    hashingRefreshToken?: SortOrder
    userId?: SortOrder
    userIp?: SortOrder
    userAgent?: SortOrder
    loginAt?: SortOrder
    logout?: SortOrder
    createAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    hashingRefreshToken?: SortOrder
    userId?: SortOrder
    userIp?: SortOrder
    userAgent?: SortOrder
    loginAt?: SortOrder
    logout?: SortOrder
    createAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    hashingRefreshToken?: SortOrder
    userId?: SortOrder
    userIp?: SortOrder
    userAgent?: SortOrder
    loginAt?: SortOrder
    logout?: SortOrder
    createAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumTypeOfCodeFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeOfCode | EnumTypeOfCodeFieldRefInput<$PrismaModel>
    in?: $Enums.TypeOfCode[] | ListEnumTypeOfCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeOfCode[] | ListEnumTypeOfCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeOfCodeFilter<$PrismaModel> | $Enums.TypeOfCode
  }

  export type CodeCountOrderByAggregateInput = {
    id?: SortOrder
    tokens?: SortOrder
    typeOfCode?: SortOrder
    userId?: SortOrder
  }

  export type CodeMaxOrderByAggregateInput = {
    id?: SortOrder
    tokens?: SortOrder
    typeOfCode?: SortOrder
    userId?: SortOrder
  }

  export type CodeMinOrderByAggregateInput = {
    id?: SortOrder
    tokens?: SortOrder
    typeOfCode?: SortOrder
    userId?: SortOrder
  }

  export type EnumTypeOfCodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeOfCode | EnumTypeOfCodeFieldRefInput<$PrismaModel>
    in?: $Enums.TypeOfCode[] | ListEnumTypeOfCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeOfCode[] | ListEnumTypeOfCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeOfCodeWithAggregatesFilter<$PrismaModel> | $Enums.TypeOfCode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeOfCodeFilter<$PrismaModel>
    _max?: NestedEnumTypeOfCodeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type PrivateMessageListRelationFilter = {
    every?: PrivateMessageWhereInput
    some?: PrivateMessageWhereInput
    none?: PrivateMessageWhereInput
  }

  export type PrivateMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversationCreatorIdFriendIdCompoundUniqueInput = {
    creatorId: string
    friendId: string
  }

  export type ConversationCountOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    friendId?: SortOrder
    lastMessage?: SortOrder
    lastMessageAt?: SortOrder
    user1LastReadIndex?: SortOrder
    user2LastReadIndex?: SortOrder
    socketId?: SortOrder
    totalMessage?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ConversationAvgOrderByAggregateInput = {
    user1LastReadIndex?: SortOrder
    user2LastReadIndex?: SortOrder
    totalMessage?: SortOrder
  }

  export type ConversationMaxOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    friendId?: SortOrder
    lastMessage?: SortOrder
    lastMessageAt?: SortOrder
    user1LastReadIndex?: SortOrder
    user2LastReadIndex?: SortOrder
    socketId?: SortOrder
    totalMessage?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ConversationMinOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    friendId?: SortOrder
    lastMessage?: SortOrder
    lastMessageAt?: SortOrder
    user1LastReadIndex?: SortOrder
    user2LastReadIndex?: SortOrder
    socketId?: SortOrder
    totalMessage?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ConversationSumOrderByAggregateInput = {
    user1LastReadIndex?: SortOrder
    user2LastReadIndex?: SortOrder
    totalMessage?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type PrivateMessageNullableScalarRelationFilter = {
    is?: PrivateMessageWhereInput | null
    isNot?: PrivateMessageWhereInput | null
  }

  export type ConversationScalarRelationFilter = {
    is?: ConversationWhereInput
    isNot?: ConversationWhereInput
  }

  export type PrivateMessageConversationIdMessageIndexCompoundUniqueInput = {
    conversationId: string
    messageIndex: number
  }

  export type PrivateMessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    conversationId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    messageIndex?: SortOrder
    replyToId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type PrivateMessageAvgOrderByAggregateInput = {
    messageIndex?: SortOrder
  }

  export type PrivateMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    conversationId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    messageIndex?: SortOrder
    replyToId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type PrivateMessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    conversationId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    messageIndex?: SortOrder
    replyToId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type PrivateMessageSumOrderByAggregateInput = {
    messageIndex?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type OwnerUserIdObjectIdCompoundUniqueInput = {
    userId: string
    objectId: string
  }

  export type OwnerCountOrderByAggregateInput = {
    id?: SortOrder
    nameRole?: SortOrder
    userId?: SortOrder
    objectId?: SortOrder
  }

  export type OwnerMaxOrderByAggregateInput = {
    id?: SortOrder
    nameRole?: SortOrder
    userId?: SortOrder
    objectId?: SortOrder
  }

  export type OwnerMinOrderByAggregateInput = {
    id?: SortOrder
    nameRole?: SortOrder
    userId?: SortOrder
    objectId?: SortOrder
  }

  export type EnumStatusPostFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPost | EnumStatusPostFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPost[] | ListEnumStatusPostFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPost[] | ListEnumStatusPostFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPostFilter<$PrismaModel> | $Enums.StatusPost
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type BehaviorWithPostListRelationFilter = {
    every?: BehaviorWithPostWhereInput
    some?: BehaviorWithPostWhereInput
    none?: BehaviorWithPostWhereInput
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BehaviorWithPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    status?: SortOrder
    urlImgs?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deleteAt?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deleteAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deleteAt?: SortOrder
  }

  export type EnumStatusPostWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPost | EnumStatusPostFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPost[] | ListEnumStatusPostFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPost[] | ListEnumStatusPostFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPostWithAggregatesFilter<$PrismaModel> | $Enums.StatusPost
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPostFilter<$PrismaModel>
    _max?: NestedEnumStatusPostFilter<$PrismaModel>
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type RepCommentListRelationFilter = {
    every?: RepCommentWhereInput
    some?: RepCommentWhereInput
    none?: RepCommentWhereInput
  }

  export type RepCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type CommentScalarRelationFilter = {
    is?: CommentWhereInput
    isNot?: CommentWhereInput
  }

  export type RepCommentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    senderID?: SortOrder
    commentId?: SortOrder
  }

  export type RepCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    senderID?: SortOrder
    commentId?: SortOrder
  }

  export type RepCommentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    senderID?: SortOrder
    commentId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BehaviorWithPostUserIdPostIdCompoundUniqueInput = {
    userId: string
    postId: string
  }

  export type BehaviorWithPostCountOrderByAggregateInput = {
    id?: SortOrder
    isLiked?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type BehaviorWithPostMaxOrderByAggregateInput = {
    id?: SortOrder
    isLiked?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type BehaviorWithPostMinOrderByAggregateInput = {
    id?: SortOrder
    isLiked?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type blockedUserCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updateAT?: SortOrder
  }

  export type blockedUserMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updateAT?: SortOrder
  }

  export type blockedUserMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updateAT?: SortOrder
  }

  export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type CodeListRelationFilter = {
    every?: CodeWhereInput
    some?: CodeWhereInput
    none?: CodeWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type ConversationListRelationFilter = {
    every?: ConversationWhereInput
    some?: ConversationWhereInput
    none?: ConversationWhereInput
  }

  export type FollowingListRelationFilter = {
    every?: FollowingWhereInput
    some?: FollowingWhereInput
    none?: FollowingWhereInput
  }

  export type FollowerListRelationFilter = {
    every?: FollowerWhereInput
    some?: FollowerWhereInput
    none?: FollowerWhereInput
  }

  export type BlockedUserListRelationFilter = {
    every?: blockedUserWhereInput
    some?: blockedUserWhereInput
    none?: blockedUserWhereInput
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FollowingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FollowerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type blockedUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    isActive?: SortOrder
    userName?: SortOrder
    avtUrl?: SortOrder
    email?: SortOrder
    hashingPassword?: SortOrder
    lastSeen?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deleteAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    isActive?: SortOrder
    userName?: SortOrder
    avtUrl?: SortOrder
    email?: SortOrder
    hashingPassword?: SortOrder
    lastSeen?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deleteAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    isActive?: SortOrder
    userName?: SortOrder
    avtUrl?: SortOrder
    email?: SortOrder
    hashingPassword?: SortOrder
    lastSeen?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    deleteAt?: SortOrder
  }

  export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type FollowingUserIdAddressUserIdCompoundUniqueInput = {
    userId: string
    addressUserId: string
  }

  export type FollowingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    addressUserId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type FollowingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    addressUserId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type FollowingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    addressUserId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type FollowerUserIdFollowerIdCompoundUniqueInput = {
    userId: string
    followerId: string
  }

  export type FollowerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    followerId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type FollowerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    followerId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type FollowerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    followerId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutCodesInput = {
    create?: XOR<UserCreateWithoutCodesInput, UserUncheckedCreateWithoutCodesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCodesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTypeOfCodeFieldUpdateOperationsInput = {
    set?: $Enums.TypeOfCode
  }

  export type UserUpdateOneRequiredWithoutCodesNestedInput = {
    create?: XOR<UserCreateWithoutCodesInput, UserUncheckedCreateWithoutCodesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCodesInput
    upsert?: UserUpsertWithoutCodesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCodesInput, UserUpdateWithoutCodesInput>, UserUncheckedUpdateWithoutCodesInput>
  }

  export type UserCreateNestedOneWithoutUser1Input = {
    create?: XOR<UserCreateWithoutUser1Input, UserUncheckedCreateWithoutUser1Input>
    connectOrCreate?: UserCreateOrConnectWithoutUser1Input
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUser2Input = {
    create?: XOR<UserCreateWithoutUser2Input, UserUncheckedCreateWithoutUser2Input>
    connectOrCreate?: UserCreateOrConnectWithoutUser2Input
    connect?: UserWhereUniqueInput
  }

  export type PrivateMessageCreateNestedManyWithoutChatInput = {
    create?: XOR<PrivateMessageCreateWithoutChatInput, PrivateMessageUncheckedCreateWithoutChatInput> | PrivateMessageCreateWithoutChatInput[] | PrivateMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutChatInput | PrivateMessageCreateOrConnectWithoutChatInput[]
    createMany?: PrivateMessageCreateManyChatInputEnvelope
    connect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
  }

  export type PrivateMessageUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<PrivateMessageCreateWithoutChatInput, PrivateMessageUncheckedCreateWithoutChatInput> | PrivateMessageCreateWithoutChatInput[] | PrivateMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutChatInput | PrivateMessageCreateOrConnectWithoutChatInput[]
    createMany?: PrivateMessageCreateManyChatInputEnvelope
    connect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutUser1NestedInput = {
    create?: XOR<UserCreateWithoutUser1Input, UserUncheckedCreateWithoutUser1Input>
    connectOrCreate?: UserCreateOrConnectWithoutUser1Input
    upsert?: UserUpsertWithoutUser1Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUser1Input, UserUpdateWithoutUser1Input>, UserUncheckedUpdateWithoutUser1Input>
  }

  export type UserUpdateOneRequiredWithoutUser2NestedInput = {
    create?: XOR<UserCreateWithoutUser2Input, UserUncheckedCreateWithoutUser2Input>
    connectOrCreate?: UserCreateOrConnectWithoutUser2Input
    upsert?: UserUpsertWithoutUser2Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUser2Input, UserUpdateWithoutUser2Input>, UserUncheckedUpdateWithoutUser2Input>
  }

  export type PrivateMessageUpdateManyWithoutChatNestedInput = {
    create?: XOR<PrivateMessageCreateWithoutChatInput, PrivateMessageUncheckedCreateWithoutChatInput> | PrivateMessageCreateWithoutChatInput[] | PrivateMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutChatInput | PrivateMessageCreateOrConnectWithoutChatInput[]
    upsert?: PrivateMessageUpsertWithWhereUniqueWithoutChatInput | PrivateMessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: PrivateMessageCreateManyChatInputEnvelope
    set?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    disconnect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    delete?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    connect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    update?: PrivateMessageUpdateWithWhereUniqueWithoutChatInput | PrivateMessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: PrivateMessageUpdateManyWithWhereWithoutChatInput | PrivateMessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: PrivateMessageScalarWhereInput | PrivateMessageScalarWhereInput[]
  }

  export type PrivateMessageUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<PrivateMessageCreateWithoutChatInput, PrivateMessageUncheckedCreateWithoutChatInput> | PrivateMessageCreateWithoutChatInput[] | PrivateMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutChatInput | PrivateMessageCreateOrConnectWithoutChatInput[]
    upsert?: PrivateMessageUpsertWithWhereUniqueWithoutChatInput | PrivateMessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: PrivateMessageCreateManyChatInputEnvelope
    set?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    disconnect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    delete?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    connect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    update?: PrivateMessageUpdateWithWhereUniqueWithoutChatInput | PrivateMessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: PrivateMessageUpdateManyWithWhereWithoutChatInput | PrivateMessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: PrivateMessageScalarWhereInput | PrivateMessageScalarWhereInput[]
  }

  export type PrivateMessageCreateNestedOneWithoutRepliesInput = {
    create?: XOR<PrivateMessageCreateWithoutRepliesInput, PrivateMessageUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutRepliesInput
    connect?: PrivateMessageWhereUniqueInput
  }

  export type PrivateMessageCreateNestedManyWithoutReplyToInput = {
    create?: XOR<PrivateMessageCreateWithoutReplyToInput, PrivateMessageUncheckedCreateWithoutReplyToInput> | PrivateMessageCreateWithoutReplyToInput[] | PrivateMessageUncheckedCreateWithoutReplyToInput[]
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutReplyToInput | PrivateMessageCreateOrConnectWithoutReplyToInput[]
    createMany?: PrivateMessageCreateManyReplyToInputEnvelope
    connect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
  }

  export type ConversationCreateNestedOneWithoutPrivateMessageInput = {
    create?: XOR<ConversationCreateWithoutPrivateMessageInput, ConversationUncheckedCreateWithoutPrivateMessageInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutPrivateMessageInput
    connect?: ConversationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type PrivateMessageUncheckedCreateNestedManyWithoutReplyToInput = {
    create?: XOR<PrivateMessageCreateWithoutReplyToInput, PrivateMessageUncheckedCreateWithoutReplyToInput> | PrivateMessageCreateWithoutReplyToInput[] | PrivateMessageUncheckedCreateWithoutReplyToInput[]
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutReplyToInput | PrivateMessageCreateOrConnectWithoutReplyToInput[]
    createMany?: PrivateMessageCreateManyReplyToInputEnvelope
    connect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
  }

  export type PrivateMessageUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<PrivateMessageCreateWithoutRepliesInput, PrivateMessageUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutRepliesInput
    upsert?: PrivateMessageUpsertWithoutRepliesInput
    disconnect?: PrivateMessageWhereInput | boolean
    delete?: PrivateMessageWhereInput | boolean
    connect?: PrivateMessageWhereUniqueInput
    update?: XOR<XOR<PrivateMessageUpdateToOneWithWhereWithoutRepliesInput, PrivateMessageUpdateWithoutRepliesInput>, PrivateMessageUncheckedUpdateWithoutRepliesInput>
  }

  export type PrivateMessageUpdateManyWithoutReplyToNestedInput = {
    create?: XOR<PrivateMessageCreateWithoutReplyToInput, PrivateMessageUncheckedCreateWithoutReplyToInput> | PrivateMessageCreateWithoutReplyToInput[] | PrivateMessageUncheckedCreateWithoutReplyToInput[]
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutReplyToInput | PrivateMessageCreateOrConnectWithoutReplyToInput[]
    upsert?: PrivateMessageUpsertWithWhereUniqueWithoutReplyToInput | PrivateMessageUpsertWithWhereUniqueWithoutReplyToInput[]
    createMany?: PrivateMessageCreateManyReplyToInputEnvelope
    set?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    disconnect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    delete?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    connect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    update?: PrivateMessageUpdateWithWhereUniqueWithoutReplyToInput | PrivateMessageUpdateWithWhereUniqueWithoutReplyToInput[]
    updateMany?: PrivateMessageUpdateManyWithWhereWithoutReplyToInput | PrivateMessageUpdateManyWithWhereWithoutReplyToInput[]
    deleteMany?: PrivateMessageScalarWhereInput | PrivateMessageScalarWhereInput[]
  }

  export type ConversationUpdateOneRequiredWithoutPrivateMessageNestedInput = {
    create?: XOR<ConversationCreateWithoutPrivateMessageInput, ConversationUncheckedCreateWithoutPrivateMessageInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutPrivateMessageInput
    upsert?: ConversationUpsertWithoutPrivateMessageInput
    connect?: ConversationWhereUniqueInput
    update?: XOR<XOR<ConversationUpdateToOneWithWhereWithoutPrivateMessageInput, ConversationUpdateWithoutPrivateMessageInput>, ConversationUncheckedUpdateWithoutPrivateMessageInput>
  }

  export type UserUpdateOneRequiredWithoutSentMessagesNestedInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    upsert?: UserUpsertWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentMessagesInput, UserUpdateWithoutSentMessagesInput>, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type PrivateMessageUncheckedUpdateManyWithoutReplyToNestedInput = {
    create?: XOR<PrivateMessageCreateWithoutReplyToInput, PrivateMessageUncheckedCreateWithoutReplyToInput> | PrivateMessageCreateWithoutReplyToInput[] | PrivateMessageUncheckedCreateWithoutReplyToInput[]
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutReplyToInput | PrivateMessageCreateOrConnectWithoutReplyToInput[]
    upsert?: PrivateMessageUpsertWithWhereUniqueWithoutReplyToInput | PrivateMessageUpsertWithWhereUniqueWithoutReplyToInput[]
    createMany?: PrivateMessageCreateManyReplyToInputEnvelope
    set?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    disconnect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    delete?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    connect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    update?: PrivateMessageUpdateWithWhereUniqueWithoutReplyToInput | PrivateMessageUpdateWithWhereUniqueWithoutReplyToInput[]
    updateMany?: PrivateMessageUpdateManyWithWhereWithoutReplyToInput | PrivateMessageUpdateManyWithWhereWithoutReplyToInput[]
    deleteMany?: PrivateMessageScalarWhereInput | PrivateMessageScalarWhereInput[]
  }

  export type PostCreateurlImgsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type BehaviorWithPostCreateNestedManyWithoutPostInput = {
    create?: XOR<BehaviorWithPostCreateWithoutPostInput, BehaviorWithPostUncheckedCreateWithoutPostInput> | BehaviorWithPostCreateWithoutPostInput[] | BehaviorWithPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: BehaviorWithPostCreateOrConnectWithoutPostInput | BehaviorWithPostCreateOrConnectWithoutPostInput[]
    createMany?: BehaviorWithPostCreateManyPostInputEnvelope
    connect?: BehaviorWithPostWhereUniqueInput | BehaviorWithPostWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type BehaviorWithPostUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<BehaviorWithPostCreateWithoutPostInput, BehaviorWithPostUncheckedCreateWithoutPostInput> | BehaviorWithPostCreateWithoutPostInput[] | BehaviorWithPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: BehaviorWithPostCreateOrConnectWithoutPostInput | BehaviorWithPostCreateOrConnectWithoutPostInput[]
    createMany?: BehaviorWithPostCreateManyPostInputEnvelope
    connect?: BehaviorWithPostWhereUniqueInput | BehaviorWithPostWhereUniqueInput[]
  }

  export type EnumStatusPostFieldUpdateOperationsInput = {
    set?: $Enums.StatusPost
  }

  export type PostUpdateurlImgsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type CommentUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type BehaviorWithPostUpdateManyWithoutPostNestedInput = {
    create?: XOR<BehaviorWithPostCreateWithoutPostInput, BehaviorWithPostUncheckedCreateWithoutPostInput> | BehaviorWithPostCreateWithoutPostInput[] | BehaviorWithPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: BehaviorWithPostCreateOrConnectWithoutPostInput | BehaviorWithPostCreateOrConnectWithoutPostInput[]
    upsert?: BehaviorWithPostUpsertWithWhereUniqueWithoutPostInput | BehaviorWithPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: BehaviorWithPostCreateManyPostInputEnvelope
    set?: BehaviorWithPostWhereUniqueInput | BehaviorWithPostWhereUniqueInput[]
    disconnect?: BehaviorWithPostWhereUniqueInput | BehaviorWithPostWhereUniqueInput[]
    delete?: BehaviorWithPostWhereUniqueInput | BehaviorWithPostWhereUniqueInput[]
    connect?: BehaviorWithPostWhereUniqueInput | BehaviorWithPostWhereUniqueInput[]
    update?: BehaviorWithPostUpdateWithWhereUniqueWithoutPostInput | BehaviorWithPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: BehaviorWithPostUpdateManyWithWhereWithoutPostInput | BehaviorWithPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: BehaviorWithPostScalarWhereInput | BehaviorWithPostScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type BehaviorWithPostUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<BehaviorWithPostCreateWithoutPostInput, BehaviorWithPostUncheckedCreateWithoutPostInput> | BehaviorWithPostCreateWithoutPostInput[] | BehaviorWithPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: BehaviorWithPostCreateOrConnectWithoutPostInput | BehaviorWithPostCreateOrConnectWithoutPostInput[]
    upsert?: BehaviorWithPostUpsertWithWhereUniqueWithoutPostInput | BehaviorWithPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: BehaviorWithPostCreateManyPostInputEnvelope
    set?: BehaviorWithPostWhereUniqueInput | BehaviorWithPostWhereUniqueInput[]
    disconnect?: BehaviorWithPostWhereUniqueInput | BehaviorWithPostWhereUniqueInput[]
    delete?: BehaviorWithPostWhereUniqueInput | BehaviorWithPostWhereUniqueInput[]
    connect?: BehaviorWithPostWhereUniqueInput | BehaviorWithPostWhereUniqueInput[]
    update?: BehaviorWithPostUpdateWithWhereUniqueWithoutPostInput | BehaviorWithPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: BehaviorWithPostUpdateManyWithWhereWithoutPostInput | BehaviorWithPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: BehaviorWithPostScalarWhereInput | BehaviorWithPostScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    connect?: PostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type RepCommentCreateNestedManyWithoutCommentInput = {
    create?: XOR<RepCommentCreateWithoutCommentInput, RepCommentUncheckedCreateWithoutCommentInput> | RepCommentCreateWithoutCommentInput[] | RepCommentUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: RepCommentCreateOrConnectWithoutCommentInput | RepCommentCreateOrConnectWithoutCommentInput[]
    createMany?: RepCommentCreateManyCommentInputEnvelope
    connect?: RepCommentWhereUniqueInput | RepCommentWhereUniqueInput[]
  }

  export type RepCommentUncheckedCreateNestedManyWithoutCommentInput = {
    create?: XOR<RepCommentCreateWithoutCommentInput, RepCommentUncheckedCreateWithoutCommentInput> | RepCommentCreateWithoutCommentInput[] | RepCommentUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: RepCommentCreateOrConnectWithoutCommentInput | RepCommentCreateOrConnectWithoutCommentInput[]
    createMany?: RepCommentCreateManyCommentInputEnvelope
    connect?: RepCommentWhereUniqueInput | RepCommentWhereUniqueInput[]
  }

  export type PostUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    upsert?: PostUpsertWithoutCommentsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutCommentsInput, PostUpdateWithoutCommentsInput>, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type RepCommentUpdateManyWithoutCommentNestedInput = {
    create?: XOR<RepCommentCreateWithoutCommentInput, RepCommentUncheckedCreateWithoutCommentInput> | RepCommentCreateWithoutCommentInput[] | RepCommentUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: RepCommentCreateOrConnectWithoutCommentInput | RepCommentCreateOrConnectWithoutCommentInput[]
    upsert?: RepCommentUpsertWithWhereUniqueWithoutCommentInput | RepCommentUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: RepCommentCreateManyCommentInputEnvelope
    set?: RepCommentWhereUniqueInput | RepCommentWhereUniqueInput[]
    disconnect?: RepCommentWhereUniqueInput | RepCommentWhereUniqueInput[]
    delete?: RepCommentWhereUniqueInput | RepCommentWhereUniqueInput[]
    connect?: RepCommentWhereUniqueInput | RepCommentWhereUniqueInput[]
    update?: RepCommentUpdateWithWhereUniqueWithoutCommentInput | RepCommentUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: RepCommentUpdateManyWithWhereWithoutCommentInput | RepCommentUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: RepCommentScalarWhereInput | RepCommentScalarWhereInput[]
  }

  export type RepCommentUncheckedUpdateManyWithoutCommentNestedInput = {
    create?: XOR<RepCommentCreateWithoutCommentInput, RepCommentUncheckedCreateWithoutCommentInput> | RepCommentCreateWithoutCommentInput[] | RepCommentUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: RepCommentCreateOrConnectWithoutCommentInput | RepCommentCreateOrConnectWithoutCommentInput[]
    upsert?: RepCommentUpsertWithWhereUniqueWithoutCommentInput | RepCommentUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: RepCommentCreateManyCommentInputEnvelope
    set?: RepCommentWhereUniqueInput | RepCommentWhereUniqueInput[]
    disconnect?: RepCommentWhereUniqueInput | RepCommentWhereUniqueInput[]
    delete?: RepCommentWhereUniqueInput | RepCommentWhereUniqueInput[]
    connect?: RepCommentWhereUniqueInput | RepCommentWhereUniqueInput[]
    update?: RepCommentUpdateWithWhereUniqueWithoutCommentInput | RepCommentUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: RepCommentUpdateManyWithWhereWithoutCommentInput | RepCommentUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: RepCommentScalarWhereInput | RepCommentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRepCommentsInput = {
    create?: XOR<UserCreateWithoutRepCommentsInput, UserUncheckedCreateWithoutRepCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRepCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutRepCommentsInput = {
    create?: XOR<CommentCreateWithoutRepCommentsInput, CommentUncheckedCreateWithoutRepCommentsInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepCommentsInput
    connect?: CommentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRepCommentsNestedInput = {
    create?: XOR<UserCreateWithoutRepCommentsInput, UserUncheckedCreateWithoutRepCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRepCommentsInput
    upsert?: UserUpsertWithoutRepCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRepCommentsInput, UserUpdateWithoutRepCommentsInput>, UserUncheckedUpdateWithoutRepCommentsInput>
  }

  export type CommentUpdateOneRequiredWithoutRepCommentsNestedInput = {
    create?: XOR<CommentCreateWithoutRepCommentsInput, CommentUncheckedCreateWithoutRepCommentsInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepCommentsInput
    upsert?: CommentUpsertWithoutRepCommentsInput
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutRepCommentsInput, CommentUpdateWithoutRepCommentsInput>, CommentUncheckedUpdateWithoutRepCommentsInput>
  }

  export type UserCreateNestedOneWithoutPostLikedInput = {
    create?: XOR<UserCreateWithoutPostLikedInput, UserUncheckedCreateWithoutPostLikedInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostLikedInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutUserLikedInput = {
    create?: XOR<PostCreateWithoutUserLikedInput, PostUncheckedCreateWithoutUserLikedInput>
    connectOrCreate?: PostCreateOrConnectWithoutUserLikedInput
    connect?: PostWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutPostLikedNestedInput = {
    create?: XOR<UserCreateWithoutPostLikedInput, UserUncheckedCreateWithoutPostLikedInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostLikedInput
    upsert?: UserUpsertWithoutPostLikedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostLikedInput, UserUpdateWithoutPostLikedInput>, UserUncheckedUpdateWithoutPostLikedInput>
  }

  export type PostUpdateOneRequiredWithoutUserLikedNestedInput = {
    create?: XOR<PostCreateWithoutUserLikedInput, PostUncheckedCreateWithoutUserLikedInput>
    connectOrCreate?: PostCreateOrConnectWithoutUserLikedInput
    upsert?: PostUpsertWithoutUserLikedInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutUserLikedInput, PostUpdateWithoutUserLikedInput>, PostUncheckedUpdateWithoutUserLikedInput>
  }

  export type UserCreateNestedOneWithoutBlockedUsersInput = {
    create?: XOR<UserCreateWithoutBlockedUsersInput, UserUncheckedCreateWithoutBlockedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlockedUsersInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBlockedUsersNestedInput = {
    create?: XOR<UserCreateWithoutBlockedUsersInput, UserUncheckedCreateWithoutBlockedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlockedUsersInput
    upsert?: UserUpsertWithoutBlockedUsersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlockedUsersInput, UserUpdateWithoutBlockedUsersInput>, UserUncheckedUpdateWithoutBlockedUsersInput>
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type CodeCreateNestedManyWithoutUserInput = {
    create?: XOR<CodeCreateWithoutUserInput, CodeUncheckedCreateWithoutUserInput> | CodeCreateWithoutUserInput[] | CodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CodeCreateOrConnectWithoutUserInput | CodeCreateOrConnectWithoutUserInput[]
    createMany?: CodeCreateManyUserInputEnvelope
    connect?: CodeWhereUniqueInput | CodeWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type BehaviorWithPostCreateNestedManyWithoutUserInput = {
    create?: XOR<BehaviorWithPostCreateWithoutUserInput, BehaviorWithPostUncheckedCreateWithoutUserInput> | BehaviorWithPostCreateWithoutUserInput[] | BehaviorWithPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BehaviorWithPostCreateOrConnectWithoutUserInput | BehaviorWithPostCreateOrConnectWithoutUserInput[]
    createMany?: BehaviorWithPostCreateManyUserInputEnvelope
    connect?: BehaviorWithPostWhereUniqueInput | BehaviorWithPostWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type RepCommentCreateNestedManyWithoutSenderInput = {
    create?: XOR<RepCommentCreateWithoutSenderInput, RepCommentUncheckedCreateWithoutSenderInput> | RepCommentCreateWithoutSenderInput[] | RepCommentUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: RepCommentCreateOrConnectWithoutSenderInput | RepCommentCreateOrConnectWithoutSenderInput[]
    createMany?: RepCommentCreateManySenderInputEnvelope
    connect?: RepCommentWhereUniqueInput | RepCommentWhereUniqueInput[]
  }

  export type ConversationCreateNestedManyWithoutUser1Input = {
    create?: XOR<ConversationCreateWithoutUser1Input, ConversationUncheckedCreateWithoutUser1Input> | ConversationCreateWithoutUser1Input[] | ConversationUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUser1Input | ConversationCreateOrConnectWithoutUser1Input[]
    createMany?: ConversationCreateManyUser1InputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type ConversationCreateNestedManyWithoutUser2Input = {
    create?: XOR<ConversationCreateWithoutUser2Input, ConversationUncheckedCreateWithoutUser2Input> | ConversationCreateWithoutUser2Input[] | ConversationUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUser2Input | ConversationCreateOrConnectWithoutUser2Input[]
    createMany?: ConversationCreateManyUser2InputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type PrivateMessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<PrivateMessageCreateWithoutSenderInput, PrivateMessageUncheckedCreateWithoutSenderInput> | PrivateMessageCreateWithoutSenderInput[] | PrivateMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutSenderInput | PrivateMessageCreateOrConnectWithoutSenderInput[]
    createMany?: PrivateMessageCreateManySenderInputEnvelope
    connect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
  }

  export type FollowingCreateNestedManyWithoutUserInput = {
    create?: XOR<FollowingCreateWithoutUserInput, FollowingUncheckedCreateWithoutUserInput> | FollowingCreateWithoutUserInput[] | FollowingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FollowingCreateOrConnectWithoutUserInput | FollowingCreateOrConnectWithoutUserInput[]
    createMany?: FollowingCreateManyUserInputEnvelope
    connect?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
  }

  export type FollowerCreateNestedManyWithoutUserInput = {
    create?: XOR<FollowerCreateWithoutUserInput, FollowerUncheckedCreateWithoutUserInput> | FollowerCreateWithoutUserInput[] | FollowerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FollowerCreateOrConnectWithoutUserInput | FollowerCreateOrConnectWithoutUserInput[]
    createMany?: FollowerCreateManyUserInputEnvelope
    connect?: FollowerWhereUniqueInput | FollowerWhereUniqueInput[]
  }

  export type blockedUserCreateNestedManyWithoutUserInput = {
    create?: XOR<blockedUserCreateWithoutUserInput, blockedUserUncheckedCreateWithoutUserInput> | blockedUserCreateWithoutUserInput[] | blockedUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: blockedUserCreateOrConnectWithoutUserInput | blockedUserCreateOrConnectWithoutUserInput[]
    createMany?: blockedUserCreateManyUserInputEnvelope
    connect?: blockedUserWhereUniqueInput | blockedUserWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type CodeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CodeCreateWithoutUserInput, CodeUncheckedCreateWithoutUserInput> | CodeCreateWithoutUserInput[] | CodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CodeCreateOrConnectWithoutUserInput | CodeCreateOrConnectWithoutUserInput[]
    createMany?: CodeCreateManyUserInputEnvelope
    connect?: CodeWhereUniqueInput | CodeWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type BehaviorWithPostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BehaviorWithPostCreateWithoutUserInput, BehaviorWithPostUncheckedCreateWithoutUserInput> | BehaviorWithPostCreateWithoutUserInput[] | BehaviorWithPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BehaviorWithPostCreateOrConnectWithoutUserInput | BehaviorWithPostCreateOrConnectWithoutUserInput[]
    createMany?: BehaviorWithPostCreateManyUserInputEnvelope
    connect?: BehaviorWithPostWhereUniqueInput | BehaviorWithPostWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type RepCommentUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<RepCommentCreateWithoutSenderInput, RepCommentUncheckedCreateWithoutSenderInput> | RepCommentCreateWithoutSenderInput[] | RepCommentUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: RepCommentCreateOrConnectWithoutSenderInput | RepCommentCreateOrConnectWithoutSenderInput[]
    createMany?: RepCommentCreateManySenderInputEnvelope
    connect?: RepCommentWhereUniqueInput | RepCommentWhereUniqueInput[]
  }

  export type ConversationUncheckedCreateNestedManyWithoutUser1Input = {
    create?: XOR<ConversationCreateWithoutUser1Input, ConversationUncheckedCreateWithoutUser1Input> | ConversationCreateWithoutUser1Input[] | ConversationUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUser1Input | ConversationCreateOrConnectWithoutUser1Input[]
    createMany?: ConversationCreateManyUser1InputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type ConversationUncheckedCreateNestedManyWithoutUser2Input = {
    create?: XOR<ConversationCreateWithoutUser2Input, ConversationUncheckedCreateWithoutUser2Input> | ConversationCreateWithoutUser2Input[] | ConversationUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUser2Input | ConversationCreateOrConnectWithoutUser2Input[]
    createMany?: ConversationCreateManyUser2InputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type PrivateMessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<PrivateMessageCreateWithoutSenderInput, PrivateMessageUncheckedCreateWithoutSenderInput> | PrivateMessageCreateWithoutSenderInput[] | PrivateMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutSenderInput | PrivateMessageCreateOrConnectWithoutSenderInput[]
    createMany?: PrivateMessageCreateManySenderInputEnvelope
    connect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
  }

  export type FollowingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FollowingCreateWithoutUserInput, FollowingUncheckedCreateWithoutUserInput> | FollowingCreateWithoutUserInput[] | FollowingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FollowingCreateOrConnectWithoutUserInput | FollowingCreateOrConnectWithoutUserInput[]
    createMany?: FollowingCreateManyUserInputEnvelope
    connect?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
  }

  export type FollowerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FollowerCreateWithoutUserInput, FollowerUncheckedCreateWithoutUserInput> | FollowerCreateWithoutUserInput[] | FollowerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FollowerCreateOrConnectWithoutUserInput | FollowerCreateOrConnectWithoutUserInput[]
    createMany?: FollowerCreateManyUserInputEnvelope
    connect?: FollowerWhereUniqueInput | FollowerWhereUniqueInput[]
  }

  export type blockedUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<blockedUserCreateWithoutUserInput, blockedUserUncheckedCreateWithoutUserInput> | blockedUserCreateWithoutUserInput[] | blockedUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: blockedUserCreateOrConnectWithoutUserInput | blockedUserCreateOrConnectWithoutUserInput[]
    createMany?: blockedUserCreateManyUserInputEnvelope
    connect?: blockedUserWhereUniqueInput | blockedUserWhereUniqueInput[]
  }

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | null
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type CodeUpdateManyWithoutUserNestedInput = {
    create?: XOR<CodeCreateWithoutUserInput, CodeUncheckedCreateWithoutUserInput> | CodeCreateWithoutUserInput[] | CodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CodeCreateOrConnectWithoutUserInput | CodeCreateOrConnectWithoutUserInput[]
    upsert?: CodeUpsertWithWhereUniqueWithoutUserInput | CodeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CodeCreateManyUserInputEnvelope
    set?: CodeWhereUniqueInput | CodeWhereUniqueInput[]
    disconnect?: CodeWhereUniqueInput | CodeWhereUniqueInput[]
    delete?: CodeWhereUniqueInput | CodeWhereUniqueInput[]
    connect?: CodeWhereUniqueInput | CodeWhereUniqueInput[]
    update?: CodeUpdateWithWhereUniqueWithoutUserInput | CodeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CodeUpdateManyWithWhereWithoutUserInput | CodeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CodeScalarWhereInput | CodeScalarWhereInput[]
  }

  export type PostUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type BehaviorWithPostUpdateManyWithoutUserNestedInput = {
    create?: XOR<BehaviorWithPostCreateWithoutUserInput, BehaviorWithPostUncheckedCreateWithoutUserInput> | BehaviorWithPostCreateWithoutUserInput[] | BehaviorWithPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BehaviorWithPostCreateOrConnectWithoutUserInput | BehaviorWithPostCreateOrConnectWithoutUserInput[]
    upsert?: BehaviorWithPostUpsertWithWhereUniqueWithoutUserInput | BehaviorWithPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BehaviorWithPostCreateManyUserInputEnvelope
    set?: BehaviorWithPostWhereUniqueInput | BehaviorWithPostWhereUniqueInput[]
    disconnect?: BehaviorWithPostWhereUniqueInput | BehaviorWithPostWhereUniqueInput[]
    delete?: BehaviorWithPostWhereUniqueInput | BehaviorWithPostWhereUniqueInput[]
    connect?: BehaviorWithPostWhereUniqueInput | BehaviorWithPostWhereUniqueInput[]
    update?: BehaviorWithPostUpdateWithWhereUniqueWithoutUserInput | BehaviorWithPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BehaviorWithPostUpdateManyWithWhereWithoutUserInput | BehaviorWithPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BehaviorWithPostScalarWhereInput | BehaviorWithPostScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type RepCommentUpdateManyWithoutSenderNestedInput = {
    create?: XOR<RepCommentCreateWithoutSenderInput, RepCommentUncheckedCreateWithoutSenderInput> | RepCommentCreateWithoutSenderInput[] | RepCommentUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: RepCommentCreateOrConnectWithoutSenderInput | RepCommentCreateOrConnectWithoutSenderInput[]
    upsert?: RepCommentUpsertWithWhereUniqueWithoutSenderInput | RepCommentUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: RepCommentCreateManySenderInputEnvelope
    set?: RepCommentWhereUniqueInput | RepCommentWhereUniqueInput[]
    disconnect?: RepCommentWhereUniqueInput | RepCommentWhereUniqueInput[]
    delete?: RepCommentWhereUniqueInput | RepCommentWhereUniqueInput[]
    connect?: RepCommentWhereUniqueInput | RepCommentWhereUniqueInput[]
    update?: RepCommentUpdateWithWhereUniqueWithoutSenderInput | RepCommentUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: RepCommentUpdateManyWithWhereWithoutSenderInput | RepCommentUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: RepCommentScalarWhereInput | RepCommentScalarWhereInput[]
  }

  export type ConversationUpdateManyWithoutUser1NestedInput = {
    create?: XOR<ConversationCreateWithoutUser1Input, ConversationUncheckedCreateWithoutUser1Input> | ConversationCreateWithoutUser1Input[] | ConversationUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUser1Input | ConversationCreateOrConnectWithoutUser1Input[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutUser1Input | ConversationUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: ConversationCreateManyUser1InputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutUser1Input | ConversationUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: ConversationUpdateManyWithWhereWithoutUser1Input | ConversationUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type ConversationUpdateManyWithoutUser2NestedInput = {
    create?: XOR<ConversationCreateWithoutUser2Input, ConversationUncheckedCreateWithoutUser2Input> | ConversationCreateWithoutUser2Input[] | ConversationUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUser2Input | ConversationCreateOrConnectWithoutUser2Input[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutUser2Input | ConversationUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: ConversationCreateManyUser2InputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutUser2Input | ConversationUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: ConversationUpdateManyWithWhereWithoutUser2Input | ConversationUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type PrivateMessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<PrivateMessageCreateWithoutSenderInput, PrivateMessageUncheckedCreateWithoutSenderInput> | PrivateMessageCreateWithoutSenderInput[] | PrivateMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutSenderInput | PrivateMessageCreateOrConnectWithoutSenderInput[]
    upsert?: PrivateMessageUpsertWithWhereUniqueWithoutSenderInput | PrivateMessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: PrivateMessageCreateManySenderInputEnvelope
    set?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    disconnect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    delete?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    connect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    update?: PrivateMessageUpdateWithWhereUniqueWithoutSenderInput | PrivateMessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: PrivateMessageUpdateManyWithWhereWithoutSenderInput | PrivateMessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: PrivateMessageScalarWhereInput | PrivateMessageScalarWhereInput[]
  }

  export type FollowingUpdateManyWithoutUserNestedInput = {
    create?: XOR<FollowingCreateWithoutUserInput, FollowingUncheckedCreateWithoutUserInput> | FollowingCreateWithoutUserInput[] | FollowingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FollowingCreateOrConnectWithoutUserInput | FollowingCreateOrConnectWithoutUserInput[]
    upsert?: FollowingUpsertWithWhereUniqueWithoutUserInput | FollowingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FollowingCreateManyUserInputEnvelope
    set?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
    disconnect?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
    delete?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
    connect?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
    update?: FollowingUpdateWithWhereUniqueWithoutUserInput | FollowingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FollowingUpdateManyWithWhereWithoutUserInput | FollowingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FollowingScalarWhereInput | FollowingScalarWhereInput[]
  }

  export type FollowerUpdateManyWithoutUserNestedInput = {
    create?: XOR<FollowerCreateWithoutUserInput, FollowerUncheckedCreateWithoutUserInput> | FollowerCreateWithoutUserInput[] | FollowerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FollowerCreateOrConnectWithoutUserInput | FollowerCreateOrConnectWithoutUserInput[]
    upsert?: FollowerUpsertWithWhereUniqueWithoutUserInput | FollowerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FollowerCreateManyUserInputEnvelope
    set?: FollowerWhereUniqueInput | FollowerWhereUniqueInput[]
    disconnect?: FollowerWhereUniqueInput | FollowerWhereUniqueInput[]
    delete?: FollowerWhereUniqueInput | FollowerWhereUniqueInput[]
    connect?: FollowerWhereUniqueInput | FollowerWhereUniqueInput[]
    update?: FollowerUpdateWithWhereUniqueWithoutUserInput | FollowerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FollowerUpdateManyWithWhereWithoutUserInput | FollowerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FollowerScalarWhereInput | FollowerScalarWhereInput[]
  }

  export type blockedUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<blockedUserCreateWithoutUserInput, blockedUserUncheckedCreateWithoutUserInput> | blockedUserCreateWithoutUserInput[] | blockedUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: blockedUserCreateOrConnectWithoutUserInput | blockedUserCreateOrConnectWithoutUserInput[]
    upsert?: blockedUserUpsertWithWhereUniqueWithoutUserInput | blockedUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: blockedUserCreateManyUserInputEnvelope
    set?: blockedUserWhereUniqueInput | blockedUserWhereUniqueInput[]
    disconnect?: blockedUserWhereUniqueInput | blockedUserWhereUniqueInput[]
    delete?: blockedUserWhereUniqueInput | blockedUserWhereUniqueInput[]
    connect?: blockedUserWhereUniqueInput | blockedUserWhereUniqueInput[]
    update?: blockedUserUpdateWithWhereUniqueWithoutUserInput | blockedUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: blockedUserUpdateManyWithWhereWithoutUserInput | blockedUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: blockedUserScalarWhereInput | blockedUserScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type CodeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CodeCreateWithoutUserInput, CodeUncheckedCreateWithoutUserInput> | CodeCreateWithoutUserInput[] | CodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CodeCreateOrConnectWithoutUserInput | CodeCreateOrConnectWithoutUserInput[]
    upsert?: CodeUpsertWithWhereUniqueWithoutUserInput | CodeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CodeCreateManyUserInputEnvelope
    set?: CodeWhereUniqueInput | CodeWhereUniqueInput[]
    disconnect?: CodeWhereUniqueInput | CodeWhereUniqueInput[]
    delete?: CodeWhereUniqueInput | CodeWhereUniqueInput[]
    connect?: CodeWhereUniqueInput | CodeWhereUniqueInput[]
    update?: CodeUpdateWithWhereUniqueWithoutUserInput | CodeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CodeUpdateManyWithWhereWithoutUserInput | CodeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CodeScalarWhereInput | CodeScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type BehaviorWithPostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BehaviorWithPostCreateWithoutUserInput, BehaviorWithPostUncheckedCreateWithoutUserInput> | BehaviorWithPostCreateWithoutUserInput[] | BehaviorWithPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BehaviorWithPostCreateOrConnectWithoutUserInput | BehaviorWithPostCreateOrConnectWithoutUserInput[]
    upsert?: BehaviorWithPostUpsertWithWhereUniqueWithoutUserInput | BehaviorWithPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BehaviorWithPostCreateManyUserInputEnvelope
    set?: BehaviorWithPostWhereUniqueInput | BehaviorWithPostWhereUniqueInput[]
    disconnect?: BehaviorWithPostWhereUniqueInput | BehaviorWithPostWhereUniqueInput[]
    delete?: BehaviorWithPostWhereUniqueInput | BehaviorWithPostWhereUniqueInput[]
    connect?: BehaviorWithPostWhereUniqueInput | BehaviorWithPostWhereUniqueInput[]
    update?: BehaviorWithPostUpdateWithWhereUniqueWithoutUserInput | BehaviorWithPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BehaviorWithPostUpdateManyWithWhereWithoutUserInput | BehaviorWithPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BehaviorWithPostScalarWhereInput | BehaviorWithPostScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type RepCommentUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<RepCommentCreateWithoutSenderInput, RepCommentUncheckedCreateWithoutSenderInput> | RepCommentCreateWithoutSenderInput[] | RepCommentUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: RepCommentCreateOrConnectWithoutSenderInput | RepCommentCreateOrConnectWithoutSenderInput[]
    upsert?: RepCommentUpsertWithWhereUniqueWithoutSenderInput | RepCommentUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: RepCommentCreateManySenderInputEnvelope
    set?: RepCommentWhereUniqueInput | RepCommentWhereUniqueInput[]
    disconnect?: RepCommentWhereUniqueInput | RepCommentWhereUniqueInput[]
    delete?: RepCommentWhereUniqueInput | RepCommentWhereUniqueInput[]
    connect?: RepCommentWhereUniqueInput | RepCommentWhereUniqueInput[]
    update?: RepCommentUpdateWithWhereUniqueWithoutSenderInput | RepCommentUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: RepCommentUpdateManyWithWhereWithoutSenderInput | RepCommentUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: RepCommentScalarWhereInput | RepCommentScalarWhereInput[]
  }

  export type ConversationUncheckedUpdateManyWithoutUser1NestedInput = {
    create?: XOR<ConversationCreateWithoutUser1Input, ConversationUncheckedCreateWithoutUser1Input> | ConversationCreateWithoutUser1Input[] | ConversationUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUser1Input | ConversationCreateOrConnectWithoutUser1Input[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutUser1Input | ConversationUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: ConversationCreateManyUser1InputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutUser1Input | ConversationUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: ConversationUpdateManyWithWhereWithoutUser1Input | ConversationUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type ConversationUncheckedUpdateManyWithoutUser2NestedInput = {
    create?: XOR<ConversationCreateWithoutUser2Input, ConversationUncheckedCreateWithoutUser2Input> | ConversationCreateWithoutUser2Input[] | ConversationUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUser2Input | ConversationCreateOrConnectWithoutUser2Input[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutUser2Input | ConversationUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: ConversationCreateManyUser2InputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutUser2Input | ConversationUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: ConversationUpdateManyWithWhereWithoutUser2Input | ConversationUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type PrivateMessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<PrivateMessageCreateWithoutSenderInput, PrivateMessageUncheckedCreateWithoutSenderInput> | PrivateMessageCreateWithoutSenderInput[] | PrivateMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutSenderInput | PrivateMessageCreateOrConnectWithoutSenderInput[]
    upsert?: PrivateMessageUpsertWithWhereUniqueWithoutSenderInput | PrivateMessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: PrivateMessageCreateManySenderInputEnvelope
    set?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    disconnect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    delete?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    connect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    update?: PrivateMessageUpdateWithWhereUniqueWithoutSenderInput | PrivateMessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: PrivateMessageUpdateManyWithWhereWithoutSenderInput | PrivateMessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: PrivateMessageScalarWhereInput | PrivateMessageScalarWhereInput[]
  }

  export type FollowingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FollowingCreateWithoutUserInput, FollowingUncheckedCreateWithoutUserInput> | FollowingCreateWithoutUserInput[] | FollowingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FollowingCreateOrConnectWithoutUserInput | FollowingCreateOrConnectWithoutUserInput[]
    upsert?: FollowingUpsertWithWhereUniqueWithoutUserInput | FollowingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FollowingCreateManyUserInputEnvelope
    set?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
    disconnect?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
    delete?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
    connect?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
    update?: FollowingUpdateWithWhereUniqueWithoutUserInput | FollowingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FollowingUpdateManyWithWhereWithoutUserInput | FollowingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FollowingScalarWhereInput | FollowingScalarWhereInput[]
  }

  export type FollowerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FollowerCreateWithoutUserInput, FollowerUncheckedCreateWithoutUserInput> | FollowerCreateWithoutUserInput[] | FollowerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FollowerCreateOrConnectWithoutUserInput | FollowerCreateOrConnectWithoutUserInput[]
    upsert?: FollowerUpsertWithWhereUniqueWithoutUserInput | FollowerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FollowerCreateManyUserInputEnvelope
    set?: FollowerWhereUniqueInput | FollowerWhereUniqueInput[]
    disconnect?: FollowerWhereUniqueInput | FollowerWhereUniqueInput[]
    delete?: FollowerWhereUniqueInput | FollowerWhereUniqueInput[]
    connect?: FollowerWhereUniqueInput | FollowerWhereUniqueInput[]
    update?: FollowerUpdateWithWhereUniqueWithoutUserInput | FollowerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FollowerUpdateManyWithWhereWithoutUserInput | FollowerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FollowerScalarWhereInput | FollowerScalarWhereInput[]
  }

  export type blockedUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<blockedUserCreateWithoutUserInput, blockedUserUncheckedCreateWithoutUserInput> | blockedUserCreateWithoutUserInput[] | blockedUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: blockedUserCreateOrConnectWithoutUserInput | blockedUserCreateOrConnectWithoutUserInput[]
    upsert?: blockedUserUpsertWithWhereUniqueWithoutUserInput | blockedUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: blockedUserCreateManyUserInputEnvelope
    set?: blockedUserWhereUniqueInput | blockedUserWhereUniqueInput[]
    disconnect?: blockedUserWhereUniqueInput | blockedUserWhereUniqueInput[]
    delete?: blockedUserWhereUniqueInput | blockedUserWhereUniqueInput[]
    connect?: blockedUserWhereUniqueInput | blockedUserWhereUniqueInput[]
    update?: blockedUserUpdateWithWhereUniqueWithoutUserInput | blockedUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: blockedUserUpdateManyWithWhereWithoutUserInput | blockedUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: blockedUserScalarWhereInput | blockedUserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFollowingUserInput = {
    create?: XOR<UserCreateWithoutFollowingUserInput, UserUncheckedCreateWithoutFollowingUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowingUserInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFollowingUserNestedInput = {
    create?: XOR<UserCreateWithoutFollowingUserInput, UserUncheckedCreateWithoutFollowingUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowingUserInput
    upsert?: UserUpsertWithoutFollowingUserInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFollowingUserInput, UserUpdateWithoutFollowingUserInput>, UserUncheckedUpdateWithoutFollowingUserInput>
  }

  export type UserCreateNestedOneWithoutFollowersInput = {
    create?: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFollowersNestedInput = {
    create?: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput
    upsert?: UserUpsertWithoutFollowersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFollowersInput, UserUpdateWithoutFollowersInput>, UserUncheckedUpdateWithoutFollowersInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTypeOfCodeFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeOfCode | EnumTypeOfCodeFieldRefInput<$PrismaModel>
    in?: $Enums.TypeOfCode[] | ListEnumTypeOfCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeOfCode[] | ListEnumTypeOfCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeOfCodeFilter<$PrismaModel> | $Enums.TypeOfCode
  }

  export type NestedEnumTypeOfCodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeOfCode | EnumTypeOfCodeFieldRefInput<$PrismaModel>
    in?: $Enums.TypeOfCode[] | ListEnumTypeOfCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeOfCode[] | ListEnumTypeOfCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeOfCodeWithAggregatesFilter<$PrismaModel> | $Enums.TypeOfCode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeOfCodeFilter<$PrismaModel>
    _max?: NestedEnumTypeOfCodeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatusPostFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPost | EnumStatusPostFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPost[] | ListEnumStatusPostFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPost[] | ListEnumStatusPostFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPostFilter<$PrismaModel> | $Enums.StatusPost
  }

  export type NestedEnumStatusPostWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPost | EnumStatusPostFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPost[] | ListEnumStatusPostFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPost[] | ListEnumStatusPostFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPostWithAggregatesFilter<$PrismaModel> | $Enums.StatusPost
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPostFilter<$PrismaModel>
    _max?: NestedEnumStatusPostFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    isActive?: boolean
    userName: string
    avtUrl?: string | null
    email: string
    hashingPassword: string
    lastSeen?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    codes?: CodeCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    postLiked?: BehaviorWithPostCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    repComments?: RepCommentCreateNestedManyWithoutSenderInput
    user1?: ConversationCreateNestedManyWithoutUser1Input
    user2?: ConversationCreateNestedManyWithoutUser2Input
    sentMessages?: PrivateMessageCreateNestedManyWithoutSenderInput
    followingUser?: FollowingCreateNestedManyWithoutUserInput
    followers?: FollowerCreateNestedManyWithoutUserInput
    blockedUsers?: blockedUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    isActive?: boolean
    userName: string
    avtUrl?: string | null
    email: string
    hashingPassword: string
    lastSeen?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    codes?: CodeUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postLiked?: BehaviorWithPostUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    repComments?: RepCommentUncheckedCreateNestedManyWithoutSenderInput
    user1?: ConversationUncheckedCreateNestedManyWithoutUser1Input
    user2?: ConversationUncheckedCreateNestedManyWithoutUser2Input
    sentMessages?: PrivateMessageUncheckedCreateNestedManyWithoutSenderInput
    followingUser?: FollowingUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowerUncheckedCreateNestedManyWithoutUserInput
    blockedUsers?: blockedUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    avtUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    hashingPassword?: StringFieldUpdateOperationsInput | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codes?: CodeUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    postLiked?: BehaviorWithPostUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    repComments?: RepCommentUpdateManyWithoutSenderNestedInput
    user1?: ConversationUpdateManyWithoutUser1NestedInput
    user2?: ConversationUpdateManyWithoutUser2NestedInput
    sentMessages?: PrivateMessageUpdateManyWithoutSenderNestedInput
    followingUser?: FollowingUpdateManyWithoutUserNestedInput
    followers?: FollowerUpdateManyWithoutUserNestedInput
    blockedUsers?: blockedUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    avtUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    hashingPassword?: StringFieldUpdateOperationsInput | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codes?: CodeUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    postLiked?: BehaviorWithPostUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    repComments?: RepCommentUncheckedUpdateManyWithoutSenderNestedInput
    user1?: ConversationUncheckedUpdateManyWithoutUser1NestedInput
    user2?: ConversationUncheckedUpdateManyWithoutUser2NestedInput
    sentMessages?: PrivateMessageUncheckedUpdateManyWithoutSenderNestedInput
    followingUser?: FollowingUncheckedUpdateManyWithoutUserNestedInput
    followers?: FollowerUncheckedUpdateManyWithoutUserNestedInput
    blockedUsers?: blockedUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCodesInput = {
    id?: string
    name?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    isActive?: boolean
    userName: string
    avtUrl?: string | null
    email: string
    hashingPassword: string
    lastSeen?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    postLiked?: BehaviorWithPostCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    repComments?: RepCommentCreateNestedManyWithoutSenderInput
    user1?: ConversationCreateNestedManyWithoutUser1Input
    user2?: ConversationCreateNestedManyWithoutUser2Input
    sentMessages?: PrivateMessageCreateNestedManyWithoutSenderInput
    followingUser?: FollowingCreateNestedManyWithoutUserInput
    followers?: FollowerCreateNestedManyWithoutUserInput
    blockedUsers?: blockedUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCodesInput = {
    id?: string
    name?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    isActive?: boolean
    userName: string
    avtUrl?: string | null
    email: string
    hashingPassword: string
    lastSeen?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postLiked?: BehaviorWithPostUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    repComments?: RepCommentUncheckedCreateNestedManyWithoutSenderInput
    user1?: ConversationUncheckedCreateNestedManyWithoutUser1Input
    user2?: ConversationUncheckedCreateNestedManyWithoutUser2Input
    sentMessages?: PrivateMessageUncheckedCreateNestedManyWithoutSenderInput
    followingUser?: FollowingUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowerUncheckedCreateNestedManyWithoutUserInput
    blockedUsers?: blockedUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCodesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCodesInput, UserUncheckedCreateWithoutCodesInput>
  }

  export type UserUpsertWithoutCodesInput = {
    update: XOR<UserUpdateWithoutCodesInput, UserUncheckedUpdateWithoutCodesInput>
    create: XOR<UserCreateWithoutCodesInput, UserUncheckedCreateWithoutCodesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCodesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCodesInput, UserUncheckedUpdateWithoutCodesInput>
  }

  export type UserUpdateWithoutCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    avtUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    hashingPassword?: StringFieldUpdateOperationsInput | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    postLiked?: BehaviorWithPostUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    repComments?: RepCommentUpdateManyWithoutSenderNestedInput
    user1?: ConversationUpdateManyWithoutUser1NestedInput
    user2?: ConversationUpdateManyWithoutUser2NestedInput
    sentMessages?: PrivateMessageUpdateManyWithoutSenderNestedInput
    followingUser?: FollowingUpdateManyWithoutUserNestedInput
    followers?: FollowerUpdateManyWithoutUserNestedInput
    blockedUsers?: blockedUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    avtUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    hashingPassword?: StringFieldUpdateOperationsInput | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    postLiked?: BehaviorWithPostUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    repComments?: RepCommentUncheckedUpdateManyWithoutSenderNestedInput
    user1?: ConversationUncheckedUpdateManyWithoutUser1NestedInput
    user2?: ConversationUncheckedUpdateManyWithoutUser2NestedInput
    sentMessages?: PrivateMessageUncheckedUpdateManyWithoutSenderNestedInput
    followingUser?: FollowingUncheckedUpdateManyWithoutUserNestedInput
    followers?: FollowerUncheckedUpdateManyWithoutUserNestedInput
    blockedUsers?: blockedUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUser1Input = {
    id?: string
    name?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    isActive?: boolean
    userName: string
    avtUrl?: string | null
    email: string
    hashingPassword: string
    lastSeen?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    codes?: CodeCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    postLiked?: BehaviorWithPostCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    repComments?: RepCommentCreateNestedManyWithoutSenderInput
    user2?: ConversationCreateNestedManyWithoutUser2Input
    sentMessages?: PrivateMessageCreateNestedManyWithoutSenderInput
    followingUser?: FollowingCreateNestedManyWithoutUserInput
    followers?: FollowerCreateNestedManyWithoutUserInput
    blockedUsers?: blockedUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUser1Input = {
    id?: string
    name?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    isActive?: boolean
    userName: string
    avtUrl?: string | null
    email: string
    hashingPassword: string
    lastSeen?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    codes?: CodeUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postLiked?: BehaviorWithPostUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    repComments?: RepCommentUncheckedCreateNestedManyWithoutSenderInput
    user2?: ConversationUncheckedCreateNestedManyWithoutUser2Input
    sentMessages?: PrivateMessageUncheckedCreateNestedManyWithoutSenderInput
    followingUser?: FollowingUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowerUncheckedCreateNestedManyWithoutUserInput
    blockedUsers?: blockedUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUser1Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUser1Input, UserUncheckedCreateWithoutUser1Input>
  }

  export type UserCreateWithoutUser2Input = {
    id?: string
    name?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    isActive?: boolean
    userName: string
    avtUrl?: string | null
    email: string
    hashingPassword: string
    lastSeen?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    codes?: CodeCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    postLiked?: BehaviorWithPostCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    repComments?: RepCommentCreateNestedManyWithoutSenderInput
    user1?: ConversationCreateNestedManyWithoutUser1Input
    sentMessages?: PrivateMessageCreateNestedManyWithoutSenderInput
    followingUser?: FollowingCreateNestedManyWithoutUserInput
    followers?: FollowerCreateNestedManyWithoutUserInput
    blockedUsers?: blockedUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUser2Input = {
    id?: string
    name?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    isActive?: boolean
    userName: string
    avtUrl?: string | null
    email: string
    hashingPassword: string
    lastSeen?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    codes?: CodeUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postLiked?: BehaviorWithPostUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    repComments?: RepCommentUncheckedCreateNestedManyWithoutSenderInput
    user1?: ConversationUncheckedCreateNestedManyWithoutUser1Input
    sentMessages?: PrivateMessageUncheckedCreateNestedManyWithoutSenderInput
    followingUser?: FollowingUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowerUncheckedCreateNestedManyWithoutUserInput
    blockedUsers?: blockedUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUser2Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUser2Input, UserUncheckedCreateWithoutUser2Input>
  }

  export type PrivateMessageCreateWithoutChatInput = {
    id?: string
    content: string
    receiverId: string
    messageIndex: number
    createdAt?: Date | string
    updateAt?: Date | string
    replyTo?: PrivateMessageCreateNestedOneWithoutRepliesInput
    replies?: PrivateMessageCreateNestedManyWithoutReplyToInput
    sender: UserCreateNestedOneWithoutSentMessagesInput
  }

  export type PrivateMessageUncheckedCreateWithoutChatInput = {
    id?: string
    content: string
    senderId: string
    receiverId: string
    messageIndex: number
    replyToId?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
    replies?: PrivateMessageUncheckedCreateNestedManyWithoutReplyToInput
  }

  export type PrivateMessageCreateOrConnectWithoutChatInput = {
    where: PrivateMessageWhereUniqueInput
    create: XOR<PrivateMessageCreateWithoutChatInput, PrivateMessageUncheckedCreateWithoutChatInput>
  }

  export type PrivateMessageCreateManyChatInputEnvelope = {
    data: PrivateMessageCreateManyChatInput | PrivateMessageCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutUser1Input = {
    update: XOR<UserUpdateWithoutUser1Input, UserUncheckedUpdateWithoutUser1Input>
    create: XOR<UserCreateWithoutUser1Input, UserUncheckedCreateWithoutUser1Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUser1Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUser1Input, UserUncheckedUpdateWithoutUser1Input>
  }

  export type UserUpdateWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    avtUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    hashingPassword?: StringFieldUpdateOperationsInput | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    codes?: CodeUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    postLiked?: BehaviorWithPostUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    repComments?: RepCommentUpdateManyWithoutSenderNestedInput
    user2?: ConversationUpdateManyWithoutUser2NestedInput
    sentMessages?: PrivateMessageUpdateManyWithoutSenderNestedInput
    followingUser?: FollowingUpdateManyWithoutUserNestedInput
    followers?: FollowerUpdateManyWithoutUserNestedInput
    blockedUsers?: blockedUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    avtUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    hashingPassword?: StringFieldUpdateOperationsInput | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    codes?: CodeUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    postLiked?: BehaviorWithPostUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    repComments?: RepCommentUncheckedUpdateManyWithoutSenderNestedInput
    user2?: ConversationUncheckedUpdateManyWithoutUser2NestedInput
    sentMessages?: PrivateMessageUncheckedUpdateManyWithoutSenderNestedInput
    followingUser?: FollowingUncheckedUpdateManyWithoutUserNestedInput
    followers?: FollowerUncheckedUpdateManyWithoutUserNestedInput
    blockedUsers?: blockedUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutUser2Input = {
    update: XOR<UserUpdateWithoutUser2Input, UserUncheckedUpdateWithoutUser2Input>
    create: XOR<UserCreateWithoutUser2Input, UserUncheckedCreateWithoutUser2Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUser2Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUser2Input, UserUncheckedUpdateWithoutUser2Input>
  }

  export type UserUpdateWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    avtUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    hashingPassword?: StringFieldUpdateOperationsInput | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    codes?: CodeUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    postLiked?: BehaviorWithPostUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    repComments?: RepCommentUpdateManyWithoutSenderNestedInput
    user1?: ConversationUpdateManyWithoutUser1NestedInput
    sentMessages?: PrivateMessageUpdateManyWithoutSenderNestedInput
    followingUser?: FollowingUpdateManyWithoutUserNestedInput
    followers?: FollowerUpdateManyWithoutUserNestedInput
    blockedUsers?: blockedUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    avtUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    hashingPassword?: StringFieldUpdateOperationsInput | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    codes?: CodeUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    postLiked?: BehaviorWithPostUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    repComments?: RepCommentUncheckedUpdateManyWithoutSenderNestedInput
    user1?: ConversationUncheckedUpdateManyWithoutUser1NestedInput
    sentMessages?: PrivateMessageUncheckedUpdateManyWithoutSenderNestedInput
    followingUser?: FollowingUncheckedUpdateManyWithoutUserNestedInput
    followers?: FollowerUncheckedUpdateManyWithoutUserNestedInput
    blockedUsers?: blockedUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PrivateMessageUpsertWithWhereUniqueWithoutChatInput = {
    where: PrivateMessageWhereUniqueInput
    update: XOR<PrivateMessageUpdateWithoutChatInput, PrivateMessageUncheckedUpdateWithoutChatInput>
    create: XOR<PrivateMessageCreateWithoutChatInput, PrivateMessageUncheckedCreateWithoutChatInput>
  }

  export type PrivateMessageUpdateWithWhereUniqueWithoutChatInput = {
    where: PrivateMessageWhereUniqueInput
    data: XOR<PrivateMessageUpdateWithoutChatInput, PrivateMessageUncheckedUpdateWithoutChatInput>
  }

  export type PrivateMessageUpdateManyWithWhereWithoutChatInput = {
    where: PrivateMessageScalarWhereInput
    data: XOR<PrivateMessageUpdateManyMutationInput, PrivateMessageUncheckedUpdateManyWithoutChatInput>
  }

  export type PrivateMessageScalarWhereInput = {
    AND?: PrivateMessageScalarWhereInput | PrivateMessageScalarWhereInput[]
    OR?: PrivateMessageScalarWhereInput[]
    NOT?: PrivateMessageScalarWhereInput | PrivateMessageScalarWhereInput[]
    id?: UuidFilter<"PrivateMessage"> | string
    content?: StringFilter<"PrivateMessage"> | string
    conversationId?: UuidFilter<"PrivateMessage"> | string
    senderId?: UuidFilter<"PrivateMessage"> | string
    receiverId?: UuidFilter<"PrivateMessage"> | string
    messageIndex?: IntFilter<"PrivateMessage"> | number
    replyToId?: UuidNullableFilter<"PrivateMessage"> | string | null
    createdAt?: DateTimeFilter<"PrivateMessage"> | Date | string
    updateAt?: DateTimeFilter<"PrivateMessage"> | Date | string
  }

  export type PrivateMessageCreateWithoutRepliesInput = {
    id?: string
    content: string
    receiverId: string
    messageIndex: number
    createdAt?: Date | string
    updateAt?: Date | string
    replyTo?: PrivateMessageCreateNestedOneWithoutRepliesInput
    chat: ConversationCreateNestedOneWithoutPrivateMessageInput
    sender: UserCreateNestedOneWithoutSentMessagesInput
  }

  export type PrivateMessageUncheckedCreateWithoutRepliesInput = {
    id?: string
    content: string
    conversationId: string
    senderId: string
    receiverId: string
    messageIndex: number
    replyToId?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type PrivateMessageCreateOrConnectWithoutRepliesInput = {
    where: PrivateMessageWhereUniqueInput
    create: XOR<PrivateMessageCreateWithoutRepliesInput, PrivateMessageUncheckedCreateWithoutRepliesInput>
  }

  export type PrivateMessageCreateWithoutReplyToInput = {
    id?: string
    content: string
    receiverId: string
    messageIndex: number
    createdAt?: Date | string
    updateAt?: Date | string
    replies?: PrivateMessageCreateNestedManyWithoutReplyToInput
    chat: ConversationCreateNestedOneWithoutPrivateMessageInput
    sender: UserCreateNestedOneWithoutSentMessagesInput
  }

  export type PrivateMessageUncheckedCreateWithoutReplyToInput = {
    id?: string
    content: string
    conversationId: string
    senderId: string
    receiverId: string
    messageIndex: number
    createdAt?: Date | string
    updateAt?: Date | string
    replies?: PrivateMessageUncheckedCreateNestedManyWithoutReplyToInput
  }

  export type PrivateMessageCreateOrConnectWithoutReplyToInput = {
    where: PrivateMessageWhereUniqueInput
    create: XOR<PrivateMessageCreateWithoutReplyToInput, PrivateMessageUncheckedCreateWithoutReplyToInput>
  }

  export type PrivateMessageCreateManyReplyToInputEnvelope = {
    data: PrivateMessageCreateManyReplyToInput | PrivateMessageCreateManyReplyToInput[]
    skipDuplicates?: boolean
  }

  export type ConversationCreateWithoutPrivateMessageInput = {
    id?: string
    lastMessage?: string | null
    lastMessageAt?: Date | string | null
    user1LastReadIndex?: number
    user2LastReadIndex?: number
    socketId: string
    totalMessage?: number
    createdAt?: Date | string
    updateAt?: Date | string
    user1: UserCreateNestedOneWithoutUser1Input
    user2: UserCreateNestedOneWithoutUser2Input
  }

  export type ConversationUncheckedCreateWithoutPrivateMessageInput = {
    id?: string
    creatorId: string
    friendId: string
    lastMessage?: string | null
    lastMessageAt?: Date | string | null
    user1LastReadIndex?: number
    user2LastReadIndex?: number
    socketId: string
    totalMessage?: number
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type ConversationCreateOrConnectWithoutPrivateMessageInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutPrivateMessageInput, ConversationUncheckedCreateWithoutPrivateMessageInput>
  }

  export type UserCreateWithoutSentMessagesInput = {
    id?: string
    name?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    isActive?: boolean
    userName: string
    avtUrl?: string | null
    email: string
    hashingPassword: string
    lastSeen?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    codes?: CodeCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    postLiked?: BehaviorWithPostCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    repComments?: RepCommentCreateNestedManyWithoutSenderInput
    user1?: ConversationCreateNestedManyWithoutUser1Input
    user2?: ConversationCreateNestedManyWithoutUser2Input
    followingUser?: FollowingCreateNestedManyWithoutUserInput
    followers?: FollowerCreateNestedManyWithoutUserInput
    blockedUsers?: blockedUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSentMessagesInput = {
    id?: string
    name?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    isActive?: boolean
    userName: string
    avtUrl?: string | null
    email: string
    hashingPassword: string
    lastSeen?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    codes?: CodeUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postLiked?: BehaviorWithPostUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    repComments?: RepCommentUncheckedCreateNestedManyWithoutSenderInput
    user1?: ConversationUncheckedCreateNestedManyWithoutUser1Input
    user2?: ConversationUncheckedCreateNestedManyWithoutUser2Input
    followingUser?: FollowingUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowerUncheckedCreateNestedManyWithoutUserInput
    blockedUsers?: blockedUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSentMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
  }

  export type PrivateMessageUpsertWithoutRepliesInput = {
    update: XOR<PrivateMessageUpdateWithoutRepliesInput, PrivateMessageUncheckedUpdateWithoutRepliesInput>
    create: XOR<PrivateMessageCreateWithoutRepliesInput, PrivateMessageUncheckedCreateWithoutRepliesInput>
    where?: PrivateMessageWhereInput
  }

  export type PrivateMessageUpdateToOneWithWhereWithoutRepliesInput = {
    where?: PrivateMessageWhereInput
    data: XOR<PrivateMessageUpdateWithoutRepliesInput, PrivateMessageUncheckedUpdateWithoutRepliesInput>
  }

  export type PrivateMessageUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    messageIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replyTo?: PrivateMessageUpdateOneWithoutRepliesNestedInput
    chat?: ConversationUpdateOneRequiredWithoutPrivateMessageNestedInput
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
  }

  export type PrivateMessageUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    messageIndex?: IntFieldUpdateOperationsInput | number
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateMessageUpsertWithWhereUniqueWithoutReplyToInput = {
    where: PrivateMessageWhereUniqueInput
    update: XOR<PrivateMessageUpdateWithoutReplyToInput, PrivateMessageUncheckedUpdateWithoutReplyToInput>
    create: XOR<PrivateMessageCreateWithoutReplyToInput, PrivateMessageUncheckedCreateWithoutReplyToInput>
  }

  export type PrivateMessageUpdateWithWhereUniqueWithoutReplyToInput = {
    where: PrivateMessageWhereUniqueInput
    data: XOR<PrivateMessageUpdateWithoutReplyToInput, PrivateMessageUncheckedUpdateWithoutReplyToInput>
  }

  export type PrivateMessageUpdateManyWithWhereWithoutReplyToInput = {
    where: PrivateMessageScalarWhereInput
    data: XOR<PrivateMessageUpdateManyMutationInput, PrivateMessageUncheckedUpdateManyWithoutReplyToInput>
  }

  export type ConversationUpsertWithoutPrivateMessageInput = {
    update: XOR<ConversationUpdateWithoutPrivateMessageInput, ConversationUncheckedUpdateWithoutPrivateMessageInput>
    create: XOR<ConversationCreateWithoutPrivateMessageInput, ConversationUncheckedCreateWithoutPrivateMessageInput>
    where?: ConversationWhereInput
  }

  export type ConversationUpdateToOneWithWhereWithoutPrivateMessageInput = {
    where?: ConversationWhereInput
    data: XOR<ConversationUpdateWithoutPrivateMessageInput, ConversationUncheckedUpdateWithoutPrivateMessageInput>
  }

  export type ConversationUpdateWithoutPrivateMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user1LastReadIndex?: IntFieldUpdateOperationsInput | number
    user2LastReadIndex?: IntFieldUpdateOperationsInput | number
    socketId?: StringFieldUpdateOperationsInput | string
    totalMessage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user1?: UserUpdateOneRequiredWithoutUser1NestedInput
    user2?: UserUpdateOneRequiredWithoutUser2NestedInput
  }

  export type ConversationUncheckedUpdateWithoutPrivateMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user1LastReadIndex?: IntFieldUpdateOperationsInput | number
    user2LastReadIndex?: IntFieldUpdateOperationsInput | number
    socketId?: StringFieldUpdateOperationsInput | string
    totalMessage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutSentMessagesInput = {
    update: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    avtUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    hashingPassword?: StringFieldUpdateOperationsInput | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    codes?: CodeUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    postLiked?: BehaviorWithPostUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    repComments?: RepCommentUpdateManyWithoutSenderNestedInput
    user1?: ConversationUpdateManyWithoutUser1NestedInput
    user2?: ConversationUpdateManyWithoutUser2NestedInput
    followingUser?: FollowingUpdateManyWithoutUserNestedInput
    followers?: FollowerUpdateManyWithoutUserNestedInput
    blockedUsers?: blockedUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    avtUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    hashingPassword?: StringFieldUpdateOperationsInput | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    codes?: CodeUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    postLiked?: BehaviorWithPostUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    repComments?: RepCommentUncheckedUpdateManyWithoutSenderNestedInput
    user1?: ConversationUncheckedUpdateManyWithoutUser1NestedInput
    user2?: ConversationUncheckedUpdateManyWithoutUser2NestedInput
    followingUser?: FollowingUncheckedUpdateManyWithoutUserNestedInput
    followers?: FollowerUncheckedUpdateManyWithoutUserNestedInput
    blockedUsers?: blockedUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    name?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    isActive?: boolean
    userName: string
    avtUrl?: string | null
    email: string
    hashingPassword: string
    lastSeen?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    codes?: CodeCreateNestedManyWithoutUserInput
    postLiked?: BehaviorWithPostCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    repComments?: RepCommentCreateNestedManyWithoutSenderInput
    user1?: ConversationCreateNestedManyWithoutUser1Input
    user2?: ConversationCreateNestedManyWithoutUser2Input
    sentMessages?: PrivateMessageCreateNestedManyWithoutSenderInput
    followingUser?: FollowingCreateNestedManyWithoutUserInput
    followers?: FollowerCreateNestedManyWithoutUserInput
    blockedUsers?: blockedUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    name?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    isActive?: boolean
    userName: string
    avtUrl?: string | null
    email: string
    hashingPassword: string
    lastSeen?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    codes?: CodeUncheckedCreateNestedManyWithoutUserInput
    postLiked?: BehaviorWithPostUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    repComments?: RepCommentUncheckedCreateNestedManyWithoutSenderInput
    user1?: ConversationUncheckedCreateNestedManyWithoutUser1Input
    user2?: ConversationUncheckedCreateNestedManyWithoutUser2Input
    sentMessages?: PrivateMessageUncheckedCreateNestedManyWithoutSenderInput
    followingUser?: FollowingUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowerUncheckedCreateNestedManyWithoutUserInput
    blockedUsers?: blockedUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type CommentCreateWithoutPostInput = {
    id?: string
    content: string
    createAt?: Date | string
    updateAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
    repComments?: RepCommentCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutPostInput = {
    id?: string
    content: string
    userId: string
    createAt?: Date | string
    updateAt?: Date | string
    repComments?: RepCommentUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutPostInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentCreateManyPostInputEnvelope = {
    data: CommentCreateManyPostInput | CommentCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type BehaviorWithPostCreateWithoutPostInput = {
    id?: string
    isLiked?: boolean
    createdAt?: Date | string
    updateAt?: Date | string
    user: UserCreateNestedOneWithoutPostLikedInput
  }

  export type BehaviorWithPostUncheckedCreateWithoutPostInput = {
    id?: string
    isLiked?: boolean
    userId: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type BehaviorWithPostCreateOrConnectWithoutPostInput = {
    where: BehaviorWithPostWhereUniqueInput
    create: XOR<BehaviorWithPostCreateWithoutPostInput, BehaviorWithPostUncheckedCreateWithoutPostInput>
  }

  export type BehaviorWithPostCreateManyPostInputEnvelope = {
    data: BehaviorWithPostCreateManyPostInput | BehaviorWithPostCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    avtUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    hashingPassword?: StringFieldUpdateOperationsInput | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    codes?: CodeUpdateManyWithoutUserNestedInput
    postLiked?: BehaviorWithPostUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    repComments?: RepCommentUpdateManyWithoutSenderNestedInput
    user1?: ConversationUpdateManyWithoutUser1NestedInput
    user2?: ConversationUpdateManyWithoutUser2NestedInput
    sentMessages?: PrivateMessageUpdateManyWithoutSenderNestedInput
    followingUser?: FollowingUpdateManyWithoutUserNestedInput
    followers?: FollowerUpdateManyWithoutUserNestedInput
    blockedUsers?: blockedUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    avtUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    hashingPassword?: StringFieldUpdateOperationsInput | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    codes?: CodeUncheckedUpdateManyWithoutUserNestedInput
    postLiked?: BehaviorWithPostUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    repComments?: RepCommentUncheckedUpdateManyWithoutSenderNestedInput
    user1?: ConversationUncheckedUpdateManyWithoutUser1NestedInput
    user2?: ConversationUncheckedUpdateManyWithoutUser2NestedInput
    sentMessages?: PrivateMessageUncheckedUpdateManyWithoutSenderNestedInput
    followingUser?: FollowingUncheckedUpdateManyWithoutUserNestedInput
    followers?: FollowerUncheckedUpdateManyWithoutUserNestedInput
    blockedUsers?: blockedUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
  }

  export type CommentUpdateManyWithWhereWithoutPostInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutPostInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: UuidFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    postId?: UuidFilter<"Comment"> | string
    userId?: UuidFilter<"Comment"> | string
    createAt?: DateTimeFilter<"Comment"> | Date | string
    updateAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type BehaviorWithPostUpsertWithWhereUniqueWithoutPostInput = {
    where: BehaviorWithPostWhereUniqueInput
    update: XOR<BehaviorWithPostUpdateWithoutPostInput, BehaviorWithPostUncheckedUpdateWithoutPostInput>
    create: XOR<BehaviorWithPostCreateWithoutPostInput, BehaviorWithPostUncheckedCreateWithoutPostInput>
  }

  export type BehaviorWithPostUpdateWithWhereUniqueWithoutPostInput = {
    where: BehaviorWithPostWhereUniqueInput
    data: XOR<BehaviorWithPostUpdateWithoutPostInput, BehaviorWithPostUncheckedUpdateWithoutPostInput>
  }

  export type BehaviorWithPostUpdateManyWithWhereWithoutPostInput = {
    where: BehaviorWithPostScalarWhereInput
    data: XOR<BehaviorWithPostUpdateManyMutationInput, BehaviorWithPostUncheckedUpdateManyWithoutPostInput>
  }

  export type BehaviorWithPostScalarWhereInput = {
    AND?: BehaviorWithPostScalarWhereInput | BehaviorWithPostScalarWhereInput[]
    OR?: BehaviorWithPostScalarWhereInput[]
    NOT?: BehaviorWithPostScalarWhereInput | BehaviorWithPostScalarWhereInput[]
    id?: UuidFilter<"BehaviorWithPost"> | string
    isLiked?: BoolFilter<"BehaviorWithPost"> | boolean
    userId?: UuidFilter<"BehaviorWithPost"> | string
    postId?: UuidFilter<"BehaviorWithPost"> | string
    createdAt?: DateTimeFilter<"BehaviorWithPost"> | Date | string
    updateAt?: DateTimeFilter<"BehaviorWithPost"> | Date | string
  }

  export type PostCreateWithoutCommentsInput = {
    id?: string
    content: string
    status?: $Enums.StatusPost
    urlImgs?: PostCreateurlImgsInput | string[]
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    user: UserCreateNestedOneWithoutPostsInput
    userLiked?: BehaviorWithPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutCommentsInput = {
    id?: string
    content: string
    status?: $Enums.StatusPost
    urlImgs?: PostCreateurlImgsInput | string[]
    userId: string
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    userLiked?: BehaviorWithPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutCommentsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    name?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    isActive?: boolean
    userName: string
    avtUrl?: string | null
    email: string
    hashingPassword: string
    lastSeen?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    codes?: CodeCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    postLiked?: BehaviorWithPostCreateNestedManyWithoutUserInput
    repComments?: RepCommentCreateNestedManyWithoutSenderInput
    user1?: ConversationCreateNestedManyWithoutUser1Input
    user2?: ConversationCreateNestedManyWithoutUser2Input
    sentMessages?: PrivateMessageCreateNestedManyWithoutSenderInput
    followingUser?: FollowingCreateNestedManyWithoutUserInput
    followers?: FollowerCreateNestedManyWithoutUserInput
    blockedUsers?: blockedUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    name?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    isActive?: boolean
    userName: string
    avtUrl?: string | null
    email: string
    hashingPassword: string
    lastSeen?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    codes?: CodeUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postLiked?: BehaviorWithPostUncheckedCreateNestedManyWithoutUserInput
    repComments?: RepCommentUncheckedCreateNestedManyWithoutSenderInput
    user1?: ConversationUncheckedCreateNestedManyWithoutUser1Input
    user2?: ConversationUncheckedCreateNestedManyWithoutUser2Input
    sentMessages?: PrivateMessageUncheckedCreateNestedManyWithoutSenderInput
    followingUser?: FollowingUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowerUncheckedCreateNestedManyWithoutUserInput
    blockedUsers?: blockedUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type RepCommentCreateWithoutCommentInput = {
    id?: string
    content: string
    createAt?: Date | string
    updateAt?: Date | string
    sender: UserCreateNestedOneWithoutRepCommentsInput
  }

  export type RepCommentUncheckedCreateWithoutCommentInput = {
    id?: string
    content: string
    createAt?: Date | string
    updateAt?: Date | string
    senderID: string
  }

  export type RepCommentCreateOrConnectWithoutCommentInput = {
    where: RepCommentWhereUniqueInput
    create: XOR<RepCommentCreateWithoutCommentInput, RepCommentUncheckedCreateWithoutCommentInput>
  }

  export type RepCommentCreateManyCommentInputEnvelope = {
    data: RepCommentCreateManyCommentInput | RepCommentCreateManyCommentInput[]
    skipDuplicates?: boolean
  }

  export type PostUpsertWithoutCommentsInput = {
    update: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutCommentsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type PostUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPostFieldUpdateOperationsInput | $Enums.StatusPost
    urlImgs?: PostUpdateurlImgsInput | string[]
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    userLiked?: BehaviorWithPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPostFieldUpdateOperationsInput | $Enums.StatusPost
    urlImgs?: PostUpdateurlImgsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userLiked?: BehaviorWithPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    avtUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    hashingPassword?: StringFieldUpdateOperationsInput | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    codes?: CodeUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    postLiked?: BehaviorWithPostUpdateManyWithoutUserNestedInput
    repComments?: RepCommentUpdateManyWithoutSenderNestedInput
    user1?: ConversationUpdateManyWithoutUser1NestedInput
    user2?: ConversationUpdateManyWithoutUser2NestedInput
    sentMessages?: PrivateMessageUpdateManyWithoutSenderNestedInput
    followingUser?: FollowingUpdateManyWithoutUserNestedInput
    followers?: FollowerUpdateManyWithoutUserNestedInput
    blockedUsers?: blockedUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    avtUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    hashingPassword?: StringFieldUpdateOperationsInput | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    codes?: CodeUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    postLiked?: BehaviorWithPostUncheckedUpdateManyWithoutUserNestedInput
    repComments?: RepCommentUncheckedUpdateManyWithoutSenderNestedInput
    user1?: ConversationUncheckedUpdateManyWithoutUser1NestedInput
    user2?: ConversationUncheckedUpdateManyWithoutUser2NestedInput
    sentMessages?: PrivateMessageUncheckedUpdateManyWithoutSenderNestedInput
    followingUser?: FollowingUncheckedUpdateManyWithoutUserNestedInput
    followers?: FollowerUncheckedUpdateManyWithoutUserNestedInput
    blockedUsers?: blockedUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RepCommentUpsertWithWhereUniqueWithoutCommentInput = {
    where: RepCommentWhereUniqueInput
    update: XOR<RepCommentUpdateWithoutCommentInput, RepCommentUncheckedUpdateWithoutCommentInput>
    create: XOR<RepCommentCreateWithoutCommentInput, RepCommentUncheckedCreateWithoutCommentInput>
  }

  export type RepCommentUpdateWithWhereUniqueWithoutCommentInput = {
    where: RepCommentWhereUniqueInput
    data: XOR<RepCommentUpdateWithoutCommentInput, RepCommentUncheckedUpdateWithoutCommentInput>
  }

  export type RepCommentUpdateManyWithWhereWithoutCommentInput = {
    where: RepCommentScalarWhereInput
    data: XOR<RepCommentUpdateManyMutationInput, RepCommentUncheckedUpdateManyWithoutCommentInput>
  }

  export type RepCommentScalarWhereInput = {
    AND?: RepCommentScalarWhereInput | RepCommentScalarWhereInput[]
    OR?: RepCommentScalarWhereInput[]
    NOT?: RepCommentScalarWhereInput | RepCommentScalarWhereInput[]
    id?: UuidFilter<"RepComment"> | string
    content?: StringFilter<"RepComment"> | string
    createAt?: DateTimeFilter<"RepComment"> | Date | string
    updateAt?: DateTimeFilter<"RepComment"> | Date | string
    senderID?: UuidFilter<"RepComment"> | string
    commentId?: UuidFilter<"RepComment"> | string
  }

  export type UserCreateWithoutRepCommentsInput = {
    id?: string
    name?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    isActive?: boolean
    userName: string
    avtUrl?: string | null
    email: string
    hashingPassword: string
    lastSeen?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    codes?: CodeCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    postLiked?: BehaviorWithPostCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    user1?: ConversationCreateNestedManyWithoutUser1Input
    user2?: ConversationCreateNestedManyWithoutUser2Input
    sentMessages?: PrivateMessageCreateNestedManyWithoutSenderInput
    followingUser?: FollowingCreateNestedManyWithoutUserInput
    followers?: FollowerCreateNestedManyWithoutUserInput
    blockedUsers?: blockedUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRepCommentsInput = {
    id?: string
    name?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    isActive?: boolean
    userName: string
    avtUrl?: string | null
    email: string
    hashingPassword: string
    lastSeen?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    codes?: CodeUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postLiked?: BehaviorWithPostUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    user1?: ConversationUncheckedCreateNestedManyWithoutUser1Input
    user2?: ConversationUncheckedCreateNestedManyWithoutUser2Input
    sentMessages?: PrivateMessageUncheckedCreateNestedManyWithoutSenderInput
    followingUser?: FollowingUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowerUncheckedCreateNestedManyWithoutUserInput
    blockedUsers?: blockedUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRepCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRepCommentsInput, UserUncheckedCreateWithoutRepCommentsInput>
  }

  export type CommentCreateWithoutRepCommentsInput = {
    id?: string
    content: string
    createAt?: Date | string
    updateAt?: Date | string
    post: PostCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutRepCommentsInput = {
    id?: string
    content: string
    postId: string
    userId: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutRepCommentsInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutRepCommentsInput, CommentUncheckedCreateWithoutRepCommentsInput>
  }

  export type UserUpsertWithoutRepCommentsInput = {
    update: XOR<UserUpdateWithoutRepCommentsInput, UserUncheckedUpdateWithoutRepCommentsInput>
    create: XOR<UserCreateWithoutRepCommentsInput, UserUncheckedCreateWithoutRepCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRepCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRepCommentsInput, UserUncheckedUpdateWithoutRepCommentsInput>
  }

  export type UserUpdateWithoutRepCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    avtUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    hashingPassword?: StringFieldUpdateOperationsInput | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    codes?: CodeUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    postLiked?: BehaviorWithPostUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    user1?: ConversationUpdateManyWithoutUser1NestedInput
    user2?: ConversationUpdateManyWithoutUser2NestedInput
    sentMessages?: PrivateMessageUpdateManyWithoutSenderNestedInput
    followingUser?: FollowingUpdateManyWithoutUserNestedInput
    followers?: FollowerUpdateManyWithoutUserNestedInput
    blockedUsers?: blockedUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRepCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    avtUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    hashingPassword?: StringFieldUpdateOperationsInput | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    codes?: CodeUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    postLiked?: BehaviorWithPostUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    user1?: ConversationUncheckedUpdateManyWithoutUser1NestedInput
    user2?: ConversationUncheckedUpdateManyWithoutUser2NestedInput
    sentMessages?: PrivateMessageUncheckedUpdateManyWithoutSenderNestedInput
    followingUser?: FollowingUncheckedUpdateManyWithoutUserNestedInput
    followers?: FollowerUncheckedUpdateManyWithoutUserNestedInput
    blockedUsers?: blockedUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentUpsertWithoutRepCommentsInput = {
    update: XOR<CommentUpdateWithoutRepCommentsInput, CommentUncheckedUpdateWithoutRepCommentsInput>
    create: XOR<CommentCreateWithoutRepCommentsInput, CommentUncheckedCreateWithoutRepCommentsInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutRepCommentsInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutRepCommentsInput, CommentUncheckedUpdateWithoutRepCommentsInput>
  }

  export type CommentUpdateWithoutRepCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutRepCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutPostLikedInput = {
    id?: string
    name?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    isActive?: boolean
    userName: string
    avtUrl?: string | null
    email: string
    hashingPassword: string
    lastSeen?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    codes?: CodeCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    repComments?: RepCommentCreateNestedManyWithoutSenderInput
    user1?: ConversationCreateNestedManyWithoutUser1Input
    user2?: ConversationCreateNestedManyWithoutUser2Input
    sentMessages?: PrivateMessageCreateNestedManyWithoutSenderInput
    followingUser?: FollowingCreateNestedManyWithoutUserInput
    followers?: FollowerCreateNestedManyWithoutUserInput
    blockedUsers?: blockedUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostLikedInput = {
    id?: string
    name?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    isActive?: boolean
    userName: string
    avtUrl?: string | null
    email: string
    hashingPassword: string
    lastSeen?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    codes?: CodeUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    repComments?: RepCommentUncheckedCreateNestedManyWithoutSenderInput
    user1?: ConversationUncheckedCreateNestedManyWithoutUser1Input
    user2?: ConversationUncheckedCreateNestedManyWithoutUser2Input
    sentMessages?: PrivateMessageUncheckedCreateNestedManyWithoutSenderInput
    followingUser?: FollowingUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowerUncheckedCreateNestedManyWithoutUserInput
    blockedUsers?: blockedUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostLikedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostLikedInput, UserUncheckedCreateWithoutPostLikedInput>
  }

  export type PostCreateWithoutUserLikedInput = {
    id?: string
    content: string
    status?: $Enums.StatusPost
    urlImgs?: PostCreateurlImgsInput | string[]
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    user: UserCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutUserLikedInput = {
    id?: string
    content: string
    status?: $Enums.StatusPost
    urlImgs?: PostCreateurlImgsInput | string[]
    userId: string
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutUserLikedInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserLikedInput, PostUncheckedCreateWithoutUserLikedInput>
  }

  export type UserUpsertWithoutPostLikedInput = {
    update: XOR<UserUpdateWithoutPostLikedInput, UserUncheckedUpdateWithoutPostLikedInput>
    create: XOR<UserCreateWithoutPostLikedInput, UserUncheckedCreateWithoutPostLikedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostLikedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostLikedInput, UserUncheckedUpdateWithoutPostLikedInput>
  }

  export type UserUpdateWithoutPostLikedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    avtUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    hashingPassword?: StringFieldUpdateOperationsInput | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    codes?: CodeUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    repComments?: RepCommentUpdateManyWithoutSenderNestedInput
    user1?: ConversationUpdateManyWithoutUser1NestedInput
    user2?: ConversationUpdateManyWithoutUser2NestedInput
    sentMessages?: PrivateMessageUpdateManyWithoutSenderNestedInput
    followingUser?: FollowingUpdateManyWithoutUserNestedInput
    followers?: FollowerUpdateManyWithoutUserNestedInput
    blockedUsers?: blockedUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostLikedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    avtUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    hashingPassword?: StringFieldUpdateOperationsInput | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    codes?: CodeUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    repComments?: RepCommentUncheckedUpdateManyWithoutSenderNestedInput
    user1?: ConversationUncheckedUpdateManyWithoutUser1NestedInput
    user2?: ConversationUncheckedUpdateManyWithoutUser2NestedInput
    sentMessages?: PrivateMessageUncheckedUpdateManyWithoutSenderNestedInput
    followingUser?: FollowingUncheckedUpdateManyWithoutUserNestedInput
    followers?: FollowerUncheckedUpdateManyWithoutUserNestedInput
    blockedUsers?: blockedUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostUpsertWithoutUserLikedInput = {
    update: XOR<PostUpdateWithoutUserLikedInput, PostUncheckedUpdateWithoutUserLikedInput>
    create: XOR<PostCreateWithoutUserLikedInput, PostUncheckedCreateWithoutUserLikedInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutUserLikedInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutUserLikedInput, PostUncheckedUpdateWithoutUserLikedInput>
  }

  export type PostUpdateWithoutUserLikedInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPostFieldUpdateOperationsInput | $Enums.StatusPost
    urlImgs?: PostUpdateurlImgsInput | string[]
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutUserLikedInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPostFieldUpdateOperationsInput | $Enums.StatusPost
    urlImgs?: PostUpdateurlImgsInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserCreateWithoutBlockedUsersInput = {
    id?: string
    name?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    isActive?: boolean
    userName: string
    avtUrl?: string | null
    email: string
    hashingPassword: string
    lastSeen?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    codes?: CodeCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    postLiked?: BehaviorWithPostCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    repComments?: RepCommentCreateNestedManyWithoutSenderInput
    user1?: ConversationCreateNestedManyWithoutUser1Input
    user2?: ConversationCreateNestedManyWithoutUser2Input
    sentMessages?: PrivateMessageCreateNestedManyWithoutSenderInput
    followingUser?: FollowingCreateNestedManyWithoutUserInput
    followers?: FollowerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBlockedUsersInput = {
    id?: string
    name?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    isActive?: boolean
    userName: string
    avtUrl?: string | null
    email: string
    hashingPassword: string
    lastSeen?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    codes?: CodeUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postLiked?: BehaviorWithPostUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    repComments?: RepCommentUncheckedCreateNestedManyWithoutSenderInput
    user1?: ConversationUncheckedCreateNestedManyWithoutUser1Input
    user2?: ConversationUncheckedCreateNestedManyWithoutUser2Input
    sentMessages?: PrivateMessageUncheckedCreateNestedManyWithoutSenderInput
    followingUser?: FollowingUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBlockedUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlockedUsersInput, UserUncheckedCreateWithoutBlockedUsersInput>
  }

  export type UserUpsertWithoutBlockedUsersInput = {
    update: XOR<UserUpdateWithoutBlockedUsersInput, UserUncheckedUpdateWithoutBlockedUsersInput>
    create: XOR<UserCreateWithoutBlockedUsersInput, UserUncheckedCreateWithoutBlockedUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlockedUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlockedUsersInput, UserUncheckedUpdateWithoutBlockedUsersInput>
  }

  export type UserUpdateWithoutBlockedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    avtUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    hashingPassword?: StringFieldUpdateOperationsInput | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    codes?: CodeUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    postLiked?: BehaviorWithPostUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    repComments?: RepCommentUpdateManyWithoutSenderNestedInput
    user1?: ConversationUpdateManyWithoutUser1NestedInput
    user2?: ConversationUpdateManyWithoutUser2NestedInput
    sentMessages?: PrivateMessageUpdateManyWithoutSenderNestedInput
    followingUser?: FollowingUpdateManyWithoutUserNestedInput
    followers?: FollowerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBlockedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    avtUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    hashingPassword?: StringFieldUpdateOperationsInput | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    codes?: CodeUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    postLiked?: BehaviorWithPostUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    repComments?: RepCommentUncheckedUpdateManyWithoutSenderNestedInput
    user1?: ConversationUncheckedUpdateManyWithoutUser1NestedInput
    user2?: ConversationUncheckedUpdateManyWithoutUser2NestedInput
    sentMessages?: PrivateMessageUncheckedUpdateManyWithoutSenderNestedInput
    followingUser?: FollowingUncheckedUpdateManyWithoutUserNestedInput
    followers?: FollowerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    hashingRefreshToken?: string | null
    userIp?: string | null
    userAgent?: string | null
    loginAt?: Date | string | null
    logout?: Date | string | null
    createAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    hashingRefreshToken?: string | null
    userIp?: string | null
    userAgent?: string | null
    loginAt?: Date | string | null
    logout?: Date | string | null
    createAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CodeCreateWithoutUserInput = {
    id?: string
    tokens?: string | null
    typeOfCode: $Enums.TypeOfCode
  }

  export type CodeUncheckedCreateWithoutUserInput = {
    id?: string
    tokens?: string | null
    typeOfCode: $Enums.TypeOfCode
  }

  export type CodeCreateOrConnectWithoutUserInput = {
    where: CodeWhereUniqueInput
    create: XOR<CodeCreateWithoutUserInput, CodeUncheckedCreateWithoutUserInput>
  }

  export type CodeCreateManyUserInputEnvelope = {
    data: CodeCreateManyUserInput | CodeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutUserInput = {
    id?: string
    content: string
    status?: $Enums.StatusPost
    urlImgs?: PostCreateurlImgsInput | string[]
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    comments?: CommentCreateNestedManyWithoutPostInput
    userLiked?: BehaviorWithPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    status?: $Enums.StatusPost
    urlImgs?: PostCreateurlImgsInput | string[]
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    userLiked?: BehaviorWithPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: PostCreateManyUserInput | PostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BehaviorWithPostCreateWithoutUserInput = {
    id?: string
    isLiked?: boolean
    createdAt?: Date | string
    updateAt?: Date | string
    post: PostCreateNestedOneWithoutUserLikedInput
  }

  export type BehaviorWithPostUncheckedCreateWithoutUserInput = {
    id?: string
    isLiked?: boolean
    postId: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type BehaviorWithPostCreateOrConnectWithoutUserInput = {
    where: BehaviorWithPostWhereUniqueInput
    create: XOR<BehaviorWithPostCreateWithoutUserInput, BehaviorWithPostUncheckedCreateWithoutUserInput>
  }

  export type BehaviorWithPostCreateManyUserInputEnvelope = {
    data: BehaviorWithPostCreateManyUserInput | BehaviorWithPostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    id?: string
    content: string
    createAt?: Date | string
    updateAt?: Date | string
    post: PostCreateNestedOneWithoutCommentsInput
    repComments?: RepCommentCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    postId: string
    createAt?: Date | string
    updateAt?: Date | string
    repComments?: RepCommentUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RepCommentCreateWithoutSenderInput = {
    id?: string
    content: string
    createAt?: Date | string
    updateAt?: Date | string
    comment: CommentCreateNestedOneWithoutRepCommentsInput
  }

  export type RepCommentUncheckedCreateWithoutSenderInput = {
    id?: string
    content: string
    createAt?: Date | string
    updateAt?: Date | string
    commentId: string
  }

  export type RepCommentCreateOrConnectWithoutSenderInput = {
    where: RepCommentWhereUniqueInput
    create: XOR<RepCommentCreateWithoutSenderInput, RepCommentUncheckedCreateWithoutSenderInput>
  }

  export type RepCommentCreateManySenderInputEnvelope = {
    data: RepCommentCreateManySenderInput | RepCommentCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type ConversationCreateWithoutUser1Input = {
    id?: string
    lastMessage?: string | null
    lastMessageAt?: Date | string | null
    user1LastReadIndex?: number
    user2LastReadIndex?: number
    socketId: string
    totalMessage?: number
    createdAt?: Date | string
    updateAt?: Date | string
    user2: UserCreateNestedOneWithoutUser2Input
    privateMessage?: PrivateMessageCreateNestedManyWithoutChatInput
  }

  export type ConversationUncheckedCreateWithoutUser1Input = {
    id?: string
    friendId: string
    lastMessage?: string | null
    lastMessageAt?: Date | string | null
    user1LastReadIndex?: number
    user2LastReadIndex?: number
    socketId: string
    totalMessage?: number
    createdAt?: Date | string
    updateAt?: Date | string
    privateMessage?: PrivateMessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ConversationCreateOrConnectWithoutUser1Input = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutUser1Input, ConversationUncheckedCreateWithoutUser1Input>
  }

  export type ConversationCreateManyUser1InputEnvelope = {
    data: ConversationCreateManyUser1Input | ConversationCreateManyUser1Input[]
    skipDuplicates?: boolean
  }

  export type ConversationCreateWithoutUser2Input = {
    id?: string
    lastMessage?: string | null
    lastMessageAt?: Date | string | null
    user1LastReadIndex?: number
    user2LastReadIndex?: number
    socketId: string
    totalMessage?: number
    createdAt?: Date | string
    updateAt?: Date | string
    user1: UserCreateNestedOneWithoutUser1Input
    privateMessage?: PrivateMessageCreateNestedManyWithoutChatInput
  }

  export type ConversationUncheckedCreateWithoutUser2Input = {
    id?: string
    creatorId: string
    lastMessage?: string | null
    lastMessageAt?: Date | string | null
    user1LastReadIndex?: number
    user2LastReadIndex?: number
    socketId: string
    totalMessage?: number
    createdAt?: Date | string
    updateAt?: Date | string
    privateMessage?: PrivateMessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ConversationCreateOrConnectWithoutUser2Input = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutUser2Input, ConversationUncheckedCreateWithoutUser2Input>
  }

  export type ConversationCreateManyUser2InputEnvelope = {
    data: ConversationCreateManyUser2Input | ConversationCreateManyUser2Input[]
    skipDuplicates?: boolean
  }

  export type PrivateMessageCreateWithoutSenderInput = {
    id?: string
    content: string
    receiverId: string
    messageIndex: number
    createdAt?: Date | string
    updateAt?: Date | string
    replyTo?: PrivateMessageCreateNestedOneWithoutRepliesInput
    replies?: PrivateMessageCreateNestedManyWithoutReplyToInput
    chat: ConversationCreateNestedOneWithoutPrivateMessageInput
  }

  export type PrivateMessageUncheckedCreateWithoutSenderInput = {
    id?: string
    content: string
    conversationId: string
    receiverId: string
    messageIndex: number
    replyToId?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
    replies?: PrivateMessageUncheckedCreateNestedManyWithoutReplyToInput
  }

  export type PrivateMessageCreateOrConnectWithoutSenderInput = {
    where: PrivateMessageWhereUniqueInput
    create: XOR<PrivateMessageCreateWithoutSenderInput, PrivateMessageUncheckedCreateWithoutSenderInput>
  }

  export type PrivateMessageCreateManySenderInputEnvelope = {
    data: PrivateMessageCreateManySenderInput | PrivateMessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type FollowingCreateWithoutUserInput = {
    id?: string
    addressUserId: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type FollowingUncheckedCreateWithoutUserInput = {
    id?: string
    addressUserId: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type FollowingCreateOrConnectWithoutUserInput = {
    where: FollowingWhereUniqueInput
    create: XOR<FollowingCreateWithoutUserInput, FollowingUncheckedCreateWithoutUserInput>
  }

  export type FollowingCreateManyUserInputEnvelope = {
    data: FollowingCreateManyUserInput | FollowingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FollowerCreateWithoutUserInput = {
    id?: string
    followerId: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type FollowerUncheckedCreateWithoutUserInput = {
    id?: string
    followerId: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type FollowerCreateOrConnectWithoutUserInput = {
    where: FollowerWhereUniqueInput
    create: XOR<FollowerCreateWithoutUserInput, FollowerUncheckedCreateWithoutUserInput>
  }

  export type FollowerCreateManyUserInputEnvelope = {
    data: FollowerCreateManyUserInput | FollowerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type blockedUserCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updateAT?: Date | string
  }

  export type blockedUserUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updateAT?: Date | string
  }

  export type blockedUserCreateOrConnectWithoutUserInput = {
    where: blockedUserWhereUniqueInput
    create: XOR<blockedUserCreateWithoutUserInput, blockedUserUncheckedCreateWithoutUserInput>
  }

  export type blockedUserCreateManyUserInputEnvelope = {
    data: blockedUserCreateManyUserInput | blockedUserCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: UuidFilter<"Session"> | string
    hashingRefreshToken?: StringNullableFilter<"Session"> | string | null
    userId?: UuidFilter<"Session"> | string
    userIp?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    loginAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    logout?: DateTimeNullableFilter<"Session"> | Date | string | null
    createAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type CodeUpsertWithWhereUniqueWithoutUserInput = {
    where: CodeWhereUniqueInput
    update: XOR<CodeUpdateWithoutUserInput, CodeUncheckedUpdateWithoutUserInput>
    create: XOR<CodeCreateWithoutUserInput, CodeUncheckedCreateWithoutUserInput>
  }

  export type CodeUpdateWithWhereUniqueWithoutUserInput = {
    where: CodeWhereUniqueInput
    data: XOR<CodeUpdateWithoutUserInput, CodeUncheckedUpdateWithoutUserInput>
  }

  export type CodeUpdateManyWithWhereWithoutUserInput = {
    where: CodeScalarWhereInput
    data: XOR<CodeUpdateManyMutationInput, CodeUncheckedUpdateManyWithoutUserInput>
  }

  export type CodeScalarWhereInput = {
    AND?: CodeScalarWhereInput | CodeScalarWhereInput[]
    OR?: CodeScalarWhereInput[]
    NOT?: CodeScalarWhereInput | CodeScalarWhereInput[]
    id?: UuidFilter<"Code"> | string
    tokens?: StringNullableFilter<"Code"> | string | null
    typeOfCode?: EnumTypeOfCodeFilter<"Code"> | $Enums.TypeOfCode
    userId?: UuidFilter<"Code"> | string
  }

  export type PostUpsertWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostUpdateWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithWhereWithoutUserInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutUserInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: UuidFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    status?: EnumStatusPostFilter<"Post"> | $Enums.StatusPost
    urlImgs?: StringNullableListFilter<"Post">
    userId?: UuidFilter<"Post"> | string
    createAt?: DateTimeFilter<"Post"> | Date | string
    updateAt?: DateTimeFilter<"Post"> | Date | string
    deleteAt?: DateTimeNullableFilter<"Post"> | Date | string | null
  }

  export type BehaviorWithPostUpsertWithWhereUniqueWithoutUserInput = {
    where: BehaviorWithPostWhereUniqueInput
    update: XOR<BehaviorWithPostUpdateWithoutUserInput, BehaviorWithPostUncheckedUpdateWithoutUserInput>
    create: XOR<BehaviorWithPostCreateWithoutUserInput, BehaviorWithPostUncheckedCreateWithoutUserInput>
  }

  export type BehaviorWithPostUpdateWithWhereUniqueWithoutUserInput = {
    where: BehaviorWithPostWhereUniqueInput
    data: XOR<BehaviorWithPostUpdateWithoutUserInput, BehaviorWithPostUncheckedUpdateWithoutUserInput>
  }

  export type BehaviorWithPostUpdateManyWithWhereWithoutUserInput = {
    where: BehaviorWithPostScalarWhereInput
    data: XOR<BehaviorWithPostUpdateManyMutationInput, BehaviorWithPostUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type RepCommentUpsertWithWhereUniqueWithoutSenderInput = {
    where: RepCommentWhereUniqueInput
    update: XOR<RepCommentUpdateWithoutSenderInput, RepCommentUncheckedUpdateWithoutSenderInput>
    create: XOR<RepCommentCreateWithoutSenderInput, RepCommentUncheckedCreateWithoutSenderInput>
  }

  export type RepCommentUpdateWithWhereUniqueWithoutSenderInput = {
    where: RepCommentWhereUniqueInput
    data: XOR<RepCommentUpdateWithoutSenderInput, RepCommentUncheckedUpdateWithoutSenderInput>
  }

  export type RepCommentUpdateManyWithWhereWithoutSenderInput = {
    where: RepCommentScalarWhereInput
    data: XOR<RepCommentUpdateManyMutationInput, RepCommentUncheckedUpdateManyWithoutSenderInput>
  }

  export type ConversationUpsertWithWhereUniqueWithoutUser1Input = {
    where: ConversationWhereUniqueInput
    update: XOR<ConversationUpdateWithoutUser1Input, ConversationUncheckedUpdateWithoutUser1Input>
    create: XOR<ConversationCreateWithoutUser1Input, ConversationUncheckedCreateWithoutUser1Input>
  }

  export type ConversationUpdateWithWhereUniqueWithoutUser1Input = {
    where: ConversationWhereUniqueInput
    data: XOR<ConversationUpdateWithoutUser1Input, ConversationUncheckedUpdateWithoutUser1Input>
  }

  export type ConversationUpdateManyWithWhereWithoutUser1Input = {
    where: ConversationScalarWhereInput
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyWithoutUser1Input>
  }

  export type ConversationScalarWhereInput = {
    AND?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
    OR?: ConversationScalarWhereInput[]
    NOT?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
    id?: UuidFilter<"Conversation"> | string
    creatorId?: UuidFilter<"Conversation"> | string
    friendId?: UuidFilter<"Conversation"> | string
    lastMessage?: StringNullableFilter<"Conversation"> | string | null
    lastMessageAt?: DateTimeNullableFilter<"Conversation"> | Date | string | null
    user1LastReadIndex?: IntFilter<"Conversation"> | number
    user2LastReadIndex?: IntFilter<"Conversation"> | number
    socketId?: StringFilter<"Conversation"> | string
    totalMessage?: IntFilter<"Conversation"> | number
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    updateAt?: DateTimeFilter<"Conversation"> | Date | string
  }

  export type ConversationUpsertWithWhereUniqueWithoutUser2Input = {
    where: ConversationWhereUniqueInput
    update: XOR<ConversationUpdateWithoutUser2Input, ConversationUncheckedUpdateWithoutUser2Input>
    create: XOR<ConversationCreateWithoutUser2Input, ConversationUncheckedCreateWithoutUser2Input>
  }

  export type ConversationUpdateWithWhereUniqueWithoutUser2Input = {
    where: ConversationWhereUniqueInput
    data: XOR<ConversationUpdateWithoutUser2Input, ConversationUncheckedUpdateWithoutUser2Input>
  }

  export type ConversationUpdateManyWithWhereWithoutUser2Input = {
    where: ConversationScalarWhereInput
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyWithoutUser2Input>
  }

  export type PrivateMessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: PrivateMessageWhereUniqueInput
    update: XOR<PrivateMessageUpdateWithoutSenderInput, PrivateMessageUncheckedUpdateWithoutSenderInput>
    create: XOR<PrivateMessageCreateWithoutSenderInput, PrivateMessageUncheckedCreateWithoutSenderInput>
  }

  export type PrivateMessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: PrivateMessageWhereUniqueInput
    data: XOR<PrivateMessageUpdateWithoutSenderInput, PrivateMessageUncheckedUpdateWithoutSenderInput>
  }

  export type PrivateMessageUpdateManyWithWhereWithoutSenderInput = {
    where: PrivateMessageScalarWhereInput
    data: XOR<PrivateMessageUpdateManyMutationInput, PrivateMessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type FollowingUpsertWithWhereUniqueWithoutUserInput = {
    where: FollowingWhereUniqueInput
    update: XOR<FollowingUpdateWithoutUserInput, FollowingUncheckedUpdateWithoutUserInput>
    create: XOR<FollowingCreateWithoutUserInput, FollowingUncheckedCreateWithoutUserInput>
  }

  export type FollowingUpdateWithWhereUniqueWithoutUserInput = {
    where: FollowingWhereUniqueInput
    data: XOR<FollowingUpdateWithoutUserInput, FollowingUncheckedUpdateWithoutUserInput>
  }

  export type FollowingUpdateManyWithWhereWithoutUserInput = {
    where: FollowingScalarWhereInput
    data: XOR<FollowingUpdateManyMutationInput, FollowingUncheckedUpdateManyWithoutUserInput>
  }

  export type FollowingScalarWhereInput = {
    AND?: FollowingScalarWhereInput | FollowingScalarWhereInput[]
    OR?: FollowingScalarWhereInput[]
    NOT?: FollowingScalarWhereInput | FollowingScalarWhereInput[]
    id?: UuidFilter<"Following"> | string
    userId?: UuidFilter<"Following"> | string
    addressUserId?: UuidFilter<"Following"> | string
    createdAt?: DateTimeFilter<"Following"> | Date | string
    updateAt?: DateTimeFilter<"Following"> | Date | string
  }

  export type FollowerUpsertWithWhereUniqueWithoutUserInput = {
    where: FollowerWhereUniqueInput
    update: XOR<FollowerUpdateWithoutUserInput, FollowerUncheckedUpdateWithoutUserInput>
    create: XOR<FollowerCreateWithoutUserInput, FollowerUncheckedCreateWithoutUserInput>
  }

  export type FollowerUpdateWithWhereUniqueWithoutUserInput = {
    where: FollowerWhereUniqueInput
    data: XOR<FollowerUpdateWithoutUserInput, FollowerUncheckedUpdateWithoutUserInput>
  }

  export type FollowerUpdateManyWithWhereWithoutUserInput = {
    where: FollowerScalarWhereInput
    data: XOR<FollowerUpdateManyMutationInput, FollowerUncheckedUpdateManyWithoutUserInput>
  }

  export type FollowerScalarWhereInput = {
    AND?: FollowerScalarWhereInput | FollowerScalarWhereInput[]
    OR?: FollowerScalarWhereInput[]
    NOT?: FollowerScalarWhereInput | FollowerScalarWhereInput[]
    id?: UuidFilter<"Follower"> | string
    userId?: UuidFilter<"Follower"> | string
    followerId?: UuidFilter<"Follower"> | string
    createdAt?: DateTimeFilter<"Follower"> | Date | string
    updateAt?: DateTimeFilter<"Follower"> | Date | string
  }

  export type blockedUserUpsertWithWhereUniqueWithoutUserInput = {
    where: blockedUserWhereUniqueInput
    update: XOR<blockedUserUpdateWithoutUserInput, blockedUserUncheckedUpdateWithoutUserInput>
    create: XOR<blockedUserCreateWithoutUserInput, blockedUserUncheckedCreateWithoutUserInput>
  }

  export type blockedUserUpdateWithWhereUniqueWithoutUserInput = {
    where: blockedUserWhereUniqueInput
    data: XOR<blockedUserUpdateWithoutUserInput, blockedUserUncheckedUpdateWithoutUserInput>
  }

  export type blockedUserUpdateManyWithWhereWithoutUserInput = {
    where: blockedUserScalarWhereInput
    data: XOR<blockedUserUpdateManyMutationInput, blockedUserUncheckedUpdateManyWithoutUserInput>
  }

  export type blockedUserScalarWhereInput = {
    AND?: blockedUserScalarWhereInput | blockedUserScalarWhereInput[]
    OR?: blockedUserScalarWhereInput[]
    NOT?: blockedUserScalarWhereInput | blockedUserScalarWhereInput[]
    id?: UuidFilter<"blockedUser"> | string
    userId?: UuidFilter<"blockedUser"> | string
    createdAt?: DateTimeFilter<"blockedUser"> | Date | string
    updateAT?: DateTimeFilter<"blockedUser"> | Date | string
  }

  export type UserCreateWithoutFollowingUserInput = {
    id?: string
    name?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    isActive?: boolean
    userName: string
    avtUrl?: string | null
    email: string
    hashingPassword: string
    lastSeen?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    codes?: CodeCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    postLiked?: BehaviorWithPostCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    repComments?: RepCommentCreateNestedManyWithoutSenderInput
    user1?: ConversationCreateNestedManyWithoutUser1Input
    user2?: ConversationCreateNestedManyWithoutUser2Input
    sentMessages?: PrivateMessageCreateNestedManyWithoutSenderInput
    followers?: FollowerCreateNestedManyWithoutUserInput
    blockedUsers?: blockedUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFollowingUserInput = {
    id?: string
    name?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    isActive?: boolean
    userName: string
    avtUrl?: string | null
    email: string
    hashingPassword: string
    lastSeen?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    codes?: CodeUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postLiked?: BehaviorWithPostUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    repComments?: RepCommentUncheckedCreateNestedManyWithoutSenderInput
    user1?: ConversationUncheckedCreateNestedManyWithoutUser1Input
    user2?: ConversationUncheckedCreateNestedManyWithoutUser2Input
    sentMessages?: PrivateMessageUncheckedCreateNestedManyWithoutSenderInput
    followers?: FollowerUncheckedCreateNestedManyWithoutUserInput
    blockedUsers?: blockedUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFollowingUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowingUserInput, UserUncheckedCreateWithoutFollowingUserInput>
  }

  export type UserUpsertWithoutFollowingUserInput = {
    update: XOR<UserUpdateWithoutFollowingUserInput, UserUncheckedUpdateWithoutFollowingUserInput>
    create: XOR<UserCreateWithoutFollowingUserInput, UserUncheckedCreateWithoutFollowingUserInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFollowingUserInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFollowingUserInput, UserUncheckedUpdateWithoutFollowingUserInput>
  }

  export type UserUpdateWithoutFollowingUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    avtUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    hashingPassword?: StringFieldUpdateOperationsInput | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    codes?: CodeUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    postLiked?: BehaviorWithPostUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    repComments?: RepCommentUpdateManyWithoutSenderNestedInput
    user1?: ConversationUpdateManyWithoutUser1NestedInput
    user2?: ConversationUpdateManyWithoutUser2NestedInput
    sentMessages?: PrivateMessageUpdateManyWithoutSenderNestedInput
    followers?: FollowerUpdateManyWithoutUserNestedInput
    blockedUsers?: blockedUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFollowingUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    avtUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    hashingPassword?: StringFieldUpdateOperationsInput | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    codes?: CodeUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    postLiked?: BehaviorWithPostUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    repComments?: RepCommentUncheckedUpdateManyWithoutSenderNestedInput
    user1?: ConversationUncheckedUpdateManyWithoutUser1NestedInput
    user2?: ConversationUncheckedUpdateManyWithoutUser2NestedInput
    sentMessages?: PrivateMessageUncheckedUpdateManyWithoutSenderNestedInput
    followers?: FollowerUncheckedUpdateManyWithoutUserNestedInput
    blockedUsers?: blockedUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFollowersInput = {
    id?: string
    name?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    isActive?: boolean
    userName: string
    avtUrl?: string | null
    email: string
    hashingPassword: string
    lastSeen?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    codes?: CodeCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    postLiked?: BehaviorWithPostCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    repComments?: RepCommentCreateNestedManyWithoutSenderInput
    user1?: ConversationCreateNestedManyWithoutUser1Input
    user2?: ConversationCreateNestedManyWithoutUser2Input
    sentMessages?: PrivateMessageCreateNestedManyWithoutSenderInput
    followingUser?: FollowingCreateNestedManyWithoutUserInput
    blockedUsers?: blockedUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFollowersInput = {
    id?: string
    name?: string | null
    gender?: $Enums.Gender | null
    dateOfBirth?: Date | string | null
    isActive?: boolean
    userName: string
    avtUrl?: string | null
    email: string
    hashingPassword: string
    lastSeen?: Date | string | null
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    codes?: CodeUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postLiked?: BehaviorWithPostUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    repComments?: RepCommentUncheckedCreateNestedManyWithoutSenderInput
    user1?: ConversationUncheckedCreateNestedManyWithoutUser1Input
    user2?: ConversationUncheckedCreateNestedManyWithoutUser2Input
    sentMessages?: PrivateMessageUncheckedCreateNestedManyWithoutSenderInput
    followingUser?: FollowingUncheckedCreateNestedManyWithoutUserInput
    blockedUsers?: blockedUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFollowersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
  }

  export type UserUpsertWithoutFollowersInput = {
    update: XOR<UserUpdateWithoutFollowersInput, UserUncheckedUpdateWithoutFollowersInput>
    create: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFollowersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFollowersInput, UserUncheckedUpdateWithoutFollowersInput>
  }

  export type UserUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    avtUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    hashingPassword?: StringFieldUpdateOperationsInput | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    codes?: CodeUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    postLiked?: BehaviorWithPostUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    repComments?: RepCommentUpdateManyWithoutSenderNestedInput
    user1?: ConversationUpdateManyWithoutUser1NestedInput
    user2?: ConversationUpdateManyWithoutUser2NestedInput
    sentMessages?: PrivateMessageUpdateManyWithoutSenderNestedInput
    followingUser?: FollowingUpdateManyWithoutUserNestedInput
    blockedUsers?: blockedUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userName?: StringFieldUpdateOperationsInput | string
    avtUrl?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    hashingPassword?: StringFieldUpdateOperationsInput | string
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    codes?: CodeUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    postLiked?: BehaviorWithPostUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    repComments?: RepCommentUncheckedUpdateManyWithoutSenderNestedInput
    user1?: ConversationUncheckedUpdateManyWithoutUser1NestedInput
    user2?: ConversationUncheckedUpdateManyWithoutUser2NestedInput
    sentMessages?: PrivateMessageUncheckedUpdateManyWithoutSenderNestedInput
    followingUser?: FollowingUncheckedUpdateManyWithoutUserNestedInput
    blockedUsers?: blockedUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PrivateMessageCreateManyChatInput = {
    id?: string
    content: string
    senderId: string
    receiverId: string
    messageIndex: number
    replyToId?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type PrivateMessageUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    messageIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replyTo?: PrivateMessageUpdateOneWithoutRepliesNestedInput
    replies?: PrivateMessageUpdateManyWithoutReplyToNestedInput
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
  }

  export type PrivateMessageUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    messageIndex?: IntFieldUpdateOperationsInput | number
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: PrivateMessageUncheckedUpdateManyWithoutReplyToNestedInput
  }

  export type PrivateMessageUncheckedUpdateManyWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    messageIndex?: IntFieldUpdateOperationsInput | number
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateMessageCreateManyReplyToInput = {
    id?: string
    content: string
    conversationId: string
    senderId: string
    receiverId: string
    messageIndex: number
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type PrivateMessageUpdateWithoutReplyToInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    messageIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: PrivateMessageUpdateManyWithoutReplyToNestedInput
    chat?: ConversationUpdateOneRequiredWithoutPrivateMessageNestedInput
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
  }

  export type PrivateMessageUncheckedUpdateWithoutReplyToInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    messageIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: PrivateMessageUncheckedUpdateManyWithoutReplyToNestedInput
  }

  export type PrivateMessageUncheckedUpdateManyWithoutReplyToInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    messageIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyPostInput = {
    id?: string
    content: string
    userId: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type BehaviorWithPostCreateManyPostInput = {
    id?: string
    isLiked?: boolean
    userId: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type CommentUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    repComments?: RepCommentUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repComments?: RepCommentUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BehaviorWithPostUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    isLiked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostLikedNestedInput
  }

  export type BehaviorWithPostUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    isLiked?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BehaviorWithPostUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    isLiked?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepCommentCreateManyCommentInput = {
    id?: string
    content: string
    createAt?: Date | string
    updateAt?: Date | string
    senderID: string
  }

  export type RepCommentUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutRepCommentsNestedInput
  }

  export type RepCommentUncheckedUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderID?: StringFieldUpdateOperationsInput | string
  }

  export type RepCommentUncheckedUpdateManyWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderID?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    hashingRefreshToken?: string | null
    userIp?: string | null
    userAgent?: string | null
    loginAt?: Date | string | null
    logout?: Date | string | null
    createAt?: Date | string
  }

  export type CodeCreateManyUserInput = {
    id?: string
    tokens?: string | null
    typeOfCode: $Enums.TypeOfCode
  }

  export type PostCreateManyUserInput = {
    id?: string
    content: string
    status?: $Enums.StatusPost
    urlImgs?: PostCreateurlImgsInput | string[]
    createAt?: Date | string
    updateAt?: Date | string
    deleteAt?: Date | string | null
  }

  export type BehaviorWithPostCreateManyUserInput = {
    id?: string
    isLiked?: boolean
    postId: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type CommentCreateManyUserInput = {
    id?: string
    content: string
    postId: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type RepCommentCreateManySenderInput = {
    id?: string
    content: string
    createAt?: Date | string
    updateAt?: Date | string
    commentId: string
  }

  export type ConversationCreateManyUser1Input = {
    id?: string
    friendId: string
    lastMessage?: string | null
    lastMessageAt?: Date | string | null
    user1LastReadIndex?: number
    user2LastReadIndex?: number
    socketId: string
    totalMessage?: number
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type ConversationCreateManyUser2Input = {
    id?: string
    creatorId: string
    lastMessage?: string | null
    lastMessageAt?: Date | string | null
    user1LastReadIndex?: number
    user2LastReadIndex?: number
    socketId: string
    totalMessage?: number
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type PrivateMessageCreateManySenderInput = {
    id?: string
    content: string
    conversationId: string
    receiverId: string
    messageIndex: number
    replyToId?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type FollowingCreateManyUserInput = {
    id?: string
    addressUserId: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type FollowerCreateManyUserInput = {
    id?: string
    followerId: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type blockedUserCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updateAT?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    hashingRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    userIp?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    loginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    hashingRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    userIp?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    loginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    hashingRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    userIp?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    loginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    logout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokens?: NullableStringFieldUpdateOperationsInput | string | null
    typeOfCode?: EnumTypeOfCodeFieldUpdateOperationsInput | $Enums.TypeOfCode
  }

  export type CodeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokens?: NullableStringFieldUpdateOperationsInput | string | null
    typeOfCode?: EnumTypeOfCodeFieldUpdateOperationsInput | $Enums.TypeOfCode
  }

  export type CodeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokens?: NullableStringFieldUpdateOperationsInput | string | null
    typeOfCode?: EnumTypeOfCodeFieldUpdateOperationsInput | $Enums.TypeOfCode
  }

  export type PostUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPostFieldUpdateOperationsInput | $Enums.StatusPost
    urlImgs?: PostUpdateurlImgsInput | string[]
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: CommentUpdateManyWithoutPostNestedInput
    userLiked?: BehaviorWithPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPostFieldUpdateOperationsInput | $Enums.StatusPost
    urlImgs?: PostUpdateurlImgsInput | string[]
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    userLiked?: BehaviorWithPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPostFieldUpdateOperationsInput | $Enums.StatusPost
    urlImgs?: PostUpdateurlImgsInput | string[]
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BehaviorWithPostUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isLiked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutUserLikedNestedInput
  }

  export type BehaviorWithPostUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isLiked?: BoolFieldUpdateOperationsInput | boolean
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BehaviorWithPostUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isLiked?: BoolFieldUpdateOperationsInput | boolean
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    repComments?: RepCommentUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repComments?: RepCommentUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepCommentUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: CommentUpdateOneRequiredWithoutRepCommentsNestedInput
  }

  export type RepCommentUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentId?: StringFieldUpdateOperationsInput | string
  }

  export type RepCommentUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentId?: StringFieldUpdateOperationsInput | string
  }

  export type ConversationUpdateWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user1LastReadIndex?: IntFieldUpdateOperationsInput | number
    user2LastReadIndex?: IntFieldUpdateOperationsInput | number
    socketId?: StringFieldUpdateOperationsInput | string
    totalMessage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user2?: UserUpdateOneRequiredWithoutUser2NestedInput
    privateMessage?: PrivateMessageUpdateManyWithoutChatNestedInput
  }

  export type ConversationUncheckedUpdateWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user1LastReadIndex?: IntFieldUpdateOperationsInput | number
    user2LastReadIndex?: IntFieldUpdateOperationsInput | number
    socketId?: StringFieldUpdateOperationsInput | string
    totalMessage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    privateMessage?: PrivateMessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ConversationUncheckedUpdateManyWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user1LastReadIndex?: IntFieldUpdateOperationsInput | number
    user2LastReadIndex?: IntFieldUpdateOperationsInput | number
    socketId?: StringFieldUpdateOperationsInput | string
    totalMessage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationUpdateWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user1LastReadIndex?: IntFieldUpdateOperationsInput | number
    user2LastReadIndex?: IntFieldUpdateOperationsInput | number
    socketId?: StringFieldUpdateOperationsInput | string
    totalMessage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user1?: UserUpdateOneRequiredWithoutUser1NestedInput
    privateMessage?: PrivateMessageUpdateManyWithoutChatNestedInput
  }

  export type ConversationUncheckedUpdateWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user1LastReadIndex?: IntFieldUpdateOperationsInput | number
    user2LastReadIndex?: IntFieldUpdateOperationsInput | number
    socketId?: StringFieldUpdateOperationsInput | string
    totalMessage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    privateMessage?: PrivateMessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ConversationUncheckedUpdateManyWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    lastMessage?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user1LastReadIndex?: IntFieldUpdateOperationsInput | number
    user2LastReadIndex?: IntFieldUpdateOperationsInput | number
    socketId?: StringFieldUpdateOperationsInput | string
    totalMessage?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateMessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    messageIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replyTo?: PrivateMessageUpdateOneWithoutRepliesNestedInput
    replies?: PrivateMessageUpdateManyWithoutReplyToNestedInput
    chat?: ConversationUpdateOneRequiredWithoutPrivateMessageNestedInput
  }

  export type PrivateMessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    messageIndex?: IntFieldUpdateOperationsInput | number
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: PrivateMessageUncheckedUpdateManyWithoutReplyToNestedInput
  }

  export type PrivateMessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    messageIndex?: IntFieldUpdateOperationsInput | number
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    addressUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    addressUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    addressUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    followerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    followerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    followerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type blockedUserUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAT?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type blockedUserUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAT?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type blockedUserUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAT?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}