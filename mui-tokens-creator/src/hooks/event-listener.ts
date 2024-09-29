import type { OptionalValue, WrappedValue } from "@/utils/value"

import { useEffect, useRef } from "react"

import { isArray } from "@/utils/is"
import { unwrapValue } from "@/utils/value"

type DomTarget = HTMLElement | Element | Document | Window
type Target = WrappedValue<OptionalValue<DomTarget>>

type Options<T extends Target = Target> = {
    target?: T
    capture?: boolean
    once?: boolean
    passive?: boolean
    enable?: boolean
}

function useEventListener<K extends keyof HTMLElementEventMap>(
    eventName: K,
    handler: (ev: HTMLElementEventMap[K]) => void,
    options?: Options<HTMLElement>,
): void
function useEventListener<K extends keyof ElementEventMap>(
    eventName: K,
    handler: (ev: ElementEventMap[K]) => void,
    options?: Options<Element>
): void
function useEventListener<K extends keyof DocumentEventMap>(
    eventName: K,
    handler: (ev: DocumentEventMap[K]) => void,
    options?: Options<Document>
): void
function useEventListener<K extends keyof WindowEventMap>(
    eventName: K,
    handler: (ev: WindowEventMap[K]) => void,
    options?: Options<Window>
): void
function useEventListener(
    eventName: string | string[],
    handler: (event: Event) => void,
    options?: Options<Window>
): void
function useEventListener(eventName: string | string[], handler: (...args: any[]) => any, options: Options = {}) {
    const handlerRef = useRef(handler)
    useEffect(() => {
        const { enable = true, capture, once, passive } = options

        if (!enable) return
        const target = unwrapValue(options.target) || window

        const eventHandler = (event: Event) => handlerRef.current(event)

        const events = isArray(eventName) ? eventName : [eventName]

        events.forEach((e) => {
            target.addEventListener(e, eventHandler, { capture, once, passive })
        })
        return () => {
            events.forEach((e) => {
                target.removeEventListener(e, eventHandler, { capture })
            })
        }
    }, [
        eventName,
        options.enable,
        options.capture,
        options.once,
        options.passive,
        options.target
    ])
}

export default useEventListener
