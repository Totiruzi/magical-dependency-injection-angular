import { InjectionToken } from "@angular/core";

export interface IAppConfig {
  canDeleteBooks: boolean;
}

export const APP_CONFIG = new InjectionToken<IAppConfig>('APP_CONFIG');

export const AppConfig: IAppConfig = {
  canDeleteBooks: true
}