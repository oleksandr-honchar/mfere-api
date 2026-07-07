
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model factor_dataset
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type factor_dataset = $Result.DefaultSelection<Prisma.$factor_datasetPayload>
/**
 * Model dim_company
 * 
 */
export type dim_company = $Result.DefaultSelection<Prisma.$dim_companyPayload>
/**
 * Model dim_date
 * 
 */
export type dim_date = $Result.DefaultSelection<Prisma.$dim_datePayload>
/**
 * Model fact_fundamentals
 * 
 */
export type fact_fundamentals = $Result.DefaultSelection<Prisma.$fact_fundamentalsPayload>
/**
 * Model fact_macro
 * 
 */
export type fact_macro = $Result.DefaultSelection<Prisma.$fact_macroPayload>
/**
 * Model fact_prices
 * 
 */
export type fact_prices = $Result.DefaultSelection<Prisma.$fact_pricesPayload>
/**
 * Model universe
 * 
 */
export type universe = $Result.DefaultSelection<Prisma.$universePayload>
/**
 * Model raw_fundamentals
 * 
 */
export type raw_fundamentals = $Result.DefaultSelection<Prisma.$raw_fundamentalsPayload>
/**
 * Model raw_macro
 * 
 */
export type raw_macro = $Result.DefaultSelection<Prisma.$raw_macroPayload>
/**
 * Model raw_prices
 * 
 */
export type raw_prices = $Result.DefaultSelection<Prisma.$raw_pricesPayload>
/**
 * Model raw_tiingo_fundamentals
 * 
 */
export type raw_tiingo_fundamentals = $Result.DefaultSelection<Prisma.$raw_tiingo_fundamentalsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Factor_datasets
 * const factor_datasets = await prisma.factor_dataset.findMany()
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Factor_datasets
   * const factor_datasets = await prisma.factor_dataset.findMany()
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.factor_dataset`: Exposes CRUD operations for the **factor_dataset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Factor_datasets
    * const factor_datasets = await prisma.factor_dataset.findMany()
    * ```
    */
  get factor_dataset(): Prisma.factor_datasetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dim_company`: Exposes CRUD operations for the **dim_company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dim_companies
    * const dim_companies = await prisma.dim_company.findMany()
    * ```
    */
  get dim_company(): Prisma.dim_companyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dim_date`: Exposes CRUD operations for the **dim_date** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dim_dates
    * const dim_dates = await prisma.dim_date.findMany()
    * ```
    */
  get dim_date(): Prisma.dim_dateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fact_fundamentals`: Exposes CRUD operations for the **fact_fundamentals** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fact_fundamentals
    * const fact_fundamentals = await prisma.fact_fundamentals.findMany()
    * ```
    */
  get fact_fundamentals(): Prisma.fact_fundamentalsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fact_macro`: Exposes CRUD operations for the **fact_macro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fact_macros
    * const fact_macros = await prisma.fact_macro.findMany()
    * ```
    */
  get fact_macro(): Prisma.fact_macroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fact_prices`: Exposes CRUD operations for the **fact_prices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fact_prices
    * const fact_prices = await prisma.fact_prices.findMany()
    * ```
    */
  get fact_prices(): Prisma.fact_pricesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.universe`: Exposes CRUD operations for the **universe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Universes
    * const universes = await prisma.universe.findMany()
    * ```
    */
  get universe(): Prisma.universeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.raw_fundamentals`: Exposes CRUD operations for the **raw_fundamentals** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Raw_fundamentals
    * const raw_fundamentals = await prisma.raw_fundamentals.findMany()
    * ```
    */
  get raw_fundamentals(): Prisma.raw_fundamentalsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.raw_macro`: Exposes CRUD operations for the **raw_macro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Raw_macros
    * const raw_macros = await prisma.raw_macro.findMany()
    * ```
    */
  get raw_macro(): Prisma.raw_macroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.raw_prices`: Exposes CRUD operations for the **raw_prices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Raw_prices
    * const raw_prices = await prisma.raw_prices.findMany()
    * ```
    */
  get raw_prices(): Prisma.raw_pricesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.raw_tiingo_fundamentals`: Exposes CRUD operations for the **raw_tiingo_fundamentals** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Raw_tiingo_fundamentals
    * const raw_tiingo_fundamentals = await prisma.raw_tiingo_fundamentals.findMany()
    * ```
    */
  get raw_tiingo_fundamentals(): Prisma.raw_tiingo_fundamentalsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
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
    factor_dataset: 'factor_dataset',
    dim_company: 'dim_company',
    dim_date: 'dim_date',
    fact_fundamentals: 'fact_fundamentals',
    fact_macro: 'fact_macro',
    fact_prices: 'fact_prices',
    universe: 'universe',
    raw_fundamentals: 'raw_fundamentals',
    raw_macro: 'raw_macro',
    raw_prices: 'raw_prices',
    raw_tiingo_fundamentals: 'raw_tiingo_fundamentals'
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
      modelProps: "factor_dataset" | "dim_company" | "dim_date" | "fact_fundamentals" | "fact_macro" | "fact_prices" | "universe" | "raw_fundamentals" | "raw_macro" | "raw_prices" | "raw_tiingo_fundamentals"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      factor_dataset: {
        payload: Prisma.$factor_datasetPayload<ExtArgs>
        fields: Prisma.factor_datasetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.factor_datasetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$factor_datasetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.factor_datasetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$factor_datasetPayload>
          }
          findFirst: {
            args: Prisma.factor_datasetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$factor_datasetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.factor_datasetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$factor_datasetPayload>
          }
          findMany: {
            args: Prisma.factor_datasetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$factor_datasetPayload>[]
          }
          create: {
            args: Prisma.factor_datasetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$factor_datasetPayload>
          }
          createMany: {
            args: Prisma.factor_datasetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.factor_datasetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$factor_datasetPayload>[]
          }
          delete: {
            args: Prisma.factor_datasetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$factor_datasetPayload>
          }
          update: {
            args: Prisma.factor_datasetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$factor_datasetPayload>
          }
          deleteMany: {
            args: Prisma.factor_datasetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.factor_datasetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.factor_datasetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$factor_datasetPayload>[]
          }
          upsert: {
            args: Prisma.factor_datasetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$factor_datasetPayload>
          }
          aggregate: {
            args: Prisma.Factor_datasetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFactor_dataset>
          }
          groupBy: {
            args: Prisma.factor_datasetGroupByArgs<ExtArgs>
            result: $Utils.Optional<Factor_datasetGroupByOutputType>[]
          }
          count: {
            args: Prisma.factor_datasetCountArgs<ExtArgs>
            result: $Utils.Optional<Factor_datasetCountAggregateOutputType> | number
          }
        }
      }
      dim_company: {
        payload: Prisma.$dim_companyPayload<ExtArgs>
        fields: Prisma.dim_companyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.dim_companyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_companyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.dim_companyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_companyPayload>
          }
          findFirst: {
            args: Prisma.dim_companyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_companyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.dim_companyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_companyPayload>
          }
          findMany: {
            args: Prisma.dim_companyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_companyPayload>[]
          }
          create: {
            args: Prisma.dim_companyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_companyPayload>
          }
          createMany: {
            args: Prisma.dim_companyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.dim_companyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_companyPayload>[]
          }
          delete: {
            args: Prisma.dim_companyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_companyPayload>
          }
          update: {
            args: Prisma.dim_companyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_companyPayload>
          }
          deleteMany: {
            args: Prisma.dim_companyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.dim_companyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.dim_companyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_companyPayload>[]
          }
          upsert: {
            args: Prisma.dim_companyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_companyPayload>
          }
          aggregate: {
            args: Prisma.Dim_companyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDim_company>
          }
          groupBy: {
            args: Prisma.dim_companyGroupByArgs<ExtArgs>
            result: $Utils.Optional<Dim_companyGroupByOutputType>[]
          }
          count: {
            args: Prisma.dim_companyCountArgs<ExtArgs>
            result: $Utils.Optional<Dim_companyCountAggregateOutputType> | number
          }
        }
      }
      dim_date: {
        payload: Prisma.$dim_datePayload<ExtArgs>
        fields: Prisma.dim_dateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.dim_dateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_datePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.dim_dateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_datePayload>
          }
          findFirst: {
            args: Prisma.dim_dateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_datePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.dim_dateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_datePayload>
          }
          findMany: {
            args: Prisma.dim_dateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_datePayload>[]
          }
          create: {
            args: Prisma.dim_dateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_datePayload>
          }
          createMany: {
            args: Prisma.dim_dateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.dim_dateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_datePayload>[]
          }
          delete: {
            args: Prisma.dim_dateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_datePayload>
          }
          update: {
            args: Prisma.dim_dateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_datePayload>
          }
          deleteMany: {
            args: Prisma.dim_dateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.dim_dateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.dim_dateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_datePayload>[]
          }
          upsert: {
            args: Prisma.dim_dateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dim_datePayload>
          }
          aggregate: {
            args: Prisma.Dim_dateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDim_date>
          }
          groupBy: {
            args: Prisma.dim_dateGroupByArgs<ExtArgs>
            result: $Utils.Optional<Dim_dateGroupByOutputType>[]
          }
          count: {
            args: Prisma.dim_dateCountArgs<ExtArgs>
            result: $Utils.Optional<Dim_dateCountAggregateOutputType> | number
          }
        }
      }
      fact_fundamentals: {
        payload: Prisma.$fact_fundamentalsPayload<ExtArgs>
        fields: Prisma.fact_fundamentalsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fact_fundamentalsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fact_fundamentalsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fact_fundamentalsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fact_fundamentalsPayload>
          }
          findFirst: {
            args: Prisma.fact_fundamentalsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fact_fundamentalsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fact_fundamentalsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fact_fundamentalsPayload>
          }
          findMany: {
            args: Prisma.fact_fundamentalsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fact_fundamentalsPayload>[]
          }
          create: {
            args: Prisma.fact_fundamentalsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fact_fundamentalsPayload>
          }
          createMany: {
            args: Prisma.fact_fundamentalsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.fact_fundamentalsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fact_fundamentalsPayload>[]
          }
          delete: {
            args: Prisma.fact_fundamentalsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fact_fundamentalsPayload>
          }
          update: {
            args: Prisma.fact_fundamentalsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fact_fundamentalsPayload>
          }
          deleteMany: {
            args: Prisma.fact_fundamentalsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.fact_fundamentalsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.fact_fundamentalsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fact_fundamentalsPayload>[]
          }
          upsert: {
            args: Prisma.fact_fundamentalsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fact_fundamentalsPayload>
          }
          aggregate: {
            args: Prisma.Fact_fundamentalsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFact_fundamentals>
          }
          groupBy: {
            args: Prisma.fact_fundamentalsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Fact_fundamentalsGroupByOutputType>[]
          }
          count: {
            args: Prisma.fact_fundamentalsCountArgs<ExtArgs>
            result: $Utils.Optional<Fact_fundamentalsCountAggregateOutputType> | number
          }
        }
      }
      fact_macro: {
        payload: Prisma.$fact_macroPayload<ExtArgs>
        fields: Prisma.fact_macroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fact_macroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fact_macroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fact_macroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fact_macroPayload>
          }
          findFirst: {
            args: Prisma.fact_macroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fact_macroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fact_macroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fact_macroPayload>
          }
          findMany: {
            args: Prisma.fact_macroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fact_macroPayload>[]
          }
          create: {
            args: Prisma.fact_macroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fact_macroPayload>
          }
          createMany: {
            args: Prisma.fact_macroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.fact_macroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fact_macroPayload>[]
          }
          delete: {
            args: Prisma.fact_macroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fact_macroPayload>
          }
          update: {
            args: Prisma.fact_macroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fact_macroPayload>
          }
          deleteMany: {
            args: Prisma.fact_macroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.fact_macroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.fact_macroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fact_macroPayload>[]
          }
          upsert: {
            args: Prisma.fact_macroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fact_macroPayload>
          }
          aggregate: {
            args: Prisma.Fact_macroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFact_macro>
          }
          groupBy: {
            args: Prisma.fact_macroGroupByArgs<ExtArgs>
            result: $Utils.Optional<Fact_macroGroupByOutputType>[]
          }
          count: {
            args: Prisma.fact_macroCountArgs<ExtArgs>
            result: $Utils.Optional<Fact_macroCountAggregateOutputType> | number
          }
        }
      }
      fact_prices: {
        payload: Prisma.$fact_pricesPayload<ExtArgs>
        fields: Prisma.fact_pricesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fact_pricesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fact_pricesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fact_pricesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fact_pricesPayload>
          }
          findFirst: {
            args: Prisma.fact_pricesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fact_pricesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fact_pricesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fact_pricesPayload>
          }
          findMany: {
            args: Prisma.fact_pricesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fact_pricesPayload>[]
          }
          create: {
            args: Prisma.fact_pricesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fact_pricesPayload>
          }
          createMany: {
            args: Prisma.fact_pricesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.fact_pricesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fact_pricesPayload>[]
          }
          delete: {
            args: Prisma.fact_pricesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fact_pricesPayload>
          }
          update: {
            args: Prisma.fact_pricesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fact_pricesPayload>
          }
          deleteMany: {
            args: Prisma.fact_pricesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.fact_pricesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.fact_pricesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fact_pricesPayload>[]
          }
          upsert: {
            args: Prisma.fact_pricesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fact_pricesPayload>
          }
          aggregate: {
            args: Prisma.Fact_pricesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFact_prices>
          }
          groupBy: {
            args: Prisma.fact_pricesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Fact_pricesGroupByOutputType>[]
          }
          count: {
            args: Prisma.fact_pricesCountArgs<ExtArgs>
            result: $Utils.Optional<Fact_pricesCountAggregateOutputType> | number
          }
        }
      }
      universe: {
        payload: Prisma.$universePayload<ExtArgs>
        fields: Prisma.universeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.universeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$universePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.universeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$universePayload>
          }
          findFirst: {
            args: Prisma.universeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$universePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.universeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$universePayload>
          }
          findMany: {
            args: Prisma.universeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$universePayload>[]
          }
          create: {
            args: Prisma.universeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$universePayload>
          }
          createMany: {
            args: Prisma.universeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.universeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$universePayload>[]
          }
          delete: {
            args: Prisma.universeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$universePayload>
          }
          update: {
            args: Prisma.universeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$universePayload>
          }
          deleteMany: {
            args: Prisma.universeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.universeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.universeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$universePayload>[]
          }
          upsert: {
            args: Prisma.universeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$universePayload>
          }
          aggregate: {
            args: Prisma.UniverseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUniverse>
          }
          groupBy: {
            args: Prisma.universeGroupByArgs<ExtArgs>
            result: $Utils.Optional<UniverseGroupByOutputType>[]
          }
          count: {
            args: Prisma.universeCountArgs<ExtArgs>
            result: $Utils.Optional<UniverseCountAggregateOutputType> | number
          }
        }
      }
      raw_fundamentals: {
        payload: Prisma.$raw_fundamentalsPayload<ExtArgs>
        fields: Prisma.raw_fundamentalsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.raw_fundamentalsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_fundamentalsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.raw_fundamentalsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_fundamentalsPayload>
          }
          findFirst: {
            args: Prisma.raw_fundamentalsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_fundamentalsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.raw_fundamentalsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_fundamentalsPayload>
          }
          findMany: {
            args: Prisma.raw_fundamentalsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_fundamentalsPayload>[]
          }
          create: {
            args: Prisma.raw_fundamentalsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_fundamentalsPayload>
          }
          createMany: {
            args: Prisma.raw_fundamentalsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.raw_fundamentalsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_fundamentalsPayload>[]
          }
          delete: {
            args: Prisma.raw_fundamentalsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_fundamentalsPayload>
          }
          update: {
            args: Prisma.raw_fundamentalsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_fundamentalsPayload>
          }
          deleteMany: {
            args: Prisma.raw_fundamentalsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.raw_fundamentalsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.raw_fundamentalsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_fundamentalsPayload>[]
          }
          upsert: {
            args: Prisma.raw_fundamentalsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_fundamentalsPayload>
          }
          aggregate: {
            args: Prisma.Raw_fundamentalsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRaw_fundamentals>
          }
          groupBy: {
            args: Prisma.raw_fundamentalsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Raw_fundamentalsGroupByOutputType>[]
          }
          count: {
            args: Prisma.raw_fundamentalsCountArgs<ExtArgs>
            result: $Utils.Optional<Raw_fundamentalsCountAggregateOutputType> | number
          }
        }
      }
      raw_macro: {
        payload: Prisma.$raw_macroPayload<ExtArgs>
        fields: Prisma.raw_macroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.raw_macroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_macroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.raw_macroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_macroPayload>
          }
          findFirst: {
            args: Prisma.raw_macroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_macroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.raw_macroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_macroPayload>
          }
          findMany: {
            args: Prisma.raw_macroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_macroPayload>[]
          }
          create: {
            args: Prisma.raw_macroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_macroPayload>
          }
          createMany: {
            args: Prisma.raw_macroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.raw_macroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_macroPayload>[]
          }
          delete: {
            args: Prisma.raw_macroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_macroPayload>
          }
          update: {
            args: Prisma.raw_macroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_macroPayload>
          }
          deleteMany: {
            args: Prisma.raw_macroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.raw_macroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.raw_macroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_macroPayload>[]
          }
          upsert: {
            args: Prisma.raw_macroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_macroPayload>
          }
          aggregate: {
            args: Prisma.Raw_macroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRaw_macro>
          }
          groupBy: {
            args: Prisma.raw_macroGroupByArgs<ExtArgs>
            result: $Utils.Optional<Raw_macroGroupByOutputType>[]
          }
          count: {
            args: Prisma.raw_macroCountArgs<ExtArgs>
            result: $Utils.Optional<Raw_macroCountAggregateOutputType> | number
          }
        }
      }
      raw_prices: {
        payload: Prisma.$raw_pricesPayload<ExtArgs>
        fields: Prisma.raw_pricesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.raw_pricesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_pricesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.raw_pricesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_pricesPayload>
          }
          findFirst: {
            args: Prisma.raw_pricesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_pricesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.raw_pricesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_pricesPayload>
          }
          findMany: {
            args: Prisma.raw_pricesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_pricesPayload>[]
          }
          create: {
            args: Prisma.raw_pricesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_pricesPayload>
          }
          createMany: {
            args: Prisma.raw_pricesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.raw_pricesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_pricesPayload>[]
          }
          delete: {
            args: Prisma.raw_pricesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_pricesPayload>
          }
          update: {
            args: Prisma.raw_pricesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_pricesPayload>
          }
          deleteMany: {
            args: Prisma.raw_pricesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.raw_pricesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.raw_pricesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_pricesPayload>[]
          }
          upsert: {
            args: Prisma.raw_pricesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_pricesPayload>
          }
          aggregate: {
            args: Prisma.Raw_pricesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRaw_prices>
          }
          groupBy: {
            args: Prisma.raw_pricesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Raw_pricesGroupByOutputType>[]
          }
          count: {
            args: Prisma.raw_pricesCountArgs<ExtArgs>
            result: $Utils.Optional<Raw_pricesCountAggregateOutputType> | number
          }
        }
      }
      raw_tiingo_fundamentals: {
        payload: Prisma.$raw_tiingo_fundamentalsPayload<ExtArgs>
        fields: Prisma.raw_tiingo_fundamentalsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.raw_tiingo_fundamentalsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_tiingo_fundamentalsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.raw_tiingo_fundamentalsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_tiingo_fundamentalsPayload>
          }
          findFirst: {
            args: Prisma.raw_tiingo_fundamentalsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_tiingo_fundamentalsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.raw_tiingo_fundamentalsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_tiingo_fundamentalsPayload>
          }
          findMany: {
            args: Prisma.raw_tiingo_fundamentalsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_tiingo_fundamentalsPayload>[]
          }
          create: {
            args: Prisma.raw_tiingo_fundamentalsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_tiingo_fundamentalsPayload>
          }
          createMany: {
            args: Prisma.raw_tiingo_fundamentalsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.raw_tiingo_fundamentalsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_tiingo_fundamentalsPayload>[]
          }
          delete: {
            args: Prisma.raw_tiingo_fundamentalsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_tiingo_fundamentalsPayload>
          }
          update: {
            args: Prisma.raw_tiingo_fundamentalsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_tiingo_fundamentalsPayload>
          }
          deleteMany: {
            args: Prisma.raw_tiingo_fundamentalsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.raw_tiingo_fundamentalsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.raw_tiingo_fundamentalsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_tiingo_fundamentalsPayload>[]
          }
          upsert: {
            args: Prisma.raw_tiingo_fundamentalsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$raw_tiingo_fundamentalsPayload>
          }
          aggregate: {
            args: Prisma.Raw_tiingo_fundamentalsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRaw_tiingo_fundamentals>
          }
          groupBy: {
            args: Prisma.raw_tiingo_fundamentalsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Raw_tiingo_fundamentalsGroupByOutputType>[]
          }
          count: {
            args: Prisma.raw_tiingo_fundamentalsCountArgs<ExtArgs>
            result: $Utils.Optional<Raw_tiingo_fundamentalsCountAggregateOutputType> | number
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
    factor_dataset?: factor_datasetOmit
    dim_company?: dim_companyOmit
    dim_date?: dim_dateOmit
    fact_fundamentals?: fact_fundamentalsOmit
    fact_macro?: fact_macroOmit
    fact_prices?: fact_pricesOmit
    universe?: universeOmit
    raw_fundamentals?: raw_fundamentalsOmit
    raw_macro?: raw_macroOmit
    raw_prices?: raw_pricesOmit
    raw_tiingo_fundamentals?: raw_tiingo_fundamentalsOmit
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
   * Count Type Dim_companyCountOutputType
   */

  export type Dim_companyCountOutputType = {
    fact_prices: number
  }

  export type Dim_companyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fact_prices?: boolean | Dim_companyCountOutputTypeCountFact_pricesArgs
  }

  // Custom InputTypes
  /**
   * Dim_companyCountOutputType without action
   */
  export type Dim_companyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dim_companyCountOutputType
     */
    select?: Dim_companyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Dim_companyCountOutputType without action
   */
  export type Dim_companyCountOutputTypeCountFact_pricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fact_pricesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model factor_dataset
   */

  export type AggregateFactor_dataset = {
    _count: Factor_datasetCountAggregateOutputType | null
    _avg: Factor_datasetAvgAggregateOutputType | null
    _sum: Factor_datasetSumAggregateOutputType | null
    _min: Factor_datasetMinAggregateOutputType | null
    _max: Factor_datasetMaxAggregateOutputType | null
  }

  export type Factor_datasetAvgAggregateOutputType = {
    company_id: number | null
    mom_1m: number | null
    mom_3m: number | null
    mom_6m: number | null
    mom_12m: number | null
    mom_skip1m: number | null
    mom_acc: number | null
    rev_1w: number | null
    vol_3m: number | null
    vol_12m: number | null
    down_vol: number | null
    beta: number | null
    idio_vol: number | null
    max_drawdown: number | null
    earnings_yield: number | null
    book_to_price: number | null
    sales_to_price: number | null
    cf_to_price: number | null
    fcf_yield: number | null
    ev_ebitda: number | null
    ebitda_yield: number | null
    roe: number | null
    roa: number | null
    gross_margin: number | null
    op_margin: number | null
    profit_stability: number | null
    debt_to_equity: number | null
    int_coverage: number | null
    rev_growth: number | null
    eps_growth: number | null
    asset_growth: number | null
    capex_growth: number | null
    opinc_growth: number | null
    sales_acc: number | null
    capex_ratio: number | null
    inventory_growth: number | null
    accruals: number | null
    turnover: number | null
    dollar_vol: number | null
    illiq: number | null
    vol_vol: number | null
    term_spread: number | null
    credit_spread: number | null
    cpi_growth: number | null
    unrate: number | null
    nfci: number | null
    gdp_growth: number | null
    target_return_60d: number | null
  }

  export type Factor_datasetSumAggregateOutputType = {
    company_id: bigint | null
    mom_1m: number | null
    mom_3m: number | null
    mom_6m: number | null
    mom_12m: number | null
    mom_skip1m: number | null
    mom_acc: number | null
    rev_1w: number | null
    vol_3m: number | null
    vol_12m: number | null
    down_vol: number | null
    beta: number | null
    idio_vol: number | null
    max_drawdown: number | null
    earnings_yield: number | null
    book_to_price: number | null
    sales_to_price: number | null
    cf_to_price: number | null
    fcf_yield: number | null
    ev_ebitda: number | null
    ebitda_yield: number | null
    roe: number | null
    roa: number | null
    gross_margin: number | null
    op_margin: number | null
    profit_stability: number | null
    debt_to_equity: number | null
    int_coverage: number | null
    rev_growth: number | null
    eps_growth: number | null
    asset_growth: number | null
    capex_growth: number | null
    opinc_growth: number | null
    sales_acc: number | null
    capex_ratio: number | null
    inventory_growth: number | null
    accruals: number | null
    turnover: number | null
    dollar_vol: number | null
    illiq: number | null
    vol_vol: number | null
    term_spread: number | null
    credit_spread: number | null
    cpi_growth: number | null
    unrate: number | null
    nfci: number | null
    gdp_growth: number | null
    target_return_60d: number | null
  }

  export type Factor_datasetMinAggregateOutputType = {
    company_id: bigint | null
    date: Date | null
    mom_1m: number | null
    mom_3m: number | null
    mom_6m: number | null
    mom_12m: number | null
    mom_skip1m: number | null
    mom_acc: number | null
    rev_1w: number | null
    vol_3m: number | null
    vol_12m: number | null
    down_vol: number | null
    beta: number | null
    idio_vol: number | null
    max_drawdown: number | null
    earnings_yield: number | null
    book_to_price: number | null
    sales_to_price: number | null
    cf_to_price: number | null
    fcf_yield: number | null
    ev_ebitda: number | null
    ebitda_yield: number | null
    roe: number | null
    roa: number | null
    gross_margin: number | null
    op_margin: number | null
    profit_stability: number | null
    debt_to_equity: number | null
    int_coverage: number | null
    rev_growth: number | null
    eps_growth: number | null
    asset_growth: number | null
    capex_growth: number | null
    opinc_growth: number | null
    sales_acc: number | null
    capex_ratio: number | null
    inventory_growth: number | null
    accruals: number | null
    turnover: number | null
    dollar_vol: number | null
    illiq: number | null
    vol_vol: number | null
    term_spread: number | null
    credit_spread: number | null
    cpi_growth: number | null
    unrate: number | null
    nfci: number | null
    gdp_growth: number | null
    target_return_60d: number | null
  }

  export type Factor_datasetMaxAggregateOutputType = {
    company_id: bigint | null
    date: Date | null
    mom_1m: number | null
    mom_3m: number | null
    mom_6m: number | null
    mom_12m: number | null
    mom_skip1m: number | null
    mom_acc: number | null
    rev_1w: number | null
    vol_3m: number | null
    vol_12m: number | null
    down_vol: number | null
    beta: number | null
    idio_vol: number | null
    max_drawdown: number | null
    earnings_yield: number | null
    book_to_price: number | null
    sales_to_price: number | null
    cf_to_price: number | null
    fcf_yield: number | null
    ev_ebitda: number | null
    ebitda_yield: number | null
    roe: number | null
    roa: number | null
    gross_margin: number | null
    op_margin: number | null
    profit_stability: number | null
    debt_to_equity: number | null
    int_coverage: number | null
    rev_growth: number | null
    eps_growth: number | null
    asset_growth: number | null
    capex_growth: number | null
    opinc_growth: number | null
    sales_acc: number | null
    capex_ratio: number | null
    inventory_growth: number | null
    accruals: number | null
    turnover: number | null
    dollar_vol: number | null
    illiq: number | null
    vol_vol: number | null
    term_spread: number | null
    credit_spread: number | null
    cpi_growth: number | null
    unrate: number | null
    nfci: number | null
    gdp_growth: number | null
    target_return_60d: number | null
  }

  export type Factor_datasetCountAggregateOutputType = {
    company_id: number
    date: number
    mom_1m: number
    mom_3m: number
    mom_6m: number
    mom_12m: number
    mom_skip1m: number
    mom_acc: number
    rev_1w: number
    vol_3m: number
    vol_12m: number
    down_vol: number
    beta: number
    idio_vol: number
    max_drawdown: number
    earnings_yield: number
    book_to_price: number
    sales_to_price: number
    cf_to_price: number
    fcf_yield: number
    ev_ebitda: number
    ebitda_yield: number
    roe: number
    roa: number
    gross_margin: number
    op_margin: number
    profit_stability: number
    debt_to_equity: number
    int_coverage: number
    rev_growth: number
    eps_growth: number
    asset_growth: number
    capex_growth: number
    opinc_growth: number
    sales_acc: number
    capex_ratio: number
    inventory_growth: number
    accruals: number
    turnover: number
    dollar_vol: number
    illiq: number
    vol_vol: number
    term_spread: number
    credit_spread: number
    cpi_growth: number
    unrate: number
    nfci: number
    gdp_growth: number
    target_return_60d: number
    _all: number
  }


  export type Factor_datasetAvgAggregateInputType = {
    company_id?: true
    mom_1m?: true
    mom_3m?: true
    mom_6m?: true
    mom_12m?: true
    mom_skip1m?: true
    mom_acc?: true
    rev_1w?: true
    vol_3m?: true
    vol_12m?: true
    down_vol?: true
    beta?: true
    idio_vol?: true
    max_drawdown?: true
    earnings_yield?: true
    book_to_price?: true
    sales_to_price?: true
    cf_to_price?: true
    fcf_yield?: true
    ev_ebitda?: true
    ebitda_yield?: true
    roe?: true
    roa?: true
    gross_margin?: true
    op_margin?: true
    profit_stability?: true
    debt_to_equity?: true
    int_coverage?: true
    rev_growth?: true
    eps_growth?: true
    asset_growth?: true
    capex_growth?: true
    opinc_growth?: true
    sales_acc?: true
    capex_ratio?: true
    inventory_growth?: true
    accruals?: true
    turnover?: true
    dollar_vol?: true
    illiq?: true
    vol_vol?: true
    term_spread?: true
    credit_spread?: true
    cpi_growth?: true
    unrate?: true
    nfci?: true
    gdp_growth?: true
    target_return_60d?: true
  }

  export type Factor_datasetSumAggregateInputType = {
    company_id?: true
    mom_1m?: true
    mom_3m?: true
    mom_6m?: true
    mom_12m?: true
    mom_skip1m?: true
    mom_acc?: true
    rev_1w?: true
    vol_3m?: true
    vol_12m?: true
    down_vol?: true
    beta?: true
    idio_vol?: true
    max_drawdown?: true
    earnings_yield?: true
    book_to_price?: true
    sales_to_price?: true
    cf_to_price?: true
    fcf_yield?: true
    ev_ebitda?: true
    ebitda_yield?: true
    roe?: true
    roa?: true
    gross_margin?: true
    op_margin?: true
    profit_stability?: true
    debt_to_equity?: true
    int_coverage?: true
    rev_growth?: true
    eps_growth?: true
    asset_growth?: true
    capex_growth?: true
    opinc_growth?: true
    sales_acc?: true
    capex_ratio?: true
    inventory_growth?: true
    accruals?: true
    turnover?: true
    dollar_vol?: true
    illiq?: true
    vol_vol?: true
    term_spread?: true
    credit_spread?: true
    cpi_growth?: true
    unrate?: true
    nfci?: true
    gdp_growth?: true
    target_return_60d?: true
  }

  export type Factor_datasetMinAggregateInputType = {
    company_id?: true
    date?: true
    mom_1m?: true
    mom_3m?: true
    mom_6m?: true
    mom_12m?: true
    mom_skip1m?: true
    mom_acc?: true
    rev_1w?: true
    vol_3m?: true
    vol_12m?: true
    down_vol?: true
    beta?: true
    idio_vol?: true
    max_drawdown?: true
    earnings_yield?: true
    book_to_price?: true
    sales_to_price?: true
    cf_to_price?: true
    fcf_yield?: true
    ev_ebitda?: true
    ebitda_yield?: true
    roe?: true
    roa?: true
    gross_margin?: true
    op_margin?: true
    profit_stability?: true
    debt_to_equity?: true
    int_coverage?: true
    rev_growth?: true
    eps_growth?: true
    asset_growth?: true
    capex_growth?: true
    opinc_growth?: true
    sales_acc?: true
    capex_ratio?: true
    inventory_growth?: true
    accruals?: true
    turnover?: true
    dollar_vol?: true
    illiq?: true
    vol_vol?: true
    term_spread?: true
    credit_spread?: true
    cpi_growth?: true
    unrate?: true
    nfci?: true
    gdp_growth?: true
    target_return_60d?: true
  }

  export type Factor_datasetMaxAggregateInputType = {
    company_id?: true
    date?: true
    mom_1m?: true
    mom_3m?: true
    mom_6m?: true
    mom_12m?: true
    mom_skip1m?: true
    mom_acc?: true
    rev_1w?: true
    vol_3m?: true
    vol_12m?: true
    down_vol?: true
    beta?: true
    idio_vol?: true
    max_drawdown?: true
    earnings_yield?: true
    book_to_price?: true
    sales_to_price?: true
    cf_to_price?: true
    fcf_yield?: true
    ev_ebitda?: true
    ebitda_yield?: true
    roe?: true
    roa?: true
    gross_margin?: true
    op_margin?: true
    profit_stability?: true
    debt_to_equity?: true
    int_coverage?: true
    rev_growth?: true
    eps_growth?: true
    asset_growth?: true
    capex_growth?: true
    opinc_growth?: true
    sales_acc?: true
    capex_ratio?: true
    inventory_growth?: true
    accruals?: true
    turnover?: true
    dollar_vol?: true
    illiq?: true
    vol_vol?: true
    term_spread?: true
    credit_spread?: true
    cpi_growth?: true
    unrate?: true
    nfci?: true
    gdp_growth?: true
    target_return_60d?: true
  }

  export type Factor_datasetCountAggregateInputType = {
    company_id?: true
    date?: true
    mom_1m?: true
    mom_3m?: true
    mom_6m?: true
    mom_12m?: true
    mom_skip1m?: true
    mom_acc?: true
    rev_1w?: true
    vol_3m?: true
    vol_12m?: true
    down_vol?: true
    beta?: true
    idio_vol?: true
    max_drawdown?: true
    earnings_yield?: true
    book_to_price?: true
    sales_to_price?: true
    cf_to_price?: true
    fcf_yield?: true
    ev_ebitda?: true
    ebitda_yield?: true
    roe?: true
    roa?: true
    gross_margin?: true
    op_margin?: true
    profit_stability?: true
    debt_to_equity?: true
    int_coverage?: true
    rev_growth?: true
    eps_growth?: true
    asset_growth?: true
    capex_growth?: true
    opinc_growth?: true
    sales_acc?: true
    capex_ratio?: true
    inventory_growth?: true
    accruals?: true
    turnover?: true
    dollar_vol?: true
    illiq?: true
    vol_vol?: true
    term_spread?: true
    credit_spread?: true
    cpi_growth?: true
    unrate?: true
    nfci?: true
    gdp_growth?: true
    target_return_60d?: true
    _all?: true
  }

  export type Factor_datasetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which factor_dataset to aggregate.
     */
    where?: factor_datasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of factor_datasets to fetch.
     */
    orderBy?: factor_datasetOrderByWithRelationInput | factor_datasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: factor_datasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` factor_datasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` factor_datasets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned factor_datasets
    **/
    _count?: true | Factor_datasetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Factor_datasetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Factor_datasetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Factor_datasetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Factor_datasetMaxAggregateInputType
  }

  export type GetFactor_datasetAggregateType<T extends Factor_datasetAggregateArgs> = {
        [P in keyof T & keyof AggregateFactor_dataset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFactor_dataset[P]>
      : GetScalarType<T[P], AggregateFactor_dataset[P]>
  }




  export type factor_datasetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: factor_datasetWhereInput
    orderBy?: factor_datasetOrderByWithAggregationInput | factor_datasetOrderByWithAggregationInput[]
    by: Factor_datasetScalarFieldEnum[] | Factor_datasetScalarFieldEnum
    having?: factor_datasetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Factor_datasetCountAggregateInputType | true
    _avg?: Factor_datasetAvgAggregateInputType
    _sum?: Factor_datasetSumAggregateInputType
    _min?: Factor_datasetMinAggregateInputType
    _max?: Factor_datasetMaxAggregateInputType
  }

  export type Factor_datasetGroupByOutputType = {
    company_id: bigint
    date: Date
    mom_1m: number | null
    mom_3m: number | null
    mom_6m: number | null
    mom_12m: number | null
    mom_skip1m: number | null
    mom_acc: number | null
    rev_1w: number | null
    vol_3m: number | null
    vol_12m: number | null
    down_vol: number | null
    beta: number | null
    idio_vol: number | null
    max_drawdown: number | null
    earnings_yield: number | null
    book_to_price: number | null
    sales_to_price: number | null
    cf_to_price: number | null
    fcf_yield: number | null
    ev_ebitda: number | null
    ebitda_yield: number | null
    roe: number | null
    roa: number | null
    gross_margin: number | null
    op_margin: number | null
    profit_stability: number | null
    debt_to_equity: number | null
    int_coverage: number | null
    rev_growth: number | null
    eps_growth: number | null
    asset_growth: number | null
    capex_growth: number | null
    opinc_growth: number | null
    sales_acc: number | null
    capex_ratio: number | null
    inventory_growth: number | null
    accruals: number | null
    turnover: number | null
    dollar_vol: number | null
    illiq: number | null
    vol_vol: number | null
    term_spread: number | null
    credit_spread: number | null
    cpi_growth: number | null
    unrate: number | null
    nfci: number | null
    gdp_growth: number | null
    target_return_60d: number | null
    _count: Factor_datasetCountAggregateOutputType | null
    _avg: Factor_datasetAvgAggregateOutputType | null
    _sum: Factor_datasetSumAggregateOutputType | null
    _min: Factor_datasetMinAggregateOutputType | null
    _max: Factor_datasetMaxAggregateOutputType | null
  }

  type GetFactor_datasetGroupByPayload<T extends factor_datasetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Factor_datasetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Factor_datasetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Factor_datasetGroupByOutputType[P]>
            : GetScalarType<T[P], Factor_datasetGroupByOutputType[P]>
        }
      >
    >


  export type factor_datasetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    company_id?: boolean
    date?: boolean
    mom_1m?: boolean
    mom_3m?: boolean
    mom_6m?: boolean
    mom_12m?: boolean
    mom_skip1m?: boolean
    mom_acc?: boolean
    rev_1w?: boolean
    vol_3m?: boolean
    vol_12m?: boolean
    down_vol?: boolean
    beta?: boolean
    idio_vol?: boolean
    max_drawdown?: boolean
    earnings_yield?: boolean
    book_to_price?: boolean
    sales_to_price?: boolean
    cf_to_price?: boolean
    fcf_yield?: boolean
    ev_ebitda?: boolean
    ebitda_yield?: boolean
    roe?: boolean
    roa?: boolean
    gross_margin?: boolean
    op_margin?: boolean
    profit_stability?: boolean
    debt_to_equity?: boolean
    int_coverage?: boolean
    rev_growth?: boolean
    eps_growth?: boolean
    asset_growth?: boolean
    capex_growth?: boolean
    opinc_growth?: boolean
    sales_acc?: boolean
    capex_ratio?: boolean
    inventory_growth?: boolean
    accruals?: boolean
    turnover?: boolean
    dollar_vol?: boolean
    illiq?: boolean
    vol_vol?: boolean
    term_spread?: boolean
    credit_spread?: boolean
    cpi_growth?: boolean
    unrate?: boolean
    nfci?: boolean
    gdp_growth?: boolean
    target_return_60d?: boolean
  }, ExtArgs["result"]["factor_dataset"]>

  export type factor_datasetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    company_id?: boolean
    date?: boolean
    mom_1m?: boolean
    mom_3m?: boolean
    mom_6m?: boolean
    mom_12m?: boolean
    mom_skip1m?: boolean
    mom_acc?: boolean
    rev_1w?: boolean
    vol_3m?: boolean
    vol_12m?: boolean
    down_vol?: boolean
    beta?: boolean
    idio_vol?: boolean
    max_drawdown?: boolean
    earnings_yield?: boolean
    book_to_price?: boolean
    sales_to_price?: boolean
    cf_to_price?: boolean
    fcf_yield?: boolean
    ev_ebitda?: boolean
    ebitda_yield?: boolean
    roe?: boolean
    roa?: boolean
    gross_margin?: boolean
    op_margin?: boolean
    profit_stability?: boolean
    debt_to_equity?: boolean
    int_coverage?: boolean
    rev_growth?: boolean
    eps_growth?: boolean
    asset_growth?: boolean
    capex_growth?: boolean
    opinc_growth?: boolean
    sales_acc?: boolean
    capex_ratio?: boolean
    inventory_growth?: boolean
    accruals?: boolean
    turnover?: boolean
    dollar_vol?: boolean
    illiq?: boolean
    vol_vol?: boolean
    term_spread?: boolean
    credit_spread?: boolean
    cpi_growth?: boolean
    unrate?: boolean
    nfci?: boolean
    gdp_growth?: boolean
    target_return_60d?: boolean
  }, ExtArgs["result"]["factor_dataset"]>

  export type factor_datasetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    company_id?: boolean
    date?: boolean
    mom_1m?: boolean
    mom_3m?: boolean
    mom_6m?: boolean
    mom_12m?: boolean
    mom_skip1m?: boolean
    mom_acc?: boolean
    rev_1w?: boolean
    vol_3m?: boolean
    vol_12m?: boolean
    down_vol?: boolean
    beta?: boolean
    idio_vol?: boolean
    max_drawdown?: boolean
    earnings_yield?: boolean
    book_to_price?: boolean
    sales_to_price?: boolean
    cf_to_price?: boolean
    fcf_yield?: boolean
    ev_ebitda?: boolean
    ebitda_yield?: boolean
    roe?: boolean
    roa?: boolean
    gross_margin?: boolean
    op_margin?: boolean
    profit_stability?: boolean
    debt_to_equity?: boolean
    int_coverage?: boolean
    rev_growth?: boolean
    eps_growth?: boolean
    asset_growth?: boolean
    capex_growth?: boolean
    opinc_growth?: boolean
    sales_acc?: boolean
    capex_ratio?: boolean
    inventory_growth?: boolean
    accruals?: boolean
    turnover?: boolean
    dollar_vol?: boolean
    illiq?: boolean
    vol_vol?: boolean
    term_spread?: boolean
    credit_spread?: boolean
    cpi_growth?: boolean
    unrate?: boolean
    nfci?: boolean
    gdp_growth?: boolean
    target_return_60d?: boolean
  }, ExtArgs["result"]["factor_dataset"]>

  export type factor_datasetSelectScalar = {
    company_id?: boolean
    date?: boolean
    mom_1m?: boolean
    mom_3m?: boolean
    mom_6m?: boolean
    mom_12m?: boolean
    mom_skip1m?: boolean
    mom_acc?: boolean
    rev_1w?: boolean
    vol_3m?: boolean
    vol_12m?: boolean
    down_vol?: boolean
    beta?: boolean
    idio_vol?: boolean
    max_drawdown?: boolean
    earnings_yield?: boolean
    book_to_price?: boolean
    sales_to_price?: boolean
    cf_to_price?: boolean
    fcf_yield?: boolean
    ev_ebitda?: boolean
    ebitda_yield?: boolean
    roe?: boolean
    roa?: boolean
    gross_margin?: boolean
    op_margin?: boolean
    profit_stability?: boolean
    debt_to_equity?: boolean
    int_coverage?: boolean
    rev_growth?: boolean
    eps_growth?: boolean
    asset_growth?: boolean
    capex_growth?: boolean
    opinc_growth?: boolean
    sales_acc?: boolean
    capex_ratio?: boolean
    inventory_growth?: boolean
    accruals?: boolean
    turnover?: boolean
    dollar_vol?: boolean
    illiq?: boolean
    vol_vol?: boolean
    term_spread?: boolean
    credit_spread?: boolean
    cpi_growth?: boolean
    unrate?: boolean
    nfci?: boolean
    gdp_growth?: boolean
    target_return_60d?: boolean
  }

  export type factor_datasetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"company_id" | "date" | "mom_1m" | "mom_3m" | "mom_6m" | "mom_12m" | "mom_skip1m" | "mom_acc" | "rev_1w" | "vol_3m" | "vol_12m" | "down_vol" | "beta" | "idio_vol" | "max_drawdown" | "earnings_yield" | "book_to_price" | "sales_to_price" | "cf_to_price" | "fcf_yield" | "ev_ebitda" | "ebitda_yield" | "roe" | "roa" | "gross_margin" | "op_margin" | "profit_stability" | "debt_to_equity" | "int_coverage" | "rev_growth" | "eps_growth" | "asset_growth" | "capex_growth" | "opinc_growth" | "sales_acc" | "capex_ratio" | "inventory_growth" | "accruals" | "turnover" | "dollar_vol" | "illiq" | "vol_vol" | "term_spread" | "credit_spread" | "cpi_growth" | "unrate" | "nfci" | "gdp_growth" | "target_return_60d", ExtArgs["result"]["factor_dataset"]>

  export type $factor_datasetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "factor_dataset"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      company_id: bigint
      date: Date
      mom_1m: number | null
      mom_3m: number | null
      mom_6m: number | null
      mom_12m: number | null
      mom_skip1m: number | null
      mom_acc: number | null
      rev_1w: number | null
      vol_3m: number | null
      vol_12m: number | null
      down_vol: number | null
      beta: number | null
      idio_vol: number | null
      max_drawdown: number | null
      earnings_yield: number | null
      book_to_price: number | null
      sales_to_price: number | null
      cf_to_price: number | null
      fcf_yield: number | null
      ev_ebitda: number | null
      ebitda_yield: number | null
      roe: number | null
      roa: number | null
      gross_margin: number | null
      op_margin: number | null
      profit_stability: number | null
      debt_to_equity: number | null
      int_coverage: number | null
      rev_growth: number | null
      eps_growth: number | null
      asset_growth: number | null
      capex_growth: number | null
      opinc_growth: number | null
      sales_acc: number | null
      capex_ratio: number | null
      inventory_growth: number | null
      accruals: number | null
      turnover: number | null
      dollar_vol: number | null
      illiq: number | null
      vol_vol: number | null
      term_spread: number | null
      credit_spread: number | null
      cpi_growth: number | null
      unrate: number | null
      nfci: number | null
      gdp_growth: number | null
      target_return_60d: number | null
    }, ExtArgs["result"]["factor_dataset"]>
    composites: {}
  }

  type factor_datasetGetPayload<S extends boolean | null | undefined | factor_datasetDefaultArgs> = $Result.GetResult<Prisma.$factor_datasetPayload, S>

  type factor_datasetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<factor_datasetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Factor_datasetCountAggregateInputType | true
    }

  export interface factor_datasetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['factor_dataset'], meta: { name: 'factor_dataset' } }
    /**
     * Find zero or one Factor_dataset that matches the filter.
     * @param {factor_datasetFindUniqueArgs} args - Arguments to find a Factor_dataset
     * @example
     * // Get one Factor_dataset
     * const factor_dataset = await prisma.factor_dataset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends factor_datasetFindUniqueArgs>(args: SelectSubset<T, factor_datasetFindUniqueArgs<ExtArgs>>): Prisma__factor_datasetClient<$Result.GetResult<Prisma.$factor_datasetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Factor_dataset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {factor_datasetFindUniqueOrThrowArgs} args - Arguments to find a Factor_dataset
     * @example
     * // Get one Factor_dataset
     * const factor_dataset = await prisma.factor_dataset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends factor_datasetFindUniqueOrThrowArgs>(args: SelectSubset<T, factor_datasetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__factor_datasetClient<$Result.GetResult<Prisma.$factor_datasetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Factor_dataset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {factor_datasetFindFirstArgs} args - Arguments to find a Factor_dataset
     * @example
     * // Get one Factor_dataset
     * const factor_dataset = await prisma.factor_dataset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends factor_datasetFindFirstArgs>(args?: SelectSubset<T, factor_datasetFindFirstArgs<ExtArgs>>): Prisma__factor_datasetClient<$Result.GetResult<Prisma.$factor_datasetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Factor_dataset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {factor_datasetFindFirstOrThrowArgs} args - Arguments to find a Factor_dataset
     * @example
     * // Get one Factor_dataset
     * const factor_dataset = await prisma.factor_dataset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends factor_datasetFindFirstOrThrowArgs>(args?: SelectSubset<T, factor_datasetFindFirstOrThrowArgs<ExtArgs>>): Prisma__factor_datasetClient<$Result.GetResult<Prisma.$factor_datasetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Factor_datasets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {factor_datasetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Factor_datasets
     * const factor_datasets = await prisma.factor_dataset.findMany()
     * 
     * // Get first 10 Factor_datasets
     * const factor_datasets = await prisma.factor_dataset.findMany({ take: 10 })
     * 
     * // Only select the `company_id`
     * const factor_datasetWithCompany_idOnly = await prisma.factor_dataset.findMany({ select: { company_id: true } })
     * 
     */
    findMany<T extends factor_datasetFindManyArgs>(args?: SelectSubset<T, factor_datasetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$factor_datasetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Factor_dataset.
     * @param {factor_datasetCreateArgs} args - Arguments to create a Factor_dataset.
     * @example
     * // Create one Factor_dataset
     * const Factor_dataset = await prisma.factor_dataset.create({
     *   data: {
     *     // ... data to create a Factor_dataset
     *   }
     * })
     * 
     */
    create<T extends factor_datasetCreateArgs>(args: SelectSubset<T, factor_datasetCreateArgs<ExtArgs>>): Prisma__factor_datasetClient<$Result.GetResult<Prisma.$factor_datasetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Factor_datasets.
     * @param {factor_datasetCreateManyArgs} args - Arguments to create many Factor_datasets.
     * @example
     * // Create many Factor_datasets
     * const factor_dataset = await prisma.factor_dataset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends factor_datasetCreateManyArgs>(args?: SelectSubset<T, factor_datasetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Factor_datasets and returns the data saved in the database.
     * @param {factor_datasetCreateManyAndReturnArgs} args - Arguments to create many Factor_datasets.
     * @example
     * // Create many Factor_datasets
     * const factor_dataset = await prisma.factor_dataset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Factor_datasets and only return the `company_id`
     * const factor_datasetWithCompany_idOnly = await prisma.factor_dataset.createManyAndReturn({
     *   select: { company_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends factor_datasetCreateManyAndReturnArgs>(args?: SelectSubset<T, factor_datasetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$factor_datasetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Factor_dataset.
     * @param {factor_datasetDeleteArgs} args - Arguments to delete one Factor_dataset.
     * @example
     * // Delete one Factor_dataset
     * const Factor_dataset = await prisma.factor_dataset.delete({
     *   where: {
     *     // ... filter to delete one Factor_dataset
     *   }
     * })
     * 
     */
    delete<T extends factor_datasetDeleteArgs>(args: SelectSubset<T, factor_datasetDeleteArgs<ExtArgs>>): Prisma__factor_datasetClient<$Result.GetResult<Prisma.$factor_datasetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Factor_dataset.
     * @param {factor_datasetUpdateArgs} args - Arguments to update one Factor_dataset.
     * @example
     * // Update one Factor_dataset
     * const factor_dataset = await prisma.factor_dataset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends factor_datasetUpdateArgs>(args: SelectSubset<T, factor_datasetUpdateArgs<ExtArgs>>): Prisma__factor_datasetClient<$Result.GetResult<Prisma.$factor_datasetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Factor_datasets.
     * @param {factor_datasetDeleteManyArgs} args - Arguments to filter Factor_datasets to delete.
     * @example
     * // Delete a few Factor_datasets
     * const { count } = await prisma.factor_dataset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends factor_datasetDeleteManyArgs>(args?: SelectSubset<T, factor_datasetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Factor_datasets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {factor_datasetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Factor_datasets
     * const factor_dataset = await prisma.factor_dataset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends factor_datasetUpdateManyArgs>(args: SelectSubset<T, factor_datasetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Factor_datasets and returns the data updated in the database.
     * @param {factor_datasetUpdateManyAndReturnArgs} args - Arguments to update many Factor_datasets.
     * @example
     * // Update many Factor_datasets
     * const factor_dataset = await prisma.factor_dataset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Factor_datasets and only return the `company_id`
     * const factor_datasetWithCompany_idOnly = await prisma.factor_dataset.updateManyAndReturn({
     *   select: { company_id: true },
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
    updateManyAndReturn<T extends factor_datasetUpdateManyAndReturnArgs>(args: SelectSubset<T, factor_datasetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$factor_datasetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Factor_dataset.
     * @param {factor_datasetUpsertArgs} args - Arguments to update or create a Factor_dataset.
     * @example
     * // Update or create a Factor_dataset
     * const factor_dataset = await prisma.factor_dataset.upsert({
     *   create: {
     *     // ... data to create a Factor_dataset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Factor_dataset we want to update
     *   }
     * })
     */
    upsert<T extends factor_datasetUpsertArgs>(args: SelectSubset<T, factor_datasetUpsertArgs<ExtArgs>>): Prisma__factor_datasetClient<$Result.GetResult<Prisma.$factor_datasetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Factor_datasets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {factor_datasetCountArgs} args - Arguments to filter Factor_datasets to count.
     * @example
     * // Count the number of Factor_datasets
     * const count = await prisma.factor_dataset.count({
     *   where: {
     *     // ... the filter for the Factor_datasets we want to count
     *   }
     * })
    **/
    count<T extends factor_datasetCountArgs>(
      args?: Subset<T, factor_datasetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Factor_datasetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Factor_dataset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Factor_datasetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Factor_datasetAggregateArgs>(args: Subset<T, Factor_datasetAggregateArgs>): Prisma.PrismaPromise<GetFactor_datasetAggregateType<T>>

    /**
     * Group by Factor_dataset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {factor_datasetGroupByArgs} args - Group by arguments.
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
      T extends factor_datasetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: factor_datasetGroupByArgs['orderBy'] }
        : { orderBy?: factor_datasetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, factor_datasetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFactor_datasetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the factor_dataset model
   */
  readonly fields: factor_datasetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for factor_dataset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__factor_datasetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the factor_dataset model
   */
  interface factor_datasetFieldRefs {
    readonly company_id: FieldRef<"factor_dataset", 'BigInt'>
    readonly date: FieldRef<"factor_dataset", 'DateTime'>
    readonly mom_1m: FieldRef<"factor_dataset", 'Float'>
    readonly mom_3m: FieldRef<"factor_dataset", 'Float'>
    readonly mom_6m: FieldRef<"factor_dataset", 'Float'>
    readonly mom_12m: FieldRef<"factor_dataset", 'Float'>
    readonly mom_skip1m: FieldRef<"factor_dataset", 'Float'>
    readonly mom_acc: FieldRef<"factor_dataset", 'Float'>
    readonly rev_1w: FieldRef<"factor_dataset", 'Float'>
    readonly vol_3m: FieldRef<"factor_dataset", 'Float'>
    readonly vol_12m: FieldRef<"factor_dataset", 'Float'>
    readonly down_vol: FieldRef<"factor_dataset", 'Float'>
    readonly beta: FieldRef<"factor_dataset", 'Float'>
    readonly idio_vol: FieldRef<"factor_dataset", 'Float'>
    readonly max_drawdown: FieldRef<"factor_dataset", 'Float'>
    readonly earnings_yield: FieldRef<"factor_dataset", 'Float'>
    readonly book_to_price: FieldRef<"factor_dataset", 'Float'>
    readonly sales_to_price: FieldRef<"factor_dataset", 'Float'>
    readonly cf_to_price: FieldRef<"factor_dataset", 'Float'>
    readonly fcf_yield: FieldRef<"factor_dataset", 'Float'>
    readonly ev_ebitda: FieldRef<"factor_dataset", 'Float'>
    readonly ebitda_yield: FieldRef<"factor_dataset", 'Float'>
    readonly roe: FieldRef<"factor_dataset", 'Float'>
    readonly roa: FieldRef<"factor_dataset", 'Float'>
    readonly gross_margin: FieldRef<"factor_dataset", 'Float'>
    readonly op_margin: FieldRef<"factor_dataset", 'Float'>
    readonly profit_stability: FieldRef<"factor_dataset", 'Float'>
    readonly debt_to_equity: FieldRef<"factor_dataset", 'Float'>
    readonly int_coverage: FieldRef<"factor_dataset", 'Float'>
    readonly rev_growth: FieldRef<"factor_dataset", 'Float'>
    readonly eps_growth: FieldRef<"factor_dataset", 'Float'>
    readonly asset_growth: FieldRef<"factor_dataset", 'Float'>
    readonly capex_growth: FieldRef<"factor_dataset", 'Float'>
    readonly opinc_growth: FieldRef<"factor_dataset", 'Float'>
    readonly sales_acc: FieldRef<"factor_dataset", 'Float'>
    readonly capex_ratio: FieldRef<"factor_dataset", 'Float'>
    readonly inventory_growth: FieldRef<"factor_dataset", 'Float'>
    readonly accruals: FieldRef<"factor_dataset", 'Float'>
    readonly turnover: FieldRef<"factor_dataset", 'Float'>
    readonly dollar_vol: FieldRef<"factor_dataset", 'Float'>
    readonly illiq: FieldRef<"factor_dataset", 'Float'>
    readonly vol_vol: FieldRef<"factor_dataset", 'Float'>
    readonly term_spread: FieldRef<"factor_dataset", 'Float'>
    readonly credit_spread: FieldRef<"factor_dataset", 'Float'>
    readonly cpi_growth: FieldRef<"factor_dataset", 'Float'>
    readonly unrate: FieldRef<"factor_dataset", 'Float'>
    readonly nfci: FieldRef<"factor_dataset", 'Float'>
    readonly gdp_growth: FieldRef<"factor_dataset", 'Float'>
    readonly target_return_60d: FieldRef<"factor_dataset", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * factor_dataset findUnique
   */
  export type factor_datasetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the factor_dataset
     */
    select?: factor_datasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the factor_dataset
     */
    omit?: factor_datasetOmit<ExtArgs> | null
    /**
     * Filter, which factor_dataset to fetch.
     */
    where: factor_datasetWhereUniqueInput
  }

  /**
   * factor_dataset findUniqueOrThrow
   */
  export type factor_datasetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the factor_dataset
     */
    select?: factor_datasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the factor_dataset
     */
    omit?: factor_datasetOmit<ExtArgs> | null
    /**
     * Filter, which factor_dataset to fetch.
     */
    where: factor_datasetWhereUniqueInput
  }

  /**
   * factor_dataset findFirst
   */
  export type factor_datasetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the factor_dataset
     */
    select?: factor_datasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the factor_dataset
     */
    omit?: factor_datasetOmit<ExtArgs> | null
    /**
     * Filter, which factor_dataset to fetch.
     */
    where?: factor_datasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of factor_datasets to fetch.
     */
    orderBy?: factor_datasetOrderByWithRelationInput | factor_datasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for factor_datasets.
     */
    cursor?: factor_datasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` factor_datasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` factor_datasets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of factor_datasets.
     */
    distinct?: Factor_datasetScalarFieldEnum | Factor_datasetScalarFieldEnum[]
  }

  /**
   * factor_dataset findFirstOrThrow
   */
  export type factor_datasetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the factor_dataset
     */
    select?: factor_datasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the factor_dataset
     */
    omit?: factor_datasetOmit<ExtArgs> | null
    /**
     * Filter, which factor_dataset to fetch.
     */
    where?: factor_datasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of factor_datasets to fetch.
     */
    orderBy?: factor_datasetOrderByWithRelationInput | factor_datasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for factor_datasets.
     */
    cursor?: factor_datasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` factor_datasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` factor_datasets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of factor_datasets.
     */
    distinct?: Factor_datasetScalarFieldEnum | Factor_datasetScalarFieldEnum[]
  }

  /**
   * factor_dataset findMany
   */
  export type factor_datasetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the factor_dataset
     */
    select?: factor_datasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the factor_dataset
     */
    omit?: factor_datasetOmit<ExtArgs> | null
    /**
     * Filter, which factor_datasets to fetch.
     */
    where?: factor_datasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of factor_datasets to fetch.
     */
    orderBy?: factor_datasetOrderByWithRelationInput | factor_datasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing factor_datasets.
     */
    cursor?: factor_datasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` factor_datasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` factor_datasets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of factor_datasets.
     */
    distinct?: Factor_datasetScalarFieldEnum | Factor_datasetScalarFieldEnum[]
  }

  /**
   * factor_dataset create
   */
  export type factor_datasetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the factor_dataset
     */
    select?: factor_datasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the factor_dataset
     */
    omit?: factor_datasetOmit<ExtArgs> | null
    /**
     * The data needed to create a factor_dataset.
     */
    data: XOR<factor_datasetCreateInput, factor_datasetUncheckedCreateInput>
  }

  /**
   * factor_dataset createMany
   */
  export type factor_datasetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many factor_datasets.
     */
    data: factor_datasetCreateManyInput | factor_datasetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * factor_dataset createManyAndReturn
   */
  export type factor_datasetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the factor_dataset
     */
    select?: factor_datasetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the factor_dataset
     */
    omit?: factor_datasetOmit<ExtArgs> | null
    /**
     * The data used to create many factor_datasets.
     */
    data: factor_datasetCreateManyInput | factor_datasetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * factor_dataset update
   */
  export type factor_datasetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the factor_dataset
     */
    select?: factor_datasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the factor_dataset
     */
    omit?: factor_datasetOmit<ExtArgs> | null
    /**
     * The data needed to update a factor_dataset.
     */
    data: XOR<factor_datasetUpdateInput, factor_datasetUncheckedUpdateInput>
    /**
     * Choose, which factor_dataset to update.
     */
    where: factor_datasetWhereUniqueInput
  }

  /**
   * factor_dataset updateMany
   */
  export type factor_datasetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update factor_datasets.
     */
    data: XOR<factor_datasetUpdateManyMutationInput, factor_datasetUncheckedUpdateManyInput>
    /**
     * Filter which factor_datasets to update
     */
    where?: factor_datasetWhereInput
    /**
     * Limit how many factor_datasets to update.
     */
    limit?: number
  }

  /**
   * factor_dataset updateManyAndReturn
   */
  export type factor_datasetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the factor_dataset
     */
    select?: factor_datasetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the factor_dataset
     */
    omit?: factor_datasetOmit<ExtArgs> | null
    /**
     * The data used to update factor_datasets.
     */
    data: XOR<factor_datasetUpdateManyMutationInput, factor_datasetUncheckedUpdateManyInput>
    /**
     * Filter which factor_datasets to update
     */
    where?: factor_datasetWhereInput
    /**
     * Limit how many factor_datasets to update.
     */
    limit?: number
  }

  /**
   * factor_dataset upsert
   */
  export type factor_datasetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the factor_dataset
     */
    select?: factor_datasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the factor_dataset
     */
    omit?: factor_datasetOmit<ExtArgs> | null
    /**
     * The filter to search for the factor_dataset to update in case it exists.
     */
    where: factor_datasetWhereUniqueInput
    /**
     * In case the factor_dataset found by the `where` argument doesn't exist, create a new factor_dataset with this data.
     */
    create: XOR<factor_datasetCreateInput, factor_datasetUncheckedCreateInput>
    /**
     * In case the factor_dataset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<factor_datasetUpdateInput, factor_datasetUncheckedUpdateInput>
  }

  /**
   * factor_dataset delete
   */
  export type factor_datasetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the factor_dataset
     */
    select?: factor_datasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the factor_dataset
     */
    omit?: factor_datasetOmit<ExtArgs> | null
    /**
     * Filter which factor_dataset to delete.
     */
    where: factor_datasetWhereUniqueInput
  }

  /**
   * factor_dataset deleteMany
   */
  export type factor_datasetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which factor_datasets to delete
     */
    where?: factor_datasetWhereInput
    /**
     * Limit how many factor_datasets to delete.
     */
    limit?: number
  }

  /**
   * factor_dataset without action
   */
  export type factor_datasetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the factor_dataset
     */
    select?: factor_datasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the factor_dataset
     */
    omit?: factor_datasetOmit<ExtArgs> | null
  }


  /**
   * Model dim_company
   */

  export type AggregateDim_company = {
    _count: Dim_companyCountAggregateOutputType | null
    _avg: Dim_companyAvgAggregateOutputType | null
    _sum: Dim_companySumAggregateOutputType | null
    _min: Dim_companyMinAggregateOutputType | null
    _max: Dim_companyMaxAggregateOutputType | null
  }

  export type Dim_companyAvgAggregateOutputType = {
    company_id: number | null
    sic_code: number | null
  }

  export type Dim_companySumAggregateOutputType = {
    company_id: number | null
    sic_code: number | null
  }

  export type Dim_companyMinAggregateOutputType = {
    company_id: number | null
    cik: string | null
    ticker: string | null
    yf_ticker: string | null
    company_name: string | null
    exchange: string | null
    gics_sector: string | null
    gics_industry: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    sic_code: number | null
    sic_description: string | null
    fiscal_year_end: string | null
  }

  export type Dim_companyMaxAggregateOutputType = {
    company_id: number | null
    cik: string | null
    ticker: string | null
    yf_ticker: string | null
    company_name: string | null
    exchange: string | null
    gics_sector: string | null
    gics_industry: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    sic_code: number | null
    sic_description: string | null
    fiscal_year_end: string | null
  }

  export type Dim_companyCountAggregateOutputType = {
    company_id: number
    cik: number
    ticker: number
    yf_ticker: number
    company_name: number
    exchange: number
    gics_sector: number
    gics_industry: number
    is_active: number
    created_at: number
    updated_at: number
    sic_code: number
    sic_description: number
    fiscal_year_end: number
    _all: number
  }


  export type Dim_companyAvgAggregateInputType = {
    company_id?: true
    sic_code?: true
  }

  export type Dim_companySumAggregateInputType = {
    company_id?: true
    sic_code?: true
  }

  export type Dim_companyMinAggregateInputType = {
    company_id?: true
    cik?: true
    ticker?: true
    yf_ticker?: true
    company_name?: true
    exchange?: true
    gics_sector?: true
    gics_industry?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    sic_code?: true
    sic_description?: true
    fiscal_year_end?: true
  }

  export type Dim_companyMaxAggregateInputType = {
    company_id?: true
    cik?: true
    ticker?: true
    yf_ticker?: true
    company_name?: true
    exchange?: true
    gics_sector?: true
    gics_industry?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    sic_code?: true
    sic_description?: true
    fiscal_year_end?: true
  }

  export type Dim_companyCountAggregateInputType = {
    company_id?: true
    cik?: true
    ticker?: true
    yf_ticker?: true
    company_name?: true
    exchange?: true
    gics_sector?: true
    gics_industry?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    sic_code?: true
    sic_description?: true
    fiscal_year_end?: true
    _all?: true
  }

  export type Dim_companyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dim_company to aggregate.
     */
    where?: dim_companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dim_companies to fetch.
     */
    orderBy?: dim_companyOrderByWithRelationInput | dim_companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dim_companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dim_companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dim_companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dim_companies
    **/
    _count?: true | Dim_companyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Dim_companyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Dim_companySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Dim_companyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Dim_companyMaxAggregateInputType
  }

  export type GetDim_companyAggregateType<T extends Dim_companyAggregateArgs> = {
        [P in keyof T & keyof AggregateDim_company]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDim_company[P]>
      : GetScalarType<T[P], AggregateDim_company[P]>
  }




  export type dim_companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dim_companyWhereInput
    orderBy?: dim_companyOrderByWithAggregationInput | dim_companyOrderByWithAggregationInput[]
    by: Dim_companyScalarFieldEnum[] | Dim_companyScalarFieldEnum
    having?: dim_companyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Dim_companyCountAggregateInputType | true
    _avg?: Dim_companyAvgAggregateInputType
    _sum?: Dim_companySumAggregateInputType
    _min?: Dim_companyMinAggregateInputType
    _max?: Dim_companyMaxAggregateInputType
  }

  export type Dim_companyGroupByOutputType = {
    company_id: number
    cik: string
    ticker: string | null
    yf_ticker: string | null
    company_name: string
    exchange: string | null
    gics_sector: string | null
    gics_industry: string | null
    is_active: boolean
    created_at: Date
    updated_at: Date
    sic_code: number | null
    sic_description: string | null
    fiscal_year_end: string | null
    _count: Dim_companyCountAggregateOutputType | null
    _avg: Dim_companyAvgAggregateOutputType | null
    _sum: Dim_companySumAggregateOutputType | null
    _min: Dim_companyMinAggregateOutputType | null
    _max: Dim_companyMaxAggregateOutputType | null
  }

  type GetDim_companyGroupByPayload<T extends dim_companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Dim_companyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Dim_companyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Dim_companyGroupByOutputType[P]>
            : GetScalarType<T[P], Dim_companyGroupByOutputType[P]>
        }
      >
    >


  export type dim_companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    company_id?: boolean
    cik?: boolean
    ticker?: boolean
    yf_ticker?: boolean
    company_name?: boolean
    exchange?: boolean
    gics_sector?: boolean
    gics_industry?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    sic_code?: boolean
    sic_description?: boolean
    fiscal_year_end?: boolean
    fact_prices?: boolean | dim_company$fact_pricesArgs<ExtArgs>
    universe?: boolean | dim_company$universeArgs<ExtArgs>
    _count?: boolean | Dim_companyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dim_company"]>

  export type dim_companySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    company_id?: boolean
    cik?: boolean
    ticker?: boolean
    yf_ticker?: boolean
    company_name?: boolean
    exchange?: boolean
    gics_sector?: boolean
    gics_industry?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    sic_code?: boolean
    sic_description?: boolean
    fiscal_year_end?: boolean
  }, ExtArgs["result"]["dim_company"]>

  export type dim_companySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    company_id?: boolean
    cik?: boolean
    ticker?: boolean
    yf_ticker?: boolean
    company_name?: boolean
    exchange?: boolean
    gics_sector?: boolean
    gics_industry?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    sic_code?: boolean
    sic_description?: boolean
    fiscal_year_end?: boolean
  }, ExtArgs["result"]["dim_company"]>

  export type dim_companySelectScalar = {
    company_id?: boolean
    cik?: boolean
    ticker?: boolean
    yf_ticker?: boolean
    company_name?: boolean
    exchange?: boolean
    gics_sector?: boolean
    gics_industry?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    sic_code?: boolean
    sic_description?: boolean
    fiscal_year_end?: boolean
  }

  export type dim_companyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"company_id" | "cik" | "ticker" | "yf_ticker" | "company_name" | "exchange" | "gics_sector" | "gics_industry" | "is_active" | "created_at" | "updated_at" | "sic_code" | "sic_description" | "fiscal_year_end", ExtArgs["result"]["dim_company"]>
  export type dim_companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fact_prices?: boolean | dim_company$fact_pricesArgs<ExtArgs>
    universe?: boolean | dim_company$universeArgs<ExtArgs>
    _count?: boolean | Dim_companyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type dim_companyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type dim_companyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $dim_companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "dim_company"
    objects: {
      fact_prices: Prisma.$fact_pricesPayload<ExtArgs>[]
      universe: Prisma.$universePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      company_id: number
      cik: string
      ticker: string | null
      yf_ticker: string | null
      company_name: string
      exchange: string | null
      gics_sector: string | null
      gics_industry: string | null
      is_active: boolean
      created_at: Date
      updated_at: Date
      sic_code: number | null
      sic_description: string | null
      fiscal_year_end: string | null
    }, ExtArgs["result"]["dim_company"]>
    composites: {}
  }

  type dim_companyGetPayload<S extends boolean | null | undefined | dim_companyDefaultArgs> = $Result.GetResult<Prisma.$dim_companyPayload, S>

  type dim_companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<dim_companyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Dim_companyCountAggregateInputType | true
    }

  export interface dim_companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['dim_company'], meta: { name: 'dim_company' } }
    /**
     * Find zero or one Dim_company that matches the filter.
     * @param {dim_companyFindUniqueArgs} args - Arguments to find a Dim_company
     * @example
     * // Get one Dim_company
     * const dim_company = await prisma.dim_company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends dim_companyFindUniqueArgs>(args: SelectSubset<T, dim_companyFindUniqueArgs<ExtArgs>>): Prisma__dim_companyClient<$Result.GetResult<Prisma.$dim_companyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dim_company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {dim_companyFindUniqueOrThrowArgs} args - Arguments to find a Dim_company
     * @example
     * // Get one Dim_company
     * const dim_company = await prisma.dim_company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends dim_companyFindUniqueOrThrowArgs>(args: SelectSubset<T, dim_companyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__dim_companyClient<$Result.GetResult<Prisma.$dim_companyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dim_company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dim_companyFindFirstArgs} args - Arguments to find a Dim_company
     * @example
     * // Get one Dim_company
     * const dim_company = await prisma.dim_company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends dim_companyFindFirstArgs>(args?: SelectSubset<T, dim_companyFindFirstArgs<ExtArgs>>): Prisma__dim_companyClient<$Result.GetResult<Prisma.$dim_companyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dim_company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dim_companyFindFirstOrThrowArgs} args - Arguments to find a Dim_company
     * @example
     * // Get one Dim_company
     * const dim_company = await prisma.dim_company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends dim_companyFindFirstOrThrowArgs>(args?: SelectSubset<T, dim_companyFindFirstOrThrowArgs<ExtArgs>>): Prisma__dim_companyClient<$Result.GetResult<Prisma.$dim_companyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dim_companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dim_companyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dim_companies
     * const dim_companies = await prisma.dim_company.findMany()
     * 
     * // Get first 10 Dim_companies
     * const dim_companies = await prisma.dim_company.findMany({ take: 10 })
     * 
     * // Only select the `company_id`
     * const dim_companyWithCompany_idOnly = await prisma.dim_company.findMany({ select: { company_id: true } })
     * 
     */
    findMany<T extends dim_companyFindManyArgs>(args?: SelectSubset<T, dim_companyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dim_companyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dim_company.
     * @param {dim_companyCreateArgs} args - Arguments to create a Dim_company.
     * @example
     * // Create one Dim_company
     * const Dim_company = await prisma.dim_company.create({
     *   data: {
     *     // ... data to create a Dim_company
     *   }
     * })
     * 
     */
    create<T extends dim_companyCreateArgs>(args: SelectSubset<T, dim_companyCreateArgs<ExtArgs>>): Prisma__dim_companyClient<$Result.GetResult<Prisma.$dim_companyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dim_companies.
     * @param {dim_companyCreateManyArgs} args - Arguments to create many Dim_companies.
     * @example
     * // Create many Dim_companies
     * const dim_company = await prisma.dim_company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends dim_companyCreateManyArgs>(args?: SelectSubset<T, dim_companyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dim_companies and returns the data saved in the database.
     * @param {dim_companyCreateManyAndReturnArgs} args - Arguments to create many Dim_companies.
     * @example
     * // Create many Dim_companies
     * const dim_company = await prisma.dim_company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dim_companies and only return the `company_id`
     * const dim_companyWithCompany_idOnly = await prisma.dim_company.createManyAndReturn({
     *   select: { company_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends dim_companyCreateManyAndReturnArgs>(args?: SelectSubset<T, dim_companyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dim_companyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dim_company.
     * @param {dim_companyDeleteArgs} args - Arguments to delete one Dim_company.
     * @example
     * // Delete one Dim_company
     * const Dim_company = await prisma.dim_company.delete({
     *   where: {
     *     // ... filter to delete one Dim_company
     *   }
     * })
     * 
     */
    delete<T extends dim_companyDeleteArgs>(args: SelectSubset<T, dim_companyDeleteArgs<ExtArgs>>): Prisma__dim_companyClient<$Result.GetResult<Prisma.$dim_companyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dim_company.
     * @param {dim_companyUpdateArgs} args - Arguments to update one Dim_company.
     * @example
     * // Update one Dim_company
     * const dim_company = await prisma.dim_company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends dim_companyUpdateArgs>(args: SelectSubset<T, dim_companyUpdateArgs<ExtArgs>>): Prisma__dim_companyClient<$Result.GetResult<Prisma.$dim_companyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dim_companies.
     * @param {dim_companyDeleteManyArgs} args - Arguments to filter Dim_companies to delete.
     * @example
     * // Delete a few Dim_companies
     * const { count } = await prisma.dim_company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends dim_companyDeleteManyArgs>(args?: SelectSubset<T, dim_companyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dim_companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dim_companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dim_companies
     * const dim_company = await prisma.dim_company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends dim_companyUpdateManyArgs>(args: SelectSubset<T, dim_companyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dim_companies and returns the data updated in the database.
     * @param {dim_companyUpdateManyAndReturnArgs} args - Arguments to update many Dim_companies.
     * @example
     * // Update many Dim_companies
     * const dim_company = await prisma.dim_company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dim_companies and only return the `company_id`
     * const dim_companyWithCompany_idOnly = await prisma.dim_company.updateManyAndReturn({
     *   select: { company_id: true },
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
    updateManyAndReturn<T extends dim_companyUpdateManyAndReturnArgs>(args: SelectSubset<T, dim_companyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dim_companyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dim_company.
     * @param {dim_companyUpsertArgs} args - Arguments to update or create a Dim_company.
     * @example
     * // Update or create a Dim_company
     * const dim_company = await prisma.dim_company.upsert({
     *   create: {
     *     // ... data to create a Dim_company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dim_company we want to update
     *   }
     * })
     */
    upsert<T extends dim_companyUpsertArgs>(args: SelectSubset<T, dim_companyUpsertArgs<ExtArgs>>): Prisma__dim_companyClient<$Result.GetResult<Prisma.$dim_companyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dim_companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dim_companyCountArgs} args - Arguments to filter Dim_companies to count.
     * @example
     * // Count the number of Dim_companies
     * const count = await prisma.dim_company.count({
     *   where: {
     *     // ... the filter for the Dim_companies we want to count
     *   }
     * })
    **/
    count<T extends dim_companyCountArgs>(
      args?: Subset<T, dim_companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Dim_companyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dim_company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dim_companyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Dim_companyAggregateArgs>(args: Subset<T, Dim_companyAggregateArgs>): Prisma.PrismaPromise<GetDim_companyAggregateType<T>>

    /**
     * Group by Dim_company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dim_companyGroupByArgs} args - Group by arguments.
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
      T extends dim_companyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: dim_companyGroupByArgs['orderBy'] }
        : { orderBy?: dim_companyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, dim_companyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDim_companyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the dim_company model
   */
  readonly fields: dim_companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for dim_company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__dim_companyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fact_prices<T extends dim_company$fact_pricesArgs<ExtArgs> = {}>(args?: Subset<T, dim_company$fact_pricesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fact_pricesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    universe<T extends dim_company$universeArgs<ExtArgs> = {}>(args?: Subset<T, dim_company$universeArgs<ExtArgs>>): Prisma__universeClient<$Result.GetResult<Prisma.$universePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the dim_company model
   */
  interface dim_companyFieldRefs {
    readonly company_id: FieldRef<"dim_company", 'Int'>
    readonly cik: FieldRef<"dim_company", 'String'>
    readonly ticker: FieldRef<"dim_company", 'String'>
    readonly yf_ticker: FieldRef<"dim_company", 'String'>
    readonly company_name: FieldRef<"dim_company", 'String'>
    readonly exchange: FieldRef<"dim_company", 'String'>
    readonly gics_sector: FieldRef<"dim_company", 'String'>
    readonly gics_industry: FieldRef<"dim_company", 'String'>
    readonly is_active: FieldRef<"dim_company", 'Boolean'>
    readonly created_at: FieldRef<"dim_company", 'DateTime'>
    readonly updated_at: FieldRef<"dim_company", 'DateTime'>
    readonly sic_code: FieldRef<"dim_company", 'Int'>
    readonly sic_description: FieldRef<"dim_company", 'String'>
    readonly fiscal_year_end: FieldRef<"dim_company", 'String'>
  }
    

  // Custom InputTypes
  /**
   * dim_company findUnique
   */
  export type dim_companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_company
     */
    select?: dim_companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_company
     */
    omit?: dim_companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_companyInclude<ExtArgs> | null
    /**
     * Filter, which dim_company to fetch.
     */
    where: dim_companyWhereUniqueInput
  }

  /**
   * dim_company findUniqueOrThrow
   */
  export type dim_companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_company
     */
    select?: dim_companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_company
     */
    omit?: dim_companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_companyInclude<ExtArgs> | null
    /**
     * Filter, which dim_company to fetch.
     */
    where: dim_companyWhereUniqueInput
  }

  /**
   * dim_company findFirst
   */
  export type dim_companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_company
     */
    select?: dim_companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_company
     */
    omit?: dim_companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_companyInclude<ExtArgs> | null
    /**
     * Filter, which dim_company to fetch.
     */
    where?: dim_companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dim_companies to fetch.
     */
    orderBy?: dim_companyOrderByWithRelationInput | dim_companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dim_companies.
     */
    cursor?: dim_companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dim_companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dim_companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dim_companies.
     */
    distinct?: Dim_companyScalarFieldEnum | Dim_companyScalarFieldEnum[]
  }

  /**
   * dim_company findFirstOrThrow
   */
  export type dim_companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_company
     */
    select?: dim_companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_company
     */
    omit?: dim_companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_companyInclude<ExtArgs> | null
    /**
     * Filter, which dim_company to fetch.
     */
    where?: dim_companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dim_companies to fetch.
     */
    orderBy?: dim_companyOrderByWithRelationInput | dim_companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dim_companies.
     */
    cursor?: dim_companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dim_companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dim_companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dim_companies.
     */
    distinct?: Dim_companyScalarFieldEnum | Dim_companyScalarFieldEnum[]
  }

  /**
   * dim_company findMany
   */
  export type dim_companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_company
     */
    select?: dim_companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_company
     */
    omit?: dim_companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_companyInclude<ExtArgs> | null
    /**
     * Filter, which dim_companies to fetch.
     */
    where?: dim_companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dim_companies to fetch.
     */
    orderBy?: dim_companyOrderByWithRelationInput | dim_companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dim_companies.
     */
    cursor?: dim_companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dim_companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dim_companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dim_companies.
     */
    distinct?: Dim_companyScalarFieldEnum | Dim_companyScalarFieldEnum[]
  }

  /**
   * dim_company create
   */
  export type dim_companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_company
     */
    select?: dim_companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_company
     */
    omit?: dim_companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_companyInclude<ExtArgs> | null
    /**
     * The data needed to create a dim_company.
     */
    data: XOR<dim_companyCreateInput, dim_companyUncheckedCreateInput>
  }

  /**
   * dim_company createMany
   */
  export type dim_companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many dim_companies.
     */
    data: dim_companyCreateManyInput | dim_companyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dim_company createManyAndReturn
   */
  export type dim_companyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_company
     */
    select?: dim_companySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the dim_company
     */
    omit?: dim_companyOmit<ExtArgs> | null
    /**
     * The data used to create many dim_companies.
     */
    data: dim_companyCreateManyInput | dim_companyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dim_company update
   */
  export type dim_companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_company
     */
    select?: dim_companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_company
     */
    omit?: dim_companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_companyInclude<ExtArgs> | null
    /**
     * The data needed to update a dim_company.
     */
    data: XOR<dim_companyUpdateInput, dim_companyUncheckedUpdateInput>
    /**
     * Choose, which dim_company to update.
     */
    where: dim_companyWhereUniqueInput
  }

  /**
   * dim_company updateMany
   */
  export type dim_companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update dim_companies.
     */
    data: XOR<dim_companyUpdateManyMutationInput, dim_companyUncheckedUpdateManyInput>
    /**
     * Filter which dim_companies to update
     */
    where?: dim_companyWhereInput
    /**
     * Limit how many dim_companies to update.
     */
    limit?: number
  }

  /**
   * dim_company updateManyAndReturn
   */
  export type dim_companyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_company
     */
    select?: dim_companySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the dim_company
     */
    omit?: dim_companyOmit<ExtArgs> | null
    /**
     * The data used to update dim_companies.
     */
    data: XOR<dim_companyUpdateManyMutationInput, dim_companyUncheckedUpdateManyInput>
    /**
     * Filter which dim_companies to update
     */
    where?: dim_companyWhereInput
    /**
     * Limit how many dim_companies to update.
     */
    limit?: number
  }

  /**
   * dim_company upsert
   */
  export type dim_companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_company
     */
    select?: dim_companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_company
     */
    omit?: dim_companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_companyInclude<ExtArgs> | null
    /**
     * The filter to search for the dim_company to update in case it exists.
     */
    where: dim_companyWhereUniqueInput
    /**
     * In case the dim_company found by the `where` argument doesn't exist, create a new dim_company with this data.
     */
    create: XOR<dim_companyCreateInput, dim_companyUncheckedCreateInput>
    /**
     * In case the dim_company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dim_companyUpdateInput, dim_companyUncheckedUpdateInput>
  }

  /**
   * dim_company delete
   */
  export type dim_companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_company
     */
    select?: dim_companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_company
     */
    omit?: dim_companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_companyInclude<ExtArgs> | null
    /**
     * Filter which dim_company to delete.
     */
    where: dim_companyWhereUniqueInput
  }

  /**
   * dim_company deleteMany
   */
  export type dim_companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dim_companies to delete
     */
    where?: dim_companyWhereInput
    /**
     * Limit how many dim_companies to delete.
     */
    limit?: number
  }

  /**
   * dim_company.fact_prices
   */
  export type dim_company$fact_pricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fact_prices
     */
    select?: fact_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fact_prices
     */
    omit?: fact_pricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fact_pricesInclude<ExtArgs> | null
    where?: fact_pricesWhereInput
    orderBy?: fact_pricesOrderByWithRelationInput | fact_pricesOrderByWithRelationInput[]
    cursor?: fact_pricesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Fact_pricesScalarFieldEnum | Fact_pricesScalarFieldEnum[]
  }

  /**
   * dim_company.universe
   */
  export type dim_company$universeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the universe
     */
    select?: universeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the universe
     */
    omit?: universeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: universeInclude<ExtArgs> | null
    where?: universeWhereInput
  }

  /**
   * dim_company without action
   */
  export type dim_companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_company
     */
    select?: dim_companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_company
     */
    omit?: dim_companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dim_companyInclude<ExtArgs> | null
  }


  /**
   * Model dim_date
   */

  export type AggregateDim_date = {
    _count: Dim_dateCountAggregateOutputType | null
    _avg: Dim_dateAvgAggregateOutputType | null
    _sum: Dim_dateSumAggregateOutputType | null
    _min: Dim_dateMinAggregateOutputType | null
    _max: Dim_dateMaxAggregateOutputType | null
  }

  export type Dim_dateAvgAggregateOutputType = {
    date_id: number | null
    year: number | null
    quarter: number | null
    month: number | null
    week_of_year: number | null
    day_of_month: number | null
    day_of_week: number | null
    fiscal_year: number | null
    fiscal_quarter: number | null
  }

  export type Dim_dateSumAggregateOutputType = {
    date_id: number | null
    year: number | null
    quarter: number | null
    month: number | null
    week_of_year: number | null
    day_of_month: number | null
    day_of_week: number | null
    fiscal_year: number | null
    fiscal_quarter: number | null
  }

  export type Dim_dateMinAggregateOutputType = {
    date_id: number | null
    date: Date | null
    year: number | null
    quarter: number | null
    month: number | null
    month_name: string | null
    week_of_year: number | null
    day_of_month: number | null
    day_of_week: number | null
    day_name: string | null
    is_weekend: boolean | null
    is_trading_day: boolean | null
    is_trading_month_end: boolean | null
    fiscal_year: number | null
    fiscal_quarter: number | null
  }

  export type Dim_dateMaxAggregateOutputType = {
    date_id: number | null
    date: Date | null
    year: number | null
    quarter: number | null
    month: number | null
    month_name: string | null
    week_of_year: number | null
    day_of_month: number | null
    day_of_week: number | null
    day_name: string | null
    is_weekend: boolean | null
    is_trading_day: boolean | null
    is_trading_month_end: boolean | null
    fiscal_year: number | null
    fiscal_quarter: number | null
  }

  export type Dim_dateCountAggregateOutputType = {
    date_id: number
    date: number
    year: number
    quarter: number
    month: number
    month_name: number
    week_of_year: number
    day_of_month: number
    day_of_week: number
    day_name: number
    is_weekend: number
    is_trading_day: number
    is_trading_month_end: number
    fiscal_year: number
    fiscal_quarter: number
    _all: number
  }


  export type Dim_dateAvgAggregateInputType = {
    date_id?: true
    year?: true
    quarter?: true
    month?: true
    week_of_year?: true
    day_of_month?: true
    day_of_week?: true
    fiscal_year?: true
    fiscal_quarter?: true
  }

  export type Dim_dateSumAggregateInputType = {
    date_id?: true
    year?: true
    quarter?: true
    month?: true
    week_of_year?: true
    day_of_month?: true
    day_of_week?: true
    fiscal_year?: true
    fiscal_quarter?: true
  }

  export type Dim_dateMinAggregateInputType = {
    date_id?: true
    date?: true
    year?: true
    quarter?: true
    month?: true
    month_name?: true
    week_of_year?: true
    day_of_month?: true
    day_of_week?: true
    day_name?: true
    is_weekend?: true
    is_trading_day?: true
    is_trading_month_end?: true
    fiscal_year?: true
    fiscal_quarter?: true
  }

  export type Dim_dateMaxAggregateInputType = {
    date_id?: true
    date?: true
    year?: true
    quarter?: true
    month?: true
    month_name?: true
    week_of_year?: true
    day_of_month?: true
    day_of_week?: true
    day_name?: true
    is_weekend?: true
    is_trading_day?: true
    is_trading_month_end?: true
    fiscal_year?: true
    fiscal_quarter?: true
  }

  export type Dim_dateCountAggregateInputType = {
    date_id?: true
    date?: true
    year?: true
    quarter?: true
    month?: true
    month_name?: true
    week_of_year?: true
    day_of_month?: true
    day_of_week?: true
    day_name?: true
    is_weekend?: true
    is_trading_day?: true
    is_trading_month_end?: true
    fiscal_year?: true
    fiscal_quarter?: true
    _all?: true
  }

  export type Dim_dateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dim_date to aggregate.
     */
    where?: dim_dateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dim_dates to fetch.
     */
    orderBy?: dim_dateOrderByWithRelationInput | dim_dateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dim_dateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dim_dates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dim_dates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dim_dates
    **/
    _count?: true | Dim_dateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Dim_dateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Dim_dateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Dim_dateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Dim_dateMaxAggregateInputType
  }

  export type GetDim_dateAggregateType<T extends Dim_dateAggregateArgs> = {
        [P in keyof T & keyof AggregateDim_date]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDim_date[P]>
      : GetScalarType<T[P], AggregateDim_date[P]>
  }




  export type dim_dateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dim_dateWhereInput
    orderBy?: dim_dateOrderByWithAggregationInput | dim_dateOrderByWithAggregationInput[]
    by: Dim_dateScalarFieldEnum[] | Dim_dateScalarFieldEnum
    having?: dim_dateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Dim_dateCountAggregateInputType | true
    _avg?: Dim_dateAvgAggregateInputType
    _sum?: Dim_dateSumAggregateInputType
    _min?: Dim_dateMinAggregateInputType
    _max?: Dim_dateMaxAggregateInputType
  }

  export type Dim_dateGroupByOutputType = {
    date_id: number
    date: Date
    year: number
    quarter: number
    month: number
    month_name: string
    week_of_year: number
    day_of_month: number
    day_of_week: number
    day_name: string
    is_weekend: boolean
    is_trading_day: boolean
    is_trading_month_end: boolean
    fiscal_year: number | null
    fiscal_quarter: number | null
    _count: Dim_dateCountAggregateOutputType | null
    _avg: Dim_dateAvgAggregateOutputType | null
    _sum: Dim_dateSumAggregateOutputType | null
    _min: Dim_dateMinAggregateOutputType | null
    _max: Dim_dateMaxAggregateOutputType | null
  }

  type GetDim_dateGroupByPayload<T extends dim_dateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Dim_dateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Dim_dateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Dim_dateGroupByOutputType[P]>
            : GetScalarType<T[P], Dim_dateGroupByOutputType[P]>
        }
      >
    >


  export type dim_dateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    date_id?: boolean
    date?: boolean
    year?: boolean
    quarter?: boolean
    month?: boolean
    month_name?: boolean
    week_of_year?: boolean
    day_of_month?: boolean
    day_of_week?: boolean
    day_name?: boolean
    is_weekend?: boolean
    is_trading_day?: boolean
    is_trading_month_end?: boolean
    fiscal_year?: boolean
    fiscal_quarter?: boolean
  }, ExtArgs["result"]["dim_date"]>

  export type dim_dateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    date_id?: boolean
    date?: boolean
    year?: boolean
    quarter?: boolean
    month?: boolean
    month_name?: boolean
    week_of_year?: boolean
    day_of_month?: boolean
    day_of_week?: boolean
    day_name?: boolean
    is_weekend?: boolean
    is_trading_day?: boolean
    is_trading_month_end?: boolean
    fiscal_year?: boolean
    fiscal_quarter?: boolean
  }, ExtArgs["result"]["dim_date"]>

  export type dim_dateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    date_id?: boolean
    date?: boolean
    year?: boolean
    quarter?: boolean
    month?: boolean
    month_name?: boolean
    week_of_year?: boolean
    day_of_month?: boolean
    day_of_week?: boolean
    day_name?: boolean
    is_weekend?: boolean
    is_trading_day?: boolean
    is_trading_month_end?: boolean
    fiscal_year?: boolean
    fiscal_quarter?: boolean
  }, ExtArgs["result"]["dim_date"]>

  export type dim_dateSelectScalar = {
    date_id?: boolean
    date?: boolean
    year?: boolean
    quarter?: boolean
    month?: boolean
    month_name?: boolean
    week_of_year?: boolean
    day_of_month?: boolean
    day_of_week?: boolean
    day_name?: boolean
    is_weekend?: boolean
    is_trading_day?: boolean
    is_trading_month_end?: boolean
    fiscal_year?: boolean
    fiscal_quarter?: boolean
  }

  export type dim_dateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"date_id" | "date" | "year" | "quarter" | "month" | "month_name" | "week_of_year" | "day_of_month" | "day_of_week" | "day_name" | "is_weekend" | "is_trading_day" | "is_trading_month_end" | "fiscal_year" | "fiscal_quarter", ExtArgs["result"]["dim_date"]>

  export type $dim_datePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "dim_date"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      date_id: number
      date: Date
      year: number
      quarter: number
      month: number
      month_name: string
      week_of_year: number
      day_of_month: number
      day_of_week: number
      day_name: string
      is_weekend: boolean
      is_trading_day: boolean
      is_trading_month_end: boolean
      fiscal_year: number | null
      fiscal_quarter: number | null
    }, ExtArgs["result"]["dim_date"]>
    composites: {}
  }

  type dim_dateGetPayload<S extends boolean | null | undefined | dim_dateDefaultArgs> = $Result.GetResult<Prisma.$dim_datePayload, S>

  type dim_dateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<dim_dateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Dim_dateCountAggregateInputType | true
    }

  export interface dim_dateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['dim_date'], meta: { name: 'dim_date' } }
    /**
     * Find zero or one Dim_date that matches the filter.
     * @param {dim_dateFindUniqueArgs} args - Arguments to find a Dim_date
     * @example
     * // Get one Dim_date
     * const dim_date = await prisma.dim_date.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends dim_dateFindUniqueArgs>(args: SelectSubset<T, dim_dateFindUniqueArgs<ExtArgs>>): Prisma__dim_dateClient<$Result.GetResult<Prisma.$dim_datePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dim_date that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {dim_dateFindUniqueOrThrowArgs} args - Arguments to find a Dim_date
     * @example
     * // Get one Dim_date
     * const dim_date = await prisma.dim_date.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends dim_dateFindUniqueOrThrowArgs>(args: SelectSubset<T, dim_dateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__dim_dateClient<$Result.GetResult<Prisma.$dim_datePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dim_date that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dim_dateFindFirstArgs} args - Arguments to find a Dim_date
     * @example
     * // Get one Dim_date
     * const dim_date = await prisma.dim_date.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends dim_dateFindFirstArgs>(args?: SelectSubset<T, dim_dateFindFirstArgs<ExtArgs>>): Prisma__dim_dateClient<$Result.GetResult<Prisma.$dim_datePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dim_date that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dim_dateFindFirstOrThrowArgs} args - Arguments to find a Dim_date
     * @example
     * // Get one Dim_date
     * const dim_date = await prisma.dim_date.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends dim_dateFindFirstOrThrowArgs>(args?: SelectSubset<T, dim_dateFindFirstOrThrowArgs<ExtArgs>>): Prisma__dim_dateClient<$Result.GetResult<Prisma.$dim_datePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dim_dates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dim_dateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dim_dates
     * const dim_dates = await prisma.dim_date.findMany()
     * 
     * // Get first 10 Dim_dates
     * const dim_dates = await prisma.dim_date.findMany({ take: 10 })
     * 
     * // Only select the `date_id`
     * const dim_dateWithDate_idOnly = await prisma.dim_date.findMany({ select: { date_id: true } })
     * 
     */
    findMany<T extends dim_dateFindManyArgs>(args?: SelectSubset<T, dim_dateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dim_datePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dim_date.
     * @param {dim_dateCreateArgs} args - Arguments to create a Dim_date.
     * @example
     * // Create one Dim_date
     * const Dim_date = await prisma.dim_date.create({
     *   data: {
     *     // ... data to create a Dim_date
     *   }
     * })
     * 
     */
    create<T extends dim_dateCreateArgs>(args: SelectSubset<T, dim_dateCreateArgs<ExtArgs>>): Prisma__dim_dateClient<$Result.GetResult<Prisma.$dim_datePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dim_dates.
     * @param {dim_dateCreateManyArgs} args - Arguments to create many Dim_dates.
     * @example
     * // Create many Dim_dates
     * const dim_date = await prisma.dim_date.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends dim_dateCreateManyArgs>(args?: SelectSubset<T, dim_dateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dim_dates and returns the data saved in the database.
     * @param {dim_dateCreateManyAndReturnArgs} args - Arguments to create many Dim_dates.
     * @example
     * // Create many Dim_dates
     * const dim_date = await prisma.dim_date.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dim_dates and only return the `date_id`
     * const dim_dateWithDate_idOnly = await prisma.dim_date.createManyAndReturn({
     *   select: { date_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends dim_dateCreateManyAndReturnArgs>(args?: SelectSubset<T, dim_dateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dim_datePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dim_date.
     * @param {dim_dateDeleteArgs} args - Arguments to delete one Dim_date.
     * @example
     * // Delete one Dim_date
     * const Dim_date = await prisma.dim_date.delete({
     *   where: {
     *     // ... filter to delete one Dim_date
     *   }
     * })
     * 
     */
    delete<T extends dim_dateDeleteArgs>(args: SelectSubset<T, dim_dateDeleteArgs<ExtArgs>>): Prisma__dim_dateClient<$Result.GetResult<Prisma.$dim_datePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dim_date.
     * @param {dim_dateUpdateArgs} args - Arguments to update one Dim_date.
     * @example
     * // Update one Dim_date
     * const dim_date = await prisma.dim_date.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends dim_dateUpdateArgs>(args: SelectSubset<T, dim_dateUpdateArgs<ExtArgs>>): Prisma__dim_dateClient<$Result.GetResult<Prisma.$dim_datePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dim_dates.
     * @param {dim_dateDeleteManyArgs} args - Arguments to filter Dim_dates to delete.
     * @example
     * // Delete a few Dim_dates
     * const { count } = await prisma.dim_date.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends dim_dateDeleteManyArgs>(args?: SelectSubset<T, dim_dateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dim_dates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dim_dateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dim_dates
     * const dim_date = await prisma.dim_date.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends dim_dateUpdateManyArgs>(args: SelectSubset<T, dim_dateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dim_dates and returns the data updated in the database.
     * @param {dim_dateUpdateManyAndReturnArgs} args - Arguments to update many Dim_dates.
     * @example
     * // Update many Dim_dates
     * const dim_date = await prisma.dim_date.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dim_dates and only return the `date_id`
     * const dim_dateWithDate_idOnly = await prisma.dim_date.updateManyAndReturn({
     *   select: { date_id: true },
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
    updateManyAndReturn<T extends dim_dateUpdateManyAndReturnArgs>(args: SelectSubset<T, dim_dateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dim_datePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dim_date.
     * @param {dim_dateUpsertArgs} args - Arguments to update or create a Dim_date.
     * @example
     * // Update or create a Dim_date
     * const dim_date = await prisma.dim_date.upsert({
     *   create: {
     *     // ... data to create a Dim_date
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dim_date we want to update
     *   }
     * })
     */
    upsert<T extends dim_dateUpsertArgs>(args: SelectSubset<T, dim_dateUpsertArgs<ExtArgs>>): Prisma__dim_dateClient<$Result.GetResult<Prisma.$dim_datePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dim_dates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dim_dateCountArgs} args - Arguments to filter Dim_dates to count.
     * @example
     * // Count the number of Dim_dates
     * const count = await prisma.dim_date.count({
     *   where: {
     *     // ... the filter for the Dim_dates we want to count
     *   }
     * })
    **/
    count<T extends dim_dateCountArgs>(
      args?: Subset<T, dim_dateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Dim_dateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dim_date.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dim_dateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Dim_dateAggregateArgs>(args: Subset<T, Dim_dateAggregateArgs>): Prisma.PrismaPromise<GetDim_dateAggregateType<T>>

    /**
     * Group by Dim_date.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dim_dateGroupByArgs} args - Group by arguments.
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
      T extends dim_dateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: dim_dateGroupByArgs['orderBy'] }
        : { orderBy?: dim_dateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, dim_dateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDim_dateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the dim_date model
   */
  readonly fields: dim_dateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for dim_date.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__dim_dateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the dim_date model
   */
  interface dim_dateFieldRefs {
    readonly date_id: FieldRef<"dim_date", 'Int'>
    readonly date: FieldRef<"dim_date", 'DateTime'>
    readonly year: FieldRef<"dim_date", 'Int'>
    readonly quarter: FieldRef<"dim_date", 'Int'>
    readonly month: FieldRef<"dim_date", 'Int'>
    readonly month_name: FieldRef<"dim_date", 'String'>
    readonly week_of_year: FieldRef<"dim_date", 'Int'>
    readonly day_of_month: FieldRef<"dim_date", 'Int'>
    readonly day_of_week: FieldRef<"dim_date", 'Int'>
    readonly day_name: FieldRef<"dim_date", 'String'>
    readonly is_weekend: FieldRef<"dim_date", 'Boolean'>
    readonly is_trading_day: FieldRef<"dim_date", 'Boolean'>
    readonly is_trading_month_end: FieldRef<"dim_date", 'Boolean'>
    readonly fiscal_year: FieldRef<"dim_date", 'Int'>
    readonly fiscal_quarter: FieldRef<"dim_date", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * dim_date findUnique
   */
  export type dim_dateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_date
     */
    select?: dim_dateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_date
     */
    omit?: dim_dateOmit<ExtArgs> | null
    /**
     * Filter, which dim_date to fetch.
     */
    where: dim_dateWhereUniqueInput
  }

  /**
   * dim_date findUniqueOrThrow
   */
  export type dim_dateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_date
     */
    select?: dim_dateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_date
     */
    omit?: dim_dateOmit<ExtArgs> | null
    /**
     * Filter, which dim_date to fetch.
     */
    where: dim_dateWhereUniqueInput
  }

  /**
   * dim_date findFirst
   */
  export type dim_dateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_date
     */
    select?: dim_dateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_date
     */
    omit?: dim_dateOmit<ExtArgs> | null
    /**
     * Filter, which dim_date to fetch.
     */
    where?: dim_dateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dim_dates to fetch.
     */
    orderBy?: dim_dateOrderByWithRelationInput | dim_dateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dim_dates.
     */
    cursor?: dim_dateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dim_dates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dim_dates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dim_dates.
     */
    distinct?: Dim_dateScalarFieldEnum | Dim_dateScalarFieldEnum[]
  }

  /**
   * dim_date findFirstOrThrow
   */
  export type dim_dateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_date
     */
    select?: dim_dateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_date
     */
    omit?: dim_dateOmit<ExtArgs> | null
    /**
     * Filter, which dim_date to fetch.
     */
    where?: dim_dateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dim_dates to fetch.
     */
    orderBy?: dim_dateOrderByWithRelationInput | dim_dateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dim_dates.
     */
    cursor?: dim_dateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dim_dates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dim_dates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dim_dates.
     */
    distinct?: Dim_dateScalarFieldEnum | Dim_dateScalarFieldEnum[]
  }

  /**
   * dim_date findMany
   */
  export type dim_dateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_date
     */
    select?: dim_dateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_date
     */
    omit?: dim_dateOmit<ExtArgs> | null
    /**
     * Filter, which dim_dates to fetch.
     */
    where?: dim_dateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dim_dates to fetch.
     */
    orderBy?: dim_dateOrderByWithRelationInput | dim_dateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dim_dates.
     */
    cursor?: dim_dateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dim_dates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dim_dates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dim_dates.
     */
    distinct?: Dim_dateScalarFieldEnum | Dim_dateScalarFieldEnum[]
  }

  /**
   * dim_date create
   */
  export type dim_dateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_date
     */
    select?: dim_dateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_date
     */
    omit?: dim_dateOmit<ExtArgs> | null
    /**
     * The data needed to create a dim_date.
     */
    data: XOR<dim_dateCreateInput, dim_dateUncheckedCreateInput>
  }

  /**
   * dim_date createMany
   */
  export type dim_dateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many dim_dates.
     */
    data: dim_dateCreateManyInput | dim_dateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dim_date createManyAndReturn
   */
  export type dim_dateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_date
     */
    select?: dim_dateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the dim_date
     */
    omit?: dim_dateOmit<ExtArgs> | null
    /**
     * The data used to create many dim_dates.
     */
    data: dim_dateCreateManyInput | dim_dateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dim_date update
   */
  export type dim_dateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_date
     */
    select?: dim_dateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_date
     */
    omit?: dim_dateOmit<ExtArgs> | null
    /**
     * The data needed to update a dim_date.
     */
    data: XOR<dim_dateUpdateInput, dim_dateUncheckedUpdateInput>
    /**
     * Choose, which dim_date to update.
     */
    where: dim_dateWhereUniqueInput
  }

  /**
   * dim_date updateMany
   */
  export type dim_dateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update dim_dates.
     */
    data: XOR<dim_dateUpdateManyMutationInput, dim_dateUncheckedUpdateManyInput>
    /**
     * Filter which dim_dates to update
     */
    where?: dim_dateWhereInput
    /**
     * Limit how many dim_dates to update.
     */
    limit?: number
  }

  /**
   * dim_date updateManyAndReturn
   */
  export type dim_dateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_date
     */
    select?: dim_dateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the dim_date
     */
    omit?: dim_dateOmit<ExtArgs> | null
    /**
     * The data used to update dim_dates.
     */
    data: XOR<dim_dateUpdateManyMutationInput, dim_dateUncheckedUpdateManyInput>
    /**
     * Filter which dim_dates to update
     */
    where?: dim_dateWhereInput
    /**
     * Limit how many dim_dates to update.
     */
    limit?: number
  }

  /**
   * dim_date upsert
   */
  export type dim_dateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_date
     */
    select?: dim_dateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_date
     */
    omit?: dim_dateOmit<ExtArgs> | null
    /**
     * The filter to search for the dim_date to update in case it exists.
     */
    where: dim_dateWhereUniqueInput
    /**
     * In case the dim_date found by the `where` argument doesn't exist, create a new dim_date with this data.
     */
    create: XOR<dim_dateCreateInput, dim_dateUncheckedCreateInput>
    /**
     * In case the dim_date was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dim_dateUpdateInput, dim_dateUncheckedUpdateInput>
  }

  /**
   * dim_date delete
   */
  export type dim_dateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_date
     */
    select?: dim_dateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_date
     */
    omit?: dim_dateOmit<ExtArgs> | null
    /**
     * Filter which dim_date to delete.
     */
    where: dim_dateWhereUniqueInput
  }

  /**
   * dim_date deleteMany
   */
  export type dim_dateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dim_dates to delete
     */
    where?: dim_dateWhereInput
    /**
     * Limit how many dim_dates to delete.
     */
    limit?: number
  }

  /**
   * dim_date without action
   */
  export type dim_dateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dim_date
     */
    select?: dim_dateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dim_date
     */
    omit?: dim_dateOmit<ExtArgs> | null
  }


  /**
   * Model fact_fundamentals
   */

  export type AggregateFact_fundamentals = {
    _count: Fact_fundamentalsCountAggregateOutputType | null
    _avg: Fact_fundamentalsAvgAggregateOutputType | null
    _sum: Fact_fundamentalsSumAggregateOutputType | null
    _min: Fact_fundamentalsMinAggregateOutputType | null
    _max: Fact_fundamentalsMaxAggregateOutputType | null
  }

  export type Fact_fundamentalsAvgAggregateOutputType = {
    company_id: number | null
    value: Decimal | null
  }

  export type Fact_fundamentalsSumAggregateOutputType = {
    company_id: number | null
    value: Decimal | null
  }

  export type Fact_fundamentalsMinAggregateOutputType = {
    company_id: number | null
    concept: string | null
    period_end: Date | null
    filing_date: Date | null
    value: Decimal | null
    unit: string | null
    source_tag: string | null
    policy: string | null
    form: string | null
    data_quality: string | null
    is_restatement: boolean | null
  }

  export type Fact_fundamentalsMaxAggregateOutputType = {
    company_id: number | null
    concept: string | null
    period_end: Date | null
    filing_date: Date | null
    value: Decimal | null
    unit: string | null
    source_tag: string | null
    policy: string | null
    form: string | null
    data_quality: string | null
    is_restatement: boolean | null
  }

  export type Fact_fundamentalsCountAggregateOutputType = {
    company_id: number
    concept: number
    period_end: number
    filing_date: number
    value: number
    unit: number
    source_tag: number
    policy: number
    form: number
    data_quality: number
    is_restatement: number
    _all: number
  }


  export type Fact_fundamentalsAvgAggregateInputType = {
    company_id?: true
    value?: true
  }

  export type Fact_fundamentalsSumAggregateInputType = {
    company_id?: true
    value?: true
  }

  export type Fact_fundamentalsMinAggregateInputType = {
    company_id?: true
    concept?: true
    period_end?: true
    filing_date?: true
    value?: true
    unit?: true
    source_tag?: true
    policy?: true
    form?: true
    data_quality?: true
    is_restatement?: true
  }

  export type Fact_fundamentalsMaxAggregateInputType = {
    company_id?: true
    concept?: true
    period_end?: true
    filing_date?: true
    value?: true
    unit?: true
    source_tag?: true
    policy?: true
    form?: true
    data_quality?: true
    is_restatement?: true
  }

  export type Fact_fundamentalsCountAggregateInputType = {
    company_id?: true
    concept?: true
    period_end?: true
    filing_date?: true
    value?: true
    unit?: true
    source_tag?: true
    policy?: true
    form?: true
    data_quality?: true
    is_restatement?: true
    _all?: true
  }

  export type Fact_fundamentalsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fact_fundamentals to aggregate.
     */
    where?: fact_fundamentalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fact_fundamentals to fetch.
     */
    orderBy?: fact_fundamentalsOrderByWithRelationInput | fact_fundamentalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fact_fundamentalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fact_fundamentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fact_fundamentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned fact_fundamentals
    **/
    _count?: true | Fact_fundamentalsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Fact_fundamentalsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Fact_fundamentalsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Fact_fundamentalsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Fact_fundamentalsMaxAggregateInputType
  }

  export type GetFact_fundamentalsAggregateType<T extends Fact_fundamentalsAggregateArgs> = {
        [P in keyof T & keyof AggregateFact_fundamentals]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFact_fundamentals[P]>
      : GetScalarType<T[P], AggregateFact_fundamentals[P]>
  }




  export type fact_fundamentalsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fact_fundamentalsWhereInput
    orderBy?: fact_fundamentalsOrderByWithAggregationInput | fact_fundamentalsOrderByWithAggregationInput[]
    by: Fact_fundamentalsScalarFieldEnum[] | Fact_fundamentalsScalarFieldEnum
    having?: fact_fundamentalsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Fact_fundamentalsCountAggregateInputType | true
    _avg?: Fact_fundamentalsAvgAggregateInputType
    _sum?: Fact_fundamentalsSumAggregateInputType
    _min?: Fact_fundamentalsMinAggregateInputType
    _max?: Fact_fundamentalsMaxAggregateInputType
  }

  export type Fact_fundamentalsGroupByOutputType = {
    company_id: number
    concept: string
    period_end: Date
    filing_date: Date
    value: Decimal | null
    unit: string | null
    source_tag: string | null
    policy: string | null
    form: string | null
    data_quality: string
    is_restatement: boolean
    _count: Fact_fundamentalsCountAggregateOutputType | null
    _avg: Fact_fundamentalsAvgAggregateOutputType | null
    _sum: Fact_fundamentalsSumAggregateOutputType | null
    _min: Fact_fundamentalsMinAggregateOutputType | null
    _max: Fact_fundamentalsMaxAggregateOutputType | null
  }

  type GetFact_fundamentalsGroupByPayload<T extends fact_fundamentalsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Fact_fundamentalsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Fact_fundamentalsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Fact_fundamentalsGroupByOutputType[P]>
            : GetScalarType<T[P], Fact_fundamentalsGroupByOutputType[P]>
        }
      >
    >


  export type fact_fundamentalsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    company_id?: boolean
    concept?: boolean
    period_end?: boolean
    filing_date?: boolean
    value?: boolean
    unit?: boolean
    source_tag?: boolean
    policy?: boolean
    form?: boolean
    data_quality?: boolean
    is_restatement?: boolean
  }, ExtArgs["result"]["fact_fundamentals"]>

  export type fact_fundamentalsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    company_id?: boolean
    concept?: boolean
    period_end?: boolean
    filing_date?: boolean
    value?: boolean
    unit?: boolean
    source_tag?: boolean
    policy?: boolean
    form?: boolean
    data_quality?: boolean
    is_restatement?: boolean
  }, ExtArgs["result"]["fact_fundamentals"]>

  export type fact_fundamentalsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    company_id?: boolean
    concept?: boolean
    period_end?: boolean
    filing_date?: boolean
    value?: boolean
    unit?: boolean
    source_tag?: boolean
    policy?: boolean
    form?: boolean
    data_quality?: boolean
    is_restatement?: boolean
  }, ExtArgs["result"]["fact_fundamentals"]>

  export type fact_fundamentalsSelectScalar = {
    company_id?: boolean
    concept?: boolean
    period_end?: boolean
    filing_date?: boolean
    value?: boolean
    unit?: boolean
    source_tag?: boolean
    policy?: boolean
    form?: boolean
    data_quality?: boolean
    is_restatement?: boolean
  }

  export type fact_fundamentalsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"company_id" | "concept" | "period_end" | "filing_date" | "value" | "unit" | "source_tag" | "policy" | "form" | "data_quality" | "is_restatement", ExtArgs["result"]["fact_fundamentals"]>

  export type $fact_fundamentalsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "fact_fundamentals"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      company_id: number
      concept: string
      period_end: Date
      filing_date: Date
      value: Prisma.Decimal | null
      unit: string | null
      source_tag: string | null
      policy: string | null
      form: string | null
      data_quality: string
      is_restatement: boolean
    }, ExtArgs["result"]["fact_fundamentals"]>
    composites: {}
  }

  type fact_fundamentalsGetPayload<S extends boolean | null | undefined | fact_fundamentalsDefaultArgs> = $Result.GetResult<Prisma.$fact_fundamentalsPayload, S>

  type fact_fundamentalsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<fact_fundamentalsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Fact_fundamentalsCountAggregateInputType | true
    }

  export interface fact_fundamentalsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['fact_fundamentals'], meta: { name: 'fact_fundamentals' } }
    /**
     * Find zero or one Fact_fundamentals that matches the filter.
     * @param {fact_fundamentalsFindUniqueArgs} args - Arguments to find a Fact_fundamentals
     * @example
     * // Get one Fact_fundamentals
     * const fact_fundamentals = await prisma.fact_fundamentals.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends fact_fundamentalsFindUniqueArgs>(args: SelectSubset<T, fact_fundamentalsFindUniqueArgs<ExtArgs>>): Prisma__fact_fundamentalsClient<$Result.GetResult<Prisma.$fact_fundamentalsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fact_fundamentals that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {fact_fundamentalsFindUniqueOrThrowArgs} args - Arguments to find a Fact_fundamentals
     * @example
     * // Get one Fact_fundamentals
     * const fact_fundamentals = await prisma.fact_fundamentals.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends fact_fundamentalsFindUniqueOrThrowArgs>(args: SelectSubset<T, fact_fundamentalsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__fact_fundamentalsClient<$Result.GetResult<Prisma.$fact_fundamentalsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fact_fundamentals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fact_fundamentalsFindFirstArgs} args - Arguments to find a Fact_fundamentals
     * @example
     * // Get one Fact_fundamentals
     * const fact_fundamentals = await prisma.fact_fundamentals.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends fact_fundamentalsFindFirstArgs>(args?: SelectSubset<T, fact_fundamentalsFindFirstArgs<ExtArgs>>): Prisma__fact_fundamentalsClient<$Result.GetResult<Prisma.$fact_fundamentalsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fact_fundamentals that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fact_fundamentalsFindFirstOrThrowArgs} args - Arguments to find a Fact_fundamentals
     * @example
     * // Get one Fact_fundamentals
     * const fact_fundamentals = await prisma.fact_fundamentals.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends fact_fundamentalsFindFirstOrThrowArgs>(args?: SelectSubset<T, fact_fundamentalsFindFirstOrThrowArgs<ExtArgs>>): Prisma__fact_fundamentalsClient<$Result.GetResult<Prisma.$fact_fundamentalsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fact_fundamentals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fact_fundamentalsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fact_fundamentals
     * const fact_fundamentals = await prisma.fact_fundamentals.findMany()
     * 
     * // Get first 10 Fact_fundamentals
     * const fact_fundamentals = await prisma.fact_fundamentals.findMany({ take: 10 })
     * 
     * // Only select the `company_id`
     * const fact_fundamentalsWithCompany_idOnly = await prisma.fact_fundamentals.findMany({ select: { company_id: true } })
     * 
     */
    findMany<T extends fact_fundamentalsFindManyArgs>(args?: SelectSubset<T, fact_fundamentalsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fact_fundamentalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fact_fundamentals.
     * @param {fact_fundamentalsCreateArgs} args - Arguments to create a Fact_fundamentals.
     * @example
     * // Create one Fact_fundamentals
     * const Fact_fundamentals = await prisma.fact_fundamentals.create({
     *   data: {
     *     // ... data to create a Fact_fundamentals
     *   }
     * })
     * 
     */
    create<T extends fact_fundamentalsCreateArgs>(args: SelectSubset<T, fact_fundamentalsCreateArgs<ExtArgs>>): Prisma__fact_fundamentalsClient<$Result.GetResult<Prisma.$fact_fundamentalsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fact_fundamentals.
     * @param {fact_fundamentalsCreateManyArgs} args - Arguments to create many Fact_fundamentals.
     * @example
     * // Create many Fact_fundamentals
     * const fact_fundamentals = await prisma.fact_fundamentals.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends fact_fundamentalsCreateManyArgs>(args?: SelectSubset<T, fact_fundamentalsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fact_fundamentals and returns the data saved in the database.
     * @param {fact_fundamentalsCreateManyAndReturnArgs} args - Arguments to create many Fact_fundamentals.
     * @example
     * // Create many Fact_fundamentals
     * const fact_fundamentals = await prisma.fact_fundamentals.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fact_fundamentals and only return the `company_id`
     * const fact_fundamentalsWithCompany_idOnly = await prisma.fact_fundamentals.createManyAndReturn({
     *   select: { company_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends fact_fundamentalsCreateManyAndReturnArgs>(args?: SelectSubset<T, fact_fundamentalsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fact_fundamentalsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fact_fundamentals.
     * @param {fact_fundamentalsDeleteArgs} args - Arguments to delete one Fact_fundamentals.
     * @example
     * // Delete one Fact_fundamentals
     * const Fact_fundamentals = await prisma.fact_fundamentals.delete({
     *   where: {
     *     // ... filter to delete one Fact_fundamentals
     *   }
     * })
     * 
     */
    delete<T extends fact_fundamentalsDeleteArgs>(args: SelectSubset<T, fact_fundamentalsDeleteArgs<ExtArgs>>): Prisma__fact_fundamentalsClient<$Result.GetResult<Prisma.$fact_fundamentalsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fact_fundamentals.
     * @param {fact_fundamentalsUpdateArgs} args - Arguments to update one Fact_fundamentals.
     * @example
     * // Update one Fact_fundamentals
     * const fact_fundamentals = await prisma.fact_fundamentals.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends fact_fundamentalsUpdateArgs>(args: SelectSubset<T, fact_fundamentalsUpdateArgs<ExtArgs>>): Prisma__fact_fundamentalsClient<$Result.GetResult<Prisma.$fact_fundamentalsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fact_fundamentals.
     * @param {fact_fundamentalsDeleteManyArgs} args - Arguments to filter Fact_fundamentals to delete.
     * @example
     * // Delete a few Fact_fundamentals
     * const { count } = await prisma.fact_fundamentals.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends fact_fundamentalsDeleteManyArgs>(args?: SelectSubset<T, fact_fundamentalsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fact_fundamentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fact_fundamentalsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fact_fundamentals
     * const fact_fundamentals = await prisma.fact_fundamentals.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends fact_fundamentalsUpdateManyArgs>(args: SelectSubset<T, fact_fundamentalsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fact_fundamentals and returns the data updated in the database.
     * @param {fact_fundamentalsUpdateManyAndReturnArgs} args - Arguments to update many Fact_fundamentals.
     * @example
     * // Update many Fact_fundamentals
     * const fact_fundamentals = await prisma.fact_fundamentals.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fact_fundamentals and only return the `company_id`
     * const fact_fundamentalsWithCompany_idOnly = await prisma.fact_fundamentals.updateManyAndReturn({
     *   select: { company_id: true },
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
    updateManyAndReturn<T extends fact_fundamentalsUpdateManyAndReturnArgs>(args: SelectSubset<T, fact_fundamentalsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fact_fundamentalsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fact_fundamentals.
     * @param {fact_fundamentalsUpsertArgs} args - Arguments to update or create a Fact_fundamentals.
     * @example
     * // Update or create a Fact_fundamentals
     * const fact_fundamentals = await prisma.fact_fundamentals.upsert({
     *   create: {
     *     // ... data to create a Fact_fundamentals
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fact_fundamentals we want to update
     *   }
     * })
     */
    upsert<T extends fact_fundamentalsUpsertArgs>(args: SelectSubset<T, fact_fundamentalsUpsertArgs<ExtArgs>>): Prisma__fact_fundamentalsClient<$Result.GetResult<Prisma.$fact_fundamentalsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fact_fundamentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fact_fundamentalsCountArgs} args - Arguments to filter Fact_fundamentals to count.
     * @example
     * // Count the number of Fact_fundamentals
     * const count = await prisma.fact_fundamentals.count({
     *   where: {
     *     // ... the filter for the Fact_fundamentals we want to count
     *   }
     * })
    **/
    count<T extends fact_fundamentalsCountArgs>(
      args?: Subset<T, fact_fundamentalsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Fact_fundamentalsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fact_fundamentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Fact_fundamentalsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Fact_fundamentalsAggregateArgs>(args: Subset<T, Fact_fundamentalsAggregateArgs>): Prisma.PrismaPromise<GetFact_fundamentalsAggregateType<T>>

    /**
     * Group by Fact_fundamentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fact_fundamentalsGroupByArgs} args - Group by arguments.
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
      T extends fact_fundamentalsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fact_fundamentalsGroupByArgs['orderBy'] }
        : { orderBy?: fact_fundamentalsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, fact_fundamentalsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFact_fundamentalsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the fact_fundamentals model
   */
  readonly fields: fact_fundamentalsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for fact_fundamentals.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fact_fundamentalsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the fact_fundamentals model
   */
  interface fact_fundamentalsFieldRefs {
    readonly company_id: FieldRef<"fact_fundamentals", 'Int'>
    readonly concept: FieldRef<"fact_fundamentals", 'String'>
    readonly period_end: FieldRef<"fact_fundamentals", 'DateTime'>
    readonly filing_date: FieldRef<"fact_fundamentals", 'DateTime'>
    readonly value: FieldRef<"fact_fundamentals", 'Decimal'>
    readonly unit: FieldRef<"fact_fundamentals", 'String'>
    readonly source_tag: FieldRef<"fact_fundamentals", 'String'>
    readonly policy: FieldRef<"fact_fundamentals", 'String'>
    readonly form: FieldRef<"fact_fundamentals", 'String'>
    readonly data_quality: FieldRef<"fact_fundamentals", 'String'>
    readonly is_restatement: FieldRef<"fact_fundamentals", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * fact_fundamentals findUnique
   */
  export type fact_fundamentalsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fact_fundamentals
     */
    select?: fact_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fact_fundamentals
     */
    omit?: fact_fundamentalsOmit<ExtArgs> | null
    /**
     * Filter, which fact_fundamentals to fetch.
     */
    where: fact_fundamentalsWhereUniqueInput
  }

  /**
   * fact_fundamentals findUniqueOrThrow
   */
  export type fact_fundamentalsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fact_fundamentals
     */
    select?: fact_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fact_fundamentals
     */
    omit?: fact_fundamentalsOmit<ExtArgs> | null
    /**
     * Filter, which fact_fundamentals to fetch.
     */
    where: fact_fundamentalsWhereUniqueInput
  }

  /**
   * fact_fundamentals findFirst
   */
  export type fact_fundamentalsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fact_fundamentals
     */
    select?: fact_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fact_fundamentals
     */
    omit?: fact_fundamentalsOmit<ExtArgs> | null
    /**
     * Filter, which fact_fundamentals to fetch.
     */
    where?: fact_fundamentalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fact_fundamentals to fetch.
     */
    orderBy?: fact_fundamentalsOrderByWithRelationInput | fact_fundamentalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fact_fundamentals.
     */
    cursor?: fact_fundamentalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fact_fundamentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fact_fundamentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fact_fundamentals.
     */
    distinct?: Fact_fundamentalsScalarFieldEnum | Fact_fundamentalsScalarFieldEnum[]
  }

  /**
   * fact_fundamentals findFirstOrThrow
   */
  export type fact_fundamentalsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fact_fundamentals
     */
    select?: fact_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fact_fundamentals
     */
    omit?: fact_fundamentalsOmit<ExtArgs> | null
    /**
     * Filter, which fact_fundamentals to fetch.
     */
    where?: fact_fundamentalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fact_fundamentals to fetch.
     */
    orderBy?: fact_fundamentalsOrderByWithRelationInput | fact_fundamentalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fact_fundamentals.
     */
    cursor?: fact_fundamentalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fact_fundamentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fact_fundamentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fact_fundamentals.
     */
    distinct?: Fact_fundamentalsScalarFieldEnum | Fact_fundamentalsScalarFieldEnum[]
  }

  /**
   * fact_fundamentals findMany
   */
  export type fact_fundamentalsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fact_fundamentals
     */
    select?: fact_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fact_fundamentals
     */
    omit?: fact_fundamentalsOmit<ExtArgs> | null
    /**
     * Filter, which fact_fundamentals to fetch.
     */
    where?: fact_fundamentalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fact_fundamentals to fetch.
     */
    orderBy?: fact_fundamentalsOrderByWithRelationInput | fact_fundamentalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing fact_fundamentals.
     */
    cursor?: fact_fundamentalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fact_fundamentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fact_fundamentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fact_fundamentals.
     */
    distinct?: Fact_fundamentalsScalarFieldEnum | Fact_fundamentalsScalarFieldEnum[]
  }

  /**
   * fact_fundamentals create
   */
  export type fact_fundamentalsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fact_fundamentals
     */
    select?: fact_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fact_fundamentals
     */
    omit?: fact_fundamentalsOmit<ExtArgs> | null
    /**
     * The data needed to create a fact_fundamentals.
     */
    data: XOR<fact_fundamentalsCreateInput, fact_fundamentalsUncheckedCreateInput>
  }

  /**
   * fact_fundamentals createMany
   */
  export type fact_fundamentalsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many fact_fundamentals.
     */
    data: fact_fundamentalsCreateManyInput | fact_fundamentalsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * fact_fundamentals createManyAndReturn
   */
  export type fact_fundamentalsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fact_fundamentals
     */
    select?: fact_fundamentalsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the fact_fundamentals
     */
    omit?: fact_fundamentalsOmit<ExtArgs> | null
    /**
     * The data used to create many fact_fundamentals.
     */
    data: fact_fundamentalsCreateManyInput | fact_fundamentalsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * fact_fundamentals update
   */
  export type fact_fundamentalsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fact_fundamentals
     */
    select?: fact_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fact_fundamentals
     */
    omit?: fact_fundamentalsOmit<ExtArgs> | null
    /**
     * The data needed to update a fact_fundamentals.
     */
    data: XOR<fact_fundamentalsUpdateInput, fact_fundamentalsUncheckedUpdateInput>
    /**
     * Choose, which fact_fundamentals to update.
     */
    where: fact_fundamentalsWhereUniqueInput
  }

  /**
   * fact_fundamentals updateMany
   */
  export type fact_fundamentalsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update fact_fundamentals.
     */
    data: XOR<fact_fundamentalsUpdateManyMutationInput, fact_fundamentalsUncheckedUpdateManyInput>
    /**
     * Filter which fact_fundamentals to update
     */
    where?: fact_fundamentalsWhereInput
    /**
     * Limit how many fact_fundamentals to update.
     */
    limit?: number
  }

  /**
   * fact_fundamentals updateManyAndReturn
   */
  export type fact_fundamentalsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fact_fundamentals
     */
    select?: fact_fundamentalsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the fact_fundamentals
     */
    omit?: fact_fundamentalsOmit<ExtArgs> | null
    /**
     * The data used to update fact_fundamentals.
     */
    data: XOR<fact_fundamentalsUpdateManyMutationInput, fact_fundamentalsUncheckedUpdateManyInput>
    /**
     * Filter which fact_fundamentals to update
     */
    where?: fact_fundamentalsWhereInput
    /**
     * Limit how many fact_fundamentals to update.
     */
    limit?: number
  }

  /**
   * fact_fundamentals upsert
   */
  export type fact_fundamentalsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fact_fundamentals
     */
    select?: fact_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fact_fundamentals
     */
    omit?: fact_fundamentalsOmit<ExtArgs> | null
    /**
     * The filter to search for the fact_fundamentals to update in case it exists.
     */
    where: fact_fundamentalsWhereUniqueInput
    /**
     * In case the fact_fundamentals found by the `where` argument doesn't exist, create a new fact_fundamentals with this data.
     */
    create: XOR<fact_fundamentalsCreateInput, fact_fundamentalsUncheckedCreateInput>
    /**
     * In case the fact_fundamentals was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fact_fundamentalsUpdateInput, fact_fundamentalsUncheckedUpdateInput>
  }

  /**
   * fact_fundamentals delete
   */
  export type fact_fundamentalsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fact_fundamentals
     */
    select?: fact_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fact_fundamentals
     */
    omit?: fact_fundamentalsOmit<ExtArgs> | null
    /**
     * Filter which fact_fundamentals to delete.
     */
    where: fact_fundamentalsWhereUniqueInput
  }

  /**
   * fact_fundamentals deleteMany
   */
  export type fact_fundamentalsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fact_fundamentals to delete
     */
    where?: fact_fundamentalsWhereInput
    /**
     * Limit how many fact_fundamentals to delete.
     */
    limit?: number
  }

  /**
   * fact_fundamentals without action
   */
  export type fact_fundamentalsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fact_fundamentals
     */
    select?: fact_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fact_fundamentals
     */
    omit?: fact_fundamentalsOmit<ExtArgs> | null
  }


  /**
   * Model fact_macro
   */

  export type AggregateFact_macro = {
    _count: Fact_macroCountAggregateOutputType | null
    _avg: Fact_macroAvgAggregateOutputType | null
    _sum: Fact_macroSumAggregateOutputType | null
    _min: Fact_macroMinAggregateOutputType | null
    _max: Fact_macroMaxAggregateOutputType | null
  }

  export type Fact_macroAvgAggregateOutputType = {
    macro_id: number | null
    value: Decimal | null
  }

  export type Fact_macroSumAggregateOutputType = {
    macro_id: bigint | null
    value: Decimal | null
  }

  export type Fact_macroMinAggregateOutputType = {
    macro_id: bigint | null
    series_id: string | null
    date: Date | null
    value: Decimal | null
  }

  export type Fact_macroMaxAggregateOutputType = {
    macro_id: bigint | null
    series_id: string | null
    date: Date | null
    value: Decimal | null
  }

  export type Fact_macroCountAggregateOutputType = {
    macro_id: number
    series_id: number
    date: number
    value: number
    _all: number
  }


  export type Fact_macroAvgAggregateInputType = {
    macro_id?: true
    value?: true
  }

  export type Fact_macroSumAggregateInputType = {
    macro_id?: true
    value?: true
  }

  export type Fact_macroMinAggregateInputType = {
    macro_id?: true
    series_id?: true
    date?: true
    value?: true
  }

  export type Fact_macroMaxAggregateInputType = {
    macro_id?: true
    series_id?: true
    date?: true
    value?: true
  }

  export type Fact_macroCountAggregateInputType = {
    macro_id?: true
    series_id?: true
    date?: true
    value?: true
    _all?: true
  }

  export type Fact_macroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fact_macro to aggregate.
     */
    where?: fact_macroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fact_macros to fetch.
     */
    orderBy?: fact_macroOrderByWithRelationInput | fact_macroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fact_macroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fact_macros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fact_macros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned fact_macros
    **/
    _count?: true | Fact_macroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Fact_macroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Fact_macroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Fact_macroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Fact_macroMaxAggregateInputType
  }

  export type GetFact_macroAggregateType<T extends Fact_macroAggregateArgs> = {
        [P in keyof T & keyof AggregateFact_macro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFact_macro[P]>
      : GetScalarType<T[P], AggregateFact_macro[P]>
  }




  export type fact_macroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fact_macroWhereInput
    orderBy?: fact_macroOrderByWithAggregationInput | fact_macroOrderByWithAggregationInput[]
    by: Fact_macroScalarFieldEnum[] | Fact_macroScalarFieldEnum
    having?: fact_macroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Fact_macroCountAggregateInputType | true
    _avg?: Fact_macroAvgAggregateInputType
    _sum?: Fact_macroSumAggregateInputType
    _min?: Fact_macroMinAggregateInputType
    _max?: Fact_macroMaxAggregateInputType
  }

  export type Fact_macroGroupByOutputType = {
    macro_id: bigint
    series_id: string
    date: Date
    value: Decimal | null
    _count: Fact_macroCountAggregateOutputType | null
    _avg: Fact_macroAvgAggregateOutputType | null
    _sum: Fact_macroSumAggregateOutputType | null
    _min: Fact_macroMinAggregateOutputType | null
    _max: Fact_macroMaxAggregateOutputType | null
  }

  type GetFact_macroGroupByPayload<T extends fact_macroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Fact_macroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Fact_macroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Fact_macroGroupByOutputType[P]>
            : GetScalarType<T[P], Fact_macroGroupByOutputType[P]>
        }
      >
    >


  export type fact_macroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    macro_id?: boolean
    series_id?: boolean
    date?: boolean
    value?: boolean
  }, ExtArgs["result"]["fact_macro"]>

  export type fact_macroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    macro_id?: boolean
    series_id?: boolean
    date?: boolean
    value?: boolean
  }, ExtArgs["result"]["fact_macro"]>

  export type fact_macroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    macro_id?: boolean
    series_id?: boolean
    date?: boolean
    value?: boolean
  }, ExtArgs["result"]["fact_macro"]>

  export type fact_macroSelectScalar = {
    macro_id?: boolean
    series_id?: boolean
    date?: boolean
    value?: boolean
  }

  export type fact_macroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"macro_id" | "series_id" | "date" | "value", ExtArgs["result"]["fact_macro"]>

  export type $fact_macroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "fact_macro"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      macro_id: bigint
      series_id: string
      date: Date
      value: Prisma.Decimal | null
    }, ExtArgs["result"]["fact_macro"]>
    composites: {}
  }

  type fact_macroGetPayload<S extends boolean | null | undefined | fact_macroDefaultArgs> = $Result.GetResult<Prisma.$fact_macroPayload, S>

  type fact_macroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<fact_macroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Fact_macroCountAggregateInputType | true
    }

  export interface fact_macroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['fact_macro'], meta: { name: 'fact_macro' } }
    /**
     * Find zero or one Fact_macro that matches the filter.
     * @param {fact_macroFindUniqueArgs} args - Arguments to find a Fact_macro
     * @example
     * // Get one Fact_macro
     * const fact_macro = await prisma.fact_macro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends fact_macroFindUniqueArgs>(args: SelectSubset<T, fact_macroFindUniqueArgs<ExtArgs>>): Prisma__fact_macroClient<$Result.GetResult<Prisma.$fact_macroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fact_macro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {fact_macroFindUniqueOrThrowArgs} args - Arguments to find a Fact_macro
     * @example
     * // Get one Fact_macro
     * const fact_macro = await prisma.fact_macro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends fact_macroFindUniqueOrThrowArgs>(args: SelectSubset<T, fact_macroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__fact_macroClient<$Result.GetResult<Prisma.$fact_macroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fact_macro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fact_macroFindFirstArgs} args - Arguments to find a Fact_macro
     * @example
     * // Get one Fact_macro
     * const fact_macro = await prisma.fact_macro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends fact_macroFindFirstArgs>(args?: SelectSubset<T, fact_macroFindFirstArgs<ExtArgs>>): Prisma__fact_macroClient<$Result.GetResult<Prisma.$fact_macroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fact_macro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fact_macroFindFirstOrThrowArgs} args - Arguments to find a Fact_macro
     * @example
     * // Get one Fact_macro
     * const fact_macro = await prisma.fact_macro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends fact_macroFindFirstOrThrowArgs>(args?: SelectSubset<T, fact_macroFindFirstOrThrowArgs<ExtArgs>>): Prisma__fact_macroClient<$Result.GetResult<Prisma.$fact_macroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fact_macros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fact_macroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fact_macros
     * const fact_macros = await prisma.fact_macro.findMany()
     * 
     * // Get first 10 Fact_macros
     * const fact_macros = await prisma.fact_macro.findMany({ take: 10 })
     * 
     * // Only select the `macro_id`
     * const fact_macroWithMacro_idOnly = await prisma.fact_macro.findMany({ select: { macro_id: true } })
     * 
     */
    findMany<T extends fact_macroFindManyArgs>(args?: SelectSubset<T, fact_macroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fact_macroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fact_macro.
     * @param {fact_macroCreateArgs} args - Arguments to create a Fact_macro.
     * @example
     * // Create one Fact_macro
     * const Fact_macro = await prisma.fact_macro.create({
     *   data: {
     *     // ... data to create a Fact_macro
     *   }
     * })
     * 
     */
    create<T extends fact_macroCreateArgs>(args: SelectSubset<T, fact_macroCreateArgs<ExtArgs>>): Prisma__fact_macroClient<$Result.GetResult<Prisma.$fact_macroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fact_macros.
     * @param {fact_macroCreateManyArgs} args - Arguments to create many Fact_macros.
     * @example
     * // Create many Fact_macros
     * const fact_macro = await prisma.fact_macro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends fact_macroCreateManyArgs>(args?: SelectSubset<T, fact_macroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fact_macros and returns the data saved in the database.
     * @param {fact_macroCreateManyAndReturnArgs} args - Arguments to create many Fact_macros.
     * @example
     * // Create many Fact_macros
     * const fact_macro = await prisma.fact_macro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fact_macros and only return the `macro_id`
     * const fact_macroWithMacro_idOnly = await prisma.fact_macro.createManyAndReturn({
     *   select: { macro_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends fact_macroCreateManyAndReturnArgs>(args?: SelectSubset<T, fact_macroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fact_macroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fact_macro.
     * @param {fact_macroDeleteArgs} args - Arguments to delete one Fact_macro.
     * @example
     * // Delete one Fact_macro
     * const Fact_macro = await prisma.fact_macro.delete({
     *   where: {
     *     // ... filter to delete one Fact_macro
     *   }
     * })
     * 
     */
    delete<T extends fact_macroDeleteArgs>(args: SelectSubset<T, fact_macroDeleteArgs<ExtArgs>>): Prisma__fact_macroClient<$Result.GetResult<Prisma.$fact_macroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fact_macro.
     * @param {fact_macroUpdateArgs} args - Arguments to update one Fact_macro.
     * @example
     * // Update one Fact_macro
     * const fact_macro = await prisma.fact_macro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends fact_macroUpdateArgs>(args: SelectSubset<T, fact_macroUpdateArgs<ExtArgs>>): Prisma__fact_macroClient<$Result.GetResult<Prisma.$fact_macroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fact_macros.
     * @param {fact_macroDeleteManyArgs} args - Arguments to filter Fact_macros to delete.
     * @example
     * // Delete a few Fact_macros
     * const { count } = await prisma.fact_macro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends fact_macroDeleteManyArgs>(args?: SelectSubset<T, fact_macroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fact_macros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fact_macroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fact_macros
     * const fact_macro = await prisma.fact_macro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends fact_macroUpdateManyArgs>(args: SelectSubset<T, fact_macroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fact_macros and returns the data updated in the database.
     * @param {fact_macroUpdateManyAndReturnArgs} args - Arguments to update many Fact_macros.
     * @example
     * // Update many Fact_macros
     * const fact_macro = await prisma.fact_macro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fact_macros and only return the `macro_id`
     * const fact_macroWithMacro_idOnly = await prisma.fact_macro.updateManyAndReturn({
     *   select: { macro_id: true },
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
    updateManyAndReturn<T extends fact_macroUpdateManyAndReturnArgs>(args: SelectSubset<T, fact_macroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fact_macroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fact_macro.
     * @param {fact_macroUpsertArgs} args - Arguments to update or create a Fact_macro.
     * @example
     * // Update or create a Fact_macro
     * const fact_macro = await prisma.fact_macro.upsert({
     *   create: {
     *     // ... data to create a Fact_macro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fact_macro we want to update
     *   }
     * })
     */
    upsert<T extends fact_macroUpsertArgs>(args: SelectSubset<T, fact_macroUpsertArgs<ExtArgs>>): Prisma__fact_macroClient<$Result.GetResult<Prisma.$fact_macroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fact_macros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fact_macroCountArgs} args - Arguments to filter Fact_macros to count.
     * @example
     * // Count the number of Fact_macros
     * const count = await prisma.fact_macro.count({
     *   where: {
     *     // ... the filter for the Fact_macros we want to count
     *   }
     * })
    **/
    count<T extends fact_macroCountArgs>(
      args?: Subset<T, fact_macroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Fact_macroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fact_macro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Fact_macroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Fact_macroAggregateArgs>(args: Subset<T, Fact_macroAggregateArgs>): Prisma.PrismaPromise<GetFact_macroAggregateType<T>>

    /**
     * Group by Fact_macro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fact_macroGroupByArgs} args - Group by arguments.
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
      T extends fact_macroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fact_macroGroupByArgs['orderBy'] }
        : { orderBy?: fact_macroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, fact_macroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFact_macroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the fact_macro model
   */
  readonly fields: fact_macroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for fact_macro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fact_macroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the fact_macro model
   */
  interface fact_macroFieldRefs {
    readonly macro_id: FieldRef<"fact_macro", 'BigInt'>
    readonly series_id: FieldRef<"fact_macro", 'String'>
    readonly date: FieldRef<"fact_macro", 'DateTime'>
    readonly value: FieldRef<"fact_macro", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * fact_macro findUnique
   */
  export type fact_macroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fact_macro
     */
    select?: fact_macroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fact_macro
     */
    omit?: fact_macroOmit<ExtArgs> | null
    /**
     * Filter, which fact_macro to fetch.
     */
    where: fact_macroWhereUniqueInput
  }

  /**
   * fact_macro findUniqueOrThrow
   */
  export type fact_macroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fact_macro
     */
    select?: fact_macroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fact_macro
     */
    omit?: fact_macroOmit<ExtArgs> | null
    /**
     * Filter, which fact_macro to fetch.
     */
    where: fact_macroWhereUniqueInput
  }

  /**
   * fact_macro findFirst
   */
  export type fact_macroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fact_macro
     */
    select?: fact_macroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fact_macro
     */
    omit?: fact_macroOmit<ExtArgs> | null
    /**
     * Filter, which fact_macro to fetch.
     */
    where?: fact_macroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fact_macros to fetch.
     */
    orderBy?: fact_macroOrderByWithRelationInput | fact_macroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fact_macros.
     */
    cursor?: fact_macroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fact_macros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fact_macros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fact_macros.
     */
    distinct?: Fact_macroScalarFieldEnum | Fact_macroScalarFieldEnum[]
  }

  /**
   * fact_macro findFirstOrThrow
   */
  export type fact_macroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fact_macro
     */
    select?: fact_macroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fact_macro
     */
    omit?: fact_macroOmit<ExtArgs> | null
    /**
     * Filter, which fact_macro to fetch.
     */
    where?: fact_macroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fact_macros to fetch.
     */
    orderBy?: fact_macroOrderByWithRelationInput | fact_macroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fact_macros.
     */
    cursor?: fact_macroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fact_macros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fact_macros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fact_macros.
     */
    distinct?: Fact_macroScalarFieldEnum | Fact_macroScalarFieldEnum[]
  }

  /**
   * fact_macro findMany
   */
  export type fact_macroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fact_macro
     */
    select?: fact_macroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fact_macro
     */
    omit?: fact_macroOmit<ExtArgs> | null
    /**
     * Filter, which fact_macros to fetch.
     */
    where?: fact_macroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fact_macros to fetch.
     */
    orderBy?: fact_macroOrderByWithRelationInput | fact_macroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing fact_macros.
     */
    cursor?: fact_macroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fact_macros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fact_macros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fact_macros.
     */
    distinct?: Fact_macroScalarFieldEnum | Fact_macroScalarFieldEnum[]
  }

  /**
   * fact_macro create
   */
  export type fact_macroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fact_macro
     */
    select?: fact_macroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fact_macro
     */
    omit?: fact_macroOmit<ExtArgs> | null
    /**
     * The data needed to create a fact_macro.
     */
    data: XOR<fact_macroCreateInput, fact_macroUncheckedCreateInput>
  }

  /**
   * fact_macro createMany
   */
  export type fact_macroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many fact_macros.
     */
    data: fact_macroCreateManyInput | fact_macroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * fact_macro createManyAndReturn
   */
  export type fact_macroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fact_macro
     */
    select?: fact_macroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the fact_macro
     */
    omit?: fact_macroOmit<ExtArgs> | null
    /**
     * The data used to create many fact_macros.
     */
    data: fact_macroCreateManyInput | fact_macroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * fact_macro update
   */
  export type fact_macroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fact_macro
     */
    select?: fact_macroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fact_macro
     */
    omit?: fact_macroOmit<ExtArgs> | null
    /**
     * The data needed to update a fact_macro.
     */
    data: XOR<fact_macroUpdateInput, fact_macroUncheckedUpdateInput>
    /**
     * Choose, which fact_macro to update.
     */
    where: fact_macroWhereUniqueInput
  }

  /**
   * fact_macro updateMany
   */
  export type fact_macroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update fact_macros.
     */
    data: XOR<fact_macroUpdateManyMutationInput, fact_macroUncheckedUpdateManyInput>
    /**
     * Filter which fact_macros to update
     */
    where?: fact_macroWhereInput
    /**
     * Limit how many fact_macros to update.
     */
    limit?: number
  }

  /**
   * fact_macro updateManyAndReturn
   */
  export type fact_macroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fact_macro
     */
    select?: fact_macroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the fact_macro
     */
    omit?: fact_macroOmit<ExtArgs> | null
    /**
     * The data used to update fact_macros.
     */
    data: XOR<fact_macroUpdateManyMutationInput, fact_macroUncheckedUpdateManyInput>
    /**
     * Filter which fact_macros to update
     */
    where?: fact_macroWhereInput
    /**
     * Limit how many fact_macros to update.
     */
    limit?: number
  }

  /**
   * fact_macro upsert
   */
  export type fact_macroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fact_macro
     */
    select?: fact_macroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fact_macro
     */
    omit?: fact_macroOmit<ExtArgs> | null
    /**
     * The filter to search for the fact_macro to update in case it exists.
     */
    where: fact_macroWhereUniqueInput
    /**
     * In case the fact_macro found by the `where` argument doesn't exist, create a new fact_macro with this data.
     */
    create: XOR<fact_macroCreateInput, fact_macroUncheckedCreateInput>
    /**
     * In case the fact_macro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fact_macroUpdateInput, fact_macroUncheckedUpdateInput>
  }

  /**
   * fact_macro delete
   */
  export type fact_macroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fact_macro
     */
    select?: fact_macroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fact_macro
     */
    omit?: fact_macroOmit<ExtArgs> | null
    /**
     * Filter which fact_macro to delete.
     */
    where: fact_macroWhereUniqueInput
  }

  /**
   * fact_macro deleteMany
   */
  export type fact_macroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fact_macros to delete
     */
    where?: fact_macroWhereInput
    /**
     * Limit how many fact_macros to delete.
     */
    limit?: number
  }

  /**
   * fact_macro without action
   */
  export type fact_macroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fact_macro
     */
    select?: fact_macroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fact_macro
     */
    omit?: fact_macroOmit<ExtArgs> | null
  }


  /**
   * Model fact_prices
   */

  export type AggregateFact_prices = {
    _count: Fact_pricesCountAggregateOutputType | null
    _avg: Fact_pricesAvgAggregateOutputType | null
    _sum: Fact_pricesSumAggregateOutputType | null
    _min: Fact_pricesMinAggregateOutputType | null
    _max: Fact_pricesMaxAggregateOutputType | null
  }

  export type Fact_pricesAvgAggregateOutputType = {
    price_id: number | null
    company_id: number | null
    open: Decimal | null
    high: Decimal | null
    low: Decimal | null
    close: Decimal | null
    adj_close: Decimal | null
    volume: Decimal | null
  }

  export type Fact_pricesSumAggregateOutputType = {
    price_id: bigint | null
    company_id: number | null
    open: Decimal | null
    high: Decimal | null
    low: Decimal | null
    close: Decimal | null
    adj_close: Decimal | null
    volume: Decimal | null
  }

  export type Fact_pricesMinAggregateOutputType = {
    price_id: bigint | null
    company_id: number | null
    trade_date: Date | null
    open: Decimal | null
    high: Decimal | null
    low: Decimal | null
    close: Decimal | null
    adj_close: Decimal | null
    volume: Decimal | null
  }

  export type Fact_pricesMaxAggregateOutputType = {
    price_id: bigint | null
    company_id: number | null
    trade_date: Date | null
    open: Decimal | null
    high: Decimal | null
    low: Decimal | null
    close: Decimal | null
    adj_close: Decimal | null
    volume: Decimal | null
  }

  export type Fact_pricesCountAggregateOutputType = {
    price_id: number
    company_id: number
    trade_date: number
    open: number
    high: number
    low: number
    close: number
    adj_close: number
    volume: number
    _all: number
  }


  export type Fact_pricesAvgAggregateInputType = {
    price_id?: true
    company_id?: true
    open?: true
    high?: true
    low?: true
    close?: true
    adj_close?: true
    volume?: true
  }

  export type Fact_pricesSumAggregateInputType = {
    price_id?: true
    company_id?: true
    open?: true
    high?: true
    low?: true
    close?: true
    adj_close?: true
    volume?: true
  }

  export type Fact_pricesMinAggregateInputType = {
    price_id?: true
    company_id?: true
    trade_date?: true
    open?: true
    high?: true
    low?: true
    close?: true
    adj_close?: true
    volume?: true
  }

  export type Fact_pricesMaxAggregateInputType = {
    price_id?: true
    company_id?: true
    trade_date?: true
    open?: true
    high?: true
    low?: true
    close?: true
    adj_close?: true
    volume?: true
  }

  export type Fact_pricesCountAggregateInputType = {
    price_id?: true
    company_id?: true
    trade_date?: true
    open?: true
    high?: true
    low?: true
    close?: true
    adj_close?: true
    volume?: true
    _all?: true
  }

  export type Fact_pricesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fact_prices to aggregate.
     */
    where?: fact_pricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fact_prices to fetch.
     */
    orderBy?: fact_pricesOrderByWithRelationInput | fact_pricesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fact_pricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fact_prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fact_prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned fact_prices
    **/
    _count?: true | Fact_pricesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Fact_pricesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Fact_pricesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Fact_pricesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Fact_pricesMaxAggregateInputType
  }

  export type GetFact_pricesAggregateType<T extends Fact_pricesAggregateArgs> = {
        [P in keyof T & keyof AggregateFact_prices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFact_prices[P]>
      : GetScalarType<T[P], AggregateFact_prices[P]>
  }




  export type fact_pricesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fact_pricesWhereInput
    orderBy?: fact_pricesOrderByWithAggregationInput | fact_pricesOrderByWithAggregationInput[]
    by: Fact_pricesScalarFieldEnum[] | Fact_pricesScalarFieldEnum
    having?: fact_pricesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Fact_pricesCountAggregateInputType | true
    _avg?: Fact_pricesAvgAggregateInputType
    _sum?: Fact_pricesSumAggregateInputType
    _min?: Fact_pricesMinAggregateInputType
    _max?: Fact_pricesMaxAggregateInputType
  }

  export type Fact_pricesGroupByOutputType = {
    price_id: bigint
    company_id: number
    trade_date: Date
    open: Decimal | null
    high: Decimal | null
    low: Decimal | null
    close: Decimal | null
    adj_close: Decimal
    volume: Decimal | null
    _count: Fact_pricesCountAggregateOutputType | null
    _avg: Fact_pricesAvgAggregateOutputType | null
    _sum: Fact_pricesSumAggregateOutputType | null
    _min: Fact_pricesMinAggregateOutputType | null
    _max: Fact_pricesMaxAggregateOutputType | null
  }

  type GetFact_pricesGroupByPayload<T extends fact_pricesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Fact_pricesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Fact_pricesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Fact_pricesGroupByOutputType[P]>
            : GetScalarType<T[P], Fact_pricesGroupByOutputType[P]>
        }
      >
    >


  export type fact_pricesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    price_id?: boolean
    company_id?: boolean
    trade_date?: boolean
    open?: boolean
    high?: boolean
    low?: boolean
    close?: boolean
    adj_close?: boolean
    volume?: boolean
    dim_company?: boolean | dim_companyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fact_prices"]>

  export type fact_pricesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    price_id?: boolean
    company_id?: boolean
    trade_date?: boolean
    open?: boolean
    high?: boolean
    low?: boolean
    close?: boolean
    adj_close?: boolean
    volume?: boolean
    dim_company?: boolean | dim_companyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fact_prices"]>

  export type fact_pricesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    price_id?: boolean
    company_id?: boolean
    trade_date?: boolean
    open?: boolean
    high?: boolean
    low?: boolean
    close?: boolean
    adj_close?: boolean
    volume?: boolean
    dim_company?: boolean | dim_companyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fact_prices"]>

  export type fact_pricesSelectScalar = {
    price_id?: boolean
    company_id?: boolean
    trade_date?: boolean
    open?: boolean
    high?: boolean
    low?: boolean
    close?: boolean
    adj_close?: boolean
    volume?: boolean
  }

  export type fact_pricesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"price_id" | "company_id" | "trade_date" | "open" | "high" | "low" | "close" | "adj_close" | "volume", ExtArgs["result"]["fact_prices"]>
  export type fact_pricesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dim_company?: boolean | dim_companyDefaultArgs<ExtArgs>
  }
  export type fact_pricesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dim_company?: boolean | dim_companyDefaultArgs<ExtArgs>
  }
  export type fact_pricesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dim_company?: boolean | dim_companyDefaultArgs<ExtArgs>
  }

  export type $fact_pricesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "fact_prices"
    objects: {
      dim_company: Prisma.$dim_companyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      price_id: bigint
      company_id: number
      trade_date: Date
      open: Prisma.Decimal | null
      high: Prisma.Decimal | null
      low: Prisma.Decimal | null
      close: Prisma.Decimal | null
      adj_close: Prisma.Decimal
      volume: Prisma.Decimal | null
    }, ExtArgs["result"]["fact_prices"]>
    composites: {}
  }

  type fact_pricesGetPayload<S extends boolean | null | undefined | fact_pricesDefaultArgs> = $Result.GetResult<Prisma.$fact_pricesPayload, S>

  type fact_pricesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<fact_pricesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Fact_pricesCountAggregateInputType | true
    }

  export interface fact_pricesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['fact_prices'], meta: { name: 'fact_prices' } }
    /**
     * Find zero or one Fact_prices that matches the filter.
     * @param {fact_pricesFindUniqueArgs} args - Arguments to find a Fact_prices
     * @example
     * // Get one Fact_prices
     * const fact_prices = await prisma.fact_prices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends fact_pricesFindUniqueArgs>(args: SelectSubset<T, fact_pricesFindUniqueArgs<ExtArgs>>): Prisma__fact_pricesClient<$Result.GetResult<Prisma.$fact_pricesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fact_prices that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {fact_pricesFindUniqueOrThrowArgs} args - Arguments to find a Fact_prices
     * @example
     * // Get one Fact_prices
     * const fact_prices = await prisma.fact_prices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends fact_pricesFindUniqueOrThrowArgs>(args: SelectSubset<T, fact_pricesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__fact_pricesClient<$Result.GetResult<Prisma.$fact_pricesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fact_prices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fact_pricesFindFirstArgs} args - Arguments to find a Fact_prices
     * @example
     * // Get one Fact_prices
     * const fact_prices = await prisma.fact_prices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends fact_pricesFindFirstArgs>(args?: SelectSubset<T, fact_pricesFindFirstArgs<ExtArgs>>): Prisma__fact_pricesClient<$Result.GetResult<Prisma.$fact_pricesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fact_prices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fact_pricesFindFirstOrThrowArgs} args - Arguments to find a Fact_prices
     * @example
     * // Get one Fact_prices
     * const fact_prices = await prisma.fact_prices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends fact_pricesFindFirstOrThrowArgs>(args?: SelectSubset<T, fact_pricesFindFirstOrThrowArgs<ExtArgs>>): Prisma__fact_pricesClient<$Result.GetResult<Prisma.$fact_pricesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fact_prices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fact_pricesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fact_prices
     * const fact_prices = await prisma.fact_prices.findMany()
     * 
     * // Get first 10 Fact_prices
     * const fact_prices = await prisma.fact_prices.findMany({ take: 10 })
     * 
     * // Only select the `price_id`
     * const fact_pricesWithPrice_idOnly = await prisma.fact_prices.findMany({ select: { price_id: true } })
     * 
     */
    findMany<T extends fact_pricesFindManyArgs>(args?: SelectSubset<T, fact_pricesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fact_pricesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fact_prices.
     * @param {fact_pricesCreateArgs} args - Arguments to create a Fact_prices.
     * @example
     * // Create one Fact_prices
     * const Fact_prices = await prisma.fact_prices.create({
     *   data: {
     *     // ... data to create a Fact_prices
     *   }
     * })
     * 
     */
    create<T extends fact_pricesCreateArgs>(args: SelectSubset<T, fact_pricesCreateArgs<ExtArgs>>): Prisma__fact_pricesClient<$Result.GetResult<Prisma.$fact_pricesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fact_prices.
     * @param {fact_pricesCreateManyArgs} args - Arguments to create many Fact_prices.
     * @example
     * // Create many Fact_prices
     * const fact_prices = await prisma.fact_prices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends fact_pricesCreateManyArgs>(args?: SelectSubset<T, fact_pricesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fact_prices and returns the data saved in the database.
     * @param {fact_pricesCreateManyAndReturnArgs} args - Arguments to create many Fact_prices.
     * @example
     * // Create many Fact_prices
     * const fact_prices = await prisma.fact_prices.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fact_prices and only return the `price_id`
     * const fact_pricesWithPrice_idOnly = await prisma.fact_prices.createManyAndReturn({
     *   select: { price_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends fact_pricesCreateManyAndReturnArgs>(args?: SelectSubset<T, fact_pricesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fact_pricesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fact_prices.
     * @param {fact_pricesDeleteArgs} args - Arguments to delete one Fact_prices.
     * @example
     * // Delete one Fact_prices
     * const Fact_prices = await prisma.fact_prices.delete({
     *   where: {
     *     // ... filter to delete one Fact_prices
     *   }
     * })
     * 
     */
    delete<T extends fact_pricesDeleteArgs>(args: SelectSubset<T, fact_pricesDeleteArgs<ExtArgs>>): Prisma__fact_pricesClient<$Result.GetResult<Prisma.$fact_pricesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fact_prices.
     * @param {fact_pricesUpdateArgs} args - Arguments to update one Fact_prices.
     * @example
     * // Update one Fact_prices
     * const fact_prices = await prisma.fact_prices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends fact_pricesUpdateArgs>(args: SelectSubset<T, fact_pricesUpdateArgs<ExtArgs>>): Prisma__fact_pricesClient<$Result.GetResult<Prisma.$fact_pricesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fact_prices.
     * @param {fact_pricesDeleteManyArgs} args - Arguments to filter Fact_prices to delete.
     * @example
     * // Delete a few Fact_prices
     * const { count } = await prisma.fact_prices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends fact_pricesDeleteManyArgs>(args?: SelectSubset<T, fact_pricesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fact_prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fact_pricesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fact_prices
     * const fact_prices = await prisma.fact_prices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends fact_pricesUpdateManyArgs>(args: SelectSubset<T, fact_pricesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fact_prices and returns the data updated in the database.
     * @param {fact_pricesUpdateManyAndReturnArgs} args - Arguments to update many Fact_prices.
     * @example
     * // Update many Fact_prices
     * const fact_prices = await prisma.fact_prices.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fact_prices and only return the `price_id`
     * const fact_pricesWithPrice_idOnly = await prisma.fact_prices.updateManyAndReturn({
     *   select: { price_id: true },
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
    updateManyAndReturn<T extends fact_pricesUpdateManyAndReturnArgs>(args: SelectSubset<T, fact_pricesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fact_pricesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fact_prices.
     * @param {fact_pricesUpsertArgs} args - Arguments to update or create a Fact_prices.
     * @example
     * // Update or create a Fact_prices
     * const fact_prices = await prisma.fact_prices.upsert({
     *   create: {
     *     // ... data to create a Fact_prices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fact_prices we want to update
     *   }
     * })
     */
    upsert<T extends fact_pricesUpsertArgs>(args: SelectSubset<T, fact_pricesUpsertArgs<ExtArgs>>): Prisma__fact_pricesClient<$Result.GetResult<Prisma.$fact_pricesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fact_prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fact_pricesCountArgs} args - Arguments to filter Fact_prices to count.
     * @example
     * // Count the number of Fact_prices
     * const count = await prisma.fact_prices.count({
     *   where: {
     *     // ... the filter for the Fact_prices we want to count
     *   }
     * })
    **/
    count<T extends fact_pricesCountArgs>(
      args?: Subset<T, fact_pricesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Fact_pricesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fact_prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Fact_pricesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Fact_pricesAggregateArgs>(args: Subset<T, Fact_pricesAggregateArgs>): Prisma.PrismaPromise<GetFact_pricesAggregateType<T>>

    /**
     * Group by Fact_prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fact_pricesGroupByArgs} args - Group by arguments.
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
      T extends fact_pricesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fact_pricesGroupByArgs['orderBy'] }
        : { orderBy?: fact_pricesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, fact_pricesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFact_pricesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the fact_prices model
   */
  readonly fields: fact_pricesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for fact_prices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fact_pricesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dim_company<T extends dim_companyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, dim_companyDefaultArgs<ExtArgs>>): Prisma__dim_companyClient<$Result.GetResult<Prisma.$dim_companyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the fact_prices model
   */
  interface fact_pricesFieldRefs {
    readonly price_id: FieldRef<"fact_prices", 'BigInt'>
    readonly company_id: FieldRef<"fact_prices", 'Int'>
    readonly trade_date: FieldRef<"fact_prices", 'DateTime'>
    readonly open: FieldRef<"fact_prices", 'Decimal'>
    readonly high: FieldRef<"fact_prices", 'Decimal'>
    readonly low: FieldRef<"fact_prices", 'Decimal'>
    readonly close: FieldRef<"fact_prices", 'Decimal'>
    readonly adj_close: FieldRef<"fact_prices", 'Decimal'>
    readonly volume: FieldRef<"fact_prices", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * fact_prices findUnique
   */
  export type fact_pricesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fact_prices
     */
    select?: fact_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fact_prices
     */
    omit?: fact_pricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fact_pricesInclude<ExtArgs> | null
    /**
     * Filter, which fact_prices to fetch.
     */
    where: fact_pricesWhereUniqueInput
  }

  /**
   * fact_prices findUniqueOrThrow
   */
  export type fact_pricesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fact_prices
     */
    select?: fact_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fact_prices
     */
    omit?: fact_pricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fact_pricesInclude<ExtArgs> | null
    /**
     * Filter, which fact_prices to fetch.
     */
    where: fact_pricesWhereUniqueInput
  }

  /**
   * fact_prices findFirst
   */
  export type fact_pricesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fact_prices
     */
    select?: fact_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fact_prices
     */
    omit?: fact_pricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fact_pricesInclude<ExtArgs> | null
    /**
     * Filter, which fact_prices to fetch.
     */
    where?: fact_pricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fact_prices to fetch.
     */
    orderBy?: fact_pricesOrderByWithRelationInput | fact_pricesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fact_prices.
     */
    cursor?: fact_pricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fact_prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fact_prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fact_prices.
     */
    distinct?: Fact_pricesScalarFieldEnum | Fact_pricesScalarFieldEnum[]
  }

  /**
   * fact_prices findFirstOrThrow
   */
  export type fact_pricesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fact_prices
     */
    select?: fact_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fact_prices
     */
    omit?: fact_pricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fact_pricesInclude<ExtArgs> | null
    /**
     * Filter, which fact_prices to fetch.
     */
    where?: fact_pricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fact_prices to fetch.
     */
    orderBy?: fact_pricesOrderByWithRelationInput | fact_pricesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fact_prices.
     */
    cursor?: fact_pricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fact_prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fact_prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fact_prices.
     */
    distinct?: Fact_pricesScalarFieldEnum | Fact_pricesScalarFieldEnum[]
  }

  /**
   * fact_prices findMany
   */
  export type fact_pricesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fact_prices
     */
    select?: fact_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fact_prices
     */
    omit?: fact_pricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fact_pricesInclude<ExtArgs> | null
    /**
     * Filter, which fact_prices to fetch.
     */
    where?: fact_pricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fact_prices to fetch.
     */
    orderBy?: fact_pricesOrderByWithRelationInput | fact_pricesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing fact_prices.
     */
    cursor?: fact_pricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fact_prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fact_prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fact_prices.
     */
    distinct?: Fact_pricesScalarFieldEnum | Fact_pricesScalarFieldEnum[]
  }

  /**
   * fact_prices create
   */
  export type fact_pricesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fact_prices
     */
    select?: fact_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fact_prices
     */
    omit?: fact_pricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fact_pricesInclude<ExtArgs> | null
    /**
     * The data needed to create a fact_prices.
     */
    data: XOR<fact_pricesCreateInput, fact_pricesUncheckedCreateInput>
  }

  /**
   * fact_prices createMany
   */
  export type fact_pricesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many fact_prices.
     */
    data: fact_pricesCreateManyInput | fact_pricesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * fact_prices createManyAndReturn
   */
  export type fact_pricesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fact_prices
     */
    select?: fact_pricesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the fact_prices
     */
    omit?: fact_pricesOmit<ExtArgs> | null
    /**
     * The data used to create many fact_prices.
     */
    data: fact_pricesCreateManyInput | fact_pricesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fact_pricesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * fact_prices update
   */
  export type fact_pricesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fact_prices
     */
    select?: fact_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fact_prices
     */
    omit?: fact_pricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fact_pricesInclude<ExtArgs> | null
    /**
     * The data needed to update a fact_prices.
     */
    data: XOR<fact_pricesUpdateInput, fact_pricesUncheckedUpdateInput>
    /**
     * Choose, which fact_prices to update.
     */
    where: fact_pricesWhereUniqueInput
  }

  /**
   * fact_prices updateMany
   */
  export type fact_pricesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update fact_prices.
     */
    data: XOR<fact_pricesUpdateManyMutationInput, fact_pricesUncheckedUpdateManyInput>
    /**
     * Filter which fact_prices to update
     */
    where?: fact_pricesWhereInput
    /**
     * Limit how many fact_prices to update.
     */
    limit?: number
  }

  /**
   * fact_prices updateManyAndReturn
   */
  export type fact_pricesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fact_prices
     */
    select?: fact_pricesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the fact_prices
     */
    omit?: fact_pricesOmit<ExtArgs> | null
    /**
     * The data used to update fact_prices.
     */
    data: XOR<fact_pricesUpdateManyMutationInput, fact_pricesUncheckedUpdateManyInput>
    /**
     * Filter which fact_prices to update
     */
    where?: fact_pricesWhereInput
    /**
     * Limit how many fact_prices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fact_pricesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * fact_prices upsert
   */
  export type fact_pricesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fact_prices
     */
    select?: fact_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fact_prices
     */
    omit?: fact_pricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fact_pricesInclude<ExtArgs> | null
    /**
     * The filter to search for the fact_prices to update in case it exists.
     */
    where: fact_pricesWhereUniqueInput
    /**
     * In case the fact_prices found by the `where` argument doesn't exist, create a new fact_prices with this data.
     */
    create: XOR<fact_pricesCreateInput, fact_pricesUncheckedCreateInput>
    /**
     * In case the fact_prices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fact_pricesUpdateInput, fact_pricesUncheckedUpdateInput>
  }

  /**
   * fact_prices delete
   */
  export type fact_pricesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fact_prices
     */
    select?: fact_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fact_prices
     */
    omit?: fact_pricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fact_pricesInclude<ExtArgs> | null
    /**
     * Filter which fact_prices to delete.
     */
    where: fact_pricesWhereUniqueInput
  }

  /**
   * fact_prices deleteMany
   */
  export type fact_pricesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fact_prices to delete
     */
    where?: fact_pricesWhereInput
    /**
     * Limit how many fact_prices to delete.
     */
    limit?: number
  }

  /**
   * fact_prices without action
   */
  export type fact_pricesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fact_prices
     */
    select?: fact_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fact_prices
     */
    omit?: fact_pricesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fact_pricesInclude<ExtArgs> | null
  }


  /**
   * Model universe
   */

  export type AggregateUniverse = {
    _count: UniverseCountAggregateOutputType | null
    _avg: UniverseAvgAggregateOutputType | null
    _sum: UniverseSumAggregateOutputType | null
    _min: UniverseMinAggregateOutputType | null
    _max: UniverseMaxAggregateOutputType | null
  }

  export type UniverseAvgAggregateOutputType = {
    company_id: number | null
  }

  export type UniverseSumAggregateOutputType = {
    company_id: number | null
  }

  export type UniverseMinAggregateOutputType = {
    company_id: number | null
    added_at: Date | null
  }

  export type UniverseMaxAggregateOutputType = {
    company_id: number | null
    added_at: Date | null
  }

  export type UniverseCountAggregateOutputType = {
    company_id: number
    added_at: number
    _all: number
  }


  export type UniverseAvgAggregateInputType = {
    company_id?: true
  }

  export type UniverseSumAggregateInputType = {
    company_id?: true
  }

  export type UniverseMinAggregateInputType = {
    company_id?: true
    added_at?: true
  }

  export type UniverseMaxAggregateInputType = {
    company_id?: true
    added_at?: true
  }

  export type UniverseCountAggregateInputType = {
    company_id?: true
    added_at?: true
    _all?: true
  }

  export type UniverseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which universe to aggregate.
     */
    where?: universeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of universes to fetch.
     */
    orderBy?: universeOrderByWithRelationInput | universeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: universeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` universes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` universes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned universes
    **/
    _count?: true | UniverseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UniverseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UniverseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UniverseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UniverseMaxAggregateInputType
  }

  export type GetUniverseAggregateType<T extends UniverseAggregateArgs> = {
        [P in keyof T & keyof AggregateUniverse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUniverse[P]>
      : GetScalarType<T[P], AggregateUniverse[P]>
  }




  export type universeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: universeWhereInput
    orderBy?: universeOrderByWithAggregationInput | universeOrderByWithAggregationInput[]
    by: UniverseScalarFieldEnum[] | UniverseScalarFieldEnum
    having?: universeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UniverseCountAggregateInputType | true
    _avg?: UniverseAvgAggregateInputType
    _sum?: UniverseSumAggregateInputType
    _min?: UniverseMinAggregateInputType
    _max?: UniverseMaxAggregateInputType
  }

  export type UniverseGroupByOutputType = {
    company_id: number
    added_at: Date
    _count: UniverseCountAggregateOutputType | null
    _avg: UniverseAvgAggregateOutputType | null
    _sum: UniverseSumAggregateOutputType | null
    _min: UniverseMinAggregateOutputType | null
    _max: UniverseMaxAggregateOutputType | null
  }

  type GetUniverseGroupByPayload<T extends universeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UniverseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UniverseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UniverseGroupByOutputType[P]>
            : GetScalarType<T[P], UniverseGroupByOutputType[P]>
        }
      >
    >


  export type universeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    company_id?: boolean
    added_at?: boolean
    dim_company?: boolean | dim_companyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["universe"]>

  export type universeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    company_id?: boolean
    added_at?: boolean
    dim_company?: boolean | dim_companyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["universe"]>

  export type universeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    company_id?: boolean
    added_at?: boolean
    dim_company?: boolean | dim_companyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["universe"]>

  export type universeSelectScalar = {
    company_id?: boolean
    added_at?: boolean
  }

  export type universeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"company_id" | "added_at", ExtArgs["result"]["universe"]>
  export type universeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dim_company?: boolean | dim_companyDefaultArgs<ExtArgs>
  }
  export type universeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dim_company?: boolean | dim_companyDefaultArgs<ExtArgs>
  }
  export type universeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dim_company?: boolean | dim_companyDefaultArgs<ExtArgs>
  }

  export type $universePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "universe"
    objects: {
      dim_company: Prisma.$dim_companyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      company_id: number
      added_at: Date
    }, ExtArgs["result"]["universe"]>
    composites: {}
  }

  type universeGetPayload<S extends boolean | null | undefined | universeDefaultArgs> = $Result.GetResult<Prisma.$universePayload, S>

  type universeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<universeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UniverseCountAggregateInputType | true
    }

  export interface universeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['universe'], meta: { name: 'universe' } }
    /**
     * Find zero or one Universe that matches the filter.
     * @param {universeFindUniqueArgs} args - Arguments to find a Universe
     * @example
     * // Get one Universe
     * const universe = await prisma.universe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends universeFindUniqueArgs>(args: SelectSubset<T, universeFindUniqueArgs<ExtArgs>>): Prisma__universeClient<$Result.GetResult<Prisma.$universePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Universe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {universeFindUniqueOrThrowArgs} args - Arguments to find a Universe
     * @example
     * // Get one Universe
     * const universe = await prisma.universe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends universeFindUniqueOrThrowArgs>(args: SelectSubset<T, universeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__universeClient<$Result.GetResult<Prisma.$universePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Universe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {universeFindFirstArgs} args - Arguments to find a Universe
     * @example
     * // Get one Universe
     * const universe = await prisma.universe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends universeFindFirstArgs>(args?: SelectSubset<T, universeFindFirstArgs<ExtArgs>>): Prisma__universeClient<$Result.GetResult<Prisma.$universePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Universe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {universeFindFirstOrThrowArgs} args - Arguments to find a Universe
     * @example
     * // Get one Universe
     * const universe = await prisma.universe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends universeFindFirstOrThrowArgs>(args?: SelectSubset<T, universeFindFirstOrThrowArgs<ExtArgs>>): Prisma__universeClient<$Result.GetResult<Prisma.$universePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Universes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {universeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Universes
     * const universes = await prisma.universe.findMany()
     * 
     * // Get first 10 Universes
     * const universes = await prisma.universe.findMany({ take: 10 })
     * 
     * // Only select the `company_id`
     * const universeWithCompany_idOnly = await prisma.universe.findMany({ select: { company_id: true } })
     * 
     */
    findMany<T extends universeFindManyArgs>(args?: SelectSubset<T, universeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$universePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Universe.
     * @param {universeCreateArgs} args - Arguments to create a Universe.
     * @example
     * // Create one Universe
     * const Universe = await prisma.universe.create({
     *   data: {
     *     // ... data to create a Universe
     *   }
     * })
     * 
     */
    create<T extends universeCreateArgs>(args: SelectSubset<T, universeCreateArgs<ExtArgs>>): Prisma__universeClient<$Result.GetResult<Prisma.$universePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Universes.
     * @param {universeCreateManyArgs} args - Arguments to create many Universes.
     * @example
     * // Create many Universes
     * const universe = await prisma.universe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends universeCreateManyArgs>(args?: SelectSubset<T, universeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Universes and returns the data saved in the database.
     * @param {universeCreateManyAndReturnArgs} args - Arguments to create many Universes.
     * @example
     * // Create many Universes
     * const universe = await prisma.universe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Universes and only return the `company_id`
     * const universeWithCompany_idOnly = await prisma.universe.createManyAndReturn({
     *   select: { company_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends universeCreateManyAndReturnArgs>(args?: SelectSubset<T, universeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$universePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Universe.
     * @param {universeDeleteArgs} args - Arguments to delete one Universe.
     * @example
     * // Delete one Universe
     * const Universe = await prisma.universe.delete({
     *   where: {
     *     // ... filter to delete one Universe
     *   }
     * })
     * 
     */
    delete<T extends universeDeleteArgs>(args: SelectSubset<T, universeDeleteArgs<ExtArgs>>): Prisma__universeClient<$Result.GetResult<Prisma.$universePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Universe.
     * @param {universeUpdateArgs} args - Arguments to update one Universe.
     * @example
     * // Update one Universe
     * const universe = await prisma.universe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends universeUpdateArgs>(args: SelectSubset<T, universeUpdateArgs<ExtArgs>>): Prisma__universeClient<$Result.GetResult<Prisma.$universePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Universes.
     * @param {universeDeleteManyArgs} args - Arguments to filter Universes to delete.
     * @example
     * // Delete a few Universes
     * const { count } = await prisma.universe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends universeDeleteManyArgs>(args?: SelectSubset<T, universeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Universes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {universeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Universes
     * const universe = await prisma.universe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends universeUpdateManyArgs>(args: SelectSubset<T, universeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Universes and returns the data updated in the database.
     * @param {universeUpdateManyAndReturnArgs} args - Arguments to update many Universes.
     * @example
     * // Update many Universes
     * const universe = await prisma.universe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Universes and only return the `company_id`
     * const universeWithCompany_idOnly = await prisma.universe.updateManyAndReturn({
     *   select: { company_id: true },
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
    updateManyAndReturn<T extends universeUpdateManyAndReturnArgs>(args: SelectSubset<T, universeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$universePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Universe.
     * @param {universeUpsertArgs} args - Arguments to update or create a Universe.
     * @example
     * // Update or create a Universe
     * const universe = await prisma.universe.upsert({
     *   create: {
     *     // ... data to create a Universe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Universe we want to update
     *   }
     * })
     */
    upsert<T extends universeUpsertArgs>(args: SelectSubset<T, universeUpsertArgs<ExtArgs>>): Prisma__universeClient<$Result.GetResult<Prisma.$universePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Universes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {universeCountArgs} args - Arguments to filter Universes to count.
     * @example
     * // Count the number of Universes
     * const count = await prisma.universe.count({
     *   where: {
     *     // ... the filter for the Universes we want to count
     *   }
     * })
    **/
    count<T extends universeCountArgs>(
      args?: Subset<T, universeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UniverseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Universe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniverseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UniverseAggregateArgs>(args: Subset<T, UniverseAggregateArgs>): Prisma.PrismaPromise<GetUniverseAggregateType<T>>

    /**
     * Group by Universe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {universeGroupByArgs} args - Group by arguments.
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
      T extends universeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: universeGroupByArgs['orderBy'] }
        : { orderBy?: universeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, universeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUniverseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the universe model
   */
  readonly fields: universeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for universe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__universeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dim_company<T extends dim_companyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, dim_companyDefaultArgs<ExtArgs>>): Prisma__dim_companyClient<$Result.GetResult<Prisma.$dim_companyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the universe model
   */
  interface universeFieldRefs {
    readonly company_id: FieldRef<"universe", 'Int'>
    readonly added_at: FieldRef<"universe", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * universe findUnique
   */
  export type universeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the universe
     */
    select?: universeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the universe
     */
    omit?: universeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: universeInclude<ExtArgs> | null
    /**
     * Filter, which universe to fetch.
     */
    where: universeWhereUniqueInput
  }

  /**
   * universe findUniqueOrThrow
   */
  export type universeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the universe
     */
    select?: universeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the universe
     */
    omit?: universeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: universeInclude<ExtArgs> | null
    /**
     * Filter, which universe to fetch.
     */
    where: universeWhereUniqueInput
  }

  /**
   * universe findFirst
   */
  export type universeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the universe
     */
    select?: universeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the universe
     */
    omit?: universeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: universeInclude<ExtArgs> | null
    /**
     * Filter, which universe to fetch.
     */
    where?: universeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of universes to fetch.
     */
    orderBy?: universeOrderByWithRelationInput | universeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for universes.
     */
    cursor?: universeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` universes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` universes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of universes.
     */
    distinct?: UniverseScalarFieldEnum | UniverseScalarFieldEnum[]
  }

  /**
   * universe findFirstOrThrow
   */
  export type universeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the universe
     */
    select?: universeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the universe
     */
    omit?: universeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: universeInclude<ExtArgs> | null
    /**
     * Filter, which universe to fetch.
     */
    where?: universeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of universes to fetch.
     */
    orderBy?: universeOrderByWithRelationInput | universeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for universes.
     */
    cursor?: universeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` universes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` universes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of universes.
     */
    distinct?: UniverseScalarFieldEnum | UniverseScalarFieldEnum[]
  }

  /**
   * universe findMany
   */
  export type universeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the universe
     */
    select?: universeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the universe
     */
    omit?: universeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: universeInclude<ExtArgs> | null
    /**
     * Filter, which universes to fetch.
     */
    where?: universeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of universes to fetch.
     */
    orderBy?: universeOrderByWithRelationInput | universeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing universes.
     */
    cursor?: universeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` universes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` universes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of universes.
     */
    distinct?: UniverseScalarFieldEnum | UniverseScalarFieldEnum[]
  }

  /**
   * universe create
   */
  export type universeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the universe
     */
    select?: universeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the universe
     */
    omit?: universeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: universeInclude<ExtArgs> | null
    /**
     * The data needed to create a universe.
     */
    data: XOR<universeCreateInput, universeUncheckedCreateInput>
  }

  /**
   * universe createMany
   */
  export type universeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many universes.
     */
    data: universeCreateManyInput | universeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * universe createManyAndReturn
   */
  export type universeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the universe
     */
    select?: universeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the universe
     */
    omit?: universeOmit<ExtArgs> | null
    /**
     * The data used to create many universes.
     */
    data: universeCreateManyInput | universeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: universeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * universe update
   */
  export type universeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the universe
     */
    select?: universeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the universe
     */
    omit?: universeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: universeInclude<ExtArgs> | null
    /**
     * The data needed to update a universe.
     */
    data: XOR<universeUpdateInput, universeUncheckedUpdateInput>
    /**
     * Choose, which universe to update.
     */
    where: universeWhereUniqueInput
  }

  /**
   * universe updateMany
   */
  export type universeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update universes.
     */
    data: XOR<universeUpdateManyMutationInput, universeUncheckedUpdateManyInput>
    /**
     * Filter which universes to update
     */
    where?: universeWhereInput
    /**
     * Limit how many universes to update.
     */
    limit?: number
  }

  /**
   * universe updateManyAndReturn
   */
  export type universeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the universe
     */
    select?: universeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the universe
     */
    omit?: universeOmit<ExtArgs> | null
    /**
     * The data used to update universes.
     */
    data: XOR<universeUpdateManyMutationInput, universeUncheckedUpdateManyInput>
    /**
     * Filter which universes to update
     */
    where?: universeWhereInput
    /**
     * Limit how many universes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: universeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * universe upsert
   */
  export type universeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the universe
     */
    select?: universeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the universe
     */
    omit?: universeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: universeInclude<ExtArgs> | null
    /**
     * The filter to search for the universe to update in case it exists.
     */
    where: universeWhereUniqueInput
    /**
     * In case the universe found by the `where` argument doesn't exist, create a new universe with this data.
     */
    create: XOR<universeCreateInput, universeUncheckedCreateInput>
    /**
     * In case the universe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<universeUpdateInput, universeUncheckedUpdateInput>
  }

  /**
   * universe delete
   */
  export type universeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the universe
     */
    select?: universeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the universe
     */
    omit?: universeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: universeInclude<ExtArgs> | null
    /**
     * Filter which universe to delete.
     */
    where: universeWhereUniqueInput
  }

  /**
   * universe deleteMany
   */
  export type universeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which universes to delete
     */
    where?: universeWhereInput
    /**
     * Limit how many universes to delete.
     */
    limit?: number
  }

  /**
   * universe without action
   */
  export type universeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the universe
     */
    select?: universeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the universe
     */
    omit?: universeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: universeInclude<ExtArgs> | null
  }


  /**
   * Model raw_fundamentals
   */

  export type AggregateRaw_fundamentals = {
    _count: Raw_fundamentalsCountAggregateOutputType | null
    _avg: Raw_fundamentalsAvgAggregateOutputType | null
    _sum: Raw_fundamentalsSumAggregateOutputType | null
    _min: Raw_fundamentalsMinAggregateOutputType | null
    _max: Raw_fundamentalsMaxAggregateOutputType | null
  }

  export type Raw_fundamentalsAvgAggregateOutputType = {
    id: number | null
    value: Decimal | null
  }

  export type Raw_fundamentalsSumAggregateOutputType = {
    id: bigint | null
    value: Decimal | null
  }

  export type Raw_fundamentalsMinAggregateOutputType = {
    id: bigint | null
    cik: string | null
    ticker: string | null
    taxonomy: string | null
    tag: string | null
    unit: string | null
    period_start: Date | null
    period_end: Date | null
    filing_date: Date | null
    accession: string | null
    form: string | null
    value: Decimal | null
    loaded_at: Date | null
  }

  export type Raw_fundamentalsMaxAggregateOutputType = {
    id: bigint | null
    cik: string | null
    ticker: string | null
    taxonomy: string | null
    tag: string | null
    unit: string | null
    period_start: Date | null
    period_end: Date | null
    filing_date: Date | null
    accession: string | null
    form: string | null
    value: Decimal | null
    loaded_at: Date | null
  }

  export type Raw_fundamentalsCountAggregateOutputType = {
    id: number
    cik: number
    ticker: number
    taxonomy: number
    tag: number
    unit: number
    period_start: number
    period_end: number
    filing_date: number
    accession: number
    form: number
    value: number
    loaded_at: number
    _all: number
  }


  export type Raw_fundamentalsAvgAggregateInputType = {
    id?: true
    value?: true
  }

  export type Raw_fundamentalsSumAggregateInputType = {
    id?: true
    value?: true
  }

  export type Raw_fundamentalsMinAggregateInputType = {
    id?: true
    cik?: true
    ticker?: true
    taxonomy?: true
    tag?: true
    unit?: true
    period_start?: true
    period_end?: true
    filing_date?: true
    accession?: true
    form?: true
    value?: true
    loaded_at?: true
  }

  export type Raw_fundamentalsMaxAggregateInputType = {
    id?: true
    cik?: true
    ticker?: true
    taxonomy?: true
    tag?: true
    unit?: true
    period_start?: true
    period_end?: true
    filing_date?: true
    accession?: true
    form?: true
    value?: true
    loaded_at?: true
  }

  export type Raw_fundamentalsCountAggregateInputType = {
    id?: true
    cik?: true
    ticker?: true
    taxonomy?: true
    tag?: true
    unit?: true
    period_start?: true
    period_end?: true
    filing_date?: true
    accession?: true
    form?: true
    value?: true
    loaded_at?: true
    _all?: true
  }

  export type Raw_fundamentalsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which raw_fundamentals to aggregate.
     */
    where?: raw_fundamentalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of raw_fundamentals to fetch.
     */
    orderBy?: raw_fundamentalsOrderByWithRelationInput | raw_fundamentalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: raw_fundamentalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` raw_fundamentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` raw_fundamentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned raw_fundamentals
    **/
    _count?: true | Raw_fundamentalsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Raw_fundamentalsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Raw_fundamentalsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Raw_fundamentalsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Raw_fundamentalsMaxAggregateInputType
  }

  export type GetRaw_fundamentalsAggregateType<T extends Raw_fundamentalsAggregateArgs> = {
        [P in keyof T & keyof AggregateRaw_fundamentals]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRaw_fundamentals[P]>
      : GetScalarType<T[P], AggregateRaw_fundamentals[P]>
  }




  export type raw_fundamentalsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: raw_fundamentalsWhereInput
    orderBy?: raw_fundamentalsOrderByWithAggregationInput | raw_fundamentalsOrderByWithAggregationInput[]
    by: Raw_fundamentalsScalarFieldEnum[] | Raw_fundamentalsScalarFieldEnum
    having?: raw_fundamentalsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Raw_fundamentalsCountAggregateInputType | true
    _avg?: Raw_fundamentalsAvgAggregateInputType
    _sum?: Raw_fundamentalsSumAggregateInputType
    _min?: Raw_fundamentalsMinAggregateInputType
    _max?: Raw_fundamentalsMaxAggregateInputType
  }

  export type Raw_fundamentalsGroupByOutputType = {
    id: bigint
    cik: string
    ticker: string | null
    taxonomy: string
    tag: string
    unit: string
    period_start: Date | null
    period_end: Date
    filing_date: Date
    accession: string | null
    form: string | null
    value: Decimal | null
    loaded_at: Date
    _count: Raw_fundamentalsCountAggregateOutputType | null
    _avg: Raw_fundamentalsAvgAggregateOutputType | null
    _sum: Raw_fundamentalsSumAggregateOutputType | null
    _min: Raw_fundamentalsMinAggregateOutputType | null
    _max: Raw_fundamentalsMaxAggregateOutputType | null
  }

  type GetRaw_fundamentalsGroupByPayload<T extends raw_fundamentalsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Raw_fundamentalsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Raw_fundamentalsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Raw_fundamentalsGroupByOutputType[P]>
            : GetScalarType<T[P], Raw_fundamentalsGroupByOutputType[P]>
        }
      >
    >


  export type raw_fundamentalsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cik?: boolean
    ticker?: boolean
    taxonomy?: boolean
    tag?: boolean
    unit?: boolean
    period_start?: boolean
    period_end?: boolean
    filing_date?: boolean
    accession?: boolean
    form?: boolean
    value?: boolean
    loaded_at?: boolean
  }, ExtArgs["result"]["raw_fundamentals"]>

  export type raw_fundamentalsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cik?: boolean
    ticker?: boolean
    taxonomy?: boolean
    tag?: boolean
    unit?: boolean
    period_start?: boolean
    period_end?: boolean
    filing_date?: boolean
    accession?: boolean
    form?: boolean
    value?: boolean
    loaded_at?: boolean
  }, ExtArgs["result"]["raw_fundamentals"]>

  export type raw_fundamentalsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cik?: boolean
    ticker?: boolean
    taxonomy?: boolean
    tag?: boolean
    unit?: boolean
    period_start?: boolean
    period_end?: boolean
    filing_date?: boolean
    accession?: boolean
    form?: boolean
    value?: boolean
    loaded_at?: boolean
  }, ExtArgs["result"]["raw_fundamentals"]>

  export type raw_fundamentalsSelectScalar = {
    id?: boolean
    cik?: boolean
    ticker?: boolean
    taxonomy?: boolean
    tag?: boolean
    unit?: boolean
    period_start?: boolean
    period_end?: boolean
    filing_date?: boolean
    accession?: boolean
    form?: boolean
    value?: boolean
    loaded_at?: boolean
  }

  export type raw_fundamentalsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cik" | "ticker" | "taxonomy" | "tag" | "unit" | "period_start" | "period_end" | "filing_date" | "accession" | "form" | "value" | "loaded_at", ExtArgs["result"]["raw_fundamentals"]>

  export type $raw_fundamentalsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "raw_fundamentals"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      cik: string
      ticker: string | null
      taxonomy: string
      tag: string
      unit: string
      period_start: Date | null
      period_end: Date
      filing_date: Date
      accession: string | null
      form: string | null
      value: Prisma.Decimal | null
      loaded_at: Date
    }, ExtArgs["result"]["raw_fundamentals"]>
    composites: {}
  }

  type raw_fundamentalsGetPayload<S extends boolean | null | undefined | raw_fundamentalsDefaultArgs> = $Result.GetResult<Prisma.$raw_fundamentalsPayload, S>

  type raw_fundamentalsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<raw_fundamentalsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Raw_fundamentalsCountAggregateInputType | true
    }

  export interface raw_fundamentalsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['raw_fundamentals'], meta: { name: 'raw_fundamentals' } }
    /**
     * Find zero or one Raw_fundamentals that matches the filter.
     * @param {raw_fundamentalsFindUniqueArgs} args - Arguments to find a Raw_fundamentals
     * @example
     * // Get one Raw_fundamentals
     * const raw_fundamentals = await prisma.raw_fundamentals.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends raw_fundamentalsFindUniqueArgs>(args: SelectSubset<T, raw_fundamentalsFindUniqueArgs<ExtArgs>>): Prisma__raw_fundamentalsClient<$Result.GetResult<Prisma.$raw_fundamentalsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Raw_fundamentals that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {raw_fundamentalsFindUniqueOrThrowArgs} args - Arguments to find a Raw_fundamentals
     * @example
     * // Get one Raw_fundamentals
     * const raw_fundamentals = await prisma.raw_fundamentals.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends raw_fundamentalsFindUniqueOrThrowArgs>(args: SelectSubset<T, raw_fundamentalsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__raw_fundamentalsClient<$Result.GetResult<Prisma.$raw_fundamentalsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Raw_fundamentals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_fundamentalsFindFirstArgs} args - Arguments to find a Raw_fundamentals
     * @example
     * // Get one Raw_fundamentals
     * const raw_fundamentals = await prisma.raw_fundamentals.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends raw_fundamentalsFindFirstArgs>(args?: SelectSubset<T, raw_fundamentalsFindFirstArgs<ExtArgs>>): Prisma__raw_fundamentalsClient<$Result.GetResult<Prisma.$raw_fundamentalsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Raw_fundamentals that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_fundamentalsFindFirstOrThrowArgs} args - Arguments to find a Raw_fundamentals
     * @example
     * // Get one Raw_fundamentals
     * const raw_fundamentals = await prisma.raw_fundamentals.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends raw_fundamentalsFindFirstOrThrowArgs>(args?: SelectSubset<T, raw_fundamentalsFindFirstOrThrowArgs<ExtArgs>>): Prisma__raw_fundamentalsClient<$Result.GetResult<Prisma.$raw_fundamentalsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Raw_fundamentals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_fundamentalsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Raw_fundamentals
     * const raw_fundamentals = await prisma.raw_fundamentals.findMany()
     * 
     * // Get first 10 Raw_fundamentals
     * const raw_fundamentals = await prisma.raw_fundamentals.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raw_fundamentalsWithIdOnly = await prisma.raw_fundamentals.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends raw_fundamentalsFindManyArgs>(args?: SelectSubset<T, raw_fundamentalsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$raw_fundamentalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Raw_fundamentals.
     * @param {raw_fundamentalsCreateArgs} args - Arguments to create a Raw_fundamentals.
     * @example
     * // Create one Raw_fundamentals
     * const Raw_fundamentals = await prisma.raw_fundamentals.create({
     *   data: {
     *     // ... data to create a Raw_fundamentals
     *   }
     * })
     * 
     */
    create<T extends raw_fundamentalsCreateArgs>(args: SelectSubset<T, raw_fundamentalsCreateArgs<ExtArgs>>): Prisma__raw_fundamentalsClient<$Result.GetResult<Prisma.$raw_fundamentalsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Raw_fundamentals.
     * @param {raw_fundamentalsCreateManyArgs} args - Arguments to create many Raw_fundamentals.
     * @example
     * // Create many Raw_fundamentals
     * const raw_fundamentals = await prisma.raw_fundamentals.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends raw_fundamentalsCreateManyArgs>(args?: SelectSubset<T, raw_fundamentalsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Raw_fundamentals and returns the data saved in the database.
     * @param {raw_fundamentalsCreateManyAndReturnArgs} args - Arguments to create many Raw_fundamentals.
     * @example
     * // Create many Raw_fundamentals
     * const raw_fundamentals = await prisma.raw_fundamentals.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Raw_fundamentals and only return the `id`
     * const raw_fundamentalsWithIdOnly = await prisma.raw_fundamentals.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends raw_fundamentalsCreateManyAndReturnArgs>(args?: SelectSubset<T, raw_fundamentalsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$raw_fundamentalsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Raw_fundamentals.
     * @param {raw_fundamentalsDeleteArgs} args - Arguments to delete one Raw_fundamentals.
     * @example
     * // Delete one Raw_fundamentals
     * const Raw_fundamentals = await prisma.raw_fundamentals.delete({
     *   where: {
     *     // ... filter to delete one Raw_fundamentals
     *   }
     * })
     * 
     */
    delete<T extends raw_fundamentalsDeleteArgs>(args: SelectSubset<T, raw_fundamentalsDeleteArgs<ExtArgs>>): Prisma__raw_fundamentalsClient<$Result.GetResult<Prisma.$raw_fundamentalsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Raw_fundamentals.
     * @param {raw_fundamentalsUpdateArgs} args - Arguments to update one Raw_fundamentals.
     * @example
     * // Update one Raw_fundamentals
     * const raw_fundamentals = await prisma.raw_fundamentals.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends raw_fundamentalsUpdateArgs>(args: SelectSubset<T, raw_fundamentalsUpdateArgs<ExtArgs>>): Prisma__raw_fundamentalsClient<$Result.GetResult<Prisma.$raw_fundamentalsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Raw_fundamentals.
     * @param {raw_fundamentalsDeleteManyArgs} args - Arguments to filter Raw_fundamentals to delete.
     * @example
     * // Delete a few Raw_fundamentals
     * const { count } = await prisma.raw_fundamentals.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends raw_fundamentalsDeleteManyArgs>(args?: SelectSubset<T, raw_fundamentalsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Raw_fundamentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_fundamentalsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Raw_fundamentals
     * const raw_fundamentals = await prisma.raw_fundamentals.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends raw_fundamentalsUpdateManyArgs>(args: SelectSubset<T, raw_fundamentalsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Raw_fundamentals and returns the data updated in the database.
     * @param {raw_fundamentalsUpdateManyAndReturnArgs} args - Arguments to update many Raw_fundamentals.
     * @example
     * // Update many Raw_fundamentals
     * const raw_fundamentals = await prisma.raw_fundamentals.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Raw_fundamentals and only return the `id`
     * const raw_fundamentalsWithIdOnly = await prisma.raw_fundamentals.updateManyAndReturn({
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
    updateManyAndReturn<T extends raw_fundamentalsUpdateManyAndReturnArgs>(args: SelectSubset<T, raw_fundamentalsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$raw_fundamentalsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Raw_fundamentals.
     * @param {raw_fundamentalsUpsertArgs} args - Arguments to update or create a Raw_fundamentals.
     * @example
     * // Update or create a Raw_fundamentals
     * const raw_fundamentals = await prisma.raw_fundamentals.upsert({
     *   create: {
     *     // ... data to create a Raw_fundamentals
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Raw_fundamentals we want to update
     *   }
     * })
     */
    upsert<T extends raw_fundamentalsUpsertArgs>(args: SelectSubset<T, raw_fundamentalsUpsertArgs<ExtArgs>>): Prisma__raw_fundamentalsClient<$Result.GetResult<Prisma.$raw_fundamentalsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Raw_fundamentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_fundamentalsCountArgs} args - Arguments to filter Raw_fundamentals to count.
     * @example
     * // Count the number of Raw_fundamentals
     * const count = await prisma.raw_fundamentals.count({
     *   where: {
     *     // ... the filter for the Raw_fundamentals we want to count
     *   }
     * })
    **/
    count<T extends raw_fundamentalsCountArgs>(
      args?: Subset<T, raw_fundamentalsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Raw_fundamentalsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Raw_fundamentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Raw_fundamentalsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Raw_fundamentalsAggregateArgs>(args: Subset<T, Raw_fundamentalsAggregateArgs>): Prisma.PrismaPromise<GetRaw_fundamentalsAggregateType<T>>

    /**
     * Group by Raw_fundamentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_fundamentalsGroupByArgs} args - Group by arguments.
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
      T extends raw_fundamentalsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: raw_fundamentalsGroupByArgs['orderBy'] }
        : { orderBy?: raw_fundamentalsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, raw_fundamentalsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaw_fundamentalsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the raw_fundamentals model
   */
  readonly fields: raw_fundamentalsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for raw_fundamentals.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__raw_fundamentalsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the raw_fundamentals model
   */
  interface raw_fundamentalsFieldRefs {
    readonly id: FieldRef<"raw_fundamentals", 'BigInt'>
    readonly cik: FieldRef<"raw_fundamentals", 'String'>
    readonly ticker: FieldRef<"raw_fundamentals", 'String'>
    readonly taxonomy: FieldRef<"raw_fundamentals", 'String'>
    readonly tag: FieldRef<"raw_fundamentals", 'String'>
    readonly unit: FieldRef<"raw_fundamentals", 'String'>
    readonly period_start: FieldRef<"raw_fundamentals", 'DateTime'>
    readonly period_end: FieldRef<"raw_fundamentals", 'DateTime'>
    readonly filing_date: FieldRef<"raw_fundamentals", 'DateTime'>
    readonly accession: FieldRef<"raw_fundamentals", 'String'>
    readonly form: FieldRef<"raw_fundamentals", 'String'>
    readonly value: FieldRef<"raw_fundamentals", 'Decimal'>
    readonly loaded_at: FieldRef<"raw_fundamentals", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * raw_fundamentals findUnique
   */
  export type raw_fundamentalsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_fundamentals
     */
    select?: raw_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_fundamentals
     */
    omit?: raw_fundamentalsOmit<ExtArgs> | null
    /**
     * Filter, which raw_fundamentals to fetch.
     */
    where: raw_fundamentalsWhereUniqueInput
  }

  /**
   * raw_fundamentals findUniqueOrThrow
   */
  export type raw_fundamentalsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_fundamentals
     */
    select?: raw_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_fundamentals
     */
    omit?: raw_fundamentalsOmit<ExtArgs> | null
    /**
     * Filter, which raw_fundamentals to fetch.
     */
    where: raw_fundamentalsWhereUniqueInput
  }

  /**
   * raw_fundamentals findFirst
   */
  export type raw_fundamentalsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_fundamentals
     */
    select?: raw_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_fundamentals
     */
    omit?: raw_fundamentalsOmit<ExtArgs> | null
    /**
     * Filter, which raw_fundamentals to fetch.
     */
    where?: raw_fundamentalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of raw_fundamentals to fetch.
     */
    orderBy?: raw_fundamentalsOrderByWithRelationInput | raw_fundamentalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for raw_fundamentals.
     */
    cursor?: raw_fundamentalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` raw_fundamentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` raw_fundamentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of raw_fundamentals.
     */
    distinct?: Raw_fundamentalsScalarFieldEnum | Raw_fundamentalsScalarFieldEnum[]
  }

  /**
   * raw_fundamentals findFirstOrThrow
   */
  export type raw_fundamentalsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_fundamentals
     */
    select?: raw_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_fundamentals
     */
    omit?: raw_fundamentalsOmit<ExtArgs> | null
    /**
     * Filter, which raw_fundamentals to fetch.
     */
    where?: raw_fundamentalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of raw_fundamentals to fetch.
     */
    orderBy?: raw_fundamentalsOrderByWithRelationInput | raw_fundamentalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for raw_fundamentals.
     */
    cursor?: raw_fundamentalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` raw_fundamentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` raw_fundamentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of raw_fundamentals.
     */
    distinct?: Raw_fundamentalsScalarFieldEnum | Raw_fundamentalsScalarFieldEnum[]
  }

  /**
   * raw_fundamentals findMany
   */
  export type raw_fundamentalsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_fundamentals
     */
    select?: raw_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_fundamentals
     */
    omit?: raw_fundamentalsOmit<ExtArgs> | null
    /**
     * Filter, which raw_fundamentals to fetch.
     */
    where?: raw_fundamentalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of raw_fundamentals to fetch.
     */
    orderBy?: raw_fundamentalsOrderByWithRelationInput | raw_fundamentalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing raw_fundamentals.
     */
    cursor?: raw_fundamentalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` raw_fundamentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` raw_fundamentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of raw_fundamentals.
     */
    distinct?: Raw_fundamentalsScalarFieldEnum | Raw_fundamentalsScalarFieldEnum[]
  }

  /**
   * raw_fundamentals create
   */
  export type raw_fundamentalsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_fundamentals
     */
    select?: raw_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_fundamentals
     */
    omit?: raw_fundamentalsOmit<ExtArgs> | null
    /**
     * The data needed to create a raw_fundamentals.
     */
    data: XOR<raw_fundamentalsCreateInput, raw_fundamentalsUncheckedCreateInput>
  }

  /**
   * raw_fundamentals createMany
   */
  export type raw_fundamentalsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many raw_fundamentals.
     */
    data: raw_fundamentalsCreateManyInput | raw_fundamentalsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * raw_fundamentals createManyAndReturn
   */
  export type raw_fundamentalsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_fundamentals
     */
    select?: raw_fundamentalsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the raw_fundamentals
     */
    omit?: raw_fundamentalsOmit<ExtArgs> | null
    /**
     * The data used to create many raw_fundamentals.
     */
    data: raw_fundamentalsCreateManyInput | raw_fundamentalsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * raw_fundamentals update
   */
  export type raw_fundamentalsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_fundamentals
     */
    select?: raw_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_fundamentals
     */
    omit?: raw_fundamentalsOmit<ExtArgs> | null
    /**
     * The data needed to update a raw_fundamentals.
     */
    data: XOR<raw_fundamentalsUpdateInput, raw_fundamentalsUncheckedUpdateInput>
    /**
     * Choose, which raw_fundamentals to update.
     */
    where: raw_fundamentalsWhereUniqueInput
  }

  /**
   * raw_fundamentals updateMany
   */
  export type raw_fundamentalsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update raw_fundamentals.
     */
    data: XOR<raw_fundamentalsUpdateManyMutationInput, raw_fundamentalsUncheckedUpdateManyInput>
    /**
     * Filter which raw_fundamentals to update
     */
    where?: raw_fundamentalsWhereInput
    /**
     * Limit how many raw_fundamentals to update.
     */
    limit?: number
  }

  /**
   * raw_fundamentals updateManyAndReturn
   */
  export type raw_fundamentalsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_fundamentals
     */
    select?: raw_fundamentalsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the raw_fundamentals
     */
    omit?: raw_fundamentalsOmit<ExtArgs> | null
    /**
     * The data used to update raw_fundamentals.
     */
    data: XOR<raw_fundamentalsUpdateManyMutationInput, raw_fundamentalsUncheckedUpdateManyInput>
    /**
     * Filter which raw_fundamentals to update
     */
    where?: raw_fundamentalsWhereInput
    /**
     * Limit how many raw_fundamentals to update.
     */
    limit?: number
  }

  /**
   * raw_fundamentals upsert
   */
  export type raw_fundamentalsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_fundamentals
     */
    select?: raw_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_fundamentals
     */
    omit?: raw_fundamentalsOmit<ExtArgs> | null
    /**
     * The filter to search for the raw_fundamentals to update in case it exists.
     */
    where: raw_fundamentalsWhereUniqueInput
    /**
     * In case the raw_fundamentals found by the `where` argument doesn't exist, create a new raw_fundamentals with this data.
     */
    create: XOR<raw_fundamentalsCreateInput, raw_fundamentalsUncheckedCreateInput>
    /**
     * In case the raw_fundamentals was found with the provided `where` argument, update it with this data.
     */
    update: XOR<raw_fundamentalsUpdateInput, raw_fundamentalsUncheckedUpdateInput>
  }

  /**
   * raw_fundamentals delete
   */
  export type raw_fundamentalsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_fundamentals
     */
    select?: raw_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_fundamentals
     */
    omit?: raw_fundamentalsOmit<ExtArgs> | null
    /**
     * Filter which raw_fundamentals to delete.
     */
    where: raw_fundamentalsWhereUniqueInput
  }

  /**
   * raw_fundamentals deleteMany
   */
  export type raw_fundamentalsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which raw_fundamentals to delete
     */
    where?: raw_fundamentalsWhereInput
    /**
     * Limit how many raw_fundamentals to delete.
     */
    limit?: number
  }

  /**
   * raw_fundamentals without action
   */
  export type raw_fundamentalsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_fundamentals
     */
    select?: raw_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_fundamentals
     */
    omit?: raw_fundamentalsOmit<ExtArgs> | null
  }


  /**
   * Model raw_macro
   */

  export type AggregateRaw_macro = {
    _count: Raw_macroCountAggregateOutputType | null
    _avg: Raw_macroAvgAggregateOutputType | null
    _sum: Raw_macroSumAggregateOutputType | null
    _min: Raw_macroMinAggregateOutputType | null
    _max: Raw_macroMaxAggregateOutputType | null
  }

  export type Raw_macroAvgAggregateOutputType = {
    id: number | null
    value: Decimal | null
  }

  export type Raw_macroSumAggregateOutputType = {
    id: bigint | null
    value: Decimal | null
  }

  export type Raw_macroMinAggregateOutputType = {
    id: bigint | null
    series_id: string | null
    date: Date | null
    value: Decimal | null
    ingested_at: Date | null
  }

  export type Raw_macroMaxAggregateOutputType = {
    id: bigint | null
    series_id: string | null
    date: Date | null
    value: Decimal | null
    ingested_at: Date | null
  }

  export type Raw_macroCountAggregateOutputType = {
    id: number
    series_id: number
    date: number
    value: number
    ingested_at: number
    _all: number
  }


  export type Raw_macroAvgAggregateInputType = {
    id?: true
    value?: true
  }

  export type Raw_macroSumAggregateInputType = {
    id?: true
    value?: true
  }

  export type Raw_macroMinAggregateInputType = {
    id?: true
    series_id?: true
    date?: true
    value?: true
    ingested_at?: true
  }

  export type Raw_macroMaxAggregateInputType = {
    id?: true
    series_id?: true
    date?: true
    value?: true
    ingested_at?: true
  }

  export type Raw_macroCountAggregateInputType = {
    id?: true
    series_id?: true
    date?: true
    value?: true
    ingested_at?: true
    _all?: true
  }

  export type Raw_macroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which raw_macro to aggregate.
     */
    where?: raw_macroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of raw_macros to fetch.
     */
    orderBy?: raw_macroOrderByWithRelationInput | raw_macroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: raw_macroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` raw_macros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` raw_macros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned raw_macros
    **/
    _count?: true | Raw_macroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Raw_macroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Raw_macroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Raw_macroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Raw_macroMaxAggregateInputType
  }

  export type GetRaw_macroAggregateType<T extends Raw_macroAggregateArgs> = {
        [P in keyof T & keyof AggregateRaw_macro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRaw_macro[P]>
      : GetScalarType<T[P], AggregateRaw_macro[P]>
  }




  export type raw_macroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: raw_macroWhereInput
    orderBy?: raw_macroOrderByWithAggregationInput | raw_macroOrderByWithAggregationInput[]
    by: Raw_macroScalarFieldEnum[] | Raw_macroScalarFieldEnum
    having?: raw_macroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Raw_macroCountAggregateInputType | true
    _avg?: Raw_macroAvgAggregateInputType
    _sum?: Raw_macroSumAggregateInputType
    _min?: Raw_macroMinAggregateInputType
    _max?: Raw_macroMaxAggregateInputType
  }

  export type Raw_macroGroupByOutputType = {
    id: bigint
    series_id: string
    date: Date
    value: Decimal | null
    ingested_at: Date
    _count: Raw_macroCountAggregateOutputType | null
    _avg: Raw_macroAvgAggregateOutputType | null
    _sum: Raw_macroSumAggregateOutputType | null
    _min: Raw_macroMinAggregateOutputType | null
    _max: Raw_macroMaxAggregateOutputType | null
  }

  type GetRaw_macroGroupByPayload<T extends raw_macroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Raw_macroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Raw_macroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Raw_macroGroupByOutputType[P]>
            : GetScalarType<T[P], Raw_macroGroupByOutputType[P]>
        }
      >
    >


  export type raw_macroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    series_id?: boolean
    date?: boolean
    value?: boolean
    ingested_at?: boolean
  }, ExtArgs["result"]["raw_macro"]>

  export type raw_macroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    series_id?: boolean
    date?: boolean
    value?: boolean
    ingested_at?: boolean
  }, ExtArgs["result"]["raw_macro"]>

  export type raw_macroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    series_id?: boolean
    date?: boolean
    value?: boolean
    ingested_at?: boolean
  }, ExtArgs["result"]["raw_macro"]>

  export type raw_macroSelectScalar = {
    id?: boolean
    series_id?: boolean
    date?: boolean
    value?: boolean
    ingested_at?: boolean
  }

  export type raw_macroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "series_id" | "date" | "value" | "ingested_at", ExtArgs["result"]["raw_macro"]>

  export type $raw_macroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "raw_macro"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      series_id: string
      date: Date
      value: Prisma.Decimal | null
      ingested_at: Date
    }, ExtArgs["result"]["raw_macro"]>
    composites: {}
  }

  type raw_macroGetPayload<S extends boolean | null | undefined | raw_macroDefaultArgs> = $Result.GetResult<Prisma.$raw_macroPayload, S>

  type raw_macroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<raw_macroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Raw_macroCountAggregateInputType | true
    }

  export interface raw_macroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['raw_macro'], meta: { name: 'raw_macro' } }
    /**
     * Find zero or one Raw_macro that matches the filter.
     * @param {raw_macroFindUniqueArgs} args - Arguments to find a Raw_macro
     * @example
     * // Get one Raw_macro
     * const raw_macro = await prisma.raw_macro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends raw_macroFindUniqueArgs>(args: SelectSubset<T, raw_macroFindUniqueArgs<ExtArgs>>): Prisma__raw_macroClient<$Result.GetResult<Prisma.$raw_macroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Raw_macro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {raw_macroFindUniqueOrThrowArgs} args - Arguments to find a Raw_macro
     * @example
     * // Get one Raw_macro
     * const raw_macro = await prisma.raw_macro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends raw_macroFindUniqueOrThrowArgs>(args: SelectSubset<T, raw_macroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__raw_macroClient<$Result.GetResult<Prisma.$raw_macroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Raw_macro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_macroFindFirstArgs} args - Arguments to find a Raw_macro
     * @example
     * // Get one Raw_macro
     * const raw_macro = await prisma.raw_macro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends raw_macroFindFirstArgs>(args?: SelectSubset<T, raw_macroFindFirstArgs<ExtArgs>>): Prisma__raw_macroClient<$Result.GetResult<Prisma.$raw_macroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Raw_macro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_macroFindFirstOrThrowArgs} args - Arguments to find a Raw_macro
     * @example
     * // Get one Raw_macro
     * const raw_macro = await prisma.raw_macro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends raw_macroFindFirstOrThrowArgs>(args?: SelectSubset<T, raw_macroFindFirstOrThrowArgs<ExtArgs>>): Prisma__raw_macroClient<$Result.GetResult<Prisma.$raw_macroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Raw_macros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_macroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Raw_macros
     * const raw_macros = await prisma.raw_macro.findMany()
     * 
     * // Get first 10 Raw_macros
     * const raw_macros = await prisma.raw_macro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raw_macroWithIdOnly = await prisma.raw_macro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends raw_macroFindManyArgs>(args?: SelectSubset<T, raw_macroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$raw_macroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Raw_macro.
     * @param {raw_macroCreateArgs} args - Arguments to create a Raw_macro.
     * @example
     * // Create one Raw_macro
     * const Raw_macro = await prisma.raw_macro.create({
     *   data: {
     *     // ... data to create a Raw_macro
     *   }
     * })
     * 
     */
    create<T extends raw_macroCreateArgs>(args: SelectSubset<T, raw_macroCreateArgs<ExtArgs>>): Prisma__raw_macroClient<$Result.GetResult<Prisma.$raw_macroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Raw_macros.
     * @param {raw_macroCreateManyArgs} args - Arguments to create many Raw_macros.
     * @example
     * // Create many Raw_macros
     * const raw_macro = await prisma.raw_macro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends raw_macroCreateManyArgs>(args?: SelectSubset<T, raw_macroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Raw_macros and returns the data saved in the database.
     * @param {raw_macroCreateManyAndReturnArgs} args - Arguments to create many Raw_macros.
     * @example
     * // Create many Raw_macros
     * const raw_macro = await prisma.raw_macro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Raw_macros and only return the `id`
     * const raw_macroWithIdOnly = await prisma.raw_macro.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends raw_macroCreateManyAndReturnArgs>(args?: SelectSubset<T, raw_macroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$raw_macroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Raw_macro.
     * @param {raw_macroDeleteArgs} args - Arguments to delete one Raw_macro.
     * @example
     * // Delete one Raw_macro
     * const Raw_macro = await prisma.raw_macro.delete({
     *   where: {
     *     // ... filter to delete one Raw_macro
     *   }
     * })
     * 
     */
    delete<T extends raw_macroDeleteArgs>(args: SelectSubset<T, raw_macroDeleteArgs<ExtArgs>>): Prisma__raw_macroClient<$Result.GetResult<Prisma.$raw_macroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Raw_macro.
     * @param {raw_macroUpdateArgs} args - Arguments to update one Raw_macro.
     * @example
     * // Update one Raw_macro
     * const raw_macro = await prisma.raw_macro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends raw_macroUpdateArgs>(args: SelectSubset<T, raw_macroUpdateArgs<ExtArgs>>): Prisma__raw_macroClient<$Result.GetResult<Prisma.$raw_macroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Raw_macros.
     * @param {raw_macroDeleteManyArgs} args - Arguments to filter Raw_macros to delete.
     * @example
     * // Delete a few Raw_macros
     * const { count } = await prisma.raw_macro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends raw_macroDeleteManyArgs>(args?: SelectSubset<T, raw_macroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Raw_macros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_macroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Raw_macros
     * const raw_macro = await prisma.raw_macro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends raw_macroUpdateManyArgs>(args: SelectSubset<T, raw_macroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Raw_macros and returns the data updated in the database.
     * @param {raw_macroUpdateManyAndReturnArgs} args - Arguments to update many Raw_macros.
     * @example
     * // Update many Raw_macros
     * const raw_macro = await prisma.raw_macro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Raw_macros and only return the `id`
     * const raw_macroWithIdOnly = await prisma.raw_macro.updateManyAndReturn({
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
    updateManyAndReturn<T extends raw_macroUpdateManyAndReturnArgs>(args: SelectSubset<T, raw_macroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$raw_macroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Raw_macro.
     * @param {raw_macroUpsertArgs} args - Arguments to update or create a Raw_macro.
     * @example
     * // Update or create a Raw_macro
     * const raw_macro = await prisma.raw_macro.upsert({
     *   create: {
     *     // ... data to create a Raw_macro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Raw_macro we want to update
     *   }
     * })
     */
    upsert<T extends raw_macroUpsertArgs>(args: SelectSubset<T, raw_macroUpsertArgs<ExtArgs>>): Prisma__raw_macroClient<$Result.GetResult<Prisma.$raw_macroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Raw_macros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_macroCountArgs} args - Arguments to filter Raw_macros to count.
     * @example
     * // Count the number of Raw_macros
     * const count = await prisma.raw_macro.count({
     *   where: {
     *     // ... the filter for the Raw_macros we want to count
     *   }
     * })
    **/
    count<T extends raw_macroCountArgs>(
      args?: Subset<T, raw_macroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Raw_macroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Raw_macro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Raw_macroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Raw_macroAggregateArgs>(args: Subset<T, Raw_macroAggregateArgs>): Prisma.PrismaPromise<GetRaw_macroAggregateType<T>>

    /**
     * Group by Raw_macro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_macroGroupByArgs} args - Group by arguments.
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
      T extends raw_macroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: raw_macroGroupByArgs['orderBy'] }
        : { orderBy?: raw_macroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, raw_macroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaw_macroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the raw_macro model
   */
  readonly fields: raw_macroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for raw_macro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__raw_macroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the raw_macro model
   */
  interface raw_macroFieldRefs {
    readonly id: FieldRef<"raw_macro", 'BigInt'>
    readonly series_id: FieldRef<"raw_macro", 'String'>
    readonly date: FieldRef<"raw_macro", 'DateTime'>
    readonly value: FieldRef<"raw_macro", 'Decimal'>
    readonly ingested_at: FieldRef<"raw_macro", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * raw_macro findUnique
   */
  export type raw_macroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_macro
     */
    select?: raw_macroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_macro
     */
    omit?: raw_macroOmit<ExtArgs> | null
    /**
     * Filter, which raw_macro to fetch.
     */
    where: raw_macroWhereUniqueInput
  }

  /**
   * raw_macro findUniqueOrThrow
   */
  export type raw_macroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_macro
     */
    select?: raw_macroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_macro
     */
    omit?: raw_macroOmit<ExtArgs> | null
    /**
     * Filter, which raw_macro to fetch.
     */
    where: raw_macroWhereUniqueInput
  }

  /**
   * raw_macro findFirst
   */
  export type raw_macroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_macro
     */
    select?: raw_macroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_macro
     */
    omit?: raw_macroOmit<ExtArgs> | null
    /**
     * Filter, which raw_macro to fetch.
     */
    where?: raw_macroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of raw_macros to fetch.
     */
    orderBy?: raw_macroOrderByWithRelationInput | raw_macroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for raw_macros.
     */
    cursor?: raw_macroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` raw_macros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` raw_macros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of raw_macros.
     */
    distinct?: Raw_macroScalarFieldEnum | Raw_macroScalarFieldEnum[]
  }

  /**
   * raw_macro findFirstOrThrow
   */
  export type raw_macroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_macro
     */
    select?: raw_macroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_macro
     */
    omit?: raw_macroOmit<ExtArgs> | null
    /**
     * Filter, which raw_macro to fetch.
     */
    where?: raw_macroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of raw_macros to fetch.
     */
    orderBy?: raw_macroOrderByWithRelationInput | raw_macroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for raw_macros.
     */
    cursor?: raw_macroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` raw_macros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` raw_macros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of raw_macros.
     */
    distinct?: Raw_macroScalarFieldEnum | Raw_macroScalarFieldEnum[]
  }

  /**
   * raw_macro findMany
   */
  export type raw_macroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_macro
     */
    select?: raw_macroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_macro
     */
    omit?: raw_macroOmit<ExtArgs> | null
    /**
     * Filter, which raw_macros to fetch.
     */
    where?: raw_macroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of raw_macros to fetch.
     */
    orderBy?: raw_macroOrderByWithRelationInput | raw_macroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing raw_macros.
     */
    cursor?: raw_macroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` raw_macros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` raw_macros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of raw_macros.
     */
    distinct?: Raw_macroScalarFieldEnum | Raw_macroScalarFieldEnum[]
  }

  /**
   * raw_macro create
   */
  export type raw_macroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_macro
     */
    select?: raw_macroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_macro
     */
    omit?: raw_macroOmit<ExtArgs> | null
    /**
     * The data needed to create a raw_macro.
     */
    data: XOR<raw_macroCreateInput, raw_macroUncheckedCreateInput>
  }

  /**
   * raw_macro createMany
   */
  export type raw_macroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many raw_macros.
     */
    data: raw_macroCreateManyInput | raw_macroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * raw_macro createManyAndReturn
   */
  export type raw_macroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_macro
     */
    select?: raw_macroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the raw_macro
     */
    omit?: raw_macroOmit<ExtArgs> | null
    /**
     * The data used to create many raw_macros.
     */
    data: raw_macroCreateManyInput | raw_macroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * raw_macro update
   */
  export type raw_macroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_macro
     */
    select?: raw_macroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_macro
     */
    omit?: raw_macroOmit<ExtArgs> | null
    /**
     * The data needed to update a raw_macro.
     */
    data: XOR<raw_macroUpdateInput, raw_macroUncheckedUpdateInput>
    /**
     * Choose, which raw_macro to update.
     */
    where: raw_macroWhereUniqueInput
  }

  /**
   * raw_macro updateMany
   */
  export type raw_macroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update raw_macros.
     */
    data: XOR<raw_macroUpdateManyMutationInput, raw_macroUncheckedUpdateManyInput>
    /**
     * Filter which raw_macros to update
     */
    where?: raw_macroWhereInput
    /**
     * Limit how many raw_macros to update.
     */
    limit?: number
  }

  /**
   * raw_macro updateManyAndReturn
   */
  export type raw_macroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_macro
     */
    select?: raw_macroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the raw_macro
     */
    omit?: raw_macroOmit<ExtArgs> | null
    /**
     * The data used to update raw_macros.
     */
    data: XOR<raw_macroUpdateManyMutationInput, raw_macroUncheckedUpdateManyInput>
    /**
     * Filter which raw_macros to update
     */
    where?: raw_macroWhereInput
    /**
     * Limit how many raw_macros to update.
     */
    limit?: number
  }

  /**
   * raw_macro upsert
   */
  export type raw_macroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_macro
     */
    select?: raw_macroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_macro
     */
    omit?: raw_macroOmit<ExtArgs> | null
    /**
     * The filter to search for the raw_macro to update in case it exists.
     */
    where: raw_macroWhereUniqueInput
    /**
     * In case the raw_macro found by the `where` argument doesn't exist, create a new raw_macro with this data.
     */
    create: XOR<raw_macroCreateInput, raw_macroUncheckedCreateInput>
    /**
     * In case the raw_macro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<raw_macroUpdateInput, raw_macroUncheckedUpdateInput>
  }

  /**
   * raw_macro delete
   */
  export type raw_macroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_macro
     */
    select?: raw_macroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_macro
     */
    omit?: raw_macroOmit<ExtArgs> | null
    /**
     * Filter which raw_macro to delete.
     */
    where: raw_macroWhereUniqueInput
  }

  /**
   * raw_macro deleteMany
   */
  export type raw_macroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which raw_macros to delete
     */
    where?: raw_macroWhereInput
    /**
     * Limit how many raw_macros to delete.
     */
    limit?: number
  }

  /**
   * raw_macro without action
   */
  export type raw_macroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_macro
     */
    select?: raw_macroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_macro
     */
    omit?: raw_macroOmit<ExtArgs> | null
  }


  /**
   * Model raw_prices
   */

  export type AggregateRaw_prices = {
    _count: Raw_pricesCountAggregateOutputType | null
    _avg: Raw_pricesAvgAggregateOutputType | null
    _sum: Raw_pricesSumAggregateOutputType | null
    _min: Raw_pricesMinAggregateOutputType | null
    _max: Raw_pricesMaxAggregateOutputType | null
  }

  export type Raw_pricesAvgAggregateOutputType = {
    id: number | null
    open: Decimal | null
    high: Decimal | null
    low: Decimal | null
    close: Decimal | null
    adj_close: Decimal | null
    volume: number | null
  }

  export type Raw_pricesSumAggregateOutputType = {
    id: bigint | null
    open: Decimal | null
    high: Decimal | null
    low: Decimal | null
    close: Decimal | null
    adj_close: Decimal | null
    volume: bigint | null
  }

  export type Raw_pricesMinAggregateOutputType = {
    id: bigint | null
    ticker: string | null
    trade_date: Date | null
    open: Decimal | null
    high: Decimal | null
    low: Decimal | null
    close: Decimal | null
    adj_close: Decimal | null
    volume: bigint | null
    ingested_at: Date | null
  }

  export type Raw_pricesMaxAggregateOutputType = {
    id: bigint | null
    ticker: string | null
    trade_date: Date | null
    open: Decimal | null
    high: Decimal | null
    low: Decimal | null
    close: Decimal | null
    adj_close: Decimal | null
    volume: bigint | null
    ingested_at: Date | null
  }

  export type Raw_pricesCountAggregateOutputType = {
    id: number
    ticker: number
    trade_date: number
    open: number
    high: number
    low: number
    close: number
    adj_close: number
    volume: number
    ingested_at: number
    _all: number
  }


  export type Raw_pricesAvgAggregateInputType = {
    id?: true
    open?: true
    high?: true
    low?: true
    close?: true
    adj_close?: true
    volume?: true
  }

  export type Raw_pricesSumAggregateInputType = {
    id?: true
    open?: true
    high?: true
    low?: true
    close?: true
    adj_close?: true
    volume?: true
  }

  export type Raw_pricesMinAggregateInputType = {
    id?: true
    ticker?: true
    trade_date?: true
    open?: true
    high?: true
    low?: true
    close?: true
    adj_close?: true
    volume?: true
    ingested_at?: true
  }

  export type Raw_pricesMaxAggregateInputType = {
    id?: true
    ticker?: true
    trade_date?: true
    open?: true
    high?: true
    low?: true
    close?: true
    adj_close?: true
    volume?: true
    ingested_at?: true
  }

  export type Raw_pricesCountAggregateInputType = {
    id?: true
    ticker?: true
    trade_date?: true
    open?: true
    high?: true
    low?: true
    close?: true
    adj_close?: true
    volume?: true
    ingested_at?: true
    _all?: true
  }

  export type Raw_pricesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which raw_prices to aggregate.
     */
    where?: raw_pricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of raw_prices to fetch.
     */
    orderBy?: raw_pricesOrderByWithRelationInput | raw_pricesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: raw_pricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` raw_prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` raw_prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned raw_prices
    **/
    _count?: true | Raw_pricesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Raw_pricesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Raw_pricesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Raw_pricesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Raw_pricesMaxAggregateInputType
  }

  export type GetRaw_pricesAggregateType<T extends Raw_pricesAggregateArgs> = {
        [P in keyof T & keyof AggregateRaw_prices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRaw_prices[P]>
      : GetScalarType<T[P], AggregateRaw_prices[P]>
  }




  export type raw_pricesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: raw_pricesWhereInput
    orderBy?: raw_pricesOrderByWithAggregationInput | raw_pricesOrderByWithAggregationInput[]
    by: Raw_pricesScalarFieldEnum[] | Raw_pricesScalarFieldEnum
    having?: raw_pricesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Raw_pricesCountAggregateInputType | true
    _avg?: Raw_pricesAvgAggregateInputType
    _sum?: Raw_pricesSumAggregateInputType
    _min?: Raw_pricesMinAggregateInputType
    _max?: Raw_pricesMaxAggregateInputType
  }

  export type Raw_pricesGroupByOutputType = {
    id: bigint
    ticker: string
    trade_date: Date
    open: Decimal | null
    high: Decimal | null
    low: Decimal | null
    close: Decimal | null
    adj_close: Decimal | null
    volume: bigint | null
    ingested_at: Date
    _count: Raw_pricesCountAggregateOutputType | null
    _avg: Raw_pricesAvgAggregateOutputType | null
    _sum: Raw_pricesSumAggregateOutputType | null
    _min: Raw_pricesMinAggregateOutputType | null
    _max: Raw_pricesMaxAggregateOutputType | null
  }

  type GetRaw_pricesGroupByPayload<T extends raw_pricesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Raw_pricesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Raw_pricesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Raw_pricesGroupByOutputType[P]>
            : GetScalarType<T[P], Raw_pricesGroupByOutputType[P]>
        }
      >
    >


  export type raw_pricesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticker?: boolean
    trade_date?: boolean
    open?: boolean
    high?: boolean
    low?: boolean
    close?: boolean
    adj_close?: boolean
    volume?: boolean
    ingested_at?: boolean
  }, ExtArgs["result"]["raw_prices"]>

  export type raw_pricesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticker?: boolean
    trade_date?: boolean
    open?: boolean
    high?: boolean
    low?: boolean
    close?: boolean
    adj_close?: boolean
    volume?: boolean
    ingested_at?: boolean
  }, ExtArgs["result"]["raw_prices"]>

  export type raw_pricesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticker?: boolean
    trade_date?: boolean
    open?: boolean
    high?: boolean
    low?: boolean
    close?: boolean
    adj_close?: boolean
    volume?: boolean
    ingested_at?: boolean
  }, ExtArgs["result"]["raw_prices"]>

  export type raw_pricesSelectScalar = {
    id?: boolean
    ticker?: boolean
    trade_date?: boolean
    open?: boolean
    high?: boolean
    low?: boolean
    close?: boolean
    adj_close?: boolean
    volume?: boolean
    ingested_at?: boolean
  }

  export type raw_pricesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticker" | "trade_date" | "open" | "high" | "low" | "close" | "adj_close" | "volume" | "ingested_at", ExtArgs["result"]["raw_prices"]>

  export type $raw_pricesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "raw_prices"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      ticker: string
      trade_date: Date
      open: Prisma.Decimal | null
      high: Prisma.Decimal | null
      low: Prisma.Decimal | null
      close: Prisma.Decimal | null
      adj_close: Prisma.Decimal | null
      volume: bigint | null
      ingested_at: Date
    }, ExtArgs["result"]["raw_prices"]>
    composites: {}
  }

  type raw_pricesGetPayload<S extends boolean | null | undefined | raw_pricesDefaultArgs> = $Result.GetResult<Prisma.$raw_pricesPayload, S>

  type raw_pricesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<raw_pricesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Raw_pricesCountAggregateInputType | true
    }

  export interface raw_pricesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['raw_prices'], meta: { name: 'raw_prices' } }
    /**
     * Find zero or one Raw_prices that matches the filter.
     * @param {raw_pricesFindUniqueArgs} args - Arguments to find a Raw_prices
     * @example
     * // Get one Raw_prices
     * const raw_prices = await prisma.raw_prices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends raw_pricesFindUniqueArgs>(args: SelectSubset<T, raw_pricesFindUniqueArgs<ExtArgs>>): Prisma__raw_pricesClient<$Result.GetResult<Prisma.$raw_pricesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Raw_prices that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {raw_pricesFindUniqueOrThrowArgs} args - Arguments to find a Raw_prices
     * @example
     * // Get one Raw_prices
     * const raw_prices = await prisma.raw_prices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends raw_pricesFindUniqueOrThrowArgs>(args: SelectSubset<T, raw_pricesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__raw_pricesClient<$Result.GetResult<Prisma.$raw_pricesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Raw_prices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_pricesFindFirstArgs} args - Arguments to find a Raw_prices
     * @example
     * // Get one Raw_prices
     * const raw_prices = await prisma.raw_prices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends raw_pricesFindFirstArgs>(args?: SelectSubset<T, raw_pricesFindFirstArgs<ExtArgs>>): Prisma__raw_pricesClient<$Result.GetResult<Prisma.$raw_pricesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Raw_prices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_pricesFindFirstOrThrowArgs} args - Arguments to find a Raw_prices
     * @example
     * // Get one Raw_prices
     * const raw_prices = await prisma.raw_prices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends raw_pricesFindFirstOrThrowArgs>(args?: SelectSubset<T, raw_pricesFindFirstOrThrowArgs<ExtArgs>>): Prisma__raw_pricesClient<$Result.GetResult<Prisma.$raw_pricesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Raw_prices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_pricesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Raw_prices
     * const raw_prices = await prisma.raw_prices.findMany()
     * 
     * // Get first 10 Raw_prices
     * const raw_prices = await prisma.raw_prices.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raw_pricesWithIdOnly = await prisma.raw_prices.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends raw_pricesFindManyArgs>(args?: SelectSubset<T, raw_pricesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$raw_pricesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Raw_prices.
     * @param {raw_pricesCreateArgs} args - Arguments to create a Raw_prices.
     * @example
     * // Create one Raw_prices
     * const Raw_prices = await prisma.raw_prices.create({
     *   data: {
     *     // ... data to create a Raw_prices
     *   }
     * })
     * 
     */
    create<T extends raw_pricesCreateArgs>(args: SelectSubset<T, raw_pricesCreateArgs<ExtArgs>>): Prisma__raw_pricesClient<$Result.GetResult<Prisma.$raw_pricesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Raw_prices.
     * @param {raw_pricesCreateManyArgs} args - Arguments to create many Raw_prices.
     * @example
     * // Create many Raw_prices
     * const raw_prices = await prisma.raw_prices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends raw_pricesCreateManyArgs>(args?: SelectSubset<T, raw_pricesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Raw_prices and returns the data saved in the database.
     * @param {raw_pricesCreateManyAndReturnArgs} args - Arguments to create many Raw_prices.
     * @example
     * // Create many Raw_prices
     * const raw_prices = await prisma.raw_prices.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Raw_prices and only return the `id`
     * const raw_pricesWithIdOnly = await prisma.raw_prices.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends raw_pricesCreateManyAndReturnArgs>(args?: SelectSubset<T, raw_pricesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$raw_pricesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Raw_prices.
     * @param {raw_pricesDeleteArgs} args - Arguments to delete one Raw_prices.
     * @example
     * // Delete one Raw_prices
     * const Raw_prices = await prisma.raw_prices.delete({
     *   where: {
     *     // ... filter to delete one Raw_prices
     *   }
     * })
     * 
     */
    delete<T extends raw_pricesDeleteArgs>(args: SelectSubset<T, raw_pricesDeleteArgs<ExtArgs>>): Prisma__raw_pricesClient<$Result.GetResult<Prisma.$raw_pricesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Raw_prices.
     * @param {raw_pricesUpdateArgs} args - Arguments to update one Raw_prices.
     * @example
     * // Update one Raw_prices
     * const raw_prices = await prisma.raw_prices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends raw_pricesUpdateArgs>(args: SelectSubset<T, raw_pricesUpdateArgs<ExtArgs>>): Prisma__raw_pricesClient<$Result.GetResult<Prisma.$raw_pricesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Raw_prices.
     * @param {raw_pricesDeleteManyArgs} args - Arguments to filter Raw_prices to delete.
     * @example
     * // Delete a few Raw_prices
     * const { count } = await prisma.raw_prices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends raw_pricesDeleteManyArgs>(args?: SelectSubset<T, raw_pricesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Raw_prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_pricesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Raw_prices
     * const raw_prices = await prisma.raw_prices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends raw_pricesUpdateManyArgs>(args: SelectSubset<T, raw_pricesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Raw_prices and returns the data updated in the database.
     * @param {raw_pricesUpdateManyAndReturnArgs} args - Arguments to update many Raw_prices.
     * @example
     * // Update many Raw_prices
     * const raw_prices = await prisma.raw_prices.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Raw_prices and only return the `id`
     * const raw_pricesWithIdOnly = await prisma.raw_prices.updateManyAndReturn({
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
    updateManyAndReturn<T extends raw_pricesUpdateManyAndReturnArgs>(args: SelectSubset<T, raw_pricesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$raw_pricesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Raw_prices.
     * @param {raw_pricesUpsertArgs} args - Arguments to update or create a Raw_prices.
     * @example
     * // Update or create a Raw_prices
     * const raw_prices = await prisma.raw_prices.upsert({
     *   create: {
     *     // ... data to create a Raw_prices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Raw_prices we want to update
     *   }
     * })
     */
    upsert<T extends raw_pricesUpsertArgs>(args: SelectSubset<T, raw_pricesUpsertArgs<ExtArgs>>): Prisma__raw_pricesClient<$Result.GetResult<Prisma.$raw_pricesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Raw_prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_pricesCountArgs} args - Arguments to filter Raw_prices to count.
     * @example
     * // Count the number of Raw_prices
     * const count = await prisma.raw_prices.count({
     *   where: {
     *     // ... the filter for the Raw_prices we want to count
     *   }
     * })
    **/
    count<T extends raw_pricesCountArgs>(
      args?: Subset<T, raw_pricesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Raw_pricesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Raw_prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Raw_pricesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Raw_pricesAggregateArgs>(args: Subset<T, Raw_pricesAggregateArgs>): Prisma.PrismaPromise<GetRaw_pricesAggregateType<T>>

    /**
     * Group by Raw_prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_pricesGroupByArgs} args - Group by arguments.
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
      T extends raw_pricesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: raw_pricesGroupByArgs['orderBy'] }
        : { orderBy?: raw_pricesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, raw_pricesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaw_pricesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the raw_prices model
   */
  readonly fields: raw_pricesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for raw_prices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__raw_pricesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the raw_prices model
   */
  interface raw_pricesFieldRefs {
    readonly id: FieldRef<"raw_prices", 'BigInt'>
    readonly ticker: FieldRef<"raw_prices", 'String'>
    readonly trade_date: FieldRef<"raw_prices", 'DateTime'>
    readonly open: FieldRef<"raw_prices", 'Decimal'>
    readonly high: FieldRef<"raw_prices", 'Decimal'>
    readonly low: FieldRef<"raw_prices", 'Decimal'>
    readonly close: FieldRef<"raw_prices", 'Decimal'>
    readonly adj_close: FieldRef<"raw_prices", 'Decimal'>
    readonly volume: FieldRef<"raw_prices", 'BigInt'>
    readonly ingested_at: FieldRef<"raw_prices", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * raw_prices findUnique
   */
  export type raw_pricesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_prices
     */
    select?: raw_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_prices
     */
    omit?: raw_pricesOmit<ExtArgs> | null
    /**
     * Filter, which raw_prices to fetch.
     */
    where: raw_pricesWhereUniqueInput
  }

  /**
   * raw_prices findUniqueOrThrow
   */
  export type raw_pricesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_prices
     */
    select?: raw_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_prices
     */
    omit?: raw_pricesOmit<ExtArgs> | null
    /**
     * Filter, which raw_prices to fetch.
     */
    where: raw_pricesWhereUniqueInput
  }

  /**
   * raw_prices findFirst
   */
  export type raw_pricesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_prices
     */
    select?: raw_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_prices
     */
    omit?: raw_pricesOmit<ExtArgs> | null
    /**
     * Filter, which raw_prices to fetch.
     */
    where?: raw_pricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of raw_prices to fetch.
     */
    orderBy?: raw_pricesOrderByWithRelationInput | raw_pricesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for raw_prices.
     */
    cursor?: raw_pricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` raw_prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` raw_prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of raw_prices.
     */
    distinct?: Raw_pricesScalarFieldEnum | Raw_pricesScalarFieldEnum[]
  }

  /**
   * raw_prices findFirstOrThrow
   */
  export type raw_pricesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_prices
     */
    select?: raw_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_prices
     */
    omit?: raw_pricesOmit<ExtArgs> | null
    /**
     * Filter, which raw_prices to fetch.
     */
    where?: raw_pricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of raw_prices to fetch.
     */
    orderBy?: raw_pricesOrderByWithRelationInput | raw_pricesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for raw_prices.
     */
    cursor?: raw_pricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` raw_prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` raw_prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of raw_prices.
     */
    distinct?: Raw_pricesScalarFieldEnum | Raw_pricesScalarFieldEnum[]
  }

  /**
   * raw_prices findMany
   */
  export type raw_pricesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_prices
     */
    select?: raw_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_prices
     */
    omit?: raw_pricesOmit<ExtArgs> | null
    /**
     * Filter, which raw_prices to fetch.
     */
    where?: raw_pricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of raw_prices to fetch.
     */
    orderBy?: raw_pricesOrderByWithRelationInput | raw_pricesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing raw_prices.
     */
    cursor?: raw_pricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` raw_prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` raw_prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of raw_prices.
     */
    distinct?: Raw_pricesScalarFieldEnum | Raw_pricesScalarFieldEnum[]
  }

  /**
   * raw_prices create
   */
  export type raw_pricesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_prices
     */
    select?: raw_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_prices
     */
    omit?: raw_pricesOmit<ExtArgs> | null
    /**
     * The data needed to create a raw_prices.
     */
    data: XOR<raw_pricesCreateInput, raw_pricesUncheckedCreateInput>
  }

  /**
   * raw_prices createMany
   */
  export type raw_pricesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many raw_prices.
     */
    data: raw_pricesCreateManyInput | raw_pricesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * raw_prices createManyAndReturn
   */
  export type raw_pricesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_prices
     */
    select?: raw_pricesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the raw_prices
     */
    omit?: raw_pricesOmit<ExtArgs> | null
    /**
     * The data used to create many raw_prices.
     */
    data: raw_pricesCreateManyInput | raw_pricesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * raw_prices update
   */
  export type raw_pricesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_prices
     */
    select?: raw_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_prices
     */
    omit?: raw_pricesOmit<ExtArgs> | null
    /**
     * The data needed to update a raw_prices.
     */
    data: XOR<raw_pricesUpdateInput, raw_pricesUncheckedUpdateInput>
    /**
     * Choose, which raw_prices to update.
     */
    where: raw_pricesWhereUniqueInput
  }

  /**
   * raw_prices updateMany
   */
  export type raw_pricesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update raw_prices.
     */
    data: XOR<raw_pricesUpdateManyMutationInput, raw_pricesUncheckedUpdateManyInput>
    /**
     * Filter which raw_prices to update
     */
    where?: raw_pricesWhereInput
    /**
     * Limit how many raw_prices to update.
     */
    limit?: number
  }

  /**
   * raw_prices updateManyAndReturn
   */
  export type raw_pricesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_prices
     */
    select?: raw_pricesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the raw_prices
     */
    omit?: raw_pricesOmit<ExtArgs> | null
    /**
     * The data used to update raw_prices.
     */
    data: XOR<raw_pricesUpdateManyMutationInput, raw_pricesUncheckedUpdateManyInput>
    /**
     * Filter which raw_prices to update
     */
    where?: raw_pricesWhereInput
    /**
     * Limit how many raw_prices to update.
     */
    limit?: number
  }

  /**
   * raw_prices upsert
   */
  export type raw_pricesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_prices
     */
    select?: raw_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_prices
     */
    omit?: raw_pricesOmit<ExtArgs> | null
    /**
     * The filter to search for the raw_prices to update in case it exists.
     */
    where: raw_pricesWhereUniqueInput
    /**
     * In case the raw_prices found by the `where` argument doesn't exist, create a new raw_prices with this data.
     */
    create: XOR<raw_pricesCreateInput, raw_pricesUncheckedCreateInput>
    /**
     * In case the raw_prices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<raw_pricesUpdateInput, raw_pricesUncheckedUpdateInput>
  }

  /**
   * raw_prices delete
   */
  export type raw_pricesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_prices
     */
    select?: raw_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_prices
     */
    omit?: raw_pricesOmit<ExtArgs> | null
    /**
     * Filter which raw_prices to delete.
     */
    where: raw_pricesWhereUniqueInput
  }

  /**
   * raw_prices deleteMany
   */
  export type raw_pricesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which raw_prices to delete
     */
    where?: raw_pricesWhereInput
    /**
     * Limit how many raw_prices to delete.
     */
    limit?: number
  }

  /**
   * raw_prices without action
   */
  export type raw_pricesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_prices
     */
    select?: raw_pricesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_prices
     */
    omit?: raw_pricesOmit<ExtArgs> | null
  }


  /**
   * Model raw_tiingo_fundamentals
   */

  export type AggregateRaw_tiingo_fundamentals = {
    _count: Raw_tiingo_fundamentalsCountAggregateOutputType | null
    _min: Raw_tiingo_fundamentalsMinAggregateOutputType | null
    _max: Raw_tiingo_fundamentalsMaxAggregateOutputType | null
  }

  export type Raw_tiingo_fundamentalsMinAggregateOutputType = {
    ticker: string | null
    tiingo_ticker: string | null
    ingested_at: Date | null
  }

  export type Raw_tiingo_fundamentalsMaxAggregateOutputType = {
    ticker: string | null
    tiingo_ticker: string | null
    ingested_at: Date | null
  }

  export type Raw_tiingo_fundamentalsCountAggregateOutputType = {
    ticker: number
    tiingo_ticker: number
    raw_payload: number
    ingested_at: number
    _all: number
  }


  export type Raw_tiingo_fundamentalsMinAggregateInputType = {
    ticker?: true
    tiingo_ticker?: true
    ingested_at?: true
  }

  export type Raw_tiingo_fundamentalsMaxAggregateInputType = {
    ticker?: true
    tiingo_ticker?: true
    ingested_at?: true
  }

  export type Raw_tiingo_fundamentalsCountAggregateInputType = {
    ticker?: true
    tiingo_ticker?: true
    raw_payload?: true
    ingested_at?: true
    _all?: true
  }

  export type Raw_tiingo_fundamentalsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which raw_tiingo_fundamentals to aggregate.
     */
    where?: raw_tiingo_fundamentalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of raw_tiingo_fundamentals to fetch.
     */
    orderBy?: raw_tiingo_fundamentalsOrderByWithRelationInput | raw_tiingo_fundamentalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: raw_tiingo_fundamentalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` raw_tiingo_fundamentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` raw_tiingo_fundamentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned raw_tiingo_fundamentals
    **/
    _count?: true | Raw_tiingo_fundamentalsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Raw_tiingo_fundamentalsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Raw_tiingo_fundamentalsMaxAggregateInputType
  }

  export type GetRaw_tiingo_fundamentalsAggregateType<T extends Raw_tiingo_fundamentalsAggregateArgs> = {
        [P in keyof T & keyof AggregateRaw_tiingo_fundamentals]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRaw_tiingo_fundamentals[P]>
      : GetScalarType<T[P], AggregateRaw_tiingo_fundamentals[P]>
  }




  export type raw_tiingo_fundamentalsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: raw_tiingo_fundamentalsWhereInput
    orderBy?: raw_tiingo_fundamentalsOrderByWithAggregationInput | raw_tiingo_fundamentalsOrderByWithAggregationInput[]
    by: Raw_tiingo_fundamentalsScalarFieldEnum[] | Raw_tiingo_fundamentalsScalarFieldEnum
    having?: raw_tiingo_fundamentalsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Raw_tiingo_fundamentalsCountAggregateInputType | true
    _min?: Raw_tiingo_fundamentalsMinAggregateInputType
    _max?: Raw_tiingo_fundamentalsMaxAggregateInputType
  }

  export type Raw_tiingo_fundamentalsGroupByOutputType = {
    ticker: string
    tiingo_ticker: string
    raw_payload: JsonValue
    ingested_at: Date
    _count: Raw_tiingo_fundamentalsCountAggregateOutputType | null
    _min: Raw_tiingo_fundamentalsMinAggregateOutputType | null
    _max: Raw_tiingo_fundamentalsMaxAggregateOutputType | null
  }

  type GetRaw_tiingo_fundamentalsGroupByPayload<T extends raw_tiingo_fundamentalsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Raw_tiingo_fundamentalsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Raw_tiingo_fundamentalsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Raw_tiingo_fundamentalsGroupByOutputType[P]>
            : GetScalarType<T[P], Raw_tiingo_fundamentalsGroupByOutputType[P]>
        }
      >
    >


  export type raw_tiingo_fundamentalsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticker?: boolean
    tiingo_ticker?: boolean
    raw_payload?: boolean
    ingested_at?: boolean
  }, ExtArgs["result"]["raw_tiingo_fundamentals"]>

  export type raw_tiingo_fundamentalsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticker?: boolean
    tiingo_ticker?: boolean
    raw_payload?: boolean
    ingested_at?: boolean
  }, ExtArgs["result"]["raw_tiingo_fundamentals"]>

  export type raw_tiingo_fundamentalsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticker?: boolean
    tiingo_ticker?: boolean
    raw_payload?: boolean
    ingested_at?: boolean
  }, ExtArgs["result"]["raw_tiingo_fundamentals"]>

  export type raw_tiingo_fundamentalsSelectScalar = {
    ticker?: boolean
    tiingo_ticker?: boolean
    raw_payload?: boolean
    ingested_at?: boolean
  }

  export type raw_tiingo_fundamentalsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ticker" | "tiingo_ticker" | "raw_payload" | "ingested_at", ExtArgs["result"]["raw_tiingo_fundamentals"]>

  export type $raw_tiingo_fundamentalsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "raw_tiingo_fundamentals"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ticker: string
      tiingo_ticker: string
      raw_payload: Prisma.JsonValue
      ingested_at: Date
    }, ExtArgs["result"]["raw_tiingo_fundamentals"]>
    composites: {}
  }

  type raw_tiingo_fundamentalsGetPayload<S extends boolean | null | undefined | raw_tiingo_fundamentalsDefaultArgs> = $Result.GetResult<Prisma.$raw_tiingo_fundamentalsPayload, S>

  type raw_tiingo_fundamentalsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<raw_tiingo_fundamentalsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Raw_tiingo_fundamentalsCountAggregateInputType | true
    }

  export interface raw_tiingo_fundamentalsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['raw_tiingo_fundamentals'], meta: { name: 'raw_tiingo_fundamentals' } }
    /**
     * Find zero or one Raw_tiingo_fundamentals that matches the filter.
     * @param {raw_tiingo_fundamentalsFindUniqueArgs} args - Arguments to find a Raw_tiingo_fundamentals
     * @example
     * // Get one Raw_tiingo_fundamentals
     * const raw_tiingo_fundamentals = await prisma.raw_tiingo_fundamentals.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends raw_tiingo_fundamentalsFindUniqueArgs>(args: SelectSubset<T, raw_tiingo_fundamentalsFindUniqueArgs<ExtArgs>>): Prisma__raw_tiingo_fundamentalsClient<$Result.GetResult<Prisma.$raw_tiingo_fundamentalsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Raw_tiingo_fundamentals that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {raw_tiingo_fundamentalsFindUniqueOrThrowArgs} args - Arguments to find a Raw_tiingo_fundamentals
     * @example
     * // Get one Raw_tiingo_fundamentals
     * const raw_tiingo_fundamentals = await prisma.raw_tiingo_fundamentals.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends raw_tiingo_fundamentalsFindUniqueOrThrowArgs>(args: SelectSubset<T, raw_tiingo_fundamentalsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__raw_tiingo_fundamentalsClient<$Result.GetResult<Prisma.$raw_tiingo_fundamentalsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Raw_tiingo_fundamentals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_tiingo_fundamentalsFindFirstArgs} args - Arguments to find a Raw_tiingo_fundamentals
     * @example
     * // Get one Raw_tiingo_fundamentals
     * const raw_tiingo_fundamentals = await prisma.raw_tiingo_fundamentals.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends raw_tiingo_fundamentalsFindFirstArgs>(args?: SelectSubset<T, raw_tiingo_fundamentalsFindFirstArgs<ExtArgs>>): Prisma__raw_tiingo_fundamentalsClient<$Result.GetResult<Prisma.$raw_tiingo_fundamentalsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Raw_tiingo_fundamentals that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_tiingo_fundamentalsFindFirstOrThrowArgs} args - Arguments to find a Raw_tiingo_fundamentals
     * @example
     * // Get one Raw_tiingo_fundamentals
     * const raw_tiingo_fundamentals = await prisma.raw_tiingo_fundamentals.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends raw_tiingo_fundamentalsFindFirstOrThrowArgs>(args?: SelectSubset<T, raw_tiingo_fundamentalsFindFirstOrThrowArgs<ExtArgs>>): Prisma__raw_tiingo_fundamentalsClient<$Result.GetResult<Prisma.$raw_tiingo_fundamentalsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Raw_tiingo_fundamentals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_tiingo_fundamentalsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Raw_tiingo_fundamentals
     * const raw_tiingo_fundamentals = await prisma.raw_tiingo_fundamentals.findMany()
     * 
     * // Get first 10 Raw_tiingo_fundamentals
     * const raw_tiingo_fundamentals = await prisma.raw_tiingo_fundamentals.findMany({ take: 10 })
     * 
     * // Only select the `ticker`
     * const raw_tiingo_fundamentalsWithTickerOnly = await prisma.raw_tiingo_fundamentals.findMany({ select: { ticker: true } })
     * 
     */
    findMany<T extends raw_tiingo_fundamentalsFindManyArgs>(args?: SelectSubset<T, raw_tiingo_fundamentalsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$raw_tiingo_fundamentalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Raw_tiingo_fundamentals.
     * @param {raw_tiingo_fundamentalsCreateArgs} args - Arguments to create a Raw_tiingo_fundamentals.
     * @example
     * // Create one Raw_tiingo_fundamentals
     * const Raw_tiingo_fundamentals = await prisma.raw_tiingo_fundamentals.create({
     *   data: {
     *     // ... data to create a Raw_tiingo_fundamentals
     *   }
     * })
     * 
     */
    create<T extends raw_tiingo_fundamentalsCreateArgs>(args: SelectSubset<T, raw_tiingo_fundamentalsCreateArgs<ExtArgs>>): Prisma__raw_tiingo_fundamentalsClient<$Result.GetResult<Prisma.$raw_tiingo_fundamentalsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Raw_tiingo_fundamentals.
     * @param {raw_tiingo_fundamentalsCreateManyArgs} args - Arguments to create many Raw_tiingo_fundamentals.
     * @example
     * // Create many Raw_tiingo_fundamentals
     * const raw_tiingo_fundamentals = await prisma.raw_tiingo_fundamentals.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends raw_tiingo_fundamentalsCreateManyArgs>(args?: SelectSubset<T, raw_tiingo_fundamentalsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Raw_tiingo_fundamentals and returns the data saved in the database.
     * @param {raw_tiingo_fundamentalsCreateManyAndReturnArgs} args - Arguments to create many Raw_tiingo_fundamentals.
     * @example
     * // Create many Raw_tiingo_fundamentals
     * const raw_tiingo_fundamentals = await prisma.raw_tiingo_fundamentals.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Raw_tiingo_fundamentals and only return the `ticker`
     * const raw_tiingo_fundamentalsWithTickerOnly = await prisma.raw_tiingo_fundamentals.createManyAndReturn({
     *   select: { ticker: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends raw_tiingo_fundamentalsCreateManyAndReturnArgs>(args?: SelectSubset<T, raw_tiingo_fundamentalsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$raw_tiingo_fundamentalsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Raw_tiingo_fundamentals.
     * @param {raw_tiingo_fundamentalsDeleteArgs} args - Arguments to delete one Raw_tiingo_fundamentals.
     * @example
     * // Delete one Raw_tiingo_fundamentals
     * const Raw_tiingo_fundamentals = await prisma.raw_tiingo_fundamentals.delete({
     *   where: {
     *     // ... filter to delete one Raw_tiingo_fundamentals
     *   }
     * })
     * 
     */
    delete<T extends raw_tiingo_fundamentalsDeleteArgs>(args: SelectSubset<T, raw_tiingo_fundamentalsDeleteArgs<ExtArgs>>): Prisma__raw_tiingo_fundamentalsClient<$Result.GetResult<Prisma.$raw_tiingo_fundamentalsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Raw_tiingo_fundamentals.
     * @param {raw_tiingo_fundamentalsUpdateArgs} args - Arguments to update one Raw_tiingo_fundamentals.
     * @example
     * // Update one Raw_tiingo_fundamentals
     * const raw_tiingo_fundamentals = await prisma.raw_tiingo_fundamentals.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends raw_tiingo_fundamentalsUpdateArgs>(args: SelectSubset<T, raw_tiingo_fundamentalsUpdateArgs<ExtArgs>>): Prisma__raw_tiingo_fundamentalsClient<$Result.GetResult<Prisma.$raw_tiingo_fundamentalsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Raw_tiingo_fundamentals.
     * @param {raw_tiingo_fundamentalsDeleteManyArgs} args - Arguments to filter Raw_tiingo_fundamentals to delete.
     * @example
     * // Delete a few Raw_tiingo_fundamentals
     * const { count } = await prisma.raw_tiingo_fundamentals.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends raw_tiingo_fundamentalsDeleteManyArgs>(args?: SelectSubset<T, raw_tiingo_fundamentalsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Raw_tiingo_fundamentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_tiingo_fundamentalsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Raw_tiingo_fundamentals
     * const raw_tiingo_fundamentals = await prisma.raw_tiingo_fundamentals.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends raw_tiingo_fundamentalsUpdateManyArgs>(args: SelectSubset<T, raw_tiingo_fundamentalsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Raw_tiingo_fundamentals and returns the data updated in the database.
     * @param {raw_tiingo_fundamentalsUpdateManyAndReturnArgs} args - Arguments to update many Raw_tiingo_fundamentals.
     * @example
     * // Update many Raw_tiingo_fundamentals
     * const raw_tiingo_fundamentals = await prisma.raw_tiingo_fundamentals.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Raw_tiingo_fundamentals and only return the `ticker`
     * const raw_tiingo_fundamentalsWithTickerOnly = await prisma.raw_tiingo_fundamentals.updateManyAndReturn({
     *   select: { ticker: true },
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
    updateManyAndReturn<T extends raw_tiingo_fundamentalsUpdateManyAndReturnArgs>(args: SelectSubset<T, raw_tiingo_fundamentalsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$raw_tiingo_fundamentalsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Raw_tiingo_fundamentals.
     * @param {raw_tiingo_fundamentalsUpsertArgs} args - Arguments to update or create a Raw_tiingo_fundamentals.
     * @example
     * // Update or create a Raw_tiingo_fundamentals
     * const raw_tiingo_fundamentals = await prisma.raw_tiingo_fundamentals.upsert({
     *   create: {
     *     // ... data to create a Raw_tiingo_fundamentals
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Raw_tiingo_fundamentals we want to update
     *   }
     * })
     */
    upsert<T extends raw_tiingo_fundamentalsUpsertArgs>(args: SelectSubset<T, raw_tiingo_fundamentalsUpsertArgs<ExtArgs>>): Prisma__raw_tiingo_fundamentalsClient<$Result.GetResult<Prisma.$raw_tiingo_fundamentalsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Raw_tiingo_fundamentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_tiingo_fundamentalsCountArgs} args - Arguments to filter Raw_tiingo_fundamentals to count.
     * @example
     * // Count the number of Raw_tiingo_fundamentals
     * const count = await prisma.raw_tiingo_fundamentals.count({
     *   where: {
     *     // ... the filter for the Raw_tiingo_fundamentals we want to count
     *   }
     * })
    **/
    count<T extends raw_tiingo_fundamentalsCountArgs>(
      args?: Subset<T, raw_tiingo_fundamentalsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Raw_tiingo_fundamentalsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Raw_tiingo_fundamentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Raw_tiingo_fundamentalsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Raw_tiingo_fundamentalsAggregateArgs>(args: Subset<T, Raw_tiingo_fundamentalsAggregateArgs>): Prisma.PrismaPromise<GetRaw_tiingo_fundamentalsAggregateType<T>>

    /**
     * Group by Raw_tiingo_fundamentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {raw_tiingo_fundamentalsGroupByArgs} args - Group by arguments.
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
      T extends raw_tiingo_fundamentalsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: raw_tiingo_fundamentalsGroupByArgs['orderBy'] }
        : { orderBy?: raw_tiingo_fundamentalsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, raw_tiingo_fundamentalsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaw_tiingo_fundamentalsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the raw_tiingo_fundamentals model
   */
  readonly fields: raw_tiingo_fundamentalsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for raw_tiingo_fundamentals.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__raw_tiingo_fundamentalsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the raw_tiingo_fundamentals model
   */
  interface raw_tiingo_fundamentalsFieldRefs {
    readonly ticker: FieldRef<"raw_tiingo_fundamentals", 'String'>
    readonly tiingo_ticker: FieldRef<"raw_tiingo_fundamentals", 'String'>
    readonly raw_payload: FieldRef<"raw_tiingo_fundamentals", 'Json'>
    readonly ingested_at: FieldRef<"raw_tiingo_fundamentals", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * raw_tiingo_fundamentals findUnique
   */
  export type raw_tiingo_fundamentalsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_tiingo_fundamentals
     */
    select?: raw_tiingo_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_tiingo_fundamentals
     */
    omit?: raw_tiingo_fundamentalsOmit<ExtArgs> | null
    /**
     * Filter, which raw_tiingo_fundamentals to fetch.
     */
    where: raw_tiingo_fundamentalsWhereUniqueInput
  }

  /**
   * raw_tiingo_fundamentals findUniqueOrThrow
   */
  export type raw_tiingo_fundamentalsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_tiingo_fundamentals
     */
    select?: raw_tiingo_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_tiingo_fundamentals
     */
    omit?: raw_tiingo_fundamentalsOmit<ExtArgs> | null
    /**
     * Filter, which raw_tiingo_fundamentals to fetch.
     */
    where: raw_tiingo_fundamentalsWhereUniqueInput
  }

  /**
   * raw_tiingo_fundamentals findFirst
   */
  export type raw_tiingo_fundamentalsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_tiingo_fundamentals
     */
    select?: raw_tiingo_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_tiingo_fundamentals
     */
    omit?: raw_tiingo_fundamentalsOmit<ExtArgs> | null
    /**
     * Filter, which raw_tiingo_fundamentals to fetch.
     */
    where?: raw_tiingo_fundamentalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of raw_tiingo_fundamentals to fetch.
     */
    orderBy?: raw_tiingo_fundamentalsOrderByWithRelationInput | raw_tiingo_fundamentalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for raw_tiingo_fundamentals.
     */
    cursor?: raw_tiingo_fundamentalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` raw_tiingo_fundamentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` raw_tiingo_fundamentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of raw_tiingo_fundamentals.
     */
    distinct?: Raw_tiingo_fundamentalsScalarFieldEnum | Raw_tiingo_fundamentalsScalarFieldEnum[]
  }

  /**
   * raw_tiingo_fundamentals findFirstOrThrow
   */
  export type raw_tiingo_fundamentalsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_tiingo_fundamentals
     */
    select?: raw_tiingo_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_tiingo_fundamentals
     */
    omit?: raw_tiingo_fundamentalsOmit<ExtArgs> | null
    /**
     * Filter, which raw_tiingo_fundamentals to fetch.
     */
    where?: raw_tiingo_fundamentalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of raw_tiingo_fundamentals to fetch.
     */
    orderBy?: raw_tiingo_fundamentalsOrderByWithRelationInput | raw_tiingo_fundamentalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for raw_tiingo_fundamentals.
     */
    cursor?: raw_tiingo_fundamentalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` raw_tiingo_fundamentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` raw_tiingo_fundamentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of raw_tiingo_fundamentals.
     */
    distinct?: Raw_tiingo_fundamentalsScalarFieldEnum | Raw_tiingo_fundamentalsScalarFieldEnum[]
  }

  /**
   * raw_tiingo_fundamentals findMany
   */
  export type raw_tiingo_fundamentalsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_tiingo_fundamentals
     */
    select?: raw_tiingo_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_tiingo_fundamentals
     */
    omit?: raw_tiingo_fundamentalsOmit<ExtArgs> | null
    /**
     * Filter, which raw_tiingo_fundamentals to fetch.
     */
    where?: raw_tiingo_fundamentalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of raw_tiingo_fundamentals to fetch.
     */
    orderBy?: raw_tiingo_fundamentalsOrderByWithRelationInput | raw_tiingo_fundamentalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing raw_tiingo_fundamentals.
     */
    cursor?: raw_tiingo_fundamentalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` raw_tiingo_fundamentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` raw_tiingo_fundamentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of raw_tiingo_fundamentals.
     */
    distinct?: Raw_tiingo_fundamentalsScalarFieldEnum | Raw_tiingo_fundamentalsScalarFieldEnum[]
  }

  /**
   * raw_tiingo_fundamentals create
   */
  export type raw_tiingo_fundamentalsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_tiingo_fundamentals
     */
    select?: raw_tiingo_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_tiingo_fundamentals
     */
    omit?: raw_tiingo_fundamentalsOmit<ExtArgs> | null
    /**
     * The data needed to create a raw_tiingo_fundamentals.
     */
    data: XOR<raw_tiingo_fundamentalsCreateInput, raw_tiingo_fundamentalsUncheckedCreateInput>
  }

  /**
   * raw_tiingo_fundamentals createMany
   */
  export type raw_tiingo_fundamentalsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many raw_tiingo_fundamentals.
     */
    data: raw_tiingo_fundamentalsCreateManyInput | raw_tiingo_fundamentalsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * raw_tiingo_fundamentals createManyAndReturn
   */
  export type raw_tiingo_fundamentalsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_tiingo_fundamentals
     */
    select?: raw_tiingo_fundamentalsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the raw_tiingo_fundamentals
     */
    omit?: raw_tiingo_fundamentalsOmit<ExtArgs> | null
    /**
     * The data used to create many raw_tiingo_fundamentals.
     */
    data: raw_tiingo_fundamentalsCreateManyInput | raw_tiingo_fundamentalsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * raw_tiingo_fundamentals update
   */
  export type raw_tiingo_fundamentalsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_tiingo_fundamentals
     */
    select?: raw_tiingo_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_tiingo_fundamentals
     */
    omit?: raw_tiingo_fundamentalsOmit<ExtArgs> | null
    /**
     * The data needed to update a raw_tiingo_fundamentals.
     */
    data: XOR<raw_tiingo_fundamentalsUpdateInput, raw_tiingo_fundamentalsUncheckedUpdateInput>
    /**
     * Choose, which raw_tiingo_fundamentals to update.
     */
    where: raw_tiingo_fundamentalsWhereUniqueInput
  }

  /**
   * raw_tiingo_fundamentals updateMany
   */
  export type raw_tiingo_fundamentalsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update raw_tiingo_fundamentals.
     */
    data: XOR<raw_tiingo_fundamentalsUpdateManyMutationInput, raw_tiingo_fundamentalsUncheckedUpdateManyInput>
    /**
     * Filter which raw_tiingo_fundamentals to update
     */
    where?: raw_tiingo_fundamentalsWhereInput
    /**
     * Limit how many raw_tiingo_fundamentals to update.
     */
    limit?: number
  }

  /**
   * raw_tiingo_fundamentals updateManyAndReturn
   */
  export type raw_tiingo_fundamentalsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_tiingo_fundamentals
     */
    select?: raw_tiingo_fundamentalsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the raw_tiingo_fundamentals
     */
    omit?: raw_tiingo_fundamentalsOmit<ExtArgs> | null
    /**
     * The data used to update raw_tiingo_fundamentals.
     */
    data: XOR<raw_tiingo_fundamentalsUpdateManyMutationInput, raw_tiingo_fundamentalsUncheckedUpdateManyInput>
    /**
     * Filter which raw_tiingo_fundamentals to update
     */
    where?: raw_tiingo_fundamentalsWhereInput
    /**
     * Limit how many raw_tiingo_fundamentals to update.
     */
    limit?: number
  }

  /**
   * raw_tiingo_fundamentals upsert
   */
  export type raw_tiingo_fundamentalsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_tiingo_fundamentals
     */
    select?: raw_tiingo_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_tiingo_fundamentals
     */
    omit?: raw_tiingo_fundamentalsOmit<ExtArgs> | null
    /**
     * The filter to search for the raw_tiingo_fundamentals to update in case it exists.
     */
    where: raw_tiingo_fundamentalsWhereUniqueInput
    /**
     * In case the raw_tiingo_fundamentals found by the `where` argument doesn't exist, create a new raw_tiingo_fundamentals with this data.
     */
    create: XOR<raw_tiingo_fundamentalsCreateInput, raw_tiingo_fundamentalsUncheckedCreateInput>
    /**
     * In case the raw_tiingo_fundamentals was found with the provided `where` argument, update it with this data.
     */
    update: XOR<raw_tiingo_fundamentalsUpdateInput, raw_tiingo_fundamentalsUncheckedUpdateInput>
  }

  /**
   * raw_tiingo_fundamentals delete
   */
  export type raw_tiingo_fundamentalsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_tiingo_fundamentals
     */
    select?: raw_tiingo_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_tiingo_fundamentals
     */
    omit?: raw_tiingo_fundamentalsOmit<ExtArgs> | null
    /**
     * Filter which raw_tiingo_fundamentals to delete.
     */
    where: raw_tiingo_fundamentalsWhereUniqueInput
  }

  /**
   * raw_tiingo_fundamentals deleteMany
   */
  export type raw_tiingo_fundamentalsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which raw_tiingo_fundamentals to delete
     */
    where?: raw_tiingo_fundamentalsWhereInput
    /**
     * Limit how many raw_tiingo_fundamentals to delete.
     */
    limit?: number
  }

  /**
   * raw_tiingo_fundamentals without action
   */
  export type raw_tiingo_fundamentalsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the raw_tiingo_fundamentals
     */
    select?: raw_tiingo_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the raw_tiingo_fundamentals
     */
    omit?: raw_tiingo_fundamentalsOmit<ExtArgs> | null
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


  export const Factor_datasetScalarFieldEnum: {
    company_id: 'company_id',
    date: 'date',
    mom_1m: 'mom_1m',
    mom_3m: 'mom_3m',
    mom_6m: 'mom_6m',
    mom_12m: 'mom_12m',
    mom_skip1m: 'mom_skip1m',
    mom_acc: 'mom_acc',
    rev_1w: 'rev_1w',
    vol_3m: 'vol_3m',
    vol_12m: 'vol_12m',
    down_vol: 'down_vol',
    beta: 'beta',
    idio_vol: 'idio_vol',
    max_drawdown: 'max_drawdown',
    earnings_yield: 'earnings_yield',
    book_to_price: 'book_to_price',
    sales_to_price: 'sales_to_price',
    cf_to_price: 'cf_to_price',
    fcf_yield: 'fcf_yield',
    ev_ebitda: 'ev_ebitda',
    ebitda_yield: 'ebitda_yield',
    roe: 'roe',
    roa: 'roa',
    gross_margin: 'gross_margin',
    op_margin: 'op_margin',
    profit_stability: 'profit_stability',
    debt_to_equity: 'debt_to_equity',
    int_coverage: 'int_coverage',
    rev_growth: 'rev_growth',
    eps_growth: 'eps_growth',
    asset_growth: 'asset_growth',
    capex_growth: 'capex_growth',
    opinc_growth: 'opinc_growth',
    sales_acc: 'sales_acc',
    capex_ratio: 'capex_ratio',
    inventory_growth: 'inventory_growth',
    accruals: 'accruals',
    turnover: 'turnover',
    dollar_vol: 'dollar_vol',
    illiq: 'illiq',
    vol_vol: 'vol_vol',
    term_spread: 'term_spread',
    credit_spread: 'credit_spread',
    cpi_growth: 'cpi_growth',
    unrate: 'unrate',
    nfci: 'nfci',
    gdp_growth: 'gdp_growth',
    target_return_60d: 'target_return_60d'
  };

  export type Factor_datasetScalarFieldEnum = (typeof Factor_datasetScalarFieldEnum)[keyof typeof Factor_datasetScalarFieldEnum]


  export const Dim_companyScalarFieldEnum: {
    company_id: 'company_id',
    cik: 'cik',
    ticker: 'ticker',
    yf_ticker: 'yf_ticker',
    company_name: 'company_name',
    exchange: 'exchange',
    gics_sector: 'gics_sector',
    gics_industry: 'gics_industry',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at',
    sic_code: 'sic_code',
    sic_description: 'sic_description',
    fiscal_year_end: 'fiscal_year_end'
  };

  export type Dim_companyScalarFieldEnum = (typeof Dim_companyScalarFieldEnum)[keyof typeof Dim_companyScalarFieldEnum]


  export const Dim_dateScalarFieldEnum: {
    date_id: 'date_id',
    date: 'date',
    year: 'year',
    quarter: 'quarter',
    month: 'month',
    month_name: 'month_name',
    week_of_year: 'week_of_year',
    day_of_month: 'day_of_month',
    day_of_week: 'day_of_week',
    day_name: 'day_name',
    is_weekend: 'is_weekend',
    is_trading_day: 'is_trading_day',
    is_trading_month_end: 'is_trading_month_end',
    fiscal_year: 'fiscal_year',
    fiscal_quarter: 'fiscal_quarter'
  };

  export type Dim_dateScalarFieldEnum = (typeof Dim_dateScalarFieldEnum)[keyof typeof Dim_dateScalarFieldEnum]


  export const Fact_fundamentalsScalarFieldEnum: {
    company_id: 'company_id',
    concept: 'concept',
    period_end: 'period_end',
    filing_date: 'filing_date',
    value: 'value',
    unit: 'unit',
    source_tag: 'source_tag',
    policy: 'policy',
    form: 'form',
    data_quality: 'data_quality',
    is_restatement: 'is_restatement'
  };

  export type Fact_fundamentalsScalarFieldEnum = (typeof Fact_fundamentalsScalarFieldEnum)[keyof typeof Fact_fundamentalsScalarFieldEnum]


  export const Fact_macroScalarFieldEnum: {
    macro_id: 'macro_id',
    series_id: 'series_id',
    date: 'date',
    value: 'value'
  };

  export type Fact_macroScalarFieldEnum = (typeof Fact_macroScalarFieldEnum)[keyof typeof Fact_macroScalarFieldEnum]


  export const Fact_pricesScalarFieldEnum: {
    price_id: 'price_id',
    company_id: 'company_id',
    trade_date: 'trade_date',
    open: 'open',
    high: 'high',
    low: 'low',
    close: 'close',
    adj_close: 'adj_close',
    volume: 'volume'
  };

  export type Fact_pricesScalarFieldEnum = (typeof Fact_pricesScalarFieldEnum)[keyof typeof Fact_pricesScalarFieldEnum]


  export const UniverseScalarFieldEnum: {
    company_id: 'company_id',
    added_at: 'added_at'
  };

  export type UniverseScalarFieldEnum = (typeof UniverseScalarFieldEnum)[keyof typeof UniverseScalarFieldEnum]


  export const Raw_fundamentalsScalarFieldEnum: {
    id: 'id',
    cik: 'cik',
    ticker: 'ticker',
    taxonomy: 'taxonomy',
    tag: 'tag',
    unit: 'unit',
    period_start: 'period_start',
    period_end: 'period_end',
    filing_date: 'filing_date',
    accession: 'accession',
    form: 'form',
    value: 'value',
    loaded_at: 'loaded_at'
  };

  export type Raw_fundamentalsScalarFieldEnum = (typeof Raw_fundamentalsScalarFieldEnum)[keyof typeof Raw_fundamentalsScalarFieldEnum]


  export const Raw_macroScalarFieldEnum: {
    id: 'id',
    series_id: 'series_id',
    date: 'date',
    value: 'value',
    ingested_at: 'ingested_at'
  };

  export type Raw_macroScalarFieldEnum = (typeof Raw_macroScalarFieldEnum)[keyof typeof Raw_macroScalarFieldEnum]


  export const Raw_pricesScalarFieldEnum: {
    id: 'id',
    ticker: 'ticker',
    trade_date: 'trade_date',
    open: 'open',
    high: 'high',
    low: 'low',
    close: 'close',
    adj_close: 'adj_close',
    volume: 'volume',
    ingested_at: 'ingested_at'
  };

  export type Raw_pricesScalarFieldEnum = (typeof Raw_pricesScalarFieldEnum)[keyof typeof Raw_pricesScalarFieldEnum]


  export const Raw_tiingo_fundamentalsScalarFieldEnum: {
    ticker: 'ticker',
    tiingo_ticker: 'tiingo_ticker',
    raw_payload: 'raw_payload',
    ingested_at: 'ingested_at'
  };

  export type Raw_tiingo_fundamentalsScalarFieldEnum = (typeof Raw_tiingo_fundamentalsScalarFieldEnum)[keyof typeof Raw_tiingo_fundamentalsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type factor_datasetWhereInput = {
    AND?: factor_datasetWhereInput | factor_datasetWhereInput[]
    OR?: factor_datasetWhereInput[]
    NOT?: factor_datasetWhereInput | factor_datasetWhereInput[]
    company_id?: BigIntFilter<"factor_dataset"> | bigint | number
    date?: DateTimeFilter<"factor_dataset"> | Date | string
    mom_1m?: FloatNullableFilter<"factor_dataset"> | number | null
    mom_3m?: FloatNullableFilter<"factor_dataset"> | number | null
    mom_6m?: FloatNullableFilter<"factor_dataset"> | number | null
    mom_12m?: FloatNullableFilter<"factor_dataset"> | number | null
    mom_skip1m?: FloatNullableFilter<"factor_dataset"> | number | null
    mom_acc?: FloatNullableFilter<"factor_dataset"> | number | null
    rev_1w?: FloatNullableFilter<"factor_dataset"> | number | null
    vol_3m?: FloatNullableFilter<"factor_dataset"> | number | null
    vol_12m?: FloatNullableFilter<"factor_dataset"> | number | null
    down_vol?: FloatNullableFilter<"factor_dataset"> | number | null
    beta?: FloatNullableFilter<"factor_dataset"> | number | null
    idio_vol?: FloatNullableFilter<"factor_dataset"> | number | null
    max_drawdown?: FloatNullableFilter<"factor_dataset"> | number | null
    earnings_yield?: FloatNullableFilter<"factor_dataset"> | number | null
    book_to_price?: FloatNullableFilter<"factor_dataset"> | number | null
    sales_to_price?: FloatNullableFilter<"factor_dataset"> | number | null
    cf_to_price?: FloatNullableFilter<"factor_dataset"> | number | null
    fcf_yield?: FloatNullableFilter<"factor_dataset"> | number | null
    ev_ebitda?: FloatNullableFilter<"factor_dataset"> | number | null
    ebitda_yield?: FloatNullableFilter<"factor_dataset"> | number | null
    roe?: FloatNullableFilter<"factor_dataset"> | number | null
    roa?: FloatNullableFilter<"factor_dataset"> | number | null
    gross_margin?: FloatNullableFilter<"factor_dataset"> | number | null
    op_margin?: FloatNullableFilter<"factor_dataset"> | number | null
    profit_stability?: FloatNullableFilter<"factor_dataset"> | number | null
    debt_to_equity?: FloatNullableFilter<"factor_dataset"> | number | null
    int_coverage?: FloatNullableFilter<"factor_dataset"> | number | null
    rev_growth?: FloatNullableFilter<"factor_dataset"> | number | null
    eps_growth?: FloatNullableFilter<"factor_dataset"> | number | null
    asset_growth?: FloatNullableFilter<"factor_dataset"> | number | null
    capex_growth?: FloatNullableFilter<"factor_dataset"> | number | null
    opinc_growth?: FloatNullableFilter<"factor_dataset"> | number | null
    sales_acc?: FloatNullableFilter<"factor_dataset"> | number | null
    capex_ratio?: FloatNullableFilter<"factor_dataset"> | number | null
    inventory_growth?: FloatNullableFilter<"factor_dataset"> | number | null
    accruals?: FloatNullableFilter<"factor_dataset"> | number | null
    turnover?: FloatNullableFilter<"factor_dataset"> | number | null
    dollar_vol?: FloatNullableFilter<"factor_dataset"> | number | null
    illiq?: FloatNullableFilter<"factor_dataset"> | number | null
    vol_vol?: FloatNullableFilter<"factor_dataset"> | number | null
    term_spread?: FloatNullableFilter<"factor_dataset"> | number | null
    credit_spread?: FloatNullableFilter<"factor_dataset"> | number | null
    cpi_growth?: FloatNullableFilter<"factor_dataset"> | number | null
    unrate?: FloatNullableFilter<"factor_dataset"> | number | null
    nfci?: FloatNullableFilter<"factor_dataset"> | number | null
    gdp_growth?: FloatNullableFilter<"factor_dataset"> | number | null
    target_return_60d?: FloatNullableFilter<"factor_dataset"> | number | null
  }

  export type factor_datasetOrderByWithRelationInput = {
    company_id?: SortOrder
    date?: SortOrder
    mom_1m?: SortOrderInput | SortOrder
    mom_3m?: SortOrderInput | SortOrder
    mom_6m?: SortOrderInput | SortOrder
    mom_12m?: SortOrderInput | SortOrder
    mom_skip1m?: SortOrderInput | SortOrder
    mom_acc?: SortOrderInput | SortOrder
    rev_1w?: SortOrderInput | SortOrder
    vol_3m?: SortOrderInput | SortOrder
    vol_12m?: SortOrderInput | SortOrder
    down_vol?: SortOrderInput | SortOrder
    beta?: SortOrderInput | SortOrder
    idio_vol?: SortOrderInput | SortOrder
    max_drawdown?: SortOrderInput | SortOrder
    earnings_yield?: SortOrderInput | SortOrder
    book_to_price?: SortOrderInput | SortOrder
    sales_to_price?: SortOrderInput | SortOrder
    cf_to_price?: SortOrderInput | SortOrder
    fcf_yield?: SortOrderInput | SortOrder
    ev_ebitda?: SortOrderInput | SortOrder
    ebitda_yield?: SortOrderInput | SortOrder
    roe?: SortOrderInput | SortOrder
    roa?: SortOrderInput | SortOrder
    gross_margin?: SortOrderInput | SortOrder
    op_margin?: SortOrderInput | SortOrder
    profit_stability?: SortOrderInput | SortOrder
    debt_to_equity?: SortOrderInput | SortOrder
    int_coverage?: SortOrderInput | SortOrder
    rev_growth?: SortOrderInput | SortOrder
    eps_growth?: SortOrderInput | SortOrder
    asset_growth?: SortOrderInput | SortOrder
    capex_growth?: SortOrderInput | SortOrder
    opinc_growth?: SortOrderInput | SortOrder
    sales_acc?: SortOrderInput | SortOrder
    capex_ratio?: SortOrderInput | SortOrder
    inventory_growth?: SortOrderInput | SortOrder
    accruals?: SortOrderInput | SortOrder
    turnover?: SortOrderInput | SortOrder
    dollar_vol?: SortOrderInput | SortOrder
    illiq?: SortOrderInput | SortOrder
    vol_vol?: SortOrderInput | SortOrder
    term_spread?: SortOrderInput | SortOrder
    credit_spread?: SortOrderInput | SortOrder
    cpi_growth?: SortOrderInput | SortOrder
    unrate?: SortOrderInput | SortOrder
    nfci?: SortOrderInput | SortOrder
    gdp_growth?: SortOrderInput | SortOrder
    target_return_60d?: SortOrderInput | SortOrder
  }

  export type factor_datasetWhereUniqueInput = Prisma.AtLeast<{
    company_id_date?: factor_datasetCompany_idDateCompoundUniqueInput
    AND?: factor_datasetWhereInput | factor_datasetWhereInput[]
    OR?: factor_datasetWhereInput[]
    NOT?: factor_datasetWhereInput | factor_datasetWhereInput[]
    company_id?: BigIntFilter<"factor_dataset"> | bigint | number
    date?: DateTimeFilter<"factor_dataset"> | Date | string
    mom_1m?: FloatNullableFilter<"factor_dataset"> | number | null
    mom_3m?: FloatNullableFilter<"factor_dataset"> | number | null
    mom_6m?: FloatNullableFilter<"factor_dataset"> | number | null
    mom_12m?: FloatNullableFilter<"factor_dataset"> | number | null
    mom_skip1m?: FloatNullableFilter<"factor_dataset"> | number | null
    mom_acc?: FloatNullableFilter<"factor_dataset"> | number | null
    rev_1w?: FloatNullableFilter<"factor_dataset"> | number | null
    vol_3m?: FloatNullableFilter<"factor_dataset"> | number | null
    vol_12m?: FloatNullableFilter<"factor_dataset"> | number | null
    down_vol?: FloatNullableFilter<"factor_dataset"> | number | null
    beta?: FloatNullableFilter<"factor_dataset"> | number | null
    idio_vol?: FloatNullableFilter<"factor_dataset"> | number | null
    max_drawdown?: FloatNullableFilter<"factor_dataset"> | number | null
    earnings_yield?: FloatNullableFilter<"factor_dataset"> | number | null
    book_to_price?: FloatNullableFilter<"factor_dataset"> | number | null
    sales_to_price?: FloatNullableFilter<"factor_dataset"> | number | null
    cf_to_price?: FloatNullableFilter<"factor_dataset"> | number | null
    fcf_yield?: FloatNullableFilter<"factor_dataset"> | number | null
    ev_ebitda?: FloatNullableFilter<"factor_dataset"> | number | null
    ebitda_yield?: FloatNullableFilter<"factor_dataset"> | number | null
    roe?: FloatNullableFilter<"factor_dataset"> | number | null
    roa?: FloatNullableFilter<"factor_dataset"> | number | null
    gross_margin?: FloatNullableFilter<"factor_dataset"> | number | null
    op_margin?: FloatNullableFilter<"factor_dataset"> | number | null
    profit_stability?: FloatNullableFilter<"factor_dataset"> | number | null
    debt_to_equity?: FloatNullableFilter<"factor_dataset"> | number | null
    int_coverage?: FloatNullableFilter<"factor_dataset"> | number | null
    rev_growth?: FloatNullableFilter<"factor_dataset"> | number | null
    eps_growth?: FloatNullableFilter<"factor_dataset"> | number | null
    asset_growth?: FloatNullableFilter<"factor_dataset"> | number | null
    capex_growth?: FloatNullableFilter<"factor_dataset"> | number | null
    opinc_growth?: FloatNullableFilter<"factor_dataset"> | number | null
    sales_acc?: FloatNullableFilter<"factor_dataset"> | number | null
    capex_ratio?: FloatNullableFilter<"factor_dataset"> | number | null
    inventory_growth?: FloatNullableFilter<"factor_dataset"> | number | null
    accruals?: FloatNullableFilter<"factor_dataset"> | number | null
    turnover?: FloatNullableFilter<"factor_dataset"> | number | null
    dollar_vol?: FloatNullableFilter<"factor_dataset"> | number | null
    illiq?: FloatNullableFilter<"factor_dataset"> | number | null
    vol_vol?: FloatNullableFilter<"factor_dataset"> | number | null
    term_spread?: FloatNullableFilter<"factor_dataset"> | number | null
    credit_spread?: FloatNullableFilter<"factor_dataset"> | number | null
    cpi_growth?: FloatNullableFilter<"factor_dataset"> | number | null
    unrate?: FloatNullableFilter<"factor_dataset"> | number | null
    nfci?: FloatNullableFilter<"factor_dataset"> | number | null
    gdp_growth?: FloatNullableFilter<"factor_dataset"> | number | null
    target_return_60d?: FloatNullableFilter<"factor_dataset"> | number | null
  }, "company_id_date">

  export type factor_datasetOrderByWithAggregationInput = {
    company_id?: SortOrder
    date?: SortOrder
    mom_1m?: SortOrderInput | SortOrder
    mom_3m?: SortOrderInput | SortOrder
    mom_6m?: SortOrderInput | SortOrder
    mom_12m?: SortOrderInput | SortOrder
    mom_skip1m?: SortOrderInput | SortOrder
    mom_acc?: SortOrderInput | SortOrder
    rev_1w?: SortOrderInput | SortOrder
    vol_3m?: SortOrderInput | SortOrder
    vol_12m?: SortOrderInput | SortOrder
    down_vol?: SortOrderInput | SortOrder
    beta?: SortOrderInput | SortOrder
    idio_vol?: SortOrderInput | SortOrder
    max_drawdown?: SortOrderInput | SortOrder
    earnings_yield?: SortOrderInput | SortOrder
    book_to_price?: SortOrderInput | SortOrder
    sales_to_price?: SortOrderInput | SortOrder
    cf_to_price?: SortOrderInput | SortOrder
    fcf_yield?: SortOrderInput | SortOrder
    ev_ebitda?: SortOrderInput | SortOrder
    ebitda_yield?: SortOrderInput | SortOrder
    roe?: SortOrderInput | SortOrder
    roa?: SortOrderInput | SortOrder
    gross_margin?: SortOrderInput | SortOrder
    op_margin?: SortOrderInput | SortOrder
    profit_stability?: SortOrderInput | SortOrder
    debt_to_equity?: SortOrderInput | SortOrder
    int_coverage?: SortOrderInput | SortOrder
    rev_growth?: SortOrderInput | SortOrder
    eps_growth?: SortOrderInput | SortOrder
    asset_growth?: SortOrderInput | SortOrder
    capex_growth?: SortOrderInput | SortOrder
    opinc_growth?: SortOrderInput | SortOrder
    sales_acc?: SortOrderInput | SortOrder
    capex_ratio?: SortOrderInput | SortOrder
    inventory_growth?: SortOrderInput | SortOrder
    accruals?: SortOrderInput | SortOrder
    turnover?: SortOrderInput | SortOrder
    dollar_vol?: SortOrderInput | SortOrder
    illiq?: SortOrderInput | SortOrder
    vol_vol?: SortOrderInput | SortOrder
    term_spread?: SortOrderInput | SortOrder
    credit_spread?: SortOrderInput | SortOrder
    cpi_growth?: SortOrderInput | SortOrder
    unrate?: SortOrderInput | SortOrder
    nfci?: SortOrderInput | SortOrder
    gdp_growth?: SortOrderInput | SortOrder
    target_return_60d?: SortOrderInput | SortOrder
    _count?: factor_datasetCountOrderByAggregateInput
    _avg?: factor_datasetAvgOrderByAggregateInput
    _max?: factor_datasetMaxOrderByAggregateInput
    _min?: factor_datasetMinOrderByAggregateInput
    _sum?: factor_datasetSumOrderByAggregateInput
  }

  export type factor_datasetScalarWhereWithAggregatesInput = {
    AND?: factor_datasetScalarWhereWithAggregatesInput | factor_datasetScalarWhereWithAggregatesInput[]
    OR?: factor_datasetScalarWhereWithAggregatesInput[]
    NOT?: factor_datasetScalarWhereWithAggregatesInput | factor_datasetScalarWhereWithAggregatesInput[]
    company_id?: BigIntWithAggregatesFilter<"factor_dataset"> | bigint | number
    date?: DateTimeWithAggregatesFilter<"factor_dataset"> | Date | string
    mom_1m?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    mom_3m?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    mom_6m?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    mom_12m?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    mom_skip1m?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    mom_acc?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    rev_1w?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    vol_3m?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    vol_12m?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    down_vol?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    beta?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    idio_vol?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    max_drawdown?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    earnings_yield?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    book_to_price?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    sales_to_price?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    cf_to_price?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    fcf_yield?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    ev_ebitda?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    ebitda_yield?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    roe?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    roa?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    gross_margin?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    op_margin?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    profit_stability?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    debt_to_equity?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    int_coverage?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    rev_growth?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    eps_growth?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    asset_growth?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    capex_growth?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    opinc_growth?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    sales_acc?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    capex_ratio?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    inventory_growth?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    accruals?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    turnover?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    dollar_vol?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    illiq?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    vol_vol?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    term_spread?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    credit_spread?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    cpi_growth?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    unrate?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    nfci?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    gdp_growth?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
    target_return_60d?: FloatNullableWithAggregatesFilter<"factor_dataset"> | number | null
  }

  export type dim_companyWhereInput = {
    AND?: dim_companyWhereInput | dim_companyWhereInput[]
    OR?: dim_companyWhereInput[]
    NOT?: dim_companyWhereInput | dim_companyWhereInput[]
    company_id?: IntFilter<"dim_company"> | number
    cik?: StringFilter<"dim_company"> | string
    ticker?: StringNullableFilter<"dim_company"> | string | null
    yf_ticker?: StringNullableFilter<"dim_company"> | string | null
    company_name?: StringFilter<"dim_company"> | string
    exchange?: StringNullableFilter<"dim_company"> | string | null
    gics_sector?: StringNullableFilter<"dim_company"> | string | null
    gics_industry?: StringNullableFilter<"dim_company"> | string | null
    is_active?: BoolFilter<"dim_company"> | boolean
    created_at?: DateTimeFilter<"dim_company"> | Date | string
    updated_at?: DateTimeFilter<"dim_company"> | Date | string
    sic_code?: IntNullableFilter<"dim_company"> | number | null
    sic_description?: StringNullableFilter<"dim_company"> | string | null
    fiscal_year_end?: StringNullableFilter<"dim_company"> | string | null
    fact_prices?: Fact_pricesListRelationFilter
    universe?: XOR<UniverseNullableScalarRelationFilter, universeWhereInput> | null
  }

  export type dim_companyOrderByWithRelationInput = {
    company_id?: SortOrder
    cik?: SortOrder
    ticker?: SortOrderInput | SortOrder
    yf_ticker?: SortOrderInput | SortOrder
    company_name?: SortOrder
    exchange?: SortOrderInput | SortOrder
    gics_sector?: SortOrderInput | SortOrder
    gics_industry?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    sic_code?: SortOrderInput | SortOrder
    sic_description?: SortOrderInput | SortOrder
    fiscal_year_end?: SortOrderInput | SortOrder
    fact_prices?: fact_pricesOrderByRelationAggregateInput
    universe?: universeOrderByWithRelationInput
  }

  export type dim_companyWhereUniqueInput = Prisma.AtLeast<{
    company_id?: number
    cik?: string
    AND?: dim_companyWhereInput | dim_companyWhereInput[]
    OR?: dim_companyWhereInput[]
    NOT?: dim_companyWhereInput | dim_companyWhereInput[]
    ticker?: StringNullableFilter<"dim_company"> | string | null
    yf_ticker?: StringNullableFilter<"dim_company"> | string | null
    company_name?: StringFilter<"dim_company"> | string
    exchange?: StringNullableFilter<"dim_company"> | string | null
    gics_sector?: StringNullableFilter<"dim_company"> | string | null
    gics_industry?: StringNullableFilter<"dim_company"> | string | null
    is_active?: BoolFilter<"dim_company"> | boolean
    created_at?: DateTimeFilter<"dim_company"> | Date | string
    updated_at?: DateTimeFilter<"dim_company"> | Date | string
    sic_code?: IntNullableFilter<"dim_company"> | number | null
    sic_description?: StringNullableFilter<"dim_company"> | string | null
    fiscal_year_end?: StringNullableFilter<"dim_company"> | string | null
    fact_prices?: Fact_pricesListRelationFilter
    universe?: XOR<UniverseNullableScalarRelationFilter, universeWhereInput> | null
  }, "company_id" | "cik">

  export type dim_companyOrderByWithAggregationInput = {
    company_id?: SortOrder
    cik?: SortOrder
    ticker?: SortOrderInput | SortOrder
    yf_ticker?: SortOrderInput | SortOrder
    company_name?: SortOrder
    exchange?: SortOrderInput | SortOrder
    gics_sector?: SortOrderInput | SortOrder
    gics_industry?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    sic_code?: SortOrderInput | SortOrder
    sic_description?: SortOrderInput | SortOrder
    fiscal_year_end?: SortOrderInput | SortOrder
    _count?: dim_companyCountOrderByAggregateInput
    _avg?: dim_companyAvgOrderByAggregateInput
    _max?: dim_companyMaxOrderByAggregateInput
    _min?: dim_companyMinOrderByAggregateInput
    _sum?: dim_companySumOrderByAggregateInput
  }

  export type dim_companyScalarWhereWithAggregatesInput = {
    AND?: dim_companyScalarWhereWithAggregatesInput | dim_companyScalarWhereWithAggregatesInput[]
    OR?: dim_companyScalarWhereWithAggregatesInput[]
    NOT?: dim_companyScalarWhereWithAggregatesInput | dim_companyScalarWhereWithAggregatesInput[]
    company_id?: IntWithAggregatesFilter<"dim_company"> | number
    cik?: StringWithAggregatesFilter<"dim_company"> | string
    ticker?: StringNullableWithAggregatesFilter<"dim_company"> | string | null
    yf_ticker?: StringNullableWithAggregatesFilter<"dim_company"> | string | null
    company_name?: StringWithAggregatesFilter<"dim_company"> | string
    exchange?: StringNullableWithAggregatesFilter<"dim_company"> | string | null
    gics_sector?: StringNullableWithAggregatesFilter<"dim_company"> | string | null
    gics_industry?: StringNullableWithAggregatesFilter<"dim_company"> | string | null
    is_active?: BoolWithAggregatesFilter<"dim_company"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"dim_company"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"dim_company"> | Date | string
    sic_code?: IntNullableWithAggregatesFilter<"dim_company"> | number | null
    sic_description?: StringNullableWithAggregatesFilter<"dim_company"> | string | null
    fiscal_year_end?: StringNullableWithAggregatesFilter<"dim_company"> | string | null
  }

  export type dim_dateWhereInput = {
    AND?: dim_dateWhereInput | dim_dateWhereInput[]
    OR?: dim_dateWhereInput[]
    NOT?: dim_dateWhereInput | dim_dateWhereInput[]
    date_id?: IntFilter<"dim_date"> | number
    date?: DateTimeFilter<"dim_date"> | Date | string
    year?: IntFilter<"dim_date"> | number
    quarter?: IntFilter<"dim_date"> | number
    month?: IntFilter<"dim_date"> | number
    month_name?: StringFilter<"dim_date"> | string
    week_of_year?: IntFilter<"dim_date"> | number
    day_of_month?: IntFilter<"dim_date"> | number
    day_of_week?: IntFilter<"dim_date"> | number
    day_name?: StringFilter<"dim_date"> | string
    is_weekend?: BoolFilter<"dim_date"> | boolean
    is_trading_day?: BoolFilter<"dim_date"> | boolean
    is_trading_month_end?: BoolFilter<"dim_date"> | boolean
    fiscal_year?: IntNullableFilter<"dim_date"> | number | null
    fiscal_quarter?: IntNullableFilter<"dim_date"> | number | null
  }

  export type dim_dateOrderByWithRelationInput = {
    date_id?: SortOrder
    date?: SortOrder
    year?: SortOrder
    quarter?: SortOrder
    month?: SortOrder
    month_name?: SortOrder
    week_of_year?: SortOrder
    day_of_month?: SortOrder
    day_of_week?: SortOrder
    day_name?: SortOrder
    is_weekend?: SortOrder
    is_trading_day?: SortOrder
    is_trading_month_end?: SortOrder
    fiscal_year?: SortOrderInput | SortOrder
    fiscal_quarter?: SortOrderInput | SortOrder
  }

  export type dim_dateWhereUniqueInput = Prisma.AtLeast<{
    date_id?: number
    date?: Date | string
    AND?: dim_dateWhereInput | dim_dateWhereInput[]
    OR?: dim_dateWhereInput[]
    NOT?: dim_dateWhereInput | dim_dateWhereInput[]
    year?: IntFilter<"dim_date"> | number
    quarter?: IntFilter<"dim_date"> | number
    month?: IntFilter<"dim_date"> | number
    month_name?: StringFilter<"dim_date"> | string
    week_of_year?: IntFilter<"dim_date"> | number
    day_of_month?: IntFilter<"dim_date"> | number
    day_of_week?: IntFilter<"dim_date"> | number
    day_name?: StringFilter<"dim_date"> | string
    is_weekend?: BoolFilter<"dim_date"> | boolean
    is_trading_day?: BoolFilter<"dim_date"> | boolean
    is_trading_month_end?: BoolFilter<"dim_date"> | boolean
    fiscal_year?: IntNullableFilter<"dim_date"> | number | null
    fiscal_quarter?: IntNullableFilter<"dim_date"> | number | null
  }, "date_id" | "date">

  export type dim_dateOrderByWithAggregationInput = {
    date_id?: SortOrder
    date?: SortOrder
    year?: SortOrder
    quarter?: SortOrder
    month?: SortOrder
    month_name?: SortOrder
    week_of_year?: SortOrder
    day_of_month?: SortOrder
    day_of_week?: SortOrder
    day_name?: SortOrder
    is_weekend?: SortOrder
    is_trading_day?: SortOrder
    is_trading_month_end?: SortOrder
    fiscal_year?: SortOrderInput | SortOrder
    fiscal_quarter?: SortOrderInput | SortOrder
    _count?: dim_dateCountOrderByAggregateInput
    _avg?: dim_dateAvgOrderByAggregateInput
    _max?: dim_dateMaxOrderByAggregateInput
    _min?: dim_dateMinOrderByAggregateInput
    _sum?: dim_dateSumOrderByAggregateInput
  }

  export type dim_dateScalarWhereWithAggregatesInput = {
    AND?: dim_dateScalarWhereWithAggregatesInput | dim_dateScalarWhereWithAggregatesInput[]
    OR?: dim_dateScalarWhereWithAggregatesInput[]
    NOT?: dim_dateScalarWhereWithAggregatesInput | dim_dateScalarWhereWithAggregatesInput[]
    date_id?: IntWithAggregatesFilter<"dim_date"> | number
    date?: DateTimeWithAggregatesFilter<"dim_date"> | Date | string
    year?: IntWithAggregatesFilter<"dim_date"> | number
    quarter?: IntWithAggregatesFilter<"dim_date"> | number
    month?: IntWithAggregatesFilter<"dim_date"> | number
    month_name?: StringWithAggregatesFilter<"dim_date"> | string
    week_of_year?: IntWithAggregatesFilter<"dim_date"> | number
    day_of_month?: IntWithAggregatesFilter<"dim_date"> | number
    day_of_week?: IntWithAggregatesFilter<"dim_date"> | number
    day_name?: StringWithAggregatesFilter<"dim_date"> | string
    is_weekend?: BoolWithAggregatesFilter<"dim_date"> | boolean
    is_trading_day?: BoolWithAggregatesFilter<"dim_date"> | boolean
    is_trading_month_end?: BoolWithAggregatesFilter<"dim_date"> | boolean
    fiscal_year?: IntNullableWithAggregatesFilter<"dim_date"> | number | null
    fiscal_quarter?: IntNullableWithAggregatesFilter<"dim_date"> | number | null
  }

  export type fact_fundamentalsWhereInput = {
    AND?: fact_fundamentalsWhereInput | fact_fundamentalsWhereInput[]
    OR?: fact_fundamentalsWhereInput[]
    NOT?: fact_fundamentalsWhereInput | fact_fundamentalsWhereInput[]
    company_id?: IntFilter<"fact_fundamentals"> | number
    concept?: StringFilter<"fact_fundamentals"> | string
    period_end?: DateTimeFilter<"fact_fundamentals"> | Date | string
    filing_date?: DateTimeFilter<"fact_fundamentals"> | Date | string
    value?: DecimalNullableFilter<"fact_fundamentals"> | Decimal | DecimalJsLike | number | string | null
    unit?: StringNullableFilter<"fact_fundamentals"> | string | null
    source_tag?: StringNullableFilter<"fact_fundamentals"> | string | null
    policy?: StringNullableFilter<"fact_fundamentals"> | string | null
    form?: StringNullableFilter<"fact_fundamentals"> | string | null
    data_quality?: StringFilter<"fact_fundamentals"> | string
    is_restatement?: BoolFilter<"fact_fundamentals"> | boolean
  }

  export type fact_fundamentalsOrderByWithRelationInput = {
    company_id?: SortOrder
    concept?: SortOrder
    period_end?: SortOrder
    filing_date?: SortOrder
    value?: SortOrderInput | SortOrder
    unit?: SortOrderInput | SortOrder
    source_tag?: SortOrderInput | SortOrder
    policy?: SortOrderInput | SortOrder
    form?: SortOrderInput | SortOrder
    data_quality?: SortOrder
    is_restatement?: SortOrder
  }

  export type fact_fundamentalsWhereUniqueInput = Prisma.AtLeast<{
    company_id_concept_period_end_filing_date?: fact_fundamentalsCompany_idConceptPeriod_endFiling_dateCompoundUniqueInput
    AND?: fact_fundamentalsWhereInput | fact_fundamentalsWhereInput[]
    OR?: fact_fundamentalsWhereInput[]
    NOT?: fact_fundamentalsWhereInput | fact_fundamentalsWhereInput[]
    company_id?: IntFilter<"fact_fundamentals"> | number
    concept?: StringFilter<"fact_fundamentals"> | string
    period_end?: DateTimeFilter<"fact_fundamentals"> | Date | string
    filing_date?: DateTimeFilter<"fact_fundamentals"> | Date | string
    value?: DecimalNullableFilter<"fact_fundamentals"> | Decimal | DecimalJsLike | number | string | null
    unit?: StringNullableFilter<"fact_fundamentals"> | string | null
    source_tag?: StringNullableFilter<"fact_fundamentals"> | string | null
    policy?: StringNullableFilter<"fact_fundamentals"> | string | null
    form?: StringNullableFilter<"fact_fundamentals"> | string | null
    data_quality?: StringFilter<"fact_fundamentals"> | string
    is_restatement?: BoolFilter<"fact_fundamentals"> | boolean
  }, "company_id_concept_period_end_filing_date">

  export type fact_fundamentalsOrderByWithAggregationInput = {
    company_id?: SortOrder
    concept?: SortOrder
    period_end?: SortOrder
    filing_date?: SortOrder
    value?: SortOrderInput | SortOrder
    unit?: SortOrderInput | SortOrder
    source_tag?: SortOrderInput | SortOrder
    policy?: SortOrderInput | SortOrder
    form?: SortOrderInput | SortOrder
    data_quality?: SortOrder
    is_restatement?: SortOrder
    _count?: fact_fundamentalsCountOrderByAggregateInput
    _avg?: fact_fundamentalsAvgOrderByAggregateInput
    _max?: fact_fundamentalsMaxOrderByAggregateInput
    _min?: fact_fundamentalsMinOrderByAggregateInput
    _sum?: fact_fundamentalsSumOrderByAggregateInput
  }

  export type fact_fundamentalsScalarWhereWithAggregatesInput = {
    AND?: fact_fundamentalsScalarWhereWithAggregatesInput | fact_fundamentalsScalarWhereWithAggregatesInput[]
    OR?: fact_fundamentalsScalarWhereWithAggregatesInput[]
    NOT?: fact_fundamentalsScalarWhereWithAggregatesInput | fact_fundamentalsScalarWhereWithAggregatesInput[]
    company_id?: IntWithAggregatesFilter<"fact_fundamentals"> | number
    concept?: StringWithAggregatesFilter<"fact_fundamentals"> | string
    period_end?: DateTimeWithAggregatesFilter<"fact_fundamentals"> | Date | string
    filing_date?: DateTimeWithAggregatesFilter<"fact_fundamentals"> | Date | string
    value?: DecimalNullableWithAggregatesFilter<"fact_fundamentals"> | Decimal | DecimalJsLike | number | string | null
    unit?: StringNullableWithAggregatesFilter<"fact_fundamentals"> | string | null
    source_tag?: StringNullableWithAggregatesFilter<"fact_fundamentals"> | string | null
    policy?: StringNullableWithAggregatesFilter<"fact_fundamentals"> | string | null
    form?: StringNullableWithAggregatesFilter<"fact_fundamentals"> | string | null
    data_quality?: StringWithAggregatesFilter<"fact_fundamentals"> | string
    is_restatement?: BoolWithAggregatesFilter<"fact_fundamentals"> | boolean
  }

  export type fact_macroWhereInput = {
    AND?: fact_macroWhereInput | fact_macroWhereInput[]
    OR?: fact_macroWhereInput[]
    NOT?: fact_macroWhereInput | fact_macroWhereInput[]
    macro_id?: BigIntFilter<"fact_macro"> | bigint | number
    series_id?: StringFilter<"fact_macro"> | string
    date?: DateTimeFilter<"fact_macro"> | Date | string
    value?: DecimalNullableFilter<"fact_macro"> | Decimal | DecimalJsLike | number | string | null
  }

  export type fact_macroOrderByWithRelationInput = {
    macro_id?: SortOrder
    series_id?: SortOrder
    date?: SortOrder
    value?: SortOrderInput | SortOrder
  }

  export type fact_macroWhereUniqueInput = Prisma.AtLeast<{
    macro_id?: bigint | number
    series_id_date?: fact_macroSeries_idDateCompoundUniqueInput
    AND?: fact_macroWhereInput | fact_macroWhereInput[]
    OR?: fact_macroWhereInput[]
    NOT?: fact_macroWhereInput | fact_macroWhereInput[]
    series_id?: StringFilter<"fact_macro"> | string
    date?: DateTimeFilter<"fact_macro"> | Date | string
    value?: DecimalNullableFilter<"fact_macro"> | Decimal | DecimalJsLike | number | string | null
  }, "macro_id" | "series_id_date">

  export type fact_macroOrderByWithAggregationInput = {
    macro_id?: SortOrder
    series_id?: SortOrder
    date?: SortOrder
    value?: SortOrderInput | SortOrder
    _count?: fact_macroCountOrderByAggregateInput
    _avg?: fact_macroAvgOrderByAggregateInput
    _max?: fact_macroMaxOrderByAggregateInput
    _min?: fact_macroMinOrderByAggregateInput
    _sum?: fact_macroSumOrderByAggregateInput
  }

  export type fact_macroScalarWhereWithAggregatesInput = {
    AND?: fact_macroScalarWhereWithAggregatesInput | fact_macroScalarWhereWithAggregatesInput[]
    OR?: fact_macroScalarWhereWithAggregatesInput[]
    NOT?: fact_macroScalarWhereWithAggregatesInput | fact_macroScalarWhereWithAggregatesInput[]
    macro_id?: BigIntWithAggregatesFilter<"fact_macro"> | bigint | number
    series_id?: StringWithAggregatesFilter<"fact_macro"> | string
    date?: DateTimeWithAggregatesFilter<"fact_macro"> | Date | string
    value?: DecimalNullableWithAggregatesFilter<"fact_macro"> | Decimal | DecimalJsLike | number | string | null
  }

  export type fact_pricesWhereInput = {
    AND?: fact_pricesWhereInput | fact_pricesWhereInput[]
    OR?: fact_pricesWhereInput[]
    NOT?: fact_pricesWhereInput | fact_pricesWhereInput[]
    price_id?: BigIntFilter<"fact_prices"> | bigint | number
    company_id?: IntFilter<"fact_prices"> | number
    trade_date?: DateTimeFilter<"fact_prices"> | Date | string
    open?: DecimalNullableFilter<"fact_prices"> | Decimal | DecimalJsLike | number | string | null
    high?: DecimalNullableFilter<"fact_prices"> | Decimal | DecimalJsLike | number | string | null
    low?: DecimalNullableFilter<"fact_prices"> | Decimal | DecimalJsLike | number | string | null
    close?: DecimalNullableFilter<"fact_prices"> | Decimal | DecimalJsLike | number | string | null
    adj_close?: DecimalFilter<"fact_prices"> | Decimal | DecimalJsLike | number | string
    volume?: DecimalNullableFilter<"fact_prices"> | Decimal | DecimalJsLike | number | string | null
    dim_company?: XOR<Dim_companyScalarRelationFilter, dim_companyWhereInput>
  }

  export type fact_pricesOrderByWithRelationInput = {
    price_id?: SortOrder
    company_id?: SortOrder
    trade_date?: SortOrder
    open?: SortOrderInput | SortOrder
    high?: SortOrderInput | SortOrder
    low?: SortOrderInput | SortOrder
    close?: SortOrderInput | SortOrder
    adj_close?: SortOrder
    volume?: SortOrderInput | SortOrder
    dim_company?: dim_companyOrderByWithRelationInput
  }

  export type fact_pricesWhereUniqueInput = Prisma.AtLeast<{
    price_id?: bigint | number
    company_id_trade_date?: fact_pricesCompany_idTrade_dateCompoundUniqueInput
    AND?: fact_pricesWhereInput | fact_pricesWhereInput[]
    OR?: fact_pricesWhereInput[]
    NOT?: fact_pricesWhereInput | fact_pricesWhereInput[]
    company_id?: IntFilter<"fact_prices"> | number
    trade_date?: DateTimeFilter<"fact_prices"> | Date | string
    open?: DecimalNullableFilter<"fact_prices"> | Decimal | DecimalJsLike | number | string | null
    high?: DecimalNullableFilter<"fact_prices"> | Decimal | DecimalJsLike | number | string | null
    low?: DecimalNullableFilter<"fact_prices"> | Decimal | DecimalJsLike | number | string | null
    close?: DecimalNullableFilter<"fact_prices"> | Decimal | DecimalJsLike | number | string | null
    adj_close?: DecimalFilter<"fact_prices"> | Decimal | DecimalJsLike | number | string
    volume?: DecimalNullableFilter<"fact_prices"> | Decimal | DecimalJsLike | number | string | null
    dim_company?: XOR<Dim_companyScalarRelationFilter, dim_companyWhereInput>
  }, "price_id" | "company_id_trade_date">

  export type fact_pricesOrderByWithAggregationInput = {
    price_id?: SortOrder
    company_id?: SortOrder
    trade_date?: SortOrder
    open?: SortOrderInput | SortOrder
    high?: SortOrderInput | SortOrder
    low?: SortOrderInput | SortOrder
    close?: SortOrderInput | SortOrder
    adj_close?: SortOrder
    volume?: SortOrderInput | SortOrder
    _count?: fact_pricesCountOrderByAggregateInput
    _avg?: fact_pricesAvgOrderByAggregateInput
    _max?: fact_pricesMaxOrderByAggregateInput
    _min?: fact_pricesMinOrderByAggregateInput
    _sum?: fact_pricesSumOrderByAggregateInput
  }

  export type fact_pricesScalarWhereWithAggregatesInput = {
    AND?: fact_pricesScalarWhereWithAggregatesInput | fact_pricesScalarWhereWithAggregatesInput[]
    OR?: fact_pricesScalarWhereWithAggregatesInput[]
    NOT?: fact_pricesScalarWhereWithAggregatesInput | fact_pricesScalarWhereWithAggregatesInput[]
    price_id?: BigIntWithAggregatesFilter<"fact_prices"> | bigint | number
    company_id?: IntWithAggregatesFilter<"fact_prices"> | number
    trade_date?: DateTimeWithAggregatesFilter<"fact_prices"> | Date | string
    open?: DecimalNullableWithAggregatesFilter<"fact_prices"> | Decimal | DecimalJsLike | number | string | null
    high?: DecimalNullableWithAggregatesFilter<"fact_prices"> | Decimal | DecimalJsLike | number | string | null
    low?: DecimalNullableWithAggregatesFilter<"fact_prices"> | Decimal | DecimalJsLike | number | string | null
    close?: DecimalNullableWithAggregatesFilter<"fact_prices"> | Decimal | DecimalJsLike | number | string | null
    adj_close?: DecimalWithAggregatesFilter<"fact_prices"> | Decimal | DecimalJsLike | number | string
    volume?: DecimalNullableWithAggregatesFilter<"fact_prices"> | Decimal | DecimalJsLike | number | string | null
  }

  export type universeWhereInput = {
    AND?: universeWhereInput | universeWhereInput[]
    OR?: universeWhereInput[]
    NOT?: universeWhereInput | universeWhereInput[]
    company_id?: IntFilter<"universe"> | number
    added_at?: DateTimeFilter<"universe"> | Date | string
    dim_company?: XOR<Dim_companyScalarRelationFilter, dim_companyWhereInput>
  }

  export type universeOrderByWithRelationInput = {
    company_id?: SortOrder
    added_at?: SortOrder
    dim_company?: dim_companyOrderByWithRelationInput
  }

  export type universeWhereUniqueInput = Prisma.AtLeast<{
    company_id?: number
    AND?: universeWhereInput | universeWhereInput[]
    OR?: universeWhereInput[]
    NOT?: universeWhereInput | universeWhereInput[]
    added_at?: DateTimeFilter<"universe"> | Date | string
    dim_company?: XOR<Dim_companyScalarRelationFilter, dim_companyWhereInput>
  }, "company_id">

  export type universeOrderByWithAggregationInput = {
    company_id?: SortOrder
    added_at?: SortOrder
    _count?: universeCountOrderByAggregateInput
    _avg?: universeAvgOrderByAggregateInput
    _max?: universeMaxOrderByAggregateInput
    _min?: universeMinOrderByAggregateInput
    _sum?: universeSumOrderByAggregateInput
  }

  export type universeScalarWhereWithAggregatesInput = {
    AND?: universeScalarWhereWithAggregatesInput | universeScalarWhereWithAggregatesInput[]
    OR?: universeScalarWhereWithAggregatesInput[]
    NOT?: universeScalarWhereWithAggregatesInput | universeScalarWhereWithAggregatesInput[]
    company_id?: IntWithAggregatesFilter<"universe"> | number
    added_at?: DateTimeWithAggregatesFilter<"universe"> | Date | string
  }

  export type raw_fundamentalsWhereInput = {
    AND?: raw_fundamentalsWhereInput | raw_fundamentalsWhereInput[]
    OR?: raw_fundamentalsWhereInput[]
    NOT?: raw_fundamentalsWhereInput | raw_fundamentalsWhereInput[]
    id?: BigIntFilter<"raw_fundamentals"> | bigint | number
    cik?: StringFilter<"raw_fundamentals"> | string
    ticker?: StringNullableFilter<"raw_fundamentals"> | string | null
    taxonomy?: StringFilter<"raw_fundamentals"> | string
    tag?: StringFilter<"raw_fundamentals"> | string
    unit?: StringFilter<"raw_fundamentals"> | string
    period_start?: DateTimeNullableFilter<"raw_fundamentals"> | Date | string | null
    period_end?: DateTimeFilter<"raw_fundamentals"> | Date | string
    filing_date?: DateTimeFilter<"raw_fundamentals"> | Date | string
    accession?: StringNullableFilter<"raw_fundamentals"> | string | null
    form?: StringNullableFilter<"raw_fundamentals"> | string | null
    value?: DecimalNullableFilter<"raw_fundamentals"> | Decimal | DecimalJsLike | number | string | null
    loaded_at?: DateTimeFilter<"raw_fundamentals"> | Date | string
  }

  export type raw_fundamentalsOrderByWithRelationInput = {
    id?: SortOrder
    cik?: SortOrder
    ticker?: SortOrderInput | SortOrder
    taxonomy?: SortOrder
    tag?: SortOrder
    unit?: SortOrder
    period_start?: SortOrderInput | SortOrder
    period_end?: SortOrder
    filing_date?: SortOrder
    accession?: SortOrderInput | SortOrder
    form?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    loaded_at?: SortOrder
  }

  export type raw_fundamentalsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    cik_taxonomy_tag_unit_period_end_filing_date_form?: raw_fundamentalsCikTaxonomyTagUnitPeriod_endFiling_dateFormCompoundUniqueInput
    AND?: raw_fundamentalsWhereInput | raw_fundamentalsWhereInput[]
    OR?: raw_fundamentalsWhereInput[]
    NOT?: raw_fundamentalsWhereInput | raw_fundamentalsWhereInput[]
    cik?: StringFilter<"raw_fundamentals"> | string
    ticker?: StringNullableFilter<"raw_fundamentals"> | string | null
    taxonomy?: StringFilter<"raw_fundamentals"> | string
    tag?: StringFilter<"raw_fundamentals"> | string
    unit?: StringFilter<"raw_fundamentals"> | string
    period_start?: DateTimeNullableFilter<"raw_fundamentals"> | Date | string | null
    period_end?: DateTimeFilter<"raw_fundamentals"> | Date | string
    filing_date?: DateTimeFilter<"raw_fundamentals"> | Date | string
    accession?: StringNullableFilter<"raw_fundamentals"> | string | null
    form?: StringNullableFilter<"raw_fundamentals"> | string | null
    value?: DecimalNullableFilter<"raw_fundamentals"> | Decimal | DecimalJsLike | number | string | null
    loaded_at?: DateTimeFilter<"raw_fundamentals"> | Date | string
  }, "id" | "cik_taxonomy_tag_unit_period_end_filing_date_form">

  export type raw_fundamentalsOrderByWithAggregationInput = {
    id?: SortOrder
    cik?: SortOrder
    ticker?: SortOrderInput | SortOrder
    taxonomy?: SortOrder
    tag?: SortOrder
    unit?: SortOrder
    period_start?: SortOrderInput | SortOrder
    period_end?: SortOrder
    filing_date?: SortOrder
    accession?: SortOrderInput | SortOrder
    form?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    loaded_at?: SortOrder
    _count?: raw_fundamentalsCountOrderByAggregateInput
    _avg?: raw_fundamentalsAvgOrderByAggregateInput
    _max?: raw_fundamentalsMaxOrderByAggregateInput
    _min?: raw_fundamentalsMinOrderByAggregateInput
    _sum?: raw_fundamentalsSumOrderByAggregateInput
  }

  export type raw_fundamentalsScalarWhereWithAggregatesInput = {
    AND?: raw_fundamentalsScalarWhereWithAggregatesInput | raw_fundamentalsScalarWhereWithAggregatesInput[]
    OR?: raw_fundamentalsScalarWhereWithAggregatesInput[]
    NOT?: raw_fundamentalsScalarWhereWithAggregatesInput | raw_fundamentalsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"raw_fundamentals"> | bigint | number
    cik?: StringWithAggregatesFilter<"raw_fundamentals"> | string
    ticker?: StringNullableWithAggregatesFilter<"raw_fundamentals"> | string | null
    taxonomy?: StringWithAggregatesFilter<"raw_fundamentals"> | string
    tag?: StringWithAggregatesFilter<"raw_fundamentals"> | string
    unit?: StringWithAggregatesFilter<"raw_fundamentals"> | string
    period_start?: DateTimeNullableWithAggregatesFilter<"raw_fundamentals"> | Date | string | null
    period_end?: DateTimeWithAggregatesFilter<"raw_fundamentals"> | Date | string
    filing_date?: DateTimeWithAggregatesFilter<"raw_fundamentals"> | Date | string
    accession?: StringNullableWithAggregatesFilter<"raw_fundamentals"> | string | null
    form?: StringNullableWithAggregatesFilter<"raw_fundamentals"> | string | null
    value?: DecimalNullableWithAggregatesFilter<"raw_fundamentals"> | Decimal | DecimalJsLike | number | string | null
    loaded_at?: DateTimeWithAggregatesFilter<"raw_fundamentals"> | Date | string
  }

  export type raw_macroWhereInput = {
    AND?: raw_macroWhereInput | raw_macroWhereInput[]
    OR?: raw_macroWhereInput[]
    NOT?: raw_macroWhereInput | raw_macroWhereInput[]
    id?: BigIntFilter<"raw_macro"> | bigint | number
    series_id?: StringFilter<"raw_macro"> | string
    date?: DateTimeFilter<"raw_macro"> | Date | string
    value?: DecimalNullableFilter<"raw_macro"> | Decimal | DecimalJsLike | number | string | null
    ingested_at?: DateTimeFilter<"raw_macro"> | Date | string
  }

  export type raw_macroOrderByWithRelationInput = {
    id?: SortOrder
    series_id?: SortOrder
    date?: SortOrder
    value?: SortOrderInput | SortOrder
    ingested_at?: SortOrder
  }

  export type raw_macroWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    series_id_date?: raw_macroSeries_idDateCompoundUniqueInput
    AND?: raw_macroWhereInput | raw_macroWhereInput[]
    OR?: raw_macroWhereInput[]
    NOT?: raw_macroWhereInput | raw_macroWhereInput[]
    series_id?: StringFilter<"raw_macro"> | string
    date?: DateTimeFilter<"raw_macro"> | Date | string
    value?: DecimalNullableFilter<"raw_macro"> | Decimal | DecimalJsLike | number | string | null
    ingested_at?: DateTimeFilter<"raw_macro"> | Date | string
  }, "id" | "series_id_date">

  export type raw_macroOrderByWithAggregationInput = {
    id?: SortOrder
    series_id?: SortOrder
    date?: SortOrder
    value?: SortOrderInput | SortOrder
    ingested_at?: SortOrder
    _count?: raw_macroCountOrderByAggregateInput
    _avg?: raw_macroAvgOrderByAggregateInput
    _max?: raw_macroMaxOrderByAggregateInput
    _min?: raw_macroMinOrderByAggregateInput
    _sum?: raw_macroSumOrderByAggregateInput
  }

  export type raw_macroScalarWhereWithAggregatesInput = {
    AND?: raw_macroScalarWhereWithAggregatesInput | raw_macroScalarWhereWithAggregatesInput[]
    OR?: raw_macroScalarWhereWithAggregatesInput[]
    NOT?: raw_macroScalarWhereWithAggregatesInput | raw_macroScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"raw_macro"> | bigint | number
    series_id?: StringWithAggregatesFilter<"raw_macro"> | string
    date?: DateTimeWithAggregatesFilter<"raw_macro"> | Date | string
    value?: DecimalNullableWithAggregatesFilter<"raw_macro"> | Decimal | DecimalJsLike | number | string | null
    ingested_at?: DateTimeWithAggregatesFilter<"raw_macro"> | Date | string
  }

  export type raw_pricesWhereInput = {
    AND?: raw_pricesWhereInput | raw_pricesWhereInput[]
    OR?: raw_pricesWhereInput[]
    NOT?: raw_pricesWhereInput | raw_pricesWhereInput[]
    id?: BigIntFilter<"raw_prices"> | bigint | number
    ticker?: StringFilter<"raw_prices"> | string
    trade_date?: DateTimeFilter<"raw_prices"> | Date | string
    open?: DecimalNullableFilter<"raw_prices"> | Decimal | DecimalJsLike | number | string | null
    high?: DecimalNullableFilter<"raw_prices"> | Decimal | DecimalJsLike | number | string | null
    low?: DecimalNullableFilter<"raw_prices"> | Decimal | DecimalJsLike | number | string | null
    close?: DecimalNullableFilter<"raw_prices"> | Decimal | DecimalJsLike | number | string | null
    adj_close?: DecimalNullableFilter<"raw_prices"> | Decimal | DecimalJsLike | number | string | null
    volume?: BigIntNullableFilter<"raw_prices"> | bigint | number | null
    ingested_at?: DateTimeFilter<"raw_prices"> | Date | string
  }

  export type raw_pricesOrderByWithRelationInput = {
    id?: SortOrder
    ticker?: SortOrder
    trade_date?: SortOrder
    open?: SortOrderInput | SortOrder
    high?: SortOrderInput | SortOrder
    low?: SortOrderInput | SortOrder
    close?: SortOrderInput | SortOrder
    adj_close?: SortOrderInput | SortOrder
    volume?: SortOrderInput | SortOrder
    ingested_at?: SortOrder
  }

  export type raw_pricesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    ticker_trade_date?: raw_pricesTickerTrade_dateCompoundUniqueInput
    AND?: raw_pricesWhereInput | raw_pricesWhereInput[]
    OR?: raw_pricesWhereInput[]
    NOT?: raw_pricesWhereInput | raw_pricesWhereInput[]
    ticker?: StringFilter<"raw_prices"> | string
    trade_date?: DateTimeFilter<"raw_prices"> | Date | string
    open?: DecimalNullableFilter<"raw_prices"> | Decimal | DecimalJsLike | number | string | null
    high?: DecimalNullableFilter<"raw_prices"> | Decimal | DecimalJsLike | number | string | null
    low?: DecimalNullableFilter<"raw_prices"> | Decimal | DecimalJsLike | number | string | null
    close?: DecimalNullableFilter<"raw_prices"> | Decimal | DecimalJsLike | number | string | null
    adj_close?: DecimalNullableFilter<"raw_prices"> | Decimal | DecimalJsLike | number | string | null
    volume?: BigIntNullableFilter<"raw_prices"> | bigint | number | null
    ingested_at?: DateTimeFilter<"raw_prices"> | Date | string
  }, "id" | "ticker_trade_date">

  export type raw_pricesOrderByWithAggregationInput = {
    id?: SortOrder
    ticker?: SortOrder
    trade_date?: SortOrder
    open?: SortOrderInput | SortOrder
    high?: SortOrderInput | SortOrder
    low?: SortOrderInput | SortOrder
    close?: SortOrderInput | SortOrder
    adj_close?: SortOrderInput | SortOrder
    volume?: SortOrderInput | SortOrder
    ingested_at?: SortOrder
    _count?: raw_pricesCountOrderByAggregateInput
    _avg?: raw_pricesAvgOrderByAggregateInput
    _max?: raw_pricesMaxOrderByAggregateInput
    _min?: raw_pricesMinOrderByAggregateInput
    _sum?: raw_pricesSumOrderByAggregateInput
  }

  export type raw_pricesScalarWhereWithAggregatesInput = {
    AND?: raw_pricesScalarWhereWithAggregatesInput | raw_pricesScalarWhereWithAggregatesInput[]
    OR?: raw_pricesScalarWhereWithAggregatesInput[]
    NOT?: raw_pricesScalarWhereWithAggregatesInput | raw_pricesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"raw_prices"> | bigint | number
    ticker?: StringWithAggregatesFilter<"raw_prices"> | string
    trade_date?: DateTimeWithAggregatesFilter<"raw_prices"> | Date | string
    open?: DecimalNullableWithAggregatesFilter<"raw_prices"> | Decimal | DecimalJsLike | number | string | null
    high?: DecimalNullableWithAggregatesFilter<"raw_prices"> | Decimal | DecimalJsLike | number | string | null
    low?: DecimalNullableWithAggregatesFilter<"raw_prices"> | Decimal | DecimalJsLike | number | string | null
    close?: DecimalNullableWithAggregatesFilter<"raw_prices"> | Decimal | DecimalJsLike | number | string | null
    adj_close?: DecimalNullableWithAggregatesFilter<"raw_prices"> | Decimal | DecimalJsLike | number | string | null
    volume?: BigIntNullableWithAggregatesFilter<"raw_prices"> | bigint | number | null
    ingested_at?: DateTimeWithAggregatesFilter<"raw_prices"> | Date | string
  }

  export type raw_tiingo_fundamentalsWhereInput = {
    AND?: raw_tiingo_fundamentalsWhereInput | raw_tiingo_fundamentalsWhereInput[]
    OR?: raw_tiingo_fundamentalsWhereInput[]
    NOT?: raw_tiingo_fundamentalsWhereInput | raw_tiingo_fundamentalsWhereInput[]
    ticker?: StringFilter<"raw_tiingo_fundamentals"> | string
    tiingo_ticker?: StringFilter<"raw_tiingo_fundamentals"> | string
    raw_payload?: JsonFilter<"raw_tiingo_fundamentals">
    ingested_at?: DateTimeFilter<"raw_tiingo_fundamentals"> | Date | string
  }

  export type raw_tiingo_fundamentalsOrderByWithRelationInput = {
    ticker?: SortOrder
    tiingo_ticker?: SortOrder
    raw_payload?: SortOrder
    ingested_at?: SortOrder
  }

  export type raw_tiingo_fundamentalsWhereUniqueInput = Prisma.AtLeast<{
    ticker?: string
    AND?: raw_tiingo_fundamentalsWhereInput | raw_tiingo_fundamentalsWhereInput[]
    OR?: raw_tiingo_fundamentalsWhereInput[]
    NOT?: raw_tiingo_fundamentalsWhereInput | raw_tiingo_fundamentalsWhereInput[]
    tiingo_ticker?: StringFilter<"raw_tiingo_fundamentals"> | string
    raw_payload?: JsonFilter<"raw_tiingo_fundamentals">
    ingested_at?: DateTimeFilter<"raw_tiingo_fundamentals"> | Date | string
  }, "ticker">

  export type raw_tiingo_fundamentalsOrderByWithAggregationInput = {
    ticker?: SortOrder
    tiingo_ticker?: SortOrder
    raw_payload?: SortOrder
    ingested_at?: SortOrder
    _count?: raw_tiingo_fundamentalsCountOrderByAggregateInput
    _max?: raw_tiingo_fundamentalsMaxOrderByAggregateInput
    _min?: raw_tiingo_fundamentalsMinOrderByAggregateInput
  }

  export type raw_tiingo_fundamentalsScalarWhereWithAggregatesInput = {
    AND?: raw_tiingo_fundamentalsScalarWhereWithAggregatesInput | raw_tiingo_fundamentalsScalarWhereWithAggregatesInput[]
    OR?: raw_tiingo_fundamentalsScalarWhereWithAggregatesInput[]
    NOT?: raw_tiingo_fundamentalsScalarWhereWithAggregatesInput | raw_tiingo_fundamentalsScalarWhereWithAggregatesInput[]
    ticker?: StringWithAggregatesFilter<"raw_tiingo_fundamentals"> | string
    tiingo_ticker?: StringWithAggregatesFilter<"raw_tiingo_fundamentals"> | string
    raw_payload?: JsonWithAggregatesFilter<"raw_tiingo_fundamentals">
    ingested_at?: DateTimeWithAggregatesFilter<"raw_tiingo_fundamentals"> | Date | string
  }

  export type factor_datasetCreateInput = {
    company_id: bigint | number
    date: Date | string
    mom_1m?: number | null
    mom_3m?: number | null
    mom_6m?: number | null
    mom_12m?: number | null
    mom_skip1m?: number | null
    mom_acc?: number | null
    rev_1w?: number | null
    vol_3m?: number | null
    vol_12m?: number | null
    down_vol?: number | null
    beta?: number | null
    idio_vol?: number | null
    max_drawdown?: number | null
    earnings_yield?: number | null
    book_to_price?: number | null
    sales_to_price?: number | null
    cf_to_price?: number | null
    fcf_yield?: number | null
    ev_ebitda?: number | null
    ebitda_yield?: number | null
    roe?: number | null
    roa?: number | null
    gross_margin?: number | null
    op_margin?: number | null
    profit_stability?: number | null
    debt_to_equity?: number | null
    int_coverage?: number | null
    rev_growth?: number | null
    eps_growth?: number | null
    asset_growth?: number | null
    capex_growth?: number | null
    opinc_growth?: number | null
    sales_acc?: number | null
    capex_ratio?: number | null
    inventory_growth?: number | null
    accruals?: number | null
    turnover?: number | null
    dollar_vol?: number | null
    illiq?: number | null
    vol_vol?: number | null
    term_spread?: number | null
    credit_spread?: number | null
    cpi_growth?: number | null
    unrate?: number | null
    nfci?: number | null
    gdp_growth?: number | null
    target_return_60d?: number | null
  }

  export type factor_datasetUncheckedCreateInput = {
    company_id: bigint | number
    date: Date | string
    mom_1m?: number | null
    mom_3m?: number | null
    mom_6m?: number | null
    mom_12m?: number | null
    mom_skip1m?: number | null
    mom_acc?: number | null
    rev_1w?: number | null
    vol_3m?: number | null
    vol_12m?: number | null
    down_vol?: number | null
    beta?: number | null
    idio_vol?: number | null
    max_drawdown?: number | null
    earnings_yield?: number | null
    book_to_price?: number | null
    sales_to_price?: number | null
    cf_to_price?: number | null
    fcf_yield?: number | null
    ev_ebitda?: number | null
    ebitda_yield?: number | null
    roe?: number | null
    roa?: number | null
    gross_margin?: number | null
    op_margin?: number | null
    profit_stability?: number | null
    debt_to_equity?: number | null
    int_coverage?: number | null
    rev_growth?: number | null
    eps_growth?: number | null
    asset_growth?: number | null
    capex_growth?: number | null
    opinc_growth?: number | null
    sales_acc?: number | null
    capex_ratio?: number | null
    inventory_growth?: number | null
    accruals?: number | null
    turnover?: number | null
    dollar_vol?: number | null
    illiq?: number | null
    vol_vol?: number | null
    term_spread?: number | null
    credit_spread?: number | null
    cpi_growth?: number | null
    unrate?: number | null
    nfci?: number | null
    gdp_growth?: number | null
    target_return_60d?: number | null
  }

  export type factor_datasetUpdateInput = {
    company_id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mom_1m?: NullableFloatFieldUpdateOperationsInput | number | null
    mom_3m?: NullableFloatFieldUpdateOperationsInput | number | null
    mom_6m?: NullableFloatFieldUpdateOperationsInput | number | null
    mom_12m?: NullableFloatFieldUpdateOperationsInput | number | null
    mom_skip1m?: NullableFloatFieldUpdateOperationsInput | number | null
    mom_acc?: NullableFloatFieldUpdateOperationsInput | number | null
    rev_1w?: NullableFloatFieldUpdateOperationsInput | number | null
    vol_3m?: NullableFloatFieldUpdateOperationsInput | number | null
    vol_12m?: NullableFloatFieldUpdateOperationsInput | number | null
    down_vol?: NullableFloatFieldUpdateOperationsInput | number | null
    beta?: NullableFloatFieldUpdateOperationsInput | number | null
    idio_vol?: NullableFloatFieldUpdateOperationsInput | number | null
    max_drawdown?: NullableFloatFieldUpdateOperationsInput | number | null
    earnings_yield?: NullableFloatFieldUpdateOperationsInput | number | null
    book_to_price?: NullableFloatFieldUpdateOperationsInput | number | null
    sales_to_price?: NullableFloatFieldUpdateOperationsInput | number | null
    cf_to_price?: NullableFloatFieldUpdateOperationsInput | number | null
    fcf_yield?: NullableFloatFieldUpdateOperationsInput | number | null
    ev_ebitda?: NullableFloatFieldUpdateOperationsInput | number | null
    ebitda_yield?: NullableFloatFieldUpdateOperationsInput | number | null
    roe?: NullableFloatFieldUpdateOperationsInput | number | null
    roa?: NullableFloatFieldUpdateOperationsInput | number | null
    gross_margin?: NullableFloatFieldUpdateOperationsInput | number | null
    op_margin?: NullableFloatFieldUpdateOperationsInput | number | null
    profit_stability?: NullableFloatFieldUpdateOperationsInput | number | null
    debt_to_equity?: NullableFloatFieldUpdateOperationsInput | number | null
    int_coverage?: NullableFloatFieldUpdateOperationsInput | number | null
    rev_growth?: NullableFloatFieldUpdateOperationsInput | number | null
    eps_growth?: NullableFloatFieldUpdateOperationsInput | number | null
    asset_growth?: NullableFloatFieldUpdateOperationsInput | number | null
    capex_growth?: NullableFloatFieldUpdateOperationsInput | number | null
    opinc_growth?: NullableFloatFieldUpdateOperationsInput | number | null
    sales_acc?: NullableFloatFieldUpdateOperationsInput | number | null
    capex_ratio?: NullableFloatFieldUpdateOperationsInput | number | null
    inventory_growth?: NullableFloatFieldUpdateOperationsInput | number | null
    accruals?: NullableFloatFieldUpdateOperationsInput | number | null
    turnover?: NullableFloatFieldUpdateOperationsInput | number | null
    dollar_vol?: NullableFloatFieldUpdateOperationsInput | number | null
    illiq?: NullableFloatFieldUpdateOperationsInput | number | null
    vol_vol?: NullableFloatFieldUpdateOperationsInput | number | null
    term_spread?: NullableFloatFieldUpdateOperationsInput | number | null
    credit_spread?: NullableFloatFieldUpdateOperationsInput | number | null
    cpi_growth?: NullableFloatFieldUpdateOperationsInput | number | null
    unrate?: NullableFloatFieldUpdateOperationsInput | number | null
    nfci?: NullableFloatFieldUpdateOperationsInput | number | null
    gdp_growth?: NullableFloatFieldUpdateOperationsInput | number | null
    target_return_60d?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type factor_datasetUncheckedUpdateInput = {
    company_id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mom_1m?: NullableFloatFieldUpdateOperationsInput | number | null
    mom_3m?: NullableFloatFieldUpdateOperationsInput | number | null
    mom_6m?: NullableFloatFieldUpdateOperationsInput | number | null
    mom_12m?: NullableFloatFieldUpdateOperationsInput | number | null
    mom_skip1m?: NullableFloatFieldUpdateOperationsInput | number | null
    mom_acc?: NullableFloatFieldUpdateOperationsInput | number | null
    rev_1w?: NullableFloatFieldUpdateOperationsInput | number | null
    vol_3m?: NullableFloatFieldUpdateOperationsInput | number | null
    vol_12m?: NullableFloatFieldUpdateOperationsInput | number | null
    down_vol?: NullableFloatFieldUpdateOperationsInput | number | null
    beta?: NullableFloatFieldUpdateOperationsInput | number | null
    idio_vol?: NullableFloatFieldUpdateOperationsInput | number | null
    max_drawdown?: NullableFloatFieldUpdateOperationsInput | number | null
    earnings_yield?: NullableFloatFieldUpdateOperationsInput | number | null
    book_to_price?: NullableFloatFieldUpdateOperationsInput | number | null
    sales_to_price?: NullableFloatFieldUpdateOperationsInput | number | null
    cf_to_price?: NullableFloatFieldUpdateOperationsInput | number | null
    fcf_yield?: NullableFloatFieldUpdateOperationsInput | number | null
    ev_ebitda?: NullableFloatFieldUpdateOperationsInput | number | null
    ebitda_yield?: NullableFloatFieldUpdateOperationsInput | number | null
    roe?: NullableFloatFieldUpdateOperationsInput | number | null
    roa?: NullableFloatFieldUpdateOperationsInput | number | null
    gross_margin?: NullableFloatFieldUpdateOperationsInput | number | null
    op_margin?: NullableFloatFieldUpdateOperationsInput | number | null
    profit_stability?: NullableFloatFieldUpdateOperationsInput | number | null
    debt_to_equity?: NullableFloatFieldUpdateOperationsInput | number | null
    int_coverage?: NullableFloatFieldUpdateOperationsInput | number | null
    rev_growth?: NullableFloatFieldUpdateOperationsInput | number | null
    eps_growth?: NullableFloatFieldUpdateOperationsInput | number | null
    asset_growth?: NullableFloatFieldUpdateOperationsInput | number | null
    capex_growth?: NullableFloatFieldUpdateOperationsInput | number | null
    opinc_growth?: NullableFloatFieldUpdateOperationsInput | number | null
    sales_acc?: NullableFloatFieldUpdateOperationsInput | number | null
    capex_ratio?: NullableFloatFieldUpdateOperationsInput | number | null
    inventory_growth?: NullableFloatFieldUpdateOperationsInput | number | null
    accruals?: NullableFloatFieldUpdateOperationsInput | number | null
    turnover?: NullableFloatFieldUpdateOperationsInput | number | null
    dollar_vol?: NullableFloatFieldUpdateOperationsInput | number | null
    illiq?: NullableFloatFieldUpdateOperationsInput | number | null
    vol_vol?: NullableFloatFieldUpdateOperationsInput | number | null
    term_spread?: NullableFloatFieldUpdateOperationsInput | number | null
    credit_spread?: NullableFloatFieldUpdateOperationsInput | number | null
    cpi_growth?: NullableFloatFieldUpdateOperationsInput | number | null
    unrate?: NullableFloatFieldUpdateOperationsInput | number | null
    nfci?: NullableFloatFieldUpdateOperationsInput | number | null
    gdp_growth?: NullableFloatFieldUpdateOperationsInput | number | null
    target_return_60d?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type factor_datasetCreateManyInput = {
    company_id: bigint | number
    date: Date | string
    mom_1m?: number | null
    mom_3m?: number | null
    mom_6m?: number | null
    mom_12m?: number | null
    mom_skip1m?: number | null
    mom_acc?: number | null
    rev_1w?: number | null
    vol_3m?: number | null
    vol_12m?: number | null
    down_vol?: number | null
    beta?: number | null
    idio_vol?: number | null
    max_drawdown?: number | null
    earnings_yield?: number | null
    book_to_price?: number | null
    sales_to_price?: number | null
    cf_to_price?: number | null
    fcf_yield?: number | null
    ev_ebitda?: number | null
    ebitda_yield?: number | null
    roe?: number | null
    roa?: number | null
    gross_margin?: number | null
    op_margin?: number | null
    profit_stability?: number | null
    debt_to_equity?: number | null
    int_coverage?: number | null
    rev_growth?: number | null
    eps_growth?: number | null
    asset_growth?: number | null
    capex_growth?: number | null
    opinc_growth?: number | null
    sales_acc?: number | null
    capex_ratio?: number | null
    inventory_growth?: number | null
    accruals?: number | null
    turnover?: number | null
    dollar_vol?: number | null
    illiq?: number | null
    vol_vol?: number | null
    term_spread?: number | null
    credit_spread?: number | null
    cpi_growth?: number | null
    unrate?: number | null
    nfci?: number | null
    gdp_growth?: number | null
    target_return_60d?: number | null
  }

  export type factor_datasetUpdateManyMutationInput = {
    company_id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mom_1m?: NullableFloatFieldUpdateOperationsInput | number | null
    mom_3m?: NullableFloatFieldUpdateOperationsInput | number | null
    mom_6m?: NullableFloatFieldUpdateOperationsInput | number | null
    mom_12m?: NullableFloatFieldUpdateOperationsInput | number | null
    mom_skip1m?: NullableFloatFieldUpdateOperationsInput | number | null
    mom_acc?: NullableFloatFieldUpdateOperationsInput | number | null
    rev_1w?: NullableFloatFieldUpdateOperationsInput | number | null
    vol_3m?: NullableFloatFieldUpdateOperationsInput | number | null
    vol_12m?: NullableFloatFieldUpdateOperationsInput | number | null
    down_vol?: NullableFloatFieldUpdateOperationsInput | number | null
    beta?: NullableFloatFieldUpdateOperationsInput | number | null
    idio_vol?: NullableFloatFieldUpdateOperationsInput | number | null
    max_drawdown?: NullableFloatFieldUpdateOperationsInput | number | null
    earnings_yield?: NullableFloatFieldUpdateOperationsInput | number | null
    book_to_price?: NullableFloatFieldUpdateOperationsInput | number | null
    sales_to_price?: NullableFloatFieldUpdateOperationsInput | number | null
    cf_to_price?: NullableFloatFieldUpdateOperationsInput | number | null
    fcf_yield?: NullableFloatFieldUpdateOperationsInput | number | null
    ev_ebitda?: NullableFloatFieldUpdateOperationsInput | number | null
    ebitda_yield?: NullableFloatFieldUpdateOperationsInput | number | null
    roe?: NullableFloatFieldUpdateOperationsInput | number | null
    roa?: NullableFloatFieldUpdateOperationsInput | number | null
    gross_margin?: NullableFloatFieldUpdateOperationsInput | number | null
    op_margin?: NullableFloatFieldUpdateOperationsInput | number | null
    profit_stability?: NullableFloatFieldUpdateOperationsInput | number | null
    debt_to_equity?: NullableFloatFieldUpdateOperationsInput | number | null
    int_coverage?: NullableFloatFieldUpdateOperationsInput | number | null
    rev_growth?: NullableFloatFieldUpdateOperationsInput | number | null
    eps_growth?: NullableFloatFieldUpdateOperationsInput | number | null
    asset_growth?: NullableFloatFieldUpdateOperationsInput | number | null
    capex_growth?: NullableFloatFieldUpdateOperationsInput | number | null
    opinc_growth?: NullableFloatFieldUpdateOperationsInput | number | null
    sales_acc?: NullableFloatFieldUpdateOperationsInput | number | null
    capex_ratio?: NullableFloatFieldUpdateOperationsInput | number | null
    inventory_growth?: NullableFloatFieldUpdateOperationsInput | number | null
    accruals?: NullableFloatFieldUpdateOperationsInput | number | null
    turnover?: NullableFloatFieldUpdateOperationsInput | number | null
    dollar_vol?: NullableFloatFieldUpdateOperationsInput | number | null
    illiq?: NullableFloatFieldUpdateOperationsInput | number | null
    vol_vol?: NullableFloatFieldUpdateOperationsInput | number | null
    term_spread?: NullableFloatFieldUpdateOperationsInput | number | null
    credit_spread?: NullableFloatFieldUpdateOperationsInput | number | null
    cpi_growth?: NullableFloatFieldUpdateOperationsInput | number | null
    unrate?: NullableFloatFieldUpdateOperationsInput | number | null
    nfci?: NullableFloatFieldUpdateOperationsInput | number | null
    gdp_growth?: NullableFloatFieldUpdateOperationsInput | number | null
    target_return_60d?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type factor_datasetUncheckedUpdateManyInput = {
    company_id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    mom_1m?: NullableFloatFieldUpdateOperationsInput | number | null
    mom_3m?: NullableFloatFieldUpdateOperationsInput | number | null
    mom_6m?: NullableFloatFieldUpdateOperationsInput | number | null
    mom_12m?: NullableFloatFieldUpdateOperationsInput | number | null
    mom_skip1m?: NullableFloatFieldUpdateOperationsInput | number | null
    mom_acc?: NullableFloatFieldUpdateOperationsInput | number | null
    rev_1w?: NullableFloatFieldUpdateOperationsInput | number | null
    vol_3m?: NullableFloatFieldUpdateOperationsInput | number | null
    vol_12m?: NullableFloatFieldUpdateOperationsInput | number | null
    down_vol?: NullableFloatFieldUpdateOperationsInput | number | null
    beta?: NullableFloatFieldUpdateOperationsInput | number | null
    idio_vol?: NullableFloatFieldUpdateOperationsInput | number | null
    max_drawdown?: NullableFloatFieldUpdateOperationsInput | number | null
    earnings_yield?: NullableFloatFieldUpdateOperationsInput | number | null
    book_to_price?: NullableFloatFieldUpdateOperationsInput | number | null
    sales_to_price?: NullableFloatFieldUpdateOperationsInput | number | null
    cf_to_price?: NullableFloatFieldUpdateOperationsInput | number | null
    fcf_yield?: NullableFloatFieldUpdateOperationsInput | number | null
    ev_ebitda?: NullableFloatFieldUpdateOperationsInput | number | null
    ebitda_yield?: NullableFloatFieldUpdateOperationsInput | number | null
    roe?: NullableFloatFieldUpdateOperationsInput | number | null
    roa?: NullableFloatFieldUpdateOperationsInput | number | null
    gross_margin?: NullableFloatFieldUpdateOperationsInput | number | null
    op_margin?: NullableFloatFieldUpdateOperationsInput | number | null
    profit_stability?: NullableFloatFieldUpdateOperationsInput | number | null
    debt_to_equity?: NullableFloatFieldUpdateOperationsInput | number | null
    int_coverage?: NullableFloatFieldUpdateOperationsInput | number | null
    rev_growth?: NullableFloatFieldUpdateOperationsInput | number | null
    eps_growth?: NullableFloatFieldUpdateOperationsInput | number | null
    asset_growth?: NullableFloatFieldUpdateOperationsInput | number | null
    capex_growth?: NullableFloatFieldUpdateOperationsInput | number | null
    opinc_growth?: NullableFloatFieldUpdateOperationsInput | number | null
    sales_acc?: NullableFloatFieldUpdateOperationsInput | number | null
    capex_ratio?: NullableFloatFieldUpdateOperationsInput | number | null
    inventory_growth?: NullableFloatFieldUpdateOperationsInput | number | null
    accruals?: NullableFloatFieldUpdateOperationsInput | number | null
    turnover?: NullableFloatFieldUpdateOperationsInput | number | null
    dollar_vol?: NullableFloatFieldUpdateOperationsInput | number | null
    illiq?: NullableFloatFieldUpdateOperationsInput | number | null
    vol_vol?: NullableFloatFieldUpdateOperationsInput | number | null
    term_spread?: NullableFloatFieldUpdateOperationsInput | number | null
    credit_spread?: NullableFloatFieldUpdateOperationsInput | number | null
    cpi_growth?: NullableFloatFieldUpdateOperationsInput | number | null
    unrate?: NullableFloatFieldUpdateOperationsInput | number | null
    nfci?: NullableFloatFieldUpdateOperationsInput | number | null
    gdp_growth?: NullableFloatFieldUpdateOperationsInput | number | null
    target_return_60d?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type dim_companyCreateInput = {
    cik: string
    ticker?: string | null
    yf_ticker?: string | null
    company_name: string
    exchange?: string | null
    gics_sector?: string | null
    gics_industry?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    sic_code?: number | null
    sic_description?: string | null
    fiscal_year_end?: string | null
    fact_prices?: fact_pricesCreateNestedManyWithoutDim_companyInput
    universe?: universeCreateNestedOneWithoutDim_companyInput
  }

  export type dim_companyUncheckedCreateInput = {
    company_id?: number
    cik: string
    ticker?: string | null
    yf_ticker?: string | null
    company_name: string
    exchange?: string | null
    gics_sector?: string | null
    gics_industry?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    sic_code?: number | null
    sic_description?: string | null
    fiscal_year_end?: string | null
    fact_prices?: fact_pricesUncheckedCreateNestedManyWithoutDim_companyInput
    universe?: universeUncheckedCreateNestedOneWithoutDim_companyInput
  }

  export type dim_companyUpdateInput = {
    cik?: StringFieldUpdateOperationsInput | string
    ticker?: NullableStringFieldUpdateOperationsInput | string | null
    yf_ticker?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: StringFieldUpdateOperationsInput | string
    exchange?: NullableStringFieldUpdateOperationsInput | string | null
    gics_sector?: NullableStringFieldUpdateOperationsInput | string | null
    gics_industry?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sic_code?: NullableIntFieldUpdateOperationsInput | number | null
    sic_description?: NullableStringFieldUpdateOperationsInput | string | null
    fiscal_year_end?: NullableStringFieldUpdateOperationsInput | string | null
    fact_prices?: fact_pricesUpdateManyWithoutDim_companyNestedInput
    universe?: universeUpdateOneWithoutDim_companyNestedInput
  }

  export type dim_companyUncheckedUpdateInput = {
    company_id?: IntFieldUpdateOperationsInput | number
    cik?: StringFieldUpdateOperationsInput | string
    ticker?: NullableStringFieldUpdateOperationsInput | string | null
    yf_ticker?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: StringFieldUpdateOperationsInput | string
    exchange?: NullableStringFieldUpdateOperationsInput | string | null
    gics_sector?: NullableStringFieldUpdateOperationsInput | string | null
    gics_industry?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sic_code?: NullableIntFieldUpdateOperationsInput | number | null
    sic_description?: NullableStringFieldUpdateOperationsInput | string | null
    fiscal_year_end?: NullableStringFieldUpdateOperationsInput | string | null
    fact_prices?: fact_pricesUncheckedUpdateManyWithoutDim_companyNestedInput
    universe?: universeUncheckedUpdateOneWithoutDim_companyNestedInput
  }

  export type dim_companyCreateManyInput = {
    company_id?: number
    cik: string
    ticker?: string | null
    yf_ticker?: string | null
    company_name: string
    exchange?: string | null
    gics_sector?: string | null
    gics_industry?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    sic_code?: number | null
    sic_description?: string | null
    fiscal_year_end?: string | null
  }

  export type dim_companyUpdateManyMutationInput = {
    cik?: StringFieldUpdateOperationsInput | string
    ticker?: NullableStringFieldUpdateOperationsInput | string | null
    yf_ticker?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: StringFieldUpdateOperationsInput | string
    exchange?: NullableStringFieldUpdateOperationsInput | string | null
    gics_sector?: NullableStringFieldUpdateOperationsInput | string | null
    gics_industry?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sic_code?: NullableIntFieldUpdateOperationsInput | number | null
    sic_description?: NullableStringFieldUpdateOperationsInput | string | null
    fiscal_year_end?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dim_companyUncheckedUpdateManyInput = {
    company_id?: IntFieldUpdateOperationsInput | number
    cik?: StringFieldUpdateOperationsInput | string
    ticker?: NullableStringFieldUpdateOperationsInput | string | null
    yf_ticker?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: StringFieldUpdateOperationsInput | string
    exchange?: NullableStringFieldUpdateOperationsInput | string | null
    gics_sector?: NullableStringFieldUpdateOperationsInput | string | null
    gics_industry?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sic_code?: NullableIntFieldUpdateOperationsInput | number | null
    sic_description?: NullableStringFieldUpdateOperationsInput | string | null
    fiscal_year_end?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dim_dateCreateInput = {
    date_id: number
    date: Date | string
    year: number
    quarter: number
    month: number
    month_name: string
    week_of_year: number
    day_of_month: number
    day_of_week: number
    day_name: string
    is_weekend: boolean
    is_trading_day?: boolean
    is_trading_month_end?: boolean
    fiscal_year?: number | null
    fiscal_quarter?: number | null
  }

  export type dim_dateUncheckedCreateInput = {
    date_id: number
    date: Date | string
    year: number
    quarter: number
    month: number
    month_name: string
    week_of_year: number
    day_of_month: number
    day_of_week: number
    day_name: string
    is_weekend: boolean
    is_trading_day?: boolean
    is_trading_month_end?: boolean
    fiscal_year?: number | null
    fiscal_quarter?: number | null
  }

  export type dim_dateUpdateInput = {
    date_id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: IntFieldUpdateOperationsInput | number
    quarter?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    month_name?: StringFieldUpdateOperationsInput | string
    week_of_year?: IntFieldUpdateOperationsInput | number
    day_of_month?: IntFieldUpdateOperationsInput | number
    day_of_week?: IntFieldUpdateOperationsInput | number
    day_name?: StringFieldUpdateOperationsInput | string
    is_weekend?: BoolFieldUpdateOperationsInput | boolean
    is_trading_day?: BoolFieldUpdateOperationsInput | boolean
    is_trading_month_end?: BoolFieldUpdateOperationsInput | boolean
    fiscal_year?: NullableIntFieldUpdateOperationsInput | number | null
    fiscal_quarter?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type dim_dateUncheckedUpdateInput = {
    date_id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: IntFieldUpdateOperationsInput | number
    quarter?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    month_name?: StringFieldUpdateOperationsInput | string
    week_of_year?: IntFieldUpdateOperationsInput | number
    day_of_month?: IntFieldUpdateOperationsInput | number
    day_of_week?: IntFieldUpdateOperationsInput | number
    day_name?: StringFieldUpdateOperationsInput | string
    is_weekend?: BoolFieldUpdateOperationsInput | boolean
    is_trading_day?: BoolFieldUpdateOperationsInput | boolean
    is_trading_month_end?: BoolFieldUpdateOperationsInput | boolean
    fiscal_year?: NullableIntFieldUpdateOperationsInput | number | null
    fiscal_quarter?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type dim_dateCreateManyInput = {
    date_id: number
    date: Date | string
    year: number
    quarter: number
    month: number
    month_name: string
    week_of_year: number
    day_of_month: number
    day_of_week: number
    day_name: string
    is_weekend: boolean
    is_trading_day?: boolean
    is_trading_month_end?: boolean
    fiscal_year?: number | null
    fiscal_quarter?: number | null
  }

  export type dim_dateUpdateManyMutationInput = {
    date_id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: IntFieldUpdateOperationsInput | number
    quarter?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    month_name?: StringFieldUpdateOperationsInput | string
    week_of_year?: IntFieldUpdateOperationsInput | number
    day_of_month?: IntFieldUpdateOperationsInput | number
    day_of_week?: IntFieldUpdateOperationsInput | number
    day_name?: StringFieldUpdateOperationsInput | string
    is_weekend?: BoolFieldUpdateOperationsInput | boolean
    is_trading_day?: BoolFieldUpdateOperationsInput | boolean
    is_trading_month_end?: BoolFieldUpdateOperationsInput | boolean
    fiscal_year?: NullableIntFieldUpdateOperationsInput | number | null
    fiscal_quarter?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type dim_dateUncheckedUpdateManyInput = {
    date_id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: IntFieldUpdateOperationsInput | number
    quarter?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    month_name?: StringFieldUpdateOperationsInput | string
    week_of_year?: IntFieldUpdateOperationsInput | number
    day_of_month?: IntFieldUpdateOperationsInput | number
    day_of_week?: IntFieldUpdateOperationsInput | number
    day_name?: StringFieldUpdateOperationsInput | string
    is_weekend?: BoolFieldUpdateOperationsInput | boolean
    is_trading_day?: BoolFieldUpdateOperationsInput | boolean
    is_trading_month_end?: BoolFieldUpdateOperationsInput | boolean
    fiscal_year?: NullableIntFieldUpdateOperationsInput | number | null
    fiscal_quarter?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type fact_fundamentalsCreateInput = {
    company_id: number
    concept: string
    period_end: Date | string
    filing_date: Date | string
    value?: Decimal | DecimalJsLike | number | string | null
    unit?: string | null
    source_tag?: string | null
    policy?: string | null
    form?: string | null
    data_quality?: string
    is_restatement?: boolean
  }

  export type fact_fundamentalsUncheckedCreateInput = {
    company_id: number
    concept: string
    period_end: Date | string
    filing_date: Date | string
    value?: Decimal | DecimalJsLike | number | string | null
    unit?: string | null
    source_tag?: string | null
    policy?: string | null
    form?: string | null
    data_quality?: string
    is_restatement?: boolean
  }

  export type fact_fundamentalsUpdateInput = {
    company_id?: IntFieldUpdateOperationsInput | number
    concept?: StringFieldUpdateOperationsInput | string
    period_end?: DateTimeFieldUpdateOperationsInput | Date | string
    filing_date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    source_tag?: NullableStringFieldUpdateOperationsInput | string | null
    policy?: NullableStringFieldUpdateOperationsInput | string | null
    form?: NullableStringFieldUpdateOperationsInput | string | null
    data_quality?: StringFieldUpdateOperationsInput | string
    is_restatement?: BoolFieldUpdateOperationsInput | boolean
  }

  export type fact_fundamentalsUncheckedUpdateInput = {
    company_id?: IntFieldUpdateOperationsInput | number
    concept?: StringFieldUpdateOperationsInput | string
    period_end?: DateTimeFieldUpdateOperationsInput | Date | string
    filing_date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    source_tag?: NullableStringFieldUpdateOperationsInput | string | null
    policy?: NullableStringFieldUpdateOperationsInput | string | null
    form?: NullableStringFieldUpdateOperationsInput | string | null
    data_quality?: StringFieldUpdateOperationsInput | string
    is_restatement?: BoolFieldUpdateOperationsInput | boolean
  }

  export type fact_fundamentalsCreateManyInput = {
    company_id: number
    concept: string
    period_end: Date | string
    filing_date: Date | string
    value?: Decimal | DecimalJsLike | number | string | null
    unit?: string | null
    source_tag?: string | null
    policy?: string | null
    form?: string | null
    data_quality?: string
    is_restatement?: boolean
  }

  export type fact_fundamentalsUpdateManyMutationInput = {
    company_id?: IntFieldUpdateOperationsInput | number
    concept?: StringFieldUpdateOperationsInput | string
    period_end?: DateTimeFieldUpdateOperationsInput | Date | string
    filing_date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    source_tag?: NullableStringFieldUpdateOperationsInput | string | null
    policy?: NullableStringFieldUpdateOperationsInput | string | null
    form?: NullableStringFieldUpdateOperationsInput | string | null
    data_quality?: StringFieldUpdateOperationsInput | string
    is_restatement?: BoolFieldUpdateOperationsInput | boolean
  }

  export type fact_fundamentalsUncheckedUpdateManyInput = {
    company_id?: IntFieldUpdateOperationsInput | number
    concept?: StringFieldUpdateOperationsInput | string
    period_end?: DateTimeFieldUpdateOperationsInput | Date | string
    filing_date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    source_tag?: NullableStringFieldUpdateOperationsInput | string | null
    policy?: NullableStringFieldUpdateOperationsInput | string | null
    form?: NullableStringFieldUpdateOperationsInput | string | null
    data_quality?: StringFieldUpdateOperationsInput | string
    is_restatement?: BoolFieldUpdateOperationsInput | boolean
  }

  export type fact_macroCreateInput = {
    macro_id?: bigint | number
    series_id: string
    date: Date | string
    value?: Decimal | DecimalJsLike | number | string | null
  }

  export type fact_macroUncheckedCreateInput = {
    macro_id?: bigint | number
    series_id: string
    date: Date | string
    value?: Decimal | DecimalJsLike | number | string | null
  }

  export type fact_macroUpdateInput = {
    macro_id?: BigIntFieldUpdateOperationsInput | bigint | number
    series_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type fact_macroUncheckedUpdateInput = {
    macro_id?: BigIntFieldUpdateOperationsInput | bigint | number
    series_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type fact_macroCreateManyInput = {
    macro_id?: bigint | number
    series_id: string
    date: Date | string
    value?: Decimal | DecimalJsLike | number | string | null
  }

  export type fact_macroUpdateManyMutationInput = {
    macro_id?: BigIntFieldUpdateOperationsInput | bigint | number
    series_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type fact_macroUncheckedUpdateManyInput = {
    macro_id?: BigIntFieldUpdateOperationsInput | bigint | number
    series_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type fact_pricesCreateInput = {
    price_id?: bigint | number
    trade_date: Date | string
    open?: Decimal | DecimalJsLike | number | string | null
    high?: Decimal | DecimalJsLike | number | string | null
    low?: Decimal | DecimalJsLike | number | string | null
    close?: Decimal | DecimalJsLike | number | string | null
    adj_close: Decimal | DecimalJsLike | number | string
    volume?: Decimal | DecimalJsLike | number | string | null
    dim_company: dim_companyCreateNestedOneWithoutFact_pricesInput
  }

  export type fact_pricesUncheckedCreateInput = {
    price_id?: bigint | number
    company_id: number
    trade_date: Date | string
    open?: Decimal | DecimalJsLike | number | string | null
    high?: Decimal | DecimalJsLike | number | string | null
    low?: Decimal | DecimalJsLike | number | string | null
    close?: Decimal | DecimalJsLike | number | string | null
    adj_close: Decimal | DecimalJsLike | number | string
    volume?: Decimal | DecimalJsLike | number | string | null
  }

  export type fact_pricesUpdateInput = {
    price_id?: BigIntFieldUpdateOperationsInput | bigint | number
    trade_date?: DateTimeFieldUpdateOperationsInput | Date | string
    open?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    high?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    low?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    close?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    adj_close?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dim_company?: dim_companyUpdateOneRequiredWithoutFact_pricesNestedInput
  }

  export type fact_pricesUncheckedUpdateInput = {
    price_id?: BigIntFieldUpdateOperationsInput | bigint | number
    company_id?: IntFieldUpdateOperationsInput | number
    trade_date?: DateTimeFieldUpdateOperationsInput | Date | string
    open?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    high?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    low?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    close?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    adj_close?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type fact_pricesCreateManyInput = {
    price_id?: bigint | number
    company_id: number
    trade_date: Date | string
    open?: Decimal | DecimalJsLike | number | string | null
    high?: Decimal | DecimalJsLike | number | string | null
    low?: Decimal | DecimalJsLike | number | string | null
    close?: Decimal | DecimalJsLike | number | string | null
    adj_close: Decimal | DecimalJsLike | number | string
    volume?: Decimal | DecimalJsLike | number | string | null
  }

  export type fact_pricesUpdateManyMutationInput = {
    price_id?: BigIntFieldUpdateOperationsInput | bigint | number
    trade_date?: DateTimeFieldUpdateOperationsInput | Date | string
    open?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    high?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    low?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    close?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    adj_close?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type fact_pricesUncheckedUpdateManyInput = {
    price_id?: BigIntFieldUpdateOperationsInput | bigint | number
    company_id?: IntFieldUpdateOperationsInput | number
    trade_date?: DateTimeFieldUpdateOperationsInput | Date | string
    open?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    high?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    low?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    close?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    adj_close?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type universeCreateInput = {
    added_at?: Date | string
    dim_company: dim_companyCreateNestedOneWithoutUniverseInput
  }

  export type universeUncheckedCreateInput = {
    company_id: number
    added_at?: Date | string
  }

  export type universeUpdateInput = {
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dim_company?: dim_companyUpdateOneRequiredWithoutUniverseNestedInput
  }

  export type universeUncheckedUpdateInput = {
    company_id?: IntFieldUpdateOperationsInput | number
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type universeCreateManyInput = {
    company_id: number
    added_at?: Date | string
  }

  export type universeUpdateManyMutationInput = {
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type universeUncheckedUpdateManyInput = {
    company_id?: IntFieldUpdateOperationsInput | number
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type raw_fundamentalsCreateInput = {
    id?: bigint | number
    cik: string
    ticker?: string | null
    taxonomy: string
    tag: string
    unit: string
    period_start?: Date | string | null
    period_end: Date | string
    filing_date: Date | string
    accession?: string | null
    form?: string | null
    value?: Decimal | DecimalJsLike | number | string | null
    loaded_at?: Date | string
  }

  export type raw_fundamentalsUncheckedCreateInput = {
    id?: bigint | number
    cik: string
    ticker?: string | null
    taxonomy: string
    tag: string
    unit: string
    period_start?: Date | string | null
    period_end: Date | string
    filing_date: Date | string
    accession?: string | null
    form?: string | null
    value?: Decimal | DecimalJsLike | number | string | null
    loaded_at?: Date | string
  }

  export type raw_fundamentalsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cik?: StringFieldUpdateOperationsInput | string
    ticker?: NullableStringFieldUpdateOperationsInput | string | null
    taxonomy?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    period_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    period_end?: DateTimeFieldUpdateOperationsInput | Date | string
    filing_date?: DateTimeFieldUpdateOperationsInput | Date | string
    accession?: NullableStringFieldUpdateOperationsInput | string | null
    form?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    loaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type raw_fundamentalsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cik?: StringFieldUpdateOperationsInput | string
    ticker?: NullableStringFieldUpdateOperationsInput | string | null
    taxonomy?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    period_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    period_end?: DateTimeFieldUpdateOperationsInput | Date | string
    filing_date?: DateTimeFieldUpdateOperationsInput | Date | string
    accession?: NullableStringFieldUpdateOperationsInput | string | null
    form?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    loaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type raw_fundamentalsCreateManyInput = {
    id?: bigint | number
    cik: string
    ticker?: string | null
    taxonomy: string
    tag: string
    unit: string
    period_start?: Date | string | null
    period_end: Date | string
    filing_date: Date | string
    accession?: string | null
    form?: string | null
    value?: Decimal | DecimalJsLike | number | string | null
    loaded_at?: Date | string
  }

  export type raw_fundamentalsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cik?: StringFieldUpdateOperationsInput | string
    ticker?: NullableStringFieldUpdateOperationsInput | string | null
    taxonomy?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    period_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    period_end?: DateTimeFieldUpdateOperationsInput | Date | string
    filing_date?: DateTimeFieldUpdateOperationsInput | Date | string
    accession?: NullableStringFieldUpdateOperationsInput | string | null
    form?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    loaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type raw_fundamentalsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cik?: StringFieldUpdateOperationsInput | string
    ticker?: NullableStringFieldUpdateOperationsInput | string | null
    taxonomy?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    period_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    period_end?: DateTimeFieldUpdateOperationsInput | Date | string
    filing_date?: DateTimeFieldUpdateOperationsInput | Date | string
    accession?: NullableStringFieldUpdateOperationsInput | string | null
    form?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    loaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type raw_macroCreateInput = {
    id?: bigint | number
    series_id: string
    date: Date | string
    value?: Decimal | DecimalJsLike | number | string | null
    ingested_at?: Date | string
  }

  export type raw_macroUncheckedCreateInput = {
    id?: bigint | number
    series_id: string
    date: Date | string
    value?: Decimal | DecimalJsLike | number | string | null
    ingested_at?: Date | string
  }

  export type raw_macroUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    series_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ingested_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type raw_macroUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    series_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ingested_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type raw_macroCreateManyInput = {
    id?: bigint | number
    series_id: string
    date: Date | string
    value?: Decimal | DecimalJsLike | number | string | null
    ingested_at?: Date | string
  }

  export type raw_macroUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    series_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ingested_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type raw_macroUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    series_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ingested_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type raw_pricesCreateInput = {
    id?: bigint | number
    ticker: string
    trade_date: Date | string
    open?: Decimal | DecimalJsLike | number | string | null
    high?: Decimal | DecimalJsLike | number | string | null
    low?: Decimal | DecimalJsLike | number | string | null
    close?: Decimal | DecimalJsLike | number | string | null
    adj_close?: Decimal | DecimalJsLike | number | string | null
    volume?: bigint | number | null
    ingested_at?: Date | string
  }

  export type raw_pricesUncheckedCreateInput = {
    id?: bigint | number
    ticker: string
    trade_date: Date | string
    open?: Decimal | DecimalJsLike | number | string | null
    high?: Decimal | DecimalJsLike | number | string | null
    low?: Decimal | DecimalJsLike | number | string | null
    close?: Decimal | DecimalJsLike | number | string | null
    adj_close?: Decimal | DecimalJsLike | number | string | null
    volume?: bigint | number | null
    ingested_at?: Date | string
  }

  export type raw_pricesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticker?: StringFieldUpdateOperationsInput | string
    trade_date?: DateTimeFieldUpdateOperationsInput | Date | string
    open?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    high?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    low?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    close?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    adj_close?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volume?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ingested_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type raw_pricesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticker?: StringFieldUpdateOperationsInput | string
    trade_date?: DateTimeFieldUpdateOperationsInput | Date | string
    open?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    high?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    low?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    close?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    adj_close?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volume?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ingested_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type raw_pricesCreateManyInput = {
    id?: bigint | number
    ticker: string
    trade_date: Date | string
    open?: Decimal | DecimalJsLike | number | string | null
    high?: Decimal | DecimalJsLike | number | string | null
    low?: Decimal | DecimalJsLike | number | string | null
    close?: Decimal | DecimalJsLike | number | string | null
    adj_close?: Decimal | DecimalJsLike | number | string | null
    volume?: bigint | number | null
    ingested_at?: Date | string
  }

  export type raw_pricesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticker?: StringFieldUpdateOperationsInput | string
    trade_date?: DateTimeFieldUpdateOperationsInput | Date | string
    open?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    high?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    low?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    close?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    adj_close?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volume?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ingested_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type raw_pricesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    ticker?: StringFieldUpdateOperationsInput | string
    trade_date?: DateTimeFieldUpdateOperationsInput | Date | string
    open?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    high?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    low?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    close?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    adj_close?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volume?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ingested_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type raw_tiingo_fundamentalsCreateInput = {
    ticker: string
    tiingo_ticker: string
    raw_payload: JsonNullValueInput | InputJsonValue
    ingested_at?: Date | string
  }

  export type raw_tiingo_fundamentalsUncheckedCreateInput = {
    ticker: string
    tiingo_ticker: string
    raw_payload: JsonNullValueInput | InputJsonValue
    ingested_at?: Date | string
  }

  export type raw_tiingo_fundamentalsUpdateInput = {
    ticker?: StringFieldUpdateOperationsInput | string
    tiingo_ticker?: StringFieldUpdateOperationsInput | string
    raw_payload?: JsonNullValueInput | InputJsonValue
    ingested_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type raw_tiingo_fundamentalsUncheckedUpdateInput = {
    ticker?: StringFieldUpdateOperationsInput | string
    tiingo_ticker?: StringFieldUpdateOperationsInput | string
    raw_payload?: JsonNullValueInput | InputJsonValue
    ingested_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type raw_tiingo_fundamentalsCreateManyInput = {
    ticker: string
    tiingo_ticker: string
    raw_payload: JsonNullValueInput | InputJsonValue
    ingested_at?: Date | string
  }

  export type raw_tiingo_fundamentalsUpdateManyMutationInput = {
    ticker?: StringFieldUpdateOperationsInput | string
    tiingo_ticker?: StringFieldUpdateOperationsInput | string
    raw_payload?: JsonNullValueInput | InputJsonValue
    ingested_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type raw_tiingo_fundamentalsUncheckedUpdateManyInput = {
    ticker?: StringFieldUpdateOperationsInput | string
    tiingo_ticker?: StringFieldUpdateOperationsInput | string
    raw_payload?: JsonNullValueInput | InputJsonValue
    ingested_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type factor_datasetCompany_idDateCompoundUniqueInput = {
    company_id: bigint | number
    date: Date | string
  }

  export type factor_datasetCountOrderByAggregateInput = {
    company_id?: SortOrder
    date?: SortOrder
    mom_1m?: SortOrder
    mom_3m?: SortOrder
    mom_6m?: SortOrder
    mom_12m?: SortOrder
    mom_skip1m?: SortOrder
    mom_acc?: SortOrder
    rev_1w?: SortOrder
    vol_3m?: SortOrder
    vol_12m?: SortOrder
    down_vol?: SortOrder
    beta?: SortOrder
    idio_vol?: SortOrder
    max_drawdown?: SortOrder
    earnings_yield?: SortOrder
    book_to_price?: SortOrder
    sales_to_price?: SortOrder
    cf_to_price?: SortOrder
    fcf_yield?: SortOrder
    ev_ebitda?: SortOrder
    ebitda_yield?: SortOrder
    roe?: SortOrder
    roa?: SortOrder
    gross_margin?: SortOrder
    op_margin?: SortOrder
    profit_stability?: SortOrder
    debt_to_equity?: SortOrder
    int_coverage?: SortOrder
    rev_growth?: SortOrder
    eps_growth?: SortOrder
    asset_growth?: SortOrder
    capex_growth?: SortOrder
    opinc_growth?: SortOrder
    sales_acc?: SortOrder
    capex_ratio?: SortOrder
    inventory_growth?: SortOrder
    accruals?: SortOrder
    turnover?: SortOrder
    dollar_vol?: SortOrder
    illiq?: SortOrder
    vol_vol?: SortOrder
    term_spread?: SortOrder
    credit_spread?: SortOrder
    cpi_growth?: SortOrder
    unrate?: SortOrder
    nfci?: SortOrder
    gdp_growth?: SortOrder
    target_return_60d?: SortOrder
  }

  export type factor_datasetAvgOrderByAggregateInput = {
    company_id?: SortOrder
    mom_1m?: SortOrder
    mom_3m?: SortOrder
    mom_6m?: SortOrder
    mom_12m?: SortOrder
    mom_skip1m?: SortOrder
    mom_acc?: SortOrder
    rev_1w?: SortOrder
    vol_3m?: SortOrder
    vol_12m?: SortOrder
    down_vol?: SortOrder
    beta?: SortOrder
    idio_vol?: SortOrder
    max_drawdown?: SortOrder
    earnings_yield?: SortOrder
    book_to_price?: SortOrder
    sales_to_price?: SortOrder
    cf_to_price?: SortOrder
    fcf_yield?: SortOrder
    ev_ebitda?: SortOrder
    ebitda_yield?: SortOrder
    roe?: SortOrder
    roa?: SortOrder
    gross_margin?: SortOrder
    op_margin?: SortOrder
    profit_stability?: SortOrder
    debt_to_equity?: SortOrder
    int_coverage?: SortOrder
    rev_growth?: SortOrder
    eps_growth?: SortOrder
    asset_growth?: SortOrder
    capex_growth?: SortOrder
    opinc_growth?: SortOrder
    sales_acc?: SortOrder
    capex_ratio?: SortOrder
    inventory_growth?: SortOrder
    accruals?: SortOrder
    turnover?: SortOrder
    dollar_vol?: SortOrder
    illiq?: SortOrder
    vol_vol?: SortOrder
    term_spread?: SortOrder
    credit_spread?: SortOrder
    cpi_growth?: SortOrder
    unrate?: SortOrder
    nfci?: SortOrder
    gdp_growth?: SortOrder
    target_return_60d?: SortOrder
  }

  export type factor_datasetMaxOrderByAggregateInput = {
    company_id?: SortOrder
    date?: SortOrder
    mom_1m?: SortOrder
    mom_3m?: SortOrder
    mom_6m?: SortOrder
    mom_12m?: SortOrder
    mom_skip1m?: SortOrder
    mom_acc?: SortOrder
    rev_1w?: SortOrder
    vol_3m?: SortOrder
    vol_12m?: SortOrder
    down_vol?: SortOrder
    beta?: SortOrder
    idio_vol?: SortOrder
    max_drawdown?: SortOrder
    earnings_yield?: SortOrder
    book_to_price?: SortOrder
    sales_to_price?: SortOrder
    cf_to_price?: SortOrder
    fcf_yield?: SortOrder
    ev_ebitda?: SortOrder
    ebitda_yield?: SortOrder
    roe?: SortOrder
    roa?: SortOrder
    gross_margin?: SortOrder
    op_margin?: SortOrder
    profit_stability?: SortOrder
    debt_to_equity?: SortOrder
    int_coverage?: SortOrder
    rev_growth?: SortOrder
    eps_growth?: SortOrder
    asset_growth?: SortOrder
    capex_growth?: SortOrder
    opinc_growth?: SortOrder
    sales_acc?: SortOrder
    capex_ratio?: SortOrder
    inventory_growth?: SortOrder
    accruals?: SortOrder
    turnover?: SortOrder
    dollar_vol?: SortOrder
    illiq?: SortOrder
    vol_vol?: SortOrder
    term_spread?: SortOrder
    credit_spread?: SortOrder
    cpi_growth?: SortOrder
    unrate?: SortOrder
    nfci?: SortOrder
    gdp_growth?: SortOrder
    target_return_60d?: SortOrder
  }

  export type factor_datasetMinOrderByAggregateInput = {
    company_id?: SortOrder
    date?: SortOrder
    mom_1m?: SortOrder
    mom_3m?: SortOrder
    mom_6m?: SortOrder
    mom_12m?: SortOrder
    mom_skip1m?: SortOrder
    mom_acc?: SortOrder
    rev_1w?: SortOrder
    vol_3m?: SortOrder
    vol_12m?: SortOrder
    down_vol?: SortOrder
    beta?: SortOrder
    idio_vol?: SortOrder
    max_drawdown?: SortOrder
    earnings_yield?: SortOrder
    book_to_price?: SortOrder
    sales_to_price?: SortOrder
    cf_to_price?: SortOrder
    fcf_yield?: SortOrder
    ev_ebitda?: SortOrder
    ebitda_yield?: SortOrder
    roe?: SortOrder
    roa?: SortOrder
    gross_margin?: SortOrder
    op_margin?: SortOrder
    profit_stability?: SortOrder
    debt_to_equity?: SortOrder
    int_coverage?: SortOrder
    rev_growth?: SortOrder
    eps_growth?: SortOrder
    asset_growth?: SortOrder
    capex_growth?: SortOrder
    opinc_growth?: SortOrder
    sales_acc?: SortOrder
    capex_ratio?: SortOrder
    inventory_growth?: SortOrder
    accruals?: SortOrder
    turnover?: SortOrder
    dollar_vol?: SortOrder
    illiq?: SortOrder
    vol_vol?: SortOrder
    term_spread?: SortOrder
    credit_spread?: SortOrder
    cpi_growth?: SortOrder
    unrate?: SortOrder
    nfci?: SortOrder
    gdp_growth?: SortOrder
    target_return_60d?: SortOrder
  }

  export type factor_datasetSumOrderByAggregateInput = {
    company_id?: SortOrder
    mom_1m?: SortOrder
    mom_3m?: SortOrder
    mom_6m?: SortOrder
    mom_12m?: SortOrder
    mom_skip1m?: SortOrder
    mom_acc?: SortOrder
    rev_1w?: SortOrder
    vol_3m?: SortOrder
    vol_12m?: SortOrder
    down_vol?: SortOrder
    beta?: SortOrder
    idio_vol?: SortOrder
    max_drawdown?: SortOrder
    earnings_yield?: SortOrder
    book_to_price?: SortOrder
    sales_to_price?: SortOrder
    cf_to_price?: SortOrder
    fcf_yield?: SortOrder
    ev_ebitda?: SortOrder
    ebitda_yield?: SortOrder
    roe?: SortOrder
    roa?: SortOrder
    gross_margin?: SortOrder
    op_margin?: SortOrder
    profit_stability?: SortOrder
    debt_to_equity?: SortOrder
    int_coverage?: SortOrder
    rev_growth?: SortOrder
    eps_growth?: SortOrder
    asset_growth?: SortOrder
    capex_growth?: SortOrder
    opinc_growth?: SortOrder
    sales_acc?: SortOrder
    capex_ratio?: SortOrder
    inventory_growth?: SortOrder
    accruals?: SortOrder
    turnover?: SortOrder
    dollar_vol?: SortOrder
    illiq?: SortOrder
    vol_vol?: SortOrder
    term_spread?: SortOrder
    credit_spread?: SortOrder
    cpi_growth?: SortOrder
    unrate?: SortOrder
    nfci?: SortOrder
    gdp_growth?: SortOrder
    target_return_60d?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Fact_pricesListRelationFilter = {
    every?: fact_pricesWhereInput
    some?: fact_pricesWhereInput
    none?: fact_pricesWhereInput
  }

  export type UniverseNullableScalarRelationFilter = {
    is?: universeWhereInput | null
    isNot?: universeWhereInput | null
  }

  export type fact_pricesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type dim_companyCountOrderByAggregateInput = {
    company_id?: SortOrder
    cik?: SortOrder
    ticker?: SortOrder
    yf_ticker?: SortOrder
    company_name?: SortOrder
    exchange?: SortOrder
    gics_sector?: SortOrder
    gics_industry?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    sic_code?: SortOrder
    sic_description?: SortOrder
    fiscal_year_end?: SortOrder
  }

  export type dim_companyAvgOrderByAggregateInput = {
    company_id?: SortOrder
    sic_code?: SortOrder
  }

  export type dim_companyMaxOrderByAggregateInput = {
    company_id?: SortOrder
    cik?: SortOrder
    ticker?: SortOrder
    yf_ticker?: SortOrder
    company_name?: SortOrder
    exchange?: SortOrder
    gics_sector?: SortOrder
    gics_industry?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    sic_code?: SortOrder
    sic_description?: SortOrder
    fiscal_year_end?: SortOrder
  }

  export type dim_companyMinOrderByAggregateInput = {
    company_id?: SortOrder
    cik?: SortOrder
    ticker?: SortOrder
    yf_ticker?: SortOrder
    company_name?: SortOrder
    exchange?: SortOrder
    gics_sector?: SortOrder
    gics_industry?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    sic_code?: SortOrder
    sic_description?: SortOrder
    fiscal_year_end?: SortOrder
  }

  export type dim_companySumOrderByAggregateInput = {
    company_id?: SortOrder
    sic_code?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type dim_dateCountOrderByAggregateInput = {
    date_id?: SortOrder
    date?: SortOrder
    year?: SortOrder
    quarter?: SortOrder
    month?: SortOrder
    month_name?: SortOrder
    week_of_year?: SortOrder
    day_of_month?: SortOrder
    day_of_week?: SortOrder
    day_name?: SortOrder
    is_weekend?: SortOrder
    is_trading_day?: SortOrder
    is_trading_month_end?: SortOrder
    fiscal_year?: SortOrder
    fiscal_quarter?: SortOrder
  }

  export type dim_dateAvgOrderByAggregateInput = {
    date_id?: SortOrder
    year?: SortOrder
    quarter?: SortOrder
    month?: SortOrder
    week_of_year?: SortOrder
    day_of_month?: SortOrder
    day_of_week?: SortOrder
    fiscal_year?: SortOrder
    fiscal_quarter?: SortOrder
  }

  export type dim_dateMaxOrderByAggregateInput = {
    date_id?: SortOrder
    date?: SortOrder
    year?: SortOrder
    quarter?: SortOrder
    month?: SortOrder
    month_name?: SortOrder
    week_of_year?: SortOrder
    day_of_month?: SortOrder
    day_of_week?: SortOrder
    day_name?: SortOrder
    is_weekend?: SortOrder
    is_trading_day?: SortOrder
    is_trading_month_end?: SortOrder
    fiscal_year?: SortOrder
    fiscal_quarter?: SortOrder
  }

  export type dim_dateMinOrderByAggregateInput = {
    date_id?: SortOrder
    date?: SortOrder
    year?: SortOrder
    quarter?: SortOrder
    month?: SortOrder
    month_name?: SortOrder
    week_of_year?: SortOrder
    day_of_month?: SortOrder
    day_of_week?: SortOrder
    day_name?: SortOrder
    is_weekend?: SortOrder
    is_trading_day?: SortOrder
    is_trading_month_end?: SortOrder
    fiscal_year?: SortOrder
    fiscal_quarter?: SortOrder
  }

  export type dim_dateSumOrderByAggregateInput = {
    date_id?: SortOrder
    year?: SortOrder
    quarter?: SortOrder
    month?: SortOrder
    week_of_year?: SortOrder
    day_of_month?: SortOrder
    day_of_week?: SortOrder
    fiscal_year?: SortOrder
    fiscal_quarter?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type fact_fundamentalsCompany_idConceptPeriod_endFiling_dateCompoundUniqueInput = {
    company_id: number
    concept: string
    period_end: Date | string
    filing_date: Date | string
  }

  export type fact_fundamentalsCountOrderByAggregateInput = {
    company_id?: SortOrder
    concept?: SortOrder
    period_end?: SortOrder
    filing_date?: SortOrder
    value?: SortOrder
    unit?: SortOrder
    source_tag?: SortOrder
    policy?: SortOrder
    form?: SortOrder
    data_quality?: SortOrder
    is_restatement?: SortOrder
  }

  export type fact_fundamentalsAvgOrderByAggregateInput = {
    company_id?: SortOrder
    value?: SortOrder
  }

  export type fact_fundamentalsMaxOrderByAggregateInput = {
    company_id?: SortOrder
    concept?: SortOrder
    period_end?: SortOrder
    filing_date?: SortOrder
    value?: SortOrder
    unit?: SortOrder
    source_tag?: SortOrder
    policy?: SortOrder
    form?: SortOrder
    data_quality?: SortOrder
    is_restatement?: SortOrder
  }

  export type fact_fundamentalsMinOrderByAggregateInput = {
    company_id?: SortOrder
    concept?: SortOrder
    period_end?: SortOrder
    filing_date?: SortOrder
    value?: SortOrder
    unit?: SortOrder
    source_tag?: SortOrder
    policy?: SortOrder
    form?: SortOrder
    data_quality?: SortOrder
    is_restatement?: SortOrder
  }

  export type fact_fundamentalsSumOrderByAggregateInput = {
    company_id?: SortOrder
    value?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type fact_macroSeries_idDateCompoundUniqueInput = {
    series_id: string
    date: Date | string
  }

  export type fact_macroCountOrderByAggregateInput = {
    macro_id?: SortOrder
    series_id?: SortOrder
    date?: SortOrder
    value?: SortOrder
  }

  export type fact_macroAvgOrderByAggregateInput = {
    macro_id?: SortOrder
    value?: SortOrder
  }

  export type fact_macroMaxOrderByAggregateInput = {
    macro_id?: SortOrder
    series_id?: SortOrder
    date?: SortOrder
    value?: SortOrder
  }

  export type fact_macroMinOrderByAggregateInput = {
    macro_id?: SortOrder
    series_id?: SortOrder
    date?: SortOrder
    value?: SortOrder
  }

  export type fact_macroSumOrderByAggregateInput = {
    macro_id?: SortOrder
    value?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type Dim_companyScalarRelationFilter = {
    is?: dim_companyWhereInput
    isNot?: dim_companyWhereInput
  }

  export type fact_pricesCompany_idTrade_dateCompoundUniqueInput = {
    company_id: number
    trade_date: Date | string
  }

  export type fact_pricesCountOrderByAggregateInput = {
    price_id?: SortOrder
    company_id?: SortOrder
    trade_date?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    adj_close?: SortOrder
    volume?: SortOrder
  }

  export type fact_pricesAvgOrderByAggregateInput = {
    price_id?: SortOrder
    company_id?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    adj_close?: SortOrder
    volume?: SortOrder
  }

  export type fact_pricesMaxOrderByAggregateInput = {
    price_id?: SortOrder
    company_id?: SortOrder
    trade_date?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    adj_close?: SortOrder
    volume?: SortOrder
  }

  export type fact_pricesMinOrderByAggregateInput = {
    price_id?: SortOrder
    company_id?: SortOrder
    trade_date?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    adj_close?: SortOrder
    volume?: SortOrder
  }

  export type fact_pricesSumOrderByAggregateInput = {
    price_id?: SortOrder
    company_id?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    adj_close?: SortOrder
    volume?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type universeCountOrderByAggregateInput = {
    company_id?: SortOrder
    added_at?: SortOrder
  }

  export type universeAvgOrderByAggregateInput = {
    company_id?: SortOrder
  }

  export type universeMaxOrderByAggregateInput = {
    company_id?: SortOrder
    added_at?: SortOrder
  }

  export type universeMinOrderByAggregateInput = {
    company_id?: SortOrder
    added_at?: SortOrder
  }

  export type universeSumOrderByAggregateInput = {
    company_id?: SortOrder
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

  export type raw_fundamentalsCikTaxonomyTagUnitPeriod_endFiling_dateFormCompoundUniqueInput = {
    cik: string
    taxonomy: string
    tag: string
    unit: string
    period_end: Date | string
    filing_date: Date | string
    form: string
  }

  export type raw_fundamentalsCountOrderByAggregateInput = {
    id?: SortOrder
    cik?: SortOrder
    ticker?: SortOrder
    taxonomy?: SortOrder
    tag?: SortOrder
    unit?: SortOrder
    period_start?: SortOrder
    period_end?: SortOrder
    filing_date?: SortOrder
    accession?: SortOrder
    form?: SortOrder
    value?: SortOrder
    loaded_at?: SortOrder
  }

  export type raw_fundamentalsAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type raw_fundamentalsMaxOrderByAggregateInput = {
    id?: SortOrder
    cik?: SortOrder
    ticker?: SortOrder
    taxonomy?: SortOrder
    tag?: SortOrder
    unit?: SortOrder
    period_start?: SortOrder
    period_end?: SortOrder
    filing_date?: SortOrder
    accession?: SortOrder
    form?: SortOrder
    value?: SortOrder
    loaded_at?: SortOrder
  }

  export type raw_fundamentalsMinOrderByAggregateInput = {
    id?: SortOrder
    cik?: SortOrder
    ticker?: SortOrder
    taxonomy?: SortOrder
    tag?: SortOrder
    unit?: SortOrder
    period_start?: SortOrder
    period_end?: SortOrder
    filing_date?: SortOrder
    accession?: SortOrder
    form?: SortOrder
    value?: SortOrder
    loaded_at?: SortOrder
  }

  export type raw_fundamentalsSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
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

  export type raw_macroSeries_idDateCompoundUniqueInput = {
    series_id: string
    date: Date | string
  }

  export type raw_macroCountOrderByAggregateInput = {
    id?: SortOrder
    series_id?: SortOrder
    date?: SortOrder
    value?: SortOrder
    ingested_at?: SortOrder
  }

  export type raw_macroAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type raw_macroMaxOrderByAggregateInput = {
    id?: SortOrder
    series_id?: SortOrder
    date?: SortOrder
    value?: SortOrder
    ingested_at?: SortOrder
  }

  export type raw_macroMinOrderByAggregateInput = {
    id?: SortOrder
    series_id?: SortOrder
    date?: SortOrder
    value?: SortOrder
    ingested_at?: SortOrder
  }

  export type raw_macroSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type raw_pricesTickerTrade_dateCompoundUniqueInput = {
    ticker: string
    trade_date: Date | string
  }

  export type raw_pricesCountOrderByAggregateInput = {
    id?: SortOrder
    ticker?: SortOrder
    trade_date?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    adj_close?: SortOrder
    volume?: SortOrder
    ingested_at?: SortOrder
  }

  export type raw_pricesAvgOrderByAggregateInput = {
    id?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    adj_close?: SortOrder
    volume?: SortOrder
  }

  export type raw_pricesMaxOrderByAggregateInput = {
    id?: SortOrder
    ticker?: SortOrder
    trade_date?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    adj_close?: SortOrder
    volume?: SortOrder
    ingested_at?: SortOrder
  }

  export type raw_pricesMinOrderByAggregateInput = {
    id?: SortOrder
    ticker?: SortOrder
    trade_date?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    adj_close?: SortOrder
    volume?: SortOrder
    ingested_at?: SortOrder
  }

  export type raw_pricesSumOrderByAggregateInput = {
    id?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    adj_close?: SortOrder
    volume?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type raw_tiingo_fundamentalsCountOrderByAggregateInput = {
    ticker?: SortOrder
    tiingo_ticker?: SortOrder
    raw_payload?: SortOrder
    ingested_at?: SortOrder
  }

  export type raw_tiingo_fundamentalsMaxOrderByAggregateInput = {
    ticker?: SortOrder
    tiingo_ticker?: SortOrder
    ingested_at?: SortOrder
  }

  export type raw_tiingo_fundamentalsMinOrderByAggregateInput = {
    ticker?: SortOrder
    tiingo_ticker?: SortOrder
    ingested_at?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type fact_pricesCreateNestedManyWithoutDim_companyInput = {
    create?: XOR<fact_pricesCreateWithoutDim_companyInput, fact_pricesUncheckedCreateWithoutDim_companyInput> | fact_pricesCreateWithoutDim_companyInput[] | fact_pricesUncheckedCreateWithoutDim_companyInput[]
    connectOrCreate?: fact_pricesCreateOrConnectWithoutDim_companyInput | fact_pricesCreateOrConnectWithoutDim_companyInput[]
    createMany?: fact_pricesCreateManyDim_companyInputEnvelope
    connect?: fact_pricesWhereUniqueInput | fact_pricesWhereUniqueInput[]
  }

  export type universeCreateNestedOneWithoutDim_companyInput = {
    create?: XOR<universeCreateWithoutDim_companyInput, universeUncheckedCreateWithoutDim_companyInput>
    connectOrCreate?: universeCreateOrConnectWithoutDim_companyInput
    connect?: universeWhereUniqueInput
  }

  export type fact_pricesUncheckedCreateNestedManyWithoutDim_companyInput = {
    create?: XOR<fact_pricesCreateWithoutDim_companyInput, fact_pricesUncheckedCreateWithoutDim_companyInput> | fact_pricesCreateWithoutDim_companyInput[] | fact_pricesUncheckedCreateWithoutDim_companyInput[]
    connectOrCreate?: fact_pricesCreateOrConnectWithoutDim_companyInput | fact_pricesCreateOrConnectWithoutDim_companyInput[]
    createMany?: fact_pricesCreateManyDim_companyInputEnvelope
    connect?: fact_pricesWhereUniqueInput | fact_pricesWhereUniqueInput[]
  }

  export type universeUncheckedCreateNestedOneWithoutDim_companyInput = {
    create?: XOR<universeCreateWithoutDim_companyInput, universeUncheckedCreateWithoutDim_companyInput>
    connectOrCreate?: universeCreateOrConnectWithoutDim_companyInput
    connect?: universeWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type fact_pricesUpdateManyWithoutDim_companyNestedInput = {
    create?: XOR<fact_pricesCreateWithoutDim_companyInput, fact_pricesUncheckedCreateWithoutDim_companyInput> | fact_pricesCreateWithoutDim_companyInput[] | fact_pricesUncheckedCreateWithoutDim_companyInput[]
    connectOrCreate?: fact_pricesCreateOrConnectWithoutDim_companyInput | fact_pricesCreateOrConnectWithoutDim_companyInput[]
    upsert?: fact_pricesUpsertWithWhereUniqueWithoutDim_companyInput | fact_pricesUpsertWithWhereUniqueWithoutDim_companyInput[]
    createMany?: fact_pricesCreateManyDim_companyInputEnvelope
    set?: fact_pricesWhereUniqueInput | fact_pricesWhereUniqueInput[]
    disconnect?: fact_pricesWhereUniqueInput | fact_pricesWhereUniqueInput[]
    delete?: fact_pricesWhereUniqueInput | fact_pricesWhereUniqueInput[]
    connect?: fact_pricesWhereUniqueInput | fact_pricesWhereUniqueInput[]
    update?: fact_pricesUpdateWithWhereUniqueWithoutDim_companyInput | fact_pricesUpdateWithWhereUniqueWithoutDim_companyInput[]
    updateMany?: fact_pricesUpdateManyWithWhereWithoutDim_companyInput | fact_pricesUpdateManyWithWhereWithoutDim_companyInput[]
    deleteMany?: fact_pricesScalarWhereInput | fact_pricesScalarWhereInput[]
  }

  export type universeUpdateOneWithoutDim_companyNestedInput = {
    create?: XOR<universeCreateWithoutDim_companyInput, universeUncheckedCreateWithoutDim_companyInput>
    connectOrCreate?: universeCreateOrConnectWithoutDim_companyInput
    upsert?: universeUpsertWithoutDim_companyInput
    disconnect?: universeWhereInput | boolean
    delete?: universeWhereInput | boolean
    connect?: universeWhereUniqueInput
    update?: XOR<XOR<universeUpdateToOneWithWhereWithoutDim_companyInput, universeUpdateWithoutDim_companyInput>, universeUncheckedUpdateWithoutDim_companyInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type fact_pricesUncheckedUpdateManyWithoutDim_companyNestedInput = {
    create?: XOR<fact_pricesCreateWithoutDim_companyInput, fact_pricesUncheckedCreateWithoutDim_companyInput> | fact_pricesCreateWithoutDim_companyInput[] | fact_pricesUncheckedCreateWithoutDim_companyInput[]
    connectOrCreate?: fact_pricesCreateOrConnectWithoutDim_companyInput | fact_pricesCreateOrConnectWithoutDim_companyInput[]
    upsert?: fact_pricesUpsertWithWhereUniqueWithoutDim_companyInput | fact_pricesUpsertWithWhereUniqueWithoutDim_companyInput[]
    createMany?: fact_pricesCreateManyDim_companyInputEnvelope
    set?: fact_pricesWhereUniqueInput | fact_pricesWhereUniqueInput[]
    disconnect?: fact_pricesWhereUniqueInput | fact_pricesWhereUniqueInput[]
    delete?: fact_pricesWhereUniqueInput | fact_pricesWhereUniqueInput[]
    connect?: fact_pricesWhereUniqueInput | fact_pricesWhereUniqueInput[]
    update?: fact_pricesUpdateWithWhereUniqueWithoutDim_companyInput | fact_pricesUpdateWithWhereUniqueWithoutDim_companyInput[]
    updateMany?: fact_pricesUpdateManyWithWhereWithoutDim_companyInput | fact_pricesUpdateManyWithWhereWithoutDim_companyInput[]
    deleteMany?: fact_pricesScalarWhereInput | fact_pricesScalarWhereInput[]
  }

  export type universeUncheckedUpdateOneWithoutDim_companyNestedInput = {
    create?: XOR<universeCreateWithoutDim_companyInput, universeUncheckedCreateWithoutDim_companyInput>
    connectOrCreate?: universeCreateOrConnectWithoutDim_companyInput
    upsert?: universeUpsertWithoutDim_companyInput
    disconnect?: universeWhereInput | boolean
    delete?: universeWhereInput | boolean
    connect?: universeWhereUniqueInput
    update?: XOR<XOR<universeUpdateToOneWithWhereWithoutDim_companyInput, universeUpdateWithoutDim_companyInput>, universeUncheckedUpdateWithoutDim_companyInput>
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type dim_companyCreateNestedOneWithoutFact_pricesInput = {
    create?: XOR<dim_companyCreateWithoutFact_pricesInput, dim_companyUncheckedCreateWithoutFact_pricesInput>
    connectOrCreate?: dim_companyCreateOrConnectWithoutFact_pricesInput
    connect?: dim_companyWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type dim_companyUpdateOneRequiredWithoutFact_pricesNestedInput = {
    create?: XOR<dim_companyCreateWithoutFact_pricesInput, dim_companyUncheckedCreateWithoutFact_pricesInput>
    connectOrCreate?: dim_companyCreateOrConnectWithoutFact_pricesInput
    upsert?: dim_companyUpsertWithoutFact_pricesInput
    connect?: dim_companyWhereUniqueInput
    update?: XOR<XOR<dim_companyUpdateToOneWithWhereWithoutFact_pricesInput, dim_companyUpdateWithoutFact_pricesInput>, dim_companyUncheckedUpdateWithoutFact_pricesInput>
  }

  export type dim_companyCreateNestedOneWithoutUniverseInput = {
    create?: XOR<dim_companyCreateWithoutUniverseInput, dim_companyUncheckedCreateWithoutUniverseInput>
    connectOrCreate?: dim_companyCreateOrConnectWithoutUniverseInput
    connect?: dim_companyWhereUniqueInput
  }

  export type dim_companyUpdateOneRequiredWithoutUniverseNestedInput = {
    create?: XOR<dim_companyCreateWithoutUniverseInput, dim_companyUncheckedCreateWithoutUniverseInput>
    connectOrCreate?: dim_companyCreateOrConnectWithoutUniverseInput
    upsert?: dim_companyUpsertWithoutUniverseInput
    connect?: dim_companyWhereUniqueInput
    update?: XOR<XOR<dim_companyUpdateToOneWithWhereWithoutUniverseInput, dim_companyUpdateWithoutUniverseInput>, dim_companyUncheckedUpdateWithoutUniverseInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type fact_pricesCreateWithoutDim_companyInput = {
    price_id?: bigint | number
    trade_date: Date | string
    open?: Decimal | DecimalJsLike | number | string | null
    high?: Decimal | DecimalJsLike | number | string | null
    low?: Decimal | DecimalJsLike | number | string | null
    close?: Decimal | DecimalJsLike | number | string | null
    adj_close: Decimal | DecimalJsLike | number | string
    volume?: Decimal | DecimalJsLike | number | string | null
  }

  export type fact_pricesUncheckedCreateWithoutDim_companyInput = {
    price_id?: bigint | number
    trade_date: Date | string
    open?: Decimal | DecimalJsLike | number | string | null
    high?: Decimal | DecimalJsLike | number | string | null
    low?: Decimal | DecimalJsLike | number | string | null
    close?: Decimal | DecimalJsLike | number | string | null
    adj_close: Decimal | DecimalJsLike | number | string
    volume?: Decimal | DecimalJsLike | number | string | null
  }

  export type fact_pricesCreateOrConnectWithoutDim_companyInput = {
    where: fact_pricesWhereUniqueInput
    create: XOR<fact_pricesCreateWithoutDim_companyInput, fact_pricesUncheckedCreateWithoutDim_companyInput>
  }

  export type fact_pricesCreateManyDim_companyInputEnvelope = {
    data: fact_pricesCreateManyDim_companyInput | fact_pricesCreateManyDim_companyInput[]
    skipDuplicates?: boolean
  }

  export type universeCreateWithoutDim_companyInput = {
    added_at?: Date | string
  }

  export type universeUncheckedCreateWithoutDim_companyInput = {
    added_at?: Date | string
  }

  export type universeCreateOrConnectWithoutDim_companyInput = {
    where: universeWhereUniqueInput
    create: XOR<universeCreateWithoutDim_companyInput, universeUncheckedCreateWithoutDim_companyInput>
  }

  export type fact_pricesUpsertWithWhereUniqueWithoutDim_companyInput = {
    where: fact_pricesWhereUniqueInput
    update: XOR<fact_pricesUpdateWithoutDim_companyInput, fact_pricesUncheckedUpdateWithoutDim_companyInput>
    create: XOR<fact_pricesCreateWithoutDim_companyInput, fact_pricesUncheckedCreateWithoutDim_companyInput>
  }

  export type fact_pricesUpdateWithWhereUniqueWithoutDim_companyInput = {
    where: fact_pricesWhereUniqueInput
    data: XOR<fact_pricesUpdateWithoutDim_companyInput, fact_pricesUncheckedUpdateWithoutDim_companyInput>
  }

  export type fact_pricesUpdateManyWithWhereWithoutDim_companyInput = {
    where: fact_pricesScalarWhereInput
    data: XOR<fact_pricesUpdateManyMutationInput, fact_pricesUncheckedUpdateManyWithoutDim_companyInput>
  }

  export type fact_pricesScalarWhereInput = {
    AND?: fact_pricesScalarWhereInput | fact_pricesScalarWhereInput[]
    OR?: fact_pricesScalarWhereInput[]
    NOT?: fact_pricesScalarWhereInput | fact_pricesScalarWhereInput[]
    price_id?: BigIntFilter<"fact_prices"> | bigint | number
    company_id?: IntFilter<"fact_prices"> | number
    trade_date?: DateTimeFilter<"fact_prices"> | Date | string
    open?: DecimalNullableFilter<"fact_prices"> | Decimal | DecimalJsLike | number | string | null
    high?: DecimalNullableFilter<"fact_prices"> | Decimal | DecimalJsLike | number | string | null
    low?: DecimalNullableFilter<"fact_prices"> | Decimal | DecimalJsLike | number | string | null
    close?: DecimalNullableFilter<"fact_prices"> | Decimal | DecimalJsLike | number | string | null
    adj_close?: DecimalFilter<"fact_prices"> | Decimal | DecimalJsLike | number | string
    volume?: DecimalNullableFilter<"fact_prices"> | Decimal | DecimalJsLike | number | string | null
  }

  export type universeUpsertWithoutDim_companyInput = {
    update: XOR<universeUpdateWithoutDim_companyInput, universeUncheckedUpdateWithoutDim_companyInput>
    create: XOR<universeCreateWithoutDim_companyInput, universeUncheckedCreateWithoutDim_companyInput>
    where?: universeWhereInput
  }

  export type universeUpdateToOneWithWhereWithoutDim_companyInput = {
    where?: universeWhereInput
    data: XOR<universeUpdateWithoutDim_companyInput, universeUncheckedUpdateWithoutDim_companyInput>
  }

  export type universeUpdateWithoutDim_companyInput = {
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type universeUncheckedUpdateWithoutDim_companyInput = {
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type dim_companyCreateWithoutFact_pricesInput = {
    cik: string
    ticker?: string | null
    yf_ticker?: string | null
    company_name: string
    exchange?: string | null
    gics_sector?: string | null
    gics_industry?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    sic_code?: number | null
    sic_description?: string | null
    fiscal_year_end?: string | null
    universe?: universeCreateNestedOneWithoutDim_companyInput
  }

  export type dim_companyUncheckedCreateWithoutFact_pricesInput = {
    company_id?: number
    cik: string
    ticker?: string | null
    yf_ticker?: string | null
    company_name: string
    exchange?: string | null
    gics_sector?: string | null
    gics_industry?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    sic_code?: number | null
    sic_description?: string | null
    fiscal_year_end?: string | null
    universe?: universeUncheckedCreateNestedOneWithoutDim_companyInput
  }

  export type dim_companyCreateOrConnectWithoutFact_pricesInput = {
    where: dim_companyWhereUniqueInput
    create: XOR<dim_companyCreateWithoutFact_pricesInput, dim_companyUncheckedCreateWithoutFact_pricesInput>
  }

  export type dim_companyUpsertWithoutFact_pricesInput = {
    update: XOR<dim_companyUpdateWithoutFact_pricesInput, dim_companyUncheckedUpdateWithoutFact_pricesInput>
    create: XOR<dim_companyCreateWithoutFact_pricesInput, dim_companyUncheckedCreateWithoutFact_pricesInput>
    where?: dim_companyWhereInput
  }

  export type dim_companyUpdateToOneWithWhereWithoutFact_pricesInput = {
    where?: dim_companyWhereInput
    data: XOR<dim_companyUpdateWithoutFact_pricesInput, dim_companyUncheckedUpdateWithoutFact_pricesInput>
  }

  export type dim_companyUpdateWithoutFact_pricesInput = {
    cik?: StringFieldUpdateOperationsInput | string
    ticker?: NullableStringFieldUpdateOperationsInput | string | null
    yf_ticker?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: StringFieldUpdateOperationsInput | string
    exchange?: NullableStringFieldUpdateOperationsInput | string | null
    gics_sector?: NullableStringFieldUpdateOperationsInput | string | null
    gics_industry?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sic_code?: NullableIntFieldUpdateOperationsInput | number | null
    sic_description?: NullableStringFieldUpdateOperationsInput | string | null
    fiscal_year_end?: NullableStringFieldUpdateOperationsInput | string | null
    universe?: universeUpdateOneWithoutDim_companyNestedInput
  }

  export type dim_companyUncheckedUpdateWithoutFact_pricesInput = {
    company_id?: IntFieldUpdateOperationsInput | number
    cik?: StringFieldUpdateOperationsInput | string
    ticker?: NullableStringFieldUpdateOperationsInput | string | null
    yf_ticker?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: StringFieldUpdateOperationsInput | string
    exchange?: NullableStringFieldUpdateOperationsInput | string | null
    gics_sector?: NullableStringFieldUpdateOperationsInput | string | null
    gics_industry?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sic_code?: NullableIntFieldUpdateOperationsInput | number | null
    sic_description?: NullableStringFieldUpdateOperationsInput | string | null
    fiscal_year_end?: NullableStringFieldUpdateOperationsInput | string | null
    universe?: universeUncheckedUpdateOneWithoutDim_companyNestedInput
  }

  export type dim_companyCreateWithoutUniverseInput = {
    cik: string
    ticker?: string | null
    yf_ticker?: string | null
    company_name: string
    exchange?: string | null
    gics_sector?: string | null
    gics_industry?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    sic_code?: number | null
    sic_description?: string | null
    fiscal_year_end?: string | null
    fact_prices?: fact_pricesCreateNestedManyWithoutDim_companyInput
  }

  export type dim_companyUncheckedCreateWithoutUniverseInput = {
    company_id?: number
    cik: string
    ticker?: string | null
    yf_ticker?: string | null
    company_name: string
    exchange?: string | null
    gics_sector?: string | null
    gics_industry?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    sic_code?: number | null
    sic_description?: string | null
    fiscal_year_end?: string | null
    fact_prices?: fact_pricesUncheckedCreateNestedManyWithoutDim_companyInput
  }

  export type dim_companyCreateOrConnectWithoutUniverseInput = {
    where: dim_companyWhereUniqueInput
    create: XOR<dim_companyCreateWithoutUniverseInput, dim_companyUncheckedCreateWithoutUniverseInput>
  }

  export type dim_companyUpsertWithoutUniverseInput = {
    update: XOR<dim_companyUpdateWithoutUniverseInput, dim_companyUncheckedUpdateWithoutUniverseInput>
    create: XOR<dim_companyCreateWithoutUniverseInput, dim_companyUncheckedCreateWithoutUniverseInput>
    where?: dim_companyWhereInput
  }

  export type dim_companyUpdateToOneWithWhereWithoutUniverseInput = {
    where?: dim_companyWhereInput
    data: XOR<dim_companyUpdateWithoutUniverseInput, dim_companyUncheckedUpdateWithoutUniverseInput>
  }

  export type dim_companyUpdateWithoutUniverseInput = {
    cik?: StringFieldUpdateOperationsInput | string
    ticker?: NullableStringFieldUpdateOperationsInput | string | null
    yf_ticker?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: StringFieldUpdateOperationsInput | string
    exchange?: NullableStringFieldUpdateOperationsInput | string | null
    gics_sector?: NullableStringFieldUpdateOperationsInput | string | null
    gics_industry?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sic_code?: NullableIntFieldUpdateOperationsInput | number | null
    sic_description?: NullableStringFieldUpdateOperationsInput | string | null
    fiscal_year_end?: NullableStringFieldUpdateOperationsInput | string | null
    fact_prices?: fact_pricesUpdateManyWithoutDim_companyNestedInput
  }

  export type dim_companyUncheckedUpdateWithoutUniverseInput = {
    company_id?: IntFieldUpdateOperationsInput | number
    cik?: StringFieldUpdateOperationsInput | string
    ticker?: NullableStringFieldUpdateOperationsInput | string | null
    yf_ticker?: NullableStringFieldUpdateOperationsInput | string | null
    company_name?: StringFieldUpdateOperationsInput | string
    exchange?: NullableStringFieldUpdateOperationsInput | string | null
    gics_sector?: NullableStringFieldUpdateOperationsInput | string | null
    gics_industry?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sic_code?: NullableIntFieldUpdateOperationsInput | number | null
    sic_description?: NullableStringFieldUpdateOperationsInput | string | null
    fiscal_year_end?: NullableStringFieldUpdateOperationsInput | string | null
    fact_prices?: fact_pricesUncheckedUpdateManyWithoutDim_companyNestedInput
  }

  export type fact_pricesCreateManyDim_companyInput = {
    price_id?: bigint | number
    trade_date: Date | string
    open?: Decimal | DecimalJsLike | number | string | null
    high?: Decimal | DecimalJsLike | number | string | null
    low?: Decimal | DecimalJsLike | number | string | null
    close?: Decimal | DecimalJsLike | number | string | null
    adj_close: Decimal | DecimalJsLike | number | string
    volume?: Decimal | DecimalJsLike | number | string | null
  }

  export type fact_pricesUpdateWithoutDim_companyInput = {
    price_id?: BigIntFieldUpdateOperationsInput | bigint | number
    trade_date?: DateTimeFieldUpdateOperationsInput | Date | string
    open?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    high?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    low?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    close?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    adj_close?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type fact_pricesUncheckedUpdateWithoutDim_companyInput = {
    price_id?: BigIntFieldUpdateOperationsInput | bigint | number
    trade_date?: DateTimeFieldUpdateOperationsInput | Date | string
    open?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    high?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    low?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    close?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    adj_close?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type fact_pricesUncheckedUpdateManyWithoutDim_companyInput = {
    price_id?: BigIntFieldUpdateOperationsInput | bigint | number
    trade_date?: DateTimeFieldUpdateOperationsInput | Date | string
    open?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    high?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    low?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    close?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    adj_close?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
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