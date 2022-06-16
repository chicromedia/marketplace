export class LoadProperties {
  public static readonly type: string = '[Home] LoadProperties';
  constructor(public payload?: string) {}
}

export class GoToPropertyById {
  public static readonly type: string = '[Home] GoToPropertyById'
  constructor(public payload: string) {}
}
