This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


endpoints

auth
 
✓ POST /api/auth/login can everyone
✓ POST /api/auth/register can everyone (only user role)
✓ POST /api/auth/logout can everyone //??
✓ GET /api/auth/isLoggedIn can everyone 
✓ POST /api/auth/password-reset auth user can send a password reset link to email
✓ POST /api/auth/password-reset/[token] auth user can confirm new password

users

✓ GET /api/users/ can everyone
✓ POST /api/users/ only admin can create
✓ GET /api/users/[userId] can everyone
✓ PUT /api/users/[userId] auth user, if not admin can update only himself
✓ DELETE /api/users/[userId] auth user, if not admin can delete only himself
✓ PATCH /api/users/avatar auth user can update avatar
✓ POST /api/users/verify auth user can send a verify link to email
✓ POST /api/users/verify/[id]/[token] everyone can confirm verify email //! mb chenge auth user

categories
✘ 
✓ GET /api/categories/ can everyone
✓ POST /api/categories/ only admin //?? mb auth user
✓ GET /api/categories/[categoryId] can everyone
✘ GET /api/categories/[categoryId]/posts || /api/posts?post_categories=categoryId  
✓ PUT /api/categories/[categoryId] only admin
✓ DELETE /api/categories/[categoryId] only admin

post

✓ GET /api/posts/ can everyone (categories ids included)
✓ POST /api/posts/ auth user
✓ GET /api/posts/[postid] can everyone
✓ PUT /api/posts/[postid] auth user
✓ DELETE /api/posts/[postid] auth user 
✘ GET /api/posts/[postid]/comments || ✓ GET /api/comments?post_id=id
✘ POST /api/posts/[postid]/comments || ✓ POST /api/comments (postid inside req.body)
✘ GET /api/posts/[postid]/categories || ✓ GET /api/categories?id=1&id=2... (categoryId included in get /api/posts/)
✘ GET /api/posts/[postid]/like || ✓ GET /api/likes?target_post=postId
✘ POST /api/posts/[postid]/like || ✓ POST /api/likes (required in req.body author_id, target_post, target_comment)
✘ DELETE /api/posts/[postid]/like || ✓ DELETE /api/likes (required in req.body author_id, target_post, target_comment)

comments

✓ GET /api/comments/ can everyone
✓ POST /api/comments/ can everyone
✓ GET /api/comments/[commentId] can everyone
✓ PUT /api/comments/[commentId] auth user
✓ DELETE /api/comments/[commentId] auth user
✘ GET /api/comments/[commentId]/like || ✓ GET /api/likes?target_comment=commentId
✘ POST /api/comments/[commentId]/like || ✓ POST /api/likes (required in req.body author_id, target_post, target_comment)
✘ DELETE /api/comments/[commentId]/like || ✓ DELETE /api/likes (required in req.body author_id, target_post, target_comment)

likes

✓ GET /api/likes/ can everyone
✓ POST /api/likes/ auth user
✓ DELETE /api/likes/ auth user

images

✓ GET /api/images/[...slug] can everyone



