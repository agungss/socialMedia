export interface Activity {
  hide?: boolean;
  registered?: Date;
  isActive?: boolean;
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
