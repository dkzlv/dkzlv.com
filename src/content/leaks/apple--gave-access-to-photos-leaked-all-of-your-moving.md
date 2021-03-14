---
organization: a_wFsomjeg-umnpJnFq7O
locations: 0Syf58_CBCHX--ncU5TKb
tags: IOUnLZCsnxlMA1utcAAxN
potentialVictims: ">700000000"
source: https://krausefx.com/blog/ios-privacy-detectlocation-an-easy-way-to-access-the-users-ios-location-data-without-actually-having-access
start: 
end: 16.09.2020
added: 02.12.2020
---

# На iOS доступ к фотографиям сливает геолокацию и много чего еще

<div class='callout yellow'>

  🤖

  **Формально — исправлено в iOS 14**.

  Фактически, если вы осознанно не ограничиваете доступ приложений к фотографиям (что мало кто делает), а даёте доступ ко всем фотографиям, для вас ситуация не изменилась совсем.
  
</div>

Суть простая: если вы дали доступ к своим фотографиям любому приложению на iOS, оно… кхм, получает доступ к фотографиям! Что менее очевидно — оно получает доступ ко всем фотографиям, может на них смотреть, анализировать, отправлять их куда-то, и всё без вашего особого ведома.

Например, у каждой фотографии есть мета-данные, [EXIF](https://ru.wikipedia.org/wiki/EXIF). Среди всего прочего они хранят как время сделанного кадра, так и его гео-информацию. Помимо самой фотографии приложение получает доступ и к этим мета-данным. Я написал гео-информация, а не геолокация, потому что туда пишется даже скорость движения и высота айфона над уровнем моря при фотографировании!

По времени фотографий можно сделать обоснованные предположения о вашем домашнем и рабочем адресе: дом — вечерние и утренние фото в повторяющихся локациях; работа — дневные фотки в будние дни. Еще несложно составить ваш точный маршрут прошлых отпусков, выявить ваш любимый бар или понять, на каких мероприятиях вы были. В тестовом приложении Феликса Краузе он смог достать почти 12k локаций за 0.58s — да, телефоны нынче настолько быстрые.

Есть еще более тонкая штука: если у приложения есть доступ к фотографиям, их можно анализировать. Публичных и бесплатных ML-моделей для определения наличия голых частей тела [в сети полным полно](https://github.com/notAI-tech/NudeNet), прикрутить их к приложению — дело техники. ~4ms на одну фотографию (может и быстрее — зависит от модели, телефона и многих других вещей), так что на мою библиотеку в 10k фотографий с 2012 года потребуется примерно 40 секунд, чтобы выделить из неё только голые изображения. Делать с ними приложение может что угодно — и отправить себе на сервер в том числе. Прочие object-detection штуки тоже работают прекрасно.

---

# Gave access to photos — leaked all of your moving

<div class='callout yellow'>

  🤖

  **Technically fixed in iOS 14**.

  In reality, if you're not specifically limiting the app's access down to certain photos (which I think people rarely do, because it is very inconvenient) but just give access to the whole gallery, the situation remains the same for you.

</div>

The idea is simple: if you gave access to your photos to any application on iOS, it… hmm… get access to the photos! But it is not that obvious, that the app can look, analyze and even send all these photos without your approval.

For example, every photo has some metadata, EXIF. Among other things, it contains the precise time when the photo was shot and very accurate geoinformation. The app gets access to this information as well! I specifically wrote "geoinformation" and not "geolocation", because it even contains information on the speed and altitude when the photo was taken.

From the time of the photo, one can get an educated guess about your home and work address: home is a repeatable place where you take photos in mornings or evenings, work — daylight photos on business days. It's also simple enough to guess your previous vacation places, find out your favorite bar or events you attended to. Felix Krause managed to get 12k locations for 0.58s in his PoC-app — yeah, phones are that fast nowadays.

There's also this thing, that if an app has access to your photos it can analyze the contents of it. There's plenty of free and public ML-models that detect NSFW images, it's a piece of cake to add them to an app. ~4ms for a photo (can be even faster, depends on the phone and the model itself), so it will take roughly 40s to detect all nudes in my photo library that contains 10k shots I've taken since 2012. The app can do every sort of thing with them — including sending to a server. All other object detection stuff works well too.
