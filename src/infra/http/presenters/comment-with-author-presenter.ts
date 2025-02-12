import { CommentWithAuthor } from '@/domain/forum/enterprise/entities/value-objects/comment-whit-author'

export class CommentWithAuthorPresenter {
  static toHTTP(commentWithAuthor: CommentWithAuthor) {
    return {
      id: commentWithAuthor.commentId.toString(),
      authorId: commentWithAuthor.authorId.toString(),
      authorName: commentWithAuthor.author,
      content: commentWithAuthor.content,
      createdAt: commentWithAuthor.createdAt,
      updatedAt: commentWithAuthor.updatedAt,
    }
  }
}
