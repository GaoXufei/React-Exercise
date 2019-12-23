export interface AvatarDto {
  filename: string;
  url: string;
}

export interface UserDto {
  username: string;
  avatar: AvatarDto;
}