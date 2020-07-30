export type App = {
  name: string
  entry: any
  match: any
  props: Record<string, unknown>
  status: string
  loaded?: any
  unmount: any
  mount: any
  load: any
  bootstrap: any
}

export type ArrayType<T> = T extends (infer U)[] ? U : T
