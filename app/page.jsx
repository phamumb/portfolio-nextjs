import About from "@components/About"
import Contact from "@components/Contact"

const page = () => {
  return (
    <div className="flex flex-col w-full mb-16 pt-3 gap-20">
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}

export default page
