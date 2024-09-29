import type { MutableRefObject } from "react"

import { isFunction, isMutableRefObject } from "@/utils/is"

export type OptionalValue<T> = T | null | undefined

export type WrappedValue<T> =
    | T
    | (() => T)
    | MutableRefObject<T>

export const unwrapValue = <T>(value: WrappedValue<T>): T => {
    if (isFunction(value)) return value()
    else if (isMutableRefObject(value)) return value.current
    return value
}
