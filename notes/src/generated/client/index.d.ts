/**
 * Client
 **/

import * as runtime from "./runtime/client.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Subject
 *
 */
export type Subject = $Result.DefaultSelection<Prisma.$SubjectPayload>;
/**
 * Model Folder
 *
 */
export type Folder = $Result.DefaultSelection<Prisma.$FolderPayload>;
/**
 * Model Note
 *
 */
export type Note = $Result.DefaultSelection<Prisma.$NotePayload>;
/**
 * Model Tag
 *
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>;
/**
 * Model NoteTag
 *
 */
export type NoteTag = $Result.DefaultSelection<Prisma.$NoteTagPayload>;
/**
 * Model SharedNote
 *
 */
export type SharedNote = $Result.DefaultSelection<Prisma.$SharedNotePayload>;

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
  const U = "log" extends keyof ClientOptions
    ? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions["log"]>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

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

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent
    ) => void
  ): PrismaClient;

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
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

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
  ): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    }
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    "extends",
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

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
   * `prisma.subject`: Exposes CRUD operations for the **Subject** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Subjects
   * const subjects = await prisma.subject.findMany()
   * ```
   */
  get subject(): Prisma.SubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.folder`: Exposes CRUD operations for the **Folder** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Folders
   * const folders = await prisma.folder.findMany()
   * ```
   */
  get folder(): Prisma.FolderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.note`: Exposes CRUD operations for the **Note** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Notes
   * const notes = await prisma.note.findMany()
   * ```
   */
  get note(): Prisma.NoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Tags
   * const tags = await prisma.tag.findMany()
   * ```
   */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.noteTag`: Exposes CRUD operations for the **NoteTag** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more NoteTags
   * const noteTags = await prisma.noteTag.findMany()
   * ```
   */
  get noteTag(): Prisma.NoteTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sharedNote`: Exposes CRUD operations for the **SharedNote** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more SharedNotes
   * const sharedNotes = await prisma.sharedNote.findMany()
   * ```
   */
  get sharedNote(): Prisma.SharedNoteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string;
    engine: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import Bytes = runtime.Bytes;
  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : T extends SelectAndOmit
      ? "Please either choose `select` or `omit`."
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

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
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: "User";
    Subject: "Subject";
    Folder: "Folder";
    Note: "Note";
    Tag: "Tag";
    NoteTag: "NoteTag";
    SharedNote: "SharedNote";
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<
    { extArgs: $Extensions.InternalArgs },
    $Utils.Record<string, any>
  > {
    returns: Prisma.TypeMap<
      this["params"]["extArgs"],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | "user"
        | "subject"
        | "folder"
        | "note"
        | "tag"
        | "noteTag"
        | "sharedNote";
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Subject: {
        payload: Prisma.$SubjectPayload<ExtArgs>;
        fields: Prisma.SubjectFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.SubjectFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.SubjectFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>;
          };
          findFirst: {
            args: Prisma.SubjectFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.SubjectFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>;
          };
          findMany: {
            args: Prisma.SubjectFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[];
          };
          create: {
            args: Prisma.SubjectCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>;
          };
          createMany: {
            args: Prisma.SubjectCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.SubjectCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[];
          };
          delete: {
            args: Prisma.SubjectDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>;
          };
          update: {
            args: Prisma.SubjectUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>;
          };
          deleteMany: {
            args: Prisma.SubjectDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.SubjectUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.SubjectUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[];
          };
          upsert: {
            args: Prisma.SubjectUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>;
          };
          aggregate: {
            args: Prisma.SubjectAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSubject>;
          };
          groupBy: {
            args: Prisma.SubjectGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SubjectGroupByOutputType>[];
          };
          count: {
            args: Prisma.SubjectCountArgs<ExtArgs>;
            result: $Utils.Optional<SubjectCountAggregateOutputType> | number;
          };
        };
      };
      Folder: {
        payload: Prisma.$FolderPayload<ExtArgs>;
        fields: Prisma.FolderFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.FolderFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FolderPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.FolderFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>;
          };
          findFirst: {
            args: Prisma.FolderFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FolderPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.FolderFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>;
          };
          findMany: {
            args: Prisma.FolderFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>[];
          };
          create: {
            args: Prisma.FolderCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>;
          };
          createMany: {
            args: Prisma.FolderCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.FolderCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>[];
          };
          delete: {
            args: Prisma.FolderDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>;
          };
          update: {
            args: Prisma.FolderUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>;
          };
          deleteMany: {
            args: Prisma.FolderDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.FolderUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.FolderUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>[];
          };
          upsert: {
            args: Prisma.FolderUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>;
          };
          aggregate: {
            args: Prisma.FolderAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateFolder>;
          };
          groupBy: {
            args: Prisma.FolderGroupByArgs<ExtArgs>;
            result: $Utils.Optional<FolderGroupByOutputType>[];
          };
          count: {
            args: Prisma.FolderCountArgs<ExtArgs>;
            result: $Utils.Optional<FolderCountAggregateOutputType> | number;
          };
        };
      };
      Note: {
        payload: Prisma.$NotePayload<ExtArgs>;
        fields: Prisma.NoteFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.NoteFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.NoteFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotePayload>;
          };
          findFirst: {
            args: Prisma.NoteFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.NoteFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotePayload>;
          };
          findMany: {
            args: Prisma.NoteFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[];
          };
          create: {
            args: Prisma.NoteCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotePayload>;
          };
          createMany: {
            args: Prisma.NoteCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.NoteCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[];
          };
          delete: {
            args: Prisma.NoteDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotePayload>;
          };
          update: {
            args: Prisma.NoteUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotePayload>;
          };
          deleteMany: {
            args: Prisma.NoteDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.NoteUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.NoteUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[];
          };
          upsert: {
            args: Prisma.NoteUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NotePayload>;
          };
          aggregate: {
            args: Prisma.NoteAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateNote>;
          };
          groupBy: {
            args: Prisma.NoteGroupByArgs<ExtArgs>;
            result: $Utils.Optional<NoteGroupByOutputType>[];
          };
          count: {
            args: Prisma.NoteCountArgs<ExtArgs>;
            result: $Utils.Optional<NoteCountAggregateOutputType> | number;
          };
        };
      };
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>;
        fields: Prisma.TagFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[];
          };
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[];
          };
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[];
          };
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTag>;
          };
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TagGroupByOutputType>[];
          };
          count: {
            args: Prisma.TagCountArgs<ExtArgs>;
            result: $Utils.Optional<TagCountAggregateOutputType> | number;
          };
        };
      };
      NoteTag: {
        payload: Prisma.$NoteTagPayload<ExtArgs>;
        fields: Prisma.NoteTagFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.NoteTagFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.NoteTagFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload>;
          };
          findFirst: {
            args: Prisma.NoteTagFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.NoteTagFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload>;
          };
          findMany: {
            args: Prisma.NoteTagFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload>[];
          };
          create: {
            args: Prisma.NoteTagCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload>;
          };
          createMany: {
            args: Prisma.NoteTagCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.NoteTagCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload>[];
          };
          delete: {
            args: Prisma.NoteTagDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload>;
          };
          update: {
            args: Prisma.NoteTagUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload>;
          };
          deleteMany: {
            args: Prisma.NoteTagDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.NoteTagUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.NoteTagUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload>[];
          };
          upsert: {
            args: Prisma.NoteTagUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload>;
          };
          aggregate: {
            args: Prisma.NoteTagAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateNoteTag>;
          };
          groupBy: {
            args: Prisma.NoteTagGroupByArgs<ExtArgs>;
            result: $Utils.Optional<NoteTagGroupByOutputType>[];
          };
          count: {
            args: Prisma.NoteTagCountArgs<ExtArgs>;
            result: $Utils.Optional<NoteTagCountAggregateOutputType> | number;
          };
        };
      };
      SharedNote: {
        payload: Prisma.$SharedNotePayload<ExtArgs>;
        fields: Prisma.SharedNoteFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.SharedNoteFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SharedNotePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.SharedNoteFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SharedNotePayload>;
          };
          findFirst: {
            args: Prisma.SharedNoteFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SharedNotePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.SharedNoteFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SharedNotePayload>;
          };
          findMany: {
            args: Prisma.SharedNoteFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SharedNotePayload>[];
          };
          create: {
            args: Prisma.SharedNoteCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SharedNotePayload>;
          };
          createMany: {
            args: Prisma.SharedNoteCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.SharedNoteCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SharedNotePayload>[];
          };
          delete: {
            args: Prisma.SharedNoteDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SharedNotePayload>;
          };
          update: {
            args: Prisma.SharedNoteUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SharedNotePayload>;
          };
          deleteMany: {
            args: Prisma.SharedNoteDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.SharedNoteUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.SharedNoteUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SharedNotePayload>[];
          };
          upsert: {
            args: Prisma.SharedNoteUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SharedNotePayload>;
          };
          aggregate: {
            args: Prisma.SharedNoteAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSharedNote>;
          };
          groupBy: {
            args: Prisma.SharedNoteGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SharedNoteGroupByOutputType>[];
          };
          count: {
            args: Prisma.SharedNoteCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<SharedNoteCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    "define",
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory;
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string;
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
    omit?: Prisma.GlobalOmitConfig;
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
    comments?: runtime.SqlCommenterPlugin[];
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    subject?: SubjectOmit;
    folder?: FolderOmit;
    note?: NoteOmit;
    tag?: TagOmit;
    noteTag?: NoteTagOmit;
    sharedNote?: SharedNoteOmit;
  };

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T["level"] : T
  >;

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findUniqueOrThrow"
    | "findMany"
    | "findFirst"
    | "findFirstOrThrow"
    | "create"
    | "createMany"
    | "createManyAndReturn"
    | "update"
    | "updateMany"
    | "updateManyAndReturn"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"
    | "groupBy";

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    subjects: number;
    notes: number;
    shared: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    subjects?: boolean | UserCountOutputTypeCountSubjectsArgs;
    notes?: boolean | UserCountOutputTypeCountNotesArgs;
    shared?: boolean | UserCountOutputTypeCountSharedArgs;
  };

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
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubjectsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SubjectWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: NoteWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSharedArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SharedNoteWhereInput;
  };

  /**
   * Count Type SubjectCountOutputType
   */

  export type SubjectCountOutputType = {
    folders: number;
    notes: number;
  };

  export type SubjectCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    folders?: boolean | SubjectCountOutputTypeCountFoldersArgs;
    notes?: boolean | SubjectCountOutputTypeCountNotesArgs;
  };

  // Custom InputTypes
  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubjectCountOutputType
     */
    select?: SubjectCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountFoldersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FolderWhereInput;
  };

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountNotesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: NoteWhereInput;
  };

  /**
   * Count Type FolderCountOutputType
   */

  export type FolderCountOutputType = {
    notes: number;
  };

  export type FolderCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    notes?: boolean | FolderCountOutputTypeCountNotesArgs;
  };

  // Custom InputTypes
  /**
   * FolderCountOutputType without action
   */
  export type FolderCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the FolderCountOutputType
     */
    select?: FolderCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * FolderCountOutputType without action
   */
  export type FolderCountOutputTypeCountNotesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: NoteWhereInput;
  };

  /**
   * Count Type NoteCountOutputType
   */

  export type NoteCountOutputType = {
    tags: number;
    shares: number;
  };

  export type NoteCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    tags?: boolean | NoteCountOutputTypeCountTagsArgs;
    shares?: boolean | NoteCountOutputTypeCountSharesArgs;
  };

  // Custom InputTypes
  /**
   * NoteCountOutputType without action
   */
  export type NoteCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NoteCountOutputType
     */
    select?: NoteCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * NoteCountOutputType without action
   */
  export type NoteCountOutputTypeCountTagsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: NoteTagWhereInput;
  };

  /**
   * NoteCountOutputType without action
   */
  export type NoteCountOutputTypeCountSharesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SharedNoteWhereInput;
  };

  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    notes: number;
  };

  export type TagCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    notes?: boolean | TagCountOutputTypeCountNotesArgs;
  };

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountNotesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: NoteTagWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserAvgAggregateOutputType = {
    id: number | null;
  };

  export type UserSumAggregateOutputType = {
    id: number | null;
  };

  export type UserMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    email: string | null;
    password: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    email: string | null;
    password: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    password: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserAvgAggregateInputType = {
    id?: true;
  };

  export type UserSumAggregateInputType = {
    id?: true;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UserAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UserSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      password?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      subjects?: boolean | User$subjectsArgs<ExtArgs>;
      notes?: boolean | User$notesArgs<ExtArgs>;
      shared?: boolean | User$sharedArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      password?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      password?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "name" | "email" | "password" | "createdAt" | "updatedAt",
    ExtArgs["result"]["user"]
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    subjects?: boolean | User$subjectsArgs<ExtArgs>;
    notes?: boolean | User$notesArgs<ExtArgs>;
    shared?: boolean | User$sharedArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "User";
    objects: {
      subjects: Prisma.$SubjectPayload<ExtArgs>[];
      notes: Prisma.$NotePayload<ExtArgs>[];
      shared: Prisma.$SharedNotePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["user"]
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["User"];
      meta: { name: "User" };
    };
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
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

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
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

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
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

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
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    ): Prisma.PrismaPromise<BatchPayload>;

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

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
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    ): Prisma.PrismaPromise<BatchPayload>;

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
    ): Prisma.PrismaPromise<BatchPayload>;

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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

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
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserCountAggregateOutputType>
        : number
    >;

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
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

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
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs["orderBy"] }
        : { orderBy?: UserGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
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
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    subjects<T extends User$subjectsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$subjectsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$SubjectPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    notes<T extends User$notesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$notesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$NotePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    shared<T extends User$sharedArgs<ExtArgs> = {}>(
      args?: Subset<T, User$sharedArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$SharedNotePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", "Int">;
    readonly name: FieldRef<"User", "String">;
    readonly email: FieldRef<"User", "String">;
    readonly password: FieldRef<"User", "String">;
    readonly createdAt: FieldRef<"User", "DateTime">;
    readonly updatedAt: FieldRef<"User", "DateTime">;
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
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.subjects
   */
  export type User$subjectsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null;
    where?: SubjectWhereInput;
    orderBy?:
      | SubjectOrderByWithRelationInput
      | SubjectOrderByWithRelationInput[];
    cursor?: SubjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[];
  };

  /**
   * User.notes
   */
  export type User$notesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null;
    where?: NoteWhereInput;
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[];
    cursor?: NoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[];
  };

  /**
   * User.shared
   */
  export type User$sharedArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SharedNote
     */
    select?: SharedNoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SharedNote
     */
    omit?: SharedNoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedNoteInclude<ExtArgs> | null;
    where?: SharedNoteWhereInput;
    orderBy?:
      | SharedNoteOrderByWithRelationInput
      | SharedNoteOrderByWithRelationInput[];
    cursor?: SharedNoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: SharedNoteScalarFieldEnum | SharedNoteScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Subject
   */

  export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null;
    _avg: SubjectAvgAggregateOutputType | null;
    _sum: SubjectSumAggregateOutputType | null;
    _min: SubjectMinAggregateOutputType | null;
    _max: SubjectMaxAggregateOutputType | null;
  };

  export type SubjectAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
  };

  export type SubjectSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
  };

  export type SubjectMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    userId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type SubjectMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    userId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type SubjectCountAggregateOutputType = {
    id: number;
    name: number;
    userId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type SubjectAvgAggregateInputType = {
    id?: true;
    userId?: true;
  };

  export type SubjectSumAggregateInputType = {
    id?: true;
    userId?: true;
  };

  export type SubjectMinAggregateInputType = {
    id?: true;
    name?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type SubjectMaxAggregateInputType = {
    id?: true;
    name?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type SubjectCountAggregateInputType = {
    id?: true;
    name?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type SubjectAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Subject to aggregate.
     */
    where?: SubjectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subjects to fetch.
     */
    orderBy?:
      | SubjectOrderByWithRelationInput
      | SubjectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: SubjectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subjects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Subjects
     **/
    _count?: true | SubjectCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: SubjectAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: SubjectSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SubjectMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SubjectMaxAggregateInputType;
  };

  export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
    [P in keyof T & keyof AggregateSubject]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject[P]>
      : GetScalarType<T[P], AggregateSubject[P]>;
  };

  export type SubjectGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SubjectWhereInput;
    orderBy?:
      | SubjectOrderByWithAggregationInput
      | SubjectOrderByWithAggregationInput[];
    by: SubjectScalarFieldEnum[] | SubjectScalarFieldEnum;
    having?: SubjectScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SubjectCountAggregateInputType | true;
    _avg?: SubjectAvgAggregateInputType;
    _sum?: SubjectSumAggregateInputType;
    _min?: SubjectMinAggregateInputType;
    _max?: SubjectMaxAggregateInputType;
  };

  export type SubjectGroupByOutputType = {
    id: number;
    name: string;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    _count: SubjectCountAggregateOutputType | null;
    _avg: SubjectAvgAggregateOutputType | null;
    _sum: SubjectSumAggregateOutputType | null;
    _min: SubjectMinAggregateOutputType | null;
    _max: SubjectMaxAggregateOutputType | null;
  };

  type GetSubjectGroupByPayload<T extends SubjectGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<SubjectGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof SubjectGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectGroupByOutputType[P]>;
        }
      >
    >;

  export type SubjectSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      userId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      folders?: boolean | Subject$foldersArgs<ExtArgs>;
      notes?: boolean | Subject$notesArgs<ExtArgs>;
      _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["subject"]
  >;

  export type SubjectSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      userId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["subject"]
  >;

  export type SubjectSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      userId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["subject"]
  >;

  export type SubjectSelectScalar = {
    id?: boolean;
    name?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type SubjectOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "name" | "userId" | "createdAt" | "updatedAt",
    ExtArgs["result"]["subject"]
  >;
  export type SubjectInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    folders?: boolean | Subject$foldersArgs<ExtArgs>;
    notes?: boolean | Subject$notesArgs<ExtArgs>;
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type SubjectIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type SubjectIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $SubjectPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Subject";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      folders: Prisma.$FolderPayload<ExtArgs>[];
      notes: Prisma.$NotePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["subject"]
    >;
    composites: {};
  };

  type SubjectGetPayload<
    S extends boolean | null | undefined | SubjectDefaultArgs,
  > = $Result.GetResult<Prisma.$SubjectPayload, S>;

  type SubjectCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<SubjectFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: SubjectCountAggregateInputType | true;
  };

  export interface SubjectDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Subject"];
      meta: { name: "Subject" };
    };
    /**
     * Find zero or one Subject that matches the filter.
     * @param {SubjectFindUniqueArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectFindUniqueArgs>(
      args: SelectSubset<T, SubjectFindUniqueArgs<ExtArgs>>
    ): Prisma__SubjectClient<
      $Result.GetResult<
        Prisma.$SubjectPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Subject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubjectFindUniqueOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectFindUniqueOrThrowArgs>(
      args: SelectSubset<T, SubjectFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SubjectClient<
      $Result.GetResult<
        Prisma.$SubjectPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectFindFirstArgs>(
      args?: SelectSubset<T, SubjectFindFirstArgs<ExtArgs>>
    ): Prisma__SubjectClient<
      $Result.GetResult<
        Prisma.$SubjectPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SubjectFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SubjectClient<
      $Result.GetResult<
        Prisma.$SubjectPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subject.findMany()
     *
     * // Get first 10 Subjects
     * const subjects = await prisma.subject.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const subjectWithIdOnly = await prisma.subject.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SubjectFindManyArgs>(
      args?: SelectSubset<T, SubjectFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SubjectPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Subject.
     * @param {SubjectCreateArgs} args - Arguments to create a Subject.
     * @example
     * // Create one Subject
     * const Subject = await prisma.subject.create({
     *   data: {
     *     // ... data to create a Subject
     *   }
     * })
     *
     */
    create<T extends SubjectCreateArgs>(
      args: SelectSubset<T, SubjectCreateArgs<ExtArgs>>
    ): Prisma__SubjectClient<
      $Result.GetResult<
        Prisma.$SubjectPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Subjects.
     * @param {SubjectCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SubjectCreateManyArgs>(
      args?: SelectSubset<T, SubjectCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Subjects and returns the data saved in the database.
     * @param {SubjectCreateManyAndReturnArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SubjectCreateManyAndReturnArgs>(
      args?: SelectSubset<T, SubjectCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SubjectPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Subject.
     * @param {SubjectDeleteArgs} args - Arguments to delete one Subject.
     * @example
     * // Delete one Subject
     * const Subject = await prisma.subject.delete({
     *   where: {
     *     // ... filter to delete one Subject
     *   }
     * })
     *
     */
    delete<T extends SubjectDeleteArgs>(
      args: SelectSubset<T, SubjectDeleteArgs<ExtArgs>>
    ): Prisma__SubjectClient<
      $Result.GetResult<
        Prisma.$SubjectPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Subject.
     * @param {SubjectUpdateArgs} args - Arguments to update one Subject.
     * @example
     * // Update one Subject
     * const subject = await prisma.subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SubjectUpdateArgs>(
      args: SelectSubset<T, SubjectUpdateArgs<ExtArgs>>
    ): Prisma__SubjectClient<
      $Result.GetResult<
        Prisma.$SubjectPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Subjects.
     * @param {SubjectDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SubjectDeleteManyArgs>(
      args?: SelectSubset<T, SubjectDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SubjectUpdateManyArgs>(
      args: SelectSubset<T, SubjectUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Subjects and returns the data updated in the database.
     * @param {SubjectUpdateManyAndReturnArgs} args - Arguments to update many Subjects.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubjectUpdateManyAndReturnArgs>(
      args: SelectSubset<T, SubjectUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SubjectPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Subject.
     * @param {SubjectUpsertArgs} args - Arguments to update or create a Subject.
     * @example
     * // Update or create a Subject
     * const subject = await prisma.subject.upsert({
     *   create: {
     *     // ... data to create a Subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject we want to update
     *   }
     * })
     */
    upsert<T extends SubjectUpsertArgs>(
      args: SelectSubset<T, SubjectUpsertArgs<ExtArgs>>
    ): Prisma__SubjectClient<
      $Result.GetResult<
        Prisma.$SubjectPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subject.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
     **/
    count<T extends SubjectCountArgs>(
      args?: Subset<T, SubjectCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], SubjectCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubjectAggregateArgs>(
      args: Subset<T, SubjectAggregateArgs>
    ): Prisma.PrismaPromise<GetSubjectAggregateType<T>>;

    /**
     * Group by Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectGroupByArgs} args - Group by arguments.
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
      T extends SubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectGroupByArgs["orderBy"] }
        : { orderBy?: SubjectGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, SubjectGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetSubjectGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Subject model
     */
    readonly fields: SubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    folders<T extends Subject$foldersArgs<ExtArgs> = {}>(
      args?: Subset<T, Subject$foldersArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$FolderPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    notes<T extends Subject$notesArgs<ExtArgs> = {}>(
      args?: Subset<T, Subject$notesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$NotePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Subject model
   */
  interface SubjectFieldRefs {
    readonly id: FieldRef<"Subject", "Int">;
    readonly name: FieldRef<"Subject", "String">;
    readonly userId: FieldRef<"Subject", "Int">;
    readonly createdAt: FieldRef<"Subject", "DateTime">;
    readonly updatedAt: FieldRef<"Subject", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Subject findUnique
   */
  export type SubjectFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null;
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput;
  };

  /**
   * Subject findUniqueOrThrow
   */
  export type SubjectFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null;
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput;
  };

  /**
   * Subject findFirst
   */
  export type SubjectFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null;
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subjects to fetch.
     */
    orderBy?:
      | SubjectOrderByWithRelationInput
      | SubjectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subjects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[];
  };

  /**
   * Subject findFirstOrThrow
   */
  export type SubjectFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null;
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subjects to fetch.
     */
    orderBy?:
      | SubjectOrderByWithRelationInput
      | SubjectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subjects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[];
  };

  /**
   * Subject findMany
   */
  export type SubjectFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null;
    /**
     * Filter, which Subjects to fetch.
     */
    where?: SubjectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subjects to fetch.
     */
    orderBy?:
      | SubjectOrderByWithRelationInput
      | SubjectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Subjects.
     */
    cursor?: SubjectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subjects.
     */
    skip?: number;
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[];
  };

  /**
   * Subject create
   */
  export type SubjectCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null;
    /**
     * The data needed to create a Subject.
     */
    data: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>;
  };

  /**
   * Subject createMany
   */
  export type SubjectCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Subject createManyAndReturn
   */
  export type SubjectCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null;
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Subject update
   */
  export type SubjectUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null;
    /**
     * The data needed to update a Subject.
     */
    data: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>;
    /**
     * Choose, which Subject to update.
     */
    where: SubjectWhereUniqueInput;
  };

  /**
   * Subject updateMany
   */
  export type SubjectUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>;
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput;
    /**
     * Limit how many Subjects to update.
     */
    limit?: number;
  };

  /**
   * Subject updateManyAndReturn
   */
  export type SubjectUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null;
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>;
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput;
    /**
     * Limit how many Subjects to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Subject upsert
   */
  export type SubjectUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null;
    /**
     * The filter to search for the Subject to update in case it exists.
     */
    where: SubjectWhereUniqueInput;
    /**
     * In case the Subject found by the `where` argument doesn't exist, create a new Subject with this data.
     */
    create: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>;
    /**
     * In case the Subject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>;
  };

  /**
   * Subject delete
   */
  export type SubjectDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null;
    /**
     * Filter which Subject to delete.
     */
    where: SubjectWhereUniqueInput;
  };

  /**
   * Subject deleteMany
   */
  export type SubjectDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Subjects to delete
     */
    where?: SubjectWhereInput;
    /**
     * Limit how many Subjects to delete.
     */
    limit?: number;
  };

  /**
   * Subject.folders
   */
  export type Subject$foldersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null;
    where?: FolderWhereInput;
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[];
    cursor?: FolderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[];
  };

  /**
   * Subject.notes
   */
  export type Subject$notesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null;
    where?: NoteWhereInput;
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[];
    cursor?: NoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[];
  };

  /**
   * Subject without action
   */
  export type SubjectDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null;
  };

  /**
   * Model Folder
   */

  export type AggregateFolder = {
    _count: FolderCountAggregateOutputType | null;
    _avg: FolderAvgAggregateOutputType | null;
    _sum: FolderSumAggregateOutputType | null;
    _min: FolderMinAggregateOutputType | null;
    _max: FolderMaxAggregateOutputType | null;
  };

  export type FolderAvgAggregateOutputType = {
    id: number | null;
    subjectId: number | null;
  };

  export type FolderSumAggregateOutputType = {
    id: number | null;
    subjectId: number | null;
  };

  export type FolderMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    subjectId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type FolderMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    subjectId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type FolderCountAggregateOutputType = {
    id: number;
    name: number;
    subjectId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type FolderAvgAggregateInputType = {
    id?: true;
    subjectId?: true;
  };

  export type FolderSumAggregateInputType = {
    id?: true;
    subjectId?: true;
  };

  export type FolderMinAggregateInputType = {
    id?: true;
    name?: true;
    subjectId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type FolderMaxAggregateInputType = {
    id?: true;
    name?: true;
    subjectId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type FolderCountAggregateInputType = {
    id?: true;
    name?: true;
    subjectId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type FolderAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Folder to aggregate.
     */
    where?: FolderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Folders to fetch.
     */
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: FolderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Folders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Folders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Folders
     **/
    _count?: true | FolderCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: FolderAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: FolderSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: FolderMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: FolderMaxAggregateInputType;
  };

  export type GetFolderAggregateType<T extends FolderAggregateArgs> = {
    [P in keyof T & keyof AggregateFolder]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFolder[P]>
      : GetScalarType<T[P], AggregateFolder[P]>;
  };

  export type FolderGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FolderWhereInput;
    orderBy?:
      | FolderOrderByWithAggregationInput
      | FolderOrderByWithAggregationInput[];
    by: FolderScalarFieldEnum[] | FolderScalarFieldEnum;
    having?: FolderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FolderCountAggregateInputType | true;
    _avg?: FolderAvgAggregateInputType;
    _sum?: FolderSumAggregateInputType;
    _min?: FolderMinAggregateInputType;
    _max?: FolderMaxAggregateInputType;
  };

  export type FolderGroupByOutputType = {
    id: number;
    name: string;
    subjectId: number;
    createdAt: Date;
    updatedAt: Date;
    _count: FolderCountAggregateOutputType | null;
    _avg: FolderAvgAggregateOutputType | null;
    _sum: FolderSumAggregateOutputType | null;
    _min: FolderMinAggregateOutputType | null;
    _max: FolderMaxAggregateOutputType | null;
  };

  type GetFolderGroupByPayload<T extends FolderGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<FolderGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof FolderGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FolderGroupByOutputType[P]>
            : GetScalarType<T[P], FolderGroupByOutputType[P]>;
        }
      >
    >;

  export type FolderSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      subjectId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      subject?: boolean | SubjectDefaultArgs<ExtArgs>;
      notes?: boolean | Folder$notesArgs<ExtArgs>;
      _count?: boolean | FolderCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["folder"]
  >;

  export type FolderSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      subjectId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      subject?: boolean | SubjectDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["folder"]
  >;

  export type FolderSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      subjectId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      subject?: boolean | SubjectDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["folder"]
  >;

  export type FolderSelectScalar = {
    id?: boolean;
    name?: boolean;
    subjectId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type FolderOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "name" | "subjectId" | "createdAt" | "updatedAt",
    ExtArgs["result"]["folder"]
  >;
  export type FolderInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>;
    notes?: boolean | Folder$notesArgs<ExtArgs>;
    _count?: boolean | FolderCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type FolderIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>;
  };
  export type FolderIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>;
  };

  export type $FolderPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Folder";
    objects: {
      subject: Prisma.$SubjectPayload<ExtArgs>;
      notes: Prisma.$NotePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        subjectId: number;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["folder"]
    >;
    composites: {};
  };

  type FolderGetPayload<
    S extends boolean | null | undefined | FolderDefaultArgs,
  > = $Result.GetResult<Prisma.$FolderPayload, S>;

  type FolderCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<FolderFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: FolderCountAggregateInputType | true;
  };

  export interface FolderDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Folder"];
      meta: { name: "Folder" };
    };
    /**
     * Find zero or one Folder that matches the filter.
     * @param {FolderFindUniqueArgs} args - Arguments to find a Folder
     * @example
     * // Get one Folder
     * const folder = await prisma.folder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FolderFindUniqueArgs>(
      args: SelectSubset<T, FolderFindUniqueArgs<ExtArgs>>
    ): Prisma__FolderClient<
      $Result.GetResult<
        Prisma.$FolderPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Folder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FolderFindUniqueOrThrowArgs} args - Arguments to find a Folder
     * @example
     * // Get one Folder
     * const folder = await prisma.folder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FolderFindUniqueOrThrowArgs>(
      args: SelectSubset<T, FolderFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FolderClient<
      $Result.GetResult<
        Prisma.$FolderPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Folder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderFindFirstArgs} args - Arguments to find a Folder
     * @example
     * // Get one Folder
     * const folder = await prisma.folder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FolderFindFirstArgs>(
      args?: SelectSubset<T, FolderFindFirstArgs<ExtArgs>>
    ): Prisma__FolderClient<
      $Result.GetResult<
        Prisma.$FolderPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Folder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderFindFirstOrThrowArgs} args - Arguments to find a Folder
     * @example
     * // Get one Folder
     * const folder = await prisma.folder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FolderFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FolderFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FolderClient<
      $Result.GetResult<
        Prisma.$FolderPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Folders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Folders
     * const folders = await prisma.folder.findMany()
     *
     * // Get first 10 Folders
     * const folders = await prisma.folder.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const folderWithIdOnly = await prisma.folder.findMany({ select: { id: true } })
     *
     */
    findMany<T extends FolderFindManyArgs>(
      args?: SelectSubset<T, FolderFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FolderPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Folder.
     * @param {FolderCreateArgs} args - Arguments to create a Folder.
     * @example
     * // Create one Folder
     * const Folder = await prisma.folder.create({
     *   data: {
     *     // ... data to create a Folder
     *   }
     * })
     *
     */
    create<T extends FolderCreateArgs>(
      args: SelectSubset<T, FolderCreateArgs<ExtArgs>>
    ): Prisma__FolderClient<
      $Result.GetResult<
        Prisma.$FolderPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Folders.
     * @param {FolderCreateManyArgs} args - Arguments to create many Folders.
     * @example
     * // Create many Folders
     * const folder = await prisma.folder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FolderCreateManyArgs>(
      args?: SelectSubset<T, FolderCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Folders and returns the data saved in the database.
     * @param {FolderCreateManyAndReturnArgs} args - Arguments to create many Folders.
     * @example
     * // Create many Folders
     * const folder = await prisma.folder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Folders and only return the `id`
     * const folderWithIdOnly = await prisma.folder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends FolderCreateManyAndReturnArgs>(
      args?: SelectSubset<T, FolderCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FolderPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Folder.
     * @param {FolderDeleteArgs} args - Arguments to delete one Folder.
     * @example
     * // Delete one Folder
     * const Folder = await prisma.folder.delete({
     *   where: {
     *     // ... filter to delete one Folder
     *   }
     * })
     *
     */
    delete<T extends FolderDeleteArgs>(
      args: SelectSubset<T, FolderDeleteArgs<ExtArgs>>
    ): Prisma__FolderClient<
      $Result.GetResult<
        Prisma.$FolderPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Folder.
     * @param {FolderUpdateArgs} args - Arguments to update one Folder.
     * @example
     * // Update one Folder
     * const folder = await prisma.folder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FolderUpdateArgs>(
      args: SelectSubset<T, FolderUpdateArgs<ExtArgs>>
    ): Prisma__FolderClient<
      $Result.GetResult<
        Prisma.$FolderPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Folders.
     * @param {FolderDeleteManyArgs} args - Arguments to filter Folders to delete.
     * @example
     * // Delete a few Folders
     * const { count } = await prisma.folder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FolderDeleteManyArgs>(
      args?: SelectSubset<T, FolderDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Folders
     * const folder = await prisma.folder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FolderUpdateManyArgs>(
      args: SelectSubset<T, FolderUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Folders and returns the data updated in the database.
     * @param {FolderUpdateManyAndReturnArgs} args - Arguments to update many Folders.
     * @example
     * // Update many Folders
     * const folder = await prisma.folder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Folders and only return the `id`
     * const folderWithIdOnly = await prisma.folder.updateManyAndReturn({
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
    updateManyAndReturn<T extends FolderUpdateManyAndReturnArgs>(
      args: SelectSubset<T, FolderUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FolderPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Folder.
     * @param {FolderUpsertArgs} args - Arguments to update or create a Folder.
     * @example
     * // Update or create a Folder
     * const folder = await prisma.folder.upsert({
     *   create: {
     *     // ... data to create a Folder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Folder we want to update
     *   }
     * })
     */
    upsert<T extends FolderUpsertArgs>(
      args: SelectSubset<T, FolderUpsertArgs<ExtArgs>>
    ): Prisma__FolderClient<
      $Result.GetResult<
        Prisma.$FolderPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderCountArgs} args - Arguments to filter Folders to count.
     * @example
     * // Count the number of Folders
     * const count = await prisma.folder.count({
     *   where: {
     *     // ... the filter for the Folders we want to count
     *   }
     * })
     **/
    count<T extends FolderCountArgs>(
      args?: Subset<T, FolderCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], FolderCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Folder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FolderAggregateArgs>(
      args: Subset<T, FolderAggregateArgs>
    ): Prisma.PrismaPromise<GetFolderAggregateType<T>>;

    /**
     * Group by Folder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderGroupByArgs} args - Group by arguments.
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
      T extends FolderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FolderGroupByArgs["orderBy"] }
        : { orderBy?: FolderGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, FolderGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetFolderGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Folder model
     */
    readonly fields: FolderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Folder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FolderClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, SubjectDefaultArgs<ExtArgs>>
    ): Prisma__SubjectClient<
      | $Result.GetResult<
          Prisma.$SubjectPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    notes<T extends Folder$notesArgs<ExtArgs> = {}>(
      args?: Subset<T, Folder$notesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$NotePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Folder model
   */
  interface FolderFieldRefs {
    readonly id: FieldRef<"Folder", "Int">;
    readonly name: FieldRef<"Folder", "String">;
    readonly subjectId: FieldRef<"Folder", "Int">;
    readonly createdAt: FieldRef<"Folder", "DateTime">;
    readonly updatedAt: FieldRef<"Folder", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Folder findUnique
   */
  export type FolderFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null;
    /**
     * Filter, which Folder to fetch.
     */
    where: FolderWhereUniqueInput;
  };

  /**
   * Folder findUniqueOrThrow
   */
  export type FolderFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null;
    /**
     * Filter, which Folder to fetch.
     */
    where: FolderWhereUniqueInput;
  };

  /**
   * Folder findFirst
   */
  export type FolderFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null;
    /**
     * Filter, which Folder to fetch.
     */
    where?: FolderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Folders to fetch.
     */
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Folders.
     */
    cursor?: FolderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Folders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Folders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Folders.
     */
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[];
  };

  /**
   * Folder findFirstOrThrow
   */
  export type FolderFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null;
    /**
     * Filter, which Folder to fetch.
     */
    where?: FolderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Folders to fetch.
     */
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Folders.
     */
    cursor?: FolderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Folders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Folders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Folders.
     */
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[];
  };

  /**
   * Folder findMany
   */
  export type FolderFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null;
    /**
     * Filter, which Folders to fetch.
     */
    where?: FolderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Folders to fetch.
     */
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Folders.
     */
    cursor?: FolderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Folders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Folders.
     */
    skip?: number;
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[];
  };

  /**
   * Folder create
   */
  export type FolderCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null;
    /**
     * The data needed to create a Folder.
     */
    data: XOR<FolderCreateInput, FolderUncheckedCreateInput>;
  };

  /**
   * Folder createMany
   */
  export type FolderCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Folders.
     */
    data: FolderCreateManyInput | FolderCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Folder createManyAndReturn
   */
  export type FolderCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null;
    /**
     * The data used to create many Folders.
     */
    data: FolderCreateManyInput | FolderCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Folder update
   */
  export type FolderUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null;
    /**
     * The data needed to update a Folder.
     */
    data: XOR<FolderUpdateInput, FolderUncheckedUpdateInput>;
    /**
     * Choose, which Folder to update.
     */
    where: FolderWhereUniqueInput;
  };

  /**
   * Folder updateMany
   */
  export type FolderUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Folders.
     */
    data: XOR<FolderUpdateManyMutationInput, FolderUncheckedUpdateManyInput>;
    /**
     * Filter which Folders to update
     */
    where?: FolderWhereInput;
    /**
     * Limit how many Folders to update.
     */
    limit?: number;
  };

  /**
   * Folder updateManyAndReturn
   */
  export type FolderUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null;
    /**
     * The data used to update Folders.
     */
    data: XOR<FolderUpdateManyMutationInput, FolderUncheckedUpdateManyInput>;
    /**
     * Filter which Folders to update
     */
    where?: FolderWhereInput;
    /**
     * Limit how many Folders to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Folder upsert
   */
  export type FolderUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null;
    /**
     * The filter to search for the Folder to update in case it exists.
     */
    where: FolderWhereUniqueInput;
    /**
     * In case the Folder found by the `where` argument doesn't exist, create a new Folder with this data.
     */
    create: XOR<FolderCreateInput, FolderUncheckedCreateInput>;
    /**
     * In case the Folder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FolderUpdateInput, FolderUncheckedUpdateInput>;
  };

  /**
   * Folder delete
   */
  export type FolderDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null;
    /**
     * Filter which Folder to delete.
     */
    where: FolderWhereUniqueInput;
  };

  /**
   * Folder deleteMany
   */
  export type FolderDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Folders to delete
     */
    where?: FolderWhereInput;
    /**
     * Limit how many Folders to delete.
     */
    limit?: number;
  };

  /**
   * Folder.notes
   */
  export type Folder$notesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null;
    where?: NoteWhereInput;
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[];
    cursor?: NoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[];
  };

  /**
   * Folder without action
   */
  export type FolderDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null;
  };

  /**
   * Model Note
   */

  export type AggregateNote = {
    _count: NoteCountAggregateOutputType | null;
    _avg: NoteAvgAggregateOutputType | null;
    _sum: NoteSumAggregateOutputType | null;
    _min: NoteMinAggregateOutputType | null;
    _max: NoteMaxAggregateOutputType | null;
  };

  export type NoteAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
    subjectId: number | null;
    folderId: number | null;
  };

  export type NoteSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
    subjectId: number | null;
    folderId: number | null;
  };

  export type NoteMinAggregateOutputType = {
    id: number | null;
    title: string | null;
    content: string | null;
    userId: number | null;
    subjectId: number | null;
    folderId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type NoteMaxAggregateOutputType = {
    id: number | null;
    title: string | null;
    content: string | null;
    userId: number | null;
    subjectId: number | null;
    folderId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type NoteCountAggregateOutputType = {
    id: number;
    title: number;
    content: number;
    userId: number;
    subjectId: number;
    folderId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type NoteAvgAggregateInputType = {
    id?: true;
    userId?: true;
    subjectId?: true;
    folderId?: true;
  };

  export type NoteSumAggregateInputType = {
    id?: true;
    userId?: true;
    subjectId?: true;
    folderId?: true;
  };

  export type NoteMinAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    userId?: true;
    subjectId?: true;
    folderId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type NoteMaxAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    userId?: true;
    subjectId?: true;
    folderId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type NoteCountAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    userId?: true;
    subjectId?: true;
    folderId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type NoteAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Note to aggregate.
     */
    where?: NoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: NoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Notes
     **/
    _count?: true | NoteCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: NoteAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: NoteSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: NoteMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: NoteMaxAggregateInputType;
  };

  export type GetNoteAggregateType<T extends NoteAggregateArgs> = {
    [P in keyof T & keyof AggregateNote]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNote[P]>
      : GetScalarType<T[P], AggregateNote[P]>;
  };

  export type NoteGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: NoteWhereInput;
    orderBy?:
      | NoteOrderByWithAggregationInput
      | NoteOrderByWithAggregationInput[];
    by: NoteScalarFieldEnum[] | NoteScalarFieldEnum;
    having?: NoteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NoteCountAggregateInputType | true;
    _avg?: NoteAvgAggregateInputType;
    _sum?: NoteSumAggregateInputType;
    _min?: NoteMinAggregateInputType;
    _max?: NoteMaxAggregateInputType;
  };

  export type NoteGroupByOutputType = {
    id: number;
    title: string;
    content: string;
    userId: number;
    subjectId: number;
    folderId: number | null;
    createdAt: Date;
    updatedAt: Date;
    _count: NoteCountAggregateOutputType | null;
    _avg: NoteAvgAggregateOutputType | null;
    _sum: NoteSumAggregateOutputType | null;
    _min: NoteMinAggregateOutputType | null;
    _max: NoteMaxAggregateOutputType | null;
  };

  type GetNoteGroupByPayload<T extends NoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoteGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof NoteGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], NoteGroupByOutputType[P]>
          : GetScalarType<T[P], NoteGroupByOutputType[P]>;
      }
    >
  >;

  export type NoteSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      content?: boolean;
      userId?: boolean;
      subjectId?: boolean;
      folderId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      subject?: boolean | SubjectDefaultArgs<ExtArgs>;
      folder?: boolean | Note$folderArgs<ExtArgs>;
      tags?: boolean | Note$tagsArgs<ExtArgs>;
      shares?: boolean | Note$sharesArgs<ExtArgs>;
      _count?: boolean | NoteCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["note"]
  >;

  export type NoteSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      content?: boolean;
      userId?: boolean;
      subjectId?: boolean;
      folderId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      subject?: boolean | SubjectDefaultArgs<ExtArgs>;
      folder?: boolean | Note$folderArgs<ExtArgs>;
    },
    ExtArgs["result"]["note"]
  >;

  export type NoteSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      content?: boolean;
      userId?: boolean;
      subjectId?: boolean;
      folderId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      subject?: boolean | SubjectDefaultArgs<ExtArgs>;
      folder?: boolean | Note$folderArgs<ExtArgs>;
    },
    ExtArgs["result"]["note"]
  >;

  export type NoteSelectScalar = {
    id?: boolean;
    title?: boolean;
    content?: boolean;
    userId?: boolean;
    subjectId?: boolean;
    folderId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type NoteOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "title"
    | "content"
    | "userId"
    | "subjectId"
    | "folderId"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["note"]
  >;
  export type NoteInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    subject?: boolean | SubjectDefaultArgs<ExtArgs>;
    folder?: boolean | Note$folderArgs<ExtArgs>;
    tags?: boolean | Note$tagsArgs<ExtArgs>;
    shares?: boolean | Note$sharesArgs<ExtArgs>;
    _count?: boolean | NoteCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type NoteIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    subject?: boolean | SubjectDefaultArgs<ExtArgs>;
    folder?: boolean | Note$folderArgs<ExtArgs>;
  };
  export type NoteIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    subject?: boolean | SubjectDefaultArgs<ExtArgs>;
    folder?: boolean | Note$folderArgs<ExtArgs>;
  };

  export type $NotePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Note";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      subject: Prisma.$SubjectPayload<ExtArgs>;
      folder: Prisma.$FolderPayload<ExtArgs> | null;
      tags: Prisma.$NoteTagPayload<ExtArgs>[];
      shares: Prisma.$SharedNotePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        title: string;
        content: string;
        userId: number;
        subjectId: number;
        folderId: number | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["note"]
    >;
    composites: {};
  };

  type NoteGetPayload<S extends boolean | null | undefined | NoteDefaultArgs> =
    $Result.GetResult<Prisma.$NotePayload, S>;

  type NoteCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<NoteFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: NoteCountAggregateInputType | true;
  };

  export interface NoteDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Note"];
      meta: { name: "Note" };
    };
    /**
     * Find zero or one Note that matches the filter.
     * @param {NoteFindUniqueArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoteFindUniqueArgs>(
      args: SelectSubset<T, NoteFindUniqueArgs<ExtArgs>>
    ): Prisma__NoteClient<
      $Result.GetResult<
        Prisma.$NotePayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Note that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoteFindUniqueOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoteFindUniqueOrThrowArgs>(
      args: SelectSubset<T, NoteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__NoteClient<
      $Result.GetResult<
        Prisma.$NotePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Note that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoteFindFirstArgs>(
      args?: SelectSubset<T, NoteFindFirstArgs<ExtArgs>>
    ): Prisma__NoteClient<
      $Result.GetResult<
        Prisma.$NotePayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Note that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoteFindFirstOrThrowArgs>(
      args?: SelectSubset<T, NoteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__NoteClient<
      $Result.GetResult<
        Prisma.$NotePayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.note.findMany()
     *
     * // Get first 10 Notes
     * const notes = await prisma.note.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const noteWithIdOnly = await prisma.note.findMany({ select: { id: true } })
     *
     */
    findMany<T extends NoteFindManyArgs>(
      args?: SelectSubset<T, NoteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$NotePayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Note.
     * @param {NoteCreateArgs} args - Arguments to create a Note.
     * @example
     * // Create one Note
     * const Note = await prisma.note.create({
     *   data: {
     *     // ... data to create a Note
     *   }
     * })
     *
     */
    create<T extends NoteCreateArgs>(
      args: SelectSubset<T, NoteCreateArgs<ExtArgs>>
    ): Prisma__NoteClient<
      $Result.GetResult<
        Prisma.$NotePayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Notes.
     * @param {NoteCreateManyArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends NoteCreateManyArgs>(
      args?: SelectSubset<T, NoteCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Notes and returns the data saved in the database.
     * @param {NoteCreateManyAndReturnArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Notes and only return the `id`
     * const noteWithIdOnly = await prisma.note.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends NoteCreateManyAndReturnArgs>(
      args?: SelectSubset<T, NoteCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$NotePayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Note.
     * @param {NoteDeleteArgs} args - Arguments to delete one Note.
     * @example
     * // Delete one Note
     * const Note = await prisma.note.delete({
     *   where: {
     *     // ... filter to delete one Note
     *   }
     * })
     *
     */
    delete<T extends NoteDeleteArgs>(
      args: SelectSubset<T, NoteDeleteArgs<ExtArgs>>
    ): Prisma__NoteClient<
      $Result.GetResult<
        Prisma.$NotePayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Note.
     * @param {NoteUpdateArgs} args - Arguments to update one Note.
     * @example
     * // Update one Note
     * const note = await prisma.note.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends NoteUpdateArgs>(
      args: SelectSubset<T, NoteUpdateArgs<ExtArgs>>
    ): Prisma__NoteClient<
      $Result.GetResult<
        Prisma.$NotePayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Notes.
     * @param {NoteDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.note.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends NoteDeleteManyArgs>(
      args?: SelectSubset<T, NoteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends NoteUpdateManyArgs>(
      args: SelectSubset<T, NoteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Notes and returns the data updated in the database.
     * @param {NoteUpdateManyAndReturnArgs} args - Arguments to update many Notes.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Notes and only return the `id`
     * const noteWithIdOnly = await prisma.note.updateManyAndReturn({
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
    updateManyAndReturn<T extends NoteUpdateManyAndReturnArgs>(
      args: SelectSubset<T, NoteUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$NotePayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Note.
     * @param {NoteUpsertArgs} args - Arguments to update or create a Note.
     * @example
     * // Update or create a Note
     * const note = await prisma.note.upsert({
     *   create: {
     *     // ... data to create a Note
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Note we want to update
     *   }
     * })
     */
    upsert<T extends NoteUpsertArgs>(
      args: SelectSubset<T, NoteUpsertArgs<ExtArgs>>
    ): Prisma__NoteClient<
      $Result.GetResult<
        Prisma.$NotePayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.note.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
     **/
    count<T extends NoteCountArgs>(
      args?: Subset<T, NoteCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], NoteCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoteAggregateArgs>(
      args: Subset<T, NoteAggregateArgs>
    ): Prisma.PrismaPromise<GetNoteAggregateType<T>>;

    /**
     * Group by Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteGroupByArgs} args - Group by arguments.
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
      T extends NoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteGroupByArgs["orderBy"] }
        : { orderBy?: NoteGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, NoteGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetNoteGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Note model
     */
    readonly fields: NoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Note.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoteClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, SubjectDefaultArgs<ExtArgs>>
    ): Prisma__SubjectClient<
      | $Result.GetResult<
          Prisma.$SubjectPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    folder<T extends Note$folderArgs<ExtArgs> = {}>(
      args?: Subset<T, Note$folderArgs<ExtArgs>>
    ): Prisma__FolderClient<
      $Result.GetResult<
        Prisma.$FolderPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    tags<T extends Note$tagsArgs<ExtArgs> = {}>(
      args?: Subset<T, Note$tagsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$NoteTagPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    shares<T extends Note$sharesArgs<ExtArgs> = {}>(
      args?: Subset<T, Note$sharesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$SharedNotePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Note model
   */
  interface NoteFieldRefs {
    readonly id: FieldRef<"Note", "Int">;
    readonly title: FieldRef<"Note", "String">;
    readonly content: FieldRef<"Note", "String">;
    readonly userId: FieldRef<"Note", "Int">;
    readonly subjectId: FieldRef<"Note", "Int">;
    readonly folderId: FieldRef<"Note", "Int">;
    readonly createdAt: FieldRef<"Note", "DateTime">;
    readonly updatedAt: FieldRef<"Note", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Note findUnique
   */
  export type NoteFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null;
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput;
  };

  /**
   * Note findUniqueOrThrow
   */
  export type NoteFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null;
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput;
  };

  /**
   * Note findFirst
   */
  export type NoteFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null;
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[];
  };

  /**
   * Note findFirstOrThrow
   */
  export type NoteFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null;
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[];
  };

  /**
   * Note findMany
   */
  export type NoteFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null;
    /**
     * Filter, which Notes to fetch.
     */
    where?: NoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Notes.
     */
    cursor?: NoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notes.
     */
    skip?: number;
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[];
  };

  /**
   * Note create
   */
  export type NoteCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null;
    /**
     * The data needed to create a Note.
     */
    data: XOR<NoteCreateInput, NoteUncheckedCreateInput>;
  };

  /**
   * Note createMany
   */
  export type NoteCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Note createManyAndReturn
   */
  export type NoteCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null;
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Note update
   */
  export type NoteUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null;
    /**
     * The data needed to update a Note.
     */
    data: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>;
    /**
     * Choose, which Note to update.
     */
    where: NoteWhereUniqueInput;
  };

  /**
   * Note updateMany
   */
  export type NoteUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>;
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput;
    /**
     * Limit how many Notes to update.
     */
    limit?: number;
  };

  /**
   * Note updateManyAndReturn
   */
  export type NoteUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null;
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>;
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput;
    /**
     * Limit how many Notes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Note upsert
   */
  export type NoteUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null;
    /**
     * The filter to search for the Note to update in case it exists.
     */
    where: NoteWhereUniqueInput;
    /**
     * In case the Note found by the `where` argument doesn't exist, create a new Note with this data.
     */
    create: XOR<NoteCreateInput, NoteUncheckedCreateInput>;
    /**
     * In case the Note was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>;
  };

  /**
   * Note delete
   */
  export type NoteDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null;
    /**
     * Filter which Note to delete.
     */
    where: NoteWhereUniqueInput;
  };

  /**
   * Note deleteMany
   */
  export type NoteDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Notes to delete
     */
    where?: NoteWhereInput;
    /**
     * Limit how many Notes to delete.
     */
    limit?: number;
  };

  /**
   * Note.folder
   */
  export type Note$folderArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null;
    where?: FolderWhereInput;
  };

  /**
   * Note.tags
   */
  export type Note$tagsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null;
    where?: NoteTagWhereInput;
    orderBy?:
      | NoteTagOrderByWithRelationInput
      | NoteTagOrderByWithRelationInput[];
    cursor?: NoteTagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: NoteTagScalarFieldEnum | NoteTagScalarFieldEnum[];
  };

  /**
   * Note.shares
   */
  export type Note$sharesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SharedNote
     */
    select?: SharedNoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SharedNote
     */
    omit?: SharedNoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedNoteInclude<ExtArgs> | null;
    where?: SharedNoteWhereInput;
    orderBy?:
      | SharedNoteOrderByWithRelationInput
      | SharedNoteOrderByWithRelationInput[];
    cursor?: SharedNoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: SharedNoteScalarFieldEnum | SharedNoteScalarFieldEnum[];
  };

  /**
   * Note without action
   */
  export type NoteDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null;
  };

  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null;
    _avg: TagAvgAggregateOutputType | null;
    _sum: TagSumAggregateOutputType | null;
    _min: TagMinAggregateOutputType | null;
    _max: TagMaxAggregateOutputType | null;
  };

  export type TagAvgAggregateOutputType = {
    id: number | null;
  };

  export type TagSumAggregateOutputType = {
    id: number | null;
  };

  export type TagMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    createdAt: Date | null;
  };

  export type TagMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    createdAt: Date | null;
  };

  export type TagCountAggregateOutputType = {
    id: number;
    name: number;
    createdAt: number;
    _all: number;
  };

  export type TagAvgAggregateInputType = {
    id?: true;
  };

  export type TagSumAggregateInputType = {
    id?: true;
  };

  export type TagMinAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
  };

  export type TagMaxAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
  };

  export type TagCountAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    _all?: true;
  };

  export type TagAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Tags
     **/
    _count?: true | TagCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: TagAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: TagSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TagMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TagMaxAggregateInputType;
  };

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
    [P in keyof T & keyof AggregateTag]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>;
  };

  export type TagGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TagWhereInput;
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[];
    by: TagScalarFieldEnum[] | TagScalarFieldEnum;
    having?: TagScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TagCountAggregateInputType | true;
    _avg?: TagAvgAggregateInputType;
    _sum?: TagSumAggregateInputType;
    _min?: TagMinAggregateInputType;
    _max?: TagMaxAggregateInputType;
  };

  export type TagGroupByOutputType = {
    id: number;
    name: string;
    createdAt: Date;
    _count: TagCountAggregateOutputType | null;
    _avg: TagAvgAggregateOutputType | null;
    _sum: TagSumAggregateOutputType | null;
    _min: TagMinAggregateOutputType | null;
    _max: TagMaxAggregateOutputType | null;
  };

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof TagGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TagGroupByOutputType[P]>
          : GetScalarType<T[P], TagGroupByOutputType[P]>;
      }
    >
  >;

  export type TagSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      createdAt?: boolean;
      notes?: boolean | Tag$notesArgs<ExtArgs>;
      _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["tag"]
  >;

  export type TagSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      createdAt?: boolean;
    },
    ExtArgs["result"]["tag"]
  >;

  export type TagSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      createdAt?: boolean;
    },
    ExtArgs["result"]["tag"]
  >;

  export type TagSelectScalar = {
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
  };

  export type TagOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "name" | "createdAt",
    ExtArgs["result"]["tag"]
  >;
  export type TagInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    notes?: boolean | Tag$notesArgs<ExtArgs>;
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type TagIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type TagIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $TagPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Tag";
    objects: {
      notes: Prisma.$NoteTagPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        createdAt: Date;
      },
      ExtArgs["result"]["tag"]
    >;
    composites: {};
  };

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> =
    $Result.GetResult<Prisma.$TagPayload, S>;

  type TagCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<TagFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: TagCountAggregateInputType | true;
  };

  export interface TagDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Tag"];
      meta: { name: "Tag" };
    };
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(
      args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>
    ): Prisma__TagClient<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(
      args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TagClient<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(
      args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>
    ): Prisma__TagClient<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TagClient<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     *
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TagFindManyArgs>(
      args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     *
     */
    create<T extends TagCreateArgs>(
      args: SelectSubset<T, TagCreateArgs<ExtArgs>>
    ): Prisma__TagClient<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TagCreateManyArgs>(
      args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(
      args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     *
     */
    delete<T extends TagDeleteArgs>(
      args: SelectSubset<T, TagDeleteArgs<ExtArgs>>
    ): Prisma__TagClient<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TagUpdateArgs>(
      args: SelectSubset<T, TagUpdateArgs<ExtArgs>>
    ): Prisma__TagClient<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TagDeleteManyArgs>(
      args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TagUpdateManyArgs>(
      args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
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
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(
      args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(
      args: SelectSubset<T, TagUpsertArgs<ExtArgs>>
    ): Prisma__TagClient<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
     **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], TagCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(
      args: Subset<T, TagAggregateArgs>
    ): Prisma.PrismaPromise<GetTagAggregateType<T>>;

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs["orderBy"] }
        : { orderBy?: TagGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetTagGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Tag model
     */
    readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    notes<T extends Tag$notesArgs<ExtArgs> = {}>(
      args?: Subset<T, Tag$notesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$NoteTagPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", "Int">;
    readonly name: FieldRef<"Tag", "String">;
    readonly createdAt: FieldRef<"Tag", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput;
  };

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput;
  };

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[];
  };

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[];
  };

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tags.
     */
    skip?: number;
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[];
  };

  /**
   * Tag create
   */
  export type TagCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>;
  };

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Tag update
   */
  export type TagUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>;
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput;
  };

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>;
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput;
    /**
     * Limit how many Tags to update.
     */
    limit?: number;
  };

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>;
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput;
    /**
     * Limit how many Tags to update.
     */
    limit?: number;
  };

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput;
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>;
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>;
  };

  /**
   * Tag delete
   */
  export type TagDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput;
  };

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput;
    /**
     * Limit how many Tags to delete.
     */
    limit?: number;
  };

  /**
   * Tag.notes
   */
  export type Tag$notesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null;
    where?: NoteTagWhereInput;
    orderBy?:
      | NoteTagOrderByWithRelationInput
      | NoteTagOrderByWithRelationInput[];
    cursor?: NoteTagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: NoteTagScalarFieldEnum | NoteTagScalarFieldEnum[];
  };

  /**
   * Tag without action
   */
  export type TagDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
  };

  /**
   * Model NoteTag
   */

  export type AggregateNoteTag = {
    _count: NoteTagCountAggregateOutputType | null;
    _avg: NoteTagAvgAggregateOutputType | null;
    _sum: NoteTagSumAggregateOutputType | null;
    _min: NoteTagMinAggregateOutputType | null;
    _max: NoteTagMaxAggregateOutputType | null;
  };

  export type NoteTagAvgAggregateOutputType = {
    noteId: number | null;
    tagId: number | null;
  };

  export type NoteTagSumAggregateOutputType = {
    noteId: number | null;
    tagId: number | null;
  };

  export type NoteTagMinAggregateOutputType = {
    noteId: number | null;
    tagId: number | null;
  };

  export type NoteTagMaxAggregateOutputType = {
    noteId: number | null;
    tagId: number | null;
  };

  export type NoteTagCountAggregateOutputType = {
    noteId: number;
    tagId: number;
    _all: number;
  };

  export type NoteTagAvgAggregateInputType = {
    noteId?: true;
    tagId?: true;
  };

  export type NoteTagSumAggregateInputType = {
    noteId?: true;
    tagId?: true;
  };

  export type NoteTagMinAggregateInputType = {
    noteId?: true;
    tagId?: true;
  };

  export type NoteTagMaxAggregateInputType = {
    noteId?: true;
    tagId?: true;
  };

  export type NoteTagCountAggregateInputType = {
    noteId?: true;
    tagId?: true;
    _all?: true;
  };

  export type NoteTagAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which NoteTag to aggregate.
     */
    where?: NoteTagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of NoteTags to fetch.
     */
    orderBy?:
      | NoteTagOrderByWithRelationInput
      | NoteTagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: NoteTagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` NoteTags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` NoteTags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned NoteTags
     **/
    _count?: true | NoteTagCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: NoteTagAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: NoteTagSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: NoteTagMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: NoteTagMaxAggregateInputType;
  };

  export type GetNoteTagAggregateType<T extends NoteTagAggregateArgs> = {
    [P in keyof T & keyof AggregateNoteTag]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNoteTag[P]>
      : GetScalarType<T[P], AggregateNoteTag[P]>;
  };

  export type NoteTagGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: NoteTagWhereInput;
    orderBy?:
      | NoteTagOrderByWithAggregationInput
      | NoteTagOrderByWithAggregationInput[];
    by: NoteTagScalarFieldEnum[] | NoteTagScalarFieldEnum;
    having?: NoteTagScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NoteTagCountAggregateInputType | true;
    _avg?: NoteTagAvgAggregateInputType;
    _sum?: NoteTagSumAggregateInputType;
    _min?: NoteTagMinAggregateInputType;
    _max?: NoteTagMaxAggregateInputType;
  };

  export type NoteTagGroupByOutputType = {
    noteId: number;
    tagId: number;
    _count: NoteTagCountAggregateOutputType | null;
    _avg: NoteTagAvgAggregateOutputType | null;
    _sum: NoteTagSumAggregateOutputType | null;
    _min: NoteTagMinAggregateOutputType | null;
    _max: NoteTagMaxAggregateOutputType | null;
  };

  type GetNoteTagGroupByPayload<T extends NoteTagGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<NoteTagGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof NoteTagGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteTagGroupByOutputType[P]>
            : GetScalarType<T[P], NoteTagGroupByOutputType[P]>;
        }
      >
    >;

  export type NoteTagSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      noteId?: boolean;
      tagId?: boolean;
      note?: boolean | NoteDefaultArgs<ExtArgs>;
      tag?: boolean | TagDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["noteTag"]
  >;

  export type NoteTagSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      noteId?: boolean;
      tagId?: boolean;
      note?: boolean | NoteDefaultArgs<ExtArgs>;
      tag?: boolean | TagDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["noteTag"]
  >;

  export type NoteTagSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      noteId?: boolean;
      tagId?: boolean;
      note?: boolean | NoteDefaultArgs<ExtArgs>;
      tag?: boolean | TagDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["noteTag"]
  >;

  export type NoteTagSelectScalar = {
    noteId?: boolean;
    tagId?: boolean;
  };

  export type NoteTagOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<"noteId" | "tagId", ExtArgs["result"]["noteTag"]>;
  export type NoteTagInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    note?: boolean | NoteDefaultArgs<ExtArgs>;
    tag?: boolean | TagDefaultArgs<ExtArgs>;
  };
  export type NoteTagIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    note?: boolean | NoteDefaultArgs<ExtArgs>;
    tag?: boolean | TagDefaultArgs<ExtArgs>;
  };
  export type NoteTagIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    note?: boolean | NoteDefaultArgs<ExtArgs>;
    tag?: boolean | TagDefaultArgs<ExtArgs>;
  };

  export type $NoteTagPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "NoteTag";
    objects: {
      note: Prisma.$NotePayload<ExtArgs>;
      tag: Prisma.$TagPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        noteId: number;
        tagId: number;
      },
      ExtArgs["result"]["noteTag"]
    >;
    composites: {};
  };

  type NoteTagGetPayload<
    S extends boolean | null | undefined | NoteTagDefaultArgs,
  > = $Result.GetResult<Prisma.$NoteTagPayload, S>;

  type NoteTagCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<NoteTagFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: NoteTagCountAggregateInputType | true;
  };

  export interface NoteTagDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["NoteTag"];
      meta: { name: "NoteTag" };
    };
    /**
     * Find zero or one NoteTag that matches the filter.
     * @param {NoteTagFindUniqueArgs} args - Arguments to find a NoteTag
     * @example
     * // Get one NoteTag
     * const noteTag = await prisma.noteTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoteTagFindUniqueArgs>(
      args: SelectSubset<T, NoteTagFindUniqueArgs<ExtArgs>>
    ): Prisma__NoteTagClient<
      $Result.GetResult<
        Prisma.$NoteTagPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one NoteTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoteTagFindUniqueOrThrowArgs} args - Arguments to find a NoteTag
     * @example
     * // Get one NoteTag
     * const noteTag = await prisma.noteTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoteTagFindUniqueOrThrowArgs>(
      args: SelectSubset<T, NoteTagFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__NoteTagClient<
      $Result.GetResult<
        Prisma.$NoteTagPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first NoteTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteTagFindFirstArgs} args - Arguments to find a NoteTag
     * @example
     * // Get one NoteTag
     * const noteTag = await prisma.noteTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoteTagFindFirstArgs>(
      args?: SelectSubset<T, NoteTagFindFirstArgs<ExtArgs>>
    ): Prisma__NoteTagClient<
      $Result.GetResult<
        Prisma.$NoteTagPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first NoteTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteTagFindFirstOrThrowArgs} args - Arguments to find a NoteTag
     * @example
     * // Get one NoteTag
     * const noteTag = await prisma.noteTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoteTagFindFirstOrThrowArgs>(
      args?: SelectSubset<T, NoteTagFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__NoteTagClient<
      $Result.GetResult<
        Prisma.$NoteTagPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more NoteTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NoteTags
     * const noteTags = await prisma.noteTag.findMany()
     *
     * // Get first 10 NoteTags
     * const noteTags = await prisma.noteTag.findMany({ take: 10 })
     *
     * // Only select the `noteId`
     * const noteTagWithNoteIdOnly = await prisma.noteTag.findMany({ select: { noteId: true } })
     *
     */
    findMany<T extends NoteTagFindManyArgs>(
      args?: SelectSubset<T, NoteTagFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$NoteTagPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a NoteTag.
     * @param {NoteTagCreateArgs} args - Arguments to create a NoteTag.
     * @example
     * // Create one NoteTag
     * const NoteTag = await prisma.noteTag.create({
     *   data: {
     *     // ... data to create a NoteTag
     *   }
     * })
     *
     */
    create<T extends NoteTagCreateArgs>(
      args: SelectSubset<T, NoteTagCreateArgs<ExtArgs>>
    ): Prisma__NoteTagClient<
      $Result.GetResult<
        Prisma.$NoteTagPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many NoteTags.
     * @param {NoteTagCreateManyArgs} args - Arguments to create many NoteTags.
     * @example
     * // Create many NoteTags
     * const noteTag = await prisma.noteTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends NoteTagCreateManyArgs>(
      args?: SelectSubset<T, NoteTagCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many NoteTags and returns the data saved in the database.
     * @param {NoteTagCreateManyAndReturnArgs} args - Arguments to create many NoteTags.
     * @example
     * // Create many NoteTags
     * const noteTag = await prisma.noteTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many NoteTags and only return the `noteId`
     * const noteTagWithNoteIdOnly = await prisma.noteTag.createManyAndReturn({
     *   select: { noteId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends NoteTagCreateManyAndReturnArgs>(
      args?: SelectSubset<T, NoteTagCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$NoteTagPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a NoteTag.
     * @param {NoteTagDeleteArgs} args - Arguments to delete one NoteTag.
     * @example
     * // Delete one NoteTag
     * const NoteTag = await prisma.noteTag.delete({
     *   where: {
     *     // ... filter to delete one NoteTag
     *   }
     * })
     *
     */
    delete<T extends NoteTagDeleteArgs>(
      args: SelectSubset<T, NoteTagDeleteArgs<ExtArgs>>
    ): Prisma__NoteTagClient<
      $Result.GetResult<
        Prisma.$NoteTagPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one NoteTag.
     * @param {NoteTagUpdateArgs} args - Arguments to update one NoteTag.
     * @example
     * // Update one NoteTag
     * const noteTag = await prisma.noteTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends NoteTagUpdateArgs>(
      args: SelectSubset<T, NoteTagUpdateArgs<ExtArgs>>
    ): Prisma__NoteTagClient<
      $Result.GetResult<
        Prisma.$NoteTagPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more NoteTags.
     * @param {NoteTagDeleteManyArgs} args - Arguments to filter NoteTags to delete.
     * @example
     * // Delete a few NoteTags
     * const { count } = await prisma.noteTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends NoteTagDeleteManyArgs>(
      args?: SelectSubset<T, NoteTagDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more NoteTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NoteTags
     * const noteTag = await prisma.noteTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends NoteTagUpdateManyArgs>(
      args: SelectSubset<T, NoteTagUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more NoteTags and returns the data updated in the database.
     * @param {NoteTagUpdateManyAndReturnArgs} args - Arguments to update many NoteTags.
     * @example
     * // Update many NoteTags
     * const noteTag = await prisma.noteTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more NoteTags and only return the `noteId`
     * const noteTagWithNoteIdOnly = await prisma.noteTag.updateManyAndReturn({
     *   select: { noteId: true },
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
    updateManyAndReturn<T extends NoteTagUpdateManyAndReturnArgs>(
      args: SelectSubset<T, NoteTagUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$NoteTagPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one NoteTag.
     * @param {NoteTagUpsertArgs} args - Arguments to update or create a NoteTag.
     * @example
     * // Update or create a NoteTag
     * const noteTag = await prisma.noteTag.upsert({
     *   create: {
     *     // ... data to create a NoteTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NoteTag we want to update
     *   }
     * })
     */
    upsert<T extends NoteTagUpsertArgs>(
      args: SelectSubset<T, NoteTagUpsertArgs<ExtArgs>>
    ): Prisma__NoteTagClient<
      $Result.GetResult<
        Prisma.$NoteTagPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of NoteTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteTagCountArgs} args - Arguments to filter NoteTags to count.
     * @example
     * // Count the number of NoteTags
     * const count = await prisma.noteTag.count({
     *   where: {
     *     // ... the filter for the NoteTags we want to count
     *   }
     * })
     **/
    count<T extends NoteTagCountArgs>(
      args?: Subset<T, NoteTagCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], NoteTagCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a NoteTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoteTagAggregateArgs>(
      args: Subset<T, NoteTagAggregateArgs>
    ): Prisma.PrismaPromise<GetNoteTagAggregateType<T>>;

    /**
     * Group by NoteTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteTagGroupByArgs} args - Group by arguments.
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
      T extends NoteTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteTagGroupByArgs["orderBy"] }
        : { orderBy?: NoteTagGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, NoteTagGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetNoteTagGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the NoteTag model
     */
    readonly fields: NoteTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NoteTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoteTagClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    note<T extends NoteDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, NoteDefaultArgs<ExtArgs>>
    ): Prisma__NoteClient<
      | $Result.GetResult<
          Prisma.$NotePayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, TagDefaultArgs<ExtArgs>>
    ): Prisma__TagClient<
      | $Result.GetResult<
          Prisma.$TagPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the NoteTag model
   */
  interface NoteTagFieldRefs {
    readonly noteId: FieldRef<"NoteTag", "Int">;
    readonly tagId: FieldRef<"NoteTag", "Int">;
  }

  // Custom InputTypes
  /**
   * NoteTag findUnique
   */
  export type NoteTagFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null;
    /**
     * Filter, which NoteTag to fetch.
     */
    where: NoteTagWhereUniqueInput;
  };

  /**
   * NoteTag findUniqueOrThrow
   */
  export type NoteTagFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null;
    /**
     * Filter, which NoteTag to fetch.
     */
    where: NoteTagWhereUniqueInput;
  };

  /**
   * NoteTag findFirst
   */
  export type NoteTagFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null;
    /**
     * Filter, which NoteTag to fetch.
     */
    where?: NoteTagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of NoteTags to fetch.
     */
    orderBy?:
      | NoteTagOrderByWithRelationInput
      | NoteTagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for NoteTags.
     */
    cursor?: NoteTagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` NoteTags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` NoteTags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of NoteTags.
     */
    distinct?: NoteTagScalarFieldEnum | NoteTagScalarFieldEnum[];
  };

  /**
   * NoteTag findFirstOrThrow
   */
  export type NoteTagFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null;
    /**
     * Filter, which NoteTag to fetch.
     */
    where?: NoteTagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of NoteTags to fetch.
     */
    orderBy?:
      | NoteTagOrderByWithRelationInput
      | NoteTagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for NoteTags.
     */
    cursor?: NoteTagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` NoteTags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` NoteTags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of NoteTags.
     */
    distinct?: NoteTagScalarFieldEnum | NoteTagScalarFieldEnum[];
  };

  /**
   * NoteTag findMany
   */
  export type NoteTagFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null;
    /**
     * Filter, which NoteTags to fetch.
     */
    where?: NoteTagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of NoteTags to fetch.
     */
    orderBy?:
      | NoteTagOrderByWithRelationInput
      | NoteTagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing NoteTags.
     */
    cursor?: NoteTagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` NoteTags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` NoteTags.
     */
    skip?: number;
    distinct?: NoteTagScalarFieldEnum | NoteTagScalarFieldEnum[];
  };

  /**
   * NoteTag create
   */
  export type NoteTagCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null;
    /**
     * The data needed to create a NoteTag.
     */
    data: XOR<NoteTagCreateInput, NoteTagUncheckedCreateInput>;
  };

  /**
   * NoteTag createMany
   */
  export type NoteTagCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many NoteTags.
     */
    data: NoteTagCreateManyInput | NoteTagCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * NoteTag createManyAndReturn
   */
  export type NoteTagCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null;
    /**
     * The data used to create many NoteTags.
     */
    data: NoteTagCreateManyInput | NoteTagCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * NoteTag update
   */
  export type NoteTagUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null;
    /**
     * The data needed to update a NoteTag.
     */
    data: XOR<NoteTagUpdateInput, NoteTagUncheckedUpdateInput>;
    /**
     * Choose, which NoteTag to update.
     */
    where: NoteTagWhereUniqueInput;
  };

  /**
   * NoteTag updateMany
   */
  export type NoteTagUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update NoteTags.
     */
    data: XOR<NoteTagUpdateManyMutationInput, NoteTagUncheckedUpdateManyInput>;
    /**
     * Filter which NoteTags to update
     */
    where?: NoteTagWhereInput;
    /**
     * Limit how many NoteTags to update.
     */
    limit?: number;
  };

  /**
   * NoteTag updateManyAndReturn
   */
  export type NoteTagUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null;
    /**
     * The data used to update NoteTags.
     */
    data: XOR<NoteTagUpdateManyMutationInput, NoteTagUncheckedUpdateManyInput>;
    /**
     * Filter which NoteTags to update
     */
    where?: NoteTagWhereInput;
    /**
     * Limit how many NoteTags to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * NoteTag upsert
   */
  export type NoteTagUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null;
    /**
     * The filter to search for the NoteTag to update in case it exists.
     */
    where: NoteTagWhereUniqueInput;
    /**
     * In case the NoteTag found by the `where` argument doesn't exist, create a new NoteTag with this data.
     */
    create: XOR<NoteTagCreateInput, NoteTagUncheckedCreateInput>;
    /**
     * In case the NoteTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoteTagUpdateInput, NoteTagUncheckedUpdateInput>;
  };

  /**
   * NoteTag delete
   */
  export type NoteTagDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null;
    /**
     * Filter which NoteTag to delete.
     */
    where: NoteTagWhereUniqueInput;
  };

  /**
   * NoteTag deleteMany
   */
  export type NoteTagDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which NoteTags to delete
     */
    where?: NoteTagWhereInput;
    /**
     * Limit how many NoteTags to delete.
     */
    limit?: number;
  };

  /**
   * NoteTag without action
   */
  export type NoteTagDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null;
  };

  /**
   * Model SharedNote
   */

  export type AggregateSharedNote = {
    _count: SharedNoteCountAggregateOutputType | null;
    _avg: SharedNoteAvgAggregateOutputType | null;
    _sum: SharedNoteSumAggregateOutputType | null;
    _min: SharedNoteMinAggregateOutputType | null;
    _max: SharedNoteMaxAggregateOutputType | null;
  };

  export type SharedNoteAvgAggregateOutputType = {
    id: number | null;
    noteId: number | null;
    userId: number | null;
  };

  export type SharedNoteSumAggregateOutputType = {
    id: number | null;
    noteId: number | null;
    userId: number | null;
  };

  export type SharedNoteMinAggregateOutputType = {
    id: number | null;
    noteId: number | null;
    userId: number | null;
    createdAt: Date | null;
  };

  export type SharedNoteMaxAggregateOutputType = {
    id: number | null;
    noteId: number | null;
    userId: number | null;
    createdAt: Date | null;
  };

  export type SharedNoteCountAggregateOutputType = {
    id: number;
    noteId: number;
    userId: number;
    createdAt: number;
    _all: number;
  };

  export type SharedNoteAvgAggregateInputType = {
    id?: true;
    noteId?: true;
    userId?: true;
  };

  export type SharedNoteSumAggregateInputType = {
    id?: true;
    noteId?: true;
    userId?: true;
  };

  export type SharedNoteMinAggregateInputType = {
    id?: true;
    noteId?: true;
    userId?: true;
    createdAt?: true;
  };

  export type SharedNoteMaxAggregateInputType = {
    id?: true;
    noteId?: true;
    userId?: true;
    createdAt?: true;
  };

  export type SharedNoteCountAggregateInputType = {
    id?: true;
    noteId?: true;
    userId?: true;
    createdAt?: true;
    _all?: true;
  };

  export type SharedNoteAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which SharedNote to aggregate.
     */
    where?: SharedNoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SharedNotes to fetch.
     */
    orderBy?:
      | SharedNoteOrderByWithRelationInput
      | SharedNoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: SharedNoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SharedNotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SharedNotes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SharedNotes
     **/
    _count?: true | SharedNoteCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: SharedNoteAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: SharedNoteSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SharedNoteMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SharedNoteMaxAggregateInputType;
  };

  export type GetSharedNoteAggregateType<T extends SharedNoteAggregateArgs> = {
    [P in keyof T & keyof AggregateSharedNote]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSharedNote[P]>
      : GetScalarType<T[P], AggregateSharedNote[P]>;
  };

  export type SharedNoteGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SharedNoteWhereInput;
    orderBy?:
      | SharedNoteOrderByWithAggregationInput
      | SharedNoteOrderByWithAggregationInput[];
    by: SharedNoteScalarFieldEnum[] | SharedNoteScalarFieldEnum;
    having?: SharedNoteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SharedNoteCountAggregateInputType | true;
    _avg?: SharedNoteAvgAggregateInputType;
    _sum?: SharedNoteSumAggregateInputType;
    _min?: SharedNoteMinAggregateInputType;
    _max?: SharedNoteMaxAggregateInputType;
  };

  export type SharedNoteGroupByOutputType = {
    id: number;
    noteId: number;
    userId: number;
    createdAt: Date;
    _count: SharedNoteCountAggregateOutputType | null;
    _avg: SharedNoteAvgAggregateOutputType | null;
    _sum: SharedNoteSumAggregateOutputType | null;
    _min: SharedNoteMinAggregateOutputType | null;
    _max: SharedNoteMaxAggregateOutputType | null;
  };

  type GetSharedNoteGroupByPayload<T extends SharedNoteGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<SharedNoteGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof SharedNoteGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SharedNoteGroupByOutputType[P]>
            : GetScalarType<T[P], SharedNoteGroupByOutputType[P]>;
        }
      >
    >;

  export type SharedNoteSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      noteId?: boolean;
      userId?: boolean;
      createdAt?: boolean;
      note?: boolean | NoteDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["sharedNote"]
  >;

  export type SharedNoteSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      noteId?: boolean;
      userId?: boolean;
      createdAt?: boolean;
      note?: boolean | NoteDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["sharedNote"]
  >;

  export type SharedNoteSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      noteId?: boolean;
      userId?: boolean;
      createdAt?: boolean;
      note?: boolean | NoteDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["sharedNote"]
  >;

  export type SharedNoteSelectScalar = {
    id?: boolean;
    noteId?: boolean;
    userId?: boolean;
    createdAt?: boolean;
  };

  export type SharedNoteOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "noteId" | "userId" | "createdAt",
    ExtArgs["result"]["sharedNote"]
  >;
  export type SharedNoteInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    note?: boolean | NoteDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type SharedNoteIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    note?: boolean | NoteDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type SharedNoteIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    note?: boolean | NoteDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $SharedNotePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "SharedNote";
    objects: {
      note: Prisma.$NotePayload<ExtArgs>;
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        noteId: number;
        userId: number;
        createdAt: Date;
      },
      ExtArgs["result"]["sharedNote"]
    >;
    composites: {};
  };

  type SharedNoteGetPayload<
    S extends boolean | null | undefined | SharedNoteDefaultArgs,
  > = $Result.GetResult<Prisma.$SharedNotePayload, S>;

  type SharedNoteCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    SharedNoteFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: SharedNoteCountAggregateInputType | true;
  };

  export interface SharedNoteDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["SharedNote"];
      meta: { name: "SharedNote" };
    };
    /**
     * Find zero or one SharedNote that matches the filter.
     * @param {SharedNoteFindUniqueArgs} args - Arguments to find a SharedNote
     * @example
     * // Get one SharedNote
     * const sharedNote = await prisma.sharedNote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SharedNoteFindUniqueArgs>(
      args: SelectSubset<T, SharedNoteFindUniqueArgs<ExtArgs>>
    ): Prisma__SharedNoteClient<
      $Result.GetResult<
        Prisma.$SharedNotePayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one SharedNote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SharedNoteFindUniqueOrThrowArgs} args - Arguments to find a SharedNote
     * @example
     * // Get one SharedNote
     * const sharedNote = await prisma.sharedNote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SharedNoteFindUniqueOrThrowArgs>(
      args: SelectSubset<T, SharedNoteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SharedNoteClient<
      $Result.GetResult<
        Prisma.$SharedNotePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first SharedNote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedNoteFindFirstArgs} args - Arguments to find a SharedNote
     * @example
     * // Get one SharedNote
     * const sharedNote = await prisma.sharedNote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SharedNoteFindFirstArgs>(
      args?: SelectSubset<T, SharedNoteFindFirstArgs<ExtArgs>>
    ): Prisma__SharedNoteClient<
      $Result.GetResult<
        Prisma.$SharedNotePayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first SharedNote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedNoteFindFirstOrThrowArgs} args - Arguments to find a SharedNote
     * @example
     * // Get one SharedNote
     * const sharedNote = await prisma.sharedNote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SharedNoteFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SharedNoteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SharedNoteClient<
      $Result.GetResult<
        Prisma.$SharedNotePayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more SharedNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedNoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SharedNotes
     * const sharedNotes = await prisma.sharedNote.findMany()
     *
     * // Get first 10 SharedNotes
     * const sharedNotes = await prisma.sharedNote.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const sharedNoteWithIdOnly = await prisma.sharedNote.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SharedNoteFindManyArgs>(
      args?: SelectSubset<T, SharedNoteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SharedNotePayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a SharedNote.
     * @param {SharedNoteCreateArgs} args - Arguments to create a SharedNote.
     * @example
     * // Create one SharedNote
     * const SharedNote = await prisma.sharedNote.create({
     *   data: {
     *     // ... data to create a SharedNote
     *   }
     * })
     *
     */
    create<T extends SharedNoteCreateArgs>(
      args: SelectSubset<T, SharedNoteCreateArgs<ExtArgs>>
    ): Prisma__SharedNoteClient<
      $Result.GetResult<
        Prisma.$SharedNotePayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many SharedNotes.
     * @param {SharedNoteCreateManyArgs} args - Arguments to create many SharedNotes.
     * @example
     * // Create many SharedNotes
     * const sharedNote = await prisma.sharedNote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SharedNoteCreateManyArgs>(
      args?: SelectSubset<T, SharedNoteCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many SharedNotes and returns the data saved in the database.
     * @param {SharedNoteCreateManyAndReturnArgs} args - Arguments to create many SharedNotes.
     * @example
     * // Create many SharedNotes
     * const sharedNote = await prisma.sharedNote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SharedNotes and only return the `id`
     * const sharedNoteWithIdOnly = await prisma.sharedNote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SharedNoteCreateManyAndReturnArgs>(
      args?: SelectSubset<T, SharedNoteCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SharedNotePayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a SharedNote.
     * @param {SharedNoteDeleteArgs} args - Arguments to delete one SharedNote.
     * @example
     * // Delete one SharedNote
     * const SharedNote = await prisma.sharedNote.delete({
     *   where: {
     *     // ... filter to delete one SharedNote
     *   }
     * })
     *
     */
    delete<T extends SharedNoteDeleteArgs>(
      args: SelectSubset<T, SharedNoteDeleteArgs<ExtArgs>>
    ): Prisma__SharedNoteClient<
      $Result.GetResult<
        Prisma.$SharedNotePayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one SharedNote.
     * @param {SharedNoteUpdateArgs} args - Arguments to update one SharedNote.
     * @example
     * // Update one SharedNote
     * const sharedNote = await prisma.sharedNote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SharedNoteUpdateArgs>(
      args: SelectSubset<T, SharedNoteUpdateArgs<ExtArgs>>
    ): Prisma__SharedNoteClient<
      $Result.GetResult<
        Prisma.$SharedNotePayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more SharedNotes.
     * @param {SharedNoteDeleteManyArgs} args - Arguments to filter SharedNotes to delete.
     * @example
     * // Delete a few SharedNotes
     * const { count } = await prisma.sharedNote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SharedNoteDeleteManyArgs>(
      args?: SelectSubset<T, SharedNoteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more SharedNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedNoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SharedNotes
     * const sharedNote = await prisma.sharedNote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SharedNoteUpdateManyArgs>(
      args: SelectSubset<T, SharedNoteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more SharedNotes and returns the data updated in the database.
     * @param {SharedNoteUpdateManyAndReturnArgs} args - Arguments to update many SharedNotes.
     * @example
     * // Update many SharedNotes
     * const sharedNote = await prisma.sharedNote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SharedNotes and only return the `id`
     * const sharedNoteWithIdOnly = await prisma.sharedNote.updateManyAndReturn({
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
    updateManyAndReturn<T extends SharedNoteUpdateManyAndReturnArgs>(
      args: SelectSubset<T, SharedNoteUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SharedNotePayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one SharedNote.
     * @param {SharedNoteUpsertArgs} args - Arguments to update or create a SharedNote.
     * @example
     * // Update or create a SharedNote
     * const sharedNote = await prisma.sharedNote.upsert({
     *   create: {
     *     // ... data to create a SharedNote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SharedNote we want to update
     *   }
     * })
     */
    upsert<T extends SharedNoteUpsertArgs>(
      args: SelectSubset<T, SharedNoteUpsertArgs<ExtArgs>>
    ): Prisma__SharedNoteClient<
      $Result.GetResult<
        Prisma.$SharedNotePayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of SharedNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedNoteCountArgs} args - Arguments to filter SharedNotes to count.
     * @example
     * // Count the number of SharedNotes
     * const count = await prisma.sharedNote.count({
     *   where: {
     *     // ... the filter for the SharedNotes we want to count
     *   }
     * })
     **/
    count<T extends SharedNoteCountArgs>(
      args?: Subset<T, SharedNoteCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], SharedNoteCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a SharedNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedNoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SharedNoteAggregateArgs>(
      args: Subset<T, SharedNoteAggregateArgs>
    ): Prisma.PrismaPromise<GetSharedNoteAggregateType<T>>;

    /**
     * Group by SharedNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedNoteGroupByArgs} args - Group by arguments.
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
      T extends SharedNoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SharedNoteGroupByArgs["orderBy"] }
        : { orderBy?: SharedNoteGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, SharedNoteGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetSharedNoteGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the SharedNote model
     */
    readonly fields: SharedNoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SharedNote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SharedNoteClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    note<T extends NoteDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, NoteDefaultArgs<ExtArgs>>
    ): Prisma__NoteClient<
      | $Result.GetResult<
          Prisma.$NotePayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the SharedNote model
   */
  interface SharedNoteFieldRefs {
    readonly id: FieldRef<"SharedNote", "Int">;
    readonly noteId: FieldRef<"SharedNote", "Int">;
    readonly userId: FieldRef<"SharedNote", "Int">;
    readonly createdAt: FieldRef<"SharedNote", "DateTime">;
  }

  // Custom InputTypes
  /**
   * SharedNote findUnique
   */
  export type SharedNoteFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SharedNote
     */
    select?: SharedNoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SharedNote
     */
    omit?: SharedNoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedNoteInclude<ExtArgs> | null;
    /**
     * Filter, which SharedNote to fetch.
     */
    where: SharedNoteWhereUniqueInput;
  };

  /**
   * SharedNote findUniqueOrThrow
   */
  export type SharedNoteFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SharedNote
     */
    select?: SharedNoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SharedNote
     */
    omit?: SharedNoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedNoteInclude<ExtArgs> | null;
    /**
     * Filter, which SharedNote to fetch.
     */
    where: SharedNoteWhereUniqueInput;
  };

  /**
   * SharedNote findFirst
   */
  export type SharedNoteFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SharedNote
     */
    select?: SharedNoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SharedNote
     */
    omit?: SharedNoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedNoteInclude<ExtArgs> | null;
    /**
     * Filter, which SharedNote to fetch.
     */
    where?: SharedNoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SharedNotes to fetch.
     */
    orderBy?:
      | SharedNoteOrderByWithRelationInput
      | SharedNoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SharedNotes.
     */
    cursor?: SharedNoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SharedNotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SharedNotes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SharedNotes.
     */
    distinct?: SharedNoteScalarFieldEnum | SharedNoteScalarFieldEnum[];
  };

  /**
   * SharedNote findFirstOrThrow
   */
  export type SharedNoteFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SharedNote
     */
    select?: SharedNoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SharedNote
     */
    omit?: SharedNoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedNoteInclude<ExtArgs> | null;
    /**
     * Filter, which SharedNote to fetch.
     */
    where?: SharedNoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SharedNotes to fetch.
     */
    orderBy?:
      | SharedNoteOrderByWithRelationInput
      | SharedNoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SharedNotes.
     */
    cursor?: SharedNoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SharedNotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SharedNotes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SharedNotes.
     */
    distinct?: SharedNoteScalarFieldEnum | SharedNoteScalarFieldEnum[];
  };

  /**
   * SharedNote findMany
   */
  export type SharedNoteFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SharedNote
     */
    select?: SharedNoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SharedNote
     */
    omit?: SharedNoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedNoteInclude<ExtArgs> | null;
    /**
     * Filter, which SharedNotes to fetch.
     */
    where?: SharedNoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SharedNotes to fetch.
     */
    orderBy?:
      | SharedNoteOrderByWithRelationInput
      | SharedNoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SharedNotes.
     */
    cursor?: SharedNoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SharedNotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SharedNotes.
     */
    skip?: number;
    distinct?: SharedNoteScalarFieldEnum | SharedNoteScalarFieldEnum[];
  };

  /**
   * SharedNote create
   */
  export type SharedNoteCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SharedNote
     */
    select?: SharedNoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SharedNote
     */
    omit?: SharedNoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedNoteInclude<ExtArgs> | null;
    /**
     * The data needed to create a SharedNote.
     */
    data: XOR<SharedNoteCreateInput, SharedNoteUncheckedCreateInput>;
  };

  /**
   * SharedNote createMany
   */
  export type SharedNoteCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many SharedNotes.
     */
    data: SharedNoteCreateManyInput | SharedNoteCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * SharedNote createManyAndReturn
   */
  export type SharedNoteCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SharedNote
     */
    select?: SharedNoteSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SharedNote
     */
    omit?: SharedNoteOmit<ExtArgs> | null;
    /**
     * The data used to create many SharedNotes.
     */
    data: SharedNoteCreateManyInput | SharedNoteCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedNoteIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * SharedNote update
   */
  export type SharedNoteUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SharedNote
     */
    select?: SharedNoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SharedNote
     */
    omit?: SharedNoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedNoteInclude<ExtArgs> | null;
    /**
     * The data needed to update a SharedNote.
     */
    data: XOR<SharedNoteUpdateInput, SharedNoteUncheckedUpdateInput>;
    /**
     * Choose, which SharedNote to update.
     */
    where: SharedNoteWhereUniqueInput;
  };

  /**
   * SharedNote updateMany
   */
  export type SharedNoteUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update SharedNotes.
     */
    data: XOR<
      SharedNoteUpdateManyMutationInput,
      SharedNoteUncheckedUpdateManyInput
    >;
    /**
     * Filter which SharedNotes to update
     */
    where?: SharedNoteWhereInput;
    /**
     * Limit how many SharedNotes to update.
     */
    limit?: number;
  };

  /**
   * SharedNote updateManyAndReturn
   */
  export type SharedNoteUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SharedNote
     */
    select?: SharedNoteSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SharedNote
     */
    omit?: SharedNoteOmit<ExtArgs> | null;
    /**
     * The data used to update SharedNotes.
     */
    data: XOR<
      SharedNoteUpdateManyMutationInput,
      SharedNoteUncheckedUpdateManyInput
    >;
    /**
     * Filter which SharedNotes to update
     */
    where?: SharedNoteWhereInput;
    /**
     * Limit how many SharedNotes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedNoteIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * SharedNote upsert
   */
  export type SharedNoteUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SharedNote
     */
    select?: SharedNoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SharedNote
     */
    omit?: SharedNoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedNoteInclude<ExtArgs> | null;
    /**
     * The filter to search for the SharedNote to update in case it exists.
     */
    where: SharedNoteWhereUniqueInput;
    /**
     * In case the SharedNote found by the `where` argument doesn't exist, create a new SharedNote with this data.
     */
    create: XOR<SharedNoteCreateInput, SharedNoteUncheckedCreateInput>;
    /**
     * In case the SharedNote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SharedNoteUpdateInput, SharedNoteUncheckedUpdateInput>;
  };

  /**
   * SharedNote delete
   */
  export type SharedNoteDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SharedNote
     */
    select?: SharedNoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SharedNote
     */
    omit?: SharedNoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedNoteInclude<ExtArgs> | null;
    /**
     * Filter which SharedNote to delete.
     */
    where: SharedNoteWhereUniqueInput;
  };

  /**
   * SharedNote deleteMany
   */
  export type SharedNoteDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which SharedNotes to delete
     */
    where?: SharedNoteWhereInput;
    /**
     * Limit how many SharedNotes to delete.
     */
    limit?: number;
  };

  /**
   * SharedNote without action
   */
  export type SharedNoteDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SharedNote
     */
    select?: SharedNoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SharedNote
     */
    omit?: SharedNoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedNoteInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: "ReadUncommitted";
    ReadCommitted: "ReadCommitted";
    RepeatableRead: "RepeatableRead";
    Serializable: "Serializable";
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: "id";
    name: "name";
    email: "email";
    password: "password";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SubjectScalarFieldEnum: {
    id: "id";
    name: "name";
    userId: "userId";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type SubjectScalarFieldEnum =
    (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum];

  export const FolderScalarFieldEnum: {
    id: "id";
    name: "name";
    subjectId: "subjectId";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type FolderScalarFieldEnum =
    (typeof FolderScalarFieldEnum)[keyof typeof FolderScalarFieldEnum];

  export const NoteScalarFieldEnum: {
    id: "id";
    title: "title";
    content: "content";
    userId: "userId";
    subjectId: "subjectId";
    folderId: "folderId";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type NoteScalarFieldEnum =
    (typeof NoteScalarFieldEnum)[keyof typeof NoteScalarFieldEnum];

  export const TagScalarFieldEnum: {
    id: "id";
    name: "name";
    createdAt: "createdAt";
  };

  export type TagScalarFieldEnum =
    (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum];

  export const NoteTagScalarFieldEnum: {
    noteId: "noteId";
    tagId: "tagId";
  };

  export type NoteTagScalarFieldEnum =
    (typeof NoteTagScalarFieldEnum)[keyof typeof NoteTagScalarFieldEnum];

  export const SharedNoteScalarFieldEnum: {
    id: "id";
    noteId: "noteId";
    userId: "userId";
    createdAt: "createdAt";
  };

  export type SharedNoteScalarFieldEnum =
    (typeof SharedNoteScalarFieldEnum)[keyof typeof SharedNoteScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: "default";
    insensitive: "insensitive";
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: "first";
    last: "last";
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int"
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int[]"
  >;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String"
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String[]"
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime"
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime[]"
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float"
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float[]"
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: IntFilter<"User"> | number;
    name?: StringFilter<"User"> | string;
    email?: StringFilter<"User"> | string;
    password?: StringFilter<"User"> | string;
    createdAt?: DateTimeFilter<"User"> | Date | string;
    updatedAt?: DateTimeFilter<"User"> | Date | string;
    subjects?: SubjectListRelationFilter;
    notes?: NoteListRelationFilter;
    shared?: SharedNoteListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    subjects?: SubjectOrderByRelationAggregateInput;
    notes?: NoteOrderByRelationAggregateInput;
    shared?: SharedNoteOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      name?: StringFilter<"User"> | string;
      password?: StringFilter<"User"> | string;
      createdAt?: DateTimeFilter<"User"> | Date | string;
      updatedAt?: DateTimeFilter<"User"> | Date | string;
      subjects?: SubjectListRelationFilter;
      notes?: NoteListRelationFilter;
      shared?: SharedNoteListRelationFilter;
    },
    "id" | "email"
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _avg?: UserAvgOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
    _sum?: UserSumOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"User"> | number;
    name?: StringWithAggregatesFilter<"User"> | string;
    email?: StringWithAggregatesFilter<"User"> | string;
    password?: StringWithAggregatesFilter<"User"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
  };

  export type SubjectWhereInput = {
    AND?: SubjectWhereInput | SubjectWhereInput[];
    OR?: SubjectWhereInput[];
    NOT?: SubjectWhereInput | SubjectWhereInput[];
    id?: IntFilter<"Subject"> | number;
    name?: StringFilter<"Subject"> | string;
    userId?: IntFilter<"Subject"> | number;
    createdAt?: DateTimeFilter<"Subject"> | Date | string;
    updatedAt?: DateTimeFilter<"Subject"> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    folders?: FolderListRelationFilter;
    notes?: NoteListRelationFilter;
  };

  export type SubjectOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
    folders?: FolderOrderByRelationAggregateInput;
    notes?: NoteOrderByRelationAggregateInput;
  };

  export type SubjectWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      name_userId?: SubjectNameUserIdCompoundUniqueInput;
      AND?: SubjectWhereInput | SubjectWhereInput[];
      OR?: SubjectWhereInput[];
      NOT?: SubjectWhereInput | SubjectWhereInput[];
      name?: StringFilter<"Subject"> | string;
      userId?: IntFilter<"Subject"> | number;
      createdAt?: DateTimeFilter<"Subject"> | Date | string;
      updatedAt?: DateTimeFilter<"Subject"> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      folders?: FolderListRelationFilter;
      notes?: NoteListRelationFilter;
    },
    "id" | "name_userId"
  >;

  export type SubjectOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: SubjectCountOrderByAggregateInput;
    _avg?: SubjectAvgOrderByAggregateInput;
    _max?: SubjectMaxOrderByAggregateInput;
    _min?: SubjectMinOrderByAggregateInput;
    _sum?: SubjectSumOrderByAggregateInput;
  };

  export type SubjectScalarWhereWithAggregatesInput = {
    AND?:
      | SubjectScalarWhereWithAggregatesInput
      | SubjectScalarWhereWithAggregatesInput[];
    OR?: SubjectScalarWhereWithAggregatesInput[];
    NOT?:
      | SubjectScalarWhereWithAggregatesInput
      | SubjectScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"Subject"> | number;
    name?: StringWithAggregatesFilter<"Subject"> | string;
    userId?: IntWithAggregatesFilter<"Subject"> | number;
    createdAt?: DateTimeWithAggregatesFilter<"Subject"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Subject"> | Date | string;
  };

  export type FolderWhereInput = {
    AND?: FolderWhereInput | FolderWhereInput[];
    OR?: FolderWhereInput[];
    NOT?: FolderWhereInput | FolderWhereInput[];
    id?: IntFilter<"Folder"> | number;
    name?: StringFilter<"Folder"> | string;
    subjectId?: IntFilter<"Folder"> | number;
    createdAt?: DateTimeFilter<"Folder"> | Date | string;
    updatedAt?: DateTimeFilter<"Folder"> | Date | string;
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>;
    notes?: NoteListRelationFilter;
  };

  export type FolderOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    subjectId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    subject?: SubjectOrderByWithRelationInput;
    notes?: NoteOrderByRelationAggregateInput;
  };

  export type FolderWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      name_subjectId?: FolderNameSubjectIdCompoundUniqueInput;
      AND?: FolderWhereInput | FolderWhereInput[];
      OR?: FolderWhereInput[];
      NOT?: FolderWhereInput | FolderWhereInput[];
      name?: StringFilter<"Folder"> | string;
      subjectId?: IntFilter<"Folder"> | number;
      createdAt?: DateTimeFilter<"Folder"> | Date | string;
      updatedAt?: DateTimeFilter<"Folder"> | Date | string;
      subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>;
      notes?: NoteListRelationFilter;
    },
    "id" | "name_subjectId"
  >;

  export type FolderOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    subjectId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: FolderCountOrderByAggregateInput;
    _avg?: FolderAvgOrderByAggregateInput;
    _max?: FolderMaxOrderByAggregateInput;
    _min?: FolderMinOrderByAggregateInput;
    _sum?: FolderSumOrderByAggregateInput;
  };

  export type FolderScalarWhereWithAggregatesInput = {
    AND?:
      | FolderScalarWhereWithAggregatesInput
      | FolderScalarWhereWithAggregatesInput[];
    OR?: FolderScalarWhereWithAggregatesInput[];
    NOT?:
      | FolderScalarWhereWithAggregatesInput
      | FolderScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"Folder"> | number;
    name?: StringWithAggregatesFilter<"Folder"> | string;
    subjectId?: IntWithAggregatesFilter<"Folder"> | number;
    createdAt?: DateTimeWithAggregatesFilter<"Folder"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Folder"> | Date | string;
  };

  export type NoteWhereInput = {
    AND?: NoteWhereInput | NoteWhereInput[];
    OR?: NoteWhereInput[];
    NOT?: NoteWhereInput | NoteWhereInput[];
    id?: IntFilter<"Note"> | number;
    title?: StringFilter<"Note"> | string;
    content?: StringFilter<"Note"> | string;
    userId?: IntFilter<"Note"> | number;
    subjectId?: IntFilter<"Note"> | number;
    folderId?: IntNullableFilter<"Note"> | number | null;
    createdAt?: DateTimeFilter<"Note"> | Date | string;
    updatedAt?: DateTimeFilter<"Note"> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>;
    folder?: XOR<FolderNullableScalarRelationFilter, FolderWhereInput> | null;
    tags?: NoteTagListRelationFilter;
    shares?: SharedNoteListRelationFilter;
  };

  export type NoteOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    userId?: SortOrder;
    subjectId?: SortOrder;
    folderId?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
    subject?: SubjectOrderByWithRelationInput;
    folder?: FolderOrderByWithRelationInput;
    tags?: NoteTagOrderByRelationAggregateInput;
    shares?: SharedNoteOrderByRelationAggregateInput;
  };

  export type NoteWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: NoteWhereInput | NoteWhereInput[];
      OR?: NoteWhereInput[];
      NOT?: NoteWhereInput | NoteWhereInput[];
      title?: StringFilter<"Note"> | string;
      content?: StringFilter<"Note"> | string;
      userId?: IntFilter<"Note"> | number;
      subjectId?: IntFilter<"Note"> | number;
      folderId?: IntNullableFilter<"Note"> | number | null;
      createdAt?: DateTimeFilter<"Note"> | Date | string;
      updatedAt?: DateTimeFilter<"Note"> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>;
      folder?: XOR<FolderNullableScalarRelationFilter, FolderWhereInput> | null;
      tags?: NoteTagListRelationFilter;
      shares?: SharedNoteListRelationFilter;
    },
    "id"
  >;

  export type NoteOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    userId?: SortOrder;
    subjectId?: SortOrder;
    folderId?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: NoteCountOrderByAggregateInput;
    _avg?: NoteAvgOrderByAggregateInput;
    _max?: NoteMaxOrderByAggregateInput;
    _min?: NoteMinOrderByAggregateInput;
    _sum?: NoteSumOrderByAggregateInput;
  };

  export type NoteScalarWhereWithAggregatesInput = {
    AND?:
      | NoteScalarWhereWithAggregatesInput
      | NoteScalarWhereWithAggregatesInput[];
    OR?: NoteScalarWhereWithAggregatesInput[];
    NOT?:
      | NoteScalarWhereWithAggregatesInput
      | NoteScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"Note"> | number;
    title?: StringWithAggregatesFilter<"Note"> | string;
    content?: StringWithAggregatesFilter<"Note"> | string;
    userId?: IntWithAggregatesFilter<"Note"> | number;
    subjectId?: IntWithAggregatesFilter<"Note"> | number;
    folderId?: IntNullableWithAggregatesFilter<"Note"> | number | null;
    createdAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string;
  };

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[];
    OR?: TagWhereInput[];
    NOT?: TagWhereInput | TagWhereInput[];
    id?: IntFilter<"Tag"> | number;
    name?: StringFilter<"Tag"> | string;
    createdAt?: DateTimeFilter<"Tag"> | Date | string;
    notes?: NoteTagListRelationFilter;
  };

  export type TagOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    notes?: NoteTagOrderByRelationAggregateInput;
  };

  export type TagWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      name?: string;
      AND?: TagWhereInput | TagWhereInput[];
      OR?: TagWhereInput[];
      NOT?: TagWhereInput | TagWhereInput[];
      createdAt?: DateTimeFilter<"Tag"> | Date | string;
      notes?: NoteTagListRelationFilter;
    },
    "id" | "name"
  >;

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    _count?: TagCountOrderByAggregateInput;
    _avg?: TagAvgOrderByAggregateInput;
    _max?: TagMaxOrderByAggregateInput;
    _min?: TagMinOrderByAggregateInput;
    _sum?: TagSumOrderByAggregateInput;
  };

  export type TagScalarWhereWithAggregatesInput = {
    AND?:
      | TagScalarWhereWithAggregatesInput
      | TagScalarWhereWithAggregatesInput[];
    OR?: TagScalarWhereWithAggregatesInput[];
    NOT?:
      | TagScalarWhereWithAggregatesInput
      | TagScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"Tag"> | number;
    name?: StringWithAggregatesFilter<"Tag"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string;
  };

  export type NoteTagWhereInput = {
    AND?: NoteTagWhereInput | NoteTagWhereInput[];
    OR?: NoteTagWhereInput[];
    NOT?: NoteTagWhereInput | NoteTagWhereInput[];
    noteId?: IntFilter<"NoteTag"> | number;
    tagId?: IntFilter<"NoteTag"> | number;
    note?: XOR<NoteScalarRelationFilter, NoteWhereInput>;
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>;
  };

  export type NoteTagOrderByWithRelationInput = {
    noteId?: SortOrder;
    tagId?: SortOrder;
    note?: NoteOrderByWithRelationInput;
    tag?: TagOrderByWithRelationInput;
  };

  export type NoteTagWhereUniqueInput = Prisma.AtLeast<
    {
      noteId_tagId?: NoteTagNoteIdTagIdCompoundUniqueInput;
      AND?: NoteTagWhereInput | NoteTagWhereInput[];
      OR?: NoteTagWhereInput[];
      NOT?: NoteTagWhereInput | NoteTagWhereInput[];
      noteId?: IntFilter<"NoteTag"> | number;
      tagId?: IntFilter<"NoteTag"> | number;
      note?: XOR<NoteScalarRelationFilter, NoteWhereInput>;
      tag?: XOR<TagScalarRelationFilter, TagWhereInput>;
    },
    "noteId_tagId"
  >;

  export type NoteTagOrderByWithAggregationInput = {
    noteId?: SortOrder;
    tagId?: SortOrder;
    _count?: NoteTagCountOrderByAggregateInput;
    _avg?: NoteTagAvgOrderByAggregateInput;
    _max?: NoteTagMaxOrderByAggregateInput;
    _min?: NoteTagMinOrderByAggregateInput;
    _sum?: NoteTagSumOrderByAggregateInput;
  };

  export type NoteTagScalarWhereWithAggregatesInput = {
    AND?:
      | NoteTagScalarWhereWithAggregatesInput
      | NoteTagScalarWhereWithAggregatesInput[];
    OR?: NoteTagScalarWhereWithAggregatesInput[];
    NOT?:
      | NoteTagScalarWhereWithAggregatesInput
      | NoteTagScalarWhereWithAggregatesInput[];
    noteId?: IntWithAggregatesFilter<"NoteTag"> | number;
    tagId?: IntWithAggregatesFilter<"NoteTag"> | number;
  };

  export type SharedNoteWhereInput = {
    AND?: SharedNoteWhereInput | SharedNoteWhereInput[];
    OR?: SharedNoteWhereInput[];
    NOT?: SharedNoteWhereInput | SharedNoteWhereInput[];
    id?: IntFilter<"SharedNote"> | number;
    noteId?: IntFilter<"SharedNote"> | number;
    userId?: IntFilter<"SharedNote"> | number;
    createdAt?: DateTimeFilter<"SharedNote"> | Date | string;
    note?: XOR<NoteScalarRelationFilter, NoteWhereInput>;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type SharedNoteOrderByWithRelationInput = {
    id?: SortOrder;
    noteId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    note?: NoteOrderByWithRelationInput;
    user?: UserOrderByWithRelationInput;
  };

  export type SharedNoteWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      noteId_userId?: SharedNoteNoteIdUserIdCompoundUniqueInput;
      AND?: SharedNoteWhereInput | SharedNoteWhereInput[];
      OR?: SharedNoteWhereInput[];
      NOT?: SharedNoteWhereInput | SharedNoteWhereInput[];
      noteId?: IntFilter<"SharedNote"> | number;
      userId?: IntFilter<"SharedNote"> | number;
      createdAt?: DateTimeFilter<"SharedNote"> | Date | string;
      note?: XOR<NoteScalarRelationFilter, NoteWhereInput>;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    "id" | "noteId_userId"
  >;

  export type SharedNoteOrderByWithAggregationInput = {
    id?: SortOrder;
    noteId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    _count?: SharedNoteCountOrderByAggregateInput;
    _avg?: SharedNoteAvgOrderByAggregateInput;
    _max?: SharedNoteMaxOrderByAggregateInput;
    _min?: SharedNoteMinOrderByAggregateInput;
    _sum?: SharedNoteSumOrderByAggregateInput;
  };

  export type SharedNoteScalarWhereWithAggregatesInput = {
    AND?:
      | SharedNoteScalarWhereWithAggregatesInput
      | SharedNoteScalarWhereWithAggregatesInput[];
    OR?: SharedNoteScalarWhereWithAggregatesInput[];
    NOT?:
      | SharedNoteScalarWhereWithAggregatesInput
      | SharedNoteScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"SharedNote"> | number;
    noteId?: IntWithAggregatesFilter<"SharedNote"> | number;
    userId?: IntWithAggregatesFilter<"SharedNote"> | number;
    createdAt?: DateTimeWithAggregatesFilter<"SharedNote"> | Date | string;
  };

  export type UserCreateInput = {
    name: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subjects?: SubjectCreateNestedManyWithoutUserInput;
    notes?: NoteCreateNestedManyWithoutUserInput;
    shared?: SharedNoteCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subjects?: SubjectUncheckedCreateNestedManyWithoutUserInput;
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput;
    shared?: SharedNoteUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    subjects?: SubjectUpdateManyWithoutUserNestedInput;
    notes?: NoteUpdateManyWithoutUserNestedInput;
    shared?: SharedNoteUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    subjects?: SubjectUncheckedUpdateManyWithoutUserNestedInput;
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput;
    shared?: SharedNoteUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SubjectCreateInput = {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutSubjectsInput;
    folders?: FolderCreateNestedManyWithoutSubjectInput;
    notes?: NoteCreateNestedManyWithoutSubjectInput;
  };

  export type SubjectUncheckedCreateInput = {
    id?: number;
    name: string;
    userId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    folders?: FolderUncheckedCreateNestedManyWithoutSubjectInput;
    notes?: NoteUncheckedCreateNestedManyWithoutSubjectInput;
  };

  export type SubjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutSubjectsNestedInput;
    folders?: FolderUpdateManyWithoutSubjectNestedInput;
    notes?: NoteUpdateManyWithoutSubjectNestedInput;
  };

  export type SubjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    userId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    folders?: FolderUncheckedUpdateManyWithoutSubjectNestedInput;
    notes?: NoteUncheckedUpdateManyWithoutSubjectNestedInput;
  };

  export type SubjectCreateManyInput = {
    id?: number;
    name: string;
    userId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type SubjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SubjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    userId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FolderCreateInput = {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subject: SubjectCreateNestedOneWithoutFoldersInput;
    notes?: NoteCreateNestedManyWithoutFolderInput;
  };

  export type FolderUncheckedCreateInput = {
    id?: number;
    name: string;
    subjectId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    notes?: NoteUncheckedCreateNestedManyWithoutFolderInput;
  };

  export type FolderUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    subject?: SubjectUpdateOneRequiredWithoutFoldersNestedInput;
    notes?: NoteUpdateManyWithoutFolderNestedInput;
  };

  export type FolderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    subjectId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: NoteUncheckedUpdateManyWithoutFolderNestedInput;
  };

  export type FolderCreateManyInput = {
    id?: number;
    name: string;
    subjectId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type FolderUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FolderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    subjectId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NoteCreateInput = {
    title: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutNotesInput;
    subject: SubjectCreateNestedOneWithoutNotesInput;
    folder?: FolderCreateNestedOneWithoutNotesInput;
    tags?: NoteTagCreateNestedManyWithoutNoteInput;
    shares?: SharedNoteCreateNestedManyWithoutNoteInput;
  };

  export type NoteUncheckedCreateInput = {
    id?: number;
    title: string;
    content: string;
    userId: number;
    subjectId: number;
    folderId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tags?: NoteTagUncheckedCreateNestedManyWithoutNoteInput;
    shares?: SharedNoteUncheckedCreateNestedManyWithoutNoteInput;
  };

  export type NoteUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutNotesNestedInput;
    subject?: SubjectUpdateOneRequiredWithoutNotesNestedInput;
    folder?: FolderUpdateOneWithoutNotesNestedInput;
    tags?: NoteTagUpdateManyWithoutNoteNestedInput;
    shares?: SharedNoteUpdateManyWithoutNoteNestedInput;
  };

  export type NoteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    userId?: IntFieldUpdateOperationsInput | number;
    subjectId?: IntFieldUpdateOperationsInput | number;
    folderId?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    tags?: NoteTagUncheckedUpdateManyWithoutNoteNestedInput;
    shares?: SharedNoteUncheckedUpdateManyWithoutNoteNestedInput;
  };

  export type NoteCreateManyInput = {
    id?: number;
    title: string;
    content: string;
    userId: number;
    subjectId: number;
    folderId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type NoteUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NoteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    userId?: IntFieldUpdateOperationsInput | number;
    subjectId?: IntFieldUpdateOperationsInput | number;
    folderId?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TagCreateInput = {
    name: string;
    createdAt?: Date | string;
    notes?: NoteTagCreateNestedManyWithoutTagInput;
  };

  export type TagUncheckedCreateInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
    notes?: NoteTagUncheckedCreateNestedManyWithoutTagInput;
  };

  export type TagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: NoteTagUpdateManyWithoutTagNestedInput;
  };

  export type TagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: NoteTagUncheckedUpdateManyWithoutTagNestedInput;
  };

  export type TagCreateManyInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
  };

  export type TagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NoteTagCreateInput = {
    note: NoteCreateNestedOneWithoutTagsInput;
    tag: TagCreateNestedOneWithoutNotesInput;
  };

  export type NoteTagUncheckedCreateInput = {
    noteId: number;
    tagId: number;
  };

  export type NoteTagUpdateInput = {
    note?: NoteUpdateOneRequiredWithoutTagsNestedInput;
    tag?: TagUpdateOneRequiredWithoutNotesNestedInput;
  };

  export type NoteTagUncheckedUpdateInput = {
    noteId?: IntFieldUpdateOperationsInput | number;
    tagId?: IntFieldUpdateOperationsInput | number;
  };

  export type NoteTagCreateManyInput = {
    noteId: number;
    tagId: number;
  };

  export type NoteTagUpdateManyMutationInput = {};

  export type NoteTagUncheckedUpdateManyInput = {
    noteId?: IntFieldUpdateOperationsInput | number;
    tagId?: IntFieldUpdateOperationsInput | number;
  };

  export type SharedNoteCreateInput = {
    createdAt?: Date | string;
    note: NoteCreateNestedOneWithoutSharesInput;
    user: UserCreateNestedOneWithoutSharedInput;
  };

  export type SharedNoteUncheckedCreateInput = {
    id?: number;
    noteId: number;
    userId: number;
    createdAt?: Date | string;
  };

  export type SharedNoteUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    note?: NoteUpdateOneRequiredWithoutSharesNestedInput;
    user?: UserUpdateOneRequiredWithoutSharedNestedInput;
  };

  export type SharedNoteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    noteId?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SharedNoteCreateManyInput = {
    id?: number;
    noteId: number;
    userId: number;
    createdAt?: Date | string;
  };

  export type SharedNoteUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SharedNoteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    noteId?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type SubjectListRelationFilter = {
    every?: SubjectWhereInput;
    some?: SubjectWhereInput;
    none?: SubjectWhereInput;
  };

  export type NoteListRelationFilter = {
    every?: NoteWhereInput;
    some?: NoteWhereInput;
    none?: NoteWhereInput;
  };

  export type SharedNoteListRelationFilter = {
    every?: SharedNoteWhereInput;
    some?: SharedNoteWhereInput;
    none?: SharedNoteWhereInput;
  };

  export type SubjectOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type NoteOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type SharedNoteOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type FolderListRelationFilter = {
    every?: FolderWhereInput;
    some?: FolderWhereInput;
    none?: FolderWhereInput;
  };

  export type FolderOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type SubjectNameUserIdCompoundUniqueInput = {
    name: string;
    userId: number;
  };

  export type SubjectCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type SubjectAvgOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
  };

  export type SubjectMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type SubjectMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type SubjectSumOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
  };

  export type SubjectScalarRelationFilter = {
    is?: SubjectWhereInput;
    isNot?: SubjectWhereInput;
  };

  export type FolderNameSubjectIdCompoundUniqueInput = {
    name: string;
    subjectId: number;
  };

  export type FolderCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    subjectId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type FolderAvgOrderByAggregateInput = {
    id?: SortOrder;
    subjectId?: SortOrder;
  };

  export type FolderMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    subjectId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type FolderMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    subjectId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type FolderSumOrderByAggregateInput = {
    id?: SortOrder;
    subjectId?: SortOrder;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type FolderNullableScalarRelationFilter = {
    is?: FolderWhereInput | null;
    isNot?: FolderWhereInput | null;
  };

  export type NoteTagListRelationFilter = {
    every?: NoteTagWhereInput;
    some?: NoteTagWhereInput;
    none?: NoteTagWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type NoteTagOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type NoteCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    userId?: SortOrder;
    subjectId?: SortOrder;
    folderId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type NoteAvgOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    subjectId?: SortOrder;
    folderId?: SortOrder;
  };

  export type NoteMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    userId?: SortOrder;
    subjectId?: SortOrder;
    folderId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type NoteMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    userId?: SortOrder;
    subjectId?: SortOrder;
    folderId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type NoteSumOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    subjectId?: SortOrder;
    folderId?: SortOrder;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
  };

  export type TagAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
  };

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
  };

  export type TagSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type NoteScalarRelationFilter = {
    is?: NoteWhereInput;
    isNot?: NoteWhereInput;
  };

  export type TagScalarRelationFilter = {
    is?: TagWhereInput;
    isNot?: TagWhereInput;
  };

  export type NoteTagNoteIdTagIdCompoundUniqueInput = {
    noteId: number;
    tagId: number;
  };

  export type NoteTagCountOrderByAggregateInput = {
    noteId?: SortOrder;
    tagId?: SortOrder;
  };

  export type NoteTagAvgOrderByAggregateInput = {
    noteId?: SortOrder;
    tagId?: SortOrder;
  };

  export type NoteTagMaxOrderByAggregateInput = {
    noteId?: SortOrder;
    tagId?: SortOrder;
  };

  export type NoteTagMinOrderByAggregateInput = {
    noteId?: SortOrder;
    tagId?: SortOrder;
  };

  export type NoteTagSumOrderByAggregateInput = {
    noteId?: SortOrder;
    tagId?: SortOrder;
  };

  export type SharedNoteNoteIdUserIdCompoundUniqueInput = {
    noteId: number;
    userId: number;
  };

  export type SharedNoteCountOrderByAggregateInput = {
    id?: SortOrder;
    noteId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type SharedNoteAvgOrderByAggregateInput = {
    id?: SortOrder;
    noteId?: SortOrder;
    userId?: SortOrder;
  };

  export type SharedNoteMaxOrderByAggregateInput = {
    id?: SortOrder;
    noteId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type SharedNoteMinOrderByAggregateInput = {
    id?: SortOrder;
    noteId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type SharedNoteSumOrderByAggregateInput = {
    id?: SortOrder;
    noteId?: SortOrder;
    userId?: SortOrder;
  };

  export type SubjectCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          SubjectCreateWithoutUserInput,
          SubjectUncheckedCreateWithoutUserInput
        >
      | SubjectCreateWithoutUserInput[]
      | SubjectUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | SubjectCreateOrConnectWithoutUserInput
      | SubjectCreateOrConnectWithoutUserInput[];
    createMany?: SubjectCreateManyUserInputEnvelope;
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[];
  };

  export type NoteCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput>
      | NoteCreateWithoutUserInput[]
      | NoteUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | NoteCreateOrConnectWithoutUserInput
      | NoteCreateOrConnectWithoutUserInput[];
    createMany?: NoteCreateManyUserInputEnvelope;
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[];
  };

  export type SharedNoteCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          SharedNoteCreateWithoutUserInput,
          SharedNoteUncheckedCreateWithoutUserInput
        >
      | SharedNoteCreateWithoutUserInput[]
      | SharedNoteUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | SharedNoteCreateOrConnectWithoutUserInput
      | SharedNoteCreateOrConnectWithoutUserInput[];
    createMany?: SharedNoteCreateManyUserInputEnvelope;
    connect?: SharedNoteWhereUniqueInput | SharedNoteWhereUniqueInput[];
  };

  export type SubjectUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          SubjectCreateWithoutUserInput,
          SubjectUncheckedCreateWithoutUserInput
        >
      | SubjectCreateWithoutUserInput[]
      | SubjectUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | SubjectCreateOrConnectWithoutUserInput
      | SubjectCreateOrConnectWithoutUserInput[];
    createMany?: SubjectCreateManyUserInputEnvelope;
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[];
  };

  export type NoteUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput>
      | NoteCreateWithoutUserInput[]
      | NoteUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | NoteCreateOrConnectWithoutUserInput
      | NoteCreateOrConnectWithoutUserInput[];
    createMany?: NoteCreateManyUserInputEnvelope;
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[];
  };

  export type SharedNoteUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          SharedNoteCreateWithoutUserInput,
          SharedNoteUncheckedCreateWithoutUserInput
        >
      | SharedNoteCreateWithoutUserInput[]
      | SharedNoteUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | SharedNoteCreateOrConnectWithoutUserInput
      | SharedNoteCreateOrConnectWithoutUserInput[];
    createMany?: SharedNoteCreateManyUserInputEnvelope;
    connect?: SharedNoteWhereUniqueInput | SharedNoteWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type SubjectUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          SubjectCreateWithoutUserInput,
          SubjectUncheckedCreateWithoutUserInput
        >
      | SubjectCreateWithoutUserInput[]
      | SubjectUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | SubjectCreateOrConnectWithoutUserInput
      | SubjectCreateOrConnectWithoutUserInput[];
    upsert?:
      | SubjectUpsertWithWhereUniqueWithoutUserInput
      | SubjectUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: SubjectCreateManyUserInputEnvelope;
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[];
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[];
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[];
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[];
    update?:
      | SubjectUpdateWithWhereUniqueWithoutUserInput
      | SubjectUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | SubjectUpdateManyWithWhereWithoutUserInput
      | SubjectUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[];
  };

  export type NoteUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput>
      | NoteCreateWithoutUserInput[]
      | NoteUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | NoteCreateOrConnectWithoutUserInput
      | NoteCreateOrConnectWithoutUserInput[];
    upsert?:
      | NoteUpsertWithWhereUniqueWithoutUserInput
      | NoteUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: NoteCreateManyUserInputEnvelope;
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[];
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[];
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[];
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[];
    update?:
      | NoteUpdateWithWhereUniqueWithoutUserInput
      | NoteUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | NoteUpdateManyWithWhereWithoutUserInput
      | NoteUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[];
  };

  export type SharedNoteUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          SharedNoteCreateWithoutUserInput,
          SharedNoteUncheckedCreateWithoutUserInput
        >
      | SharedNoteCreateWithoutUserInput[]
      | SharedNoteUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | SharedNoteCreateOrConnectWithoutUserInput
      | SharedNoteCreateOrConnectWithoutUserInput[];
    upsert?:
      | SharedNoteUpsertWithWhereUniqueWithoutUserInput
      | SharedNoteUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: SharedNoteCreateManyUserInputEnvelope;
    set?: SharedNoteWhereUniqueInput | SharedNoteWhereUniqueInput[];
    disconnect?: SharedNoteWhereUniqueInput | SharedNoteWhereUniqueInput[];
    delete?: SharedNoteWhereUniqueInput | SharedNoteWhereUniqueInput[];
    connect?: SharedNoteWhereUniqueInput | SharedNoteWhereUniqueInput[];
    update?:
      | SharedNoteUpdateWithWhereUniqueWithoutUserInput
      | SharedNoteUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | SharedNoteUpdateManyWithWhereWithoutUserInput
      | SharedNoteUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: SharedNoteScalarWhereInput | SharedNoteScalarWhereInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type SubjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          SubjectCreateWithoutUserInput,
          SubjectUncheckedCreateWithoutUserInput
        >
      | SubjectCreateWithoutUserInput[]
      | SubjectUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | SubjectCreateOrConnectWithoutUserInput
      | SubjectCreateOrConnectWithoutUserInput[];
    upsert?:
      | SubjectUpsertWithWhereUniqueWithoutUserInput
      | SubjectUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: SubjectCreateManyUserInputEnvelope;
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[];
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[];
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[];
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[];
    update?:
      | SubjectUpdateWithWhereUniqueWithoutUserInput
      | SubjectUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | SubjectUpdateManyWithWhereWithoutUserInput
      | SubjectUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[];
  };

  export type NoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput>
      | NoteCreateWithoutUserInput[]
      | NoteUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | NoteCreateOrConnectWithoutUserInput
      | NoteCreateOrConnectWithoutUserInput[];
    upsert?:
      | NoteUpsertWithWhereUniqueWithoutUserInput
      | NoteUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: NoteCreateManyUserInputEnvelope;
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[];
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[];
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[];
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[];
    update?:
      | NoteUpdateWithWhereUniqueWithoutUserInput
      | NoteUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | NoteUpdateManyWithWhereWithoutUserInput
      | NoteUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[];
  };

  export type SharedNoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          SharedNoteCreateWithoutUserInput,
          SharedNoteUncheckedCreateWithoutUserInput
        >
      | SharedNoteCreateWithoutUserInput[]
      | SharedNoteUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | SharedNoteCreateOrConnectWithoutUserInput
      | SharedNoteCreateOrConnectWithoutUserInput[];
    upsert?:
      | SharedNoteUpsertWithWhereUniqueWithoutUserInput
      | SharedNoteUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: SharedNoteCreateManyUserInputEnvelope;
    set?: SharedNoteWhereUniqueInput | SharedNoteWhereUniqueInput[];
    disconnect?: SharedNoteWhereUniqueInput | SharedNoteWhereUniqueInput[];
    delete?: SharedNoteWhereUniqueInput | SharedNoteWhereUniqueInput[];
    connect?: SharedNoteWhereUniqueInput | SharedNoteWhereUniqueInput[];
    update?:
      | SharedNoteUpdateWithWhereUniqueWithoutUserInput
      | SharedNoteUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | SharedNoteUpdateManyWithWhereWithoutUserInput
      | SharedNoteUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: SharedNoteScalarWhereInput | SharedNoteScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutSubjectsInput = {
    create?: XOR<
      UserCreateWithoutSubjectsInput,
      UserUncheckedCreateWithoutSubjectsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutSubjectsInput;
    connect?: UserWhereUniqueInput;
  };

  export type FolderCreateNestedManyWithoutSubjectInput = {
    create?:
      | XOR<
          FolderCreateWithoutSubjectInput,
          FolderUncheckedCreateWithoutSubjectInput
        >
      | FolderCreateWithoutSubjectInput[]
      | FolderUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?:
      | FolderCreateOrConnectWithoutSubjectInput
      | FolderCreateOrConnectWithoutSubjectInput[];
    createMany?: FolderCreateManySubjectInputEnvelope;
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[];
  };

  export type NoteCreateNestedManyWithoutSubjectInput = {
    create?:
      | XOR<
          NoteCreateWithoutSubjectInput,
          NoteUncheckedCreateWithoutSubjectInput
        >
      | NoteCreateWithoutSubjectInput[]
      | NoteUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?:
      | NoteCreateOrConnectWithoutSubjectInput
      | NoteCreateOrConnectWithoutSubjectInput[];
    createMany?: NoteCreateManySubjectInputEnvelope;
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[];
  };

  export type FolderUncheckedCreateNestedManyWithoutSubjectInput = {
    create?:
      | XOR<
          FolderCreateWithoutSubjectInput,
          FolderUncheckedCreateWithoutSubjectInput
        >
      | FolderCreateWithoutSubjectInput[]
      | FolderUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?:
      | FolderCreateOrConnectWithoutSubjectInput
      | FolderCreateOrConnectWithoutSubjectInput[];
    createMany?: FolderCreateManySubjectInputEnvelope;
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[];
  };

  export type NoteUncheckedCreateNestedManyWithoutSubjectInput = {
    create?:
      | XOR<
          NoteCreateWithoutSubjectInput,
          NoteUncheckedCreateWithoutSubjectInput
        >
      | NoteCreateWithoutSubjectInput[]
      | NoteUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?:
      | NoteCreateOrConnectWithoutSubjectInput
      | NoteCreateOrConnectWithoutSubjectInput[];
    createMany?: NoteCreateManySubjectInputEnvelope;
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[];
  };

  export type UserUpdateOneRequiredWithoutSubjectsNestedInput = {
    create?: XOR<
      UserCreateWithoutSubjectsInput,
      UserUncheckedCreateWithoutSubjectsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutSubjectsInput;
    upsert?: UserUpsertWithoutSubjectsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutSubjectsInput,
        UserUpdateWithoutSubjectsInput
      >,
      UserUncheckedUpdateWithoutSubjectsInput
    >;
  };

  export type FolderUpdateManyWithoutSubjectNestedInput = {
    create?:
      | XOR<
          FolderCreateWithoutSubjectInput,
          FolderUncheckedCreateWithoutSubjectInput
        >
      | FolderCreateWithoutSubjectInput[]
      | FolderUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?:
      | FolderCreateOrConnectWithoutSubjectInput
      | FolderCreateOrConnectWithoutSubjectInput[];
    upsert?:
      | FolderUpsertWithWhereUniqueWithoutSubjectInput
      | FolderUpsertWithWhereUniqueWithoutSubjectInput[];
    createMany?: FolderCreateManySubjectInputEnvelope;
    set?: FolderWhereUniqueInput | FolderWhereUniqueInput[];
    disconnect?: FolderWhereUniqueInput | FolderWhereUniqueInput[];
    delete?: FolderWhereUniqueInput | FolderWhereUniqueInput[];
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[];
    update?:
      | FolderUpdateWithWhereUniqueWithoutSubjectInput
      | FolderUpdateWithWhereUniqueWithoutSubjectInput[];
    updateMany?:
      | FolderUpdateManyWithWhereWithoutSubjectInput
      | FolderUpdateManyWithWhereWithoutSubjectInput[];
    deleteMany?: FolderScalarWhereInput | FolderScalarWhereInput[];
  };

  export type NoteUpdateManyWithoutSubjectNestedInput = {
    create?:
      | XOR<
          NoteCreateWithoutSubjectInput,
          NoteUncheckedCreateWithoutSubjectInput
        >
      | NoteCreateWithoutSubjectInput[]
      | NoteUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?:
      | NoteCreateOrConnectWithoutSubjectInput
      | NoteCreateOrConnectWithoutSubjectInput[];
    upsert?:
      | NoteUpsertWithWhereUniqueWithoutSubjectInput
      | NoteUpsertWithWhereUniqueWithoutSubjectInput[];
    createMany?: NoteCreateManySubjectInputEnvelope;
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[];
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[];
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[];
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[];
    update?:
      | NoteUpdateWithWhereUniqueWithoutSubjectInput
      | NoteUpdateWithWhereUniqueWithoutSubjectInput[];
    updateMany?:
      | NoteUpdateManyWithWhereWithoutSubjectInput
      | NoteUpdateManyWithWhereWithoutSubjectInput[];
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[];
  };

  export type FolderUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?:
      | XOR<
          FolderCreateWithoutSubjectInput,
          FolderUncheckedCreateWithoutSubjectInput
        >
      | FolderCreateWithoutSubjectInput[]
      | FolderUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?:
      | FolderCreateOrConnectWithoutSubjectInput
      | FolderCreateOrConnectWithoutSubjectInput[];
    upsert?:
      | FolderUpsertWithWhereUniqueWithoutSubjectInput
      | FolderUpsertWithWhereUniqueWithoutSubjectInput[];
    createMany?: FolderCreateManySubjectInputEnvelope;
    set?: FolderWhereUniqueInput | FolderWhereUniqueInput[];
    disconnect?: FolderWhereUniqueInput | FolderWhereUniqueInput[];
    delete?: FolderWhereUniqueInput | FolderWhereUniqueInput[];
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[];
    update?:
      | FolderUpdateWithWhereUniqueWithoutSubjectInput
      | FolderUpdateWithWhereUniqueWithoutSubjectInput[];
    updateMany?:
      | FolderUpdateManyWithWhereWithoutSubjectInput
      | FolderUpdateManyWithWhereWithoutSubjectInput[];
    deleteMany?: FolderScalarWhereInput | FolderScalarWhereInput[];
  };

  export type NoteUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?:
      | XOR<
          NoteCreateWithoutSubjectInput,
          NoteUncheckedCreateWithoutSubjectInput
        >
      | NoteCreateWithoutSubjectInput[]
      | NoteUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?:
      | NoteCreateOrConnectWithoutSubjectInput
      | NoteCreateOrConnectWithoutSubjectInput[];
    upsert?:
      | NoteUpsertWithWhereUniqueWithoutSubjectInput
      | NoteUpsertWithWhereUniqueWithoutSubjectInput[];
    createMany?: NoteCreateManySubjectInputEnvelope;
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[];
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[];
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[];
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[];
    update?:
      | NoteUpdateWithWhereUniqueWithoutSubjectInput
      | NoteUpdateWithWhereUniqueWithoutSubjectInput[];
    updateMany?:
      | NoteUpdateManyWithWhereWithoutSubjectInput
      | NoteUpdateManyWithWhereWithoutSubjectInput[];
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[];
  };

  export type SubjectCreateNestedOneWithoutFoldersInput = {
    create?: XOR<
      SubjectCreateWithoutFoldersInput,
      SubjectUncheckedCreateWithoutFoldersInput
    >;
    connectOrCreate?: SubjectCreateOrConnectWithoutFoldersInput;
    connect?: SubjectWhereUniqueInput;
  };

  export type NoteCreateNestedManyWithoutFolderInput = {
    create?:
      | XOR<NoteCreateWithoutFolderInput, NoteUncheckedCreateWithoutFolderInput>
      | NoteCreateWithoutFolderInput[]
      | NoteUncheckedCreateWithoutFolderInput[];
    connectOrCreate?:
      | NoteCreateOrConnectWithoutFolderInput
      | NoteCreateOrConnectWithoutFolderInput[];
    createMany?: NoteCreateManyFolderInputEnvelope;
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[];
  };

  export type NoteUncheckedCreateNestedManyWithoutFolderInput = {
    create?:
      | XOR<NoteCreateWithoutFolderInput, NoteUncheckedCreateWithoutFolderInput>
      | NoteCreateWithoutFolderInput[]
      | NoteUncheckedCreateWithoutFolderInput[];
    connectOrCreate?:
      | NoteCreateOrConnectWithoutFolderInput
      | NoteCreateOrConnectWithoutFolderInput[];
    createMany?: NoteCreateManyFolderInputEnvelope;
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[];
  };

  export type SubjectUpdateOneRequiredWithoutFoldersNestedInput = {
    create?: XOR<
      SubjectCreateWithoutFoldersInput,
      SubjectUncheckedCreateWithoutFoldersInput
    >;
    connectOrCreate?: SubjectCreateOrConnectWithoutFoldersInput;
    upsert?: SubjectUpsertWithoutFoldersInput;
    connect?: SubjectWhereUniqueInput;
    update?: XOR<
      XOR<
        SubjectUpdateToOneWithWhereWithoutFoldersInput,
        SubjectUpdateWithoutFoldersInput
      >,
      SubjectUncheckedUpdateWithoutFoldersInput
    >;
  };

  export type NoteUpdateManyWithoutFolderNestedInput = {
    create?:
      | XOR<NoteCreateWithoutFolderInput, NoteUncheckedCreateWithoutFolderInput>
      | NoteCreateWithoutFolderInput[]
      | NoteUncheckedCreateWithoutFolderInput[];
    connectOrCreate?:
      | NoteCreateOrConnectWithoutFolderInput
      | NoteCreateOrConnectWithoutFolderInput[];
    upsert?:
      | NoteUpsertWithWhereUniqueWithoutFolderInput
      | NoteUpsertWithWhereUniqueWithoutFolderInput[];
    createMany?: NoteCreateManyFolderInputEnvelope;
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[];
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[];
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[];
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[];
    update?:
      | NoteUpdateWithWhereUniqueWithoutFolderInput
      | NoteUpdateWithWhereUniqueWithoutFolderInput[];
    updateMany?:
      | NoteUpdateManyWithWhereWithoutFolderInput
      | NoteUpdateManyWithWhereWithoutFolderInput[];
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[];
  };

  export type NoteUncheckedUpdateManyWithoutFolderNestedInput = {
    create?:
      | XOR<NoteCreateWithoutFolderInput, NoteUncheckedCreateWithoutFolderInput>
      | NoteCreateWithoutFolderInput[]
      | NoteUncheckedCreateWithoutFolderInput[];
    connectOrCreate?:
      | NoteCreateOrConnectWithoutFolderInput
      | NoteCreateOrConnectWithoutFolderInput[];
    upsert?:
      | NoteUpsertWithWhereUniqueWithoutFolderInput
      | NoteUpsertWithWhereUniqueWithoutFolderInput[];
    createMany?: NoteCreateManyFolderInputEnvelope;
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[];
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[];
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[];
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[];
    update?:
      | NoteUpdateWithWhereUniqueWithoutFolderInput
      | NoteUpdateWithWhereUniqueWithoutFolderInput[];
    updateMany?:
      | NoteUpdateManyWithWhereWithoutFolderInput
      | NoteUpdateManyWithWhereWithoutFolderInput[];
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutNotesInput = {
    create?: XOR<
      UserCreateWithoutNotesInput,
      UserUncheckedCreateWithoutNotesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutNotesInput;
    connect?: UserWhereUniqueInput;
  };

  export type SubjectCreateNestedOneWithoutNotesInput = {
    create?: XOR<
      SubjectCreateWithoutNotesInput,
      SubjectUncheckedCreateWithoutNotesInput
    >;
    connectOrCreate?: SubjectCreateOrConnectWithoutNotesInput;
    connect?: SubjectWhereUniqueInput;
  };

  export type FolderCreateNestedOneWithoutNotesInput = {
    create?: XOR<
      FolderCreateWithoutNotesInput,
      FolderUncheckedCreateWithoutNotesInput
    >;
    connectOrCreate?: FolderCreateOrConnectWithoutNotesInput;
    connect?: FolderWhereUniqueInput;
  };

  export type NoteTagCreateNestedManyWithoutNoteInput = {
    create?:
      | XOR<
          NoteTagCreateWithoutNoteInput,
          NoteTagUncheckedCreateWithoutNoteInput
        >
      | NoteTagCreateWithoutNoteInput[]
      | NoteTagUncheckedCreateWithoutNoteInput[];
    connectOrCreate?:
      | NoteTagCreateOrConnectWithoutNoteInput
      | NoteTagCreateOrConnectWithoutNoteInput[];
    createMany?: NoteTagCreateManyNoteInputEnvelope;
    connect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[];
  };

  export type SharedNoteCreateNestedManyWithoutNoteInput = {
    create?:
      | XOR<
          SharedNoteCreateWithoutNoteInput,
          SharedNoteUncheckedCreateWithoutNoteInput
        >
      | SharedNoteCreateWithoutNoteInput[]
      | SharedNoteUncheckedCreateWithoutNoteInput[];
    connectOrCreate?:
      | SharedNoteCreateOrConnectWithoutNoteInput
      | SharedNoteCreateOrConnectWithoutNoteInput[];
    createMany?: SharedNoteCreateManyNoteInputEnvelope;
    connect?: SharedNoteWhereUniqueInput | SharedNoteWhereUniqueInput[];
  };

  export type NoteTagUncheckedCreateNestedManyWithoutNoteInput = {
    create?:
      | XOR<
          NoteTagCreateWithoutNoteInput,
          NoteTagUncheckedCreateWithoutNoteInput
        >
      | NoteTagCreateWithoutNoteInput[]
      | NoteTagUncheckedCreateWithoutNoteInput[];
    connectOrCreate?:
      | NoteTagCreateOrConnectWithoutNoteInput
      | NoteTagCreateOrConnectWithoutNoteInput[];
    createMany?: NoteTagCreateManyNoteInputEnvelope;
    connect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[];
  };

  export type SharedNoteUncheckedCreateNestedManyWithoutNoteInput = {
    create?:
      | XOR<
          SharedNoteCreateWithoutNoteInput,
          SharedNoteUncheckedCreateWithoutNoteInput
        >
      | SharedNoteCreateWithoutNoteInput[]
      | SharedNoteUncheckedCreateWithoutNoteInput[];
    connectOrCreate?:
      | SharedNoteCreateOrConnectWithoutNoteInput
      | SharedNoteCreateOrConnectWithoutNoteInput[];
    createMany?: SharedNoteCreateManyNoteInputEnvelope;
    connect?: SharedNoteWhereUniqueInput | SharedNoteWhereUniqueInput[];
  };

  export type UserUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<
      UserCreateWithoutNotesInput,
      UserUncheckedCreateWithoutNotesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutNotesInput;
    upsert?: UserUpsertWithoutNotesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutNotesInput,
        UserUpdateWithoutNotesInput
      >,
      UserUncheckedUpdateWithoutNotesInput
    >;
  };

  export type SubjectUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<
      SubjectCreateWithoutNotesInput,
      SubjectUncheckedCreateWithoutNotesInput
    >;
    connectOrCreate?: SubjectCreateOrConnectWithoutNotesInput;
    upsert?: SubjectUpsertWithoutNotesInput;
    connect?: SubjectWhereUniqueInput;
    update?: XOR<
      XOR<
        SubjectUpdateToOneWithWhereWithoutNotesInput,
        SubjectUpdateWithoutNotesInput
      >,
      SubjectUncheckedUpdateWithoutNotesInput
    >;
  };

  export type FolderUpdateOneWithoutNotesNestedInput = {
    create?: XOR<
      FolderCreateWithoutNotesInput,
      FolderUncheckedCreateWithoutNotesInput
    >;
    connectOrCreate?: FolderCreateOrConnectWithoutNotesInput;
    upsert?: FolderUpsertWithoutNotesInput;
    disconnect?: FolderWhereInput | boolean;
    delete?: FolderWhereInput | boolean;
    connect?: FolderWhereUniqueInput;
    update?: XOR<
      XOR<
        FolderUpdateToOneWithWhereWithoutNotesInput,
        FolderUpdateWithoutNotesInput
      >,
      FolderUncheckedUpdateWithoutNotesInput
    >;
  };

  export type NoteTagUpdateManyWithoutNoteNestedInput = {
    create?:
      | XOR<
          NoteTagCreateWithoutNoteInput,
          NoteTagUncheckedCreateWithoutNoteInput
        >
      | NoteTagCreateWithoutNoteInput[]
      | NoteTagUncheckedCreateWithoutNoteInput[];
    connectOrCreate?:
      | NoteTagCreateOrConnectWithoutNoteInput
      | NoteTagCreateOrConnectWithoutNoteInput[];
    upsert?:
      | NoteTagUpsertWithWhereUniqueWithoutNoteInput
      | NoteTagUpsertWithWhereUniqueWithoutNoteInput[];
    createMany?: NoteTagCreateManyNoteInputEnvelope;
    set?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[];
    disconnect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[];
    delete?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[];
    connect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[];
    update?:
      | NoteTagUpdateWithWhereUniqueWithoutNoteInput
      | NoteTagUpdateWithWhereUniqueWithoutNoteInput[];
    updateMany?:
      | NoteTagUpdateManyWithWhereWithoutNoteInput
      | NoteTagUpdateManyWithWhereWithoutNoteInput[];
    deleteMany?: NoteTagScalarWhereInput | NoteTagScalarWhereInput[];
  };

  export type SharedNoteUpdateManyWithoutNoteNestedInput = {
    create?:
      | XOR<
          SharedNoteCreateWithoutNoteInput,
          SharedNoteUncheckedCreateWithoutNoteInput
        >
      | SharedNoteCreateWithoutNoteInput[]
      | SharedNoteUncheckedCreateWithoutNoteInput[];
    connectOrCreate?:
      | SharedNoteCreateOrConnectWithoutNoteInput
      | SharedNoteCreateOrConnectWithoutNoteInput[];
    upsert?:
      | SharedNoteUpsertWithWhereUniqueWithoutNoteInput
      | SharedNoteUpsertWithWhereUniqueWithoutNoteInput[];
    createMany?: SharedNoteCreateManyNoteInputEnvelope;
    set?: SharedNoteWhereUniqueInput | SharedNoteWhereUniqueInput[];
    disconnect?: SharedNoteWhereUniqueInput | SharedNoteWhereUniqueInput[];
    delete?: SharedNoteWhereUniqueInput | SharedNoteWhereUniqueInput[];
    connect?: SharedNoteWhereUniqueInput | SharedNoteWhereUniqueInput[];
    update?:
      | SharedNoteUpdateWithWhereUniqueWithoutNoteInput
      | SharedNoteUpdateWithWhereUniqueWithoutNoteInput[];
    updateMany?:
      | SharedNoteUpdateManyWithWhereWithoutNoteInput
      | SharedNoteUpdateManyWithWhereWithoutNoteInput[];
    deleteMany?: SharedNoteScalarWhereInput | SharedNoteScalarWhereInput[];
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NoteTagUncheckedUpdateManyWithoutNoteNestedInput = {
    create?:
      | XOR<
          NoteTagCreateWithoutNoteInput,
          NoteTagUncheckedCreateWithoutNoteInput
        >
      | NoteTagCreateWithoutNoteInput[]
      | NoteTagUncheckedCreateWithoutNoteInput[];
    connectOrCreate?:
      | NoteTagCreateOrConnectWithoutNoteInput
      | NoteTagCreateOrConnectWithoutNoteInput[];
    upsert?:
      | NoteTagUpsertWithWhereUniqueWithoutNoteInput
      | NoteTagUpsertWithWhereUniqueWithoutNoteInput[];
    createMany?: NoteTagCreateManyNoteInputEnvelope;
    set?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[];
    disconnect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[];
    delete?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[];
    connect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[];
    update?:
      | NoteTagUpdateWithWhereUniqueWithoutNoteInput
      | NoteTagUpdateWithWhereUniqueWithoutNoteInput[];
    updateMany?:
      | NoteTagUpdateManyWithWhereWithoutNoteInput
      | NoteTagUpdateManyWithWhereWithoutNoteInput[];
    deleteMany?: NoteTagScalarWhereInput | NoteTagScalarWhereInput[];
  };

  export type SharedNoteUncheckedUpdateManyWithoutNoteNestedInput = {
    create?:
      | XOR<
          SharedNoteCreateWithoutNoteInput,
          SharedNoteUncheckedCreateWithoutNoteInput
        >
      | SharedNoteCreateWithoutNoteInput[]
      | SharedNoteUncheckedCreateWithoutNoteInput[];
    connectOrCreate?:
      | SharedNoteCreateOrConnectWithoutNoteInput
      | SharedNoteCreateOrConnectWithoutNoteInput[];
    upsert?:
      | SharedNoteUpsertWithWhereUniqueWithoutNoteInput
      | SharedNoteUpsertWithWhereUniqueWithoutNoteInput[];
    createMany?: SharedNoteCreateManyNoteInputEnvelope;
    set?: SharedNoteWhereUniqueInput | SharedNoteWhereUniqueInput[];
    disconnect?: SharedNoteWhereUniqueInput | SharedNoteWhereUniqueInput[];
    delete?: SharedNoteWhereUniqueInput | SharedNoteWhereUniqueInput[];
    connect?: SharedNoteWhereUniqueInput | SharedNoteWhereUniqueInput[];
    update?:
      | SharedNoteUpdateWithWhereUniqueWithoutNoteInput
      | SharedNoteUpdateWithWhereUniqueWithoutNoteInput[];
    updateMany?:
      | SharedNoteUpdateManyWithWhereWithoutNoteInput
      | SharedNoteUpdateManyWithWhereWithoutNoteInput[];
    deleteMany?: SharedNoteScalarWhereInput | SharedNoteScalarWhereInput[];
  };

  export type NoteTagCreateNestedManyWithoutTagInput = {
    create?:
      | XOR<NoteTagCreateWithoutTagInput, NoteTagUncheckedCreateWithoutTagInput>
      | NoteTagCreateWithoutTagInput[]
      | NoteTagUncheckedCreateWithoutTagInput[];
    connectOrCreate?:
      | NoteTagCreateOrConnectWithoutTagInput
      | NoteTagCreateOrConnectWithoutTagInput[];
    createMany?: NoteTagCreateManyTagInputEnvelope;
    connect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[];
  };

  export type NoteTagUncheckedCreateNestedManyWithoutTagInput = {
    create?:
      | XOR<NoteTagCreateWithoutTagInput, NoteTagUncheckedCreateWithoutTagInput>
      | NoteTagCreateWithoutTagInput[]
      | NoteTagUncheckedCreateWithoutTagInput[];
    connectOrCreate?:
      | NoteTagCreateOrConnectWithoutTagInput
      | NoteTagCreateOrConnectWithoutTagInput[];
    createMany?: NoteTagCreateManyTagInputEnvelope;
    connect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[];
  };

  export type NoteTagUpdateManyWithoutTagNestedInput = {
    create?:
      | XOR<NoteTagCreateWithoutTagInput, NoteTagUncheckedCreateWithoutTagInput>
      | NoteTagCreateWithoutTagInput[]
      | NoteTagUncheckedCreateWithoutTagInput[];
    connectOrCreate?:
      | NoteTagCreateOrConnectWithoutTagInput
      | NoteTagCreateOrConnectWithoutTagInput[];
    upsert?:
      | NoteTagUpsertWithWhereUniqueWithoutTagInput
      | NoteTagUpsertWithWhereUniqueWithoutTagInput[];
    createMany?: NoteTagCreateManyTagInputEnvelope;
    set?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[];
    disconnect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[];
    delete?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[];
    connect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[];
    update?:
      | NoteTagUpdateWithWhereUniqueWithoutTagInput
      | NoteTagUpdateWithWhereUniqueWithoutTagInput[];
    updateMany?:
      | NoteTagUpdateManyWithWhereWithoutTagInput
      | NoteTagUpdateManyWithWhereWithoutTagInput[];
    deleteMany?: NoteTagScalarWhereInput | NoteTagScalarWhereInput[];
  };

  export type NoteTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?:
      | XOR<NoteTagCreateWithoutTagInput, NoteTagUncheckedCreateWithoutTagInput>
      | NoteTagCreateWithoutTagInput[]
      | NoteTagUncheckedCreateWithoutTagInput[];
    connectOrCreate?:
      | NoteTagCreateOrConnectWithoutTagInput
      | NoteTagCreateOrConnectWithoutTagInput[];
    upsert?:
      | NoteTagUpsertWithWhereUniqueWithoutTagInput
      | NoteTagUpsertWithWhereUniqueWithoutTagInput[];
    createMany?: NoteTagCreateManyTagInputEnvelope;
    set?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[];
    disconnect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[];
    delete?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[];
    connect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[];
    update?:
      | NoteTagUpdateWithWhereUniqueWithoutTagInput
      | NoteTagUpdateWithWhereUniqueWithoutTagInput[];
    updateMany?:
      | NoteTagUpdateManyWithWhereWithoutTagInput
      | NoteTagUpdateManyWithWhereWithoutTagInput[];
    deleteMany?: NoteTagScalarWhereInput | NoteTagScalarWhereInput[];
  };

  export type NoteCreateNestedOneWithoutTagsInput = {
    create?: XOR<
      NoteCreateWithoutTagsInput,
      NoteUncheckedCreateWithoutTagsInput
    >;
    connectOrCreate?: NoteCreateOrConnectWithoutTagsInput;
    connect?: NoteWhereUniqueInput;
  };

  export type TagCreateNestedOneWithoutNotesInput = {
    create?: XOR<
      TagCreateWithoutNotesInput,
      TagUncheckedCreateWithoutNotesInput
    >;
    connectOrCreate?: TagCreateOrConnectWithoutNotesInput;
    connect?: TagWhereUniqueInput;
  };

  export type NoteUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<
      NoteCreateWithoutTagsInput,
      NoteUncheckedCreateWithoutTagsInput
    >;
    connectOrCreate?: NoteCreateOrConnectWithoutTagsInput;
    upsert?: NoteUpsertWithoutTagsInput;
    connect?: NoteWhereUniqueInput;
    update?: XOR<
      XOR<NoteUpdateToOneWithWhereWithoutTagsInput, NoteUpdateWithoutTagsInput>,
      NoteUncheckedUpdateWithoutTagsInput
    >;
  };

  export type TagUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<
      TagCreateWithoutNotesInput,
      TagUncheckedCreateWithoutNotesInput
    >;
    connectOrCreate?: TagCreateOrConnectWithoutNotesInput;
    upsert?: TagUpsertWithoutNotesInput;
    connect?: TagWhereUniqueInput;
    update?: XOR<
      XOR<TagUpdateToOneWithWhereWithoutNotesInput, TagUpdateWithoutNotesInput>,
      TagUncheckedUpdateWithoutNotesInput
    >;
  };

  export type NoteCreateNestedOneWithoutSharesInput = {
    create?: XOR<
      NoteCreateWithoutSharesInput,
      NoteUncheckedCreateWithoutSharesInput
    >;
    connectOrCreate?: NoteCreateOrConnectWithoutSharesInput;
    connect?: NoteWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutSharedInput = {
    create?: XOR<
      UserCreateWithoutSharedInput,
      UserUncheckedCreateWithoutSharedInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutSharedInput;
    connect?: UserWhereUniqueInput;
  };

  export type NoteUpdateOneRequiredWithoutSharesNestedInput = {
    create?: XOR<
      NoteCreateWithoutSharesInput,
      NoteUncheckedCreateWithoutSharesInput
    >;
    connectOrCreate?: NoteCreateOrConnectWithoutSharesInput;
    upsert?: NoteUpsertWithoutSharesInput;
    connect?: NoteWhereUniqueInput;
    update?: XOR<
      XOR<
        NoteUpdateToOneWithWhereWithoutSharesInput,
        NoteUpdateWithoutSharesInput
      >,
      NoteUncheckedUpdateWithoutSharesInput
    >;
  };

  export type UserUpdateOneRequiredWithoutSharedNestedInput = {
    create?: XOR<
      UserCreateWithoutSharedInput,
      UserUncheckedCreateWithoutSharedInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutSharedInput;
    upsert?: UserUpsertWithoutSharedInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutSharedInput,
        UserUpdateWithoutSharedInput
      >,
      UserUncheckedUpdateWithoutSharedInput
    >;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type SubjectCreateWithoutUserInput = {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    folders?: FolderCreateNestedManyWithoutSubjectInput;
    notes?: NoteCreateNestedManyWithoutSubjectInput;
  };

  export type SubjectUncheckedCreateWithoutUserInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    folders?: FolderUncheckedCreateNestedManyWithoutSubjectInput;
    notes?: NoteUncheckedCreateNestedManyWithoutSubjectInput;
  };

  export type SubjectCreateOrConnectWithoutUserInput = {
    where: SubjectWhereUniqueInput;
    create: XOR<
      SubjectCreateWithoutUserInput,
      SubjectUncheckedCreateWithoutUserInput
    >;
  };

  export type SubjectCreateManyUserInputEnvelope = {
    data: SubjectCreateManyUserInput | SubjectCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type NoteCreateWithoutUserInput = {
    title: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subject: SubjectCreateNestedOneWithoutNotesInput;
    folder?: FolderCreateNestedOneWithoutNotesInput;
    tags?: NoteTagCreateNestedManyWithoutNoteInput;
    shares?: SharedNoteCreateNestedManyWithoutNoteInput;
  };

  export type NoteUncheckedCreateWithoutUserInput = {
    id?: number;
    title: string;
    content: string;
    subjectId: number;
    folderId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tags?: NoteTagUncheckedCreateNestedManyWithoutNoteInput;
    shares?: SharedNoteUncheckedCreateNestedManyWithoutNoteInput;
  };

  export type NoteCreateOrConnectWithoutUserInput = {
    where: NoteWhereUniqueInput;
    create: XOR<
      NoteCreateWithoutUserInput,
      NoteUncheckedCreateWithoutUserInput
    >;
  };

  export type NoteCreateManyUserInputEnvelope = {
    data: NoteCreateManyUserInput | NoteCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type SharedNoteCreateWithoutUserInput = {
    createdAt?: Date | string;
    note: NoteCreateNestedOneWithoutSharesInput;
  };

  export type SharedNoteUncheckedCreateWithoutUserInput = {
    id?: number;
    noteId: number;
    createdAt?: Date | string;
  };

  export type SharedNoteCreateOrConnectWithoutUserInput = {
    where: SharedNoteWhereUniqueInput;
    create: XOR<
      SharedNoteCreateWithoutUserInput,
      SharedNoteUncheckedCreateWithoutUserInput
    >;
  };

  export type SharedNoteCreateManyUserInputEnvelope = {
    data: SharedNoteCreateManyUserInput | SharedNoteCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type SubjectUpsertWithWhereUniqueWithoutUserInput = {
    where: SubjectWhereUniqueInput;
    update: XOR<
      SubjectUpdateWithoutUserInput,
      SubjectUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      SubjectCreateWithoutUserInput,
      SubjectUncheckedCreateWithoutUserInput
    >;
  };

  export type SubjectUpdateWithWhereUniqueWithoutUserInput = {
    where: SubjectWhereUniqueInput;
    data: XOR<
      SubjectUpdateWithoutUserInput,
      SubjectUncheckedUpdateWithoutUserInput
    >;
  };

  export type SubjectUpdateManyWithWhereWithoutUserInput = {
    where: SubjectScalarWhereInput;
    data: XOR<
      SubjectUpdateManyMutationInput,
      SubjectUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type SubjectScalarWhereInput = {
    AND?: SubjectScalarWhereInput | SubjectScalarWhereInput[];
    OR?: SubjectScalarWhereInput[];
    NOT?: SubjectScalarWhereInput | SubjectScalarWhereInput[];
    id?: IntFilter<"Subject"> | number;
    name?: StringFilter<"Subject"> | string;
    userId?: IntFilter<"Subject"> | number;
    createdAt?: DateTimeFilter<"Subject"> | Date | string;
    updatedAt?: DateTimeFilter<"Subject"> | Date | string;
  };

  export type NoteUpsertWithWhereUniqueWithoutUserInput = {
    where: NoteWhereUniqueInput;
    update: XOR<
      NoteUpdateWithoutUserInput,
      NoteUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      NoteCreateWithoutUserInput,
      NoteUncheckedCreateWithoutUserInput
    >;
  };

  export type NoteUpdateWithWhereUniqueWithoutUserInput = {
    where: NoteWhereUniqueInput;
    data: XOR<NoteUpdateWithoutUserInput, NoteUncheckedUpdateWithoutUserInput>;
  };

  export type NoteUpdateManyWithWhereWithoutUserInput = {
    where: NoteScalarWhereInput;
    data: XOR<
      NoteUpdateManyMutationInput,
      NoteUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type NoteScalarWhereInput = {
    AND?: NoteScalarWhereInput | NoteScalarWhereInput[];
    OR?: NoteScalarWhereInput[];
    NOT?: NoteScalarWhereInput | NoteScalarWhereInput[];
    id?: IntFilter<"Note"> | number;
    title?: StringFilter<"Note"> | string;
    content?: StringFilter<"Note"> | string;
    userId?: IntFilter<"Note"> | number;
    subjectId?: IntFilter<"Note"> | number;
    folderId?: IntNullableFilter<"Note"> | number | null;
    createdAt?: DateTimeFilter<"Note"> | Date | string;
    updatedAt?: DateTimeFilter<"Note"> | Date | string;
  };

  export type SharedNoteUpsertWithWhereUniqueWithoutUserInput = {
    where: SharedNoteWhereUniqueInput;
    update: XOR<
      SharedNoteUpdateWithoutUserInput,
      SharedNoteUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      SharedNoteCreateWithoutUserInput,
      SharedNoteUncheckedCreateWithoutUserInput
    >;
  };

  export type SharedNoteUpdateWithWhereUniqueWithoutUserInput = {
    where: SharedNoteWhereUniqueInput;
    data: XOR<
      SharedNoteUpdateWithoutUserInput,
      SharedNoteUncheckedUpdateWithoutUserInput
    >;
  };

  export type SharedNoteUpdateManyWithWhereWithoutUserInput = {
    where: SharedNoteScalarWhereInput;
    data: XOR<
      SharedNoteUpdateManyMutationInput,
      SharedNoteUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type SharedNoteScalarWhereInput = {
    AND?: SharedNoteScalarWhereInput | SharedNoteScalarWhereInput[];
    OR?: SharedNoteScalarWhereInput[];
    NOT?: SharedNoteScalarWhereInput | SharedNoteScalarWhereInput[];
    id?: IntFilter<"SharedNote"> | number;
    noteId?: IntFilter<"SharedNote"> | number;
    userId?: IntFilter<"SharedNote"> | number;
    createdAt?: DateTimeFilter<"SharedNote"> | Date | string;
  };

  export type UserCreateWithoutSubjectsInput = {
    name: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    notes?: NoteCreateNestedManyWithoutUserInput;
    shared?: SharedNoteCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutSubjectsInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput;
    shared?: SharedNoteUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutSubjectsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutSubjectsInput,
      UserUncheckedCreateWithoutSubjectsInput
    >;
  };

  export type FolderCreateWithoutSubjectInput = {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    notes?: NoteCreateNestedManyWithoutFolderInput;
  };

  export type FolderUncheckedCreateWithoutSubjectInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    notes?: NoteUncheckedCreateNestedManyWithoutFolderInput;
  };

  export type FolderCreateOrConnectWithoutSubjectInput = {
    where: FolderWhereUniqueInput;
    create: XOR<
      FolderCreateWithoutSubjectInput,
      FolderUncheckedCreateWithoutSubjectInput
    >;
  };

  export type FolderCreateManySubjectInputEnvelope = {
    data: FolderCreateManySubjectInput | FolderCreateManySubjectInput[];
    skipDuplicates?: boolean;
  };

  export type NoteCreateWithoutSubjectInput = {
    title: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutNotesInput;
    folder?: FolderCreateNestedOneWithoutNotesInput;
    tags?: NoteTagCreateNestedManyWithoutNoteInput;
    shares?: SharedNoteCreateNestedManyWithoutNoteInput;
  };

  export type NoteUncheckedCreateWithoutSubjectInput = {
    id?: number;
    title: string;
    content: string;
    userId: number;
    folderId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tags?: NoteTagUncheckedCreateNestedManyWithoutNoteInput;
    shares?: SharedNoteUncheckedCreateNestedManyWithoutNoteInput;
  };

  export type NoteCreateOrConnectWithoutSubjectInput = {
    where: NoteWhereUniqueInput;
    create: XOR<
      NoteCreateWithoutSubjectInput,
      NoteUncheckedCreateWithoutSubjectInput
    >;
  };

  export type NoteCreateManySubjectInputEnvelope = {
    data: NoteCreateManySubjectInput | NoteCreateManySubjectInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutSubjectsInput = {
    update: XOR<
      UserUpdateWithoutSubjectsInput,
      UserUncheckedUpdateWithoutSubjectsInput
    >;
    create: XOR<
      UserCreateWithoutSubjectsInput,
      UserUncheckedCreateWithoutSubjectsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutSubjectsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutSubjectsInput,
      UserUncheckedUpdateWithoutSubjectsInput
    >;
  };

  export type UserUpdateWithoutSubjectsInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: NoteUpdateManyWithoutUserNestedInput;
    shared?: SharedNoteUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput;
    shared?: SharedNoteUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type FolderUpsertWithWhereUniqueWithoutSubjectInput = {
    where: FolderWhereUniqueInput;
    update: XOR<
      FolderUpdateWithoutSubjectInput,
      FolderUncheckedUpdateWithoutSubjectInput
    >;
    create: XOR<
      FolderCreateWithoutSubjectInput,
      FolderUncheckedCreateWithoutSubjectInput
    >;
  };

  export type FolderUpdateWithWhereUniqueWithoutSubjectInput = {
    where: FolderWhereUniqueInput;
    data: XOR<
      FolderUpdateWithoutSubjectInput,
      FolderUncheckedUpdateWithoutSubjectInput
    >;
  };

  export type FolderUpdateManyWithWhereWithoutSubjectInput = {
    where: FolderScalarWhereInput;
    data: XOR<
      FolderUpdateManyMutationInput,
      FolderUncheckedUpdateManyWithoutSubjectInput
    >;
  };

  export type FolderScalarWhereInput = {
    AND?: FolderScalarWhereInput | FolderScalarWhereInput[];
    OR?: FolderScalarWhereInput[];
    NOT?: FolderScalarWhereInput | FolderScalarWhereInput[];
    id?: IntFilter<"Folder"> | number;
    name?: StringFilter<"Folder"> | string;
    subjectId?: IntFilter<"Folder"> | number;
    createdAt?: DateTimeFilter<"Folder"> | Date | string;
    updatedAt?: DateTimeFilter<"Folder"> | Date | string;
  };

  export type NoteUpsertWithWhereUniqueWithoutSubjectInput = {
    where: NoteWhereUniqueInput;
    update: XOR<
      NoteUpdateWithoutSubjectInput,
      NoteUncheckedUpdateWithoutSubjectInput
    >;
    create: XOR<
      NoteCreateWithoutSubjectInput,
      NoteUncheckedCreateWithoutSubjectInput
    >;
  };

  export type NoteUpdateWithWhereUniqueWithoutSubjectInput = {
    where: NoteWhereUniqueInput;
    data: XOR<
      NoteUpdateWithoutSubjectInput,
      NoteUncheckedUpdateWithoutSubjectInput
    >;
  };

  export type NoteUpdateManyWithWhereWithoutSubjectInput = {
    where: NoteScalarWhereInput;
    data: XOR<
      NoteUpdateManyMutationInput,
      NoteUncheckedUpdateManyWithoutSubjectInput
    >;
  };

  export type SubjectCreateWithoutFoldersInput = {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutSubjectsInput;
    notes?: NoteCreateNestedManyWithoutSubjectInput;
  };

  export type SubjectUncheckedCreateWithoutFoldersInput = {
    id?: number;
    name: string;
    userId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    notes?: NoteUncheckedCreateNestedManyWithoutSubjectInput;
  };

  export type SubjectCreateOrConnectWithoutFoldersInput = {
    where: SubjectWhereUniqueInput;
    create: XOR<
      SubjectCreateWithoutFoldersInput,
      SubjectUncheckedCreateWithoutFoldersInput
    >;
  };

  export type NoteCreateWithoutFolderInput = {
    title: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutNotesInput;
    subject: SubjectCreateNestedOneWithoutNotesInput;
    tags?: NoteTagCreateNestedManyWithoutNoteInput;
    shares?: SharedNoteCreateNestedManyWithoutNoteInput;
  };

  export type NoteUncheckedCreateWithoutFolderInput = {
    id?: number;
    title: string;
    content: string;
    userId: number;
    subjectId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tags?: NoteTagUncheckedCreateNestedManyWithoutNoteInput;
    shares?: SharedNoteUncheckedCreateNestedManyWithoutNoteInput;
  };

  export type NoteCreateOrConnectWithoutFolderInput = {
    where: NoteWhereUniqueInput;
    create: XOR<
      NoteCreateWithoutFolderInput,
      NoteUncheckedCreateWithoutFolderInput
    >;
  };

  export type NoteCreateManyFolderInputEnvelope = {
    data: NoteCreateManyFolderInput | NoteCreateManyFolderInput[];
    skipDuplicates?: boolean;
  };

  export type SubjectUpsertWithoutFoldersInput = {
    update: XOR<
      SubjectUpdateWithoutFoldersInput,
      SubjectUncheckedUpdateWithoutFoldersInput
    >;
    create: XOR<
      SubjectCreateWithoutFoldersInput,
      SubjectUncheckedCreateWithoutFoldersInput
    >;
    where?: SubjectWhereInput;
  };

  export type SubjectUpdateToOneWithWhereWithoutFoldersInput = {
    where?: SubjectWhereInput;
    data: XOR<
      SubjectUpdateWithoutFoldersInput,
      SubjectUncheckedUpdateWithoutFoldersInput
    >;
  };

  export type SubjectUpdateWithoutFoldersInput = {
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutSubjectsNestedInput;
    notes?: NoteUpdateManyWithoutSubjectNestedInput;
  };

  export type SubjectUncheckedUpdateWithoutFoldersInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    userId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: NoteUncheckedUpdateManyWithoutSubjectNestedInput;
  };

  export type NoteUpsertWithWhereUniqueWithoutFolderInput = {
    where: NoteWhereUniqueInput;
    update: XOR<
      NoteUpdateWithoutFolderInput,
      NoteUncheckedUpdateWithoutFolderInput
    >;
    create: XOR<
      NoteCreateWithoutFolderInput,
      NoteUncheckedCreateWithoutFolderInput
    >;
  };

  export type NoteUpdateWithWhereUniqueWithoutFolderInput = {
    where: NoteWhereUniqueInput;
    data: XOR<
      NoteUpdateWithoutFolderInput,
      NoteUncheckedUpdateWithoutFolderInput
    >;
  };

  export type NoteUpdateManyWithWhereWithoutFolderInput = {
    where: NoteScalarWhereInput;
    data: XOR<
      NoteUpdateManyMutationInput,
      NoteUncheckedUpdateManyWithoutFolderInput
    >;
  };

  export type UserCreateWithoutNotesInput = {
    name: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subjects?: SubjectCreateNestedManyWithoutUserInput;
    shared?: SharedNoteCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutNotesInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subjects?: SubjectUncheckedCreateNestedManyWithoutUserInput;
    shared?: SharedNoteUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutNotesInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutNotesInput,
      UserUncheckedCreateWithoutNotesInput
    >;
  };

  export type SubjectCreateWithoutNotesInput = {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutSubjectsInput;
    folders?: FolderCreateNestedManyWithoutSubjectInput;
  };

  export type SubjectUncheckedCreateWithoutNotesInput = {
    id?: number;
    name: string;
    userId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    folders?: FolderUncheckedCreateNestedManyWithoutSubjectInput;
  };

  export type SubjectCreateOrConnectWithoutNotesInput = {
    where: SubjectWhereUniqueInput;
    create: XOR<
      SubjectCreateWithoutNotesInput,
      SubjectUncheckedCreateWithoutNotesInput
    >;
  };

  export type FolderCreateWithoutNotesInput = {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subject: SubjectCreateNestedOneWithoutFoldersInput;
  };

  export type FolderUncheckedCreateWithoutNotesInput = {
    id?: number;
    name: string;
    subjectId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type FolderCreateOrConnectWithoutNotesInput = {
    where: FolderWhereUniqueInput;
    create: XOR<
      FolderCreateWithoutNotesInput,
      FolderUncheckedCreateWithoutNotesInput
    >;
  };

  export type NoteTagCreateWithoutNoteInput = {
    tag: TagCreateNestedOneWithoutNotesInput;
  };

  export type NoteTagUncheckedCreateWithoutNoteInput = {
    tagId: number;
  };

  export type NoteTagCreateOrConnectWithoutNoteInput = {
    where: NoteTagWhereUniqueInput;
    create: XOR<
      NoteTagCreateWithoutNoteInput,
      NoteTagUncheckedCreateWithoutNoteInput
    >;
  };

  export type NoteTagCreateManyNoteInputEnvelope = {
    data: NoteTagCreateManyNoteInput | NoteTagCreateManyNoteInput[];
    skipDuplicates?: boolean;
  };

  export type SharedNoteCreateWithoutNoteInput = {
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutSharedInput;
  };

  export type SharedNoteUncheckedCreateWithoutNoteInput = {
    id?: number;
    userId: number;
    createdAt?: Date | string;
  };

  export type SharedNoteCreateOrConnectWithoutNoteInput = {
    where: SharedNoteWhereUniqueInput;
    create: XOR<
      SharedNoteCreateWithoutNoteInput,
      SharedNoteUncheckedCreateWithoutNoteInput
    >;
  };

  export type SharedNoteCreateManyNoteInputEnvelope = {
    data: SharedNoteCreateManyNoteInput | SharedNoteCreateManyNoteInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutNotesInput = {
    update: XOR<
      UserUpdateWithoutNotesInput,
      UserUncheckedUpdateWithoutNotesInput
    >;
    create: XOR<
      UserCreateWithoutNotesInput,
      UserUncheckedCreateWithoutNotesInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutNotesInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutNotesInput,
      UserUncheckedUpdateWithoutNotesInput
    >;
  };

  export type UserUpdateWithoutNotesInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    subjects?: SubjectUpdateManyWithoutUserNestedInput;
    shared?: SharedNoteUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutNotesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    subjects?: SubjectUncheckedUpdateManyWithoutUserNestedInput;
    shared?: SharedNoteUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type SubjectUpsertWithoutNotesInput = {
    update: XOR<
      SubjectUpdateWithoutNotesInput,
      SubjectUncheckedUpdateWithoutNotesInput
    >;
    create: XOR<
      SubjectCreateWithoutNotesInput,
      SubjectUncheckedCreateWithoutNotesInput
    >;
    where?: SubjectWhereInput;
  };

  export type SubjectUpdateToOneWithWhereWithoutNotesInput = {
    where?: SubjectWhereInput;
    data: XOR<
      SubjectUpdateWithoutNotesInput,
      SubjectUncheckedUpdateWithoutNotesInput
    >;
  };

  export type SubjectUpdateWithoutNotesInput = {
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutSubjectsNestedInput;
    folders?: FolderUpdateManyWithoutSubjectNestedInput;
  };

  export type SubjectUncheckedUpdateWithoutNotesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    userId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    folders?: FolderUncheckedUpdateManyWithoutSubjectNestedInput;
  };

  export type FolderUpsertWithoutNotesInput = {
    update: XOR<
      FolderUpdateWithoutNotesInput,
      FolderUncheckedUpdateWithoutNotesInput
    >;
    create: XOR<
      FolderCreateWithoutNotesInput,
      FolderUncheckedCreateWithoutNotesInput
    >;
    where?: FolderWhereInput;
  };

  export type FolderUpdateToOneWithWhereWithoutNotesInput = {
    where?: FolderWhereInput;
    data: XOR<
      FolderUpdateWithoutNotesInput,
      FolderUncheckedUpdateWithoutNotesInput
    >;
  };

  export type FolderUpdateWithoutNotesInput = {
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    subject?: SubjectUpdateOneRequiredWithoutFoldersNestedInput;
  };

  export type FolderUncheckedUpdateWithoutNotesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    subjectId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NoteTagUpsertWithWhereUniqueWithoutNoteInput = {
    where: NoteTagWhereUniqueInput;
    update: XOR<
      NoteTagUpdateWithoutNoteInput,
      NoteTagUncheckedUpdateWithoutNoteInput
    >;
    create: XOR<
      NoteTagCreateWithoutNoteInput,
      NoteTagUncheckedCreateWithoutNoteInput
    >;
  };

  export type NoteTagUpdateWithWhereUniqueWithoutNoteInput = {
    where: NoteTagWhereUniqueInput;
    data: XOR<
      NoteTagUpdateWithoutNoteInput,
      NoteTagUncheckedUpdateWithoutNoteInput
    >;
  };

  export type NoteTagUpdateManyWithWhereWithoutNoteInput = {
    where: NoteTagScalarWhereInput;
    data: XOR<
      NoteTagUpdateManyMutationInput,
      NoteTagUncheckedUpdateManyWithoutNoteInput
    >;
  };

  export type NoteTagScalarWhereInput = {
    AND?: NoteTagScalarWhereInput | NoteTagScalarWhereInput[];
    OR?: NoteTagScalarWhereInput[];
    NOT?: NoteTagScalarWhereInput | NoteTagScalarWhereInput[];
    noteId?: IntFilter<"NoteTag"> | number;
    tagId?: IntFilter<"NoteTag"> | number;
  };

  export type SharedNoteUpsertWithWhereUniqueWithoutNoteInput = {
    where: SharedNoteWhereUniqueInput;
    update: XOR<
      SharedNoteUpdateWithoutNoteInput,
      SharedNoteUncheckedUpdateWithoutNoteInput
    >;
    create: XOR<
      SharedNoteCreateWithoutNoteInput,
      SharedNoteUncheckedCreateWithoutNoteInput
    >;
  };

  export type SharedNoteUpdateWithWhereUniqueWithoutNoteInput = {
    where: SharedNoteWhereUniqueInput;
    data: XOR<
      SharedNoteUpdateWithoutNoteInput,
      SharedNoteUncheckedUpdateWithoutNoteInput
    >;
  };

  export type SharedNoteUpdateManyWithWhereWithoutNoteInput = {
    where: SharedNoteScalarWhereInput;
    data: XOR<
      SharedNoteUpdateManyMutationInput,
      SharedNoteUncheckedUpdateManyWithoutNoteInput
    >;
  };

  export type NoteTagCreateWithoutTagInput = {
    note: NoteCreateNestedOneWithoutTagsInput;
  };

  export type NoteTagUncheckedCreateWithoutTagInput = {
    noteId: number;
  };

  export type NoteTagCreateOrConnectWithoutTagInput = {
    where: NoteTagWhereUniqueInput;
    create: XOR<
      NoteTagCreateWithoutTagInput,
      NoteTagUncheckedCreateWithoutTagInput
    >;
  };

  export type NoteTagCreateManyTagInputEnvelope = {
    data: NoteTagCreateManyTagInput | NoteTagCreateManyTagInput[];
    skipDuplicates?: boolean;
  };

  export type NoteTagUpsertWithWhereUniqueWithoutTagInput = {
    where: NoteTagWhereUniqueInput;
    update: XOR<
      NoteTagUpdateWithoutTagInput,
      NoteTagUncheckedUpdateWithoutTagInput
    >;
    create: XOR<
      NoteTagCreateWithoutTagInput,
      NoteTagUncheckedCreateWithoutTagInput
    >;
  };

  export type NoteTagUpdateWithWhereUniqueWithoutTagInput = {
    where: NoteTagWhereUniqueInput;
    data: XOR<
      NoteTagUpdateWithoutTagInput,
      NoteTagUncheckedUpdateWithoutTagInput
    >;
  };

  export type NoteTagUpdateManyWithWhereWithoutTagInput = {
    where: NoteTagScalarWhereInput;
    data: XOR<
      NoteTagUpdateManyMutationInput,
      NoteTagUncheckedUpdateManyWithoutTagInput
    >;
  };

  export type NoteCreateWithoutTagsInput = {
    title: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutNotesInput;
    subject: SubjectCreateNestedOneWithoutNotesInput;
    folder?: FolderCreateNestedOneWithoutNotesInput;
    shares?: SharedNoteCreateNestedManyWithoutNoteInput;
  };

  export type NoteUncheckedCreateWithoutTagsInput = {
    id?: number;
    title: string;
    content: string;
    userId: number;
    subjectId: number;
    folderId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    shares?: SharedNoteUncheckedCreateNestedManyWithoutNoteInput;
  };

  export type NoteCreateOrConnectWithoutTagsInput = {
    where: NoteWhereUniqueInput;
    create: XOR<
      NoteCreateWithoutTagsInput,
      NoteUncheckedCreateWithoutTagsInput
    >;
  };

  export type TagCreateWithoutNotesInput = {
    name: string;
    createdAt?: Date | string;
  };

  export type TagUncheckedCreateWithoutNotesInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
  };

  export type TagCreateOrConnectWithoutNotesInput = {
    where: TagWhereUniqueInput;
    create: XOR<
      TagCreateWithoutNotesInput,
      TagUncheckedCreateWithoutNotesInput
    >;
  };

  export type NoteUpsertWithoutTagsInput = {
    update: XOR<
      NoteUpdateWithoutTagsInput,
      NoteUncheckedUpdateWithoutTagsInput
    >;
    create: XOR<
      NoteCreateWithoutTagsInput,
      NoteUncheckedCreateWithoutTagsInput
    >;
    where?: NoteWhereInput;
  };

  export type NoteUpdateToOneWithWhereWithoutTagsInput = {
    where?: NoteWhereInput;
    data: XOR<NoteUpdateWithoutTagsInput, NoteUncheckedUpdateWithoutTagsInput>;
  };

  export type NoteUpdateWithoutTagsInput = {
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutNotesNestedInput;
    subject?: SubjectUpdateOneRequiredWithoutNotesNestedInput;
    folder?: FolderUpdateOneWithoutNotesNestedInput;
    shares?: SharedNoteUpdateManyWithoutNoteNestedInput;
  };

  export type NoteUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    userId?: IntFieldUpdateOperationsInput | number;
    subjectId?: IntFieldUpdateOperationsInput | number;
    folderId?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    shares?: SharedNoteUncheckedUpdateManyWithoutNoteNestedInput;
  };

  export type TagUpsertWithoutNotesInput = {
    update: XOR<
      TagUpdateWithoutNotesInput,
      TagUncheckedUpdateWithoutNotesInput
    >;
    create: XOR<
      TagCreateWithoutNotesInput,
      TagUncheckedCreateWithoutNotesInput
    >;
    where?: TagWhereInput;
  };

  export type TagUpdateToOneWithWhereWithoutNotesInput = {
    where?: TagWhereInput;
    data: XOR<TagUpdateWithoutNotesInput, TagUncheckedUpdateWithoutNotesInput>;
  };

  export type TagUpdateWithoutNotesInput = {
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TagUncheckedUpdateWithoutNotesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NoteCreateWithoutSharesInput = {
    title: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutNotesInput;
    subject: SubjectCreateNestedOneWithoutNotesInput;
    folder?: FolderCreateNestedOneWithoutNotesInput;
    tags?: NoteTagCreateNestedManyWithoutNoteInput;
  };

  export type NoteUncheckedCreateWithoutSharesInput = {
    id?: number;
    title: string;
    content: string;
    userId: number;
    subjectId: number;
    folderId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tags?: NoteTagUncheckedCreateNestedManyWithoutNoteInput;
  };

  export type NoteCreateOrConnectWithoutSharesInput = {
    where: NoteWhereUniqueInput;
    create: XOR<
      NoteCreateWithoutSharesInput,
      NoteUncheckedCreateWithoutSharesInput
    >;
  };

  export type UserCreateWithoutSharedInput = {
    name: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subjects?: SubjectCreateNestedManyWithoutUserInput;
    notes?: NoteCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutSharedInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subjects?: SubjectUncheckedCreateNestedManyWithoutUserInput;
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutSharedInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutSharedInput,
      UserUncheckedCreateWithoutSharedInput
    >;
  };

  export type NoteUpsertWithoutSharesInput = {
    update: XOR<
      NoteUpdateWithoutSharesInput,
      NoteUncheckedUpdateWithoutSharesInput
    >;
    create: XOR<
      NoteCreateWithoutSharesInput,
      NoteUncheckedCreateWithoutSharesInput
    >;
    where?: NoteWhereInput;
  };

  export type NoteUpdateToOneWithWhereWithoutSharesInput = {
    where?: NoteWhereInput;
    data: XOR<
      NoteUpdateWithoutSharesInput,
      NoteUncheckedUpdateWithoutSharesInput
    >;
  };

  export type NoteUpdateWithoutSharesInput = {
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutNotesNestedInput;
    subject?: SubjectUpdateOneRequiredWithoutNotesNestedInput;
    folder?: FolderUpdateOneWithoutNotesNestedInput;
    tags?: NoteTagUpdateManyWithoutNoteNestedInput;
  };

  export type NoteUncheckedUpdateWithoutSharesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    userId?: IntFieldUpdateOperationsInput | number;
    subjectId?: IntFieldUpdateOperationsInput | number;
    folderId?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    tags?: NoteTagUncheckedUpdateManyWithoutNoteNestedInput;
  };

  export type UserUpsertWithoutSharedInput = {
    update: XOR<
      UserUpdateWithoutSharedInput,
      UserUncheckedUpdateWithoutSharedInput
    >;
    create: XOR<
      UserCreateWithoutSharedInput,
      UserUncheckedCreateWithoutSharedInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutSharedInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutSharedInput,
      UserUncheckedUpdateWithoutSharedInput
    >;
  };

  export type UserUpdateWithoutSharedInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    subjects?: SubjectUpdateManyWithoutUserNestedInput;
    notes?: NoteUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutSharedInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    subjects?: SubjectUncheckedUpdateManyWithoutUserNestedInput;
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type SubjectCreateManyUserInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type NoteCreateManyUserInput = {
    id?: number;
    title: string;
    content: string;
    subjectId: number;
    folderId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type SharedNoteCreateManyUserInput = {
    id?: number;
    noteId: number;
    createdAt?: Date | string;
  };

  export type SubjectUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    folders?: FolderUpdateManyWithoutSubjectNestedInput;
    notes?: NoteUpdateManyWithoutSubjectNestedInput;
  };

  export type SubjectUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    folders?: FolderUncheckedUpdateManyWithoutSubjectNestedInput;
    notes?: NoteUncheckedUpdateManyWithoutSubjectNestedInput;
  };

  export type SubjectUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NoteUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    subject?: SubjectUpdateOneRequiredWithoutNotesNestedInput;
    folder?: FolderUpdateOneWithoutNotesNestedInput;
    tags?: NoteTagUpdateManyWithoutNoteNestedInput;
    shares?: SharedNoteUpdateManyWithoutNoteNestedInput;
  };

  export type NoteUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    subjectId?: IntFieldUpdateOperationsInput | number;
    folderId?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    tags?: NoteTagUncheckedUpdateManyWithoutNoteNestedInput;
    shares?: SharedNoteUncheckedUpdateManyWithoutNoteNestedInput;
  };

  export type NoteUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    subjectId?: IntFieldUpdateOperationsInput | number;
    folderId?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SharedNoteUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    note?: NoteUpdateOneRequiredWithoutSharesNestedInput;
  };

  export type SharedNoteUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    noteId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SharedNoteUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    noteId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FolderCreateManySubjectInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type NoteCreateManySubjectInput = {
    id?: number;
    title: string;
    content: string;
    userId: number;
    folderId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type FolderUpdateWithoutSubjectInput = {
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: NoteUpdateManyWithoutFolderNestedInput;
  };

  export type FolderUncheckedUpdateWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: NoteUncheckedUpdateManyWithoutFolderNestedInput;
  };

  export type FolderUncheckedUpdateManyWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NoteUpdateWithoutSubjectInput = {
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutNotesNestedInput;
    folder?: FolderUpdateOneWithoutNotesNestedInput;
    tags?: NoteTagUpdateManyWithoutNoteNestedInput;
    shares?: SharedNoteUpdateManyWithoutNoteNestedInput;
  };

  export type NoteUncheckedUpdateWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    userId?: IntFieldUpdateOperationsInput | number;
    folderId?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    tags?: NoteTagUncheckedUpdateManyWithoutNoteNestedInput;
    shares?: SharedNoteUncheckedUpdateManyWithoutNoteNestedInput;
  };

  export type NoteUncheckedUpdateManyWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    userId?: IntFieldUpdateOperationsInput | number;
    folderId?: NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NoteCreateManyFolderInput = {
    id?: number;
    title: string;
    content: string;
    userId: number;
    subjectId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type NoteUpdateWithoutFolderInput = {
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutNotesNestedInput;
    subject?: SubjectUpdateOneRequiredWithoutNotesNestedInput;
    tags?: NoteTagUpdateManyWithoutNoteNestedInput;
    shares?: SharedNoteUpdateManyWithoutNoteNestedInput;
  };

  export type NoteUncheckedUpdateWithoutFolderInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    userId?: IntFieldUpdateOperationsInput | number;
    subjectId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    tags?: NoteTagUncheckedUpdateManyWithoutNoteNestedInput;
    shares?: SharedNoteUncheckedUpdateManyWithoutNoteNestedInput;
  };

  export type NoteUncheckedUpdateManyWithoutFolderInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    userId?: IntFieldUpdateOperationsInput | number;
    subjectId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NoteTagCreateManyNoteInput = {
    tagId: number;
  };

  export type SharedNoteCreateManyNoteInput = {
    id?: number;
    userId: number;
    createdAt?: Date | string;
  };

  export type NoteTagUpdateWithoutNoteInput = {
    tag?: TagUpdateOneRequiredWithoutNotesNestedInput;
  };

  export type NoteTagUncheckedUpdateWithoutNoteInput = {
    tagId?: IntFieldUpdateOperationsInput | number;
  };

  export type NoteTagUncheckedUpdateManyWithoutNoteInput = {
    tagId?: IntFieldUpdateOperationsInput | number;
  };

  export type SharedNoteUpdateWithoutNoteInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutSharedNestedInput;
  };

  export type SharedNoteUncheckedUpdateWithoutNoteInput = {
    id?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SharedNoteUncheckedUpdateManyWithoutNoteInput = {
    id?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type NoteTagCreateManyTagInput = {
    noteId: number;
  };

  export type NoteTagUpdateWithoutTagInput = {
    note?: NoteUpdateOneRequiredWithoutTagsNestedInput;
  };

  export type NoteTagUncheckedUpdateWithoutTagInput = {
    noteId?: IntFieldUpdateOperationsInput | number;
  };

  export type NoteTagUncheckedUpdateManyWithoutTagInput = {
    noteId?: IntFieldUpdateOperationsInput | number;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
