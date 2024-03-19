import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";

export default function Badge({percent} : {percent : number}) {

    const isPositive = percent > 0 
    const isNeutral = percent === 0 

    const isNegative = percent < 0 

    if(isNaN(percent)) {
        return null ; 
    }

    const PositiveClass = 'bg-green-50 text-green-700 ring-green-600/20'

    const isNeutralClass = 'bg-gray-50 text-gray-600 ring-gray-500/10'

    const isNegativeClass = 'bg-red-50 text-red-700 ring-red-600/10'

    return (
        <span className={`mx-2 inline-flex gap-1 items-center rounded-md text-xs py-1 px-2 ring-inset ${isPositive? PositiveClass : isNeutral ? isNeutralClass : isNegativeClass }`}>
            {isPositive && <ArrowUpRight className="h-3 w-3" />}
            {isNegative && <ArrowDownRight className="h-3 w-3"/>}
            {isNeutral && <ArrowRight className="h-3 w-3" />}

            {percent.toFixed(0)}%
        </span>
    )
}