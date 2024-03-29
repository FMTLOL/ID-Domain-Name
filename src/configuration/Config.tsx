import { ThemingProps } from '@chakra-ui/react'
import { polygon} from '@wagmi/chains'

export const SITE_NAME = 'ID Domain Name'
export const SITE_DESCRIPTION = 'FMS © 2024'
export const SITE_URL = 'https://id.fmtlol.com'

export const THEME_INITIAL_COLOR = 'system'
export const THEME_COLOR_SCHEME: ThemingProps['colorScheme'] = 'gray'
export const THEME_CONFIG = { initialColorMode: THEME_INITIAL_COLOR }

export const SOCIAL_TWITTER = 'fmtlol'
export const SOCIAL_LINKEDIN = 'fmtlol'
export const SOCIAL_GITHUB = 'fmtlol'
export const SOCIAL_TELEGRAM= 'fmtlol'
export const NETWORKS = [polygon]; //polygon, filecoin, polygonMumbai
export const NETWORK_ERROR = "Connect Wallet" //Change network name as required

export const DOMAIN_TLD = 'id' //primary domain name without dot (.)
export const DOMAIN_PRICE_ETH = '5' //price should be equal to contract or higher 
export const DOMAIN_IMAGE_URL = 'https://ipfs.io/ipfs/QmRkLXnfv2Wpc6jx4pmsEZhqEVwQCYuHgJ3vcuSCXmXPNE' //Image path starts with ipfs:// or https://
export const DOMAIN_NETWORK_CHAIN = 137 //137 for polygon, 314 for filecoin, 80001 form mumbai
export const DOMAIN_DESCRIPTION = 'Web3 Domain Name'
export const DOMAIN_TYPE = "W3D" //W3D for polygon, FVM for Filecoin net
export const DOMAIN_TITLE = "" //Title above the search input field. 
export const DOMAIN_PLACEHOLDER = "Search for ID ... Mint price 5 MATIC" //Placeholder for search input field 

export const ADMIN_WALLET = "0xbed79816b54E75eD54BF217333342C8d271b3b6f" //ETH wallet address 

export const NOTICE_TITLE = ""
export const NOTICE_NON_MEMBER = ""

export const DOMAIN_BANNER = "https://i.imgur.com/1lGknqu.png" //290x80 size
