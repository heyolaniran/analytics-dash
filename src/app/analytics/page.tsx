import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import { getDate } from "@/utils";
import { analytics } from "@/utils/analytics"

export default async function page() {

    const trackingDays = 7 ; 

    const pageviews = await analytics.retrieveDays("pageview", 2);

    const totalPageViews = pageviews.reduce((acc, curr) => {
        return (
            acc + curr.events.reduce((acc, curr) => {
                return acc + Object.values(curr)[0]!
            },0)
        )
    },0)

    const avgVisitorsPerDay = (totalPageViews / trackingDays).toFixed(1)

    const amountVisitorsToday = pageviews.filter((event) => event.date === getDate())
    .reduce((acc, curr) => {
        return acc + curr.events.reduce((acc, curr) => {
            return acc+ Object.values(curr)[0]!
        }, 0)
    },0)
    
    const topVisitorsCountries = new Map<string, number>() ; 

    for (let i = 0; i < pageviews.length; i++) {
        const day = pageviews[i];
        
        if(!day) continue

        for (let j = 0; j < day.events.length; j++) {
            const event = day.events[j];

            if(!event) continue

            const key = Object.keys(event)[0]!
            const value = Object.values(event)[0]!

            const parsedKey = JSON.parse(key)

            const country = parsedKey?.country

            if(country) {

                if(topVisitorsCountries.has(country)) {

                    const prevValue = topVisitorsCountries.get(country)! 
    
                    topVisitorsCountries.set(country, prevValue+value); 
                }else 
                {
                    topVisitorsCountries.set(country, value)
                }

            }

           
            
        }
    }

    return (
        <>
            <div className="min-h-screen w-full py-12 flex justify-center items-center">
                <div  className="relative w-full max-w-6xl mx-auto text-dark">
                    <AnalyticsDashboard avgVisitorsPerDay={avgVisitorsPerDay} 
                    amountVisitorsToday={amountVisitorsToday} 
                    timeSeriesPagesViews={pageviews}
                    />
                </div>
            </div>
        </>
        
    )
}