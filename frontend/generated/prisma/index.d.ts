/**
 * Client
 **/

import * as runtime from './runtime/client.js'
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
 * Model Qualification
 *
 */
export type Qualification = $Result.DefaultSelection<Prisma.$QualificationPayload>
/**
 * Model UserQualification
 *
 */
export type UserQualification = $Result.DefaultSelection<Prisma.$UserQualificationPayload>
/**
 * Model Skill
 *
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model UserSkill
 *
 */
export type UserSkill = $Result.DefaultSelection<Prisma.$UserSkillPayload>
/**
 * Model Project
 *
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ProjectTechStack
 *
 */
export type ProjectTechStack = $Result.DefaultSelection<Prisma.$ProjectTechStackPayload>
/**
 * Model TechStack
 *
 */
export type TechStack = $Result.DefaultSelection<Prisma.$TechStackPayload>
/**
 * Model ProjectLanguage
 *
 */
export type ProjectLanguage = $Result.DefaultSelection<Prisma.$ProjectLanguagePayload>
/**
 * Model Language
 *
 */
export type Language = $Result.DefaultSelection<Prisma.$LanguagePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>)
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void
  ): PrismaClient

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>

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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  ): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs
      }
    >
  >

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.qualification`: Exposes CRUD operations for the **Qualification** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Qualifications
   * const qualifications = await prisma.qualification.findMany()
   * ```
   */
  get qualification(): Prisma.QualificationDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.userQualification`: Exposes CRUD operations for the **UserQualification** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more UserQualifications
   * const userQualifications = await prisma.userQualification.findMany()
   * ```
   */
  get userQualification(): Prisma.UserQualificationDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Skills
   * const skills = await prisma.skill.findMany()
   * ```
   */
  get skill(): Prisma.SkillDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.userSkill`: Exposes CRUD operations for the **UserSkill** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more UserSkills
   * const userSkills = await prisma.userSkill.findMany()
   * ```
   */
  get userSkill(): Prisma.UserSkillDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Projects
   * const projects = await prisma.project.findMany()
   * ```
   */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.projectTechStack`: Exposes CRUD operations for the **ProjectTechStack** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ProjectTechStacks
   * const projectTechStacks = await prisma.projectTechStack.findMany()
   * ```
   */
  get projectTechStack(): Prisma.ProjectTechStackDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.techStack`: Exposes CRUD operations for the **TechStack** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more TechStacks
   * const techStacks = await prisma.techStack.findMany()
   * ```
   */
  get techStack(): Prisma.TechStackDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.projectLanguage`: Exposes CRUD operations for the **ProjectLanguage** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ProjectLanguages
   * const projectLanguages = await prisma.projectLanguage.findMany()
   * ```
   */
  get projectLanguage(): Prisma.ProjectLanguageDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.language`: Exposes CRUD operations for the **Language** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Languages
   * const languages = await prisma.language.findMany()
   * ```
   */
  get language(): Prisma.LanguageDelegate<ExtArgs, ClientOptions>
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
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
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
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<
    ReturnType<T>
  >

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P]
  }

  export type Enumerable<T> = T | Array<T>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  }

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } & (T extends SelectAndInclude
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
  } & K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
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

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (
    k: infer I
  ) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K]
  } & {}

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>
      }
    >
  >

  type Key = string | number | symbol
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never
  type AtStrict<O extends object, K extends Key> = O[K & keyof O]
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>
    0: AtLoose<O, K>
  }[strict]

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K]
      } & {}

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K]
  } & {}

  type _Record<K extends keyof any, T> = {
    [P in K]: T
  }

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>

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

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>

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

  type Cast<A, B> = A extends B ? A : B

  export const type: unique symbol

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never
      }
    : never

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> =
    IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
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
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<
    T,
    MaybeTupleToUnion<K>
  >

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>

  export const ModelName: {
    User: 'User'
    Qualification: 'Qualification'
    UserQualification: 'UserQualification'
    Skill: 'Skill'
    UserSkill: 'UserSkill'
    Project: 'Project'
    ProjectTechStack: 'ProjectTechStack'
    TechStack: 'TechStack'
    ProjectLanguage: 'ProjectLanguage'
    Language: 'Language'
  }

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<
    { extArgs: $Extensions.InternalArgs },
    $Utils.Record<string, any>
  > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps:
        | 'user'
        | 'qualification'
        | 'userQualification'
        | 'skill'
        | 'userSkill'
        | 'project'
        | 'projectTechStack'
        | 'techStack'
        | 'projectLanguage'
        | 'language'
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
      Qualification: {
        payload: Prisma.$QualificationPayload<ExtArgs>
        fields: Prisma.QualificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QualificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QualificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationPayload>
          }
          findFirst: {
            args: Prisma.QualificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QualificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationPayload>
          }
          findMany: {
            args: Prisma.QualificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationPayload>[]
          }
          create: {
            args: Prisma.QualificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationPayload>
          }
          createMany: {
            args: Prisma.QualificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QualificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationPayload>
          }
          update: {
            args: Prisma.QualificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationPayload>
          }
          deleteMany: {
            args: Prisma.QualificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QualificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QualificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualificationPayload>
          }
          aggregate: {
            args: Prisma.QualificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQualification>
          }
          groupBy: {
            args: Prisma.QualificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<QualificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.QualificationCountArgs<ExtArgs>
            result: $Utils.Optional<QualificationCountAggregateOutputType> | number
          }
        }
      }
      UserQualification: {
        payload: Prisma.$UserQualificationPayload<ExtArgs>
        fields: Prisma.UserQualificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserQualificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQualificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserQualificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQualificationPayload>
          }
          findFirst: {
            args: Prisma.UserQualificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQualificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserQualificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQualificationPayload>
          }
          findMany: {
            args: Prisma.UserQualificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQualificationPayload>[]
          }
          create: {
            args: Prisma.UserQualificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQualificationPayload>
          }
          createMany: {
            args: Prisma.UserQualificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserQualificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQualificationPayload>
          }
          update: {
            args: Prisma.UserQualificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQualificationPayload>
          }
          deleteMany: {
            args: Prisma.UserQualificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserQualificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserQualificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQualificationPayload>
          }
          aggregate: {
            args: Prisma.UserQualificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserQualification>
          }
          groupBy: {
            args: Prisma.UserQualificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserQualificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserQualificationCountArgs<ExtArgs>
            result: $Utils.Optional<UserQualificationCountAggregateOutputType> | number
          }
        }
      }
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      UserSkill: {
        payload: Prisma.$UserSkillPayload<ExtArgs>
        fields: Prisma.UserSkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          findFirst: {
            args: Prisma.UserSkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          findMany: {
            args: Prisma.UserSkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>[]
          }
          create: {
            args: Prisma.UserSkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          createMany: {
            args: Prisma.UserSkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserSkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          update: {
            args: Prisma.UserSkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          deleteMany: {
            args: Prisma.UserSkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserSkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          aggregate: {
            args: Prisma.UserSkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSkill>
          }
          groupBy: {
            args: Prisma.UserSkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSkillCountArgs<ExtArgs>
            result: $Utils.Optional<UserSkillCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      ProjectTechStack: {
        payload: Prisma.$ProjectTechStackPayload<ExtArgs>
        fields: Prisma.ProjectTechStackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectTechStackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechStackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectTechStackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechStackPayload>
          }
          findFirst: {
            args: Prisma.ProjectTechStackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechStackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectTechStackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechStackPayload>
          }
          findMany: {
            args: Prisma.ProjectTechStackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechStackPayload>[]
          }
          create: {
            args: Prisma.ProjectTechStackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechStackPayload>
          }
          createMany: {
            args: Prisma.ProjectTechStackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectTechStackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechStackPayload>
          }
          update: {
            args: Prisma.ProjectTechStackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechStackPayload>
          }
          deleteMany: {
            args: Prisma.ProjectTechStackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectTechStackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectTechStackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTechStackPayload>
          }
          aggregate: {
            args: Prisma.ProjectTechStackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectTechStack>
          }
          groupBy: {
            args: Prisma.ProjectTechStackGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectTechStackGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectTechStackCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectTechStackCountAggregateOutputType> | number
          }
        }
      }
      TechStack: {
        payload: Prisma.$TechStackPayload<ExtArgs>
        fields: Prisma.TechStackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TechStackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechStackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TechStackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechStackPayload>
          }
          findFirst: {
            args: Prisma.TechStackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechStackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TechStackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechStackPayload>
          }
          findMany: {
            args: Prisma.TechStackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechStackPayload>[]
          }
          create: {
            args: Prisma.TechStackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechStackPayload>
          }
          createMany: {
            args: Prisma.TechStackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TechStackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechStackPayload>
          }
          update: {
            args: Prisma.TechStackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechStackPayload>
          }
          deleteMany: {
            args: Prisma.TechStackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TechStackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TechStackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TechStackPayload>
          }
          aggregate: {
            args: Prisma.TechStackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTechStack>
          }
          groupBy: {
            args: Prisma.TechStackGroupByArgs<ExtArgs>
            result: $Utils.Optional<TechStackGroupByOutputType>[]
          }
          count: {
            args: Prisma.TechStackCountArgs<ExtArgs>
            result: $Utils.Optional<TechStackCountAggregateOutputType> | number
          }
        }
      }
      ProjectLanguage: {
        payload: Prisma.$ProjectLanguagePayload<ExtArgs>
        fields: Prisma.ProjectLanguageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectLanguageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLanguagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectLanguageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLanguagePayload>
          }
          findFirst: {
            args: Prisma.ProjectLanguageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLanguagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectLanguageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLanguagePayload>
          }
          findMany: {
            args: Prisma.ProjectLanguageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLanguagePayload>[]
          }
          create: {
            args: Prisma.ProjectLanguageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLanguagePayload>
          }
          createMany: {
            args: Prisma.ProjectLanguageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectLanguageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLanguagePayload>
          }
          update: {
            args: Prisma.ProjectLanguageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLanguagePayload>
          }
          deleteMany: {
            args: Prisma.ProjectLanguageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectLanguageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectLanguageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectLanguagePayload>
          }
          aggregate: {
            args: Prisma.ProjectLanguageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectLanguage>
          }
          groupBy: {
            args: Prisma.ProjectLanguageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectLanguageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectLanguageCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectLanguageCountAggregateOutputType> | number
          }
        }
      }
      Language: {
        payload: Prisma.$LanguagePayload<ExtArgs>
        fields: Prisma.LanguageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LanguageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LanguageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          findFirst: {
            args: Prisma.LanguageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LanguageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          findMany: {
            args: Prisma.LanguageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          create: {
            args: Prisma.LanguageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          createMany: {
            args: Prisma.LanguageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LanguageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          update: {
            args: Prisma.LanguageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          deleteMany: {
            args: Prisma.LanguageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LanguageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LanguageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          aggregate: {
            args: Prisma.LanguageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLanguage>
          }
          groupBy: {
            args: Prisma.LanguageGroupByArgs<ExtArgs>
            result: $Utils.Optional<LanguageGroupByOutputType>[]
          }
          count: {
            args: Prisma.LanguageCountArgs<ExtArgs>
            result: $Utils.Optional<LanguageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]]
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]]
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]]
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]]
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >
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
    qualification?: QualificationOmit
    userQualification?: UserQualificationOmit
    skill?: SkillOmit
    userSkill?: UserSkillOmit
    project?: ProjectOmit
    projectTechStack?: ProjectTechStackOmit
    techStack?: TechStackOmit
    projectLanguage?: ProjectLanguageOmit
    language?: LanguageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never

  export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never

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
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined

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
    qualifications: number
    skills: number
    projects: number
  }

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    qualifications?: boolean | UserCountOutputTypeCountQualificationsArgs
    skills?: boolean | UserCountOutputTypeCountSkillsArgs
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQualificationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserQualificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSkillsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserSkillWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProjectWhereInput
  }

  /**
   * Count Type QualificationCountOutputType
   */

  export type QualificationCountOutputType = {
    users: number
  }

  export type QualificationCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    users?: boolean | QualificationCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * QualificationCountOutputType without action
   */
  export type QualificationCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the QualificationCountOutputType
     */
    select?: QualificationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QualificationCountOutputType without action
   */
  export type QualificationCountOutputTypeCountUsersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserQualificationWhereInput
  }

  /**
   * Count Type SkillCountOutputType
   */

  export type SkillCountOutputType = {
    users: number
  }

  export type SkillCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    users?: boolean | SkillCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SkillCountOutputType
     */
    select?: SkillCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountUsersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserSkillWhereInput
  }

  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    techStacks: number
    languages: number
  }

  export type ProjectCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    techStacks?: boolean | ProjectCountOutputTypeCountTechStacksArgs
    languages?: boolean | ProjectCountOutputTypeCountLanguagesArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTechStacksArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProjectTechStackWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountLanguagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProjectLanguageWhereInput
  }

  /**
   * Count Type TechStackCountOutputType
   */

  export type TechStackCountOutputType = {
    projects: number
  }

  export type TechStackCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    projects?: boolean | TechStackCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * TechStackCountOutputType without action
   */
  export type TechStackCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TechStackCountOutputType
     */
    select?: TechStackCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TechStackCountOutputType without action
   */
  export type TechStackCountOutputTypeCountProjectsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProjectTechStackWhereInput
  }

  /**
   * Count Type LanguageCountOutputType
   */

  export type LanguageCountOutputType = {
    projects: number
  }

  export type LanguageCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    projects?: boolean | LanguageCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * LanguageCountOutputType without action
   */
  export type LanguageCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LanguageCountOutputType
     */
    select?: LanguageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LanguageCountOutputType without action
   */
  export type LanguageCountOutputTypeCountProjectsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProjectLanguageWhereInput
  }

  /**
   * Models
   */

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
    email: string | null
    password: string | null
    name: string | null
    nameKana: string | null
    gender: string | null
    birthDate: Date | null
    nationality: string | null
    hasSpouse: boolean | null
    nearestStation: string | null
    specialties: string | null
    selfPromotion: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    nameKana: string | null
    gender: string | null
    birthDate: Date | null
    nationality: string | null
    hasSpouse: boolean | null
    nearestStation: string | null
    specialties: string | null
    selfPromotion: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    nameKana: number
    gender: number
    birthDate: number
    nationality: number
    hasSpouse: number
    nearestStation: number
    specialties: number
    selfPromotion: number
    createdAt: number
    _all: number
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    nameKana?: true
    gender?: true
    birthDate?: true
    nationality?: true
    hasSpouse?: true
    nearestStation?: true
    specialties?: true
    selfPromotion?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    nameKana?: true
    gender?: true
    birthDate?: true
    nationality?: true
    hasSpouse?: true
    nearestStation?: true
    specialties?: true
    selfPromotion?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    nameKana?: true
    gender?: true
    birthDate?: true
    nationality?: true
    hasSpouse?: true
    nearestStation?: true
    specialties?: true
    selfPromotion?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
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

  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
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
    email: string
    password: string
    name: string | null
    nameKana: string | null
    gender: string | null
    birthDate: Date | null
    nationality: string | null
    hasSpouse: boolean | null
    nearestStation: string | null
    specialties: string | null
    selfPromotion: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>
      }
    >
  >

  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean
        email?: boolean
        password?: boolean
        name?: boolean
        nameKana?: boolean
        gender?: boolean
        birthDate?: boolean
        nationality?: boolean
        hasSpouse?: boolean
        nearestStation?: boolean
        specialties?: boolean
        selfPromotion?: boolean
        createdAt?: boolean
        qualifications?: boolean | User$qualificationsArgs<ExtArgs>
        skills?: boolean | User$skillsArgs<ExtArgs>
        projects?: boolean | User$projectsArgs<ExtArgs>
        _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
      },
      ExtArgs['result']['user']
    >

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    nameKana?: boolean
    gender?: boolean
    birthDate?: boolean
    nationality?: boolean
    hasSpouse?: boolean
    nearestStation?: boolean
    specialties?: boolean
    selfPromotion?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      | 'id'
      | 'email'
      | 'password'
      | 'name'
      | 'nameKana'
      | 'gender'
      | 'birthDate'
      | 'nationality'
      | 'hasSpouse'
      | 'nearestStation'
      | 'specialties'
      | 'selfPromotion'
      | 'createdAt',
      ExtArgs['result']['user']
    >
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qualifications?: boolean | User$qualificationsArgs<ExtArgs>
    skills?: boolean | User$skillsArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'User'
    objects: {
      qualifications: Prisma.$UserQualificationPayload<ExtArgs>[]
      skills: Prisma.$UserSkillPayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        email: string
        password: string
        name: string | null
        nameKana: string | null
        gender: string | null
        birthDate: Date | null
        nationality: string | null
        hasSpouse: boolean | null
        nearestStation: string | null
        specialties: string | null
        selfPromotion: string | null
        createdAt: Date
      },
      ExtArgs['result']['user']
    >
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<
    Prisma.$UserPayload,
    S
  >

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    UserFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: UserCountAggregateInputType | true
  }

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User']; meta: { name: 'User' } }
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
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

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
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

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
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >

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
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

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
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

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
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

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
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

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
      args?: Subset<T, UserCountArgs>
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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
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
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
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
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    qualifications<T extends User$qualificationsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$qualificationsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$UserQualificationPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >
    skills<T extends User$skillsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$skillsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >
    projects<T extends User$projectsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$projectsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>
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
    readonly id: FieldRef<'User', 'String'>
    readonly email: FieldRef<'User', 'String'>
    readonly password: FieldRef<'User', 'String'>
    readonly name: FieldRef<'User', 'String'>
    readonly nameKana: FieldRef<'User', 'String'>
    readonly gender: FieldRef<'User', 'String'>
    readonly birthDate: FieldRef<'User', 'DateTime'>
    readonly nationality: FieldRef<'User', 'String'>
    readonly hasSpouse: FieldRef<'User', 'Boolean'>
    readonly nearestStation: FieldRef<'User', 'String'>
    readonly specialties: FieldRef<'User', 'String'>
    readonly selfPromotion: FieldRef<'User', 'String'>
    readonly createdAt: FieldRef<'User', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
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
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
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
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
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
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
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
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
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
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of Users.
       */
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
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
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
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
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
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
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
   * User.qualifications
   */
  export type User$qualificationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserQualification
     */
    select?: UserQualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQualification
     */
    omit?: UserQualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQualificationInclude<ExtArgs> | null
    where?: UserQualificationWhereInput
    orderBy?:
      | UserQualificationOrderByWithRelationInput
      | UserQualificationOrderByWithRelationInput[]
    cursor?: UserQualificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserQualificationScalarFieldEnum | UserQualificationScalarFieldEnum[]
  }

  /**
   * User.skills
   */
  export type User$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the UserSkill
       */
      select?: UserSkillSelect<ExtArgs> | null
      /**
       * Omit specific fields from the UserSkill
       */
      omit?: UserSkillOmit<ExtArgs> | null
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: UserSkillInclude<ExtArgs> | null
      where?: UserSkillWhereInput
      orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
      cursor?: UserSkillWhereUniqueInput
      take?: number
      skip?: number
      distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
    }

  /**
   * User.projects
   */
  export type User$projectsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
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
   * Model Qualification
   */

  export type AggregateQualification = {
    _count: QualificationCountAggregateOutputType | null
    _min: QualificationMinAggregateOutputType | null
    _max: QualificationMaxAggregateOutputType | null
  }

  export type QualificationMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type QualificationMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type QualificationCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }

  export type QualificationMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type QualificationMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type QualificationCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type QualificationAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Qualification to aggregate.
     */
    where?: QualificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Qualifications to fetch.
     */
    orderBy?: QualificationOrderByWithRelationInput | QualificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: QualificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Qualifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Qualifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Qualifications
     **/
    _count?: true | QualificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: QualificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: QualificationMaxAggregateInputType
  }

  export type GetQualificationAggregateType<T extends QualificationAggregateArgs> = {
    [P in keyof T & keyof AggregateQualification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQualification[P]>
      : GetScalarType<T[P], AggregateQualification[P]>
  }

  export type QualificationGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: QualificationWhereInput
    orderBy?: QualificationOrderByWithAggregationInput | QualificationOrderByWithAggregationInput[]
    by: QualificationScalarFieldEnum[] | QualificationScalarFieldEnum
    having?: QualificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QualificationCountAggregateInputType | true
    _min?: QualificationMinAggregateInputType
    _max?: QualificationMaxAggregateInputType
  }

  export type QualificationGroupByOutputType = {
    id: string
    name: string
    _count: QualificationCountAggregateOutputType | null
    _min: QualificationMinAggregateOutputType | null
    _max: QualificationMaxAggregateOutputType | null
  }

  type GetQualificationGroupByPayload<T extends QualificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QualificationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof QualificationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], QualificationGroupByOutputType[P]>
          : GetScalarType<T[P], QualificationGroupByOutputType[P]>
      }
    >
  >

  export type QualificationSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      name?: boolean
      users?: boolean | Qualification$usersArgs<ExtArgs>
      _count?: boolean | QualificationCountOutputTypeDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['qualification']
  >

  export type QualificationSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type QualificationOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<'id' | 'name', ExtArgs['result']['qualification']>
  export type QualificationInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    users?: boolean | Qualification$usersArgs<ExtArgs>
    _count?: boolean | QualificationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $QualificationPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Qualification'
    objects: {
      users: Prisma.$UserQualificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        name: string
      },
      ExtArgs['result']['qualification']
    >
    composites: {}
  }

  type QualificationGetPayload<S extends boolean | null | undefined | QualificationDefaultArgs> =
    $Result.GetResult<Prisma.$QualificationPayload, S>

  type QualificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QualificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QualificationCountAggregateInputType | true
    }

  export interface QualificationDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Qualification']
      meta: { name: 'Qualification' }
    }
    /**
     * Find zero or one Qualification that matches the filter.
     * @param {QualificationFindUniqueArgs} args - Arguments to find a Qualification
     * @example
     * // Get one Qualification
     * const qualification = await prisma.qualification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QualificationFindUniqueArgs>(
      args: SelectSubset<T, QualificationFindUniqueArgs<ExtArgs>>
    ): Prisma__QualificationClient<
      $Result.GetResult<
        Prisma.$QualificationPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one Qualification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QualificationFindUniqueOrThrowArgs} args - Arguments to find a Qualification
     * @example
     * // Get one Qualification
     * const qualification = await prisma.qualification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QualificationFindUniqueOrThrowArgs>(
      args: SelectSubset<T, QualificationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__QualificationClient<
      $Result.GetResult<
        Prisma.$QualificationPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Qualification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationFindFirstArgs} args - Arguments to find a Qualification
     * @example
     * // Get one Qualification
     * const qualification = await prisma.qualification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QualificationFindFirstArgs>(
      args?: SelectSubset<T, QualificationFindFirstArgs<ExtArgs>>
    ): Prisma__QualificationClient<
      $Result.GetResult<
        Prisma.$QualificationPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Qualification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationFindFirstOrThrowArgs} args - Arguments to find a Qualification
     * @example
     * // Get one Qualification
     * const qualification = await prisma.qualification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QualificationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, QualificationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__QualificationClient<
      $Result.GetResult<
        Prisma.$QualificationPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Qualifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Qualifications
     * const qualifications = await prisma.qualification.findMany()
     *
     * // Get first 10 Qualifications
     * const qualifications = await prisma.qualification.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const qualificationWithIdOnly = await prisma.qualification.findMany({ select: { id: true } })
     *
     */
    findMany<T extends QualificationFindManyArgs>(
      args?: SelectSubset<T, QualificationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$QualificationPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >

    /**
     * Create a Qualification.
     * @param {QualificationCreateArgs} args - Arguments to create a Qualification.
     * @example
     * // Create one Qualification
     * const Qualification = await prisma.qualification.create({
     *   data: {
     *     // ... data to create a Qualification
     *   }
     * })
     *
     */
    create<T extends QualificationCreateArgs>(
      args: SelectSubset<T, QualificationCreateArgs<ExtArgs>>
    ): Prisma__QualificationClient<
      $Result.GetResult<Prisma.$QualificationPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Qualifications.
     * @param {QualificationCreateManyArgs} args - Arguments to create many Qualifications.
     * @example
     * // Create many Qualifications
     * const qualification = await prisma.qualification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends QualificationCreateManyArgs>(
      args?: SelectSubset<T, QualificationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Qualification.
     * @param {QualificationDeleteArgs} args - Arguments to delete one Qualification.
     * @example
     * // Delete one Qualification
     * const Qualification = await prisma.qualification.delete({
     *   where: {
     *     // ... filter to delete one Qualification
     *   }
     * })
     *
     */
    delete<T extends QualificationDeleteArgs>(
      args: SelectSubset<T, QualificationDeleteArgs<ExtArgs>>
    ): Prisma__QualificationClient<
      $Result.GetResult<Prisma.$QualificationPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one Qualification.
     * @param {QualificationUpdateArgs} args - Arguments to update one Qualification.
     * @example
     * // Update one Qualification
     * const qualification = await prisma.qualification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends QualificationUpdateArgs>(
      args: SelectSubset<T, QualificationUpdateArgs<ExtArgs>>
    ): Prisma__QualificationClient<
      $Result.GetResult<Prisma.$QualificationPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Qualifications.
     * @param {QualificationDeleteManyArgs} args - Arguments to filter Qualifications to delete.
     * @example
     * // Delete a few Qualifications
     * const { count } = await prisma.qualification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends QualificationDeleteManyArgs>(
      args?: SelectSubset<T, QualificationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Qualifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Qualifications
     * const qualification = await prisma.qualification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends QualificationUpdateManyArgs>(
      args: SelectSubset<T, QualificationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Qualification.
     * @param {QualificationUpsertArgs} args - Arguments to update or create a Qualification.
     * @example
     * // Update or create a Qualification
     * const qualification = await prisma.qualification.upsert({
     *   create: {
     *     // ... data to create a Qualification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Qualification we want to update
     *   }
     * })
     */
    upsert<T extends QualificationUpsertArgs>(
      args: SelectSubset<T, QualificationUpsertArgs<ExtArgs>>
    ): Prisma__QualificationClient<
      $Result.GetResult<Prisma.$QualificationPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of Qualifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationCountArgs} args - Arguments to filter Qualifications to count.
     * @example
     * // Count the number of Qualifications
     * const count = await prisma.qualification.count({
     *   where: {
     *     // ... the filter for the Qualifications we want to count
     *   }
     * })
     **/
    count<T extends QualificationCountArgs>(
      args?: Subset<T, QualificationCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QualificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Qualification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QualificationAggregateArgs>(
      args: Subset<T, QualificationAggregateArgs>
    ): Prisma.PrismaPromise<GetQualificationAggregateType<T>>

    /**
     * Group by Qualification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualificationGroupByArgs} args - Group by arguments.
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
      T extends QualificationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QualificationGroupByArgs['orderBy'] }
        : { orderBy?: QualificationGroupByArgs['orderBy'] },
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
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
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
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, QualificationGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetQualificationGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Qualification model
     */
    readonly fields: QualificationFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Qualification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QualificationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    users<T extends Qualification$usersArgs<ExtArgs> = {}>(
      args?: Subset<T, Qualification$usersArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$UserQualificationPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Qualification model
   */
  interface QualificationFieldRefs {
    readonly id: FieldRef<'Qualification', 'String'>
    readonly name: FieldRef<'Qualification', 'String'>
  }

  // Custom InputTypes
  /**
   * Qualification findUnique
   */
  export type QualificationFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Qualification
     */
    select?: QualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qualification
     */
    omit?: QualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationInclude<ExtArgs> | null
    /**
     * Filter, which Qualification to fetch.
     */
    where: QualificationWhereUniqueInput
  }

  /**
   * Qualification findUniqueOrThrow
   */
  export type QualificationFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Qualification
     */
    select?: QualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qualification
     */
    omit?: QualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationInclude<ExtArgs> | null
    /**
     * Filter, which Qualification to fetch.
     */
    where: QualificationWhereUniqueInput
  }

  /**
   * Qualification findFirst
   */
  export type QualificationFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Qualification
     */
    select?: QualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qualification
     */
    omit?: QualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationInclude<ExtArgs> | null
    /**
     * Filter, which Qualification to fetch.
     */
    where?: QualificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Qualifications to fetch.
     */
    orderBy?: QualificationOrderByWithRelationInput | QualificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Qualifications.
     */
    cursor?: QualificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Qualifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Qualifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Qualifications.
     */
    distinct?: QualificationScalarFieldEnum | QualificationScalarFieldEnum[]
  }

  /**
   * Qualification findFirstOrThrow
   */
  export type QualificationFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Qualification
     */
    select?: QualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qualification
     */
    omit?: QualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationInclude<ExtArgs> | null
    /**
     * Filter, which Qualification to fetch.
     */
    where?: QualificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Qualifications to fetch.
     */
    orderBy?: QualificationOrderByWithRelationInput | QualificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Qualifications.
     */
    cursor?: QualificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Qualifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Qualifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Qualifications.
     */
    distinct?: QualificationScalarFieldEnum | QualificationScalarFieldEnum[]
  }

  /**
   * Qualification findMany
   */
  export type QualificationFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Qualification
     */
    select?: QualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qualification
     */
    omit?: QualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationInclude<ExtArgs> | null
    /**
     * Filter, which Qualifications to fetch.
     */
    where?: QualificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Qualifications to fetch.
     */
    orderBy?: QualificationOrderByWithRelationInput | QualificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Qualifications.
     */
    cursor?: QualificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Qualifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Qualifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Qualifications.
     */
    distinct?: QualificationScalarFieldEnum | QualificationScalarFieldEnum[]
  }

  /**
   * Qualification create
   */
  export type QualificationCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Qualification
     */
    select?: QualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qualification
     */
    omit?: QualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Qualification.
     */
    data: XOR<QualificationCreateInput, QualificationUncheckedCreateInput>
  }

  /**
   * Qualification createMany
   */
  export type QualificationCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Qualifications.
     */
    data: QualificationCreateManyInput | QualificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Qualification update
   */
  export type QualificationUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Qualification
     */
    select?: QualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qualification
     */
    omit?: QualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Qualification.
     */
    data: XOR<QualificationUpdateInput, QualificationUncheckedUpdateInput>
    /**
     * Choose, which Qualification to update.
     */
    where: QualificationWhereUniqueInput
  }

  /**
   * Qualification updateMany
   */
  export type QualificationUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Qualifications.
     */
    data: XOR<QualificationUpdateManyMutationInput, QualificationUncheckedUpdateManyInput>
    /**
     * Filter which Qualifications to update
     */
    where?: QualificationWhereInput
    /**
     * Limit how many Qualifications to update.
     */
    limit?: number
  }

  /**
   * Qualification upsert
   */
  export type QualificationUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Qualification
     */
    select?: QualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qualification
     */
    omit?: QualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Qualification to update in case it exists.
     */
    where: QualificationWhereUniqueInput
    /**
     * In case the Qualification found by the `where` argument doesn't exist, create a new Qualification with this data.
     */
    create: XOR<QualificationCreateInput, QualificationUncheckedCreateInput>
    /**
     * In case the Qualification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QualificationUpdateInput, QualificationUncheckedUpdateInput>
  }

  /**
   * Qualification delete
   */
  export type QualificationDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Qualification
     */
    select?: QualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qualification
     */
    omit?: QualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationInclude<ExtArgs> | null
    /**
     * Filter which Qualification to delete.
     */
    where: QualificationWhereUniqueInput
  }

  /**
   * Qualification deleteMany
   */
  export type QualificationDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Qualifications to delete
     */
    where?: QualificationWhereInput
    /**
     * Limit how many Qualifications to delete.
     */
    limit?: number
  }

  /**
   * Qualification.users
   */
  export type Qualification$usersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserQualification
     */
    select?: UserQualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQualification
     */
    omit?: UserQualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQualificationInclude<ExtArgs> | null
    where?: UserQualificationWhereInput
    orderBy?:
      | UserQualificationOrderByWithRelationInput
      | UserQualificationOrderByWithRelationInput[]
    cursor?: UserQualificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserQualificationScalarFieldEnum | UserQualificationScalarFieldEnum[]
  }

  /**
   * Qualification without action
   */
  export type QualificationDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Qualification
     */
    select?: QualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qualification
     */
    omit?: QualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualificationInclude<ExtArgs> | null
  }

  /**
   * Model UserQualification
   */

  export type AggregateUserQualification = {
    _count: UserQualificationCountAggregateOutputType | null
    _min: UserQualificationMinAggregateOutputType | null
    _max: UserQualificationMaxAggregateOutputType | null
  }

  export type UserQualificationMinAggregateOutputType = {
    userId: string | null
    qualificationId: string | null
    acquiredAt: Date | null
  }

  export type UserQualificationMaxAggregateOutputType = {
    userId: string | null
    qualificationId: string | null
    acquiredAt: Date | null
  }

  export type UserQualificationCountAggregateOutputType = {
    userId: number
    qualificationId: number
    acquiredAt: number
    _all: number
  }

  export type UserQualificationMinAggregateInputType = {
    userId?: true
    qualificationId?: true
    acquiredAt?: true
  }

  export type UserQualificationMaxAggregateInputType = {
    userId?: true
    qualificationId?: true
    acquiredAt?: true
  }

  export type UserQualificationCountAggregateInputType = {
    userId?: true
    qualificationId?: true
    acquiredAt?: true
    _all?: true
  }

  export type UserQualificationAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which UserQualification to aggregate.
     */
    where?: UserQualificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserQualifications to fetch.
     */
    orderBy?:
      | UserQualificationOrderByWithRelationInput
      | UserQualificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserQualificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserQualifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserQualifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned UserQualifications
     **/
    _count?: true | UserQualificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserQualificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserQualificationMaxAggregateInputType
  }

  export type GetUserQualificationAggregateType<T extends UserQualificationAggregateArgs> = {
    [P in keyof T & keyof AggregateUserQualification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserQualification[P]>
      : GetScalarType<T[P], AggregateUserQualification[P]>
  }

  export type UserQualificationGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserQualificationWhereInput
    orderBy?:
      | UserQualificationOrderByWithAggregationInput
      | UserQualificationOrderByWithAggregationInput[]
    by: UserQualificationScalarFieldEnum[] | UserQualificationScalarFieldEnum
    having?: UserQualificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserQualificationCountAggregateInputType | true
    _min?: UserQualificationMinAggregateInputType
    _max?: UserQualificationMaxAggregateInputType
  }

  export type UserQualificationGroupByOutputType = {
    userId: string
    qualificationId: string
    acquiredAt: Date | null
    _count: UserQualificationCountAggregateOutputType | null
    _min: UserQualificationMinAggregateOutputType | null
    _max: UserQualificationMaxAggregateOutputType | null
  }

  type GetUserQualificationGroupByPayload<T extends UserQualificationGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<UserQualificationGroupByOutputType, T['by']> & {
          [P in keyof T & keyof UserQualificationGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserQualificationGroupByOutputType[P]>
            : GetScalarType<T[P], UserQualificationGroupByOutputType[P]>
        }
      >
    >

  export type UserQualificationSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      userId?: boolean
      qualificationId?: boolean
      acquiredAt?: boolean
      user?: boolean | UserDefaultArgs<ExtArgs>
      qualification?: boolean | QualificationDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['userQualification']
  >

  export type UserQualificationSelectScalar = {
    userId?: boolean
    qualificationId?: boolean
    acquiredAt?: boolean
  }

  export type UserQualificationOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'userId' | 'qualificationId' | 'acquiredAt',
    ExtArgs['result']['userQualification']
  >
  export type UserQualificationInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    qualification?: boolean | QualificationDefaultArgs<ExtArgs>
  }

  export type $UserQualificationPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'UserQualification'
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      qualification: Prisma.$QualificationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<
      {
        userId: string
        qualificationId: string
        acquiredAt: Date | null
      },
      ExtArgs['result']['userQualification']
    >
    composites: {}
  }

  type UserQualificationGetPayload<
    S extends boolean | null | undefined | UserQualificationDefaultArgs,
  > = $Result.GetResult<Prisma.$UserQualificationPayload, S>

  type UserQualificationCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserQualificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserQualificationCountAggregateInputType | true
  }

  export interface UserQualificationDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['UserQualification']
      meta: { name: 'UserQualification' }
    }
    /**
     * Find zero or one UserQualification that matches the filter.
     * @param {UserQualificationFindUniqueArgs} args - Arguments to find a UserQualification
     * @example
     * // Get one UserQualification
     * const userQualification = await prisma.userQualification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserQualificationFindUniqueArgs>(
      args: SelectSubset<T, UserQualificationFindUniqueArgs<ExtArgs>>
    ): Prisma__UserQualificationClient<
      $Result.GetResult<
        Prisma.$UserQualificationPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one UserQualification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserQualificationFindUniqueOrThrowArgs} args - Arguments to find a UserQualification
     * @example
     * // Get one UserQualification
     * const userQualification = await prisma.userQualification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserQualificationFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserQualificationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserQualificationClient<
      $Result.GetResult<
        Prisma.$UserQualificationPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first UserQualification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQualificationFindFirstArgs} args - Arguments to find a UserQualification
     * @example
     * // Get one UserQualification
     * const userQualification = await prisma.userQualification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserQualificationFindFirstArgs>(
      args?: SelectSubset<T, UserQualificationFindFirstArgs<ExtArgs>>
    ): Prisma__UserQualificationClient<
      $Result.GetResult<
        Prisma.$UserQualificationPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first UserQualification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQualificationFindFirstOrThrowArgs} args - Arguments to find a UserQualification
     * @example
     * // Get one UserQualification
     * const userQualification = await prisma.userQualification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserQualificationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserQualificationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserQualificationClient<
      $Result.GetResult<
        Prisma.$UserQualificationPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more UserQualifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQualificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserQualifications
     * const userQualifications = await prisma.userQualification.findMany()
     *
     * // Get first 10 UserQualifications
     * const userQualifications = await prisma.userQualification.findMany({ take: 10 })
     *
     * // Only select the `userId`
     * const userQualificationWithUserIdOnly = await prisma.userQualification.findMany({ select: { userId: true } })
     *
     */
    findMany<T extends UserQualificationFindManyArgs>(
      args?: SelectSubset<T, UserQualificationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserQualificationPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >

    /**
     * Create a UserQualification.
     * @param {UserQualificationCreateArgs} args - Arguments to create a UserQualification.
     * @example
     * // Create one UserQualification
     * const UserQualification = await prisma.userQualification.create({
     *   data: {
     *     // ... data to create a UserQualification
     *   }
     * })
     *
     */
    create<T extends UserQualificationCreateArgs>(
      args: SelectSubset<T, UserQualificationCreateArgs<ExtArgs>>
    ): Prisma__UserQualificationClient<
      $Result.GetResult<Prisma.$UserQualificationPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many UserQualifications.
     * @param {UserQualificationCreateManyArgs} args - Arguments to create many UserQualifications.
     * @example
     * // Create many UserQualifications
     * const userQualification = await prisma.userQualification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserQualificationCreateManyArgs>(
      args?: SelectSubset<T, UserQualificationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserQualification.
     * @param {UserQualificationDeleteArgs} args - Arguments to delete one UserQualification.
     * @example
     * // Delete one UserQualification
     * const UserQualification = await prisma.userQualification.delete({
     *   where: {
     *     // ... filter to delete one UserQualification
     *   }
     * })
     *
     */
    delete<T extends UserQualificationDeleteArgs>(
      args: SelectSubset<T, UserQualificationDeleteArgs<ExtArgs>>
    ): Prisma__UserQualificationClient<
      $Result.GetResult<Prisma.$UserQualificationPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one UserQualification.
     * @param {UserQualificationUpdateArgs} args - Arguments to update one UserQualification.
     * @example
     * // Update one UserQualification
     * const userQualification = await prisma.userQualification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserQualificationUpdateArgs>(
      args: SelectSubset<T, UserQualificationUpdateArgs<ExtArgs>>
    ): Prisma__UserQualificationClient<
      $Result.GetResult<Prisma.$UserQualificationPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more UserQualifications.
     * @param {UserQualificationDeleteManyArgs} args - Arguments to filter UserQualifications to delete.
     * @example
     * // Delete a few UserQualifications
     * const { count } = await prisma.userQualification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserQualificationDeleteManyArgs>(
      args?: SelectSubset<T, UserQualificationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserQualifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQualificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserQualifications
     * const userQualification = await prisma.userQualification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserQualificationUpdateManyArgs>(
      args: SelectSubset<T, UserQualificationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserQualification.
     * @param {UserQualificationUpsertArgs} args - Arguments to update or create a UserQualification.
     * @example
     * // Update or create a UserQualification
     * const userQualification = await prisma.userQualification.upsert({
     *   create: {
     *     // ... data to create a UserQualification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserQualification we want to update
     *   }
     * })
     */
    upsert<T extends UserQualificationUpsertArgs>(
      args: SelectSubset<T, UserQualificationUpsertArgs<ExtArgs>>
    ): Prisma__UserQualificationClient<
      $Result.GetResult<Prisma.$UserQualificationPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of UserQualifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQualificationCountArgs} args - Arguments to filter UserQualifications to count.
     * @example
     * // Count the number of UserQualifications
     * const count = await prisma.userQualification.count({
     *   where: {
     *     // ... the filter for the UserQualifications we want to count
     *   }
     * })
     **/
    count<T extends UserQualificationCountArgs>(
      args?: Subset<T, UserQualificationCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserQualificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserQualification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQualificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserQualificationAggregateArgs>(
      args: Subset<T, UserQualificationAggregateArgs>
    ): Prisma.PrismaPromise<GetUserQualificationAggregateType<T>>

    /**
     * Group by UserQualification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQualificationGroupByArgs} args - Group by arguments.
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
      T extends UserQualificationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserQualificationGroupByArgs['orderBy'] }
        : { orderBy?: UserQualificationGroupByArgs['orderBy'] },
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
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
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
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserQualificationGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetUserQualificationGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the UserQualification model
     */
    readonly fields: UserQualificationFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserQualification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserQualificationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    qualification<T extends QualificationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, QualificationDefaultArgs<ExtArgs>>
    ): Prisma__QualificationClient<
      | $Result.GetResult<
          Prisma.$QualificationPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the UserQualification model
   */
  interface UserQualificationFieldRefs {
    readonly userId: FieldRef<'UserQualification', 'String'>
    readonly qualificationId: FieldRef<'UserQualification', 'String'>
    readonly acquiredAt: FieldRef<'UserQualification', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * UserQualification findUnique
   */
  export type UserQualificationFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserQualification
     */
    select?: UserQualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQualification
     */
    omit?: UserQualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQualificationInclude<ExtArgs> | null
    /**
     * Filter, which UserQualification to fetch.
     */
    where: UserQualificationWhereUniqueInput
  }

  /**
   * UserQualification findUniqueOrThrow
   */
  export type UserQualificationFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserQualification
     */
    select?: UserQualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQualification
     */
    omit?: UserQualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQualificationInclude<ExtArgs> | null
    /**
     * Filter, which UserQualification to fetch.
     */
    where: UserQualificationWhereUniqueInput
  }

  /**
   * UserQualification findFirst
   */
  export type UserQualificationFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserQualification
     */
    select?: UserQualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQualification
     */
    omit?: UserQualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQualificationInclude<ExtArgs> | null
    /**
     * Filter, which UserQualification to fetch.
     */
    where?: UserQualificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserQualifications to fetch.
     */
    orderBy?:
      | UserQualificationOrderByWithRelationInput
      | UserQualificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserQualifications.
     */
    cursor?: UserQualificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserQualifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserQualifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserQualifications.
     */
    distinct?: UserQualificationScalarFieldEnum | UserQualificationScalarFieldEnum[]
  }

  /**
   * UserQualification findFirstOrThrow
   */
  export type UserQualificationFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserQualification
     */
    select?: UserQualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQualification
     */
    omit?: UserQualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQualificationInclude<ExtArgs> | null
    /**
     * Filter, which UserQualification to fetch.
     */
    where?: UserQualificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserQualifications to fetch.
     */
    orderBy?:
      | UserQualificationOrderByWithRelationInput
      | UserQualificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserQualifications.
     */
    cursor?: UserQualificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserQualifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserQualifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserQualifications.
     */
    distinct?: UserQualificationScalarFieldEnum | UserQualificationScalarFieldEnum[]
  }

  /**
   * UserQualification findMany
   */
  export type UserQualificationFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserQualification
     */
    select?: UserQualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQualification
     */
    omit?: UserQualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQualificationInclude<ExtArgs> | null
    /**
     * Filter, which UserQualifications to fetch.
     */
    where?: UserQualificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserQualifications to fetch.
     */
    orderBy?:
      | UserQualificationOrderByWithRelationInput
      | UserQualificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing UserQualifications.
     */
    cursor?: UserQualificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserQualifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserQualifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserQualifications.
     */
    distinct?: UserQualificationScalarFieldEnum | UserQualificationScalarFieldEnum[]
  }

  /**
   * UserQualification create
   */
  export type UserQualificationCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserQualification
     */
    select?: UserQualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQualification
     */
    omit?: UserQualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQualificationInclude<ExtArgs> | null
    /**
     * The data needed to create a UserQualification.
     */
    data: XOR<UserQualificationCreateInput, UserQualificationUncheckedCreateInput>
  }

  /**
   * UserQualification createMany
   */
  export type UserQualificationCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many UserQualifications.
     */
    data: UserQualificationCreateManyInput | UserQualificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserQualification update
   */
  export type UserQualificationUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserQualification
     */
    select?: UserQualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQualification
     */
    omit?: UserQualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQualificationInclude<ExtArgs> | null
    /**
     * The data needed to update a UserQualification.
     */
    data: XOR<UserQualificationUpdateInput, UserQualificationUncheckedUpdateInput>
    /**
     * Choose, which UserQualification to update.
     */
    where: UserQualificationWhereUniqueInput
  }

  /**
   * UserQualification updateMany
   */
  export type UserQualificationUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update UserQualifications.
     */
    data: XOR<UserQualificationUpdateManyMutationInput, UserQualificationUncheckedUpdateManyInput>
    /**
     * Filter which UserQualifications to update
     */
    where?: UserQualificationWhereInput
    /**
     * Limit how many UserQualifications to update.
     */
    limit?: number
  }

  /**
   * UserQualification upsert
   */
  export type UserQualificationUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserQualification
     */
    select?: UserQualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQualification
     */
    omit?: UserQualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQualificationInclude<ExtArgs> | null
    /**
     * The filter to search for the UserQualification to update in case it exists.
     */
    where: UserQualificationWhereUniqueInput
    /**
     * In case the UserQualification found by the `where` argument doesn't exist, create a new UserQualification with this data.
     */
    create: XOR<UserQualificationCreateInput, UserQualificationUncheckedCreateInput>
    /**
     * In case the UserQualification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserQualificationUpdateInput, UserQualificationUncheckedUpdateInput>
  }

  /**
   * UserQualification delete
   */
  export type UserQualificationDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserQualification
     */
    select?: UserQualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQualification
     */
    omit?: UserQualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQualificationInclude<ExtArgs> | null
    /**
     * Filter which UserQualification to delete.
     */
    where: UserQualificationWhereUniqueInput
  }

  /**
   * UserQualification deleteMany
   */
  export type UserQualificationDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which UserQualifications to delete
     */
    where?: UserQualificationWhereInput
    /**
     * Limit how many UserQualifications to delete.
     */
    limit?: number
  }

  /**
   * UserQualification without action
   */
  export type UserQualificationDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserQualification
     */
    select?: UserQualificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQualification
     */
    omit?: UserQualificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQualificationInclude<ExtArgs> | null
  }

  /**
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type SkillMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }

  export type SkillMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type SkillAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Skills
     **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
    [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }

  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: SkillWhereInput
      orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[]
      by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
      having?: SkillScalarWhereWithAggregatesInput
      take?: number
      skip?: number
      _count?: SkillCountAggregateInputType | true
      _min?: SkillMinAggregateInputType
      _max?: SkillMaxAggregateInputType
    }

  export type SkillGroupByOutputType = {
    id: string
    name: string
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> & {
        [P in keyof T & keyof SkillGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
          : GetScalarType<T[P], SkillGroupByOutputType[P]>
      }
    >
  >

  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean
        name?: boolean
        users?: boolean | Skill$usersArgs<ExtArgs>
        _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
      },
      ExtArgs['result']['skill']
    >

  export type SkillSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type SkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<'id' | 'name', ExtArgs['result']['skill']>
  export type SkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Skill$usersArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'Skill'
    objects: {
      users: Prisma.$UserSkillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        name: string
      },
      ExtArgs['result']['skill']
    >
    composites: {}
  }

  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<
    Prisma.$SkillPayload,
    S
  >

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    SkillFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: SkillCountAggregateInputType | true
  }

  export interface SkillDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill']; meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(
      args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>
    ): Prisma__SkillClient<
      $Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(
      args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SkillClient<
      $Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(
      args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>
    ): Prisma__SkillClient<
      $Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SkillClient<
      $Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     *
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SkillFindManyArgs>(
      args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     *
     */
    create<T extends SkillCreateArgs>(
      args: SelectSubset<T, SkillCreateArgs<ExtArgs>>
    ): Prisma__SkillClient<
      $Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SkillCreateManyArgs>(
      args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     *
     */
    delete<T extends SkillDeleteArgs>(
      args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>
    ): Prisma__SkillClient<
      $Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SkillUpdateArgs>(
      args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>
    ): Prisma__SkillClient<
      $Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SkillDeleteManyArgs>(
      args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SkillUpdateManyArgs>(
      args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends SkillUpsertArgs>(
      args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>
    ): Prisma__SkillClient<
      $Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
     **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillAggregateArgs>(
      args: Subset<T, SkillAggregateArgs>
    ): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
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
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
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
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
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
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Skill model
     */
    readonly fields: SkillFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    users<T extends Skill$usersArgs<ExtArgs> = {}>(
      args?: Subset<T, Skill$usersArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Skill model
   */
  interface SkillFieldRefs {
    readonly id: FieldRef<'Skill', 'String'>
    readonly name: FieldRef<'Skill', 'String'>
  }

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Skill
       */
      select?: SkillSelect<ExtArgs> | null
      /**
       * Omit specific fields from the Skill
       */
      omit?: SkillOmit<ExtArgs> | null
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: SkillInclude<ExtArgs> | null
      /**
       * The data needed to create a Skill.
       */
      data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    }

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Skill
       */
      select?: SkillSelect<ExtArgs> | null
      /**
       * Omit specific fields from the Skill
       */
      omit?: SkillOmit<ExtArgs> | null
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: SkillInclude<ExtArgs> | null
      /**
       * The data needed to update a Skill.
       */
      data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
      /**
       * Choose, which Skill to update.
       */
      where: SkillWhereUniqueInput
    }

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Skill
       */
      select?: SkillSelect<ExtArgs> | null
      /**
       * Omit specific fields from the Skill
       */
      omit?: SkillOmit<ExtArgs> | null
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: SkillInclude<ExtArgs> | null
      /**
       * The filter to search for the Skill to update in case it exists.
       */
      where: SkillWhereUniqueInput
      /**
       * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
       */
      create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
      /**
       * In case the Skill was found with the provided `where` argument, update it with this data.
       */
      update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    }

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Skill
       */
      select?: SkillSelect<ExtArgs> | null
      /**
       * Omit specific fields from the Skill
       */
      omit?: SkillOmit<ExtArgs> | null
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: SkillInclude<ExtArgs> | null
      /**
       * Filter which Skill to delete.
       */
      where: SkillWhereUniqueInput
    }

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to delete.
     */
    limit?: number
  }

  /**
   * Skill.users
   */
  export type Skill$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the UserSkill
       */
      select?: UserSkillSelect<ExtArgs> | null
      /**
       * Omit specific fields from the UserSkill
       */
      omit?: UserSkillOmit<ExtArgs> | null
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: UserSkillInclude<ExtArgs> | null
      where?: UserSkillWhereInput
      orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
      cursor?: UserSkillWhereUniqueInput
      take?: number
      skip?: number
      distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
    }

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Skill
       */
      select?: SkillSelect<ExtArgs> | null
      /**
       * Omit specific fields from the Skill
       */
      omit?: SkillOmit<ExtArgs> | null
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: SkillInclude<ExtArgs> | null
    }

  /**
   * Model UserSkill
   */

  export type AggregateUserSkill = {
    _count: UserSkillCountAggregateOutputType | null
    _min: UserSkillMinAggregateOutputType | null
    _max: UserSkillMaxAggregateOutputType | null
  }

  export type UserSkillMinAggregateOutputType = {
    userId: string | null
    skillId: string | null
  }

  export type UserSkillMaxAggregateOutputType = {
    userId: string | null
    skillId: string | null
  }

  export type UserSkillCountAggregateOutputType = {
    userId: number
    skillId: number
    _all: number
  }

  export type UserSkillMinAggregateInputType = {
    userId?: true
    skillId?: true
  }

  export type UserSkillMaxAggregateInputType = {
    userId?: true
    skillId?: true
  }

  export type UserSkillCountAggregateInputType = {
    userId?: true
    skillId?: true
    _all?: true
  }

  export type UserSkillAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which UserSkill to aggregate.
     */
    where?: UserSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserSkills to fetch.
     */
    orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned UserSkills
     **/
    _count?: true | UserSkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserSkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserSkillMaxAggregateInputType
  }

  export type GetUserSkillAggregateType<T extends UserSkillAggregateArgs> = {
    [P in keyof T & keyof AggregateUserSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSkill[P]>
      : GetScalarType<T[P], AggregateUserSkill[P]>
  }

  export type UserSkillGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserSkillWhereInput
    orderBy?: UserSkillOrderByWithAggregationInput | UserSkillOrderByWithAggregationInput[]
    by: UserSkillScalarFieldEnum[] | UserSkillScalarFieldEnum
    having?: UserSkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSkillCountAggregateInputType | true
    _min?: UserSkillMinAggregateInputType
    _max?: UserSkillMaxAggregateInputType
  }

  export type UserSkillGroupByOutputType = {
    userId: string
    skillId: string
    _count: UserSkillCountAggregateOutputType | null
    _min: UserSkillMinAggregateOutputType | null
    _max: UserSkillMaxAggregateOutputType | null
  }

  type GetUserSkillGroupByPayload<T extends UserSkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSkillGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserSkillGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserSkillGroupByOutputType[P]>
          : GetScalarType<T[P], UserSkillGroupByOutputType[P]>
      }
    >
  >

  export type UserSkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        userId?: boolean
        skillId?: boolean
        user?: boolean | UserDefaultArgs<ExtArgs>
        skill?: boolean | SkillDefaultArgs<ExtArgs>
      },
      ExtArgs['result']['userSkill']
    >

  export type UserSkillSelectScalar = {
    userId?: boolean
    skillId?: boolean
  }

  export type UserSkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<'userId' | 'skillId', ExtArgs['result']['userSkill']>
  export type UserSkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      user?: boolean | UserDefaultArgs<ExtArgs>
      skill?: boolean | SkillDefaultArgs<ExtArgs>
    }

  export type $UserSkillPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'UserSkill'
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      skill: Prisma.$SkillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<
      {
        userId: string
        skillId: string
      },
      ExtArgs['result']['userSkill']
    >
    composites: {}
  }

  type UserSkillGetPayload<S extends boolean | null | undefined | UserSkillDefaultArgs> =
    $Result.GetResult<Prisma.$UserSkillPayload, S>

  type UserSkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSkillCountAggregateInputType | true
    }

  export interface UserSkillDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['UserSkill']
      meta: { name: 'UserSkill' }
    }
    /**
     * Find zero or one UserSkill that matches the filter.
     * @param {UserSkillFindUniqueArgs} args - Arguments to find a UserSkill
     * @example
     * // Get one UserSkill
     * const userSkill = await prisma.userSkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSkillFindUniqueArgs>(
      args: SelectSubset<T, UserSkillFindUniqueArgs<ExtArgs>>
    ): Prisma__UserSkillClient<
      $Result.GetResult<
        Prisma.$UserSkillPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one UserSkill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSkillFindUniqueOrThrowArgs} args - Arguments to find a UserSkill
     * @example
     * // Get one UserSkill
     * const userSkill = await prisma.userSkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSkillFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserSkillFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserSkillClient<
      $Result.GetResult<
        Prisma.$UserSkillPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first UserSkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillFindFirstArgs} args - Arguments to find a UserSkill
     * @example
     * // Get one UserSkill
     * const userSkill = await prisma.userSkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSkillFindFirstArgs>(
      args?: SelectSubset<T, UserSkillFindFirstArgs<ExtArgs>>
    ): Prisma__UserSkillClient<
      $Result.GetResult<
        Prisma.$UserSkillPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first UserSkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillFindFirstOrThrowArgs} args - Arguments to find a UserSkill
     * @example
     * // Get one UserSkill
     * const userSkill = await prisma.userSkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSkillFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserSkillFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserSkillClient<
      $Result.GetResult<
        Prisma.$UserSkillPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more UserSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSkills
     * const userSkills = await prisma.userSkill.findMany()
     *
     * // Get first 10 UserSkills
     * const userSkills = await prisma.userSkill.findMany({ take: 10 })
     *
     * // Only select the `userId`
     * const userSkillWithUserIdOnly = await prisma.userSkill.findMany({ select: { userId: true } })
     *
     */
    findMany<T extends UserSkillFindManyArgs>(
      args?: SelectSubset<T, UserSkillFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >

    /**
     * Create a UserSkill.
     * @param {UserSkillCreateArgs} args - Arguments to create a UserSkill.
     * @example
     * // Create one UserSkill
     * const UserSkill = await prisma.userSkill.create({
     *   data: {
     *     // ... data to create a UserSkill
     *   }
     * })
     *
     */
    create<T extends UserSkillCreateArgs>(
      args: SelectSubset<T, UserSkillCreateArgs<ExtArgs>>
    ): Prisma__UserSkillClient<
      $Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many UserSkills.
     * @param {UserSkillCreateManyArgs} args - Arguments to create many UserSkills.
     * @example
     * // Create many UserSkills
     * const userSkill = await prisma.userSkill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserSkillCreateManyArgs>(
      args?: SelectSubset<T, UserSkillCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserSkill.
     * @param {UserSkillDeleteArgs} args - Arguments to delete one UserSkill.
     * @example
     * // Delete one UserSkill
     * const UserSkill = await prisma.userSkill.delete({
     *   where: {
     *     // ... filter to delete one UserSkill
     *   }
     * })
     *
     */
    delete<T extends UserSkillDeleteArgs>(
      args: SelectSubset<T, UserSkillDeleteArgs<ExtArgs>>
    ): Prisma__UserSkillClient<
      $Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one UserSkill.
     * @param {UserSkillUpdateArgs} args - Arguments to update one UserSkill.
     * @example
     * // Update one UserSkill
     * const userSkill = await prisma.userSkill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserSkillUpdateArgs>(
      args: SelectSubset<T, UserSkillUpdateArgs<ExtArgs>>
    ): Prisma__UserSkillClient<
      $Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more UserSkills.
     * @param {UserSkillDeleteManyArgs} args - Arguments to filter UserSkills to delete.
     * @example
     * // Delete a few UserSkills
     * const { count } = await prisma.userSkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserSkillDeleteManyArgs>(
      args?: SelectSubset<T, UserSkillDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSkills
     * const userSkill = await prisma.userSkill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserSkillUpdateManyArgs>(
      args: SelectSubset<T, UserSkillUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserSkill.
     * @param {UserSkillUpsertArgs} args - Arguments to update or create a UserSkill.
     * @example
     * // Update or create a UserSkill
     * const userSkill = await prisma.userSkill.upsert({
     *   create: {
     *     // ... data to create a UserSkill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSkill we want to update
     *   }
     * })
     */
    upsert<T extends UserSkillUpsertArgs>(
      args: SelectSubset<T, UserSkillUpsertArgs<ExtArgs>>
    ): Prisma__UserSkillClient<
      $Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of UserSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillCountArgs} args - Arguments to filter UserSkills to count.
     * @example
     * // Count the number of UserSkills
     * const count = await prisma.userSkill.count({
     *   where: {
     *     // ... the filter for the UserSkills we want to count
     *   }
     * })
     **/
    count<T extends UserSkillCountArgs>(
      args?: Subset<T, UserSkillCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSkillAggregateArgs>(
      args: Subset<T, UserSkillAggregateArgs>
    ): Prisma.PrismaPromise<GetUserSkillAggregateType<T>>

    /**
     * Group by UserSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillGroupByArgs} args - Group by arguments.
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
      T extends UserSkillGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSkillGroupByArgs['orderBy'] }
        : { orderBy?: UserSkillGroupByArgs['orderBy'] },
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
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
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
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserSkillGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetUserSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the UserSkill model
     */
    readonly fields: UserSkillFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSkillClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    skill<T extends SkillDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, SkillDefaultArgs<ExtArgs>>
    ): Prisma__SkillClient<
      | $Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the UserSkill model
   */
  interface UserSkillFieldRefs {
    readonly userId: FieldRef<'UserSkill', 'String'>
    readonly skillId: FieldRef<'UserSkill', 'String'>
  }

  // Custom InputTypes
  /**
   * UserSkill findUnique
   */
  export type UserSkillFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter, which UserSkill to fetch.
     */
    where: UserSkillWhereUniqueInput
  }

  /**
   * UserSkill findUniqueOrThrow
   */
  export type UserSkillFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter, which UserSkill to fetch.
     */
    where: UserSkillWhereUniqueInput
  }

  /**
   * UserSkill findFirst
   */
  export type UserSkillFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter, which UserSkill to fetch.
     */
    where?: UserSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserSkills to fetch.
     */
    orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserSkills.
     */
    cursor?: UserSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserSkills.
     */
    distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
  }

  /**
   * UserSkill findFirstOrThrow
   */
  export type UserSkillFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter, which UserSkill to fetch.
     */
    where?: UserSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserSkills to fetch.
     */
    orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserSkills.
     */
    cursor?: UserSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserSkills.
     */
    distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
  }

  /**
   * UserSkill findMany
   */
  export type UserSkillFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter, which UserSkills to fetch.
     */
    where?: UserSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserSkills to fetch.
     */
    orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing UserSkills.
     */
    cursor?: UserSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserSkills.
     */
    distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
  }

  /**
   * UserSkill create
   */
  export type UserSkillCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSkill.
     */
    data: XOR<UserSkillCreateInput, UserSkillUncheckedCreateInput>
  }

  /**
   * UserSkill createMany
   */
  export type UserSkillCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many UserSkills.
     */
    data: UserSkillCreateManyInput | UserSkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSkill update
   */
  export type UserSkillUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSkill.
     */
    data: XOR<UserSkillUpdateInput, UserSkillUncheckedUpdateInput>
    /**
     * Choose, which UserSkill to update.
     */
    where: UserSkillWhereUniqueInput
  }

  /**
   * UserSkill updateMany
   */
  export type UserSkillUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update UserSkills.
     */
    data: XOR<UserSkillUpdateManyMutationInput, UserSkillUncheckedUpdateManyInput>
    /**
     * Filter which UserSkills to update
     */
    where?: UserSkillWhereInput
    /**
     * Limit how many UserSkills to update.
     */
    limit?: number
  }

  /**
   * UserSkill upsert
   */
  export type UserSkillUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSkill to update in case it exists.
     */
    where: UserSkillWhereUniqueInput
    /**
     * In case the UserSkill found by the `where` argument doesn't exist, create a new UserSkill with this data.
     */
    create: XOR<UserSkillCreateInput, UserSkillUncheckedCreateInput>
    /**
     * In case the UserSkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSkillUpdateInput, UserSkillUncheckedUpdateInput>
  }

  /**
   * UserSkill delete
   */
  export type UserSkillDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter which UserSkill to delete.
     */
    where: UserSkillWhereUniqueInput
  }

  /**
   * UserSkill deleteMany
   */
  export type UserSkillDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which UserSkills to delete
     */
    where?: UserSkillWhereInput
    /**
     * Limit how many UserSkills to delete.
     */
    limit?: number
  }

  /**
   * UserSkill without action
   */
  export type UserSkillDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
  }

  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    developmentScale: number | null
    overallScale: number | null
  }

  export type ProjectSumAggregateOutputType = {
    developmentScale: number | null
    overallScale: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    summary: string | null
    role: string | null
    developmentScale: number | null
    overallScale: number | null
    server: string | null
    os: string | null
    db: string | null
    hasRequirementsDefinition: boolean | null
    hasBasicDesign: boolean | null
    hasDetailedDesign: boolean | null
    hasImplementationUnitTest: boolean | null
    hasIntegrationTest: boolean | null
    hasSystemTest: boolean | null
    hasMaintenanceOperation: boolean | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    summary: string | null
    role: string | null
    developmentScale: number | null
    overallScale: number | null
    server: string | null
    os: string | null
    db: string | null
    hasRequirementsDefinition: boolean | null
    hasBasicDesign: boolean | null
    hasDetailedDesign: boolean | null
    hasImplementationUnitTest: boolean | null
    hasIntegrationTest: boolean | null
    hasSystemTest: boolean | null
    hasMaintenanceOperation: boolean | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    summary: number
    role: number
    developmentScale: number
    overallScale: number
    server: number
    os: number
    db: number
    hasRequirementsDefinition: number
    hasBasicDesign: number
    hasDetailedDesign: number
    hasImplementationUnitTest: number
    hasIntegrationTest: number
    hasSystemTest: number
    hasMaintenanceOperation: number
    _all: number
  }

  export type ProjectAvgAggregateInputType = {
    developmentScale?: true
    overallScale?: true
  }

  export type ProjectSumAggregateInputType = {
    developmentScale?: true
    overallScale?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    summary?: true
    role?: true
    developmentScale?: true
    overallScale?: true
    server?: true
    os?: true
    db?: true
    hasRequirementsDefinition?: true
    hasBasicDesign?: true
    hasDetailedDesign?: true
    hasImplementationUnitTest?: true
    hasIntegrationTest?: true
    hasSystemTest?: true
    hasMaintenanceOperation?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    summary?: true
    role?: true
    developmentScale?: true
    overallScale?: true
    server?: true
    os?: true
    db?: true
    hasRequirementsDefinition?: true
    hasBasicDesign?: true
    hasDetailedDesign?: true
    hasImplementationUnitTest?: true
    hasIntegrationTest?: true
    hasSystemTest?: true
    hasMaintenanceOperation?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    summary?: true
    role?: true
    developmentScale?: true
    overallScale?: true
    server?: true
    os?: true
    db?: true
    hasRequirementsDefinition?: true
    hasBasicDesign?: true
    hasDetailedDesign?: true
    hasImplementationUnitTest?: true
    hasIntegrationTest?: true
    hasSystemTest?: true
    hasMaintenanceOperation?: true
    _all?: true
  }

  export type ProjectAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Projects
     **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
    [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }

  export type ProjectGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    userId: string
    title: string
    summary: string
    role: string | null
    developmentScale: number | null
    overallScale: number | null
    server: string | null
    os: string | null
    db: string | null
    hasRequirementsDefinition: boolean
    hasBasicDesign: boolean
    hasDetailedDesign: boolean
    hasImplementationUnitTest: boolean
    hasIntegrationTest: boolean
    hasSystemTest: boolean
    hasMaintenanceOperation: boolean
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ProjectGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
          : GetScalarType<T[P], ProjectGroupByOutputType[P]>
      }
    >
  >

  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean
        userId?: boolean
        title?: boolean
        summary?: boolean
        role?: boolean
        developmentScale?: boolean
        overallScale?: boolean
        server?: boolean
        os?: boolean
        db?: boolean
        hasRequirementsDefinition?: boolean
        hasBasicDesign?: boolean
        hasDetailedDesign?: boolean
        hasImplementationUnitTest?: boolean
        hasIntegrationTest?: boolean
        hasSystemTest?: boolean
        hasMaintenanceOperation?: boolean
        techStacks?: boolean | Project$techStacksArgs<ExtArgs>
        languages?: boolean | Project$languagesArgs<ExtArgs>
        user?: boolean | UserDefaultArgs<ExtArgs>
        _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
      },
      ExtArgs['result']['project']
    >

  export type ProjectSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    summary?: boolean
    role?: boolean
    developmentScale?: boolean
    overallScale?: boolean
    server?: boolean
    os?: boolean
    db?: boolean
    hasRequirementsDefinition?: boolean
    hasBasicDesign?: boolean
    hasDetailedDesign?: boolean
    hasImplementationUnitTest?: boolean
    hasIntegrationTest?: boolean
    hasSystemTest?: boolean
    hasMaintenanceOperation?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      | 'id'
      | 'userId'
      | 'title'
      | 'summary'
      | 'role'
      | 'developmentScale'
      | 'overallScale'
      | 'server'
      | 'os'
      | 'db'
      | 'hasRequirementsDefinition'
      | 'hasBasicDesign'
      | 'hasDetailedDesign'
      | 'hasImplementationUnitTest'
      | 'hasIntegrationTest'
      | 'hasSystemTest'
      | 'hasMaintenanceOperation',
      ExtArgs['result']['project']
    >
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    techStacks?: boolean | Project$techStacksArgs<ExtArgs>
    languages?: boolean | Project$languagesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      name: 'Project'
      objects: {
        techStacks: Prisma.$ProjectTechStackPayload<ExtArgs>[]
        languages: Prisma.$ProjectLanguagePayload<ExtArgs>[]
        user: Prisma.$UserPayload<ExtArgs>
      }
      scalars: $Extensions.GetPayloadResult<
        {
          id: string
          userId: string
          title: string
          summary: string
          role: string | null
          developmentScale: number | null
          overallScale: number | null
          server: string | null
          os: string | null
          db: string | null
          hasRequirementsDefinition: boolean
          hasBasicDesign: boolean
          hasDetailedDesign: boolean
          hasImplementationUnitTest: boolean
          hasIntegrationTest: boolean
          hasSystemTest: boolean
          hasMaintenanceOperation: boolean
        },
        ExtArgs['result']['project']
      >
      composites: {}
    }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> =
    $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    ProjectFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: ProjectCountAggregateInputType | true
  }

  export interface ProjectDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project']; meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(
      args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>
    ): Prisma__ProjectClient<
      $Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectClient<
      $Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(
      args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>
    ): Prisma__ProjectClient<
      $Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectClient<
      $Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     *
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProjectFindManyArgs>(
      args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     *
     */
    create<T extends ProjectCreateArgs>(
      args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>
    ): Prisma__ProjectClient<
      $Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProjectCreateManyArgs>(
      args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     *
     */
    delete<T extends ProjectDeleteArgs>(
      args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>
    ): Prisma__ProjectClient<
      $Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProjectUpdateArgs>(
      args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>
    ): Prisma__ProjectClient<
      $Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProjectDeleteManyArgs>(
      args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProjectUpdateManyArgs>(
      args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(
      args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>
    ): Prisma__ProjectClient<
      $Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
     **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(
      args: Subset<T, ProjectAggregateArgs>
    ): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
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
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Project model
     */
    readonly fields: ProjectFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    techStacks<T extends Project$techStacksArgs<ExtArgs> = {}>(
      args?: Subset<T, Project$techStacksArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ProjectTechStackPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >
    languages<T extends Project$languagesArgs<ExtArgs> = {}>(
      args?: Subset<T, Project$languagesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<Prisma.$ProjectLanguagePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
      | Null
    >
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<'Project', 'String'>
    readonly userId: FieldRef<'Project', 'String'>
    readonly title: FieldRef<'Project', 'String'>
    readonly summary: FieldRef<'Project', 'String'>
    readonly role: FieldRef<'Project', 'String'>
    readonly developmentScale: FieldRef<'Project', 'Int'>
    readonly overallScale: FieldRef<'Project', 'Int'>
    readonly server: FieldRef<'Project', 'String'>
    readonly os: FieldRef<'Project', 'String'>
    readonly db: FieldRef<'Project', 'String'>
    readonly hasRequirementsDefinition: FieldRef<'Project', 'Boolean'>
    readonly hasBasicDesign: FieldRef<'Project', 'Boolean'>
    readonly hasDetailedDesign: FieldRef<'Project', 'Boolean'>
    readonly hasImplementationUnitTest: FieldRef<'Project', 'Boolean'>
    readonly hasIntegrationTest: FieldRef<'Project', 'Boolean'>
    readonly hasSystemTest: FieldRef<'Project', 'Boolean'>
    readonly hasMaintenanceOperation: FieldRef<'Project', 'Boolean'>
  }

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.techStacks
   */
  export type Project$techStacksArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectTechStack
     */
    select?: ProjectTechStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechStack
     */
    omit?: ProjectTechStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechStackInclude<ExtArgs> | null
    where?: ProjectTechStackWhereInput
    orderBy?: ProjectTechStackOrderByWithRelationInput | ProjectTechStackOrderByWithRelationInput[]
    cursor?: ProjectTechStackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectTechStackScalarFieldEnum | ProjectTechStackScalarFieldEnum[]
  }

  /**
   * Project.languages
   */
  export type Project$languagesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageInclude<ExtArgs> | null
    where?: ProjectLanguageWhereInput
    orderBy?: ProjectLanguageOrderByWithRelationInput | ProjectLanguageOrderByWithRelationInput[]
    cursor?: ProjectLanguageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectLanguageScalarFieldEnum | ProjectLanguageScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }

  /**
   * Model ProjectTechStack
   */

  export type AggregateProjectTechStack = {
    _count: ProjectTechStackCountAggregateOutputType | null
    _min: ProjectTechStackMinAggregateOutputType | null
    _max: ProjectTechStackMaxAggregateOutputType | null
  }

  export type ProjectTechStackMinAggregateOutputType = {
    projectId: string | null
    techStackId: string | null
  }

  export type ProjectTechStackMaxAggregateOutputType = {
    projectId: string | null
    techStackId: string | null
  }

  export type ProjectTechStackCountAggregateOutputType = {
    projectId: number
    techStackId: number
    _all: number
  }

  export type ProjectTechStackMinAggregateInputType = {
    projectId?: true
    techStackId?: true
  }

  export type ProjectTechStackMaxAggregateInputType = {
    projectId?: true
    techStackId?: true
  }

  export type ProjectTechStackCountAggregateInputType = {
    projectId?: true
    techStackId?: true
    _all?: true
  }

  export type ProjectTechStackAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ProjectTechStack to aggregate.
     */
    where?: ProjectTechStackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProjectTechStacks to fetch.
     */
    orderBy?: ProjectTechStackOrderByWithRelationInput | ProjectTechStackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ProjectTechStackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProjectTechStacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProjectTechStacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ProjectTechStacks
     **/
    _count?: true | ProjectTechStackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProjectTechStackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProjectTechStackMaxAggregateInputType
  }

  export type GetProjectTechStackAggregateType<T extends ProjectTechStackAggregateArgs> = {
    [P in keyof T & keyof AggregateProjectTechStack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectTechStack[P]>
      : GetScalarType<T[P], AggregateProjectTechStack[P]>
  }

  export type ProjectTechStackGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProjectTechStackWhereInput
    orderBy?:
      | ProjectTechStackOrderByWithAggregationInput
      | ProjectTechStackOrderByWithAggregationInput[]
    by: ProjectTechStackScalarFieldEnum[] | ProjectTechStackScalarFieldEnum
    having?: ProjectTechStackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectTechStackCountAggregateInputType | true
    _min?: ProjectTechStackMinAggregateInputType
    _max?: ProjectTechStackMaxAggregateInputType
  }

  export type ProjectTechStackGroupByOutputType = {
    projectId: string
    techStackId: string
    _count: ProjectTechStackCountAggregateOutputType | null
    _min: ProjectTechStackMinAggregateOutputType | null
    _max: ProjectTechStackMaxAggregateOutputType | null
  }

  type GetProjectTechStackGroupByPayload<T extends ProjectTechStackGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ProjectTechStackGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ProjectTechStackGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectTechStackGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectTechStackGroupByOutputType[P]>
        }
      >
    >

  export type ProjectTechStackSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      projectId?: boolean
      techStackId?: boolean
      project?: boolean | ProjectDefaultArgs<ExtArgs>
      techStack?: boolean | TechStackDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['projectTechStack']
  >

  export type ProjectTechStackSelectScalar = {
    projectId?: boolean
    techStackId?: boolean
  }

  export type ProjectTechStackOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<'projectId' | 'techStackId', ExtArgs['result']['projectTechStack']>
  export type ProjectTechStackInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    techStack?: boolean | TechStackDefaultArgs<ExtArgs>
  }

  export type $ProjectTechStackPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'ProjectTechStack'
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      techStack: Prisma.$TechStackPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<
      {
        projectId: string
        techStackId: string
      },
      ExtArgs['result']['projectTechStack']
    >
    composites: {}
  }

  type ProjectTechStackGetPayload<
    S extends boolean | null | undefined | ProjectTechStackDefaultArgs,
  > = $Result.GetResult<Prisma.$ProjectTechStackPayload, S>

  type ProjectTechStackCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ProjectTechStackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProjectTechStackCountAggregateInputType | true
  }

  export interface ProjectTechStackDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['ProjectTechStack']
      meta: { name: 'ProjectTechStack' }
    }
    /**
     * Find zero or one ProjectTechStack that matches the filter.
     * @param {ProjectTechStackFindUniqueArgs} args - Arguments to find a ProjectTechStack
     * @example
     * // Get one ProjectTechStack
     * const projectTechStack = await prisma.projectTechStack.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectTechStackFindUniqueArgs>(
      args: SelectSubset<T, ProjectTechStackFindUniqueArgs<ExtArgs>>
    ): Prisma__ProjectTechStackClient<
      $Result.GetResult<
        Prisma.$ProjectTechStackPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one ProjectTechStack that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectTechStackFindUniqueOrThrowArgs} args - Arguments to find a ProjectTechStack
     * @example
     * // Get one ProjectTechStack
     * const projectTechStack = await prisma.projectTechStack.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectTechStackFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ProjectTechStackFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectTechStackClient<
      $Result.GetResult<
        Prisma.$ProjectTechStackPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first ProjectTechStack that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechStackFindFirstArgs} args - Arguments to find a ProjectTechStack
     * @example
     * // Get one ProjectTechStack
     * const projectTechStack = await prisma.projectTechStack.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectTechStackFindFirstArgs>(
      args?: SelectSubset<T, ProjectTechStackFindFirstArgs<ExtArgs>>
    ): Prisma__ProjectTechStackClient<
      $Result.GetResult<
        Prisma.$ProjectTechStackPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first ProjectTechStack that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechStackFindFirstOrThrowArgs} args - Arguments to find a ProjectTechStack
     * @example
     * // Get one ProjectTechStack
     * const projectTechStack = await prisma.projectTechStack.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectTechStackFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProjectTechStackFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectTechStackClient<
      $Result.GetResult<
        Prisma.$ProjectTechStackPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more ProjectTechStacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechStackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectTechStacks
     * const projectTechStacks = await prisma.projectTechStack.findMany()
     *
     * // Get first 10 ProjectTechStacks
     * const projectTechStacks = await prisma.projectTechStack.findMany({ take: 10 })
     *
     * // Only select the `projectId`
     * const projectTechStackWithProjectIdOnly = await prisma.projectTechStack.findMany({ select: { projectId: true } })
     *
     */
    findMany<T extends ProjectTechStackFindManyArgs>(
      args?: SelectSubset<T, ProjectTechStackFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ProjectTechStackPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >

    /**
     * Create a ProjectTechStack.
     * @param {ProjectTechStackCreateArgs} args - Arguments to create a ProjectTechStack.
     * @example
     * // Create one ProjectTechStack
     * const ProjectTechStack = await prisma.projectTechStack.create({
     *   data: {
     *     // ... data to create a ProjectTechStack
     *   }
     * })
     *
     */
    create<T extends ProjectTechStackCreateArgs>(
      args: SelectSubset<T, ProjectTechStackCreateArgs<ExtArgs>>
    ): Prisma__ProjectTechStackClient<
      $Result.GetResult<Prisma.$ProjectTechStackPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many ProjectTechStacks.
     * @param {ProjectTechStackCreateManyArgs} args - Arguments to create many ProjectTechStacks.
     * @example
     * // Create many ProjectTechStacks
     * const projectTechStack = await prisma.projectTechStack.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProjectTechStackCreateManyArgs>(
      args?: SelectSubset<T, ProjectTechStackCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProjectTechStack.
     * @param {ProjectTechStackDeleteArgs} args - Arguments to delete one ProjectTechStack.
     * @example
     * // Delete one ProjectTechStack
     * const ProjectTechStack = await prisma.projectTechStack.delete({
     *   where: {
     *     // ... filter to delete one ProjectTechStack
     *   }
     * })
     *
     */
    delete<T extends ProjectTechStackDeleteArgs>(
      args: SelectSubset<T, ProjectTechStackDeleteArgs<ExtArgs>>
    ): Prisma__ProjectTechStackClient<
      $Result.GetResult<Prisma.$ProjectTechStackPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one ProjectTechStack.
     * @param {ProjectTechStackUpdateArgs} args - Arguments to update one ProjectTechStack.
     * @example
     * // Update one ProjectTechStack
     * const projectTechStack = await prisma.projectTechStack.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProjectTechStackUpdateArgs>(
      args: SelectSubset<T, ProjectTechStackUpdateArgs<ExtArgs>>
    ): Prisma__ProjectTechStackClient<
      $Result.GetResult<Prisma.$ProjectTechStackPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more ProjectTechStacks.
     * @param {ProjectTechStackDeleteManyArgs} args - Arguments to filter ProjectTechStacks to delete.
     * @example
     * // Delete a few ProjectTechStacks
     * const { count } = await prisma.projectTechStack.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProjectTechStackDeleteManyArgs>(
      args?: SelectSubset<T, ProjectTechStackDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectTechStacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechStackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectTechStacks
     * const projectTechStack = await prisma.projectTechStack.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProjectTechStackUpdateManyArgs>(
      args: SelectSubset<T, ProjectTechStackUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectTechStack.
     * @param {ProjectTechStackUpsertArgs} args - Arguments to update or create a ProjectTechStack.
     * @example
     * // Update or create a ProjectTechStack
     * const projectTechStack = await prisma.projectTechStack.upsert({
     *   create: {
     *     // ... data to create a ProjectTechStack
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectTechStack we want to update
     *   }
     * })
     */
    upsert<T extends ProjectTechStackUpsertArgs>(
      args: SelectSubset<T, ProjectTechStackUpsertArgs<ExtArgs>>
    ): Prisma__ProjectTechStackClient<
      $Result.GetResult<Prisma.$ProjectTechStackPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of ProjectTechStacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechStackCountArgs} args - Arguments to filter ProjectTechStacks to count.
     * @example
     * // Count the number of ProjectTechStacks
     * const count = await prisma.projectTechStack.count({
     *   where: {
     *     // ... the filter for the ProjectTechStacks we want to count
     *   }
     * })
     **/
    count<T extends ProjectTechStackCountArgs>(
      args?: Subset<T, ProjectTechStackCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectTechStackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectTechStack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechStackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectTechStackAggregateArgs>(
      args: Subset<T, ProjectTechStackAggregateArgs>
    ): Prisma.PrismaPromise<GetProjectTechStackAggregateType<T>>

    /**
     * Group by ProjectTechStack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTechStackGroupByArgs} args - Group by arguments.
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
      T extends ProjectTechStackGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectTechStackGroupByArgs['orderBy'] }
        : { orderBy?: ProjectTechStackGroupByArgs['orderBy'] },
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
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
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
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ProjectTechStackGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetProjectTechStackGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the ProjectTechStack model
     */
    readonly fields: ProjectTechStackFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectTechStack.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectTechStackClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProjectDefaultArgs<ExtArgs>>
    ): Prisma__ProjectClient<
      | $Result.GetResult<
          Prisma.$ProjectPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    techStack<T extends TechStackDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, TechStackDefaultArgs<ExtArgs>>
    ): Prisma__TechStackClient<
      | $Result.GetResult<
          Prisma.$TechStackPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the ProjectTechStack model
   */
  interface ProjectTechStackFieldRefs {
    readonly projectId: FieldRef<'ProjectTechStack', 'String'>
    readonly techStackId: FieldRef<'ProjectTechStack', 'String'>
  }

  // Custom InputTypes
  /**
   * ProjectTechStack findUnique
   */
  export type ProjectTechStackFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectTechStack
     */
    select?: ProjectTechStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechStack
     */
    omit?: ProjectTechStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechStackInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTechStack to fetch.
     */
    where: ProjectTechStackWhereUniqueInput
  }

  /**
   * ProjectTechStack findUniqueOrThrow
   */
  export type ProjectTechStackFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectTechStack
     */
    select?: ProjectTechStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechStack
     */
    omit?: ProjectTechStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechStackInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTechStack to fetch.
     */
    where: ProjectTechStackWhereUniqueInput
  }

  /**
   * ProjectTechStack findFirst
   */
  export type ProjectTechStackFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectTechStack
     */
    select?: ProjectTechStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechStack
     */
    omit?: ProjectTechStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechStackInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTechStack to fetch.
     */
    where?: ProjectTechStackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProjectTechStacks to fetch.
     */
    orderBy?: ProjectTechStackOrderByWithRelationInput | ProjectTechStackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProjectTechStacks.
     */
    cursor?: ProjectTechStackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProjectTechStacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProjectTechStacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProjectTechStacks.
     */
    distinct?: ProjectTechStackScalarFieldEnum | ProjectTechStackScalarFieldEnum[]
  }

  /**
   * ProjectTechStack findFirstOrThrow
   */
  export type ProjectTechStackFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectTechStack
     */
    select?: ProjectTechStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechStack
     */
    omit?: ProjectTechStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechStackInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTechStack to fetch.
     */
    where?: ProjectTechStackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProjectTechStacks to fetch.
     */
    orderBy?: ProjectTechStackOrderByWithRelationInput | ProjectTechStackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProjectTechStacks.
     */
    cursor?: ProjectTechStackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProjectTechStacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProjectTechStacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProjectTechStacks.
     */
    distinct?: ProjectTechStackScalarFieldEnum | ProjectTechStackScalarFieldEnum[]
  }

  /**
   * ProjectTechStack findMany
   */
  export type ProjectTechStackFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectTechStack
     */
    select?: ProjectTechStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechStack
     */
    omit?: ProjectTechStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechStackInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTechStacks to fetch.
     */
    where?: ProjectTechStackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProjectTechStacks to fetch.
     */
    orderBy?: ProjectTechStackOrderByWithRelationInput | ProjectTechStackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ProjectTechStacks.
     */
    cursor?: ProjectTechStackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProjectTechStacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProjectTechStacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProjectTechStacks.
     */
    distinct?: ProjectTechStackScalarFieldEnum | ProjectTechStackScalarFieldEnum[]
  }

  /**
   * ProjectTechStack create
   */
  export type ProjectTechStackCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectTechStack
     */
    select?: ProjectTechStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechStack
     */
    omit?: ProjectTechStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechStackInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectTechStack.
     */
    data: XOR<ProjectTechStackCreateInput, ProjectTechStackUncheckedCreateInput>
  }

  /**
   * ProjectTechStack createMany
   */
  export type ProjectTechStackCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many ProjectTechStacks.
     */
    data: ProjectTechStackCreateManyInput | ProjectTechStackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectTechStack update
   */
  export type ProjectTechStackUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectTechStack
     */
    select?: ProjectTechStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechStack
     */
    omit?: ProjectTechStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechStackInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectTechStack.
     */
    data: XOR<ProjectTechStackUpdateInput, ProjectTechStackUncheckedUpdateInput>
    /**
     * Choose, which ProjectTechStack to update.
     */
    where: ProjectTechStackWhereUniqueInput
  }

  /**
   * ProjectTechStack updateMany
   */
  export type ProjectTechStackUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update ProjectTechStacks.
     */
    data: XOR<ProjectTechStackUpdateManyMutationInput, ProjectTechStackUncheckedUpdateManyInput>
    /**
     * Filter which ProjectTechStacks to update
     */
    where?: ProjectTechStackWhereInput
    /**
     * Limit how many ProjectTechStacks to update.
     */
    limit?: number
  }

  /**
   * ProjectTechStack upsert
   */
  export type ProjectTechStackUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectTechStack
     */
    select?: ProjectTechStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechStack
     */
    omit?: ProjectTechStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechStackInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectTechStack to update in case it exists.
     */
    where: ProjectTechStackWhereUniqueInput
    /**
     * In case the ProjectTechStack found by the `where` argument doesn't exist, create a new ProjectTechStack with this data.
     */
    create: XOR<ProjectTechStackCreateInput, ProjectTechStackUncheckedCreateInput>
    /**
     * In case the ProjectTechStack was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectTechStackUpdateInput, ProjectTechStackUncheckedUpdateInput>
  }

  /**
   * ProjectTechStack delete
   */
  export type ProjectTechStackDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectTechStack
     */
    select?: ProjectTechStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechStack
     */
    omit?: ProjectTechStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechStackInclude<ExtArgs> | null
    /**
     * Filter which ProjectTechStack to delete.
     */
    where: ProjectTechStackWhereUniqueInput
  }

  /**
   * ProjectTechStack deleteMany
   */
  export type ProjectTechStackDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ProjectTechStacks to delete
     */
    where?: ProjectTechStackWhereInput
    /**
     * Limit how many ProjectTechStacks to delete.
     */
    limit?: number
  }

  /**
   * ProjectTechStack without action
   */
  export type ProjectTechStackDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectTechStack
     */
    select?: ProjectTechStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechStack
     */
    omit?: ProjectTechStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechStackInclude<ExtArgs> | null
  }

  /**
   * Model TechStack
   */

  export type AggregateTechStack = {
    _count: TechStackCountAggregateOutputType | null
    _min: TechStackMinAggregateOutputType | null
    _max: TechStackMaxAggregateOutputType | null
  }

  export type TechStackMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TechStackMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TechStackCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }

  export type TechStackMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TechStackMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TechStackCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TechStackAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which TechStack to aggregate.
     */
    where?: TechStackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TechStacks to fetch.
     */
    orderBy?: TechStackOrderByWithRelationInput | TechStackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TechStackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TechStacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TechStacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TechStacks
     **/
    _count?: true | TechStackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TechStackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TechStackMaxAggregateInputType
  }

  export type GetTechStackAggregateType<T extends TechStackAggregateArgs> = {
    [P in keyof T & keyof AggregateTechStack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTechStack[P]>
      : GetScalarType<T[P], AggregateTechStack[P]>
  }

  export type TechStackGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TechStackWhereInput
    orderBy?: TechStackOrderByWithAggregationInput | TechStackOrderByWithAggregationInput[]
    by: TechStackScalarFieldEnum[] | TechStackScalarFieldEnum
    having?: TechStackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TechStackCountAggregateInputType | true
    _min?: TechStackMinAggregateInputType
    _max?: TechStackMaxAggregateInputType
  }

  export type TechStackGroupByOutputType = {
    id: string
    name: string
    _count: TechStackCountAggregateOutputType | null
    _min: TechStackMinAggregateOutputType | null
    _max: TechStackMaxAggregateOutputType | null
  }

  type GetTechStackGroupByPayload<T extends TechStackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TechStackGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TechStackGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TechStackGroupByOutputType[P]>
          : GetScalarType<T[P], TechStackGroupByOutputType[P]>
      }
    >
  >

  export type TechStackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean
        name?: boolean
        projects?: boolean | TechStack$projectsArgs<ExtArgs>
        _count?: boolean | TechStackCountOutputTypeDefaultArgs<ExtArgs>
      },
      ExtArgs['result']['techStack']
    >

  export type TechStackSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TechStackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<'id' | 'name', ExtArgs['result']['techStack']>
  export type TechStackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      projects?: boolean | TechStack$projectsArgs<ExtArgs>
      _count?: boolean | TechStackCountOutputTypeDefaultArgs<ExtArgs>
    }

  export type $TechStackPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'TechStack'
    objects: {
      projects: Prisma.$ProjectTechStackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        name: string
      },
      ExtArgs['result']['techStack']
    >
    composites: {}
  }

  type TechStackGetPayload<S extends boolean | null | undefined | TechStackDefaultArgs> =
    $Result.GetResult<Prisma.$TechStackPayload, S>

  type TechStackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TechStackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TechStackCountAggregateInputType | true
    }

  export interface TechStackDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['TechStack']
      meta: { name: 'TechStack' }
    }
    /**
     * Find zero or one TechStack that matches the filter.
     * @param {TechStackFindUniqueArgs} args - Arguments to find a TechStack
     * @example
     * // Get one TechStack
     * const techStack = await prisma.techStack.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TechStackFindUniqueArgs>(
      args: SelectSubset<T, TechStackFindUniqueArgs<ExtArgs>>
    ): Prisma__TechStackClient<
      $Result.GetResult<
        Prisma.$TechStackPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one TechStack that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TechStackFindUniqueOrThrowArgs} args - Arguments to find a TechStack
     * @example
     * // Get one TechStack
     * const techStack = await prisma.techStack.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TechStackFindUniqueOrThrowArgs>(
      args: SelectSubset<T, TechStackFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TechStackClient<
      $Result.GetResult<
        Prisma.$TechStackPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first TechStack that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechStackFindFirstArgs} args - Arguments to find a TechStack
     * @example
     * // Get one TechStack
     * const techStack = await prisma.techStack.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TechStackFindFirstArgs>(
      args?: SelectSubset<T, TechStackFindFirstArgs<ExtArgs>>
    ): Prisma__TechStackClient<
      $Result.GetResult<
        Prisma.$TechStackPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first TechStack that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechStackFindFirstOrThrowArgs} args - Arguments to find a TechStack
     * @example
     * // Get one TechStack
     * const techStack = await prisma.techStack.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TechStackFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TechStackFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TechStackClient<
      $Result.GetResult<
        Prisma.$TechStackPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more TechStacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechStackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TechStacks
     * const techStacks = await prisma.techStack.findMany()
     *
     * // Get first 10 TechStacks
     * const techStacks = await prisma.techStack.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const techStackWithIdOnly = await prisma.techStack.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TechStackFindManyArgs>(
      args?: SelectSubset<T, TechStackFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$TechStackPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >

    /**
     * Create a TechStack.
     * @param {TechStackCreateArgs} args - Arguments to create a TechStack.
     * @example
     * // Create one TechStack
     * const TechStack = await prisma.techStack.create({
     *   data: {
     *     // ... data to create a TechStack
     *   }
     * })
     *
     */
    create<T extends TechStackCreateArgs>(
      args: SelectSubset<T, TechStackCreateArgs<ExtArgs>>
    ): Prisma__TechStackClient<
      $Result.GetResult<Prisma.$TechStackPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many TechStacks.
     * @param {TechStackCreateManyArgs} args - Arguments to create many TechStacks.
     * @example
     * // Create many TechStacks
     * const techStack = await prisma.techStack.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TechStackCreateManyArgs>(
      args?: SelectSubset<T, TechStackCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TechStack.
     * @param {TechStackDeleteArgs} args - Arguments to delete one TechStack.
     * @example
     * // Delete one TechStack
     * const TechStack = await prisma.techStack.delete({
     *   where: {
     *     // ... filter to delete one TechStack
     *   }
     * })
     *
     */
    delete<T extends TechStackDeleteArgs>(
      args: SelectSubset<T, TechStackDeleteArgs<ExtArgs>>
    ): Prisma__TechStackClient<
      $Result.GetResult<Prisma.$TechStackPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one TechStack.
     * @param {TechStackUpdateArgs} args - Arguments to update one TechStack.
     * @example
     * // Update one TechStack
     * const techStack = await prisma.techStack.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TechStackUpdateArgs>(
      args: SelectSubset<T, TechStackUpdateArgs<ExtArgs>>
    ): Prisma__TechStackClient<
      $Result.GetResult<Prisma.$TechStackPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more TechStacks.
     * @param {TechStackDeleteManyArgs} args - Arguments to filter TechStacks to delete.
     * @example
     * // Delete a few TechStacks
     * const { count } = await prisma.techStack.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TechStackDeleteManyArgs>(
      args?: SelectSubset<T, TechStackDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TechStacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechStackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TechStacks
     * const techStack = await prisma.techStack.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TechStackUpdateManyArgs>(
      args: SelectSubset<T, TechStackUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TechStack.
     * @param {TechStackUpsertArgs} args - Arguments to update or create a TechStack.
     * @example
     * // Update or create a TechStack
     * const techStack = await prisma.techStack.upsert({
     *   create: {
     *     // ... data to create a TechStack
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TechStack we want to update
     *   }
     * })
     */
    upsert<T extends TechStackUpsertArgs>(
      args: SelectSubset<T, TechStackUpsertArgs<ExtArgs>>
    ): Prisma__TechStackClient<
      $Result.GetResult<Prisma.$TechStackPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of TechStacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechStackCountArgs} args - Arguments to filter TechStacks to count.
     * @example
     * // Count the number of TechStacks
     * const count = await prisma.techStack.count({
     *   where: {
     *     // ... the filter for the TechStacks we want to count
     *   }
     * })
     **/
    count<T extends TechStackCountArgs>(
      args?: Subset<T, TechStackCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TechStackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TechStack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechStackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TechStackAggregateArgs>(
      args: Subset<T, TechStackAggregateArgs>
    ): Prisma.PrismaPromise<GetTechStackAggregateType<T>>

    /**
     * Group by TechStack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TechStackGroupByArgs} args - Group by arguments.
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
      T extends TechStackGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TechStackGroupByArgs['orderBy'] }
        : { orderBy?: TechStackGroupByArgs['orderBy'] },
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
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
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
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, TechStackGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetTechStackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the TechStack model
     */
    readonly fields: TechStackFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for TechStack.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TechStackClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    projects<T extends TechStack$projectsArgs<ExtArgs> = {}>(
      args?: Subset<T, TechStack$projectsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ProjectTechStackPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the TechStack model
   */
  interface TechStackFieldRefs {
    readonly id: FieldRef<'TechStack', 'String'>
    readonly name: FieldRef<'TechStack', 'String'>
  }

  // Custom InputTypes
  /**
   * TechStack findUnique
   */
  export type TechStackFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TechStack
     */
    select?: TechStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechStack
     */
    omit?: TechStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechStackInclude<ExtArgs> | null
    /**
     * Filter, which TechStack to fetch.
     */
    where: TechStackWhereUniqueInput
  }

  /**
   * TechStack findUniqueOrThrow
   */
  export type TechStackFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TechStack
     */
    select?: TechStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechStack
     */
    omit?: TechStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechStackInclude<ExtArgs> | null
    /**
     * Filter, which TechStack to fetch.
     */
    where: TechStackWhereUniqueInput
  }

  /**
   * TechStack findFirst
   */
  export type TechStackFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TechStack
     */
    select?: TechStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechStack
     */
    omit?: TechStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechStackInclude<ExtArgs> | null
    /**
     * Filter, which TechStack to fetch.
     */
    where?: TechStackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TechStacks to fetch.
     */
    orderBy?: TechStackOrderByWithRelationInput | TechStackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TechStacks.
     */
    cursor?: TechStackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TechStacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TechStacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TechStacks.
     */
    distinct?: TechStackScalarFieldEnum | TechStackScalarFieldEnum[]
  }

  /**
   * TechStack findFirstOrThrow
   */
  export type TechStackFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TechStack
     */
    select?: TechStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechStack
     */
    omit?: TechStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechStackInclude<ExtArgs> | null
    /**
     * Filter, which TechStack to fetch.
     */
    where?: TechStackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TechStacks to fetch.
     */
    orderBy?: TechStackOrderByWithRelationInput | TechStackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TechStacks.
     */
    cursor?: TechStackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TechStacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TechStacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TechStacks.
     */
    distinct?: TechStackScalarFieldEnum | TechStackScalarFieldEnum[]
  }

  /**
   * TechStack findMany
   */
  export type TechStackFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TechStack
     */
    select?: TechStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechStack
     */
    omit?: TechStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechStackInclude<ExtArgs> | null
    /**
     * Filter, which TechStacks to fetch.
     */
    where?: TechStackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TechStacks to fetch.
     */
    orderBy?: TechStackOrderByWithRelationInput | TechStackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TechStacks.
     */
    cursor?: TechStackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TechStacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TechStacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TechStacks.
     */
    distinct?: TechStackScalarFieldEnum | TechStackScalarFieldEnum[]
  }

  /**
   * TechStack create
   */
  export type TechStackCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TechStack
     */
    select?: TechStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechStack
     */
    omit?: TechStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechStackInclude<ExtArgs> | null
    /**
     * The data needed to create a TechStack.
     */
    data: XOR<TechStackCreateInput, TechStackUncheckedCreateInput>
  }

  /**
   * TechStack createMany
   */
  export type TechStackCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many TechStacks.
     */
    data: TechStackCreateManyInput | TechStackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TechStack update
   */
  export type TechStackUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TechStack
     */
    select?: TechStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechStack
     */
    omit?: TechStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechStackInclude<ExtArgs> | null
    /**
     * The data needed to update a TechStack.
     */
    data: XOR<TechStackUpdateInput, TechStackUncheckedUpdateInput>
    /**
     * Choose, which TechStack to update.
     */
    where: TechStackWhereUniqueInput
  }

  /**
   * TechStack updateMany
   */
  export type TechStackUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update TechStacks.
     */
    data: XOR<TechStackUpdateManyMutationInput, TechStackUncheckedUpdateManyInput>
    /**
     * Filter which TechStacks to update
     */
    where?: TechStackWhereInput
    /**
     * Limit how many TechStacks to update.
     */
    limit?: number
  }

  /**
   * TechStack upsert
   */
  export type TechStackUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TechStack
     */
    select?: TechStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechStack
     */
    omit?: TechStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechStackInclude<ExtArgs> | null
    /**
     * The filter to search for the TechStack to update in case it exists.
     */
    where: TechStackWhereUniqueInput
    /**
     * In case the TechStack found by the `where` argument doesn't exist, create a new TechStack with this data.
     */
    create: XOR<TechStackCreateInput, TechStackUncheckedCreateInput>
    /**
     * In case the TechStack was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TechStackUpdateInput, TechStackUncheckedUpdateInput>
  }

  /**
   * TechStack delete
   */
  export type TechStackDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TechStack
     */
    select?: TechStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechStack
     */
    omit?: TechStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechStackInclude<ExtArgs> | null
    /**
     * Filter which TechStack to delete.
     */
    where: TechStackWhereUniqueInput
  }

  /**
   * TechStack deleteMany
   */
  export type TechStackDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which TechStacks to delete
     */
    where?: TechStackWhereInput
    /**
     * Limit how many TechStacks to delete.
     */
    limit?: number
  }

  /**
   * TechStack.projects
   */
  export type TechStack$projectsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectTechStack
     */
    select?: ProjectTechStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTechStack
     */
    omit?: ProjectTechStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTechStackInclude<ExtArgs> | null
    where?: ProjectTechStackWhereInput
    orderBy?: ProjectTechStackOrderByWithRelationInput | ProjectTechStackOrderByWithRelationInput[]
    cursor?: ProjectTechStackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectTechStackScalarFieldEnum | ProjectTechStackScalarFieldEnum[]
  }

  /**
   * TechStack without action
   */
  export type TechStackDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TechStack
     */
    select?: TechStackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TechStack
     */
    omit?: TechStackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TechStackInclude<ExtArgs> | null
  }

  /**
   * Model ProjectLanguage
   */

  export type AggregateProjectLanguage = {
    _count: ProjectLanguageCountAggregateOutputType | null
    _min: ProjectLanguageMinAggregateOutputType | null
    _max: ProjectLanguageMaxAggregateOutputType | null
  }

  export type ProjectLanguageMinAggregateOutputType = {
    projectId: string | null
    languageId: string | null
  }

  export type ProjectLanguageMaxAggregateOutputType = {
    projectId: string | null
    languageId: string | null
  }

  export type ProjectLanguageCountAggregateOutputType = {
    projectId: number
    languageId: number
    _all: number
  }

  export type ProjectLanguageMinAggregateInputType = {
    projectId?: true
    languageId?: true
  }

  export type ProjectLanguageMaxAggregateInputType = {
    projectId?: true
    languageId?: true
  }

  export type ProjectLanguageCountAggregateInputType = {
    projectId?: true
    languageId?: true
    _all?: true
  }

  export type ProjectLanguageAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ProjectLanguage to aggregate.
     */
    where?: ProjectLanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProjectLanguages to fetch.
     */
    orderBy?: ProjectLanguageOrderByWithRelationInput | ProjectLanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ProjectLanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProjectLanguages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProjectLanguages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ProjectLanguages
     **/
    _count?: true | ProjectLanguageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProjectLanguageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProjectLanguageMaxAggregateInputType
  }

  export type GetProjectLanguageAggregateType<T extends ProjectLanguageAggregateArgs> = {
    [P in keyof T & keyof AggregateProjectLanguage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectLanguage[P]>
      : GetScalarType<T[P], AggregateProjectLanguage[P]>
  }

  export type ProjectLanguageGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProjectLanguageWhereInput
    orderBy?:
      | ProjectLanguageOrderByWithAggregationInput
      | ProjectLanguageOrderByWithAggregationInput[]
    by: ProjectLanguageScalarFieldEnum[] | ProjectLanguageScalarFieldEnum
    having?: ProjectLanguageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectLanguageCountAggregateInputType | true
    _min?: ProjectLanguageMinAggregateInputType
    _max?: ProjectLanguageMaxAggregateInputType
  }

  export type ProjectLanguageGroupByOutputType = {
    projectId: string
    languageId: string
    _count: ProjectLanguageCountAggregateOutputType | null
    _min: ProjectLanguageMinAggregateOutputType | null
    _max: ProjectLanguageMaxAggregateOutputType | null
  }

  type GetProjectLanguageGroupByPayload<T extends ProjectLanguageGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ProjectLanguageGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ProjectLanguageGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectLanguageGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectLanguageGroupByOutputType[P]>
        }
      >
    >

  export type ProjectLanguageSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      projectId?: boolean
      languageId?: boolean
      project?: boolean | ProjectDefaultArgs<ExtArgs>
      language?: boolean | LanguageDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['projectLanguage']
  >

  export type ProjectLanguageSelectScalar = {
    projectId?: boolean
    languageId?: boolean
  }

  export type ProjectLanguageOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<'projectId' | 'languageId', ExtArgs['result']['projectLanguage']>
  export type ProjectLanguageInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }

  export type $ProjectLanguagePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'ProjectLanguage'
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      language: Prisma.$LanguagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<
      {
        projectId: string
        languageId: string
      },
      ExtArgs['result']['projectLanguage']
    >
    composites: {}
  }

  type ProjectLanguageGetPayload<
    S extends boolean | null | undefined | ProjectLanguageDefaultArgs,
  > = $Result.GetResult<Prisma.$ProjectLanguagePayload, S>

  type ProjectLanguageCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ProjectLanguageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProjectLanguageCountAggregateInputType | true
  }

  export interface ProjectLanguageDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['ProjectLanguage']
      meta: { name: 'ProjectLanguage' }
    }
    /**
     * Find zero or one ProjectLanguage that matches the filter.
     * @param {ProjectLanguageFindUniqueArgs} args - Arguments to find a ProjectLanguage
     * @example
     * // Get one ProjectLanguage
     * const projectLanguage = await prisma.projectLanguage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectLanguageFindUniqueArgs>(
      args: SelectSubset<T, ProjectLanguageFindUniqueArgs<ExtArgs>>
    ): Prisma__ProjectLanguageClient<
      $Result.GetResult<
        Prisma.$ProjectLanguagePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one ProjectLanguage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectLanguageFindUniqueOrThrowArgs} args - Arguments to find a ProjectLanguage
     * @example
     * // Get one ProjectLanguage
     * const projectLanguage = await prisma.projectLanguage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectLanguageFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ProjectLanguageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectLanguageClient<
      $Result.GetResult<
        Prisma.$ProjectLanguagePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first ProjectLanguage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectLanguageFindFirstArgs} args - Arguments to find a ProjectLanguage
     * @example
     * // Get one ProjectLanguage
     * const projectLanguage = await prisma.projectLanguage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectLanguageFindFirstArgs>(
      args?: SelectSubset<T, ProjectLanguageFindFirstArgs<ExtArgs>>
    ): Prisma__ProjectLanguageClient<
      $Result.GetResult<
        Prisma.$ProjectLanguagePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first ProjectLanguage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectLanguageFindFirstOrThrowArgs} args - Arguments to find a ProjectLanguage
     * @example
     * // Get one ProjectLanguage
     * const projectLanguage = await prisma.projectLanguage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectLanguageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProjectLanguageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectLanguageClient<
      $Result.GetResult<
        Prisma.$ProjectLanguagePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more ProjectLanguages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectLanguageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectLanguages
     * const projectLanguages = await prisma.projectLanguage.findMany()
     *
     * // Get first 10 ProjectLanguages
     * const projectLanguages = await prisma.projectLanguage.findMany({ take: 10 })
     *
     * // Only select the `projectId`
     * const projectLanguageWithProjectIdOnly = await prisma.projectLanguage.findMany({ select: { projectId: true } })
     *
     */
    findMany<T extends ProjectLanguageFindManyArgs>(
      args?: SelectSubset<T, ProjectLanguageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$ProjectLanguagePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >

    /**
     * Create a ProjectLanguage.
     * @param {ProjectLanguageCreateArgs} args - Arguments to create a ProjectLanguage.
     * @example
     * // Create one ProjectLanguage
     * const ProjectLanguage = await prisma.projectLanguage.create({
     *   data: {
     *     // ... data to create a ProjectLanguage
     *   }
     * })
     *
     */
    create<T extends ProjectLanguageCreateArgs>(
      args: SelectSubset<T, ProjectLanguageCreateArgs<ExtArgs>>
    ): Prisma__ProjectLanguageClient<
      $Result.GetResult<Prisma.$ProjectLanguagePayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many ProjectLanguages.
     * @param {ProjectLanguageCreateManyArgs} args - Arguments to create many ProjectLanguages.
     * @example
     * // Create many ProjectLanguages
     * const projectLanguage = await prisma.projectLanguage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProjectLanguageCreateManyArgs>(
      args?: SelectSubset<T, ProjectLanguageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProjectLanguage.
     * @param {ProjectLanguageDeleteArgs} args - Arguments to delete one ProjectLanguage.
     * @example
     * // Delete one ProjectLanguage
     * const ProjectLanguage = await prisma.projectLanguage.delete({
     *   where: {
     *     // ... filter to delete one ProjectLanguage
     *   }
     * })
     *
     */
    delete<T extends ProjectLanguageDeleteArgs>(
      args: SelectSubset<T, ProjectLanguageDeleteArgs<ExtArgs>>
    ): Prisma__ProjectLanguageClient<
      $Result.GetResult<Prisma.$ProjectLanguagePayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one ProjectLanguage.
     * @param {ProjectLanguageUpdateArgs} args - Arguments to update one ProjectLanguage.
     * @example
     * // Update one ProjectLanguage
     * const projectLanguage = await prisma.projectLanguage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProjectLanguageUpdateArgs>(
      args: SelectSubset<T, ProjectLanguageUpdateArgs<ExtArgs>>
    ): Prisma__ProjectLanguageClient<
      $Result.GetResult<Prisma.$ProjectLanguagePayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more ProjectLanguages.
     * @param {ProjectLanguageDeleteManyArgs} args - Arguments to filter ProjectLanguages to delete.
     * @example
     * // Delete a few ProjectLanguages
     * const { count } = await prisma.projectLanguage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProjectLanguageDeleteManyArgs>(
      args?: SelectSubset<T, ProjectLanguageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectLanguages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectLanguageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectLanguages
     * const projectLanguage = await prisma.projectLanguage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProjectLanguageUpdateManyArgs>(
      args: SelectSubset<T, ProjectLanguageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectLanguage.
     * @param {ProjectLanguageUpsertArgs} args - Arguments to update or create a ProjectLanguage.
     * @example
     * // Update or create a ProjectLanguage
     * const projectLanguage = await prisma.projectLanguage.upsert({
     *   create: {
     *     // ... data to create a ProjectLanguage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectLanguage we want to update
     *   }
     * })
     */
    upsert<T extends ProjectLanguageUpsertArgs>(
      args: SelectSubset<T, ProjectLanguageUpsertArgs<ExtArgs>>
    ): Prisma__ProjectLanguageClient<
      $Result.GetResult<Prisma.$ProjectLanguagePayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of ProjectLanguages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectLanguageCountArgs} args - Arguments to filter ProjectLanguages to count.
     * @example
     * // Count the number of ProjectLanguages
     * const count = await prisma.projectLanguage.count({
     *   where: {
     *     // ... the filter for the ProjectLanguages we want to count
     *   }
     * })
     **/
    count<T extends ProjectLanguageCountArgs>(
      args?: Subset<T, ProjectLanguageCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectLanguageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectLanguage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectLanguageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectLanguageAggregateArgs>(
      args: Subset<T, ProjectLanguageAggregateArgs>
    ): Prisma.PrismaPromise<GetProjectLanguageAggregateType<T>>

    /**
     * Group by ProjectLanguage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectLanguageGroupByArgs} args - Group by arguments.
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
      T extends ProjectLanguageGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectLanguageGroupByArgs['orderBy'] }
        : { orderBy?: ProjectLanguageGroupByArgs['orderBy'] },
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
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
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
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ProjectLanguageGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetProjectLanguageGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the ProjectLanguage model
     */
    readonly fields: ProjectLanguageFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectLanguage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectLanguageClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProjectDefaultArgs<ExtArgs>>
    ): Prisma__ProjectClient<
      | $Result.GetResult<
          Prisma.$ProjectPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    language<T extends LanguageDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, LanguageDefaultArgs<ExtArgs>>
    ): Prisma__LanguageClient<
      | $Result.GetResult<
          Prisma.$LanguagePayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the ProjectLanguage model
   */
  interface ProjectLanguageFieldRefs {
    readonly projectId: FieldRef<'ProjectLanguage', 'String'>
    readonly languageId: FieldRef<'ProjectLanguage', 'String'>
  }

  // Custom InputTypes
  /**
   * ProjectLanguage findUnique
   */
  export type ProjectLanguageFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageInclude<ExtArgs> | null
    /**
     * Filter, which ProjectLanguage to fetch.
     */
    where: ProjectLanguageWhereUniqueInput
  }

  /**
   * ProjectLanguage findUniqueOrThrow
   */
  export type ProjectLanguageFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageInclude<ExtArgs> | null
    /**
     * Filter, which ProjectLanguage to fetch.
     */
    where: ProjectLanguageWhereUniqueInput
  }

  /**
   * ProjectLanguage findFirst
   */
  export type ProjectLanguageFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageInclude<ExtArgs> | null
    /**
     * Filter, which ProjectLanguage to fetch.
     */
    where?: ProjectLanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProjectLanguages to fetch.
     */
    orderBy?: ProjectLanguageOrderByWithRelationInput | ProjectLanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProjectLanguages.
     */
    cursor?: ProjectLanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProjectLanguages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProjectLanguages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProjectLanguages.
     */
    distinct?: ProjectLanguageScalarFieldEnum | ProjectLanguageScalarFieldEnum[]
  }

  /**
   * ProjectLanguage findFirstOrThrow
   */
  export type ProjectLanguageFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageInclude<ExtArgs> | null
    /**
     * Filter, which ProjectLanguage to fetch.
     */
    where?: ProjectLanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProjectLanguages to fetch.
     */
    orderBy?: ProjectLanguageOrderByWithRelationInput | ProjectLanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProjectLanguages.
     */
    cursor?: ProjectLanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProjectLanguages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProjectLanguages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProjectLanguages.
     */
    distinct?: ProjectLanguageScalarFieldEnum | ProjectLanguageScalarFieldEnum[]
  }

  /**
   * ProjectLanguage findMany
   */
  export type ProjectLanguageFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageInclude<ExtArgs> | null
    /**
     * Filter, which ProjectLanguages to fetch.
     */
    where?: ProjectLanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProjectLanguages to fetch.
     */
    orderBy?: ProjectLanguageOrderByWithRelationInput | ProjectLanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ProjectLanguages.
     */
    cursor?: ProjectLanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProjectLanguages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProjectLanguages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProjectLanguages.
     */
    distinct?: ProjectLanguageScalarFieldEnum | ProjectLanguageScalarFieldEnum[]
  }

  /**
   * ProjectLanguage create
   */
  export type ProjectLanguageCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectLanguage.
     */
    data: XOR<ProjectLanguageCreateInput, ProjectLanguageUncheckedCreateInput>
  }

  /**
   * ProjectLanguage createMany
   */
  export type ProjectLanguageCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many ProjectLanguages.
     */
    data: ProjectLanguageCreateManyInput | ProjectLanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectLanguage update
   */
  export type ProjectLanguageUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectLanguage.
     */
    data: XOR<ProjectLanguageUpdateInput, ProjectLanguageUncheckedUpdateInput>
    /**
     * Choose, which ProjectLanguage to update.
     */
    where: ProjectLanguageWhereUniqueInput
  }

  /**
   * ProjectLanguage updateMany
   */
  export type ProjectLanguageUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update ProjectLanguages.
     */
    data: XOR<ProjectLanguageUpdateManyMutationInput, ProjectLanguageUncheckedUpdateManyInput>
    /**
     * Filter which ProjectLanguages to update
     */
    where?: ProjectLanguageWhereInput
    /**
     * Limit how many ProjectLanguages to update.
     */
    limit?: number
  }

  /**
   * ProjectLanguage upsert
   */
  export type ProjectLanguageUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectLanguage to update in case it exists.
     */
    where: ProjectLanguageWhereUniqueInput
    /**
     * In case the ProjectLanguage found by the `where` argument doesn't exist, create a new ProjectLanguage with this data.
     */
    create: XOR<ProjectLanguageCreateInput, ProjectLanguageUncheckedCreateInput>
    /**
     * In case the ProjectLanguage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectLanguageUpdateInput, ProjectLanguageUncheckedUpdateInput>
  }

  /**
   * ProjectLanguage delete
   */
  export type ProjectLanguageDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageInclude<ExtArgs> | null
    /**
     * Filter which ProjectLanguage to delete.
     */
    where: ProjectLanguageWhereUniqueInput
  }

  /**
   * ProjectLanguage deleteMany
   */
  export type ProjectLanguageDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ProjectLanguages to delete
     */
    where?: ProjectLanguageWhereInput
    /**
     * Limit how many ProjectLanguages to delete.
     */
    limit?: number
  }

  /**
   * ProjectLanguage without action
   */
  export type ProjectLanguageDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageInclude<ExtArgs> | null
  }

  /**
   * Model Language
   */

  export type AggregateLanguage = {
    _count: LanguageCountAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  export type LanguageMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type LanguageMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type LanguageCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }

  export type LanguageMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type LanguageMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type LanguageCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type LanguageAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Language to aggregate.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Languages
     **/
    _count?: true | LanguageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: LanguageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: LanguageMaxAggregateInputType
  }

  export type GetLanguageAggregateType<T extends LanguageAggregateArgs> = {
    [P in keyof T & keyof AggregateLanguage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLanguage[P]>
      : GetScalarType<T[P], AggregateLanguage[P]>
  }

  export type LanguageGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: LanguageWhereInput
    orderBy?: LanguageOrderByWithAggregationInput | LanguageOrderByWithAggregationInput[]
    by: LanguageScalarFieldEnum[] | LanguageScalarFieldEnum
    having?: LanguageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LanguageCountAggregateInputType | true
    _min?: LanguageMinAggregateInputType
    _max?: LanguageMaxAggregateInputType
  }

  export type LanguageGroupByOutputType = {
    id: string
    name: string
    _count: LanguageCountAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  type GetLanguageGroupByPayload<T extends LanguageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LanguageGroupByOutputType, T['by']> & {
        [P in keyof T & keyof LanguageGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], LanguageGroupByOutputType[P]>
          : GetScalarType<T[P], LanguageGroupByOutputType[P]>
      }
    >
  >

  export type LanguageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean
        name?: boolean
        projects?: boolean | Language$projectsArgs<ExtArgs>
        _count?: boolean | LanguageCountOutputTypeDefaultArgs<ExtArgs>
      },
      ExtArgs['result']['language']
    >

  export type LanguageSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type LanguageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<'id' | 'name', ExtArgs['result']['language']>
  export type LanguageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      projects?: boolean | Language$projectsArgs<ExtArgs>
      _count?: boolean | LanguageCountOutputTypeDefaultArgs<ExtArgs>
    }

  export type $LanguagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      name: 'Language'
      objects: {
        projects: Prisma.$ProjectLanguagePayload<ExtArgs>[]
      }
      scalars: $Extensions.GetPayloadResult<
        {
          id: string
          name: string
        },
        ExtArgs['result']['language']
      >
      composites: {}
    }

  type LanguageGetPayload<S extends boolean | null | undefined | LanguageDefaultArgs> =
    $Result.GetResult<Prisma.$LanguagePayload, S>

  type LanguageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    LanguageFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: LanguageCountAggregateInputType | true
  }

  export interface LanguageDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Language']; meta: { name: 'Language' } }
    /**
     * Find zero or one Language that matches the filter.
     * @param {LanguageFindUniqueArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LanguageFindUniqueArgs>(
      args: SelectSubset<T, LanguageFindUniqueArgs<ExtArgs>>
    ): Prisma__LanguageClient<
      $Result.GetResult<
        Prisma.$LanguagePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one Language that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LanguageFindUniqueOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LanguageFindUniqueOrThrowArgs>(
      args: SelectSubset<T, LanguageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LanguageClient<
      $Result.GetResult<
        Prisma.$LanguagePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Language that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindFirstArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LanguageFindFirstArgs>(
      args?: SelectSubset<T, LanguageFindFirstArgs<ExtArgs>>
    ): Prisma__LanguageClient<
      $Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Language that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindFirstOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LanguageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LanguageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LanguageClient<
      $Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Languages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Languages
     * const languages = await prisma.language.findMany()
     *
     * // Get first 10 Languages
     * const languages = await prisma.language.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const languageWithIdOnly = await prisma.language.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LanguageFindManyArgs>(
      args?: SelectSubset<T, LanguageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >

    /**
     * Create a Language.
     * @param {LanguageCreateArgs} args - Arguments to create a Language.
     * @example
     * // Create one Language
     * const Language = await prisma.language.create({
     *   data: {
     *     // ... data to create a Language
     *   }
     * })
     *
     */
    create<T extends LanguageCreateArgs>(
      args: SelectSubset<T, LanguageCreateArgs<ExtArgs>>
    ): Prisma__LanguageClient<
      $Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Languages.
     * @param {LanguageCreateManyArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const language = await prisma.language.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LanguageCreateManyArgs>(
      args?: SelectSubset<T, LanguageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Language.
     * @param {LanguageDeleteArgs} args - Arguments to delete one Language.
     * @example
     * // Delete one Language
     * const Language = await prisma.language.delete({
     *   where: {
     *     // ... filter to delete one Language
     *   }
     * })
     *
     */
    delete<T extends LanguageDeleteArgs>(
      args: SelectSubset<T, LanguageDeleteArgs<ExtArgs>>
    ): Prisma__LanguageClient<
      $Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one Language.
     * @param {LanguageUpdateArgs} args - Arguments to update one Language.
     * @example
     * // Update one Language
     * const language = await prisma.language.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LanguageUpdateArgs>(
      args: SelectSubset<T, LanguageUpdateArgs<ExtArgs>>
    ): Prisma__LanguageClient<
      $Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Languages.
     * @param {LanguageDeleteManyArgs} args - Arguments to filter Languages to delete.
     * @example
     * // Delete a few Languages
     * const { count } = await prisma.language.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LanguageDeleteManyArgs>(
      args?: SelectSubset<T, LanguageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Languages
     * const language = await prisma.language.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LanguageUpdateManyArgs>(
      args: SelectSubset<T, LanguageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Language.
     * @param {LanguageUpsertArgs} args - Arguments to update or create a Language.
     * @example
     * // Update or create a Language
     * const language = await prisma.language.upsert({
     *   create: {
     *     // ... data to create a Language
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Language we want to update
     *   }
     * })
     */
    upsert<T extends LanguageUpsertArgs>(
      args: SelectSubset<T, LanguageUpsertArgs<ExtArgs>>
    ): Prisma__LanguageClient<
      $Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageCountArgs} args - Arguments to filter Languages to count.
     * @example
     * // Count the number of Languages
     * const count = await prisma.language.count({
     *   where: {
     *     // ... the filter for the Languages we want to count
     *   }
     * })
     **/
    count<T extends LanguageCountArgs>(
      args?: Subset<T, LanguageCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LanguageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LanguageAggregateArgs>(
      args: Subset<T, LanguageAggregateArgs>
    ): Prisma.PrismaPromise<GetLanguageAggregateType<T>>

    /**
     * Group by Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageGroupByArgs} args - Group by arguments.
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
      T extends LanguageGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LanguageGroupByArgs['orderBy'] }
        : { orderBy?: LanguageGroupByArgs['orderBy'] },
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
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
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
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, LanguageGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetLanguageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Language model
     */
    readonly fields: LanguageFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Language.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LanguageClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    projects<T extends Language$projectsArgs<ExtArgs> = {}>(
      args?: Subset<T, Language$projectsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<Prisma.$ProjectLanguagePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
      | Null
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Language model
   */
  interface LanguageFieldRefs {
    readonly id: FieldRef<'Language', 'String'>
    readonly name: FieldRef<'Language', 'String'>
  }

  // Custom InputTypes
  /**
   * Language findUnique
   */
  export type LanguageFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language findUniqueOrThrow
   */
  export type LanguageFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language findFirst
   */
  export type LanguageFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language findFirstOrThrow
   */
  export type LanguageFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language findMany
   */
  export type LanguageFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Languages to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language create
   */
  export type LanguageCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The data needed to create a Language.
     */
    data: XOR<LanguageCreateInput, LanguageUncheckedCreateInput>
  }

  /**
   * Language createMany
   */
  export type LanguageCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Languages.
     */
    data: LanguageCreateManyInput | LanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Language update
   */
  export type LanguageUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The data needed to update a Language.
     */
    data: XOR<LanguageUpdateInput, LanguageUncheckedUpdateInput>
    /**
     * Choose, which Language to update.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language updateMany
   */
  export type LanguageUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Languages.
     */
    data: XOR<LanguageUpdateManyMutationInput, LanguageUncheckedUpdateManyInput>
    /**
     * Filter which Languages to update
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to update.
     */
    limit?: number
  }

  /**
   * Language upsert
   */
  export type LanguageUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The filter to search for the Language to update in case it exists.
     */
    where: LanguageWhereUniqueInput
    /**
     * In case the Language found by the `where` argument doesn't exist, create a new Language with this data.
     */
    create: XOR<LanguageCreateInput, LanguageUncheckedCreateInput>
    /**
     * In case the Language was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LanguageUpdateInput, LanguageUncheckedUpdateInput>
  }

  /**
   * Language delete
   */
  export type LanguageDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter which Language to delete.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language deleteMany
   */
  export type LanguageDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Languages to delete
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to delete.
     */
    limit?: number
  }

  /**
   * Language.projects
   */
  export type Language$projectsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProjectLanguage
     */
    select?: ProjectLanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectLanguage
     */
    omit?: ProjectLanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectLanguageInclude<ExtArgs> | null
    where?: ProjectLanguageWhereInput
    orderBy?: ProjectLanguageOrderByWithRelationInput | ProjectLanguageOrderByWithRelationInput[]
    cursor?: ProjectLanguageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectLanguageScalarFieldEnum | ProjectLanguageScalarFieldEnum[]
  }

  /**
   * Language without action
   */
  export type LanguageDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
  }

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted'
    ReadCommitted: 'ReadCommitted'
    RepeatableRead: 'RepeatableRead'
    Serializable: 'Serializable'
  }

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]

  export const UserScalarFieldEnum: {
    id: 'id'
    email: 'email'
    password: 'password'
    name: 'name'
    nameKana: 'nameKana'
    gender: 'gender'
    birthDate: 'birthDate'
    nationality: 'nationality'
    hasSpouse: 'hasSpouse'
    nearestStation: 'nearestStation'
    specialties: 'specialties'
    selfPromotion: 'selfPromotion'
    createdAt: 'createdAt'
  }

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]

  export const QualificationScalarFieldEnum: {
    id: 'id'
    name: 'name'
  }

  export type QualificationScalarFieldEnum =
    (typeof QualificationScalarFieldEnum)[keyof typeof QualificationScalarFieldEnum]

  export const UserQualificationScalarFieldEnum: {
    userId: 'userId'
    qualificationId: 'qualificationId'
    acquiredAt: 'acquiredAt'
  }

  export type UserQualificationScalarFieldEnum =
    (typeof UserQualificationScalarFieldEnum)[keyof typeof UserQualificationScalarFieldEnum]

  export const SkillScalarFieldEnum: {
    id: 'id'
    name: 'name'
  }

  export type SkillScalarFieldEnum =
    (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]

  export const UserSkillScalarFieldEnum: {
    userId: 'userId'
    skillId: 'skillId'
  }

  export type UserSkillScalarFieldEnum =
    (typeof UserSkillScalarFieldEnum)[keyof typeof UserSkillScalarFieldEnum]

  export const ProjectScalarFieldEnum: {
    id: 'id'
    userId: 'userId'
    title: 'title'
    summary: 'summary'
    role: 'role'
    developmentScale: 'developmentScale'
    overallScale: 'overallScale'
    server: 'server'
    os: 'os'
    db: 'db'
    hasRequirementsDefinition: 'hasRequirementsDefinition'
    hasBasicDesign: 'hasBasicDesign'
    hasDetailedDesign: 'hasDetailedDesign'
    hasImplementationUnitTest: 'hasImplementationUnitTest'
    hasIntegrationTest: 'hasIntegrationTest'
    hasSystemTest: 'hasSystemTest'
    hasMaintenanceOperation: 'hasMaintenanceOperation'
  }

  export type ProjectScalarFieldEnum =
    (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]

  export const ProjectTechStackScalarFieldEnum: {
    projectId: 'projectId'
    techStackId: 'techStackId'
  }

  export type ProjectTechStackScalarFieldEnum =
    (typeof ProjectTechStackScalarFieldEnum)[keyof typeof ProjectTechStackScalarFieldEnum]

  export const TechStackScalarFieldEnum: {
    id: 'id'
    name: 'name'
  }

  export type TechStackScalarFieldEnum =
    (typeof TechStackScalarFieldEnum)[keyof typeof TechStackScalarFieldEnum]

  export const ProjectLanguageScalarFieldEnum: {
    projectId: 'projectId'
    languageId: 'languageId'
  }

  export type ProjectLanguageScalarFieldEnum =
    (typeof ProjectLanguageScalarFieldEnum)[keyof typeof ProjectLanguageScalarFieldEnum]

  export const LanguageScalarFieldEnum: {
    id: 'id'
    name: 'name'
  }

  export type LanguageScalarFieldEnum =
    (typeof LanguageScalarFieldEnum)[keyof typeof LanguageScalarFieldEnum]

  export const SortOrder: {
    asc: 'asc'
    desc: 'desc'
  }

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]

  export const NullsOrder: {
    first: 'first'
    last: 'last'
  }

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]

  export const UserOrderByRelevanceFieldEnum: {
    id: 'id'
    email: 'email'
    password: 'password'
    name: 'name'
    nameKana: 'nameKana'
    gender: 'gender'
    nationality: 'nationality'
    nearestStation: 'nearestStation'
    specialties: 'specialties'
    selfPromotion: 'selfPromotion'
  }

  export type UserOrderByRelevanceFieldEnum =
    (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]

  export const QualificationOrderByRelevanceFieldEnum: {
    id: 'id'
    name: 'name'
  }

  export type QualificationOrderByRelevanceFieldEnum =
    (typeof QualificationOrderByRelevanceFieldEnum)[keyof typeof QualificationOrderByRelevanceFieldEnum]

  export const UserQualificationOrderByRelevanceFieldEnum: {
    userId: 'userId'
    qualificationId: 'qualificationId'
  }

  export type UserQualificationOrderByRelevanceFieldEnum =
    (typeof UserQualificationOrderByRelevanceFieldEnum)[keyof typeof UserQualificationOrderByRelevanceFieldEnum]

  export const SkillOrderByRelevanceFieldEnum: {
    id: 'id'
    name: 'name'
  }

  export type SkillOrderByRelevanceFieldEnum =
    (typeof SkillOrderByRelevanceFieldEnum)[keyof typeof SkillOrderByRelevanceFieldEnum]

  export const UserSkillOrderByRelevanceFieldEnum: {
    userId: 'userId'
    skillId: 'skillId'
  }

  export type UserSkillOrderByRelevanceFieldEnum =
    (typeof UserSkillOrderByRelevanceFieldEnum)[keyof typeof UserSkillOrderByRelevanceFieldEnum]

  export const ProjectOrderByRelevanceFieldEnum: {
    id: 'id'
    userId: 'userId'
    title: 'title'
    summary: 'summary'
    role: 'role'
    server: 'server'
    os: 'os'
    db: 'db'
  }

  export type ProjectOrderByRelevanceFieldEnum =
    (typeof ProjectOrderByRelevanceFieldEnum)[keyof typeof ProjectOrderByRelevanceFieldEnum]

  export const ProjectTechStackOrderByRelevanceFieldEnum: {
    projectId: 'projectId'
    techStackId: 'techStackId'
  }

  export type ProjectTechStackOrderByRelevanceFieldEnum =
    (typeof ProjectTechStackOrderByRelevanceFieldEnum)[keyof typeof ProjectTechStackOrderByRelevanceFieldEnum]

  export const TechStackOrderByRelevanceFieldEnum: {
    id: 'id'
    name: 'name'
  }

  export type TechStackOrderByRelevanceFieldEnum =
    (typeof TechStackOrderByRelevanceFieldEnum)[keyof typeof TechStackOrderByRelevanceFieldEnum]

  export const ProjectLanguageOrderByRelevanceFieldEnum: {
    projectId: 'projectId'
    languageId: 'languageId'
  }

  export type ProjectLanguageOrderByRelevanceFieldEnum =
    (typeof ProjectLanguageOrderByRelevanceFieldEnum)[keyof typeof ProjectLanguageOrderByRelevanceFieldEnum]

  export const LanguageOrderByRelevanceFieldEnum: {
    id: 'id'
    name: 'name'
  }

  export type LanguageOrderByRelevanceFieldEnum =
    (typeof LanguageOrderByRelevanceFieldEnum)[keyof typeof LanguageOrderByRelevanceFieldEnum]

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<'User'> | string
    email?: StringFilter<'User'> | string
    password?: StringFilter<'User'> | string
    name?: StringNullableFilter<'User'> | string | null
    nameKana?: StringNullableFilter<'User'> | string | null
    gender?: StringNullableFilter<'User'> | string | null
    birthDate?: DateTimeNullableFilter<'User'> | Date | string | null
    nationality?: StringNullableFilter<'User'> | string | null
    hasSpouse?: BoolNullableFilter<'User'> | boolean | null
    nearestStation?: StringNullableFilter<'User'> | string | null
    specialties?: StringNullableFilter<'User'> | string | null
    selfPromotion?: StringNullableFilter<'User'> | string | null
    createdAt?: DateTimeFilter<'User'> | Date | string
    qualifications?: UserQualificationListRelationFilter
    skills?: UserSkillListRelationFilter
    projects?: ProjectListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    nameKana?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    nationality?: SortOrderInput | SortOrder
    hasSpouse?: SortOrderInput | SortOrder
    nearestStation?: SortOrderInput | SortOrder
    specialties?: SortOrderInput | SortOrder
    selfPromotion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    qualifications?: UserQualificationOrderByRelationAggregateInput
    skills?: UserSkillOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      email?: string
      AND?: UserWhereInput | UserWhereInput[]
      OR?: UserWhereInput[]
      NOT?: UserWhereInput | UserWhereInput[]
      password?: StringFilter<'User'> | string
      name?: StringNullableFilter<'User'> | string | null
      nameKana?: StringNullableFilter<'User'> | string | null
      gender?: StringNullableFilter<'User'> | string | null
      birthDate?: DateTimeNullableFilter<'User'> | Date | string | null
      nationality?: StringNullableFilter<'User'> | string | null
      hasSpouse?: BoolNullableFilter<'User'> | boolean | null
      nearestStation?: StringNullableFilter<'User'> | string | null
      specialties?: StringNullableFilter<'User'> | string | null
      selfPromotion?: StringNullableFilter<'User'> | string | null
      createdAt?: DateTimeFilter<'User'> | Date | string
      qualifications?: UserQualificationListRelationFilter
      skills?: UserSkillListRelationFilter
      projects?: ProjectListRelationFilter
    },
    'id' | 'email'
  >

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    nameKana?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    nationality?: SortOrderInput | SortOrder
    hasSpouse?: SortOrderInput | SortOrder
    nearestStation?: SortOrderInput | SortOrder
    specialties?: SortOrderInput | SortOrder
    selfPromotion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'User'> | string
    email?: StringWithAggregatesFilter<'User'> | string
    password?: StringWithAggregatesFilter<'User'> | string
    name?: StringNullableWithAggregatesFilter<'User'> | string | null
    nameKana?: StringNullableWithAggregatesFilter<'User'> | string | null
    gender?: StringNullableWithAggregatesFilter<'User'> | string | null
    birthDate?: DateTimeNullableWithAggregatesFilter<'User'> | Date | string | null
    nationality?: StringNullableWithAggregatesFilter<'User'> | string | null
    hasSpouse?: BoolNullableWithAggregatesFilter<'User'> | boolean | null
    nearestStation?: StringNullableWithAggregatesFilter<'User'> | string | null
    specialties?: StringNullableWithAggregatesFilter<'User'> | string | null
    selfPromotion?: StringNullableWithAggregatesFilter<'User'> | string | null
    createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string
  }

  export type QualificationWhereInput = {
    AND?: QualificationWhereInput | QualificationWhereInput[]
    OR?: QualificationWhereInput[]
    NOT?: QualificationWhereInput | QualificationWhereInput[]
    id?: StringFilter<'Qualification'> | string
    name?: StringFilter<'Qualification'> | string
    users?: UserQualificationListRelationFilter
  }

  export type QualificationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: UserQualificationOrderByRelationAggregateInput
    _relevance?: QualificationOrderByRelevanceInput
  }

  export type QualificationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      name?: string
      AND?: QualificationWhereInput | QualificationWhereInput[]
      OR?: QualificationWhereInput[]
      NOT?: QualificationWhereInput | QualificationWhereInput[]
      users?: UserQualificationListRelationFilter
    },
    'id' | 'name'
  >

  export type QualificationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: QualificationCountOrderByAggregateInput
    _max?: QualificationMaxOrderByAggregateInput
    _min?: QualificationMinOrderByAggregateInput
  }

  export type QualificationScalarWhereWithAggregatesInput = {
    AND?:
      | QualificationScalarWhereWithAggregatesInput
      | QualificationScalarWhereWithAggregatesInput[]
    OR?: QualificationScalarWhereWithAggregatesInput[]
    NOT?:
      | QualificationScalarWhereWithAggregatesInput
      | QualificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'Qualification'> | string
    name?: StringWithAggregatesFilter<'Qualification'> | string
  }

  export type UserQualificationWhereInput = {
    AND?: UserQualificationWhereInput | UserQualificationWhereInput[]
    OR?: UserQualificationWhereInput[]
    NOT?: UserQualificationWhereInput | UserQualificationWhereInput[]
    userId?: StringFilter<'UserQualification'> | string
    qualificationId?: StringFilter<'UserQualification'> | string
    acquiredAt?: DateTimeNullableFilter<'UserQualification'> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    qualification?: XOR<QualificationScalarRelationFilter, QualificationWhereInput>
  }

  export type UserQualificationOrderByWithRelationInput = {
    userId?: SortOrder
    qualificationId?: SortOrder
    acquiredAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    qualification?: QualificationOrderByWithRelationInput
    _relevance?: UserQualificationOrderByRelevanceInput
  }

  export type UserQualificationWhereUniqueInput = Prisma.AtLeast<
    {
      userId_qualificationId?: UserQualificationUserIdQualificationIdCompoundUniqueInput
      AND?: UserQualificationWhereInput | UserQualificationWhereInput[]
      OR?: UserQualificationWhereInput[]
      NOT?: UserQualificationWhereInput | UserQualificationWhereInput[]
      userId?: StringFilter<'UserQualification'> | string
      qualificationId?: StringFilter<'UserQualification'> | string
      acquiredAt?: DateTimeNullableFilter<'UserQualification'> | Date | string | null
      user?: XOR<UserScalarRelationFilter, UserWhereInput>
      qualification?: XOR<QualificationScalarRelationFilter, QualificationWhereInput>
    },
    'userId_qualificationId'
  >

  export type UserQualificationOrderByWithAggregationInput = {
    userId?: SortOrder
    qualificationId?: SortOrder
    acquiredAt?: SortOrderInput | SortOrder
    _count?: UserQualificationCountOrderByAggregateInput
    _max?: UserQualificationMaxOrderByAggregateInput
    _min?: UserQualificationMinOrderByAggregateInput
  }

  export type UserQualificationScalarWhereWithAggregatesInput = {
    AND?:
      | UserQualificationScalarWhereWithAggregatesInput
      | UserQualificationScalarWhereWithAggregatesInput[]
    OR?: UserQualificationScalarWhereWithAggregatesInput[]
    NOT?:
      | UserQualificationScalarWhereWithAggregatesInput
      | UserQualificationScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<'UserQualification'> | string
    qualificationId?: StringWithAggregatesFilter<'UserQualification'> | string
    acquiredAt?: DateTimeNullableWithAggregatesFilter<'UserQualification'> | Date | string | null
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: StringFilter<'Skill'> | string
    name?: StringFilter<'Skill'> | string
    users?: UserSkillListRelationFilter
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: UserSkillOrderByRelationAggregateInput
    _relevance?: SkillOrderByRelevanceInput
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      name?: string
      AND?: SkillWhereInput | SkillWhereInput[]
      OR?: SkillWhereInput[]
      NOT?: SkillWhereInput | SkillWhereInput[]
      users?: UserSkillListRelationFilter
    },
    'id' | 'name'
  >

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: SkillCountOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    OR?: SkillScalarWhereWithAggregatesInput[]
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'Skill'> | string
    name?: StringWithAggregatesFilter<'Skill'> | string
  }

  export type UserSkillWhereInput = {
    AND?: UserSkillWhereInput | UserSkillWhereInput[]
    OR?: UserSkillWhereInput[]
    NOT?: UserSkillWhereInput | UserSkillWhereInput[]
    userId?: StringFilter<'UserSkill'> | string
    skillId?: StringFilter<'UserSkill'> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
  }

  export type UserSkillOrderByWithRelationInput = {
    userId?: SortOrder
    skillId?: SortOrder
    user?: UserOrderByWithRelationInput
    skill?: SkillOrderByWithRelationInput
    _relevance?: UserSkillOrderByRelevanceInput
  }

  export type UserSkillWhereUniqueInput = Prisma.AtLeast<
    {
      userId_skillId?: UserSkillUserIdSkillIdCompoundUniqueInput
      AND?: UserSkillWhereInput | UserSkillWhereInput[]
      OR?: UserSkillWhereInput[]
      NOT?: UserSkillWhereInput | UserSkillWhereInput[]
      userId?: StringFilter<'UserSkill'> | string
      skillId?: StringFilter<'UserSkill'> | string
      user?: XOR<UserScalarRelationFilter, UserWhereInput>
      skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
    },
    'userId_skillId'
  >

  export type UserSkillOrderByWithAggregationInput = {
    userId?: SortOrder
    skillId?: SortOrder
    _count?: UserSkillCountOrderByAggregateInput
    _max?: UserSkillMaxOrderByAggregateInput
    _min?: UserSkillMinOrderByAggregateInput
  }

  export type UserSkillScalarWhereWithAggregatesInput = {
    AND?: UserSkillScalarWhereWithAggregatesInput | UserSkillScalarWhereWithAggregatesInput[]
    OR?: UserSkillScalarWhereWithAggregatesInput[]
    NOT?: UserSkillScalarWhereWithAggregatesInput | UserSkillScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<'UserSkill'> | string
    skillId?: StringWithAggregatesFilter<'UserSkill'> | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<'Project'> | string
    userId?: StringFilter<'Project'> | string
    title?: StringFilter<'Project'> | string
    summary?: StringFilter<'Project'> | string
    role?: StringNullableFilter<'Project'> | string | null
    developmentScale?: IntNullableFilter<'Project'> | number | null
    overallScale?: IntNullableFilter<'Project'> | number | null
    server?: StringNullableFilter<'Project'> | string | null
    os?: StringNullableFilter<'Project'> | string | null
    db?: StringNullableFilter<'Project'> | string | null
    hasRequirementsDefinition?: BoolFilter<'Project'> | boolean
    hasBasicDesign?: BoolFilter<'Project'> | boolean
    hasDetailedDesign?: BoolFilter<'Project'> | boolean
    hasImplementationUnitTest?: BoolFilter<'Project'> | boolean
    hasIntegrationTest?: BoolFilter<'Project'> | boolean
    hasSystemTest?: BoolFilter<'Project'> | boolean
    hasMaintenanceOperation?: BoolFilter<'Project'> | boolean
    techStacks?: ProjectTechStackListRelationFilter
    languages?: ProjectLanguageListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    role?: SortOrderInput | SortOrder
    developmentScale?: SortOrderInput | SortOrder
    overallScale?: SortOrderInput | SortOrder
    server?: SortOrderInput | SortOrder
    os?: SortOrderInput | SortOrder
    db?: SortOrderInput | SortOrder
    hasRequirementsDefinition?: SortOrder
    hasBasicDesign?: SortOrder
    hasDetailedDesign?: SortOrder
    hasImplementationUnitTest?: SortOrder
    hasIntegrationTest?: SortOrder
    hasSystemTest?: SortOrder
    hasMaintenanceOperation?: SortOrder
    techStacks?: ProjectTechStackOrderByRelationAggregateInput
    languages?: ProjectLanguageOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    _relevance?: ProjectOrderByRelevanceInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      AND?: ProjectWhereInput | ProjectWhereInput[]
      OR?: ProjectWhereInput[]
      NOT?: ProjectWhereInput | ProjectWhereInput[]
      userId?: StringFilter<'Project'> | string
      title?: StringFilter<'Project'> | string
      summary?: StringFilter<'Project'> | string
      role?: StringNullableFilter<'Project'> | string | null
      developmentScale?: IntNullableFilter<'Project'> | number | null
      overallScale?: IntNullableFilter<'Project'> | number | null
      server?: StringNullableFilter<'Project'> | string | null
      os?: StringNullableFilter<'Project'> | string | null
      db?: StringNullableFilter<'Project'> | string | null
      hasRequirementsDefinition?: BoolFilter<'Project'> | boolean
      hasBasicDesign?: BoolFilter<'Project'> | boolean
      hasDetailedDesign?: BoolFilter<'Project'> | boolean
      hasImplementationUnitTest?: BoolFilter<'Project'> | boolean
      hasIntegrationTest?: BoolFilter<'Project'> | boolean
      hasSystemTest?: BoolFilter<'Project'> | boolean
      hasMaintenanceOperation?: BoolFilter<'Project'> | boolean
      techStacks?: ProjectTechStackListRelationFilter
      languages?: ProjectLanguageListRelationFilter
      user?: XOR<UserScalarRelationFilter, UserWhereInput>
    },
    'id'
  >

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    role?: SortOrderInput | SortOrder
    developmentScale?: SortOrderInput | SortOrder
    overallScale?: SortOrderInput | SortOrder
    server?: SortOrderInput | SortOrder
    os?: SortOrderInput | SortOrder
    db?: SortOrderInput | SortOrder
    hasRequirementsDefinition?: SortOrder
    hasBasicDesign?: SortOrder
    hasDetailedDesign?: SortOrder
    hasImplementationUnitTest?: SortOrder
    hasIntegrationTest?: SortOrder
    hasSystemTest?: SortOrder
    hasMaintenanceOperation?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'Project'> | string
    userId?: StringWithAggregatesFilter<'Project'> | string
    title?: StringWithAggregatesFilter<'Project'> | string
    summary?: StringWithAggregatesFilter<'Project'> | string
    role?: StringNullableWithAggregatesFilter<'Project'> | string | null
    developmentScale?: IntNullableWithAggregatesFilter<'Project'> | number | null
    overallScale?: IntNullableWithAggregatesFilter<'Project'> | number | null
    server?: StringNullableWithAggregatesFilter<'Project'> | string | null
    os?: StringNullableWithAggregatesFilter<'Project'> | string | null
    db?: StringNullableWithAggregatesFilter<'Project'> | string | null
    hasRequirementsDefinition?: BoolWithAggregatesFilter<'Project'> | boolean
    hasBasicDesign?: BoolWithAggregatesFilter<'Project'> | boolean
    hasDetailedDesign?: BoolWithAggregatesFilter<'Project'> | boolean
    hasImplementationUnitTest?: BoolWithAggregatesFilter<'Project'> | boolean
    hasIntegrationTest?: BoolWithAggregatesFilter<'Project'> | boolean
    hasSystemTest?: BoolWithAggregatesFilter<'Project'> | boolean
    hasMaintenanceOperation?: BoolWithAggregatesFilter<'Project'> | boolean
  }

  export type ProjectTechStackWhereInput = {
    AND?: ProjectTechStackWhereInput | ProjectTechStackWhereInput[]
    OR?: ProjectTechStackWhereInput[]
    NOT?: ProjectTechStackWhereInput | ProjectTechStackWhereInput[]
    projectId?: StringFilter<'ProjectTechStack'> | string
    techStackId?: StringFilter<'ProjectTechStack'> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    techStack?: XOR<TechStackScalarRelationFilter, TechStackWhereInput>
  }

  export type ProjectTechStackOrderByWithRelationInput = {
    projectId?: SortOrder
    techStackId?: SortOrder
    project?: ProjectOrderByWithRelationInput
    techStack?: TechStackOrderByWithRelationInput
    _relevance?: ProjectTechStackOrderByRelevanceInput
  }

  export type ProjectTechStackWhereUniqueInput = Prisma.AtLeast<
    {
      projectId_techStackId?: ProjectTechStackProjectIdTechStackIdCompoundUniqueInput
      AND?: ProjectTechStackWhereInput | ProjectTechStackWhereInput[]
      OR?: ProjectTechStackWhereInput[]
      NOT?: ProjectTechStackWhereInput | ProjectTechStackWhereInput[]
      projectId?: StringFilter<'ProjectTechStack'> | string
      techStackId?: StringFilter<'ProjectTechStack'> | string
      project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
      techStack?: XOR<TechStackScalarRelationFilter, TechStackWhereInput>
    },
    'projectId_techStackId'
  >

  export type ProjectTechStackOrderByWithAggregationInput = {
    projectId?: SortOrder
    techStackId?: SortOrder
    _count?: ProjectTechStackCountOrderByAggregateInput
    _max?: ProjectTechStackMaxOrderByAggregateInput
    _min?: ProjectTechStackMinOrderByAggregateInput
  }

  export type ProjectTechStackScalarWhereWithAggregatesInput = {
    AND?:
      | ProjectTechStackScalarWhereWithAggregatesInput
      | ProjectTechStackScalarWhereWithAggregatesInput[]
    OR?: ProjectTechStackScalarWhereWithAggregatesInput[]
    NOT?:
      | ProjectTechStackScalarWhereWithAggregatesInput
      | ProjectTechStackScalarWhereWithAggregatesInput[]
    projectId?: StringWithAggregatesFilter<'ProjectTechStack'> | string
    techStackId?: StringWithAggregatesFilter<'ProjectTechStack'> | string
  }

  export type TechStackWhereInput = {
    AND?: TechStackWhereInput | TechStackWhereInput[]
    OR?: TechStackWhereInput[]
    NOT?: TechStackWhereInput | TechStackWhereInput[]
    id?: StringFilter<'TechStack'> | string
    name?: StringFilter<'TechStack'> | string
    projects?: ProjectTechStackListRelationFilter
  }

  export type TechStackOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    projects?: ProjectTechStackOrderByRelationAggregateInput
    _relevance?: TechStackOrderByRelevanceInput
  }

  export type TechStackWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      name?: string
      AND?: TechStackWhereInput | TechStackWhereInput[]
      OR?: TechStackWhereInput[]
      NOT?: TechStackWhereInput | TechStackWhereInput[]
      projects?: ProjectTechStackListRelationFilter
    },
    'id' | 'name'
  >

  export type TechStackOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TechStackCountOrderByAggregateInput
    _max?: TechStackMaxOrderByAggregateInput
    _min?: TechStackMinOrderByAggregateInput
  }

  export type TechStackScalarWhereWithAggregatesInput = {
    AND?: TechStackScalarWhereWithAggregatesInput | TechStackScalarWhereWithAggregatesInput[]
    OR?: TechStackScalarWhereWithAggregatesInput[]
    NOT?: TechStackScalarWhereWithAggregatesInput | TechStackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'TechStack'> | string
    name?: StringWithAggregatesFilter<'TechStack'> | string
  }

  export type ProjectLanguageWhereInput = {
    AND?: ProjectLanguageWhereInput | ProjectLanguageWhereInput[]
    OR?: ProjectLanguageWhereInput[]
    NOT?: ProjectLanguageWhereInput | ProjectLanguageWhereInput[]
    projectId?: StringFilter<'ProjectLanguage'> | string
    languageId?: StringFilter<'ProjectLanguage'> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    language?: XOR<LanguageScalarRelationFilter, LanguageWhereInput>
  }

  export type ProjectLanguageOrderByWithRelationInput = {
    projectId?: SortOrder
    languageId?: SortOrder
    project?: ProjectOrderByWithRelationInput
    language?: LanguageOrderByWithRelationInput
    _relevance?: ProjectLanguageOrderByRelevanceInput
  }

  export type ProjectLanguageWhereUniqueInput = Prisma.AtLeast<
    {
      projectId_languageId?: ProjectLanguageProjectIdLanguageIdCompoundUniqueInput
      AND?: ProjectLanguageWhereInput | ProjectLanguageWhereInput[]
      OR?: ProjectLanguageWhereInput[]
      NOT?: ProjectLanguageWhereInput | ProjectLanguageWhereInput[]
      projectId?: StringFilter<'ProjectLanguage'> | string
      languageId?: StringFilter<'ProjectLanguage'> | string
      project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
      language?: XOR<LanguageScalarRelationFilter, LanguageWhereInput>
    },
    'projectId_languageId'
  >

  export type ProjectLanguageOrderByWithAggregationInput = {
    projectId?: SortOrder
    languageId?: SortOrder
    _count?: ProjectLanguageCountOrderByAggregateInput
    _max?: ProjectLanguageMaxOrderByAggregateInput
    _min?: ProjectLanguageMinOrderByAggregateInput
  }

  export type ProjectLanguageScalarWhereWithAggregatesInput = {
    AND?:
      | ProjectLanguageScalarWhereWithAggregatesInput
      | ProjectLanguageScalarWhereWithAggregatesInput[]
    OR?: ProjectLanguageScalarWhereWithAggregatesInput[]
    NOT?:
      | ProjectLanguageScalarWhereWithAggregatesInput
      | ProjectLanguageScalarWhereWithAggregatesInput[]
    projectId?: StringWithAggregatesFilter<'ProjectLanguage'> | string
    languageId?: StringWithAggregatesFilter<'ProjectLanguage'> | string
  }

  export type LanguageWhereInput = {
    AND?: LanguageWhereInput | LanguageWhereInput[]
    OR?: LanguageWhereInput[]
    NOT?: LanguageWhereInput | LanguageWhereInput[]
    id?: StringFilter<'Language'> | string
    name?: StringFilter<'Language'> | string
    projects?: ProjectLanguageListRelationFilter
  }

  export type LanguageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    projects?: ProjectLanguageOrderByRelationAggregateInput
    _relevance?: LanguageOrderByRelevanceInput
  }

  export type LanguageWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      name?: string
      AND?: LanguageWhereInput | LanguageWhereInput[]
      OR?: LanguageWhereInput[]
      NOT?: LanguageWhereInput | LanguageWhereInput[]
      projects?: ProjectLanguageListRelationFilter
    },
    'id' | 'name'
  >

  export type LanguageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: LanguageCountOrderByAggregateInput
    _max?: LanguageMaxOrderByAggregateInput
    _min?: LanguageMinOrderByAggregateInput
  }

  export type LanguageScalarWhereWithAggregatesInput = {
    AND?: LanguageScalarWhereWithAggregatesInput | LanguageScalarWhereWithAggregatesInput[]
    OR?: LanguageScalarWhereWithAggregatesInput[]
    NOT?: LanguageScalarWhereWithAggregatesInput | LanguageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'Language'> | string
    name?: StringWithAggregatesFilter<'Language'> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    nameKana?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    nationality?: string | null
    hasSpouse?: boolean | null
    nearestStation?: string | null
    specialties?: string | null
    selfPromotion?: string | null
    createdAt?: Date | string
    qualifications?: UserQualificationCreateNestedManyWithoutUserInput
    skills?: UserSkillCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    nameKana?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    nationality?: string | null
    hasSpouse?: boolean | null
    nearestStation?: string | null
    specialties?: string | null
    selfPromotion?: string | null
    createdAt?: Date | string
    qualifications?: UserQualificationUncheckedCreateNestedManyWithoutUserInput
    skills?: UserSkillUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nameKana?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    hasSpouse?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nearestStation?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: NullableStringFieldUpdateOperationsInput | string | null
    selfPromotion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qualifications?: UserQualificationUpdateManyWithoutUserNestedInput
    skills?: UserSkillUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nameKana?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    hasSpouse?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nearestStation?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: NullableStringFieldUpdateOperationsInput | string | null
    selfPromotion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qualifications?: UserQualificationUncheckedUpdateManyWithoutUserNestedInput
    skills?: UserSkillUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    nameKana?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    nationality?: string | null
    hasSpouse?: boolean | null
    nearestStation?: string | null
    specialties?: string | null
    selfPromotion?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nameKana?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    hasSpouse?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nearestStation?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: NullableStringFieldUpdateOperationsInput | string | null
    selfPromotion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nameKana?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    hasSpouse?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nearestStation?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: NullableStringFieldUpdateOperationsInput | string | null
    selfPromotion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QualificationCreateInput = {
    id?: string
    name: string
    users?: UserQualificationCreateNestedManyWithoutQualificationInput
  }

  export type QualificationUncheckedCreateInput = {
    id?: string
    name: string
    users?: UserQualificationUncheckedCreateNestedManyWithoutQualificationInput
  }

  export type QualificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UserQualificationUpdateManyWithoutQualificationNestedInput
  }

  export type QualificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UserQualificationUncheckedUpdateManyWithoutQualificationNestedInput
  }

  export type QualificationCreateManyInput = {
    id?: string
    name: string
  }

  export type QualificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type QualificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserQualificationCreateInput = {
    acquiredAt?: Date | string | null
    user: UserCreateNestedOneWithoutQualificationsInput
    qualification: QualificationCreateNestedOneWithoutUsersInput
  }

  export type UserQualificationUncheckedCreateInput = {
    userId: string
    qualificationId: string
    acquiredAt?: Date | string | null
  }

  export type UserQualificationUpdateInput = {
    acquiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutQualificationsNestedInput
    qualification?: QualificationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserQualificationUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    qualificationId?: StringFieldUpdateOperationsInput | string
    acquiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserQualificationCreateManyInput = {
    userId: string
    qualificationId: string
    acquiredAt?: Date | string | null
  }

  export type UserQualificationUpdateManyMutationInput = {
    acquiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserQualificationUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    qualificationId?: StringFieldUpdateOperationsInput | string
    acquiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SkillCreateInput = {
    id?: string
    name: string
    users?: UserSkillCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateInput = {
    id?: string
    name: string
    users?: UserSkillUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UserSkillUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UserSkillUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type SkillCreateManyInput = {
    id?: string
    name: string
  }

  export type SkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserSkillCreateInput = {
    user: UserCreateNestedOneWithoutSkillsInput
    skill: SkillCreateNestedOneWithoutUsersInput
  }

  export type UserSkillUncheckedCreateInput = {
    userId: string
    skillId: string
  }

  export type UserSkillUpdateInput = {
    user?: UserUpdateOneRequiredWithoutSkillsNestedInput
    skill?: SkillUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserSkillUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
  }

  export type UserSkillCreateManyInput = {
    userId: string
    skillId: string
  }

  export type UserSkillUpdateManyMutationInput = {}

  export type UserSkillUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateInput = {
    id?: string
    title: string
    summary: string
    role?: string | null
    developmentScale?: number | null
    overallScale?: number | null
    server?: string | null
    os?: string | null
    db?: string | null
    hasRequirementsDefinition?: boolean
    hasBasicDesign?: boolean
    hasDetailedDesign?: boolean
    hasImplementationUnitTest?: boolean
    hasIntegrationTest?: boolean
    hasSystemTest?: boolean
    hasMaintenanceOperation?: boolean
    techStacks?: ProjectTechStackCreateNestedManyWithoutProjectInput
    languages?: ProjectLanguageCreateNestedManyWithoutProjectInput
    user: UserCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    summary: string
    role?: string | null
    developmentScale?: number | null
    overallScale?: number | null
    server?: string | null
    os?: string | null
    db?: string | null
    hasRequirementsDefinition?: boolean
    hasBasicDesign?: boolean
    hasDetailedDesign?: boolean
    hasImplementationUnitTest?: boolean
    hasIntegrationTest?: boolean
    hasSystemTest?: boolean
    hasMaintenanceOperation?: boolean
    techStacks?: ProjectTechStackUncheckedCreateNestedManyWithoutProjectInput
    languages?: ProjectLanguageUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    developmentScale?: NullableIntFieldUpdateOperationsInput | number | null
    overallScale?: NullableIntFieldUpdateOperationsInput | number | null
    server?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    db?: NullableStringFieldUpdateOperationsInput | string | null
    hasRequirementsDefinition?: BoolFieldUpdateOperationsInput | boolean
    hasBasicDesign?: BoolFieldUpdateOperationsInput | boolean
    hasDetailedDesign?: BoolFieldUpdateOperationsInput | boolean
    hasImplementationUnitTest?: BoolFieldUpdateOperationsInput | boolean
    hasIntegrationTest?: BoolFieldUpdateOperationsInput | boolean
    hasSystemTest?: BoolFieldUpdateOperationsInput | boolean
    hasMaintenanceOperation?: BoolFieldUpdateOperationsInput | boolean
    techStacks?: ProjectTechStackUpdateManyWithoutProjectNestedInput
    languages?: ProjectLanguageUpdateManyWithoutProjectNestedInput
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    developmentScale?: NullableIntFieldUpdateOperationsInput | number | null
    overallScale?: NullableIntFieldUpdateOperationsInput | number | null
    server?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    db?: NullableStringFieldUpdateOperationsInput | string | null
    hasRequirementsDefinition?: BoolFieldUpdateOperationsInput | boolean
    hasBasicDesign?: BoolFieldUpdateOperationsInput | boolean
    hasDetailedDesign?: BoolFieldUpdateOperationsInput | boolean
    hasImplementationUnitTest?: BoolFieldUpdateOperationsInput | boolean
    hasIntegrationTest?: BoolFieldUpdateOperationsInput | boolean
    hasSystemTest?: BoolFieldUpdateOperationsInput | boolean
    hasMaintenanceOperation?: BoolFieldUpdateOperationsInput | boolean
    techStacks?: ProjectTechStackUncheckedUpdateManyWithoutProjectNestedInput
    languages?: ProjectLanguageUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    userId: string
    title: string
    summary: string
    role?: string | null
    developmentScale?: number | null
    overallScale?: number | null
    server?: string | null
    os?: string | null
    db?: string | null
    hasRequirementsDefinition?: boolean
    hasBasicDesign?: boolean
    hasDetailedDesign?: boolean
    hasImplementationUnitTest?: boolean
    hasIntegrationTest?: boolean
    hasSystemTest?: boolean
    hasMaintenanceOperation?: boolean
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    developmentScale?: NullableIntFieldUpdateOperationsInput | number | null
    overallScale?: NullableIntFieldUpdateOperationsInput | number | null
    server?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    db?: NullableStringFieldUpdateOperationsInput | string | null
    hasRequirementsDefinition?: BoolFieldUpdateOperationsInput | boolean
    hasBasicDesign?: BoolFieldUpdateOperationsInput | boolean
    hasDetailedDesign?: BoolFieldUpdateOperationsInput | boolean
    hasImplementationUnitTest?: BoolFieldUpdateOperationsInput | boolean
    hasIntegrationTest?: BoolFieldUpdateOperationsInput | boolean
    hasSystemTest?: BoolFieldUpdateOperationsInput | boolean
    hasMaintenanceOperation?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    developmentScale?: NullableIntFieldUpdateOperationsInput | number | null
    overallScale?: NullableIntFieldUpdateOperationsInput | number | null
    server?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    db?: NullableStringFieldUpdateOperationsInput | string | null
    hasRequirementsDefinition?: BoolFieldUpdateOperationsInput | boolean
    hasBasicDesign?: BoolFieldUpdateOperationsInput | boolean
    hasDetailedDesign?: BoolFieldUpdateOperationsInput | boolean
    hasImplementationUnitTest?: BoolFieldUpdateOperationsInput | boolean
    hasIntegrationTest?: BoolFieldUpdateOperationsInput | boolean
    hasSystemTest?: BoolFieldUpdateOperationsInput | boolean
    hasMaintenanceOperation?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProjectTechStackCreateInput = {
    project: ProjectCreateNestedOneWithoutTechStacksInput
    techStack: TechStackCreateNestedOneWithoutProjectsInput
  }

  export type ProjectTechStackUncheckedCreateInput = {
    projectId: string
    techStackId: string
  }

  export type ProjectTechStackUpdateInput = {
    project?: ProjectUpdateOneRequiredWithoutTechStacksNestedInput
    techStack?: TechStackUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectTechStackUncheckedUpdateInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    techStackId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectTechStackCreateManyInput = {
    projectId: string
    techStackId: string
  }

  export type ProjectTechStackUpdateManyMutationInput = {}

  export type ProjectTechStackUncheckedUpdateManyInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    techStackId?: StringFieldUpdateOperationsInput | string
  }

  export type TechStackCreateInput = {
    id?: string
    name: string
    projects?: ProjectTechStackCreateNestedManyWithoutTechStackInput
  }

  export type TechStackUncheckedCreateInput = {
    id?: string
    name: string
    projects?: ProjectTechStackUncheckedCreateNestedManyWithoutTechStackInput
  }

  export type TechStackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projects?: ProjectTechStackUpdateManyWithoutTechStackNestedInput
  }

  export type TechStackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projects?: ProjectTechStackUncheckedUpdateManyWithoutTechStackNestedInput
  }

  export type TechStackCreateManyInput = {
    id?: string
    name: string
  }

  export type TechStackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TechStackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectLanguageCreateInput = {
    project: ProjectCreateNestedOneWithoutLanguagesInput
    language: LanguageCreateNestedOneWithoutProjectsInput
  }

  export type ProjectLanguageUncheckedCreateInput = {
    projectId: string
    languageId: string
  }

  export type ProjectLanguageUpdateInput = {
    project?: ProjectUpdateOneRequiredWithoutLanguagesNestedInput
    language?: LanguageUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectLanguageUncheckedUpdateInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    languageId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectLanguageCreateManyInput = {
    projectId: string
    languageId: string
  }

  export type ProjectLanguageUpdateManyMutationInput = {}

  export type ProjectLanguageUncheckedUpdateManyInput = {
    projectId?: StringFieldUpdateOperationsInput | string
    languageId?: StringFieldUpdateOperationsInput | string
  }

  export type LanguageCreateInput = {
    id?: string
    name: string
    projects?: ProjectLanguageCreateNestedManyWithoutLanguageInput
  }

  export type LanguageUncheckedCreateInput = {
    id?: string
    name: string
    projects?: ProjectLanguageUncheckedCreateNestedManyWithoutLanguageInput
  }

  export type LanguageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projects?: ProjectLanguageUpdateManyWithoutLanguageNestedInput
  }

  export type LanguageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projects?: ProjectLanguageUncheckedUpdateManyWithoutLanguageNestedInput
  }

  export type LanguageCreateManyInput = {
    id?: string
    name: string
  }

  export type LanguageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LanguageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type UserQualificationListRelationFilter = {
    every?: UserQualificationWhereInput
    some?: UserQualificationWhereInput
    none?: UserQualificationWhereInput
  }

  export type UserSkillListRelationFilter = {
    every?: UserSkillWhereInput
    some?: UserSkillWhereInput
    none?: UserSkillWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserQualificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserSkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    nameKana?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    nationality?: SortOrder
    hasSpouse?: SortOrder
    nearestStation?: SortOrder
    specialties?: SortOrder
    selfPromotion?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    nameKana?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    nationality?: SortOrder
    hasSpouse?: SortOrder
    nearestStation?: SortOrder
    specialties?: SortOrder
    selfPromotion?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    nameKana?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    nationality?: SortOrder
    hasSpouse?: SortOrder
    nearestStation?: SortOrder
    specialties?: SortOrder
    selfPromotion?: SortOrder
    createdAt?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type QualificationOrderByRelevanceInput = {
    fields: QualificationOrderByRelevanceFieldEnum | QualificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type QualificationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type QualificationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type QualificationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type QualificationScalarRelationFilter = {
    is?: QualificationWhereInput
    isNot?: QualificationWhereInput
  }

  export type UserQualificationOrderByRelevanceInput = {
    fields:
      | UserQualificationOrderByRelevanceFieldEnum
      | UserQualificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserQualificationUserIdQualificationIdCompoundUniqueInput = {
    userId: string
    qualificationId: string
  }

  export type UserQualificationCountOrderByAggregateInput = {
    userId?: SortOrder
    qualificationId?: SortOrder
    acquiredAt?: SortOrder
  }

  export type UserQualificationMaxOrderByAggregateInput = {
    userId?: SortOrder
    qualificationId?: SortOrder
    acquiredAt?: SortOrder
  }

  export type UserQualificationMinOrderByAggregateInput = {
    userId?: SortOrder
    qualificationId?: SortOrder
    acquiredAt?: SortOrder
  }

  export type SkillOrderByRelevanceInput = {
    fields: SkillOrderByRelevanceFieldEnum | SkillOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SkillScalarRelationFilter = {
    is?: SkillWhereInput
    isNot?: SkillWhereInput
  }

  export type UserSkillOrderByRelevanceInput = {
    fields: UserSkillOrderByRelevanceFieldEnum | UserSkillOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserSkillUserIdSkillIdCompoundUniqueInput = {
    userId: string
    skillId: string
  }

  export type UserSkillCountOrderByAggregateInput = {
    userId?: SortOrder
    skillId?: SortOrder
  }

  export type UserSkillMaxOrderByAggregateInput = {
    userId?: SortOrder
    skillId?: SortOrder
  }

  export type UserSkillMinOrderByAggregateInput = {
    userId?: SortOrder
    skillId?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProjectTechStackListRelationFilter = {
    every?: ProjectTechStackWhereInput
    some?: ProjectTechStackWhereInput
    none?: ProjectTechStackWhereInput
  }

  export type ProjectLanguageListRelationFilter = {
    every?: ProjectLanguageWhereInput
    some?: ProjectLanguageWhereInput
    none?: ProjectLanguageWhereInput
  }

  export type ProjectTechStackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectLanguageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelevanceInput = {
    fields: ProjectOrderByRelevanceFieldEnum | ProjectOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    role?: SortOrder
    developmentScale?: SortOrder
    overallScale?: SortOrder
    server?: SortOrder
    os?: SortOrder
    db?: SortOrder
    hasRequirementsDefinition?: SortOrder
    hasBasicDesign?: SortOrder
    hasDetailedDesign?: SortOrder
    hasImplementationUnitTest?: SortOrder
    hasIntegrationTest?: SortOrder
    hasSystemTest?: SortOrder
    hasMaintenanceOperation?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    developmentScale?: SortOrder
    overallScale?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    role?: SortOrder
    developmentScale?: SortOrder
    overallScale?: SortOrder
    server?: SortOrder
    os?: SortOrder
    db?: SortOrder
    hasRequirementsDefinition?: SortOrder
    hasBasicDesign?: SortOrder
    hasDetailedDesign?: SortOrder
    hasImplementationUnitTest?: SortOrder
    hasIntegrationTest?: SortOrder
    hasSystemTest?: SortOrder
    hasMaintenanceOperation?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    role?: SortOrder
    developmentScale?: SortOrder
    overallScale?: SortOrder
    server?: SortOrder
    os?: SortOrder
    db?: SortOrder
    hasRequirementsDefinition?: SortOrder
    hasBasicDesign?: SortOrder
    hasDetailedDesign?: SortOrder
    hasImplementationUnitTest?: SortOrder
    hasIntegrationTest?: SortOrder
    hasSystemTest?: SortOrder
    hasMaintenanceOperation?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    developmentScale?: SortOrder
    overallScale?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type TechStackScalarRelationFilter = {
    is?: TechStackWhereInput
    isNot?: TechStackWhereInput
  }

  export type ProjectTechStackOrderByRelevanceInput = {
    fields: ProjectTechStackOrderByRelevanceFieldEnum | ProjectTechStackOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProjectTechStackProjectIdTechStackIdCompoundUniqueInput = {
    projectId: string
    techStackId: string
  }

  export type ProjectTechStackCountOrderByAggregateInput = {
    projectId?: SortOrder
    techStackId?: SortOrder
  }

  export type ProjectTechStackMaxOrderByAggregateInput = {
    projectId?: SortOrder
    techStackId?: SortOrder
  }

  export type ProjectTechStackMinOrderByAggregateInput = {
    projectId?: SortOrder
    techStackId?: SortOrder
  }

  export type TechStackOrderByRelevanceInput = {
    fields: TechStackOrderByRelevanceFieldEnum | TechStackOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TechStackCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TechStackMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TechStackMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type LanguageScalarRelationFilter = {
    is?: LanguageWhereInput
    isNot?: LanguageWhereInput
  }

  export type ProjectLanguageOrderByRelevanceInput = {
    fields: ProjectLanguageOrderByRelevanceFieldEnum | ProjectLanguageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProjectLanguageProjectIdLanguageIdCompoundUniqueInput = {
    projectId: string
    languageId: string
  }

  export type ProjectLanguageCountOrderByAggregateInput = {
    projectId?: SortOrder
    languageId?: SortOrder
  }

  export type ProjectLanguageMaxOrderByAggregateInput = {
    projectId?: SortOrder
    languageId?: SortOrder
  }

  export type ProjectLanguageMinOrderByAggregateInput = {
    projectId?: SortOrder
    languageId?: SortOrder
  }

  export type LanguageOrderByRelevanceInput = {
    fields: LanguageOrderByRelevanceFieldEnum | LanguageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LanguageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type LanguageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type LanguageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UserQualificationCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          UserQualificationCreateWithoutUserInput,
          UserQualificationUncheckedCreateWithoutUserInput
        >
      | UserQualificationCreateWithoutUserInput[]
      | UserQualificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | UserQualificationCreateOrConnectWithoutUserInput
      | UserQualificationCreateOrConnectWithoutUserInput[]
    createMany?: UserQualificationCreateManyUserInputEnvelope
    connect?: UserQualificationWhereUniqueInput | UserQualificationWhereUniqueInput[]
  }

  export type UserSkillCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<UserSkillCreateWithoutUserInput, UserSkillUncheckedCreateWithoutUserInput>
      | UserSkillCreateWithoutUserInput[]
      | UserSkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | UserSkillCreateOrConnectWithoutUserInput
      | UserSkillCreateOrConnectWithoutUserInput[]
    createMany?: UserSkillCreateManyUserInputEnvelope
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
      | ProjectCreateWithoutUserInput[]
      | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | ProjectCreateOrConnectWithoutUserInput
      | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type UserQualificationUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          UserQualificationCreateWithoutUserInput,
          UserQualificationUncheckedCreateWithoutUserInput
        >
      | UserQualificationCreateWithoutUserInput[]
      | UserQualificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | UserQualificationCreateOrConnectWithoutUserInput
      | UserQualificationCreateOrConnectWithoutUserInput[]
    createMany?: UserQualificationCreateManyUserInputEnvelope
    connect?: UserQualificationWhereUniqueInput | UserQualificationWhereUniqueInput[]
  }

  export type UserSkillUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<UserSkillCreateWithoutUserInput, UserSkillUncheckedCreateWithoutUserInput>
      | UserSkillCreateWithoutUserInput[]
      | UserSkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | UserSkillCreateOrConnectWithoutUserInput
      | UserSkillCreateOrConnectWithoutUserInput[]
    createMany?: UserSkillCreateManyUserInputEnvelope
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
      | ProjectCreateWithoutUserInput[]
      | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | ProjectCreateOrConnectWithoutUserInput
      | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
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

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserQualificationUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          UserQualificationCreateWithoutUserInput,
          UserQualificationUncheckedCreateWithoutUserInput
        >
      | UserQualificationCreateWithoutUserInput[]
      | UserQualificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | UserQualificationCreateOrConnectWithoutUserInput
      | UserQualificationCreateOrConnectWithoutUserInput[]
    upsert?:
      | UserQualificationUpsertWithWhereUniqueWithoutUserInput
      | UserQualificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserQualificationCreateManyUserInputEnvelope
    set?: UserQualificationWhereUniqueInput | UserQualificationWhereUniqueInput[]
    disconnect?: UserQualificationWhereUniqueInput | UserQualificationWhereUniqueInput[]
    delete?: UserQualificationWhereUniqueInput | UserQualificationWhereUniqueInput[]
    connect?: UserQualificationWhereUniqueInput | UserQualificationWhereUniqueInput[]
    update?:
      | UserQualificationUpdateWithWhereUniqueWithoutUserInput
      | UserQualificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?:
      | UserQualificationUpdateManyWithWhereWithoutUserInput
      | UserQualificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserQualificationScalarWhereInput | UserQualificationScalarWhereInput[]
  }

  export type UserSkillUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<UserSkillCreateWithoutUserInput, UserSkillUncheckedCreateWithoutUserInput>
      | UserSkillCreateWithoutUserInput[]
      | UserSkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | UserSkillCreateOrConnectWithoutUserInput
      | UserSkillCreateOrConnectWithoutUserInput[]
    upsert?:
      | UserSkillUpsertWithWhereUniqueWithoutUserInput
      | UserSkillUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSkillCreateManyUserInputEnvelope
    set?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    disconnect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    delete?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    update?:
      | UserSkillUpdateWithWhereUniqueWithoutUserInput
      | UserSkillUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?:
      | UserSkillUpdateManyWithWhereWithoutUserInput
      | UserSkillUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSkillScalarWhereInput | UserSkillScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
      | ProjectCreateWithoutUserInput[]
      | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | ProjectCreateOrConnectWithoutUserInput
      | ProjectCreateOrConnectWithoutUserInput[]
    upsert?:
      | ProjectUpsertWithWhereUniqueWithoutUserInput
      | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?:
      | ProjectUpdateWithWhereUniqueWithoutUserInput
      | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?:
      | ProjectUpdateManyWithWhereWithoutUserInput
      | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type UserQualificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          UserQualificationCreateWithoutUserInput,
          UserQualificationUncheckedCreateWithoutUserInput
        >
      | UserQualificationCreateWithoutUserInput[]
      | UserQualificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | UserQualificationCreateOrConnectWithoutUserInput
      | UserQualificationCreateOrConnectWithoutUserInput[]
    upsert?:
      | UserQualificationUpsertWithWhereUniqueWithoutUserInput
      | UserQualificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserQualificationCreateManyUserInputEnvelope
    set?: UserQualificationWhereUniqueInput | UserQualificationWhereUniqueInput[]
    disconnect?: UserQualificationWhereUniqueInput | UserQualificationWhereUniqueInput[]
    delete?: UserQualificationWhereUniqueInput | UserQualificationWhereUniqueInput[]
    connect?: UserQualificationWhereUniqueInput | UserQualificationWhereUniqueInput[]
    update?:
      | UserQualificationUpdateWithWhereUniqueWithoutUserInput
      | UserQualificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?:
      | UserQualificationUpdateManyWithWhereWithoutUserInput
      | UserQualificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserQualificationScalarWhereInput | UserQualificationScalarWhereInput[]
  }

  export type UserSkillUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<UserSkillCreateWithoutUserInput, UserSkillUncheckedCreateWithoutUserInput>
      | UserSkillCreateWithoutUserInput[]
      | UserSkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | UserSkillCreateOrConnectWithoutUserInput
      | UserSkillCreateOrConnectWithoutUserInput[]
    upsert?:
      | UserSkillUpsertWithWhereUniqueWithoutUserInput
      | UserSkillUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSkillCreateManyUserInputEnvelope
    set?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    disconnect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    delete?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    update?:
      | UserSkillUpdateWithWhereUniqueWithoutUserInput
      | UserSkillUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?:
      | UserSkillUpdateManyWithWhereWithoutUserInput
      | UserSkillUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSkillScalarWhereInput | UserSkillScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
      | ProjectCreateWithoutUserInput[]
      | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?:
      | ProjectCreateOrConnectWithoutUserInput
      | ProjectCreateOrConnectWithoutUserInput[]
    upsert?:
      | ProjectUpsertWithWhereUniqueWithoutUserInput
      | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?:
      | ProjectUpdateWithWhereUniqueWithoutUserInput
      | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?:
      | ProjectUpdateManyWithWhereWithoutUserInput
      | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type UserQualificationCreateNestedManyWithoutQualificationInput = {
    create?:
      | XOR<
          UserQualificationCreateWithoutQualificationInput,
          UserQualificationUncheckedCreateWithoutQualificationInput
        >
      | UserQualificationCreateWithoutQualificationInput[]
      | UserQualificationUncheckedCreateWithoutQualificationInput[]
    connectOrCreate?:
      | UserQualificationCreateOrConnectWithoutQualificationInput
      | UserQualificationCreateOrConnectWithoutQualificationInput[]
    createMany?: UserQualificationCreateManyQualificationInputEnvelope
    connect?: UserQualificationWhereUniqueInput | UserQualificationWhereUniqueInput[]
  }

  export type UserQualificationUncheckedCreateNestedManyWithoutQualificationInput = {
    create?:
      | XOR<
          UserQualificationCreateWithoutQualificationInput,
          UserQualificationUncheckedCreateWithoutQualificationInput
        >
      | UserQualificationCreateWithoutQualificationInput[]
      | UserQualificationUncheckedCreateWithoutQualificationInput[]
    connectOrCreate?:
      | UserQualificationCreateOrConnectWithoutQualificationInput
      | UserQualificationCreateOrConnectWithoutQualificationInput[]
    createMany?: UserQualificationCreateManyQualificationInputEnvelope
    connect?: UserQualificationWhereUniqueInput | UserQualificationWhereUniqueInput[]
  }

  export type UserQualificationUpdateManyWithoutQualificationNestedInput = {
    create?:
      | XOR<
          UserQualificationCreateWithoutQualificationInput,
          UserQualificationUncheckedCreateWithoutQualificationInput
        >
      | UserQualificationCreateWithoutQualificationInput[]
      | UserQualificationUncheckedCreateWithoutQualificationInput[]
    connectOrCreate?:
      | UserQualificationCreateOrConnectWithoutQualificationInput
      | UserQualificationCreateOrConnectWithoutQualificationInput[]
    upsert?:
      | UserQualificationUpsertWithWhereUniqueWithoutQualificationInput
      | UserQualificationUpsertWithWhereUniqueWithoutQualificationInput[]
    createMany?: UserQualificationCreateManyQualificationInputEnvelope
    set?: UserQualificationWhereUniqueInput | UserQualificationWhereUniqueInput[]
    disconnect?: UserQualificationWhereUniqueInput | UserQualificationWhereUniqueInput[]
    delete?: UserQualificationWhereUniqueInput | UserQualificationWhereUniqueInput[]
    connect?: UserQualificationWhereUniqueInput | UserQualificationWhereUniqueInput[]
    update?:
      | UserQualificationUpdateWithWhereUniqueWithoutQualificationInput
      | UserQualificationUpdateWithWhereUniqueWithoutQualificationInput[]
    updateMany?:
      | UserQualificationUpdateManyWithWhereWithoutQualificationInput
      | UserQualificationUpdateManyWithWhereWithoutQualificationInput[]
    deleteMany?: UserQualificationScalarWhereInput | UserQualificationScalarWhereInput[]
  }

  export type UserQualificationUncheckedUpdateManyWithoutQualificationNestedInput = {
    create?:
      | XOR<
          UserQualificationCreateWithoutQualificationInput,
          UserQualificationUncheckedCreateWithoutQualificationInput
        >
      | UserQualificationCreateWithoutQualificationInput[]
      | UserQualificationUncheckedCreateWithoutQualificationInput[]
    connectOrCreate?:
      | UserQualificationCreateOrConnectWithoutQualificationInput
      | UserQualificationCreateOrConnectWithoutQualificationInput[]
    upsert?:
      | UserQualificationUpsertWithWhereUniqueWithoutQualificationInput
      | UserQualificationUpsertWithWhereUniqueWithoutQualificationInput[]
    createMany?: UserQualificationCreateManyQualificationInputEnvelope
    set?: UserQualificationWhereUniqueInput | UserQualificationWhereUniqueInput[]
    disconnect?: UserQualificationWhereUniqueInput | UserQualificationWhereUniqueInput[]
    delete?: UserQualificationWhereUniqueInput | UserQualificationWhereUniqueInput[]
    connect?: UserQualificationWhereUniqueInput | UserQualificationWhereUniqueInput[]
    update?:
      | UserQualificationUpdateWithWhereUniqueWithoutQualificationInput
      | UserQualificationUpdateWithWhereUniqueWithoutQualificationInput[]
    updateMany?:
      | UserQualificationUpdateManyWithWhereWithoutQualificationInput
      | UserQualificationUpdateManyWithWhereWithoutQualificationInput[]
    deleteMany?: UserQualificationScalarWhereInput | UserQualificationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutQualificationsInput = {
    create?: XOR<
      UserCreateWithoutQualificationsInput,
      UserUncheckedCreateWithoutQualificationsInput
    >
    connectOrCreate?: UserCreateOrConnectWithoutQualificationsInput
    connect?: UserWhereUniqueInput
  }

  export type QualificationCreateNestedOneWithoutUsersInput = {
    create?: XOR<
      QualificationCreateWithoutUsersInput,
      QualificationUncheckedCreateWithoutUsersInput
    >
    connectOrCreate?: QualificationCreateOrConnectWithoutUsersInput
    connect?: QualificationWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutQualificationsNestedInput = {
    create?: XOR<
      UserCreateWithoutQualificationsInput,
      UserUncheckedCreateWithoutQualificationsInput
    >
    connectOrCreate?: UserCreateOrConnectWithoutQualificationsInput
    upsert?: UserUpsertWithoutQualificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<
      XOR<UserUpdateToOneWithWhereWithoutQualificationsInput, UserUpdateWithoutQualificationsInput>,
      UserUncheckedUpdateWithoutQualificationsInput
    >
  }

  export type QualificationUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<
      QualificationCreateWithoutUsersInput,
      QualificationUncheckedCreateWithoutUsersInput
    >
    connectOrCreate?: QualificationCreateOrConnectWithoutUsersInput
    upsert?: QualificationUpsertWithoutUsersInput
    connect?: QualificationWhereUniqueInput
    update?: XOR<
      XOR<QualificationUpdateToOneWithWhereWithoutUsersInput, QualificationUpdateWithoutUsersInput>,
      QualificationUncheckedUpdateWithoutUsersInput
    >
  }

  export type UserSkillCreateNestedManyWithoutSkillInput = {
    create?:
      | XOR<UserSkillCreateWithoutSkillInput, UserSkillUncheckedCreateWithoutSkillInput>
      | UserSkillCreateWithoutSkillInput[]
      | UserSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?:
      | UserSkillCreateOrConnectWithoutSkillInput
      | UserSkillCreateOrConnectWithoutSkillInput[]
    createMany?: UserSkillCreateManySkillInputEnvelope
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
  }

  export type UserSkillUncheckedCreateNestedManyWithoutSkillInput = {
    create?:
      | XOR<UserSkillCreateWithoutSkillInput, UserSkillUncheckedCreateWithoutSkillInput>
      | UserSkillCreateWithoutSkillInput[]
      | UserSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?:
      | UserSkillCreateOrConnectWithoutSkillInput
      | UserSkillCreateOrConnectWithoutSkillInput[]
    createMany?: UserSkillCreateManySkillInputEnvelope
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
  }

  export type UserSkillUpdateManyWithoutSkillNestedInput = {
    create?:
      | XOR<UserSkillCreateWithoutSkillInput, UserSkillUncheckedCreateWithoutSkillInput>
      | UserSkillCreateWithoutSkillInput[]
      | UserSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?:
      | UserSkillCreateOrConnectWithoutSkillInput
      | UserSkillCreateOrConnectWithoutSkillInput[]
    upsert?:
      | UserSkillUpsertWithWhereUniqueWithoutSkillInput
      | UserSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: UserSkillCreateManySkillInputEnvelope
    set?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    disconnect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    delete?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    update?:
      | UserSkillUpdateWithWhereUniqueWithoutSkillInput
      | UserSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?:
      | UserSkillUpdateManyWithWhereWithoutSkillInput
      | UserSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: UserSkillScalarWhereInput | UserSkillScalarWhereInput[]
  }

  export type UserSkillUncheckedUpdateManyWithoutSkillNestedInput = {
    create?:
      | XOR<UserSkillCreateWithoutSkillInput, UserSkillUncheckedCreateWithoutSkillInput>
      | UserSkillCreateWithoutSkillInput[]
      | UserSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?:
      | UserSkillCreateOrConnectWithoutSkillInput
      | UserSkillCreateOrConnectWithoutSkillInput[]
    upsert?:
      | UserSkillUpsertWithWhereUniqueWithoutSkillInput
      | UserSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: UserSkillCreateManySkillInputEnvelope
    set?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    disconnect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    delete?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    update?:
      | UserSkillUpdateWithWhereUniqueWithoutSkillInput
      | UserSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?:
      | UserSkillUpdateManyWithWhereWithoutSkillInput
      | UserSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: UserSkillScalarWhereInput | UserSkillScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSkillsInput = {
    create?: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillsInput
    connect?: UserWhereUniqueInput
  }

  export type SkillCreateNestedOneWithoutUsersInput = {
    create?: XOR<SkillCreateWithoutUsersInput, SkillUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SkillCreateOrConnectWithoutUsersInput
    connect?: SkillWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillsInput
    upsert?: UserUpsertWithoutSkillsInput
    connect?: UserWhereUniqueInput
    update?: XOR<
      XOR<UserUpdateToOneWithWhereWithoutSkillsInput, UserUpdateWithoutSkillsInput>,
      UserUncheckedUpdateWithoutSkillsInput
    >
  }

  export type SkillUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<SkillCreateWithoutUsersInput, SkillUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SkillCreateOrConnectWithoutUsersInput
    upsert?: SkillUpsertWithoutUsersInput
    connect?: SkillWhereUniqueInput
    update?: XOR<
      XOR<SkillUpdateToOneWithWhereWithoutUsersInput, SkillUpdateWithoutUsersInput>,
      SkillUncheckedUpdateWithoutUsersInput
    >
  }

  export type ProjectTechStackCreateNestedManyWithoutProjectInput = {
    create?:
      | XOR<
          ProjectTechStackCreateWithoutProjectInput,
          ProjectTechStackUncheckedCreateWithoutProjectInput
        >
      | ProjectTechStackCreateWithoutProjectInput[]
      | ProjectTechStackUncheckedCreateWithoutProjectInput[]
    connectOrCreate?:
      | ProjectTechStackCreateOrConnectWithoutProjectInput
      | ProjectTechStackCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectTechStackCreateManyProjectInputEnvelope
    connect?: ProjectTechStackWhereUniqueInput | ProjectTechStackWhereUniqueInput[]
  }

  export type ProjectLanguageCreateNestedManyWithoutProjectInput = {
    create?:
      | XOR<
          ProjectLanguageCreateWithoutProjectInput,
          ProjectLanguageUncheckedCreateWithoutProjectInput
        >
      | ProjectLanguageCreateWithoutProjectInput[]
      | ProjectLanguageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?:
      | ProjectLanguageCreateOrConnectWithoutProjectInput
      | ProjectLanguageCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectLanguageCreateManyProjectInputEnvelope
    connect?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectTechStackUncheckedCreateNestedManyWithoutProjectInput = {
    create?:
      | XOR<
          ProjectTechStackCreateWithoutProjectInput,
          ProjectTechStackUncheckedCreateWithoutProjectInput
        >
      | ProjectTechStackCreateWithoutProjectInput[]
      | ProjectTechStackUncheckedCreateWithoutProjectInput[]
    connectOrCreate?:
      | ProjectTechStackCreateOrConnectWithoutProjectInput
      | ProjectTechStackCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectTechStackCreateManyProjectInputEnvelope
    connect?: ProjectTechStackWhereUniqueInput | ProjectTechStackWhereUniqueInput[]
  }

  export type ProjectLanguageUncheckedCreateNestedManyWithoutProjectInput = {
    create?:
      | XOR<
          ProjectLanguageCreateWithoutProjectInput,
          ProjectLanguageUncheckedCreateWithoutProjectInput
        >
      | ProjectLanguageCreateWithoutProjectInput[]
      | ProjectLanguageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?:
      | ProjectLanguageCreateOrConnectWithoutProjectInput
      | ProjectLanguageCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectLanguageCreateManyProjectInputEnvelope
    connect?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProjectTechStackUpdateManyWithoutProjectNestedInput = {
    create?:
      | XOR<
          ProjectTechStackCreateWithoutProjectInput,
          ProjectTechStackUncheckedCreateWithoutProjectInput
        >
      | ProjectTechStackCreateWithoutProjectInput[]
      | ProjectTechStackUncheckedCreateWithoutProjectInput[]
    connectOrCreate?:
      | ProjectTechStackCreateOrConnectWithoutProjectInput
      | ProjectTechStackCreateOrConnectWithoutProjectInput[]
    upsert?:
      | ProjectTechStackUpsertWithWhereUniqueWithoutProjectInput
      | ProjectTechStackUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectTechStackCreateManyProjectInputEnvelope
    set?: ProjectTechStackWhereUniqueInput | ProjectTechStackWhereUniqueInput[]
    disconnect?: ProjectTechStackWhereUniqueInput | ProjectTechStackWhereUniqueInput[]
    delete?: ProjectTechStackWhereUniqueInput | ProjectTechStackWhereUniqueInput[]
    connect?: ProjectTechStackWhereUniqueInput | ProjectTechStackWhereUniqueInput[]
    update?:
      | ProjectTechStackUpdateWithWhereUniqueWithoutProjectInput
      | ProjectTechStackUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?:
      | ProjectTechStackUpdateManyWithWhereWithoutProjectInput
      | ProjectTechStackUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectTechStackScalarWhereInput | ProjectTechStackScalarWhereInput[]
  }

  export type ProjectLanguageUpdateManyWithoutProjectNestedInput = {
    create?:
      | XOR<
          ProjectLanguageCreateWithoutProjectInput,
          ProjectLanguageUncheckedCreateWithoutProjectInput
        >
      | ProjectLanguageCreateWithoutProjectInput[]
      | ProjectLanguageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?:
      | ProjectLanguageCreateOrConnectWithoutProjectInput
      | ProjectLanguageCreateOrConnectWithoutProjectInput[]
    upsert?:
      | ProjectLanguageUpsertWithWhereUniqueWithoutProjectInput
      | ProjectLanguageUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectLanguageCreateManyProjectInputEnvelope
    set?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    disconnect?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    delete?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    connect?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    update?:
      | ProjectLanguageUpdateWithWhereUniqueWithoutProjectInput
      | ProjectLanguageUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?:
      | ProjectLanguageUpdateManyWithWhereWithoutProjectInput
      | ProjectLanguageUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectLanguageScalarWhereInput | ProjectLanguageScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<
      XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>,
      UserUncheckedUpdateWithoutProjectsInput
    >
  }

  export type ProjectTechStackUncheckedUpdateManyWithoutProjectNestedInput = {
    create?:
      | XOR<
          ProjectTechStackCreateWithoutProjectInput,
          ProjectTechStackUncheckedCreateWithoutProjectInput
        >
      | ProjectTechStackCreateWithoutProjectInput[]
      | ProjectTechStackUncheckedCreateWithoutProjectInput[]
    connectOrCreate?:
      | ProjectTechStackCreateOrConnectWithoutProjectInput
      | ProjectTechStackCreateOrConnectWithoutProjectInput[]
    upsert?:
      | ProjectTechStackUpsertWithWhereUniqueWithoutProjectInput
      | ProjectTechStackUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectTechStackCreateManyProjectInputEnvelope
    set?: ProjectTechStackWhereUniqueInput | ProjectTechStackWhereUniqueInput[]
    disconnect?: ProjectTechStackWhereUniqueInput | ProjectTechStackWhereUniqueInput[]
    delete?: ProjectTechStackWhereUniqueInput | ProjectTechStackWhereUniqueInput[]
    connect?: ProjectTechStackWhereUniqueInput | ProjectTechStackWhereUniqueInput[]
    update?:
      | ProjectTechStackUpdateWithWhereUniqueWithoutProjectInput
      | ProjectTechStackUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?:
      | ProjectTechStackUpdateManyWithWhereWithoutProjectInput
      | ProjectTechStackUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectTechStackScalarWhereInput | ProjectTechStackScalarWhereInput[]
  }

  export type ProjectLanguageUncheckedUpdateManyWithoutProjectNestedInput = {
    create?:
      | XOR<
          ProjectLanguageCreateWithoutProjectInput,
          ProjectLanguageUncheckedCreateWithoutProjectInput
        >
      | ProjectLanguageCreateWithoutProjectInput[]
      | ProjectLanguageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?:
      | ProjectLanguageCreateOrConnectWithoutProjectInput
      | ProjectLanguageCreateOrConnectWithoutProjectInput[]
    upsert?:
      | ProjectLanguageUpsertWithWhereUniqueWithoutProjectInput
      | ProjectLanguageUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectLanguageCreateManyProjectInputEnvelope
    set?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    disconnect?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    delete?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    connect?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    update?:
      | ProjectLanguageUpdateWithWhereUniqueWithoutProjectInput
      | ProjectLanguageUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?:
      | ProjectLanguageUpdateManyWithWhereWithoutProjectInput
      | ProjectLanguageUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectLanguageScalarWhereInput | ProjectLanguageScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutTechStacksInput = {
    create?: XOR<ProjectCreateWithoutTechStacksInput, ProjectUncheckedCreateWithoutTechStacksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTechStacksInput
    connect?: ProjectWhereUniqueInput
  }

  export type TechStackCreateNestedOneWithoutProjectsInput = {
    create?: XOR<TechStackCreateWithoutProjectsInput, TechStackUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: TechStackCreateOrConnectWithoutProjectsInput
    connect?: TechStackWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutTechStacksNestedInput = {
    create?: XOR<ProjectCreateWithoutTechStacksInput, ProjectUncheckedCreateWithoutTechStacksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTechStacksInput
    upsert?: ProjectUpsertWithoutTechStacksInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<
      XOR<ProjectUpdateToOneWithWhereWithoutTechStacksInput, ProjectUpdateWithoutTechStacksInput>,
      ProjectUncheckedUpdateWithoutTechStacksInput
    >
  }

  export type TechStackUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<TechStackCreateWithoutProjectsInput, TechStackUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: TechStackCreateOrConnectWithoutProjectsInput
    upsert?: TechStackUpsertWithoutProjectsInput
    connect?: TechStackWhereUniqueInput
    update?: XOR<
      XOR<TechStackUpdateToOneWithWhereWithoutProjectsInput, TechStackUpdateWithoutProjectsInput>,
      TechStackUncheckedUpdateWithoutProjectsInput
    >
  }

  export type ProjectTechStackCreateNestedManyWithoutTechStackInput = {
    create?:
      | XOR<
          ProjectTechStackCreateWithoutTechStackInput,
          ProjectTechStackUncheckedCreateWithoutTechStackInput
        >
      | ProjectTechStackCreateWithoutTechStackInput[]
      | ProjectTechStackUncheckedCreateWithoutTechStackInput[]
    connectOrCreate?:
      | ProjectTechStackCreateOrConnectWithoutTechStackInput
      | ProjectTechStackCreateOrConnectWithoutTechStackInput[]
    createMany?: ProjectTechStackCreateManyTechStackInputEnvelope
    connect?: ProjectTechStackWhereUniqueInput | ProjectTechStackWhereUniqueInput[]
  }

  export type ProjectTechStackUncheckedCreateNestedManyWithoutTechStackInput = {
    create?:
      | XOR<
          ProjectTechStackCreateWithoutTechStackInput,
          ProjectTechStackUncheckedCreateWithoutTechStackInput
        >
      | ProjectTechStackCreateWithoutTechStackInput[]
      | ProjectTechStackUncheckedCreateWithoutTechStackInput[]
    connectOrCreate?:
      | ProjectTechStackCreateOrConnectWithoutTechStackInput
      | ProjectTechStackCreateOrConnectWithoutTechStackInput[]
    createMany?: ProjectTechStackCreateManyTechStackInputEnvelope
    connect?: ProjectTechStackWhereUniqueInput | ProjectTechStackWhereUniqueInput[]
  }

  export type ProjectTechStackUpdateManyWithoutTechStackNestedInput = {
    create?:
      | XOR<
          ProjectTechStackCreateWithoutTechStackInput,
          ProjectTechStackUncheckedCreateWithoutTechStackInput
        >
      | ProjectTechStackCreateWithoutTechStackInput[]
      | ProjectTechStackUncheckedCreateWithoutTechStackInput[]
    connectOrCreate?:
      | ProjectTechStackCreateOrConnectWithoutTechStackInput
      | ProjectTechStackCreateOrConnectWithoutTechStackInput[]
    upsert?:
      | ProjectTechStackUpsertWithWhereUniqueWithoutTechStackInput
      | ProjectTechStackUpsertWithWhereUniqueWithoutTechStackInput[]
    createMany?: ProjectTechStackCreateManyTechStackInputEnvelope
    set?: ProjectTechStackWhereUniqueInput | ProjectTechStackWhereUniqueInput[]
    disconnect?: ProjectTechStackWhereUniqueInput | ProjectTechStackWhereUniqueInput[]
    delete?: ProjectTechStackWhereUniqueInput | ProjectTechStackWhereUniqueInput[]
    connect?: ProjectTechStackWhereUniqueInput | ProjectTechStackWhereUniqueInput[]
    update?:
      | ProjectTechStackUpdateWithWhereUniqueWithoutTechStackInput
      | ProjectTechStackUpdateWithWhereUniqueWithoutTechStackInput[]
    updateMany?:
      | ProjectTechStackUpdateManyWithWhereWithoutTechStackInput
      | ProjectTechStackUpdateManyWithWhereWithoutTechStackInput[]
    deleteMany?: ProjectTechStackScalarWhereInput | ProjectTechStackScalarWhereInput[]
  }

  export type ProjectTechStackUncheckedUpdateManyWithoutTechStackNestedInput = {
    create?:
      | XOR<
          ProjectTechStackCreateWithoutTechStackInput,
          ProjectTechStackUncheckedCreateWithoutTechStackInput
        >
      | ProjectTechStackCreateWithoutTechStackInput[]
      | ProjectTechStackUncheckedCreateWithoutTechStackInput[]
    connectOrCreate?:
      | ProjectTechStackCreateOrConnectWithoutTechStackInput
      | ProjectTechStackCreateOrConnectWithoutTechStackInput[]
    upsert?:
      | ProjectTechStackUpsertWithWhereUniqueWithoutTechStackInput
      | ProjectTechStackUpsertWithWhereUniqueWithoutTechStackInput[]
    createMany?: ProjectTechStackCreateManyTechStackInputEnvelope
    set?: ProjectTechStackWhereUniqueInput | ProjectTechStackWhereUniqueInput[]
    disconnect?: ProjectTechStackWhereUniqueInput | ProjectTechStackWhereUniqueInput[]
    delete?: ProjectTechStackWhereUniqueInput | ProjectTechStackWhereUniqueInput[]
    connect?: ProjectTechStackWhereUniqueInput | ProjectTechStackWhereUniqueInput[]
    update?:
      | ProjectTechStackUpdateWithWhereUniqueWithoutTechStackInput
      | ProjectTechStackUpdateWithWhereUniqueWithoutTechStackInput[]
    updateMany?:
      | ProjectTechStackUpdateManyWithWhereWithoutTechStackInput
      | ProjectTechStackUpdateManyWithWhereWithoutTechStackInput[]
    deleteMany?: ProjectTechStackScalarWhereInput | ProjectTechStackScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutLanguagesInput = {
    create?: XOR<ProjectCreateWithoutLanguagesInput, ProjectUncheckedCreateWithoutLanguagesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutLanguagesInput
    connect?: ProjectWhereUniqueInput
  }

  export type LanguageCreateNestedOneWithoutProjectsInput = {
    create?: XOR<LanguageCreateWithoutProjectsInput, LanguageUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: LanguageCreateOrConnectWithoutProjectsInput
    connect?: LanguageWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutLanguagesNestedInput = {
    create?: XOR<ProjectCreateWithoutLanguagesInput, ProjectUncheckedCreateWithoutLanguagesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutLanguagesInput
    upsert?: ProjectUpsertWithoutLanguagesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<
      XOR<ProjectUpdateToOneWithWhereWithoutLanguagesInput, ProjectUpdateWithoutLanguagesInput>,
      ProjectUncheckedUpdateWithoutLanguagesInput
    >
  }

  export type LanguageUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<LanguageCreateWithoutProjectsInput, LanguageUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: LanguageCreateOrConnectWithoutProjectsInput
    upsert?: LanguageUpsertWithoutProjectsInput
    connect?: LanguageWhereUniqueInput
    update?: XOR<
      XOR<LanguageUpdateToOneWithWhereWithoutProjectsInput, LanguageUpdateWithoutProjectsInput>,
      LanguageUncheckedUpdateWithoutProjectsInput
    >
  }

  export type ProjectLanguageCreateNestedManyWithoutLanguageInput = {
    create?:
      | XOR<
          ProjectLanguageCreateWithoutLanguageInput,
          ProjectLanguageUncheckedCreateWithoutLanguageInput
        >
      | ProjectLanguageCreateWithoutLanguageInput[]
      | ProjectLanguageUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?:
      | ProjectLanguageCreateOrConnectWithoutLanguageInput
      | ProjectLanguageCreateOrConnectWithoutLanguageInput[]
    createMany?: ProjectLanguageCreateManyLanguageInputEnvelope
    connect?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
  }

  export type ProjectLanguageUncheckedCreateNestedManyWithoutLanguageInput = {
    create?:
      | XOR<
          ProjectLanguageCreateWithoutLanguageInput,
          ProjectLanguageUncheckedCreateWithoutLanguageInput
        >
      | ProjectLanguageCreateWithoutLanguageInput[]
      | ProjectLanguageUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?:
      | ProjectLanguageCreateOrConnectWithoutLanguageInput
      | ProjectLanguageCreateOrConnectWithoutLanguageInput[]
    createMany?: ProjectLanguageCreateManyLanguageInputEnvelope
    connect?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
  }

  export type ProjectLanguageUpdateManyWithoutLanguageNestedInput = {
    create?:
      | XOR<
          ProjectLanguageCreateWithoutLanguageInput,
          ProjectLanguageUncheckedCreateWithoutLanguageInput
        >
      | ProjectLanguageCreateWithoutLanguageInput[]
      | ProjectLanguageUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?:
      | ProjectLanguageCreateOrConnectWithoutLanguageInput
      | ProjectLanguageCreateOrConnectWithoutLanguageInput[]
    upsert?:
      | ProjectLanguageUpsertWithWhereUniqueWithoutLanguageInput
      | ProjectLanguageUpsertWithWhereUniqueWithoutLanguageInput[]
    createMany?: ProjectLanguageCreateManyLanguageInputEnvelope
    set?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    disconnect?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    delete?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    connect?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    update?:
      | ProjectLanguageUpdateWithWhereUniqueWithoutLanguageInput
      | ProjectLanguageUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?:
      | ProjectLanguageUpdateManyWithWhereWithoutLanguageInput
      | ProjectLanguageUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: ProjectLanguageScalarWhereInput | ProjectLanguageScalarWhereInput[]
  }

  export type ProjectLanguageUncheckedUpdateManyWithoutLanguageNestedInput = {
    create?:
      | XOR<
          ProjectLanguageCreateWithoutLanguageInput,
          ProjectLanguageUncheckedCreateWithoutLanguageInput
        >
      | ProjectLanguageCreateWithoutLanguageInput[]
      | ProjectLanguageUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?:
      | ProjectLanguageCreateOrConnectWithoutLanguageInput
      | ProjectLanguageCreateOrConnectWithoutLanguageInput[]
    upsert?:
      | ProjectLanguageUpsertWithWhereUniqueWithoutLanguageInput
      | ProjectLanguageUpsertWithWhereUniqueWithoutLanguageInput[]
    createMany?: ProjectLanguageCreateManyLanguageInputEnvelope
    set?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    disconnect?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    delete?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    connect?: ProjectLanguageWhereUniqueInput | ProjectLanguageWhereUniqueInput[]
    update?:
      | ProjectLanguageUpdateWithWhereUniqueWithoutLanguageInput
      | ProjectLanguageUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?:
      | ProjectLanguageUpdateManyWithWhereWithoutLanguageInput
      | ProjectLanguageUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: ProjectLanguageScalarWhereInput | ProjectLanguageScalarWhereInput[]
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserQualificationCreateWithoutUserInput = {
    acquiredAt?: Date | string | null
    qualification: QualificationCreateNestedOneWithoutUsersInput
  }

  export type UserQualificationUncheckedCreateWithoutUserInput = {
    qualificationId: string
    acquiredAt?: Date | string | null
  }

  export type UserQualificationCreateOrConnectWithoutUserInput = {
    where: UserQualificationWhereUniqueInput
    create: XOR<
      UserQualificationCreateWithoutUserInput,
      UserQualificationUncheckedCreateWithoutUserInput
    >
  }

  export type UserQualificationCreateManyUserInputEnvelope = {
    data: UserQualificationCreateManyUserInput | UserQualificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSkillCreateWithoutUserInput = {
    skill: SkillCreateNestedOneWithoutUsersInput
  }

  export type UserSkillUncheckedCreateWithoutUserInput = {
    skillId: string
  }

  export type UserSkillCreateOrConnectWithoutUserInput = {
    where: UserSkillWhereUniqueInput
    create: XOR<UserSkillCreateWithoutUserInput, UserSkillUncheckedCreateWithoutUserInput>
  }

  export type UserSkillCreateManyUserInputEnvelope = {
    data: UserSkillCreateManyUserInput | UserSkillCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutUserInput = {
    id?: string
    title: string
    summary: string
    role?: string | null
    developmentScale?: number | null
    overallScale?: number | null
    server?: string | null
    os?: string | null
    db?: string | null
    hasRequirementsDefinition?: boolean
    hasBasicDesign?: boolean
    hasDetailedDesign?: boolean
    hasImplementationUnitTest?: boolean
    hasIntegrationTest?: boolean
    hasSystemTest?: boolean
    hasMaintenanceOperation?: boolean
    techStacks?: ProjectTechStackCreateNestedManyWithoutProjectInput
    languages?: ProjectLanguageCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    summary: string
    role?: string | null
    developmentScale?: number | null
    overallScale?: number | null
    server?: string | null
    os?: string | null
    db?: string | null
    hasRequirementsDefinition?: boolean
    hasBasicDesign?: boolean
    hasDetailedDesign?: boolean
    hasImplementationUnitTest?: boolean
    hasIntegrationTest?: boolean
    hasSystemTest?: boolean
    hasMaintenanceOperation?: boolean
    techStacks?: ProjectTechStackUncheckedCreateNestedManyWithoutProjectInput
    languages?: ProjectLanguageUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUserInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectCreateManyUserInputEnvelope = {
    data: ProjectCreateManyUserInput | ProjectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserQualificationUpsertWithWhereUniqueWithoutUserInput = {
    where: UserQualificationWhereUniqueInput
    update: XOR<
      UserQualificationUpdateWithoutUserInput,
      UserQualificationUncheckedUpdateWithoutUserInput
    >
    create: XOR<
      UserQualificationCreateWithoutUserInput,
      UserQualificationUncheckedCreateWithoutUserInput
    >
  }

  export type UserQualificationUpdateWithWhereUniqueWithoutUserInput = {
    where: UserQualificationWhereUniqueInput
    data: XOR<
      UserQualificationUpdateWithoutUserInput,
      UserQualificationUncheckedUpdateWithoutUserInput
    >
  }

  export type UserQualificationUpdateManyWithWhereWithoutUserInput = {
    where: UserQualificationScalarWhereInput
    data: XOR<
      UserQualificationUpdateManyMutationInput,
      UserQualificationUncheckedUpdateManyWithoutUserInput
    >
  }

  export type UserQualificationScalarWhereInput = {
    AND?: UserQualificationScalarWhereInput | UserQualificationScalarWhereInput[]
    OR?: UserQualificationScalarWhereInput[]
    NOT?: UserQualificationScalarWhereInput | UserQualificationScalarWhereInput[]
    userId?: StringFilter<'UserQualification'> | string
    qualificationId?: StringFilter<'UserQualification'> | string
    acquiredAt?: DateTimeNullableFilter<'UserQualification'> | Date | string | null
  }

  export type UserSkillUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSkillWhereUniqueInput
    update: XOR<UserSkillUpdateWithoutUserInput, UserSkillUncheckedUpdateWithoutUserInput>
    create: XOR<UserSkillCreateWithoutUserInput, UserSkillUncheckedCreateWithoutUserInput>
  }

  export type UserSkillUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSkillWhereUniqueInput
    data: XOR<UserSkillUpdateWithoutUserInput, UserSkillUncheckedUpdateWithoutUserInput>
  }

  export type UserSkillUpdateManyWithWhereWithoutUserInput = {
    where: UserSkillScalarWhereInput
    data: XOR<UserSkillUpdateManyMutationInput, UserSkillUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSkillScalarWhereInput = {
    AND?: UserSkillScalarWhereInput | UserSkillScalarWhereInput[]
    OR?: UserSkillScalarWhereInput[]
    NOT?: UserSkillScalarWhereInput | UserSkillScalarWhereInput[]
    userId?: StringFilter<'UserSkill'> | string
    skillId?: StringFilter<'UserSkill'> | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
  }

  export type ProjectUpdateManyWithWhereWithoutUserInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<'Project'> | string
    userId?: StringFilter<'Project'> | string
    title?: StringFilter<'Project'> | string
    summary?: StringFilter<'Project'> | string
    role?: StringNullableFilter<'Project'> | string | null
    developmentScale?: IntNullableFilter<'Project'> | number | null
    overallScale?: IntNullableFilter<'Project'> | number | null
    server?: StringNullableFilter<'Project'> | string | null
    os?: StringNullableFilter<'Project'> | string | null
    db?: StringNullableFilter<'Project'> | string | null
    hasRequirementsDefinition?: BoolFilter<'Project'> | boolean
    hasBasicDesign?: BoolFilter<'Project'> | boolean
    hasDetailedDesign?: BoolFilter<'Project'> | boolean
    hasImplementationUnitTest?: BoolFilter<'Project'> | boolean
    hasIntegrationTest?: BoolFilter<'Project'> | boolean
    hasSystemTest?: BoolFilter<'Project'> | boolean
    hasMaintenanceOperation?: BoolFilter<'Project'> | boolean
  }

  export type UserQualificationCreateWithoutQualificationInput = {
    acquiredAt?: Date | string | null
    user: UserCreateNestedOneWithoutQualificationsInput
  }

  export type UserQualificationUncheckedCreateWithoutQualificationInput = {
    userId: string
    acquiredAt?: Date | string | null
  }

  export type UserQualificationCreateOrConnectWithoutQualificationInput = {
    where: UserQualificationWhereUniqueInput
    create: XOR<
      UserQualificationCreateWithoutQualificationInput,
      UserQualificationUncheckedCreateWithoutQualificationInput
    >
  }

  export type UserQualificationCreateManyQualificationInputEnvelope = {
    data:
      | UserQualificationCreateManyQualificationInput
      | UserQualificationCreateManyQualificationInput[]
    skipDuplicates?: boolean
  }

  export type UserQualificationUpsertWithWhereUniqueWithoutQualificationInput = {
    where: UserQualificationWhereUniqueInput
    update: XOR<
      UserQualificationUpdateWithoutQualificationInput,
      UserQualificationUncheckedUpdateWithoutQualificationInput
    >
    create: XOR<
      UserQualificationCreateWithoutQualificationInput,
      UserQualificationUncheckedCreateWithoutQualificationInput
    >
  }

  export type UserQualificationUpdateWithWhereUniqueWithoutQualificationInput = {
    where: UserQualificationWhereUniqueInput
    data: XOR<
      UserQualificationUpdateWithoutQualificationInput,
      UserQualificationUncheckedUpdateWithoutQualificationInput
    >
  }

  export type UserQualificationUpdateManyWithWhereWithoutQualificationInput = {
    where: UserQualificationScalarWhereInput
    data: XOR<
      UserQualificationUpdateManyMutationInput,
      UserQualificationUncheckedUpdateManyWithoutQualificationInput
    >
  }

  export type UserCreateWithoutQualificationsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    nameKana?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    nationality?: string | null
    hasSpouse?: boolean | null
    nearestStation?: string | null
    specialties?: string | null
    selfPromotion?: string | null
    createdAt?: Date | string
    skills?: UserSkillCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQualificationsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    nameKana?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    nationality?: string | null
    hasSpouse?: boolean | null
    nearestStation?: string | null
    specialties?: string | null
    selfPromotion?: string | null
    createdAt?: Date | string
    skills?: UserSkillUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQualificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQualificationsInput, UserUncheckedCreateWithoutQualificationsInput>
  }

  export type QualificationCreateWithoutUsersInput = {
    id?: string
    name: string
  }

  export type QualificationUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
  }

  export type QualificationCreateOrConnectWithoutUsersInput = {
    where: QualificationWhereUniqueInput
    create: XOR<QualificationCreateWithoutUsersInput, QualificationUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutQualificationsInput = {
    update: XOR<UserUpdateWithoutQualificationsInput, UserUncheckedUpdateWithoutQualificationsInput>
    create: XOR<UserCreateWithoutQualificationsInput, UserUncheckedCreateWithoutQualificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQualificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQualificationsInput, UserUncheckedUpdateWithoutQualificationsInput>
  }

  export type UserUpdateWithoutQualificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nameKana?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    hasSpouse?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nearestStation?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: NullableStringFieldUpdateOperationsInput | string | null
    selfPromotion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserSkillUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutQualificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nameKana?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    hasSpouse?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nearestStation?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: NullableStringFieldUpdateOperationsInput | string | null
    selfPromotion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserSkillUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QualificationUpsertWithoutUsersInput = {
    update: XOR<QualificationUpdateWithoutUsersInput, QualificationUncheckedUpdateWithoutUsersInput>
    create: XOR<QualificationCreateWithoutUsersInput, QualificationUncheckedCreateWithoutUsersInput>
    where?: QualificationWhereInput
  }

  export type QualificationUpdateToOneWithWhereWithoutUsersInput = {
    where?: QualificationWhereInput
    data: XOR<QualificationUpdateWithoutUsersInput, QualificationUncheckedUpdateWithoutUsersInput>
  }

  export type QualificationUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type QualificationUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserSkillCreateWithoutSkillInput = {
    user: UserCreateNestedOneWithoutSkillsInput
  }

  export type UserSkillUncheckedCreateWithoutSkillInput = {
    userId: string
  }

  export type UserSkillCreateOrConnectWithoutSkillInput = {
    where: UserSkillWhereUniqueInput
    create: XOR<UserSkillCreateWithoutSkillInput, UserSkillUncheckedCreateWithoutSkillInput>
  }

  export type UserSkillCreateManySkillInputEnvelope = {
    data: UserSkillCreateManySkillInput | UserSkillCreateManySkillInput[]
    skipDuplicates?: boolean
  }

  export type UserSkillUpsertWithWhereUniqueWithoutSkillInput = {
    where: UserSkillWhereUniqueInput
    update: XOR<UserSkillUpdateWithoutSkillInput, UserSkillUncheckedUpdateWithoutSkillInput>
    create: XOR<UserSkillCreateWithoutSkillInput, UserSkillUncheckedCreateWithoutSkillInput>
  }

  export type UserSkillUpdateWithWhereUniqueWithoutSkillInput = {
    where: UserSkillWhereUniqueInput
    data: XOR<UserSkillUpdateWithoutSkillInput, UserSkillUncheckedUpdateWithoutSkillInput>
  }

  export type UserSkillUpdateManyWithWhereWithoutSkillInput = {
    where: UserSkillScalarWhereInput
    data: XOR<UserSkillUpdateManyMutationInput, UserSkillUncheckedUpdateManyWithoutSkillInput>
  }

  export type UserCreateWithoutSkillsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    nameKana?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    nationality?: string | null
    hasSpouse?: boolean | null
    nearestStation?: string | null
    specialties?: string | null
    selfPromotion?: string | null
    createdAt?: Date | string
    qualifications?: UserQualificationCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSkillsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    nameKana?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    nationality?: string | null
    hasSpouse?: boolean | null
    nearestStation?: string | null
    specialties?: string | null
    selfPromotion?: string | null
    createdAt?: Date | string
    qualifications?: UserQualificationUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSkillsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
  }

  export type SkillCreateWithoutUsersInput = {
    id?: string
    name: string
  }

  export type SkillUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
  }

  export type SkillCreateOrConnectWithoutUsersInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutUsersInput, SkillUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutSkillsInput = {
    update: XOR<UserUpdateWithoutSkillsInput, UserUncheckedUpdateWithoutSkillsInput>
    create: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSkillsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSkillsInput, UserUncheckedUpdateWithoutSkillsInput>
  }

  export type UserUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nameKana?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    hasSpouse?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nearestStation?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: NullableStringFieldUpdateOperationsInput | string | null
    selfPromotion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qualifications?: UserQualificationUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nameKana?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    hasSpouse?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nearestStation?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: NullableStringFieldUpdateOperationsInput | string | null
    selfPromotion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qualifications?: UserQualificationUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SkillUpsertWithoutUsersInput = {
    update: XOR<SkillUpdateWithoutUsersInput, SkillUncheckedUpdateWithoutUsersInput>
    create: XOR<SkillCreateWithoutUsersInput, SkillUncheckedCreateWithoutUsersInput>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutUsersInput = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutUsersInput, SkillUncheckedUpdateWithoutUsersInput>
  }

  export type SkillUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SkillUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectTechStackCreateWithoutProjectInput = {
    techStack: TechStackCreateNestedOneWithoutProjectsInput
  }

  export type ProjectTechStackUncheckedCreateWithoutProjectInput = {
    techStackId: string
  }

  export type ProjectTechStackCreateOrConnectWithoutProjectInput = {
    where: ProjectTechStackWhereUniqueInput
    create: XOR<
      ProjectTechStackCreateWithoutProjectInput,
      ProjectTechStackUncheckedCreateWithoutProjectInput
    >
  }

  export type ProjectTechStackCreateManyProjectInputEnvelope = {
    data: ProjectTechStackCreateManyProjectInput | ProjectTechStackCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectLanguageCreateWithoutProjectInput = {
    language: LanguageCreateNestedOneWithoutProjectsInput
  }

  export type ProjectLanguageUncheckedCreateWithoutProjectInput = {
    languageId: string
  }

  export type ProjectLanguageCreateOrConnectWithoutProjectInput = {
    where: ProjectLanguageWhereUniqueInput
    create: XOR<
      ProjectLanguageCreateWithoutProjectInput,
      ProjectLanguageUncheckedCreateWithoutProjectInput
    >
  }

  export type ProjectLanguageCreateManyProjectInputEnvelope = {
    data: ProjectLanguageCreateManyProjectInput | ProjectLanguageCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutProjectsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    nameKana?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    nationality?: string | null
    hasSpouse?: boolean | null
    nearestStation?: string | null
    specialties?: string | null
    selfPromotion?: string | null
    createdAt?: Date | string
    qualifications?: UserQualificationCreateNestedManyWithoutUserInput
    skills?: UserSkillCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    nameKana?: string | null
    gender?: string | null
    birthDate?: Date | string | null
    nationality?: string | null
    hasSpouse?: boolean | null
    nearestStation?: string | null
    specialties?: string | null
    selfPromotion?: string | null
    createdAt?: Date | string
    qualifications?: UserQualificationUncheckedCreateNestedManyWithoutUserInput
    skills?: UserSkillUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type ProjectTechStackUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectTechStackWhereUniqueInput
    update: XOR<
      ProjectTechStackUpdateWithoutProjectInput,
      ProjectTechStackUncheckedUpdateWithoutProjectInput
    >
    create: XOR<
      ProjectTechStackCreateWithoutProjectInput,
      ProjectTechStackUncheckedCreateWithoutProjectInput
    >
  }

  export type ProjectTechStackUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectTechStackWhereUniqueInput
    data: XOR<
      ProjectTechStackUpdateWithoutProjectInput,
      ProjectTechStackUncheckedUpdateWithoutProjectInput
    >
  }

  export type ProjectTechStackUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectTechStackScalarWhereInput
    data: XOR<
      ProjectTechStackUpdateManyMutationInput,
      ProjectTechStackUncheckedUpdateManyWithoutProjectInput
    >
  }

  export type ProjectTechStackScalarWhereInput = {
    AND?: ProjectTechStackScalarWhereInput | ProjectTechStackScalarWhereInput[]
    OR?: ProjectTechStackScalarWhereInput[]
    NOT?: ProjectTechStackScalarWhereInput | ProjectTechStackScalarWhereInput[]
    projectId?: StringFilter<'ProjectTechStack'> | string
    techStackId?: StringFilter<'ProjectTechStack'> | string
  }

  export type ProjectLanguageUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectLanguageWhereUniqueInput
    update: XOR<
      ProjectLanguageUpdateWithoutProjectInput,
      ProjectLanguageUncheckedUpdateWithoutProjectInput
    >
    create: XOR<
      ProjectLanguageCreateWithoutProjectInput,
      ProjectLanguageUncheckedCreateWithoutProjectInput
    >
  }

  export type ProjectLanguageUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectLanguageWhereUniqueInput
    data: XOR<
      ProjectLanguageUpdateWithoutProjectInput,
      ProjectLanguageUncheckedUpdateWithoutProjectInput
    >
  }

  export type ProjectLanguageUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectLanguageScalarWhereInput
    data: XOR<
      ProjectLanguageUpdateManyMutationInput,
      ProjectLanguageUncheckedUpdateManyWithoutProjectInput
    >
  }

  export type ProjectLanguageScalarWhereInput = {
    AND?: ProjectLanguageScalarWhereInput | ProjectLanguageScalarWhereInput[]
    OR?: ProjectLanguageScalarWhereInput[]
    NOT?: ProjectLanguageScalarWhereInput | ProjectLanguageScalarWhereInput[]
    projectId?: StringFilter<'ProjectLanguage'> | string
    languageId?: StringFilter<'ProjectLanguage'> | string
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nameKana?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    hasSpouse?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nearestStation?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: NullableStringFieldUpdateOperationsInput | string | null
    selfPromotion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qualifications?: UserQualificationUpdateManyWithoutUserNestedInput
    skills?: UserSkillUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nameKana?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    hasSpouse?: NullableBoolFieldUpdateOperationsInput | boolean | null
    nearestStation?: NullableStringFieldUpdateOperationsInput | string | null
    specialties?: NullableStringFieldUpdateOperationsInput | string | null
    selfPromotion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qualifications?: UserQualificationUncheckedUpdateManyWithoutUserNestedInput
    skills?: UserSkillUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectCreateWithoutTechStacksInput = {
    id?: string
    title: string
    summary: string
    role?: string | null
    developmentScale?: number | null
    overallScale?: number | null
    server?: string | null
    os?: string | null
    db?: string | null
    hasRequirementsDefinition?: boolean
    hasBasicDesign?: boolean
    hasDetailedDesign?: boolean
    hasImplementationUnitTest?: boolean
    hasIntegrationTest?: boolean
    hasSystemTest?: boolean
    hasMaintenanceOperation?: boolean
    languages?: ProjectLanguageCreateNestedManyWithoutProjectInput
    user: UserCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutTechStacksInput = {
    id?: string
    userId: string
    title: string
    summary: string
    role?: string | null
    developmentScale?: number | null
    overallScale?: number | null
    server?: string | null
    os?: string | null
    db?: string | null
    hasRequirementsDefinition?: boolean
    hasBasicDesign?: boolean
    hasDetailedDesign?: boolean
    hasImplementationUnitTest?: boolean
    hasIntegrationTest?: boolean
    hasSystemTest?: boolean
    hasMaintenanceOperation?: boolean
    languages?: ProjectLanguageUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutTechStacksInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTechStacksInput, ProjectUncheckedCreateWithoutTechStacksInput>
  }

  export type TechStackCreateWithoutProjectsInput = {
    id?: string
    name: string
  }

  export type TechStackUncheckedCreateWithoutProjectsInput = {
    id?: string
    name: string
  }

  export type TechStackCreateOrConnectWithoutProjectsInput = {
    where: TechStackWhereUniqueInput
    create: XOR<TechStackCreateWithoutProjectsInput, TechStackUncheckedCreateWithoutProjectsInput>
  }

  export type ProjectUpsertWithoutTechStacksInput = {
    update: XOR<ProjectUpdateWithoutTechStacksInput, ProjectUncheckedUpdateWithoutTechStacksInput>
    create: XOR<ProjectCreateWithoutTechStacksInput, ProjectUncheckedCreateWithoutTechStacksInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutTechStacksInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutTechStacksInput, ProjectUncheckedUpdateWithoutTechStacksInput>
  }

  export type ProjectUpdateWithoutTechStacksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    developmentScale?: NullableIntFieldUpdateOperationsInput | number | null
    overallScale?: NullableIntFieldUpdateOperationsInput | number | null
    server?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    db?: NullableStringFieldUpdateOperationsInput | string | null
    hasRequirementsDefinition?: BoolFieldUpdateOperationsInput | boolean
    hasBasicDesign?: BoolFieldUpdateOperationsInput | boolean
    hasDetailedDesign?: BoolFieldUpdateOperationsInput | boolean
    hasImplementationUnitTest?: BoolFieldUpdateOperationsInput | boolean
    hasIntegrationTest?: BoolFieldUpdateOperationsInput | boolean
    hasSystemTest?: BoolFieldUpdateOperationsInput | boolean
    hasMaintenanceOperation?: BoolFieldUpdateOperationsInput | boolean
    languages?: ProjectLanguageUpdateManyWithoutProjectNestedInput
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTechStacksInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    developmentScale?: NullableIntFieldUpdateOperationsInput | number | null
    overallScale?: NullableIntFieldUpdateOperationsInput | number | null
    server?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    db?: NullableStringFieldUpdateOperationsInput | string | null
    hasRequirementsDefinition?: BoolFieldUpdateOperationsInput | boolean
    hasBasicDesign?: BoolFieldUpdateOperationsInput | boolean
    hasDetailedDesign?: BoolFieldUpdateOperationsInput | boolean
    hasImplementationUnitTest?: BoolFieldUpdateOperationsInput | boolean
    hasIntegrationTest?: BoolFieldUpdateOperationsInput | boolean
    hasSystemTest?: BoolFieldUpdateOperationsInput | boolean
    hasMaintenanceOperation?: BoolFieldUpdateOperationsInput | boolean
    languages?: ProjectLanguageUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type TechStackUpsertWithoutProjectsInput = {
    update: XOR<TechStackUpdateWithoutProjectsInput, TechStackUncheckedUpdateWithoutProjectsInput>
    create: XOR<TechStackCreateWithoutProjectsInput, TechStackUncheckedCreateWithoutProjectsInput>
    where?: TechStackWhereInput
  }

  export type TechStackUpdateToOneWithWhereWithoutProjectsInput = {
    where?: TechStackWhereInput
    data: XOR<TechStackUpdateWithoutProjectsInput, TechStackUncheckedUpdateWithoutProjectsInput>
  }

  export type TechStackUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TechStackUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectTechStackCreateWithoutTechStackInput = {
    project: ProjectCreateNestedOneWithoutTechStacksInput
  }

  export type ProjectTechStackUncheckedCreateWithoutTechStackInput = {
    projectId: string
  }

  export type ProjectTechStackCreateOrConnectWithoutTechStackInput = {
    where: ProjectTechStackWhereUniqueInput
    create: XOR<
      ProjectTechStackCreateWithoutTechStackInput,
      ProjectTechStackUncheckedCreateWithoutTechStackInput
    >
  }

  export type ProjectTechStackCreateManyTechStackInputEnvelope = {
    data: ProjectTechStackCreateManyTechStackInput | ProjectTechStackCreateManyTechStackInput[]
    skipDuplicates?: boolean
  }

  export type ProjectTechStackUpsertWithWhereUniqueWithoutTechStackInput = {
    where: ProjectTechStackWhereUniqueInput
    update: XOR<
      ProjectTechStackUpdateWithoutTechStackInput,
      ProjectTechStackUncheckedUpdateWithoutTechStackInput
    >
    create: XOR<
      ProjectTechStackCreateWithoutTechStackInput,
      ProjectTechStackUncheckedCreateWithoutTechStackInput
    >
  }

  export type ProjectTechStackUpdateWithWhereUniqueWithoutTechStackInput = {
    where: ProjectTechStackWhereUniqueInput
    data: XOR<
      ProjectTechStackUpdateWithoutTechStackInput,
      ProjectTechStackUncheckedUpdateWithoutTechStackInput
    >
  }

  export type ProjectTechStackUpdateManyWithWhereWithoutTechStackInput = {
    where: ProjectTechStackScalarWhereInput
    data: XOR<
      ProjectTechStackUpdateManyMutationInput,
      ProjectTechStackUncheckedUpdateManyWithoutTechStackInput
    >
  }

  export type ProjectCreateWithoutLanguagesInput = {
    id?: string
    title: string
    summary: string
    role?: string | null
    developmentScale?: number | null
    overallScale?: number | null
    server?: string | null
    os?: string | null
    db?: string | null
    hasRequirementsDefinition?: boolean
    hasBasicDesign?: boolean
    hasDetailedDesign?: boolean
    hasImplementationUnitTest?: boolean
    hasIntegrationTest?: boolean
    hasSystemTest?: boolean
    hasMaintenanceOperation?: boolean
    techStacks?: ProjectTechStackCreateNestedManyWithoutProjectInput
    user: UserCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutLanguagesInput = {
    id?: string
    userId: string
    title: string
    summary: string
    role?: string | null
    developmentScale?: number | null
    overallScale?: number | null
    server?: string | null
    os?: string | null
    db?: string | null
    hasRequirementsDefinition?: boolean
    hasBasicDesign?: boolean
    hasDetailedDesign?: boolean
    hasImplementationUnitTest?: boolean
    hasIntegrationTest?: boolean
    hasSystemTest?: boolean
    hasMaintenanceOperation?: boolean
    techStacks?: ProjectTechStackUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutLanguagesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutLanguagesInput, ProjectUncheckedCreateWithoutLanguagesInput>
  }

  export type LanguageCreateWithoutProjectsInput = {
    id?: string
    name: string
  }

  export type LanguageUncheckedCreateWithoutProjectsInput = {
    id?: string
    name: string
  }

  export type LanguageCreateOrConnectWithoutProjectsInput = {
    where: LanguageWhereUniqueInput
    create: XOR<LanguageCreateWithoutProjectsInput, LanguageUncheckedCreateWithoutProjectsInput>
  }

  export type ProjectUpsertWithoutLanguagesInput = {
    update: XOR<ProjectUpdateWithoutLanguagesInput, ProjectUncheckedUpdateWithoutLanguagesInput>
    create: XOR<ProjectCreateWithoutLanguagesInput, ProjectUncheckedCreateWithoutLanguagesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutLanguagesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutLanguagesInput, ProjectUncheckedUpdateWithoutLanguagesInput>
  }

  export type ProjectUpdateWithoutLanguagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    developmentScale?: NullableIntFieldUpdateOperationsInput | number | null
    overallScale?: NullableIntFieldUpdateOperationsInput | number | null
    server?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    db?: NullableStringFieldUpdateOperationsInput | string | null
    hasRequirementsDefinition?: BoolFieldUpdateOperationsInput | boolean
    hasBasicDesign?: BoolFieldUpdateOperationsInput | boolean
    hasDetailedDesign?: BoolFieldUpdateOperationsInput | boolean
    hasImplementationUnitTest?: BoolFieldUpdateOperationsInput | boolean
    hasIntegrationTest?: BoolFieldUpdateOperationsInput | boolean
    hasSystemTest?: BoolFieldUpdateOperationsInput | boolean
    hasMaintenanceOperation?: BoolFieldUpdateOperationsInput | boolean
    techStacks?: ProjectTechStackUpdateManyWithoutProjectNestedInput
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutLanguagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    developmentScale?: NullableIntFieldUpdateOperationsInput | number | null
    overallScale?: NullableIntFieldUpdateOperationsInput | number | null
    server?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    db?: NullableStringFieldUpdateOperationsInput | string | null
    hasRequirementsDefinition?: BoolFieldUpdateOperationsInput | boolean
    hasBasicDesign?: BoolFieldUpdateOperationsInput | boolean
    hasDetailedDesign?: BoolFieldUpdateOperationsInput | boolean
    hasImplementationUnitTest?: BoolFieldUpdateOperationsInput | boolean
    hasIntegrationTest?: BoolFieldUpdateOperationsInput | boolean
    hasSystemTest?: BoolFieldUpdateOperationsInput | boolean
    hasMaintenanceOperation?: BoolFieldUpdateOperationsInput | boolean
    techStacks?: ProjectTechStackUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type LanguageUpsertWithoutProjectsInput = {
    update: XOR<LanguageUpdateWithoutProjectsInput, LanguageUncheckedUpdateWithoutProjectsInput>
    create: XOR<LanguageCreateWithoutProjectsInput, LanguageUncheckedCreateWithoutProjectsInput>
    where?: LanguageWhereInput
  }

  export type LanguageUpdateToOneWithWhereWithoutProjectsInput = {
    where?: LanguageWhereInput
    data: XOR<LanguageUpdateWithoutProjectsInput, LanguageUncheckedUpdateWithoutProjectsInput>
  }

  export type LanguageUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LanguageUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectLanguageCreateWithoutLanguageInput = {
    project: ProjectCreateNestedOneWithoutLanguagesInput
  }

  export type ProjectLanguageUncheckedCreateWithoutLanguageInput = {
    projectId: string
  }

  export type ProjectLanguageCreateOrConnectWithoutLanguageInput = {
    where: ProjectLanguageWhereUniqueInput
    create: XOR<
      ProjectLanguageCreateWithoutLanguageInput,
      ProjectLanguageUncheckedCreateWithoutLanguageInput
    >
  }

  export type ProjectLanguageCreateManyLanguageInputEnvelope = {
    data: ProjectLanguageCreateManyLanguageInput | ProjectLanguageCreateManyLanguageInput[]
    skipDuplicates?: boolean
  }

  export type ProjectLanguageUpsertWithWhereUniqueWithoutLanguageInput = {
    where: ProjectLanguageWhereUniqueInput
    update: XOR<
      ProjectLanguageUpdateWithoutLanguageInput,
      ProjectLanguageUncheckedUpdateWithoutLanguageInput
    >
    create: XOR<
      ProjectLanguageCreateWithoutLanguageInput,
      ProjectLanguageUncheckedCreateWithoutLanguageInput
    >
  }

  export type ProjectLanguageUpdateWithWhereUniqueWithoutLanguageInput = {
    where: ProjectLanguageWhereUniqueInput
    data: XOR<
      ProjectLanguageUpdateWithoutLanguageInput,
      ProjectLanguageUncheckedUpdateWithoutLanguageInput
    >
  }

  export type ProjectLanguageUpdateManyWithWhereWithoutLanguageInput = {
    where: ProjectLanguageScalarWhereInput
    data: XOR<
      ProjectLanguageUpdateManyMutationInput,
      ProjectLanguageUncheckedUpdateManyWithoutLanguageInput
    >
  }

  export type UserQualificationCreateManyUserInput = {
    qualificationId: string
    acquiredAt?: Date | string | null
  }

  export type UserSkillCreateManyUserInput = {
    skillId: string
  }

  export type ProjectCreateManyUserInput = {
    id?: string
    title: string
    summary: string
    role?: string | null
    developmentScale?: number | null
    overallScale?: number | null
    server?: string | null
    os?: string | null
    db?: string | null
    hasRequirementsDefinition?: boolean
    hasBasicDesign?: boolean
    hasDetailedDesign?: boolean
    hasImplementationUnitTest?: boolean
    hasIntegrationTest?: boolean
    hasSystemTest?: boolean
    hasMaintenanceOperation?: boolean
  }

  export type UserQualificationUpdateWithoutUserInput = {
    acquiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qualification?: QualificationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserQualificationUncheckedUpdateWithoutUserInput = {
    qualificationId?: StringFieldUpdateOperationsInput | string
    acquiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserQualificationUncheckedUpdateManyWithoutUserInput = {
    qualificationId?: StringFieldUpdateOperationsInput | string
    acquiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserSkillUpdateWithoutUserInput = {
    skill?: SkillUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserSkillUncheckedUpdateWithoutUserInput = {
    skillId?: StringFieldUpdateOperationsInput | string
  }

  export type UserSkillUncheckedUpdateManyWithoutUserInput = {
    skillId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    developmentScale?: NullableIntFieldUpdateOperationsInput | number | null
    overallScale?: NullableIntFieldUpdateOperationsInput | number | null
    server?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    db?: NullableStringFieldUpdateOperationsInput | string | null
    hasRequirementsDefinition?: BoolFieldUpdateOperationsInput | boolean
    hasBasicDesign?: BoolFieldUpdateOperationsInput | boolean
    hasDetailedDesign?: BoolFieldUpdateOperationsInput | boolean
    hasImplementationUnitTest?: BoolFieldUpdateOperationsInput | boolean
    hasIntegrationTest?: BoolFieldUpdateOperationsInput | boolean
    hasSystemTest?: BoolFieldUpdateOperationsInput | boolean
    hasMaintenanceOperation?: BoolFieldUpdateOperationsInput | boolean
    techStacks?: ProjectTechStackUpdateManyWithoutProjectNestedInput
    languages?: ProjectLanguageUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    developmentScale?: NullableIntFieldUpdateOperationsInput | number | null
    overallScale?: NullableIntFieldUpdateOperationsInput | number | null
    server?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    db?: NullableStringFieldUpdateOperationsInput | string | null
    hasRequirementsDefinition?: BoolFieldUpdateOperationsInput | boolean
    hasBasicDesign?: BoolFieldUpdateOperationsInput | boolean
    hasDetailedDesign?: BoolFieldUpdateOperationsInput | boolean
    hasImplementationUnitTest?: BoolFieldUpdateOperationsInput | boolean
    hasIntegrationTest?: BoolFieldUpdateOperationsInput | boolean
    hasSystemTest?: BoolFieldUpdateOperationsInput | boolean
    hasMaintenanceOperation?: BoolFieldUpdateOperationsInput | boolean
    techStacks?: ProjectTechStackUncheckedUpdateManyWithoutProjectNestedInput
    languages?: ProjectLanguageUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    developmentScale?: NullableIntFieldUpdateOperationsInput | number | null
    overallScale?: NullableIntFieldUpdateOperationsInput | number | null
    server?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    db?: NullableStringFieldUpdateOperationsInput | string | null
    hasRequirementsDefinition?: BoolFieldUpdateOperationsInput | boolean
    hasBasicDesign?: BoolFieldUpdateOperationsInput | boolean
    hasDetailedDesign?: BoolFieldUpdateOperationsInput | boolean
    hasImplementationUnitTest?: BoolFieldUpdateOperationsInput | boolean
    hasIntegrationTest?: BoolFieldUpdateOperationsInput | boolean
    hasSystemTest?: BoolFieldUpdateOperationsInput | boolean
    hasMaintenanceOperation?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserQualificationCreateManyQualificationInput = {
    userId: string
    acquiredAt?: Date | string | null
  }

  export type UserQualificationUpdateWithoutQualificationInput = {
    acquiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutQualificationsNestedInput
  }

  export type UserQualificationUncheckedUpdateWithoutQualificationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    acquiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserQualificationUncheckedUpdateManyWithoutQualificationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    acquiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserSkillCreateManySkillInput = {
    userId: string
  }

  export type UserSkillUpdateWithoutSkillInput = {
    user?: UserUpdateOneRequiredWithoutSkillsNestedInput
  }

  export type UserSkillUncheckedUpdateWithoutSkillInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserSkillUncheckedUpdateManyWithoutSkillInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectTechStackCreateManyProjectInput = {
    techStackId: string
  }

  export type ProjectLanguageCreateManyProjectInput = {
    languageId: string
  }

  export type ProjectTechStackUpdateWithoutProjectInput = {
    techStack?: TechStackUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectTechStackUncheckedUpdateWithoutProjectInput = {
    techStackId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectTechStackUncheckedUpdateManyWithoutProjectInput = {
    techStackId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectLanguageUpdateWithoutProjectInput = {
    language?: LanguageUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectLanguageUncheckedUpdateWithoutProjectInput = {
    languageId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectLanguageUncheckedUpdateManyWithoutProjectInput = {
    languageId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectTechStackCreateManyTechStackInput = {
    projectId: string
  }

  export type ProjectTechStackUpdateWithoutTechStackInput = {
    project?: ProjectUpdateOneRequiredWithoutTechStacksNestedInput
  }

  export type ProjectTechStackUncheckedUpdateWithoutTechStackInput = {
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectTechStackUncheckedUpdateManyWithoutTechStackInput = {
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectLanguageCreateManyLanguageInput = {
    projectId: string
  }

  export type ProjectLanguageUpdateWithoutLanguageInput = {
    project?: ProjectUpdateOneRequiredWithoutLanguagesNestedInput
  }

  export type ProjectLanguageUncheckedUpdateWithoutLanguageInput = {
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectLanguageUncheckedUpdateManyWithoutLanguageInput = {
    projectId?: StringFieldUpdateOperationsInput | string
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
