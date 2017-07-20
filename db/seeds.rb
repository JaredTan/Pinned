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

Pin.destroy_all

pin1 = Pin.create!(
  title: "Brain hemispheres",
  description: "Brain lateralization, where the brain has special functions (logic on left, creativity on right).",
  url: "http://elearninginfographics.com/teach-yourself-code/",
  image_url: "http://res.cloudinary.com/jaredtan/image/upload/v1500585150/il_570xN.882503178_687n_jsojpo.jpg",
  user_id: demo_user.id
)

pin2 = Pin.create!(
  title: "Teach yourself code",
  description: "Overview of the codes",
  url: "http://elearninginfographics.com/teach-yourself-code/",
  image_url: "http://res.cloudinary.com/jaredtan/image/upload/v1500586411/Lime-IT-Teach-Yourself-Code-infographic_imvx1p.jpg",
  user_id: user2.id
)

pin3 = Pin.create!(
  title: "Application Programming Interface",
  description: "What is the API?",
  url: "http://www.govtech.com/applications/Whats-an-API-and-Why-Do-You-Need-One.html",
  image_url: "http://res.cloudinary.com/jaredtan/image/upload/v1500586413/api_p5mgmr.jpg",
  user_id: demo_user.id
)

pin4 = Pin.create!(
  title: "HTML5",
  description: "HTML Cheatsheet",
  url: "https://theultralinx.com/2012/11/html-5-cheatsheet/",
  image_url: "http://res.cloudinary.com/jaredtan/image/upload/v1500586411/html5_adljmq.jpg",
  user_id: demo_user.id
)

pin5 = Pin.create!(
  title: "SQL Joins",
  description: "Summaries of the main types of joins",
  url: "http://sql.sh/2401-sql-join-infographie",
  image_url: "http://res.cloudinary.com/jaredtan/image/upload/v1500586411/sqlJoins_d724sd.jpg",
  user_id: demo_user.id
)

pin6 = Pin.create!(
  title: "Linux",
  description: "Summary of Linux commands",
  url: "http://imgur.com/gallery/yIdNW",
  image_url: "http://res.cloudinary.com/jaredtan/image/upload/v1500586410/linux_ag7wud.jpg",
  user_id: demo_user.id
)

pin7 = Pin.create!(
  title: "OOP",
  description: "Principles of OOP",
  url: "http://www.roldie.com/blog/the-7-principles-of-object-oriented-programming",
  image_url: "http://res.cloudinary.com/jaredtan/image/upload/v1500586411/OOP_qrzasx.jpg",
  user_id: demo_user.id
)

pin8 = Pin.create!(
  title: "Working as a programmer",
  description: "Which CS profession is for you?",
  url: "http://www.makeuseof.com/tag/which-it-career-is-right-for-you/",
  image_url: "http://res.cloudinary.com/jaredtan/image/upload/v1500586411/ProgrammingWork_jqg4hj.jpg",
  user_id: user2.id
)

pin9 = Pin.create!(
  title: "Programming",
  description: "The history of code",
  url: "http://www.smashingmagazine.com/2010/06/06/designing-the-world-of-programming-infographic/",
  image_url: "http://res.cloudinary.com/jaredtan/image/upload/v1500586411/World_of_programming_zxuvm7.jpg",
  user_id: user3.id
)

pin10 = Pin.create!(
  title: "CSS Cheatsheet",
  description: "Beginner's essential CSS Cheatsheet",
  url: "https://websitesetup.org/css3-cheat-sheet/",
  image_url: "http://res.cloudinary.com/jaredtan/image/upload/v1500586410/css_cheatsheet_cz2nuu.jpg",
  user_id: demo_user.id
)
