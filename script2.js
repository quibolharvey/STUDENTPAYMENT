function calculateTotal() {
    
    const name = document.getElementById("name").value;
    const tuition = parseFloat(document.getElementById("tuition").value);
    const miscellaneous = parseFloat(document.getElementById("miscellaneous").value);
    const others = parseFloat(document.getElementById("others").value);
  
    const total = tuition + miscellaneous + others;
  
    document.getElementById("display-name").innerText = `Name: ${name}`;
    document.getElementById("display-tuition").innerText = `Tuition Fee: ₱${tuition.toFixed(2)}`;
    document.getElementById("display-miscellaneous").innerText = `Miscellaneous: ₱${miscellaneous.toFixed(2)}`;
    document.getElementById("display-others").innerText = `Others: ₱${others.toFixed(2)}`;
    document.getElementById("total").innerText = `Total: ₱${total.toFixed(2)}`;
  }
  