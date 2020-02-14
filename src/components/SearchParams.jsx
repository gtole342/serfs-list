import React from 'react';

const SearchParams = () => {
    return (
        <div className="search-area">
            <div className="search-filter">
                <h3>Filter</h3>
                <form>
                    <span className="search-form">
                        <input type="checkbox" />
                        <label >search titles only</label>
                    </span>

                    <span className="search-form">
                        <input type="checkbox" />
                        <label >has image</label>
                    </span>

                    <span className="search-form">
                        <input type="checkbox" />
                        <label >posted today</label>
                    </span>

                    <span className="search-form">
                        <input type="checkbox" />
                        <label >bundle duplicates</label>
                    </span>

                    <span className="search-form">
                        <input type="checkbox" />
                        <label >include nearby villages</label>
                    </span>
                </form>
                <form className="search-params">
                    <label>Arpents from Village</label>
                    <span className="search-form">
                        <input type="text" placeholder="arpents" className="search-input"/>
                        <input type="text" placeholder="from village" className="search-input"/>
                    </span>
                </form>
            </div>
            <div className="search-params">
                <h3>Sort Results</h3>
                <span className="search-form">
                    <input type="checkbox" />
                    <label>fiefs</label>
                </span>
                <span className="search-form">
                    <input type="checkbox" />
                    <label>manors</label>
                </span>
                <span className="search-form">
                    <input type="checkbox" />
                    <label>kingdoms</label>
                </span>
                <span className="search-form">
                    <input type="checkbox" />
                    <label>farms</label>
                </span>
                <span className="search-form">
                    <input type="checkbox" />
                    <label>villages</label>
                </span>
                <span className="search-form">
                    <input type="checkbox" />
                    <label>hovels</label>
                </span>
            </div>
            <div className="search-params">
                <h3>Categories</h3>
                <span className="search-form">
                    <input type="checkbox" />
                    <label>events</label>
                </span>
                <span className="search-form">
                    <input type="checkbox" />
                    <label>jobs</label>
                </span>
                <span className="search-form">
                    <input type="checkbox" />
                    <label>services</label>
                </span>
                <span className="search-form">
                    <input type="checkbox" />
                    <label>community</label>
                </span>
                <span className="search-form">
                    <input type="checkbox" />
                    <label>housing</label>
                </span>
                <span className="search-form">
                    <input type="checkbox" />
                    <label>for sale</label>
                </span>
            </div>
        </div>
    )
}

export default SearchParams;