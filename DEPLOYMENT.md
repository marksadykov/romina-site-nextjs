# Деплой проекта на zolotoe.vip

## Вариант 1: Vercel (Рекомендуется)

### 1. Настройка Vercel

1. Зайдите на [vercel.com](https://vercel.com)
2. Войдите через GitHub
3. Импортируйте ваш репозиторий
4. Настройте домен `zolotoe.vip`

### 2. Настройка GitHub Secrets

В настройках репозитория GitHub добавьте секреты:

- `VERCEL_TOKEN` - токен из Vercel Dashboard
- `VERCEL_ORG_ID` - ID организации из Vercel
- `VERCEL_PROJECT_ID` - ID проекта из Vercel

### 3. Настройка домена

1. В Vercel Dashboard перейдите в настройки проекта
2. Добавьте домен `zolotoe.vip`
3. Настройте DNS записи согласно инструкциям Vercel

## Вариант 2: Собственный сервер

### 1. Настройка сервера

1. Установите Node.js 18+
2. Установите PM2: `npm install -g pm2`
3. Настройте Nginx для проксирования

### 2. Настройка GitHub Secrets

- `SERVER_HOST` - IP адрес сервера
- `SERVER_USER` - пользователь для SSH
- `SERVER_SSH_KEY` - приватный SSH ключ

### 3. Настройка Nginx

```nginx
server {
    listen 80;
    server_name zolotoe.vip www.zolotoe.vip;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## SSL сертификат

Рекомендуется использовать Let's Encrypt:

```bash
sudo certbot --nginx -d zolotoe.vip -d www.zolotoe.vip
```

## Автоматический деплой

После настройки секретов, каждый push в main ветку будет автоматически деплоить проект.
