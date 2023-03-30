import Image from "next/image"
export default function SiteMap({
  title,
  siteList,
}: {
  title: string
  siteList: Array<{ label: string; href: string; logo: string }>
}) {
  return (
    <>
      <h4>{title}</h4>
      {siteList.map((m, i) => (
        <div key={i} className="flex items-center">
          <div className="relative" style={{ height: 30, width: 30 }}>
            <Image src={`./svg/logo/${m.logo}.svg`} alt="" fill />
          </div>
          <a href={m.href} target="_blank">
            {m.label}
          </a>
        </div>
      ))}
    </>
  )
}
