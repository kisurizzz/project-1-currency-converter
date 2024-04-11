let country_array = {
    "AED" : "AE",
    "AFN" : "AF",
    "XCD" : "AG",
    "ALL" : "AL",
    "AMD" : "AM",
    "ANG" : "AN",
    "AOA" : "AO",
    "AQD" : "AQ",
    "ARS" : "AR",
    "AUD" : "AU",
    "AZN" : "AZ",
    "BAM" : "BA",
    "BBD" : "BB",
    "BDT" : "BD",
    "XOF" : "BE",
    "BGN" : "BG",
    "BHD" : "BH",
    "BIF" : "BI",
    "BMD" : "BM",
    "BND" : "BN",
    "BOB" : "BO",
    "BRL" : "BR",
    "BSD" : "BS",
    "NOK" : "BV",
    "BWP" : "BW",
    "BYR" : "BY",
    "BZD" : "BZ",
    "CAD" : "CA",
    "CDF" : "CD",
    "XAF" : "CF",
    "CHF" : "CH",
    "CLP" : "CL",
    "CNY" : "CN",
    "COP" : "CO",
    "CRC" : "CR",
    "CUP" : "CU",
    "CVE" : "CV",
    "CYP" : "CY",
    "CZK" : "CZ",
    "DJF" : "DJ",
    "DKK" : "DK",
    "DOP" : "DO",
    "DZD" : "DZ",
    "ECS" : "EC",
    "EEK" : "EE",
    "EGP" : "EG",
    "ETB" : "ET",
    "EUR" : "FR",
    "FJD" : "FJ",
    "FKP" : "FK",
    "GBP" : "GB",
    "GEL" : "GE",
    "GGP" : "GG",
    "GHS" : "GH",
    "GIP" : "GI",
    "GMD" : "GM",
    "GNF" : "GN",
    "GTQ" : "GT",
    "GYD" : "GY",
    "HKD" : "HK",
    "HNL" : "HN",
    "HRK" : "HR",
    "HTG" : "HT",
    "HUF" : "HU",
    "IDR" : "ID",
    "ILS" : "IL",
    "INR" : "IN",
    "IQD" : "IQ",
    "IRR" : "IR",
    "ISK" : "IS",
    "JMD" : "JM",
    "JOD" : "JO",
    "JPY" : "JP",
    "KES" : "KE",
    "KGS" : "KG",
    "KHR" : "KH",
    "KMF" : "KM",
    "KPW" : "KP",
    "KRW" : "KR",
    "KWD" : "KW",
    "KYD" : "KY",
    "KZT" : "KZ",
    "LAK" : "LA",
    "LBP" : "LB",
    "LKR" : "LK",
    "LRD" : "LR",
    "LSL" : "LS",
    "LTL" : "LT",
    "LVL" : "LV",
    "LYD" : "LY",
    "MAD" : "MA",
    "MDL" : "MD",
    "MGA" : "MG",
    "MKD" : "MK",
    "MMK" : "MM",
    "MNT" : "MN",
    "MOP" : "MO",
    "MRO" : "MR",
    "MTL" : "MT",
    "MUR" : "MU",
    "MVR" : "MV",
    "MWK" : "MW",
    "MXN" : "MX",
    "MYR" : "MY",
    "MZN" : "MZ",
    "NAD" : "NA",
    "XPF" : "NC",
    "NGN" : "NG",
    "NIO" : "NI",
    "NPR" : "NP",
    "NZD" : "NZ",
    "OMR" : "OM",
    "PAB" : "PA",
    "PEN" : "PE",
    "PGK" : "PG",
    "PHP" : "PH",
    "PKR" : "PK",
    "PLN" : "PL",
    "PYG" : "PY",
    "QAR" : "QA",
    "RON" : "RO",
    "RSD" : "RS",
    "RUB" : "RU",
    "RWF" : "RW",
    "SAR" : "SA",
    "SBD" : "SB",
    "SCR" : "SC",
    "SDG" : "SD",
    "SEK" : "SE",
    "SGD" : "SG",
    "SKK" : "SK",
    "SLL" : "SL",
    "SOS" : "SO",
    "SRD" : "SR",
    "STD" : "ST",
    "SVC" : "SV",
    "SYP" : "SY",
    "SZL" : "SZ",
    "THB" : "TH",
    "TJS" : "TJ",
    "TMT" : "TM",
    "TND" : "TN",
    "TOP" : "TO",
    "TRY" : "TR",
    "TTD" : "TT",
    "TWD" : "TW",
    "TZS" : "TZ",
    "UAH" : "UA",
    "UGX" : "UG",
    "USD" : "US",
    "UYU" : "UY",
    "UZS" : "UZ",
    "VEF" : "VE",
    "VND" : "VN",
    "VUV" : "VU",
    "YER" : "YE",
    "ZAR" : "ZA",
    "ZMK" : "ZM",
    "ZWD" : "ZW"
}

document.addEventListener('DOMContentLoaded', function (){

const dropDown = document.querySelectorAll('form select')
const convertBtn = document.querySelector('#convertbutton')
const fromDropDown = document.querySelector('.from select')
const toDropDown = document.querySelector('.to select')
const submitBtn = document.querySelector('#commentButton')

submitBtn.addEventListener('click', e => {
    e.preventDefault()
    addComment()
})

convertBtn.addEventListener('click', e => {
    e.preventDefault()
    getExchangeRate()
})

window.addEventListener('load', () => {
    getExchangeRate()
    fetchComments()
})

const toCountry = toDropDown.value;
  getFlags(toDropDown, toCountry); // Pass both element and selected value


const currencyCodes = Object.keys(country_array);


// creating dropdowns from the country object
currencyCodes.forEach(function(currencyCode) {
  let country = country_array[currencyCode];
//   console.log("Currency Code:", currencyCode, "Country:", country);
  let option = document.createElement('option')
  option.value = currencyCode
  option.text = currencyCode;
  fromDropDown.add(option)
  toDropDown.appendChild(option.cloneNode(true));

  

dropDown.forEach(function(selectElement) {
    selectElement.addEventListener('change', e => {
      getFlags(e.target);
    });
  });

 
});

//setting these on default when the page loads up
fromDropDown.value = 'USD'
toDropDown.value = 'KES'



function getFlags (element){
    for (let code in country_array){
        if (code === element.value){
            let imgTag = element.parentElement.querySelector('img')
            imgTag.src = `https://flagcdn.com/48x36/${country_array[code].toLowerCase()}.png`
        }
    }
}



function getExchangeRate (){
    let amount = document.querySelector('form input')
    let textSummary = document.querySelector('form .exchangerate')
    let fromCurrency = fromDropDown.value
    let toCurrency = toDropDown.value
    console.log(fromCurrency)
    let amountValue = amount.value

    const baseURL = `https://open.er-api.com/v6/latest/${fromCurrency}`
    console.log(baseURL)

    

    if(amount.length != 0){
        fetch(baseURL)
        .then(res => res.json())
        .then(data => {
            let exchangeRate = data.rates[toCurrency]
            let amountAfterConversion = (exchangeRate * amountValue).toFixed(2)

            // Formatting the number with commas
          amountAfterConversion = amountAfterConversion.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

            console.log(amountAfterConversion)

            textSummary.innerText = `${amountValue} ${fromCurrency} = ${amountAfterConversion} ${toCurrency}`
        })
        .catch (() => {
            textSummary.innerText = 'Error making conversion'
        })
    }
}



function addComment(){
    let name =  document.querySelector('.comment-box input')
    let comments = document.querySelector('.comment-box textarea')
    let nameValue = name.value
    let commentsValue = comments.value
    
    console.log(nameValue)
    console.log(commentsValue)

    fetch('http://localhost:3000/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            'name': nameValue,
            'comment': commentsValue
            })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        name.value = ''; // Clear comment form after submission
        comments.value = '';
        fetchComments()
      })
      .catch(error => {
        console.error('Error submitting comment:', error);
        // Handle errors appropriately (e.g., display an error message)
        
    })

}






function fetchComments() {
    fetch('http://localhost:3000/comments') // Replace with your actual endpoint
      .then(response => response.json())
      .then(comments => {
        displayComments(comments); // Call function to display comments
      })
      .catch(error => {
        console.error('Error fetching comments:', error);
        // Handle errors appropriately (e.g., display an error message)
      });
  }
    



function displayComments(comments) {
    const commentRecords = document.querySelector('.commentrecords');
    commentRecords.innerHTML = ''; // Clear existing comments
  
    comments.forEach(comment => {
      const commentElement = document.createElement('div');
      commentElement.classList.add('indivdualcomments');
  
      const commentName = document.createElement('h4');
      commentName.textContent = comment.name + ' says:';

      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('delete-comment-btn')
      deleteBtn.textContent = 'Remove';
  
      const commentText = document.createElement('p');
      commentText.textContent = comment.comment;
  
      commentElement.appendChild(commentName);
      commentElement.appendChild(commentText);
      commentName.appendChild(deleteBtn);
  
      commentRecords.appendChild(commentElement);
    });
  }



  // function deleteComment (){
  //   let deleteBtn = document.createElement('button')
  //   deleteBtn.classList.add()
  //   deleteBtn.addEventListener('click', () => fetch('http://localhost:3000/comments', {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       'name': 
  //     })

  //   }))
  // }
  



})




