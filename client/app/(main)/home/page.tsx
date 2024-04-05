import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default async function Home() {
  return (
    <Tabs defaultValue="followers">
      <TabsList className="w-full">
        <TabsTrigger value="followers" className="w-1/2">
          Followers
        </TabsTrigger>
        <TabsTrigger value="following" className="w-1/2">
          Following
        </TabsTrigger>
      </TabsList>
      <TabsContent value="followers">Followers content</TabsContent>
      <TabsContent value="following">Following content</TabsContent>
    </Tabs>
  )
}