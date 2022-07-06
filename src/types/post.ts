type Post = {
  id: number,
  title: string,
  description: string|null,
  author_id: number|null,
  file_path?: string,
  file_name?: string,
  extension?: string,
  metadata?: any,
  created_at?: string,
  updated_at?: string,
  deleted_at?: string,
}

export default Post;
