import Search from '@/pages-components/site-navigation/Search'
import SiteGroup from '@/pages-components/site-navigation/SiteGroup'
import { list1, list2, list3, list4, list5, list6, list7, list8, list9, list10, list11, list12 } from '@/models'

const SiteNavigation = () => {
  return (
    <>
      <Search />
      <SiteGroup title='搜索引擎' siteList={list2} />
      <SiteGroup title='技术社区' siteList={list3} />
      <SiteGroup title='JS框架' siteList={list5} />
      <SiteGroup title='UI框架' siteList={list1} />
      <SiteGroup title='Node框架' siteList={list12} />
      <SiteGroup title='打包工具' siteList={list11} />
      <SiteGroup title='开发工具' siteList={list6} />
      <SiteGroup title='在线学习' siteList={list9} />
      <SiteGroup title='面试刷题' siteList={list7} />
      <SiteGroup title='设计' siteList={list4} />
      <SiteGroup title='协同工作' siteList={list8} />
      <SiteGroup title='工具' siteList={list10} />
    </>
  )
}

export default SiteNavigation
