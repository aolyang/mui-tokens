import type { MutableRefObject } from "react"

export const isObject = (value: unknown): value is Record<any, any> =>
    value !== null && typeof value === "object"

export const isArray = (value: unknown): value is any[] => Array.isArray(value)

export const isFunction = (value: unknown): value is (...args: any) => any =>
    typeof value === "function"

export const isString = (value: unknown): value is string => typeof value === "string"

export const isBoolean = (value: unknown): value is boolean => typeof value === "boolean"

export const isNumber = (value: unknown): value is number => typeof value === "number"

export const isUndefined = (value: unknown): value is undefined => typeof value === "undefined"

export const isMutableRefObject = <T extends MutableRefObject<unknown>>(value: unknown | T): value is T => {
    return isObject(value) && "current" in value
}
