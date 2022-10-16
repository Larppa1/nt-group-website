import './Stats.css'

export default function Stats() {
    return(
        <div className="stats shadow">
        
            <div className="stat">
                <div className="stat-title">Investoijat</div>
                <div className="stat-value">10</div>
                <div className="stat-desc">13/10/2022</div>
            </div>
            
            <div className="stat">
                <div className="stat-title">Pääoma</div>
                <div className="stat-value">25 000€</div>
                <div className="stat-desc">↗︎ 5 000€ (25%)</div>
            </div>
        
        </div>
    )
}