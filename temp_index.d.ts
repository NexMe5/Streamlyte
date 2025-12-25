
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model SocialAccount
 * 
 */
export type SocialAccount = $Result.DefaultSelection<Prisma.$SocialAccountPayload>
/**
 * Model MetricSnapshot
 * 
 */
export type MetricSnapshot = $Result.DefaultSelection<Prisma.$MetricSnapshotPayload>
/**
 * Model ContentItem
 * 
 */
export type ContentItem = $Result.DefaultSelection<Prisma.$ContentItemPayload>
/**
 * Model Goal
 * 
 */
export type Goal = $Result.DefaultSelection<Prisma.$GoalPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model ContentIdea
 * 
 */
export type ContentIdea = $Result.DefaultSelection<Prisma.$ContentIdeaPayload>
/**
 * Model Campaign
 * 
 */
export type Campaign = $Result.DefaultSelection<Prisma.$CampaignPayload>
/**
 * Model CompetitorProfile
 * 
 */
export type CompetitorProfile = $Result.DefaultSelection<Prisma.$CompetitorProfilePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Platform: {
  instagram: 'instagram',
  linkedin: 'linkedin',
  youtube: 'youtube',
  twitter: 'twitter'
};

export type Platform = (typeof Platform)[keyof typeof Platform]


export const AccountStatus: {
  active: 'active',
  disconnected: 'disconnected',
  expired: 'expired',
  error: 'error'
};

export type AccountStatus = (typeof AccountStatus)[keyof typeof AccountStatus]


export const ContentType: {
  post: 'post',
  reel: 'reel',
  short: 'short',
  story: 'story',
  article: 'article',
  video: 'video',
  tweet: 'tweet'
};

export type ContentType = (typeof ContentType)[keyof typeof ContentType]


export const MetricType: {
  reach: 'reach',
  followers: 'followers',
  posts: 'posts',
  engagement: 'engagement',
  views: 'views',
  revenue: 'revenue',
  impressions: 'impressions'
};

export type MetricType = (typeof MetricType)[keyof typeof MetricType]


export const Period: {
  daily: 'daily',
  weekly: 'weekly',
  monthly: 'monthly',
  quarterly: 'quarterly'
};

export type Period = (typeof Period)[keyof typeof Period]


export const GoalStatus: {
  active: 'active',
  completed: 'completed',
  failed: 'failed',
  paused: 'paused'
};

export type GoalStatus = (typeof GoalStatus)[keyof typeof GoalStatus]


export const TaskStatus: {
  todo: 'todo',
  in_progress: 'in_progress',
  done: 'done'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]


export const TaskPriority: {
  low: 'low',
  medium: 'medium',
  high: 'high',
  urgent: 'urgent'
};

export type TaskPriority = (typeof TaskPriority)[keyof typeof TaskPriority]


export const IdeaStatus: {
  suggested: 'suggested',
  saved: 'saved',
  used: 'used',
  dismissed: 'dismissed'
};

export type IdeaStatus = (typeof IdeaStatus)[keyof typeof IdeaStatus]


export const CampaignStatus: {
  draft: 'draft',
  negotiating: 'negotiating',
  active: 'active',
  completed: 'completed',
  cancelled: 'cancelled'
};

export type CampaignStatus = (typeof CampaignStatus)[keyof typeof CampaignStatus]

}

export type Platform = $Enums.Platform

export const Platform: typeof $Enums.Platform

export type AccountStatus = $Enums.AccountStatus

export const AccountStatus: typeof $Enums.AccountStatus

export type ContentType = $Enums.ContentType

export const ContentType: typeof $Enums.ContentType

export type MetricType = $Enums.MetricType

export const MetricType: typeof $Enums.MetricType

export type Period = $Enums.Period

export const Period: typeof $Enums.Period

export type GoalStatus = $Enums.GoalStatus

export const GoalStatus: typeof $Enums.GoalStatus

export type TaskStatus = $Enums.TaskStatus

export const TaskStatus: typeof $Enums.TaskStatus

export type TaskPriority = $Enums.TaskPriority

export const TaskPriority: typeof $Enums.TaskPriority

export type IdeaStatus = $Enums.IdeaStatus

export const IdeaStatus: typeof $Enums.IdeaStatus

export type CampaignStatus = $Enums.CampaignStatus

export const CampaignStatus: typeof $Enums.CampaignStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.socialAccount`: Exposes CRUD operations for the **SocialAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SocialAccounts
    * const socialAccounts = await prisma.socialAccount.findMany()
    * ```
    */
  get socialAccount(): Prisma.SocialAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metricSnapshot`: Exposes CRUD operations for the **MetricSnapshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MetricSnapshots
    * const metricSnapshots = await prisma.metricSnapshot.findMany()
    * ```
    */
  get metricSnapshot(): Prisma.MetricSnapshotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contentItem`: Exposes CRUD operations for the **ContentItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContentItems
    * const contentItems = await prisma.contentItem.findMany()
    * ```
    */
  get contentItem(): Prisma.ContentItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.goal`: Exposes CRUD operations for the **Goal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Goals
    * const goals = await prisma.goal.findMany()
    * ```
    */
  get goal(): Prisma.GoalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contentIdea`: Exposes CRUD operations for the **ContentIdea** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContentIdeas
    * const contentIdeas = await prisma.contentIdea.findMany()
    * ```
    */
  get contentIdea(): Prisma.ContentIdeaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaign`: Exposes CRUD operations for the **Campaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaigns
    * const campaigns = await prisma.campaign.findMany()
    * ```
    */
  get campaign(): Prisma.CampaignDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.competitorProfile`: Exposes CRUD operations for the **CompetitorProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompetitorProfiles
    * const competitorProfiles = await prisma.competitorProfile.findMany()
    * ```
    */
  get competitorProfile(): Prisma.CompetitorProfileDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Session: 'Session',
    SocialAccount: 'SocialAccount',
    MetricSnapshot: 'MetricSnapshot',
    ContentItem: 'ContentItem',
    Goal: 'Goal',
    Task: 'Task',
    ContentIdea: 'ContentIdea',
    Campaign: 'Campaign',
    CompetitorProfile: 'CompetitorProfile'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "socialAccount" | "metricSnapshot" | "contentItem" | "goal" | "task" | "contentIdea" | "campaign" | "competitorProfile"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      SocialAccount: {
        payload: Prisma.$SocialAccountPayload<ExtArgs>
        fields: Prisma.SocialAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialAccountPayload>
          }
          findFirst: {
            args: Prisma.SocialAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialAccountPayload>
          }
          findMany: {
            args: Prisma.SocialAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialAccountPayload>[]
          }
          create: {
            args: Prisma.SocialAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialAccountPayload>
          }
          createMany: {
            args: Prisma.SocialAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SocialAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialAccountPayload>
          }
          update: {
            args: Prisma.SocialAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialAccountPayload>
          }
          deleteMany: {
            args: Prisma.SocialAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SocialAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialAccountPayload>
          }
          aggregate: {
            args: Prisma.SocialAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocialAccount>
          }
          groupBy: {
            args: Prisma.SocialAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialAccountCountArgs<ExtArgs>
            result: $Utils.Optional<SocialAccountCountAggregateOutputType> | number
          }
        }
      }
      MetricSnapshot: {
        payload: Prisma.$MetricSnapshotPayload<ExtArgs>
        fields: Prisma.MetricSnapshotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetricSnapshotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricSnapshotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetricSnapshotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricSnapshotPayload>
          }
          findFirst: {
            args: Prisma.MetricSnapshotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricSnapshotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetricSnapshotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricSnapshotPayload>
          }
          findMany: {
            args: Prisma.MetricSnapshotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricSnapshotPayload>[]
          }
          create: {
            args: Prisma.MetricSnapshotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricSnapshotPayload>
          }
          createMany: {
            args: Prisma.MetricSnapshotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MetricSnapshotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricSnapshotPayload>
          }
          update: {
            args: Prisma.MetricSnapshotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricSnapshotPayload>
          }
          deleteMany: {
            args: Prisma.MetricSnapshotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetricSnapshotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MetricSnapshotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricSnapshotPayload>
          }
          aggregate: {
            args: Prisma.MetricSnapshotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetricSnapshot>
          }
          groupBy: {
            args: Prisma.MetricSnapshotGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetricSnapshotGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetricSnapshotCountArgs<ExtArgs>
            result: $Utils.Optional<MetricSnapshotCountAggregateOutputType> | number
          }
        }
      }
      ContentItem: {
        payload: Prisma.$ContentItemPayload<ExtArgs>
        fields: Prisma.ContentItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentItemPayload>
          }
          findFirst: {
            args: Prisma.ContentItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentItemPayload>
          }
          findMany: {
            args: Prisma.ContentItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentItemPayload>[]
          }
          create: {
            args: Prisma.ContentItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentItemPayload>
          }
          createMany: {
            args: Prisma.ContentItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContentItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentItemPayload>
          }
          update: {
            args: Prisma.ContentItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentItemPayload>
          }
          deleteMany: {
            args: Prisma.ContentItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContentItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentItemPayload>
          }
          aggregate: {
            args: Prisma.ContentItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContentItem>
          }
          groupBy: {
            args: Prisma.ContentItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContentItemCountArgs<ExtArgs>
            result: $Utils.Optional<ContentItemCountAggregateOutputType> | number
          }
        }
      }
      Goal: {
        payload: Prisma.$GoalPayload<ExtArgs>
        fields: Prisma.GoalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findFirst: {
            args: Prisma.GoalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findMany: {
            args: Prisma.GoalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          create: {
            args: Prisma.GoalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          createMany: {
            args: Prisma.GoalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GoalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          update: {
            args: Prisma.GoalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          deleteMany: {
            args: Prisma.GoalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GoalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GoalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          aggregate: {
            args: Prisma.GoalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoal>
          }
          groupBy: {
            args: Prisma.GoalGroupByArgs<ExtArgs>
            result: $Utils.Optional<GoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoalCountArgs<ExtArgs>
            result: $Utils.Optional<GoalCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      ContentIdea: {
        payload: Prisma.$ContentIdeaPayload<ExtArgs>
        fields: Prisma.ContentIdeaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentIdeaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentIdeaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentIdeaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentIdeaPayload>
          }
          findFirst: {
            args: Prisma.ContentIdeaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentIdeaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentIdeaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentIdeaPayload>
          }
          findMany: {
            args: Prisma.ContentIdeaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentIdeaPayload>[]
          }
          create: {
            args: Prisma.ContentIdeaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentIdeaPayload>
          }
          createMany: {
            args: Prisma.ContentIdeaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContentIdeaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentIdeaPayload>
          }
          update: {
            args: Prisma.ContentIdeaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentIdeaPayload>
          }
          deleteMany: {
            args: Prisma.ContentIdeaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentIdeaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContentIdeaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentIdeaPayload>
          }
          aggregate: {
            args: Prisma.ContentIdeaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContentIdea>
          }
          groupBy: {
            args: Prisma.ContentIdeaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentIdeaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContentIdeaCountArgs<ExtArgs>
            result: $Utils.Optional<ContentIdeaCountAggregateOutputType> | number
          }
        }
      }
      Campaign: {
        payload: Prisma.$CampaignPayload<ExtArgs>
        fields: Prisma.CampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findFirst: {
            args: Prisma.CampaignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findMany: {
            args: Prisma.CampaignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          create: {
            args: Prisma.CampaignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          createMany: {
            args: Prisma.CampaignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CampaignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          update: {
            args: Prisma.CampaignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          deleteMany: {
            args: Prisma.CampaignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CampaignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          aggregate: {
            args: Prisma.CampaignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaign>
          }
          groupBy: {
            args: Prisma.CampaignGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignCountAggregateOutputType> | number
          }
        }
      }
      CompetitorProfile: {
        payload: Prisma.$CompetitorProfilePayload<ExtArgs>
        fields: Prisma.CompetitorProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompetitorProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompetitorProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorProfilePayload>
          }
          findFirst: {
            args: Prisma.CompetitorProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompetitorProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorProfilePayload>
          }
          findMany: {
            args: Prisma.CompetitorProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorProfilePayload>[]
          }
          create: {
            args: Prisma.CompetitorProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorProfilePayload>
          }
          createMany: {
            args: Prisma.CompetitorProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CompetitorProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorProfilePayload>
          }
          update: {
            args: Prisma.CompetitorProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorProfilePayload>
          }
          deleteMany: {
            args: Prisma.CompetitorProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompetitorProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompetitorProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitorProfilePayload>
          }
          aggregate: {
            args: Prisma.CompetitorProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompetitorProfile>
          }
          groupBy: {
            args: Prisma.CompetitorProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompetitorProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompetitorProfileCountArgs<ExtArgs>
            result: $Utils.Optional<CompetitorProfileCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    socialAccount?: SocialAccountOmit
    metricSnapshot?: MetricSnapshotOmit
    contentItem?: ContentItemOmit
    goal?: GoalOmit
    task?: TaskOmit
    contentIdea?: ContentIdeaOmit
    campaign?: CampaignOmit
    competitorProfile?: CompetitorProfileOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    socialAccounts: number
    metricSnapshots: number
    goals: number
    tasks: number
    contentIdeas: number
    campaigns: number
    competitorProfiles: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    socialAccounts?: boolean | UserCountOutputTypeCountSocialAccountsArgs
    metricSnapshots?: boolean | UserCountOutputTypeCountMetricSnapshotsArgs
    goals?: boolean | UserCountOutputTypeCountGoalsArgs
    tasks?: boolean | UserCountOutputTypeCountTasksArgs
    contentIdeas?: boolean | UserCountOutputTypeCountContentIdeasArgs
    campaigns?: boolean | UserCountOutputTypeCountCampaignsArgs
    competitorProfiles?: boolean | UserCountOutputTypeCountCompetitorProfilesArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
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
  export type UserCountOutputTypeCountSocialAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialAccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMetricSnapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetricSnapshotWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContentIdeasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentIdeaWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompetitorProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitorProfileWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type SocialAccountCountOutputType
   */

  export type SocialAccountCountOutputType = {
    metricSnapshots: number
    contentItems: number
  }

  export type SocialAccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    metricSnapshots?: boolean | SocialAccountCountOutputTypeCountMetricSnapshotsArgs
    contentItems?: boolean | SocialAccountCountOutputTypeCountContentItemsArgs
  }

  // Custom InputTypes
  /**
   * SocialAccountCountOutputType without action
   */
  export type SocialAccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccountCountOutputType
     */
    select?: SocialAccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SocialAccountCountOutputType without action
   */
  export type SocialAccountCountOutputTypeCountMetricSnapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetricSnapshotWhereInput
  }

  /**
   * SocialAccountCountOutputType without action
   */
  export type SocialAccountCountOutputTypeCountContentItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentItemWhereInput
  }


  /**
   * Count Type GoalCountOutputType
   */

  export type GoalCountOutputType = {
    tasks: number
  }

  export type GoalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | GoalCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * GoalCountOutputType without action
   */
  export type GoalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalCountOutputType
     */
    select?: GoalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GoalCountOutputType without action
   */
  export type GoalCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    streakCount: number | null
  }

  export type UserSumAggregateOutputType = {
    streakCount: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    avatar: string | null
    timezone: string | null
    niche: string | null
    primaryPlatform: string | null
    streakCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    avatar: string | null
    timezone: string | null
    niche: string | null
    primaryPlatform: string | null
    streakCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    avatar: number
    timezone: number
    niche: number
    primaryPlatform: number
    streakCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    streakCount?: true
  }

  export type UserSumAggregateInputType = {
    streakCount?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    avatar?: true
    timezone?: true
    niche?: true
    primaryPlatform?: true
    streakCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    avatar?: true
    timezone?: true
    niche?: true
    primaryPlatform?: true
    streakCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    avatar?: true
    timezone?: true
    niche?: true
    primaryPlatform?: true
    streakCount?: true
    createdAt?: true
    updatedAt?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    passwordHash: string
    avatar: string | null
    timezone: string
    niche: string | null
    primaryPlatform: string | null
    streakCount: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    email?: boolean
    passwordHash?: boolean
    avatar?: boolean
    timezone?: boolean
    niche?: boolean
    primaryPlatform?: boolean
    streakCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    socialAccounts?: boolean | User$socialAccountsArgs<ExtArgs>
    metricSnapshots?: boolean | User$metricSnapshotsArgs<ExtArgs>
    goals?: boolean | User$goalsArgs<ExtArgs>
    tasks?: boolean | User$tasksArgs<ExtArgs>
    contentIdeas?: boolean | User$contentIdeasArgs<ExtArgs>
    campaigns?: boolean | User$campaignsArgs<ExtArgs>
    competitorProfiles?: boolean | User$competitorProfilesArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    avatar?: boolean
    timezone?: boolean
    niche?: boolean
    primaryPlatform?: boolean
    streakCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "avatar" | "timezone" | "niche" | "primaryPlatform" | "streakCount" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    socialAccounts?: boolean | User$socialAccountsArgs<ExtArgs>
    metricSnapshots?: boolean | User$metricSnapshotsArgs<ExtArgs>
    goals?: boolean | User$goalsArgs<ExtArgs>
    tasks?: boolean | User$tasksArgs<ExtArgs>
    contentIdeas?: boolean | User$contentIdeasArgs<ExtArgs>
    campaigns?: boolean | User$campaignsArgs<ExtArgs>
    competitorProfiles?: boolean | User$competitorProfilesArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      socialAccounts: Prisma.$SocialAccountPayload<ExtArgs>[]
      metricSnapshots: Prisma.$MetricSnapshotPayload<ExtArgs>[]
      goals: Prisma.$GoalPayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      contentIdeas: Prisma.$ContentIdeaPayload<ExtArgs>[]
      campaigns: Prisma.$CampaignPayload<ExtArgs>[]
      competitorProfiles: Prisma.$CompetitorProfilePayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string
      avatar: string | null
      timezone: string
      niche: string | null
      primaryPlatform: string | null
      streakCount: number
      createdAt: Date
      updatedAt: Date
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
    socialAccounts<T extends User$socialAccountsArgs<ExtArgs> = {}>(args?: Subset<T, User$socialAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    metricSnapshots<T extends User$metricSnapshotsArgs<ExtArgs> = {}>(args?: Subset<T, User$metricSnapshotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricSnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    goals<T extends User$goalsArgs<ExtArgs> = {}>(args?: Subset<T, User$goalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends User$tasksArgs<ExtArgs> = {}>(args?: Subset<T, User$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contentIdeas<T extends User$contentIdeasArgs<ExtArgs> = {}>(args?: Subset<T, User$contentIdeasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentIdeaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    campaigns<T extends User$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, User$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    competitorProfiles<T extends User$competitorProfilesArgs<ExtArgs> = {}>(args?: Subset<T, User$competitorProfilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitorProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly timezone: FieldRef<"User", 'String'>
    readonly niche: FieldRef<"User", 'String'>
    readonly primaryPlatform: FieldRef<"User", 'String'>
    readonly streakCount: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.socialAccounts
   */
  export type User$socialAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccount
     */
    select?: SocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialAccount
     */
    omit?: SocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialAccountInclude<ExtArgs> | null
    where?: SocialAccountWhereInput
    orderBy?: SocialAccountOrderByWithRelationInput | SocialAccountOrderByWithRelationInput[]
    cursor?: SocialAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SocialAccountScalarFieldEnum | SocialAccountScalarFieldEnum[]
  }

  /**
   * User.metricSnapshots
   */
  export type User$metricSnapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricSnapshot
     */
    select?: MetricSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricSnapshot
     */
    omit?: MetricSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricSnapshotInclude<ExtArgs> | null
    where?: MetricSnapshotWhereInput
    orderBy?: MetricSnapshotOrderByWithRelationInput | MetricSnapshotOrderByWithRelationInput[]
    cursor?: MetricSnapshotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MetricSnapshotScalarFieldEnum | MetricSnapshotScalarFieldEnum[]
  }

  /**
   * User.goals
   */
  export type User$goalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    cursor?: GoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * User.tasks
   */
  export type User$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.contentIdeas
   */
  export type User$contentIdeasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentIdea
     */
    select?: ContentIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentIdea
     */
    omit?: ContentIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentIdeaInclude<ExtArgs> | null
    where?: ContentIdeaWhereInput
    orderBy?: ContentIdeaOrderByWithRelationInput | ContentIdeaOrderByWithRelationInput[]
    cursor?: ContentIdeaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentIdeaScalarFieldEnum | ContentIdeaScalarFieldEnum[]
  }

  /**
   * User.campaigns
   */
  export type User$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    cursor?: CampaignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * User.competitorProfiles
   */
  export type User$competitorProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitorProfile
     */
    select?: CompetitorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitorProfile
     */
    omit?: CompetitorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorProfileInclude<ExtArgs> | null
    where?: CompetitorProfileWhereInput
    orderBy?: CompetitorProfileOrderByWithRelationInput | CompetitorProfileOrderByWithRelationInput[]
    cursor?: CompetitorProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompetitorProfileScalarFieldEnum | CompetitorProfileScalarFieldEnum[]
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
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
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
    sessionToken: string
    userId: string
    expires: Date
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
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>



  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
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
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
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
   * Model SocialAccount
   */

  export type AggregateSocialAccount = {
    _count: SocialAccountCountAggregateOutputType | null
    _min: SocialAccountMinAggregateOutputType | null
    _max: SocialAccountMaxAggregateOutputType | null
  }

  export type SocialAccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    platform: $Enums.Platform | null
    handle: string | null
    displayName: string | null
    profileUrl: string | null
    accessToken: string | null
    refreshToken: string | null
    tokenExpiry: Date | null
    status: $Enums.AccountStatus | null
    autoSync: boolean | null
    lastSyncedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SocialAccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    platform: $Enums.Platform | null
    handle: string | null
    displayName: string | null
    profileUrl: string | null
    accessToken: string | null
    refreshToken: string | null
    tokenExpiry: Date | null
    status: $Enums.AccountStatus | null
    autoSync: boolean | null
    lastSyncedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SocialAccountCountAggregateOutputType = {
    id: number
    userId: number
    platform: number
    handle: number
    displayName: number
    profileUrl: number
    accessToken: number
    refreshToken: number
    tokenExpiry: number
    status: number
    autoSync: number
    lastSyncedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SocialAccountMinAggregateInputType = {
    id?: true
    userId?: true
    platform?: true
    handle?: true
    displayName?: true
    profileUrl?: true
    accessToken?: true
    refreshToken?: true
    tokenExpiry?: true
    status?: true
    autoSync?: true
    lastSyncedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SocialAccountMaxAggregateInputType = {
    id?: true
    userId?: true
    platform?: true
    handle?: true
    displayName?: true
    profileUrl?: true
    accessToken?: true
    refreshToken?: true
    tokenExpiry?: true
    status?: true
    autoSync?: true
    lastSyncedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SocialAccountCountAggregateInputType = {
    id?: true
    userId?: true
    platform?: true
    handle?: true
    displayName?: true
    profileUrl?: true
    accessToken?: true
    refreshToken?: true
    tokenExpiry?: true
    status?: true
    autoSync?: true
    lastSyncedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SocialAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialAccount to aggregate.
     */
    where?: SocialAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialAccounts to fetch.
     */
    orderBy?: SocialAccountOrderByWithRelationInput | SocialAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SocialAccounts
    **/
    _count?: true | SocialAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialAccountMaxAggregateInputType
  }

  export type GetSocialAccountAggregateType<T extends SocialAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateSocialAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocialAccount[P]>
      : GetScalarType<T[P], AggregateSocialAccount[P]>
  }




  export type SocialAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialAccountWhereInput
    orderBy?: SocialAccountOrderByWithAggregationInput | SocialAccountOrderByWithAggregationInput[]
    by: SocialAccountScalarFieldEnum[] | SocialAccountScalarFieldEnum
    having?: SocialAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialAccountCountAggregateInputType | true
    _min?: SocialAccountMinAggregateInputType
    _max?: SocialAccountMaxAggregateInputType
  }

  export type SocialAccountGroupByOutputType = {
    id: string
    userId: string
    platform: $Enums.Platform
    handle: string
    displayName: string | null
    profileUrl: string | null
    accessToken: string | null
    refreshToken: string | null
    tokenExpiry: Date | null
    status: $Enums.AccountStatus
    autoSync: boolean
    lastSyncedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: SocialAccountCountAggregateOutputType | null
    _min: SocialAccountMinAggregateOutputType | null
    _max: SocialAccountMaxAggregateOutputType | null
  }

  type GetSocialAccountGroupByPayload<T extends SocialAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialAccountGroupByOutputType[P]>
            : GetScalarType<T[P], SocialAccountGroupByOutputType[P]>
        }
      >
    >


  export type SocialAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    platform?: boolean
    handle?: boolean
    displayName?: boolean
    profileUrl?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    tokenExpiry?: boolean
    status?: boolean
    autoSync?: boolean
    lastSyncedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    metricSnapshots?: boolean | SocialAccount$metricSnapshotsArgs<ExtArgs>
    contentItems?: boolean | SocialAccount$contentItemsArgs<ExtArgs>
    _count?: boolean | SocialAccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialAccount"]>



  export type SocialAccountSelectScalar = {
    id?: boolean
    userId?: boolean
    platform?: boolean
    handle?: boolean
    displayName?: boolean
    profileUrl?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    tokenExpiry?: boolean
    status?: boolean
    autoSync?: boolean
    lastSyncedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SocialAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "platform" | "handle" | "displayName" | "profileUrl" | "accessToken" | "refreshToken" | "tokenExpiry" | "status" | "autoSync" | "lastSyncedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["socialAccount"]>
  export type SocialAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    metricSnapshots?: boolean | SocialAccount$metricSnapshotsArgs<ExtArgs>
    contentItems?: boolean | SocialAccount$contentItemsArgs<ExtArgs>
    _count?: boolean | SocialAccountCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SocialAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SocialAccount"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      metricSnapshots: Prisma.$MetricSnapshotPayload<ExtArgs>[]
      contentItems: Prisma.$ContentItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      platform: $Enums.Platform
      handle: string
      displayName: string | null
      profileUrl: string | null
      accessToken: string | null
      refreshToken: string | null
      tokenExpiry: Date | null
      status: $Enums.AccountStatus
      autoSync: boolean
      lastSyncedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["socialAccount"]>
    composites: {}
  }

  type SocialAccountGetPayload<S extends boolean | null | undefined | SocialAccountDefaultArgs> = $Result.GetResult<Prisma.$SocialAccountPayload, S>

  type SocialAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocialAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocialAccountCountAggregateInputType | true
    }

  export interface SocialAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SocialAccount'], meta: { name: 'SocialAccount' } }
    /**
     * Find zero or one SocialAccount that matches the filter.
     * @param {SocialAccountFindUniqueArgs} args - Arguments to find a SocialAccount
     * @example
     * // Get one SocialAccount
     * const socialAccount = await prisma.socialAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialAccountFindUniqueArgs>(args: SelectSubset<T, SocialAccountFindUniqueArgs<ExtArgs>>): Prisma__SocialAccountClient<$Result.GetResult<Prisma.$SocialAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SocialAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocialAccountFindUniqueOrThrowArgs} args - Arguments to find a SocialAccount
     * @example
     * // Get one SocialAccount
     * const socialAccount = await prisma.socialAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialAccountClient<$Result.GetResult<Prisma.$SocialAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialAccountFindFirstArgs} args - Arguments to find a SocialAccount
     * @example
     * // Get one SocialAccount
     * const socialAccount = await prisma.socialAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialAccountFindFirstArgs>(args?: SelectSubset<T, SocialAccountFindFirstArgs<ExtArgs>>): Prisma__SocialAccountClient<$Result.GetResult<Prisma.$SocialAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialAccountFindFirstOrThrowArgs} args - Arguments to find a SocialAccount
     * @example
     * // Get one SocialAccount
     * const socialAccount = await prisma.socialAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialAccountClient<$Result.GetResult<Prisma.$SocialAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SocialAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SocialAccounts
     * const socialAccounts = await prisma.socialAccount.findMany()
     * 
     * // Get first 10 SocialAccounts
     * const socialAccounts = await prisma.socialAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialAccountWithIdOnly = await prisma.socialAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialAccountFindManyArgs>(args?: SelectSubset<T, SocialAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SocialAccount.
     * @param {SocialAccountCreateArgs} args - Arguments to create a SocialAccount.
     * @example
     * // Create one SocialAccount
     * const SocialAccount = await prisma.socialAccount.create({
     *   data: {
     *     // ... data to create a SocialAccount
     *   }
     * })
     * 
     */
    create<T extends SocialAccountCreateArgs>(args: SelectSubset<T, SocialAccountCreateArgs<ExtArgs>>): Prisma__SocialAccountClient<$Result.GetResult<Prisma.$SocialAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SocialAccounts.
     * @param {SocialAccountCreateManyArgs} args - Arguments to create many SocialAccounts.
     * @example
     * // Create many SocialAccounts
     * const socialAccount = await prisma.socialAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialAccountCreateManyArgs>(args?: SelectSubset<T, SocialAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SocialAccount.
     * @param {SocialAccountDeleteArgs} args - Arguments to delete one SocialAccount.
     * @example
     * // Delete one SocialAccount
     * const SocialAccount = await prisma.socialAccount.delete({
     *   where: {
     *     // ... filter to delete one SocialAccount
     *   }
     * })
     * 
     */
    delete<T extends SocialAccountDeleteArgs>(args: SelectSubset<T, SocialAccountDeleteArgs<ExtArgs>>): Prisma__SocialAccountClient<$Result.GetResult<Prisma.$SocialAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SocialAccount.
     * @param {SocialAccountUpdateArgs} args - Arguments to update one SocialAccount.
     * @example
     * // Update one SocialAccount
     * const socialAccount = await prisma.socialAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialAccountUpdateArgs>(args: SelectSubset<T, SocialAccountUpdateArgs<ExtArgs>>): Prisma__SocialAccountClient<$Result.GetResult<Prisma.$SocialAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SocialAccounts.
     * @param {SocialAccountDeleteManyArgs} args - Arguments to filter SocialAccounts to delete.
     * @example
     * // Delete a few SocialAccounts
     * const { count } = await prisma.socialAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialAccountDeleteManyArgs>(args?: SelectSubset<T, SocialAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SocialAccounts
     * const socialAccount = await prisma.socialAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialAccountUpdateManyArgs>(args: SelectSubset<T, SocialAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SocialAccount.
     * @param {SocialAccountUpsertArgs} args - Arguments to update or create a SocialAccount.
     * @example
     * // Update or create a SocialAccount
     * const socialAccount = await prisma.socialAccount.upsert({
     *   create: {
     *     // ... data to create a SocialAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SocialAccount we want to update
     *   }
     * })
     */
    upsert<T extends SocialAccountUpsertArgs>(args: SelectSubset<T, SocialAccountUpsertArgs<ExtArgs>>): Prisma__SocialAccountClient<$Result.GetResult<Prisma.$SocialAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SocialAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialAccountCountArgs} args - Arguments to filter SocialAccounts to count.
     * @example
     * // Count the number of SocialAccounts
     * const count = await prisma.socialAccount.count({
     *   where: {
     *     // ... the filter for the SocialAccounts we want to count
     *   }
     * })
    **/
    count<T extends SocialAccountCountArgs>(
      args?: Subset<T, SocialAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SocialAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SocialAccountAggregateArgs>(args: Subset<T, SocialAccountAggregateArgs>): Prisma.PrismaPromise<GetSocialAccountAggregateType<T>>

    /**
     * Group by SocialAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialAccountGroupByArgs} args - Group by arguments.
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
      T extends SocialAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialAccountGroupByArgs['orderBy'] }
        : { orderBy?: SocialAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SocialAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SocialAccount model
   */
  readonly fields: SocialAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SocialAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    metricSnapshots<T extends SocialAccount$metricSnapshotsArgs<ExtArgs> = {}>(args?: Subset<T, SocialAccount$metricSnapshotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricSnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contentItems<T extends SocialAccount$contentItemsArgs<ExtArgs> = {}>(args?: Subset<T, SocialAccount$contentItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SocialAccount model
   */
  interface SocialAccountFieldRefs {
    readonly id: FieldRef<"SocialAccount", 'String'>
    readonly userId: FieldRef<"SocialAccount", 'String'>
    readonly platform: FieldRef<"SocialAccount", 'Platform'>
    readonly handle: FieldRef<"SocialAccount", 'String'>
    readonly displayName: FieldRef<"SocialAccount", 'String'>
    readonly profileUrl: FieldRef<"SocialAccount", 'String'>
    readonly accessToken: FieldRef<"SocialAccount", 'String'>
    readonly refreshToken: FieldRef<"SocialAccount", 'String'>
    readonly tokenExpiry: FieldRef<"SocialAccount", 'DateTime'>
    readonly status: FieldRef<"SocialAccount", 'AccountStatus'>
    readonly autoSync: FieldRef<"SocialAccount", 'Boolean'>
    readonly lastSyncedAt: FieldRef<"SocialAccount", 'DateTime'>
    readonly createdAt: FieldRef<"SocialAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"SocialAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SocialAccount findUnique
   */
  export type SocialAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccount
     */
    select?: SocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialAccount
     */
    omit?: SocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialAccountInclude<ExtArgs> | null
    /**
     * Filter, which SocialAccount to fetch.
     */
    where: SocialAccountWhereUniqueInput
  }

  /**
   * SocialAccount findUniqueOrThrow
   */
  export type SocialAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccount
     */
    select?: SocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialAccount
     */
    omit?: SocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialAccountInclude<ExtArgs> | null
    /**
     * Filter, which SocialAccount to fetch.
     */
    where: SocialAccountWhereUniqueInput
  }

  /**
   * SocialAccount findFirst
   */
  export type SocialAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccount
     */
    select?: SocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialAccount
     */
    omit?: SocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialAccountInclude<ExtArgs> | null
    /**
     * Filter, which SocialAccount to fetch.
     */
    where?: SocialAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialAccounts to fetch.
     */
    orderBy?: SocialAccountOrderByWithRelationInput | SocialAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialAccounts.
     */
    cursor?: SocialAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialAccounts.
     */
    distinct?: SocialAccountScalarFieldEnum | SocialAccountScalarFieldEnum[]
  }

  /**
   * SocialAccount findFirstOrThrow
   */
  export type SocialAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccount
     */
    select?: SocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialAccount
     */
    omit?: SocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialAccountInclude<ExtArgs> | null
    /**
     * Filter, which SocialAccount to fetch.
     */
    where?: SocialAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialAccounts to fetch.
     */
    orderBy?: SocialAccountOrderByWithRelationInput | SocialAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialAccounts.
     */
    cursor?: SocialAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialAccounts.
     */
    distinct?: SocialAccountScalarFieldEnum | SocialAccountScalarFieldEnum[]
  }

  /**
   * SocialAccount findMany
   */
  export type SocialAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccount
     */
    select?: SocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialAccount
     */
    omit?: SocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialAccountInclude<ExtArgs> | null
    /**
     * Filter, which SocialAccounts to fetch.
     */
    where?: SocialAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialAccounts to fetch.
     */
    orderBy?: SocialAccountOrderByWithRelationInput | SocialAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SocialAccounts.
     */
    cursor?: SocialAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialAccounts.
     */
    skip?: number
    distinct?: SocialAccountScalarFieldEnum | SocialAccountScalarFieldEnum[]
  }

  /**
   * SocialAccount create
   */
  export type SocialAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccount
     */
    select?: SocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialAccount
     */
    omit?: SocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a SocialAccount.
     */
    data: XOR<SocialAccountCreateInput, SocialAccountUncheckedCreateInput>
  }

  /**
   * SocialAccount createMany
   */
  export type SocialAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SocialAccounts.
     */
    data: SocialAccountCreateManyInput | SocialAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialAccount update
   */
  export type SocialAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccount
     */
    select?: SocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialAccount
     */
    omit?: SocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a SocialAccount.
     */
    data: XOR<SocialAccountUpdateInput, SocialAccountUncheckedUpdateInput>
    /**
     * Choose, which SocialAccount to update.
     */
    where: SocialAccountWhereUniqueInput
  }

  /**
   * SocialAccount updateMany
   */
  export type SocialAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SocialAccounts.
     */
    data: XOR<SocialAccountUpdateManyMutationInput, SocialAccountUncheckedUpdateManyInput>
    /**
     * Filter which SocialAccounts to update
     */
    where?: SocialAccountWhereInput
    /**
     * Limit how many SocialAccounts to update.
     */
    limit?: number
  }

  /**
   * SocialAccount upsert
   */
  export type SocialAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccount
     */
    select?: SocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialAccount
     */
    omit?: SocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the SocialAccount to update in case it exists.
     */
    where: SocialAccountWhereUniqueInput
    /**
     * In case the SocialAccount found by the `where` argument doesn't exist, create a new SocialAccount with this data.
     */
    create: XOR<SocialAccountCreateInput, SocialAccountUncheckedCreateInput>
    /**
     * In case the SocialAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialAccountUpdateInput, SocialAccountUncheckedUpdateInput>
  }

  /**
   * SocialAccount delete
   */
  export type SocialAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccount
     */
    select?: SocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialAccount
     */
    omit?: SocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialAccountInclude<ExtArgs> | null
    /**
     * Filter which SocialAccount to delete.
     */
    where: SocialAccountWhereUniqueInput
  }

  /**
   * SocialAccount deleteMany
   */
  export type SocialAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialAccounts to delete
     */
    where?: SocialAccountWhereInput
    /**
     * Limit how many SocialAccounts to delete.
     */
    limit?: number
  }

  /**
   * SocialAccount.metricSnapshots
   */
  export type SocialAccount$metricSnapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricSnapshot
     */
    select?: MetricSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricSnapshot
     */
    omit?: MetricSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricSnapshotInclude<ExtArgs> | null
    where?: MetricSnapshotWhereInput
    orderBy?: MetricSnapshotOrderByWithRelationInput | MetricSnapshotOrderByWithRelationInput[]
    cursor?: MetricSnapshotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MetricSnapshotScalarFieldEnum | MetricSnapshotScalarFieldEnum[]
  }

  /**
   * SocialAccount.contentItems
   */
  export type SocialAccount$contentItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentItem
     */
    select?: ContentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentItem
     */
    omit?: ContentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentItemInclude<ExtArgs> | null
    where?: ContentItemWhereInput
    orderBy?: ContentItemOrderByWithRelationInput | ContentItemOrderByWithRelationInput[]
    cursor?: ContentItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentItemScalarFieldEnum | ContentItemScalarFieldEnum[]
  }

  /**
   * SocialAccount without action
   */
  export type SocialAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialAccount
     */
    select?: SocialAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialAccount
     */
    omit?: SocialAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialAccountInclude<ExtArgs> | null
  }


  /**
   * Model MetricSnapshot
   */

  export type AggregateMetricSnapshot = {
    _count: MetricSnapshotCountAggregateOutputType | null
    _avg: MetricSnapshotAvgAggregateOutputType | null
    _sum: MetricSnapshotSumAggregateOutputType | null
    _min: MetricSnapshotMinAggregateOutputType | null
    _max: MetricSnapshotMaxAggregateOutputType | null
  }

  export type MetricSnapshotAvgAggregateOutputType = {
    reach: number | null
    impressions: number | null
    likes: number | null
    comments: number | null
    shares: number | null
    saves: number | null
    followers: number | null
    views: number | null
    clicks: number | null
    engagementRate: number | null
  }

  export type MetricSnapshotSumAggregateOutputType = {
    reach: number | null
    impressions: number | null
    likes: number | null
    comments: number | null
    shares: number | null
    saves: number | null
    followers: number | null
    views: number | null
    clicks: number | null
    engagementRate: number | null
  }

  export type MetricSnapshotMinAggregateOutputType = {
    id: string | null
    userId: string | null
    socialAccountId: string | null
    date: Date | null
    reach: number | null
    impressions: number | null
    likes: number | null
    comments: number | null
    shares: number | null
    saves: number | null
    followers: number | null
    views: number | null
    clicks: number | null
    engagementRate: number | null
    createdAt: Date | null
  }

  export type MetricSnapshotMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    socialAccountId: string | null
    date: Date | null
    reach: number | null
    impressions: number | null
    likes: number | null
    comments: number | null
    shares: number | null
    saves: number | null
    followers: number | null
    views: number | null
    clicks: number | null
    engagementRate: number | null
    createdAt: Date | null
  }

  export type MetricSnapshotCountAggregateOutputType = {
    id: number
    userId: number
    socialAccountId: number
    date: number
    reach: number
    impressions: number
    likes: number
    comments: number
    shares: number
    saves: number
    followers: number
    views: number
    clicks: number
    engagementRate: number
    platformRawJson: number
    createdAt: number
    _all: number
  }


  export type MetricSnapshotAvgAggregateInputType = {
    reach?: true
    impressions?: true
    likes?: true
    comments?: true
    shares?: true
    saves?: true
    followers?: true
    views?: true
    clicks?: true
    engagementRate?: true
  }

  export type MetricSnapshotSumAggregateInputType = {
    reach?: true
    impressions?: true
    likes?: true
    comments?: true
    shares?: true
    saves?: true
    followers?: true
    views?: true
    clicks?: true
    engagementRate?: true
  }

  export type MetricSnapshotMinAggregateInputType = {
    id?: true
    userId?: true
    socialAccountId?: true
    date?: true
    reach?: true
    impressions?: true
    likes?: true
    comments?: true
    shares?: true
    saves?: true
    followers?: true
    views?: true
    clicks?: true
    engagementRate?: true
    createdAt?: true
  }

  export type MetricSnapshotMaxAggregateInputType = {
    id?: true
    userId?: true
    socialAccountId?: true
    date?: true
    reach?: true
    impressions?: true
    likes?: true
    comments?: true
    shares?: true
    saves?: true
    followers?: true
    views?: true
    clicks?: true
    engagementRate?: true
    createdAt?: true
  }

  export type MetricSnapshotCountAggregateInputType = {
    id?: true
    userId?: true
    socialAccountId?: true
    date?: true
    reach?: true
    impressions?: true
    likes?: true
    comments?: true
    shares?: true
    saves?: true
    followers?: true
    views?: true
    clicks?: true
    engagementRate?: true
    platformRawJson?: true
    createdAt?: true
    _all?: true
  }

  export type MetricSnapshotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetricSnapshot to aggregate.
     */
    where?: MetricSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetricSnapshots to fetch.
     */
    orderBy?: MetricSnapshotOrderByWithRelationInput | MetricSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetricSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetricSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetricSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MetricSnapshots
    **/
    _count?: true | MetricSnapshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetricSnapshotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetricSnapshotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetricSnapshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetricSnapshotMaxAggregateInputType
  }

  export type GetMetricSnapshotAggregateType<T extends MetricSnapshotAggregateArgs> = {
        [P in keyof T & keyof AggregateMetricSnapshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetricSnapshot[P]>
      : GetScalarType<T[P], AggregateMetricSnapshot[P]>
  }




  export type MetricSnapshotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetricSnapshotWhereInput
    orderBy?: MetricSnapshotOrderByWithAggregationInput | MetricSnapshotOrderByWithAggregationInput[]
    by: MetricSnapshotScalarFieldEnum[] | MetricSnapshotScalarFieldEnum
    having?: MetricSnapshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetricSnapshotCountAggregateInputType | true
    _avg?: MetricSnapshotAvgAggregateInputType
    _sum?: MetricSnapshotSumAggregateInputType
    _min?: MetricSnapshotMinAggregateInputType
    _max?: MetricSnapshotMaxAggregateInputType
  }

  export type MetricSnapshotGroupByOutputType = {
    id: string
    userId: string
    socialAccountId: string
    date: Date
    reach: number
    impressions: number
    likes: number
    comments: number
    shares: number
    saves: number
    followers: number
    views: number
    clicks: number
    engagementRate: number
    platformRawJson: JsonValue | null
    createdAt: Date
    _count: MetricSnapshotCountAggregateOutputType | null
    _avg: MetricSnapshotAvgAggregateOutputType | null
    _sum: MetricSnapshotSumAggregateOutputType | null
    _min: MetricSnapshotMinAggregateOutputType | null
    _max: MetricSnapshotMaxAggregateOutputType | null
  }

  type GetMetricSnapshotGroupByPayload<T extends MetricSnapshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetricSnapshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetricSnapshotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetricSnapshotGroupByOutputType[P]>
            : GetScalarType<T[P], MetricSnapshotGroupByOutputType[P]>
        }
      >
    >


  export type MetricSnapshotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    socialAccountId?: boolean
    date?: boolean
    reach?: boolean
    impressions?: boolean
    likes?: boolean
    comments?: boolean
    shares?: boolean
    saves?: boolean
    followers?: boolean
    views?: boolean
    clicks?: boolean
    engagementRate?: boolean
    platformRawJson?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    socialAccount?: boolean | SocialAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metricSnapshot"]>



  export type MetricSnapshotSelectScalar = {
    id?: boolean
    userId?: boolean
    socialAccountId?: boolean
    date?: boolean
    reach?: boolean
    impressions?: boolean
    likes?: boolean
    comments?: boolean
    shares?: boolean
    saves?: boolean
    followers?: boolean
    views?: boolean
    clicks?: boolean
    engagementRate?: boolean
    platformRawJson?: boolean
    createdAt?: boolean
  }

  export type MetricSnapshotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "socialAccountId" | "date" | "reach" | "impressions" | "likes" | "comments" | "shares" | "saves" | "followers" | "views" | "clicks" | "engagementRate" | "platformRawJson" | "createdAt", ExtArgs["result"]["metricSnapshot"]>
  export type MetricSnapshotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    socialAccount?: boolean | SocialAccountDefaultArgs<ExtArgs>
  }

  export type $MetricSnapshotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MetricSnapshot"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      socialAccount: Prisma.$SocialAccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      socialAccountId: string
      date: Date
      reach: number
      impressions: number
      likes: number
      comments: number
      shares: number
      saves: number
      followers: number
      views: number
      clicks: number
      engagementRate: number
      platformRawJson: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["metricSnapshot"]>
    composites: {}
  }

  type MetricSnapshotGetPayload<S extends boolean | null | undefined | MetricSnapshotDefaultArgs> = $Result.GetResult<Prisma.$MetricSnapshotPayload, S>

  type MetricSnapshotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetricSnapshotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetricSnapshotCountAggregateInputType | true
    }

  export interface MetricSnapshotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MetricSnapshot'], meta: { name: 'MetricSnapshot' } }
    /**
     * Find zero or one MetricSnapshot that matches the filter.
     * @param {MetricSnapshotFindUniqueArgs} args - Arguments to find a MetricSnapshot
     * @example
     * // Get one MetricSnapshot
     * const metricSnapshot = await prisma.metricSnapshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetricSnapshotFindUniqueArgs>(args: SelectSubset<T, MetricSnapshotFindUniqueArgs<ExtArgs>>): Prisma__MetricSnapshotClient<$Result.GetResult<Prisma.$MetricSnapshotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MetricSnapshot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetricSnapshotFindUniqueOrThrowArgs} args - Arguments to find a MetricSnapshot
     * @example
     * // Get one MetricSnapshot
     * const metricSnapshot = await prisma.metricSnapshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetricSnapshotFindUniqueOrThrowArgs>(args: SelectSubset<T, MetricSnapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetricSnapshotClient<$Result.GetResult<Prisma.$MetricSnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetricSnapshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricSnapshotFindFirstArgs} args - Arguments to find a MetricSnapshot
     * @example
     * // Get one MetricSnapshot
     * const metricSnapshot = await prisma.metricSnapshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetricSnapshotFindFirstArgs>(args?: SelectSubset<T, MetricSnapshotFindFirstArgs<ExtArgs>>): Prisma__MetricSnapshotClient<$Result.GetResult<Prisma.$MetricSnapshotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetricSnapshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricSnapshotFindFirstOrThrowArgs} args - Arguments to find a MetricSnapshot
     * @example
     * // Get one MetricSnapshot
     * const metricSnapshot = await prisma.metricSnapshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetricSnapshotFindFirstOrThrowArgs>(args?: SelectSubset<T, MetricSnapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetricSnapshotClient<$Result.GetResult<Prisma.$MetricSnapshotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MetricSnapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricSnapshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MetricSnapshots
     * const metricSnapshots = await prisma.metricSnapshot.findMany()
     * 
     * // Get first 10 MetricSnapshots
     * const metricSnapshots = await prisma.metricSnapshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metricSnapshotWithIdOnly = await prisma.metricSnapshot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MetricSnapshotFindManyArgs>(args?: SelectSubset<T, MetricSnapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricSnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MetricSnapshot.
     * @param {MetricSnapshotCreateArgs} args - Arguments to create a MetricSnapshot.
     * @example
     * // Create one MetricSnapshot
     * const MetricSnapshot = await prisma.metricSnapshot.create({
     *   data: {
     *     // ... data to create a MetricSnapshot
     *   }
     * })
     * 
     */
    create<T extends MetricSnapshotCreateArgs>(args: SelectSubset<T, MetricSnapshotCreateArgs<ExtArgs>>): Prisma__MetricSnapshotClient<$Result.GetResult<Prisma.$MetricSnapshotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MetricSnapshots.
     * @param {MetricSnapshotCreateManyArgs} args - Arguments to create many MetricSnapshots.
     * @example
     * // Create many MetricSnapshots
     * const metricSnapshot = await prisma.metricSnapshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetricSnapshotCreateManyArgs>(args?: SelectSubset<T, MetricSnapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MetricSnapshot.
     * @param {MetricSnapshotDeleteArgs} args - Arguments to delete one MetricSnapshot.
     * @example
     * // Delete one MetricSnapshot
     * const MetricSnapshot = await prisma.metricSnapshot.delete({
     *   where: {
     *     // ... filter to delete one MetricSnapshot
     *   }
     * })
     * 
     */
    delete<T extends MetricSnapshotDeleteArgs>(args: SelectSubset<T, MetricSnapshotDeleteArgs<ExtArgs>>): Prisma__MetricSnapshotClient<$Result.GetResult<Prisma.$MetricSnapshotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MetricSnapshot.
     * @param {MetricSnapshotUpdateArgs} args - Arguments to update one MetricSnapshot.
     * @example
     * // Update one MetricSnapshot
     * const metricSnapshot = await prisma.metricSnapshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetricSnapshotUpdateArgs>(args: SelectSubset<T, MetricSnapshotUpdateArgs<ExtArgs>>): Prisma__MetricSnapshotClient<$Result.GetResult<Prisma.$MetricSnapshotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MetricSnapshots.
     * @param {MetricSnapshotDeleteManyArgs} args - Arguments to filter MetricSnapshots to delete.
     * @example
     * // Delete a few MetricSnapshots
     * const { count } = await prisma.metricSnapshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetricSnapshotDeleteManyArgs>(args?: SelectSubset<T, MetricSnapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetricSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricSnapshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MetricSnapshots
     * const metricSnapshot = await prisma.metricSnapshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetricSnapshotUpdateManyArgs>(args: SelectSubset<T, MetricSnapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MetricSnapshot.
     * @param {MetricSnapshotUpsertArgs} args - Arguments to update or create a MetricSnapshot.
     * @example
     * // Update or create a MetricSnapshot
     * const metricSnapshot = await prisma.metricSnapshot.upsert({
     *   create: {
     *     // ... data to create a MetricSnapshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MetricSnapshot we want to update
     *   }
     * })
     */
    upsert<T extends MetricSnapshotUpsertArgs>(args: SelectSubset<T, MetricSnapshotUpsertArgs<ExtArgs>>): Prisma__MetricSnapshotClient<$Result.GetResult<Prisma.$MetricSnapshotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MetricSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricSnapshotCountArgs} args - Arguments to filter MetricSnapshots to count.
     * @example
     * // Count the number of MetricSnapshots
     * const count = await prisma.metricSnapshot.count({
     *   where: {
     *     // ... the filter for the MetricSnapshots we want to count
     *   }
     * })
    **/
    count<T extends MetricSnapshotCountArgs>(
      args?: Subset<T, MetricSnapshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetricSnapshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MetricSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricSnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MetricSnapshotAggregateArgs>(args: Subset<T, MetricSnapshotAggregateArgs>): Prisma.PrismaPromise<GetMetricSnapshotAggregateType<T>>

    /**
     * Group by MetricSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricSnapshotGroupByArgs} args - Group by arguments.
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
      T extends MetricSnapshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetricSnapshotGroupByArgs['orderBy'] }
        : { orderBy?: MetricSnapshotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MetricSnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetricSnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MetricSnapshot model
   */
  readonly fields: MetricSnapshotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MetricSnapshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetricSnapshotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    socialAccount<T extends SocialAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SocialAccountDefaultArgs<ExtArgs>>): Prisma__SocialAccountClient<$Result.GetResult<Prisma.$SocialAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MetricSnapshot model
   */
  interface MetricSnapshotFieldRefs {
    readonly id: FieldRef<"MetricSnapshot", 'String'>
    readonly userId: FieldRef<"MetricSnapshot", 'String'>
    readonly socialAccountId: FieldRef<"MetricSnapshot", 'String'>
    readonly date: FieldRef<"MetricSnapshot", 'DateTime'>
    readonly reach: FieldRef<"MetricSnapshot", 'Int'>
    readonly impressions: FieldRef<"MetricSnapshot", 'Int'>
    readonly likes: FieldRef<"MetricSnapshot", 'Int'>
    readonly comments: FieldRef<"MetricSnapshot", 'Int'>
    readonly shares: FieldRef<"MetricSnapshot", 'Int'>
    readonly saves: FieldRef<"MetricSnapshot", 'Int'>
    readonly followers: FieldRef<"MetricSnapshot", 'Int'>
    readonly views: FieldRef<"MetricSnapshot", 'Int'>
    readonly clicks: FieldRef<"MetricSnapshot", 'Int'>
    readonly engagementRate: FieldRef<"MetricSnapshot", 'Float'>
    readonly platformRawJson: FieldRef<"MetricSnapshot", 'Json'>
    readonly createdAt: FieldRef<"MetricSnapshot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MetricSnapshot findUnique
   */
  export type MetricSnapshotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricSnapshot
     */
    select?: MetricSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricSnapshot
     */
    omit?: MetricSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which MetricSnapshot to fetch.
     */
    where: MetricSnapshotWhereUniqueInput
  }

  /**
   * MetricSnapshot findUniqueOrThrow
   */
  export type MetricSnapshotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricSnapshot
     */
    select?: MetricSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricSnapshot
     */
    omit?: MetricSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which MetricSnapshot to fetch.
     */
    where: MetricSnapshotWhereUniqueInput
  }

  /**
   * MetricSnapshot findFirst
   */
  export type MetricSnapshotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricSnapshot
     */
    select?: MetricSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricSnapshot
     */
    omit?: MetricSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which MetricSnapshot to fetch.
     */
    where?: MetricSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetricSnapshots to fetch.
     */
    orderBy?: MetricSnapshotOrderByWithRelationInput | MetricSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetricSnapshots.
     */
    cursor?: MetricSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetricSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetricSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetricSnapshots.
     */
    distinct?: MetricSnapshotScalarFieldEnum | MetricSnapshotScalarFieldEnum[]
  }

  /**
   * MetricSnapshot findFirstOrThrow
   */
  export type MetricSnapshotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricSnapshot
     */
    select?: MetricSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricSnapshot
     */
    omit?: MetricSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which MetricSnapshot to fetch.
     */
    where?: MetricSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetricSnapshots to fetch.
     */
    orderBy?: MetricSnapshotOrderByWithRelationInput | MetricSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetricSnapshots.
     */
    cursor?: MetricSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetricSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetricSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetricSnapshots.
     */
    distinct?: MetricSnapshotScalarFieldEnum | MetricSnapshotScalarFieldEnum[]
  }

  /**
   * MetricSnapshot findMany
   */
  export type MetricSnapshotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricSnapshot
     */
    select?: MetricSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricSnapshot
     */
    omit?: MetricSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which MetricSnapshots to fetch.
     */
    where?: MetricSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetricSnapshots to fetch.
     */
    orderBy?: MetricSnapshotOrderByWithRelationInput | MetricSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MetricSnapshots.
     */
    cursor?: MetricSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetricSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetricSnapshots.
     */
    skip?: number
    distinct?: MetricSnapshotScalarFieldEnum | MetricSnapshotScalarFieldEnum[]
  }

  /**
   * MetricSnapshot create
   */
  export type MetricSnapshotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricSnapshot
     */
    select?: MetricSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricSnapshot
     */
    omit?: MetricSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricSnapshotInclude<ExtArgs> | null
    /**
     * The data needed to create a MetricSnapshot.
     */
    data: XOR<MetricSnapshotCreateInput, MetricSnapshotUncheckedCreateInput>
  }

  /**
   * MetricSnapshot createMany
   */
  export type MetricSnapshotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MetricSnapshots.
     */
    data: MetricSnapshotCreateManyInput | MetricSnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MetricSnapshot update
   */
  export type MetricSnapshotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricSnapshot
     */
    select?: MetricSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricSnapshot
     */
    omit?: MetricSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricSnapshotInclude<ExtArgs> | null
    /**
     * The data needed to update a MetricSnapshot.
     */
    data: XOR<MetricSnapshotUpdateInput, MetricSnapshotUncheckedUpdateInput>
    /**
     * Choose, which MetricSnapshot to update.
     */
    where: MetricSnapshotWhereUniqueInput
  }

  /**
   * MetricSnapshot updateMany
   */
  export type MetricSnapshotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MetricSnapshots.
     */
    data: XOR<MetricSnapshotUpdateManyMutationInput, MetricSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which MetricSnapshots to update
     */
    where?: MetricSnapshotWhereInput
    /**
     * Limit how many MetricSnapshots to update.
     */
    limit?: number
  }

  /**
   * MetricSnapshot upsert
   */
  export type MetricSnapshotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricSnapshot
     */
    select?: MetricSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricSnapshot
     */
    omit?: MetricSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricSnapshotInclude<ExtArgs> | null
    /**
     * The filter to search for the MetricSnapshot to update in case it exists.
     */
    where: MetricSnapshotWhereUniqueInput
    /**
     * In case the MetricSnapshot found by the `where` argument doesn't exist, create a new MetricSnapshot with this data.
     */
    create: XOR<MetricSnapshotCreateInput, MetricSnapshotUncheckedCreateInput>
    /**
     * In case the MetricSnapshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetricSnapshotUpdateInput, MetricSnapshotUncheckedUpdateInput>
  }

  /**
   * MetricSnapshot delete
   */
  export type MetricSnapshotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricSnapshot
     */
    select?: MetricSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricSnapshot
     */
    omit?: MetricSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricSnapshotInclude<ExtArgs> | null
    /**
     * Filter which MetricSnapshot to delete.
     */
    where: MetricSnapshotWhereUniqueInput
  }

  /**
   * MetricSnapshot deleteMany
   */
  export type MetricSnapshotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetricSnapshots to delete
     */
    where?: MetricSnapshotWhereInput
    /**
     * Limit how many MetricSnapshots to delete.
     */
    limit?: number
  }

  /**
   * MetricSnapshot without action
   */
  export type MetricSnapshotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetricSnapshot
     */
    select?: MetricSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetricSnapshot
     */
    omit?: MetricSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricSnapshotInclude<ExtArgs> | null
  }


  /**
   * Model ContentItem
   */

  export type AggregateContentItem = {
    _count: ContentItemCountAggregateOutputType | null
    _avg: ContentItemAvgAggregateOutputType | null
    _sum: ContentItemSumAggregateOutputType | null
    _min: ContentItemMinAggregateOutputType | null
    _max: ContentItemMaxAggregateOutputType | null
  }

  export type ContentItemAvgAggregateOutputType = {
    reach: number | null
    impressions: number | null
    likes: number | null
    comments: number | null
    shares: number | null
    saves: number | null
    views: number | null
    clicks: number | null
    engagementRate: number | null
  }

  export type ContentItemSumAggregateOutputType = {
    reach: number | null
    impressions: number | null
    likes: number | null
    comments: number | null
    shares: number | null
    saves: number | null
    views: number | null
    clicks: number | null
    engagementRate: number | null
  }

  export type ContentItemMinAggregateOutputType = {
    id: string | null
    socialAccountId: string | null
    platformPostId: string | null
    title: string | null
    type: $Enums.ContentType | null
    caption: string | null
    publishedAt: Date | null
    url: string | null
    thumbnail: string | null
    reach: number | null
    impressions: number | null
    likes: number | null
    comments: number | null
    shares: number | null
    saves: number | null
    views: number | null
    clicks: number | null
    engagementRate: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentItemMaxAggregateOutputType = {
    id: string | null
    socialAccountId: string | null
    platformPostId: string | null
    title: string | null
    type: $Enums.ContentType | null
    caption: string | null
    publishedAt: Date | null
    url: string | null
    thumbnail: string | null
    reach: number | null
    impressions: number | null
    likes: number | null
    comments: number | null
    shares: number | null
    saves: number | null
    views: number | null
    clicks: number | null
    engagementRate: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentItemCountAggregateOutputType = {
    id: number
    socialAccountId: number
    platformPostId: number
    title: number
    type: number
    caption: number
    publishedAt: number
    url: number
    thumbnail: number
    reach: number
    impressions: number
    likes: number
    comments: number
    shares: number
    saves: number
    views: number
    clicks: number
    engagementRate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContentItemAvgAggregateInputType = {
    reach?: true
    impressions?: true
    likes?: true
    comments?: true
    shares?: true
    saves?: true
    views?: true
    clicks?: true
    engagementRate?: true
  }

  export type ContentItemSumAggregateInputType = {
    reach?: true
    impressions?: true
    likes?: true
    comments?: true
    shares?: true
    saves?: true
    views?: true
    clicks?: true
    engagementRate?: true
  }

  export type ContentItemMinAggregateInputType = {
    id?: true
    socialAccountId?: true
    platformPostId?: true
    title?: true
    type?: true
    caption?: true
    publishedAt?: true
    url?: true
    thumbnail?: true
    reach?: true
    impressions?: true
    likes?: true
    comments?: true
    shares?: true
    saves?: true
    views?: true
    clicks?: true
    engagementRate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentItemMaxAggregateInputType = {
    id?: true
    socialAccountId?: true
    platformPostId?: true
    title?: true
    type?: true
    caption?: true
    publishedAt?: true
    url?: true
    thumbnail?: true
    reach?: true
    impressions?: true
    likes?: true
    comments?: true
    shares?: true
    saves?: true
    views?: true
    clicks?: true
    engagementRate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentItemCountAggregateInputType = {
    id?: true
    socialAccountId?: true
    platformPostId?: true
    title?: true
    type?: true
    caption?: true
    publishedAt?: true
    url?: true
    thumbnail?: true
    reach?: true
    impressions?: true
    likes?: true
    comments?: true
    shares?: true
    saves?: true
    views?: true
    clicks?: true
    engagementRate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContentItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentItem to aggregate.
     */
    where?: ContentItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentItems to fetch.
     */
    orderBy?: ContentItemOrderByWithRelationInput | ContentItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContentItems
    **/
    _count?: true | ContentItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContentItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContentItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentItemMaxAggregateInputType
  }

  export type GetContentItemAggregateType<T extends ContentItemAggregateArgs> = {
        [P in keyof T & keyof AggregateContentItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContentItem[P]>
      : GetScalarType<T[P], AggregateContentItem[P]>
  }




  export type ContentItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentItemWhereInput
    orderBy?: ContentItemOrderByWithAggregationInput | ContentItemOrderByWithAggregationInput[]
    by: ContentItemScalarFieldEnum[] | ContentItemScalarFieldEnum
    having?: ContentItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentItemCountAggregateInputType | true
    _avg?: ContentItemAvgAggregateInputType
    _sum?: ContentItemSumAggregateInputType
    _min?: ContentItemMinAggregateInputType
    _max?: ContentItemMaxAggregateInputType
  }

  export type ContentItemGroupByOutputType = {
    id: string
    socialAccountId: string
    platformPostId: string
    title: string | null
    type: $Enums.ContentType
    caption: string | null
    publishedAt: Date
    url: string | null
    thumbnail: string | null
    reach: number
    impressions: number
    likes: number
    comments: number
    shares: number
    saves: number
    views: number
    clicks: number
    engagementRate: number
    createdAt: Date
    updatedAt: Date
    _count: ContentItemCountAggregateOutputType | null
    _avg: ContentItemAvgAggregateOutputType | null
    _sum: ContentItemSumAggregateOutputType | null
    _min: ContentItemMinAggregateOutputType | null
    _max: ContentItemMaxAggregateOutputType | null
  }

  type GetContentItemGroupByPayload<T extends ContentItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentItemGroupByOutputType[P]>
            : GetScalarType<T[P], ContentItemGroupByOutputType[P]>
        }
      >
    >


  export type ContentItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    socialAccountId?: boolean
    platformPostId?: boolean
    title?: boolean
    type?: boolean
    caption?: boolean
    publishedAt?: boolean
    url?: boolean
    thumbnail?: boolean
    reach?: boolean
    impressions?: boolean
    likes?: boolean
    comments?: boolean
    shares?: boolean
    saves?: boolean
    views?: boolean
    clicks?: boolean
    engagementRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    socialAccount?: boolean | SocialAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentItem"]>



  export type ContentItemSelectScalar = {
    id?: boolean
    socialAccountId?: boolean
    platformPostId?: boolean
    title?: boolean
    type?: boolean
    caption?: boolean
    publishedAt?: boolean
    url?: boolean
    thumbnail?: boolean
    reach?: boolean
    impressions?: boolean
    likes?: boolean
    comments?: boolean
    shares?: boolean
    saves?: boolean
    views?: boolean
    clicks?: boolean
    engagementRate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContentItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "socialAccountId" | "platformPostId" | "title" | "type" | "caption" | "publishedAt" | "url" | "thumbnail" | "reach" | "impressions" | "likes" | "comments" | "shares" | "saves" | "views" | "clicks" | "engagementRate" | "createdAt" | "updatedAt", ExtArgs["result"]["contentItem"]>
  export type ContentItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    socialAccount?: boolean | SocialAccountDefaultArgs<ExtArgs>
  }

  export type $ContentItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContentItem"
    objects: {
      socialAccount: Prisma.$SocialAccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      socialAccountId: string
      platformPostId: string
      title: string | null
      type: $Enums.ContentType
      caption: string | null
      publishedAt: Date
      url: string | null
      thumbnail: string | null
      reach: number
      impressions: number
      likes: number
      comments: number
      shares: number
      saves: number
      views: number
      clicks: number
      engagementRate: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contentItem"]>
    composites: {}
  }

  type ContentItemGetPayload<S extends boolean | null | undefined | ContentItemDefaultArgs> = $Result.GetResult<Prisma.$ContentItemPayload, S>

  type ContentItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContentItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContentItemCountAggregateInputType | true
    }

  export interface ContentItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContentItem'], meta: { name: 'ContentItem' } }
    /**
     * Find zero or one ContentItem that matches the filter.
     * @param {ContentItemFindUniqueArgs} args - Arguments to find a ContentItem
     * @example
     * // Get one ContentItem
     * const contentItem = await prisma.contentItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentItemFindUniqueArgs>(args: SelectSubset<T, ContentItemFindUniqueArgs<ExtArgs>>): Prisma__ContentItemClient<$Result.GetResult<Prisma.$ContentItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContentItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentItemFindUniqueOrThrowArgs} args - Arguments to find a ContentItem
     * @example
     * // Get one ContentItem
     * const contentItem = await prisma.contentItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentItemClient<$Result.GetResult<Prisma.$ContentItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentItemFindFirstArgs} args - Arguments to find a ContentItem
     * @example
     * // Get one ContentItem
     * const contentItem = await prisma.contentItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentItemFindFirstArgs>(args?: SelectSubset<T, ContentItemFindFirstArgs<ExtArgs>>): Prisma__ContentItemClient<$Result.GetResult<Prisma.$ContentItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentItemFindFirstOrThrowArgs} args - Arguments to find a ContentItem
     * @example
     * // Get one ContentItem
     * const contentItem = await prisma.contentItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentItemClient<$Result.GetResult<Prisma.$ContentItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContentItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContentItems
     * const contentItems = await prisma.contentItem.findMany()
     * 
     * // Get first 10 ContentItems
     * const contentItems = await prisma.contentItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentItemWithIdOnly = await prisma.contentItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentItemFindManyArgs>(args?: SelectSubset<T, ContentItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContentItem.
     * @param {ContentItemCreateArgs} args - Arguments to create a ContentItem.
     * @example
     * // Create one ContentItem
     * const ContentItem = await prisma.contentItem.create({
     *   data: {
     *     // ... data to create a ContentItem
     *   }
     * })
     * 
     */
    create<T extends ContentItemCreateArgs>(args: SelectSubset<T, ContentItemCreateArgs<ExtArgs>>): Prisma__ContentItemClient<$Result.GetResult<Prisma.$ContentItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContentItems.
     * @param {ContentItemCreateManyArgs} args - Arguments to create many ContentItems.
     * @example
     * // Create many ContentItems
     * const contentItem = await prisma.contentItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentItemCreateManyArgs>(args?: SelectSubset<T, ContentItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ContentItem.
     * @param {ContentItemDeleteArgs} args - Arguments to delete one ContentItem.
     * @example
     * // Delete one ContentItem
     * const ContentItem = await prisma.contentItem.delete({
     *   where: {
     *     // ... filter to delete one ContentItem
     *   }
     * })
     * 
     */
    delete<T extends ContentItemDeleteArgs>(args: SelectSubset<T, ContentItemDeleteArgs<ExtArgs>>): Prisma__ContentItemClient<$Result.GetResult<Prisma.$ContentItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContentItem.
     * @param {ContentItemUpdateArgs} args - Arguments to update one ContentItem.
     * @example
     * // Update one ContentItem
     * const contentItem = await prisma.contentItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentItemUpdateArgs>(args: SelectSubset<T, ContentItemUpdateArgs<ExtArgs>>): Prisma__ContentItemClient<$Result.GetResult<Prisma.$ContentItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContentItems.
     * @param {ContentItemDeleteManyArgs} args - Arguments to filter ContentItems to delete.
     * @example
     * // Delete a few ContentItems
     * const { count } = await prisma.contentItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentItemDeleteManyArgs>(args?: SelectSubset<T, ContentItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContentItems
     * const contentItem = await prisma.contentItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentItemUpdateManyArgs>(args: SelectSubset<T, ContentItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContentItem.
     * @param {ContentItemUpsertArgs} args - Arguments to update or create a ContentItem.
     * @example
     * // Update or create a ContentItem
     * const contentItem = await prisma.contentItem.upsert({
     *   create: {
     *     // ... data to create a ContentItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContentItem we want to update
     *   }
     * })
     */
    upsert<T extends ContentItemUpsertArgs>(args: SelectSubset<T, ContentItemUpsertArgs<ExtArgs>>): Prisma__ContentItemClient<$Result.GetResult<Prisma.$ContentItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContentItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentItemCountArgs} args - Arguments to filter ContentItems to count.
     * @example
     * // Count the number of ContentItems
     * const count = await prisma.contentItem.count({
     *   where: {
     *     // ... the filter for the ContentItems we want to count
     *   }
     * })
    **/
    count<T extends ContentItemCountArgs>(
      args?: Subset<T, ContentItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContentItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContentItemAggregateArgs>(args: Subset<T, ContentItemAggregateArgs>): Prisma.PrismaPromise<GetContentItemAggregateType<T>>

    /**
     * Group by ContentItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentItemGroupByArgs} args - Group by arguments.
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
      T extends ContentItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentItemGroupByArgs['orderBy'] }
        : { orderBy?: ContentItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContentItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContentItem model
   */
  readonly fields: ContentItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContentItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    socialAccount<T extends SocialAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SocialAccountDefaultArgs<ExtArgs>>): Prisma__SocialAccountClient<$Result.GetResult<Prisma.$SocialAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ContentItem model
   */
  interface ContentItemFieldRefs {
    readonly id: FieldRef<"ContentItem", 'String'>
    readonly socialAccountId: FieldRef<"ContentItem", 'String'>
    readonly platformPostId: FieldRef<"ContentItem", 'String'>
    readonly title: FieldRef<"ContentItem", 'String'>
    readonly type: FieldRef<"ContentItem", 'ContentType'>
    readonly caption: FieldRef<"ContentItem", 'String'>
    readonly publishedAt: FieldRef<"ContentItem", 'DateTime'>
    readonly url: FieldRef<"ContentItem", 'String'>
    readonly thumbnail: FieldRef<"ContentItem", 'String'>
    readonly reach: FieldRef<"ContentItem", 'Int'>
    readonly impressions: FieldRef<"ContentItem", 'Int'>
    readonly likes: FieldRef<"ContentItem", 'Int'>
    readonly comments: FieldRef<"ContentItem", 'Int'>
    readonly shares: FieldRef<"ContentItem", 'Int'>
    readonly saves: FieldRef<"ContentItem", 'Int'>
    readonly views: FieldRef<"ContentItem", 'Int'>
    readonly clicks: FieldRef<"ContentItem", 'Int'>
    readonly engagementRate: FieldRef<"ContentItem", 'Float'>
    readonly createdAt: FieldRef<"ContentItem", 'DateTime'>
    readonly updatedAt: FieldRef<"ContentItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContentItem findUnique
   */
  export type ContentItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentItem
     */
    select?: ContentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentItem
     */
    omit?: ContentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentItemInclude<ExtArgs> | null
    /**
     * Filter, which ContentItem to fetch.
     */
    where: ContentItemWhereUniqueInput
  }

  /**
   * ContentItem findUniqueOrThrow
   */
  export type ContentItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentItem
     */
    select?: ContentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentItem
     */
    omit?: ContentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentItemInclude<ExtArgs> | null
    /**
     * Filter, which ContentItem to fetch.
     */
    where: ContentItemWhereUniqueInput
  }

  /**
   * ContentItem findFirst
   */
  export type ContentItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentItem
     */
    select?: ContentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentItem
     */
    omit?: ContentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentItemInclude<ExtArgs> | null
    /**
     * Filter, which ContentItem to fetch.
     */
    where?: ContentItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentItems to fetch.
     */
    orderBy?: ContentItemOrderByWithRelationInput | ContentItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentItems.
     */
    cursor?: ContentItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentItems.
     */
    distinct?: ContentItemScalarFieldEnum | ContentItemScalarFieldEnum[]
  }

  /**
   * ContentItem findFirstOrThrow
   */
  export type ContentItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentItem
     */
    select?: ContentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentItem
     */
    omit?: ContentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentItemInclude<ExtArgs> | null
    /**
     * Filter, which ContentItem to fetch.
     */
    where?: ContentItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentItems to fetch.
     */
    orderBy?: ContentItemOrderByWithRelationInput | ContentItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentItems.
     */
    cursor?: ContentItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentItems.
     */
    distinct?: ContentItemScalarFieldEnum | ContentItemScalarFieldEnum[]
  }

  /**
   * ContentItem findMany
   */
  export type ContentItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentItem
     */
    select?: ContentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentItem
     */
    omit?: ContentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentItemInclude<ExtArgs> | null
    /**
     * Filter, which ContentItems to fetch.
     */
    where?: ContentItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentItems to fetch.
     */
    orderBy?: ContentItemOrderByWithRelationInput | ContentItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContentItems.
     */
    cursor?: ContentItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentItems.
     */
    skip?: number
    distinct?: ContentItemScalarFieldEnum | ContentItemScalarFieldEnum[]
  }

  /**
   * ContentItem create
   */
  export type ContentItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentItem
     */
    select?: ContentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentItem
     */
    omit?: ContentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ContentItem.
     */
    data: XOR<ContentItemCreateInput, ContentItemUncheckedCreateInput>
  }

  /**
   * ContentItem createMany
   */
  export type ContentItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContentItems.
     */
    data: ContentItemCreateManyInput | ContentItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContentItem update
   */
  export type ContentItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentItem
     */
    select?: ContentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentItem
     */
    omit?: ContentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ContentItem.
     */
    data: XOR<ContentItemUpdateInput, ContentItemUncheckedUpdateInput>
    /**
     * Choose, which ContentItem to update.
     */
    where: ContentItemWhereUniqueInput
  }

  /**
   * ContentItem updateMany
   */
  export type ContentItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContentItems.
     */
    data: XOR<ContentItemUpdateManyMutationInput, ContentItemUncheckedUpdateManyInput>
    /**
     * Filter which ContentItems to update
     */
    where?: ContentItemWhereInput
    /**
     * Limit how many ContentItems to update.
     */
    limit?: number
  }

  /**
   * ContentItem upsert
   */
  export type ContentItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentItem
     */
    select?: ContentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentItem
     */
    omit?: ContentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ContentItem to update in case it exists.
     */
    where: ContentItemWhereUniqueInput
    /**
     * In case the ContentItem found by the `where` argument doesn't exist, create a new ContentItem with this data.
     */
    create: XOR<ContentItemCreateInput, ContentItemUncheckedCreateInput>
    /**
     * In case the ContentItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentItemUpdateInput, ContentItemUncheckedUpdateInput>
  }

  /**
   * ContentItem delete
   */
  export type ContentItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentItem
     */
    select?: ContentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentItem
     */
    omit?: ContentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentItemInclude<ExtArgs> | null
    /**
     * Filter which ContentItem to delete.
     */
    where: ContentItemWhereUniqueInput
  }

  /**
   * ContentItem deleteMany
   */
  export type ContentItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentItems to delete
     */
    where?: ContentItemWhereInput
    /**
     * Limit how many ContentItems to delete.
     */
    limit?: number
  }

  /**
   * ContentItem without action
   */
  export type ContentItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentItem
     */
    select?: ContentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentItem
     */
    omit?: ContentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentItemInclude<ExtArgs> | null
  }


  /**
   * Model Goal
   */

  export type AggregateGoal = {
    _count: GoalCountAggregateOutputType | null
    _avg: GoalAvgAggregateOutputType | null
    _sum: GoalSumAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  export type GoalAvgAggregateOutputType = {
    targetValue: number | null
    currentValue: number | null
  }

  export type GoalSumAggregateOutputType = {
    targetValue: number | null
    currentValue: number | null
  }

  export type GoalMinAggregateOutputType = {
    id: string | null
    userId: string | null
    metricType: $Enums.MetricType | null
    targetValue: number | null
    currentValue: number | null
    period: $Enums.Period | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.GoalStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoalMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    metricType: $Enums.MetricType | null
    targetValue: number | null
    currentValue: number | null
    period: $Enums.Period | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.GoalStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoalCountAggregateOutputType = {
    id: number
    userId: number
    metricType: number
    targetValue: number
    currentValue: number
    period: number
    startDate: number
    endDate: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GoalAvgAggregateInputType = {
    targetValue?: true
    currentValue?: true
  }

  export type GoalSumAggregateInputType = {
    targetValue?: true
    currentValue?: true
  }

  export type GoalMinAggregateInputType = {
    id?: true
    userId?: true
    metricType?: true
    targetValue?: true
    currentValue?: true
    period?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoalMaxAggregateInputType = {
    id?: true
    userId?: true
    metricType?: true
    targetValue?: true
    currentValue?: true
    period?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoalCountAggregateInputType = {
    id?: true
    userId?: true
    metricType?: true
    targetValue?: true
    currentValue?: true
    period?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goal to aggregate.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Goals
    **/
    _count?: true | GoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GoalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GoalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoalMaxAggregateInputType
  }

  export type GetGoalAggregateType<T extends GoalAggregateArgs> = {
        [P in keyof T & keyof AggregateGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoal[P]>
      : GetScalarType<T[P], AggregateGoal[P]>
  }




  export type GoalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithAggregationInput | GoalOrderByWithAggregationInput[]
    by: GoalScalarFieldEnum[] | GoalScalarFieldEnum
    having?: GoalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoalCountAggregateInputType | true
    _avg?: GoalAvgAggregateInputType
    _sum?: GoalSumAggregateInputType
    _min?: GoalMinAggregateInputType
    _max?: GoalMaxAggregateInputType
  }

  export type GoalGroupByOutputType = {
    id: string
    userId: string
    metricType: $Enums.MetricType
    targetValue: number
    currentValue: number
    period: $Enums.Period
    startDate: Date
    endDate: Date
    status: $Enums.GoalStatus
    createdAt: Date
    updatedAt: Date
    _count: GoalCountAggregateOutputType | null
    _avg: GoalAvgAggregateOutputType | null
    _sum: GoalSumAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  type GetGoalGroupByPayload<T extends GoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoalGroupByOutputType[P]>
            : GetScalarType<T[P], GoalGroupByOutputType[P]>
        }
      >
    >


  export type GoalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    metricType?: boolean
    targetValue?: boolean
    currentValue?: boolean
    period?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tasks?: boolean | Goal$tasksArgs<ExtArgs>
    _count?: boolean | GoalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>



  export type GoalSelectScalar = {
    id?: boolean
    userId?: boolean
    metricType?: boolean
    targetValue?: boolean
    currentValue?: boolean
    period?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GoalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "metricType" | "targetValue" | "currentValue" | "period" | "startDate" | "endDate" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["goal"]>
  export type GoalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tasks?: boolean | Goal$tasksArgs<ExtArgs>
    _count?: boolean | GoalCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GoalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Goal"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      metricType: $Enums.MetricType
      targetValue: number
      currentValue: number
      period: $Enums.Period
      startDate: Date
      endDate: Date
      status: $Enums.GoalStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["goal"]>
    composites: {}
  }

  type GoalGetPayload<S extends boolean | null | undefined | GoalDefaultArgs> = $Result.GetResult<Prisma.$GoalPayload, S>

  type GoalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GoalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GoalCountAggregateInputType | true
    }

  export interface GoalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Goal'], meta: { name: 'Goal' } }
    /**
     * Find zero or one Goal that matches the filter.
     * @param {GoalFindUniqueArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GoalFindUniqueArgs>(args: SelectSubset<T, GoalFindUniqueArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Goal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GoalFindUniqueOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GoalFindUniqueOrThrowArgs>(args: SelectSubset<T, GoalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GoalFindFirstArgs>(args?: SelectSubset<T, GoalFindFirstArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GoalFindFirstOrThrowArgs>(args?: SelectSubset<T, GoalFindFirstOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Goals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goals
     * const goals = await prisma.goal.findMany()
     * 
     * // Get first 10 Goals
     * const goals = await prisma.goal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const goalWithIdOnly = await prisma.goal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GoalFindManyArgs>(args?: SelectSubset<T, GoalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Goal.
     * @param {GoalCreateArgs} args - Arguments to create a Goal.
     * @example
     * // Create one Goal
     * const Goal = await prisma.goal.create({
     *   data: {
     *     // ... data to create a Goal
     *   }
     * })
     * 
     */
    create<T extends GoalCreateArgs>(args: SelectSubset<T, GoalCreateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Goals.
     * @param {GoalCreateManyArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GoalCreateManyArgs>(args?: SelectSubset<T, GoalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Goal.
     * @param {GoalDeleteArgs} args - Arguments to delete one Goal.
     * @example
     * // Delete one Goal
     * const Goal = await prisma.goal.delete({
     *   where: {
     *     // ... filter to delete one Goal
     *   }
     * })
     * 
     */
    delete<T extends GoalDeleteArgs>(args: SelectSubset<T, GoalDeleteArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Goal.
     * @param {GoalUpdateArgs} args - Arguments to update one Goal.
     * @example
     * // Update one Goal
     * const goal = await prisma.goal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GoalUpdateArgs>(args: SelectSubset<T, GoalUpdateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Goals.
     * @param {GoalDeleteManyArgs} args - Arguments to filter Goals to delete.
     * @example
     * // Delete a few Goals
     * const { count } = await prisma.goal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GoalDeleteManyArgs>(args?: SelectSubset<T, GoalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GoalUpdateManyArgs>(args: SelectSubset<T, GoalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Goal.
     * @param {GoalUpsertArgs} args - Arguments to update or create a Goal.
     * @example
     * // Update or create a Goal
     * const goal = await prisma.goal.upsert({
     *   create: {
     *     // ... data to create a Goal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goal we want to update
     *   }
     * })
     */
    upsert<T extends GoalUpsertArgs>(args: SelectSubset<T, GoalUpsertArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalCountArgs} args - Arguments to filter Goals to count.
     * @example
     * // Count the number of Goals
     * const count = await prisma.goal.count({
     *   where: {
     *     // ... the filter for the Goals we want to count
     *   }
     * })
    **/
    count<T extends GoalCountArgs>(
      args?: Subset<T, GoalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GoalAggregateArgs>(args: Subset<T, GoalAggregateArgs>): Prisma.PrismaPromise<GetGoalAggregateType<T>>

    /**
     * Group by Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalGroupByArgs} args - Group by arguments.
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
      T extends GoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoalGroupByArgs['orderBy'] }
        : { orderBy?: GoalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Goal model
   */
  readonly fields: GoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Goal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tasks<T extends Goal$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Goal$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Goal model
   */
  interface GoalFieldRefs {
    readonly id: FieldRef<"Goal", 'String'>
    readonly userId: FieldRef<"Goal", 'String'>
    readonly metricType: FieldRef<"Goal", 'MetricType'>
    readonly targetValue: FieldRef<"Goal", 'Float'>
    readonly currentValue: FieldRef<"Goal", 'Float'>
    readonly period: FieldRef<"Goal", 'Period'>
    readonly startDate: FieldRef<"Goal", 'DateTime'>
    readonly endDate: FieldRef<"Goal", 'DateTime'>
    readonly status: FieldRef<"Goal", 'GoalStatus'>
    readonly createdAt: FieldRef<"Goal", 'DateTime'>
    readonly updatedAt: FieldRef<"Goal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Goal findUnique
   */
  export type GoalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findUniqueOrThrow
   */
  export type GoalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findFirst
   */
  export type GoalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findFirstOrThrow
   */
  export type GoalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findMany
   */
  export type GoalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goals to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal create
   */
  export type GoalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to create a Goal.
     */
    data: XOR<GoalCreateInput, GoalUncheckedCreateInput>
  }

  /**
   * Goal createMany
   */
  export type GoalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Goal update
   */
  export type GoalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to update a Goal.
     */
    data: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
    /**
     * Choose, which Goal to update.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal updateMany
   */
  export type GoalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to update.
     */
    limit?: number
  }

  /**
   * Goal upsert
   */
  export type GoalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The filter to search for the Goal to update in case it exists.
     */
    where: GoalWhereUniqueInput
    /**
     * In case the Goal found by the `where` argument doesn't exist, create a new Goal with this data.
     */
    create: XOR<GoalCreateInput, GoalUncheckedCreateInput>
    /**
     * In case the Goal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
  }

  /**
   * Goal delete
   */
  export type GoalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter which Goal to delete.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal deleteMany
   */
  export type GoalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goals to delete
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to delete.
     */
    limit?: number
  }

  /**
   * Goal.tasks
   */
  export type Goal$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Goal without action
   */
  export type GoalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    userId: string | null
    goalId: string | null
    title: string | null
    description: string | null
    dueDate: Date | null
    status: $Enums.TaskStatus | null
    priority: $Enums.TaskPriority | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    goalId: string | null
    title: string | null
    description: string | null
    dueDate: Date | null
    status: $Enums.TaskStatus | null
    priority: $Enums.TaskPriority | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    userId: number
    goalId: number
    title: number
    description: number
    dueDate: number
    status: number
    priority: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaskMinAggregateInputType = {
    id?: true
    userId?: true
    goalId?: true
    title?: true
    description?: true
    dueDate?: true
    status?: true
    priority?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    userId?: true
    goalId?: true
    title?: true
    description?: true
    dueDate?: true
    status?: true
    priority?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    userId?: true
    goalId?: true
    title?: true
    description?: true
    dueDate?: true
    status?: true
    priority?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    userId: string
    goalId: string | null
    title: string
    description: string | null
    dueDate: Date | null
    status: $Enums.TaskStatus
    priority: $Enums.TaskPriority
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    goalId?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    status?: boolean
    priority?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | Task$goalArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>



  export type TaskSelectScalar = {
    id?: boolean
    userId?: boolean
    goalId?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    status?: boolean
    priority?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "goalId" | "title" | "description" | "dueDate" | "status" | "priority" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    goal?: boolean | Task$goalArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      goal: Prisma.$GoalPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      goalId: string | null
      title: string
      description: string | null
      dueDate: Date | null
      status: $Enums.TaskStatus
      priority: $Enums.TaskPriority
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    goal<T extends Task$goalArgs<ExtArgs> = {}>(args?: Subset<T, Task$goalArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly userId: FieldRef<"Task", 'String'>
    readonly goalId: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly dueDate: FieldRef<"Task", 'DateTime'>
    readonly status: FieldRef<"Task", 'TaskStatus'>
    readonly priority: FieldRef<"Task", 'TaskPriority'>
    readonly completedAt: FieldRef<"Task", 'DateTime'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.goal
   */
  export type Task$goalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    where?: GoalWhereInput
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model ContentIdea
   */

  export type AggregateContentIdea = {
    _count: ContentIdeaCountAggregateOutputType | null
    _avg: ContentIdeaAvgAggregateOutputType | null
    _sum: ContentIdeaSumAggregateOutputType | null
    _min: ContentIdeaMinAggregateOutputType | null
    _max: ContentIdeaMaxAggregateOutputType | null
  }

  export type ContentIdeaAvgAggregateOutputType = {
    confidenceScore: number | null
  }

  export type ContentIdeaSumAggregateOutputType = {
    confidenceScore: number | null
  }

  export type ContentIdeaMinAggregateOutputType = {
    id: string | null
    userId: string | null
    platform: $Enums.Platform | null
    topic: string | null
    suggestedCaption: string | null
    suggestedHashtags: string | null
    confidenceScore: number | null
    status: $Enums.IdeaStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentIdeaMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    platform: $Enums.Platform | null
    topic: string | null
    suggestedCaption: string | null
    suggestedHashtags: string | null
    confidenceScore: number | null
    status: $Enums.IdeaStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentIdeaCountAggregateOutputType = {
    id: number
    userId: number
    platform: number
    topic: number
    suggestedCaption: number
    suggestedHashtags: number
    confidenceScore: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContentIdeaAvgAggregateInputType = {
    confidenceScore?: true
  }

  export type ContentIdeaSumAggregateInputType = {
    confidenceScore?: true
  }

  export type ContentIdeaMinAggregateInputType = {
    id?: true
    userId?: true
    platform?: true
    topic?: true
    suggestedCaption?: true
    suggestedHashtags?: true
    confidenceScore?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentIdeaMaxAggregateInputType = {
    id?: true
    userId?: true
    platform?: true
    topic?: true
    suggestedCaption?: true
    suggestedHashtags?: true
    confidenceScore?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentIdeaCountAggregateInputType = {
    id?: true
    userId?: true
    platform?: true
    topic?: true
    suggestedCaption?: true
    suggestedHashtags?: true
    confidenceScore?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContentIdeaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentIdea to aggregate.
     */
    where?: ContentIdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentIdeas to fetch.
     */
    orderBy?: ContentIdeaOrderByWithRelationInput | ContentIdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentIdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentIdeas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentIdeas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContentIdeas
    **/
    _count?: true | ContentIdeaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContentIdeaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContentIdeaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentIdeaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentIdeaMaxAggregateInputType
  }

  export type GetContentIdeaAggregateType<T extends ContentIdeaAggregateArgs> = {
        [P in keyof T & keyof AggregateContentIdea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContentIdea[P]>
      : GetScalarType<T[P], AggregateContentIdea[P]>
  }




  export type ContentIdeaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentIdeaWhereInput
    orderBy?: ContentIdeaOrderByWithAggregationInput | ContentIdeaOrderByWithAggregationInput[]
    by: ContentIdeaScalarFieldEnum[] | ContentIdeaScalarFieldEnum
    having?: ContentIdeaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentIdeaCountAggregateInputType | true
    _avg?: ContentIdeaAvgAggregateInputType
    _sum?: ContentIdeaSumAggregateInputType
    _min?: ContentIdeaMinAggregateInputType
    _max?: ContentIdeaMaxAggregateInputType
  }

  export type ContentIdeaGroupByOutputType = {
    id: string
    userId: string
    platform: $Enums.Platform | null
    topic: string
    suggestedCaption: string | null
    suggestedHashtags: string | null
    confidenceScore: number
    status: $Enums.IdeaStatus
    createdAt: Date
    updatedAt: Date
    _count: ContentIdeaCountAggregateOutputType | null
    _avg: ContentIdeaAvgAggregateOutputType | null
    _sum: ContentIdeaSumAggregateOutputType | null
    _min: ContentIdeaMinAggregateOutputType | null
    _max: ContentIdeaMaxAggregateOutputType | null
  }

  type GetContentIdeaGroupByPayload<T extends ContentIdeaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentIdeaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentIdeaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentIdeaGroupByOutputType[P]>
            : GetScalarType<T[P], ContentIdeaGroupByOutputType[P]>
        }
      >
    >


  export type ContentIdeaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    platform?: boolean
    topic?: boolean
    suggestedCaption?: boolean
    suggestedHashtags?: boolean
    confidenceScore?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentIdea"]>



  export type ContentIdeaSelectScalar = {
    id?: boolean
    userId?: boolean
    platform?: boolean
    topic?: boolean
    suggestedCaption?: boolean
    suggestedHashtags?: boolean
    confidenceScore?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContentIdeaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "platform" | "topic" | "suggestedCaption" | "suggestedHashtags" | "confidenceScore" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["contentIdea"]>
  export type ContentIdeaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ContentIdeaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContentIdea"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      platform: $Enums.Platform | null
      topic: string
      suggestedCaption: string | null
      suggestedHashtags: string | null
      confidenceScore: number
      status: $Enums.IdeaStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contentIdea"]>
    composites: {}
  }

  type ContentIdeaGetPayload<S extends boolean | null | undefined | ContentIdeaDefaultArgs> = $Result.GetResult<Prisma.$ContentIdeaPayload, S>

  type ContentIdeaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContentIdeaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContentIdeaCountAggregateInputType | true
    }

  export interface ContentIdeaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContentIdea'], meta: { name: 'ContentIdea' } }
    /**
     * Find zero or one ContentIdea that matches the filter.
     * @param {ContentIdeaFindUniqueArgs} args - Arguments to find a ContentIdea
     * @example
     * // Get one ContentIdea
     * const contentIdea = await prisma.contentIdea.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentIdeaFindUniqueArgs>(args: SelectSubset<T, ContentIdeaFindUniqueArgs<ExtArgs>>): Prisma__ContentIdeaClient<$Result.GetResult<Prisma.$ContentIdeaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContentIdea that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentIdeaFindUniqueOrThrowArgs} args - Arguments to find a ContentIdea
     * @example
     * // Get one ContentIdea
     * const contentIdea = await prisma.contentIdea.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentIdeaFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentIdeaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentIdeaClient<$Result.GetResult<Prisma.$ContentIdeaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentIdea that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentIdeaFindFirstArgs} args - Arguments to find a ContentIdea
     * @example
     * // Get one ContentIdea
     * const contentIdea = await prisma.contentIdea.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentIdeaFindFirstArgs>(args?: SelectSubset<T, ContentIdeaFindFirstArgs<ExtArgs>>): Prisma__ContentIdeaClient<$Result.GetResult<Prisma.$ContentIdeaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentIdea that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentIdeaFindFirstOrThrowArgs} args - Arguments to find a ContentIdea
     * @example
     * // Get one ContentIdea
     * const contentIdea = await prisma.contentIdea.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentIdeaFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentIdeaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentIdeaClient<$Result.GetResult<Prisma.$ContentIdeaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContentIdeas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentIdeaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContentIdeas
     * const contentIdeas = await prisma.contentIdea.findMany()
     * 
     * // Get first 10 ContentIdeas
     * const contentIdeas = await prisma.contentIdea.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentIdeaWithIdOnly = await prisma.contentIdea.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentIdeaFindManyArgs>(args?: SelectSubset<T, ContentIdeaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentIdeaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContentIdea.
     * @param {ContentIdeaCreateArgs} args - Arguments to create a ContentIdea.
     * @example
     * // Create one ContentIdea
     * const ContentIdea = await prisma.contentIdea.create({
     *   data: {
     *     // ... data to create a ContentIdea
     *   }
     * })
     * 
     */
    create<T extends ContentIdeaCreateArgs>(args: SelectSubset<T, ContentIdeaCreateArgs<ExtArgs>>): Prisma__ContentIdeaClient<$Result.GetResult<Prisma.$ContentIdeaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContentIdeas.
     * @param {ContentIdeaCreateManyArgs} args - Arguments to create many ContentIdeas.
     * @example
     * // Create many ContentIdeas
     * const contentIdea = await prisma.contentIdea.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentIdeaCreateManyArgs>(args?: SelectSubset<T, ContentIdeaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ContentIdea.
     * @param {ContentIdeaDeleteArgs} args - Arguments to delete one ContentIdea.
     * @example
     * // Delete one ContentIdea
     * const ContentIdea = await prisma.contentIdea.delete({
     *   where: {
     *     // ... filter to delete one ContentIdea
     *   }
     * })
     * 
     */
    delete<T extends ContentIdeaDeleteArgs>(args: SelectSubset<T, ContentIdeaDeleteArgs<ExtArgs>>): Prisma__ContentIdeaClient<$Result.GetResult<Prisma.$ContentIdeaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContentIdea.
     * @param {ContentIdeaUpdateArgs} args - Arguments to update one ContentIdea.
     * @example
     * // Update one ContentIdea
     * const contentIdea = await prisma.contentIdea.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentIdeaUpdateArgs>(args: SelectSubset<T, ContentIdeaUpdateArgs<ExtArgs>>): Prisma__ContentIdeaClient<$Result.GetResult<Prisma.$ContentIdeaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContentIdeas.
     * @param {ContentIdeaDeleteManyArgs} args - Arguments to filter ContentIdeas to delete.
     * @example
     * // Delete a few ContentIdeas
     * const { count } = await prisma.contentIdea.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentIdeaDeleteManyArgs>(args?: SelectSubset<T, ContentIdeaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentIdeas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentIdeaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContentIdeas
     * const contentIdea = await prisma.contentIdea.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentIdeaUpdateManyArgs>(args: SelectSubset<T, ContentIdeaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContentIdea.
     * @param {ContentIdeaUpsertArgs} args - Arguments to update or create a ContentIdea.
     * @example
     * // Update or create a ContentIdea
     * const contentIdea = await prisma.contentIdea.upsert({
     *   create: {
     *     // ... data to create a ContentIdea
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContentIdea we want to update
     *   }
     * })
     */
    upsert<T extends ContentIdeaUpsertArgs>(args: SelectSubset<T, ContentIdeaUpsertArgs<ExtArgs>>): Prisma__ContentIdeaClient<$Result.GetResult<Prisma.$ContentIdeaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContentIdeas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentIdeaCountArgs} args - Arguments to filter ContentIdeas to count.
     * @example
     * // Count the number of ContentIdeas
     * const count = await prisma.contentIdea.count({
     *   where: {
     *     // ... the filter for the ContentIdeas we want to count
     *   }
     * })
    **/
    count<T extends ContentIdeaCountArgs>(
      args?: Subset<T, ContentIdeaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentIdeaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContentIdea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentIdeaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContentIdeaAggregateArgs>(args: Subset<T, ContentIdeaAggregateArgs>): Prisma.PrismaPromise<GetContentIdeaAggregateType<T>>

    /**
     * Group by ContentIdea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentIdeaGroupByArgs} args - Group by arguments.
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
      T extends ContentIdeaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentIdeaGroupByArgs['orderBy'] }
        : { orderBy?: ContentIdeaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContentIdeaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentIdeaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContentIdea model
   */
  readonly fields: ContentIdeaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContentIdea.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentIdeaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ContentIdea model
   */
  interface ContentIdeaFieldRefs {
    readonly id: FieldRef<"ContentIdea", 'String'>
    readonly userId: FieldRef<"ContentIdea", 'String'>
    readonly platform: FieldRef<"ContentIdea", 'Platform'>
    readonly topic: FieldRef<"ContentIdea", 'String'>
    readonly suggestedCaption: FieldRef<"ContentIdea", 'String'>
    readonly suggestedHashtags: FieldRef<"ContentIdea", 'String'>
    readonly confidenceScore: FieldRef<"ContentIdea", 'Float'>
    readonly status: FieldRef<"ContentIdea", 'IdeaStatus'>
    readonly createdAt: FieldRef<"ContentIdea", 'DateTime'>
    readonly updatedAt: FieldRef<"ContentIdea", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContentIdea findUnique
   */
  export type ContentIdeaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentIdea
     */
    select?: ContentIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentIdea
     */
    omit?: ContentIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentIdeaInclude<ExtArgs> | null
    /**
     * Filter, which ContentIdea to fetch.
     */
    where: ContentIdeaWhereUniqueInput
  }

  /**
   * ContentIdea findUniqueOrThrow
   */
  export type ContentIdeaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentIdea
     */
    select?: ContentIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentIdea
     */
    omit?: ContentIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentIdeaInclude<ExtArgs> | null
    /**
     * Filter, which ContentIdea to fetch.
     */
    where: ContentIdeaWhereUniqueInput
  }

  /**
   * ContentIdea findFirst
   */
  export type ContentIdeaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentIdea
     */
    select?: ContentIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentIdea
     */
    omit?: ContentIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentIdeaInclude<ExtArgs> | null
    /**
     * Filter, which ContentIdea to fetch.
     */
    where?: ContentIdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentIdeas to fetch.
     */
    orderBy?: ContentIdeaOrderByWithRelationInput | ContentIdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentIdeas.
     */
    cursor?: ContentIdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentIdeas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentIdeas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentIdeas.
     */
    distinct?: ContentIdeaScalarFieldEnum | ContentIdeaScalarFieldEnum[]
  }

  /**
   * ContentIdea findFirstOrThrow
   */
  export type ContentIdeaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentIdea
     */
    select?: ContentIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentIdea
     */
    omit?: ContentIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentIdeaInclude<ExtArgs> | null
    /**
     * Filter, which ContentIdea to fetch.
     */
    where?: ContentIdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentIdeas to fetch.
     */
    orderBy?: ContentIdeaOrderByWithRelationInput | ContentIdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentIdeas.
     */
    cursor?: ContentIdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentIdeas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentIdeas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentIdeas.
     */
    distinct?: ContentIdeaScalarFieldEnum | ContentIdeaScalarFieldEnum[]
  }

  /**
   * ContentIdea findMany
   */
  export type ContentIdeaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentIdea
     */
    select?: ContentIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentIdea
     */
    omit?: ContentIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentIdeaInclude<ExtArgs> | null
    /**
     * Filter, which ContentIdeas to fetch.
     */
    where?: ContentIdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentIdeas to fetch.
     */
    orderBy?: ContentIdeaOrderByWithRelationInput | ContentIdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContentIdeas.
     */
    cursor?: ContentIdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentIdeas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentIdeas.
     */
    skip?: number
    distinct?: ContentIdeaScalarFieldEnum | ContentIdeaScalarFieldEnum[]
  }

  /**
   * ContentIdea create
   */
  export type ContentIdeaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentIdea
     */
    select?: ContentIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentIdea
     */
    omit?: ContentIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentIdeaInclude<ExtArgs> | null
    /**
     * The data needed to create a ContentIdea.
     */
    data: XOR<ContentIdeaCreateInput, ContentIdeaUncheckedCreateInput>
  }

  /**
   * ContentIdea createMany
   */
  export type ContentIdeaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContentIdeas.
     */
    data: ContentIdeaCreateManyInput | ContentIdeaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContentIdea update
   */
  export type ContentIdeaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentIdea
     */
    select?: ContentIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentIdea
     */
    omit?: ContentIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentIdeaInclude<ExtArgs> | null
    /**
     * The data needed to update a ContentIdea.
     */
    data: XOR<ContentIdeaUpdateInput, ContentIdeaUncheckedUpdateInput>
    /**
     * Choose, which ContentIdea to update.
     */
    where: ContentIdeaWhereUniqueInput
  }

  /**
   * ContentIdea updateMany
   */
  export type ContentIdeaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContentIdeas.
     */
    data: XOR<ContentIdeaUpdateManyMutationInput, ContentIdeaUncheckedUpdateManyInput>
    /**
     * Filter which ContentIdeas to update
     */
    where?: ContentIdeaWhereInput
    /**
     * Limit how many ContentIdeas to update.
     */
    limit?: number
  }

  /**
   * ContentIdea upsert
   */
  export type ContentIdeaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentIdea
     */
    select?: ContentIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentIdea
     */
    omit?: ContentIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentIdeaInclude<ExtArgs> | null
    /**
     * The filter to search for the ContentIdea to update in case it exists.
     */
    where: ContentIdeaWhereUniqueInput
    /**
     * In case the ContentIdea found by the `where` argument doesn't exist, create a new ContentIdea with this data.
     */
    create: XOR<ContentIdeaCreateInput, ContentIdeaUncheckedCreateInput>
    /**
     * In case the ContentIdea was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentIdeaUpdateInput, ContentIdeaUncheckedUpdateInput>
  }

  /**
   * ContentIdea delete
   */
  export type ContentIdeaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentIdea
     */
    select?: ContentIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentIdea
     */
    omit?: ContentIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentIdeaInclude<ExtArgs> | null
    /**
     * Filter which ContentIdea to delete.
     */
    where: ContentIdeaWhereUniqueInput
  }

  /**
   * ContentIdea deleteMany
   */
  export type ContentIdeaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentIdeas to delete
     */
    where?: ContentIdeaWhereInput
    /**
     * Limit how many ContentIdeas to delete.
     */
    limit?: number
  }

  /**
   * ContentIdea without action
   */
  export type ContentIdeaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentIdea
     */
    select?: ContentIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentIdea
     */
    omit?: ContentIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentIdeaInclude<ExtArgs> | null
  }


  /**
   * Model Campaign
   */

  export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  export type CampaignAvgAggregateOutputType = {
    agreedAmount: number | null
    expectedReach: number | null
    actualReach: number | null
  }

  export type CampaignSumAggregateOutputType = {
    agreedAmount: number | null
    expectedReach: number | null
    actualReach: number | null
  }

  export type CampaignMinAggregateOutputType = {
    id: string | null
    userId: string | null
    brandName: string | null
    brandLogo: string | null
    startDate: Date | null
    endDate: Date | null
    deliverables: string | null
    agreedAmount: number | null
    expectedReach: number | null
    actualReach: number | null
    status: $Enums.CampaignStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    brandName: string | null
    brandLogo: string | null
    startDate: Date | null
    endDate: Date | null
    deliverables: string | null
    agreedAmount: number | null
    expectedReach: number | null
    actualReach: number | null
    status: $Enums.CampaignStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignCountAggregateOutputType = {
    id: number
    userId: number
    brandName: number
    brandLogo: number
    startDate: number
    endDate: number
    deliverables: number
    agreedAmount: number
    expectedReach: number
    actualReach: number
    status: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CampaignAvgAggregateInputType = {
    agreedAmount?: true
    expectedReach?: true
    actualReach?: true
  }

  export type CampaignSumAggregateInputType = {
    agreedAmount?: true
    expectedReach?: true
    actualReach?: true
  }

  export type CampaignMinAggregateInputType = {
    id?: true
    userId?: true
    brandName?: true
    brandLogo?: true
    startDate?: true
    endDate?: true
    deliverables?: true
    agreedAmount?: true
    expectedReach?: true
    actualReach?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignMaxAggregateInputType = {
    id?: true
    userId?: true
    brandName?: true
    brandLogo?: true
    startDate?: true
    endDate?: true
    deliverables?: true
    agreedAmount?: true
    expectedReach?: true
    actualReach?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignCountAggregateInputType = {
    id?: true
    userId?: true
    brandName?: true
    brandLogo?: true
    startDate?: true
    endDate?: true
    deliverables?: true
    agreedAmount?: true
    expectedReach?: true
    actualReach?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CampaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaign to aggregate.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campaigns
    **/
    _count?: true | CampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaignAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaignSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignMaxAggregateInputType
  }

  export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaign[P]>
      : GetScalarType<T[P], AggregateCampaign[P]>
  }




  export type CampaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithAggregationInput | CampaignOrderByWithAggregationInput[]
    by: CampaignScalarFieldEnum[] | CampaignScalarFieldEnum
    having?: CampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignCountAggregateInputType | true
    _avg?: CampaignAvgAggregateInputType
    _sum?: CampaignSumAggregateInputType
    _min?: CampaignMinAggregateInputType
    _max?: CampaignMaxAggregateInputType
  }

  export type CampaignGroupByOutputType = {
    id: string
    userId: string
    brandName: string
    brandLogo: string | null
    startDate: Date | null
    endDate: Date | null
    deliverables: string | null
    agreedAmount: number | null
    expectedReach: number | null
    actualReach: number | null
    status: $Enums.CampaignStatus
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignGroupByOutputType[P]>
        }
      >
    >


  export type CampaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    brandName?: boolean
    brandLogo?: boolean
    startDate?: boolean
    endDate?: boolean
    deliverables?: boolean
    agreedAmount?: boolean
    expectedReach?: boolean
    actualReach?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>



  export type CampaignSelectScalar = {
    id?: boolean
    userId?: boolean
    brandName?: boolean
    brandLogo?: boolean
    startDate?: boolean
    endDate?: boolean
    deliverables?: boolean
    agreedAmount?: boolean
    expectedReach?: boolean
    actualReach?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CampaignOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "brandName" | "brandLogo" | "startDate" | "endDate" | "deliverables" | "agreedAmount" | "expectedReach" | "actualReach" | "status" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["campaign"]>
  export type CampaignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campaign"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      brandName: string
      brandLogo: string | null
      startDate: Date | null
      endDate: Date | null
      deliverables: string | null
      agreedAmount: number | null
      expectedReach: number | null
      actualReach: number | null
      status: $Enums.CampaignStatus
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["campaign"]>
    composites: {}
  }

  type CampaignGetPayload<S extends boolean | null | undefined | CampaignDefaultArgs> = $Result.GetResult<Prisma.$CampaignPayload, S>

  type CampaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignCountAggregateInputType | true
    }

  export interface CampaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campaign'], meta: { name: 'Campaign' } }
    /**
     * Find zero or one Campaign that matches the filter.
     * @param {CampaignFindUniqueArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignFindUniqueArgs>(args: SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campaign that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignFindUniqueOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignFindFirstArgs>(args?: SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaign.findMany()
     * 
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignWithIdOnly = await prisma.campaign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignFindManyArgs>(args?: SelectSubset<T, CampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campaign.
     * @param {CampaignCreateArgs} args - Arguments to create a Campaign.
     * @example
     * // Create one Campaign
     * const Campaign = await prisma.campaign.create({
     *   data: {
     *     // ... data to create a Campaign
     *   }
     * })
     * 
     */
    create<T extends CampaignCreateArgs>(args: SelectSubset<T, CampaignCreateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campaigns.
     * @param {CampaignCreateManyArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignCreateManyArgs>(args?: SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Campaign.
     * @param {CampaignDeleteArgs} args - Arguments to delete one Campaign.
     * @example
     * // Delete one Campaign
     * const Campaign = await prisma.campaign.delete({
     *   where: {
     *     // ... filter to delete one Campaign
     *   }
     * })
     * 
     */
    delete<T extends CampaignDeleteArgs>(args: SelectSubset<T, CampaignDeleteArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campaign.
     * @param {CampaignUpdateArgs} args - Arguments to update one Campaign.
     * @example
     * // Update one Campaign
     * const campaign = await prisma.campaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignUpdateArgs>(args: SelectSubset<T, CampaignUpdateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campaigns.
     * @param {CampaignDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignDeleteManyArgs>(args?: SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignUpdateManyArgs>(args: SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Campaign.
     * @param {CampaignUpsertArgs} args - Arguments to update or create a Campaign.
     * @example
     * // Update or create a Campaign
     * const campaign = await prisma.campaign.upsert({
     *   create: {
     *     // ... data to create a Campaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaign we want to update
     *   }
     * })
     */
    upsert<T extends CampaignUpsertArgs>(args: SelectSubset<T, CampaignUpsertArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaign.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends CampaignCountArgs>(
      args?: Subset<T, CampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CampaignAggregateArgs>(args: Subset<T, CampaignAggregateArgs>): Prisma.PrismaPromise<GetCampaignAggregateType<T>>

    /**
     * Group by Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignGroupByArgs} args - Group by arguments.
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
      T extends CampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignGroupByArgs['orderBy'] }
        : { orderBy?: CampaignGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campaign model
   */
  readonly fields: CampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Campaign model
   */
  interface CampaignFieldRefs {
    readonly id: FieldRef<"Campaign", 'String'>
    readonly userId: FieldRef<"Campaign", 'String'>
    readonly brandName: FieldRef<"Campaign", 'String'>
    readonly brandLogo: FieldRef<"Campaign", 'String'>
    readonly startDate: FieldRef<"Campaign", 'DateTime'>
    readonly endDate: FieldRef<"Campaign", 'DateTime'>
    readonly deliverables: FieldRef<"Campaign", 'String'>
    readonly agreedAmount: FieldRef<"Campaign", 'Float'>
    readonly expectedReach: FieldRef<"Campaign", 'Int'>
    readonly actualReach: FieldRef<"Campaign", 'Int'>
    readonly status: FieldRef<"Campaign", 'CampaignStatus'>
    readonly notes: FieldRef<"Campaign", 'String'>
    readonly createdAt: FieldRef<"Campaign", 'DateTime'>
    readonly updatedAt: FieldRef<"Campaign", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Campaign findUnique
   */
  export type CampaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findUniqueOrThrow
   */
  export type CampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findFirst
   */
  export type CampaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findFirstOrThrow
   */
  export type CampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findMany
   */
  export type CampaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign create
   */
  export type CampaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to create a Campaign.
     */
    data: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
  }

  /**
   * Campaign createMany
   */
  export type CampaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaign update
   */
  export type CampaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to update a Campaign.
     */
    data: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
    /**
     * Choose, which Campaign to update.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign updateMany
   */
  export type CampaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
  }

  /**
   * Campaign upsert
   */
  export type CampaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The filter to search for the Campaign to update in case it exists.
     */
    where: CampaignWhereUniqueInput
    /**
     * In case the Campaign found by the `where` argument doesn't exist, create a new Campaign with this data.
     */
    create: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
    /**
     * In case the Campaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
  }

  /**
   * Campaign delete
   */
  export type CampaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter which Campaign to delete.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign deleteMany
   */
  export type CampaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaigns to delete
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to delete.
     */
    limit?: number
  }

  /**
   * Campaign without action
   */
  export type CampaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
  }


  /**
   * Model CompetitorProfile
   */

  export type AggregateCompetitorProfile = {
    _count: CompetitorProfileCountAggregateOutputType | null
    _min: CompetitorProfileMinAggregateOutputType | null
    _max: CompetitorProfileMaxAggregateOutputType | null
  }

  export type CompetitorProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    platform: $Enums.Platform | null
    handle: string | null
    displayName: string | null
    notes: string | null
    lastSyncedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompetitorProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    platform: $Enums.Platform | null
    handle: string | null
    displayName: string | null
    notes: string | null
    lastSyncedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompetitorProfileCountAggregateOutputType = {
    id: number
    userId: number
    platform: number
    handle: number
    displayName: number
    notes: number
    lastSyncedAt: number
    summaryStatsJson: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompetitorProfileMinAggregateInputType = {
    id?: true
    userId?: true
    platform?: true
    handle?: true
    displayName?: true
    notes?: true
    lastSyncedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompetitorProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    platform?: true
    handle?: true
    displayName?: true
    notes?: true
    lastSyncedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompetitorProfileCountAggregateInputType = {
    id?: true
    userId?: true
    platform?: true
    handle?: true
    displayName?: true
    notes?: true
    lastSyncedAt?: true
    summaryStatsJson?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompetitorProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompetitorProfile to aggregate.
     */
    where?: CompetitorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompetitorProfiles to fetch.
     */
    orderBy?: CompetitorProfileOrderByWithRelationInput | CompetitorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompetitorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompetitorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompetitorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompetitorProfiles
    **/
    _count?: true | CompetitorProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompetitorProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompetitorProfileMaxAggregateInputType
  }

  export type GetCompetitorProfileAggregateType<T extends CompetitorProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateCompetitorProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompetitorProfile[P]>
      : GetScalarType<T[P], AggregateCompetitorProfile[P]>
  }




  export type CompetitorProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitorProfileWhereInput
    orderBy?: CompetitorProfileOrderByWithAggregationInput | CompetitorProfileOrderByWithAggregationInput[]
    by: CompetitorProfileScalarFieldEnum[] | CompetitorProfileScalarFieldEnum
    having?: CompetitorProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompetitorProfileCountAggregateInputType | true
    _min?: CompetitorProfileMinAggregateInputType
    _max?: CompetitorProfileMaxAggregateInputType
  }

  export type CompetitorProfileGroupByOutputType = {
    id: string
    userId: string
    platform: $Enums.Platform
    handle: string
    displayName: string | null
    notes: string | null
    lastSyncedAt: Date | null
    summaryStatsJson: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: CompetitorProfileCountAggregateOutputType | null
    _min: CompetitorProfileMinAggregateOutputType | null
    _max: CompetitorProfileMaxAggregateOutputType | null
  }

  type GetCompetitorProfileGroupByPayload<T extends CompetitorProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompetitorProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompetitorProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompetitorProfileGroupByOutputType[P]>
            : GetScalarType<T[P], CompetitorProfileGroupByOutputType[P]>
        }
      >
    >


  export type CompetitorProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    platform?: boolean
    handle?: boolean
    displayName?: boolean
    notes?: boolean
    lastSyncedAt?: boolean
    summaryStatsJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competitorProfile"]>



  export type CompetitorProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    platform?: boolean
    handle?: boolean
    displayName?: boolean
    notes?: boolean
    lastSyncedAt?: boolean
    summaryStatsJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompetitorProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "platform" | "handle" | "displayName" | "notes" | "lastSyncedAt" | "summaryStatsJson" | "createdAt" | "updatedAt", ExtArgs["result"]["competitorProfile"]>
  export type CompetitorProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CompetitorProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompetitorProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      platform: $Enums.Platform
      handle: string
      displayName: string | null
      notes: string | null
      lastSyncedAt: Date | null
      summaryStatsJson: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["competitorProfile"]>
    composites: {}
  }

  type CompetitorProfileGetPayload<S extends boolean | null | undefined | CompetitorProfileDefaultArgs> = $Result.GetResult<Prisma.$CompetitorProfilePayload, S>

  type CompetitorProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompetitorProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompetitorProfileCountAggregateInputType | true
    }

  export interface CompetitorProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompetitorProfile'], meta: { name: 'CompetitorProfile' } }
    /**
     * Find zero or one CompetitorProfile that matches the filter.
     * @param {CompetitorProfileFindUniqueArgs} args - Arguments to find a CompetitorProfile
     * @example
     * // Get one CompetitorProfile
     * const competitorProfile = await prisma.competitorProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompetitorProfileFindUniqueArgs>(args: SelectSubset<T, CompetitorProfileFindUniqueArgs<ExtArgs>>): Prisma__CompetitorProfileClient<$Result.GetResult<Prisma.$CompetitorProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompetitorProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompetitorProfileFindUniqueOrThrowArgs} args - Arguments to find a CompetitorProfile
     * @example
     * // Get one CompetitorProfile
     * const competitorProfile = await prisma.competitorProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompetitorProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, CompetitorProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompetitorProfileClient<$Result.GetResult<Prisma.$CompetitorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompetitorProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorProfileFindFirstArgs} args - Arguments to find a CompetitorProfile
     * @example
     * // Get one CompetitorProfile
     * const competitorProfile = await prisma.competitorProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompetitorProfileFindFirstArgs>(args?: SelectSubset<T, CompetitorProfileFindFirstArgs<ExtArgs>>): Prisma__CompetitorProfileClient<$Result.GetResult<Prisma.$CompetitorProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompetitorProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorProfileFindFirstOrThrowArgs} args - Arguments to find a CompetitorProfile
     * @example
     * // Get one CompetitorProfile
     * const competitorProfile = await prisma.competitorProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompetitorProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, CompetitorProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompetitorProfileClient<$Result.GetResult<Prisma.$CompetitorProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompetitorProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompetitorProfiles
     * const competitorProfiles = await prisma.competitorProfile.findMany()
     * 
     * // Get first 10 CompetitorProfiles
     * const competitorProfiles = await prisma.competitorProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const competitorProfileWithIdOnly = await prisma.competitorProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompetitorProfileFindManyArgs>(args?: SelectSubset<T, CompetitorProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitorProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompetitorProfile.
     * @param {CompetitorProfileCreateArgs} args - Arguments to create a CompetitorProfile.
     * @example
     * // Create one CompetitorProfile
     * const CompetitorProfile = await prisma.competitorProfile.create({
     *   data: {
     *     // ... data to create a CompetitorProfile
     *   }
     * })
     * 
     */
    create<T extends CompetitorProfileCreateArgs>(args: SelectSubset<T, CompetitorProfileCreateArgs<ExtArgs>>): Prisma__CompetitorProfileClient<$Result.GetResult<Prisma.$CompetitorProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompetitorProfiles.
     * @param {CompetitorProfileCreateManyArgs} args - Arguments to create many CompetitorProfiles.
     * @example
     * // Create many CompetitorProfiles
     * const competitorProfile = await prisma.competitorProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompetitorProfileCreateManyArgs>(args?: SelectSubset<T, CompetitorProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CompetitorProfile.
     * @param {CompetitorProfileDeleteArgs} args - Arguments to delete one CompetitorProfile.
     * @example
     * // Delete one CompetitorProfile
     * const CompetitorProfile = await prisma.competitorProfile.delete({
     *   where: {
     *     // ... filter to delete one CompetitorProfile
     *   }
     * })
     * 
     */
    delete<T extends CompetitorProfileDeleteArgs>(args: SelectSubset<T, CompetitorProfileDeleteArgs<ExtArgs>>): Prisma__CompetitorProfileClient<$Result.GetResult<Prisma.$CompetitorProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompetitorProfile.
     * @param {CompetitorProfileUpdateArgs} args - Arguments to update one CompetitorProfile.
     * @example
     * // Update one CompetitorProfile
     * const competitorProfile = await prisma.competitorProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompetitorProfileUpdateArgs>(args: SelectSubset<T, CompetitorProfileUpdateArgs<ExtArgs>>): Prisma__CompetitorProfileClient<$Result.GetResult<Prisma.$CompetitorProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompetitorProfiles.
     * @param {CompetitorProfileDeleteManyArgs} args - Arguments to filter CompetitorProfiles to delete.
     * @example
     * // Delete a few CompetitorProfiles
     * const { count } = await prisma.competitorProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompetitorProfileDeleteManyArgs>(args?: SelectSubset<T, CompetitorProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompetitorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompetitorProfiles
     * const competitorProfile = await prisma.competitorProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompetitorProfileUpdateManyArgs>(args: SelectSubset<T, CompetitorProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CompetitorProfile.
     * @param {CompetitorProfileUpsertArgs} args - Arguments to update or create a CompetitorProfile.
     * @example
     * // Update or create a CompetitorProfile
     * const competitorProfile = await prisma.competitorProfile.upsert({
     *   create: {
     *     // ... data to create a CompetitorProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompetitorProfile we want to update
     *   }
     * })
     */
    upsert<T extends CompetitorProfileUpsertArgs>(args: SelectSubset<T, CompetitorProfileUpsertArgs<ExtArgs>>): Prisma__CompetitorProfileClient<$Result.GetResult<Prisma.$CompetitorProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompetitorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorProfileCountArgs} args - Arguments to filter CompetitorProfiles to count.
     * @example
     * // Count the number of CompetitorProfiles
     * const count = await prisma.competitorProfile.count({
     *   where: {
     *     // ... the filter for the CompetitorProfiles we want to count
     *   }
     * })
    **/
    count<T extends CompetitorProfileCountArgs>(
      args?: Subset<T, CompetitorProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompetitorProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompetitorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompetitorProfileAggregateArgs>(args: Subset<T, CompetitorProfileAggregateArgs>): Prisma.PrismaPromise<GetCompetitorProfileAggregateType<T>>

    /**
     * Group by CompetitorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitorProfileGroupByArgs} args - Group by arguments.
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
      T extends CompetitorProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompetitorProfileGroupByArgs['orderBy'] }
        : { orderBy?: CompetitorProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompetitorProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompetitorProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompetitorProfile model
   */
  readonly fields: CompetitorProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompetitorProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompetitorProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CompetitorProfile model
   */
  interface CompetitorProfileFieldRefs {
    readonly id: FieldRef<"CompetitorProfile", 'String'>
    readonly userId: FieldRef<"CompetitorProfile", 'String'>
    readonly platform: FieldRef<"CompetitorProfile", 'Platform'>
    readonly handle: FieldRef<"CompetitorProfile", 'String'>
    readonly displayName: FieldRef<"CompetitorProfile", 'String'>
    readonly notes: FieldRef<"CompetitorProfile", 'String'>
    readonly lastSyncedAt: FieldRef<"CompetitorProfile", 'DateTime'>
    readonly summaryStatsJson: FieldRef<"CompetitorProfile", 'Json'>
    readonly createdAt: FieldRef<"CompetitorProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"CompetitorProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompetitorProfile findUnique
   */
  export type CompetitorProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitorProfile
     */
    select?: CompetitorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitorProfile
     */
    omit?: CompetitorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorProfileInclude<ExtArgs> | null
    /**
     * Filter, which CompetitorProfile to fetch.
     */
    where: CompetitorProfileWhereUniqueInput
  }

  /**
   * CompetitorProfile findUniqueOrThrow
   */
  export type CompetitorProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitorProfile
     */
    select?: CompetitorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitorProfile
     */
    omit?: CompetitorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorProfileInclude<ExtArgs> | null
    /**
     * Filter, which CompetitorProfile to fetch.
     */
    where: CompetitorProfileWhereUniqueInput
  }

  /**
   * CompetitorProfile findFirst
   */
  export type CompetitorProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitorProfile
     */
    select?: CompetitorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitorProfile
     */
    omit?: CompetitorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorProfileInclude<ExtArgs> | null
    /**
     * Filter, which CompetitorProfile to fetch.
     */
    where?: CompetitorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompetitorProfiles to fetch.
     */
    orderBy?: CompetitorProfileOrderByWithRelationInput | CompetitorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompetitorProfiles.
     */
    cursor?: CompetitorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompetitorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompetitorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompetitorProfiles.
     */
    distinct?: CompetitorProfileScalarFieldEnum | CompetitorProfileScalarFieldEnum[]
  }

  /**
   * CompetitorProfile findFirstOrThrow
   */
  export type CompetitorProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitorProfile
     */
    select?: CompetitorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitorProfile
     */
    omit?: CompetitorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorProfileInclude<ExtArgs> | null
    /**
     * Filter, which CompetitorProfile to fetch.
     */
    where?: CompetitorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompetitorProfiles to fetch.
     */
    orderBy?: CompetitorProfileOrderByWithRelationInput | CompetitorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompetitorProfiles.
     */
    cursor?: CompetitorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompetitorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompetitorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompetitorProfiles.
     */
    distinct?: CompetitorProfileScalarFieldEnum | CompetitorProfileScalarFieldEnum[]
  }

  /**
   * CompetitorProfile findMany
   */
  export type CompetitorProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitorProfile
     */
    select?: CompetitorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitorProfile
     */
    omit?: CompetitorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorProfileInclude<ExtArgs> | null
    /**
     * Filter, which CompetitorProfiles to fetch.
     */
    where?: CompetitorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompetitorProfiles to fetch.
     */
    orderBy?: CompetitorProfileOrderByWithRelationInput | CompetitorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompetitorProfiles.
     */
    cursor?: CompetitorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompetitorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompetitorProfiles.
     */
    skip?: number
    distinct?: CompetitorProfileScalarFieldEnum | CompetitorProfileScalarFieldEnum[]
  }

  /**
   * CompetitorProfile create
   */
  export type CompetitorProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitorProfile
     */
    select?: CompetitorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitorProfile
     */
    omit?: CompetitorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a CompetitorProfile.
     */
    data: XOR<CompetitorProfileCreateInput, CompetitorProfileUncheckedCreateInput>
  }

  /**
   * CompetitorProfile createMany
   */
  export type CompetitorProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompetitorProfiles.
     */
    data: CompetitorProfileCreateManyInput | CompetitorProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompetitorProfile update
   */
  export type CompetitorProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitorProfile
     */
    select?: CompetitorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitorProfile
     */
    omit?: CompetitorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a CompetitorProfile.
     */
    data: XOR<CompetitorProfileUpdateInput, CompetitorProfileUncheckedUpdateInput>
    /**
     * Choose, which CompetitorProfile to update.
     */
    where: CompetitorProfileWhereUniqueInput
  }

  /**
   * CompetitorProfile updateMany
   */
  export type CompetitorProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompetitorProfiles.
     */
    data: XOR<CompetitorProfileUpdateManyMutationInput, CompetitorProfileUncheckedUpdateManyInput>
    /**
     * Filter which CompetitorProfiles to update
     */
    where?: CompetitorProfileWhereInput
    /**
     * Limit how many CompetitorProfiles to update.
     */
    limit?: number
  }

  /**
   * CompetitorProfile upsert
   */
  export type CompetitorProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitorProfile
     */
    select?: CompetitorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitorProfile
     */
    omit?: CompetitorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the CompetitorProfile to update in case it exists.
     */
    where: CompetitorProfileWhereUniqueInput
    /**
     * In case the CompetitorProfile found by the `where` argument doesn't exist, create a new CompetitorProfile with this data.
     */
    create: XOR<CompetitorProfileCreateInput, CompetitorProfileUncheckedCreateInput>
    /**
     * In case the CompetitorProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompetitorProfileUpdateInput, CompetitorProfileUncheckedUpdateInput>
  }

  /**
   * CompetitorProfile delete
   */
  export type CompetitorProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitorProfile
     */
    select?: CompetitorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitorProfile
     */
    omit?: CompetitorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorProfileInclude<ExtArgs> | null
    /**
     * Filter which CompetitorProfile to delete.
     */
    where: CompetitorProfileWhereUniqueInput
  }

  /**
   * CompetitorProfile deleteMany
   */
  export type CompetitorProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompetitorProfiles to delete
     */
    where?: CompetitorProfileWhereInput
    /**
     * Limit how many CompetitorProfiles to delete.
     */
    limit?: number
  }

  /**
   * CompetitorProfile without action
   */
  export type CompetitorProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitorProfile
     */
    select?: CompetitorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitorProfile
     */
    omit?: CompetitorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitorProfileInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    avatar: 'avatar',
    timezone: 'timezone',
    niche: 'niche',
    primaryPlatform: 'primaryPlatform',
    streakCount: 'streakCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SocialAccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    platform: 'platform',
    handle: 'handle',
    displayName: 'displayName',
    profileUrl: 'profileUrl',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    tokenExpiry: 'tokenExpiry',
    status: 'status',
    autoSync: 'autoSync',
    lastSyncedAt: 'lastSyncedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SocialAccountScalarFieldEnum = (typeof SocialAccountScalarFieldEnum)[keyof typeof SocialAccountScalarFieldEnum]


  export const MetricSnapshotScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    socialAccountId: 'socialAccountId',
    date: 'date',
    reach: 'reach',
    impressions: 'impressions',
    likes: 'likes',
    comments: 'comments',
    shares: 'shares',
    saves: 'saves',
    followers: 'followers',
    views: 'views',
    clicks: 'clicks',
    engagementRate: 'engagementRate',
    platformRawJson: 'platformRawJson',
    createdAt: 'createdAt'
  };

  export type MetricSnapshotScalarFieldEnum = (typeof MetricSnapshotScalarFieldEnum)[keyof typeof MetricSnapshotScalarFieldEnum]


  export const ContentItemScalarFieldEnum: {
    id: 'id',
    socialAccountId: 'socialAccountId',
    platformPostId: 'platformPostId',
    title: 'title',
    type: 'type',
    caption: 'caption',
    publishedAt: 'publishedAt',
    url: 'url',
    thumbnail: 'thumbnail',
    reach: 'reach',
    impressions: 'impressions',
    likes: 'likes',
    comments: 'comments',
    shares: 'shares',
    saves: 'saves',
    views: 'views',
    clicks: 'clicks',
    engagementRate: 'engagementRate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContentItemScalarFieldEnum = (typeof ContentItemScalarFieldEnum)[keyof typeof ContentItemScalarFieldEnum]


  export const GoalScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    metricType: 'metricType',
    targetValue: 'targetValue',
    currentValue: 'currentValue',
    period: 'period',
    startDate: 'startDate',
    endDate: 'endDate',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GoalScalarFieldEnum = (typeof GoalScalarFieldEnum)[keyof typeof GoalScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    goalId: 'goalId',
    title: 'title',
    description: 'description',
    dueDate: 'dueDate',
    status: 'status',
    priority: 'priority',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const ContentIdeaScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    platform: 'platform',
    topic: 'topic',
    suggestedCaption: 'suggestedCaption',
    suggestedHashtags: 'suggestedHashtags',
    confidenceScore: 'confidenceScore',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContentIdeaScalarFieldEnum = (typeof ContentIdeaScalarFieldEnum)[keyof typeof ContentIdeaScalarFieldEnum]


  export const CampaignScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    brandName: 'brandName',
    brandLogo: 'brandLogo',
    startDate: 'startDate',
    endDate: 'endDate',
    deliverables: 'deliverables',
    agreedAmount: 'agreedAmount',
    expectedReach: 'expectedReach',
    actualReach: 'actualReach',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CampaignScalarFieldEnum = (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum]


  export const CompetitorProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    platform: 'platform',
    handle: 'handle',
    displayName: 'displayName',
    notes: 'notes',
    lastSyncedAt: 'lastSyncedAt',
    summaryStatsJson: 'summaryStatsJson',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompetitorProfileScalarFieldEnum = (typeof CompetitorProfileScalarFieldEnum)[keyof typeof CompetitorProfileScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    avatar: 'avatar',
    timezone: 'timezone',
    niche: 'niche',
    primaryPlatform: 'primaryPlatform'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const SessionOrderByRelevanceFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId'
  };

  export type SessionOrderByRelevanceFieldEnum = (typeof SessionOrderByRelevanceFieldEnum)[keyof typeof SessionOrderByRelevanceFieldEnum]


  export const SocialAccountOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    handle: 'handle',
    displayName: 'displayName',
    profileUrl: 'profileUrl',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken'
  };

  export type SocialAccountOrderByRelevanceFieldEnum = (typeof SocialAccountOrderByRelevanceFieldEnum)[keyof typeof SocialAccountOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const MetricSnapshotOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    socialAccountId: 'socialAccountId'
  };

  export type MetricSnapshotOrderByRelevanceFieldEnum = (typeof MetricSnapshotOrderByRelevanceFieldEnum)[keyof typeof MetricSnapshotOrderByRelevanceFieldEnum]


  export const ContentItemOrderByRelevanceFieldEnum: {
    id: 'id',
    socialAccountId: 'socialAccountId',
    platformPostId: 'platformPostId',
    title: 'title',
    caption: 'caption',
    url: 'url',
    thumbnail: 'thumbnail'
  };

  export type ContentItemOrderByRelevanceFieldEnum = (typeof ContentItemOrderByRelevanceFieldEnum)[keyof typeof ContentItemOrderByRelevanceFieldEnum]


  export const GoalOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type GoalOrderByRelevanceFieldEnum = (typeof GoalOrderByRelevanceFieldEnum)[keyof typeof GoalOrderByRelevanceFieldEnum]


  export const TaskOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    goalId: 'goalId',
    title: 'title',
    description: 'description'
  };

  export type TaskOrderByRelevanceFieldEnum = (typeof TaskOrderByRelevanceFieldEnum)[keyof typeof TaskOrderByRelevanceFieldEnum]


  export const ContentIdeaOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    topic: 'topic',
    suggestedCaption: 'suggestedCaption',
    suggestedHashtags: 'suggestedHashtags'
  };

  export type ContentIdeaOrderByRelevanceFieldEnum = (typeof ContentIdeaOrderByRelevanceFieldEnum)[keyof typeof ContentIdeaOrderByRelevanceFieldEnum]


  export const CampaignOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    brandName: 'brandName',
    brandLogo: 'brandLogo',
    deliverables: 'deliverables',
    notes: 'notes'
  };

  export type CampaignOrderByRelevanceFieldEnum = (typeof CampaignOrderByRelevanceFieldEnum)[keyof typeof CampaignOrderByRelevanceFieldEnum]


  export const CompetitorProfileOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    handle: 'handle',
    displayName: 'displayName',
    notes: 'notes'
  };

  export type CompetitorProfileOrderByRelevanceFieldEnum = (typeof CompetitorProfileOrderByRelevanceFieldEnum)[keyof typeof CompetitorProfileOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Platform'
   */
  export type EnumPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Platform'>
    


  /**
   * Reference to a field of type 'AccountStatus'
   */
  export type EnumAccountStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountStatus'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'ContentType'
   */
  export type EnumContentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentType'>
    


  /**
   * Reference to a field of type 'MetricType'
   */
  export type EnumMetricTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetricType'>
    


  /**
   * Reference to a field of type 'Period'
   */
  export type EnumPeriodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Period'>
    


  /**
   * Reference to a field of type 'GoalStatus'
   */
  export type EnumGoalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalStatus'>
    


  /**
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
    


  /**
   * Reference to a field of type 'TaskPriority'
   */
  export type EnumTaskPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskPriority'>
    


  /**
   * Reference to a field of type 'IdeaStatus'
   */
  export type EnumIdeaStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IdeaStatus'>
    


  /**
   * Reference to a field of type 'CampaignStatus'
   */
  export type EnumCampaignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignStatus'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    timezone?: StringFilter<"User"> | string
    niche?: StringNullableFilter<"User"> | string | null
    primaryPlatform?: StringNullableFilter<"User"> | string | null
    streakCount?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    socialAccounts?: SocialAccountListRelationFilter
    metricSnapshots?: MetricSnapshotListRelationFilter
    goals?: GoalListRelationFilter
    tasks?: TaskListRelationFilter
    contentIdeas?: ContentIdeaListRelationFilter
    campaigns?: CampaignListRelationFilter
    competitorProfiles?: CompetitorProfileListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    avatar?: SortOrderInput | SortOrder
    timezone?: SortOrder
    niche?: SortOrderInput | SortOrder
    primaryPlatform?: SortOrderInput | SortOrder
    streakCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    socialAccounts?: SocialAccountOrderByRelationAggregateInput
    metricSnapshots?: MetricSnapshotOrderByRelationAggregateInput
    goals?: GoalOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
    contentIdeas?: ContentIdeaOrderByRelationAggregateInput
    campaigns?: CampaignOrderByRelationAggregateInput
    competitorProfiles?: CompetitorProfileOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    timezone?: StringFilter<"User"> | string
    niche?: StringNullableFilter<"User"> | string | null
    primaryPlatform?: StringNullableFilter<"User"> | string | null
    streakCount?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    socialAccounts?: SocialAccountListRelationFilter
    metricSnapshots?: MetricSnapshotListRelationFilter
    goals?: GoalListRelationFilter
    tasks?: TaskListRelationFilter
    contentIdeas?: ContentIdeaListRelationFilter
    campaigns?: CampaignListRelationFilter
    competitorProfiles?: CompetitorProfileListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    avatar?: SortOrderInput | SortOrder
    timezone?: SortOrder
    niche?: SortOrderInput | SortOrder
    primaryPlatform?: SortOrderInput | SortOrder
    streakCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    timezone?: StringWithAggregatesFilter<"User"> | string
    niche?: StringNullableWithAggregatesFilter<"User"> | string | null
    primaryPlatform?: StringNullableWithAggregatesFilter<"User"> | string | null
    streakCount?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: SessionOrderByRelevanceInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type SocialAccountWhereInput = {
    AND?: SocialAccountWhereInput | SocialAccountWhereInput[]
    OR?: SocialAccountWhereInput[]
    NOT?: SocialAccountWhereInput | SocialAccountWhereInput[]
    id?: StringFilter<"SocialAccount"> | string
    userId?: StringFilter<"SocialAccount"> | string
    platform?: EnumPlatformFilter<"SocialAccount"> | $Enums.Platform
    handle?: StringFilter<"SocialAccount"> | string
    displayName?: StringNullableFilter<"SocialAccount"> | string | null
    profileUrl?: StringNullableFilter<"SocialAccount"> | string | null
    accessToken?: StringNullableFilter<"SocialAccount"> | string | null
    refreshToken?: StringNullableFilter<"SocialAccount"> | string | null
    tokenExpiry?: DateTimeNullableFilter<"SocialAccount"> | Date | string | null
    status?: EnumAccountStatusFilter<"SocialAccount"> | $Enums.AccountStatus
    autoSync?: BoolFilter<"SocialAccount"> | boolean
    lastSyncedAt?: DateTimeNullableFilter<"SocialAccount"> | Date | string | null
    createdAt?: DateTimeFilter<"SocialAccount"> | Date | string
    updatedAt?: DateTimeFilter<"SocialAccount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    metricSnapshots?: MetricSnapshotListRelationFilter
    contentItems?: ContentItemListRelationFilter
  }

  export type SocialAccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    platform?: SortOrder
    handle?: SortOrder
    displayName?: SortOrderInput | SortOrder
    profileUrl?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    tokenExpiry?: SortOrderInput | SortOrder
    status?: SortOrder
    autoSync?: SortOrder
    lastSyncedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    metricSnapshots?: MetricSnapshotOrderByRelationAggregateInput
    contentItems?: ContentItemOrderByRelationAggregateInput
    _relevance?: SocialAccountOrderByRelevanceInput
  }

  export type SocialAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_platform_handle?: SocialAccountUserIdPlatformHandleCompoundUniqueInput
    AND?: SocialAccountWhereInput | SocialAccountWhereInput[]
    OR?: SocialAccountWhereInput[]
    NOT?: SocialAccountWhereInput | SocialAccountWhereInput[]
    userId?: StringFilter<"SocialAccount"> | string
    platform?: EnumPlatformFilter<"SocialAccount"> | $Enums.Platform
    handle?: StringFilter<"SocialAccount"> | string
    displayName?: StringNullableFilter<"SocialAccount"> | string | null
    profileUrl?: StringNullableFilter<"SocialAccount"> | string | null
    accessToken?: StringNullableFilter<"SocialAccount"> | string | null
    refreshToken?: StringNullableFilter<"SocialAccount"> | string | null
    tokenExpiry?: DateTimeNullableFilter<"SocialAccount"> | Date | string | null
    status?: EnumAccountStatusFilter<"SocialAccount"> | $Enums.AccountStatus
    autoSync?: BoolFilter<"SocialAccount"> | boolean
    lastSyncedAt?: DateTimeNullableFilter<"SocialAccount"> | Date | string | null
    createdAt?: DateTimeFilter<"SocialAccount"> | Date | string
    updatedAt?: DateTimeFilter<"SocialAccount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    metricSnapshots?: MetricSnapshotListRelationFilter
    contentItems?: ContentItemListRelationFilter
  }, "id" | "userId_platform_handle">

  export type SocialAccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    platform?: SortOrder
    handle?: SortOrder
    displayName?: SortOrderInput | SortOrder
    profileUrl?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    tokenExpiry?: SortOrderInput | SortOrder
    status?: SortOrder
    autoSync?: SortOrder
    lastSyncedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SocialAccountCountOrderByAggregateInput
    _max?: SocialAccountMaxOrderByAggregateInput
    _min?: SocialAccountMinOrderByAggregateInput
  }

  export type SocialAccountScalarWhereWithAggregatesInput = {
    AND?: SocialAccountScalarWhereWithAggregatesInput | SocialAccountScalarWhereWithAggregatesInput[]
    OR?: SocialAccountScalarWhereWithAggregatesInput[]
    NOT?: SocialAccountScalarWhereWithAggregatesInput | SocialAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SocialAccount"> | string
    userId?: StringWithAggregatesFilter<"SocialAccount"> | string
    platform?: EnumPlatformWithAggregatesFilter<"SocialAccount"> | $Enums.Platform
    handle?: StringWithAggregatesFilter<"SocialAccount"> | string
    displayName?: StringNullableWithAggregatesFilter<"SocialAccount"> | string | null
    profileUrl?: StringNullableWithAggregatesFilter<"SocialAccount"> | string | null
    accessToken?: StringNullableWithAggregatesFilter<"SocialAccount"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"SocialAccount"> | string | null
    tokenExpiry?: DateTimeNullableWithAggregatesFilter<"SocialAccount"> | Date | string | null
    status?: EnumAccountStatusWithAggregatesFilter<"SocialAccount"> | $Enums.AccountStatus
    autoSync?: BoolWithAggregatesFilter<"SocialAccount"> | boolean
    lastSyncedAt?: DateTimeNullableWithAggregatesFilter<"SocialAccount"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SocialAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SocialAccount"> | Date | string
  }

  export type MetricSnapshotWhereInput = {
    AND?: MetricSnapshotWhereInput | MetricSnapshotWhereInput[]
    OR?: MetricSnapshotWhereInput[]
    NOT?: MetricSnapshotWhereInput | MetricSnapshotWhereInput[]
    id?: StringFilter<"MetricSnapshot"> | string
    userId?: StringFilter<"MetricSnapshot"> | string
    socialAccountId?: StringFilter<"MetricSnapshot"> | string
    date?: DateTimeFilter<"MetricSnapshot"> | Date | string
    reach?: IntFilter<"MetricSnapshot"> | number
    impressions?: IntFilter<"MetricSnapshot"> | number
    likes?: IntFilter<"MetricSnapshot"> | number
    comments?: IntFilter<"MetricSnapshot"> | number
    shares?: IntFilter<"MetricSnapshot"> | number
    saves?: IntFilter<"MetricSnapshot"> | number
    followers?: IntFilter<"MetricSnapshot"> | number
    views?: IntFilter<"MetricSnapshot"> | number
    clicks?: IntFilter<"MetricSnapshot"> | number
    engagementRate?: FloatFilter<"MetricSnapshot"> | number
    platformRawJson?: JsonNullableFilter<"MetricSnapshot">
    createdAt?: DateTimeFilter<"MetricSnapshot"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    socialAccount?: XOR<SocialAccountScalarRelationFilter, SocialAccountWhereInput>
  }

  export type MetricSnapshotOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    socialAccountId?: SortOrder
    date?: SortOrder
    reach?: SortOrder
    impressions?: SortOrder
    likes?: SortOrder
    comments?: SortOrder
    shares?: SortOrder
    saves?: SortOrder
    followers?: SortOrder
    views?: SortOrder
    clicks?: SortOrder
    engagementRate?: SortOrder
    platformRawJson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    socialAccount?: SocialAccountOrderByWithRelationInput
    _relevance?: MetricSnapshotOrderByRelevanceInput
  }

  export type MetricSnapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    socialAccountId_date?: MetricSnapshotSocialAccountIdDateCompoundUniqueInput
    AND?: MetricSnapshotWhereInput | MetricSnapshotWhereInput[]
    OR?: MetricSnapshotWhereInput[]
    NOT?: MetricSnapshotWhereInput | MetricSnapshotWhereInput[]
    userId?: StringFilter<"MetricSnapshot"> | string
    socialAccountId?: StringFilter<"MetricSnapshot"> | string
    date?: DateTimeFilter<"MetricSnapshot"> | Date | string
    reach?: IntFilter<"MetricSnapshot"> | number
    impressions?: IntFilter<"MetricSnapshot"> | number
    likes?: IntFilter<"MetricSnapshot"> | number
    comments?: IntFilter<"MetricSnapshot"> | number
    shares?: IntFilter<"MetricSnapshot"> | number
    saves?: IntFilter<"MetricSnapshot"> | number
    followers?: IntFilter<"MetricSnapshot"> | number
    views?: IntFilter<"MetricSnapshot"> | number
    clicks?: IntFilter<"MetricSnapshot"> | number
    engagementRate?: FloatFilter<"MetricSnapshot"> | number
    platformRawJson?: JsonNullableFilter<"MetricSnapshot">
    createdAt?: DateTimeFilter<"MetricSnapshot"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    socialAccount?: XOR<SocialAccountScalarRelationFilter, SocialAccountWhereInput>
  }, "id" | "socialAccountId_date">

  export type MetricSnapshotOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    socialAccountId?: SortOrder
    date?: SortOrder
    reach?: SortOrder
    impressions?: SortOrder
    likes?: SortOrder
    comments?: SortOrder
    shares?: SortOrder
    saves?: SortOrder
    followers?: SortOrder
    views?: SortOrder
    clicks?: SortOrder
    engagementRate?: SortOrder
    platformRawJson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MetricSnapshotCountOrderByAggregateInput
    _avg?: MetricSnapshotAvgOrderByAggregateInput
    _max?: MetricSnapshotMaxOrderByAggregateInput
    _min?: MetricSnapshotMinOrderByAggregateInput
    _sum?: MetricSnapshotSumOrderByAggregateInput
  }

  export type MetricSnapshotScalarWhereWithAggregatesInput = {
    AND?: MetricSnapshotScalarWhereWithAggregatesInput | MetricSnapshotScalarWhereWithAggregatesInput[]
    OR?: MetricSnapshotScalarWhereWithAggregatesInput[]
    NOT?: MetricSnapshotScalarWhereWithAggregatesInput | MetricSnapshotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MetricSnapshot"> | string
    userId?: StringWithAggregatesFilter<"MetricSnapshot"> | string
    socialAccountId?: StringWithAggregatesFilter<"MetricSnapshot"> | string
    date?: DateTimeWithAggregatesFilter<"MetricSnapshot"> | Date | string
    reach?: IntWithAggregatesFilter<"MetricSnapshot"> | number
    impressions?: IntWithAggregatesFilter<"MetricSnapshot"> | number
    likes?: IntWithAggregatesFilter<"MetricSnapshot"> | number
    comments?: IntWithAggregatesFilter<"MetricSnapshot"> | number
    shares?: IntWithAggregatesFilter<"MetricSnapshot"> | number
    saves?: IntWithAggregatesFilter<"MetricSnapshot"> | number
    followers?: IntWithAggregatesFilter<"MetricSnapshot"> | number
    views?: IntWithAggregatesFilter<"MetricSnapshot"> | number
    clicks?: IntWithAggregatesFilter<"MetricSnapshot"> | number
    engagementRate?: FloatWithAggregatesFilter<"MetricSnapshot"> | number
    platformRawJson?: JsonNullableWithAggregatesFilter<"MetricSnapshot">
    createdAt?: DateTimeWithAggregatesFilter<"MetricSnapshot"> | Date | string
  }

  export type ContentItemWhereInput = {
    AND?: ContentItemWhereInput | ContentItemWhereInput[]
    OR?: ContentItemWhereInput[]
    NOT?: ContentItemWhereInput | ContentItemWhereInput[]
    id?: StringFilter<"ContentItem"> | string
    socialAccountId?: StringFilter<"ContentItem"> | string
    platformPostId?: StringFilter<"ContentItem"> | string
    title?: StringNullableFilter<"ContentItem"> | string | null
    type?: EnumContentTypeFilter<"ContentItem"> | $Enums.ContentType
    caption?: StringNullableFilter<"ContentItem"> | string | null
    publishedAt?: DateTimeFilter<"ContentItem"> | Date | string
    url?: StringNullableFilter<"ContentItem"> | string | null
    thumbnail?: StringNullableFilter<"ContentItem"> | string | null
    reach?: IntFilter<"ContentItem"> | number
    impressions?: IntFilter<"ContentItem"> | number
    likes?: IntFilter<"ContentItem"> | number
    comments?: IntFilter<"ContentItem"> | number
    shares?: IntFilter<"ContentItem"> | number
    saves?: IntFilter<"ContentItem"> | number
    views?: IntFilter<"ContentItem"> | number
    clicks?: IntFilter<"ContentItem"> | number
    engagementRate?: FloatFilter<"ContentItem"> | number
    createdAt?: DateTimeFilter<"ContentItem"> | Date | string
    updatedAt?: DateTimeFilter<"ContentItem"> | Date | string
    socialAccount?: XOR<SocialAccountScalarRelationFilter, SocialAccountWhereInput>
  }

  export type ContentItemOrderByWithRelationInput = {
    id?: SortOrder
    socialAccountId?: SortOrder
    platformPostId?: SortOrder
    title?: SortOrderInput | SortOrder
    type?: SortOrder
    caption?: SortOrderInput | SortOrder
    publishedAt?: SortOrder
    url?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    reach?: SortOrder
    impressions?: SortOrder
    likes?: SortOrder
    comments?: SortOrder
    shares?: SortOrder
    saves?: SortOrder
    views?: SortOrder
    clicks?: SortOrder
    engagementRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    socialAccount?: SocialAccountOrderByWithRelationInput
    _relevance?: ContentItemOrderByRelevanceInput
  }

  export type ContentItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    socialAccountId_platformPostId?: ContentItemSocialAccountIdPlatformPostIdCompoundUniqueInput
    AND?: ContentItemWhereInput | ContentItemWhereInput[]
    OR?: ContentItemWhereInput[]
    NOT?: ContentItemWhereInput | ContentItemWhereInput[]
    socialAccountId?: StringFilter<"ContentItem"> | string
    platformPostId?: StringFilter<"ContentItem"> | string
    title?: StringNullableFilter<"ContentItem"> | string | null
    type?: EnumContentTypeFilter<"ContentItem"> | $Enums.ContentType
    caption?: StringNullableFilter<"ContentItem"> | string | null
    publishedAt?: DateTimeFilter<"ContentItem"> | Date | string
    url?: StringNullableFilter<"ContentItem"> | string | null
    thumbnail?: StringNullableFilter<"ContentItem"> | string | null
    reach?: IntFilter<"ContentItem"> | number
    impressions?: IntFilter<"ContentItem"> | number
    likes?: IntFilter<"ContentItem"> | number
    comments?: IntFilter<"ContentItem"> | number
    shares?: IntFilter<"ContentItem"> | number
    saves?: IntFilter<"ContentItem"> | number
    views?: IntFilter<"ContentItem"> | number
    clicks?: IntFilter<"ContentItem"> | number
    engagementRate?: FloatFilter<"ContentItem"> | number
    createdAt?: DateTimeFilter<"ContentItem"> | Date | string
    updatedAt?: DateTimeFilter<"ContentItem"> | Date | string
    socialAccount?: XOR<SocialAccountScalarRelationFilter, SocialAccountWhereInput>
  }, "id" | "socialAccountId_platformPostId">

  export type ContentItemOrderByWithAggregationInput = {
    id?: SortOrder
    socialAccountId?: SortOrder
    platformPostId?: SortOrder
    title?: SortOrderInput | SortOrder
    type?: SortOrder
    caption?: SortOrderInput | SortOrder
    publishedAt?: SortOrder
    url?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    reach?: SortOrder
    impressions?: SortOrder
    likes?: SortOrder
    comments?: SortOrder
    shares?: SortOrder
    saves?: SortOrder
    views?: SortOrder
    clicks?: SortOrder
    engagementRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContentItemCountOrderByAggregateInput
    _avg?: ContentItemAvgOrderByAggregateInput
    _max?: ContentItemMaxOrderByAggregateInput
    _min?: ContentItemMinOrderByAggregateInput
    _sum?: ContentItemSumOrderByAggregateInput
  }

  export type ContentItemScalarWhereWithAggregatesInput = {
    AND?: ContentItemScalarWhereWithAggregatesInput | ContentItemScalarWhereWithAggregatesInput[]
    OR?: ContentItemScalarWhereWithAggregatesInput[]
    NOT?: ContentItemScalarWhereWithAggregatesInput | ContentItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContentItem"> | string
    socialAccountId?: StringWithAggregatesFilter<"ContentItem"> | string
    platformPostId?: StringWithAggregatesFilter<"ContentItem"> | string
    title?: StringNullableWithAggregatesFilter<"ContentItem"> | string | null
    type?: EnumContentTypeWithAggregatesFilter<"ContentItem"> | $Enums.ContentType
    caption?: StringNullableWithAggregatesFilter<"ContentItem"> | string | null
    publishedAt?: DateTimeWithAggregatesFilter<"ContentItem"> | Date | string
    url?: StringNullableWithAggregatesFilter<"ContentItem"> | string | null
    thumbnail?: StringNullableWithAggregatesFilter<"ContentItem"> | string | null
    reach?: IntWithAggregatesFilter<"ContentItem"> | number
    impressions?: IntWithAggregatesFilter<"ContentItem"> | number
    likes?: IntWithAggregatesFilter<"ContentItem"> | number
    comments?: IntWithAggregatesFilter<"ContentItem"> | number
    shares?: IntWithAggregatesFilter<"ContentItem"> | number
    saves?: IntWithAggregatesFilter<"ContentItem"> | number
    views?: IntWithAggregatesFilter<"ContentItem"> | number
    clicks?: IntWithAggregatesFilter<"ContentItem"> | number
    engagementRate?: FloatWithAggregatesFilter<"ContentItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ContentItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContentItem"> | Date | string
  }

  export type GoalWhereInput = {
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    id?: StringFilter<"Goal"> | string
    userId?: StringFilter<"Goal"> | string
    metricType?: EnumMetricTypeFilter<"Goal"> | $Enums.MetricType
    targetValue?: FloatFilter<"Goal"> | number
    currentValue?: FloatFilter<"Goal"> | number
    period?: EnumPeriodFilter<"Goal"> | $Enums.Period
    startDate?: DateTimeFilter<"Goal"> | Date | string
    endDate?: DateTimeFilter<"Goal"> | Date | string
    status?: EnumGoalStatusFilter<"Goal"> | $Enums.GoalStatus
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tasks?: TaskListRelationFilter
  }

  export type GoalOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    metricType?: SortOrder
    targetValue?: SortOrder
    currentValue?: SortOrder
    period?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    tasks?: TaskOrderByRelationAggregateInput
    _relevance?: GoalOrderByRelevanceInput
  }

  export type GoalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    userId?: StringFilter<"Goal"> | string
    metricType?: EnumMetricTypeFilter<"Goal"> | $Enums.MetricType
    targetValue?: FloatFilter<"Goal"> | number
    currentValue?: FloatFilter<"Goal"> | number
    period?: EnumPeriodFilter<"Goal"> | $Enums.Period
    startDate?: DateTimeFilter<"Goal"> | Date | string
    endDate?: DateTimeFilter<"Goal"> | Date | string
    status?: EnumGoalStatusFilter<"Goal"> | $Enums.GoalStatus
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tasks?: TaskListRelationFilter
  }, "id">

  export type GoalOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    metricType?: SortOrder
    targetValue?: SortOrder
    currentValue?: SortOrder
    period?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GoalCountOrderByAggregateInput
    _avg?: GoalAvgOrderByAggregateInput
    _max?: GoalMaxOrderByAggregateInput
    _min?: GoalMinOrderByAggregateInput
    _sum?: GoalSumOrderByAggregateInput
  }

  export type GoalScalarWhereWithAggregatesInput = {
    AND?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    OR?: GoalScalarWhereWithAggregatesInput[]
    NOT?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Goal"> | string
    userId?: StringWithAggregatesFilter<"Goal"> | string
    metricType?: EnumMetricTypeWithAggregatesFilter<"Goal"> | $Enums.MetricType
    targetValue?: FloatWithAggregatesFilter<"Goal"> | number
    currentValue?: FloatWithAggregatesFilter<"Goal"> | number
    period?: EnumPeriodWithAggregatesFilter<"Goal"> | $Enums.Period
    startDate?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
    status?: EnumGoalStatusWithAggregatesFilter<"Goal"> | $Enums.GoalStatus
    createdAt?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    userId?: StringFilter<"Task"> | string
    goalId?: StringNullableFilter<"Task"> | string | null
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumTaskPriorityFilter<"Task"> | $Enums.TaskPriority
    completedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    goal?: XOR<GoalNullableScalarRelationFilter, GoalWhereInput> | null
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    goalId?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    goal?: GoalOrderByWithRelationInput
    _relevance?: TaskOrderByRelevanceInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    userId?: StringFilter<"Task"> | string
    goalId?: StringNullableFilter<"Task"> | string | null
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumTaskPriorityFilter<"Task"> | $Enums.TaskPriority
    completedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    goal?: XOR<GoalNullableScalarRelationFilter, GoalWhereInput> | null
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    goalId?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    userId?: StringWithAggregatesFilter<"Task"> | string
    goalId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    dueDate?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    status?: EnumTaskStatusWithAggregatesFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumTaskPriorityWithAggregatesFilter<"Task"> | $Enums.TaskPriority
    completedAt?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }

  export type ContentIdeaWhereInput = {
    AND?: ContentIdeaWhereInput | ContentIdeaWhereInput[]
    OR?: ContentIdeaWhereInput[]
    NOT?: ContentIdeaWhereInput | ContentIdeaWhereInput[]
    id?: StringFilter<"ContentIdea"> | string
    userId?: StringFilter<"ContentIdea"> | string
    platform?: EnumPlatformNullableFilter<"ContentIdea"> | $Enums.Platform | null
    topic?: StringFilter<"ContentIdea"> | string
    suggestedCaption?: StringNullableFilter<"ContentIdea"> | string | null
    suggestedHashtags?: StringNullableFilter<"ContentIdea"> | string | null
    confidenceScore?: FloatFilter<"ContentIdea"> | number
    status?: EnumIdeaStatusFilter<"ContentIdea"> | $Enums.IdeaStatus
    createdAt?: DateTimeFilter<"ContentIdea"> | Date | string
    updatedAt?: DateTimeFilter<"ContentIdea"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ContentIdeaOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    platform?: SortOrderInput | SortOrder
    topic?: SortOrder
    suggestedCaption?: SortOrderInput | SortOrder
    suggestedHashtags?: SortOrderInput | SortOrder
    confidenceScore?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: ContentIdeaOrderByRelevanceInput
  }

  export type ContentIdeaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContentIdeaWhereInput | ContentIdeaWhereInput[]
    OR?: ContentIdeaWhereInput[]
    NOT?: ContentIdeaWhereInput | ContentIdeaWhereInput[]
    userId?: StringFilter<"ContentIdea"> | string
    platform?: EnumPlatformNullableFilter<"ContentIdea"> | $Enums.Platform | null
    topic?: StringFilter<"ContentIdea"> | string
    suggestedCaption?: StringNullableFilter<"ContentIdea"> | string | null
    suggestedHashtags?: StringNullableFilter<"ContentIdea"> | string | null
    confidenceScore?: FloatFilter<"ContentIdea"> | number
    status?: EnumIdeaStatusFilter<"ContentIdea"> | $Enums.IdeaStatus
    createdAt?: DateTimeFilter<"ContentIdea"> | Date | string
    updatedAt?: DateTimeFilter<"ContentIdea"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ContentIdeaOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    platform?: SortOrderInput | SortOrder
    topic?: SortOrder
    suggestedCaption?: SortOrderInput | SortOrder
    suggestedHashtags?: SortOrderInput | SortOrder
    confidenceScore?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContentIdeaCountOrderByAggregateInput
    _avg?: ContentIdeaAvgOrderByAggregateInput
    _max?: ContentIdeaMaxOrderByAggregateInput
    _min?: ContentIdeaMinOrderByAggregateInput
    _sum?: ContentIdeaSumOrderByAggregateInput
  }

  export type ContentIdeaScalarWhereWithAggregatesInput = {
    AND?: ContentIdeaScalarWhereWithAggregatesInput | ContentIdeaScalarWhereWithAggregatesInput[]
    OR?: ContentIdeaScalarWhereWithAggregatesInput[]
    NOT?: ContentIdeaScalarWhereWithAggregatesInput | ContentIdeaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContentIdea"> | string
    userId?: StringWithAggregatesFilter<"ContentIdea"> | string
    platform?: EnumPlatformNullableWithAggregatesFilter<"ContentIdea"> | $Enums.Platform | null
    topic?: StringWithAggregatesFilter<"ContentIdea"> | string
    suggestedCaption?: StringNullableWithAggregatesFilter<"ContentIdea"> | string | null
    suggestedHashtags?: StringNullableWithAggregatesFilter<"ContentIdea"> | string | null
    confidenceScore?: FloatWithAggregatesFilter<"ContentIdea"> | number
    status?: EnumIdeaStatusWithAggregatesFilter<"ContentIdea"> | $Enums.IdeaStatus
    createdAt?: DateTimeWithAggregatesFilter<"ContentIdea"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContentIdea"> | Date | string
  }

  export type CampaignWhereInput = {
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    id?: StringFilter<"Campaign"> | string
    userId?: StringFilter<"Campaign"> | string
    brandName?: StringFilter<"Campaign"> | string
    brandLogo?: StringNullableFilter<"Campaign"> | string | null
    startDate?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    deliverables?: StringNullableFilter<"Campaign"> | string | null
    agreedAmount?: FloatNullableFilter<"Campaign"> | number | null
    expectedReach?: IntNullableFilter<"Campaign"> | number | null
    actualReach?: IntNullableFilter<"Campaign"> | number | null
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    notes?: StringNullableFilter<"Campaign"> | string | null
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CampaignOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    brandName?: SortOrder
    brandLogo?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    deliverables?: SortOrderInput | SortOrder
    agreedAmount?: SortOrderInput | SortOrder
    expectedReach?: SortOrderInput | SortOrder
    actualReach?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: CampaignOrderByRelevanceInput
  }

  export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    userId?: StringFilter<"Campaign"> | string
    brandName?: StringFilter<"Campaign"> | string
    brandLogo?: StringNullableFilter<"Campaign"> | string | null
    startDate?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    deliverables?: StringNullableFilter<"Campaign"> | string | null
    agreedAmount?: FloatNullableFilter<"Campaign"> | number | null
    expectedReach?: IntNullableFilter<"Campaign"> | number | null
    actualReach?: IntNullableFilter<"Campaign"> | number | null
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    notes?: StringNullableFilter<"Campaign"> | string | null
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CampaignOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    brandName?: SortOrder
    brandLogo?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    deliverables?: SortOrderInput | SortOrder
    agreedAmount?: SortOrderInput | SortOrder
    expectedReach?: SortOrderInput | SortOrder
    actualReach?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CampaignCountOrderByAggregateInput
    _avg?: CampaignAvgOrderByAggregateInput
    _max?: CampaignMaxOrderByAggregateInput
    _min?: CampaignMinOrderByAggregateInput
    _sum?: CampaignSumOrderByAggregateInput
  }

  export type CampaignScalarWhereWithAggregatesInput = {
    AND?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    OR?: CampaignScalarWhereWithAggregatesInput[]
    NOT?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Campaign"> | string
    userId?: StringWithAggregatesFilter<"Campaign"> | string
    brandName?: StringWithAggregatesFilter<"Campaign"> | string
    brandLogo?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"Campaign"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Campaign"> | Date | string | null
    deliverables?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    agreedAmount?: FloatNullableWithAggregatesFilter<"Campaign"> | number | null
    expectedReach?: IntNullableWithAggregatesFilter<"Campaign"> | number | null
    actualReach?: IntNullableWithAggregatesFilter<"Campaign"> | number | null
    status?: EnumCampaignStatusWithAggregatesFilter<"Campaign"> | $Enums.CampaignStatus
    notes?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
  }

  export type CompetitorProfileWhereInput = {
    AND?: CompetitorProfileWhereInput | CompetitorProfileWhereInput[]
    OR?: CompetitorProfileWhereInput[]
    NOT?: CompetitorProfileWhereInput | CompetitorProfileWhereInput[]
    id?: StringFilter<"CompetitorProfile"> | string
    userId?: StringFilter<"CompetitorProfile"> | string
    platform?: EnumPlatformFilter<"CompetitorProfile"> | $Enums.Platform
    handle?: StringFilter<"CompetitorProfile"> | string
    displayName?: StringNullableFilter<"CompetitorProfile"> | string | null
    notes?: StringNullableFilter<"CompetitorProfile"> | string | null
    lastSyncedAt?: DateTimeNullableFilter<"CompetitorProfile"> | Date | string | null
    summaryStatsJson?: JsonNullableFilter<"CompetitorProfile">
    createdAt?: DateTimeFilter<"CompetitorProfile"> | Date | string
    updatedAt?: DateTimeFilter<"CompetitorProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CompetitorProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    platform?: SortOrder
    handle?: SortOrder
    displayName?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    lastSyncedAt?: SortOrderInput | SortOrder
    summaryStatsJson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: CompetitorProfileOrderByRelevanceInput
  }

  export type CompetitorProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_platform_handle?: CompetitorProfileUserIdPlatformHandleCompoundUniqueInput
    AND?: CompetitorProfileWhereInput | CompetitorProfileWhereInput[]
    OR?: CompetitorProfileWhereInput[]
    NOT?: CompetitorProfileWhereInput | CompetitorProfileWhereInput[]
    userId?: StringFilter<"CompetitorProfile"> | string
    platform?: EnumPlatformFilter<"CompetitorProfile"> | $Enums.Platform
    handle?: StringFilter<"CompetitorProfile"> | string
    displayName?: StringNullableFilter<"CompetitorProfile"> | string | null
    notes?: StringNullableFilter<"CompetitorProfile"> | string | null
    lastSyncedAt?: DateTimeNullableFilter<"CompetitorProfile"> | Date | string | null
    summaryStatsJson?: JsonNullableFilter<"CompetitorProfile">
    createdAt?: DateTimeFilter<"CompetitorProfile"> | Date | string
    updatedAt?: DateTimeFilter<"CompetitorProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_platform_handle">

  export type CompetitorProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    platform?: SortOrder
    handle?: SortOrder
    displayName?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    lastSyncedAt?: SortOrderInput | SortOrder
    summaryStatsJson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompetitorProfileCountOrderByAggregateInput
    _max?: CompetitorProfileMaxOrderByAggregateInput
    _min?: CompetitorProfileMinOrderByAggregateInput
  }

  export type CompetitorProfileScalarWhereWithAggregatesInput = {
    AND?: CompetitorProfileScalarWhereWithAggregatesInput | CompetitorProfileScalarWhereWithAggregatesInput[]
    OR?: CompetitorProfileScalarWhereWithAggregatesInput[]
    NOT?: CompetitorProfileScalarWhereWithAggregatesInput | CompetitorProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CompetitorProfile"> | string
    userId?: StringWithAggregatesFilter<"CompetitorProfile"> | string
    platform?: EnumPlatformWithAggregatesFilter<"CompetitorProfile"> | $Enums.Platform
    handle?: StringWithAggregatesFilter<"CompetitorProfile"> | string
    displayName?: StringNullableWithAggregatesFilter<"CompetitorProfile"> | string | null
    notes?: StringNullableWithAggregatesFilter<"CompetitorProfile"> | string | null
    lastSyncedAt?: DateTimeNullableWithAggregatesFilter<"CompetitorProfile"> | Date | string | null
    summaryStatsJson?: JsonNullableWithAggregatesFilter<"CompetitorProfile">
    createdAt?: DateTimeWithAggregatesFilter<"CompetitorProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CompetitorProfile"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    avatar?: string | null
    timezone?: string
    niche?: string | null
    primaryPlatform?: string | null
    streakCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    socialAccounts?: SocialAccountCreateNestedManyWithoutUserInput
    metricSnapshots?: MetricSnapshotCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    contentIdeas?: ContentIdeaCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutUserInput
    competitorProfiles?: CompetitorProfileCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    avatar?: string | null
    timezone?: string
    niche?: string | null
    primaryPlatform?: string | null
    streakCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    socialAccounts?: SocialAccountUncheckedCreateNestedManyWithoutUserInput
    metricSnapshots?: MetricSnapshotUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    contentIdeas?: ContentIdeaUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutUserInput
    competitorProfiles?: CompetitorProfileUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    niche?: NullableStringFieldUpdateOperationsInput | string | null
    primaryPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    streakCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialAccounts?: SocialAccountUpdateManyWithoutUserNestedInput
    metricSnapshots?: MetricSnapshotUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    contentIdeas?: ContentIdeaUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutUserNestedInput
    competitorProfiles?: CompetitorProfileUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    niche?: NullableStringFieldUpdateOperationsInput | string | null
    primaryPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    streakCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialAccounts?: SocialAccountUncheckedUpdateManyWithoutUserNestedInput
    metricSnapshots?: MetricSnapshotUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    contentIdeas?: ContentIdeaUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutUserNestedInput
    competitorProfiles?: CompetitorProfileUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    avatar?: string | null
    timezone?: string
    niche?: string | null
    primaryPlatform?: string | null
    streakCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    niche?: NullableStringFieldUpdateOperationsInput | string | null
    primaryPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    streakCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    niche?: NullableStringFieldUpdateOperationsInput | string | null
    primaryPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    streakCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialAccountCreateInput = {
    id?: string
    platform: $Enums.Platform
    handle: string
    displayName?: string | null
    profileUrl?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiry?: Date | string | null
    status?: $Enums.AccountStatus
    autoSync?: boolean
    lastSyncedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSocialAccountsInput
    metricSnapshots?: MetricSnapshotCreateNestedManyWithoutSocialAccountInput
    contentItems?: ContentItemCreateNestedManyWithoutSocialAccountInput
  }

  export type SocialAccountUncheckedCreateInput = {
    id?: string
    userId: string
    platform: $Enums.Platform
    handle: string
    displayName?: string | null
    profileUrl?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiry?: Date | string | null
    status?: $Enums.AccountStatus
    autoSync?: boolean
    lastSyncedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metricSnapshots?: MetricSnapshotUncheckedCreateNestedManyWithoutSocialAccountInput
    contentItems?: ContentItemUncheckedCreateNestedManyWithoutSocialAccountInput
  }

  export type SocialAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    handle?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    autoSync?: BoolFieldUpdateOperationsInput | boolean
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSocialAccountsNestedInput
    metricSnapshots?: MetricSnapshotUpdateManyWithoutSocialAccountNestedInput
    contentItems?: ContentItemUpdateManyWithoutSocialAccountNestedInput
  }

  export type SocialAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    handle?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    autoSync?: BoolFieldUpdateOperationsInput | boolean
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metricSnapshots?: MetricSnapshotUncheckedUpdateManyWithoutSocialAccountNestedInput
    contentItems?: ContentItemUncheckedUpdateManyWithoutSocialAccountNestedInput
  }

  export type SocialAccountCreateManyInput = {
    id?: string
    userId: string
    platform: $Enums.Platform
    handle: string
    displayName?: string | null
    profileUrl?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiry?: Date | string | null
    status?: $Enums.AccountStatus
    autoSync?: boolean
    lastSyncedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    handle?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    autoSync?: BoolFieldUpdateOperationsInput | boolean
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    handle?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    autoSync?: BoolFieldUpdateOperationsInput | boolean
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricSnapshotCreateInput = {
    id?: string
    date: Date | string
    reach?: number
    impressions?: number
    likes?: number
    comments?: number
    shares?: number
    saves?: number
    followers?: number
    views?: number
    clicks?: number
    engagementRate?: number
    platformRawJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMetricSnapshotsInput
    socialAccount: SocialAccountCreateNestedOneWithoutMetricSnapshotsInput
  }

  export type MetricSnapshotUncheckedCreateInput = {
    id?: string
    userId: string
    socialAccountId: string
    date: Date | string
    reach?: number
    impressions?: number
    likes?: number
    comments?: number
    shares?: number
    saves?: number
    followers?: number
    views?: number
    clicks?: number
    engagementRate?: number
    platformRawJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MetricSnapshotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reach?: IntFieldUpdateOperationsInput | number
    impressions?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    saves?: IntFieldUpdateOperationsInput | number
    followers?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    engagementRate?: FloatFieldUpdateOperationsInput | number
    platformRawJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMetricSnapshotsNestedInput
    socialAccount?: SocialAccountUpdateOneRequiredWithoutMetricSnapshotsNestedInput
  }

  export type MetricSnapshotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    socialAccountId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reach?: IntFieldUpdateOperationsInput | number
    impressions?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    saves?: IntFieldUpdateOperationsInput | number
    followers?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    engagementRate?: FloatFieldUpdateOperationsInput | number
    platformRawJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricSnapshotCreateManyInput = {
    id?: string
    userId: string
    socialAccountId: string
    date: Date | string
    reach?: number
    impressions?: number
    likes?: number
    comments?: number
    shares?: number
    saves?: number
    followers?: number
    views?: number
    clicks?: number
    engagementRate?: number
    platformRawJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MetricSnapshotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reach?: IntFieldUpdateOperationsInput | number
    impressions?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    saves?: IntFieldUpdateOperationsInput | number
    followers?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    engagementRate?: FloatFieldUpdateOperationsInput | number
    platformRawJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricSnapshotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    socialAccountId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reach?: IntFieldUpdateOperationsInput | number
    impressions?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    saves?: IntFieldUpdateOperationsInput | number
    followers?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    engagementRate?: FloatFieldUpdateOperationsInput | number
    platformRawJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentItemCreateInput = {
    id?: string
    platformPostId: string
    title?: string | null
    type: $Enums.ContentType
    caption?: string | null
    publishedAt: Date | string
    url?: string | null
    thumbnail?: string | null
    reach?: number
    impressions?: number
    likes?: number
    comments?: number
    shares?: number
    saves?: number
    views?: number
    clicks?: number
    engagementRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    socialAccount: SocialAccountCreateNestedOneWithoutContentItemsInput
  }

  export type ContentItemUncheckedCreateInput = {
    id?: string
    socialAccountId: string
    platformPostId: string
    title?: string | null
    type: $Enums.ContentType
    caption?: string | null
    publishedAt: Date | string
    url?: string | null
    thumbnail?: string | null
    reach?: number
    impressions?: number
    likes?: number
    comments?: number
    shares?: number
    saves?: number
    views?: number
    clicks?: number
    engagementRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformPostId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    reach?: IntFieldUpdateOperationsInput | number
    impressions?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    saves?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    engagementRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialAccount?: SocialAccountUpdateOneRequiredWithoutContentItemsNestedInput
  }

  export type ContentItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    socialAccountId?: StringFieldUpdateOperationsInput | string
    platformPostId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    reach?: IntFieldUpdateOperationsInput | number
    impressions?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    saves?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    engagementRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentItemCreateManyInput = {
    id?: string
    socialAccountId: string
    platformPostId: string
    title?: string | null
    type: $Enums.ContentType
    caption?: string | null
    publishedAt: Date | string
    url?: string | null
    thumbnail?: string | null
    reach?: number
    impressions?: number
    likes?: number
    comments?: number
    shares?: number
    saves?: number
    views?: number
    clicks?: number
    engagementRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformPostId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    reach?: IntFieldUpdateOperationsInput | number
    impressions?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    saves?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    engagementRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    socialAccountId?: StringFieldUpdateOperationsInput | string
    platformPostId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    reach?: IntFieldUpdateOperationsInput | number
    impressions?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    saves?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    engagementRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalCreateInput = {
    id?: string
    metricType: $Enums.MetricType
    targetValue: number
    currentValue?: number
    period: $Enums.Period
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.GoalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGoalsInput
    tasks?: TaskCreateNestedManyWithoutGoalInput
  }

  export type GoalUncheckedCreateInput = {
    id?: string
    userId: string
    metricType: $Enums.MetricType
    targetValue: number
    currentValue?: number
    period: $Enums.Period
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.GoalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutGoalInput
  }

  export type GoalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    metricType?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    targetValue?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    period?: EnumPeriodFieldUpdateOperationsInput | $Enums.Period
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGoalsNestedInput
    tasks?: TaskUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    metricType?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    targetValue?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    period?: EnumPeriodFieldUpdateOperationsInput | $Enums.Period
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutGoalNestedInput
  }

  export type GoalCreateManyInput = {
    id?: string
    userId: string
    metricType: $Enums.MetricType
    targetValue: number
    currentValue?: number
    period: $Enums.Period
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.GoalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    metricType?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    targetValue?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    period?: EnumPeriodFieldUpdateOperationsInput | $Enums.Period
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    metricType?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    targetValue?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    period?: EnumPeriodFieldUpdateOperationsInput | $Enums.Period
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateInput = {
    id?: string
    title: string
    description?: string | null
    dueDate?: Date | string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTasksInput
    goal?: GoalCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    userId: string
    goalId?: string | null
    title: string
    description?: string | null
    dueDate?: Date | string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
    goal?: GoalUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyInput = {
    id?: string
    userId: string
    goalId?: string | null
    title: string
    description?: string | null
    dueDate?: Date | string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentIdeaCreateInput = {
    id?: string
    platform?: $Enums.Platform | null
    topic: string
    suggestedCaption?: string | null
    suggestedHashtags?: string | null
    confidenceScore?: number
    status?: $Enums.IdeaStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutContentIdeasInput
  }

  export type ContentIdeaUncheckedCreateInput = {
    id?: string
    userId: string
    platform?: $Enums.Platform | null
    topic: string
    suggestedCaption?: string | null
    suggestedHashtags?: string | null
    confidenceScore?: number
    status?: $Enums.IdeaStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentIdeaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: NullableEnumPlatformFieldUpdateOperationsInput | $Enums.Platform | null
    topic?: StringFieldUpdateOperationsInput | string
    suggestedCaption?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedHashtags?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScore?: FloatFieldUpdateOperationsInput | number
    status?: EnumIdeaStatusFieldUpdateOperationsInput | $Enums.IdeaStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContentIdeasNestedInput
  }

  export type ContentIdeaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    platform?: NullableEnumPlatformFieldUpdateOperationsInput | $Enums.Platform | null
    topic?: StringFieldUpdateOperationsInput | string
    suggestedCaption?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedHashtags?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScore?: FloatFieldUpdateOperationsInput | number
    status?: EnumIdeaStatusFieldUpdateOperationsInput | $Enums.IdeaStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentIdeaCreateManyInput = {
    id?: string
    userId: string
    platform?: $Enums.Platform | null
    topic: string
    suggestedCaption?: string | null
    suggestedHashtags?: string | null
    confidenceScore?: number
    status?: $Enums.IdeaStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentIdeaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: NullableEnumPlatformFieldUpdateOperationsInput | $Enums.Platform | null
    topic?: StringFieldUpdateOperationsInput | string
    suggestedCaption?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedHashtags?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScore?: FloatFieldUpdateOperationsInput | number
    status?: EnumIdeaStatusFieldUpdateOperationsInput | $Enums.IdeaStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentIdeaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    platform?: NullableEnumPlatformFieldUpdateOperationsInput | $Enums.Platform | null
    topic?: StringFieldUpdateOperationsInput | string
    suggestedCaption?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedHashtags?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScore?: FloatFieldUpdateOperationsInput | number
    status?: EnumIdeaStatusFieldUpdateOperationsInput | $Enums.IdeaStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignCreateInput = {
    id?: string
    brandName: string
    brandLogo?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    deliverables?: string | null
    agreedAmount?: number | null
    expectedReach?: number | null
    actualReach?: number | null
    status?: $Enums.CampaignStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCampaignsInput
  }

  export type CampaignUncheckedCreateInput = {
    id?: string
    userId: string
    brandName: string
    brandLogo?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    deliverables?: string | null
    agreedAmount?: number | null
    expectedReach?: number | null
    actualReach?: number | null
    status?: $Enums.CampaignStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    brandLogo?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverables?: NullableStringFieldUpdateOperationsInput | string | null
    agreedAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    expectedReach?: NullableIntFieldUpdateOperationsInput | number | null
    actualReach?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCampaignsNestedInput
  }

  export type CampaignUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    brandLogo?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverables?: NullableStringFieldUpdateOperationsInput | string | null
    agreedAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    expectedReach?: NullableIntFieldUpdateOperationsInput | number | null
    actualReach?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignCreateManyInput = {
    id?: string
    userId: string
    brandName: string
    brandLogo?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    deliverables?: string | null
    agreedAmount?: number | null
    expectedReach?: number | null
    actualReach?: number | null
    status?: $Enums.CampaignStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    brandLogo?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverables?: NullableStringFieldUpdateOperationsInput | string | null
    agreedAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    expectedReach?: NullableIntFieldUpdateOperationsInput | number | null
    actualReach?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    brandLogo?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverables?: NullableStringFieldUpdateOperationsInput | string | null
    agreedAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    expectedReach?: NullableIntFieldUpdateOperationsInput | number | null
    actualReach?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitorProfileCreateInput = {
    id?: string
    platform: $Enums.Platform
    handle: string
    displayName?: string | null
    notes?: string | null
    lastSyncedAt?: Date | string | null
    summaryStatsJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCompetitorProfilesInput
  }

  export type CompetitorProfileUncheckedCreateInput = {
    id?: string
    userId: string
    platform: $Enums.Platform
    handle: string
    displayName?: string | null
    notes?: string | null
    lastSyncedAt?: Date | string | null
    summaryStatsJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompetitorProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    handle?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    summaryStatsJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCompetitorProfilesNestedInput
  }

  export type CompetitorProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    handle?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    summaryStatsJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitorProfileCreateManyInput = {
    id?: string
    userId: string
    platform: $Enums.Platform
    handle: string
    displayName?: string | null
    notes?: string | null
    lastSyncedAt?: Date | string | null
    summaryStatsJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompetitorProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    handle?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    summaryStatsJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitorProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    handle?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    summaryStatsJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SocialAccountListRelationFilter = {
    every?: SocialAccountWhereInput
    some?: SocialAccountWhereInput
    none?: SocialAccountWhereInput
  }

  export type MetricSnapshotListRelationFilter = {
    every?: MetricSnapshotWhereInput
    some?: MetricSnapshotWhereInput
    none?: MetricSnapshotWhereInput
  }

  export type GoalListRelationFilter = {
    every?: GoalWhereInput
    some?: GoalWhereInput
    none?: GoalWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type ContentIdeaListRelationFilter = {
    every?: ContentIdeaWhereInput
    some?: ContentIdeaWhereInput
    none?: ContentIdeaWhereInput
  }

  export type CampaignListRelationFilter = {
    every?: CampaignWhereInput
    some?: CampaignWhereInput
    none?: CampaignWhereInput
  }

  export type CompetitorProfileListRelationFilter = {
    every?: CompetitorProfileWhereInput
    some?: CompetitorProfileWhereInput
    none?: CompetitorProfileWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SocialAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MetricSnapshotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GoalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContentIdeaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampaignOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompetitorProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    avatar?: SortOrder
    timezone?: SortOrder
    niche?: SortOrder
    primaryPlatform?: SortOrder
    streakCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    streakCount?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    avatar?: SortOrder
    timezone?: SortOrder
    niche?: SortOrder
    primaryPlatform?: SortOrder
    streakCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    avatar?: SortOrder
    timezone?: SortOrder
    niche?: SortOrder
    primaryPlatform?: SortOrder
    streakCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    streakCount?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionOrderByRelevanceInput = {
    fields: SessionOrderByRelevanceFieldEnum | SessionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type EnumPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[]
    notIn?: $Enums.Platform[]
    not?: NestedEnumPlatformFilter<$PrismaModel> | $Enums.Platform
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumAccountStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[]
    notIn?: $Enums.AccountStatus[]
    not?: NestedEnumAccountStatusFilter<$PrismaModel> | $Enums.AccountStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ContentItemListRelationFilter = {
    every?: ContentItemWhereInput
    some?: ContentItemWhereInput
    none?: ContentItemWhereInput
  }

  export type ContentItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SocialAccountOrderByRelevanceInput = {
    fields: SocialAccountOrderByRelevanceFieldEnum | SocialAccountOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SocialAccountUserIdPlatformHandleCompoundUniqueInput = {
    userId: string
    platform: $Enums.Platform
    handle: string
  }

  export type SocialAccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    platform?: SortOrder
    handle?: SortOrder
    displayName?: SortOrder
    profileUrl?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    tokenExpiry?: SortOrder
    status?: SortOrder
    autoSync?: SortOrder
    lastSyncedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    platform?: SortOrder
    handle?: SortOrder
    displayName?: SortOrder
    profileUrl?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    tokenExpiry?: SortOrder
    status?: SortOrder
    autoSync?: SortOrder
    lastSyncedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialAccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    platform?: SortOrder
    handle?: SortOrder
    displayName?: SortOrder
    profileUrl?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    tokenExpiry?: SortOrder
    status?: SortOrder
    autoSync?: SortOrder
    lastSyncedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[]
    notIn?: $Enums.Platform[]
    not?: NestedEnumPlatformWithAggregatesFilter<$PrismaModel> | $Enums.Platform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlatformFilter<$PrismaModel>
    _max?: NestedEnumPlatformFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumAccountStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[]
    notIn?: $Enums.AccountStatus[]
    not?: NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel> | $Enums.AccountStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountStatusFilter<$PrismaModel>
    _max?: NestedEnumAccountStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SocialAccountScalarRelationFilter = {
    is?: SocialAccountWhereInput
    isNot?: SocialAccountWhereInput
  }

  export type MetricSnapshotOrderByRelevanceInput = {
    fields: MetricSnapshotOrderByRelevanceFieldEnum | MetricSnapshotOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MetricSnapshotSocialAccountIdDateCompoundUniqueInput = {
    socialAccountId: string
    date: Date | string
  }

  export type MetricSnapshotCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    socialAccountId?: SortOrder
    date?: SortOrder
    reach?: SortOrder
    impressions?: SortOrder
    likes?: SortOrder
    comments?: SortOrder
    shares?: SortOrder
    saves?: SortOrder
    followers?: SortOrder
    views?: SortOrder
    clicks?: SortOrder
    engagementRate?: SortOrder
    platformRawJson?: SortOrder
    createdAt?: SortOrder
  }

  export type MetricSnapshotAvgOrderByAggregateInput = {
    reach?: SortOrder
    impressions?: SortOrder
    likes?: SortOrder
    comments?: SortOrder
    shares?: SortOrder
    saves?: SortOrder
    followers?: SortOrder
    views?: SortOrder
    clicks?: SortOrder
    engagementRate?: SortOrder
  }

  export type MetricSnapshotMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    socialAccountId?: SortOrder
    date?: SortOrder
    reach?: SortOrder
    impressions?: SortOrder
    likes?: SortOrder
    comments?: SortOrder
    shares?: SortOrder
    saves?: SortOrder
    followers?: SortOrder
    views?: SortOrder
    clicks?: SortOrder
    engagementRate?: SortOrder
    createdAt?: SortOrder
  }

  export type MetricSnapshotMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    socialAccountId?: SortOrder
    date?: SortOrder
    reach?: SortOrder
    impressions?: SortOrder
    likes?: SortOrder
    comments?: SortOrder
    shares?: SortOrder
    saves?: SortOrder
    followers?: SortOrder
    views?: SortOrder
    clicks?: SortOrder
    engagementRate?: SortOrder
    createdAt?: SortOrder
  }

  export type MetricSnapshotSumOrderByAggregateInput = {
    reach?: SortOrder
    impressions?: SortOrder
    likes?: SortOrder
    comments?: SortOrder
    shares?: SortOrder
    saves?: SortOrder
    followers?: SortOrder
    views?: SortOrder
    clicks?: SortOrder
    engagementRate?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumContentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[]
    notIn?: $Enums.ContentType[]
    not?: NestedEnumContentTypeFilter<$PrismaModel> | $Enums.ContentType
  }

  export type ContentItemOrderByRelevanceInput = {
    fields: ContentItemOrderByRelevanceFieldEnum | ContentItemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ContentItemSocialAccountIdPlatformPostIdCompoundUniqueInput = {
    socialAccountId: string
    platformPostId: string
  }

  export type ContentItemCountOrderByAggregateInput = {
    id?: SortOrder
    socialAccountId?: SortOrder
    platformPostId?: SortOrder
    title?: SortOrder
    type?: SortOrder
    caption?: SortOrder
    publishedAt?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrder
    reach?: SortOrder
    impressions?: SortOrder
    likes?: SortOrder
    comments?: SortOrder
    shares?: SortOrder
    saves?: SortOrder
    views?: SortOrder
    clicks?: SortOrder
    engagementRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentItemAvgOrderByAggregateInput = {
    reach?: SortOrder
    impressions?: SortOrder
    likes?: SortOrder
    comments?: SortOrder
    shares?: SortOrder
    saves?: SortOrder
    views?: SortOrder
    clicks?: SortOrder
    engagementRate?: SortOrder
  }

  export type ContentItemMaxOrderByAggregateInput = {
    id?: SortOrder
    socialAccountId?: SortOrder
    platformPostId?: SortOrder
    title?: SortOrder
    type?: SortOrder
    caption?: SortOrder
    publishedAt?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrder
    reach?: SortOrder
    impressions?: SortOrder
    likes?: SortOrder
    comments?: SortOrder
    shares?: SortOrder
    saves?: SortOrder
    views?: SortOrder
    clicks?: SortOrder
    engagementRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentItemMinOrderByAggregateInput = {
    id?: SortOrder
    socialAccountId?: SortOrder
    platformPostId?: SortOrder
    title?: SortOrder
    type?: SortOrder
    caption?: SortOrder
    publishedAt?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrder
    reach?: SortOrder
    impressions?: SortOrder
    likes?: SortOrder
    comments?: SortOrder
    shares?: SortOrder
    saves?: SortOrder
    views?: SortOrder
    clicks?: SortOrder
    engagementRate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentItemSumOrderByAggregateInput = {
    reach?: SortOrder
    impressions?: SortOrder
    likes?: SortOrder
    comments?: SortOrder
    shares?: SortOrder
    saves?: SortOrder
    views?: SortOrder
    clicks?: SortOrder
    engagementRate?: SortOrder
  }

  export type EnumContentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[]
    notIn?: $Enums.ContentType[]
    not?: NestedEnumContentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentTypeFilter<$PrismaModel>
    _max?: NestedEnumContentTypeFilter<$PrismaModel>
  }

  export type EnumMetricTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MetricType | EnumMetricTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MetricType[]
    notIn?: $Enums.MetricType[]
    not?: NestedEnumMetricTypeFilter<$PrismaModel> | $Enums.MetricType
  }

  export type EnumPeriodFilter<$PrismaModel = never> = {
    equals?: $Enums.Period | EnumPeriodFieldRefInput<$PrismaModel>
    in?: $Enums.Period[]
    notIn?: $Enums.Period[]
    not?: NestedEnumPeriodFilter<$PrismaModel> | $Enums.Period
  }

  export type EnumGoalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | EnumGoalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GoalStatus[]
    notIn?: $Enums.GoalStatus[]
    not?: NestedEnumGoalStatusFilter<$PrismaModel> | $Enums.GoalStatus
  }

  export type GoalOrderByRelevanceInput = {
    fields: GoalOrderByRelevanceFieldEnum | GoalOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GoalCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    metricType?: SortOrder
    targetValue?: SortOrder
    currentValue?: SortOrder
    period?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoalAvgOrderByAggregateInput = {
    targetValue?: SortOrder
    currentValue?: SortOrder
  }

  export type GoalMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    metricType?: SortOrder
    targetValue?: SortOrder
    currentValue?: SortOrder
    period?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoalMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    metricType?: SortOrder
    targetValue?: SortOrder
    currentValue?: SortOrder
    period?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoalSumOrderByAggregateInput = {
    targetValue?: SortOrder
    currentValue?: SortOrder
  }

  export type EnumMetricTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MetricType | EnumMetricTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MetricType[]
    notIn?: $Enums.MetricType[]
    not?: NestedEnumMetricTypeWithAggregatesFilter<$PrismaModel> | $Enums.MetricType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMetricTypeFilter<$PrismaModel>
    _max?: NestedEnumMetricTypeFilter<$PrismaModel>
  }

  export type EnumPeriodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Period | EnumPeriodFieldRefInput<$PrismaModel>
    in?: $Enums.Period[]
    notIn?: $Enums.Period[]
    not?: NestedEnumPeriodWithAggregatesFilter<$PrismaModel> | $Enums.Period
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPeriodFilter<$PrismaModel>
    _max?: NestedEnumPeriodFilter<$PrismaModel>
  }

  export type EnumGoalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | EnumGoalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GoalStatus[]
    notIn?: $Enums.GoalStatus[]
    not?: NestedEnumGoalStatusWithAggregatesFilter<$PrismaModel> | $Enums.GoalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalStatusFilter<$PrismaModel>
    _max?: NestedEnumGoalStatusFilter<$PrismaModel>
  }

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[]
    notIn?: $Enums.TaskStatus[]
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type EnumTaskPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[]
    notIn?: $Enums.TaskPriority[]
    not?: NestedEnumTaskPriorityFilter<$PrismaModel> | $Enums.TaskPriority
  }

  export type GoalNullableScalarRelationFilter = {
    is?: GoalWhereInput | null
    isNot?: GoalWhereInput | null
  }

  export type TaskOrderByRelevanceInput = {
    fields: TaskOrderByRelevanceFieldEnum | TaskOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    goalId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    goalId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    goalId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[]
    notIn?: $Enums.TaskStatus[]
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type EnumTaskPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[]
    notIn?: $Enums.TaskPriority[]
    not?: NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TaskPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskPriorityFilter<$PrismaModel>
    _max?: NestedEnumTaskPriorityFilter<$PrismaModel>
  }

  export type EnumPlatformNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel> | null
    in?: $Enums.Platform[] | null
    notIn?: $Enums.Platform[] | null
    not?: NestedEnumPlatformNullableFilter<$PrismaModel> | $Enums.Platform | null
  }

  export type EnumIdeaStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IdeaStatus | EnumIdeaStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IdeaStatus[]
    notIn?: $Enums.IdeaStatus[]
    not?: NestedEnumIdeaStatusFilter<$PrismaModel> | $Enums.IdeaStatus
  }

  export type ContentIdeaOrderByRelevanceInput = {
    fields: ContentIdeaOrderByRelevanceFieldEnum | ContentIdeaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ContentIdeaCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    platform?: SortOrder
    topic?: SortOrder
    suggestedCaption?: SortOrder
    suggestedHashtags?: SortOrder
    confidenceScore?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentIdeaAvgOrderByAggregateInput = {
    confidenceScore?: SortOrder
  }

  export type ContentIdeaMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    platform?: SortOrder
    topic?: SortOrder
    suggestedCaption?: SortOrder
    suggestedHashtags?: SortOrder
    confidenceScore?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentIdeaMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    platform?: SortOrder
    topic?: SortOrder
    suggestedCaption?: SortOrder
    suggestedHashtags?: SortOrder
    confidenceScore?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentIdeaSumOrderByAggregateInput = {
    confidenceScore?: SortOrder
  }

  export type EnumPlatformNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel> | null
    in?: $Enums.Platform[] | null
    notIn?: $Enums.Platform[] | null
    not?: NestedEnumPlatformNullableWithAggregatesFilter<$PrismaModel> | $Enums.Platform | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPlatformNullableFilter<$PrismaModel>
    _max?: NestedEnumPlatformNullableFilter<$PrismaModel>
  }

  export type EnumIdeaStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IdeaStatus | EnumIdeaStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IdeaStatus[]
    notIn?: $Enums.IdeaStatus[]
    not?: NestedEnumIdeaStatusWithAggregatesFilter<$PrismaModel> | $Enums.IdeaStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIdeaStatusFilter<$PrismaModel>
    _max?: NestedEnumIdeaStatusFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumCampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[]
    notIn?: $Enums.CampaignStatus[]
    not?: NestedEnumCampaignStatusFilter<$PrismaModel> | $Enums.CampaignStatus
  }

  export type CampaignOrderByRelevanceInput = {
    fields: CampaignOrderByRelevanceFieldEnum | CampaignOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CampaignCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    brandName?: SortOrder
    brandLogo?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    deliverables?: SortOrder
    agreedAmount?: SortOrder
    expectedReach?: SortOrder
    actualReach?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignAvgOrderByAggregateInput = {
    agreedAmount?: SortOrder
    expectedReach?: SortOrder
    actualReach?: SortOrder
  }

  export type CampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    brandName?: SortOrder
    brandLogo?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    deliverables?: SortOrder
    agreedAmount?: SortOrder
    expectedReach?: SortOrder
    actualReach?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    brandName?: SortOrder
    brandLogo?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    deliverables?: SortOrder
    agreedAmount?: SortOrder
    expectedReach?: SortOrder
    actualReach?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignSumOrderByAggregateInput = {
    agreedAmount?: SortOrder
    expectedReach?: SortOrder
    actualReach?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumCampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[]
    notIn?: $Enums.CampaignStatus[]
    not?: NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.CampaignStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampaignStatusFilter<$PrismaModel>
    _max?: NestedEnumCampaignStatusFilter<$PrismaModel>
  }

  export type CompetitorProfileOrderByRelevanceInput = {
    fields: CompetitorProfileOrderByRelevanceFieldEnum | CompetitorProfileOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CompetitorProfileUserIdPlatformHandleCompoundUniqueInput = {
    userId: string
    platform: $Enums.Platform
    handle: string
  }

  export type CompetitorProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    platform?: SortOrder
    handle?: SortOrder
    displayName?: SortOrder
    notes?: SortOrder
    lastSyncedAt?: SortOrder
    summaryStatsJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompetitorProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    platform?: SortOrder
    handle?: SortOrder
    displayName?: SortOrder
    notes?: SortOrder
    lastSyncedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompetitorProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    platform?: SortOrder
    handle?: SortOrder
    displayName?: SortOrder
    notes?: SortOrder
    lastSyncedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialAccountCreateNestedManyWithoutUserInput = {
    create?: XOR<SocialAccountCreateWithoutUserInput, SocialAccountUncheckedCreateWithoutUserInput> | SocialAccountCreateWithoutUserInput[] | SocialAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SocialAccountCreateOrConnectWithoutUserInput | SocialAccountCreateOrConnectWithoutUserInput[]
    createMany?: SocialAccountCreateManyUserInputEnvelope
    connect?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
  }

  export type MetricSnapshotCreateNestedManyWithoutUserInput = {
    create?: XOR<MetricSnapshotCreateWithoutUserInput, MetricSnapshotUncheckedCreateWithoutUserInput> | MetricSnapshotCreateWithoutUserInput[] | MetricSnapshotUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MetricSnapshotCreateOrConnectWithoutUserInput | MetricSnapshotCreateOrConnectWithoutUserInput[]
    createMany?: MetricSnapshotCreateManyUserInputEnvelope
    connect?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
  }

  export type GoalCreateNestedManyWithoutUserInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ContentIdeaCreateNestedManyWithoutUserInput = {
    create?: XOR<ContentIdeaCreateWithoutUserInput, ContentIdeaUncheckedCreateWithoutUserInput> | ContentIdeaCreateWithoutUserInput[] | ContentIdeaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContentIdeaCreateOrConnectWithoutUserInput | ContentIdeaCreateOrConnectWithoutUserInput[]
    createMany?: ContentIdeaCreateManyUserInputEnvelope
    connect?: ContentIdeaWhereUniqueInput | ContentIdeaWhereUniqueInput[]
  }

  export type CampaignCreateNestedManyWithoutUserInput = {
    create?: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput> | CampaignCreateWithoutUserInput[] | CampaignUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutUserInput | CampaignCreateOrConnectWithoutUserInput[]
    createMany?: CampaignCreateManyUserInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type CompetitorProfileCreateNestedManyWithoutUserInput = {
    create?: XOR<CompetitorProfileCreateWithoutUserInput, CompetitorProfileUncheckedCreateWithoutUserInput> | CompetitorProfileCreateWithoutUserInput[] | CompetitorProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompetitorProfileCreateOrConnectWithoutUserInput | CompetitorProfileCreateOrConnectWithoutUserInput[]
    createMany?: CompetitorProfileCreateManyUserInputEnvelope
    connect?: CompetitorProfileWhereUniqueInput | CompetitorProfileWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type SocialAccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SocialAccountCreateWithoutUserInput, SocialAccountUncheckedCreateWithoutUserInput> | SocialAccountCreateWithoutUserInput[] | SocialAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SocialAccountCreateOrConnectWithoutUserInput | SocialAccountCreateOrConnectWithoutUserInput[]
    createMany?: SocialAccountCreateManyUserInputEnvelope
    connect?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
  }

  export type MetricSnapshotUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MetricSnapshotCreateWithoutUserInput, MetricSnapshotUncheckedCreateWithoutUserInput> | MetricSnapshotCreateWithoutUserInput[] | MetricSnapshotUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MetricSnapshotCreateOrConnectWithoutUserInput | MetricSnapshotCreateOrConnectWithoutUserInput[]
    createMany?: MetricSnapshotCreateManyUserInputEnvelope
    connect?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
  }

  export type GoalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ContentIdeaUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ContentIdeaCreateWithoutUserInput, ContentIdeaUncheckedCreateWithoutUserInput> | ContentIdeaCreateWithoutUserInput[] | ContentIdeaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContentIdeaCreateOrConnectWithoutUserInput | ContentIdeaCreateOrConnectWithoutUserInput[]
    createMany?: ContentIdeaCreateManyUserInputEnvelope
    connect?: ContentIdeaWhereUniqueInput | ContentIdeaWhereUniqueInput[]
  }

  export type CampaignUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput> | CampaignCreateWithoutUserInput[] | CampaignUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutUserInput | CampaignCreateOrConnectWithoutUserInput[]
    createMany?: CampaignCreateManyUserInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type CompetitorProfileUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CompetitorProfileCreateWithoutUserInput, CompetitorProfileUncheckedCreateWithoutUserInput> | CompetitorProfileCreateWithoutUserInput[] | CompetitorProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompetitorProfileCreateOrConnectWithoutUserInput | CompetitorProfileCreateOrConnectWithoutUserInput[]
    createMany?: CompetitorProfileCreateManyUserInputEnvelope
    connect?: CompetitorProfileWhereUniqueInput | CompetitorProfileWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SocialAccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<SocialAccountCreateWithoutUserInput, SocialAccountUncheckedCreateWithoutUserInput> | SocialAccountCreateWithoutUserInput[] | SocialAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SocialAccountCreateOrConnectWithoutUserInput | SocialAccountCreateOrConnectWithoutUserInput[]
    upsert?: SocialAccountUpsertWithWhereUniqueWithoutUserInput | SocialAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SocialAccountCreateManyUserInputEnvelope
    set?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
    disconnect?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
    delete?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
    connect?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
    update?: SocialAccountUpdateWithWhereUniqueWithoutUserInput | SocialAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SocialAccountUpdateManyWithWhereWithoutUserInput | SocialAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SocialAccountScalarWhereInput | SocialAccountScalarWhereInput[]
  }

  export type MetricSnapshotUpdateManyWithoutUserNestedInput = {
    create?: XOR<MetricSnapshotCreateWithoutUserInput, MetricSnapshotUncheckedCreateWithoutUserInput> | MetricSnapshotCreateWithoutUserInput[] | MetricSnapshotUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MetricSnapshotCreateOrConnectWithoutUserInput | MetricSnapshotCreateOrConnectWithoutUserInput[]
    upsert?: MetricSnapshotUpsertWithWhereUniqueWithoutUserInput | MetricSnapshotUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MetricSnapshotCreateManyUserInputEnvelope
    set?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
    disconnect?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
    delete?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
    connect?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
    update?: MetricSnapshotUpdateWithWhereUniqueWithoutUserInput | MetricSnapshotUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MetricSnapshotUpdateManyWithWhereWithoutUserInput | MetricSnapshotUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MetricSnapshotScalarWhereInput | MetricSnapshotScalarWhereInput[]
  }

  export type GoalUpdateManyWithoutUserNestedInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutUserInput | GoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutUserInput | GoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutUserInput | GoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ContentIdeaUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContentIdeaCreateWithoutUserInput, ContentIdeaUncheckedCreateWithoutUserInput> | ContentIdeaCreateWithoutUserInput[] | ContentIdeaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContentIdeaCreateOrConnectWithoutUserInput | ContentIdeaCreateOrConnectWithoutUserInput[]
    upsert?: ContentIdeaUpsertWithWhereUniqueWithoutUserInput | ContentIdeaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContentIdeaCreateManyUserInputEnvelope
    set?: ContentIdeaWhereUniqueInput | ContentIdeaWhereUniqueInput[]
    disconnect?: ContentIdeaWhereUniqueInput | ContentIdeaWhereUniqueInput[]
    delete?: ContentIdeaWhereUniqueInput | ContentIdeaWhereUniqueInput[]
    connect?: ContentIdeaWhereUniqueInput | ContentIdeaWhereUniqueInput[]
    update?: ContentIdeaUpdateWithWhereUniqueWithoutUserInput | ContentIdeaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContentIdeaUpdateManyWithWhereWithoutUserInput | ContentIdeaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContentIdeaScalarWhereInput | ContentIdeaScalarWhereInput[]
  }

  export type CampaignUpdateManyWithoutUserNestedInput = {
    create?: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput> | CampaignCreateWithoutUserInput[] | CampaignUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutUserInput | CampaignCreateOrConnectWithoutUserInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutUserInput | CampaignUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CampaignCreateManyUserInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutUserInput | CampaignUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutUserInput | CampaignUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type CompetitorProfileUpdateManyWithoutUserNestedInput = {
    create?: XOR<CompetitorProfileCreateWithoutUserInput, CompetitorProfileUncheckedCreateWithoutUserInput> | CompetitorProfileCreateWithoutUserInput[] | CompetitorProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompetitorProfileCreateOrConnectWithoutUserInput | CompetitorProfileCreateOrConnectWithoutUserInput[]
    upsert?: CompetitorProfileUpsertWithWhereUniqueWithoutUserInput | CompetitorProfileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CompetitorProfileCreateManyUserInputEnvelope
    set?: CompetitorProfileWhereUniqueInput | CompetitorProfileWhereUniqueInput[]
    disconnect?: CompetitorProfileWhereUniqueInput | CompetitorProfileWhereUniqueInput[]
    delete?: CompetitorProfileWhereUniqueInput | CompetitorProfileWhereUniqueInput[]
    connect?: CompetitorProfileWhereUniqueInput | CompetitorProfileWhereUniqueInput[]
    update?: CompetitorProfileUpdateWithWhereUniqueWithoutUserInput | CompetitorProfileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CompetitorProfileUpdateManyWithWhereWithoutUserInput | CompetitorProfileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CompetitorProfileScalarWhereInput | CompetitorProfileScalarWhereInput[]
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

  export type SocialAccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SocialAccountCreateWithoutUserInput, SocialAccountUncheckedCreateWithoutUserInput> | SocialAccountCreateWithoutUserInput[] | SocialAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SocialAccountCreateOrConnectWithoutUserInput | SocialAccountCreateOrConnectWithoutUserInput[]
    upsert?: SocialAccountUpsertWithWhereUniqueWithoutUserInput | SocialAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SocialAccountCreateManyUserInputEnvelope
    set?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
    disconnect?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
    delete?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
    connect?: SocialAccountWhereUniqueInput | SocialAccountWhereUniqueInput[]
    update?: SocialAccountUpdateWithWhereUniqueWithoutUserInput | SocialAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SocialAccountUpdateManyWithWhereWithoutUserInput | SocialAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SocialAccountScalarWhereInput | SocialAccountScalarWhereInput[]
  }

  export type MetricSnapshotUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MetricSnapshotCreateWithoutUserInput, MetricSnapshotUncheckedCreateWithoutUserInput> | MetricSnapshotCreateWithoutUserInput[] | MetricSnapshotUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MetricSnapshotCreateOrConnectWithoutUserInput | MetricSnapshotCreateOrConnectWithoutUserInput[]
    upsert?: MetricSnapshotUpsertWithWhereUniqueWithoutUserInput | MetricSnapshotUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MetricSnapshotCreateManyUserInputEnvelope
    set?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
    disconnect?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
    delete?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
    connect?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
    update?: MetricSnapshotUpdateWithWhereUniqueWithoutUserInput | MetricSnapshotUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MetricSnapshotUpdateManyWithWhereWithoutUserInput | MetricSnapshotUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MetricSnapshotScalarWhereInput | MetricSnapshotScalarWhereInput[]
  }

  export type GoalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutUserInput | GoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutUserInput | GoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutUserInput | GoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ContentIdeaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContentIdeaCreateWithoutUserInput, ContentIdeaUncheckedCreateWithoutUserInput> | ContentIdeaCreateWithoutUserInput[] | ContentIdeaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContentIdeaCreateOrConnectWithoutUserInput | ContentIdeaCreateOrConnectWithoutUserInput[]
    upsert?: ContentIdeaUpsertWithWhereUniqueWithoutUserInput | ContentIdeaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContentIdeaCreateManyUserInputEnvelope
    set?: ContentIdeaWhereUniqueInput | ContentIdeaWhereUniqueInput[]
    disconnect?: ContentIdeaWhereUniqueInput | ContentIdeaWhereUniqueInput[]
    delete?: ContentIdeaWhereUniqueInput | ContentIdeaWhereUniqueInput[]
    connect?: ContentIdeaWhereUniqueInput | ContentIdeaWhereUniqueInput[]
    update?: ContentIdeaUpdateWithWhereUniqueWithoutUserInput | ContentIdeaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContentIdeaUpdateManyWithWhereWithoutUserInput | ContentIdeaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContentIdeaScalarWhereInput | ContentIdeaScalarWhereInput[]
  }

  export type CampaignUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput> | CampaignCreateWithoutUserInput[] | CampaignUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutUserInput | CampaignCreateOrConnectWithoutUserInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutUserInput | CampaignUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CampaignCreateManyUserInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutUserInput | CampaignUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutUserInput | CampaignUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type CompetitorProfileUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CompetitorProfileCreateWithoutUserInput, CompetitorProfileUncheckedCreateWithoutUserInput> | CompetitorProfileCreateWithoutUserInput[] | CompetitorProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompetitorProfileCreateOrConnectWithoutUserInput | CompetitorProfileCreateOrConnectWithoutUserInput[]
    upsert?: CompetitorProfileUpsertWithWhereUniqueWithoutUserInput | CompetitorProfileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CompetitorProfileCreateManyUserInputEnvelope
    set?: CompetitorProfileWhereUniqueInput | CompetitorProfileWhereUniqueInput[]
    disconnect?: CompetitorProfileWhereUniqueInput | CompetitorProfileWhereUniqueInput[]
    delete?: CompetitorProfileWhereUniqueInput | CompetitorProfileWhereUniqueInput[]
    connect?: CompetitorProfileWhereUniqueInput | CompetitorProfileWhereUniqueInput[]
    update?: CompetitorProfileUpdateWithWhereUniqueWithoutUserInput | CompetitorProfileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CompetitorProfileUpdateManyWithWhereWithoutUserInput | CompetitorProfileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CompetitorProfileScalarWhereInput | CompetitorProfileScalarWhereInput[]
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

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutSocialAccountsInput = {
    create?: XOR<UserCreateWithoutSocialAccountsInput, UserUncheckedCreateWithoutSocialAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSocialAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type MetricSnapshotCreateNestedManyWithoutSocialAccountInput = {
    create?: XOR<MetricSnapshotCreateWithoutSocialAccountInput, MetricSnapshotUncheckedCreateWithoutSocialAccountInput> | MetricSnapshotCreateWithoutSocialAccountInput[] | MetricSnapshotUncheckedCreateWithoutSocialAccountInput[]
    connectOrCreate?: MetricSnapshotCreateOrConnectWithoutSocialAccountInput | MetricSnapshotCreateOrConnectWithoutSocialAccountInput[]
    createMany?: MetricSnapshotCreateManySocialAccountInputEnvelope
    connect?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
  }

  export type ContentItemCreateNestedManyWithoutSocialAccountInput = {
    create?: XOR<ContentItemCreateWithoutSocialAccountInput, ContentItemUncheckedCreateWithoutSocialAccountInput> | ContentItemCreateWithoutSocialAccountInput[] | ContentItemUncheckedCreateWithoutSocialAccountInput[]
    connectOrCreate?: ContentItemCreateOrConnectWithoutSocialAccountInput | ContentItemCreateOrConnectWithoutSocialAccountInput[]
    createMany?: ContentItemCreateManySocialAccountInputEnvelope
    connect?: ContentItemWhereUniqueInput | ContentItemWhereUniqueInput[]
  }

  export type MetricSnapshotUncheckedCreateNestedManyWithoutSocialAccountInput = {
    create?: XOR<MetricSnapshotCreateWithoutSocialAccountInput, MetricSnapshotUncheckedCreateWithoutSocialAccountInput> | MetricSnapshotCreateWithoutSocialAccountInput[] | MetricSnapshotUncheckedCreateWithoutSocialAccountInput[]
    connectOrCreate?: MetricSnapshotCreateOrConnectWithoutSocialAccountInput | MetricSnapshotCreateOrConnectWithoutSocialAccountInput[]
    createMany?: MetricSnapshotCreateManySocialAccountInputEnvelope
    connect?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
  }

  export type ContentItemUncheckedCreateNestedManyWithoutSocialAccountInput = {
    create?: XOR<ContentItemCreateWithoutSocialAccountInput, ContentItemUncheckedCreateWithoutSocialAccountInput> | ContentItemCreateWithoutSocialAccountInput[] | ContentItemUncheckedCreateWithoutSocialAccountInput[]
    connectOrCreate?: ContentItemCreateOrConnectWithoutSocialAccountInput | ContentItemCreateOrConnectWithoutSocialAccountInput[]
    createMany?: ContentItemCreateManySocialAccountInputEnvelope
    connect?: ContentItemWhereUniqueInput | ContentItemWhereUniqueInput[]
  }

  export type EnumPlatformFieldUpdateOperationsInput = {
    set?: $Enums.Platform
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumAccountStatusFieldUpdateOperationsInput = {
    set?: $Enums.AccountStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutSocialAccountsNestedInput = {
    create?: XOR<UserCreateWithoutSocialAccountsInput, UserUncheckedCreateWithoutSocialAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSocialAccountsInput
    upsert?: UserUpsertWithoutSocialAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSocialAccountsInput, UserUpdateWithoutSocialAccountsInput>, UserUncheckedUpdateWithoutSocialAccountsInput>
  }

  export type MetricSnapshotUpdateManyWithoutSocialAccountNestedInput = {
    create?: XOR<MetricSnapshotCreateWithoutSocialAccountInput, MetricSnapshotUncheckedCreateWithoutSocialAccountInput> | MetricSnapshotCreateWithoutSocialAccountInput[] | MetricSnapshotUncheckedCreateWithoutSocialAccountInput[]
    connectOrCreate?: MetricSnapshotCreateOrConnectWithoutSocialAccountInput | MetricSnapshotCreateOrConnectWithoutSocialAccountInput[]
    upsert?: MetricSnapshotUpsertWithWhereUniqueWithoutSocialAccountInput | MetricSnapshotUpsertWithWhereUniqueWithoutSocialAccountInput[]
    createMany?: MetricSnapshotCreateManySocialAccountInputEnvelope
    set?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
    disconnect?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
    delete?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
    connect?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
    update?: MetricSnapshotUpdateWithWhereUniqueWithoutSocialAccountInput | MetricSnapshotUpdateWithWhereUniqueWithoutSocialAccountInput[]
    updateMany?: MetricSnapshotUpdateManyWithWhereWithoutSocialAccountInput | MetricSnapshotUpdateManyWithWhereWithoutSocialAccountInput[]
    deleteMany?: MetricSnapshotScalarWhereInput | MetricSnapshotScalarWhereInput[]
  }

  export type ContentItemUpdateManyWithoutSocialAccountNestedInput = {
    create?: XOR<ContentItemCreateWithoutSocialAccountInput, ContentItemUncheckedCreateWithoutSocialAccountInput> | ContentItemCreateWithoutSocialAccountInput[] | ContentItemUncheckedCreateWithoutSocialAccountInput[]
    connectOrCreate?: ContentItemCreateOrConnectWithoutSocialAccountInput | ContentItemCreateOrConnectWithoutSocialAccountInput[]
    upsert?: ContentItemUpsertWithWhereUniqueWithoutSocialAccountInput | ContentItemUpsertWithWhereUniqueWithoutSocialAccountInput[]
    createMany?: ContentItemCreateManySocialAccountInputEnvelope
    set?: ContentItemWhereUniqueInput | ContentItemWhereUniqueInput[]
    disconnect?: ContentItemWhereUniqueInput | ContentItemWhereUniqueInput[]
    delete?: ContentItemWhereUniqueInput | ContentItemWhereUniqueInput[]
    connect?: ContentItemWhereUniqueInput | ContentItemWhereUniqueInput[]
    update?: ContentItemUpdateWithWhereUniqueWithoutSocialAccountInput | ContentItemUpdateWithWhereUniqueWithoutSocialAccountInput[]
    updateMany?: ContentItemUpdateManyWithWhereWithoutSocialAccountInput | ContentItemUpdateManyWithWhereWithoutSocialAccountInput[]
    deleteMany?: ContentItemScalarWhereInput | ContentItemScalarWhereInput[]
  }

  export type MetricSnapshotUncheckedUpdateManyWithoutSocialAccountNestedInput = {
    create?: XOR<MetricSnapshotCreateWithoutSocialAccountInput, MetricSnapshotUncheckedCreateWithoutSocialAccountInput> | MetricSnapshotCreateWithoutSocialAccountInput[] | MetricSnapshotUncheckedCreateWithoutSocialAccountInput[]
    connectOrCreate?: MetricSnapshotCreateOrConnectWithoutSocialAccountInput | MetricSnapshotCreateOrConnectWithoutSocialAccountInput[]
    upsert?: MetricSnapshotUpsertWithWhereUniqueWithoutSocialAccountInput | MetricSnapshotUpsertWithWhereUniqueWithoutSocialAccountInput[]
    createMany?: MetricSnapshotCreateManySocialAccountInputEnvelope
    set?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
    disconnect?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
    delete?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
    connect?: MetricSnapshotWhereUniqueInput | MetricSnapshotWhereUniqueInput[]
    update?: MetricSnapshotUpdateWithWhereUniqueWithoutSocialAccountInput | MetricSnapshotUpdateWithWhereUniqueWithoutSocialAccountInput[]
    updateMany?: MetricSnapshotUpdateManyWithWhereWithoutSocialAccountInput | MetricSnapshotUpdateManyWithWhereWithoutSocialAccountInput[]
    deleteMany?: MetricSnapshotScalarWhereInput | MetricSnapshotScalarWhereInput[]
  }

  export type ContentItemUncheckedUpdateManyWithoutSocialAccountNestedInput = {
    create?: XOR<ContentItemCreateWithoutSocialAccountInput, ContentItemUncheckedCreateWithoutSocialAccountInput> | ContentItemCreateWithoutSocialAccountInput[] | ContentItemUncheckedCreateWithoutSocialAccountInput[]
    connectOrCreate?: ContentItemCreateOrConnectWithoutSocialAccountInput | ContentItemCreateOrConnectWithoutSocialAccountInput[]
    upsert?: ContentItemUpsertWithWhereUniqueWithoutSocialAccountInput | ContentItemUpsertWithWhereUniqueWithoutSocialAccountInput[]
    createMany?: ContentItemCreateManySocialAccountInputEnvelope
    set?: ContentItemWhereUniqueInput | ContentItemWhereUniqueInput[]
    disconnect?: ContentItemWhereUniqueInput | ContentItemWhereUniqueInput[]
    delete?: ContentItemWhereUniqueInput | ContentItemWhereUniqueInput[]
    connect?: ContentItemWhereUniqueInput | ContentItemWhereUniqueInput[]
    update?: ContentItemUpdateWithWhereUniqueWithoutSocialAccountInput | ContentItemUpdateWithWhereUniqueWithoutSocialAccountInput[]
    updateMany?: ContentItemUpdateManyWithWhereWithoutSocialAccountInput | ContentItemUpdateManyWithWhereWithoutSocialAccountInput[]
    deleteMany?: ContentItemScalarWhereInput | ContentItemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMetricSnapshotsInput = {
    create?: XOR<UserCreateWithoutMetricSnapshotsInput, UserUncheckedCreateWithoutMetricSnapshotsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMetricSnapshotsInput
    connect?: UserWhereUniqueInput
  }

  export type SocialAccountCreateNestedOneWithoutMetricSnapshotsInput = {
    create?: XOR<SocialAccountCreateWithoutMetricSnapshotsInput, SocialAccountUncheckedCreateWithoutMetricSnapshotsInput>
    connectOrCreate?: SocialAccountCreateOrConnectWithoutMetricSnapshotsInput
    connect?: SocialAccountWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutMetricSnapshotsNestedInput = {
    create?: XOR<UserCreateWithoutMetricSnapshotsInput, UserUncheckedCreateWithoutMetricSnapshotsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMetricSnapshotsInput
    upsert?: UserUpsertWithoutMetricSnapshotsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMetricSnapshotsInput, UserUpdateWithoutMetricSnapshotsInput>, UserUncheckedUpdateWithoutMetricSnapshotsInput>
  }

  export type SocialAccountUpdateOneRequiredWithoutMetricSnapshotsNestedInput = {
    create?: XOR<SocialAccountCreateWithoutMetricSnapshotsInput, SocialAccountUncheckedCreateWithoutMetricSnapshotsInput>
    connectOrCreate?: SocialAccountCreateOrConnectWithoutMetricSnapshotsInput
    upsert?: SocialAccountUpsertWithoutMetricSnapshotsInput
    connect?: SocialAccountWhereUniqueInput
    update?: XOR<XOR<SocialAccountUpdateToOneWithWhereWithoutMetricSnapshotsInput, SocialAccountUpdateWithoutMetricSnapshotsInput>, SocialAccountUncheckedUpdateWithoutMetricSnapshotsInput>
  }

  export type SocialAccountCreateNestedOneWithoutContentItemsInput = {
    create?: XOR<SocialAccountCreateWithoutContentItemsInput, SocialAccountUncheckedCreateWithoutContentItemsInput>
    connectOrCreate?: SocialAccountCreateOrConnectWithoutContentItemsInput
    connect?: SocialAccountWhereUniqueInput
  }

  export type EnumContentTypeFieldUpdateOperationsInput = {
    set?: $Enums.ContentType
  }

  export type SocialAccountUpdateOneRequiredWithoutContentItemsNestedInput = {
    create?: XOR<SocialAccountCreateWithoutContentItemsInput, SocialAccountUncheckedCreateWithoutContentItemsInput>
    connectOrCreate?: SocialAccountCreateOrConnectWithoutContentItemsInput
    upsert?: SocialAccountUpsertWithoutContentItemsInput
    connect?: SocialAccountWhereUniqueInput
    update?: XOR<XOR<SocialAccountUpdateToOneWithWhereWithoutContentItemsInput, SocialAccountUpdateWithoutContentItemsInput>, SocialAccountUncheckedUpdateWithoutContentItemsInput>
  }

  export type UserCreateNestedOneWithoutGoalsInput = {
    create?: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoalsInput
    connect?: UserWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutGoalInput = {
    create?: XOR<TaskCreateWithoutGoalInput, TaskUncheckedCreateWithoutGoalInput> | TaskCreateWithoutGoalInput[] | TaskUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutGoalInput | TaskCreateOrConnectWithoutGoalInput[]
    createMany?: TaskCreateManyGoalInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutGoalInput = {
    create?: XOR<TaskCreateWithoutGoalInput, TaskUncheckedCreateWithoutGoalInput> | TaskCreateWithoutGoalInput[] | TaskUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutGoalInput | TaskCreateOrConnectWithoutGoalInput[]
    createMany?: TaskCreateManyGoalInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type EnumMetricTypeFieldUpdateOperationsInput = {
    set?: $Enums.MetricType
  }

  export type EnumPeriodFieldUpdateOperationsInput = {
    set?: $Enums.Period
  }

  export type EnumGoalStatusFieldUpdateOperationsInput = {
    set?: $Enums.GoalStatus
  }

  export type UserUpdateOneRequiredWithoutGoalsNestedInput = {
    create?: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoalsInput
    upsert?: UserUpsertWithoutGoalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGoalsInput, UserUpdateWithoutGoalsInput>, UserUncheckedUpdateWithoutGoalsInput>
  }

  export type TaskUpdateManyWithoutGoalNestedInput = {
    create?: XOR<TaskCreateWithoutGoalInput, TaskUncheckedCreateWithoutGoalInput> | TaskCreateWithoutGoalInput[] | TaskUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutGoalInput | TaskCreateOrConnectWithoutGoalInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutGoalInput | TaskUpsertWithWhereUniqueWithoutGoalInput[]
    createMany?: TaskCreateManyGoalInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutGoalInput | TaskUpdateWithWhereUniqueWithoutGoalInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutGoalInput | TaskUpdateManyWithWhereWithoutGoalInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutGoalNestedInput = {
    create?: XOR<TaskCreateWithoutGoalInput, TaskUncheckedCreateWithoutGoalInput> | TaskCreateWithoutGoalInput[] | TaskUncheckedCreateWithoutGoalInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutGoalInput | TaskCreateOrConnectWithoutGoalInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutGoalInput | TaskUpsertWithWhereUniqueWithoutGoalInput[]
    createMany?: TaskCreateManyGoalInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutGoalInput | TaskUpdateWithWhereUniqueWithoutGoalInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutGoalInput | TaskUpdateManyWithWhereWithoutGoalInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTasksInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    connect?: UserWhereUniqueInput
  }

  export type GoalCreateNestedOneWithoutTasksInput = {
    create?: XOR<GoalCreateWithoutTasksInput, GoalUncheckedCreateWithoutTasksInput>
    connectOrCreate?: GoalCreateOrConnectWithoutTasksInput
    connect?: GoalWhereUniqueInput
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }

  export type EnumTaskPriorityFieldUpdateOperationsInput = {
    set?: $Enums.TaskPriority
  }

  export type UserUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    upsert?: UserUpsertWithoutTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTasksInput, UserUpdateWithoutTasksInput>, UserUncheckedUpdateWithoutTasksInput>
  }

  export type GoalUpdateOneWithoutTasksNestedInput = {
    create?: XOR<GoalCreateWithoutTasksInput, GoalUncheckedCreateWithoutTasksInput>
    connectOrCreate?: GoalCreateOrConnectWithoutTasksInput
    upsert?: GoalUpsertWithoutTasksInput
    disconnect?: GoalWhereInput | boolean
    delete?: GoalWhereInput | boolean
    connect?: GoalWhereUniqueInput
    update?: XOR<XOR<GoalUpdateToOneWithWhereWithoutTasksInput, GoalUpdateWithoutTasksInput>, GoalUncheckedUpdateWithoutTasksInput>
  }

  export type UserCreateNestedOneWithoutContentIdeasInput = {
    create?: XOR<UserCreateWithoutContentIdeasInput, UserUncheckedCreateWithoutContentIdeasInput>
    connectOrCreate?: UserCreateOrConnectWithoutContentIdeasInput
    connect?: UserWhereUniqueInput
  }

  export type NullableEnumPlatformFieldUpdateOperationsInput = {
    set?: $Enums.Platform | null
  }

  export type EnumIdeaStatusFieldUpdateOperationsInput = {
    set?: $Enums.IdeaStatus
  }

  export type UserUpdateOneRequiredWithoutContentIdeasNestedInput = {
    create?: XOR<UserCreateWithoutContentIdeasInput, UserUncheckedCreateWithoutContentIdeasInput>
    connectOrCreate?: UserCreateOrConnectWithoutContentIdeasInput
    upsert?: UserUpsertWithoutContentIdeasInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContentIdeasInput, UserUpdateWithoutContentIdeasInput>, UserUncheckedUpdateWithoutContentIdeasInput>
  }

  export type UserCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCampaignsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumCampaignStatusFieldUpdateOperationsInput = {
    set?: $Enums.CampaignStatus
  }

  export type UserUpdateOneRequiredWithoutCampaignsNestedInput = {
    create?: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCampaignsInput
    upsert?: UserUpsertWithoutCampaignsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCampaignsInput, UserUpdateWithoutCampaignsInput>, UserUncheckedUpdateWithoutCampaignsInput>
  }

  export type UserCreateNestedOneWithoutCompetitorProfilesInput = {
    create?: XOR<UserCreateWithoutCompetitorProfilesInput, UserUncheckedCreateWithoutCompetitorProfilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompetitorProfilesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCompetitorProfilesNestedInput = {
    create?: XOR<UserCreateWithoutCompetitorProfilesInput, UserUncheckedCreateWithoutCompetitorProfilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompetitorProfilesInput
    upsert?: UserUpsertWithoutCompetitorProfilesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCompetitorProfilesInput, UserUpdateWithoutCompetitorProfilesInput>, UserUncheckedUpdateWithoutCompetitorProfilesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[]
    notIn?: $Enums.Platform[]
    not?: NestedEnumPlatformFilter<$PrismaModel> | $Enums.Platform
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumAccountStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[]
    notIn?: $Enums.AccountStatus[]
    not?: NestedEnumAccountStatusFilter<$PrismaModel> | $Enums.AccountStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[]
    notIn?: $Enums.Platform[]
    not?: NestedEnumPlatformWithAggregatesFilter<$PrismaModel> | $Enums.Platform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlatformFilter<$PrismaModel>
    _max?: NestedEnumPlatformFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountStatus | EnumAccountStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AccountStatus[]
    notIn?: $Enums.AccountStatus[]
    not?: NestedEnumAccountStatusWithAggregatesFilter<$PrismaModel> | $Enums.AccountStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountStatusFilter<$PrismaModel>
    _max?: NestedEnumAccountStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumContentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[]
    notIn?: $Enums.ContentType[]
    not?: NestedEnumContentTypeFilter<$PrismaModel> | $Enums.ContentType
  }

  export type NestedEnumContentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[]
    notIn?: $Enums.ContentType[]
    not?: NestedEnumContentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentTypeFilter<$PrismaModel>
    _max?: NestedEnumContentTypeFilter<$PrismaModel>
  }

  export type NestedEnumMetricTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MetricType | EnumMetricTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MetricType[]
    notIn?: $Enums.MetricType[]
    not?: NestedEnumMetricTypeFilter<$PrismaModel> | $Enums.MetricType
  }

  export type NestedEnumPeriodFilter<$PrismaModel = never> = {
    equals?: $Enums.Period | EnumPeriodFieldRefInput<$PrismaModel>
    in?: $Enums.Period[]
    notIn?: $Enums.Period[]
    not?: NestedEnumPeriodFilter<$PrismaModel> | $Enums.Period
  }

  export type NestedEnumGoalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | EnumGoalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GoalStatus[]
    notIn?: $Enums.GoalStatus[]
    not?: NestedEnumGoalStatusFilter<$PrismaModel> | $Enums.GoalStatus
  }

  export type NestedEnumMetricTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MetricType | EnumMetricTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MetricType[]
    notIn?: $Enums.MetricType[]
    not?: NestedEnumMetricTypeWithAggregatesFilter<$PrismaModel> | $Enums.MetricType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMetricTypeFilter<$PrismaModel>
    _max?: NestedEnumMetricTypeFilter<$PrismaModel>
  }

  export type NestedEnumPeriodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Period | EnumPeriodFieldRefInput<$PrismaModel>
    in?: $Enums.Period[]
    notIn?: $Enums.Period[]
    not?: NestedEnumPeriodWithAggregatesFilter<$PrismaModel> | $Enums.Period
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPeriodFilter<$PrismaModel>
    _max?: NestedEnumPeriodFilter<$PrismaModel>
  }

  export type NestedEnumGoalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | EnumGoalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GoalStatus[]
    notIn?: $Enums.GoalStatus[]
    not?: NestedEnumGoalStatusWithAggregatesFilter<$PrismaModel> | $Enums.GoalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalStatusFilter<$PrismaModel>
    _max?: NestedEnumGoalStatusFilter<$PrismaModel>
  }

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[]
    notIn?: $Enums.TaskStatus[]
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type NestedEnumTaskPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[]
    notIn?: $Enums.TaskPriority[]
    not?: NestedEnumTaskPriorityFilter<$PrismaModel> | $Enums.TaskPriority
  }

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[]
    notIn?: $Enums.TaskStatus[]
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[]
    notIn?: $Enums.TaskPriority[]
    not?: NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TaskPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskPriorityFilter<$PrismaModel>
    _max?: NestedEnumTaskPriorityFilter<$PrismaModel>
  }

  export type NestedEnumPlatformNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel> | null
    in?: $Enums.Platform[] | null
    notIn?: $Enums.Platform[] | null
    not?: NestedEnumPlatformNullableFilter<$PrismaModel> | $Enums.Platform | null
  }

  export type NestedEnumIdeaStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IdeaStatus | EnumIdeaStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IdeaStatus[]
    notIn?: $Enums.IdeaStatus[]
    not?: NestedEnumIdeaStatusFilter<$PrismaModel> | $Enums.IdeaStatus
  }

  export type NestedEnumPlatformNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel> | null
    in?: $Enums.Platform[] | null
    notIn?: $Enums.Platform[] | null
    not?: NestedEnumPlatformNullableWithAggregatesFilter<$PrismaModel> | $Enums.Platform | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPlatformNullableFilter<$PrismaModel>
    _max?: NestedEnumPlatformNullableFilter<$PrismaModel>
  }

  export type NestedEnumIdeaStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IdeaStatus | EnumIdeaStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IdeaStatus[]
    notIn?: $Enums.IdeaStatus[]
    not?: NestedEnumIdeaStatusWithAggregatesFilter<$PrismaModel> | $Enums.IdeaStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIdeaStatusFilter<$PrismaModel>
    _max?: NestedEnumIdeaStatusFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumCampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[]
    notIn?: $Enums.CampaignStatus[]
    not?: NestedEnumCampaignStatusFilter<$PrismaModel> | $Enums.CampaignStatus
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | EnumCampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampaignStatus[]
    notIn?: $Enums.CampaignStatus[]
    not?: NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.CampaignStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampaignStatusFilter<$PrismaModel>
    _max?: NestedEnumCampaignStatusFilter<$PrismaModel>
  }

  export type SocialAccountCreateWithoutUserInput = {
    id?: string
    platform: $Enums.Platform
    handle: string
    displayName?: string | null
    profileUrl?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiry?: Date | string | null
    status?: $Enums.AccountStatus
    autoSync?: boolean
    lastSyncedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metricSnapshots?: MetricSnapshotCreateNestedManyWithoutSocialAccountInput
    contentItems?: ContentItemCreateNestedManyWithoutSocialAccountInput
  }

  export type SocialAccountUncheckedCreateWithoutUserInput = {
    id?: string
    platform: $Enums.Platform
    handle: string
    displayName?: string | null
    profileUrl?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiry?: Date | string | null
    status?: $Enums.AccountStatus
    autoSync?: boolean
    lastSyncedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metricSnapshots?: MetricSnapshotUncheckedCreateNestedManyWithoutSocialAccountInput
    contentItems?: ContentItemUncheckedCreateNestedManyWithoutSocialAccountInput
  }

  export type SocialAccountCreateOrConnectWithoutUserInput = {
    where: SocialAccountWhereUniqueInput
    create: XOR<SocialAccountCreateWithoutUserInput, SocialAccountUncheckedCreateWithoutUserInput>
  }

  export type SocialAccountCreateManyUserInputEnvelope = {
    data: SocialAccountCreateManyUserInput | SocialAccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MetricSnapshotCreateWithoutUserInput = {
    id?: string
    date: Date | string
    reach?: number
    impressions?: number
    likes?: number
    comments?: number
    shares?: number
    saves?: number
    followers?: number
    views?: number
    clicks?: number
    engagementRate?: number
    platformRawJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    socialAccount: SocialAccountCreateNestedOneWithoutMetricSnapshotsInput
  }

  export type MetricSnapshotUncheckedCreateWithoutUserInput = {
    id?: string
    socialAccountId: string
    date: Date | string
    reach?: number
    impressions?: number
    likes?: number
    comments?: number
    shares?: number
    saves?: number
    followers?: number
    views?: number
    clicks?: number
    engagementRate?: number
    platformRawJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MetricSnapshotCreateOrConnectWithoutUserInput = {
    where: MetricSnapshotWhereUniqueInput
    create: XOR<MetricSnapshotCreateWithoutUserInput, MetricSnapshotUncheckedCreateWithoutUserInput>
  }

  export type MetricSnapshotCreateManyUserInputEnvelope = {
    data: MetricSnapshotCreateManyUserInput | MetricSnapshotCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GoalCreateWithoutUserInput = {
    id?: string
    metricType: $Enums.MetricType
    targetValue: number
    currentValue?: number
    period: $Enums.Period
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.GoalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutGoalInput
  }

  export type GoalUncheckedCreateWithoutUserInput = {
    id?: string
    metricType: $Enums.MetricType
    targetValue: number
    currentValue?: number
    period: $Enums.Period
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.GoalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutGoalInput
  }

  export type GoalCreateOrConnectWithoutUserInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput>
  }

  export type GoalCreateManyUserInputEnvelope = {
    data: GoalCreateManyUserInput | GoalCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    dueDate?: Date | string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    goal?: GoalCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutUserInput = {
    id?: string
    goalId?: string | null
    title: string
    description?: string | null
    dueDate?: Date | string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateOrConnectWithoutUserInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskCreateManyUserInputEnvelope = {
    data: TaskCreateManyUserInput | TaskCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ContentIdeaCreateWithoutUserInput = {
    id?: string
    platform?: $Enums.Platform | null
    topic: string
    suggestedCaption?: string | null
    suggestedHashtags?: string | null
    confidenceScore?: number
    status?: $Enums.IdeaStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentIdeaUncheckedCreateWithoutUserInput = {
    id?: string
    platform?: $Enums.Platform | null
    topic: string
    suggestedCaption?: string | null
    suggestedHashtags?: string | null
    confidenceScore?: number
    status?: $Enums.IdeaStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentIdeaCreateOrConnectWithoutUserInput = {
    where: ContentIdeaWhereUniqueInput
    create: XOR<ContentIdeaCreateWithoutUserInput, ContentIdeaUncheckedCreateWithoutUserInput>
  }

  export type ContentIdeaCreateManyUserInputEnvelope = {
    data: ContentIdeaCreateManyUserInput | ContentIdeaCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CampaignCreateWithoutUserInput = {
    id?: string
    brandName: string
    brandLogo?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    deliverables?: string | null
    agreedAmount?: number | null
    expectedReach?: number | null
    actualReach?: number | null
    status?: $Enums.CampaignStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignUncheckedCreateWithoutUserInput = {
    id?: string
    brandName: string
    brandLogo?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    deliverables?: string | null
    agreedAmount?: number | null
    expectedReach?: number | null
    actualReach?: number | null
    status?: $Enums.CampaignStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignCreateOrConnectWithoutUserInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput>
  }

  export type CampaignCreateManyUserInputEnvelope = {
    data: CampaignCreateManyUserInput | CampaignCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CompetitorProfileCreateWithoutUserInput = {
    id?: string
    platform: $Enums.Platform
    handle: string
    displayName?: string | null
    notes?: string | null
    lastSyncedAt?: Date | string | null
    summaryStatsJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompetitorProfileUncheckedCreateWithoutUserInput = {
    id?: string
    platform: $Enums.Platform
    handle: string
    displayName?: string | null
    notes?: string | null
    lastSyncedAt?: Date | string | null
    summaryStatsJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompetitorProfileCreateOrConnectWithoutUserInput = {
    where: CompetitorProfileWhereUniqueInput
    create: XOR<CompetitorProfileCreateWithoutUserInput, CompetitorProfileUncheckedCreateWithoutUserInput>
  }

  export type CompetitorProfileCreateManyUserInputEnvelope = {
    data: CompetitorProfileCreateManyUserInput | CompetitorProfileCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SocialAccountUpsertWithWhereUniqueWithoutUserInput = {
    where: SocialAccountWhereUniqueInput
    update: XOR<SocialAccountUpdateWithoutUserInput, SocialAccountUncheckedUpdateWithoutUserInput>
    create: XOR<SocialAccountCreateWithoutUserInput, SocialAccountUncheckedCreateWithoutUserInput>
  }

  export type SocialAccountUpdateWithWhereUniqueWithoutUserInput = {
    where: SocialAccountWhereUniqueInput
    data: XOR<SocialAccountUpdateWithoutUserInput, SocialAccountUncheckedUpdateWithoutUserInput>
  }

  export type SocialAccountUpdateManyWithWhereWithoutUserInput = {
    where: SocialAccountScalarWhereInput
    data: XOR<SocialAccountUpdateManyMutationInput, SocialAccountUncheckedUpdateManyWithoutUserInput>
  }

  export type SocialAccountScalarWhereInput = {
    AND?: SocialAccountScalarWhereInput | SocialAccountScalarWhereInput[]
    OR?: SocialAccountScalarWhereInput[]
    NOT?: SocialAccountScalarWhereInput | SocialAccountScalarWhereInput[]
    id?: StringFilter<"SocialAccount"> | string
    userId?: StringFilter<"SocialAccount"> | string
    platform?: EnumPlatformFilter<"SocialAccount"> | $Enums.Platform
    handle?: StringFilter<"SocialAccount"> | string
    displayName?: StringNullableFilter<"SocialAccount"> | string | null
    profileUrl?: StringNullableFilter<"SocialAccount"> | string | null
    accessToken?: StringNullableFilter<"SocialAccount"> | string | null
    refreshToken?: StringNullableFilter<"SocialAccount"> | string | null
    tokenExpiry?: DateTimeNullableFilter<"SocialAccount"> | Date | string | null
    status?: EnumAccountStatusFilter<"SocialAccount"> | $Enums.AccountStatus
    autoSync?: BoolFilter<"SocialAccount"> | boolean
    lastSyncedAt?: DateTimeNullableFilter<"SocialAccount"> | Date | string | null
    createdAt?: DateTimeFilter<"SocialAccount"> | Date | string
    updatedAt?: DateTimeFilter<"SocialAccount"> | Date | string
  }

  export type MetricSnapshotUpsertWithWhereUniqueWithoutUserInput = {
    where: MetricSnapshotWhereUniqueInput
    update: XOR<MetricSnapshotUpdateWithoutUserInput, MetricSnapshotUncheckedUpdateWithoutUserInput>
    create: XOR<MetricSnapshotCreateWithoutUserInput, MetricSnapshotUncheckedCreateWithoutUserInput>
  }

  export type MetricSnapshotUpdateWithWhereUniqueWithoutUserInput = {
    where: MetricSnapshotWhereUniqueInput
    data: XOR<MetricSnapshotUpdateWithoutUserInput, MetricSnapshotUncheckedUpdateWithoutUserInput>
  }

  export type MetricSnapshotUpdateManyWithWhereWithoutUserInput = {
    where: MetricSnapshotScalarWhereInput
    data: XOR<MetricSnapshotUpdateManyMutationInput, MetricSnapshotUncheckedUpdateManyWithoutUserInput>
  }

  export type MetricSnapshotScalarWhereInput = {
    AND?: MetricSnapshotScalarWhereInput | MetricSnapshotScalarWhereInput[]
    OR?: MetricSnapshotScalarWhereInput[]
    NOT?: MetricSnapshotScalarWhereInput | MetricSnapshotScalarWhereInput[]
    id?: StringFilter<"MetricSnapshot"> | string
    userId?: StringFilter<"MetricSnapshot"> | string
    socialAccountId?: StringFilter<"MetricSnapshot"> | string
    date?: DateTimeFilter<"MetricSnapshot"> | Date | string
    reach?: IntFilter<"MetricSnapshot"> | number
    impressions?: IntFilter<"MetricSnapshot"> | number
    likes?: IntFilter<"MetricSnapshot"> | number
    comments?: IntFilter<"MetricSnapshot"> | number
    shares?: IntFilter<"MetricSnapshot"> | number
    saves?: IntFilter<"MetricSnapshot"> | number
    followers?: IntFilter<"MetricSnapshot"> | number
    views?: IntFilter<"MetricSnapshot"> | number
    clicks?: IntFilter<"MetricSnapshot"> | number
    engagementRate?: FloatFilter<"MetricSnapshot"> | number
    platformRawJson?: JsonNullableFilter<"MetricSnapshot">
    createdAt?: DateTimeFilter<"MetricSnapshot"> | Date | string
  }

  export type GoalUpsertWithWhereUniqueWithoutUserInput = {
    where: GoalWhereUniqueInput
    update: XOR<GoalUpdateWithoutUserInput, GoalUncheckedUpdateWithoutUserInput>
    create: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput>
  }

  export type GoalUpdateWithWhereUniqueWithoutUserInput = {
    where: GoalWhereUniqueInput
    data: XOR<GoalUpdateWithoutUserInput, GoalUncheckedUpdateWithoutUserInput>
  }

  export type GoalUpdateManyWithWhereWithoutUserInput = {
    where: GoalScalarWhereInput
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyWithoutUserInput>
  }

  export type GoalScalarWhereInput = {
    AND?: GoalScalarWhereInput | GoalScalarWhereInput[]
    OR?: GoalScalarWhereInput[]
    NOT?: GoalScalarWhereInput | GoalScalarWhereInput[]
    id?: StringFilter<"Goal"> | string
    userId?: StringFilter<"Goal"> | string
    metricType?: EnumMetricTypeFilter<"Goal"> | $Enums.MetricType
    targetValue?: FloatFilter<"Goal"> | number
    currentValue?: FloatFilter<"Goal"> | number
    period?: EnumPeriodFilter<"Goal"> | $Enums.Period
    startDate?: DateTimeFilter<"Goal"> | Date | string
    endDate?: DateTimeFilter<"Goal"> | Date | string
    status?: EnumGoalStatusFilter<"Goal"> | $Enums.GoalStatus
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    updatedAt?: DateTimeFilter<"Goal"> | Date | string
  }

  export type TaskUpsertWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
  }

  export type TaskUpdateManyWithWhereWithoutUserInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutUserInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    userId?: StringFilter<"Task"> | string
    goalId?: StringNullableFilter<"Task"> | string | null
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumTaskPriorityFilter<"Task"> | $Enums.TaskPriority
    completedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
  }

  export type ContentIdeaUpsertWithWhereUniqueWithoutUserInput = {
    where: ContentIdeaWhereUniqueInput
    update: XOR<ContentIdeaUpdateWithoutUserInput, ContentIdeaUncheckedUpdateWithoutUserInput>
    create: XOR<ContentIdeaCreateWithoutUserInput, ContentIdeaUncheckedCreateWithoutUserInput>
  }

  export type ContentIdeaUpdateWithWhereUniqueWithoutUserInput = {
    where: ContentIdeaWhereUniqueInput
    data: XOR<ContentIdeaUpdateWithoutUserInput, ContentIdeaUncheckedUpdateWithoutUserInput>
  }

  export type ContentIdeaUpdateManyWithWhereWithoutUserInput = {
    where: ContentIdeaScalarWhereInput
    data: XOR<ContentIdeaUpdateManyMutationInput, ContentIdeaUncheckedUpdateManyWithoutUserInput>
  }

  export type ContentIdeaScalarWhereInput = {
    AND?: ContentIdeaScalarWhereInput | ContentIdeaScalarWhereInput[]
    OR?: ContentIdeaScalarWhereInput[]
    NOT?: ContentIdeaScalarWhereInput | ContentIdeaScalarWhereInput[]
    id?: StringFilter<"ContentIdea"> | string
    userId?: StringFilter<"ContentIdea"> | string
    platform?: EnumPlatformNullableFilter<"ContentIdea"> | $Enums.Platform | null
    topic?: StringFilter<"ContentIdea"> | string
    suggestedCaption?: StringNullableFilter<"ContentIdea"> | string | null
    suggestedHashtags?: StringNullableFilter<"ContentIdea"> | string | null
    confidenceScore?: FloatFilter<"ContentIdea"> | number
    status?: EnumIdeaStatusFilter<"ContentIdea"> | $Enums.IdeaStatus
    createdAt?: DateTimeFilter<"ContentIdea"> | Date | string
    updatedAt?: DateTimeFilter<"ContentIdea"> | Date | string
  }

  export type CampaignUpsertWithWhereUniqueWithoutUserInput = {
    where: CampaignWhereUniqueInput
    update: XOR<CampaignUpdateWithoutUserInput, CampaignUncheckedUpdateWithoutUserInput>
    create: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput>
  }

  export type CampaignUpdateWithWhereUniqueWithoutUserInput = {
    where: CampaignWhereUniqueInput
    data: XOR<CampaignUpdateWithoutUserInput, CampaignUncheckedUpdateWithoutUserInput>
  }

  export type CampaignUpdateManyWithWhereWithoutUserInput = {
    where: CampaignScalarWhereInput
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyWithoutUserInput>
  }

  export type CampaignScalarWhereInput = {
    AND?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    OR?: CampaignScalarWhereInput[]
    NOT?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    id?: StringFilter<"Campaign"> | string
    userId?: StringFilter<"Campaign"> | string
    brandName?: StringFilter<"Campaign"> | string
    brandLogo?: StringNullableFilter<"Campaign"> | string | null
    startDate?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Campaign"> | Date | string | null
    deliverables?: StringNullableFilter<"Campaign"> | string | null
    agreedAmount?: FloatNullableFilter<"Campaign"> | number | null
    expectedReach?: IntNullableFilter<"Campaign"> | number | null
    actualReach?: IntNullableFilter<"Campaign"> | number | null
    status?: EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus
    notes?: StringNullableFilter<"Campaign"> | string | null
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
  }

  export type CompetitorProfileUpsertWithWhereUniqueWithoutUserInput = {
    where: CompetitorProfileWhereUniqueInput
    update: XOR<CompetitorProfileUpdateWithoutUserInput, CompetitorProfileUncheckedUpdateWithoutUserInput>
    create: XOR<CompetitorProfileCreateWithoutUserInput, CompetitorProfileUncheckedCreateWithoutUserInput>
  }

  export type CompetitorProfileUpdateWithWhereUniqueWithoutUserInput = {
    where: CompetitorProfileWhereUniqueInput
    data: XOR<CompetitorProfileUpdateWithoutUserInput, CompetitorProfileUncheckedUpdateWithoutUserInput>
  }

  export type CompetitorProfileUpdateManyWithWhereWithoutUserInput = {
    where: CompetitorProfileScalarWhereInput
    data: XOR<CompetitorProfileUpdateManyMutationInput, CompetitorProfileUncheckedUpdateManyWithoutUserInput>
  }

  export type CompetitorProfileScalarWhereInput = {
    AND?: CompetitorProfileScalarWhereInput | CompetitorProfileScalarWhereInput[]
    OR?: CompetitorProfileScalarWhereInput[]
    NOT?: CompetitorProfileScalarWhereInput | CompetitorProfileScalarWhereInput[]
    id?: StringFilter<"CompetitorProfile"> | string
    userId?: StringFilter<"CompetitorProfile"> | string
    platform?: EnumPlatformFilter<"CompetitorProfile"> | $Enums.Platform
    handle?: StringFilter<"CompetitorProfile"> | string
    displayName?: StringNullableFilter<"CompetitorProfile"> | string | null
    notes?: StringNullableFilter<"CompetitorProfile"> | string | null
    lastSyncedAt?: DateTimeNullableFilter<"CompetitorProfile"> | Date | string | null
    summaryStatsJson?: JsonNullableFilter<"CompetitorProfile">
    createdAt?: DateTimeFilter<"CompetitorProfile"> | Date | string
    updatedAt?: DateTimeFilter<"CompetitorProfile"> | Date | string
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
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    avatar?: string | null
    timezone?: string
    niche?: string | null
    primaryPlatform?: string | null
    streakCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    socialAccounts?: SocialAccountCreateNestedManyWithoutUserInput
    metricSnapshots?: MetricSnapshotCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    contentIdeas?: ContentIdeaCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutUserInput
    competitorProfiles?: CompetitorProfileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    avatar?: string | null
    timezone?: string
    niche?: string | null
    primaryPlatform?: string | null
    streakCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    socialAccounts?: SocialAccountUncheckedCreateNestedManyWithoutUserInput
    metricSnapshots?: MetricSnapshotUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    contentIdeas?: ContentIdeaUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutUserInput
    competitorProfiles?: CompetitorProfileUncheckedCreateNestedManyWithoutUserInput
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
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    niche?: NullableStringFieldUpdateOperationsInput | string | null
    primaryPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    streakCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialAccounts?: SocialAccountUpdateManyWithoutUserNestedInput
    metricSnapshots?: MetricSnapshotUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    contentIdeas?: ContentIdeaUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutUserNestedInput
    competitorProfiles?: CompetitorProfileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    niche?: NullableStringFieldUpdateOperationsInput | string | null
    primaryPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    streakCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialAccounts?: SocialAccountUncheckedUpdateManyWithoutUserNestedInput
    metricSnapshots?: MetricSnapshotUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    contentIdeas?: ContentIdeaUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutUserNestedInput
    competitorProfiles?: CompetitorProfileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSocialAccountsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    avatar?: string | null
    timezone?: string
    niche?: string | null
    primaryPlatform?: string | null
    streakCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    metricSnapshots?: MetricSnapshotCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    contentIdeas?: ContentIdeaCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutUserInput
    competitorProfiles?: CompetitorProfileCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSocialAccountsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    avatar?: string | null
    timezone?: string
    niche?: string | null
    primaryPlatform?: string | null
    streakCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    metricSnapshots?: MetricSnapshotUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    contentIdeas?: ContentIdeaUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutUserInput
    competitorProfiles?: CompetitorProfileUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSocialAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSocialAccountsInput, UserUncheckedCreateWithoutSocialAccountsInput>
  }

  export type MetricSnapshotCreateWithoutSocialAccountInput = {
    id?: string
    date: Date | string
    reach?: number
    impressions?: number
    likes?: number
    comments?: number
    shares?: number
    saves?: number
    followers?: number
    views?: number
    clicks?: number
    engagementRate?: number
    platformRawJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMetricSnapshotsInput
  }

  export type MetricSnapshotUncheckedCreateWithoutSocialAccountInput = {
    id?: string
    userId: string
    date: Date | string
    reach?: number
    impressions?: number
    likes?: number
    comments?: number
    shares?: number
    saves?: number
    followers?: number
    views?: number
    clicks?: number
    engagementRate?: number
    platformRawJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MetricSnapshotCreateOrConnectWithoutSocialAccountInput = {
    where: MetricSnapshotWhereUniqueInput
    create: XOR<MetricSnapshotCreateWithoutSocialAccountInput, MetricSnapshotUncheckedCreateWithoutSocialAccountInput>
  }

  export type MetricSnapshotCreateManySocialAccountInputEnvelope = {
    data: MetricSnapshotCreateManySocialAccountInput | MetricSnapshotCreateManySocialAccountInput[]
    skipDuplicates?: boolean
  }

  export type ContentItemCreateWithoutSocialAccountInput = {
    id?: string
    platformPostId: string
    title?: string | null
    type: $Enums.ContentType
    caption?: string | null
    publishedAt: Date | string
    url?: string | null
    thumbnail?: string | null
    reach?: number
    impressions?: number
    likes?: number
    comments?: number
    shares?: number
    saves?: number
    views?: number
    clicks?: number
    engagementRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentItemUncheckedCreateWithoutSocialAccountInput = {
    id?: string
    platformPostId: string
    title?: string | null
    type: $Enums.ContentType
    caption?: string | null
    publishedAt: Date | string
    url?: string | null
    thumbnail?: string | null
    reach?: number
    impressions?: number
    likes?: number
    comments?: number
    shares?: number
    saves?: number
    views?: number
    clicks?: number
    engagementRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentItemCreateOrConnectWithoutSocialAccountInput = {
    where: ContentItemWhereUniqueInput
    create: XOR<ContentItemCreateWithoutSocialAccountInput, ContentItemUncheckedCreateWithoutSocialAccountInput>
  }

  export type ContentItemCreateManySocialAccountInputEnvelope = {
    data: ContentItemCreateManySocialAccountInput | ContentItemCreateManySocialAccountInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSocialAccountsInput = {
    update: XOR<UserUpdateWithoutSocialAccountsInput, UserUncheckedUpdateWithoutSocialAccountsInput>
    create: XOR<UserCreateWithoutSocialAccountsInput, UserUncheckedCreateWithoutSocialAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSocialAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSocialAccountsInput, UserUncheckedUpdateWithoutSocialAccountsInput>
  }

  export type UserUpdateWithoutSocialAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    niche?: NullableStringFieldUpdateOperationsInput | string | null
    primaryPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    streakCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metricSnapshots?: MetricSnapshotUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    contentIdeas?: ContentIdeaUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutUserNestedInput
    competitorProfiles?: CompetitorProfileUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSocialAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    niche?: NullableStringFieldUpdateOperationsInput | string | null
    primaryPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    streakCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metricSnapshots?: MetricSnapshotUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    contentIdeas?: ContentIdeaUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutUserNestedInput
    competitorProfiles?: CompetitorProfileUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MetricSnapshotUpsertWithWhereUniqueWithoutSocialAccountInput = {
    where: MetricSnapshotWhereUniqueInput
    update: XOR<MetricSnapshotUpdateWithoutSocialAccountInput, MetricSnapshotUncheckedUpdateWithoutSocialAccountInput>
    create: XOR<MetricSnapshotCreateWithoutSocialAccountInput, MetricSnapshotUncheckedCreateWithoutSocialAccountInput>
  }

  export type MetricSnapshotUpdateWithWhereUniqueWithoutSocialAccountInput = {
    where: MetricSnapshotWhereUniqueInput
    data: XOR<MetricSnapshotUpdateWithoutSocialAccountInput, MetricSnapshotUncheckedUpdateWithoutSocialAccountInput>
  }

  export type MetricSnapshotUpdateManyWithWhereWithoutSocialAccountInput = {
    where: MetricSnapshotScalarWhereInput
    data: XOR<MetricSnapshotUpdateManyMutationInput, MetricSnapshotUncheckedUpdateManyWithoutSocialAccountInput>
  }

  export type ContentItemUpsertWithWhereUniqueWithoutSocialAccountInput = {
    where: ContentItemWhereUniqueInput
    update: XOR<ContentItemUpdateWithoutSocialAccountInput, ContentItemUncheckedUpdateWithoutSocialAccountInput>
    create: XOR<ContentItemCreateWithoutSocialAccountInput, ContentItemUncheckedCreateWithoutSocialAccountInput>
  }

  export type ContentItemUpdateWithWhereUniqueWithoutSocialAccountInput = {
    where: ContentItemWhereUniqueInput
    data: XOR<ContentItemUpdateWithoutSocialAccountInput, ContentItemUncheckedUpdateWithoutSocialAccountInput>
  }

  export type ContentItemUpdateManyWithWhereWithoutSocialAccountInput = {
    where: ContentItemScalarWhereInput
    data: XOR<ContentItemUpdateManyMutationInput, ContentItemUncheckedUpdateManyWithoutSocialAccountInput>
  }

  export type ContentItemScalarWhereInput = {
    AND?: ContentItemScalarWhereInput | ContentItemScalarWhereInput[]
    OR?: ContentItemScalarWhereInput[]
    NOT?: ContentItemScalarWhereInput | ContentItemScalarWhereInput[]
    id?: StringFilter<"ContentItem"> | string
    socialAccountId?: StringFilter<"ContentItem"> | string
    platformPostId?: StringFilter<"ContentItem"> | string
    title?: StringNullableFilter<"ContentItem"> | string | null
    type?: EnumContentTypeFilter<"ContentItem"> | $Enums.ContentType
    caption?: StringNullableFilter<"ContentItem"> | string | null
    publishedAt?: DateTimeFilter<"ContentItem"> | Date | string
    url?: StringNullableFilter<"ContentItem"> | string | null
    thumbnail?: StringNullableFilter<"ContentItem"> | string | null
    reach?: IntFilter<"ContentItem"> | number
    impressions?: IntFilter<"ContentItem"> | number
    likes?: IntFilter<"ContentItem"> | number
    comments?: IntFilter<"ContentItem"> | number
    shares?: IntFilter<"ContentItem"> | number
    saves?: IntFilter<"ContentItem"> | number
    views?: IntFilter<"ContentItem"> | number
    clicks?: IntFilter<"ContentItem"> | number
    engagementRate?: FloatFilter<"ContentItem"> | number
    createdAt?: DateTimeFilter<"ContentItem"> | Date | string
    updatedAt?: DateTimeFilter<"ContentItem"> | Date | string
  }

  export type UserCreateWithoutMetricSnapshotsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    avatar?: string | null
    timezone?: string
    niche?: string | null
    primaryPlatform?: string | null
    streakCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    socialAccounts?: SocialAccountCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    contentIdeas?: ContentIdeaCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutUserInput
    competitorProfiles?: CompetitorProfileCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMetricSnapshotsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    avatar?: string | null
    timezone?: string
    niche?: string | null
    primaryPlatform?: string | null
    streakCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    socialAccounts?: SocialAccountUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    contentIdeas?: ContentIdeaUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutUserInput
    competitorProfiles?: CompetitorProfileUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMetricSnapshotsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMetricSnapshotsInput, UserUncheckedCreateWithoutMetricSnapshotsInput>
  }

  export type SocialAccountCreateWithoutMetricSnapshotsInput = {
    id?: string
    platform: $Enums.Platform
    handle: string
    displayName?: string | null
    profileUrl?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiry?: Date | string | null
    status?: $Enums.AccountStatus
    autoSync?: boolean
    lastSyncedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSocialAccountsInput
    contentItems?: ContentItemCreateNestedManyWithoutSocialAccountInput
  }

  export type SocialAccountUncheckedCreateWithoutMetricSnapshotsInput = {
    id?: string
    userId: string
    platform: $Enums.Platform
    handle: string
    displayName?: string | null
    profileUrl?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiry?: Date | string | null
    status?: $Enums.AccountStatus
    autoSync?: boolean
    lastSyncedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contentItems?: ContentItemUncheckedCreateNestedManyWithoutSocialAccountInput
  }

  export type SocialAccountCreateOrConnectWithoutMetricSnapshotsInput = {
    where: SocialAccountWhereUniqueInput
    create: XOR<SocialAccountCreateWithoutMetricSnapshotsInput, SocialAccountUncheckedCreateWithoutMetricSnapshotsInput>
  }

  export type UserUpsertWithoutMetricSnapshotsInput = {
    update: XOR<UserUpdateWithoutMetricSnapshotsInput, UserUncheckedUpdateWithoutMetricSnapshotsInput>
    create: XOR<UserCreateWithoutMetricSnapshotsInput, UserUncheckedCreateWithoutMetricSnapshotsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMetricSnapshotsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMetricSnapshotsInput, UserUncheckedUpdateWithoutMetricSnapshotsInput>
  }

  export type UserUpdateWithoutMetricSnapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    niche?: NullableStringFieldUpdateOperationsInput | string | null
    primaryPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    streakCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialAccounts?: SocialAccountUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    contentIdeas?: ContentIdeaUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutUserNestedInput
    competitorProfiles?: CompetitorProfileUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMetricSnapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    niche?: NullableStringFieldUpdateOperationsInput | string | null
    primaryPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    streakCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialAccounts?: SocialAccountUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    contentIdeas?: ContentIdeaUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutUserNestedInput
    competitorProfiles?: CompetitorProfileUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SocialAccountUpsertWithoutMetricSnapshotsInput = {
    update: XOR<SocialAccountUpdateWithoutMetricSnapshotsInput, SocialAccountUncheckedUpdateWithoutMetricSnapshotsInput>
    create: XOR<SocialAccountCreateWithoutMetricSnapshotsInput, SocialAccountUncheckedCreateWithoutMetricSnapshotsInput>
    where?: SocialAccountWhereInput
  }

  export type SocialAccountUpdateToOneWithWhereWithoutMetricSnapshotsInput = {
    where?: SocialAccountWhereInput
    data: XOR<SocialAccountUpdateWithoutMetricSnapshotsInput, SocialAccountUncheckedUpdateWithoutMetricSnapshotsInput>
  }

  export type SocialAccountUpdateWithoutMetricSnapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    handle?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    autoSync?: BoolFieldUpdateOperationsInput | boolean
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSocialAccountsNestedInput
    contentItems?: ContentItemUpdateManyWithoutSocialAccountNestedInput
  }

  export type SocialAccountUncheckedUpdateWithoutMetricSnapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    handle?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    autoSync?: BoolFieldUpdateOperationsInput | boolean
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentItems?: ContentItemUncheckedUpdateManyWithoutSocialAccountNestedInput
  }

  export type SocialAccountCreateWithoutContentItemsInput = {
    id?: string
    platform: $Enums.Platform
    handle: string
    displayName?: string | null
    profileUrl?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiry?: Date | string | null
    status?: $Enums.AccountStatus
    autoSync?: boolean
    lastSyncedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSocialAccountsInput
    metricSnapshots?: MetricSnapshotCreateNestedManyWithoutSocialAccountInput
  }

  export type SocialAccountUncheckedCreateWithoutContentItemsInput = {
    id?: string
    userId: string
    platform: $Enums.Platform
    handle: string
    displayName?: string | null
    profileUrl?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiry?: Date | string | null
    status?: $Enums.AccountStatus
    autoSync?: boolean
    lastSyncedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metricSnapshots?: MetricSnapshotUncheckedCreateNestedManyWithoutSocialAccountInput
  }

  export type SocialAccountCreateOrConnectWithoutContentItemsInput = {
    where: SocialAccountWhereUniqueInput
    create: XOR<SocialAccountCreateWithoutContentItemsInput, SocialAccountUncheckedCreateWithoutContentItemsInput>
  }

  export type SocialAccountUpsertWithoutContentItemsInput = {
    update: XOR<SocialAccountUpdateWithoutContentItemsInput, SocialAccountUncheckedUpdateWithoutContentItemsInput>
    create: XOR<SocialAccountCreateWithoutContentItemsInput, SocialAccountUncheckedCreateWithoutContentItemsInput>
    where?: SocialAccountWhereInput
  }

  export type SocialAccountUpdateToOneWithWhereWithoutContentItemsInput = {
    where?: SocialAccountWhereInput
    data: XOR<SocialAccountUpdateWithoutContentItemsInput, SocialAccountUncheckedUpdateWithoutContentItemsInput>
  }

  export type SocialAccountUpdateWithoutContentItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    handle?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    autoSync?: BoolFieldUpdateOperationsInput | boolean
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSocialAccountsNestedInput
    metricSnapshots?: MetricSnapshotUpdateManyWithoutSocialAccountNestedInput
  }

  export type SocialAccountUncheckedUpdateWithoutContentItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    handle?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    autoSync?: BoolFieldUpdateOperationsInput | boolean
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metricSnapshots?: MetricSnapshotUncheckedUpdateManyWithoutSocialAccountNestedInput
  }

  export type UserCreateWithoutGoalsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    avatar?: string | null
    timezone?: string
    niche?: string | null
    primaryPlatform?: string | null
    streakCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    socialAccounts?: SocialAccountCreateNestedManyWithoutUserInput
    metricSnapshots?: MetricSnapshotCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    contentIdeas?: ContentIdeaCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutUserInput
    competitorProfiles?: CompetitorProfileCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGoalsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    avatar?: string | null
    timezone?: string
    niche?: string | null
    primaryPlatform?: string | null
    streakCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    socialAccounts?: SocialAccountUncheckedCreateNestedManyWithoutUserInput
    metricSnapshots?: MetricSnapshotUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    contentIdeas?: ContentIdeaUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutUserInput
    competitorProfiles?: CompetitorProfileUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGoalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
  }

  export type TaskCreateWithoutGoalInput = {
    id?: string
    title: string
    description?: string | null
    dueDate?: Date | string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutGoalInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    dueDate?: Date | string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateOrConnectWithoutGoalInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutGoalInput, TaskUncheckedCreateWithoutGoalInput>
  }

  export type TaskCreateManyGoalInputEnvelope = {
    data: TaskCreateManyGoalInput | TaskCreateManyGoalInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGoalsInput = {
    update: XOR<UserUpdateWithoutGoalsInput, UserUncheckedUpdateWithoutGoalsInput>
    create: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGoalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGoalsInput, UserUncheckedUpdateWithoutGoalsInput>
  }

  export type UserUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    niche?: NullableStringFieldUpdateOperationsInput | string | null
    primaryPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    streakCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialAccounts?: SocialAccountUpdateManyWithoutUserNestedInput
    metricSnapshots?: MetricSnapshotUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    contentIdeas?: ContentIdeaUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutUserNestedInput
    competitorProfiles?: CompetitorProfileUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    niche?: NullableStringFieldUpdateOperationsInput | string | null
    primaryPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    streakCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialAccounts?: SocialAccountUncheckedUpdateManyWithoutUserNestedInput
    metricSnapshots?: MetricSnapshotUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    contentIdeas?: ContentIdeaUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutUserNestedInput
    competitorProfiles?: CompetitorProfileUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutGoalInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutGoalInput, TaskUncheckedUpdateWithoutGoalInput>
    create: XOR<TaskCreateWithoutGoalInput, TaskUncheckedCreateWithoutGoalInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutGoalInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutGoalInput, TaskUncheckedUpdateWithoutGoalInput>
  }

  export type TaskUpdateManyWithWhereWithoutGoalInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutGoalInput>
  }

  export type UserCreateWithoutTasksInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    avatar?: string | null
    timezone?: string
    niche?: string | null
    primaryPlatform?: string | null
    streakCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    socialAccounts?: SocialAccountCreateNestedManyWithoutUserInput
    metricSnapshots?: MetricSnapshotCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    contentIdeas?: ContentIdeaCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutUserInput
    competitorProfiles?: CompetitorProfileCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTasksInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    avatar?: string | null
    timezone?: string
    niche?: string | null
    primaryPlatform?: string | null
    streakCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    socialAccounts?: SocialAccountUncheckedCreateNestedManyWithoutUserInput
    metricSnapshots?: MetricSnapshotUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    contentIdeas?: ContentIdeaUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutUserInput
    competitorProfiles?: CompetitorProfileUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
  }

  export type GoalCreateWithoutTasksInput = {
    id?: string
    metricType: $Enums.MetricType
    targetValue: number
    currentValue?: number
    period: $Enums.Period
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.GoalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGoalsInput
  }

  export type GoalUncheckedCreateWithoutTasksInput = {
    id?: string
    userId: string
    metricType: $Enums.MetricType
    targetValue: number
    currentValue?: number
    period: $Enums.Period
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.GoalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoalCreateOrConnectWithoutTasksInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutTasksInput, GoalUncheckedCreateWithoutTasksInput>
  }

  export type UserUpsertWithoutTasksInput = {
    update: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    niche?: NullableStringFieldUpdateOperationsInput | string | null
    primaryPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    streakCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialAccounts?: SocialAccountUpdateManyWithoutUserNestedInput
    metricSnapshots?: MetricSnapshotUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    contentIdeas?: ContentIdeaUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutUserNestedInput
    competitorProfiles?: CompetitorProfileUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    niche?: NullableStringFieldUpdateOperationsInput | string | null
    primaryPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    streakCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialAccounts?: SocialAccountUncheckedUpdateManyWithoutUserNestedInput
    metricSnapshots?: MetricSnapshotUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    contentIdeas?: ContentIdeaUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutUserNestedInput
    competitorProfiles?: CompetitorProfileUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GoalUpsertWithoutTasksInput = {
    update: XOR<GoalUpdateWithoutTasksInput, GoalUncheckedUpdateWithoutTasksInput>
    create: XOR<GoalCreateWithoutTasksInput, GoalUncheckedCreateWithoutTasksInput>
    where?: GoalWhereInput
  }

  export type GoalUpdateToOneWithWhereWithoutTasksInput = {
    where?: GoalWhereInput
    data: XOR<GoalUpdateWithoutTasksInput, GoalUncheckedUpdateWithoutTasksInput>
  }

  export type GoalUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    metricType?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    targetValue?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    period?: EnumPeriodFieldUpdateOperationsInput | $Enums.Period
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGoalsNestedInput
  }

  export type GoalUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    metricType?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    targetValue?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    period?: EnumPeriodFieldUpdateOperationsInput | $Enums.Period
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutContentIdeasInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    avatar?: string | null
    timezone?: string
    niche?: string | null
    primaryPlatform?: string | null
    streakCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    socialAccounts?: SocialAccountCreateNestedManyWithoutUserInput
    metricSnapshots?: MetricSnapshotCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutUserInput
    competitorProfiles?: CompetitorProfileCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutContentIdeasInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    avatar?: string | null
    timezone?: string
    niche?: string | null
    primaryPlatform?: string | null
    streakCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    socialAccounts?: SocialAccountUncheckedCreateNestedManyWithoutUserInput
    metricSnapshots?: MetricSnapshotUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutUserInput
    competitorProfiles?: CompetitorProfileUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutContentIdeasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContentIdeasInput, UserUncheckedCreateWithoutContentIdeasInput>
  }

  export type UserUpsertWithoutContentIdeasInput = {
    update: XOR<UserUpdateWithoutContentIdeasInput, UserUncheckedUpdateWithoutContentIdeasInput>
    create: XOR<UserCreateWithoutContentIdeasInput, UserUncheckedCreateWithoutContentIdeasInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContentIdeasInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContentIdeasInput, UserUncheckedUpdateWithoutContentIdeasInput>
  }

  export type UserUpdateWithoutContentIdeasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    niche?: NullableStringFieldUpdateOperationsInput | string | null
    primaryPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    streakCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialAccounts?: SocialAccountUpdateManyWithoutUserNestedInput
    metricSnapshots?: MetricSnapshotUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutUserNestedInput
    competitorProfiles?: CompetitorProfileUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutContentIdeasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    niche?: NullableStringFieldUpdateOperationsInput | string | null
    primaryPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    streakCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialAccounts?: SocialAccountUncheckedUpdateManyWithoutUserNestedInput
    metricSnapshots?: MetricSnapshotUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutUserNestedInput
    competitorProfiles?: CompetitorProfileUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCampaignsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    avatar?: string | null
    timezone?: string
    niche?: string | null
    primaryPlatform?: string | null
    streakCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    socialAccounts?: SocialAccountCreateNestedManyWithoutUserInput
    metricSnapshots?: MetricSnapshotCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    contentIdeas?: ContentIdeaCreateNestedManyWithoutUserInput
    competitorProfiles?: CompetitorProfileCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCampaignsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    avatar?: string | null
    timezone?: string
    niche?: string | null
    primaryPlatform?: string | null
    streakCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    socialAccounts?: SocialAccountUncheckedCreateNestedManyWithoutUserInput
    metricSnapshots?: MetricSnapshotUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    contentIdeas?: ContentIdeaUncheckedCreateNestedManyWithoutUserInput
    competitorProfiles?: CompetitorProfileUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCampaignsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
  }

  export type UserUpsertWithoutCampaignsInput = {
    update: XOR<UserUpdateWithoutCampaignsInput, UserUncheckedUpdateWithoutCampaignsInput>
    create: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCampaignsInput, UserUncheckedUpdateWithoutCampaignsInput>
  }

  export type UserUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    niche?: NullableStringFieldUpdateOperationsInput | string | null
    primaryPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    streakCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialAccounts?: SocialAccountUpdateManyWithoutUserNestedInput
    metricSnapshots?: MetricSnapshotUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    contentIdeas?: ContentIdeaUpdateManyWithoutUserNestedInput
    competitorProfiles?: CompetitorProfileUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    niche?: NullableStringFieldUpdateOperationsInput | string | null
    primaryPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    streakCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialAccounts?: SocialAccountUncheckedUpdateManyWithoutUserNestedInput
    metricSnapshots?: MetricSnapshotUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    contentIdeas?: ContentIdeaUncheckedUpdateManyWithoutUserNestedInput
    competitorProfiles?: CompetitorProfileUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCompetitorProfilesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    avatar?: string | null
    timezone?: string
    niche?: string | null
    primaryPlatform?: string | null
    streakCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    socialAccounts?: SocialAccountCreateNestedManyWithoutUserInput
    metricSnapshots?: MetricSnapshotCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    contentIdeas?: ContentIdeaCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCompetitorProfilesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    avatar?: string | null
    timezone?: string
    niche?: string | null
    primaryPlatform?: string | null
    streakCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    socialAccounts?: SocialAccountUncheckedCreateNestedManyWithoutUserInput
    metricSnapshots?: MetricSnapshotUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    contentIdeas?: ContentIdeaUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCompetitorProfilesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompetitorProfilesInput, UserUncheckedCreateWithoutCompetitorProfilesInput>
  }

  export type UserUpsertWithoutCompetitorProfilesInput = {
    update: XOR<UserUpdateWithoutCompetitorProfilesInput, UserUncheckedUpdateWithoutCompetitorProfilesInput>
    create: XOR<UserCreateWithoutCompetitorProfilesInput, UserUncheckedCreateWithoutCompetitorProfilesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCompetitorProfilesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCompetitorProfilesInput, UserUncheckedUpdateWithoutCompetitorProfilesInput>
  }

  export type UserUpdateWithoutCompetitorProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    niche?: NullableStringFieldUpdateOperationsInput | string | null
    primaryPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    streakCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialAccounts?: SocialAccountUpdateManyWithoutUserNestedInput
    metricSnapshots?: MetricSnapshotUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    contentIdeas?: ContentIdeaUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCompetitorProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    niche?: NullableStringFieldUpdateOperationsInput | string | null
    primaryPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    streakCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialAccounts?: SocialAccountUncheckedUpdateManyWithoutUserNestedInput
    metricSnapshots?: MetricSnapshotUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    contentIdeas?: ContentIdeaUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SocialAccountCreateManyUserInput = {
    id?: string
    platform: $Enums.Platform
    handle: string
    displayName?: string | null
    profileUrl?: string | null
    accessToken?: string | null
    refreshToken?: string | null
    tokenExpiry?: Date | string | null
    status?: $Enums.AccountStatus
    autoSync?: boolean
    lastSyncedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetricSnapshotCreateManyUserInput = {
    id?: string
    socialAccountId: string
    date: Date | string
    reach?: number
    impressions?: number
    likes?: number
    comments?: number
    shares?: number
    saves?: number
    followers?: number
    views?: number
    clicks?: number
    engagementRate?: number
    platformRawJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type GoalCreateManyUserInput = {
    id?: string
    metricType: $Enums.MetricType
    targetValue: number
    currentValue?: number
    period: $Enums.Period
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.GoalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateManyUserInput = {
    id?: string
    goalId?: string | null
    title: string
    description?: string | null
    dueDate?: Date | string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentIdeaCreateManyUserInput = {
    id?: string
    platform?: $Enums.Platform | null
    topic: string
    suggestedCaption?: string | null
    suggestedHashtags?: string | null
    confidenceScore?: number
    status?: $Enums.IdeaStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignCreateManyUserInput = {
    id?: string
    brandName: string
    brandLogo?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    deliverables?: string | null
    agreedAmount?: number | null
    expectedReach?: number | null
    actualReach?: number | null
    status?: $Enums.CampaignStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompetitorProfileCreateManyUserInput = {
    id?: string
    platform: $Enums.Platform
    handle: string
    displayName?: string | null
    notes?: string | null
    lastSyncedAt?: Date | string | null
    summaryStatsJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SocialAccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    handle?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    autoSync?: BoolFieldUpdateOperationsInput | boolean
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metricSnapshots?: MetricSnapshotUpdateManyWithoutSocialAccountNestedInput
    contentItems?: ContentItemUpdateManyWithoutSocialAccountNestedInput
  }

  export type SocialAccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    handle?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    autoSync?: BoolFieldUpdateOperationsInput | boolean
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metricSnapshots?: MetricSnapshotUncheckedUpdateManyWithoutSocialAccountNestedInput
    contentItems?: ContentItemUncheckedUpdateManyWithoutSocialAccountNestedInput
  }

  export type SocialAccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    handle?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    profileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAccountStatusFieldUpdateOperationsInput | $Enums.AccountStatus
    autoSync?: BoolFieldUpdateOperationsInput | boolean
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricSnapshotUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reach?: IntFieldUpdateOperationsInput | number
    impressions?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    saves?: IntFieldUpdateOperationsInput | number
    followers?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    engagementRate?: FloatFieldUpdateOperationsInput | number
    platformRawJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialAccount?: SocialAccountUpdateOneRequiredWithoutMetricSnapshotsNestedInput
  }

  export type MetricSnapshotUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    socialAccountId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reach?: IntFieldUpdateOperationsInput | number
    impressions?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    saves?: IntFieldUpdateOperationsInput | number
    followers?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    engagementRate?: FloatFieldUpdateOperationsInput | number
    platformRawJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricSnapshotUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    socialAccountId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reach?: IntFieldUpdateOperationsInput | number
    impressions?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    saves?: IntFieldUpdateOperationsInput | number
    followers?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    engagementRate?: FloatFieldUpdateOperationsInput | number
    platformRawJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    metricType?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    targetValue?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    period?: EnumPeriodFieldUpdateOperationsInput | $Enums.Period
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    metricType?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    targetValue?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    period?: EnumPeriodFieldUpdateOperationsInput | $Enums.Period
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutGoalNestedInput
  }

  export type GoalUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    metricType?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    targetValue?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    period?: EnumPeriodFieldUpdateOperationsInput | $Enums.Period
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goal?: GoalUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    goalId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentIdeaUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: NullableEnumPlatformFieldUpdateOperationsInput | $Enums.Platform | null
    topic?: StringFieldUpdateOperationsInput | string
    suggestedCaption?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedHashtags?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScore?: FloatFieldUpdateOperationsInput | number
    status?: EnumIdeaStatusFieldUpdateOperationsInput | $Enums.IdeaStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentIdeaUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: NullableEnumPlatformFieldUpdateOperationsInput | $Enums.Platform | null
    topic?: StringFieldUpdateOperationsInput | string
    suggestedCaption?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedHashtags?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScore?: FloatFieldUpdateOperationsInput | number
    status?: EnumIdeaStatusFieldUpdateOperationsInput | $Enums.IdeaStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentIdeaUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: NullableEnumPlatformFieldUpdateOperationsInput | $Enums.Platform | null
    topic?: StringFieldUpdateOperationsInput | string
    suggestedCaption?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedHashtags?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceScore?: FloatFieldUpdateOperationsInput | number
    status?: EnumIdeaStatusFieldUpdateOperationsInput | $Enums.IdeaStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    brandLogo?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverables?: NullableStringFieldUpdateOperationsInput | string | null
    agreedAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    expectedReach?: NullableIntFieldUpdateOperationsInput | number | null
    actualReach?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    brandLogo?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverables?: NullableStringFieldUpdateOperationsInput | string | null
    agreedAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    expectedReach?: NullableIntFieldUpdateOperationsInput | number | null
    actualReach?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    brandLogo?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverables?: NullableStringFieldUpdateOperationsInput | string | null
    agreedAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    expectedReach?: NullableIntFieldUpdateOperationsInput | number | null
    actualReach?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitorProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    handle?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    summaryStatsJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitorProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    handle?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    summaryStatsJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitorProfileUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    handle?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    summaryStatsJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricSnapshotCreateManySocialAccountInput = {
    id?: string
    userId: string
    date: Date | string
    reach?: number
    impressions?: number
    likes?: number
    comments?: number
    shares?: number
    saves?: number
    followers?: number
    views?: number
    clicks?: number
    engagementRate?: number
    platformRawJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ContentItemCreateManySocialAccountInput = {
    id?: string
    platformPostId: string
    title?: string | null
    type: $Enums.ContentType
    caption?: string | null
    publishedAt: Date | string
    url?: string | null
    thumbnail?: string | null
    reach?: number
    impressions?: number
    likes?: number
    comments?: number
    shares?: number
    saves?: number
    views?: number
    clicks?: number
    engagementRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetricSnapshotUpdateWithoutSocialAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reach?: IntFieldUpdateOperationsInput | number
    impressions?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    saves?: IntFieldUpdateOperationsInput | number
    followers?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    engagementRate?: FloatFieldUpdateOperationsInput | number
    platformRawJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMetricSnapshotsNestedInput
  }

  export type MetricSnapshotUncheckedUpdateWithoutSocialAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reach?: IntFieldUpdateOperationsInput | number
    impressions?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    saves?: IntFieldUpdateOperationsInput | number
    followers?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    engagementRate?: FloatFieldUpdateOperationsInput | number
    platformRawJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricSnapshotUncheckedUpdateManyWithoutSocialAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reach?: IntFieldUpdateOperationsInput | number
    impressions?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    saves?: IntFieldUpdateOperationsInput | number
    followers?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    engagementRate?: FloatFieldUpdateOperationsInput | number
    platformRawJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentItemUpdateWithoutSocialAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformPostId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    reach?: IntFieldUpdateOperationsInput | number
    impressions?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    saves?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    engagementRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentItemUncheckedUpdateWithoutSocialAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformPostId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    reach?: IntFieldUpdateOperationsInput | number
    impressions?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    saves?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    engagementRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentItemUncheckedUpdateManyWithoutSocialAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformPostId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    reach?: IntFieldUpdateOperationsInput | number
    impressions?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    comments?: IntFieldUpdateOperationsInput | number
    shares?: IntFieldUpdateOperationsInput | number
    saves?: IntFieldUpdateOperationsInput | number
    views?: IntFieldUpdateOperationsInput | number
    clicks?: IntFieldUpdateOperationsInput | number
    engagementRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyGoalInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    dueDate?: Date | string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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