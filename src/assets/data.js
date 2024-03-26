import raihan2 from "@/assets/images/2.png"
import raihan3 from "@/assets/images/3.png"
import raihan4 from "@/assets/images/4.png"
import raihan5 from "@/assets/images/5.png"
import edusphere from "@/assets/images/edusphere.png"
import nonstatemedia from "@/assets/images/nonstatemedia.png"
import bestuying from "@/assets/images/bestuying.png"

export const navbar = [{
    id: 1,
    path: "/Coursera",
    name: "Coursera"
},
{
    id: 2,
    path: "/Blog",
    name: "Blog"
},{
  id: 3,
  path: "/AboutMe",
  name: "About me"
},{
  id: 4,
  path: "/Projects",
  name: "Projects"
}, {
  id: 5,
  path: "/",
  name: "Home"
}
]

export const aboutme = [{
  id: 2,
  image: raihan2,
}, {
  id: 3,
  image: raihan3,
}, {
  id: 4,
  image: raihan4,
},{
  id: 5,
  image: raihan5,
}]

export const portofolio = [{
  id: 1,
  image: edusphere,
  year: "2023",
  name: "Edusphere",
  desc: "Website that selling online course",
  link: "https://edusphere-test.netlify.app"
}, {
  id: 2,
  image: nonstatemedia,
  year: "2023",
  name: "Nonstatemedia",
  desc: "Article website provides international relations",
  link: "https://nonstatemedia.netlify.app"
}, {
  id: 3,
  image: bestuying,
  year: "2024",
  name: "Bestuying",
  desc: "It's only my personal website about artist i like",
  link: "https://bestuying.vercel.app/"
} ]
    