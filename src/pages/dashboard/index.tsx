import { Button } from '@/components/custom/button'
import { Search } from '@/components/search'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import ThemeSwitch from '@/components/theme-switch'
import { UserNav } from '@/components/user-nav'
import { Layout, LayoutBody, LayoutHeader } from '@/components/custom/layout'
import { IconBell, IconSchoolBell } from '@tabler/icons-react'
import { CardWithForm } from '@/components/card'
import { useState } from 'react'

export default function Dashboard() {
  const [showCard, setShowCard] = useState(false);

  const toggleCard = () => {
    setShowCard(!showCard);
  };

  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <LayoutHeader>
        <div className='ml-auto flex items-center space-x-4'>
          <Search />
          <ThemeSwitch />
          <UserNav />
        </div>
      </LayoutHeader>

      {/* ===== Main ===== */}
      <LayoutBody className='space-y-4'>
        <div className='flex items-center justify-between space-y-2'>
          <h1 className='text-2xl font-bold tracking-tight md:text-3xl'>
            Dashboard
          </h1>
        </div>
        <Tabs
          orientation='vertical'
          defaultValue='overview'
          className='space-y-4'
        >
          <TabsContent value='overview' className='space-y-4'>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-5 lg:grid-rows-10'>

              <div className='col-span-1 lg:col-start-3 lg:row-start-3 lg:col-span-1 '>
                <div className="flex justify-center">
                  <div className='flex justify-around'>
                    <Button onClick={toggleCard}>
                      <IconBell style={{paddingRight: 5}}/>  Create new alert
                    </Button>
                  </div>
                </div>
              </div>

              {showCard && <CardWithForm setState ={setShowCard}/>}

            </div>
          </TabsContent>
        </Tabs>
      </LayoutBody>
    </Layout>
  )
}
