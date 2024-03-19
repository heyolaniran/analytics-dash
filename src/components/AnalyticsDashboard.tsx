"use client"
import { AnalyticsDashboadProps } from "@/types/types";
import { BarChart, Card } from "@tremor/react";
import ReactCountryFlag from "react-country-flag";
import Badge from "./ui/Badge";

export default function AnalyticsDashboard({avgVisitorsPerDay , amountVisitorsToday, timeSeriesPagesViews, topCountries} : AnalyticsDashboadProps) { 

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
                         <Badge percent={(amountVisitorsToday / Number(avgVisitorsPerDay) - 1 )*100} />
                        </p>
                        <p className="text-3xl  font-semibold">
                            {amountVisitorsToday}
                        </p>
                    </Card>
                </div>

                <Card className="flex flex-col sm:grid grid-cols-4 gap-6">
                    <h2 className="text-xl text-black font-semibold text-center w-full">
                        Weekly Top visitors: 
                    </h2>
                    <div className="col-span-3 flex flex-wrap items-center justify-between gap-8">
                        {topCountries?.map(([countryCode, number ]) => {
                            return (
                                <>
                                    <div className="flex items-center gap-3 text-black font-semobild" key={countryCode}>
                                        <p className="hidden sm:block">
                                            {countryCode}
                                        </p>

                                        <ReactCountryFlag className="text-5xl sm:text-3xl" svg countryCode={countryCode} />

                                        <p className="text-black">
                                            {number}
                                        </p>
                                        
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </Card>
 
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