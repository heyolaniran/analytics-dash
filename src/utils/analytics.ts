
import { AnalyticsArgs } from "@/types/types";

export class Analytics  {

    private retention = 60*60*24*7 ; 

    constructor(opts? : AnalyticsArgs) {
        if(opts?.retention) {
            this.retention = opts.retention
        }
    }

    async track(namespace : string , event : object = {}) {
        // persist data in db
    }
}


export const analytics = new Analytics() ; 

