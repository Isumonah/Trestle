
export default function Filter(){
    return(
        <div className="filter">
                <select name="category" id="category">
                    <option value="Category">Category</option>
                    <option value="Jewelry">Jewelry</option>
                    <option value="fresh-finds">Fresh Finds</option>
                    <option value="Paycycle">Paycycle</option>
                </select>
                <select name="sector" id="sector">
                    <option value="Sector">Sector</option>
                    <option value="fashion">Fashion</option>
                    <option value="agriculture">Agriculture</option>
                    <option value="recylcling">Recycling</option>
                </select>
                <select name="funding-stage" id="funding-stage">
                    <option value="Funding Stage">Funding Stage</option>
                    <option value="initial-stage">Initial Stage</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </select>
                <div className="relevance-div">
                    <p>Sort By: </p>
                    <select name="relevance" id="relevance">    
                        <option value="relevance">Relevance</option>
                        <option value="high">High</option>
                    </select>
                </div>
            </div>
    )
}