import { analytics } from "@/utils/analytics"

export type AnalyticsArgs  = {
    retention?: number
}

export type TrackOption = {
    persist? : boolean
}

export interface AnalyticsDashboadProps {
    avgVisitorsPerDay : string 
    amountVisitorsToday : number
    timeSeriesPagesViews : Awaited<ReturnType<typeof analytics.retrieveDays>>
}