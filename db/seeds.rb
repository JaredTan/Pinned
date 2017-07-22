# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
demo_user = User.create!(username: 'DemoUser', password:'pinneddemo')
user2 = User.create!(username: 'Jared', password:'password')
user3 = User.create!(username: 'JavascriptMaster', password: 'justkidding')
user4 = User.create!(username: 'Munyo', password:'coffeemaster')

Pin.destroy_all

pin1 = Pin.create!(
  title: "11 Corgis On Instagram Who Aren't Famous — Yet",
  description: "For animal people. Pass it on.",
  url: "https://www.thedodo.com/instagram-corgis-1722119201.html?utm_source=pinterest&utm_medium=social&utm_campaign=dodopin&crlt.pid=camp.bx7cREk8znEc",
  image_url: "http://res.cloudinary.com/jaredtan/image/upload/v1500762701/corgi1_tocwnv.jpg",
  user_id: user2.id
)

pin2 = Pin.create!(
  title: "Corgi Pupper",
  description: "Hi human!",
  url: "http://corgisofig.tumblr.com/post/154815238613",
  image_url: "http://res.cloudinary.com/jaredtan/image/upload/v1500762700/corgi2_dg6lfz.jpg",
  user_id: demo_user.id
)

pin3 = Pin.create!(
  title: "Brain Hemispheres",
  description: "Brain lateralization, where the brain has special functions (logic on left, creativity on right).",
  url: "http://elearninginfographics.com/teach-yourself-code/",
  image_url: "http://res.cloudinary.com/jaredtan/image/upload/v1500585150/il_570xN.882503178_687n_jsojpo.jpg",
  user_id: demo_user.id
)

pin4 = Pin.create!(
  title: "Corgu",
  description: "Woof woof",
  url: "http://www.shein.com/?url_from=pin20151009",
  image_url: "http://res.cloudinary.com/jaredtan/image/upload/v1500762700/corgi3_dirxff.jpg",
  user_id: user4.id
)

pin5 = Pin.create!(
  title: "The anatomy of a Corgi",
  description: "Much science, very doggo.",
  url: "https://m.imgur.com/gallery/3LPiIut",
  image_url: "http://res.cloudinary.com/jaredtan/image/upload/v1500762700/corgi4_jar3pi.jpg",
  user_id: user3.id
)

pin6 = Pin.create!(
  title: "Application Programming Interface",
  description: "What is the API?",
  url: "http://www.govtech.com/applications/Whats-an-API-and-Why-Do-You-Need-One.html",
  image_url: "http://res.cloudinary.com/jaredtan/image/upload/v1500586413/api_p5mgmr.jpg",
  user_id: demo_user.id
)

pin7 = Pin.create!(
  title: "Counting With Corgis",
  description: "You can never have too many corgis.",
  url: "http://themetapicture.com/just-counting-with-corgis/",
  image_url: "http://res.cloudinary.com/jaredtan/image/upload/v1500762701/corgi5_cfmdqz.jpg",
  user_id: demo_user.id
)

pin8 = Pin.create!(
  title: "HTML5",
  description: "HTML Cheatsheet",
  url: "https://theultralinx.com/2012/11/html-5-cheatsheet/",
  image_url: "http://res.cloudinary.com/jaredtan/image/upload/v1500586411/html5_adljmq.jpg",
  user_id: demo_user.id
)

pin9 = Pin.create!(
  title: "Stairway of Corgus",
  description: "Led Zeppelin would be proud.",
  url: "https://www.homeandwild.com/products/mini-corgi-planter-pots",
  image_url: "http://res.cloudinary.com/jaredtan/image/upload/v1500762701/corgi6_dty40w.png",
  user_id: user3.id
)

pin10 = Pin.create!(
  title: "Linux",
  description: "Summary of Linux commands",
  url: "http://imgur.com/gallery/yIdNW",
  image_url: "http://res.cloudinary.com/jaredtan/image/upload/v1500586410/linux_ag7wud.jpg",
  user_id: demo_user.id
)

pin11 = Pin.create!(
  title: "BEACH DAY!",
  description: "SO MUCH SAND SO MUCH SUN!",
  url: "https://www.homeandwild.com/products/mini-corgi-planter-pots",
  image_url: "http://res.cloudinary.com/jaredtan/image/upload/v1500762700/corgi7_kcrig9.jpg",
  user_id: user2.id
)

pin12 = Pin.create!(
  title: "Wizard Corgi",
  description: "Housemaster of Gryffindor",
  url: "http://sneakersthecorgi.tumblr.com/post/134495079447/the-world-could-use-a-little-magic-corgipotter",
  image_url: "http://res.cloudinary.com/jaredtan/image/upload/v1500762701/corgi8_w6xf9r.jpg",
  user_id: demo_user.id
)

pin13 = Pin.create!(
  title: "Chasing the sunset.",
  description: "I can jump so high!",
  url: "https://s-media-cache-ak0.pinimg.com/originals/1e/9c/ff/1e9cffd4989a2a49d8e8ba0a656e6a20.jpg",
  image_url: "http://res.cloudinary.com/jaredtan/image/upload/v1500762700/corgi9_qcnat3.jpg",
  user_id: demo_user.id
)

pin14 = Pin.create!(
  title: "Programming",
  description: "The history of code",
  url: "http://www.smashingmagazine.com/2010/06/06/designing-the-world-of-programming-infographic/",
  image_url: "http://res.cloudinary.com/jaredtan/image/upload/v1500586411/World_of_programming_zxuvm7.jpg",
  user_id: user3.id
)

pin15 = Pin.create!(
  title: "Working as a programmer",
  description: "Which CS profession is for you?",
  url: "http://www.makeuseof.com/tag/which-it-career-is-right-for-you/",
  image_url: "http://res.cloudinary.com/jaredtan/image/upload/v1500586411/ProgrammingWork_jqg4hj.jpg",
  user_id: user2.id
)

pin16 = Pin.create!(
  title: "Snow day",
  description: "FLUFFY AND FROSTY!",
  url: "https://hiveminer.com/Tags/eyes,silly/Timeline",
  image_url: "http://res.cloudinary.com/jaredtan/image/upload/v1500762701/corgi10_emsd0w.jpg",
  user_id: user2.id
)

pin17 = Pin.create!(
  title: "SQL Joins",
  description: "Summaries of the main types of joins",
  url: "http://sql.sh/2401-sql-join-infographie",
  image_url: "http://res.cloudinary.com/jaredtan/image/upload/v1500586411/sqlJoins_d724sd.jpg",
  user_id: demo_user.id
)

pin18 = Pin.create!(
  title: "OOP",
  description: "Principles of OOP",
  url: "http://www.roldie.com/blog/the-7-principles-of-object-oriented-programming",
  image_url: "http://res.cloudinary.com/jaredtan/image/upload/v1500586411/OOP_qrzasx.jpg",
  user_id: demo_user.id
)

pin19 = Pin.create!(
  title: "CSS Cheatsheet",
  description: "Beginner's essential CSS Cheatsheet",
  url: "https://websitesetup.org/css3-cheat-sheet/",
  image_url: "http://res.cloudinary.com/jaredtan/image/upload/v1500586410/css_cheatsheet_cz2nuu.jpg",
  user_id: demo_user.id
)
