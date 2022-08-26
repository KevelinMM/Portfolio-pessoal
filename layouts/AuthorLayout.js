import { PageSEO } from '@/components/SEO'
import Image from 'next/image'
import projectsData from '@/data/projectsData'
import skills from '@/data/skills'
import Card from '@/components/Card'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, occupation, company } = frontMatter
  console.log(skills)
  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5 flex">
          <div className="w-14 md:w-20">
            <Image
              src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
              alt="HandShaking"
              height={100}
              width={100}
            />
          </div>
          <h1 className="pl-4 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Thiago Sartorel
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0 border-t">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img
              src="https://github.com/thiagosartorel.png"
              alt="avatar"
              className="w-48 h-48 rounded-full "
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight text-center">
              {name}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400 pb-2">{company}</div>
            <div className="w-full h-20 py-2">
              <div className="p-2 flex flex-wrap justify-center">
                {skills.icons.map((item, index) => {
                  return true
                })}
              </div>
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2 text-justify">
            {children}
          </div>
        </div>

        <div className="sm:mx-20 border-t">
          <h1 className="text-center text-2xl font-bold py-4">Últimos trabalhos</h1>
          <div className="flex flex-col md:flex-row dark:bg-black dark:bg-opacity-20 rounded-lg mx-auto">
            {projectsData
              .filter((item, index) => index < 3)
              .map((d) => (
                <Card
                  key={d.title}
                  title={d.title}
                  description={''}
                  imgSrc={d.imgSrc}
                  href={d.href}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  )
}
