import SiteMap from '@/components/SiteMap'
export default function Home() {
  const list1 = [
    {
      label: 'Tailwind CSS',
      href: 'https://tailwindcss.com/',
      logo: 'tailwindcss',
    },
    {
      label: 'Naive UI',
      href: 'https://www.naiveui.com/zh-CN/os-theme',
      logo: 'naiveui',
    },
    {
      label: 'Element UI',
      href: 'https://element.eleme.cn/#/zh-CN',
      logo: 'element',
    },
  ]

  const list2 = [
    {
      label: 'Google',
      href: 'https://www.google.com/',
      logo: 'google',
    },
    {
      label: '百度',
      href: 'https://www.baidu.com/',
      logo: 'baidu',
    },
  ]

  const list3 = [
    {
      label: 'Github',
      href: 'https://github.com/',
      logo: 'github',
    },
    {
      label: 'Gitee',
      href: 'https://gitee.com/',
      logo: 'gitee',
    },
    {
      label: '掘金',
      href: 'https://juejin.cn/',
      logo: 'juejin',
    },
    {
      label: '博客园',
      href: 'https://www.cnblogs.com/',
      logo: 'bokeyuan',
    },
    {
      label: 'CSDN',
      href: 'https://www.csdn.net/',
      logo: 'csdn',
    },
    {
      label: 'StackOverflow',
      href: 'https://stackoverflow.com/',
      logo: 'stackoverflow',
    },
  ]

  const list4 = [
    {
      label: 'ColorSpace',
      href: 'https://mycolor.space/',
      logo: '',
    },
    {
      label: 'Comic Mono Font',
      href: 'https://dtinth.github.io/comic-mono-font/',
      logo: '',
    },
    {
      label: 'Wallpaper Abyss',
      href: 'https://wall.alphacoders.com/',
      logo: '',
    },
    {
      label: 'Icônes',
      href: 'https://icones.js.org/',
      logo: '',
    },
    {
      label: 'Simple Icons',
      href: 'https://simpleicons.org/',
      logo: 'simpleicons',
    },
  ]

  const list5 = [
    {
      label: 'React',
      href: 'https://react.dev/',
      logo: 'react',
    },
    {
      label: 'Next',
      href: 'https://nextjs.org/',
      logo: 'nextjs',
    },
    {
      label: 'Vue3',
      href: 'https://cn.vuejs.org/',
      logo: 'vue',
    },
    {
      label: 'Vue2',
      href: 'https://v2.cn.vuejs.org/',
      logo: 'vue',
    },
    {
      label: 'Express',
      href: 'https://www.expressjs.com.cn/',
      logo: 'express',
    },
  ]

  const list6 = [
    {
      label: 'VS Code',
      href: 'https://code.visualstudio.com/',
      logo: 'vscode',
    },
    {
      label: 'WebStorm',
      href: 'https://www.jetbrains.com/webstorm/',
      logo: 'webstorm',
    },
    {
      label: 'Snippet Generator',
      href: 'https://snippet-generator.app/',
      logo: '',
    },
  ]

  const list7 = [
    {
      label: 'LeetCode',
      href: 'https://leetcode.cn/',
      logo: 'leetcode',
    },
  ]
  const list8 = [
    {
      label: '语雀',
      href: 'https://www.yuque.com/',
      logo: 'yuque',
    },
  ]
  const list9 = [
    {
      label: '菜鸟教程',
      href: 'https://www.runoob.com/',
      logo: 'runoob',
    },
    {
      label: 'ES6',
      href: 'https://es6.ruanyifeng.com/',
      logo: 'es6',
    },
    {
      label: '书栈网',
      href: 'https://www.bookstack.cn/',
      logo: '',
    },
  ]
  const list10 = [
    {
      label: 'SnipPaste',
      href: 'https://www.snipaste.com/',
      logo: 'snipaste',
    },
  ]
  return (
    <>
      <SiteMap title='搜索引擎' siteList={list2} />
      <SiteMap title='技术社区' siteList={list3} />
      <SiteMap title='JS框架' siteList={list5} />
      <SiteMap title='UI框架' siteList={list1} />
      <SiteMap title='开发工具' siteList={list6} />
      <SiteMap title='在线学习' siteList={list9} />
      <SiteMap title='面试刷题' siteList={list7} />
      <SiteMap title='设计' siteList={list4} />
      <SiteMap title='协同工作' siteList={list8} />
      <SiteMap title='工具' siteList={list10} />
    </>
  )
}
