import { useState } from 'react'
import './App.css'
import Header from './ComponentsList/Header'
import WlcBodyInterface from './ComponentsList/WlcBodyInterface'
import RecentChats from './ComponentsList/RecentChats'
import ChatReqAndRes from './ComponentsList/ChatReqAndRes'
import NoChats from './ComponentsList/NoChats'
import NewChat from './ComponentsList/NewChat'
import TypeMssg from './ComponentsList/TypeMssg'
import ContextAndResourse from './ComponentsList/ContextAndResourse'
import UserIdColumn from './ComponentsList/UserIdColumn'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='text-white w-[screen] flex flex-col heebo-style box-border'>
      <Header />
      <section className='flex w-[screen] '>

        <div className=' flex-col relative justify-center h-screen w-[19.5%] border-t border-r border-[#334155] '>
          {/* <NoChats /> */}
          <RecentChats />
          <UserIdColumn />
          
        </div >
        {/* <WlcBodyInterface /> */}
        {/* <NewChat/> */}
        <ChatReqAndRes />
        <ContextAndResourse />
      </section>

    </div>
  )
}
export default App
