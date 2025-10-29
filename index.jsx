import reactDom from "react-dom/client";    


function App() {
    return (
        <div>
            <h1><center>Book Store</center></h1>
        <div className='booklist'>
          <Book />
          <Book />
          <Book />
        </div>
      </div>
    );
}
const parent = document.getElementById("root");
const root=ReatDom.createRoot(parent);
root.render(<App/>);
function Book() {
    return (
      <div class="card">
        <img
          src="https://imgs.search.brave.com/H2a8BfXvxoHlQAGl9hE9hrzHdgHAU8QQjaQp5_WjUdo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ib29r/c2Z5LmluL2Nkbi9z/aG9wL3Byb2R1Y3Rz/L1NjcmVlbnNob3Rf/MjAyMy0wMS0yMy0x/Ny0zOS0zMS05OF9m/ZDFlOGVmNTk0YjE5/NWM1NWEzYmJhNDgx/OGQwY2UzNV8zNDV4/MzQ1QDJ4LmpwZz92/PTE2NzQ0Nzk1MDM"
          alt="book"
          width="100"
          height="150"
        />
        <h3>Title: Physics</h3>
        <h4>Price: ₹385/-</h4>
        <button>Add to Cart</button>
        </div>
        
    );
}