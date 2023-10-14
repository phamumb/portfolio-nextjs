import About from "@components/About"
import Contact from "@components/Contact"
import Experiences from "@components/Experiences"
import data from '@db/works.json'

const page = () => {
  return (
    <div className="flex flex-col w-full mb-16 pt-3 gap-20">
      <section id="about">
        <About />
      </section>
      <section id="experiences">
        <Experiences data={data}/>
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}

export default page
