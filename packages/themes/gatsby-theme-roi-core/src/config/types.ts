// This file defines the typescript types used in the config directory.

type NavCtaItem = {
  id: string
  name: string
  link: string
  icon?: string
}

type NavItem = {
  id: string
  name: string
  link: string
  icon?: string
}

 interface NavMenuItem {
  id: string
  layout: string
  menuType: string
  name: string
  defaultLink?: string
  navItems: NavItem[]
  cta?: {
    primary?: NavCtaItem
    secondary?: NavCtaItem
  }
}

export interface NavData {
  items: [NavMenuItem | NavItem]
}

export interface WebsiteData {
  title: string
  titleShort: string
  name: string
  description: string
  language: string
  logoUrl: string
  fbAppId?: string
  twitterName?: string
  url: string
  copyright: string
  rss?: string
  rssTitle?: string
  googleAnalyticsId?: string
  disqusShortname?: string
  themeColor?: string
  backgroundColor?: string
}

export interface UserData {
  id: string
  firstName: string
  lastName: string
  twitterName?: string
  linkedIn?: string
  github?: string
  email: string
  location: string
  about: string
  avatar: string
}

export interface OrganizationData {
  name: string
  description: string
  logoUrl: string
  url: string
}

type IconManifest = {
  src: string
  sizes: string
  type: string
  purpose?: string
}

export interface SiteConfig {
  website: WebsiteData
  navData?: NavData
  user?: UserData
  organization?: OrganizationData

  pathPrefix: string

  contentDir?: string
  assetDir?: string

  embeddedImageWidth: number
  embeddedVideoWidth: number

  iconPath?: string
  iconList: Readonly<Array<IconManifest>>
  iconCachePaths?: string[]

  basePath?: string
}
