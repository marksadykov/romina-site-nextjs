# 🚀 Деплой сайта Romina на GitHub Pages

## ✅ Готово к деплою!

Ваш проект полностью настроен для деплоя на GitHub Pages с доменом `zolotoe.vip`.

## 📋 Что уже настроено:

### ✅ Next.js конфигурация

- Статический экспорт (`output: 'export'`)
- Оптимизированные изображения (`unoptimized: true`)
- Trailing slash для GitHub Pages

### ✅ GitHub Actions

- Автоматический деплой при push в `main`
- Сборка и экспорт статических файлов
- Загрузка на GitHub Pages

### ✅ Домен zolotoe.vip

- CNAME файл создан
- Sitemap и robots.txt настроены
- SSL будет автоматически настроен GitHub

## 🚀 Следующие шаги:

### 1. Создайте репозиторий на GitHub

```bash
# Инициализация git
git init

# Добавление всех файлов
git add .

# Первый коммит
git commit -m "Initial commit: Romina site for GitHub Pages"

# Подключение к GitHub (замените YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/romina-site-nextjs.git

# Отправка кода
git push -u origin main
```

### 2. Настройте GitHub Pages

1. Перейдите в **Settings** → **Pages**
2. **Source**: выберите "GitHub Actions"
3. Дождитесь завершения первого деплоя

### 3. Настройте домен

1. В **Settings** → **Pages** → **Custom domain**
2. Введите: `zolotoe.vip`
3. Включите "Enforce HTTPS"

### 4. Настройте DNS у регистратора домена

```
Type: CNAME
Name: @
Value: YOUR_USERNAME.github.io

Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

## 🎯 Результат:

После настройки ваш сайт будет доступен по адресу:

- **https://zolotoe.vip** - основной домен
- **https://YOUR_USERNAME.github.io/romina-site-nextjs** - GitHub Pages URL

## 🔄 Автоматический деплой:

- ✅ Каждый push в `main` автоматически обновляет сайт
- ✅ Pull requests создают preview деплои
- ✅ Все изменения публикуются мгновенно

## 📊 Мониторинг:

- **Actions** - статус деплоя
- **Pages** - настройки и URL
- **Insights** - статистика трафика

## 🛠️ Локальная разработка:

```bash
# Разработка
npm run dev

# Сборка для проверки
npm run build

# Просмотр статических файлов
npx serve out
```

## 🎉 Готово!

Ваш сайт готов к деплою на GitHub Pages с доменом `zolotoe.vip`!
