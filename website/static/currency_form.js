function validateForm(event) {
    const validValues = [
      "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTC", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLF", "CLP", "CNH", "CNY", "COP", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STD", "STN", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VEF", "VES", "VND", "VUV", "WST", "XAF", "XAG" ] 
  
    const baseInput = document.querySelector('#base_currency')
    const targetInput = document.querySelector('#target_currency')
  
    for (let i = 0; i < validValues.length; i++) {
      if (!validValues.includes(baseInput.value)) {
        // Display error message
        const errorMessage = document.createElement('span');
        errorMessage.innerHTML = 'Invalid input';
        errorMessage.style.color = 'red';
        baseInput.parentNode.appendChild(errorMessage);
  
        // Prevent form submission
        event.preventDefault();
        return false;
      }
    } 
  for (let i = 0; i < validValues.length; i++) {
      if (!validValues.includes(targetInput.value)) {
        // Display error message
        const errorMessage = document.createElement('span');
        errorMessage.innerHTML = 'Invalid input';
        errorMessage.style.color = 'red';
        targetInput.parentNode.appendChild(errorMessage);
  
        // Prevent form submission
        event.preventDefault();
        return false;
      }
    }
    return true; // All inputs are valid, allow form submission
  }