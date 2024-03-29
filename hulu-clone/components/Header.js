import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {BadgeCheckIcon,CollectionIcon,HomeIcon,LightningBoltIcon,SearchIcon,UserIcon} from '@heroicons/react/outline'
function Header() {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto' >
            <div className='flex flex-grow justify-evenly max-w-2xl'>
                <HeaderItem title='HOME' Icon={HomeIcon}></HeaderItem>
                <HeaderItem title='TRENDING' Icon={LightningBoltIcon}></HeaderItem>
                <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon}></HeaderItem>
                <HeaderItem title='COLLECTIONS' Icon={CollectionIcon}></HeaderItem>
                <HeaderItem title='SEARCH' Icon={SearchIcon}></HeaderItem>
                <HeaderItem title='ACCOUNT' Icon={UserIcon}></HeaderItem>
            </div>
            <Image 
            className='object-contain'
            src='https://links.papareact.com/ua6'
            width={200} height={100}></Image>
        </header>
    )
}

export default Header
