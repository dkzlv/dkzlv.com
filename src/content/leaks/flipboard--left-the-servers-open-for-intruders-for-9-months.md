---
organization: -ZTFQxVn-NsXLRwnTq64N
locations: 0Syf58_CBCHX--ncU5TKb
tags: IOUnLZCsnxlMA1utcAAxN
potentialVictims: ">150000000"
source: https://techcrunch.com/2019/05/28/flipboard-hacks-password-resets/
isCorporationLeak: 1
start: 02.07.2018
end: 23.03.2019
added: 30.11.2020
---

# Оставили сервера открытыми на 9 месяцев

Во-первых, стоит подметить спешность в удалении информации о взломе. Techcrunch [в своей статье](https://techcrunch.com/2019/05/28/flipboard-hacks-password-resets/) ссылается на страницу, которая на сайте блога Flipboard [уже недоступна](https://about.flipboard.com/support-information-incident-May-2019/) — немногим больше, чем через год после взлома! Кроме того, они настолько хорошо настроили свой блог на WordPress, что на странице правил вылезает ошибка PHP. Браво.

![PHP goes brrrr](/img/leaks/flipboard/php-error.png)

Эту страницу и в блоге не найти, у меня получилось только [на русском её разыскать](https://ru-ru.about.flipboard.com/support-information-incident-may-2019/). Ну ничего, [Wayback Machine всё помнит](https://web.archive.org/web/20201107223738/https://about.flipboard.com/support-information-incident-May-2019/).

Я обращаюсь к первоисточнику, потому что его точно писали какие-то скользкие юристы — это видно вдоль и поперёк. Их учат писать так, чтобы подкопаться было нельзя, но и чтобы ничего лишнего не рассказать. Поэтому я буду цитировать их текст и приводить перевод на человеческий язык

> […] from the investigation indicate an unauthorized person accessed and potentially obtained copies of certain databases containing Flipboard user information between June 2, 2018 and March 23, 2019 and April 21 – 22, 2019

Хакер имел доступ к нашей базе с 2 июня 2018 до 23 марта 2019 года, а поняли мы это только в апреле 2019 года. Что он с ней делал — непонятно, но как минимум доступ на чтение был полный.

> The databases involved contained *#some of our users’ account information*, including name, Flipboard username, cryptographically protected password and email address.

Мы уверены, что, перечислив четыре самых незначительных пункта, у нас получится отвести ваш взгляд с того, что "*users’ account information*" — это всеобъемлющий термин, описывающий все пользовательские данные.

> if users connected their Flipboard account to a third-party account, including social media accounts, then the databases *#may have contained* digital tokens used to connect their Flipboard account to that third-party account. We *#have not found any evidence* the unauthorized person accessed third-party account(s) connected to users’ Flipboard accounts.

Кроме редких случаев, если вы авторизовывались через соц.сети, то эти токены у нас тоже увели. Логов почти никакие из этих соц.сетей не предоставляют (ни Facebook, ни Twitter), поэтому мы можем только гадать, что с этими токенами делали. Нам никто из юзеров не пожаловался.

> We’re still in the process of determining the total number [*#of involved accounts* — прим.ред.]. We do know that not all accounts were compromised.

Так как мы сообщаем об этом в мае 2019 года, а дыру мы закрыли в апреле 2019 года, мы уверены, что во всяком случае не скомпрометированы те юзеры, что зарегистрировались после апреля. Остальное мы не знаем и, по-видимому, никогда не узнаем.

Как-то так. Как обычно, надо помнить, что Flipboard в реальности хранит намного больше информации, чем просто юзернеймы и хешированные пароли — ваша история чтения, любимые блоггеры, избранные статьи, соц.граф и уйма выведенной из этого всего информации (политические убеждения, сексуальная ориентация, кулинарные предпочтения, любимые спортивные команды, что вызывает у вас гнев, а что — радость, и т.д.). Про домашний и рабочий адрес даже говорить стыдно — это и олуху будет понятно из логов посещения.

---

# Left the servers open for intruders for 9 months

Firstly, I'm fascinated by the face that they wipe the information about the leak. Techcrunch refferences [in their article](https://techcrunch.com/2019/05/28/flipboard-hacks-password-resets/) a stetement by Flipboard team that is [already unavailable](https://about.flipboard.com/support-information-incident-May-2019/) — a little more than a year from the event itself! Besides, they did such a great setup of their WordPress blog, that this page now shows a PHP error right there. Bravo.

![PHP goes brrrr](/img/leaks/flipboard/php-error.png)

The statement cannot be found in the blog, I just managed to find it [in Russian](https://ru-ru.about.flipboard.com/support-information-incident-may-2019/). But it's okay, [Wayback Machine remembers everything](https://web.archive.org/web/20201107223738/https://about.flipboard.com/support-information-incident-May-2019/).

I turn to the original source, because it was written by ~liers~ lawers — you can see it. They learn how to write statements so that they never tell anything really important. So I'll quote the original and then translate it from their language to the human language.

> […] from the investigation indicate an unauthorized person accessed and potentially obtained copies of certain databases containing Flipboard user information between June 2, 2018 and March 23, 2019 and April 21 – 22, 2019

The hacker had access to out database from June 2, 2018 to March 23, 2019. We only understood this in April 2019. We have no idea what they did, but they had at least full read access to it.

> The databases involved contained *#some of our users’ account information*, including name, Flipboard username, cryptographically protected password and email address.

We're ceraint that if we enumerate four of the least important data points we'll trick you, so you don't understand that "*users’ account information*" is an all-encompassing term, that includes all of the users' data.

> if users connected their Flipboard account to a third-party account, including social media accounts, then the databases may have contained digital tokens used to connect their Flipboard account to that third-party account. We *#have not found any evidence* the unauthorized person accessed third-party account(s) connected to users’ Flipboard accounts.

If you signed in using social networks your tokens were stolen (apart from some **very rare cases**). These social networks do not offer any logging solutions (neither Facebook, nor Twitter), so we can only guess what those hackers did with them. At least none of the users compained.

> We’re still in the process of determining the total number [*#of involved accounts* — editor's note]. We do know that not all accounts were compromised.

Since we're telling you about this in late May 2019 and we fixed the security hole in late April 2019 we're at least very sure that users who'd signed up in May 2019 are safe. We don't know about the rest of the users and, most probably, we'll never know.

I think, that's it. As usual we all should remember that in reality Flipboard stores much more data that just usernames and hashed passwords. It also has your reading history, favorite bloggers, articles, social graph and a buttload of data derived from all of this (political beliefs, sexual orientation, culinary preferences, favorite sports teams, things that make you angry or sad, etc.). I'll state the obvious that your home and work address can be derived from access logs.