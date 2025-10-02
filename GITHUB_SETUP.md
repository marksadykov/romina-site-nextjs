# Настройка GitHub репозитория для деплоя

## 1. Создание репозитория на GitHub

1. Зайдите на [github.com](https://github.com)
2. Нажмите "New repository"
3. Название: `romina-site-nextjs`
4. Сделайте репозиторий публичным или приватным
5. НЕ добавляйте README, .gitignore, лицензию (они уже есть)

## 2. Подключение локального проекта к GitHub

```bash
# Инициализация git (если еще не сделано)
git init

# Добавление всех файлов
git add .

# Первый коммит
git commit -m "Initial commit: Romina site with Next.js"

# Подключение к GitHub репозиторию
git remote add origin https://github.com/YOUR_USERNAME/romina-site-nextjs.git

# Отправка кода на GitHub
git push -u origin main
```

## 3. Настройка GitHub Actions

### Для Vercel (Рекомендуется):

1. Зайдите в настройки репозитория GitHub
2. Перейдите в "Secrets and variables" → "Actions"
3. Добавьте следующие секреты:

#### VERCEL_TOKEN

- Зайдите в [Vercel Dashboard](https://vercel.com/dashboard)
- Перейдите в Settings → Tokens
- Создайте новый токен
- Скопируйте токен и добавьте как `VERCEL_TOKEN`

#### VERCEL_ORG_ID и VERCEL_PROJECT_ID

- В Vercel Dashboard перейдите в настройки проекта
- Скопируйте Organization ID и Project ID
- Добавьте как `VERCEL_ORG_ID` и `VERCEL_PROJECT_ID`

### Для собственного сервера:

1. Добавьте секреты:
   - `SERVER_HOST` - IP адрес вашего сервера
   - `SERVER_USER` - имя пользователя для SSH
   - `SERVER_SSH_KEY` - приватный SSH ключ

## 4. Настройка домена

### Для Vercel:

1. В Vercel Dashboard перейдите в настройки проекта
2. Добавьте домен `zolotoe.vip`
3. Настройте DNS записи согласно инструкциям Vercel

### Для собственного сервера:

1. Настройте DNS записи для домена `zolotoe.vip`
2. Укажите A-запись на IP вашего сервера
3. Настройте SSL сертификат (Let's Encrypt)

## 5. Автоматический деплой

После настройки секретов:

- Каждый push в ветку `main` будет автоматически деплоить проект
- Pull requests будут создавать preview деплои
- Все изменения будут автоматически обновляться на сайте

## 6. Мониторинг

- GitHub Actions покажет статус деплоя в разделе "Actions"
- Vercel Dashboard покажет статус деплоя и логи
- Настроенные уведомления будут приходить на email
