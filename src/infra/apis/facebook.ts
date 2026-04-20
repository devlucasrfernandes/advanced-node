import { HttpGetClient } from '@/infra/http'
import { LoadFacebookUserApi } from '@/data/contracts/apis'

export class FacebookApi {
  private readonly baseUrl = 'https://graph.facebook.com'
  constructor(
    private readonly httpClient: HttpGetClient,
    private readonly clientId: string,
    private readonly ClientSecret: string,
  ) {}
  async loadUser(params: LoadFacebookUserApi.Params): Promise<void> {
    await this.httpClient.get({
      url: `${this.baseUrl}/oauth/acess_token`,
      params: {
        client_id: this.clientId,
        client_secret: this.ClientSecret,
        grant_type: 'client_credentials',
      },
    })
  }
}
