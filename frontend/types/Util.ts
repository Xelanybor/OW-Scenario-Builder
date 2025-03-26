import { Dispatch, SetStateAction } from "react"

/**
 * State type for passing around state and setState from react's `useState` in a single variable.
 */
export type State<T> = [T, Dispatch<SetStateAction<T>>]