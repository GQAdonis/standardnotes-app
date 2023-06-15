import { Result } from '@standardnotes/domain-core'

import { HomeServerEnvironmentConfiguration } from './HomeServerEnvironmentConfiguration'

export interface HomeServerServiceInterface {
  activatePremiumFeatures(username: string): Promise<Result<string>>
  isHomeServerRunning(): Promise<boolean>
  isHomeServerEnabled(): boolean
  getHomeServerDataLocation(): string | undefined
  enableHomeServer(): Promise<void>
  disableHomeServer(): Promise<void>
  startHomeServer(): Promise<string | undefined>
  stopHomeServer(): Promise<void>
  changeHomeServerDataLocation(): Promise<Result<string>>
  openHomeServerDataLocation(): Promise<void>
  getHomeServerConfiguration(): HomeServerEnvironmentConfiguration | undefined
  setHomeServerConfiguration(config: HomeServerEnvironmentConfiguration): Promise<void>
}
