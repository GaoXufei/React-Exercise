import { UserDto } from './user.dto'

export interface PostDto {
  id: number;
  title: string;
  content: string;
  created: string;
  updated: string;
  user: UserDto;
}