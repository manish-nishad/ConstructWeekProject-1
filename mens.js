let product = document.createElement("div");
document.querySelector("body").append(product);
product.setAttribute("class","mainbox");

let mensData = [
	{
		image_url: "http://baidu.com",
		brand: "Bewakoof",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://instagram.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://bbc.co.uk",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://google.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://walmart.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://naver.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://instagram.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://guardian.co.uk",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://cnn.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://guardian.co.uk",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://facebook.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://zoom.us",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://reddit.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://nytimes.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://zoom.us",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://youtube.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://ebay.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://yahoo.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://reddit.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://zoom.us",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://bbc.co.uk",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://instagram.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://netflix.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://ebay.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://nytimes.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://twitter.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://pinterest.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://pinterest.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://netflix.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://cnn.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://guardian.co.uk",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://naver.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://naver.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://walmart.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://facebook.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://youtube.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://google.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://nytimes.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://twitter.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://youtube.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://wikipedia.org",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://zoom.us",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://twitter.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://nytimes.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://twitter.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://google.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://walmart.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://cnn.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://netflix.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://wikipedia.org",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://yahoo.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://ebay.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://ebay.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://walmart.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://guardian.co.uk",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://naver.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://pinterest.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://baidu.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://instagram.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://ebay.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://wikipedia.org",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://facebook.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://facebook.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://whatsapp.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://baidu.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://zoom.us",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://wikipedia.org",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://pinterest.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://netflix.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://netflix.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://baidu.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://google.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://zoom.us",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://walmart.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://facebook.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://naver.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://netflix.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://whatsapp.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://cnn.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://cnn.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://walmart.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://twitter.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://youtube.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://wikipedia.org",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://ebay.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://yahoo.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://netflix.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://twitter.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://facebook.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://youtube.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://netflix.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://youtube.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://reddit.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://twitter.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://pinterest.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://facebook.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://naver.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "https://wikipedia.org",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://instagram.com",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	},
	{
		image_url: "http://bbc.co.uk",
		brand: "",
		brand_description: "",
		price: "",
		striked_off_price: "",
		member_price: ""
	}
];

mensData.forEach(e => {
    let pbox = document.createElement("div");
    pbox.setAttribute("class","productbox");
    product.append(pbox);
    let image = document.createElement("img");
    image.setAttribute("src",e.image_url);
    pbox.append(image);
    let brand = document.createElement("p");
    brand.textContent = e.brand;
    let brand_description = document.createElement("p");
    brand_description.textContent =  e.brand_description;
    let price = document.createElement("p");
    price.textContent= e.price;
    let striked_off_price = document.createElement("p")
    striked_off_price.textContent= e.striked_off_price;
    let member_price = document.createElement("p");
    member_price.textContent= e.member_price;
    pbox.append(image,brand,brand_description,price,striked_off_price,member_price);

});