export class Player {
  constructor (
    public name: string,
    public phoneNumber: string,
    public email: string,
    public formats: string[],
    public skillLevel: string,
    public proxyFriendly: boolean,
    public image: string,
    public location: string
  ) {}
}
