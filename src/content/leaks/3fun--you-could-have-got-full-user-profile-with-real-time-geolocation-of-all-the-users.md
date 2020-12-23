---
organization: 7rUSHZqOErtsRmeJWzZyh
locations: 0Syf58_CBCHX--ncU5TKb
tags: IOUnLZCsnxlMA1utcAAxN
potentialVictims: ">1500000"
source: https://techcrunch.com/2019/08/08/group-dating-app-3fun-security-flaws/
start: 
end: 01.08.2019
added: 22.12.2020
---

# Можно было получить полную выкладку с real-time геолокацией всех пользователей

Делаете вы приложение про такую чувствительную тему, как тройнички и прочие альтернативные сексуальные активности — кстати, никакого осуждения, у нас у всех есть какие-то дикие кинки, это норм.

Ну вот делаете такое приложение. На сайте у себя пишете маркетинговый буллшит про safe space, про приватность, обязательно пишете, чтобы юзеры из приложения никуда не уходили, когда найдут потенциального партнёра, потому что там за пределами приложения опасность и мошенники.

А потом — бац! — и выясняется, что у вас нет никакой защиты от [спуфинга](https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D1%83%D1%84%D0%B8%D0%BD%D0%B3), а, судя по словам ресерчеров, еще и никакого троттлинга запросов тоже. А запросы что дают? Полный профиль пользователя: сексуальную ориентацию, имя, фотографию, геопозицию на данный момент (да-да, в телефонах она может отправляться даже при закрытом приложении), дату последнего открытия приложения, возраст — да всё, в общем.

Берёшь и достаёшь с антресолей обычный советский баш и пишешь скриптик, который запрашивает у сервиса пользователей, находящихся в разных локациях. Во всех подряд, без каких-либо ограничений. В белом доме. В офисе ЦРУ. Посередине деревни ортодоксов или мормонов, это всё складируешь и кому-нибудь продаёшь. Такой инфы у нас нет, но был бы грех предположить, что такую смачную тему кто-нибудь не заабузил.

---

# You could have got full user profile with real-time geolocation of all the users

You run an app that covers such a sensitive topic like threesomes and other alternative sexual activities — by the way, no judgement, we all have some wild kinks, that's ok.

So yeah, you run this app. Of course you write some marketing bullshit on your site, like "safe space", "privacy", you also lecture users to never leave the app when you find a potential partner, because it's scary outside, there's scammers and strangers out there.

And then — bam! — people find out you have no protection against [spoofing](https://en.wikipedia.org/wiki/Spoofing_attack), and, researches say, no real request throttling. What do the requests return? Full user profile: sexual orientation, name, photo, real-time geolocation (yeah, apps can upload it even if the app is closed), last login date, age — well, everything, basically.

You get your centuries old bash and write a small script that requests the servers data about users being in different locations. Everywhere, without any limitations. In the White House. In the CIA office. Right in the middle of orthodox or mormons village. You gather this data and sell to somebody. We don't have any evidense it happened, but it would be a crime to think noone abused such a security hole
