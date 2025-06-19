## Installation

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


#### Sample Login
username: `lholly@ahs.com` <br/>
password: `ahsp@ssw0rd2025`

_DISCLAIMER: All exposed data are local use only._
