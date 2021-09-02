const urlParams=new URLSearchParams(window.location.search);
const season=urlParams.get("season");

const url = "https://kea-alt-del.dk/t7/api/products?season="+season;
fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });
function handleProductList(data) {
//   console.log(data);
  data.forEach( 
    showProduct);
  
}
function showProduct(product) {
  //grab the template
  // <article class="smallProduct">
  // <a href="product.html"><img src="https://kea-alt-del.dk/t7/images/webp/640/1545.webp"></a>
  // <h3>Speed Cat Shoe</h3>
  // <p class="subtle">Shoes/Puma</p>
  // <p class="price">Dkk 3999,-</p>
  // <div class="discounted"></div>
  // <p>Now dkk 1560,-</p>
  // <p>-34%</p>
  //       </article>
  console.log(product)
  const template=document.querySelector("#smallProductTemplate").content;
  // //clone it
  const copy= template.cloneNode(true);
  //  //change content
  copy.querySelector("a").setAttribute=("href","product.html?id="+product.id)
  copy.querySelector(".subtle").textContent= `${product.articletype}|${product.brandname}`;
  copy.querySelector("h3").textContent= product.productdisplayname;
copy.querySelector("img").src=`https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
copy.querySelector("img").alt=product.productdisplayname;


//   if(product.soldout){
//       copy.querySelector("article").classList("soldOut")
//   }
  //     //grab parent
  const parent= document.querySelector("main")
      //append
     parent.appendChild(copy)
}
