create appsscheduler_db

<!-- clear cache and config -->
php artisan config:clear
php artisan cache:clear
composer dump-autoload

<!-- init -->
php artisan migrate
php artisan passport:install
php artisan db:seed

<!-- start server -->
php artsain serve