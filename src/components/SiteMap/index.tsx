import Image from "next/image"
export default function SiteMap({
  title,
  siteList,
}: {
  title: string
  siteList: Array<{ label: string; href: string; logo: string }>
}) {
  return (
    <div>
      <h4>{title}</h4>
      <div className='flex flex-wrap text-gray-600'>
        {siteList.map((m, i) => (
          <div key={i} className='flex items-center flex-shrink-0'>
            <div className='relative' style={{ height: 30, width: 30 }}>
              <Image
                src={`./svg/logo/${m.logo ? m.logo : "noimg"}.svg`}
                alt=''
                fill
              />
            </div>
            <a href={m.href} target='_blank'>
              {m.label}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
