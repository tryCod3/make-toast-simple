/// TOAST ///

export type TToastType = 'success' | 'error' | 'info'
export type TToastPosition = 'left' | 'center' | 'right'

export interface IToastBuilder {
  type?: TToastType,
  message: string,
  position?: TToastPosition,
  title?: string,
  duration?: number, // seconds
  iconClose?: boolean,
  isProgress?: boolean,
}

export interface IToastHandler<T extends IToastBuilder> {
  config: (payload: T) => any,
}

export interface IToastOptions {
  pType?: TToastType,
  pPosition?: TToastPosition,
  pTitle?: string,
  pDuration?: number,
}


/// PROGRESS ///

// export enum E_PROGRESS_STATE {
//   RUN = 'run',
//   STOP = 'stop',
//   RESET = 'reset'
// }