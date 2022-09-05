export type JwtTokenType = {
  username: number;
  uuid: string;
};

export type RequestJwtTokenType = {
  user: JwtTokenType;
};
