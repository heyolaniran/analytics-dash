"use client"
import { AnalyticsDashboadProps } from "@/types/types";
import { BarChart, Card } from "@tremor/react";

export default function AnalyticsDashboard({avgVisitorsPerDay , amountVisitorsToday, timeSeriesPagesViews} : AnalyticsDashboadProps) { 

    return (
        <>
            <div className="flex flex-col gap-6">

                <div className="grid w-full mx-auto grid-cols-1 sm:grid-cols-2 gap-6">
                    <Card className="w-full mx-auto max-w-xs">
                        <p className="text-tremor-default text-tremor-content">
                            Avg. Visitors / Day
                        </p>
                        <p className="text-3xl  font-semibold">
                            {avgVisitorsPerDay}
                        </p>
                    </Card>

                    <Card className="w-full mx-auto max-w-xs">
                        <p className="text-tremor-default text-tremor-content">
                         Visitors Today 
                        </p>
                        <p className="text-3xl  font-semibold">
                            {amountVisitorsToday}
                        </p>
                    </Card>
                </div>

                <Card>

                    {timeSeriesPagesViews ? (
                        <>
                            <BarChart allowDecimals={false} 
                            showAnimation 
                            data={timeSeriesPagesViews.map((day) => ({
                                name : day.date , 
                                visitors: day.events.reduce((acc, curr) => {
                                    return acc + Object.values(curr)[0]!
                                },0)
                            }))}
                            categories={["visitors"]}
                            index="name"
                            />
                        </>
                    ) : null }

                </Card>

            </div>
        </>
    )
}