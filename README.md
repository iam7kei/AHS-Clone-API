### Run docker compose
`docker compose up`

### Generate prisma
`npx prisma db generate`

#### Optional
Update `schema.prisma` if needed: `npx prisma db pull` 

### Add `.env`
`DATABASE_URL=postgresql://ahs:ahs@localhost:5432/ahs`
(for local use only)

### Run server
`npm run dev`
