export class RefreshDTO {
  constructor(partial: Partial<RefreshDTO>) {
    Object.assign(this, partial);
  }

  access_token: string;

  refresh_token: string;
}
