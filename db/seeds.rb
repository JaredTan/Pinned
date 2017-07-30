# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all

demo_user = User.create!(
  username: 'DemoUser',
  password:'pinneddemo',
  description: 'The awesomest demo user ever!',
  image_url: 'http://res.cloudinary.com/jaredtan/image/upload/v1500762701/corgi8_w6xf9r.jpg'
)
user2 = User.create!(
  username: 'Jared',
  password:'password',
  description: 'Hello world!',
  image_url: 'http://res.cloudinary.com/jaredtan/image/upload/v1500875447/djghiggm9js7sh0eleks.jpg'
)
user3 = User.create!(
  username: 'JavascriptMaster',
  password: 'justkidding',
  description: 'I love curly braces',
  image_url: 'http://res.cloudinary.com/jaredtan/image/upload/v1500969184/display_pic_nwmrpn.png'
)
user4 = User.create!(
  username: 'Munyo',
  password:'coffeemaster',
  description: 'Best project mentor ever.',
  image_url: 'http://res.cloudinary.com/jaredtan/image/upload/v1500912750/g0lfv1wmkkbdninamy6i.jpg'
)

user5 = User.create!(
  username: 'Keith',
  password:'keithwong',
  description: "Hi, I'm Keith!",
  image_url: 'https://res.cloudinary.com/jaredtan/image/upload/v1501283874/keith_yiqoti.jpg'
)

user6 = User.create!(
  username: 'Greg',
  password:'gregorypark',
  description: "Everything in moderation.",
  image_url: 'https://res.cloudinary.com/jaredtan/image/upload/v1501027248/h7e3ncu4dfoynbitoxe6.png'
)

user7 = User.create!(
  username: 'Janet',
  password:'janetlee',
  description: "Hi, I like arrays.",
  image_url: 'https://res.cloudinary.com/jaredtan/image/upload/v1501283913/janet_be3gts.jpg'
)

user8 = User.create!(
  username: 'Evelyn',
  password:'evelynlee',
  description: "Always classy, never sassy.",
  image_url: 'https://res.cloudinary.com/jaredtan/image/upload/v1501283813/evelyn_ewb5vl.jpg'
)

Pin.destroy_all

pin1 = Pin.create!(
  title: "11 Corgis On Instagram Who Aren't Famous — Yet",
  description: "For animal people. Pass it on.",
  url: "https://www.thedodo.com/instagram-corgis-1722119201.html?utm_source=pinterest&utm_medium=social&utm_campaign=dodopin&crlt.pid=camp.bx7cREk8znEc",
  image_url: "http://res.cloudinary.com/jaredtan/image/upload/v1500762701/corgi1_tocwnv.jpg",
  user_id: user2.id
)

pin2 = Pin.create!(
  title: "OOP",
  description: "Principles of OOP",
  url: "http://www.roldie.com/blog/the-7-principles-of-object-oriented-programming",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1500586411/OOP_qrzasx.jpg",
  user_id: demo_user.id
)


pin3 = Pin.create!(
  title: "Brain Hemispheres",
  description: "Brain lateralization, where the brain has special functions (logic on left, creativity on right).",
  url: "http://elearninginfographics.com/teach-yourself-code/",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1500585150/il_570xN.882503178_687n_jsojpo.jpg",
  user_id: demo_user.id
)

pin4 = Pin.create!(
  title: "Snow day",
  description: "FLUFFY AND FROSTY!",
  url: "https://hiveminer.com/Tags/eyes,silly/Timeline",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1500762701/corgi10_emsd0w.jpg",
  user_id: user2.id
)

pin5 = Pin.create!(
  title: "SQL Joins",
  description: "Summaries of the main types of joins",
  url: "http://sql.sh/2401-sql-join-infographie",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1500586411/sqlJoins_d724sd.jpg",
  user_id: demo_user.id
)

pin6 = Pin.create!(
  title: "Application Programming Interface",
  description: "What is the API?",
  url: "http://www.govtech.com/applications/Whats-an-API-and-Why-Do-You-Need-One.html",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1500586413/api_p5mgmr.jpg",
  user_id: demo_user.id
)

pin7 = Pin.create!(
  title: "Counting With Corgis",
  description: "You can never have too many corgis.",
  url: "http://themetapicture.com/just-counting-with-corgis/",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1500762701/corgi5_cfmdqz.jpg",
  user_id: demo_user.id
)

pin8 = Pin.create!(
  title: "HTML5",
  description: "HTML Cheatsheet",
  url: "https://theultralinx.com/2012/11/html-5-cheatsheet/",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1500586411/html5_adljmq.jpg",
  user_id: demo_user.id
)

pin9 = Pin.create!(
  title: "Stairway of Corgus",
  description: "Led Zeppelin would be proud.",
  url: "https://www.homeandwild.com/products/mini-corgi-planter-pots",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1500762701/corgi6_dty40w.png",
  user_id: user3.id
)

pin10 = Pin.create!(
  title: "Linux",
  description: "Summary of Linux commands",
  url: "http://imgur.com/gallery/yIdNW",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1500586410/linux_ag7wud.jpg",
  user_id: demo_user.id
)

pin11 = Pin.create!(
  title: "BEACH DAY!",
  description: "SO MUCH SAND SO MUCH SUN!",
  url: "https://www.homeandwild.com/products/mini-corgi-planter-pots",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1500762700/corgi7_kcrig9.jpg",
  user_id: user2.id
)

pin12 = Pin.create!(
  title: "Wizard Corgi",
  description: "Housemaster of Gryffindor",
  url: "http://sneakersthecorgi.tumblr.com/post/134495079447/the-world-could-use-a-little-magic-corgipotter",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1500762701/corgi8_w6xf9r.jpg",
  user_id: demo_user.id
)

pin13 = Pin.create!(
  title: "Chasing the sunset.",
  description: "I can jump so high!",
  url: "https://s-media-cache-ak0.pinimg.com/originals/1e/9c/ff/1e9cffd4989a2a49d8e8ba0a656e6a20.jpg",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1500762700/corgi9_qcnat3.jpg",
  user_id: demo_user.id
)

pin14 = Pin.create!(
  title: "Programming",
  description: "The history of code",
  url: "http://www.smashingmagazine.com/2010/06/06/designing-the-world-of-programming-infographic/",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1500586411/World_of_programming_zxuvm7.jpg",
  user_id: user3.id
)

pin15 = Pin.create!(
title: "Corgi Pupper",
description: "Hi human!",
url: "http://corgisofig.tumblr.com/post/154815238613",
image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1500762700/corgi2_dg6lfz.jpg",
user_id: demo_user.id
)
pin16 = Pin.create!(
  title: "Corgu",
  description: "Let's play!",
  url: "http://www.shein.com/?url_from=pin20151009",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1500762700/corgi3_dirxff.jpg",
  user_id: user4.id
)

pin17 = Pin.create!(
  title: "The anatomy of a Corgi",
  description: "Much science, very doggo.",
  url: "https://m.imgur.com/gallery/3LPiIut",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1500762700/corgi4_jar3pi.jpg",
  user_id: user3.id
)

pin18 = Pin.create!(
title: "Piano Chords",
description: "Cheatsheet for piano!",
url: "http://takelessons.com/blog/jazz-piano-basics",
image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1501279521/music1_b0g99s.jpg",
user_id: user4.id
)
pin19 = Pin.create!(
  title: "The Ultimate Road Trip Playlist",
  description: "Road trips are the best kind of trip.",
  url: "http://www.popsugar.com/smart-living/Road-Trip-Playlist-40155882/?crlt.pid=camp.wd94kg4AIxCD",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1501279609/music2_jm9ukj.jpg",
  user_id: user6.id
)
pin20 = Pin.create!(
  title: "Music Note",
  description: "Treble~",
  url: "http://adevarul.ro/sanatate/minte-sanatoasa/10-efecte-magice-muzicii-probate-stiintific-1_53ab05e80d133766a8e51a0e/index.html",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1501279683/music3_rgq24g.jpg",
  user_id: user8.id
)
pin21 = Pin.create!(
  title: "9 Types of Tea",
  description: "Handpicked guide for tea.",
  url: "http://www.averiecooks.com/2016/08/ham-cheese-sliders.html/print",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1501279749/tea1_od5sft.jpg",
  user_id: user7.id
)

pin22 = Pin.create!(
  title: "Is it tea time?",
  description: "It's always tea time!",
  url: "http://www.adagio.com/list/best_sellers.html",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1501279813/tea2_fvptvb.jpg",
  user_id: user7.id
)

pin23 = Pin.create!(
title: "Health Benefits of Tea.",
description: "A mug of herbal tea a day may keep the doctor away!",
url: "http://www.treehugger.com/health/infographic-shows-health-benefits-teas-and-tisanes.html",
image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1501279851/tea3_tm22ex.jpg",
user_id: user2.id
)

pin24 = Pin.create!(
  title: "Ham and Cheese Sliders",
  description: "Savory goodness.",
  url: "http://www.adagio.com/list/best_sellers.html",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1501280023/food1_osgvh8.jpg",
  user_id: user8.id
)
pin25 = Pin.create!(
  title: "Shrimp and Gnocchi",
  description: "Gnocchi tossed with tender ship and cream sauce.",
  url: "http://damndelicious.net/2016/12/17/shrimp-and-gnocchi-with-garlic-parmesan-cream-sauce/",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1501280086/food2_qhbym8.jpg",
  user_id: user8.id
)

pin26 = Pin.create!(
  title: "Garlic Butter Pizza Pull Apart Bread",
  description: "Mmm, yes please.",
  url: "http://cafedelites.com/2016/11/28/garlic-butter-pizza-pull-apart-bread/",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1501280450/food3_irodyg.jpg",
  user_id: user5.id
)

pin27 = Pin.create!(
  title: "Modern Bathroom",
  description: "I wouldn't mind a trip to the restroom here.",
  url: "http://www.notey.com/@desiretoinspire_unofficial/external/9918819/a-rustic-and-modern-bathroom.html?utm_content=buffer413e6&utm_medium=social&utm_source=pinterest.com&utm_campaign=buffer",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1501280518/home1_bpya8j.jpg",
  user_id: user4.id
)

pin28 = Pin.create!(
  title: "Loft",
  description: "Prime coding environment.",
  url: "http://www.euamodecoracao.com/lofts-decorados/",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1501280607/home2_ivmlgj.jpg",
  user_id: demo_user.id
)

pin29 = Pin.create!(
  title: "Porch Swing",
  description: "So relaxing.",
  url: "https://www.futuristarchitecture.com/16126-porch-swing.html",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1501280704/home3_duypni.jpg",
  user_id: user6.id
)

pin30 = Pin.create!(
  title: "Boo!",
  description: "FLUFF",
  url: "http://www.savvysugar.com/Things-Do-Before-You-Die-31147739#photo-33387007",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1501280880/cute1_lp25dh.jpg",
  user_id: user4.id
)
pin31 = Pin.create!(
  title: "Panda",
  description: "Nom nom nom bamboo nom.",
  url: "http://postris.com/list/105/23-incredibly-cute-baby-animals-that-will-melt-your-heart/",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1501280941/cute2_iexkxp.jpg",
  user_id: user2.id
)
pin32 = Pin.create!(
  title: "Bunny and corn",
  description: "Is it food or is it a foam roller?",
  url: "http://ehknz.tumblr.com/post/96305189551",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1501281006/cute3_m5jwbd.jpg",
  user_id: user8.id
)

pin33 = Pin.create!(
  title: "Don't stop",
  description: "Until you're proud.",
  url: "http://momspark.net/17-inspirational-quotes-to-help-you-rock-2017/?utm_source=coolmompicks.com&utm_medium=referral&utm_campaign=pubexchange_facebook",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1501281082/inspire1_knjdwc.jpg",
  user_id: user5.id
)
pin34 = Pin.create!(
  title: "Fearless",
  description: "From Harry Potter!",
  url: "http://finest10.com/2016/09/30-inspirational-harry-potter-quotes/",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1501281139/inspire2_eaxwgz.jpg",
  user_id: user7.id
)
pin35 = Pin.create!(
  title: "Make it happen.",
  description: "Prove them wrong.",
  url: "http://lifestyleofyourdesign.com/47-of-the-best-inspirational-quotes/",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1501281218/inspire3_zevdh4.jpg",
  user_id: user8.id
)
pin36 = Pin.create!(
  title: "French Cheese Puffs",
  description: "So puffy.",
  url: "http://rasamalaysia.com/cheese-puffs-gougeres/",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1501281300/cheese1_yy2evj.jpg",
  user_id: user7.id
)
pin37 = Pin.create!(
  title: "Perfect charcuterie.",
  description: "Cheese platters are beautiful.",
  url: "http://lajollamom.com/how-to-make-charcuterie-cheese-board/",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1501281349/cheese2_qnhzlh.jpg",
  user_id: user2.id
)
pin38 = Pin.create!(
  title: "Philly Cheese Steak",
  description: "Melting goodness.",
  url: "http://therecipecritic.com/2017/05/philly-cheese-steak-cheesy-bread/",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1501281432/cheese3_wj56yy.jpg",
  user_id: user7.id
)
pin39 = Pin.create!(
  title: "Counting in binary",
  description: "1010101101011111",
  url: "https://chummytees.com/products/counting-in-binary-t-shirt-hoodie-tank-top",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1501281516/array1_etrk6x.jpg",
  user_id: user4.id
)
pin40 = Pin.create!(
  title: "Data Structures",
  description: "Arrays are #1",
  url: "https://s-media-cache-ak0.pinimg.com/originals/57/09/0d/57090d3701a9bb5a89d894c22db86e81.jpg",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1501281589/array2_x3amhg.jpg",
  user_id: user7.id
)
pin41 = Pin.create!(
  title: "Algorithms",
  description: "As long as they have arrays",
  url: "https://www.quora.com/topic/Data-Structures",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1501281662/array3_dl7irw.jpg",
  user_id: user7.id
)
pin42 = Pin.create!(
  title: "Amazing Outfit Ideas",
  description: "So chic",
  url: "https://streetstyle.rocks/street-style/40-amazing-outfit-ideas-that-arent-boring.html",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1501281735/fashion1_uudo8j.jpg",
  user_id: demo_user.id
)
pin43 = Pin.create!(
  title: "Adidas kicks",
  description: "Fresh.",
  url: "http://www.theunstitchd.com/footwear/5-must-have-shoes-in-a-mans-closet//",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1501281924/fashion3_yrmau0.jpg",
  user_id: user6.id
)
pin45 = Pin.create!(
  title: "Choose your weapon",
  description: "Gameboy Color",
  url: "http://www.ebaumsworld.com/pictures/view/82463709/",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1501281975/game1_gau2bh.jpg",
  user_id: user7.id
)
pin46 = Pin.create!(
  title: "Dark Chocolate Cake",
  description: "Tasty",
  url: "http://cakescottage.com/2016/12/28/dark-chocolate-cake/",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1501282087/chocolate1_xvo3zc.jpg",
  user_id: user7.id
)
pin47 = Pin.create!(
  title: "Coffee Brewing",
  description: "Artistic Perfection",
  url: "http://localmilkblog.com/2015/12/coffee-brewing-how-to-pour-over-french-press.html?crlt.pid=camp.ZDGifQ7JvDZV",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1501282135/coffee1_ckaq3o.jpg",
  user_id: user2.id
)
pin48 = Pin.create!(
  title: "Style",
  description: "Call me GQ",
  url: "http://retrodrive.tumblr.com/post/71671475448/casual-male-fashion-blog",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1501282191/gq1_fngnsp.jpg",
  user_id: user8.id
)
pin49 = Pin.create!(
  title: "Messi and Ronaldo",
  description: "Legends",
  url: "https://scontent-gru2-1.xx.fbcdn.net/v/t1.0-9/15267554_1613307452309220_7540920180603245021_n.jpg?oh=4fe200b8c7fe1e1e6178473f5e2b5d49&oe=58F92AFA",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1501282242/soccer1_yqrry3.jpg",
  user_id: user2.id
)
pin50 = Pin.create!(
  title: "Computer Ports",
  description: "But where are the curly braces?",
  url: "http://removeandreplace.com/2013/04/13/computer-ports-learn-the-name-and-location-of-the-connections-on-your-desktop-computer-or-laptop/",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1501282284/computer1_jk78ss.jpg",
  user_id: user3.id
)
pin51 = Pin.create!(
  title: "Golf Ball",
  description: "Just don't lose me!",
  url: "http://www.rockbottomgolf.com/?utm_source=pinterest&utm_medium=social&utm_campaign=golf%20humor",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1501282333/golf1_p8i8gj.jpg",
  user_id: user2.id
)
pin52 = Pin.create!(
  title: "Golf Course",
  description: "Such an amazing view.",
  url: "http://www.break80today.com/products/how-to-break-80-maximum-distance-dvd-w-video/",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1501282377/golf2_lnpwex.jpg",
  user_id: user2.id
)
pin53 = Pin.create!(
  title: "Basketball",
  description: "Alley-oooooop",
  url: "https://s-media-cache-ak0.pinimg.com/originals/8c/47/90/8c4790ce281a8b631f5041288a06992b.jpg",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1501282425/basketball1_ti43dc.jpg",
  user_id: user6.id
)
pin54 = Pin.create!(
  title: "Kitty",
  description: "Meowww!",
  url: "http://www.buzzfeed.com/allyson/8-cats-that-are-prettier-than-most-humans-cepf?sub=2462617_1420609&s=mobile#1420609",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1501282476/cat1_fnlsim.jpg",
  user_id: user7.id
)
pin55 = Pin.create!(
  title: "Guitar",
  description: "Gibson Les Paul",
  url: "http://frettedchordophones.tumblr.com/post/154434356654/glorifiedguitars-gibson-custom-shop-bella-voce",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1501282534/guitar1_f18fc2.jpg",
  user_id: user5.id
)
pin56 = Pin.create!(
  title: "Energy",
  description: "Just like asteroids written in javascript.",
  url: "https://magic.piktochart.com/output/3056886-untitled-infographic",
  image_url: "https://res.cloudinary.com/jaredtan/image/upload/v1501282591/science1_ub7mgy.jpg",
  user_id: user8.id
)

Board.destroy_all

board1 = Board.create!(
  title: "Corgis",
  description: "The cutest and fluffiest doggos ever!",
  user_id: demo_user.id
)

board2 = Board.create!(
  title: "Programming",
  description: "Because code is life",
  user_id: demo_user.id
)

board3 = Board.create!(
  title: "Music",
  description: "Relax and vibe to some catchy tunes.",
  user_id: demo_user.id
)

board4 = Board.create!(
  title: "Doggos",
  description: "Mostly corgis inside here!",
  user_id: user2.id
)

board5 = Board.create!(
  title: "Tea",
  description: "Sea breeze and tea leaves",
  user_id: demo_user.id
)

board6 = Board.create!(
  title: "Food",
  description: "Live to Eat > Eat to Live",
  user_id: user8.id
)

board7 = Board.create!(
  title: "Cute Stuff",
  description: "Pusheen was here",
  user_id: user8.id
)

board8 = Board.create!(
  title: "Inspirational Quotes",
  description: "1 Year = 365 Opportunities",
  user_id: user8.id
)

board9 = Board.create!(
  title: "Cheese",
  description: "Cheese makes the world go 'round",
  user_id: user7.id
)

board10 = Board.create!(
  title: "Arrays",
  description: "Arr-rays are the best data structures",
  user_id: user7.id
)

board11 = Board.create!(
  title: "Fashion",
  description: "My middle name is g l a m o u r o u s",
  user_id: user7.id
)

board12 = Board.create!(
  title: "Gaming",
  description: "I was born diamond 5",
  user_id: user6.id
)

board13 = Board.create!(
  title: "Home Design",
  description: "It's like CSS but for a house",
  user_id: demo_user.id
)

board14 = Board.create!(
  title: "Culinary",
  description: "Gordon Ramsay is my mentee",
  user_id: user6.id
)

board15 = Board.create!(
  title: "Soccer",
  description: "The world's sport.",
  user_id: user6.id
)

board16 = Board.create!(
  title: "Basketball",
  description: "Ball is life",
  user_id: user5.id
)

board17 = Board.create!(
  title: "Design",
  description: "The world is a palette",
  user_id: user5.id
)

board18 = Board.create!(
  title: "Men's Style",
  description: "GQ",
  user_id: user5.id
)

board19 = Board.create!(
  title: "Chocolate",
  description: "Dark, sweet, and melting goodness.",
  user_id: user4.id
)

board20 = Board.create!(
  title: "Coffee",
  description: "Happiness is a cup of coffee and a sunny day",
  user_id: user4.id
)

board21 = Board.create!(
  title: "Cats",
  description: "Pusheen is my spirit animal",
  user_id: user4.id
)

board21 = Board.create!(
  title: "Programming",
  description: "101001111010101010010011001",
  user_id: user3.id
)

board22 = Board.create!(
  title: "Computers",
  description: "All the tech",
  user_id: user3.id
)

board23 = Board.create!(
  title: "Golf",
  description: "Nothing like a nice day out on the course",
  user_id: user2.id
)

board24 = Board.create!(
  title: "Guitar",
  description: "Jams on jams",
  user_id: user2.id
)

board25 = Board.create!(
  title: "Science",
  description: "The world is a laboratory",
  user_id: user2.id
)



Pinning.destroy_all

pinning1 = Pinning.create!(
  board_id: board1.id,
  pin_id: pin1.id
)

pinning2 = Pinning.create!(
  board_id: board1.id,
  pin_id: pin4.id
)

pinning3 = Pinning.create!(
  board_id: board1.id,
  pin_id: pin7.id
)

pinning4 = Pinning.create!(
  board_id: board1.id,
  pin_id: pin9.id
)

pinning5 = Pinning.create!(
  board_id: board1.id,
  pin_id: pin18.id
)

pinning6 = Pinning.create!(
  board_id: board2.id,
  pin_id: pin2.id
)

pinning7 = Pinning.create!(
  board_id: board2.id,
  pin_id: pin3.id
)

pinning8 = Pinning.create!(
  board_id: board2.id,
  pin_id: pin5.id
)

pinning9 = Pinning.create!(
  board_id: board2.id,
  pin_id: pin6.id
)

pinning10 = Pinning.create!(
  board_id: board2.id,
  pin_id: pin8.id
)

pinning11 = Pinning.create!(
  board_id: board2.id,
  pin_id: pin14.id
)

pinning12 = Pinning.create!(
  board_id: board2.id,
  pin_id: pin15.id
)

pinning13 = Pinning.create!(
  board_id: board4.id,
  pin_id: pin1.id
)

pinning14 = Pinning.create!(
  board_id: board4.id,
  pin_id: pin4.id
)

pinning15 = Pinning.create!(
  board_id: board4.id,
  pin_id: pin7.id
)

pinning16 = Pinning.create!(
  board_id: board4.id,
  pin_id: pin9.id
)

pinning17 = Pinning.create!(
  board_id: board4.id,
  pin_id: pin11.id
)

pinning18 = Pinning.create!(
  board_id: board4.id,
  pin_id: pin12.id
)

pinning19 = Pinning.create!(
  board_id: board4.id,
  pin_id: pin13.id
)

pinning20 = Pinning.create!(
  board_id: board4.id,
  pin_id: pin14.id
)

pinning21 = Pinning.create!(
  board_id: board4.id,
  pin_id: pin18.id
)
pinning22 = Pinning.create!(
  board_id: board3.id,
  pin_id: pin55.id
)
pinning23 = Pinning.create!(
  board_id: board3.id,
  pin_id: pin20.id
)
pinning24 = Pinning.create!(
  board_id: board3.id,
  pin_id: pin19.id
)
pinning25 = Pinning.create!(
  board_id: board3.id,
  pin_id: pin18.id
)
pinning26 = Pinning.create!(
  board_id: board5.id,
  pin_id: pin21.id
)
pinning27 = Pinning.create!(
  board_id: board5.id,
  pin_id: pin22.id
)
pinning28 = Pinning.create!(
  board_id: board5.id,
  pin_id: pin23.id
)
pinning29 = Pinning.create!(
  board_id: board6.id,
  pin_id: pin24.id
)
pinning30 = Pinning.create!(
  board_id: board6.id,
  pin_id: pin25.id
)
pinning31 = Pinning.create!(
  board_id: board6.id,
  pin_id: pin26.id
)
pinning32 = Pinning.create!(
  board_id: board13.id,
  pin_id: pin27.id
)
pinning33 = Pinning.create!(
  board_id: board13.id,
  pin_id: pin28.id
)
pinning34 = Pinning.create!(
  board_id: board13.id,
  pin_id: pin29.id
)
pinning35 = Pinning.create!(
  board_id: board7.id,
  pin_id: pin30.id
)
pinning36 = Pinning.create!(
  board_id: board7.id,
  pin_id: pin31.id
)
pinning37 = Pinning.create!(
  board_id: board7.id,
  pin_id: pin32.id
)
pinning38 = Pinning.create!(
  board_id: board8.id,
  pin_id: pin33.id
)
pinning39 = Pinning.create!(
  board_id: board8.id,
  pin_id: pin34.id
)
pinning40 = Pinning.create!(
  board_id: board8.id,
  pin_id: pin35.id
)
pinning41 = Pinning.create!(
  board_id: board9.id,
  pin_id: pin36.id
)
pinning42 = Pinning.create!(
  board_id: board9.id,
  pin_id: pin37.id
)
pinning43 = Pinning.create!(
  board_id: board9.id,
  pin_id: pin38.id
)
pinning44 = Pinning.create!(
  board_id: board10.id,
  pin_id: pin39.id
)
pinning45 = Pinning.create!(
  board_id: board10.id,
  pin_id: pin40.id
)
pinning46 = Pinning.create!(
  board_id: board10.id,
  pin_id: pin41.id
)
pinning47 = Pinning.create!(
  board_id: board11.id,
  pin_id: pin42.id
)
pinning48 = Pinning.create!(
  board_id: board11.id,
  pin_id: pin43.id
)
pinning49 = Pinning.create!(
  board_id: board12.id,
  pin_id: pin45.id
)
pinning50 = Pinning.create!(
  board_id: board14.id,
  pin_id: pin46.id
)
pinning51 = Pinning.create!(
  board_id: board15.id,
  pin_id: pin49.id
)
pinning52 = Pinning.create!(
  board_id: board16.id,
  pin_id: pin53.id
)
pinning53 = Pinning.create!(
  board_id: board20.id,
  pin_id: pin47.id
)
pinning54 = Pinning.create!(
  board_id: board21.id,
  pin_id: pin54.id
)
pinning55 = Pinning.create!(
  board_id: board17.id,
  pin_id: pin28.id
)
pinning56 = Pinning.create!(
  board_id: board18.id,
  pin_id: pin48.id
)
pinning57 = Pinning.create!(
  board_id: board22.id,
  pin_id: pin50.id
)
pinning58 = Pinning.create!(
  board_id: board23.id,
  pin_id: pin51.id
)
pinning59 = Pinning.create!(
  board_id: board25.id,
  pin_id: pin56.id
)
pinning60 = Pinning.create!(
  board_id: board24.id,
  pin_id: pin55.id
)


Following.destroy_all

following1 = Following.create!(
  followee_id: user2.id,
  follower_id: demo_user.id
)

following2 = Following.create!(
  followee_id: user3.id,
  follower_id: demo_user.id
)

following3 = Following.create!(
  followee_id: user4.id,
  follower_id: demo_user.id
)

following4 = Following.create!(
  followee_id: demo_user.id,
  follower_id: user2.id
)

following5 = Following.create!(
  followee_id: demo_user.id,
  follower_id: user3.id
)

following6 = Following.create!(
  followee_id: user3.id,
  follower_id: user2.id
)

following7 = Following.create!(
  followee_id: user3.id,
  follower_id: user4.id
)

following8 = Following.create!(
  followee_id: user3.id,
  follower_id: user5.id
)

following9 = Following.create!(
  followee_id: user3.id,
  follower_id: user6.id
)

following10 = Following.create!(
  followee_id: user3.id,
  follower_id: user7.id
)

following11 = Following.create!(
  followee_id: user3.id,
  follower_id: user8.id
)

following12 = Following.create!(
  followee_id: user4.id,
  follower_id: user5.id
)

following13 = Following.create!(
  followee_id: user4.id,
  follower_id: user6.id
)
following14 = Following.create!(
  followee_id: user4.id,
  follower_id: user7.id
)
following15 = Following.create!(
  followee_id: user4.id,
  follower_id: user8.id
)
following16 = Following.create!(
  followee_id: user5.id,
  follower_id: user6.id
)
following17 = Following.create!(
  followee_id: user5.id,
  follower_id: user7.id
)
following18 = Following.create!(
  followee_id: user5.id,
  follower_id: user8.id
)
following19 = Following.create!(
  followee_id: user5.id,
  follower_id: user4.id
)
following20 = Following.create!(
  followee_id: user5.id,
  follower_id: demo_user.id
)
following23 = Following.create!(
  followee_id: user5.id,
  follower_id: user3.id
)

following25 = Following.create!(
  followee_id: user5.id,
  follower_id: user2.id
)
following26 = Following.create!(
  followee_id: user6.id,
  follower_id: user3.id
)
following27 = Following.create!(
  followee_id: user6.id,
  follower_id: user5.id
)
following28 = Following.create!(
  followee_id: user6.id,
  follower_id: user7.id
)
following29 = Following.create!(
  followee_id: user6.id,
  follower_id: user8.id
)
following30 = Following.create!(
  followee_id: user6.id,
  follower_id: demo_user.id
)

following32 = Following.create!(
  followee_id: user7.id,
  follower_id: user2.id
)
following33 = Following.create!(
  followee_id: user7.id,
  follower_id: user3.id
)
following34 = Following.create!(
  followee_id: user7.id,
  follower_id: demo_user.id
)
following35 = Following.create!(
  followee_id: user7.id,
  follower_id: user4.id
)
following36 = Following.create!(
  followee_id: user7.id,
  follower_id: user6.id
)
following37 = Following.create!(
  followee_id: user7.id,
  follower_id: user8.id
)
following38 = Following.create!(
  followee_id: user8.id,
  follower_id: demo_user.id
)
following39 = Following.create!(
  followee_id: user8.id,
  follower_id: user2.id
)
following40 = Following.create!(
  followee_id: user8.id,
  follower_id: user3.id
)
following41 = Following.create!(
  followee_id: user8.id,
  follower_id: user4.id
)
following42 = Following.create!(
  followee_id: user8.id,
  follower_id: user5.id
)
following43 = Following.create!(
  followee_id: user8.id,
  follower_id: user6.id
)
following44 = Following.create!(
  followee_id: user8.id,
  follower_id: user7.id
)
following45 = Following.create!(
  followee_id: demo_user.id,
  follower_id: user8.id
)
following46 = Following.create!(
  followee_id: demo_user.id,
  follower_id: user7.id
)
following47= Following.create!(
  followee_id: demo_user.id,
  follower_id: user6.id
)
following48 = Following.create!(
  followee_id: demo_user.id,
  follower_id: user5.id
)
following49 = Following.create!(
  followee_id: user2.id,
  follower_id: user8.id
)
following50 = Following.create!(
  followee_id: user2.id,
  follower_id: user7.id
)
following51 = Following.create!(
  followee_id: user2.id,
  follower_id: user5.id
)
