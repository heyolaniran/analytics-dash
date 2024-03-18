import { analytics } from "@/utils/analytics"

export default async function page() {

    const pageview = await analytics.retrieve("pageview", "");
    
    return 
    (
        <p>
            Analytic Dashboard 
        </p>
    )
}