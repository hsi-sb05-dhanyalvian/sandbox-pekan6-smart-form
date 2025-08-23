<center>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْمِ</center>
<br />

# B2/P6: Membangun Form yang Cerdas

Materi pekan keenam. Pelajari cara mengirim data form ke API menggunakan useMutation dari React Query, menangani status loading, dan memberikan feedback sukses kepada pengguna.

## Demo

[https://our-kitchen.vercel.app](https://our-kitchen.vercel.app)

## Fitur Utama

- List & Detail resep makanan dari API `DummyJSON`.
- Form `Tambah Resep`.
- Manajemen state form menggunakan `React Hook Form`.
- Validasi form menggunakan `Zod`.
- Submit form ke API `Add Recipe` di `DummyJSON` dengan menggunakan `useMutation`

## Fitur Tambahan

- Multiple call API using `useQueries`
- Komponen `Toast` atau `Notification` untuk pesan sukses/error.
- Komponen tombol `Back To Top`.
- Handle image CDN dari DummyJSON di file `next.config.ts`.

## Installation

Install project with npm

```bash
  cd sandbox-pekan6-smart-form
  npm install
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXT_PUBLIC_CONFIG_API_URL`

`NEXT_PUBLIC_CONFIG_API_DELAY`

`NEXT_PUBLIC_CONFIG_IMAGE_REMOTE`

`NEXT_PUBLIC_CONFIG_NOTIF_TIMEOUT`

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Referensi API

#### API URL

```http
https://dummyjson.com
```

#### Get all recipes

```http
GET /recipes
```

| Parameter | Type     | Required | Description                                                      |
| :-------- | :------- | :------- | :--------------------------------------------------------------- |
| `select`  | `string` | `false`  | query params with comma-separated values to select specific data |
| `limit`   | `number` | `false`  | records per page                                                 |
| `skip`    | `number` | `false`  | records to skip                                                  |

#### Get a single recipe

```http
GET /recipes/${id}
```

| Parameter | Type     | Required | Description           |
| :-------- | :------- | :------- | :-------------------- |
| `id`      | `number` | `true`   | ID of record to fetch |

### Get recipes by a meal

```http
GET /recipes/meal-type/${meal_type}
```

| Parameter   | Type     | Required | Description                              |
| :---------- | :------- | :------- | :--------------------------------------- |
| `meal_type` | `string` | `true`   | kind of meal you want to get recipes for |

### Get recipes by a tag

```http
GET /recipes/tag/${tag}
```

| Parameter | Type     | Required | Description                                  |
| :-------- | :------- | :------- | :------------------------------------------- |
| `tag`     | `string` | `true`   | label or category that you assign to recipes |

### Add Recipe

```http
POST /recipes/tag/${tag}
```

**JSON Body**

```json
{
  "title": "Spaghetti Carbonara",
  "description": "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
  "meal_type": "dinner",
  "tags": ["italian", "quick", "pasta"],
  "ingredients": [
    "200g spaghetti",
    "100g pancetta",
    "2 eggs",
    "50g parmesan cheese",
    "Salt",
    "Black pepper"
  ],
  "instructions": [
    "Cook spaghetti until al dente.",
    "Fry pancetta until crispy.",
    "Whisk eggs and parmesan together.",
    "Combine all ingredients with pasta.",
    "Serve hot with black pepper."
  ]
}
```

## Teknologi
![Static Badge](https://img.shields.io/badge/NextJS-v15.4.6-whitesmoke?logo=nextdotjs)<br />
![Static Badge](https://img.shields.io/badge/Tailwind%20CSS-v4.1.12-whitesmoke?logo=tailwindcss)<br />
![Static Badge](https://img.shields.io/badge/React%20Query-v5.85.3-whitesmoke?logo=reactquery)<br />
![Static Badge](https://img.shields.io/badge/React%20Hook%20Form-v7.62.0-whitesmoke?logo=reacthookform)<br />
![Static Badge](https://img.shields.io/badge/Zod-v4.0.17-whitesmoke?logo=zod)<br />
![Static Badge](https://img.shields.io/badge/Axios-v1.11.0-whitesmoke?logo=axios)<br />
