import Image from './Image'

import { logEvent as logGAEvent } from './analytics/GoogleAnalytics'
import { logEvent as logPlausibleEvent } from './analytics/Plausible'
import { logEvent as logSAEvent } from './analytics/SimpleAnalytics'

const Render = ({ alt, imgSrc }) => {
  const logClickEvent = () => {
    logGAEvent('view_project')
    logPlausibleEvent('view_project')
    logSAEvent('view_project')
  }

  return (
    <div className="group m-2 flex flex-col group">
      <Image
        alt={alt}
        src={imgSrc}
        className="object-contain object-center dark:grayscale dark:hover:grayscale-0"
        width={27}
        height={27}
      />
      <span className="absolute bg-slate-400 rounded px-1 text-center mt-8 z-10 hidden group-hover:flex hover:flex text-white">
        {alt}
      </span>
    </div>
  )
}

export default Render
