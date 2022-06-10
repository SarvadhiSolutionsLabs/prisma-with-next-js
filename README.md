# prisma-with-next-js
This is a simple project which describe that how to use prisma with next js code.

### How it works?
Here we can use any database with this project. 

1. Create one database named as *demo*
2. There is one file available on this path in the root directory of project: 
`prisma/schema.prisma` Here i have used mysql database. You can use any database here.

   Update your database details as follows:
   ```bash
   datasource db {
     provider = "mysql"
     url      = "mysql://root:root@localhost:3306/demo"
   }
   ```
3. Install package dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
4. After that run database migration by running the following command (For the first time, if it asks you for install prisma then allow it):
   ```bash
   npx prisma migrate dev
   ```
5. To Run Prisma Studio (You can visualize all tables with data in that):
   ```bash
   npx prisma studio
   ```
6. Now run development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```


   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

   You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

   [API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on 
[http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

   The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Reference Docs

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma with Next.js](https://www.prisma.io/nextjs) 
 
