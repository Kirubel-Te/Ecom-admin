import {AppBarChart} from "@/components/AppBarChart"
import ChartAreaGradient from "@/components/ArealChart"
import {AppPieChart} from "@/components/AppPieChart"
import { CardList } from "@/components/CardList"
import { TodoList } from "@/components/TodoList"

export default function Home(){
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 p-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <h1 className="text-lg font-medium mb-4">Total Revenue</h1>
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg "><CardList title="popular content" /></div>
      <div className="bg-primary-foreground p-4 rounded-lg ">
        <h1 className="text-lg font-medium mb-4">Pie Chart</h1>
        <AppPieChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg "><TodoList /></div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <h1 className="text-lg font-medium mb-4">Area Chart</h1>
        <ChartAreaGradient />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg "><CardList title="latest transactions" /></div>
    </div>
  )
}