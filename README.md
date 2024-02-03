# Crypto Coin App

**How does my project look**


![crypto coin](https://github.com/kaplanh/Crypto-Coin-App/assets/101884444/1a915930-c879-4cce-8eb0-faf656e03bbe)

[Live link!](https://kaplanh.github.io/Crypto-Coin-App/)


 **What's used in this app ?** | **How to run ?** | **Author** |
|----------|---------|------------
|Api-Server | Once you clone the project|[Take a look at my portfolio](https://kaplanh.github.io/Portfolio_with_CssFlex/)|
|Html| open index.html with Go Live in vs cod|[Visit me on Linkedin](https://www.linkedin.com/in/kaplan-h/)|
|Css||   
|Javascript |  |
  

**What is this project about ?**




## Project Skeleton 

```
Crypto Coin App (folder)
|
|----img (folder)
|----index.html
|----css (folder)
       |----style.css
|----crypto.js
|----js (folder)
       |----aes.css
       |----Extentions-custom-main.css
|----readme.md                        

```

### At the end of the project, the following topics are to be covered;

- API's
  - [Coinranking API ](https://developers.coinranking.com/api)
- HTML
  - semantic-elements
   ~~~html
      <center>
          <h1 class="heading">Crypto Coin App</h1>
      </center>
   ~~~
   ~~~html
     <small>Coded by <span>❤</span>FullStack Team</a></small>
   ~~~
   ~~~html
     <figure>
       <img class="coin-icon" src=${iconUrl}>                
       <figcaption style='color:${change < 0 ? "red" : "green"}'>
         <span><i class="fa-solid fa-chart-line"></i></span>
         <span>${change}%</span>
      </figcaption>
    </figure>
   ~~~
- CSS
  -grid
  - z-index
  - position [^p]
    [^p]:div'in sag üst kösesine carpi butonu koymak icin
   ~~~css
        .top-banner form {
        position: relative;
        display: flex;
        align-items: center;
      }
    
       .remove-icon {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 20px;
        cursor: pointer;
      }

   ~~~
 
  
- js
   -  EncryptStringAES
   -  DecryptStringAES
       ```
       <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Crypto Coin App</title>         
          <script src="js/aes.js"></script>
          <script src="js/Extentions-custom-main.js"></script>
          
        </head>
       
       //js/Extentions-custom-main.js
       function EncryptStringAES(text) {
            if (text != null) {
                var key = CryptoJS.enc.Utf8.parse("8080808080808080");
                var iv = CryptoJS.enc.Utf8.parse("8080808080808080");

              var encryptedstr = CryptoJS.AES.encrypt(
                  CryptoJS.enc.Utf8.parse(text),
                  key,
                  {
                keySize: 128,
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7,
            }
        );
        return encryptedstr;
          } else {
              return "";
          }
        }

        function DecryptStringAES(text) {
            if (text != null) {
                var key = CryptoJS.enc.Utf8.parse("8080808080808080");
                var iv = CryptoJS.enc.Utf8.parse("8080808080808080");

        const crypted = CryptoJS.enc.Base64.parse(text);

        var decryptedstr = CryptoJS.AES.decrypt({ ciphertext: crypted }, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        });
        return decryptedstr.toString(CryptoJS.enc.Utf8);
            } else {
            }
        }
       ```
   -  Axios

      ```
             //index.html
            <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Crypto Coin App</title>
              
              <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
          </head>

           //crypto.js
           const response = await axios(url, options);
          
         ```
   -  template literal(2015 ES-6 ile gelmistir ` ${...} `
     
     ```
           const url = `https://api.coinranking.com/v2/coins?search=${input.value}&limit=1`;

     ```
   -   style class ekleme
       ```
       <figcaption style='color:${change < 0 ? "red" : "green"}'>
       ```
     
   -  prepend() :son ekleneni basa yazdirir
         ```
         coinList.prepend(createdLi);

         ```
   - async-await
     
   - DOM Manipulations
     - innerHTML
     
  - DOM Selectors
  - Events
    - submit
    - click
    -  load
 
   - Array Methods
      - forEach() &  filter()

     ```
            if (coinNameSpans.length > 0) {//kart yoksa bosuna filter islemi yapmasin diye
            const filteredArray = [...coinNameSpans].filter(
                (span) => span.innerText == name
            );
       ```




## Feedback and Collaboration
I value your feedback and suggestions. If you have any comments, questions, or ideas for improvement regarding this project or any of my other projects, please don't hesitate to reach out.
I'm always open to collaboration and welcome the opportunity to work on exciting projects together.
Thank you for visiting my project. I hope you have a wonderful experience exploring it, and I look forward to connecting with you soon!



<p align="center"> ⌛<strong> Happy Coding </strong> ✍ </p>






























<div id="user-content-toc">
  <ul align="left">
    <summary><h1 style="display: inline-block">Rest-Countries App</h1></summary>
  </ul>
</div>

<table>
   <thead>
        <tr>
            <th>What's used in this app ?</th>
            <th>How to run ?</th>
            <th>Author</th>
        </tr>
    </thead>
  <tbody>
  <tr>
    <td> 
      <li> Javascript  
      <li> Css
      <li> Bootstrap
      <li> Html
      <li> Api-Server
    </td>
    <td>  <h4>Once you clone the project</h4>  
      
 1) open index.html with Go Live in vs code


   </td>
    <td> <li> <a href="" target="_blank">Take a look at my other projects</a> <li> <a href="https://www.linkedin.com/in/kaplan-h/" target="_blank">Visit me on Linkedin</a> 
  </tr>
  <tr>
    <td colspan="3"><h3>What is this project about ?</h3> 
<p>
In this project user can get any current country detail from certain api-server and can find a link which takes the user google map.
</p>
    </td>
  </tr>
      </tbody>
</table>



<div id="user-content-toc">
  <ul align="left">
    <summary><h2>How does my project look</h2></summary>
  </ul>
</div>


[Live Link](https://kaplanh.github.io/country-app/)

![countries](https://github.com/AliDurul/Rest-Countries/assets/80897590/63ab9153-6477-443d-a1bd-5c0f07a088f8)

<div id="user-content-toc">
  <ul align="left">
    <summary><h2>Feedback and Collaboration</h2></summary>
  </ul>
</div>
I value your feedback and suggestions. If you have any comments, questions, or ideas for improvement regarding this project or any of my other projects, please don't hesitate to reach out.<br>
I'm always open to collaboration and welcome the opportunity to work on exciting projects together.<br>
Thank you for visiting my project. I hope you have a wonderful experience exploring it, and I look forward to connecting with you soon!


<p align="center"> ⌛<strong> Happy Coding </strong> ✍ </p>



# Checkout_Page


![checkoutpage](https://github.com/kaplanh/Checkout_Page/assets/101884444/5cfce62d-d646-4ca7-8f0c-d7a58be1d7b3)


[Click Me!](https://kaplanh.github.io/Checkout_Page/)

## Description

The project aims to create a Checkout App using JS and Bootstrap.

## Problem Statement

- Your company has recently started on a project that aims to create a Checkout Page. So you and your colleagues have started to work on the project.

## Project Skeleton 

```
Checkout Page (folder)
|
|----readme.md                        
|----index.html
|----checkout.js
|----img (folder)
|----css (folder)
     |----index.css
     |----checkout.css
     |----universal.css

``` 


### At the end of the project, the following topics are to be covered;

- HTML
  - select
  - strong
  - del
   ```

 - CSS
 - Nested CSS
 - text-decoration: line-through
 ```
    .nav__list--btn {
    color: orangered;
    font-size: 14px;
    cursor: pointer;

    & i:hover {
        color: white;
        border-radius: 50%;
        background-color: #ff7623;
    }
    }

.line-through {
    text-decoration: line-through;
}
   
   ```

  
  
- JS
  - DOM Manipulations
    - innerHTML
    - innerText
    - textContent
     
  - DOM Selectors
  - querySelector
  - querySelectorAll
  - const productList = document.querySelector("div.main__product-painel"); //?basina div yazarak belirtirsek performans acisindan daha hizli olur
    
  - Events
    - click
    - load
  
  -e.target & e.currentTarget
    ```
         e.currentTarget.firstElementChild.innerText = "My Cart";
        //? NOT:e.target tiklanan elementi verirken e.currentTarget sabittir ve addEventListener in tanimlandigi elemandir burda navbarList  ve daha hizlidir
    ```
  - Capturing & Bubbling
  - DOM Traversing
    - nextElementSibling
    - e.target.closest(".main__product-info"
    - if (e.target.classList.contains("fa-plus"))
    - e.target.previousElementSibling.innerText++;
    - firstElementChild
    - children
   
  - localStorage & sessionStorage
 
  
  - Array Methods
  - forEach() & reduce()
     ```
    productTotalPriceDivs.forEach(eachProductTotalPriceDiv => {
        subtotal += parseFloat(eachProductTotalPriceDiv.innerText)
    });
    ```
 
      ```
    reduce()
    const subTotalAlternatif = [...productPriceDivs]; //reduce icin array a dönüstürmeliyiz
    let subtotal = subTotalAlternatif.reduce((acc, curr) => {
        return acc + parseFloat(curr.innerText); //parseFloat  stringten float yapar
    }, 0);

    ```
  
  - parseFloat
    ```
    const taxPrice = parseFloat(subtotal * localStorage.getItem("taxRate")); parseFloat  stringten float yapar

    ```

  
  - if else - if - else  conditions
  - Ternary
    ```
    let shipping = (subtotal > 0 ? parseFloat(localStorage.getItem("shippingPrice")) : 0);

    ```
 
 
     

  - String Methods( toFixed() )
   ```
   productTotalPriceDiv.innerText = (productQuantity * productPrice).toFixed(2);
  ```

    

### At the end of the project, developers will be able to;

- improve coding skills within HTML, CSS and JS 

- use git commands (push, pull, commit, add etc.) and Github as a Version Control System.


## Notes

- You can use HTML, CSS and JS to complete this project.









