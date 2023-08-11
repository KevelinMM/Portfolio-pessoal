import { PageSEO } from '@/components/SEO'
import skills from '@/data/skills'
import Render from '@/components/Render'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, occupation, company } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y">
        <div className="py-3 space-y-2 md:space-y-5">
          <h1 className=" text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14">
            Seja bem vindo(a)
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img
              src="https://github.com/KevelinMM.png"
              alt="avatar"
              className="w-48 h-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="w-full h-20 py-2">
              <div className="p-2 flex flex-wrap justify-center px-3 md:px-10">
                {skills.icons.map((item, index) => (
                  <Render key={index} imgSrc={item} alt={skills.desc[index]} />
                ))}
              </div>
            </div>
          </div>
          <div className="md:pt-10 pb-2 prose dark:prose-dark max-w-none xl:col-span-2 text-justify">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
