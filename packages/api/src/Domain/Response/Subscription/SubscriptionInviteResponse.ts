import { HttpErrorResponseBody } from '../../Http/HttpErrorResponseBody'
import { HttpResponse } from '../../Http/HttpResponse'
import { SubscriptionInviteResponseBody } from './SubscriptionInviteResponseBody'

export interface SubscriptionInviteResponse extends HttpResponse {
  data: SubscriptionInviteResponseBody | HttpErrorResponseBody
}
