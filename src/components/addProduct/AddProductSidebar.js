import './addProductSidebar.css'

export default function Sidebar(){
    return(
        <div className='addproduct-sidebar-main-div'>
            <div className='addproduct-sidebar-inner-div'>
            <aside id="asin-info">
                <h2>ASIN Explained</h2>
                <p>ASIN stands for Amazon Standard Identification Number. It's a unique code assigned to every product on Amazon. By entering the ASIN when monitoring a product, you ensure you're tracking the exact variant you're interested in, even if the title or description changes.</p>
                <p><strong>Where to find the ASIN:</strong> Look for the alphanumeric string after the product identifier in the Amazon product URL (usually "/dp/" or "/gp/product/").</p>
                <p>For example, in this URL: https://www.amazon.com/dp/B0819J6G7T, the ASIN is B0819J6G7T.</p>
            </aside>
            </div>
        </div>
    );
}