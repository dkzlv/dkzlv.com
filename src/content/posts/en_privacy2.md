---
lang: en
title: What they can do with data and what we shall do
date: 11.03.2021
description: "<strong>TL;DR:</strong> everything is very bad. Prognosis is not comforting; if we do nothing all the distopias we read in fiction novels will look like a happy holiday at your granny's"
slug: what-they-can-do-with-data-and-what-we-shall-do
published: 1
series: ["how-they-harvest-data", ""]
registerExtraComponents: ["freeWill", "productBingo"]
---

Hope you've read the first part. 

If I were to shrink all the technical details down to a single sentence, it would look like this: you never know who gets what data. Here's an example:

You entered your email and password on a site where you can buy the best Bashkirian honey on the market. Who could have thought that this would happen:

1. your email was transferred to the company that sends emails. They, btw, analyze the contents of each and every email they send and carefully save every interaction with the email itself in their profile registry in the context of every client: stores, services, blogs, you name it. They have a file on every honey-lover;
2. those genius apiologists didn't have a clue about [salting and hashing passwords](https://en.wikipedia.org/wiki/Salt_(cryptography)), they stored it in plaintext;
3. a highly dangerous group of Bashkirian hackers decided to hack all the stores in their region for the lulz. Our honey makers left the admin-password credentials, obviously.

So, legally or illegally your data became transparent to everyone. And if you reuse the same password over and over again it only takes a single leak to allow anyone to read your emails, sit in your social networks and leave no trace.

You can't hide your preference (Altai flower honey rules!).

What are you saying? This is a totally made-up story? Bashkirian honey makers are very aware of the latest infosec measures? Or these SMB companies always mess up, but big corporations are MUCH safer? 

You got me. Sorry. I shouldn't have made up such stories. Let's use the real ones.

<div class='enum'>

  ![*China's flag](/img/posts/privacy2/china.png)

  Do you walk the streets of Beijing? You should know they have face recognition cameras all over the place. They have a central DB for each face, be it a tourist or a citizen. Oh, shoot, [they left the database open for anyone](https://techcrunch.com/2019/05/03/china-smart-city-exposed/). Who did that? We don't know that. It all was stored in the Alibaba cloud, but we can think it's either government's data or their direct contractor's. You can [buy access to the same face recognition cameras in Moscow for… $200](https://news.trust.org/item/20201109090922-3k4a5/). I don't get why it is so cheap, it's kind of depressing! Yep, it's that easy to get access to your social contacts, geolocation history, home, and work addresses.

  ![*Flipboard logo](/img/posts/privacy2/flipboard.png)

  Do you read the news on Flipboard? Congrats, you're one of their 150M monthly active users! By the way [they left their DB open for 9 months](/en/leaks/left-the-servers-open-for-intruders-for-9-months). Supposedly, hackers took away everything from there: reading history, subscriptions. likes, shares, and everything we don't know exist (partners' data, for example).

  ![*Equifax Logo](/img/posts/privacy2/equifax.png)

  If you're an American and not a bum, you're most certainly use Equifax products. We in Russia have the same credit scoring, but it's mostly centralized and provided by the government. The USA has private companies doing this thing. What **do** they do? They collect as much data as it's possible about taxpayers from all the market players (banks, retails, healthcare companies, etc.) and they try to predict if you would pay out the credit you get based on this data. So, [they accidentally lost data on 147M americans](/en/leaks/a-huge-credit-bureau-was-hacked-a-lot-of-data-was-stolen) (and a few brits and Canadians along the way). They didn't really elaborate on what data was lost — it's not secure, they said. Lol.

  ![*Robinhood Logo](/img/posts/privacy2/robinhood.png)

  But these are **boomers**, we need **zoomers**! They know modern tech stack! Yeah! Here to the Robinhood, the future killer of brokers, one of the best in the venture market. They liberated stock trading and made it available for every person. They've raised $2.2B and are valued at $11B! Fintech — they must be so secu… ahem, [they were storing passwords in plaintext](https://twitter.com/Techmeme/status/1154154645062934528) up until rather recent. And they have [announcmenets about new data leaks every once in a while](https://www.investopedia.com/robinhood-kicks-cybersecurity-month-off-by-getting-hacked-5082845).

  <div></div>

  Ok, but those are startups and commercial structures. Move fast and break things, as it was once told. I know a party that makes stuff super secure stuff. Governments, amirite?

  ![*Bulgaria's, Israel, and Brazil flags](/img/posts/privacy2/flags.png)

  Honestly, I'm laughing my ass out. Long story short: [hackers downloaded data about all the taxpayers in the whole of Bulgaria](/en/leaks/a-hacker-broke-into-bulgaria-and-39-s-tax-system); [Israel's government lost data about all the voters in the country](/en/leaks/personal-data-of-all-the-voters-in-the-country-leaked) (addresses, names, phones, IDs, etc.); [Brazil's Ministry of Health leaked crucial data on all of their citizens' health](https://www.zdnet.com/article/data-of-243-million-brazilians-exposed-online-via-website-source-code/), 243M people in total.

</div>

You need to understand, those IT people are not gods, they fuck up just as much as everybody else. They have all the same sins: stupidity, laziness, sycophancy, love for tea with milk and tabs instead of spaces.

The list just goes on and on. I have a separate database of all the cases when data was leaked by some party, be it government or corporations. I split them into categories, countries and try to estimate the number of possible victims. Subscribe if you want to get an occasional email about that. One letter in two weeks tops. I have a life, you know.

<div class="email-collector">Support to support independent journalism! Subscribe, and tell your mother about us, and tell your dentist and hairdresser as well!</div>

But the post is not about that. I just wanted to seed some thoughts. You shouldn't doubt the monstrosity of your digital trail, it's enormous. What it's not about:

<div class='enum'>

 **what porn you prefer**
 
 Yes, porn sites have behavioral trackers. The fun part is that most of them have [Google Analytics](https://arxiv.org/abs/1907.06520) installed! And, as we know, [incognito mode does not help at all](/en/specials/fingerprint).
 
 **what sexo you prefer**
 
 - LGBT 🏳️‍🌈?
 well, [Grindr lost some millions of users location](https://www.forbes.com/sites/janetwburns/2018/03/29/report-says-grindr-exposed-millions-of-users-private-data-messages-locations/?sh=173cb9875c4c), messages history, and other stuff
 - are you and your wifey fans of amour de trois 👦🏻👩🏻👦🏿👄💦🍆?
 3fun [lost all data on 1.5M users](https://techcrunch.com/2019/08/08/group-dating-app-3fun-security-flaws/): addresses, phone numbers, email addresses, geolocation, etc.
 - why go round the obvious choice: are you a white heterosexual cisgender piece of shit? 🤮
 We know how to handle you. [Tinder, OkCupid, and other services’ data are traded on the market](https://indianexpress.com/article/technology/tech-news-technology/tinder-okcupid-leaking-personal-data-heres-what-you-need-to-know-6217579/). Also quite a cool case of Bumble, [who left their servers open for 200 days and exposed private data of 95M users](https://www.forbes.com/sites/thomasbrewster/2020/11/15/bumble-vulnerabilities-put-facebook-likes-locations-and-pictures-of-95-million-daters-at-risk/?sh=3aa10e643ddf).
 
 **how often you masturbate**
 
 [Apple Watch can quite accurately predict your schedule](https://www.dailydot.com/irl/apple-watch-privacy-activity-sex/). Fitbit used to do that as well, and [even accidentally leaked exposed this data](https://www.forbes.com/sites/kashmirhill/2011/07/05/fitbit-moves-quickly-after-users-sex-stats-exposed/?sh=309c5f3e4327). Most fun part was when they required all the students of [an evangelical university to own a FitBit with reading access for their teachers](https://arstechnica.com/gadgets/2016/02/evangelical-university-requires-fitbit-ownership-data-syncing-for-freshmen). Pay attention, padawans, masturbation leads to Satan, hairy palms and blindness!
 
</div>

Yeah, let me get this crystal clear.

**Everything you do** is there on the servers: how often you visit the gym, what is your typical route to your workplace, what books you read, what people you meet, how you earn you money, what food allergies you have, and that things you like so much you can sell your soul for it.

There are not many companies that unified all this data into a single point, in one ecosystem, we’re able to count them on one hand. They connect a lot of very different sources: some from their own products, some — from commercial partners, some — from other sites, some were bought from offline retails.

The most interesting question is what can they do with it.

## Wild world of statistics
 
Hey, Dan, cmon, you’re full of shit. Yeah, I smoke weed from time to time, I steal toilet paper and staples from my employer, sometimes I give ma wife a good beat when she gets too bold, and like a normal guy, I like to have a little too much beer before I drive home from a bar. But nobody knows that! I’m not a retard to share it on my fucking MySpace.

You get it right, pal. There are a few nuances though.

We have a few illusions about ourselves.

### Illusion #0: we’re all are unique snowflakes ❄️
 
We tend to think that the experience of an individual human being is unrepeatable and we are completely unique. Maybe it is true, there are no two exactly the same persons in the world, but [snowflakes can be categorized into 40 different types](https://en.wikipedia.org/wiki/Snowflake#Classification), inside which the difference is minimal, atomic even. People are mostly the same.

You can have unique hobbies, unusual jobs, strange child traumas, or such stuff, but you’re not that hard to read if one gets enough information. Even we can finish sentences for close friends or predict their chain of thought, and we only have our incomplete protein-based brains!

Now imagine you have a machine-based brain made of millions of cores of high-performance CPUs, that have all the data about this exact person and 2 billion other people on its (virtual) table. You’re an open book for it, like a banal novelette, like a film in the Marvel universe, your actions are all but secondary and predictable to a very high chance.

### Illusion #1: we have a completely free will
 
We tend to think we have a complete and unconditional free will: I will push this shitty button if I want, or will not push it otherwise.

<div class='freewill'></div>

If we put aside the philosophical side of the question (I’m a compatibilist if you need to know), then I think from the practical point of view some kind of determinism *guides* our actions. We won’t call no all-knowing Laplace's demon, we’ll just say that on average a person who’s put into some circumstances does not have a completely free will, but limited by some boundaries: social (you’re in the army — you follow orders), moral (you have a knife in your hand — you don’t go dismembering people around you, you’re not a psycho from Saint Petersburg, Russia), personal (you don’t know how to drive — you don’t drive), informational (you know that amanitas are poisonous — think don’t eat) and others. But you have some room for improvisation inside these boundaries.

There are two illusions, and there are two conclusions as well.

### You’re not unique
 
<div class='freewill-followup'></div>

If you’re a white male, 30 y.o. with two kids who buy two liters of cheap whiskey a week, there’s a high percent chance you go into the cohort of people who will be sentenced for domestic violence. Machine brain has all the input: it gets data about whiskey from a partnership from your favorite retail where you pass your discount card to cut 30 cents of a $100 purchase; they got your age from your social network account; they picked up your race from your blurry Instagram photos from your last vacation 8 years ago in a cheap motel 5km from your home; and kids — that's the easiest part, because of the purchase history (diapers), your social profiles (what sick mother wouldn't brag her child can now do some shit every living person on Earth can?!), you watching TikTok on how to raise a normal human being, and so on.

![Euler-Venn diagram](/img/posts/en_privacy2/euler_venn.png)

So even if you don't post a restricting order from your wife, some IT corporations know for sure that, when you suddenly change your place of stay, they need to offer you a divorce lawyer. It's that simple.

We're unique at the atomic level. Most probably, you have some rather unique traits. But overall we're very predictable and readable.

### It's not us who form the boundaries

It's very important, that all these boundaries are very flexible and can be changed from the outside. This is where IT giants shine most brightly.

All of these boundaries are mostly formed by the incoming information. Your moral norms, knowledge base, the way you evolve as a personality — it all mostly happens due to the incoming information. And we let IT giants carefully pick the information we consume daily on a personal basis.

![Corporation's bullshit](/img/posts/en_privacy2/bullshit.png)

If we take a step back, all the social norms and legal rules are not made of thin air as well: they are written by politicians, who are populist in their very nature, they seek for a problem that has the highest citations, the nerve of the public. Who accepts these norms? The same politicians, whose main goal is to please the public. And the public somehow found out about these politicians… probably, from social media, some advertising campaign on the internet, or a fundraising event, which they knew about from an invite in some other social media. Yeah.

## How bad is it

It's a fucking mess. So let's get serious for a moment.

I think most of my horror stories are true — at least partially. The amount of data corporations have on us is very hard to comprehend. The amount of knowledge they can derive based on the similarity between people is almost infinite. It will not go anywhere.

### What I know for sure

<div class='enum'>

  **ad monetization**

  for now, corporations mostly earn money with ads, so most of their complex calculations and approximations of your behavior are targeted on increasing two metrics: retaining you on the platform (more sessions and making them longer) and increasing the probability of you clicking the ad. They do their job just fine.

  **separation of concerns**

  it's very simple to separate the concerns of different employees inside the company. There's this cool case of [Theranos](https://en.wikipedia.org/wiki/Theranos). They allegedly invented a way to run dozens of blood tests on a sample of a single drop. They raised $1.4B in total. Their founder walked in a black turtleneck, she was called "Steve Jobs in a skirt". Total success. But the invention was a huge lie, but only the most top of the top management knew it, it was literally 5 people — even though they peaked with 800 employees! They just organized the work so that you only worked on a small part of the device and never saw the big picture. It works just the same with code, but it's much simpler.

  **GAFAM is invincible**

  [GAFAM](https://en.wikipedia.org/wiki/Big_Tech), most probably, won't go anywhere. Neither will the IT. There are no reasons to think we won't use Apple and Android devices in 5 or 10 years. The device may change (if AR-glasses will finally mature), but we've passed some inflection point when it is very difficult to have some meaningful innovations or major OS developed outside of a few companies. Apple has a $16B R&D budget, it's almost impossible to imagine there will be some other company that can overthrow. Nobody can catch up to them.
</div>

### What I'm sure of

<div class='enum'>

  **zombie-internet**

  IT giants have an enormous influence on people's minds. Unimaginable. They are our TV, newspapers, teachers, parents, friends, colleagues, bosses — all in one. We see the results of their actions in realtime: polarization and radicalization of the society, the spread of fake news, the increasing number of anti-vaxxers, AIDS denialism, people who believe in Bilderberg meeting, Rothschilds, Rockefellers, Soros, Freemasonry, Templiers, reptiloids and other mythical creatures.
  If we see that flat earth society has peaked in year 202* in followers and YouTube watched, we need to find some explanation. Either the education has gotten much worse over the past 10 years — what a synchronous worldwide degradation, isn't it? — or IT is somehow involved.

  **limitless power**

  we hardly know what are the limits to data usage. Palantir, a notorious government contractor with no shame or pride, uses Big data [to make cops more efficient](https://www.vice.com/en/article/9kx4z8/revealed-this-is-palantirs-top-secret-user-manual-for-cops) in getting crucial data about people without court's approval. Any random person (keyword: ClearView AI) can get their hands on open data and match your previous photos from social media with a random photo (that was taken, say, in the street) — with the connection to your social media profile, detailed geolocation, etc. Possibilities are only limited by your imagination.

</div>

### What I'm quite sure of but have no evidence now or ever

IT corporations can have departments that may run small and careful experiments on the real limits of their power. Can they help some loyal politician win the election? or displace that one that bothers them? maybe, motivate people with passive protest activity to go on a meeting? or just shift the attention away from a toxic topic?

Why would I think that? Well, thanks to Snowden we now know that IT companies were sharing data with NSA within many different programs, but the most famous one is [PRISM](https://en.wikipedia.org/wiki/PRISM_(surveillance_program)) — *and nobody had a clue*. If you asked a Google employee in 2010 if the CIA had access to their data, they would have called you mad, started telling you about infosec, their data policies, access control, and that there are logs everywhere that are impossible to get around. But the truth stings. Why should we think the same doesn't happen now, but without the secret service? Is it because Google's motto is "Don't be evil"? [Funny thing is they now reject this motto](https://gizmodo.com/google-removes-nearly-all-mentions-of-dont-be-evil-from-1826153393). Oopsie.

### What will happen with a close to 100% chance

I love razors: Occam's, Hanlon's, Gilette's. I even derived a razor of my own in the previous article. Repetition is the mother of learning. **Dickhead's razor** is the presumption according to which any instrument will be used for evil purposes if it's theoretically possible. Atom splitting → Hiroshima and Nagasaki. So even if corporations do no bad stuff right now (I highly doubt that) it will inevitably happen in the future.

<div class='product-bingo'>

  <div class="header">

  ❤️ Our appeal

  </div>

  <div class="header">

  💔 Our monetization

  </div>

  Everyday auto-feeder for pets

  <div class="hide-behind-blur">

  If the owners are on a long vacation, we add microtransactions, or the pet is dead

  </div>

  Photo app with cutie masks

  <div class="hide-behind-blur">

  Analyze faces, find all non-whites, sell their geolocation 300 items a package to neo-nazi

  </div>

  Safe space for LGBT

  <div class="hide-behind-blur">

  Try to sell out the company to a conservative Islamic organization

  </div>

  Anonymous message board to whistleblow about corruption and abuse of power

  <div class="hide-behind-blur">

  $0.99 a month — subscribe and get notifications when your name pops up in the message.

  $2.99 — delete any message.

  $5.99 — find out who ratted you.

  </div>

</div>

But chill, guys, it's just fiction. Mostly.

---

We can see some of the future developments now. Companies try to extend the application of the data they have.

You used to be a search engine yesterday, but now [you sell credit scores to banks](https://vc.ru/finance/98790-yandeks-predlozhil-bankam-ocenku-kreditosposobnosti-rossiyan-na-osnove-obezlichennyh-dannyh-polzovateley). Anti-trust issue? Nah, it's fine. Should we tell the users that their search history will be used to establish their mortgage rate? Nah, why should we, they agreed on our terms when signed up.

Tomorrow you'll decide to sell a comprehensive algorithm that estimates students' intellectual skills to the universities to help the selection committee work more efficiently. The algorithm will use previous data, so the race bias, gender bias, and region bias will go up through the roof.

The day after tomorrow you'll release a global product that estimates the risks for insurance companies. It will pessimize people who don't walk enough or eat the wrong food. It will also estimate whether you're worthy of a payout in this certain case if one would consider your purchase history in McDonald's.

The next would be a non-commercial product that would help communities find and promote smart politicians. They wouldn't be famous yet, they are not supported by big parties, but they are good, they just lack the audience. 

…is it clear now?

---

The biggest fail of the IT world: you never know if **this service will fuck up**. Say, you use this app called Whisper for sharing your secrets with people *anonymously*. Teens used it to talk about awkward stuff like sex. Then you find out these idiots never used encryption for messages, and then [they left the database open for the general public for god knows how long](/en/leaks/secret-sharing-app-left-the-db-open-to-everyone-for-an-unknown-time). So some people downloaded everything from there: messages, profiles with ages, geolocation, information on group participation. So if you spread rumors about your ex while sitting on crapper — will, karma's a bitch, get ready. They still have 30M monthly active users, btw.

So you open a site. How can you know if it's gonna blow up in your face in 3 years? You can't for now. Let's see the options.

## What won't work

### Government regulation

… which I don't believe in even for a second. IT corporations spend [tens of millions of dollars on direct lobbying](https://www.cnbc.com/2020/01/22/how-much-google-facebook-amazon-and-apple-spent-on-lobbying-in-2019.html) in the US, [they land on the second place, losing only to pharma industry](https://www.opensecrets.org/federal-lobbying/industries)! Indirect lobbying can be estimated to hundreds of millions of dollars yearly — like when [Amazon decides what city they're going to build a new fulfillment center in](https://www.chicagotribune.com/suburbs/daily-southtown/opinion/ct-sta-slowik-amazon-economic-incentives-st-1108-20201106-22fezrcouvaptlbwrgpvpdysmm-story.html), all the mayors start to wag their ass. [Apple has ~$100B in cash on their accounts](https://www.investopedia.com/stock-analysis/021015/understanding-apples-balance-sheet-appl.aspx). This is enough to buy every single politician in White House and Europarlament that have an attempt to **effectively** regulate IT.

Politicians will pass useless bills like [GDPR](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation), which, let's just be honest after two years of suffering, did absolutely no good at all. Here's a huge secret for you: small startups now spend more money on lawyers, users still give no crap about privacy, and all of us are annoyed with these cookie banners. That's it.

[Politicians will keep on asking Mark Zucerberg](https://www.youtube.com/watch?v=n2H8wx1aBiQ) how Facebook manages to be free, where the hell the money comes from?!

The thread is stretched in time, barely felt in the moment, the topic seems to be completely asexual for a typical voter. IT giants have too much power over minds, they control all of the modern informational mediums. Practice is the criterion of truth, so we should also point out that there has been no effective anti-trust case against an IT company in the previous 20 years, even though there's unfair competition in each and every of the top-10 IT companies. Million-dollar fines in Europe, Congress testimonies in the US — it's just a theater that has no real results.

No, politicians won't make it, unfortunately.

### Open apps and protocols

This whole mess isn't new. We look at [Richard Stallman](https://en.wikipedia.org/wiki/Richard_Stallman) and start to think this weirdo was right the whole time. The thing he told us about since the early 70s became the reality.

Ok, maybe let's try to build absolutely everything using open protocols and open-source software? You remember we used ICQ back in the days? It was built on top of an open protocol called [XMPP](https://ru.wikipedia.org/wiki/XMPP), which allowed anyone to set up their own server or use alternate clients for this protocol. It's true, there was (and still is) an official ICQ app, but there was a bunch of alternatives (Adium, Miranda, QIP, Pidgin, etc.).

What do we have here now? Go ahead and try to make an alternative client to Facebook or WhatsApp they'll ban, sue, undress, and send you to jail — all in just a few days.

I don't believe in this solution. We have a bunch of successful open protocols (email and HTTP, for example; or image formats like JPEG), but they all cover the layer of *transport*, not *service*. We managed to agree that we transfer pages using an open protocol called HTTP in an open format called HTML, but we'll never agree on what a good and honest service is and how it should work with data.

Completely open code with no monetization will not work as well. 3 basic reasons:

1. only capitalism with secured cash flow manages to attract people. Practice is the criterion of truth. Of all the people you know how many of them use [LibreOffice Writer](https://en.wikipedia.org/wiki/LibreOffice_Writer)? and Google Docs or Microsoft Word? I rest my case.
2. only capitalism creates an efficient feedback loop between the users and the developers and has enough motivation to follow users' desires and not their "vision". Product innovation is essentially an endless search and analysis of users' needs and desires from which the developer can create a new original way of doing things. You rarely see it in OSS projects, they mostly just copy the commercial products but with worse UI and fewer features.
3. OSS is limited to fanatics only. Their interest and passion eventually cool down. There's only a handful of consistent, perennial, and qualitative development of an OSS project.

Good software that has MIT or GNU GPL license is a very rare and fantastic beast because mostly all of it is unfriendly software that loses every battle to its closed source competitors ([Linux](https://www.linux.org/), [OSM](https://www.openstreetmap.org/), [Libre Office](https://www.libreoffice.org/), [GIMP](https://www.gimp.org/), etc.).

### Decentralization in blockchain

BUZZWORD BINGO. All the venture capitalists suddenly get Vietnam flashbacks of years 2017-2018, when crazy bums were walking down the streets with fairytales about blockchain and Dapps (decentralized app) saving us. Mad ideas raised huge money on ICOs trying to solve once and for all the problem of [personal data access](https://tykn.tech/), [messaging](https://www.usedust.com/), [storing files](https://storj.io/), [selling your stuff online](https://rarible.com/) and whatnot. 

![Decentralization with blockchain](/img/posts/en_privacy2/decenter.png)

The idea is that all the users should store the state of all the data of all the system, but should be encrypted. This way the community gets to control the service to some extent.

Just no way this is going to work. We'll ignore the fact that most of these projects are a form of scam that has no working prototype, and the founders just took all the money and disappeared on private islands with huge mansions.

No, blockchain won't be a platform for big applications in its current form because of two simple reasons:

1. technological **overhead** of managing and supporting the ledger. We don't want and really can't store zettabytes of new social network data built on top of Ethereum. There will always be thin clients and huge backend hubs. How does it differ from the current situation, really?
2. **the overall complexity** of these services is devastating. They have a very high entry barrier for both the developers and the users, a high chance of making irreversible bugs, a chance of losing keys to the wallets, and all the resulting problems.

### Distributed apps

The idea seems the same, but not really. Let's allow anybody to run their own version of Facebook. One will run their own community with BLM and socialism, the other will have uneducated rednecks, appreciation of billionaires, and [an insulin dose with a market price of $98](https://www.rand.org/news/press/2020/10/06.html). They both will be kings and queens in their respective mini-Facebooks, and only they will have complete access to the data, and the user that wants to see both the communities will think it's a single service.

![Distributed apps](/img/posts/en_privacy2/distributed.png)

There's a few examples out there. [Mastodon](https://en.wikipedia.org/wiki/Mastodon_(software)) tries to replace Twitter, [Diaspora](https://en.wikipedia.org/wiki/Diaspora_(social_network)) is the "equivalent" of Facebook, [Peertube](https://en.wikipedia.org/wiki/PeerTube) — ... have a guess.

You'd need a single visit to these sites to get why it's not going to happen. "It's not you, it's me" would be a huge lie in that case: distributed apps poorly communicate with each other (even [ActivityPub](https://en.wikipedia.org/wiki/ActivityPub) can't fix this), this whole concept just cannot provide the user with a seamless unified experience. It reminds me of my teen years when a friend of mine set up a Counter-Strike server on his PC and we tried to play `de_dust` having a ping of 600. It's impossible to convince users this shitty experience is for their own good.

Besides if this approach will work, centralization will inevitably come. It won't be mandatory — you'll still be able to have a separate node with nazis and flat earth idiots — but it will be inevitable. There will be, say, a node with 1B users (half of what Facebook now has) and 1M nodes with 1k users. Is it really better?

I honestly think that all these ideas on decentralization are good on the transport level: web, BitTorrent, and email are some of the best examples. You can't make a silk purse out of a piece of shit.

## What can work

A few very important disclaimers.

<div class='callout yellow'>

  🤓

  **I'm silly**. I'm less than 30 y.o. I've never launched an ICO, did any heavy drugs, killed a person. My life, business, and technological experience are somewhat limited. I may not know some stuff. Do remember it.

</div>

<div class='callout green'>

  💰

  **Mom, I'm a founder of a start-up**. Yeah, I have a company [that makes products with a focus on privacy](https://safeapps.io/). I've shipped one, it's currently in a public beta. I build these products with all the principles I'm about to tell you. I have a direct financial interest in you beliving me and buying my ~~dietary supplements~~ ~~webinars~~ ~~energy crystals~~ services.

</div>

<div class='callout red'>

  ☠️

  **Corporations no likey**. Imagine you're a usual guy/gal that writes their own small startups, drinking gin, playing PS5 games, and hugging your partner and a micro person in the evening. And that on one frowning Friday they put you — much like in Mortal Combat — against a huge conglomerate of corporations with hundreds of thousands of employees that are many orders of magnitude smarter than you, and they already have billions of dollars of money and hundreds of zettabytes of data. This is a losing battle. Their direct financial interest is the status quo.

</div>

That's it, I warned you that everything down below may be full of shit. Let's roll.

### Apps in which you *don't have to believe*

Strange header, but those fucking blockchain freaks took a beautiful name for it: **trustless app**.

The idea is very simple: tech people should build products in which users wouldn't have to believe, they would just **know** that it's good. It won't take much to make such a service, it just needs to meet the following criteria:

<div class='enum'>

  ![Encryption](/img/posts/privacy2/encr.png)

  **client-side encryption**. Every bit of data should be end-to-end encrypted on the client-side, be it a native app or a browser. This way if some data goes out to a server it won't be able to read it under any circumstances. There should be a bare minimum of unencrypted data: authorization and things that power the basic functions of the app.

  ![*OSS](/img/posts/privacy2/OSS.png)

  **client-side code should be open-sourced**. All the code that makes the encryption and works with decrypted data should be visible and auditable by the community. You can (and by all means should) use the most restrictive license you want, it doesn't matter.

  ![*No app stores](/img/posts/privacy2/no_store.png)

  **no stores distributions**. For now, the problem with stores distribution is that even if you have your client app open-sourced (like [Telegram for iOS](https://github.com/TelegramMessenger/Telegram-iOS), for example) it's impossible to make sure that the open-sourced version of the app is the same as the one they put out in the store. Any bad manipulations can be made to the source code between the version control system and the store itself. Usually, you can compare the [checksums](https://en.wikipedia.org/wiki/Checksum), but stores introduce changes to the binary files that render these checks obsolete.

  ![*No spying](/img/posts/privacy2/lupa.png)

  **no behavioral trackers**. It's a usual practice to use some product like Google Analytics and send custom events that are full of behavioral data: what the user does, where the user clicks, what data types. Unacceptable, obviously. You can use visit counters because anyways it's impossible to guarantee the backend does not do it (by reading access logs or counting API requests); but don't track my behavior, please.

  ![*No ads](/img/posts/privacy2/centr_aaddss.png)

  **no centralized personalized ad SDKs.** So you can't use Google's banner system. It limits the ad business model drastically, but we may have some innovations in the field in the future (decentralized model? banner ads that limit data collection? we'll see).

  ![Allow full export](/img/posts/privacy2/export.png)

  **export of all the data**. One day you'll find a good product, and you'll be happy with it, you'll trust all your secrets to it, and then you'll find out that this rat bastard sleeps with your… Woah, that's a story for another time. Where am I? Right, then this product will drastically change, remove all the features you use, and introduce those you don't like. But what can you really do if you've put a bunch of data in it? You need it. If only they allowed complete export.

  ![Community](/img/posts/privacy2/forum.png)

  **open community**. Most people do not know shit about encryption. If you only look for this keyword you ought to believe in Whatsapp, which you shouldn't. The open community won't allow the company to silence the voices of those who don't agree the app is secure and will allow the "usual people" to make sure they don't pick the wrong product.

</div>

I'm quite sure all these criteria combined can minimize your risks. [Drop me a line if I'm wrong](mailto:dkzlv@protonmail.com).

But the most important thing is that for the majority of all the services in the world (messengers, social networks, search engines, note-taking apps, blogs, internet media, task managers, taxi services, online theaters, etc.) all these requirements **won't disrupt the user experience** in any way. It will also allow the company to earn the money — which ultimately means the company can last longer and innovate just as much. These are the two main reasons why there are at least some changes it will work for the users.

![*Safe Money](/img/posts/en_privacy2/promo.png)

Shameless plug.

For example, I make a [finance tracker](https://safeapps.io/). It meets all the requirements: the server can't read anything because all the data is encrypted on the client-side; [the client app is open sourced](https://github.com/safeapps-io/money-client); we only have a web app, no native apps, and stores; no behavioral trackers; no ads or external scripts; you can export everything; [we have a dead and empty but fully functioning forum](https://forum.safeapps.io/).

The fun part is that the app is **not worse than the alternatives**. It can do all the same stuff as [Mint.com](https://www.mint.com/), [Toshl](https://toshl.com/), [Spendee](https://www.spendee.com/) or [YNAB](https://www.youneedabudget.com/) if you compare the features. They, in turn, do not comply with a single rule of the above. At all. But you will find those funny "security" buzzwords, like, "military-grade encryption", "ISO 27001" and such stuff, haha.

Long story short, I'm good, buy my apps, subscribe to my newsletter, and share it with your friends.

<div class="email-collector">Ok, you may not buy my products. I'm no huckster. But do subcribe.</div>

If you think there are no such services at all and I made it all up — well, it's not completely true, there are such services, but they are very rare. Here's another reason to promote them as much as it's possible. I'll make a public database with them in the future.

### Mass request

But why would the tech people do such apps? If you remove most of these requirements it will be easier, and the app will earn more money, obviously.

It's all because of you, my sweethearts. You need to shift the market. I think very highly of my readers, I think you all are young, smart, beautiful, wear cool clothes, and are not dumb fucks who ignore reality. You're the first people who should sacrifice short-term convenience in favor of privacy and long-term goals. You need to understand that if you won't do it, we're screwed, fucked, we'll die and rot in hell. Figuratively speaking.

When you will take responsibility for the long-term future of you and your descendants, your task would be to aggressively agitate in favor of preserving privacy.

If you don't train, carefully pick your diet, drink less alcohol, you'll probably die younger. If you won't eat vitamins and care about your health the result will be the same.

The results of your privacy ignorance are kind of different, *it's not physical destruction*, but I don't think you want to live in a world where the corporations have straight-up won.

Your actions are simple enough:

1. **limit your unconscious digital trail**. You can find [the tutorial in the previous chapter of this post](/en/how-they-harvest-data) (block trackers, use good DNS, etc.)
2. **limit your conscious digital trail**
    - start paying attention to whether the app meets basic privacy requirements. Try to evolve your critical thinking. Don't install each app you find entertaining, it's a shitty attitude, really. Don't use free products. ~Floor~ Free is lava. There's nothing free in the world, let's just say that you don't pay with the money.
        ![*You don't pay with the money](/img/posts/privacy2/you_dont_pay_with_money.png)
    - limit your use of offline loyalty programs unless you see there's no real way for them to abuse your data. For example, you can use those in the apparel store — they'll just bombard you with SMS and emails about sales; don't use those with groceries and drugstores — this has too much value to you. It's one of those cases when they cut a very small part of the price but you agree to pass some very valuable knowledge to them.
3. **agitate your friends**. Become the psycho that starts the talk about evil corporations and weak Antitrust Divisions each Friday in the CLubhouse, so everyone thinks you're a fucking weirdo they should avoid at any cost as if you're a bum covered in urine. Sooner or later you'll find your audience that will start thinking the same way. It turned out, that if you can talk straight people listen and start to analyze your words.
4. **use password managers**. For christ's sake don't reuse the passwords between services. Even children know it nowadays. I can recommend [Bitwarden](https://bitwarden.com/), they are rather cheap and meet most of the requirements above (like open source).

<div class='share'>

  Spread the word! There's no hypocrisy in using social media *for the greater good*!
  
</div>

## Is it enough though?

In a fantasy world where everybody suddenly listens to me, people start caring about privacy and startup founders start doing new products for these people — well, there's a small chance, yeah. A small one, because corporations won't give up so easily.

It's very simple to only implement a part of the measures and ignore the rest, which renders it all meaningless. I think it will be an escape hatch for all these corporations. Telegram is a great example of it. They have [the client code open-sourced completely](https://github.com/TelegramMessenger/Telegram-iOS), but the messages are not encrypted in any way in usual chats, only in the secret ones. So the backend stores the majority of the messages in plaintext. And they don't open source the backend code. So they meet 3 out of 7 requirements (open sourced client code, no trackers, and now ads — for now), but it in no way means it's secure. This messenger's security stands on the honest word of Pavel Durov. Do you believe him? If you do, frankly, you didn't really read this series of posts.

Truth be told, I cautiously think we're screwed and we can't fix anything. Some hellish technogenic dystopia will inevitably unfold before our eyes in the next 20-30 years. There's a lot of references in science fiction books, don't deny yourself the huge pleasure of reading a few good cyberpunk books out there. Me… I just cover my trails, hope I can turn a few of my readers into my religion, buy popcorn, set my tinfoil hat straight, and wait for a magnificent spectacle in the upcoming decades.

Live long and prosper, earthlings! 🖖
