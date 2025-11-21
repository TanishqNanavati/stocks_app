import TradingViewWidget from '@/components/TradingViewWidget'
import { Button } from '@/components/ui/button'
import { HEATMAP_WIDGET_CONFIG, MARKET_DATA_WIDGET_CONFIG, MARKET_OVERVIEW_WIDGET_CONFIG, TOP_STORIES_WIDGET_CONFIG } from '@/lib/constants'


const HOME = () => {

  const scripturl = "https://s3.tradingview.com/external-embedding/embed-widget-";
  return (
    <div className='flex min-h-screen home-wrapper'>
      
      <section className='grid w-full gap-8 home-section'>

        {/* Market Overview */}
        <div className='md:col-span-1 xl:col-span-1'>
          <TradingViewWidget
            title="Market Overview"
            scriptUrl={`${scripturl}market-overview.js`}
            config={MARKET_OVERVIEW_WIDGET_CONFIG}
            className="custom-chart"
            height={600}
          />
        </div>

        {/* Stock HeatMap */}
        <div className='md:col-span-1 xl:col-span-2'>
          <TradingViewWidget
            title="Stock HeatMap"
            scriptUrl={`${scripturl}stock-heatmap.js`}
            config={HEATMAP_WIDGET_CONFIG}
            height={600}
          />
        </div>

      </section>


      <section className='grid w-full gap-8 home-section'>

        {/* Top Stories */}
        <div className='md:col-span-1 xl:col-span-1 h-full'>
          <TradingViewWidget
            scriptUrl={`${scripturl}timeline.js`}
            config={TOP_STORIES_WIDGET_CONFIG}
            className="custom-chart"
            height={600}
          />
        </div>

        {/* Market Quotes */}
        <div className='md:col-span-1 xl:col-span-2 h-full'>
          <TradingViewWidget
            scriptUrl={`${scripturl}market-quotes.js`}
            config={MARKET_DATA_WIDGET_CONFIG}
            height={600}
          />
        </div>

      </section>

    </div>
  )
}

export default HOME