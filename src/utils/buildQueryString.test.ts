import { describe, it, expect } from "vitest";

import { buildQueryString } from "./buildQueryString";

describe("buildQueryString", () => {
  it("クエリが空の場合は空文字列を返す", () => {
    expect(buildQueryString({})).toEqual("");
  });

  it("クエリが空でない場合、クエリ文字列を返す。", () => {
    expect(buildQueryString({ a: 1, b: 2, c: 3 })).toEqual("?a=1&b=2&c=3");
  });

  it("クエリが空でない場合、クエリ文字列を返す。undefined のクエリが存在する場合は無視する。", () => {
    expect(buildQueryString({ a: 1, b: 2, c: undefined })).toEqual("?a=1&b=2");
  });
});
