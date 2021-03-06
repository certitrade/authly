import { Asymmetric as NameAsymmetric } from "./Asymmetric"
import { Symmetric as NameSymmetric } from "./Symmetric"

export type Name = "none" | NameSymmetric | NameAsymmetric

export namespace Name {
	export function is(value: any | Name): value is Name {
		return value == "none" || NameSymmetric.is(value) || NameAsymmetric.is(value)
	}
	export type Symmetric = NameSymmetric
	export namespace Symmetric {
		export const is = NameSymmetric.is
	}
	export type Asymmetric = NameAsymmetric
	export namespace Asymmetric {
		export const is = NameAsymmetric.is
	}
}
